import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const DomainNotFoundCode: {
    readonly DomainNotFound: "domain_not_found";
};
export type DomainNotFoundCode = ClosedEnum<typeof DomainNotFoundCode>;
/**
 * The domain was not found in our system.
 */
export type DomainNotFoundData = {
    status: number;
    code: DomainNotFoundCode;
    message: string;
};
/**
 * The domain was not found in our system.
 */
export declare class DomainNotFound extends VercelError {
    status: number;
    code: DomainNotFoundCode;
    /** The original data that was passed to this error instance. */
    data$: DomainNotFoundData;
    constructor(err: DomainNotFoundData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const DomainNotFoundCode$inboundSchema: z.ZodNativeEnum<typeof DomainNotFoundCode>;
/** @internal */
export declare const DomainNotFoundCode$outboundSchema: z.ZodNativeEnum<typeof DomainNotFoundCode>;
/** @internal */
export declare const DomainNotFound$inboundSchema: z.ZodType<DomainNotFound, z.ZodTypeDef, unknown>;
/** @internal */
export type DomainNotFound$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const DomainNotFound$outboundSchema: z.ZodType<DomainNotFound$Outbound, z.ZodTypeDef, DomainNotFound>;
//# sourceMappingURL=domainnotfound.d.ts.map