import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OpenAI from 'openai';

// Get OpenAI client
function getOpenAIClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is required');
  }

  return new OpenAI({
    apiKey,
    organization: process.env.OPENAI_ORG_ID
  });
}

// Tool definitions
export const openaiTools: Tool[] = [
  {
    name: 'openai_chat_completion',
    description: 'Generate chat completion using GPT models',
    inputSchema: {
      type: 'object',
      properties: {
        messages: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              role: { type: 'string', enum: ['system', 'user', 'assistant'] },
              content: { type: 'string' }
            },
            required: ['role', 'content']
          },
          description: 'Array of chat messages'
        },
        model: { type: 'string', description: 'GPT model to use', default: 'gpt-4' },
        temperature: { type: 'number', minimum: 0, maximum: 2, description: 'Sampling temperature', default: 0.7 },
        max_tokens: { type: 'number', minimum: 1, description: 'Maximum tokens in response' },
        stream: { type: 'boolean', description: 'Stream response', default: false }
      },
      required: ['messages']
    }
  },
  {
    name: 'openai_create_embedding',
    description: 'Create text embeddings using OpenAI embedding models',
    inputSchema: {
      type: 'object',
      properties: {
        text: { type: 'string', description: 'Text to create embeddings for' },
        model: { type: 'string', description: 'Embedding model', default: 'text-embedding-3-small' }
      },
      required: ['text']
    }
  },
  {
    name: 'openai_generate_image',
    description: 'Generate images using DALL-E',
    inputSchema: {
      type: 'object',
      properties: {
        prompt: { type: 'string', description: 'Image generation prompt' },
        model: { type: 'string', enum: ['dall-e-2', 'dall-e-3'], description: 'DALL-E model', default: 'dall-e-3' },
        size: { type: 'string', enum: ['256x256', '512x512', '1024x1024', '1792x1024', '1024x1792'], description: 'Image size', default: '1024x1024' },
        quality: { type: 'string', enum: ['standard', 'hd'], description: 'Image quality', default: 'standard' },
        n: { type: 'number', minimum: 1, maximum: 10, description: 'Number of images', default: 1 }
      },
      required: ['prompt']
    }
  },
  {
    name: 'openai_transcribe_audio',
    description: 'Transcribe audio using Whisper',
    inputSchema: {
      type: 'object',
      properties: {
        audio_base64: { type: 'string', description: 'Base64 encoded audio file' },
        filename: { type: 'string', description: 'Original filename for format detection' },
        model: { type: 'string', description: 'Whisper model', default: 'whisper-1' },
        language: { type: 'string', description: 'Audio language (ISO-639-1 code)' },
        response_format: { type: 'string', enum: ['json', 'text', 'srt', 'verbose_json', 'vtt'], default: 'json' }
      },
      required: ['audio_base64', 'filename']
    }
  },
  {
    name: 'openai_moderate_content',
    description: 'Check content for policy violations using moderation API',
    inputSchema: {
      type: 'object',
      properties: {
        text: { type: 'string', description: 'Text to moderate' },
        model: { type: 'string', description: 'Moderation model', default: 'text-moderation-latest' }
      },
      required: ['text']
    }
  },
  {
    name: 'openai_create_assistant',
    description: 'Create a new OpenAI Assistant',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Assistant name' },
        instructions: { type: 'string', description: 'Assistant instructions/prompt' },
        model: { type: 'string', description: 'GPT model to use', default: 'gpt-4' },
        tools: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: { type: 'string', enum: ['code_interpreter', 'retrieval', 'function'] }
            }
          },
          description: 'Tools available to assistant'
        }
      },
      required: ['name', 'instructions']
    }
  }
];

// Tool handler
export async function handleOpenAITool(name: string, args: any): Promise<any> {
  try {
    const openai = getOpenAIClient();

    switch (name) {
      case 'openai_chat_completion': {
        const { messages, model = 'gpt-4', temperature = 0.7, max_tokens, stream = false } = args;

        const completion = await openai.chat.completions.create({
          model,
          messages,
          temperature,
          ...(max_tokens && { max_tokens }),
          stream
        });

        if (stream) {
          // For streaming, we'd need to handle differently in a real implementation
          return {
            content: [{
              type: 'text',
              text: 'Streaming not supported in this implementation. Use stream: false.'
            }],
            isError: true
          };
        }

        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              success: true,
              model,
              usage: completion.usage,
              message: completion.choices[0]?.message?.content || '',
              finish_reason: completion.choices[0]?.finish_reason
            }, null, 2)
          }]
        };
      }

      case 'openai_create_embedding': {
        const { text, model = 'text-embedding-3-small' } = args;

        const embedding = await openai.embeddings.create({
          model,
          input: text
        });

        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              success: true,
              model,
              embedding: embedding.data[0]?.embedding || [],
              dimensions: embedding.data[0]?.embedding?.length || 0,
              usage: embedding.usage
            }, null, 2)
          }]
        };
      }

      case 'openai_generate_image': {
        const { prompt, model = 'dall-e-3', size = '1024x1024', quality = 'standard', n = 1 } = args;

        const image = await openai.images.generate({
          model,
          prompt,
          size: size as any,
          quality: quality as any,
          n
        });

        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              success: true,
              model,
              prompt,
              images: image.data?.map(img => ({
                url: img.url,
                revised_prompt: img.revised_prompt
              }))
            }, null, 2)
          }]
        };
      }

      case 'openai_transcribe_audio': {
        const { audio_base64, filename, model = 'whisper-1', language, response_format = 'json' } = args;

        // Convert base64 to buffer
        const audioBuffer = Buffer.from(audio_base64, 'base64');

        // Create a File-like object for the API
        const audioFile = new File([audioBuffer], filename, { type: 'audio/mpeg' });

        const transcription = await openai.audio.transcriptions.create({
          file: audioFile,
          model,
          ...(language && { language }),
          response_format: response_format as any
        });

        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              success: true,
              model,
              filename,
              response_format,
              transcription: typeof transcription === 'string' ? transcription : transcription.text
            }, null, 2)
          }]
        };
      }

      case 'openai_moderate_content': {
        const { text, model = 'text-moderation-latest' } = args;

        const moderation = await openai.moderations.create({
          input: text,
          model
        });

        const result = moderation.results[0];

        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              success: true,
              model,
              flagged: result?.flagged || false,
              categories: result?.categories || {},
              category_scores: result?.category_scores || {}
            }, null, 2)
          }]
        };
      }

      case 'openai_create_assistant': {
        const { name, instructions, model = 'gpt-4', tools = [] } = args;

        const assistant = await openai.beta.assistants.create({
          name,
          instructions,
          model,
          tools
        });

        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              success: true,
              assistant_id: assistant.id,
              name: assistant.name,
              model: assistant.model,
              instructions: assistant.instructions,
              tools: assistant.tools
            }, null, 2)
          }]
        };
      }

      default:
        return {
          content: [{ type: 'text', text: `Unknown OpenAI tool: ${name}` }],
          isError: true
        };
    }
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `OpenAI tool error: ${error instanceof Error ? error.message : 'Unknown error'}`
      }],
      isError: true
    };
  }
}