import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const UpdateDrainProjects: {
    readonly Some: "some";
    readonly All: "all";
};
export type UpdateDrainProjects = ClosedEnum<typeof UpdateDrainProjects>;
export type UpdateDrainFilterDrains2 = {
    type: string;
    text: string;
};
export type FilterProject = {
    ids?: Array<string> | undefined;
};
export declare const UpdateDrainFilterSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type UpdateDrainFilterSources = ClosedEnum<typeof UpdateDrainFilterSources>;
export type FilterLog = {
    sources?: Array<UpdateDrainFilterSources> | undefined;
};
export declare const UpdateDrainFilterEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type UpdateDrainFilterEnvironments = ClosedEnum<typeof UpdateDrainFilterEnvironments>;
export type FilterDeployment = {
    environments?: Array<UpdateDrainFilterEnvironments> | undefined;
};
export type UpdateDrainFilter1 = {
    type: string;
    project?: FilterProject | undefined;
    log?: FilterLog | undefined;
    deployment?: FilterDeployment | undefined;
};
export type UpdateDrainFilterFilter = UpdateDrainFilterDrains2 | UpdateDrainFilter1;
export type UpdateDrainFilter2 = {
    version: string;
    filter: UpdateDrainFilterDrains2 | UpdateDrainFilter1;
};
export type UpdateDrainFilter = UpdateDrainFilter2 | string;
export type UpdateDrainSchemas = {
    version: string;
};
export type UpdateDrainEndpoint1 = {
    traces: string;
};
export type DeliveryEndpoint = UpdateDrainEndpoint1;
export declare const UpdateDrainDeliveryDrainsEncoding: {
    readonly Proto: "proto";
    readonly Json: "json";
};
export type UpdateDrainDeliveryDrainsEncoding = ClosedEnum<typeof UpdateDrainDeliveryDrainsEncoding>;
export type UpdateDrainDelivery2 = {
    type: string;
    endpoint: UpdateDrainEndpoint1;
    encoding: UpdateDrainDeliveryDrainsEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: string | undefined;
};
export declare const DeliveryCompression: {
    readonly Gzip: "gzip";
    readonly None: "none";
};
export type DeliveryCompression = ClosedEnum<typeof DeliveryCompression>;
export declare const UpdateDrainDeliveryEncoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type UpdateDrainDeliveryEncoding = ClosedEnum<typeof UpdateDrainDeliveryEncoding>;
export type UpdateDrainDelivery1 = {
    type: string;
    endpoint: string;
    compression?: DeliveryCompression | undefined;
    encoding: UpdateDrainDeliveryEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: string | undefined;
};
export type UpdateDrainDelivery = UpdateDrainDelivery1 | UpdateDrainDelivery2;
/**
 * Environment to apply sampling to
 */
export declare const UpdateDrainEnv: {
    readonly Production: "production";
    readonly Preview: "preview";
};
/**
 * Environment to apply sampling to
 */
export type UpdateDrainEnv = ClosedEnum<typeof UpdateDrainEnv>;
export type UpdateDrainSampling = {
    type: string;
    /**
     * Sampling rate from 0 to 1 (e.g., 0.1 for 10%)
     */
    rate: number;
    /**
     * Environment to apply sampling to
     */
    env?: UpdateDrainEnv | undefined;
    /**
     * Request path prefix to apply the sampling rule to
     */
    requestPath?: string | undefined;
};
export type UpdateDrainTransforms = {
    id: string;
};
export declare const UpdateDrainStatus: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
};
export type UpdateDrainStatus = ClosedEnum<typeof UpdateDrainStatus>;
export type UpdateDrainSource2 = {
    kind?: string | undefined;
};
export type UpdateDrain13 = {
    kind?: string | undefined;
};
export type UpdateDrain12 = {
    kind?: string | undefined;
    resourceId: string;
};
export type UpdateDrain11 = {
    kind?: string | undefined;
    externalResourceId: string;
};
export type UpdateDrainSource1 = UpdateDrain11 | UpdateDrain12 | UpdateDrain13;
export type UpdateDrainSource = UpdateDrain11 | UpdateDrain12 | UpdateDrain13 | UpdateDrainSource2;
export type UpdateDrainRequestBody = {
    name?: string | undefined;
    projects?: UpdateDrainProjects | undefined;
    projectIds?: Array<string> | null | undefined;
    filter?: UpdateDrainFilter2 | string | null | undefined;
    schemas?: {
        [k: string]: UpdateDrainSchemas;
    } | undefined;
    delivery?: UpdateDrainDelivery1 | UpdateDrainDelivery2 | undefined;
    sampling?: Array<UpdateDrainSampling> | null | undefined;
    transforms?: Array<UpdateDrainTransforms> | null | undefined;
    status?: UpdateDrainStatus | undefined;
    source?: UpdateDrain11 | UpdateDrain12 | UpdateDrain13 | UpdateDrainSource2 | undefined;
};
export type UpdateDrainRequest = {
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UpdateDrainRequestBody | undefined;
};
export declare const UpdateDrainResponseBodyDrainsStatus: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
    readonly Errored: "errored";
};
export type UpdateDrainResponseBodyDrainsStatus = ClosedEnum<typeof UpdateDrainResponseBodyDrainsStatus>;
export declare const UpdateDrainResponseBodyDrainsDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly DisabledByAdmin: "disabled-by-admin";
};
export type UpdateDrainResponseBodyDrainsDisabledReason = ClosedEnum<typeof UpdateDrainResponseBodyDrainsDisabledReason>;
export type UpdateDrainResponseBodyDrainsLog = {};
export type UpdateDrainResponseBodyDrainsTrace = {};
export type UpdateDrainResponseBodyDrainsAnalytics = {};
export type UpdateDrainResponseBodyDrainsSpeedInsights = {};
export type UpdateDrainResponseBodyDrainsSchemas = {
    log?: UpdateDrainResponseBodyDrainsLog | undefined;
    trace?: UpdateDrainResponseBodyDrainsTrace | undefined;
    analytics?: UpdateDrainResponseBodyDrainsAnalytics | undefined;
    speedInsights?: UpdateDrainResponseBodyDrainsSpeedInsights | undefined;
};
export declare const UpdateDrainDeliveryDrainsTarget: {
    readonly VercelOtelTracesDb: "vercel-otel-traces-db";
};
export type UpdateDrainDeliveryDrainsTarget = ClosedEnum<typeof UpdateDrainDeliveryDrainsTarget>;
export type UpdateDrainDeliveryDrains4 = {
    type: "internal";
    target: UpdateDrainDeliveryDrainsTarget;
};
export type UpdateDrainDeliveryDrains3 = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
export type UpdateDrainDeliveryDrainsEndpoint = {
    traces: string;
};
export declare const UpdateDrainDeliveryDrainsResponse200ApplicationJSONResponseBodyEncoding: {
    readonly Json: "json";
    readonly Proto: "proto";
};
export type UpdateDrainDeliveryDrainsResponse200ApplicationJSONResponseBodyEncoding = ClosedEnum<typeof UpdateDrainDeliveryDrainsResponse200ApplicationJSONResponseBodyEncoding>;
export declare const UpdateDrainSecretDrainsResponse200Kind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type UpdateDrainSecretDrainsResponse200Kind = ClosedEnum<typeof UpdateDrainSecretDrainsResponse200Kind>;
export type UpdateDrainSecretDrainsResponse2002 = {
    kind: UpdateDrainSecretDrainsResponse200Kind;
};
export type UpdateDrainDeliveryDrainsResponse200Secret = UpdateDrainSecretDrainsResponse2002 | string;
export type UpdateDrainDeliveryDrainsResponse2 = {
    type: "otlphttp";
    endpoint: UpdateDrainDeliveryDrainsEndpoint;
    encoding: UpdateDrainDeliveryDrainsResponse200ApplicationJSONResponseBodyEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: UpdateDrainSecretDrainsResponse2002 | string | undefined;
};
export declare const UpdateDrainDeliveryDrainsResponse200ApplicationJSONEncoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type UpdateDrainDeliveryDrainsResponse200ApplicationJSONEncoding = ClosedEnum<typeof UpdateDrainDeliveryDrainsResponse200ApplicationJSONEncoding>;
export declare const UpdateDrainDeliveryDrainsCompression: {
    readonly None: "none";
    readonly Gzip: "gzip";
};
export type UpdateDrainDeliveryDrainsCompression = ClosedEnum<typeof UpdateDrainDeliveryDrainsCompression>;
export declare const UpdateDrainSecretDrainsResponseKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type UpdateDrainSecretDrainsResponseKind = ClosedEnum<typeof UpdateDrainSecretDrainsResponseKind>;
export type UpdateDrainSecretDrainsResponse2 = {
    kind: UpdateDrainSecretDrainsResponseKind;
};
export type UpdateDrainDeliveryDrainsResponseSecret = UpdateDrainSecretDrainsResponse2 | string;
export type UpdateDrainDeliveryDrainsResponse1 = {
    type: "http";
    endpoint: string;
    encoding: UpdateDrainDeliveryDrainsResponse200ApplicationJSONEncoding;
    compression?: UpdateDrainDeliveryDrainsCompression | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: UpdateDrainSecretDrainsResponse2 | string | undefined;
};
export type UpdateDrainResponseBodyDrainsDelivery = UpdateDrainDeliveryDrainsResponse1 | UpdateDrainDeliveryDrainsResponse2 | UpdateDrainDeliveryDrains3 | UpdateDrainDeliveryDrains4;
export declare const UpdateDrainResponseBodyDrainsType: {
    readonly HeadSampling: "head_sampling";
};
export type UpdateDrainResponseBodyDrainsType = ClosedEnum<typeof UpdateDrainResponseBodyDrainsType>;
export declare const UpdateDrainResponseBodyDrainsEnv: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type UpdateDrainResponseBodyDrainsEnv = ClosedEnum<typeof UpdateDrainResponseBodyDrainsEnv>;
export type UpdateDrainResponseBodyDrainsSampling = {
    type: UpdateDrainResponseBodyDrainsType;
    rate: number;
    env?: UpdateDrainResponseBodyDrainsEnv | undefined;
    requestPath?: string | undefined;
};
export type UpdateDrainSourceDrainsResponse2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type UpdateDrainSourceDrainsResponse1 = {
    kind: "self-served";
};
export type UpdateDrainResponseBodyDrainsSource = UpdateDrainSourceDrainsResponse1 | UpdateDrainSourceDrainsResponse2;
export type UpdateDrainFilterDrainsResponse2002 = {
    type: "odata";
    text: string;
};
export type UpdateDrainFilterDrainsProject = {
    ids?: Array<string> | undefined;
};
export declare const UpdateDrainFilterDrainsResponseSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type UpdateDrainFilterDrainsResponseSources = ClosedEnum<typeof UpdateDrainFilterDrainsResponseSources>;
export type UpdateDrainFilterDrainsLog = {
    sources?: Array<UpdateDrainFilterDrainsResponseSources> | undefined;
    legacyExcludeCachedStaticAssetLogs?: boolean | undefined;
};
export declare const UpdateDrainFilterDrainsResponseEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type UpdateDrainFilterDrainsResponseEnvironments = ClosedEnum<typeof UpdateDrainFilterDrainsResponseEnvironments>;
export type UpdateDrainFilterDrainsDeployment = {
    environments?: Array<UpdateDrainFilterDrainsResponseEnvironments> | undefined;
};
export type UpdateDrainFilterDrainsResponse1 = {
    type: "basic";
    project?: UpdateDrainFilterDrainsProject | undefined;
    log?: UpdateDrainFilterDrainsLog | undefined;
    deployment?: UpdateDrainFilterDrainsDeployment | undefined;
};
export type UpdateDrainFilterV2DrainsFilter = UpdateDrainFilterDrainsResponse1 | UpdateDrainFilterDrainsResponse2002;
export type UpdateDrainFilterV2Drains2 = {
    version: "v2";
    filter: UpdateDrainFilterDrainsResponse1 | UpdateDrainFilterDrainsResponse2002;
};
export type UpdateDrainFilterV2Drains1 = {
    version: "v1";
};
export type UpdateDrainResponseBodyDrainsFilterV2 = UpdateDrainFilterV2Drains1 | UpdateDrainFilterV2Drains2;
export type UpdateDrainProjectAccess2 = {
    access: "some";
    projectIds: Array<string>;
};
export type UpdateDrainProjectAccess1 = {
    access: "all";
};
export type UpdateDrainResponseBodyProjectAccess = UpdateDrainProjectAccess1 | UpdateDrainProjectAccess2;
export type UpdateDrainResponseBody2 = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: UpdateDrainResponseBodyDrainsStatus | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: UpdateDrainResponseBodyDrainsDisabledReason | undefined;
    schemas: UpdateDrainResponseBodyDrainsSchemas;
    delivery: UpdateDrainDeliveryDrainsResponse1 | UpdateDrainDeliveryDrainsResponse2 | UpdateDrainDeliveryDrains3 | UpdateDrainDeliveryDrains4;
    sampling?: Array<UpdateDrainResponseBodyDrainsSampling> | undefined;
    source: UpdateDrainSourceDrainsResponse1 | UpdateDrainSourceDrainsResponse2;
    filter?: string | undefined;
    filterV2?: UpdateDrainFilterV2Drains1 | UpdateDrainFilterV2Drains2 | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
    projectAccess?: UpdateDrainProjectAccess1 | UpdateDrainProjectAccess2 | undefined;
};
export declare const UpdateDrainResponseBodyStatus: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
    readonly Errored: "errored";
};
export type UpdateDrainResponseBodyStatus = ClosedEnum<typeof UpdateDrainResponseBodyStatus>;
export declare const UpdateDrainResponseBodyDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly DisabledByAdmin: "disabled-by-admin";
};
export type UpdateDrainResponseBodyDisabledReason = ClosedEnum<typeof UpdateDrainResponseBodyDisabledReason>;
export type UpdateDrainResponseBodyLog = {};
export type UpdateDrainResponseBodyTrace = {};
export type UpdateDrainResponseBodyAnalytics = {};
export type UpdateDrainResponseBodySpeedInsights = {};
export type UpdateDrainResponseBodySchemas = {
    log?: UpdateDrainResponseBodyLog | undefined;
    trace?: UpdateDrainResponseBodyTrace | undefined;
    analytics?: UpdateDrainResponseBodyAnalytics | undefined;
    speedInsights?: UpdateDrainResponseBodySpeedInsights | undefined;
};
export declare const UpdateDrainDeliveryTarget: {
    readonly VercelOtelTracesDb: "vercel-otel-traces-db";
};
export type UpdateDrainDeliveryTarget = ClosedEnum<typeof UpdateDrainDeliveryTarget>;
export type UpdateDrainDelivery4 = {
    type: "internal";
    target: UpdateDrainDeliveryTarget;
};
export type UpdateDrainDelivery3 = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
export type UpdateDrainDeliveryEndpoint = {
    traces: string;
};
export declare const UpdateDrainDeliveryDrainsResponse200Encoding: {
    readonly Json: "json";
    readonly Proto: "proto";
};
export type UpdateDrainDeliveryDrainsResponse200Encoding = ClosedEnum<typeof UpdateDrainDeliveryDrainsResponse200Encoding>;
export declare const UpdateDrainSecretDrainsKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type UpdateDrainSecretDrainsKind = ClosedEnum<typeof UpdateDrainSecretDrainsKind>;
export type UpdateDrainSecretDrains2 = {
    kind: UpdateDrainSecretDrainsKind;
};
export type UpdateDrainDeliveryDrainsSecret = UpdateDrainSecretDrains2 | string;
export type UpdateDrainDeliveryDrains2 = {
    type: "otlphttp";
    endpoint: UpdateDrainDeliveryEndpoint;
    encoding: UpdateDrainDeliveryDrainsResponse200Encoding;
    headers: {
        [k: string]: string;
    };
    secret?: UpdateDrainSecretDrains2 | string | undefined;
};
export declare const UpdateDrainDeliveryDrainsResponseEncoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type UpdateDrainDeliveryDrainsResponseEncoding = ClosedEnum<typeof UpdateDrainDeliveryDrainsResponseEncoding>;
export declare const UpdateDrainDeliveryCompression: {
    readonly None: "none";
    readonly Gzip: "gzip";
};
export type UpdateDrainDeliveryCompression = ClosedEnum<typeof UpdateDrainDeliveryCompression>;
export declare const UpdateDrainSecretKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type UpdateDrainSecretKind = ClosedEnum<typeof UpdateDrainSecretKind>;
export type UpdateDrainSecret2 = {
    kind: UpdateDrainSecretKind;
};
export type UpdateDrainDeliverySecret = UpdateDrainSecret2 | string;
export type UpdateDrainDeliveryDrains1 = {
    type: "http";
    endpoint: string;
    encoding: UpdateDrainDeliveryDrainsResponseEncoding;
    compression?: UpdateDrainDeliveryCompression | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: UpdateDrainSecret2 | string | undefined;
};
export type UpdateDrainResponseBodyDelivery = UpdateDrainDeliveryDrains1 | UpdateDrainDeliveryDrains2 | UpdateDrainDelivery3 | UpdateDrainDelivery4;
export declare const UpdateDrainResponseBodyType: {
    readonly HeadSampling: "head_sampling";
};
export type UpdateDrainResponseBodyType = ClosedEnum<typeof UpdateDrainResponseBodyType>;
export declare const UpdateDrainResponseBodyEnv: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type UpdateDrainResponseBodyEnv = ClosedEnum<typeof UpdateDrainResponseBodyEnv>;
export type UpdateDrainResponseBodySampling = {
    type: UpdateDrainResponseBodyType;
    rate: number;
    env?: UpdateDrainResponseBodyEnv | undefined;
    requestPath?: string | undefined;
};
export type UpdateDrainSourceDrains2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type UpdateDrainSourceDrains1 = {
    kind: "self-served";
};
export type UpdateDrainResponseBodySource = UpdateDrainSourceDrains1 | UpdateDrainSourceDrains2;
export type UpdateDrainFilterDrainsResponse2 = {
    type: "odata";
    text: string;
};
export type UpdateDrainFilterProject = {
    ids?: Array<string> | undefined;
};
export declare const UpdateDrainFilterDrainsSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type UpdateDrainFilterDrainsSources = ClosedEnum<typeof UpdateDrainFilterDrainsSources>;
export type UpdateDrainFilterLog = {
    sources?: Array<UpdateDrainFilterDrainsSources> | undefined;
    legacyExcludeCachedStaticAssetLogs?: boolean | undefined;
};
export declare const UpdateDrainFilterDrainsEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type UpdateDrainFilterDrainsEnvironments = ClosedEnum<typeof UpdateDrainFilterDrainsEnvironments>;
export type UpdateDrainFilterDeployment = {
    environments?: Array<UpdateDrainFilterDrainsEnvironments> | undefined;
};
export type UpdateDrainFilterDrains1 = {
    type: "basic";
    project?: UpdateDrainFilterProject | undefined;
    log?: UpdateDrainFilterLog | undefined;
    deployment?: UpdateDrainFilterDeployment | undefined;
};
export type UpdateDrainFilterV2Filter = UpdateDrainFilterDrains1 | UpdateDrainFilterDrainsResponse2;
export type UpdateDrainFilterV22 = {
    version: "v2";
    filter: UpdateDrainFilterDrains1 | UpdateDrainFilterDrainsResponse2;
};
export type UpdateDrainFilterV21 = {
    version: "v1";
};
export type UpdateDrainResponseBodyFilterV2 = UpdateDrainFilterV21 | UpdateDrainFilterV22;
export type UpdateDrainResponseBody1 = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: UpdateDrainResponseBodyStatus | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: UpdateDrainResponseBodyDisabledReason | undefined;
    schemas: UpdateDrainResponseBodySchemas;
    delivery: UpdateDrainDeliveryDrains1 | UpdateDrainDeliveryDrains2 | UpdateDrainDelivery3 | UpdateDrainDelivery4;
    sampling?: Array<UpdateDrainResponseBodySampling> | undefined;
    source: UpdateDrainSourceDrains1 | UpdateDrainSourceDrains2;
    filter?: string | undefined;
    filterV2?: UpdateDrainFilterV21 | UpdateDrainFilterV22 | undefined;
};
export type UpdateDrainResponseBody = UpdateDrainResponseBody1 | UpdateDrainResponseBody2;
/** @internal */
export declare const UpdateDrainProjects$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainProjects>;
/** @internal */
export declare const UpdateDrainProjects$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainProjects>;
/** @internal */
export declare const UpdateDrainFilterDrains2$inboundSchema: z.ZodType<UpdateDrainFilterDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterDrains2$Outbound = {
    type: string;
    text: string;
};
/** @internal */
export declare const UpdateDrainFilterDrains2$outboundSchema: z.ZodType<UpdateDrainFilterDrains2$Outbound, z.ZodTypeDef, UpdateDrainFilterDrains2>;
export declare function updateDrainFilterDrains2ToJSON(updateDrainFilterDrains2: UpdateDrainFilterDrains2): string;
export declare function updateDrainFilterDrains2FromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterDrains2, SDKValidationError>;
/** @internal */
export declare const FilterProject$inboundSchema: z.ZodType<FilterProject, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const FilterProject$outboundSchema: z.ZodType<FilterProject$Outbound, z.ZodTypeDef, FilterProject>;
export declare function filterProjectToJSON(filterProject: FilterProject): string;
export declare function filterProjectFromJSON(jsonString: string): SafeParseResult<FilterProject, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterSources$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterSources>;
/** @internal */
export declare const UpdateDrainFilterSources$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterSources>;
/** @internal */
export declare const FilterLog$inboundSchema: z.ZodType<FilterLog, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterLog$Outbound = {
    sources?: Array<string> | undefined;
};
/** @internal */
export declare const FilterLog$outboundSchema: z.ZodType<FilterLog$Outbound, z.ZodTypeDef, FilterLog>;
export declare function filterLogToJSON(filterLog: FilterLog): string;
export declare function filterLogFromJSON(jsonString: string): SafeParseResult<FilterLog, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterEnvironments$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterEnvironments>;
/** @internal */
export declare const UpdateDrainFilterEnvironments$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterEnvironments>;
/** @internal */
export declare const FilterDeployment$inboundSchema: z.ZodType<FilterDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const FilterDeployment$outboundSchema: z.ZodType<FilterDeployment$Outbound, z.ZodTypeDef, FilterDeployment>;
export declare function filterDeploymentToJSON(filterDeployment: FilterDeployment): string;
export declare function filterDeploymentFromJSON(jsonString: string): SafeParseResult<FilterDeployment, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilter1$inboundSchema: z.ZodType<UpdateDrainFilter1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilter1$Outbound = {
    type: string;
    project?: FilterProject$Outbound | undefined;
    log?: FilterLog$Outbound | undefined;
    deployment?: FilterDeployment$Outbound | undefined;
};
/** @internal */
export declare const UpdateDrainFilter1$outboundSchema: z.ZodType<UpdateDrainFilter1$Outbound, z.ZodTypeDef, UpdateDrainFilter1>;
export declare function updateDrainFilter1ToJSON(updateDrainFilter1: UpdateDrainFilter1): string;
export declare function updateDrainFilter1FromJSON(jsonString: string): SafeParseResult<UpdateDrainFilter1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterFilter$inboundSchema: z.ZodType<UpdateDrainFilterFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterFilter$Outbound = UpdateDrainFilterDrains2$Outbound | UpdateDrainFilter1$Outbound;
/** @internal */
export declare const UpdateDrainFilterFilter$outboundSchema: z.ZodType<UpdateDrainFilterFilter$Outbound, z.ZodTypeDef, UpdateDrainFilterFilter>;
export declare function updateDrainFilterFilterToJSON(updateDrainFilterFilter: UpdateDrainFilterFilter): string;
export declare function updateDrainFilterFilterFromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterFilter, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilter2$inboundSchema: z.ZodType<UpdateDrainFilter2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilter2$Outbound = {
    version: string;
    filter: UpdateDrainFilterDrains2$Outbound | UpdateDrainFilter1$Outbound;
};
/** @internal */
export declare const UpdateDrainFilter2$outboundSchema: z.ZodType<UpdateDrainFilter2$Outbound, z.ZodTypeDef, UpdateDrainFilter2>;
export declare function updateDrainFilter2ToJSON(updateDrainFilter2: UpdateDrainFilter2): string;
export declare function updateDrainFilter2FromJSON(jsonString: string): SafeParseResult<UpdateDrainFilter2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilter$inboundSchema: z.ZodType<UpdateDrainFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilter$Outbound = UpdateDrainFilter2$Outbound | string;
/** @internal */
export declare const UpdateDrainFilter$outboundSchema: z.ZodType<UpdateDrainFilter$Outbound, z.ZodTypeDef, UpdateDrainFilter>;
export declare function updateDrainFilterToJSON(updateDrainFilter: UpdateDrainFilter): string;
export declare function updateDrainFilterFromJSON(jsonString: string): SafeParseResult<UpdateDrainFilter, SDKValidationError>;
/** @internal */
export declare const UpdateDrainSchemas$inboundSchema: z.ZodType<UpdateDrainSchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSchemas$Outbound = {
    version: string;
};
/** @internal */
export declare const UpdateDrainSchemas$outboundSchema: z.ZodType<UpdateDrainSchemas$Outbound, z.ZodTypeDef, UpdateDrainSchemas>;
export declare function updateDrainSchemasToJSON(updateDrainSchemas: UpdateDrainSchemas): string;
export declare function updateDrainSchemasFromJSON(jsonString: string): SafeParseResult<UpdateDrainSchemas, SDKValidationError>;
/** @internal */
export declare const UpdateDrainEndpoint1$inboundSchema: z.ZodType<UpdateDrainEndpoint1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainEndpoint1$Outbound = {
    traces: string;
};
/** @internal */
export declare const UpdateDrainEndpoint1$outboundSchema: z.ZodType<UpdateDrainEndpoint1$Outbound, z.ZodTypeDef, UpdateDrainEndpoint1>;
export declare function updateDrainEndpoint1ToJSON(updateDrainEndpoint1: UpdateDrainEndpoint1): string;
export declare function updateDrainEndpoint1FromJSON(jsonString: string): SafeParseResult<UpdateDrainEndpoint1, SDKValidationError>;
/** @internal */
export declare const DeliveryEndpoint$inboundSchema: z.ZodType<DeliveryEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type DeliveryEndpoint$Outbound = UpdateDrainEndpoint1$Outbound;
/** @internal */
export declare const DeliveryEndpoint$outboundSchema: z.ZodType<DeliveryEndpoint$Outbound, z.ZodTypeDef, DeliveryEndpoint>;
export declare function deliveryEndpointToJSON(deliveryEndpoint: DeliveryEndpoint): string;
export declare function deliveryEndpointFromJSON(jsonString: string): SafeParseResult<DeliveryEndpoint, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsEncoding$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsEncoding>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsEncoding$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsEncoding>;
/** @internal */
export declare const UpdateDrainDelivery2$inboundSchema: z.ZodType<UpdateDrainDelivery2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDelivery2$Outbound = {
    type: string;
    endpoint: UpdateDrainEndpoint1$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: string | undefined;
};
/** @internal */
export declare const UpdateDrainDelivery2$outboundSchema: z.ZodType<UpdateDrainDelivery2$Outbound, z.ZodTypeDef, UpdateDrainDelivery2>;
export declare function updateDrainDelivery2ToJSON(updateDrainDelivery2: UpdateDrainDelivery2): string;
export declare function updateDrainDelivery2FromJSON(jsonString: string): SafeParseResult<UpdateDrainDelivery2, SDKValidationError>;
/** @internal */
export declare const DeliveryCompression$inboundSchema: z.ZodNativeEnum<typeof DeliveryCompression>;
/** @internal */
export declare const DeliveryCompression$outboundSchema: z.ZodNativeEnum<typeof DeliveryCompression>;
/** @internal */
export declare const UpdateDrainDeliveryEncoding$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryEncoding>;
/** @internal */
export declare const UpdateDrainDeliveryEncoding$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryEncoding>;
/** @internal */
export declare const UpdateDrainDelivery1$inboundSchema: z.ZodType<UpdateDrainDelivery1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDelivery1$Outbound = {
    type: string;
    endpoint: string;
    compression?: string | undefined;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: string | undefined;
};
/** @internal */
export declare const UpdateDrainDelivery1$outboundSchema: z.ZodType<UpdateDrainDelivery1$Outbound, z.ZodTypeDef, UpdateDrainDelivery1>;
export declare function updateDrainDelivery1ToJSON(updateDrainDelivery1: UpdateDrainDelivery1): string;
export declare function updateDrainDelivery1FromJSON(jsonString: string): SafeParseResult<UpdateDrainDelivery1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDelivery$inboundSchema: z.ZodType<UpdateDrainDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDelivery$Outbound = UpdateDrainDelivery1$Outbound | UpdateDrainDelivery2$Outbound;
/** @internal */
export declare const UpdateDrainDelivery$outboundSchema: z.ZodType<UpdateDrainDelivery$Outbound, z.ZodTypeDef, UpdateDrainDelivery>;
export declare function updateDrainDeliveryToJSON(updateDrainDelivery: UpdateDrainDelivery): string;
export declare function updateDrainDeliveryFromJSON(jsonString: string): SafeParseResult<UpdateDrainDelivery, SDKValidationError>;
/** @internal */
export declare const UpdateDrainEnv$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainEnv>;
/** @internal */
export declare const UpdateDrainEnv$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainEnv>;
/** @internal */
export declare const UpdateDrainSampling$inboundSchema: z.ZodType<UpdateDrainSampling, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const UpdateDrainSampling$outboundSchema: z.ZodType<UpdateDrainSampling$Outbound, z.ZodTypeDef, UpdateDrainSampling>;
export declare function updateDrainSamplingToJSON(updateDrainSampling: UpdateDrainSampling): string;
export declare function updateDrainSamplingFromJSON(jsonString: string): SafeParseResult<UpdateDrainSampling, SDKValidationError>;
/** @internal */
export declare const UpdateDrainTransforms$inboundSchema: z.ZodType<UpdateDrainTransforms, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainTransforms$Outbound = {
    id: string;
};
/** @internal */
export declare const UpdateDrainTransforms$outboundSchema: z.ZodType<UpdateDrainTransforms$Outbound, z.ZodTypeDef, UpdateDrainTransforms>;
export declare function updateDrainTransformsToJSON(updateDrainTransforms: UpdateDrainTransforms): string;
export declare function updateDrainTransformsFromJSON(jsonString: string): SafeParseResult<UpdateDrainTransforms, SDKValidationError>;
/** @internal */
export declare const UpdateDrainStatus$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainStatus>;
/** @internal */
export declare const UpdateDrainStatus$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainStatus>;
/** @internal */
export declare const UpdateDrainSource2$inboundSchema: z.ZodType<UpdateDrainSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSource2$Outbound = {
    kind: string;
};
/** @internal */
export declare const UpdateDrainSource2$outboundSchema: z.ZodType<UpdateDrainSource2$Outbound, z.ZodTypeDef, UpdateDrainSource2>;
export declare function updateDrainSource2ToJSON(updateDrainSource2: UpdateDrainSource2): string;
export declare function updateDrainSource2FromJSON(jsonString: string): SafeParseResult<UpdateDrainSource2, SDKValidationError>;
/** @internal */
export declare const UpdateDrain13$inboundSchema: z.ZodType<UpdateDrain13, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrain13$Outbound = {
    kind: string;
};
/** @internal */
export declare const UpdateDrain13$outboundSchema: z.ZodType<UpdateDrain13$Outbound, z.ZodTypeDef, UpdateDrain13>;
export declare function updateDrain13ToJSON(updateDrain13: UpdateDrain13): string;
export declare function updateDrain13FromJSON(jsonString: string): SafeParseResult<UpdateDrain13, SDKValidationError>;
/** @internal */
export declare const UpdateDrain12$inboundSchema: z.ZodType<UpdateDrain12, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrain12$Outbound = {
    kind: string;
    resourceId: string;
};
/** @internal */
export declare const UpdateDrain12$outboundSchema: z.ZodType<UpdateDrain12$Outbound, z.ZodTypeDef, UpdateDrain12>;
export declare function updateDrain12ToJSON(updateDrain12: UpdateDrain12): string;
export declare function updateDrain12FromJSON(jsonString: string): SafeParseResult<UpdateDrain12, SDKValidationError>;
/** @internal */
export declare const UpdateDrain11$inboundSchema: z.ZodType<UpdateDrain11, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrain11$Outbound = {
    kind: string;
    externalResourceId: string;
};
/** @internal */
export declare const UpdateDrain11$outboundSchema: z.ZodType<UpdateDrain11$Outbound, z.ZodTypeDef, UpdateDrain11>;
export declare function updateDrain11ToJSON(updateDrain11: UpdateDrain11): string;
export declare function updateDrain11FromJSON(jsonString: string): SafeParseResult<UpdateDrain11, SDKValidationError>;
/** @internal */
export declare const UpdateDrainSource1$inboundSchema: z.ZodType<UpdateDrainSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSource1$Outbound = UpdateDrain11$Outbound | UpdateDrain12$Outbound | UpdateDrain13$Outbound;
/** @internal */
export declare const UpdateDrainSource1$outboundSchema: z.ZodType<UpdateDrainSource1$Outbound, z.ZodTypeDef, UpdateDrainSource1>;
export declare function updateDrainSource1ToJSON(updateDrainSource1: UpdateDrainSource1): string;
export declare function updateDrainSource1FromJSON(jsonString: string): SafeParseResult<UpdateDrainSource1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainSource$inboundSchema: z.ZodType<UpdateDrainSource, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSource$Outbound = UpdateDrain11$Outbound | UpdateDrain12$Outbound | UpdateDrain13$Outbound | UpdateDrainSource2$Outbound;
/** @internal */
export declare const UpdateDrainSource$outboundSchema: z.ZodType<UpdateDrainSource$Outbound, z.ZodTypeDef, UpdateDrainSource>;
export declare function updateDrainSourceToJSON(updateDrainSource: UpdateDrainSource): string;
export declare function updateDrainSourceFromJSON(jsonString: string): SafeParseResult<UpdateDrainSource, SDKValidationError>;
/** @internal */
export declare const UpdateDrainRequestBody$inboundSchema: z.ZodType<UpdateDrainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainRequestBody$Outbound = {
    name?: string | undefined;
    projects?: string | undefined;
    projectIds?: Array<string> | null | undefined;
    filter?: UpdateDrainFilter2$Outbound | string | null | undefined;
    schemas?: {
        [k: string]: UpdateDrainSchemas$Outbound;
    } | undefined;
    delivery?: UpdateDrainDelivery1$Outbound | UpdateDrainDelivery2$Outbound | undefined;
    sampling?: Array<UpdateDrainSampling$Outbound> | null | undefined;
    transforms?: Array<UpdateDrainTransforms$Outbound> | null | undefined;
    status?: string | undefined;
    source?: UpdateDrain11$Outbound | UpdateDrain12$Outbound | UpdateDrain13$Outbound | UpdateDrainSource2$Outbound | undefined;
};
/** @internal */
export declare const UpdateDrainRequestBody$outboundSchema: z.ZodType<UpdateDrainRequestBody$Outbound, z.ZodTypeDef, UpdateDrainRequestBody>;
export declare function updateDrainRequestBodyToJSON(updateDrainRequestBody: UpdateDrainRequestBody): string;
export declare function updateDrainRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateDrainRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateDrainRequest$inboundSchema: z.ZodType<UpdateDrainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateDrainRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateDrainRequest$outboundSchema: z.ZodType<UpdateDrainRequest$Outbound, z.ZodTypeDef, UpdateDrainRequest>;
export declare function updateDrainRequestToJSON(updateDrainRequest: UpdateDrainRequest): string;
export declare function updateDrainRequestFromJSON(jsonString: string): SafeParseResult<UpdateDrainRequest, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsStatus$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyDrainsStatus>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsStatus$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyDrainsStatus>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsDisabledReason$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyDrainsDisabledReason>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsDisabledReason$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyDrainsDisabledReason>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsLog$inboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsLog, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyDrainsLog$Outbound = {};
/** @internal */
export declare const UpdateDrainResponseBodyDrainsLog$outboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsLog$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyDrainsLog>;
export declare function updateDrainResponseBodyDrainsLogToJSON(updateDrainResponseBodyDrainsLog: UpdateDrainResponseBodyDrainsLog): string;
export declare function updateDrainResponseBodyDrainsLogFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyDrainsLog, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsTrace$inboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsTrace, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyDrainsTrace$Outbound = {};
/** @internal */
export declare const UpdateDrainResponseBodyDrainsTrace$outboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsTrace$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyDrainsTrace>;
export declare function updateDrainResponseBodyDrainsTraceToJSON(updateDrainResponseBodyDrainsTrace: UpdateDrainResponseBodyDrainsTrace): string;
export declare function updateDrainResponseBodyDrainsTraceFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyDrainsTrace, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsAnalytics$inboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsAnalytics, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyDrainsAnalytics$Outbound = {};
/** @internal */
export declare const UpdateDrainResponseBodyDrainsAnalytics$outboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsAnalytics$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyDrainsAnalytics>;
export declare function updateDrainResponseBodyDrainsAnalyticsToJSON(updateDrainResponseBodyDrainsAnalytics: UpdateDrainResponseBodyDrainsAnalytics): string;
export declare function updateDrainResponseBodyDrainsAnalyticsFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyDrainsAnalytics, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsSpeedInsights$inboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsSpeedInsights, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyDrainsSpeedInsights$Outbound = {};
/** @internal */
export declare const UpdateDrainResponseBodyDrainsSpeedInsights$outboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsSpeedInsights$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyDrainsSpeedInsights>;
export declare function updateDrainResponseBodyDrainsSpeedInsightsToJSON(updateDrainResponseBodyDrainsSpeedInsights: UpdateDrainResponseBodyDrainsSpeedInsights): string;
export declare function updateDrainResponseBodyDrainsSpeedInsightsFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyDrainsSpeedInsights, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsSchemas$inboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsSchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyDrainsSchemas$Outbound = {
    log?: UpdateDrainResponseBodyDrainsLog$Outbound | undefined;
    trace?: UpdateDrainResponseBodyDrainsTrace$Outbound | undefined;
    analytics?: UpdateDrainResponseBodyDrainsAnalytics$Outbound | undefined;
    speed_insights?: UpdateDrainResponseBodyDrainsSpeedInsights$Outbound | undefined;
};
/** @internal */
export declare const UpdateDrainResponseBodyDrainsSchemas$outboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsSchemas$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyDrainsSchemas>;
export declare function updateDrainResponseBodyDrainsSchemasToJSON(updateDrainResponseBodyDrainsSchemas: UpdateDrainResponseBodyDrainsSchemas): string;
export declare function updateDrainResponseBodyDrainsSchemasFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyDrainsSchemas, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsTarget$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsTarget>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsTarget$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsTarget>;
/** @internal */
export declare const UpdateDrainDeliveryDrains4$inboundSchema: z.ZodType<UpdateDrainDeliveryDrains4, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliveryDrains4$Outbound = {
    type: "internal";
    target: string;
};
/** @internal */
export declare const UpdateDrainDeliveryDrains4$outboundSchema: z.ZodType<UpdateDrainDeliveryDrains4$Outbound, z.ZodTypeDef, UpdateDrainDeliveryDrains4>;
export declare function updateDrainDeliveryDrains4ToJSON(updateDrainDeliveryDrains4: UpdateDrainDeliveryDrains4): string;
export declare function updateDrainDeliveryDrains4FromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliveryDrains4, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrains3$inboundSchema: z.ZodType<UpdateDrainDeliveryDrains3, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliveryDrains3$Outbound = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
/** @internal */
export declare const UpdateDrainDeliveryDrains3$outboundSchema: z.ZodType<UpdateDrainDeliveryDrains3$Outbound, z.ZodTypeDef, UpdateDrainDeliveryDrains3>;
export declare function updateDrainDeliveryDrains3ToJSON(updateDrainDeliveryDrains3: UpdateDrainDeliveryDrains3): string;
export declare function updateDrainDeliveryDrains3FromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliveryDrains3, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsEndpoint$inboundSchema: z.ZodType<UpdateDrainDeliveryDrainsEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliveryDrainsEndpoint$Outbound = {
    traces: string;
};
/** @internal */
export declare const UpdateDrainDeliveryDrainsEndpoint$outboundSchema: z.ZodType<UpdateDrainDeliveryDrainsEndpoint$Outbound, z.ZodTypeDef, UpdateDrainDeliveryDrainsEndpoint>;
export declare function updateDrainDeliveryDrainsEndpointToJSON(updateDrainDeliveryDrainsEndpoint: UpdateDrainDeliveryDrainsEndpoint): string;
export declare function updateDrainDeliveryDrainsEndpointFromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliveryDrainsEndpoint, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse200ApplicationJSONResponseBodyEncoding$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsResponse200ApplicationJSONResponseBodyEncoding>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse200ApplicationJSONResponseBodyEncoding$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsResponse200ApplicationJSONResponseBodyEncoding>;
/** @internal */
export declare const UpdateDrainSecretDrainsResponse200Kind$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainSecretDrainsResponse200Kind>;
/** @internal */
export declare const UpdateDrainSecretDrainsResponse200Kind$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainSecretDrainsResponse200Kind>;
/** @internal */
export declare const UpdateDrainSecretDrainsResponse2002$inboundSchema: z.ZodType<UpdateDrainSecretDrainsResponse2002, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSecretDrainsResponse2002$Outbound = {
    kind: string;
};
/** @internal */
export declare const UpdateDrainSecretDrainsResponse2002$outboundSchema: z.ZodType<UpdateDrainSecretDrainsResponse2002$Outbound, z.ZodTypeDef, UpdateDrainSecretDrainsResponse2002>;
export declare function updateDrainSecretDrainsResponse2002ToJSON(updateDrainSecretDrainsResponse2002: UpdateDrainSecretDrainsResponse2002): string;
export declare function updateDrainSecretDrainsResponse2002FromJSON(jsonString: string): SafeParseResult<UpdateDrainSecretDrainsResponse2002, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse200Secret$inboundSchema: z.ZodType<UpdateDrainDeliveryDrainsResponse200Secret, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliveryDrainsResponse200Secret$Outbound = UpdateDrainSecretDrainsResponse2002$Outbound | string;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse200Secret$outboundSchema: z.ZodType<UpdateDrainDeliveryDrainsResponse200Secret$Outbound, z.ZodTypeDef, UpdateDrainDeliveryDrainsResponse200Secret>;
export declare function updateDrainDeliveryDrainsResponse200SecretToJSON(updateDrainDeliveryDrainsResponse200Secret: UpdateDrainDeliveryDrainsResponse200Secret): string;
export declare function updateDrainDeliveryDrainsResponse200SecretFromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliveryDrainsResponse200Secret, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse2$inboundSchema: z.ZodType<UpdateDrainDeliveryDrainsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliveryDrainsResponse2$Outbound = {
    type: "otlphttp";
    endpoint: UpdateDrainDeliveryDrainsEndpoint$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: UpdateDrainSecretDrainsResponse2002$Outbound | string | undefined;
};
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse2$outboundSchema: z.ZodType<UpdateDrainDeliveryDrainsResponse2$Outbound, z.ZodTypeDef, UpdateDrainDeliveryDrainsResponse2>;
export declare function updateDrainDeliveryDrainsResponse2ToJSON(updateDrainDeliveryDrainsResponse2: UpdateDrainDeliveryDrainsResponse2): string;
export declare function updateDrainDeliveryDrainsResponse2FromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliveryDrainsResponse2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse200ApplicationJSONEncoding$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsResponse200ApplicationJSONEncoding>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse200ApplicationJSONEncoding$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsResponse200ApplicationJSONEncoding>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsCompression$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsCompression>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsCompression$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsCompression>;
/** @internal */
export declare const UpdateDrainSecretDrainsResponseKind$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainSecretDrainsResponseKind>;
/** @internal */
export declare const UpdateDrainSecretDrainsResponseKind$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainSecretDrainsResponseKind>;
/** @internal */
export declare const UpdateDrainSecretDrainsResponse2$inboundSchema: z.ZodType<UpdateDrainSecretDrainsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSecretDrainsResponse2$Outbound = {
    kind: string;
};
/** @internal */
export declare const UpdateDrainSecretDrainsResponse2$outboundSchema: z.ZodType<UpdateDrainSecretDrainsResponse2$Outbound, z.ZodTypeDef, UpdateDrainSecretDrainsResponse2>;
export declare function updateDrainSecretDrainsResponse2ToJSON(updateDrainSecretDrainsResponse2: UpdateDrainSecretDrainsResponse2): string;
export declare function updateDrainSecretDrainsResponse2FromJSON(jsonString: string): SafeParseResult<UpdateDrainSecretDrainsResponse2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponseSecret$inboundSchema: z.ZodType<UpdateDrainDeliveryDrainsResponseSecret, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliveryDrainsResponseSecret$Outbound = UpdateDrainSecretDrainsResponse2$Outbound | string;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponseSecret$outboundSchema: z.ZodType<UpdateDrainDeliveryDrainsResponseSecret$Outbound, z.ZodTypeDef, UpdateDrainDeliveryDrainsResponseSecret>;
export declare function updateDrainDeliveryDrainsResponseSecretToJSON(updateDrainDeliveryDrainsResponseSecret: UpdateDrainDeliveryDrainsResponseSecret): string;
export declare function updateDrainDeliveryDrainsResponseSecretFromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliveryDrainsResponseSecret, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse1$inboundSchema: z.ZodType<UpdateDrainDeliveryDrainsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliveryDrainsResponse1$Outbound = {
    type: "http";
    endpoint: string;
    encoding: string;
    compression?: string | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: UpdateDrainSecretDrainsResponse2$Outbound | string | undefined;
};
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse1$outboundSchema: z.ZodType<UpdateDrainDeliveryDrainsResponse1$Outbound, z.ZodTypeDef, UpdateDrainDeliveryDrainsResponse1>;
export declare function updateDrainDeliveryDrainsResponse1ToJSON(updateDrainDeliveryDrainsResponse1: UpdateDrainDeliveryDrainsResponse1): string;
export declare function updateDrainDeliveryDrainsResponse1FromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliveryDrainsResponse1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsDelivery$inboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyDrainsDelivery$Outbound = UpdateDrainDeliveryDrainsResponse1$Outbound | UpdateDrainDeliveryDrainsResponse2$Outbound | UpdateDrainDeliveryDrains3$Outbound | UpdateDrainDeliveryDrains4$Outbound;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsDelivery$outboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsDelivery$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyDrainsDelivery>;
export declare function updateDrainResponseBodyDrainsDeliveryToJSON(updateDrainResponseBodyDrainsDelivery: UpdateDrainResponseBodyDrainsDelivery): string;
export declare function updateDrainResponseBodyDrainsDeliveryFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyDrainsDelivery, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsType$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyDrainsType>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsType$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyDrainsType>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsEnv$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyDrainsEnv>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsEnv$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyDrainsEnv>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsSampling$inboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsSampling, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyDrainsSampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const UpdateDrainResponseBodyDrainsSampling$outboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsSampling$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyDrainsSampling>;
export declare function updateDrainResponseBodyDrainsSamplingToJSON(updateDrainResponseBodyDrainsSampling: UpdateDrainResponseBodyDrainsSampling): string;
export declare function updateDrainResponseBodyDrainsSamplingFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyDrainsSampling, SDKValidationError>;
/** @internal */
export declare const UpdateDrainSourceDrainsResponse2$inboundSchema: z.ZodType<UpdateDrainSourceDrainsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSourceDrainsResponse2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const UpdateDrainSourceDrainsResponse2$outboundSchema: z.ZodType<UpdateDrainSourceDrainsResponse2$Outbound, z.ZodTypeDef, UpdateDrainSourceDrainsResponse2>;
export declare function updateDrainSourceDrainsResponse2ToJSON(updateDrainSourceDrainsResponse2: UpdateDrainSourceDrainsResponse2): string;
export declare function updateDrainSourceDrainsResponse2FromJSON(jsonString: string): SafeParseResult<UpdateDrainSourceDrainsResponse2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainSourceDrainsResponse1$inboundSchema: z.ZodType<UpdateDrainSourceDrainsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSourceDrainsResponse1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const UpdateDrainSourceDrainsResponse1$outboundSchema: z.ZodType<UpdateDrainSourceDrainsResponse1$Outbound, z.ZodTypeDef, UpdateDrainSourceDrainsResponse1>;
export declare function updateDrainSourceDrainsResponse1ToJSON(updateDrainSourceDrainsResponse1: UpdateDrainSourceDrainsResponse1): string;
export declare function updateDrainSourceDrainsResponse1FromJSON(jsonString: string): SafeParseResult<UpdateDrainSourceDrainsResponse1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsSource$inboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsSource, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyDrainsSource$Outbound = UpdateDrainSourceDrainsResponse1$Outbound | UpdateDrainSourceDrainsResponse2$Outbound;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsSource$outboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsSource$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyDrainsSource>;
export declare function updateDrainResponseBodyDrainsSourceToJSON(updateDrainResponseBodyDrainsSource: UpdateDrainResponseBodyDrainsSource): string;
export declare function updateDrainResponseBodyDrainsSourceFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyDrainsSource, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterDrainsResponse2002$inboundSchema: z.ZodType<UpdateDrainFilterDrainsResponse2002, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterDrainsResponse2002$Outbound = {
    type: "odata";
    text: string;
};
/** @internal */
export declare const UpdateDrainFilterDrainsResponse2002$outboundSchema: z.ZodType<UpdateDrainFilterDrainsResponse2002$Outbound, z.ZodTypeDef, UpdateDrainFilterDrainsResponse2002>;
export declare function updateDrainFilterDrainsResponse2002ToJSON(updateDrainFilterDrainsResponse2002: UpdateDrainFilterDrainsResponse2002): string;
export declare function updateDrainFilterDrainsResponse2002FromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterDrainsResponse2002, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterDrainsProject$inboundSchema: z.ZodType<UpdateDrainFilterDrainsProject, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterDrainsProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const UpdateDrainFilterDrainsProject$outboundSchema: z.ZodType<UpdateDrainFilterDrainsProject$Outbound, z.ZodTypeDef, UpdateDrainFilterDrainsProject>;
export declare function updateDrainFilterDrainsProjectToJSON(updateDrainFilterDrainsProject: UpdateDrainFilterDrainsProject): string;
export declare function updateDrainFilterDrainsProjectFromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterDrainsProject, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterDrainsResponseSources$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterDrainsResponseSources>;
/** @internal */
export declare const UpdateDrainFilterDrainsResponseSources$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterDrainsResponseSources>;
/** @internal */
export declare const UpdateDrainFilterDrainsLog$inboundSchema: z.ZodType<UpdateDrainFilterDrainsLog, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterDrainsLog$Outbound = {
    sources?: Array<string> | undefined;
    legacy_excludeCachedStaticAssetLogs?: boolean | undefined;
};
/** @internal */
export declare const UpdateDrainFilterDrainsLog$outboundSchema: z.ZodType<UpdateDrainFilterDrainsLog$Outbound, z.ZodTypeDef, UpdateDrainFilterDrainsLog>;
export declare function updateDrainFilterDrainsLogToJSON(updateDrainFilterDrainsLog: UpdateDrainFilterDrainsLog): string;
export declare function updateDrainFilterDrainsLogFromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterDrainsLog, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterDrainsResponseEnvironments$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterDrainsResponseEnvironments>;
/** @internal */
export declare const UpdateDrainFilterDrainsResponseEnvironments$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterDrainsResponseEnvironments>;
/** @internal */
export declare const UpdateDrainFilterDrainsDeployment$inboundSchema: z.ZodType<UpdateDrainFilterDrainsDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterDrainsDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const UpdateDrainFilterDrainsDeployment$outboundSchema: z.ZodType<UpdateDrainFilterDrainsDeployment$Outbound, z.ZodTypeDef, UpdateDrainFilterDrainsDeployment>;
export declare function updateDrainFilterDrainsDeploymentToJSON(updateDrainFilterDrainsDeployment: UpdateDrainFilterDrainsDeployment): string;
export declare function updateDrainFilterDrainsDeploymentFromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterDrainsDeployment, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterDrainsResponse1$inboundSchema: z.ZodType<UpdateDrainFilterDrainsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterDrainsResponse1$Outbound = {
    type: "basic";
    project?: UpdateDrainFilterDrainsProject$Outbound | undefined;
    log?: UpdateDrainFilterDrainsLog$Outbound | undefined;
    deployment?: UpdateDrainFilterDrainsDeployment$Outbound | undefined;
};
/** @internal */
export declare const UpdateDrainFilterDrainsResponse1$outboundSchema: z.ZodType<UpdateDrainFilterDrainsResponse1$Outbound, z.ZodTypeDef, UpdateDrainFilterDrainsResponse1>;
export declare function updateDrainFilterDrainsResponse1ToJSON(updateDrainFilterDrainsResponse1: UpdateDrainFilterDrainsResponse1): string;
export declare function updateDrainFilterDrainsResponse1FromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterDrainsResponse1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterV2DrainsFilter$inboundSchema: z.ZodType<UpdateDrainFilterV2DrainsFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterV2DrainsFilter$Outbound = UpdateDrainFilterDrainsResponse1$Outbound | UpdateDrainFilterDrainsResponse2002$Outbound;
/** @internal */
export declare const UpdateDrainFilterV2DrainsFilter$outboundSchema: z.ZodType<UpdateDrainFilterV2DrainsFilter$Outbound, z.ZodTypeDef, UpdateDrainFilterV2DrainsFilter>;
export declare function updateDrainFilterV2DrainsFilterToJSON(updateDrainFilterV2DrainsFilter: UpdateDrainFilterV2DrainsFilter): string;
export declare function updateDrainFilterV2DrainsFilterFromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterV2DrainsFilter, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterV2Drains2$inboundSchema: z.ZodType<UpdateDrainFilterV2Drains2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterV2Drains2$Outbound = {
    version: "v2";
    filter: UpdateDrainFilterDrainsResponse1$Outbound | UpdateDrainFilterDrainsResponse2002$Outbound;
};
/** @internal */
export declare const UpdateDrainFilterV2Drains2$outboundSchema: z.ZodType<UpdateDrainFilterV2Drains2$Outbound, z.ZodTypeDef, UpdateDrainFilterV2Drains2>;
export declare function updateDrainFilterV2Drains2ToJSON(updateDrainFilterV2Drains2: UpdateDrainFilterV2Drains2): string;
export declare function updateDrainFilterV2Drains2FromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterV2Drains2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterV2Drains1$inboundSchema: z.ZodType<UpdateDrainFilterV2Drains1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterV2Drains1$Outbound = {
    version: "v1";
};
/** @internal */
export declare const UpdateDrainFilterV2Drains1$outboundSchema: z.ZodType<UpdateDrainFilterV2Drains1$Outbound, z.ZodTypeDef, UpdateDrainFilterV2Drains1>;
export declare function updateDrainFilterV2Drains1ToJSON(updateDrainFilterV2Drains1: UpdateDrainFilterV2Drains1): string;
export declare function updateDrainFilterV2Drains1FromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterV2Drains1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsFilterV2$inboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsFilterV2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyDrainsFilterV2$Outbound = UpdateDrainFilterV2Drains1$Outbound | UpdateDrainFilterV2Drains2$Outbound;
/** @internal */
export declare const UpdateDrainResponseBodyDrainsFilterV2$outboundSchema: z.ZodType<UpdateDrainResponseBodyDrainsFilterV2$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyDrainsFilterV2>;
export declare function updateDrainResponseBodyDrainsFilterV2ToJSON(updateDrainResponseBodyDrainsFilterV2: UpdateDrainResponseBodyDrainsFilterV2): string;
export declare function updateDrainResponseBodyDrainsFilterV2FromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyDrainsFilterV2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainProjectAccess2$inboundSchema: z.ZodType<UpdateDrainProjectAccess2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainProjectAccess2$Outbound = {
    access: "some";
    projectIds: Array<string>;
};
/** @internal */
export declare const UpdateDrainProjectAccess2$outboundSchema: z.ZodType<UpdateDrainProjectAccess2$Outbound, z.ZodTypeDef, UpdateDrainProjectAccess2>;
export declare function updateDrainProjectAccess2ToJSON(updateDrainProjectAccess2: UpdateDrainProjectAccess2): string;
export declare function updateDrainProjectAccess2FromJSON(jsonString: string): SafeParseResult<UpdateDrainProjectAccess2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainProjectAccess1$inboundSchema: z.ZodType<UpdateDrainProjectAccess1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainProjectAccess1$Outbound = {
    access: "all";
};
/** @internal */
export declare const UpdateDrainProjectAccess1$outboundSchema: z.ZodType<UpdateDrainProjectAccess1$Outbound, z.ZodTypeDef, UpdateDrainProjectAccess1>;
export declare function updateDrainProjectAccess1ToJSON(updateDrainProjectAccess1: UpdateDrainProjectAccess1): string;
export declare function updateDrainProjectAccess1FromJSON(jsonString: string): SafeParseResult<UpdateDrainProjectAccess1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyProjectAccess$inboundSchema: z.ZodType<UpdateDrainResponseBodyProjectAccess, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyProjectAccess$Outbound = UpdateDrainProjectAccess1$Outbound | UpdateDrainProjectAccess2$Outbound;
/** @internal */
export declare const UpdateDrainResponseBodyProjectAccess$outboundSchema: z.ZodType<UpdateDrainResponseBodyProjectAccess$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyProjectAccess>;
export declare function updateDrainResponseBodyProjectAccessToJSON(updateDrainResponseBodyProjectAccess: UpdateDrainResponseBodyProjectAccess): string;
export declare function updateDrainResponseBodyProjectAccessFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyProjectAccess, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBody2$inboundSchema: z.ZodType<UpdateDrainResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBody2$Outbound = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: string | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: string | undefined;
    schemas: UpdateDrainResponseBodyDrainsSchemas$Outbound;
    delivery: UpdateDrainDeliveryDrainsResponse1$Outbound | UpdateDrainDeliveryDrainsResponse2$Outbound | UpdateDrainDeliveryDrains3$Outbound | UpdateDrainDeliveryDrains4$Outbound;
    sampling?: Array<UpdateDrainResponseBodyDrainsSampling$Outbound> | undefined;
    source: UpdateDrainSourceDrainsResponse1$Outbound | UpdateDrainSourceDrainsResponse2$Outbound;
    filter?: string | undefined;
    filterV2?: UpdateDrainFilterV2Drains1$Outbound | UpdateDrainFilterV2Drains2$Outbound | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
    projectAccess?: UpdateDrainProjectAccess1$Outbound | UpdateDrainProjectAccess2$Outbound | undefined;
};
/** @internal */
export declare const UpdateDrainResponseBody2$outboundSchema: z.ZodType<UpdateDrainResponseBody2$Outbound, z.ZodTypeDef, UpdateDrainResponseBody2>;
export declare function updateDrainResponseBody2ToJSON(updateDrainResponseBody2: UpdateDrainResponseBody2): string;
export declare function updateDrainResponseBody2FromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBody2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyStatus$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyStatus>;
/** @internal */
export declare const UpdateDrainResponseBodyStatus$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyStatus>;
/** @internal */
export declare const UpdateDrainResponseBodyDisabledReason$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyDisabledReason>;
/** @internal */
export declare const UpdateDrainResponseBodyDisabledReason$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyDisabledReason>;
/** @internal */
export declare const UpdateDrainResponseBodyLog$inboundSchema: z.ZodType<UpdateDrainResponseBodyLog, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyLog$Outbound = {};
/** @internal */
export declare const UpdateDrainResponseBodyLog$outboundSchema: z.ZodType<UpdateDrainResponseBodyLog$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyLog>;
export declare function updateDrainResponseBodyLogToJSON(updateDrainResponseBodyLog: UpdateDrainResponseBodyLog): string;
export declare function updateDrainResponseBodyLogFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyLog, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyTrace$inboundSchema: z.ZodType<UpdateDrainResponseBodyTrace, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyTrace$Outbound = {};
/** @internal */
export declare const UpdateDrainResponseBodyTrace$outboundSchema: z.ZodType<UpdateDrainResponseBodyTrace$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyTrace>;
export declare function updateDrainResponseBodyTraceToJSON(updateDrainResponseBodyTrace: UpdateDrainResponseBodyTrace): string;
export declare function updateDrainResponseBodyTraceFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyTrace, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyAnalytics$inboundSchema: z.ZodType<UpdateDrainResponseBodyAnalytics, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyAnalytics$Outbound = {};
/** @internal */
export declare const UpdateDrainResponseBodyAnalytics$outboundSchema: z.ZodType<UpdateDrainResponseBodyAnalytics$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyAnalytics>;
export declare function updateDrainResponseBodyAnalyticsToJSON(updateDrainResponseBodyAnalytics: UpdateDrainResponseBodyAnalytics): string;
export declare function updateDrainResponseBodyAnalyticsFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyAnalytics, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodySpeedInsights$inboundSchema: z.ZodType<UpdateDrainResponseBodySpeedInsights, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodySpeedInsights$Outbound = {};
/** @internal */
export declare const UpdateDrainResponseBodySpeedInsights$outboundSchema: z.ZodType<UpdateDrainResponseBodySpeedInsights$Outbound, z.ZodTypeDef, UpdateDrainResponseBodySpeedInsights>;
export declare function updateDrainResponseBodySpeedInsightsToJSON(updateDrainResponseBodySpeedInsights: UpdateDrainResponseBodySpeedInsights): string;
export declare function updateDrainResponseBodySpeedInsightsFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodySpeedInsights, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodySchemas$inboundSchema: z.ZodType<UpdateDrainResponseBodySchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodySchemas$Outbound = {
    log?: UpdateDrainResponseBodyLog$Outbound | undefined;
    trace?: UpdateDrainResponseBodyTrace$Outbound | undefined;
    analytics?: UpdateDrainResponseBodyAnalytics$Outbound | undefined;
    speed_insights?: UpdateDrainResponseBodySpeedInsights$Outbound | undefined;
};
/** @internal */
export declare const UpdateDrainResponseBodySchemas$outboundSchema: z.ZodType<UpdateDrainResponseBodySchemas$Outbound, z.ZodTypeDef, UpdateDrainResponseBodySchemas>;
export declare function updateDrainResponseBodySchemasToJSON(updateDrainResponseBodySchemas: UpdateDrainResponseBodySchemas): string;
export declare function updateDrainResponseBodySchemasFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodySchemas, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryTarget$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryTarget>;
/** @internal */
export declare const UpdateDrainDeliveryTarget$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryTarget>;
/** @internal */
export declare const UpdateDrainDelivery4$inboundSchema: z.ZodType<UpdateDrainDelivery4, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDelivery4$Outbound = {
    type: "internal";
    target: string;
};
/** @internal */
export declare const UpdateDrainDelivery4$outboundSchema: z.ZodType<UpdateDrainDelivery4$Outbound, z.ZodTypeDef, UpdateDrainDelivery4>;
export declare function updateDrainDelivery4ToJSON(updateDrainDelivery4: UpdateDrainDelivery4): string;
export declare function updateDrainDelivery4FromJSON(jsonString: string): SafeParseResult<UpdateDrainDelivery4, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDelivery3$inboundSchema: z.ZodType<UpdateDrainDelivery3, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDelivery3$Outbound = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
/** @internal */
export declare const UpdateDrainDelivery3$outboundSchema: z.ZodType<UpdateDrainDelivery3$Outbound, z.ZodTypeDef, UpdateDrainDelivery3>;
export declare function updateDrainDelivery3ToJSON(updateDrainDelivery3: UpdateDrainDelivery3): string;
export declare function updateDrainDelivery3FromJSON(jsonString: string): SafeParseResult<UpdateDrainDelivery3, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryEndpoint$inboundSchema: z.ZodType<UpdateDrainDeliveryEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliveryEndpoint$Outbound = {
    traces: string;
};
/** @internal */
export declare const UpdateDrainDeliveryEndpoint$outboundSchema: z.ZodType<UpdateDrainDeliveryEndpoint$Outbound, z.ZodTypeDef, UpdateDrainDeliveryEndpoint>;
export declare function updateDrainDeliveryEndpointToJSON(updateDrainDeliveryEndpoint: UpdateDrainDeliveryEndpoint): string;
export declare function updateDrainDeliveryEndpointFromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliveryEndpoint, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse200Encoding$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsResponse200Encoding>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponse200Encoding$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsResponse200Encoding>;
/** @internal */
export declare const UpdateDrainSecretDrainsKind$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainSecretDrainsKind>;
/** @internal */
export declare const UpdateDrainSecretDrainsKind$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainSecretDrainsKind>;
/** @internal */
export declare const UpdateDrainSecretDrains2$inboundSchema: z.ZodType<UpdateDrainSecretDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSecretDrains2$Outbound = {
    kind: string;
};
/** @internal */
export declare const UpdateDrainSecretDrains2$outboundSchema: z.ZodType<UpdateDrainSecretDrains2$Outbound, z.ZodTypeDef, UpdateDrainSecretDrains2>;
export declare function updateDrainSecretDrains2ToJSON(updateDrainSecretDrains2: UpdateDrainSecretDrains2): string;
export declare function updateDrainSecretDrains2FromJSON(jsonString: string): SafeParseResult<UpdateDrainSecretDrains2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsSecret$inboundSchema: z.ZodType<UpdateDrainDeliveryDrainsSecret, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliveryDrainsSecret$Outbound = UpdateDrainSecretDrains2$Outbound | string;
/** @internal */
export declare const UpdateDrainDeliveryDrainsSecret$outboundSchema: z.ZodType<UpdateDrainDeliveryDrainsSecret$Outbound, z.ZodTypeDef, UpdateDrainDeliveryDrainsSecret>;
export declare function updateDrainDeliveryDrainsSecretToJSON(updateDrainDeliveryDrainsSecret: UpdateDrainDeliveryDrainsSecret): string;
export declare function updateDrainDeliveryDrainsSecretFromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliveryDrainsSecret, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrains2$inboundSchema: z.ZodType<UpdateDrainDeliveryDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliveryDrains2$Outbound = {
    type: "otlphttp";
    endpoint: UpdateDrainDeliveryEndpoint$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: UpdateDrainSecretDrains2$Outbound | string | undefined;
};
/** @internal */
export declare const UpdateDrainDeliveryDrains2$outboundSchema: z.ZodType<UpdateDrainDeliveryDrains2$Outbound, z.ZodTypeDef, UpdateDrainDeliveryDrains2>;
export declare function updateDrainDeliveryDrains2ToJSON(updateDrainDeliveryDrains2: UpdateDrainDeliveryDrains2): string;
export declare function updateDrainDeliveryDrains2FromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliveryDrains2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponseEncoding$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsResponseEncoding>;
/** @internal */
export declare const UpdateDrainDeliveryDrainsResponseEncoding$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryDrainsResponseEncoding>;
/** @internal */
export declare const UpdateDrainDeliveryCompression$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryCompression>;
/** @internal */
export declare const UpdateDrainDeliveryCompression$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainDeliveryCompression>;
/** @internal */
export declare const UpdateDrainSecretKind$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainSecretKind>;
/** @internal */
export declare const UpdateDrainSecretKind$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainSecretKind>;
/** @internal */
export declare const UpdateDrainSecret2$inboundSchema: z.ZodType<UpdateDrainSecret2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSecret2$Outbound = {
    kind: string;
};
/** @internal */
export declare const UpdateDrainSecret2$outboundSchema: z.ZodType<UpdateDrainSecret2$Outbound, z.ZodTypeDef, UpdateDrainSecret2>;
export declare function updateDrainSecret2ToJSON(updateDrainSecret2: UpdateDrainSecret2): string;
export declare function updateDrainSecret2FromJSON(jsonString: string): SafeParseResult<UpdateDrainSecret2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliverySecret$inboundSchema: z.ZodType<UpdateDrainDeliverySecret, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliverySecret$Outbound = UpdateDrainSecret2$Outbound | string;
/** @internal */
export declare const UpdateDrainDeliverySecret$outboundSchema: z.ZodType<UpdateDrainDeliverySecret$Outbound, z.ZodTypeDef, UpdateDrainDeliverySecret>;
export declare function updateDrainDeliverySecretToJSON(updateDrainDeliverySecret: UpdateDrainDeliverySecret): string;
export declare function updateDrainDeliverySecretFromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliverySecret, SDKValidationError>;
/** @internal */
export declare const UpdateDrainDeliveryDrains1$inboundSchema: z.ZodType<UpdateDrainDeliveryDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainDeliveryDrains1$Outbound = {
    type: "http";
    endpoint: string;
    encoding: string;
    compression?: string | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: UpdateDrainSecret2$Outbound | string | undefined;
};
/** @internal */
export declare const UpdateDrainDeliveryDrains1$outboundSchema: z.ZodType<UpdateDrainDeliveryDrains1$Outbound, z.ZodTypeDef, UpdateDrainDeliveryDrains1>;
export declare function updateDrainDeliveryDrains1ToJSON(updateDrainDeliveryDrains1: UpdateDrainDeliveryDrains1): string;
export declare function updateDrainDeliveryDrains1FromJSON(jsonString: string): SafeParseResult<UpdateDrainDeliveryDrains1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyDelivery$inboundSchema: z.ZodType<UpdateDrainResponseBodyDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyDelivery$Outbound = UpdateDrainDeliveryDrains1$Outbound | UpdateDrainDeliveryDrains2$Outbound | UpdateDrainDelivery3$Outbound | UpdateDrainDelivery4$Outbound;
/** @internal */
export declare const UpdateDrainResponseBodyDelivery$outboundSchema: z.ZodType<UpdateDrainResponseBodyDelivery$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyDelivery>;
export declare function updateDrainResponseBodyDeliveryToJSON(updateDrainResponseBodyDelivery: UpdateDrainResponseBodyDelivery): string;
export declare function updateDrainResponseBodyDeliveryFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyDelivery, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyType>;
/** @internal */
export declare const UpdateDrainResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyType>;
/** @internal */
export declare const UpdateDrainResponseBodyEnv$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyEnv>;
/** @internal */
export declare const UpdateDrainResponseBodyEnv$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainResponseBodyEnv>;
/** @internal */
export declare const UpdateDrainResponseBodySampling$inboundSchema: z.ZodType<UpdateDrainResponseBodySampling, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodySampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const UpdateDrainResponseBodySampling$outboundSchema: z.ZodType<UpdateDrainResponseBodySampling$Outbound, z.ZodTypeDef, UpdateDrainResponseBodySampling>;
export declare function updateDrainResponseBodySamplingToJSON(updateDrainResponseBodySampling: UpdateDrainResponseBodySampling): string;
export declare function updateDrainResponseBodySamplingFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodySampling, SDKValidationError>;
/** @internal */
export declare const UpdateDrainSourceDrains2$inboundSchema: z.ZodType<UpdateDrainSourceDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSourceDrains2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const UpdateDrainSourceDrains2$outboundSchema: z.ZodType<UpdateDrainSourceDrains2$Outbound, z.ZodTypeDef, UpdateDrainSourceDrains2>;
export declare function updateDrainSourceDrains2ToJSON(updateDrainSourceDrains2: UpdateDrainSourceDrains2): string;
export declare function updateDrainSourceDrains2FromJSON(jsonString: string): SafeParseResult<UpdateDrainSourceDrains2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainSourceDrains1$inboundSchema: z.ZodType<UpdateDrainSourceDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainSourceDrains1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const UpdateDrainSourceDrains1$outboundSchema: z.ZodType<UpdateDrainSourceDrains1$Outbound, z.ZodTypeDef, UpdateDrainSourceDrains1>;
export declare function updateDrainSourceDrains1ToJSON(updateDrainSourceDrains1: UpdateDrainSourceDrains1): string;
export declare function updateDrainSourceDrains1FromJSON(jsonString: string): SafeParseResult<UpdateDrainSourceDrains1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodySource$inboundSchema: z.ZodType<UpdateDrainResponseBodySource, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodySource$Outbound = UpdateDrainSourceDrains1$Outbound | UpdateDrainSourceDrains2$Outbound;
/** @internal */
export declare const UpdateDrainResponseBodySource$outboundSchema: z.ZodType<UpdateDrainResponseBodySource$Outbound, z.ZodTypeDef, UpdateDrainResponseBodySource>;
export declare function updateDrainResponseBodySourceToJSON(updateDrainResponseBodySource: UpdateDrainResponseBodySource): string;
export declare function updateDrainResponseBodySourceFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodySource, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterDrainsResponse2$inboundSchema: z.ZodType<UpdateDrainFilterDrainsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterDrainsResponse2$Outbound = {
    type: "odata";
    text: string;
};
/** @internal */
export declare const UpdateDrainFilterDrainsResponse2$outboundSchema: z.ZodType<UpdateDrainFilterDrainsResponse2$Outbound, z.ZodTypeDef, UpdateDrainFilterDrainsResponse2>;
export declare function updateDrainFilterDrainsResponse2ToJSON(updateDrainFilterDrainsResponse2: UpdateDrainFilterDrainsResponse2): string;
export declare function updateDrainFilterDrainsResponse2FromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterDrainsResponse2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterProject$inboundSchema: z.ZodType<UpdateDrainFilterProject, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const UpdateDrainFilterProject$outboundSchema: z.ZodType<UpdateDrainFilterProject$Outbound, z.ZodTypeDef, UpdateDrainFilterProject>;
export declare function updateDrainFilterProjectToJSON(updateDrainFilterProject: UpdateDrainFilterProject): string;
export declare function updateDrainFilterProjectFromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterProject, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterDrainsSources$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterDrainsSources>;
/** @internal */
export declare const UpdateDrainFilterDrainsSources$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterDrainsSources>;
/** @internal */
export declare const UpdateDrainFilterLog$inboundSchema: z.ZodType<UpdateDrainFilterLog, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterLog$Outbound = {
    sources?: Array<string> | undefined;
    legacy_excludeCachedStaticAssetLogs?: boolean | undefined;
};
/** @internal */
export declare const UpdateDrainFilterLog$outboundSchema: z.ZodType<UpdateDrainFilterLog$Outbound, z.ZodTypeDef, UpdateDrainFilterLog>;
export declare function updateDrainFilterLogToJSON(updateDrainFilterLog: UpdateDrainFilterLog): string;
export declare function updateDrainFilterLogFromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterLog, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterDrainsEnvironments$inboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterDrainsEnvironments>;
/** @internal */
export declare const UpdateDrainFilterDrainsEnvironments$outboundSchema: z.ZodNativeEnum<typeof UpdateDrainFilterDrainsEnvironments>;
/** @internal */
export declare const UpdateDrainFilterDeployment$inboundSchema: z.ZodType<UpdateDrainFilterDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const UpdateDrainFilterDeployment$outboundSchema: z.ZodType<UpdateDrainFilterDeployment$Outbound, z.ZodTypeDef, UpdateDrainFilterDeployment>;
export declare function updateDrainFilterDeploymentToJSON(updateDrainFilterDeployment: UpdateDrainFilterDeployment): string;
export declare function updateDrainFilterDeploymentFromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterDeployment, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterDrains1$inboundSchema: z.ZodType<UpdateDrainFilterDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterDrains1$Outbound = {
    type: "basic";
    project?: UpdateDrainFilterProject$Outbound | undefined;
    log?: UpdateDrainFilterLog$Outbound | undefined;
    deployment?: UpdateDrainFilterDeployment$Outbound | undefined;
};
/** @internal */
export declare const UpdateDrainFilterDrains1$outboundSchema: z.ZodType<UpdateDrainFilterDrains1$Outbound, z.ZodTypeDef, UpdateDrainFilterDrains1>;
export declare function updateDrainFilterDrains1ToJSON(updateDrainFilterDrains1: UpdateDrainFilterDrains1): string;
export declare function updateDrainFilterDrains1FromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterDrains1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterV2Filter$inboundSchema: z.ZodType<UpdateDrainFilterV2Filter, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterV2Filter$Outbound = UpdateDrainFilterDrains1$Outbound | UpdateDrainFilterDrainsResponse2$Outbound;
/** @internal */
export declare const UpdateDrainFilterV2Filter$outboundSchema: z.ZodType<UpdateDrainFilterV2Filter$Outbound, z.ZodTypeDef, UpdateDrainFilterV2Filter>;
export declare function updateDrainFilterV2FilterToJSON(updateDrainFilterV2Filter: UpdateDrainFilterV2Filter): string;
export declare function updateDrainFilterV2FilterFromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterV2Filter, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterV22$inboundSchema: z.ZodType<UpdateDrainFilterV22, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterV22$Outbound = {
    version: "v2";
    filter: UpdateDrainFilterDrains1$Outbound | UpdateDrainFilterDrainsResponse2$Outbound;
};
/** @internal */
export declare const UpdateDrainFilterV22$outboundSchema: z.ZodType<UpdateDrainFilterV22$Outbound, z.ZodTypeDef, UpdateDrainFilterV22>;
export declare function updateDrainFilterV22ToJSON(updateDrainFilterV22: UpdateDrainFilterV22): string;
export declare function updateDrainFilterV22FromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterV22, SDKValidationError>;
/** @internal */
export declare const UpdateDrainFilterV21$inboundSchema: z.ZodType<UpdateDrainFilterV21, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainFilterV21$Outbound = {
    version: "v1";
};
/** @internal */
export declare const UpdateDrainFilterV21$outboundSchema: z.ZodType<UpdateDrainFilterV21$Outbound, z.ZodTypeDef, UpdateDrainFilterV21>;
export declare function updateDrainFilterV21ToJSON(updateDrainFilterV21: UpdateDrainFilterV21): string;
export declare function updateDrainFilterV21FromJSON(jsonString: string): SafeParseResult<UpdateDrainFilterV21, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBodyFilterV2$inboundSchema: z.ZodType<UpdateDrainResponseBodyFilterV2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBodyFilterV2$Outbound = UpdateDrainFilterV21$Outbound | UpdateDrainFilterV22$Outbound;
/** @internal */
export declare const UpdateDrainResponseBodyFilterV2$outboundSchema: z.ZodType<UpdateDrainResponseBodyFilterV2$Outbound, z.ZodTypeDef, UpdateDrainResponseBodyFilterV2>;
export declare function updateDrainResponseBodyFilterV2ToJSON(updateDrainResponseBodyFilterV2: UpdateDrainResponseBodyFilterV2): string;
export declare function updateDrainResponseBodyFilterV2FromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBodyFilterV2, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBody1$inboundSchema: z.ZodType<UpdateDrainResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBody1$Outbound = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: string | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: string | undefined;
    schemas: UpdateDrainResponseBodySchemas$Outbound;
    delivery: UpdateDrainDeliveryDrains1$Outbound | UpdateDrainDeliveryDrains2$Outbound | UpdateDrainDelivery3$Outbound | UpdateDrainDelivery4$Outbound;
    sampling?: Array<UpdateDrainResponseBodySampling$Outbound> | undefined;
    source: UpdateDrainSourceDrains1$Outbound | UpdateDrainSourceDrains2$Outbound;
    filter?: string | undefined;
    filterV2?: UpdateDrainFilterV21$Outbound | UpdateDrainFilterV22$Outbound | undefined;
};
/** @internal */
export declare const UpdateDrainResponseBody1$outboundSchema: z.ZodType<UpdateDrainResponseBody1$Outbound, z.ZodTypeDef, UpdateDrainResponseBody1>;
export declare function updateDrainResponseBody1ToJSON(updateDrainResponseBody1: UpdateDrainResponseBody1): string;
export declare function updateDrainResponseBody1FromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBody1, SDKValidationError>;
/** @internal */
export declare const UpdateDrainResponseBody$inboundSchema: z.ZodType<UpdateDrainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDrainResponseBody$Outbound = UpdateDrainResponseBody1$Outbound | UpdateDrainResponseBody2$Outbound;
/** @internal */
export declare const UpdateDrainResponseBody$outboundSchema: z.ZodType<UpdateDrainResponseBody$Outbound, z.ZodTypeDef, UpdateDrainResponseBody>;
export declare function updateDrainResponseBodyToJSON(updateDrainResponseBody: UpdateDrainResponseBody): string;
export declare function updateDrainResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateDrainResponseBody, SDKValidationError>;
//# sourceMappingURL=updatedrainop.d.ts.map