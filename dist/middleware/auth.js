"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = authenticateToken;
exports.authorizeToolAccess = authorizeToolAccess;
exports.optionalAuth = optionalAuth;
const tokens_1 = require("../auth/tokens");
const roles_1 = require("../auth/roles");
const errors_1 = require("../utils/errors");
// Authentication middleware - verifies JWT token
async function authenticateToken(req, res, next) {
    try {
        // Extract token from Authorization header
        const token = (0, tokens_1.extractBearerToken)(req.headers.authorization);
        // Verify token
        const payload = await (0, tokens_1.verifyToken)(token);
        // Add auth info to request
        req.auth = {
            token: payload,
            userId: payload.sub,
            role: payload.role
        };
        next();
    }
    catch (error) {
        const { error: errorDetails, statusCode } = (0, errors_1.formatErrorResponse)(error);
        res.status(statusCode).json({
            jsonrpc: '2.0',
            error: errorDetails,
            id: null
        });
    }
}
// Authorization middleware - checks tool access
function authorizeToolAccess(req, res, next) {
    try {
        if (!req.auth) {
            throw new errors_1.AuthenticationError('Authentication required');
        }
        // For tool listing, no specific tool check needed
        if (req.path === '/mcp/list' || req.method === 'GET') {
            return next();
        }
        // For tool execution, check specific tool access
        const toolName = req.body?.params?.name;
        if (toolName && !(0, roles_1.hasToolAccess)(req.auth.role, toolName)) {
            throw new errors_1.AuthorizationError(`Access denied for tool: ${toolName}`);
        }
        next();
    }
    catch (error) {
        const { error: errorDetails, statusCode } = (0, errors_1.formatErrorResponse)(error);
        res.status(statusCode).json({
            jsonrpc: '2.0',
            error: errorDetails,
            id: null
        });
    }
}
// Optional middleware - only authenticate if token is provided
async function optionalAuth(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        // If no authorization header, continue without auth
        if (!authHeader) {
            return next();
        }
        // If authorization header exists, verify it
        const token = (0, tokens_1.extractBearerToken)(authHeader);
        const payload = await (0, tokens_1.verifyToken)(token);
        req.auth = {
            token: payload,
            userId: payload.sub,
            role: payload.role
        };
        next();
    }
    catch (error) {
        // For optional auth, continue even if token is invalid
        // but log the error for debugging
        console.warn('Optional auth failed:', error);
        next();
    }
}
//# sourceMappingURL=auth.js.map