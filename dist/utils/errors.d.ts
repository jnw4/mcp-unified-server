export declare class MCPError extends Error {
    code: string;
    statusCode: number;
    constructor(message: string, code?: string, statusCode?: number);
}
export declare class AuthenticationError extends MCPError {
    constructor(message?: string);
}
export declare class AuthorizationError extends MCPError {
    constructor(message?: string);
}
export declare class ValidationError extends MCPError {
    constructor(message?: string);
}
export declare class ToolExecutionError extends MCPError {
    constructor(message?: string);
}
export declare function formatErrorResponse(error: unknown): {
    error: {
        code: string;
        message: string;
    };
    statusCode: number;
};
//# sourceMappingURL=errors.d.ts.map