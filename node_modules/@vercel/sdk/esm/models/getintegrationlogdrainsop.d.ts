import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetIntegrationLogDrainsRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/**
 * The delivery log format
 */
export declare const GetIntegrationLogDrainsDeliveryFormat: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
    readonly Protobuf: "protobuf";
};
/**
 * The delivery log format
 */
export type GetIntegrationLogDrainsDeliveryFormat = ClosedEnum<typeof GetIntegrationLogDrainsDeliveryFormat>;
/**
 * The sources from which logs are currently being delivered to this log drain.
 */
export declare const GetIntegrationLogDrainsSources: {
    readonly External: "external";
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
/**
 * The sources from which logs are currently being delivered to this log drain.
 */
export type GetIntegrationLogDrainsSources = ClosedEnum<typeof GetIntegrationLogDrainsSources>;
/**
 * Whether the log drain was created by an integration or by a user
 */
export declare const CreatedFrom: {
    readonly Integration: "integration";
    readonly SelfServed: "self-served";
};
/**
 * Whether the log drain was created by an integration or by a user
 */
export type CreatedFrom = ClosedEnum<typeof CreatedFrom>;
/**
 * The environment of log drain
 */
export declare const GetIntegrationLogDrainsEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
/**
 * The environment of log drain
 */
export type GetIntegrationLogDrainsEnvironments = ClosedEnum<typeof GetIntegrationLogDrainsEnvironments>;
export type GetIntegrationLogDrainsSource2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type GetIntegrationLogDrainsSource1 = {
    kind: "self-served";
};
export type GetIntegrationLogDrainsSource = GetIntegrationLogDrainsSource1 | GetIntegrationLogDrainsSource2;
export type GetIntegrationLogDrainsResponseBody = {
    /**
     * The oauth2 client application id that created this log drain
     */
    clientId?: string | undefined;
    /**
     * The client configuration this log drain was created with
     */
    configurationId?: string | undefined;
    /**
     * A timestamp that tells you when the log drain was created
     */
    createdAt: number;
    /**
     * The unique identifier of the log drain. Always prefixed with `ld_`
     */
    id: string;
    /**
     * The delivery log format
     */
    deliveryFormat?: GetIntegrationLogDrainsDeliveryFormat | undefined;
    /**
     * The name of the log drain
     */
    name: string;
    /**
     * The identifier of the team or user whose events will trigger the log drain
     */
    ownerId: string;
    projectId?: string | null | undefined;
    /**
     * The identifier of the projects this log drain is associated with
     */
    projectIds?: Array<string> | undefined;
    /**
     * The URL to call when logs are generated
     */
    url: string;
    /**
     * The sources from which logs are currently being delivered to this log drain.
     */
    sources?: Array<GetIntegrationLogDrainsSources> | undefined;
    /**
     * Whether the log drain was created by an integration or by a user
     */
    createdFrom?: CreatedFrom | undefined;
    /**
     * The headers to send with the request
     */
    headers?: {
        [k: string]: string;
    } | undefined;
    /**
     * The environment of log drain
     */
    environments?: Array<GetIntegrationLogDrainsEnvironments> | undefined;
    /**
     * The branch regexp of log drain
     */
    branch?: string | undefined;
    /**
     * The sampling rate of log drain
     */
    samplingRate?: number | undefined;
    source: GetIntegrationLogDrainsSource1 | GetIntegrationLogDrainsSource2;
};
/** @internal */
export declare const GetIntegrationLogDrainsRequest$inboundSchema: z.ZodType<GetIntegrationLogDrainsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationLogDrainsRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetIntegrationLogDrainsRequest$outboundSchema: z.ZodType<GetIntegrationLogDrainsRequest$Outbound, z.ZodTypeDef, GetIntegrationLogDrainsRequest>;
export declare function getIntegrationLogDrainsRequestToJSON(getIntegrationLogDrainsRequest: GetIntegrationLogDrainsRequest): string;
export declare function getIntegrationLogDrainsRequestFromJSON(jsonString: string): SafeParseResult<GetIntegrationLogDrainsRequest, SDKValidationError>;
/** @internal */
export declare const GetIntegrationLogDrainsDeliveryFormat$inboundSchema: z.ZodNativeEnum<typeof GetIntegrationLogDrainsDeliveryFormat>;
/** @internal */
export declare const GetIntegrationLogDrainsDeliveryFormat$outboundSchema: z.ZodNativeEnum<typeof GetIntegrationLogDrainsDeliveryFormat>;
/** @internal */
export declare const GetIntegrationLogDrainsSources$inboundSchema: z.ZodNativeEnum<typeof GetIntegrationLogDrainsSources>;
/** @internal */
export declare const GetIntegrationLogDrainsSources$outboundSchema: z.ZodNativeEnum<typeof GetIntegrationLogDrainsSources>;
/** @internal */
export declare const CreatedFrom$inboundSchema: z.ZodNativeEnum<typeof CreatedFrom>;
/** @internal */
export declare const CreatedFrom$outboundSchema: z.ZodNativeEnum<typeof CreatedFrom>;
/** @internal */
export declare const GetIntegrationLogDrainsEnvironments$inboundSchema: z.ZodNativeEnum<typeof GetIntegrationLogDrainsEnvironments>;
/** @internal */
export declare const GetIntegrationLogDrainsEnvironments$outboundSchema: z.ZodNativeEnum<typeof GetIntegrationLogDrainsEnvironments>;
/** @internal */
export declare const GetIntegrationLogDrainsSource2$inboundSchema: z.ZodType<GetIntegrationLogDrainsSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationLogDrainsSource2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetIntegrationLogDrainsSource2$outboundSchema: z.ZodType<GetIntegrationLogDrainsSource2$Outbound, z.ZodTypeDef, GetIntegrationLogDrainsSource2>;
export declare function getIntegrationLogDrainsSource2ToJSON(getIntegrationLogDrainsSource2: GetIntegrationLogDrainsSource2): string;
export declare function getIntegrationLogDrainsSource2FromJSON(jsonString: string): SafeParseResult<GetIntegrationLogDrainsSource2, SDKValidationError>;
/** @internal */
export declare const GetIntegrationLogDrainsSource1$inboundSchema: z.ZodType<GetIntegrationLogDrainsSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationLogDrainsSource1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const GetIntegrationLogDrainsSource1$outboundSchema: z.ZodType<GetIntegrationLogDrainsSource1$Outbound, z.ZodTypeDef, GetIntegrationLogDrainsSource1>;
export declare function getIntegrationLogDrainsSource1ToJSON(getIntegrationLogDrainsSource1: GetIntegrationLogDrainsSource1): string;
export declare function getIntegrationLogDrainsSource1FromJSON(jsonString: string): SafeParseResult<GetIntegrationLogDrainsSource1, SDKValidationError>;
/** @internal */
export declare const GetIntegrationLogDrainsSource$inboundSchema: z.ZodType<GetIntegrationLogDrainsSource, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationLogDrainsSource$Outbound = GetIntegrationLogDrainsSource1$Outbound | GetIntegrationLogDrainsSource2$Outbound;
/** @internal */
export declare const GetIntegrationLogDrainsSource$outboundSchema: z.ZodType<GetIntegrationLogDrainsSource$Outbound, z.ZodTypeDef, GetIntegrationLogDrainsSource>;
export declare function getIntegrationLogDrainsSourceToJSON(getIntegrationLogDrainsSource: GetIntegrationLogDrainsSource): string;
export declare function getIntegrationLogDrainsSourceFromJSON(jsonString: string): SafeParseResult<GetIntegrationLogDrainsSource, SDKValidationError>;
/** @internal */
export declare const GetIntegrationLogDrainsResponseBody$inboundSchema: z.ZodType<GetIntegrationLogDrainsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetIntegrationLogDrainsResponseBody$Outbound = {
    clientId?: string | undefined;
    configurationId?: string | undefined;
    createdAt: number;
    id: string;
    deliveryFormat?: string | undefined;
    name: string;
    ownerId: string;
    projectId?: string | null | undefined;
    projectIds?: Array<string> | undefined;
    url: string;
    sources?: Array<string> | undefined;
    createdFrom?: string | undefined;
    headers?: {
        [k: string]: string;
    } | undefined;
    environments?: Array<string> | undefined;
    branch?: string | undefined;
    samplingRate?: number | undefined;
    source: GetIntegrationLogDrainsSource1$Outbound | GetIntegrationLogDrainsSource2$Outbound;
};
/** @internal */
export declare const GetIntegrationLogDrainsResponseBody$outboundSchema: z.ZodType<GetIntegrationLogDrainsResponseBody$Outbound, z.ZodTypeDef, GetIntegrationLogDrainsResponseBody>;
export declare function getIntegrationLogDrainsResponseBodyToJSON(getIntegrationLogDrainsResponseBody: GetIntegrationLogDrainsResponseBody): string;
export declare function getIntegrationLogDrainsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetIntegrationLogDrainsResponseBody, SDKValidationError>;
//# sourceMappingURL=getintegrationlogdrainsop.d.ts.map