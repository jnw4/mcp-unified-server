"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
exports.verifyToken = verifyToken;
exports.extractBearerToken = extractBearerToken;
exports.isTokenExpired = isTokenExpired;
exports.getTokenExpirationDate = getTokenExpirationDate;
exports.formatTokenInfo = formatTokenInfo;
const jose_1 = require("jose");
const errors_1 = require("../utils/errors");
const validation_1 = require("../utils/validation");
const roles_1 = require("./roles");
const ISSUER = 'mcp-unified-server';
// Parse duration string to seconds
function parseDuration(duration) {
    const match = duration.match(/^(\d+)(s|m|h|d)$/);
    if (!match) {
        throw new errors_1.ValidationError(`Invalid duration format: ${duration}. Use format like '1h', '30m', '24h'`);
    }
    const value = parseInt(match[1]);
    const unit = match[2];
    switch (unit) {
        case 's': return value;
        case 'm': return value * 60;
        case 'h': return value * 60 * 60;
        case 'd': return value * 24 * 60 * 60;
        default: throw new errors_1.ValidationError(`Invalid time unit: ${unit}`);
    }
}
// Get JWT signing secret as Uint8Array
function getSecretKey() {
    const secret = process.env.MCP_AUTH_SECRET;
    if (!secret) {
        throw new errors_1.ValidationError('MCP_AUTH_SECRET environment variable is required');
    }
    return new TextEncoder().encode(secret);
}
// Generate JWT token for a user and role
async function generateToken(userId, role, customExpiry) {
    // Validate role
    if (!(0, roles_1.validateRole)(role)) {
        throw new errors_1.ValidationError(`Invalid role: ${role}`);
    }
    // Create payload
    const now = Math.floor(Date.now() / 1000);
    let exp;
    // Handle permanent tokens
    if (customExpiry === 'permanent' || customExpiry === 'never') {
        // Set expiration to year 2099 (effectively permanent)
        exp = new Date('2099-01-01').getTime() / 1000;
    }
    else {
        // Get expiry duration
        const expiryDuration = customExpiry || (0, roles_1.getTokenExpiry)(role);
        const expirySeconds = parseDuration(expiryDuration);
        exp = now + expirySeconds;
    }
    const payload = {
        sub: userId,
        role: role,
        iat: now,
        exp,
        iss: ISSUER
    };
    // Sign JWT
    try {
        const secret = getSecretKey();
        const jwt = await new jose_1.SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt(payload.iat)
            .setExpirationTime(payload.exp)
            .setSubject(payload.sub)
            .setIssuer(payload.iss)
            .sign(secret);
        return jwt;
    }
    catch (error) {
        throw new errors_1.ValidationError(`Failed to generate token: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
// Verify and decode JWT token
async function verifyToken(token) {
    try {
        const secret = getSecretKey();
        const { payload } = await (0, jose_1.jwtVerify)(token, secret, {
            issuer: ISSUER
        });
        return (0, validation_1.validateTokenPayload)(payload);
    }
    catch (error) {
        if (error instanceof errors_1.ValidationError) {
            throw error;
        }
        throw new errors_1.AuthenticationError('Invalid or expired token');
    }
}
// Extract token from Authorization header
function extractBearerToken(authHeader) {
    if (!authHeader) {
        throw new errors_1.AuthenticationError('Authorization header is required');
    }
    const match = authHeader.match(/^Bearer\s+(.+)$/);
    if (!match) {
        throw new errors_1.AuthenticationError('Invalid Authorization header format. Expected: Bearer <token>');
    }
    return match[1];
}
// Check if token is expired (client-side check)
function isTokenExpired(payload) {
    const now = Math.floor(Date.now() / 1000);
    return payload.exp <= now;
}
// Get token expiration date
function getTokenExpirationDate(payload) {
    return new Date(payload.exp * 1000);
}
// Format token info for display
function formatTokenInfo(payload) {
    const expirationDate = getTokenExpirationDate(payload);
    const timeUntilExpiry = payload.exp - Math.floor(Date.now() / 1000);
    const hoursUntilExpiry = Math.ceil(timeUntilExpiry / 3600);
    return [
        `User: ${payload.sub}`,
        `Role: ${payload.role}`,
        `Expires: ${expirationDate.toISOString()}`,
        `Time remaining: ~${hoursUntilExpiry}h`
    ].join('\n');
}
//# sourceMappingURL=tokens.js.map