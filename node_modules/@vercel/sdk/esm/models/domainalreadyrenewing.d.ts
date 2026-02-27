import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const DomainAlreadyRenewingCode: {
    readonly DomainAlreadyRenewing: "domain_already_renewing";
};
export type DomainAlreadyRenewingCode = ClosedEnum<typeof DomainAlreadyRenewingCode>;
/**
 * The domain is already renewing.
 */
export type DomainAlreadyRenewingData = {
    status: number;
    code: DomainAlreadyRenewingCode;
    message: string;
};
/**
 * The domain is already renewing.
 */
export declare class DomainAlreadyRenewing extends VercelError {
    status: number;
    code: DomainAlreadyRenewingCode;
    /** The original data that was passed to this error instance. */
    data$: DomainAlreadyRenewingData;
    constructor(err: DomainAlreadyRenewingData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const DomainAlreadyRenewingCode$inboundSchema: z.ZodNativeEnum<typeof DomainAlreadyRenewingCode>;
/** @internal */
export declare const DomainAlreadyRenewingCode$outboundSchema: z.ZodNativeEnum<typeof DomainAlreadyRenewingCode>;
/** @internal */
export declare const DomainAlreadyRenewing$inboundSchema: z.ZodType<DomainAlreadyRenewing, z.ZodTypeDef, unknown>;
/** @internal */
export type DomainAlreadyRenewing$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const DomainAlreadyRenewing$outboundSchema: z.ZodType<DomainAlreadyRenewing$Outbound, z.ZodTypeDef, DomainAlreadyRenewing>;
//# sourceMappingURL=domainalreadyrenewing.d.ts.map