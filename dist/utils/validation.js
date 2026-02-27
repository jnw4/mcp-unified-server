"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenPayloadSchema = exports.mcpRequestSchema = exports.callToolRequestSchema = exports.listToolsRequestSchema = exports.envSchema = void 0;
exports.validateEnvironment = validateEnvironment;
exports.validateMCPRequest = validateMCPRequest;
exports.validateTokenPayload = validateTokenPayload;
const zod_1 = require("zod");
const errors_1 = require("./errors");
// Environment validation schema
exports.envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(['development', 'production', 'test']).default('development'),
    MCP_PORT: zod_1.z.string().transform(Number).pipe(zod_1.z.number().min(1).max(65535)).default("3000"),
    MCP_AUTH_SECRET: zod_1.z.string().min(32, 'Auth secret must be at least 32 characters'),
    // Snowflake (required)
    SNOWFLAKE_ACCOUNT: zod_1.z.string().min(1),
    SNOWFLAKE_USER: zod_1.z.string().min(1),
    SNOWFLAKE_WAREHOUSE: zod_1.z.string().default('Developer'),
    SNOWFLAKE_DATABASE: zod_1.z.string().default('PurePlay'),
    SNOWFLAKE_AUTHENTICATOR: zod_1.z.string().default('externalbrowser'),
    SNOWFLAKE_PRIVATE_KEY_PATH: zod_1.z.string().optional(),
    // QBO OAuth
    QBO_CLIENT_ID: zod_1.z.string().optional(),
    QBO_CLIENT_SECRET: zod_1.z.string().optional(),
    QBO_REDIRECT_URI: zod_1.z.string().url().optional(),
    // Ramp
    RAMP_CLIENT_ID: zod_1.z.string().optional(),
    RAMP_CLIENT_SECRET: zod_1.z.string().optional(),
    // Google APIs
    GOOGLE_APPLICATION_CREDENTIALS: zod_1.z.string().optional(),
    GOOGLE_CLIENT_EMAIL: zod_1.z.string().email().optional(),
    GOOGLE_WRITE_PRIVATE_KEY: zod_1.z.string().optional(),
    // AWS
    AWS_REGION: zod_1.z.string().default('us-east-2'),
    AWS_S3_BUCKET: zod_1.z.string().optional(),
    AWS_S3_PREFIX: zod_1.z.string().optional(),
    AWS_ACCESS_KEY_ID: zod_1.z.string().optional(),
    AWS_SECRET_ACCESS_KEY: zod_1.z.string().optional(),
    // Gemini
    GEMINI_API_KEY: zod_1.z.string().optional()
});
// MCP request schemas
exports.listToolsRequestSchema = zod_1.z.object({
    method: zod_1.z.literal('tools/list'),
    params: zod_1.z.object({}).optional()
});
exports.callToolRequestSchema = zod_1.z.object({
    method: zod_1.z.literal('tools/call'),
    params: zod_1.z.object({
        name: zod_1.z.string(),
        arguments: zod_1.z.record(zod_1.z.unknown()).optional()
    })
});
exports.mcpRequestSchema = zod_1.z.discriminatedUnion('method', [
    exports.listToolsRequestSchema,
    exports.callToolRequestSchema
]);
// Token payload schema
exports.tokenPayloadSchema = zod_1.z.object({
    sub: zod_1.z.string(), // user identifier
    role: zod_1.z.enum(['admin', 'analyst', 'finance', 'readonly']),
    iat: zod_1.z.number(), // issued at
    exp: zod_1.z.number(), // expires at
    iss: zod_1.z.string().default('mcp-unified-server')
});
// Validation helpers
function validateEnvironment() {
    try {
        return exports.envSchema.parse(process.env);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            const messages = error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
            throw new errors_1.ValidationError(`Environment validation failed:\n${messages.join('\n')}`);
        }
        throw error;
    }
}
function validateMCPRequest(data) {
    try {
        return exports.mcpRequestSchema.parse(data);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            const messages = error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
            throw new errors_1.ValidationError(`MCP request validation failed: ${messages.join(', ')}`);
        }
        throw error;
    }
}
function validateTokenPayload(payload) {
    try {
        return exports.tokenPayloadSchema.parse(payload);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            throw new errors_1.ValidationError('Invalid token payload');
        }
        throw error;
    }
}
//# sourceMappingURL=validation.js.map