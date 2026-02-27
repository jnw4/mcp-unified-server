import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const DNSSECEnabledCode: {
    readonly DnssecEnabled: "dnssec_enabled";
};
export type DNSSECEnabledCode = ClosedEnum<typeof DNSSECEnabledCode>;
/**
 * The operation cannot be completed because DNSSEC is enabled for the domain.
 */
export type DNSSECEnabledData = {
    status: number;
    code: DNSSECEnabledCode;
    message: string;
};
/**
 * The operation cannot be completed because DNSSEC is enabled for the domain.
 */
export declare class DNSSECEnabled extends VercelError {
    status: number;
    code: DNSSECEnabledCode;
    /** The original data that was passed to this error instance. */
    data$: DNSSECEnabledData;
    constructor(err: DNSSECEnabledData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const DNSSECEnabledCode$inboundSchema: z.ZodNativeEnum<typeof DNSSECEnabledCode>;
/** @internal */
export declare const DNSSECEnabledCode$outboundSchema: z.ZodNativeEnum<typeof DNSSECEnabledCode>;
/** @internal */
export declare const DNSSECEnabled$inboundSchema: z.ZodType<DNSSECEnabled, z.ZodTypeDef, unknown>;
/** @internal */
export type DNSSECEnabled$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const DNSSECEnabled$outboundSchema: z.ZodType<DNSSECEnabled$Outbound, z.ZodTypeDef, DNSSECEnabled>;
//# sourceMappingURL=dnssecenabled.d.ts.map