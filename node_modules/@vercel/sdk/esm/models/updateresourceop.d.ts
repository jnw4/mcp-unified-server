import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const UpdateResourceOwnership: {
    readonly Owned: "owned";
    readonly Linked: "linked";
    readonly Sandbox: "sandbox";
};
export type UpdateResourceOwnership = ClosedEnum<typeof UpdateResourceOwnership>;
export declare const UpdateResourceStatus: {
    readonly Ready: "ready";
    readonly Pending: "pending";
    readonly Onboarding: "onboarding";
    readonly Suspended: "suspended";
    readonly Resumed: "resumed";
    readonly Uninstalled: "uninstalled";
    readonly Error: "error";
};
export type UpdateResourceStatus = ClosedEnum<typeof UpdateResourceStatus>;
export declare const UpdateResourceType: {
    readonly Prepayment: "prepayment";
    readonly Subscription: "subscription";
};
export type UpdateResourceType = ClosedEnum<typeof UpdateResourceType>;
export type UpdateResourceDetails = {
    label: string;
    value?: string | undefined;
};
export type UpdateResourceHighlightedDetails = {
    label: string;
    value?: string | undefined;
};
export type UpdateResourceBillingPlan = {
    id: string;
    type: UpdateResourceType;
    name: string;
    description?: string | undefined;
    paymentMethodRequired?: boolean | undefined;
    cost?: string | undefined;
    details?: Array<UpdateResourceDetails> | undefined;
    highlightedDetails?: Array<UpdateResourceHighlightedDetails> | undefined;
    effectiveDate?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    } | undefined;
};
export declare const NotificationLevel: {
    readonly Info: "info";
    readonly Warn: "warn";
    readonly Error: "error";
};
export type NotificationLevel = ClosedEnum<typeof NotificationLevel>;
export type UpdateResourceNotification1 = {
    level: NotificationLevel;
    title: string;
    message?: string | undefined;
    href?: string | undefined;
};
export type UpdateResourceNotification = UpdateResourceNotification1 | string;
/**
 * A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment.
 */
export type UpdateResourceSecretsMarketplaceEnvironmentOverrides = {
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
export type SecretsSecrets = {
    name: string;
    value: string;
    prefix?: string | undefined;
    /**
     * A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment.
     */
    environmentOverrides?: UpdateResourceSecretsMarketplaceEnvironmentOverrides | undefined;
};
export type Secrets2 = {
    secrets: Array<SecretsSecrets>;
    /**
     * If true, will only overwrite the provided secrets instead of replacing all secrets.
     */
    partial?: boolean | undefined;
};
/**
 * A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment.
 */
export type SecretsEnvironmentOverrides = {
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
export type Secrets1 = {
    name: string;
    value: string;
    prefix?: string | undefined;
    /**
     * A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment.
     */
    environmentOverrides?: SecretsEnvironmentOverrides | undefined;
};
export type UpdateResourceSecrets = Secrets2 | Array<Secrets1>;
export type UpdateResourceRequestBody = {
    ownership?: UpdateResourceOwnership | undefined;
    name?: string | undefined;
    status?: UpdateResourceStatus | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    billingPlan?: UpdateResourceBillingPlan | undefined;
    notification?: UpdateResourceNotification1 | string | undefined;
    extras?: {
        [k: string]: any;
    } | undefined;
    secrets?: Secrets2 | Array<Secrets1> | undefined;
};
export type UpdateResourceRequest = {
    integrationConfigurationId: string;
    resourceId: string;
    requestBody?: UpdateResourceRequestBody | undefined;
};
export type UpdateResourceResponseBody = {
    name: string;
};
/** @internal */
export declare const UpdateResourceOwnership$inboundSchema: z.ZodNativeEnum<typeof UpdateResourceOwnership>;
/** @internal */
export declare const UpdateResourceOwnership$outboundSchema: z.ZodNativeEnum<typeof UpdateResourceOwnership>;
/** @internal */
export declare const UpdateResourceStatus$inboundSchema: z.ZodNativeEnum<typeof UpdateResourceStatus>;
/** @internal */
export declare const UpdateResourceStatus$outboundSchema: z.ZodNativeEnum<typeof UpdateResourceStatus>;
/** @internal */
export declare const UpdateResourceType$inboundSchema: z.ZodNativeEnum<typeof UpdateResourceType>;
/** @internal */
export declare const UpdateResourceType$outboundSchema: z.ZodNativeEnum<typeof UpdateResourceType>;
/** @internal */
export declare const UpdateResourceDetails$inboundSchema: z.ZodType<UpdateResourceDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceDetails$Outbound = {
    label: string;
    value?: string | undefined;
};
/** @internal */
export declare const UpdateResourceDetails$outboundSchema: z.ZodType<UpdateResourceDetails$Outbound, z.ZodTypeDef, UpdateResourceDetails>;
export declare function updateResourceDetailsToJSON(updateResourceDetails: UpdateResourceDetails): string;
export declare function updateResourceDetailsFromJSON(jsonString: string): SafeParseResult<UpdateResourceDetails, SDKValidationError>;
/** @internal */
export declare const UpdateResourceHighlightedDetails$inboundSchema: z.ZodType<UpdateResourceHighlightedDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceHighlightedDetails$Outbound = {
    label: string;
    value?: string | undefined;
};
/** @internal */
export declare const UpdateResourceHighlightedDetails$outboundSchema: z.ZodType<UpdateResourceHighlightedDetails$Outbound, z.ZodTypeDef, UpdateResourceHighlightedDetails>;
export declare function updateResourceHighlightedDetailsToJSON(updateResourceHighlightedDetails: UpdateResourceHighlightedDetails): string;
export declare function updateResourceHighlightedDetailsFromJSON(jsonString: string): SafeParseResult<UpdateResourceHighlightedDetails, SDKValidationError>;
/** @internal */
export declare const UpdateResourceBillingPlan$inboundSchema: z.ZodType<UpdateResourceBillingPlan, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceBillingPlan$Outbound = {
    id: string;
    type: string;
    name: string;
    description?: string | undefined;
    paymentMethodRequired?: boolean | undefined;
    cost?: string | undefined;
    details?: Array<UpdateResourceDetails$Outbound> | undefined;
    highlightedDetails?: Array<UpdateResourceHighlightedDetails$Outbound> | undefined;
    effectiveDate?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const UpdateResourceBillingPlan$outboundSchema: z.ZodType<UpdateResourceBillingPlan$Outbound, z.ZodTypeDef, UpdateResourceBillingPlan>;
export declare function updateResourceBillingPlanToJSON(updateResourceBillingPlan: UpdateResourceBillingPlan): string;
export declare function updateResourceBillingPlanFromJSON(jsonString: string): SafeParseResult<UpdateResourceBillingPlan, SDKValidationError>;
/** @internal */
export declare const NotificationLevel$inboundSchema: z.ZodNativeEnum<typeof NotificationLevel>;
/** @internal */
export declare const NotificationLevel$outboundSchema: z.ZodNativeEnum<typeof NotificationLevel>;
/** @internal */
export declare const UpdateResourceNotification1$inboundSchema: z.ZodType<UpdateResourceNotification1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceNotification1$Outbound = {
    level: string;
    title: string;
    message?: string | undefined;
    href?: string | undefined;
};
/** @internal */
export declare const UpdateResourceNotification1$outboundSchema: z.ZodType<UpdateResourceNotification1$Outbound, z.ZodTypeDef, UpdateResourceNotification1>;
export declare function updateResourceNotification1ToJSON(updateResourceNotification1: UpdateResourceNotification1): string;
export declare function updateResourceNotification1FromJSON(jsonString: string): SafeParseResult<UpdateResourceNotification1, SDKValidationError>;
/** @internal */
export declare const UpdateResourceNotification$inboundSchema: z.ZodType<UpdateResourceNotification, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceNotification$Outbound = UpdateResourceNotification1$Outbound | string;
/** @internal */
export declare const UpdateResourceNotification$outboundSchema: z.ZodType<UpdateResourceNotification$Outbound, z.ZodTypeDef, UpdateResourceNotification>;
export declare function updateResourceNotificationToJSON(updateResourceNotification: UpdateResourceNotification): string;
export declare function updateResourceNotificationFromJSON(jsonString: string): SafeParseResult<UpdateResourceNotification, SDKValidationError>;
/** @internal */
export declare const UpdateResourceSecretsMarketplaceEnvironmentOverrides$inboundSchema: z.ZodType<UpdateResourceSecretsMarketplaceEnvironmentOverrides, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceSecretsMarketplaceEnvironmentOverrides$Outbound = {
    development?: string | undefined;
    preview?: string | undefined;
    production?: string | undefined;
};
/** @internal */
export declare const UpdateResourceSecretsMarketplaceEnvironmentOverrides$outboundSchema: z.ZodType<UpdateResourceSecretsMarketplaceEnvironmentOverrides$Outbound, z.ZodTypeDef, UpdateResourceSecretsMarketplaceEnvironmentOverrides>;
export declare function updateResourceSecretsMarketplaceEnvironmentOverridesToJSON(updateResourceSecretsMarketplaceEnvironmentOverrides: UpdateResourceSecretsMarketplaceEnvironmentOverrides): string;
export declare function updateResourceSecretsMarketplaceEnvironmentOverridesFromJSON(jsonString: string): SafeParseResult<UpdateResourceSecretsMarketplaceEnvironmentOverrides, SDKValidationError>;
/** @internal */
export declare const SecretsSecrets$inboundSchema: z.ZodType<SecretsSecrets, z.ZodTypeDef, unknown>;
/** @internal */
export type SecretsSecrets$Outbound = {
    name: string;
    value: string;
    prefix?: string | undefined;
    environmentOverrides?: UpdateResourceSecretsMarketplaceEnvironmentOverrides$Outbound | undefined;
};
/** @internal */
export declare const SecretsSecrets$outboundSchema: z.ZodType<SecretsSecrets$Outbound, z.ZodTypeDef, SecretsSecrets>;
export declare function secretsSecretsToJSON(secretsSecrets: SecretsSecrets): string;
export declare function secretsSecretsFromJSON(jsonString: string): SafeParseResult<SecretsSecrets, SDKValidationError>;
/** @internal */
export declare const Secrets2$inboundSchema: z.ZodType<Secrets2, z.ZodTypeDef, unknown>;
/** @internal */
export type Secrets2$Outbound = {
    secrets: Array<SecretsSecrets$Outbound>;
    partial?: boolean | undefined;
};
/** @internal */
export declare const Secrets2$outboundSchema: z.ZodType<Secrets2$Outbound, z.ZodTypeDef, Secrets2>;
export declare function secrets2ToJSON(secrets2: Secrets2): string;
export declare function secrets2FromJSON(jsonString: string): SafeParseResult<Secrets2, SDKValidationError>;
/** @internal */
export declare const SecretsEnvironmentOverrides$inboundSchema: z.ZodType<SecretsEnvironmentOverrides, z.ZodTypeDef, unknown>;
/** @internal */
export type SecretsEnvironmentOverrides$Outbound = {
    development?: string | undefined;
    preview?: string | undefined;
    production?: string | undefined;
};
/** @internal */
export declare const SecretsEnvironmentOverrides$outboundSchema: z.ZodType<SecretsEnvironmentOverrides$Outbound, z.ZodTypeDef, SecretsEnvironmentOverrides>;
export declare function secretsEnvironmentOverridesToJSON(secretsEnvironmentOverrides: SecretsEnvironmentOverrides): string;
export declare function secretsEnvironmentOverridesFromJSON(jsonString: string): SafeParseResult<SecretsEnvironmentOverrides, SDKValidationError>;
/** @internal */
export declare const Secrets1$inboundSchema: z.ZodType<Secrets1, z.ZodTypeDef, unknown>;
/** @internal */
export type Secrets1$Outbound = {
    name: string;
    value: string;
    prefix?: string | undefined;
    environmentOverrides?: SecretsEnvironmentOverrides$Outbound | undefined;
};
/** @internal */
export declare const Secrets1$outboundSchema: z.ZodType<Secrets1$Outbound, z.ZodTypeDef, Secrets1>;
export declare function secrets1ToJSON(secrets1: Secrets1): string;
export declare function secrets1FromJSON(jsonString: string): SafeParseResult<Secrets1, SDKValidationError>;
/** @internal */
export declare const UpdateResourceSecrets$inboundSchema: z.ZodType<UpdateResourceSecrets, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceSecrets$Outbound = Secrets2$Outbound | Array<Secrets1$Outbound>;
/** @internal */
export declare const UpdateResourceSecrets$outboundSchema: z.ZodType<UpdateResourceSecrets$Outbound, z.ZodTypeDef, UpdateResourceSecrets>;
export declare function updateResourceSecretsToJSON(updateResourceSecrets: UpdateResourceSecrets): string;
export declare function updateResourceSecretsFromJSON(jsonString: string): SafeParseResult<UpdateResourceSecrets, SDKValidationError>;
/** @internal */
export declare const UpdateResourceRequestBody$inboundSchema: z.ZodType<UpdateResourceRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceRequestBody$Outbound = {
    ownership?: string | undefined;
    name?: string | undefined;
    status?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    billingPlan?: UpdateResourceBillingPlan$Outbound | undefined;
    notification?: UpdateResourceNotification1$Outbound | string | undefined;
    extras?: {
        [k: string]: any;
    } | undefined;
    secrets?: Secrets2$Outbound | Array<Secrets1$Outbound> | undefined;
};
/** @internal */
export declare const UpdateResourceRequestBody$outboundSchema: z.ZodType<UpdateResourceRequestBody$Outbound, z.ZodTypeDef, UpdateResourceRequestBody>;
export declare function updateResourceRequestBodyToJSON(updateResourceRequestBody: UpdateResourceRequestBody): string;
export declare function updateResourceRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateResourceRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateResourceRequest$inboundSchema: z.ZodType<UpdateResourceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
    RequestBody?: UpdateResourceRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateResourceRequest$outboundSchema: z.ZodType<UpdateResourceRequest$Outbound, z.ZodTypeDef, UpdateResourceRequest>;
export declare function updateResourceRequestToJSON(updateResourceRequest: UpdateResourceRequest): string;
export declare function updateResourceRequestFromJSON(jsonString: string): SafeParseResult<UpdateResourceRequest, SDKValidationError>;
/** @internal */
export declare const UpdateResourceResponseBody$inboundSchema: z.ZodType<UpdateResourceResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceResponseBody$Outbound = {
    name: string;
};
/** @internal */
export declare const UpdateResourceResponseBody$outboundSchema: z.ZodType<UpdateResourceResponseBody$Outbound, z.ZodTypeDef, UpdateResourceResponseBody>;
export declare function updateResourceResponseBodyToJSON(updateResourceResponseBody: UpdateResourceResponseBody): string;
export declare function updateResourceResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateResourceResponseBody, SDKValidationError>;
//# sourceMappingURL=updateresourceop.d.ts.map