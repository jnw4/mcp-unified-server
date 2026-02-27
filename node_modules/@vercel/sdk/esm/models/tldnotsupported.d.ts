import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const TldNotSupportedCode: {
    readonly TldNotSupported: "tld_not_supported";
};
export type TldNotSupportedCode = ClosedEnum<typeof TldNotSupportedCode>;
/**
 * The TLD is not currently supported.
 */
export type TldNotSupportedData = {
    status: number;
    code: TldNotSupportedCode;
    message: string;
};
/**
 * The TLD is not currently supported.
 */
export declare class TldNotSupported extends VercelError {
    status: number;
    code: TldNotSupportedCode;
    /** The original data that was passed to this error instance. */
    data$: TldNotSupportedData;
    constructor(err: TldNotSupportedData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const TldNotSupportedCode$inboundSchema: z.ZodNativeEnum<typeof TldNotSupportedCode>;
/** @internal */
export declare const TldNotSupportedCode$outboundSchema: z.ZodNativeEnum<typeof TldNotSupportedCode>;
/** @internal */
export declare const TldNotSupported$inboundSchema: z.ZodType<TldNotSupported, z.ZodTypeDef, unknown>;
/** @internal */
export type TldNotSupported$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const TldNotSupported$outboundSchema: z.ZodType<TldNotSupported$Outbound, z.ZodTypeDef, TldNotSupported>;
//# sourceMappingURL=tldnotsupported.d.ts.map