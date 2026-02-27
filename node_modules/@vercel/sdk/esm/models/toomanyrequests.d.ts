import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { VercelError } from "./vercelerror.js";
export declare const TooManyRequestsCode: {
    readonly TooManyRequests: "too_many_requests";
};
export type TooManyRequestsCode = ClosedEnum<typeof TooManyRequestsCode>;
export type RetryAfter = {
    value: number;
    str: string;
};
export type Limit = {
    total: number;
    remaining: number;
    reset: number;
};
export type TooManyRequestsData = {
    status: number;
    code: TooManyRequestsCode;
    message: string;
    retryAfter: RetryAfter;
    limit: Limit;
};
export declare class TooManyRequests extends VercelError {
    status: number;
    code: TooManyRequestsCode;
    retryAfter: RetryAfter;
    limit: Limit;
    /** The original data that was passed to this error instance. */
    data$: TooManyRequestsData;
    constructor(err: TooManyRequestsData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const TooManyRequestsCode$inboundSchema: z.ZodNativeEnum<typeof TooManyRequestsCode>;
/** @internal */
export declare const TooManyRequestsCode$outboundSchema: z.ZodNativeEnum<typeof TooManyRequestsCode>;
/** @internal */
export declare const RetryAfter$inboundSchema: z.ZodType<RetryAfter, z.ZodTypeDef, unknown>;
/** @internal */
export type RetryAfter$Outbound = {
    value: number;
    str: string;
};
/** @internal */
export declare const RetryAfter$outboundSchema: z.ZodType<RetryAfter$Outbound, z.ZodTypeDef, RetryAfter>;
export declare function retryAfterToJSON(retryAfter: RetryAfter): string;
export declare function retryAfterFromJSON(jsonString: string): SafeParseResult<RetryAfter, SDKValidationError>;
/** @internal */
export declare const Limit$inboundSchema: z.ZodType<Limit, z.ZodTypeDef, unknown>;
/** @internal */
export type Limit$Outbound = {
    total: number;
    remaining: number;
    reset: number;
};
/** @internal */
export declare const Limit$outboundSchema: z.ZodType<Limit$Outbound, z.ZodTypeDef, Limit>;
export declare function limitToJSON(limit: Limit): string;
export declare function limitFromJSON(jsonString: string): SafeParseResult<Limit, SDKValidationError>;
/** @internal */
export declare const TooManyRequests$inboundSchema: z.ZodType<TooManyRequests, z.ZodTypeDef, unknown>;
/** @internal */
export type TooManyRequests$Outbound = {
    status: number;
    code: string;
    message: string;
    retryAfter: RetryAfter$Outbound;
    limit: Limit$Outbound;
};
/** @internal */
export declare const TooManyRequests$outboundSchema: z.ZodType<TooManyRequests$Outbound, z.ZodTypeDef, TooManyRequests>;
//# sourceMappingURL=toomanyrequests.d.ts.map