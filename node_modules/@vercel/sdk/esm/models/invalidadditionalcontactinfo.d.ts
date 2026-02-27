import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const InvalidAdditionalContactInfoCode: {
    readonly InvalidAdditionalContactInfo: "invalid_additional_contact_info";
};
export type InvalidAdditionalContactInfoCode = ClosedEnum<typeof InvalidAdditionalContactInfoCode>;
/**
 * Additional contact information provided for the TLD is invalid.
 */
export type InvalidAdditionalContactInfoData = {
    status: number;
    code: InvalidAdditionalContactInfoCode;
    message: string;
};
/**
 * Additional contact information provided for the TLD is invalid.
 */
export declare class InvalidAdditionalContactInfo extends VercelError {
    status: number;
    code: InvalidAdditionalContactInfoCode;
    /** The original data that was passed to this error instance. */
    data$: InvalidAdditionalContactInfoData;
    constructor(err: InvalidAdditionalContactInfoData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const InvalidAdditionalContactInfoCode$inboundSchema: z.ZodNativeEnum<typeof InvalidAdditionalContactInfoCode>;
/** @internal */
export declare const InvalidAdditionalContactInfoCode$outboundSchema: z.ZodNativeEnum<typeof InvalidAdditionalContactInfoCode>;
/** @internal */
export declare const InvalidAdditionalContactInfo$inboundSchema: z.ZodType<InvalidAdditionalContactInfo, z.ZodTypeDef, unknown>;
/** @internal */
export type InvalidAdditionalContactInfo$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const InvalidAdditionalContactInfo$outboundSchema: z.ZodType<InvalidAdditionalContactInfo$Outbound, z.ZodTypeDef, InvalidAdditionalContactInfo>;
//# sourceMappingURL=invalidadditionalcontactinfo.d.ts.map