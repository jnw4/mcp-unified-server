import { z } from 'zod';
import { ValidationError } from './errors';

// Environment validation schema
export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  MCP_PORT: z.string().transform(Number).pipe(z.number().min(1).max(65535)).default("3000"),
  MCP_AUTH_SECRET: z.string().min(32, 'Auth secret must be at least 32 characters'),

  // Snowflake (required)
  SNOWFLAKE_ACCOUNT: z.string().min(1),
  SNOWFLAKE_USER: z.string().min(1),
  SNOWFLAKE_WAREHOUSE: z.string().default('Developer'),
  SNOWFLAKE_DATABASE: z.string().default('PurePlay'),
  SNOWFLAKE_AUTHENTICATOR: z.string().default('externalbrowser'),
  SNOWFLAKE_PRIVATE_KEY_PATH: z.string().optional(),

  // QBO OAuth
  QBO_CLIENT_ID: z.string().optional(),
  QBO_CLIENT_SECRET: z.string().optional(),
  QBO_REDIRECT_URI: z.string().url().optional(),

  // Ramp
  RAMP_CLIENT_ID: z.string().optional(),
  RAMP_CLIENT_SECRET: z.string().optional(),

  // Google APIs
  GOOGLE_APPLICATION_CREDENTIALS: z.string().optional(),
  GOOGLE_CLIENT_EMAIL: z.string().email().optional(),
  GOOGLE_WRITE_PRIVATE_KEY: z.string().optional(),

  // AWS
  AWS_REGION: z.string().default('us-east-2'),
  AWS_S3_BUCKET: z.string().optional(),
  AWS_S3_PREFIX: z.string().optional(),
  AWS_ACCESS_KEY_ID: z.string().optional(),
  AWS_SECRET_ACCESS_KEY: z.string().optional(),

  // Gemini
  GEMINI_API_KEY: z.string().optional()
});

export type Environment = z.infer<typeof envSchema>;

// MCP request schemas
export const listToolsRequestSchema = z.object({
  method: z.literal('tools/list'),
  params: z.object({}).optional()
});

export const callToolRequestSchema = z.object({
  method: z.literal('tools/call'),
  params: z.object({
    name: z.string(),
    arguments: z.record(z.unknown()).optional()
  })
});

export const mcpRequestSchema = z.discriminatedUnion('method', [
  listToolsRequestSchema,
  callToolRequestSchema
]);

// Token payload schema
export const tokenPayloadSchema = z.object({
  sub: z.string(), // user identifier
  role: z.enum(['admin', 'analyst', 'finance', 'readonly']),
  iat: z.number(), // issued at
  exp: z.number(), // expires at
  iss: z.string().default('mcp-unified-server')
});

export type TokenPayload = z.infer<typeof tokenPayloadSchema>;

// Validation helpers
export function validateEnvironment(): Environment {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const messages = error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
      throw new ValidationError(`Environment validation failed:\n${messages.join('\n')}`);
    }
    throw error;
  }
}

export function validateMCPRequest(data: unknown) {
  try {
    return mcpRequestSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const messages = error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
      throw new ValidationError(`MCP request validation failed: ${messages.join(', ')}`);
    }
    throw error;
  }
}

export function validateTokenPayload(payload: unknown): TokenPayload {
  try {
    return tokenPayloadSchema.parse(payload);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Invalid token payload');
    }
    throw error;
  }
}