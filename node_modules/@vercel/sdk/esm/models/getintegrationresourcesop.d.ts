import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetIntegrationResourcesRequest = {
    integrationConfigurationId: string;
};
/**
 * The current status of the resource
 */
export declare const GetIntegrationResourcesStatus: {
    readonly Error: "error";
    readonly Ready: "ready";
    readonly Pending: "pending";
    readonly Onboarding: "onboarding";
    readonly Suspended: "suspended";
    readonly Resumed: "resumed";
    readonly Uninstalled: "uninstalled";
};
/**
 * The current status of the resource
 */
export type GetIntegrationResourcesStatus = ClosedEnum<typeof GetIntegrationResourcesStatus>;
export type GetIntegrationResourcesExperimentation = {
    edgeConfigSyncingEnabled?: boolean | undefined;
    edgeConfigId?: string | undefined;
    edgeConfigTokenId?: string | undefined;
};
/**
 * Any settings provided for the resource to support its product's protocols
 */
export type GetIntegrationResourcesProtocolSettings = {
    experimentation?: GetIntegrationResourcesExperimentation | undefined;
};
export declare const GetIntegrationResourcesLevel: {
    readonly Error: "error";
    readonly Info: "info";
    readonly Warn: "warn";
};
export type GetIntegrationResourcesLevel = ClosedEnum<typeof GetIntegrationResourcesLevel>;
/**
 * The notification, if set, displayed to the user when viewing the resource in Vercel
 */
export type GetIntegrationResourcesNotification = {
    title: string;
    level: GetIntegrationResourcesLevel;
    message?: string | undefined;
    href?: string | undefined;
};
export type GetIntegrationResourcesMetadata = string | number | Array<string> | Array<number> | boolean;
export type GetIntegrationResourcesResources = {
    /**
     * The ID provided by the partner for the given resource
     */
    partnerId: string;
    /**
     * The ID assigned by Vercel for the given resource
     */
    internalId: string;
    /**
     * The name of the resource as it is recorded in Vercel
     */
    name: string;
    /**
     * The current status of the resource
     */
    status?: GetIntegrationResourcesStatus | undefined;
    /**
     * The ID of the product the resource is derived from
     */
    productId: string;
    /**
     * Any settings provided for the resource to support its product's protocols
     */
    protocolSettings?: GetIntegrationResourcesProtocolSettings | undefined;
    /**
     * The notification, if set, displayed to the user when viewing the resource in Vercel
     */
    notification?: GetIntegrationResourcesNotification | undefined;
    /**
     * The ID of the billing plan the resource is subscribed to, if applicable
     */
    billingPlanId?: string | undefined;
    /**
     * The configured metadata for the resource as defined by its product's Metadata Schema
     */
    metadata?: {
        [k: string]: string | number | Array<string> | Array<number> | boolean;
    } | undefined;
};
export type GetIntegrationResourcesResponseBody = {
    resources: Array<GetIntegrationResourcesResources>;
};
/** @internal */
export declare const GetIntegrationResourcesRequest$inboundSchema: z.ZodType<GetIntegrationResourcesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationResourcesRequest$Outbound = {
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetIntegrationResourcesRequest$outboundSchema: z.ZodType<GetIntegrationResourcesRequest$Outbound, z.ZodTypeDef, GetIntegrationResourcesRequest>;
export declare function getIntegrationResourcesRequestToJSON(getIntegrationResourcesRequest: GetIntegrationResourcesRequest): string;
export declare function getIntegrationResourcesRequestFromJSON(jsonString: string): SafeParseResult<GetIntegrationResourcesRequest, SDKValidationError>;
/** @internal */
export declare const GetIntegrationResourcesStatus$inboundSchema: z.ZodNativeEnum<typeof GetIntegrationResourcesStatus>;
/** @internal */
export declare const GetIntegrationResourcesStatus$outboundSchema: z.ZodNativeEnum<typeof GetIntegrationResourcesStatus>;
/** @internal */
export declare const GetIntegrationResourcesExperimentation$inboundSchema: z.ZodType<GetIntegrationResourcesExperimentation, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationResourcesExperimentation$Outbound = {
    edgeConfigSyncingEnabled?: boolean | undefined;
    edgeConfigId?: string | undefined;
    edgeConfigTokenId?: string | undefined;
};
/** @internal */
export declare const GetIntegrationResourcesExperimentation$outboundSchema: z.ZodType<GetIntegrationResourcesExperimentation$Outbound, z.ZodTypeDef, GetIntegrationResourcesExperimentation>;
export declare function getIntegrationResourcesExperimentationToJSON(getIntegrationResourcesExperimentation: GetIntegrationResourcesExperimentation): string;
export declare function getIntegrationResourcesExperimentationFromJSON(jsonString: string): SafeParseResult<GetIntegrationResourcesExperimentation, SDKValidationError>;
/** @internal */
export declare const GetIntegrationResourcesProtocolSettings$inboundSchema: z.ZodType<GetIntegrationResourcesProtocolSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationResourcesProtocolSettings$Outbound = {
    experimentation?: GetIntegrationResourcesExperimentation$Outbound | undefined;
};
/** @internal */
export declare const GetIntegrationResourcesProtocolSettings$outboundSchema: z.ZodType<GetIntegrationResourcesProtocolSettings$Outbound, z.ZodTypeDef, GetIntegrationResourcesProtocolSettings>;
export declare function getIntegrationResourcesProtocolSettingsToJSON(getIntegrationResourcesProtocolSettings: GetIntegrationResourcesProtocolSettings): string;
export declare function getIntegrationResourcesProtocolSettingsFromJSON(jsonString: string): SafeParseResult<GetIntegrationResourcesProtocolSettings, SDKValidationError>;
/** @internal */
export declare const GetIntegrationResourcesLevel$inboundSchema: z.ZodNativeEnum<typeof GetIntegrationResourcesLevel>;
/** @internal */
export declare const GetIntegrationResourcesLevel$outboundSchema: z.ZodNativeEnum<typeof GetIntegrationResourcesLevel>;
/** @internal */
export declare const GetIntegrationResourcesNotification$inboundSchema: z.ZodType<GetIntegrationResourcesNotification, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationResourcesNotification$Outbound = {
    title: string;
    level: string;
    message?: string | undefined;
    href?: string | undefined;
};
/** @internal */
export declare const GetIntegrationResourcesNotification$outboundSchema: z.ZodType<GetIntegrationResourcesNotification$Outbound, z.ZodTypeDef, GetIntegrationResourcesNotification>;
export declare function getIntegrationResourcesNotificationToJSON(getIntegrationResourcesNotification: GetIntegrationResourcesNotification): string;
export declare function getIntegrationResourcesNotificationFromJSON(jsonString: string): SafeParseResult<GetIntegrationResourcesNotification, SDKValidationError>;
/** @internal */
export declare const GetIntegrationResourcesMetadata$inboundSchema: z.ZodType<GetIntegrationResourcesMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationResourcesMetadata$Outbound = string | number | Array<string> | Array<number> | boolean;
/** @internal */
export declare const GetIntegrationResourcesMetadata$outboundSchema: z.ZodType<GetIntegrationResourcesMetadata$Outbound, z.ZodTypeDef, GetIntegrationResourcesMetadata>;
export declare function getIntegrationResourcesMetadataToJSON(getIntegrationResourcesMetadata: GetIntegrationResourcesMetadata): string;
export declare function getIntegrationResourcesMetadataFromJSON(jsonString: string): SafeParseResult<GetIntegrationResourcesMetadata, SDKValidationError>;
/** @internal */
export declare const GetIntegrationResourcesResources$inboundSchema: z.ZodType<GetIntegrationResourcesResources, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationResourcesResources$Outbound = {
    partnerId: string;
    internalId: string;
    name: string;
    status?: string | undefined;
    productId: string;
    protocolSettings?: GetIntegrationResourcesProtocolSettings$Outbound | undefined;
    notification?: GetIntegrationResourcesNotification$Outbound | undefined;
    billingPlanId?: string | undefined;
    metadata?: {
        [k: string]: string | number | Array<string> | Array<number> | boolean;
    } | undefined;
};
/** @internal */
export declare const GetIntegrationResourcesResources$outboundSchema: z.ZodType<GetIntegrationResourcesResources$Outbound, z.ZodTypeDef, GetIntegrationResourcesResources>;
export declare function getIntegrationResourcesResourcesToJSON(getIntegrationResourcesResources: GetIntegrationResourcesResources): string;
export declare function getIntegrationResourcesResourcesFromJSON(jsonString: string): SafeParseResult<GetIntegrationResourcesResources, SDKValidationError>;
/** @internal */
export declare const GetIntegrationResourcesResponseBody$inboundSchema: z.ZodType<GetIntegrationResourcesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationResourcesResponseBody$Outbound = {
    resources: Array<GetIntegrationResourcesResources$Outbound>;
};
/** @internal */
export declare const GetIntegrationResourcesResponseBody$outboundSchema: z.ZodType<GetIntegrationResourcesResponseBody$Outbound, z.ZodTypeDef, GetIntegrationResourcesResponseBody>;
export declare function getIntegrationResourcesResponseBodyToJSON(getIntegrationResourcesResponseBody: GetIntegrationResourcesResponseBody): string;
export declare function getIntegrationResourcesResponseBodyFromJSON(jsonString: string): SafeParseResult<GetIntegrationResourcesResponseBody, SDKValidationError>;
//# sourceMappingURL=getintegrationresourcesop.d.ts.map