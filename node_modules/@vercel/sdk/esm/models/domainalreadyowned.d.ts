import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const DomainAlreadyOwnedCode: {
    readonly DomainAlreadyOwned: "domain_already_owned";
};
export type DomainAlreadyOwnedCode = ClosedEnum<typeof DomainAlreadyOwnedCode>;
/**
 * The domain is already owned by another team or user.
 */
export type DomainAlreadyOwnedData = {
    status: number;
    code: DomainAlreadyOwnedCode;
    message: string;
};
/**
 * The domain is already owned by another team or user.
 */
export declare class DomainAlreadyOwned extends VercelError {
    status: number;
    code: DomainAlreadyOwnedCode;
    /** The original data that was passed to this error instance. */
    data$: DomainAlreadyOwnedData;
    constructor(err: DomainAlreadyOwnedData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const DomainAlreadyOwnedCode$inboundSchema: z.ZodNativeEnum<typeof DomainAlreadyOwnedCode>;
/** @internal */
export declare const DomainAlreadyOwnedCode$outboundSchema: z.ZodNativeEnum<typeof DomainAlreadyOwnedCode>;
/** @internal */
export declare const DomainAlreadyOwned$inboundSchema: z.ZodType<DomainAlreadyOwned, z.ZodTypeDef, unknown>;
/** @internal */
export type DomainAlreadyOwned$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const DomainAlreadyOwned$outboundSchema: z.ZodType<DomainAlreadyOwned$Outbound, z.ZodTypeDef, DomainAlreadyOwned>;
//# sourceMappingURL=domainalreadyowned.d.ts.map