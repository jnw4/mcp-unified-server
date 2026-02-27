import { Request, Response, NextFunction } from 'express';
import { TokenPayload } from '../utils/validation';
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
export declare function authenticateToken(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function authorizeToolAccess(req: Request, res: Response, next: NextFunction): void;
export declare function optionalAuth(req: Request, res: Response, next: NextFunction): Promise<void>;
//# sourceMappingURL=auth.d.ts.map