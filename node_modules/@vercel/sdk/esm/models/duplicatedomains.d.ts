import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const DuplicateDomainsCode: {
    readonly DuplicateDomains: "duplicate_domains";
};
export type DuplicateDomainsCode = ClosedEnum<typeof DuplicateDomainsCode>;
/**
 * Duplicate domains were provided.
 */
export type DuplicateDomainsData = {
    status: number;
    code: DuplicateDomainsCode;
    message: string;
};
/**
 * Duplicate domains were provided.
 */
export declare class DuplicateDomains extends VercelError {
    status: number;
    code: DuplicateDomainsCode;
    /** The original data that was passed to this error instance. */
    data$: DuplicateDomainsData;
    constructor(err: DuplicateDomainsData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const DuplicateDomainsCode$inboundSchema: z.ZodNativeEnum<typeof DuplicateDomainsCode>;
/** @internal */
export declare const DuplicateDomainsCode$outboundSchema: z.ZodNativeEnum<typeof DuplicateDomainsCode>;
/** @internal */
export declare const DuplicateDomains$inboundSchema: z.ZodType<DuplicateDomains, z.ZodTypeDef, unknown>;
/** @internal */
export type DuplicateDomains$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const DuplicateDomains$outboundSchema: z.ZodType<DuplicateDomains$Outbound, z.ZodTypeDef, DuplicateDomains>;
//# sourceMappingURL=duplicatedomains.d.ts.map