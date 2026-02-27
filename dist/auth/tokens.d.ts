import { TokenPayload } from '../utils/validation';
export declare function generateToken(userId: string, role: string, customExpiry?: string): Promise<string>;
export declare function verifyToken(token: string): Promise<TokenPayload>;
export declare function extractBearerToken(authHeader?: string): string;
export declare function isTokenExpired(payload: TokenPayload): boolean;
export declare function getTokenExpirationDate(payload: TokenPayload): Date;
export declare function formatTokenInfo(payload: TokenPayload): string;
//# sourceMappingURL=tokens.d.ts.map