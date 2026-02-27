import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const UpdateInstallationStatus: {
    readonly Ready: "ready";
    readonly Pending: "pending";
    readonly Onboarding: "onboarding";
    readonly Suspended: "suspended";
    readonly Resumed: "resumed";
    readonly Uninstalled: "uninstalled";
    readonly Error: "error";
};
export type UpdateInstallationStatus = ClosedEnum<typeof UpdateInstallationStatus>;
export declare const UpdateInstallationType: {
    readonly Prepayment: "prepayment";
    readonly Subscription: "subscription";
};
export type UpdateInstallationType = ClosedEnum<typeof UpdateInstallationType>;
export type Details = {
    label: string;
    value?: string | undefined;
};
export type HighlightedDetails = {
    label: string;
    value?: string | undefined;
};
export type BillingPlan = {
    id: string;
    type: UpdateInstallationType;
    name: string;
    description?: string | undefined;
    paymentMethodRequired?: boolean | undefined;
    cost?: string | undefined;
    details?: Array<Details> | undefined;
    highlightedDetails?: Array<HighlightedDetails> | undefined;
    effectiveDate?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    } | undefined;
};
export declare const Level: {
    readonly Info: "info";
    readonly Warn: "warn";
    readonly Error: "error";
};
export type Level = ClosedEnum<typeof Level>;
export type Notification1 = {
    level: Level;
    title: string;
    message?: string | undefined;
    href?: string | undefined;
};
/**
 * A notification to display to your customer. Send `null` to clear the current notification.
 */
export type Notification = Notification1 | string;
export type UpdateInstallationRequestBody = {
    status?: UpdateInstallationStatus | undefined;
    externalId?: string | undefined;
    billingPlan?: BillingPlan | undefined;
    /**
     * A notification to display to your customer. Send `null` to clear the current notification.
     */
    notification?: Notification1 | string | undefined;
};
export type UpdateInstallationRequest = {
    integrationConfigurationId: string;
    requestBody?: UpdateInstallationRequestBody | undefined;
};
/** @internal */
export declare const UpdateInstallationStatus$inboundSchema: z.ZodNativeEnum<typeof UpdateInstallationStatus>;
/** @internal */
export declare const UpdateInstallationStatus$outboundSchema: z.ZodNativeEnum<typeof UpdateInstallationStatus>;
/** @internal */
export declare const UpdateInstallationType$inboundSchema: z.ZodNativeEnum<typeof UpdateInstallationType>;
/** @internal */
export declare const UpdateInstallationType$outboundSchema: z.ZodNativeEnum<typeof UpdateInstallationType>;
/** @internal */
export declare const Details$inboundSchema: z.ZodType<Details, z.ZodTypeDef, unknown>;
/** @internal */
export type Details$Outbound = {
    label: string;
    value?: string | undefined;
};
/** @internal */
export declare const Details$outboundSchema: z.ZodType<Details$Outbound, z.ZodTypeDef, Details>;
export declare function detailsToJSON(details: Details): string;
export declare function detailsFromJSON(jsonString: string): SafeParseResult<Details, SDKValidationError>;
/** @internal */
export declare const HighlightedDetails$inboundSchema: z.ZodType<HighlightedDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type HighlightedDetails$Outbound = {
    label: string;
    value?: string | undefined;
};
/** @internal */
export declare const HighlightedDetails$outboundSchema: z.ZodType<HighlightedDetails$Outbound, z.ZodTypeDef, HighlightedDetails>;
export declare function highlightedDetailsToJSON(highlightedDetails: HighlightedDetails): string;
export declare function highlightedDetailsFromJSON(jsonString: string): SafeParseResult<HighlightedDetails, SDKValidationError>;
/** @internal */
export declare const BillingPlan$inboundSchema: z.ZodType<BillingPlan, z.ZodTypeDef, unknown>;
/** @internal */
export type BillingPlan$Outbound = {
    id: string;
    type: string;
    name: string;
    description?: string | undefined;
    paymentMethodRequired?: boolean | undefined;
    cost?: string | undefined;
    details?: Array<Details$Outbound> | undefined;
    highlightedDetails?: Array<HighlightedDetails$Outbound> | undefined;
    effectiveDate?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const BillingPlan$outboundSchema: z.ZodType<BillingPlan$Outbound, z.ZodTypeDef, BillingPlan>;
export declare function billingPlanToJSON(billingPlan: BillingPlan): string;
export declare function billingPlanFromJSON(jsonString: string): SafeParseResult<BillingPlan, SDKValidationError>;
/** @internal */
export declare const Level$inboundSchema: z.ZodNativeEnum<typeof Level>;
/** @internal */
export declare const Level$outboundSchema: z.ZodNativeEnum<typeof Level>;
/** @internal */
export declare const Notification1$inboundSchema: z.ZodType<Notification1, z.ZodTypeDef, unknown>;
/** @internal */
export type Notification1$Outbound = {
    level: string;
    title: string;
    message?: string | undefined;
    href?: string | undefined;
};
/** @internal */
export declare const Notification1$outboundSchema: z.ZodType<Notification1$Outbound, z.ZodTypeDef, Notification1>;
export declare function notification1ToJSON(notification1: Notification1): string;
export declare function notification1FromJSON(jsonString: string): SafeParseResult<Notification1, SDKValidationError>;
/** @internal */
export declare const Notification$inboundSchema: z.ZodType<Notification, z.ZodTypeDef, unknown>;
/** @internal */
export type Notification$Outbound = Notification1$Outbound | string;
/** @internal */
export declare const Notification$outboundSchema: z.ZodType<Notification$Outbound, z.ZodTypeDef, Notification>;
export declare function notificationToJSON(notification: Notification): string;
export declare function notificationFromJSON(jsonString: string): SafeParseResult<Notification, SDKValidationError>;
/** @internal */
export declare const UpdateInstallationRequestBody$inboundSchema: z.ZodType<UpdateInstallationRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateInstallationRequestBody$Outbound = {
    status?: string | undefined;
    externalId?: string | undefined;
    billingPlan?: BillingPlan$Outbound | undefined;
    notification?: Notification1$Outbound | string | undefined;
};
/** @internal */
export declare const UpdateInstallationRequestBody$outboundSchema: z.ZodType<UpdateInstallationRequestBody$Outbound, z.ZodTypeDef, UpdateInstallationRequestBody>;
export declare function updateInstallationRequestBodyToJSON(updateInstallationRequestBody: UpdateInstallationRequestBody): string;
export declare function updateInstallationRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateInstallationRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateInstallationRequest$inboundSchema: z.ZodType<UpdateInstallationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateInstallationRequest$Outbound = {
    integrationConfigurationId: string;
    RequestBody?: UpdateInstallationRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateInstallationRequest$outboundSchema: z.ZodType<UpdateInstallationRequest$Outbound, z.ZodTypeDef, UpdateInstallationRequest>;
export declare function updateInstallationRequestToJSON(updateInstallationRequest: UpdateInstallationRequest): string;
export declare function updateInstallationRequestFromJSON(jsonString: string): SafeParseResult<UpdateInstallationRequest, SDKValidationError>;
//# sourceMappingURL=updateinstallationop.d.ts.map