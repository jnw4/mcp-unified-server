import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const DomainCannotBeTransferedOutUntilCode: {
    readonly DomainCannotBeTransferedOutUntil: "domain_cannot_be_transfered_out_until";
};
export type DomainCannotBeTransferedOutUntilCode = ClosedEnum<typeof DomainCannotBeTransferedOutUntilCode>;
/**
 * The domain cannot be transfered out until the specified date.
 */
export type DomainCannotBeTransferedOutUntilData = {
    status: number;
    code: DomainCannotBeTransferedOutUntilCode;
    message: string;
};
/**
 * The domain cannot be transfered out until the specified date.
 */
export declare class DomainCannotBeTransferedOutUntil extends VercelError {
    status: number;
    code: DomainCannotBeTransferedOutUntilCode;
    /** The original data that was passed to this error instance. */
    data$: DomainCannotBeTransferedOutUntilData;
    constructor(err: DomainCannotBeTransferedOutUntilData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const DomainCannotBeTransferedOutUntilCode$inboundSchema: z.ZodNativeEnum<typeof DomainCannotBeTransferedOutUntilCode>;
/** @internal */
export declare const DomainCannotBeTransferedOutUntilCode$outboundSchema: z.ZodNativeEnum<typeof DomainCannotBeTransferedOutUntilCode>;
/** @internal */
export declare const DomainCannotBeTransferedOutUntil$inboundSchema: z.ZodType<DomainCannotBeTransferedOutUntil, z.ZodTypeDef, unknown>;
/** @internal */
export type DomainCannotBeTransferedOutUntil$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const DomainCannotBeTransferedOutUntil$outboundSchema: z.ZodType<DomainCannotBeTransferedOutUntil$Outbound, z.ZodTypeDef, DomainCannotBeTransferedOutUntil>;
//# sourceMappingURL=domaincannotbetransferedoutuntil.d.ts.map