import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const RequestBodyAction: {
    readonly Refund: "refund";
};
export type RequestBodyAction = ClosedEnum<typeof RequestBodyAction>;
export type UpdateInvoiceRequestBody1 = {
    action: RequestBodyAction;
    /**
     * Refund reason.
     */
    reason: string;
    /**
     * The total amount to be refunded. Must be less than or equal to the total amount of the invoice.
     */
    total: string;
};
export type UpdateInvoiceRequestBody = UpdateInvoiceRequestBody1;
export type UpdateInvoiceRequest = {
    integrationConfigurationId: string;
    invoiceId: string;
    requestBody: UpdateInvoiceRequestBody1;
};
/** @internal */
export declare const RequestBodyAction$inboundSchema: z.ZodNativeEnum<typeof RequestBodyAction>;
/** @internal */
export declare const RequestBodyAction$outboundSchema: z.ZodNativeEnum<typeof RequestBodyAction>;
/** @internal */
export declare const UpdateInvoiceRequestBody1$inboundSchema: z.ZodType<UpdateInvoiceRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateInvoiceRequestBody1$Outbound = {
    action: string;
    reason: string;
    total: string;
};
/** @internal */
export declare const UpdateInvoiceRequestBody1$outboundSchema: z.ZodType<UpdateInvoiceRequestBody1$Outbound, z.ZodTypeDef, UpdateInvoiceRequestBody1>;
export declare function updateInvoiceRequestBody1ToJSON(updateInvoiceRequestBody1: UpdateInvoiceRequestBody1): string;
export declare function updateInvoiceRequestBody1FromJSON(jsonString: string): SafeParseResult<UpdateInvoiceRequestBody1, SDKValidationError>;
/** @internal */
export declare const UpdateInvoiceRequestBody$inboundSchema: z.ZodType<UpdateInvoiceRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateInvoiceRequestBody$Outbound = UpdateInvoiceRequestBody1$Outbound;
/** @internal */
export declare const UpdateInvoiceRequestBody$outboundSchema: z.ZodType<UpdateInvoiceRequestBody$Outbound, z.ZodTypeDef, UpdateInvoiceRequestBody>;
export declare function updateInvoiceRequestBodyToJSON(updateInvoiceRequestBody: UpdateInvoiceRequestBody): string;
export declare function updateInvoiceRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateInvoiceRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateInvoiceRequest$inboundSchema: z.ZodType<UpdateInvoiceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateInvoiceRequest$Outbound = {
    integrationConfigurationId: string;
    invoiceId: string;
    RequestBody: UpdateInvoiceRequestBody1$Outbound;
};
/** @internal */
export declare const UpdateInvoiceRequest$outboundSchema: z.ZodType<UpdateInvoiceRequest$Outbound, z.ZodTypeDef, UpdateInvoiceRequest>;
export declare function updateInvoiceRequestToJSON(updateInvoiceRequest: UpdateInvoiceRequest): string;
export declare function updateInvoiceRequestFromJSON(jsonString: string): SafeParseResult<UpdateInvoiceRequest, SDKValidationError>;
//# sourceMappingURL=updateinvoiceop.d.ts.map