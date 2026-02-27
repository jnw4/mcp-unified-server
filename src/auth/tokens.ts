import { SignJWT, jwtVerify } from 'jose';
import { AuthenticationError, ValidationError } from '../utils/errors';
import { TokenPayload, validateTokenPayload } from '../utils/validation';
import { getTokenExpiry, validateRole } from './roles';

const ISSUER = 'mcp-unified-server';

// Parse duration string to seconds
function parseDuration(duration: string): number {
  const match = duration.match(/^(\d+)(s|m|h|d)$/);
  if (!match) {
    throw new ValidationError(`Invalid duration format: ${duration}. Use format like '1h', '30m', '24h'`);
  }

  const value = parseInt(match[1]);
  const unit = match[2];

  switch (unit) {
    case 's': return value;
    case 'm': return value * 60;
    case 'h': return value * 60 * 60;
    case 'd': return value * 24 * 60 * 60;
    default: throw new ValidationError(`Invalid time unit: ${unit}`);
  }
}

// Get JWT signing secret as Uint8Array
function getSecretKey(): Uint8Array {
  const secret = process.env.MCP_AUTH_SECRET;
  if (!secret) {
    throw new ValidationError('MCP_AUTH_SECRET environment variable is required');
  }
  return new TextEncoder().encode(secret);
}

// Generate JWT token for a user and role
export async function generateToken(
  userId: string,
  role: string,
  customExpiry?: string
): Promise<string> {
  // Validate role
  if (!validateRole(role)) {
    throw new ValidationError(`Invalid role: ${role}`);
  }

  // Get expiry duration
  const expiryDuration = customExpiry || getTokenExpiry(role);
  const expirySeconds = parseDuration(expiryDuration);

  // Create payload
  const now = Math.floor(Date.now() / 1000);
  const payload: TokenPayload = {
    sub: userId,
    role: role as TokenPayload['role'],
    iat: now,
    exp: now + expirySeconds,
    iss: ISSUER
  };

  // Sign JWT
  try {
    const secret = getSecretKey();
    const jwt = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt(payload.iat)
      .setExpirationTime(payload.exp)
      .setSubject(payload.sub)
      .setIssuer(payload.iss)
      .sign(secret);

    return jwt;
  } catch (error) {
    throw new ValidationError(`Failed to generate token: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Verify and decode JWT token
export async function verifyToken(token: string): Promise<TokenPayload> {
  try {
    const secret = getSecretKey();
    const { payload } = await jwtVerify(token, secret, {
      issuer: ISSUER
    });

    return validateTokenPayload(payload);
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }
    throw new AuthenticationError('Invalid or expired token');
  }
}

// Extract token from Authorization header
export function extractBearerToken(authHeader?: string): string {
  if (!authHeader) {
    throw new AuthenticationError('Authorization header is required');
  }

  const match = authHeader.match(/^Bearer\s+(.+)$/);
  if (!match) {
    throw new AuthenticationError('Invalid Authorization header format. Expected: Bearer <token>');
  }

  return match[1];
}

// Check if token is expired (client-side check)
export function isTokenExpired(payload: TokenPayload): boolean {
  const now = Math.floor(Date.now() / 1000);
  return payload.exp <= now;
}

// Get token expiration date
export function getTokenExpirationDate(payload: TokenPayload): Date {
  return new Date(payload.exp * 1000);
}

// Format token info for display
export function formatTokenInfo(payload: TokenPayload): string {
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