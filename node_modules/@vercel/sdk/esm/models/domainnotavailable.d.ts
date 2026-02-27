import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const DomainNotAvailableCode: {
    readonly DomainNotAvailable: "domain_not_available";
};
export type DomainNotAvailableCode = ClosedEnum<typeof DomainNotAvailableCode>;
/**
 * The domain is not available.
 */
export type DomainNotAvailableData = {
    status: number;
    code: DomainNotAvailableCode;
    message: string;
};
/**
 * The domain is not available.
 */
export declare class DomainNotAvailable extends VercelError {
    status: number;
    code: DomainNotAvailableCode;
    /** The original data that was passed to this error instance. */
    data$: DomainNotAvailableData;
    constructor(err: DomainNotAvailableData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const DomainNotAvailableCode$inboundSchema: z.ZodNativeEnum<typeof DomainNotAvailableCode>;
/** @internal */
export declare const DomainNotAvailableCode$outboundSchema: z.ZodNativeEnum<typeof DomainNotAvailableCode>;
/** @internal */
export declare const DomainNotAvailable$inboundSchema: z.ZodType<DomainNotAvailable, z.ZodTypeDef, unknown>;
/** @internal */
export type DomainNotAvailable$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const DomainNotAvailable$outboundSchema: z.ZodType<DomainNotAvailable$Outbound, z.ZodTypeDef, DomainNotAvailable>;
//# sourceMappingURL=domainnotavailable.d.ts.map