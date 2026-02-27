import { z } from 'zod';
export declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<["development", "production", "test"]>>;
    MCP_PORT: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
    MCP_AUTH_SECRET: z.ZodString;
    SNOWFLAKE_ACCOUNT: z.ZodString;
    SNOWFLAKE_USER: z.ZodString;
    SNOWFLAKE_WAREHOUSE: z.ZodDefault<z.ZodString>;
    SNOWFLAKE_DATABASE: z.ZodDefault<z.ZodString>;
    SNOWFLAKE_AUTHENTICATOR: z.ZodDefault<z.ZodString>;
    SNOWFLAKE_PRIVATE_KEY_PATH: z.ZodOptional<z.ZodString>;
    QBO_CLIENT_ID: z.ZodOptional<z.ZodString>;
    QBO_CLIENT_SECRET: z.ZodOptional<z.ZodString>;
    QBO_REDIRECT_URI: z.ZodOptional<z.ZodString>;
    RAMP_CLIENT_ID: z.ZodOptional<z.ZodString>;
    RAMP_CLIENT_SECRET: z.ZodOptional<z.ZodString>;
    GOOGLE_APPLICATION_CREDENTIALS: z.ZodOptional<z.ZodString>;
    GOOGLE_CLIENT_EMAIL: z.ZodOptional<z.ZodString>;
    GOOGLE_WRITE_PRIVATE_KEY: z.ZodOptional<z.ZodString>;
    AWS_REGION: z.ZodDefault<z.ZodString>;
    AWS_S3_BUCKET: z.ZodOptional<z.ZodString>;
    AWS_S3_PREFIX: z.ZodOptional<z.ZodString>;
    AWS_ACCESS_KEY_ID: z.ZodOptional<z.ZodString>;
    AWS_SECRET_ACCESS_KEY: z.ZodOptional<z.ZodString>;
    GEMINI_API_KEY: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    NODE_ENV: "development" | "production" | "test";
    MCP_PORT: number;
    MCP_AUTH_SECRET: string;
    SNOWFLAKE_ACCOUNT: string;
    SNOWFLAKE_USER: string;
    SNOWFLAKE_WAREHOUSE: string;
    SNOWFLAKE_DATABASE: string;
    SNOWFLAKE_AUTHENTICATOR: string;
    AWS_REGION: string;
    SNOWFLAKE_PRIVATE_KEY_PATH?: string | undefined;
    QBO_CLIENT_ID?: string | undefined;
    QBO_CLIENT_SECRET?: string | undefined;
    QBO_REDIRECT_URI?: string | undefined;
    RAMP_CLIENT_ID?: string | undefined;
    RAMP_CLIENT_SECRET?: string | undefined;
    GOOGLE_APPLICATION_CREDENTIALS?: string | undefined;
    GOOGLE_CLIENT_EMAIL?: string | undefined;
    GOOGLE_WRITE_PRIVATE_KEY?: string | undefined;
    AWS_S3_BUCKET?: string | undefined;
    AWS_S3_PREFIX?: string | undefined;
    AWS_ACCESS_KEY_ID?: string | undefined;
    AWS_SECRET_ACCESS_KEY?: string | undefined;
    GEMINI_API_KEY?: string | undefined;
}, {
    MCP_AUTH_SECRET: string;
    SNOWFLAKE_ACCOUNT: string;
    SNOWFLAKE_USER: string;
    NODE_ENV?: "development" | "production" | "test" | undefined;
    MCP_PORT?: string | undefined;
    SNOWFLAKE_WAREHOUSE?: string | undefined;
    SNOWFLAKE_DATABASE?: string | undefined;
    SNOWFLAKE_AUTHENTICATOR?: string | undefined;
    SNOWFLAKE_PRIVATE_KEY_PATH?: string | undefined;
    QBO_CLIENT_ID?: string | undefined;
    QBO_CLIENT_SECRET?: string | undefined;
    QBO_REDIRECT_URI?: string | undefined;
    RAMP_CLIENT_ID?: string | undefined;
    RAMP_CLIENT_SECRET?: string | undefined;
    GOOGLE_APPLICATION_CREDENTIALS?: string | undefined;
    GOOGLE_CLIENT_EMAIL?: string | undefined;
    GOOGLE_WRITE_PRIVATE_KEY?: string | undefined;
    AWS_REGION?: string | undefined;
    AWS_S3_BUCKET?: string | undefined;
    AWS_S3_PREFIX?: string | undefined;
    AWS_ACCESS_KEY_ID?: string | undefined;
    AWS_SECRET_ACCESS_KEY?: string | undefined;
    GEMINI_API_KEY?: string | undefined;
}>;
export type Environment = z.infer<typeof envSchema>;
export declare const listToolsRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"tools/list">;
    params: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    method: "tools/list";
    params?: {} | undefined;
}, {
    method: "tools/list";
    params?: {} | undefined;
}>;
export declare const callToolRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"tools/call">;
    params: z.ZodObject<{
        name: z.ZodString;
        arguments: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        arguments?: Record<string, unknown> | undefined;
    }, {
        name: string;
        arguments?: Record<string, unknown> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        name: string;
        arguments?: Record<string, unknown> | undefined;
    };
    method: "tools/call";
}, {
    params: {
        name: string;
        arguments?: Record<string, unknown> | undefined;
    };
    method: "tools/call";
}>;
export declare const mcpRequestSchema: z.ZodDiscriminatedUnion<"method", [z.ZodObject<{
    method: z.ZodLiteral<"tools/list">;
    params: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    method: "tools/list";
    params?: {} | undefined;
}, {
    method: "tools/list";
    params?: {} | undefined;
}>, z.ZodObject<{
    method: z.ZodLiteral<"tools/call">;
    params: z.ZodObject<{
        name: z.ZodString;
        arguments: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        arguments?: Record<string, unknown> | undefined;
    }, {
        name: string;
        arguments?: Record<string, unknown> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        name: string;
        arguments?: Record<string, unknown> | undefined;
    };
    method: "tools/call";
}, {
    params: {
        name: string;
        arguments?: Record<string, unknown> | undefined;
    };
    method: "tools/call";
}>]>;
export declare const tokenPayloadSchema: z.ZodObject<{
    sub: z.ZodString;
    role: z.ZodEnum<["admin", "analyst", "finance", "readonly"]>;
    iat: z.ZodNumber;
    exp: z.ZodNumber;
    iss: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sub: string;
    role: "admin" | "analyst" | "finance" | "readonly";
    iat: number;
    exp: number;
    iss: string;
}, {
    sub: string;
    role: "admin" | "analyst" | "finance" | "readonly";
    iat: number;
    exp: number;
    iss?: string | undefined;
}>;
export type TokenPayload = z.infer<typeof tokenPayloadSchema>;
export declare function validateEnvironment(): Environment;
export declare function validateMCPRequest(data: unknown): {
    method: "tools/list";
    params?: {} | undefined;
} | {
    params: {
        name: string;
        arguments?: Record<string, unknown> | undefined;
    };
    method: "tools/call";
};
export declare function validateTokenPayload(payload: unknown): TokenPayload;
//# sourceMappingURL=validation.d.ts.map