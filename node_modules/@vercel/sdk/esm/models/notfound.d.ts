import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const NotFoundCode: {
    readonly NotFound: "not_found";
};
export type NotFoundCode = ClosedEnum<typeof NotFoundCode>;
export type NotFoundData = {
    status: number;
    code: NotFoundCode;
    message: string;
};
export declare class NotFound extends VercelError {
    status: number;
    code: NotFoundCode;
    /** The original data that was passed to this error instance. */
    data$: NotFoundData;
    constructor(err: NotFoundData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const NotFoundCode$inboundSchema: z.ZodNativeEnum<typeof NotFoundCode>;
/** @internal */
export declare const NotFoundCode$outboundSchema: z.ZodNativeEnum<typeof NotFoundCode>;
/** @internal */
export declare const NotFound$inboundSchema: z.ZodType<NotFound, z.ZodTypeDef, unknown>;
/** @internal */
export type NotFound$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const NotFound$outboundSchema: z.ZodType<NotFound$Outbound, z.ZodTypeDef, NotFound>;
//# sourceMappingURL=notfound.d.ts.map