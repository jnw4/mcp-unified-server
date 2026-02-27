import { Request, Response, NextFunction } from 'express';
import { verifyToken, extractBearerToken } from '../auth/tokens';
import { hasToolAccess } from '../auth/roles';
import { formatErrorResponse, AuthenticationError, AuthorizationError } from '../utils/errors';
import { TokenPayload } from '../utils/validation';

// Extend Express Request to include auth info
declare global {
  namespace Express {
    interface Request {
      auth?: {
        token: TokenPayload;
        userId: string;
        role: string;
      };
    }
  }
}

// Authentication middleware - verifies JWT token
export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // Extract token from Authorization header
    const token = extractBearerToken(req.headers.authorization);

    // Verify token
    const payload = await verifyToken(token);

    // Add auth info to request
    req.auth = {
      token: payload,
      userId: payload.sub,
      role: payload.role
    };

    next();
  } catch (error) {
    const { error: errorDetails, statusCode } = formatErrorResponse(error);
    res.status(statusCode).json({
      jsonrpc: '2.0',
      error: errorDetails,
      id: null
    });
  }
}

// Authorization middleware - checks tool access
export function authorizeToolAccess(req: Request, res: Response, next: NextFunction): void {
  try {
    if (!req.auth) {
      throw new AuthenticationError('Authentication required');
    }

    // For tool listing, no specific tool check needed
    if (req.path === '/mcp/list' || req.method === 'GET') {
      return next();
    }

    // For tool execution, check specific tool access
    const toolName = req.body?.params?.name;
    if (toolName && !hasToolAccess(req.auth.role, toolName)) {
      throw new AuthorizationError(`Access denied for tool: ${toolName}`);
    }

    next();
  } catch (error) {
    const { error: errorDetails, statusCode } = formatErrorResponse(error);
    res.status(statusCode).json({
      jsonrpc: '2.0',
      error: errorDetails,
      id: null
    });
  }
}

// Optional middleware - only authenticate if token is provided
export async function optionalAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    // If no authorization header, continue without auth
    if (!authHeader) {
      return next();
    }

    // If authorization header exists, verify it
    const token = extractBearerToken(authHeader);
    const payload = await verifyToken(token);

    req.auth = {
      token: payload,
      userId: payload.sub,
      role: payload.role
    };

    next();
  } catch (error) {
    // For optional auth, continue even if token is invalid
    // but log the error for debugging
    console.warn('Optional auth failed:', error);
    next();
  }
}