import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const Ownership: {
    readonly Owned: "owned";
    readonly Linked: "linked";
    readonly Sandbox: "sandbox";
};
export type Ownership = ClosedEnum<typeof Ownership>;
export declare const ImportResourceStatus: {
    readonly Ready: "ready";
    readonly Pending: "pending";
    readonly Onboarding: "onboarding";
    readonly Suspended: "suspended";
    readonly Resumed: "resumed";
    readonly Uninstalled: "uninstalled";
    readonly Error: "error";
};
export type ImportResourceStatus = ClosedEnum<typeof ImportResourceStatus>;
export declare const ImportResourceType: {
    readonly Prepayment: "prepayment";
    readonly Subscription: "subscription";
};
export type ImportResourceType = ClosedEnum<typeof ImportResourceType>;
export type ImportResourceDetails = {
    label: string;
    value?: string | undefined;
};
export type ImportResourceHighlightedDetails = {
    label: string;
    value?: string | undefined;
};
export type ImportResourceBillingPlan = {
    id: string;
    type: ImportResourceType;
    name: string;
    description?: string | undefined;
    paymentMethodRequired?: boolean | undefined;
    cost?: string | undefined;
    details?: Array<ImportResourceDetails> | undefined;
    highlightedDetails?: Array<ImportResourceHighlightedDetails> | undefined;
    effectiveDate?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    } | undefined;
};
export declare const ImportResourceLevel: {
    readonly Info: "info";
    readonly Warn: "warn";
    readonly Error: "error";
};
export type ImportResourceLevel = ClosedEnum<typeof ImportResourceLevel>;
export type ImportResourceNotification = {
    level: ImportResourceLevel;
    title: string;
    message?: string | undefined;
    href?: string | undefined;
};
/**
 * A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment.
 */
export type EnvironmentOverrides = {
    /**
     * Value used for development environment.
     */
    development?: string | undefined;
    /**
     * Value used for preview environment.
     */
    preview?: string | undefined;
    /**
     * Value used for production environment.
     */
    production?: string | undefined;
};
export type ImportResourceSecrets = {
    name: string;
    value: string;
    prefix?: string | undefined;
    /**
     * A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment.
     */
    environmentOverrides?: EnvironmentOverrides | undefined;
};
export type ImportResourceRequestBody = {
    ownership?: Ownership | undefined;
    productId: string;
    name: string;
    status: ImportResourceStatus;
    metadata?: {
        [k: string]: any;
    } | undefined;
    billingPlan?: ImportResourceBillingPlan | undefined;
    notification?: ImportResourceNotification | undefined;
    extras?: {
        [k: string]: any;
    } | undefined;
    secrets?: Array<ImportResourceSecrets> | undefined;
};
export type ImportResourceRequest = {
    integrationConfigurationId: string;
    resourceId: string;
    requestBody?: ImportResourceRequestBody | undefined;
};
export type ImportResourceResponseBody = {
    name: string;
};
/** @internal */
export declare const Ownership$inboundSchema: z.ZodNativeEnum<typeof Ownership>;
/** @internal */
export declare const Ownership$outboundSchema: z.ZodNativeEnum<typeof Ownership>;
/** @internal */
export declare const ImportResourceStatus$inboundSchema: z.ZodNativeEnum<typeof ImportResourceStatus>;
/** @internal */
export declare const ImportResourceStatus$outboundSchema: z.ZodNativeEnum<typeof ImportResourceStatus>;
/** @internal */
export declare const ImportResourceType$inboundSchema: z.ZodNativeEnum<typeof ImportResourceType>;
/** @internal */
export declare const ImportResourceType$outboundSchema: z.ZodNativeEnum<typeof ImportResourceType>;
/** @internal */
export declare const ImportResourceDetails$inboundSchema: z.ZodType<ImportResourceDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type ImportResourceDetails$Outbound = {
    label: string;
    value?: string | undefined;
};
/** @internal */
export declare const ImportResourceDetails$outboundSchema: z.ZodType<ImportResourceDetails$Outbound, z.ZodTypeDef, ImportResourceDetails>;
export declare function importResourceDetailsToJSON(importResourceDetails: ImportResourceDetails): string;
export declare function importResourceDetailsFromJSON(jsonString: string): SafeParseResult<ImportResourceDetails, SDKValidationError>;
/** @internal */
export declare const ImportResourceHighlightedDetails$inboundSchema: z.ZodType<ImportResourceHighlightedDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type ImportResourceHighlightedDetails$Outbound = {
    label: string;
    value?: string | undefined;
};
/** @internal */
export declare const ImportResourceHighlightedDetails$outboundSchema: z.ZodType<ImportResourceHighlightedDetails$Outbound, z.ZodTypeDef, ImportResourceHighlightedDetails>;
export declare function importResourceHighlightedDetailsToJSON(importResourceHighlightedDetails: ImportResourceHighlightedDetails): string;
export declare function importResourceHighlightedDetailsFromJSON(jsonString: string): SafeParseResult<ImportResourceHighlightedDetails, SDKValidationError>;
/** @internal */
export declare const ImportResourceBillingPlan$inboundSchema: z.ZodType<ImportResourceBillingPlan, z.ZodTypeDef, unknown>;
/** @internal */
export type ImportResourceBillingPlan$Outbound = {
    id: string;
    type: string;
    name: string;
    description?: string | undefined;
    paymentMethodRequired?: boolean | undefined;
    cost?: string | undefined;
    details?: Array<ImportResourceDetails$Outbound> | undefined;
    highlightedDetails?: Array<ImportResourceHighlightedDetails$Outbound> | undefined;
    effectiveDate?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const ImportResourceBillingPlan$outboundSchema: z.ZodType<ImportResourceBillingPlan$Outbound, z.ZodTypeDef, ImportResourceBillingPlan>;
export declare function importResourceBillingPlanToJSON(importResourceBillingPlan: ImportResourceBillingPlan): string;
export declare function importResourceBillingPlanFromJSON(jsonString: string): SafeParseResult<ImportResourceBillingPlan, SDKValidationError>;
/** @internal */
export declare const ImportResourceLevel$inboundSchema: z.ZodNativeEnum<typeof ImportResourceLevel>;
/** @internal */
export declare const ImportResourceLevel$outboundSchema: z.ZodNativeEnum<typeof ImportResourceLevel>;
/** @internal */
export declare const ImportResourceNotification$inboundSchema: z.ZodType<ImportResourceNotification, z.ZodTypeDef, unknown>;
/** @internal */
export type ImportResourceNotification$Outbound = {
    level: string;
    title: string;
    message?: string | undefined;
    href?: string | undefined;
};
/** @internal */
export declare const ImportResourceNotification$outboundSchema: z.ZodType<ImportResourceNotification$Outbound, z.ZodTypeDef, ImportResourceNotification>;
export declare function importResourceNotificationToJSON(importResourceNotification: ImportResourceNotification): string;
export declare function importResourceNotificationFromJSON(jsonString: string): SafeParseResult<ImportResourceNotification, SDKValidationError>;
/** @internal */
export declare const EnvironmentOverrides$inboundSchema: z.ZodType<EnvironmentOverrides, z.ZodTypeDef, unknown>;
/** @internal */
export type EnvironmentOverrides$Outbound = {
    development?: string | undefined;
    preview?: string | undefined;
    production?: string | undefined;
};
/** @internal */
export declare const EnvironmentOverrides$outboundSchema: z.ZodType<EnvironmentOverrides$Outbound, z.ZodTypeDef, EnvironmentOverrides>;
export declare function environmentOverridesToJSON(environmentOverrides: EnvironmentOverrides): string;
export declare function environmentOverridesFromJSON(jsonString: string): SafeParseResult<EnvironmentOverrides, SDKValidationError>;
/** @internal */
export declare const ImportResourceSecrets$inboundSchema: z.ZodType<ImportResourceSecrets, z.ZodTypeDef, unknown>;
/** @internal */
export type ImportResourceSecrets$Outbound = {
    name: string;
    value: string;
    prefix?: string | undefined;
    environmentOverrides?: EnvironmentOverrides$Outbound | undefined;
};
/** @internal */
export declare const ImportResourceSecrets$outboundSchema: z.ZodType<ImportResourceSecrets$Outbound, z.ZodTypeDef, ImportResourceSecrets>;
export declare function importResourceSecretsToJSON(importResourceSecrets: ImportResourceSecrets): string;
export declare function importResourceSecretsFromJSON(jsonString: string): SafeParseResult<ImportResourceSecrets, SDKValidationError>;
/** @internal */
export declare const ImportResourceRequestBody$inboundSchema: z.ZodType<ImportResourceRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ImportResourceRequestBody$Outbound = {
    ownership?: string | undefined;
    productId: string;
    name: string;
    status: string;
    metadata?: {
        [k: string]: any;
    } | undefined;
    billingPlan?: ImportResourceBillingPlan$Outbound | undefined;
    notification?: ImportResourceNotification$Outbound | undefined;
    extras?: {
        [k: string]: any;
    } | undefined;
    secrets?: Array<ImportResourceSecrets$Outbound> | undefined;
};
/** @internal */
export declare const ImportResourceRequestBody$outboundSchema: z.ZodType<ImportResourceRequestBody$Outbound, z.ZodTypeDef, ImportResourceRequestBody>;
export declare function importResourceRequestBodyToJSON(importResourceRequestBody: ImportResourceRequestBody): string;
export declare function importResourceRequestBodyFromJSON(jsonString: string): SafeParseResult<ImportResourceRequestBody, SDKValidationError>;
/** @internal */
export declare const ImportResourceRequest$inboundSchema: z.ZodType<ImportResourceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ImportResourceRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
    RequestBody?: ImportResourceRequestBody$Outbound | undefined;
};
/** @internal */
export declare const ImportResourceRequest$outboundSchema: z.ZodType<ImportResourceRequest$Outbound, z.ZodTypeDef, ImportResourceRequest>;
export declare function importResourceRequestToJSON(importResourceRequest: ImportResourceRequest): string;
export declare function importResourceRequestFromJSON(jsonString: string): SafeParseResult<ImportResourceRequest, SDKValidationError>;
/** @internal */
export declare const ImportResourceResponseBody$inboundSchema: z.ZodType<ImportResourceResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ImportResourceResponseBody$Outbound = {
    name: string;
};
/** @internal */
export declare const ImportResourceResponseBody$outboundSchema: z.ZodType<ImportResourceResponseBody$Outbound, z.ZodTypeDef, ImportResourceResponseBody>;
export declare function importResourceResponseBodyToJSON(importResourceResponseBody: ImportResourceResponseBody): string;
export declare function importResourceResponseBodyFromJSON(jsonString: string): SafeParseResult<ImportResourceResponseBody, SDKValidationError>;
//# sourceMappingURL=importresourceop.d.ts.map