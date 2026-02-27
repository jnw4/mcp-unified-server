import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const DomainNotRegisteredCode: {
    readonly DomainNotRegistered: "domain_not_registered";
};
export type DomainNotRegisteredCode = ClosedEnum<typeof DomainNotRegisteredCode>;
/**
 * The domain is not registered with Vercel.
 */
export type DomainNotRegisteredData = {
    status: number;
    code: DomainNotRegisteredCode;
    message: string;
};
/**
 * The domain is not registered with Vercel.
 */
export declare class DomainNotRegistered extends VercelError {
    status: number;
    code: DomainNotRegisteredCode;
    /** The original data that was passed to this error instance. */
    data$: DomainNotRegisteredData;
    constructor(err: DomainNotRegisteredData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const DomainNotRegisteredCode$inboundSchema: z.ZodNativeEnum<typeof DomainNotRegisteredCode>;
/** @internal */
export declare const DomainNotRegisteredCode$outboundSchema: z.ZodNativeEnum<typeof DomainNotRegisteredCode>;
/** @internal */
export declare const DomainNotRegistered$inboundSchema: z.ZodType<DomainNotRegistered, z.ZodTypeDef, unknown>;
/** @internal */
export type DomainNotRegistered$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const DomainNotRegistered$outboundSchema: z.ZodType<DomainNotRegistered$Outbound, z.ZodTypeDef, DomainNotRegistered>;
//# sourceMappingURL=domainnotregistered.d.ts.map