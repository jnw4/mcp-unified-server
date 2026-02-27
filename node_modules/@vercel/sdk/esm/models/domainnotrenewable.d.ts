import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const DomainNotRenewableCode: {
    readonly DomainNotRenewable: "domain_not_renewable";
};
export type DomainNotRenewableCode = ClosedEnum<typeof DomainNotRenewableCode>;
/**
 * The domain is not renewable.
 */
export type DomainNotRenewableData = {
    status: number;
    code: DomainNotRenewableCode;
    message: string;
};
/**
 * The domain is not renewable.
 */
export declare class DomainNotRenewable extends VercelError {
    status: number;
    code: DomainNotRenewableCode;
    /** The original data that was passed to this error instance. */
    data$: DomainNotRenewableData;
    constructor(err: DomainNotRenewableData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const DomainNotRenewableCode$inboundSchema: z.ZodNativeEnum<typeof DomainNotRenewableCode>;
/** @internal */
export declare const DomainNotRenewableCode$outboundSchema: z.ZodNativeEnum<typeof DomainNotRenewableCode>;
/** @internal */
export declare const DomainNotRenewable$inboundSchema: z.ZodType<DomainNotRenewable, z.ZodTypeDef, unknown>;
/** @internal */
export type DomainNotRenewable$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const DomainNotRenewable$outboundSchema: z.ZodType<DomainNotRenewable$Outbound, z.ZodTypeDef, DomainNotRenewable>;
//# sourceMappingURL=domainnotrenewable.d.ts.map