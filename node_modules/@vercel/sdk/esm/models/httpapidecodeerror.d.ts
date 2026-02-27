import * as z from "zod/v3";
import { Issue, Issue$Outbound } from "./issue.js";
import { VercelError } from "./vercelerror.js";
/**
 * The request did not match the expected schema
 */
export type HttpApiDecodeErrorData = {
    issues: Array<Issue>;
    message: string;
};
/**
 * The request did not match the expected schema
 */
export declare class HttpApiDecodeError extends VercelError {
    issues: Array<Issue>;
    /** The original data that was passed to this error instance. */
    data$: HttpApiDecodeErrorData;
    constructor(err: HttpApiDecodeErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const HttpApiDecodeError$inboundSchema: z.ZodType<HttpApiDecodeError, z.ZodTypeDef, unknown>;
/** @internal */
export type HttpApiDecodeError$Outbound = {
    issues: Array<Issue$Outbound>;
    message: string;
};
/** @internal */
export declare const HttpApiDecodeError$outboundSchema: z.ZodType<HttpApiDecodeError$Outbound, z.ZodTypeDef, HttpApiDecodeError>;
//# sourceMappingURL=httpapidecodeerror.d.ts.map