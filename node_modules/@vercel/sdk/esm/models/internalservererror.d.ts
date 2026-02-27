import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const InternalServerErrorCode: {
    readonly InternalServerError: "internal_server_error";
};
export type InternalServerErrorCode = ClosedEnum<typeof InternalServerErrorCode>;
export type InternalServerErrorData = {
    status: number;
    code: InternalServerErrorCode;
    message: string;
};
export declare class InternalServerError extends VercelError {
    status: number;
    code: InternalServerErrorCode;
    /** The original data that was passed to this error instance. */
    data$: InternalServerErrorData;
    constructor(err: InternalServerErrorData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const InternalServerErrorCode$inboundSchema: z.ZodNativeEnum<typeof InternalServerErrorCode>;
/** @internal */
export declare const InternalServerErrorCode$outboundSchema: z.ZodNativeEnum<typeof InternalServerErrorCode>;
/** @internal */
export declare const InternalServerError$inboundSchema: z.ZodType<InternalServerError, z.ZodTypeDef, unknown>;
/** @internal */
export type InternalServerError$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const InternalServerError$outboundSchema: z.ZodType<InternalServerError$Outbound, z.ZodTypeDef, InternalServerError>;
//# sourceMappingURL=internalservererror.d.ts.map