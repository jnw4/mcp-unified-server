import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The delivery log format
 */
export declare const CreateLogDrainDeliveryFormat: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
/**
 * The delivery log format
 */
export type CreateLogDrainDeliveryFormat = ClosedEnum<typeof CreateLogDrainDeliveryFormat>;
export declare const CreateLogDrainSources: {
    readonly Static: "static";
    readonly Lambda: "lambda";
    readonly Build: "build";
    readonly Edge: "edge";
    readonly External: "external";
    readonly Firewall: "firewall";
};
export type CreateLogDrainSources = ClosedEnum<typeof CreateLogDrainSources>;
export declare const CreateLogDrainEnvironments: {
    readonly Preview: "preview";
    readonly Production: "production";
};
export type CreateLogDrainEnvironments = ClosedEnum<typeof CreateLogDrainEnvironments>;
export type CreateLogDrainRequestBody = {
    /**
     * The name of the log drain
     */
    name: string;
    projectIds?: Array<string> | undefined;
    /**
     * A secret to sign log drain notification headers so a consumer can verify their authenticity
     */
    secret?: string | undefined;
    /**
     * The delivery log format
     */
    deliveryFormat?: CreateLogDrainDeliveryFormat | undefined;
    /**
     * The url where you will receive logs. The protocol must be `https://` or `http://` when type is `json` and `ndjson`.
     */
    url: string;
    sources?: Array<CreateLogDrainSources> | undefined;
    /**
     * Headers to be sent together with the request
     */
    headers?: {
        [k: string]: string;
    } | undefined;
    environments?: Array<CreateLogDrainEnvironments> | undefined;
};
export type CreateLogDrainRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: CreateLogDrainRequestBody;
};
/**
 * The delivery log format
 */
export declare const CreateLogDrainLogDrainsDeliveryFormat: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
    readonly Protobuf: "protobuf";
};
/**
 * The delivery log format
 */
export type CreateLogDrainLogDrainsDeliveryFormat = ClosedEnum<typeof CreateLogDrainLogDrainsDeliveryFormat>;
/**
 * The sources from which logs are currently being delivered to this log drain.
 */
export declare const CreateLogDrainLogDrainsSources: {
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
export type CreateLogDrainLogDrainsSources = ClosedEnum<typeof CreateLogDrainLogDrainsSources>;
/**
 * Whether the log drain was created by an integration or by a user
 */
export declare const CreateLogDrainCreatedFrom: {
    readonly Integration: "integration";
    readonly SelfServed: "self-served";
};
/**
 * Whether the log drain was created by an integration or by a user
 */
export type CreateLogDrainCreatedFrom = ClosedEnum<typeof CreateLogDrainCreatedFrom>;
/**
 * The environment of log drain
 */
export declare const CreateLogDrainLogDrainsEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
/**
 * The environment of log drain
 */
export type CreateLogDrainLogDrainsEnvironments = ClosedEnum<typeof CreateLogDrainLogDrainsEnvironments>;
export type CreateLogDrainSource2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type CreateLogDrainSource1 = {
    kind: "self-served";
};
export type CreateLogDrainSource = CreateLogDrainSource1 | CreateLogDrainSource2;
/**
 * The log drain was successfully created
 */
export type CreateLogDrainResponseBody = {
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
    deliveryFormat?: CreateLogDrainLogDrainsDeliveryFormat | undefined;
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
    sources?: Array<CreateLogDrainLogDrainsSources> | undefined;
    /**
     * Whether the log drain was created by an integration or by a user
     */
    createdFrom?: CreateLogDrainCreatedFrom | undefined;
    /**
     * The headers to send with the request
     */
    headers?: {
        [k: string]: string;
    } | undefined;
    /**
     * The environment of log drain
     */
    environments?: Array<CreateLogDrainLogDrainsEnvironments> | undefined;
    /**
     * The branch regexp of log drain
     */
    branch?: string | undefined;
    /**
     * The sampling rate of log drain
     */
    samplingRate?: number | undefined;
    source: CreateLogDrainSource1 | CreateLogDrainSource2;
};
/** @internal */
export declare const CreateLogDrainDeliveryFormat$inboundSchema: z.ZodNativeEnum<typeof CreateLogDrainDeliveryFormat>;
/** @internal */
export declare const CreateLogDrainDeliveryFormat$outboundSchema: z.ZodNativeEnum<typeof CreateLogDrainDeliveryFormat>;
/** @internal */
export declare const CreateLogDrainSources$inboundSchema: z.ZodNativeEnum<typeof CreateLogDrainSources>;
/** @internal */
export declare const CreateLogDrainSources$outboundSchema: z.ZodNativeEnum<typeof CreateLogDrainSources>;
/** @internal */
export declare const CreateLogDrainEnvironments$inboundSchema: z.ZodNativeEnum<typeof CreateLogDrainEnvironments>;
/** @internal */
export declare const CreateLogDrainEnvironments$outboundSchema: z.ZodNativeEnum<typeof CreateLogDrainEnvironments>;
/** @internal */
export declare const CreateLogDrainRequestBody$inboundSchema: z.ZodType<CreateLogDrainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateLogDrainRequestBody$Outbound = {
    name: string;
    projectIds?: Array<string> | undefined;
    secret?: string | undefined;
    deliveryFormat?: string | undefined;
    url: string;
    sources?: Array<string> | undefined;
    headers?: {
        [k: string]: string;
    } | undefined;
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const CreateLogDrainRequestBody$outboundSchema: z.ZodType<CreateLogDrainRequestBody$Outbound, z.ZodTypeDef, CreateLogDrainRequestBody>;
export declare function createLogDrainRequestBodyToJSON(createLogDrainRequestBody: CreateLogDrainRequestBody): string;
export declare function createLogDrainRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateLogDrainRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateLogDrainRequest$inboundSchema: z.ZodType<CreateLogDrainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateLogDrainRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: CreateLogDrainRequestBody$Outbound;
};
/** @internal */
export declare const CreateLogDrainRequest$outboundSchema: z.ZodType<CreateLogDrainRequest$Outbound, z.ZodTypeDef, CreateLogDrainRequest>;
export declare function createLogDrainRequestToJSON(createLogDrainRequest: CreateLogDrainRequest): string;
export declare function createLogDrainRequestFromJSON(jsonString: string): SafeParseResult<CreateLogDrainRequest, SDKValidationError>;
/** @internal */
export declare const CreateLogDrainLogDrainsDeliveryFormat$inboundSchema: z.ZodNativeEnum<typeof CreateLogDrainLogDrainsDeliveryFormat>;
/** @internal */
export declare const CreateLogDrainLogDrainsDeliveryFormat$outboundSchema: z.ZodNativeEnum<typeof CreateLogDrainLogDrainsDeliveryFormat>;
/** @internal */
export declare const CreateLogDrainLogDrainsSources$inboundSchema: z.ZodNativeEnum<typeof CreateLogDrainLogDrainsSources>;
/** @internal */
export declare const CreateLogDrainLogDrainsSources$outboundSchema: z.ZodNativeEnum<typeof CreateLogDrainLogDrainsSources>;
/** @internal */
export declare const CreateLogDrainCreatedFrom$inboundSchema: z.ZodNativeEnum<typeof CreateLogDrainCreatedFrom>;
/** @internal */
export declare const CreateLogDrainCreatedFrom$outboundSchema: z.ZodNativeEnum<typeof CreateLogDrainCreatedFrom>;
/** @internal */
export declare const CreateLogDrainLogDrainsEnvironments$inboundSchema: z.ZodNativeEnum<typeof CreateLogDrainLogDrainsEnvironments>;
/** @internal */
export declare const CreateLogDrainLogDrainsEnvironments$outboundSchema: z.ZodNativeEnum<typeof CreateLogDrainLogDrainsEnvironments>;
/** @internal */
export declare const CreateLogDrainSource2$inboundSchema: z.ZodType<CreateLogDrainSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateLogDrainSource2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const CreateLogDrainSource2$outboundSchema: z.ZodType<CreateLogDrainSource2$Outbound, z.ZodTypeDef, CreateLogDrainSource2>;
export declare function createLogDrainSource2ToJSON(createLogDrainSource2: CreateLogDrainSource2): string;
export declare function createLogDrainSource2FromJSON(jsonString: string): SafeParseResult<CreateLogDrainSource2, SDKValidationError>;
/** @internal */
export declare const CreateLogDrainSource1$inboundSchema: z.ZodType<CreateLogDrainSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateLogDrainSource1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const CreateLogDrainSource1$outboundSchema: z.ZodType<CreateLogDrainSource1$Outbound, z.ZodTypeDef, CreateLogDrainSource1>;
export declare function createLogDrainSource1ToJSON(createLogDrainSource1: CreateLogDrainSource1): string;
export declare function createLogDrainSource1FromJSON(jsonString: string): SafeParseResult<CreateLogDrainSource1, SDKValidationError>;
/** @internal */
export declare const CreateLogDrainSource$inboundSchema: z.ZodType<CreateLogDrainSource, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateLogDrainSource$Outbound = CreateLogDrainSource1$Outbound | CreateLogDrainSource2$Outbound;
/** @internal */
export declare const CreateLogDrainSource$outboundSchema: z.ZodType<CreateLogDrainSource$Outbound, z.ZodTypeDef, CreateLogDrainSource>;
export declare function createLogDrainSourceToJSON(createLogDrainSource: CreateLogDrainSource): string;
export declare function createLogDrainSourceFromJSON(jsonString: string): SafeParseResult<CreateLogDrainSource, SDKValidationError>;
/** @internal */
export declare const CreateLogDrainResponseBody$inboundSchema: z.ZodType<CreateLogDrainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateLogDrainResponseBody$Outbound = {
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
    source: CreateLogDrainSource1$Outbound | CreateLogDrainSource2$Outbound;
};
/** @internal */
export declare const CreateLogDrainResponseBody$outboundSchema: z.ZodType<CreateLogDrainResponseBody$Outbound, z.ZodTypeDef, CreateLogDrainResponseBody>;
export declare function createLogDrainResponseBodyToJSON(createLogDrainResponseBody: CreateLogDrainResponseBody): string;
export declare function createLogDrainResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateLogDrainResponseBody, SDKValidationError>;
//# sourceMappingURL=createlogdrainop.d.ts.map