import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const TooManyDomainsCode: {
    readonly TooManyDomains: "too_many_domains";
};
export type TooManyDomainsCode = ClosedEnum<typeof TooManyDomainsCode>;
/**
 * The number of domains in the order is too high.
 */
export type TooManyDomainsData = {
    status: number;
    code: TooManyDomainsCode;
    message: string;
};
/**
 * The number of domains in the order is too high.
 */
export declare class TooManyDomains extends VercelError {
    status: number;
    code: TooManyDomainsCode;
    /** The original data that was passed to this error instance. */
    data$: TooManyDomainsData;
    constructor(err: TooManyDomainsData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const TooManyDomainsCode$inboundSchema: z.ZodNativeEnum<typeof TooManyDomainsCode>;
/** @internal */
export declare const TooManyDomainsCode$outboundSchema: z.ZodNativeEnum<typeof TooManyDomainsCode>;
/** @internal */
export declare const TooManyDomains$inboundSchema: z.ZodType<TooManyDomains, z.ZodTypeDef, unknown>;
/** @internal */
export type TooManyDomains$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const TooManyDomains$outboundSchema: z.ZodType<TooManyDomains$Outbound, z.ZodTypeDef, TooManyDomains>;
//# sourceMappingURL=toomanydomains.d.ts.map