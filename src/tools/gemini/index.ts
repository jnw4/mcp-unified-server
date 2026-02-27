import { Tool } from '@modelcontextprotocol/sdk/types.js';

const API_BASE = 'https://generativelanguage.googleapis.com';
const MODEL = 'gemini-2.0-flash';

const apiKey = () => {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error('GEMINI_API_KEY is not configured');
  return key;
};

// Tool definitions
export const geminiTools: Tool[] = [
  {
    name: 'gemini_upload_file',
    description: 'Upload a file to Gemini Files API for analysis',
    inputSchema: {
      type: 'object',
      properties: {
        content: { type: 'string', description: 'File content as base64 string' },
        mimeType: { type: 'string', description: 'MIME type (e.g., video/mp4, image/jpeg, text/plain)' },
        displayName: { type: 'string', description: 'Display name for the file' },
      },
      required: ['content', 'mimeType', 'displayName'],
    },
  },
  {
    name: 'gemini_generate_content',
    description: 'Generate content with Gemini (text-only or with file reference)',
    inputSchema: {
      type: 'object',
      properties: {
        prompt: { type: 'string', description: 'The prompt/question for Gemini' },
        systemInstruction: { type: 'string', description: 'Optional system instruction to guide behavior' },
        fileUri: { type: 'string', description: 'Optional Gemini file URI (from upload_file)' },
        fileMimeType: { type: 'string', description: 'MIME type of referenced file (if fileUri provided)' },
        temperature: { type: 'number', description: 'Creativity level 0-1 (default: 0)', minimum: 0, maximum: 1 },
        maxTokens: { type: 'number', description: 'Maximum response tokens (default: 8192)', minimum: 1, maximum: 8192 },
      },
      required: ['prompt'],
    },
  },
  {
    name: 'gemini_multiturn_chat',
    description: 'Have a multi-turn conversation with Gemini using chat history',
    inputSchema: {
      type: 'object',
      properties: {
        messages: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              role: { type: 'string', enum: ['user', 'model'], description: 'Message sender' },
              content: { type: 'string', description: 'Message content' },
            },
            required: ['role', 'content'],
          },
          description: 'Conversation history as array of messages',
        },
        systemInstruction: { type: 'string', description: 'Optional system instruction' },
        temperature: { type: 'number', description: 'Creativity level 0-1 (default: 0)', minimum: 0, maximum: 1 },
        maxTokens: { type: 'number', description: 'Maximum response tokens (default: 8192)', minimum: 1, maximum: 8192 },
      },
      required: ['messages'],
    },
  },
  {
    name: 'gemini_delete_file',
    description: 'Delete a file from Gemini Files API',
    inputSchema: {
      type: 'object',
      properties: {
        fileName: { type: 'string', description: 'Gemini file name (from upload response)' },
      },
      required: ['fileName'],
    },
  },
  {
    name: 'gemini_create_cached_content',
    description: 'Create cached content for reusing system instructions (optimization for repeated use)',
    inputSchema: {
      type: 'object',
      properties: {
        systemInstruction: { type: 'string', description: 'System instruction to cache' },
        ttlSeconds: { type: 'number', description: 'Cache TTL in seconds (default: 600 = 10min)', minimum: 60, maximum: 3600 },
      },
      required: ['systemInstruction'],
    },
  },
];

// Helper functions ported from client.ts
async function uploadFile(buffer: Buffer, mimeType: string, displayName: string): Promise<{ name: string; uri: string }> {
  // Step 1: Start resumable upload
  const initRes = await fetch(`${API_BASE}/upload/v1beta/files?key=${apiKey()}`, {
    method: 'POST',
    headers: {
      'X-Goog-Upload-Protocol': 'resumable',
      'X-Goog-Upload-Command': 'start',
      'X-Goog-Upload-Header-Content-Length': String(buffer.length),
      'X-Goog-Upload-Header-Content-Type': mimeType,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      file: { display_name: displayName },
    }),
  });

  if (!initRes.ok) {
    const errText = await initRes.text();
    throw new Error(`Gemini upload init failed (${initRes.status}): ${errText}`);
  }

  const uploadUrl = initRes.headers.get('X-Goog-Upload-URL');
  if (!uploadUrl) throw new Error('Failed to get upload URL from Gemini');

  // Step 2: Upload the bytes
  const uploadRes = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      'X-Goog-Upload-Offset': '0',
      'X-Goog-Upload-Command': 'upload, finalize',
      'Content-Length': String(buffer.length),
    },
    body: new Uint8Array(buffer),
  });

  if (!uploadRes.ok) {
    const text = await uploadRes.text();
    throw new Error(`Gemini file upload failed: ${text}`);
  }

  const { file } = (await uploadRes.json()) as { file: any };

  // Step 3: Wait for file to become ACTIVE
  let fileState = file;
  let attempts = 0;
  while (fileState.state === 'PROCESSING' && attempts < 30) {
    await new Promise(r => setTimeout(r, 2000));
    const statusRes = await fetch(`${API_BASE}/v1beta/${fileState.name}?key=${apiKey()}`);
    fileState = await statusRes.json();
    attempts++;
  }

  if (fileState.state !== 'ACTIVE') {
    throw new Error(`File did not become active: ${fileState.state} - ${fileState.error?.message ?? 'unknown error'}`);
  }

  return { name: fileState.name, uri: fileState.uri };
}

async function generateContent(opts: {
  prompt: string;
  systemInstruction?: string;
  fileUri?: string;
  fileMimeType?: string;
  temperature?: number;
  maxTokens?: number;
}): Promise<string> {
  const parts: Array<Record<string, unknown>> = [];

  if (opts.fileUri) {
    parts.push({
      file_data: {
        mime_type: opts.fileMimeType ?? 'video/mp4',
        file_uri: opts.fileUri,
      },
    });
  }

  parts.push({ text: opts.prompt });

  const body: Record<string, unknown> = {
    contents: [{ parts }],
    generationConfig: {
      temperature: opts.temperature ?? 0,
      maxOutputTokens: opts.maxTokens ?? 8192,
    },
  };

  if (opts.systemInstruction) {
    body.system_instruction = {
      parts: [{ text: opts.systemInstruction }],
    };
  }

  const res = await fetch(`${API_BASE}/v1beta/models/${MODEL}:generateContent?key=${apiKey()}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gemini generateContent failed (${res.status}): ${text}`);
  }

  const data = (await res.json()) as any;
  const text = data.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? '').join('') ?? '';

  if (!text) {
    throw new Error(`Gemini returned no content: ${JSON.stringify(data.candidates?.[0]?.finishReason)}`);
  }

  return text;
}

// Tool handler
export async function handleGeminiTool(name: string, args: any): Promise<any> {
  try {
    switch (name) {
      case 'gemini_upload_file': {
        const { content, mimeType, displayName } = args;
        const buffer = Buffer.from(content, 'base64');

        const result = await uploadFile(buffer, mimeType, displayName);

        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              success: true,
              fileName: result.name,
              fileUri: result.uri,
              displayName,
              mimeType,
              size: buffer.length,
              status: 'ACTIVE'
            }, null, 2)
          }]
        };
      }

      case 'gemini_generate_content': {
        const { prompt, systemInstruction, fileUri, fileMimeType, temperature, maxTokens } = args;

        const response = await generateContent({
          prompt,
          systemInstruction,
          fileUri,
          fileMimeType,
          temperature,
          maxTokens,
        });

        return {
          content: [{ type: 'text', text: response }]
        };
      }

      case 'gemini_multiturn_chat': {
        const { messages, systemInstruction, temperature, maxTokens } = args;

        // Convert messages format
        const contents = messages.map((msg: any) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        }));

        const body: Record<string, unknown> = {
          contents,
          generationConfig: {
            temperature: temperature ?? 0,
            maxOutputTokens: maxTokens ?? 8192,
          },
        };

        if (systemInstruction) {
          body.system_instruction = {
            parts: [{ text: systemInstruction }],
          };
        }

        const res = await fetch(`${API_BASE}/v1beta/models/${MODEL}:generateContent?key=${apiKey()}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Gemini multiturn failed (${res.status}): ${text}`);
        }

        const data = (await res.json()) as any;
        const text = data.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? '').join('') ?? '';

        if (!text) {
          throw new Error(`Gemini returned no content: ${JSON.stringify(data.candidates?.[0]?.finishReason)}`);
        }

        return {
          content: [{ type: 'text', text }]
        };
      }

      case 'gemini_delete_file': {
        const { fileName } = args;

        await fetch(`${API_BASE}/v1beta/${fileName}?key=${apiKey()}`, {
          method: 'DELETE',
        });

        return {
          content: [{
            type: 'text',
            text: JSON.stringify({ success: true, fileName, action: 'deleted' }, null, 2)
          }]
        };
      }

      case 'gemini_create_cached_content': {
        const { systemInstruction, ttlSeconds = 600 } = args;

        const res = await fetch(`${API_BASE}/v1beta/cachedContents?key=${apiKey()}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: `models/${MODEL}`,
            system_instruction: {
              parts: [{ text: systemInstruction }],
            },
            ttl: `${ttlSeconds}s`,
          }),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Cache creation failed (${res.status}): ${text}`);
        }

        const data = (await res.json()) as any;

        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              success: true,
              cacheName: data.name,
              ttlSeconds,
              expiresAt: new Date(Date.now() + ttlSeconds * 1000).toISOString()
            }, null, 2)
          }]
        };
      }

      default:
        return {
          content: [{ type: 'text', text: `Unknown Gemini tool: ${name}` }],
          isError: true,
        };
    }
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Gemini tool error: ${error instanceof Error ? error.message : 'Unknown error'}`
      }],
      isError: true,
    };
  }
}