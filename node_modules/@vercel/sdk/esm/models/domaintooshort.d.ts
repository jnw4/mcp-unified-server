import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const DomainTooShortCode: {
    readonly DomainTooShort: "domain_too_short";
};
export type DomainTooShortCode = ClosedEnum<typeof DomainTooShortCode>;
/**
 * The domain name (excluding the TLD) is too short.
 */
export type DomainTooShortData = {
    status: number;
    code: DomainTooShortCode;
    message: string;
};
/**
 * The domain name (excluding the TLD) is too short.
 */
export declare class DomainTooShort extends VercelError {
    status: number;
    code: DomainTooShortCode;
    /** The original data that was passed to this error instance. */
    data$: DomainTooShortData;
    constructor(err: DomainTooShortData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const DomainTooShortCode$inboundSchema: z.ZodNativeEnum<typeof DomainTooShortCode>;
/** @internal */
export declare const DomainTooShortCode$outboundSchema: z.ZodNativeEnum<typeof DomainTooShortCode>;
/** @internal */
export declare const DomainTooShort$inboundSchema: z.ZodType<DomainTooShort, z.ZodTypeDef, unknown>;
/** @internal */
export type DomainTooShort$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const DomainTooShort$outboundSchema: z.ZodType<DomainTooShort$Outbound, z.ZodTypeDef, DomainTooShort>;
//# sourceMappingURL=domaintooshort.d.ts.map