import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetDrainRequest = {
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const GetDrainResponseBodyDrainsStatus: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
    readonly Errored: "errored";
};
export type GetDrainResponseBodyDrainsStatus = ClosedEnum<typeof GetDrainResponseBodyDrainsStatus>;
export declare const GetDrainResponseBodyDrainsDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly DisabledByAdmin: "disabled-by-admin";
};
export type GetDrainResponseBodyDrainsDisabledReason = ClosedEnum<typeof GetDrainResponseBodyDrainsDisabledReason>;
export type GetDrainResponseBodyDrainsLog = {};
export type GetDrainResponseBodyDrainsTrace = {};
export type GetDrainResponseBodyDrainsAnalytics = {};
export type GetDrainResponseBodyDrainsSpeedInsights = {};
export type GetDrainResponseBodyDrainsSchemas = {
    log?: GetDrainResponseBodyDrainsLog | undefined;
    trace?: GetDrainResponseBodyDrainsTrace | undefined;
    analytics?: GetDrainResponseBodyDrainsAnalytics | undefined;
    speedInsights?: GetDrainResponseBodyDrainsSpeedInsights | undefined;
};
export declare const GetDrainDeliveryDrainsTarget: {
    readonly VercelOtelTracesDb: "vercel-otel-traces-db";
};
export type GetDrainDeliveryDrainsTarget = ClosedEnum<typeof GetDrainDeliveryDrainsTarget>;
export type GetDrainDeliveryDrains4 = {
    type: "internal";
    target: GetDrainDeliveryDrainsTarget;
};
export type GetDrainDeliveryDrains3 = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
export type GetDrainDeliveryDrainsEndpoint = {
    traces: string;
};
export declare const GetDrainDeliveryDrainsResponse200Encoding: {
    readonly Json: "json";
    readonly Proto: "proto";
};
export type GetDrainDeliveryDrainsResponse200Encoding = ClosedEnum<typeof GetDrainDeliveryDrainsResponse200Encoding>;
export declare const GetDrainSecretDrainsResponse200Kind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetDrainSecretDrainsResponse200Kind = ClosedEnum<typeof GetDrainSecretDrainsResponse200Kind>;
export type GetDrainSecretDrainsResponse2002 = {
    kind: GetDrainSecretDrainsResponse200Kind;
};
export type GetDrainDeliveryDrainsResponse200Secret = GetDrainSecretDrainsResponse2002 | string;
export type GetDrainDeliveryDrains2 = {
    type: "otlphttp";
    endpoint: GetDrainDeliveryDrainsEndpoint;
    encoding: GetDrainDeliveryDrainsResponse200Encoding;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainSecretDrainsResponse2002 | string | undefined;
};
export declare const GetDrainDeliveryDrainsResponseEncoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type GetDrainDeliveryDrainsResponseEncoding = ClosedEnum<typeof GetDrainDeliveryDrainsResponseEncoding>;
export declare const GetDrainDeliveryDrainsCompression: {
    readonly None: "none";
    readonly Gzip: "gzip";
};
export type GetDrainDeliveryDrainsCompression = ClosedEnum<typeof GetDrainDeliveryDrainsCompression>;
export declare const GetDrainSecretDrainsResponseKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetDrainSecretDrainsResponseKind = ClosedEnum<typeof GetDrainSecretDrainsResponseKind>;
export type GetDrainSecretDrainsResponse2 = {
    kind: GetDrainSecretDrainsResponseKind;
};
export type GetDrainDeliveryDrainsResponseSecret = GetDrainSecretDrainsResponse2 | string;
export type GetDrainDeliveryDrains1 = {
    type: "http";
    endpoint: string;
    encoding: GetDrainDeliveryDrainsResponseEncoding;
    compression?: GetDrainDeliveryDrainsCompression | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainSecretDrainsResponse2 | string | undefined;
};
export type GetDrainResponseBodyDrainsDelivery = GetDrainDeliveryDrains1 | GetDrainDeliveryDrains2 | GetDrainDeliveryDrains3 | GetDrainDeliveryDrains4;
export declare const GetDrainResponseBodyDrainsType: {
    readonly HeadSampling: "head_sampling";
};
export type GetDrainResponseBodyDrainsType = ClosedEnum<typeof GetDrainResponseBodyDrainsType>;
export declare const GetDrainResponseBodyDrainsEnv: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type GetDrainResponseBodyDrainsEnv = ClosedEnum<typeof GetDrainResponseBodyDrainsEnv>;
export type GetDrainResponseBodyDrainsSampling = {
    type: GetDrainResponseBodyDrainsType;
    rate: number;
    env?: GetDrainResponseBodyDrainsEnv | undefined;
    requestPath?: string | undefined;
};
export type GetDrainSourceDrains2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type GetDrainSourceDrains1 = {
    kind: "self-served";
};
export type GetDrainResponseBodyDrainsSource = GetDrainSourceDrains1 | GetDrainSourceDrains2;
export type GetDrainFilterDrains2 = {
    type: "odata";
    text: string;
};
export type GetDrainFilterDrainsProject = {
    ids?: Array<string> | undefined;
};
export declare const GetDrainFilterDrainsSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type GetDrainFilterDrainsSources = ClosedEnum<typeof GetDrainFilterDrainsSources>;
export type GetDrainFilterDrainsLog = {
    sources?: Array<GetDrainFilterDrainsSources> | undefined;
    legacyExcludeCachedStaticAssetLogs?: boolean | undefined;
};
export declare const GetDrainFilterDrainsEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type GetDrainFilterDrainsEnvironments = ClosedEnum<typeof GetDrainFilterDrainsEnvironments>;
export type GetDrainFilterDrainsDeployment = {
    environments?: Array<GetDrainFilterDrainsEnvironments> | undefined;
};
export type GetDrainFilterDrains1 = {
    type: "basic";
    project?: GetDrainFilterDrainsProject | undefined;
    log?: GetDrainFilterDrainsLog | undefined;
    deployment?: GetDrainFilterDrainsDeployment | undefined;
};
export type GetDrainFilterV2DrainsFilter = GetDrainFilterDrains1 | GetDrainFilterDrains2;
export type GetDrainFilterV2Drains2 = {
    version: "v2";
    filter: GetDrainFilterDrains1 | GetDrainFilterDrains2;
};
export type GetDrainFilterV2Drains1 = {
    version: "v1";
};
export type GetDrainResponseBodyDrainsFilterV2 = GetDrainFilterV2Drains1 | GetDrainFilterV2Drains2;
export type GetDrainProjectAccess2 = {
    access: "some";
    projectIds: Array<string>;
};
export type GetDrainProjectAccess1 = {
    access: "all";
};
export type ResponseBodyProjectAccess = GetDrainProjectAccess1 | GetDrainProjectAccess2;
export type GetDrainResponseBody2 = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: GetDrainResponseBodyDrainsStatus | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: GetDrainResponseBodyDrainsDisabledReason | undefined;
    schemas: GetDrainResponseBodyDrainsSchemas;
    delivery: GetDrainDeliveryDrains1 | GetDrainDeliveryDrains2 | GetDrainDeliveryDrains3 | GetDrainDeliveryDrains4;
    sampling?: Array<GetDrainResponseBodyDrainsSampling> | undefined;
    source: GetDrainSourceDrains1 | GetDrainSourceDrains2;
    filter?: string | undefined;
    filterV2?: GetDrainFilterV2Drains1 | GetDrainFilterV2Drains2 | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
    projectAccess?: GetDrainProjectAccess1 | GetDrainProjectAccess2 | undefined;
};
export declare const GetDrainResponseBodyStatus: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
    readonly Errored: "errored";
};
export type GetDrainResponseBodyStatus = ClosedEnum<typeof GetDrainResponseBodyStatus>;
export declare const GetDrainResponseBodyDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly DisabledByAdmin: "disabled-by-admin";
};
export type GetDrainResponseBodyDisabledReason = ClosedEnum<typeof GetDrainResponseBodyDisabledReason>;
export type GetDrainResponseBodyLog = {};
export type GetDrainResponseBodyTrace = {};
export type GetDrainResponseBodyAnalytics = {};
export type GetDrainResponseBodySpeedInsights = {};
export type GetDrainResponseBodySchemas = {
    log?: GetDrainResponseBodyLog | undefined;
    trace?: GetDrainResponseBodyTrace | undefined;
    analytics?: GetDrainResponseBodyAnalytics | undefined;
    speedInsights?: GetDrainResponseBodySpeedInsights | undefined;
};
export declare const GetDrainDeliveryTarget: {
    readonly VercelOtelTracesDb: "vercel-otel-traces-db";
};
export type GetDrainDeliveryTarget = ClosedEnum<typeof GetDrainDeliveryTarget>;
export type GetDrainDelivery4 = {
    type: "internal";
    target: GetDrainDeliveryTarget;
};
export type GetDrainDelivery3 = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
export type GetDrainDeliveryEndpoint = {
    traces: string;
};
export declare const GetDrainDeliveryDrainsEncoding: {
    readonly Json: "json";
    readonly Proto: "proto";
};
export type GetDrainDeliveryDrainsEncoding = ClosedEnum<typeof GetDrainDeliveryDrainsEncoding>;
export declare const GetDrainSecretDrainsKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetDrainSecretDrainsKind = ClosedEnum<typeof GetDrainSecretDrainsKind>;
export type GetDrainSecretDrains2 = {
    kind: GetDrainSecretDrainsKind;
};
export type GetDrainDeliveryDrainsSecret = GetDrainSecretDrains2 | string;
export type GetDrainDelivery2 = {
    type: "otlphttp";
    endpoint: GetDrainDeliveryEndpoint;
    encoding: GetDrainDeliveryDrainsEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainSecretDrains2 | string | undefined;
};
export declare const GetDrainDeliveryEncoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type GetDrainDeliveryEncoding = ClosedEnum<typeof GetDrainDeliveryEncoding>;
export declare const GetDrainDeliveryCompression: {
    readonly None: "none";
    readonly Gzip: "gzip";
};
export type GetDrainDeliveryCompression = ClosedEnum<typeof GetDrainDeliveryCompression>;
export declare const GetDrainSecretKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetDrainSecretKind = ClosedEnum<typeof GetDrainSecretKind>;
export type GetDrainSecret2 = {
    kind: GetDrainSecretKind;
};
export type GetDrainDeliverySecret = GetDrainSecret2 | string;
export type GetDrainDelivery1 = {
    type: "http";
    endpoint: string;
    encoding: GetDrainDeliveryEncoding;
    compression?: GetDrainDeliveryCompression | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainSecret2 | string | undefined;
};
export type GetDrainResponseBodyDelivery = GetDrainDelivery1 | GetDrainDelivery2 | GetDrainDelivery3 | GetDrainDelivery4;
export declare const GetDrainResponseBodyType: {
    readonly HeadSampling: "head_sampling";
};
export type GetDrainResponseBodyType = ClosedEnum<typeof GetDrainResponseBodyType>;
export declare const GetDrainResponseBodyEnv: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type GetDrainResponseBodyEnv = ClosedEnum<typeof GetDrainResponseBodyEnv>;
export type GetDrainResponseBodySampling = {
    type: GetDrainResponseBodyType;
    rate: number;
    env?: GetDrainResponseBodyEnv | undefined;
    requestPath?: string | undefined;
};
export type GetDrainSource2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type GetDrainSource1 = {
    kind: "self-served";
};
export type GetDrainResponseBodySource = GetDrainSource1 | GetDrainSource2;
export type GetDrainFilter2 = {
    type: "odata";
    text: string;
};
export type GetDrainFilterProject = {
    ids?: Array<string> | undefined;
};
export declare const GetDrainFilterSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type GetDrainFilterSources = ClosedEnum<typeof GetDrainFilterSources>;
export type GetDrainFilterLog = {
    sources?: Array<GetDrainFilterSources> | undefined;
    legacyExcludeCachedStaticAssetLogs?: boolean | undefined;
};
export declare const GetDrainFilterEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type GetDrainFilterEnvironments = ClosedEnum<typeof GetDrainFilterEnvironments>;
export type GetDrainFilterDeployment = {
    environments?: Array<GetDrainFilterEnvironments> | undefined;
};
export type GetDrainFilter1 = {
    type: "basic";
    project?: GetDrainFilterProject | undefined;
    log?: GetDrainFilterLog | undefined;
    deployment?: GetDrainFilterDeployment | undefined;
};
export type GetDrainFilterV2Filter = GetDrainFilter1 | GetDrainFilter2;
export type GetDrainFilterV22 = {
    version: "v2";
    filter: GetDrainFilter1 | GetDrainFilter2;
};
export type GetDrainFilterV21 = {
    version: "v1";
};
export type GetDrainResponseBodyFilterV2 = GetDrainFilterV21 | GetDrainFilterV22;
export type GetDrainResponseBody1 = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: GetDrainResponseBodyStatus | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: GetDrainResponseBodyDisabledReason | undefined;
    schemas: GetDrainResponseBodySchemas;
    delivery: GetDrainDelivery1 | GetDrainDelivery2 | GetDrainDelivery3 | GetDrainDelivery4;
    sampling?: Array<GetDrainResponseBodySampling> | undefined;
    source: GetDrainSource1 | GetDrainSource2;
    filter?: string | undefined;
    filterV2?: GetDrainFilterV21 | GetDrainFilterV22 | undefined;
};
export type GetDrainResponseBody = GetDrainResponseBody1 | GetDrainResponseBody2;
/** @internal */
export declare const GetDrainRequest$inboundSchema: z.ZodType<GetDrainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetDrainRequest$outboundSchema: z.ZodType<GetDrainRequest$Outbound, z.ZodTypeDef, GetDrainRequest>;
export declare function getDrainRequestToJSON(getDrainRequest: GetDrainRequest): string;
export declare function getDrainRequestFromJSON(jsonString: string): SafeParseResult<GetDrainRequest, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyDrainsStatus$inboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyDrainsStatus>;
/** @internal */
export declare const GetDrainResponseBodyDrainsStatus$outboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyDrainsStatus>;
/** @internal */
export declare const GetDrainResponseBodyDrainsDisabledReason$inboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyDrainsDisabledReason>;
/** @internal */
export declare const GetDrainResponseBodyDrainsDisabledReason$outboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyDrainsDisabledReason>;
/** @internal */
export declare const GetDrainResponseBodyDrainsLog$inboundSchema: z.ZodType<GetDrainResponseBodyDrainsLog, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyDrainsLog$Outbound = {};
/** @internal */
export declare const GetDrainResponseBodyDrainsLog$outboundSchema: z.ZodType<GetDrainResponseBodyDrainsLog$Outbound, z.ZodTypeDef, GetDrainResponseBodyDrainsLog>;
export declare function getDrainResponseBodyDrainsLogToJSON(getDrainResponseBodyDrainsLog: GetDrainResponseBodyDrainsLog): string;
export declare function getDrainResponseBodyDrainsLogFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyDrainsLog, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyDrainsTrace$inboundSchema: z.ZodType<GetDrainResponseBodyDrainsTrace, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyDrainsTrace$Outbound = {};
/** @internal */
export declare const GetDrainResponseBodyDrainsTrace$outboundSchema: z.ZodType<GetDrainResponseBodyDrainsTrace$Outbound, z.ZodTypeDef, GetDrainResponseBodyDrainsTrace>;
export declare function getDrainResponseBodyDrainsTraceToJSON(getDrainResponseBodyDrainsTrace: GetDrainResponseBodyDrainsTrace): string;
export declare function getDrainResponseBodyDrainsTraceFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyDrainsTrace, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyDrainsAnalytics$inboundSchema: z.ZodType<GetDrainResponseBodyDrainsAnalytics, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyDrainsAnalytics$Outbound = {};
/** @internal */
export declare const GetDrainResponseBodyDrainsAnalytics$outboundSchema: z.ZodType<GetDrainResponseBodyDrainsAnalytics$Outbound, z.ZodTypeDef, GetDrainResponseBodyDrainsAnalytics>;
export declare function getDrainResponseBodyDrainsAnalyticsToJSON(getDrainResponseBodyDrainsAnalytics: GetDrainResponseBodyDrainsAnalytics): string;
export declare function getDrainResponseBodyDrainsAnalyticsFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyDrainsAnalytics, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyDrainsSpeedInsights$inboundSchema: z.ZodType<GetDrainResponseBodyDrainsSpeedInsights, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyDrainsSpeedInsights$Outbound = {};
/** @internal */
export declare const GetDrainResponseBodyDrainsSpeedInsights$outboundSchema: z.ZodType<GetDrainResponseBodyDrainsSpeedInsights$Outbound, z.ZodTypeDef, GetDrainResponseBodyDrainsSpeedInsights>;
export declare function getDrainResponseBodyDrainsSpeedInsightsToJSON(getDrainResponseBodyDrainsSpeedInsights: GetDrainResponseBodyDrainsSpeedInsights): string;
export declare function getDrainResponseBodyDrainsSpeedInsightsFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyDrainsSpeedInsights, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyDrainsSchemas$inboundSchema: z.ZodType<GetDrainResponseBodyDrainsSchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyDrainsSchemas$Outbound = {
    log?: GetDrainResponseBodyDrainsLog$Outbound | undefined;
    trace?: GetDrainResponseBodyDrainsTrace$Outbound | undefined;
    analytics?: GetDrainResponseBodyDrainsAnalytics$Outbound | undefined;
    speed_insights?: GetDrainResponseBodyDrainsSpeedInsights$Outbound | undefined;
};
/** @internal */
export declare const GetDrainResponseBodyDrainsSchemas$outboundSchema: z.ZodType<GetDrainResponseBodyDrainsSchemas$Outbound, z.ZodTypeDef, GetDrainResponseBodyDrainsSchemas>;
export declare function getDrainResponseBodyDrainsSchemasToJSON(getDrainResponseBodyDrainsSchemas: GetDrainResponseBodyDrainsSchemas): string;
export declare function getDrainResponseBodyDrainsSchemasFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyDrainsSchemas, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryDrainsTarget$inboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryDrainsTarget>;
/** @internal */
export declare const GetDrainDeliveryDrainsTarget$outboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryDrainsTarget>;
/** @internal */
export declare const GetDrainDeliveryDrains4$inboundSchema: z.ZodType<GetDrainDeliveryDrains4, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDeliveryDrains4$Outbound = {
    type: "internal";
    target: string;
};
/** @internal */
export declare const GetDrainDeliveryDrains4$outboundSchema: z.ZodType<GetDrainDeliveryDrains4$Outbound, z.ZodTypeDef, GetDrainDeliveryDrains4>;
export declare function getDrainDeliveryDrains4ToJSON(getDrainDeliveryDrains4: GetDrainDeliveryDrains4): string;
export declare function getDrainDeliveryDrains4FromJSON(jsonString: string): SafeParseResult<GetDrainDeliveryDrains4, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryDrains3$inboundSchema: z.ZodType<GetDrainDeliveryDrains3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDeliveryDrains3$Outbound = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
/** @internal */
export declare const GetDrainDeliveryDrains3$outboundSchema: z.ZodType<GetDrainDeliveryDrains3$Outbound, z.ZodTypeDef, GetDrainDeliveryDrains3>;
export declare function getDrainDeliveryDrains3ToJSON(getDrainDeliveryDrains3: GetDrainDeliveryDrains3): string;
export declare function getDrainDeliveryDrains3FromJSON(jsonString: string): SafeParseResult<GetDrainDeliveryDrains3, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryDrainsEndpoint$inboundSchema: z.ZodType<GetDrainDeliveryDrainsEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDeliveryDrainsEndpoint$Outbound = {
    traces: string;
};
/** @internal */
export declare const GetDrainDeliveryDrainsEndpoint$outboundSchema: z.ZodType<GetDrainDeliveryDrainsEndpoint$Outbound, z.ZodTypeDef, GetDrainDeliveryDrainsEndpoint>;
export declare function getDrainDeliveryDrainsEndpointToJSON(getDrainDeliveryDrainsEndpoint: GetDrainDeliveryDrainsEndpoint): string;
export declare function getDrainDeliveryDrainsEndpointFromJSON(jsonString: string): SafeParseResult<GetDrainDeliveryDrainsEndpoint, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryDrainsResponse200Encoding$inboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryDrainsResponse200Encoding>;
/** @internal */
export declare const GetDrainDeliveryDrainsResponse200Encoding$outboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryDrainsResponse200Encoding>;
/** @internal */
export declare const GetDrainSecretDrainsResponse200Kind$inboundSchema: z.ZodNativeEnum<typeof GetDrainSecretDrainsResponse200Kind>;
/** @internal */
export declare const GetDrainSecretDrainsResponse200Kind$outboundSchema: z.ZodNativeEnum<typeof GetDrainSecretDrainsResponse200Kind>;
/** @internal */
export declare const GetDrainSecretDrainsResponse2002$inboundSchema: z.ZodType<GetDrainSecretDrainsResponse2002, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainSecretDrainsResponse2002$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetDrainSecretDrainsResponse2002$outboundSchema: z.ZodType<GetDrainSecretDrainsResponse2002$Outbound, z.ZodTypeDef, GetDrainSecretDrainsResponse2002>;
export declare function getDrainSecretDrainsResponse2002ToJSON(getDrainSecretDrainsResponse2002: GetDrainSecretDrainsResponse2002): string;
export declare function getDrainSecretDrainsResponse2002FromJSON(jsonString: string): SafeParseResult<GetDrainSecretDrainsResponse2002, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryDrainsResponse200Secret$inboundSchema: z.ZodType<GetDrainDeliveryDrainsResponse200Secret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDeliveryDrainsResponse200Secret$Outbound = GetDrainSecretDrainsResponse2002$Outbound | string;
/** @internal */
export declare const GetDrainDeliveryDrainsResponse200Secret$outboundSchema: z.ZodType<GetDrainDeliveryDrainsResponse200Secret$Outbound, z.ZodTypeDef, GetDrainDeliveryDrainsResponse200Secret>;
export declare function getDrainDeliveryDrainsResponse200SecretToJSON(getDrainDeliveryDrainsResponse200Secret: GetDrainDeliveryDrainsResponse200Secret): string;
export declare function getDrainDeliveryDrainsResponse200SecretFromJSON(jsonString: string): SafeParseResult<GetDrainDeliveryDrainsResponse200Secret, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryDrains2$inboundSchema: z.ZodType<GetDrainDeliveryDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDeliveryDrains2$Outbound = {
    type: "otlphttp";
    endpoint: GetDrainDeliveryDrainsEndpoint$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainSecretDrainsResponse2002$Outbound | string | undefined;
};
/** @internal */
export declare const GetDrainDeliveryDrains2$outboundSchema: z.ZodType<GetDrainDeliveryDrains2$Outbound, z.ZodTypeDef, GetDrainDeliveryDrains2>;
export declare function getDrainDeliveryDrains2ToJSON(getDrainDeliveryDrains2: GetDrainDeliveryDrains2): string;
export declare function getDrainDeliveryDrains2FromJSON(jsonString: string): SafeParseResult<GetDrainDeliveryDrains2, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryDrainsResponseEncoding$inboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryDrainsResponseEncoding>;
/** @internal */
export declare const GetDrainDeliveryDrainsResponseEncoding$outboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryDrainsResponseEncoding>;
/** @internal */
export declare const GetDrainDeliveryDrainsCompression$inboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryDrainsCompression>;
/** @internal */
export declare const GetDrainDeliveryDrainsCompression$outboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryDrainsCompression>;
/** @internal */
export declare const GetDrainSecretDrainsResponseKind$inboundSchema: z.ZodNativeEnum<typeof GetDrainSecretDrainsResponseKind>;
/** @internal */
export declare const GetDrainSecretDrainsResponseKind$outboundSchema: z.ZodNativeEnum<typeof GetDrainSecretDrainsResponseKind>;
/** @internal */
export declare const GetDrainSecretDrainsResponse2$inboundSchema: z.ZodType<GetDrainSecretDrainsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainSecretDrainsResponse2$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetDrainSecretDrainsResponse2$outboundSchema: z.ZodType<GetDrainSecretDrainsResponse2$Outbound, z.ZodTypeDef, GetDrainSecretDrainsResponse2>;
export declare function getDrainSecretDrainsResponse2ToJSON(getDrainSecretDrainsResponse2: GetDrainSecretDrainsResponse2): string;
export declare function getDrainSecretDrainsResponse2FromJSON(jsonString: string): SafeParseResult<GetDrainSecretDrainsResponse2, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryDrainsResponseSecret$inboundSchema: z.ZodType<GetDrainDeliveryDrainsResponseSecret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDeliveryDrainsResponseSecret$Outbound = GetDrainSecretDrainsResponse2$Outbound | string;
/** @internal */
export declare const GetDrainDeliveryDrainsResponseSecret$outboundSchema: z.ZodType<GetDrainDeliveryDrainsResponseSecret$Outbound, z.ZodTypeDef, GetDrainDeliveryDrainsResponseSecret>;
export declare function getDrainDeliveryDrainsResponseSecretToJSON(getDrainDeliveryDrainsResponseSecret: GetDrainDeliveryDrainsResponseSecret): string;
export declare function getDrainDeliveryDrainsResponseSecretFromJSON(jsonString: string): SafeParseResult<GetDrainDeliveryDrainsResponseSecret, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryDrains1$inboundSchema: z.ZodType<GetDrainDeliveryDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDeliveryDrains1$Outbound = {
    type: "http";
    endpoint: string;
    encoding: string;
    compression?: string | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainSecretDrainsResponse2$Outbound | string | undefined;
};
/** @internal */
export declare const GetDrainDeliveryDrains1$outboundSchema: z.ZodType<GetDrainDeliveryDrains1$Outbound, z.ZodTypeDef, GetDrainDeliveryDrains1>;
export declare function getDrainDeliveryDrains1ToJSON(getDrainDeliveryDrains1: GetDrainDeliveryDrains1): string;
export declare function getDrainDeliveryDrains1FromJSON(jsonString: string): SafeParseResult<GetDrainDeliveryDrains1, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyDrainsDelivery$inboundSchema: z.ZodType<GetDrainResponseBodyDrainsDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyDrainsDelivery$Outbound = GetDrainDeliveryDrains1$Outbound | GetDrainDeliveryDrains2$Outbound | GetDrainDeliveryDrains3$Outbound | GetDrainDeliveryDrains4$Outbound;
/** @internal */
export declare const GetDrainResponseBodyDrainsDelivery$outboundSchema: z.ZodType<GetDrainResponseBodyDrainsDelivery$Outbound, z.ZodTypeDef, GetDrainResponseBodyDrainsDelivery>;
export declare function getDrainResponseBodyDrainsDeliveryToJSON(getDrainResponseBodyDrainsDelivery: GetDrainResponseBodyDrainsDelivery): string;
export declare function getDrainResponseBodyDrainsDeliveryFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyDrainsDelivery, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyDrainsType$inboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyDrainsType>;
/** @internal */
export declare const GetDrainResponseBodyDrainsType$outboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyDrainsType>;
/** @internal */
export declare const GetDrainResponseBodyDrainsEnv$inboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyDrainsEnv>;
/** @internal */
export declare const GetDrainResponseBodyDrainsEnv$outboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyDrainsEnv>;
/** @internal */
export declare const GetDrainResponseBodyDrainsSampling$inboundSchema: z.ZodType<GetDrainResponseBodyDrainsSampling, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyDrainsSampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const GetDrainResponseBodyDrainsSampling$outboundSchema: z.ZodType<GetDrainResponseBodyDrainsSampling$Outbound, z.ZodTypeDef, GetDrainResponseBodyDrainsSampling>;
export declare function getDrainResponseBodyDrainsSamplingToJSON(getDrainResponseBodyDrainsSampling: GetDrainResponseBodyDrainsSampling): string;
export declare function getDrainResponseBodyDrainsSamplingFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyDrainsSampling, SDKValidationError>;
/** @internal */
export declare const GetDrainSourceDrains2$inboundSchema: z.ZodType<GetDrainSourceDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainSourceDrains2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetDrainSourceDrains2$outboundSchema: z.ZodType<GetDrainSourceDrains2$Outbound, z.ZodTypeDef, GetDrainSourceDrains2>;
export declare function getDrainSourceDrains2ToJSON(getDrainSourceDrains2: GetDrainSourceDrains2): string;
export declare function getDrainSourceDrains2FromJSON(jsonString: string): SafeParseResult<GetDrainSourceDrains2, SDKValidationError>;
/** @internal */
export declare const GetDrainSourceDrains1$inboundSchema: z.ZodType<GetDrainSourceDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainSourceDrains1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const GetDrainSourceDrains1$outboundSchema: z.ZodType<GetDrainSourceDrains1$Outbound, z.ZodTypeDef, GetDrainSourceDrains1>;
export declare function getDrainSourceDrains1ToJSON(getDrainSourceDrains1: GetDrainSourceDrains1): string;
export declare function getDrainSourceDrains1FromJSON(jsonString: string): SafeParseResult<GetDrainSourceDrains1, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyDrainsSource$inboundSchema: z.ZodType<GetDrainResponseBodyDrainsSource, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyDrainsSource$Outbound = GetDrainSourceDrains1$Outbound | GetDrainSourceDrains2$Outbound;
/** @internal */
export declare const GetDrainResponseBodyDrainsSource$outboundSchema: z.ZodType<GetDrainResponseBodyDrainsSource$Outbound, z.ZodTypeDef, GetDrainResponseBodyDrainsSource>;
export declare function getDrainResponseBodyDrainsSourceToJSON(getDrainResponseBodyDrainsSource: GetDrainResponseBodyDrainsSource): string;
export declare function getDrainResponseBodyDrainsSourceFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyDrainsSource, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterDrains2$inboundSchema: z.ZodType<GetDrainFilterDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterDrains2$Outbound = {
    type: "odata";
    text: string;
};
/** @internal */
export declare const GetDrainFilterDrains2$outboundSchema: z.ZodType<GetDrainFilterDrains2$Outbound, z.ZodTypeDef, GetDrainFilterDrains2>;
export declare function getDrainFilterDrains2ToJSON(getDrainFilterDrains2: GetDrainFilterDrains2): string;
export declare function getDrainFilterDrains2FromJSON(jsonString: string): SafeParseResult<GetDrainFilterDrains2, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterDrainsProject$inboundSchema: z.ZodType<GetDrainFilterDrainsProject, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterDrainsProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetDrainFilterDrainsProject$outboundSchema: z.ZodType<GetDrainFilterDrainsProject$Outbound, z.ZodTypeDef, GetDrainFilterDrainsProject>;
export declare function getDrainFilterDrainsProjectToJSON(getDrainFilterDrainsProject: GetDrainFilterDrainsProject): string;
export declare function getDrainFilterDrainsProjectFromJSON(jsonString: string): SafeParseResult<GetDrainFilterDrainsProject, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterDrainsSources$inboundSchema: z.ZodNativeEnum<typeof GetDrainFilterDrainsSources>;
/** @internal */
export declare const GetDrainFilterDrainsSources$outboundSchema: z.ZodNativeEnum<typeof GetDrainFilterDrainsSources>;
/** @internal */
export declare const GetDrainFilterDrainsLog$inboundSchema: z.ZodType<GetDrainFilterDrainsLog, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterDrainsLog$Outbound = {
    sources?: Array<string> | undefined;
    legacy_excludeCachedStaticAssetLogs?: boolean | undefined;
};
/** @internal */
export declare const GetDrainFilterDrainsLog$outboundSchema: z.ZodType<GetDrainFilterDrainsLog$Outbound, z.ZodTypeDef, GetDrainFilterDrainsLog>;
export declare function getDrainFilterDrainsLogToJSON(getDrainFilterDrainsLog: GetDrainFilterDrainsLog): string;
export declare function getDrainFilterDrainsLogFromJSON(jsonString: string): SafeParseResult<GetDrainFilterDrainsLog, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterDrainsEnvironments$inboundSchema: z.ZodNativeEnum<typeof GetDrainFilterDrainsEnvironments>;
/** @internal */
export declare const GetDrainFilterDrainsEnvironments$outboundSchema: z.ZodNativeEnum<typeof GetDrainFilterDrainsEnvironments>;
/** @internal */
export declare const GetDrainFilterDrainsDeployment$inboundSchema: z.ZodType<GetDrainFilterDrainsDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterDrainsDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const GetDrainFilterDrainsDeployment$outboundSchema: z.ZodType<GetDrainFilterDrainsDeployment$Outbound, z.ZodTypeDef, GetDrainFilterDrainsDeployment>;
export declare function getDrainFilterDrainsDeploymentToJSON(getDrainFilterDrainsDeployment: GetDrainFilterDrainsDeployment): string;
export declare function getDrainFilterDrainsDeploymentFromJSON(jsonString: string): SafeParseResult<GetDrainFilterDrainsDeployment, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterDrains1$inboundSchema: z.ZodType<GetDrainFilterDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterDrains1$Outbound = {
    type: "basic";
    project?: GetDrainFilterDrainsProject$Outbound | undefined;
    log?: GetDrainFilterDrainsLog$Outbound | undefined;
    deployment?: GetDrainFilterDrainsDeployment$Outbound | undefined;
};
/** @internal */
export declare const GetDrainFilterDrains1$outboundSchema: z.ZodType<GetDrainFilterDrains1$Outbound, z.ZodTypeDef, GetDrainFilterDrains1>;
export declare function getDrainFilterDrains1ToJSON(getDrainFilterDrains1: GetDrainFilterDrains1): string;
export declare function getDrainFilterDrains1FromJSON(jsonString: string): SafeParseResult<GetDrainFilterDrains1, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterV2DrainsFilter$inboundSchema: z.ZodType<GetDrainFilterV2DrainsFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterV2DrainsFilter$Outbound = GetDrainFilterDrains1$Outbound | GetDrainFilterDrains2$Outbound;
/** @internal */
export declare const GetDrainFilterV2DrainsFilter$outboundSchema: z.ZodType<GetDrainFilterV2DrainsFilter$Outbound, z.ZodTypeDef, GetDrainFilterV2DrainsFilter>;
export declare function getDrainFilterV2DrainsFilterToJSON(getDrainFilterV2DrainsFilter: GetDrainFilterV2DrainsFilter): string;
export declare function getDrainFilterV2DrainsFilterFromJSON(jsonString: string): SafeParseResult<GetDrainFilterV2DrainsFilter, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterV2Drains2$inboundSchema: z.ZodType<GetDrainFilterV2Drains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterV2Drains2$Outbound = {
    version: "v2";
    filter: GetDrainFilterDrains1$Outbound | GetDrainFilterDrains2$Outbound;
};
/** @internal */
export declare const GetDrainFilterV2Drains2$outboundSchema: z.ZodType<GetDrainFilterV2Drains2$Outbound, z.ZodTypeDef, GetDrainFilterV2Drains2>;
export declare function getDrainFilterV2Drains2ToJSON(getDrainFilterV2Drains2: GetDrainFilterV2Drains2): string;
export declare function getDrainFilterV2Drains2FromJSON(jsonString: string): SafeParseResult<GetDrainFilterV2Drains2, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterV2Drains1$inboundSchema: z.ZodType<GetDrainFilterV2Drains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterV2Drains1$Outbound = {
    version: "v1";
};
/** @internal */
export declare const GetDrainFilterV2Drains1$outboundSchema: z.ZodType<GetDrainFilterV2Drains1$Outbound, z.ZodTypeDef, GetDrainFilterV2Drains1>;
export declare function getDrainFilterV2Drains1ToJSON(getDrainFilterV2Drains1: GetDrainFilterV2Drains1): string;
export declare function getDrainFilterV2Drains1FromJSON(jsonString: string): SafeParseResult<GetDrainFilterV2Drains1, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyDrainsFilterV2$inboundSchema: z.ZodType<GetDrainResponseBodyDrainsFilterV2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyDrainsFilterV2$Outbound = GetDrainFilterV2Drains1$Outbound | GetDrainFilterV2Drains2$Outbound;
/** @internal */
export declare const GetDrainResponseBodyDrainsFilterV2$outboundSchema: z.ZodType<GetDrainResponseBodyDrainsFilterV2$Outbound, z.ZodTypeDef, GetDrainResponseBodyDrainsFilterV2>;
export declare function getDrainResponseBodyDrainsFilterV2ToJSON(getDrainResponseBodyDrainsFilterV2: GetDrainResponseBodyDrainsFilterV2): string;
export declare function getDrainResponseBodyDrainsFilterV2FromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyDrainsFilterV2, SDKValidationError>;
/** @internal */
export declare const GetDrainProjectAccess2$inboundSchema: z.ZodType<GetDrainProjectAccess2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainProjectAccess2$Outbound = {
    access: "some";
    projectIds: Array<string>;
};
/** @internal */
export declare const GetDrainProjectAccess2$outboundSchema: z.ZodType<GetDrainProjectAccess2$Outbound, z.ZodTypeDef, GetDrainProjectAccess2>;
export declare function getDrainProjectAccess2ToJSON(getDrainProjectAccess2: GetDrainProjectAccess2): string;
export declare function getDrainProjectAccess2FromJSON(jsonString: string): SafeParseResult<GetDrainProjectAccess2, SDKValidationError>;
/** @internal */
export declare const GetDrainProjectAccess1$inboundSchema: z.ZodType<GetDrainProjectAccess1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainProjectAccess1$Outbound = {
    access: "all";
};
/** @internal */
export declare const GetDrainProjectAccess1$outboundSchema: z.ZodType<GetDrainProjectAccess1$Outbound, z.ZodTypeDef, GetDrainProjectAccess1>;
export declare function getDrainProjectAccess1ToJSON(getDrainProjectAccess1: GetDrainProjectAccess1): string;
export declare function getDrainProjectAccess1FromJSON(jsonString: string): SafeParseResult<GetDrainProjectAccess1, SDKValidationError>;
/** @internal */
export declare const ResponseBodyProjectAccess$inboundSchema: z.ZodType<ResponseBodyProjectAccess, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyProjectAccess$Outbound = GetDrainProjectAccess1$Outbound | GetDrainProjectAccess2$Outbound;
/** @internal */
export declare const ResponseBodyProjectAccess$outboundSchema: z.ZodType<ResponseBodyProjectAccess$Outbound, z.ZodTypeDef, ResponseBodyProjectAccess>;
export declare function responseBodyProjectAccessToJSON(responseBodyProjectAccess: ResponseBodyProjectAccess): string;
export declare function responseBodyProjectAccessFromJSON(jsonString: string): SafeParseResult<ResponseBodyProjectAccess, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBody2$inboundSchema: z.ZodType<GetDrainResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBody2$Outbound = {
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
    schemas: GetDrainResponseBodyDrainsSchemas$Outbound;
    delivery: GetDrainDeliveryDrains1$Outbound | GetDrainDeliveryDrains2$Outbound | GetDrainDeliveryDrains3$Outbound | GetDrainDeliveryDrains4$Outbound;
    sampling?: Array<GetDrainResponseBodyDrainsSampling$Outbound> | undefined;
    source: GetDrainSourceDrains1$Outbound | GetDrainSourceDrains2$Outbound;
    filter?: string | undefined;
    filterV2?: GetDrainFilterV2Drains1$Outbound | GetDrainFilterV2Drains2$Outbound | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
    projectAccess?: GetDrainProjectAccess1$Outbound | GetDrainProjectAccess2$Outbound | undefined;
};
/** @internal */
export declare const GetDrainResponseBody2$outboundSchema: z.ZodType<GetDrainResponseBody2$Outbound, z.ZodTypeDef, GetDrainResponseBody2>;
export declare function getDrainResponseBody2ToJSON(getDrainResponseBody2: GetDrainResponseBody2): string;
export declare function getDrainResponseBody2FromJSON(jsonString: string): SafeParseResult<GetDrainResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyStatus$inboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyStatus>;
/** @internal */
export declare const GetDrainResponseBodyStatus$outboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyStatus>;
/** @internal */
export declare const GetDrainResponseBodyDisabledReason$inboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyDisabledReason>;
/** @internal */
export declare const GetDrainResponseBodyDisabledReason$outboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyDisabledReason>;
/** @internal */
export declare const GetDrainResponseBodyLog$inboundSchema: z.ZodType<GetDrainResponseBodyLog, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyLog$Outbound = {};
/** @internal */
export declare const GetDrainResponseBodyLog$outboundSchema: z.ZodType<GetDrainResponseBodyLog$Outbound, z.ZodTypeDef, GetDrainResponseBodyLog>;
export declare function getDrainResponseBodyLogToJSON(getDrainResponseBodyLog: GetDrainResponseBodyLog): string;
export declare function getDrainResponseBodyLogFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyLog, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyTrace$inboundSchema: z.ZodType<GetDrainResponseBodyTrace, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyTrace$Outbound = {};
/** @internal */
export declare const GetDrainResponseBodyTrace$outboundSchema: z.ZodType<GetDrainResponseBodyTrace$Outbound, z.ZodTypeDef, GetDrainResponseBodyTrace>;
export declare function getDrainResponseBodyTraceToJSON(getDrainResponseBodyTrace: GetDrainResponseBodyTrace): string;
export declare function getDrainResponseBodyTraceFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyTrace, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyAnalytics$inboundSchema: z.ZodType<GetDrainResponseBodyAnalytics, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyAnalytics$Outbound = {};
/** @internal */
export declare const GetDrainResponseBodyAnalytics$outboundSchema: z.ZodType<GetDrainResponseBodyAnalytics$Outbound, z.ZodTypeDef, GetDrainResponseBodyAnalytics>;
export declare function getDrainResponseBodyAnalyticsToJSON(getDrainResponseBodyAnalytics: GetDrainResponseBodyAnalytics): string;
export declare function getDrainResponseBodyAnalyticsFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyAnalytics, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodySpeedInsights$inboundSchema: z.ZodType<GetDrainResponseBodySpeedInsights, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodySpeedInsights$Outbound = {};
/** @internal */
export declare const GetDrainResponseBodySpeedInsights$outboundSchema: z.ZodType<GetDrainResponseBodySpeedInsights$Outbound, z.ZodTypeDef, GetDrainResponseBodySpeedInsights>;
export declare function getDrainResponseBodySpeedInsightsToJSON(getDrainResponseBodySpeedInsights: GetDrainResponseBodySpeedInsights): string;
export declare function getDrainResponseBodySpeedInsightsFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodySpeedInsights, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodySchemas$inboundSchema: z.ZodType<GetDrainResponseBodySchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodySchemas$Outbound = {
    log?: GetDrainResponseBodyLog$Outbound | undefined;
    trace?: GetDrainResponseBodyTrace$Outbound | undefined;
    analytics?: GetDrainResponseBodyAnalytics$Outbound | undefined;
    speed_insights?: GetDrainResponseBodySpeedInsights$Outbound | undefined;
};
/** @internal */
export declare const GetDrainResponseBodySchemas$outboundSchema: z.ZodType<GetDrainResponseBodySchemas$Outbound, z.ZodTypeDef, GetDrainResponseBodySchemas>;
export declare function getDrainResponseBodySchemasToJSON(getDrainResponseBodySchemas: GetDrainResponseBodySchemas): string;
export declare function getDrainResponseBodySchemasFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodySchemas, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryTarget$inboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryTarget>;
/** @internal */
export declare const GetDrainDeliveryTarget$outboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryTarget>;
/** @internal */
export declare const GetDrainDelivery4$inboundSchema: z.ZodType<GetDrainDelivery4, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDelivery4$Outbound = {
    type: "internal";
    target: string;
};
/** @internal */
export declare const GetDrainDelivery4$outboundSchema: z.ZodType<GetDrainDelivery4$Outbound, z.ZodTypeDef, GetDrainDelivery4>;
export declare function getDrainDelivery4ToJSON(getDrainDelivery4: GetDrainDelivery4): string;
export declare function getDrainDelivery4FromJSON(jsonString: string): SafeParseResult<GetDrainDelivery4, SDKValidationError>;
/** @internal */
export declare const GetDrainDelivery3$inboundSchema: z.ZodType<GetDrainDelivery3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDelivery3$Outbound = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
/** @internal */
export declare const GetDrainDelivery3$outboundSchema: z.ZodType<GetDrainDelivery3$Outbound, z.ZodTypeDef, GetDrainDelivery3>;
export declare function getDrainDelivery3ToJSON(getDrainDelivery3: GetDrainDelivery3): string;
export declare function getDrainDelivery3FromJSON(jsonString: string): SafeParseResult<GetDrainDelivery3, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryEndpoint$inboundSchema: z.ZodType<GetDrainDeliveryEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDeliveryEndpoint$Outbound = {
    traces: string;
};
/** @internal */
export declare const GetDrainDeliveryEndpoint$outboundSchema: z.ZodType<GetDrainDeliveryEndpoint$Outbound, z.ZodTypeDef, GetDrainDeliveryEndpoint>;
export declare function getDrainDeliveryEndpointToJSON(getDrainDeliveryEndpoint: GetDrainDeliveryEndpoint): string;
export declare function getDrainDeliveryEndpointFromJSON(jsonString: string): SafeParseResult<GetDrainDeliveryEndpoint, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryDrainsEncoding$inboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryDrainsEncoding>;
/** @internal */
export declare const GetDrainDeliveryDrainsEncoding$outboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryDrainsEncoding>;
/** @internal */
export declare const GetDrainSecretDrainsKind$inboundSchema: z.ZodNativeEnum<typeof GetDrainSecretDrainsKind>;
/** @internal */
export declare const GetDrainSecretDrainsKind$outboundSchema: z.ZodNativeEnum<typeof GetDrainSecretDrainsKind>;
/** @internal */
export declare const GetDrainSecretDrains2$inboundSchema: z.ZodType<GetDrainSecretDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainSecretDrains2$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetDrainSecretDrains2$outboundSchema: z.ZodType<GetDrainSecretDrains2$Outbound, z.ZodTypeDef, GetDrainSecretDrains2>;
export declare function getDrainSecretDrains2ToJSON(getDrainSecretDrains2: GetDrainSecretDrains2): string;
export declare function getDrainSecretDrains2FromJSON(jsonString: string): SafeParseResult<GetDrainSecretDrains2, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryDrainsSecret$inboundSchema: z.ZodType<GetDrainDeliveryDrainsSecret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDeliveryDrainsSecret$Outbound = GetDrainSecretDrains2$Outbound | string;
/** @internal */
export declare const GetDrainDeliveryDrainsSecret$outboundSchema: z.ZodType<GetDrainDeliveryDrainsSecret$Outbound, z.ZodTypeDef, GetDrainDeliveryDrainsSecret>;
export declare function getDrainDeliveryDrainsSecretToJSON(getDrainDeliveryDrainsSecret: GetDrainDeliveryDrainsSecret): string;
export declare function getDrainDeliveryDrainsSecretFromJSON(jsonString: string): SafeParseResult<GetDrainDeliveryDrainsSecret, SDKValidationError>;
/** @internal */
export declare const GetDrainDelivery2$inboundSchema: z.ZodType<GetDrainDelivery2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDelivery2$Outbound = {
    type: "otlphttp";
    endpoint: GetDrainDeliveryEndpoint$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainSecretDrains2$Outbound | string | undefined;
};
/** @internal */
export declare const GetDrainDelivery2$outboundSchema: z.ZodType<GetDrainDelivery2$Outbound, z.ZodTypeDef, GetDrainDelivery2>;
export declare function getDrainDelivery2ToJSON(getDrainDelivery2: GetDrainDelivery2): string;
export declare function getDrainDelivery2FromJSON(jsonString: string): SafeParseResult<GetDrainDelivery2, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliveryEncoding$inboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryEncoding>;
/** @internal */
export declare const GetDrainDeliveryEncoding$outboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryEncoding>;
/** @internal */
export declare const GetDrainDeliveryCompression$inboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryCompression>;
/** @internal */
export declare const GetDrainDeliveryCompression$outboundSchema: z.ZodNativeEnum<typeof GetDrainDeliveryCompression>;
/** @internal */
export declare const GetDrainSecretKind$inboundSchema: z.ZodNativeEnum<typeof GetDrainSecretKind>;
/** @internal */
export declare const GetDrainSecretKind$outboundSchema: z.ZodNativeEnum<typeof GetDrainSecretKind>;
/** @internal */
export declare const GetDrainSecret2$inboundSchema: z.ZodType<GetDrainSecret2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainSecret2$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetDrainSecret2$outboundSchema: z.ZodType<GetDrainSecret2$Outbound, z.ZodTypeDef, GetDrainSecret2>;
export declare function getDrainSecret2ToJSON(getDrainSecret2: GetDrainSecret2): string;
export declare function getDrainSecret2FromJSON(jsonString: string): SafeParseResult<GetDrainSecret2, SDKValidationError>;
/** @internal */
export declare const GetDrainDeliverySecret$inboundSchema: z.ZodType<GetDrainDeliverySecret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDeliverySecret$Outbound = GetDrainSecret2$Outbound | string;
/** @internal */
export declare const GetDrainDeliverySecret$outboundSchema: z.ZodType<GetDrainDeliverySecret$Outbound, z.ZodTypeDef, GetDrainDeliverySecret>;
export declare function getDrainDeliverySecretToJSON(getDrainDeliverySecret: GetDrainDeliverySecret): string;
export declare function getDrainDeliverySecretFromJSON(jsonString: string): SafeParseResult<GetDrainDeliverySecret, SDKValidationError>;
/** @internal */
export declare const GetDrainDelivery1$inboundSchema: z.ZodType<GetDrainDelivery1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainDelivery1$Outbound = {
    type: "http";
    endpoint: string;
    encoding: string;
    compression?: string | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainSecret2$Outbound | string | undefined;
};
/** @internal */
export declare const GetDrainDelivery1$outboundSchema: z.ZodType<GetDrainDelivery1$Outbound, z.ZodTypeDef, GetDrainDelivery1>;
export declare function getDrainDelivery1ToJSON(getDrainDelivery1: GetDrainDelivery1): string;
export declare function getDrainDelivery1FromJSON(jsonString: string): SafeParseResult<GetDrainDelivery1, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyDelivery$inboundSchema: z.ZodType<GetDrainResponseBodyDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyDelivery$Outbound = GetDrainDelivery1$Outbound | GetDrainDelivery2$Outbound | GetDrainDelivery3$Outbound | GetDrainDelivery4$Outbound;
/** @internal */
export declare const GetDrainResponseBodyDelivery$outboundSchema: z.ZodType<GetDrainResponseBodyDelivery$Outbound, z.ZodTypeDef, GetDrainResponseBodyDelivery>;
export declare function getDrainResponseBodyDeliveryToJSON(getDrainResponseBodyDelivery: GetDrainResponseBodyDelivery): string;
export declare function getDrainResponseBodyDeliveryFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyDelivery, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyType>;
/** @internal */
export declare const GetDrainResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyType>;
/** @internal */
export declare const GetDrainResponseBodyEnv$inboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyEnv>;
/** @internal */
export declare const GetDrainResponseBodyEnv$outboundSchema: z.ZodNativeEnum<typeof GetDrainResponseBodyEnv>;
/** @internal */
export declare const GetDrainResponseBodySampling$inboundSchema: z.ZodType<GetDrainResponseBodySampling, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodySampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const GetDrainResponseBodySampling$outboundSchema: z.ZodType<GetDrainResponseBodySampling$Outbound, z.ZodTypeDef, GetDrainResponseBodySampling>;
export declare function getDrainResponseBodySamplingToJSON(getDrainResponseBodySampling: GetDrainResponseBodySampling): string;
export declare function getDrainResponseBodySamplingFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodySampling, SDKValidationError>;
/** @internal */
export declare const GetDrainSource2$inboundSchema: z.ZodType<GetDrainSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainSource2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetDrainSource2$outboundSchema: z.ZodType<GetDrainSource2$Outbound, z.ZodTypeDef, GetDrainSource2>;
export declare function getDrainSource2ToJSON(getDrainSource2: GetDrainSource2): string;
export declare function getDrainSource2FromJSON(jsonString: string): SafeParseResult<GetDrainSource2, SDKValidationError>;
/** @internal */
export declare const GetDrainSource1$inboundSchema: z.ZodType<GetDrainSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainSource1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const GetDrainSource1$outboundSchema: z.ZodType<GetDrainSource1$Outbound, z.ZodTypeDef, GetDrainSource1>;
export declare function getDrainSource1ToJSON(getDrainSource1: GetDrainSource1): string;
export declare function getDrainSource1FromJSON(jsonString: string): SafeParseResult<GetDrainSource1, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodySource$inboundSchema: z.ZodType<GetDrainResponseBodySource, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodySource$Outbound = GetDrainSource1$Outbound | GetDrainSource2$Outbound;
/** @internal */
export declare const GetDrainResponseBodySource$outboundSchema: z.ZodType<GetDrainResponseBodySource$Outbound, z.ZodTypeDef, GetDrainResponseBodySource>;
export declare function getDrainResponseBodySourceToJSON(getDrainResponseBodySource: GetDrainResponseBodySource): string;
export declare function getDrainResponseBodySourceFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodySource, SDKValidationError>;
/** @internal */
export declare const GetDrainFilter2$inboundSchema: z.ZodType<GetDrainFilter2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilter2$Outbound = {
    type: "odata";
    text: string;
};
/** @internal */
export declare const GetDrainFilter2$outboundSchema: z.ZodType<GetDrainFilter2$Outbound, z.ZodTypeDef, GetDrainFilter2>;
export declare function getDrainFilter2ToJSON(getDrainFilter2: GetDrainFilter2): string;
export declare function getDrainFilter2FromJSON(jsonString: string): SafeParseResult<GetDrainFilter2, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterProject$inboundSchema: z.ZodType<GetDrainFilterProject, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetDrainFilterProject$outboundSchema: z.ZodType<GetDrainFilterProject$Outbound, z.ZodTypeDef, GetDrainFilterProject>;
export declare function getDrainFilterProjectToJSON(getDrainFilterProject: GetDrainFilterProject): string;
export declare function getDrainFilterProjectFromJSON(jsonString: string): SafeParseResult<GetDrainFilterProject, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterSources$inboundSchema: z.ZodNativeEnum<typeof GetDrainFilterSources>;
/** @internal */
export declare const GetDrainFilterSources$outboundSchema: z.ZodNativeEnum<typeof GetDrainFilterSources>;
/** @internal */
export declare const GetDrainFilterLog$inboundSchema: z.ZodType<GetDrainFilterLog, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterLog$Outbound = {
    sources?: Array<string> | undefined;
    legacy_excludeCachedStaticAssetLogs?: boolean | undefined;
};
/** @internal */
export declare const GetDrainFilterLog$outboundSchema: z.ZodType<GetDrainFilterLog$Outbound, z.ZodTypeDef, GetDrainFilterLog>;
export declare function getDrainFilterLogToJSON(getDrainFilterLog: GetDrainFilterLog): string;
export declare function getDrainFilterLogFromJSON(jsonString: string): SafeParseResult<GetDrainFilterLog, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterEnvironments$inboundSchema: z.ZodNativeEnum<typeof GetDrainFilterEnvironments>;
/** @internal */
export declare const GetDrainFilterEnvironments$outboundSchema: z.ZodNativeEnum<typeof GetDrainFilterEnvironments>;
/** @internal */
export declare const GetDrainFilterDeployment$inboundSchema: z.ZodType<GetDrainFilterDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const GetDrainFilterDeployment$outboundSchema: z.ZodType<GetDrainFilterDeployment$Outbound, z.ZodTypeDef, GetDrainFilterDeployment>;
export declare function getDrainFilterDeploymentToJSON(getDrainFilterDeployment: GetDrainFilterDeployment): string;
export declare function getDrainFilterDeploymentFromJSON(jsonString: string): SafeParseResult<GetDrainFilterDeployment, SDKValidationError>;
/** @internal */
export declare const GetDrainFilter1$inboundSchema: z.ZodType<GetDrainFilter1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilter1$Outbound = {
    type: "basic";
    project?: GetDrainFilterProject$Outbound | undefined;
    log?: GetDrainFilterLog$Outbound | undefined;
    deployment?: GetDrainFilterDeployment$Outbound | undefined;
};
/** @internal */
export declare const GetDrainFilter1$outboundSchema: z.ZodType<GetDrainFilter1$Outbound, z.ZodTypeDef, GetDrainFilter1>;
export declare function getDrainFilter1ToJSON(getDrainFilter1: GetDrainFilter1): string;
export declare function getDrainFilter1FromJSON(jsonString: string): SafeParseResult<GetDrainFilter1, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterV2Filter$inboundSchema: z.ZodType<GetDrainFilterV2Filter, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterV2Filter$Outbound = GetDrainFilter1$Outbound | GetDrainFilter2$Outbound;
/** @internal */
export declare const GetDrainFilterV2Filter$outboundSchema: z.ZodType<GetDrainFilterV2Filter$Outbound, z.ZodTypeDef, GetDrainFilterV2Filter>;
export declare function getDrainFilterV2FilterToJSON(getDrainFilterV2Filter: GetDrainFilterV2Filter): string;
export declare function getDrainFilterV2FilterFromJSON(jsonString: string): SafeParseResult<GetDrainFilterV2Filter, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterV22$inboundSchema: z.ZodType<GetDrainFilterV22, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterV22$Outbound = {
    version: "v2";
    filter: GetDrainFilter1$Outbound | GetDrainFilter2$Outbound;
};
/** @internal */
export declare const GetDrainFilterV22$outboundSchema: z.ZodType<GetDrainFilterV22$Outbound, z.ZodTypeDef, GetDrainFilterV22>;
export declare function getDrainFilterV22ToJSON(getDrainFilterV22: GetDrainFilterV22): string;
export declare function getDrainFilterV22FromJSON(jsonString: string): SafeParseResult<GetDrainFilterV22, SDKValidationError>;
/** @internal */
export declare const GetDrainFilterV21$inboundSchema: z.ZodType<GetDrainFilterV21, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainFilterV21$Outbound = {
    version: "v1";
};
/** @internal */
export declare const GetDrainFilterV21$outboundSchema: z.ZodType<GetDrainFilterV21$Outbound, z.ZodTypeDef, GetDrainFilterV21>;
export declare function getDrainFilterV21ToJSON(getDrainFilterV21: GetDrainFilterV21): string;
export declare function getDrainFilterV21FromJSON(jsonString: string): SafeParseResult<GetDrainFilterV21, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBodyFilterV2$inboundSchema: z.ZodType<GetDrainResponseBodyFilterV2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBodyFilterV2$Outbound = GetDrainFilterV21$Outbound | GetDrainFilterV22$Outbound;
/** @internal */
export declare const GetDrainResponseBodyFilterV2$outboundSchema: z.ZodType<GetDrainResponseBodyFilterV2$Outbound, z.ZodTypeDef, GetDrainResponseBodyFilterV2>;
export declare function getDrainResponseBodyFilterV2ToJSON(getDrainResponseBodyFilterV2: GetDrainResponseBodyFilterV2): string;
export declare function getDrainResponseBodyFilterV2FromJSON(jsonString: string): SafeParseResult<GetDrainResponseBodyFilterV2, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBody1$inboundSchema: z.ZodType<GetDrainResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBody1$Outbound = {
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
    schemas: GetDrainResponseBodySchemas$Outbound;
    delivery: GetDrainDelivery1$Outbound | GetDrainDelivery2$Outbound | GetDrainDelivery3$Outbound | GetDrainDelivery4$Outbound;
    sampling?: Array<GetDrainResponseBodySampling$Outbound> | undefined;
    source: GetDrainSource1$Outbound | GetDrainSource2$Outbound;
    filter?: string | undefined;
    filterV2?: GetDrainFilterV21$Outbound | GetDrainFilterV22$Outbound | undefined;
};
/** @internal */
export declare const GetDrainResponseBody1$outboundSchema: z.ZodType<GetDrainResponseBody1$Outbound, z.ZodTypeDef, GetDrainResponseBody1>;
export declare function getDrainResponseBody1ToJSON(getDrainResponseBody1: GetDrainResponseBody1): string;
export declare function getDrainResponseBody1FromJSON(jsonString: string): SafeParseResult<GetDrainResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetDrainResponseBody$inboundSchema: z.ZodType<GetDrainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainResponseBody$Outbound = GetDrainResponseBody1$Outbound | GetDrainResponseBody2$Outbound;
/** @internal */
export declare const GetDrainResponseBody$outboundSchema: z.ZodType<GetDrainResponseBody$Outbound, z.ZodTypeDef, GetDrainResponseBody>;
export declare function getDrainResponseBodyToJSON(getDrainResponseBody: GetDrainResponseBody): string;
export declare function getDrainResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDrainResponseBody, SDKValidationError>;
//# sourceMappingURL=getdrainop.d.ts.map