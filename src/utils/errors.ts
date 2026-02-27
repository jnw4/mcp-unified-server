export class MCPError extends Error {
  constructor(
    message: string,
    public code: string = 'UNKNOWN_ERROR',
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'MCPError';
  }
}

export class AuthenticationError extends MCPError {
  constructor(message: string = 'Authentication failed') {
    super(message, 'AUTHENTICATION_ERROR', 401);
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends MCPError {
  constructor(message: string = 'Access denied') {
    super(message, 'AUTHORIZATION_ERROR', 403);
    this.name = 'AuthorizationError';
  }
}

export class ValidationError extends MCPError {
  constructor(message: string = 'Validation failed') {
    super(message, 'VALIDATION_ERROR', 400);
    this.name = 'ValidationError';
  }
}

export class ToolExecutionError extends MCPError {
  constructor(message: string = 'Tool execution failed') {
    super(message, 'TOOL_EXECUTION_ERROR', 500);
    this.name = 'ToolExecutionError';
  }
}

export function formatErrorResponse(error: unknown) {
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