"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolExecutionError = exports.ValidationError = exports.AuthorizationError = exports.AuthenticationError = exports.MCPError = void 0;
exports.formatErrorResponse = formatErrorResponse;
class MCPError extends Error {
    code;
    statusCode;
    constructor(message, code = 'UNKNOWN_ERROR', statusCode = 500) {
        super(message);
        this.code = code;
        this.statusCode = statusCode;
        this.name = 'MCPError';
    }
}
exports.MCPError = MCPError;
class AuthenticationError extends MCPError {
    constructor(message = 'Authentication failed') {
        super(message, 'AUTHENTICATION_ERROR', 401);
        this.name = 'AuthenticationError';
    }
}
exports.AuthenticationError = AuthenticationError;
class AuthorizationError extends MCPError {
    constructor(message = 'Access denied') {
        super(message, 'AUTHORIZATION_ERROR', 403);
        this.name = 'AuthorizationError';
    }
}
exports.AuthorizationError = AuthorizationError;
class ValidationError extends MCPError {
    constructor(message = 'Validation failed') {
        super(message, 'VALIDATION_ERROR', 400);
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
class ToolExecutionError extends MCPError {
    constructor(message = 'Tool execution failed') {
        super(message, 'TOOL_EXECUTION_ERROR', 500);
        this.name = 'ToolExecutionError';
    }
}
exports.ToolExecutionError = ToolExecutionError;
function formatErrorResponse(error) {
    if (error instanceof MCPError) {
        return {
            error: {
                code: error.code,
                message: error.message
            },
            statusCode: error.statusCode
        };
    }
    if (error instanceof Error) {
        return {
            error: {
                code: 'INTERNAL_ERROR',
                message: error.message
            },
            statusCode: 500
        };
    }
    return {
        error: {
            code: 'UNKNOWN_ERROR',
            message: 'An unknown error occurred'
        },
        statusCode: 500
    };
}
//# sourceMappingURL=errors.js.map