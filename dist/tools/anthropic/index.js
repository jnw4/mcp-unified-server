"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.anthropicTools = void 0;
exports.handleAnthropicTool = handleAnthropicTool;
const sdk_1 = __importDefault(require("@anthropic-ai/sdk"));
// Get Anthropic client
function getAnthropicClient() {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        throw new Error('ANTHROPIC_API_KEY environment variable is required');
    }
    return new sdk_1.default({
        apiKey
    });
}
// Tool definitions
exports.anthropicTools = [
    {
        name: 'anthropic_chat',
        description: 'Generate chat completion using Claude models',
        inputSchema: {
            type: 'object',
            properties: {
                messages: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            role: { type: 'string', enum: ['user', 'assistant'] },
                            content: { type: 'string' }
                        },
                        required: ['role', 'content']
                    },
                    description: 'Array of chat messages'
                },
                model: {
                    type: 'string',
                    description: 'Claude model to use',
                    default: 'claude-3-5-sonnet-20241022',
                    enum: ['claude-3-5-sonnet-20241022', 'claude-3-5-haiku-20241022', 'claude-3-opus-20240229']
                },
                system: { type: 'string', description: 'System prompt/instructions' },
                max_tokens: { type: 'number', minimum: 1, maximum: 8192, description: 'Maximum tokens in response', default: 4096 },
                temperature: { type: 'number', minimum: 0, maximum: 1, description: 'Sampling temperature', default: 0.7 },
                top_p: { type: 'number', minimum: 0, maximum: 1, description: 'Top-p sampling' },
                stop_sequences: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Stop sequences to end generation'
                }
            },
            required: ['messages']
        }
    },
    {
        name: 'anthropic_completion',
        description: 'Generate text completion using Claude (legacy completion format)',
        inputSchema: {
            type: 'object',
            properties: {
                prompt: { type: 'string', description: 'Text prompt for completion' },
                model: {
                    type: 'string',
                    description: 'Claude model to use',
                    default: 'claude-3-5-sonnet-20241022'
                },
                max_tokens: { type: 'number', minimum: 1, maximum: 8192, description: 'Maximum tokens in response', default: 4096 },
                temperature: { type: 'number', minimum: 0, maximum: 1, description: 'Sampling temperature', default: 0.7 },
                top_p: { type: 'number', minimum: 0, maximum: 1, description: 'Top-p sampling' },
                stop_sequences: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Stop sequences to end generation'
                }
            },
            required: ['prompt']
        }
    },
    {
        name: 'anthropic_count_tokens',
        description: 'Count tokens in text using Claude tokenizer',
        inputSchema: {
            type: 'object',
            properties: {
                text: { type: 'string', description: 'Text to count tokens for' },
                model: {
                    type: 'string',
                    description: 'Claude model for tokenization',
                    default: 'claude-3-5-sonnet-20241022'
                }
            },
            required: ['text']
        }
    },
    {
        name: 'anthropic_batch_create',
        description: 'Create a batch request for processing multiple prompts',
        inputSchema: {
            type: 'object',
            properties: {
                requests: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            custom_id: { type: 'string', description: 'Custom identifier for this request' },
                            messages: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        role: { type: 'string', enum: ['user', 'assistant'] },
                                        content: { type: 'string' }
                                    }
                                }
                            },
                            model: { type: 'string', default: 'claude-3-5-sonnet-20241022' },
                            max_tokens: { type: 'number', default: 4096 }
                        },
                        required: ['custom_id', 'messages']
                    },
                    description: 'Array of chat requests to batch'
                }
            },
            required: ['requests']
        }
    }
];
// Tool handler
async function handleAnthropicTool(name, args) {
    try {
        const anthropic = getAnthropicClient();
        switch (name) {
            case 'anthropic_chat': {
                const { messages, model = 'claude-3-5-sonnet-20241022', system, max_tokens = 4096, temperature = 0.7, top_p, stop_sequences } = args;
                const response = await anthropic.messages.create({
                    model,
                    messages,
                    max_tokens,
                    ...(system && { system }),
                    ...(temperature !== undefined && { temperature }),
                    ...(top_p !== undefined && { top_p }),
                    ...(stop_sequences && { stop_sequences })
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                model,
                                usage: response.usage,
                                message: response.content[0]?.type === 'text' ? response.content[0].text : '',
                                stop_reason: response.stop_reason,
                                stop_sequence: response.stop_sequence
                            }, null, 2)
                        }]
                };
            }
            case 'anthropic_completion': {
                const { prompt, model = 'claude-3-5-sonnet-20241022', max_tokens = 4096, temperature = 0.7, top_p, stop_sequences } = args;
                // Convert prompt to messages format
                const messages = [{ role: 'user', content: prompt }];
                const response = await anthropic.messages.create({
                    model,
                    messages: messages,
                    max_tokens,
                    ...(temperature !== undefined && { temperature }),
                    ...(top_p !== undefined && { top_p }),
                    ...(stop_sequences && { stop_sequences })
                });
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                model,
                                usage: response.usage,
                                completion: response.content[0]?.type === 'text' ? response.content[0].text : '',
                                stop_reason: response.stop_reason
                            }, null, 2)
                        }]
                };
            }
            case 'anthropic_count_tokens': {
                const { text, model = 'claude-3-5-sonnet-20241022' } = args;
                // Note: Anthropic SDK doesn't have a direct token counting method
                // This is an approximation - for accurate counting, you'd need to use their tokenizer
                const estimatedTokens = Math.ceil(text.length / 4); // Rough approximation
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                model,
                                text_length: text.length,
                                estimated_tokens: estimatedTokens,
                                note: 'This is an approximation. For exact token counts, use Anthropic\'s tokenizer library.'
                            }, null, 2)
                        }]
                };
            }
            case 'anthropic_batch_create': {
                const { requests } = args;
                // Note: Anthropic's batch API might have different implementation
                // This is a simulated batch processing for now
                const results = [];
                for (const request of requests) {
                    try {
                        const response = await anthropic.messages.create({
                            model: request.model || 'claude-3-5-sonnet-20241022',
                            messages: request.messages,
                            max_tokens: request.max_tokens || 4096
                        });
                        results.push({
                            custom_id: request.custom_id,
                            success: true,
                            response: {
                                content: response.content[0]?.type === 'text' ? response.content[0].text : '',
                                usage: response.usage,
                                stop_reason: response.stop_reason
                            }
                        });
                    }
                    catch (error) {
                        results.push({
                            custom_id: request.custom_id,
                            success: false,
                            error: error instanceof Error ? error.message : 'Unknown error'
                        });
                    }
                }
                return {
                    content: [{
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                batch_size: requests.length,
                                completed: results.filter(r => r.success).length,
                                failed: results.filter(r => !r.success).length,
                                results
                            }, null, 2)
                        }]
                };
            }
            default:
                return {
                    content: [{ type: 'text', text: `Unknown Anthropic tool: ${name}` }],
                    isError: true
                };
        }
    }
    catch (error) {
        return {
            content: [{
                    type: 'text',
                    text: `Anthropic tool error: ${error instanceof Error ? error.message : 'Unknown error'}`
                }],
            isError: true
        };
    }
}
//# sourceMappingURL=index.js.map