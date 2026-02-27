import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const AdditionalContactInfoRequiredCode: {
    readonly AdditionalContactInfoRequired: "additional_contact_info_required";
};
export type AdditionalContactInfoRequiredCode = ClosedEnum<typeof AdditionalContactInfoRequiredCode>;
/**
 * Additional contact information is required for the TLD.
 */
export type AdditionalContactInfoRequiredData = {
    status: number;
    code: AdditionalContactInfoRequiredCode;
    message: string;
};
/**
 * Additional contact information is required for the TLD.
 */
export declare class AdditionalContactInfoRequired extends VercelError {
    status: number;
    code: AdditionalContactInfoRequiredCode;
    /** The original data that was passed to this error instance. */
    data$: AdditionalContactInfoRequiredData;
    constructor(err: AdditionalContactInfoRequiredData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const AdditionalContactInfoRequiredCode$inboundSchema: z.ZodNativeEnum<typeof AdditionalContactInfoRequiredCode>;
/** @internal */
export declare const AdditionalContactInfoRequiredCode$outboundSchema: z.ZodNativeEnum<typeof AdditionalContactInfoRequiredCode>;
/** @internal */
export declare const AdditionalContactInfoRequired$inboundSchema: z.ZodType<AdditionalContactInfoRequired, z.ZodTypeDef, unknown>;
/** @internal */
export type AdditionalContactInfoRequired$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const AdditionalContactInfoRequired$outboundSchema: z.ZodType<AdditionalContactInfoRequired$Outbound, z.ZodTypeDef, AdditionalContactInfoRequired>;
//# sourceMappingURL=additionalcontactinforequired.d.ts.map