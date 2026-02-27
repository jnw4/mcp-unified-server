import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetIntegrationResourceRequest = {
    /**
     * The ID of the integration configuration (installation) the resource belongs to
     */
    integrationConfigurationId: string;
    /**
     * The ID provided by the 3rd party provider for the given resource
     */
    resourceId: string;
};
/**
 * The current status of the resource
 */
export declare const GetIntegrationResourceStatus: {
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
export type GetIntegrationResourceStatus = ClosedEnum<typeof GetIntegrationResourceStatus>;
export type Experimentation = {
    edgeConfigSyncingEnabled?: boolean | undefined;
    edgeConfigId?: string | undefined;
    edgeConfigTokenId?: string | undefined;
};
/**
 * Any settings provided for the resource to support its product's protocols
 */
export type ProtocolSettings = {
    experimentation?: Experimentation | undefined;
};
export declare const GetIntegrationResourceLevel: {
    readonly Error: "error";
    readonly Info: "info";
    readonly Warn: "warn";
};
export type GetIntegrationResourceLevel = ClosedEnum<typeof GetIntegrationResourceLevel>;
/**
 * The notification, if set, displayed to the user when viewing the resource in Vercel
 */
export type GetIntegrationResourceNotification = {
    title: string;
    level: GetIntegrationResourceLevel;
    message?: string | undefined;
    href?: string | undefined;
};
export type GetIntegrationResourceMetadata = string | number | Array<string> | Array<number> | boolean;
export type GetIntegrationResourceResponseBody = {
    /**
     * The ID provided by the 3rd party provider for the given resource
     */
    id: string;
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
    status?: GetIntegrationResourceStatus | undefined;
    /**
     * The ID of the product the resource is derived from
     */
    productId: string;
    /**
     * Any settings provided for the resource to support its product's protocols
     */
    protocolSettings?: ProtocolSettings | undefined;
    /**
     * The notification, if set, displayed to the user when viewing the resource in Vercel
     */
    notification?: GetIntegrationResourceNotification | undefined;
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
/** @internal */
export declare const GetIntegrationResourceRequest$inboundSchema: z.ZodType<GetIntegrationResourceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationResourceRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
};
/** @internal */
export declare const GetIntegrationResourceRequest$outboundSchema: z.ZodType<GetIntegrationResourceRequest$Outbound, z.ZodTypeDef, GetIntegrationResourceRequest>;
export declare function getIntegrationResourceRequestToJSON(getIntegrationResourceRequest: GetIntegrationResourceRequest): string;
export declare function getIntegrationResourceRequestFromJSON(jsonString: string): SafeParseResult<GetIntegrationResourceRequest, SDKValidationError>;
/** @internal */
export declare const GetIntegrationResourceStatus$inboundSchema: z.ZodNativeEnum<typeof GetIntegrationResourceStatus>;
/** @internal */
export declare const GetIntegrationResourceStatus$outboundSchema: z.ZodNativeEnum<typeof GetIntegrationResourceStatus>;
/** @internal */
export declare const Experimentation$inboundSchema: z.ZodType<Experimentation, z.ZodTypeDef, unknown>;
/** @internal */
export type Experimentation$Outbound = {
    edgeConfigSyncingEnabled?: boolean | undefined;
    edgeConfigId?: string | undefined;
    edgeConfigTokenId?: string | undefined;
};
/** @internal */
export declare const Experimentation$outboundSchema: z.ZodType<Experimentation$Outbound, z.ZodTypeDef, Experimentation>;
export declare function experimentationToJSON(experimentation: Experimentation): string;
export declare function experimentationFromJSON(jsonString: string): SafeParseResult<Experimentation, SDKValidationError>;
/** @internal */
export declare const ProtocolSettings$inboundSchema: z.ZodType<ProtocolSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type ProtocolSettings$Outbound = {
    experimentation?: Experimentation$Outbound | undefined;
};
/** @internal */
export declare const ProtocolSettings$outboundSchema: z.ZodType<ProtocolSettings$Outbound, z.ZodTypeDef, ProtocolSettings>;
export declare function protocolSettingsToJSON(protocolSettings: ProtocolSettings): string;
export declare function protocolSettingsFromJSON(jsonString: string): SafeParseResult<ProtocolSettings, SDKValidationError>;
/** @internal */
export declare const GetIntegrationResourceLevel$inboundSchema: z.ZodNativeEnum<typeof GetIntegrationResourceLevel>;
/** @internal */
export declare const GetIntegrationResourceLevel$outboundSchema: z.ZodNativeEnum<typeof GetIntegrationResourceLevel>;
/** @internal */
export declare const GetIntegrationResourceNotification$inboundSchema: z.ZodType<GetIntegrationResourceNotification, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationResourceNotification$Outbound = {
    title: string;
    level: string;
    message?: string | undefined;
    href?: string | undefined;
};
/** @internal */
export declare const GetIntegrationResourceNotification$outboundSchema: z.ZodType<GetIntegrationResourceNotification$Outbound, z.ZodTypeDef, GetIntegrationResourceNotification>;
export declare function getIntegrationResourceNotificationToJSON(getIntegrationResourceNotification: GetIntegrationResourceNotification): string;
export declare function getIntegrationResourceNotificationFromJSON(jsonString: string): SafeParseResult<GetIntegrationResourceNotification, SDKValidationError>;
/** @internal */
export declare const GetIntegrationResourceMetadata$inboundSchema: z.ZodType<GetIntegrationResourceMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationResourceMetadata$Outbound = string | number | Array<string> | Array<number> | boolean;
/** @internal */
export declare const GetIntegrationResourceMetadata$outboundSchema: z.ZodType<GetIntegrationResourceMetadata$Outbound, z.ZodTypeDef, GetIntegrationResourceMetadata>;
export declare function getIntegrationResourceMetadataToJSON(getIntegrationResourceMetadata: GetIntegrationResourceMetadata): string;
export declare function getIntegrationResourceMetadataFromJSON(jsonString: string): SafeParseResult<GetIntegrationResourceMetadata, SDKValidationError>;
/** @internal */
export declare const GetIntegrationResourceResponseBody$inboundSchema: z.ZodType<GetIntegrationResourceResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationResourceResponseBody$Outbound = {
    id: string;
    internalId: string;
    name: string;
    status?: string | undefined;
    productId: string;
    protocolSettings?: ProtocolSettings$Outbound | undefined;
    notification?: GetIntegrationResourceNotification$Outbound | undefined;
    billingPlanId?: string | undefined;
    metadata?: {
        [k: string]: string | number | Array<string> | Array<number> | boolean;
    } | undefined;
};
/** @internal */
export declare const GetIntegrationResourceResponseBody$outboundSchema: z.ZodType<GetIntegrationResourceResponseBody$Outbound, z.ZodTypeDef, GetIntegrationResourceResponseBody>;
export declare function getIntegrationResourceResponseBodyToJSON(getIntegrationResourceResponseBody: GetIntegrationResourceResponseBody): string;
export declare function getIntegrationResourceResponseBodyFromJSON(jsonString: string): SafeParseResult<GetIntegrationResourceResponseBody, SDKValidationError>;
//# sourceMappingURL=getintegrationresourceop.d.ts.map