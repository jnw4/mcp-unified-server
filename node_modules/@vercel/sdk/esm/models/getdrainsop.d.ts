import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetDrainsRequest = {
    projectId?: string | undefined;
    includeMetadata?: boolean | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const GetDrainsDrainsStatus: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
    readonly Errored: "errored";
};
export type GetDrainsDrainsStatus = ClosedEnum<typeof GetDrainsDrainsStatus>;
export declare const GetDrainsDrainsDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly DisabledByAdmin: "disabled-by-admin";
};
export type GetDrainsDrainsDisabledReason = ClosedEnum<typeof GetDrainsDrainsDisabledReason>;
export type GetDrainsDrainsLog = {};
export type GetDrainsDrainsTrace = {};
export type GetDrainsDrainsAnalytics = {};
export type GetDrainsDrainsSpeedInsights = {};
export type GetDrainsDrainsSchemas = {
    log?: GetDrainsDrainsLog | undefined;
    trace?: GetDrainsDrainsTrace | undefined;
    analytics?: GetDrainsDrainsAnalytics | undefined;
    speedInsights?: GetDrainsDrainsSpeedInsights | undefined;
};
export declare const GetDrainsDeliveryDrainsTarget: {
    readonly VercelOtelTracesDb: "vercel-otel-traces-db";
};
export type GetDrainsDeliveryDrainsTarget = ClosedEnum<typeof GetDrainsDeliveryDrainsTarget>;
export type GetDrainsDeliveryDrains4 = {
    type: "internal";
    target: GetDrainsDeliveryDrainsTarget;
};
export type GetDrainsDeliveryDrains3 = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
export type GetDrainsDeliveryDrainsEndpoint = {
    traces: string;
};
export declare const GetDrainsDeliveryDrainsResponse200Encoding: {
    readonly Json: "json";
    readonly Proto: "proto";
};
export type GetDrainsDeliveryDrainsResponse200Encoding = ClosedEnum<typeof GetDrainsDeliveryDrainsResponse200Encoding>;
export declare const GetDrainsSecretDrainsResponse200Kind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetDrainsSecretDrainsResponse200Kind = ClosedEnum<typeof GetDrainsSecretDrainsResponse200Kind>;
export type GetDrainsSecretDrainsResponse2002 = {
    kind: GetDrainsSecretDrainsResponse200Kind;
};
export type GetDrainsDeliveryDrainsResponse200Secret = GetDrainsSecretDrainsResponse2002 | string;
export type GetDrainsDeliveryDrains2 = {
    type: "otlphttp";
    endpoint: GetDrainsDeliveryDrainsEndpoint;
    encoding: GetDrainsDeliveryDrainsResponse200Encoding;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainsSecretDrainsResponse2002 | string | undefined;
};
export declare const GetDrainsDeliveryDrainsResponseEncoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type GetDrainsDeliveryDrainsResponseEncoding = ClosedEnum<typeof GetDrainsDeliveryDrainsResponseEncoding>;
export declare const GetDrainsDeliveryDrainsCompression: {
    readonly None: "none";
    readonly Gzip: "gzip";
};
export type GetDrainsDeliveryDrainsCompression = ClosedEnum<typeof GetDrainsDeliveryDrainsCompression>;
export declare const GetDrainsSecretDrainsResponseKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetDrainsSecretDrainsResponseKind = ClosedEnum<typeof GetDrainsSecretDrainsResponseKind>;
export type GetDrainsSecretDrainsResponse2 = {
    kind: GetDrainsSecretDrainsResponseKind;
};
export type GetDrainsDeliveryDrainsResponseSecret = GetDrainsSecretDrainsResponse2 | string;
export type GetDrainsDeliveryDrains1 = {
    type: "http";
    endpoint: string;
    encoding: GetDrainsDeliveryDrainsResponseEncoding;
    compression?: GetDrainsDeliveryDrainsCompression | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainsSecretDrainsResponse2 | string | undefined;
};
export type GetDrainsDrainsDelivery = GetDrainsDeliveryDrains1 | GetDrainsDeliveryDrains2 | GetDrainsDeliveryDrains3 | GetDrainsDeliveryDrains4;
export declare const GetDrainsDrainsType: {
    readonly HeadSampling: "head_sampling";
};
export type GetDrainsDrainsType = ClosedEnum<typeof GetDrainsDrainsType>;
export declare const GetDrainsDrainsEnv: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type GetDrainsDrainsEnv = ClosedEnum<typeof GetDrainsDrainsEnv>;
export type GetDrainsDrainsSampling = {
    type: GetDrainsDrainsType;
    rate: number;
    env?: GetDrainsDrainsEnv | undefined;
    requestPath?: string | undefined;
};
export type GetDrainsSourceDrains2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type GetDrainsSourceDrains1 = {
    kind: "self-served";
};
export type GetDrainsDrainsSource = GetDrainsSourceDrains1 | GetDrainsSourceDrains2;
export type GetDrainsFilterDrains2 = {
    type: "odata";
    text: string;
};
export type GetDrainsFilterDrainsProject = {
    ids?: Array<string> | undefined;
};
export declare const GetDrainsFilterDrainsSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type GetDrainsFilterDrainsSources = ClosedEnum<typeof GetDrainsFilterDrainsSources>;
export type GetDrainsFilterDrainsLog = {
    sources?: Array<GetDrainsFilterDrainsSources> | undefined;
    legacyExcludeCachedStaticAssetLogs?: boolean | undefined;
};
export declare const GetDrainsFilterDrainsEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type GetDrainsFilterDrainsEnvironments = ClosedEnum<typeof GetDrainsFilterDrainsEnvironments>;
export type GetDrainsFilterDrainsDeployment = {
    environments?: Array<GetDrainsFilterDrainsEnvironments> | undefined;
};
export type GetDrainsFilterDrains1 = {
    type: "basic";
    project?: GetDrainsFilterDrainsProject | undefined;
    log?: GetDrainsFilterDrainsLog | undefined;
    deployment?: GetDrainsFilterDrainsDeployment | undefined;
};
export type GetDrainsFilterV2DrainsFilter = GetDrainsFilterDrains1 | GetDrainsFilterDrains2;
export type GetDrainsFilterV2Drains2 = {
    version: "v2";
    filter: GetDrainsFilterDrains1 | GetDrainsFilterDrains2;
};
export type GetDrainsFilterV2Drains1 = {
    version: "v1";
};
export type GetDrainsDrainsFilterV2 = GetDrainsFilterV2Drains1 | GetDrainsFilterV2Drains2;
export type GetDrainsProjectAccess2 = {
    access: "some";
    projectIds: Array<string>;
};
export type GetDrainsProjectAccess1 = {
    access: "all";
};
export type DrainsProjectAccess = GetDrainsProjectAccess1 | GetDrainsProjectAccess2;
export type Drains2 = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: GetDrainsDrainsStatus | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: GetDrainsDrainsDisabledReason | undefined;
    schemas: GetDrainsDrainsSchemas;
    delivery: GetDrainsDeliveryDrains1 | GetDrainsDeliveryDrains2 | GetDrainsDeliveryDrains3 | GetDrainsDeliveryDrains4;
    sampling?: Array<GetDrainsDrainsSampling> | undefined;
    source: GetDrainsSourceDrains1 | GetDrainsSourceDrains2;
    filter?: string | undefined;
    filterV2?: GetDrainsFilterV2Drains1 | GetDrainsFilterV2Drains2 | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
    projectAccess?: GetDrainsProjectAccess1 | GetDrainsProjectAccess2 | undefined;
};
export declare const DrainsStatus: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
    readonly Errored: "errored";
};
export type DrainsStatus = ClosedEnum<typeof DrainsStatus>;
export declare const DrainsDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly DisabledByAdmin: "disabled-by-admin";
};
export type DrainsDisabledReason = ClosedEnum<typeof DrainsDisabledReason>;
export type DrainsLog = {};
export type DrainsTrace = {};
export type DrainsAnalytics = {};
export type DrainsSpeedInsights = {};
export type DrainsSchemas = {
    log?: DrainsLog | undefined;
    trace?: DrainsTrace | undefined;
    analytics?: DrainsAnalytics | undefined;
    speedInsights?: DrainsSpeedInsights | undefined;
};
export declare const GetDrainsDeliveryTarget: {
    readonly VercelOtelTracesDb: "vercel-otel-traces-db";
};
export type GetDrainsDeliveryTarget = ClosedEnum<typeof GetDrainsDeliveryTarget>;
export type GetDrainsDelivery4 = {
    type: "internal";
    target: GetDrainsDeliveryTarget;
};
export type GetDrainsDelivery3 = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
export type GetDrainsDeliveryEndpoint = {
    traces: string;
};
export declare const GetDrainsDeliveryDrainsEncoding: {
    readonly Json: "json";
    readonly Proto: "proto";
};
export type GetDrainsDeliveryDrainsEncoding = ClosedEnum<typeof GetDrainsDeliveryDrainsEncoding>;
export declare const GetDrainsSecretDrainsKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetDrainsSecretDrainsKind = ClosedEnum<typeof GetDrainsSecretDrainsKind>;
export type GetDrainsSecretDrains2 = {
    kind: GetDrainsSecretDrainsKind;
};
export type GetDrainsDeliveryDrainsSecret = GetDrainsSecretDrains2 | string;
export type GetDrainsDelivery2 = {
    type: "otlphttp";
    endpoint: GetDrainsDeliveryEndpoint;
    encoding: GetDrainsDeliveryDrainsEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainsSecretDrains2 | string | undefined;
};
export declare const GetDrainsDeliveryEncoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type GetDrainsDeliveryEncoding = ClosedEnum<typeof GetDrainsDeliveryEncoding>;
export declare const GetDrainsDeliveryCompression: {
    readonly None: "none";
    readonly Gzip: "gzip";
};
export type GetDrainsDeliveryCompression = ClosedEnum<typeof GetDrainsDeliveryCompression>;
export declare const GetDrainsSecretKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetDrainsSecretKind = ClosedEnum<typeof GetDrainsSecretKind>;
export type GetDrainsSecret2 = {
    kind: GetDrainsSecretKind;
};
export type GetDrainsDeliverySecret = GetDrainsSecret2 | string;
export type GetDrainsDelivery1 = {
    type: "http";
    endpoint: string;
    encoding: GetDrainsDeliveryEncoding;
    compression?: GetDrainsDeliveryCompression | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainsSecret2 | string | undefined;
};
export type DrainsDelivery = GetDrainsDelivery1 | GetDrainsDelivery2 | GetDrainsDelivery3 | GetDrainsDelivery4;
export declare const DrainsType: {
    readonly HeadSampling: "head_sampling";
};
export type DrainsType = ClosedEnum<typeof DrainsType>;
export declare const DrainsEnv: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type DrainsEnv = ClosedEnum<typeof DrainsEnv>;
export type DrainsSampling = {
    type: DrainsType;
    rate: number;
    env?: DrainsEnv | undefined;
    requestPath?: string | undefined;
};
export type GetDrainsSource2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type GetDrainsSource1 = {
    kind: "self-served";
};
export type DrainsSource = GetDrainsSource1 | GetDrainsSource2;
export type GetDrainsFilter2 = {
    type: "odata";
    text: string;
};
export type GetDrainsFilterProject = {
    ids?: Array<string> | undefined;
};
export declare const GetDrainsFilterSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type GetDrainsFilterSources = ClosedEnum<typeof GetDrainsFilterSources>;
export type GetDrainsFilterLog = {
    sources?: Array<GetDrainsFilterSources> | undefined;
    legacyExcludeCachedStaticAssetLogs?: boolean | undefined;
};
export declare const GetDrainsFilterEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type GetDrainsFilterEnvironments = ClosedEnum<typeof GetDrainsFilterEnvironments>;
export type GetDrainsFilterDeployment = {
    environments?: Array<GetDrainsFilterEnvironments> | undefined;
};
export type GetDrainsFilter1 = {
    type: "basic";
    project?: GetDrainsFilterProject | undefined;
    log?: GetDrainsFilterLog | undefined;
    deployment?: GetDrainsFilterDeployment | undefined;
};
export type GetDrainsFilterV2Filter = GetDrainsFilter1 | GetDrainsFilter2;
export type GetDrainsFilterV22 = {
    version: "v2";
    filter: GetDrainsFilter1 | GetDrainsFilter2;
};
export type GetDrainsFilterV21 = {
    version: "v1";
};
export type DrainsFilterV2 = GetDrainsFilterV21 | GetDrainsFilterV22;
export type Drains1 = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: DrainsStatus | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: DrainsDisabledReason | undefined;
    schemas: DrainsSchemas;
    delivery: GetDrainsDelivery1 | GetDrainsDelivery2 | GetDrainsDelivery3 | GetDrainsDelivery4;
    sampling?: Array<DrainsSampling> | undefined;
    source: GetDrainsSource1 | GetDrainsSource2;
    filter?: string | undefined;
    filterV2?: GetDrainsFilterV21 | GetDrainsFilterV22 | undefined;
};
export type Drains = Array<Drains1> | Array<Drains2>;
export type GetDrainsResponseBody = {
    drains: Array<Drains1> | Array<Drains2>;
};
/** @internal */
export declare const GetDrainsRequest$inboundSchema: z.ZodType<GetDrainsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsRequest$Outbound = {
    projectId?: string | undefined;
    includeMetadata: boolean;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetDrainsRequest$outboundSchema: z.ZodType<GetDrainsRequest$Outbound, z.ZodTypeDef, GetDrainsRequest>;
export declare function getDrainsRequestToJSON(getDrainsRequest: GetDrainsRequest): string;
export declare function getDrainsRequestFromJSON(jsonString: string): SafeParseResult<GetDrainsRequest, SDKValidationError>;
/** @internal */
export declare const GetDrainsDrainsStatus$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDrainsStatus>;
/** @internal */
export declare const GetDrainsDrainsStatus$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDrainsStatus>;
/** @internal */
export declare const GetDrainsDrainsDisabledReason$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDrainsDisabledReason>;
/** @internal */
export declare const GetDrainsDrainsDisabledReason$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDrainsDisabledReason>;
/** @internal */
export declare const GetDrainsDrainsLog$inboundSchema: z.ZodType<GetDrainsDrainsLog, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDrainsLog$Outbound = {};
/** @internal */
export declare const GetDrainsDrainsLog$outboundSchema: z.ZodType<GetDrainsDrainsLog$Outbound, z.ZodTypeDef, GetDrainsDrainsLog>;
export declare function getDrainsDrainsLogToJSON(getDrainsDrainsLog: GetDrainsDrainsLog): string;
export declare function getDrainsDrainsLogFromJSON(jsonString: string): SafeParseResult<GetDrainsDrainsLog, SDKValidationError>;
/** @internal */
export declare const GetDrainsDrainsTrace$inboundSchema: z.ZodType<GetDrainsDrainsTrace, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDrainsTrace$Outbound = {};
/** @internal */
export declare const GetDrainsDrainsTrace$outboundSchema: z.ZodType<GetDrainsDrainsTrace$Outbound, z.ZodTypeDef, GetDrainsDrainsTrace>;
export declare function getDrainsDrainsTraceToJSON(getDrainsDrainsTrace: GetDrainsDrainsTrace): string;
export declare function getDrainsDrainsTraceFromJSON(jsonString: string): SafeParseResult<GetDrainsDrainsTrace, SDKValidationError>;
/** @internal */
export declare const GetDrainsDrainsAnalytics$inboundSchema: z.ZodType<GetDrainsDrainsAnalytics, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDrainsAnalytics$Outbound = {};
/** @internal */
export declare const GetDrainsDrainsAnalytics$outboundSchema: z.ZodType<GetDrainsDrainsAnalytics$Outbound, z.ZodTypeDef, GetDrainsDrainsAnalytics>;
export declare function getDrainsDrainsAnalyticsToJSON(getDrainsDrainsAnalytics: GetDrainsDrainsAnalytics): string;
export declare function getDrainsDrainsAnalyticsFromJSON(jsonString: string): SafeParseResult<GetDrainsDrainsAnalytics, SDKValidationError>;
/** @internal */
export declare const GetDrainsDrainsSpeedInsights$inboundSchema: z.ZodType<GetDrainsDrainsSpeedInsights, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDrainsSpeedInsights$Outbound = {};
/** @internal */
export declare const GetDrainsDrainsSpeedInsights$outboundSchema: z.ZodType<GetDrainsDrainsSpeedInsights$Outbound, z.ZodTypeDef, GetDrainsDrainsSpeedInsights>;
export declare function getDrainsDrainsSpeedInsightsToJSON(getDrainsDrainsSpeedInsights: GetDrainsDrainsSpeedInsights): string;
export declare function getDrainsDrainsSpeedInsightsFromJSON(jsonString: string): SafeParseResult<GetDrainsDrainsSpeedInsights, SDKValidationError>;
/** @internal */
export declare const GetDrainsDrainsSchemas$inboundSchema: z.ZodType<GetDrainsDrainsSchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDrainsSchemas$Outbound = {
    log?: GetDrainsDrainsLog$Outbound | undefined;
    trace?: GetDrainsDrainsTrace$Outbound | undefined;
    analytics?: GetDrainsDrainsAnalytics$Outbound | undefined;
    speed_insights?: GetDrainsDrainsSpeedInsights$Outbound | undefined;
};
/** @internal */
export declare const GetDrainsDrainsSchemas$outboundSchema: z.ZodType<GetDrainsDrainsSchemas$Outbound, z.ZodTypeDef, GetDrainsDrainsSchemas>;
export declare function getDrainsDrainsSchemasToJSON(getDrainsDrainsSchemas: GetDrainsDrainsSchemas): string;
export declare function getDrainsDrainsSchemasFromJSON(jsonString: string): SafeParseResult<GetDrainsDrainsSchemas, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryDrainsTarget$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryDrainsTarget>;
/** @internal */
export declare const GetDrainsDeliveryDrainsTarget$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryDrainsTarget>;
/** @internal */
export declare const GetDrainsDeliveryDrains4$inboundSchema: z.ZodType<GetDrainsDeliveryDrains4, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDeliveryDrains4$Outbound = {
    type: "internal";
    target: string;
};
/** @internal */
export declare const GetDrainsDeliveryDrains4$outboundSchema: z.ZodType<GetDrainsDeliveryDrains4$Outbound, z.ZodTypeDef, GetDrainsDeliveryDrains4>;
export declare function getDrainsDeliveryDrains4ToJSON(getDrainsDeliveryDrains4: GetDrainsDeliveryDrains4): string;
export declare function getDrainsDeliveryDrains4FromJSON(jsonString: string): SafeParseResult<GetDrainsDeliveryDrains4, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryDrains3$inboundSchema: z.ZodType<GetDrainsDeliveryDrains3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDeliveryDrains3$Outbound = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
/** @internal */
export declare const GetDrainsDeliveryDrains3$outboundSchema: z.ZodType<GetDrainsDeliveryDrains3$Outbound, z.ZodTypeDef, GetDrainsDeliveryDrains3>;
export declare function getDrainsDeliveryDrains3ToJSON(getDrainsDeliveryDrains3: GetDrainsDeliveryDrains3): string;
export declare function getDrainsDeliveryDrains3FromJSON(jsonString: string): SafeParseResult<GetDrainsDeliveryDrains3, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryDrainsEndpoint$inboundSchema: z.ZodType<GetDrainsDeliveryDrainsEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDeliveryDrainsEndpoint$Outbound = {
    traces: string;
};
/** @internal */
export declare const GetDrainsDeliveryDrainsEndpoint$outboundSchema: z.ZodType<GetDrainsDeliveryDrainsEndpoint$Outbound, z.ZodTypeDef, GetDrainsDeliveryDrainsEndpoint>;
export declare function getDrainsDeliveryDrainsEndpointToJSON(getDrainsDeliveryDrainsEndpoint: GetDrainsDeliveryDrainsEndpoint): string;
export declare function getDrainsDeliveryDrainsEndpointFromJSON(jsonString: string): SafeParseResult<GetDrainsDeliveryDrainsEndpoint, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryDrainsResponse200Encoding$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryDrainsResponse200Encoding>;
/** @internal */
export declare const GetDrainsDeliveryDrainsResponse200Encoding$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryDrainsResponse200Encoding>;
/** @internal */
export declare const GetDrainsSecretDrainsResponse200Kind$inboundSchema: z.ZodNativeEnum<typeof GetDrainsSecretDrainsResponse200Kind>;
/** @internal */
export declare const GetDrainsSecretDrainsResponse200Kind$outboundSchema: z.ZodNativeEnum<typeof GetDrainsSecretDrainsResponse200Kind>;
/** @internal */
export declare const GetDrainsSecretDrainsResponse2002$inboundSchema: z.ZodType<GetDrainsSecretDrainsResponse2002, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsSecretDrainsResponse2002$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetDrainsSecretDrainsResponse2002$outboundSchema: z.ZodType<GetDrainsSecretDrainsResponse2002$Outbound, z.ZodTypeDef, GetDrainsSecretDrainsResponse2002>;
export declare function getDrainsSecretDrainsResponse2002ToJSON(getDrainsSecretDrainsResponse2002: GetDrainsSecretDrainsResponse2002): string;
export declare function getDrainsSecretDrainsResponse2002FromJSON(jsonString: string): SafeParseResult<GetDrainsSecretDrainsResponse2002, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryDrainsResponse200Secret$inboundSchema: z.ZodType<GetDrainsDeliveryDrainsResponse200Secret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDeliveryDrainsResponse200Secret$Outbound = GetDrainsSecretDrainsResponse2002$Outbound | string;
/** @internal */
export declare const GetDrainsDeliveryDrainsResponse200Secret$outboundSchema: z.ZodType<GetDrainsDeliveryDrainsResponse200Secret$Outbound, z.ZodTypeDef, GetDrainsDeliveryDrainsResponse200Secret>;
export declare function getDrainsDeliveryDrainsResponse200SecretToJSON(getDrainsDeliveryDrainsResponse200Secret: GetDrainsDeliveryDrainsResponse200Secret): string;
export declare function getDrainsDeliveryDrainsResponse200SecretFromJSON(jsonString: string): SafeParseResult<GetDrainsDeliveryDrainsResponse200Secret, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryDrains2$inboundSchema: z.ZodType<GetDrainsDeliveryDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDeliveryDrains2$Outbound = {
    type: "otlphttp";
    endpoint: GetDrainsDeliveryDrainsEndpoint$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainsSecretDrainsResponse2002$Outbound | string | undefined;
};
/** @internal */
export declare const GetDrainsDeliveryDrains2$outboundSchema: z.ZodType<GetDrainsDeliveryDrains2$Outbound, z.ZodTypeDef, GetDrainsDeliveryDrains2>;
export declare function getDrainsDeliveryDrains2ToJSON(getDrainsDeliveryDrains2: GetDrainsDeliveryDrains2): string;
export declare function getDrainsDeliveryDrains2FromJSON(jsonString: string): SafeParseResult<GetDrainsDeliveryDrains2, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryDrainsResponseEncoding$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryDrainsResponseEncoding>;
/** @internal */
export declare const GetDrainsDeliveryDrainsResponseEncoding$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryDrainsResponseEncoding>;
/** @internal */
export declare const GetDrainsDeliveryDrainsCompression$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryDrainsCompression>;
/** @internal */
export declare const GetDrainsDeliveryDrainsCompression$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryDrainsCompression>;
/** @internal */
export declare const GetDrainsSecretDrainsResponseKind$inboundSchema: z.ZodNativeEnum<typeof GetDrainsSecretDrainsResponseKind>;
/** @internal */
export declare const GetDrainsSecretDrainsResponseKind$outboundSchema: z.ZodNativeEnum<typeof GetDrainsSecretDrainsResponseKind>;
/** @internal */
export declare const GetDrainsSecretDrainsResponse2$inboundSchema: z.ZodType<GetDrainsSecretDrainsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsSecretDrainsResponse2$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetDrainsSecretDrainsResponse2$outboundSchema: z.ZodType<GetDrainsSecretDrainsResponse2$Outbound, z.ZodTypeDef, GetDrainsSecretDrainsResponse2>;
export declare function getDrainsSecretDrainsResponse2ToJSON(getDrainsSecretDrainsResponse2: GetDrainsSecretDrainsResponse2): string;
export declare function getDrainsSecretDrainsResponse2FromJSON(jsonString: string): SafeParseResult<GetDrainsSecretDrainsResponse2, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryDrainsResponseSecret$inboundSchema: z.ZodType<GetDrainsDeliveryDrainsResponseSecret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDeliveryDrainsResponseSecret$Outbound = GetDrainsSecretDrainsResponse2$Outbound | string;
/** @internal */
export declare const GetDrainsDeliveryDrainsResponseSecret$outboundSchema: z.ZodType<GetDrainsDeliveryDrainsResponseSecret$Outbound, z.ZodTypeDef, GetDrainsDeliveryDrainsResponseSecret>;
export declare function getDrainsDeliveryDrainsResponseSecretToJSON(getDrainsDeliveryDrainsResponseSecret: GetDrainsDeliveryDrainsResponseSecret): string;
export declare function getDrainsDeliveryDrainsResponseSecretFromJSON(jsonString: string): SafeParseResult<GetDrainsDeliveryDrainsResponseSecret, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryDrains1$inboundSchema: z.ZodType<GetDrainsDeliveryDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDeliveryDrains1$Outbound = {
    type: "http";
    endpoint: string;
    encoding: string;
    compression?: string | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainsSecretDrainsResponse2$Outbound | string | undefined;
};
/** @internal */
export declare const GetDrainsDeliveryDrains1$outboundSchema: z.ZodType<GetDrainsDeliveryDrains1$Outbound, z.ZodTypeDef, GetDrainsDeliveryDrains1>;
export declare function getDrainsDeliveryDrains1ToJSON(getDrainsDeliveryDrains1: GetDrainsDeliveryDrains1): string;
export declare function getDrainsDeliveryDrains1FromJSON(jsonString: string): SafeParseResult<GetDrainsDeliveryDrains1, SDKValidationError>;
/** @internal */
export declare const GetDrainsDrainsDelivery$inboundSchema: z.ZodType<GetDrainsDrainsDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDrainsDelivery$Outbound = GetDrainsDeliveryDrains1$Outbound | GetDrainsDeliveryDrains2$Outbound | GetDrainsDeliveryDrains3$Outbound | GetDrainsDeliveryDrains4$Outbound;
/** @internal */
export declare const GetDrainsDrainsDelivery$outboundSchema: z.ZodType<GetDrainsDrainsDelivery$Outbound, z.ZodTypeDef, GetDrainsDrainsDelivery>;
export declare function getDrainsDrainsDeliveryToJSON(getDrainsDrainsDelivery: GetDrainsDrainsDelivery): string;
export declare function getDrainsDrainsDeliveryFromJSON(jsonString: string): SafeParseResult<GetDrainsDrainsDelivery, SDKValidationError>;
/** @internal */
export declare const GetDrainsDrainsType$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDrainsType>;
/** @internal */
export declare const GetDrainsDrainsType$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDrainsType>;
/** @internal */
export declare const GetDrainsDrainsEnv$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDrainsEnv>;
/** @internal */
export declare const GetDrainsDrainsEnv$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDrainsEnv>;
/** @internal */
export declare const GetDrainsDrainsSampling$inboundSchema: z.ZodType<GetDrainsDrainsSampling, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDrainsSampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const GetDrainsDrainsSampling$outboundSchema: z.ZodType<GetDrainsDrainsSampling$Outbound, z.ZodTypeDef, GetDrainsDrainsSampling>;
export declare function getDrainsDrainsSamplingToJSON(getDrainsDrainsSampling: GetDrainsDrainsSampling): string;
export declare function getDrainsDrainsSamplingFromJSON(jsonString: string): SafeParseResult<GetDrainsDrainsSampling, SDKValidationError>;
/** @internal */
export declare const GetDrainsSourceDrains2$inboundSchema: z.ZodType<GetDrainsSourceDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsSourceDrains2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetDrainsSourceDrains2$outboundSchema: z.ZodType<GetDrainsSourceDrains2$Outbound, z.ZodTypeDef, GetDrainsSourceDrains2>;
export declare function getDrainsSourceDrains2ToJSON(getDrainsSourceDrains2: GetDrainsSourceDrains2): string;
export declare function getDrainsSourceDrains2FromJSON(jsonString: string): SafeParseResult<GetDrainsSourceDrains2, SDKValidationError>;
/** @internal */
export declare const GetDrainsSourceDrains1$inboundSchema: z.ZodType<GetDrainsSourceDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsSourceDrains1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const GetDrainsSourceDrains1$outboundSchema: z.ZodType<GetDrainsSourceDrains1$Outbound, z.ZodTypeDef, GetDrainsSourceDrains1>;
export declare function getDrainsSourceDrains1ToJSON(getDrainsSourceDrains1: GetDrainsSourceDrains1): string;
export declare function getDrainsSourceDrains1FromJSON(jsonString: string): SafeParseResult<GetDrainsSourceDrains1, SDKValidationError>;
/** @internal */
export declare const GetDrainsDrainsSource$inboundSchema: z.ZodType<GetDrainsDrainsSource, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDrainsSource$Outbound = GetDrainsSourceDrains1$Outbound | GetDrainsSourceDrains2$Outbound;
/** @internal */
export declare const GetDrainsDrainsSource$outboundSchema: z.ZodType<GetDrainsDrainsSource$Outbound, z.ZodTypeDef, GetDrainsDrainsSource>;
export declare function getDrainsDrainsSourceToJSON(getDrainsDrainsSource: GetDrainsDrainsSource): string;
export declare function getDrainsDrainsSourceFromJSON(jsonString: string): SafeParseResult<GetDrainsDrainsSource, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterDrains2$inboundSchema: z.ZodType<GetDrainsFilterDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterDrains2$Outbound = {
    type: "odata";
    text: string;
};
/** @internal */
export declare const GetDrainsFilterDrains2$outboundSchema: z.ZodType<GetDrainsFilterDrains2$Outbound, z.ZodTypeDef, GetDrainsFilterDrains2>;
export declare function getDrainsFilterDrains2ToJSON(getDrainsFilterDrains2: GetDrainsFilterDrains2): string;
export declare function getDrainsFilterDrains2FromJSON(jsonString: string): SafeParseResult<GetDrainsFilterDrains2, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterDrainsProject$inboundSchema: z.ZodType<GetDrainsFilterDrainsProject, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterDrainsProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetDrainsFilterDrainsProject$outboundSchema: z.ZodType<GetDrainsFilterDrainsProject$Outbound, z.ZodTypeDef, GetDrainsFilterDrainsProject>;
export declare function getDrainsFilterDrainsProjectToJSON(getDrainsFilterDrainsProject: GetDrainsFilterDrainsProject): string;
export declare function getDrainsFilterDrainsProjectFromJSON(jsonString: string): SafeParseResult<GetDrainsFilterDrainsProject, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterDrainsSources$inboundSchema: z.ZodNativeEnum<typeof GetDrainsFilterDrainsSources>;
/** @internal */
export declare const GetDrainsFilterDrainsSources$outboundSchema: z.ZodNativeEnum<typeof GetDrainsFilterDrainsSources>;
/** @internal */
export declare const GetDrainsFilterDrainsLog$inboundSchema: z.ZodType<GetDrainsFilterDrainsLog, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterDrainsLog$Outbound = {
    sources?: Array<string> | undefined;
    legacy_excludeCachedStaticAssetLogs?: boolean | undefined;
};
/** @internal */
export declare const GetDrainsFilterDrainsLog$outboundSchema: z.ZodType<GetDrainsFilterDrainsLog$Outbound, z.ZodTypeDef, GetDrainsFilterDrainsLog>;
export declare function getDrainsFilterDrainsLogToJSON(getDrainsFilterDrainsLog: GetDrainsFilterDrainsLog): string;
export declare function getDrainsFilterDrainsLogFromJSON(jsonString: string): SafeParseResult<GetDrainsFilterDrainsLog, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterDrainsEnvironments$inboundSchema: z.ZodNativeEnum<typeof GetDrainsFilterDrainsEnvironments>;
/** @internal */
export declare const GetDrainsFilterDrainsEnvironments$outboundSchema: z.ZodNativeEnum<typeof GetDrainsFilterDrainsEnvironments>;
/** @internal */
export declare const GetDrainsFilterDrainsDeployment$inboundSchema: z.ZodType<GetDrainsFilterDrainsDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterDrainsDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const GetDrainsFilterDrainsDeployment$outboundSchema: z.ZodType<GetDrainsFilterDrainsDeployment$Outbound, z.ZodTypeDef, GetDrainsFilterDrainsDeployment>;
export declare function getDrainsFilterDrainsDeploymentToJSON(getDrainsFilterDrainsDeployment: GetDrainsFilterDrainsDeployment): string;
export declare function getDrainsFilterDrainsDeploymentFromJSON(jsonString: string): SafeParseResult<GetDrainsFilterDrainsDeployment, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterDrains1$inboundSchema: z.ZodType<GetDrainsFilterDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterDrains1$Outbound = {
    type: "basic";
    project?: GetDrainsFilterDrainsProject$Outbound | undefined;
    log?: GetDrainsFilterDrainsLog$Outbound | undefined;
    deployment?: GetDrainsFilterDrainsDeployment$Outbound | undefined;
};
/** @internal */
export declare const GetDrainsFilterDrains1$outboundSchema: z.ZodType<GetDrainsFilterDrains1$Outbound, z.ZodTypeDef, GetDrainsFilterDrains1>;
export declare function getDrainsFilterDrains1ToJSON(getDrainsFilterDrains1: GetDrainsFilterDrains1): string;
export declare function getDrainsFilterDrains1FromJSON(jsonString: string): SafeParseResult<GetDrainsFilterDrains1, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterV2DrainsFilter$inboundSchema: z.ZodType<GetDrainsFilterV2DrainsFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterV2DrainsFilter$Outbound = GetDrainsFilterDrains1$Outbound | GetDrainsFilterDrains2$Outbound;
/** @internal */
export declare const GetDrainsFilterV2DrainsFilter$outboundSchema: z.ZodType<GetDrainsFilterV2DrainsFilter$Outbound, z.ZodTypeDef, GetDrainsFilterV2DrainsFilter>;
export declare function getDrainsFilterV2DrainsFilterToJSON(getDrainsFilterV2DrainsFilter: GetDrainsFilterV2DrainsFilter): string;
export declare function getDrainsFilterV2DrainsFilterFromJSON(jsonString: string): SafeParseResult<GetDrainsFilterV2DrainsFilter, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterV2Drains2$inboundSchema: z.ZodType<GetDrainsFilterV2Drains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterV2Drains2$Outbound = {
    version: "v2";
    filter: GetDrainsFilterDrains1$Outbound | GetDrainsFilterDrains2$Outbound;
};
/** @internal */
export declare const GetDrainsFilterV2Drains2$outboundSchema: z.ZodType<GetDrainsFilterV2Drains2$Outbound, z.ZodTypeDef, GetDrainsFilterV2Drains2>;
export declare function getDrainsFilterV2Drains2ToJSON(getDrainsFilterV2Drains2: GetDrainsFilterV2Drains2): string;
export declare function getDrainsFilterV2Drains2FromJSON(jsonString: string): SafeParseResult<GetDrainsFilterV2Drains2, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterV2Drains1$inboundSchema: z.ZodType<GetDrainsFilterV2Drains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterV2Drains1$Outbound = {
    version: "v1";
};
/** @internal */
export declare const GetDrainsFilterV2Drains1$outboundSchema: z.ZodType<GetDrainsFilterV2Drains1$Outbound, z.ZodTypeDef, GetDrainsFilterV2Drains1>;
export declare function getDrainsFilterV2Drains1ToJSON(getDrainsFilterV2Drains1: GetDrainsFilterV2Drains1): string;
export declare function getDrainsFilterV2Drains1FromJSON(jsonString: string): SafeParseResult<GetDrainsFilterV2Drains1, SDKValidationError>;
/** @internal */
export declare const GetDrainsDrainsFilterV2$inboundSchema: z.ZodType<GetDrainsDrainsFilterV2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDrainsFilterV2$Outbound = GetDrainsFilterV2Drains1$Outbound | GetDrainsFilterV2Drains2$Outbound;
/** @internal */
export declare const GetDrainsDrainsFilterV2$outboundSchema: z.ZodType<GetDrainsDrainsFilterV2$Outbound, z.ZodTypeDef, GetDrainsDrainsFilterV2>;
export declare function getDrainsDrainsFilterV2ToJSON(getDrainsDrainsFilterV2: GetDrainsDrainsFilterV2): string;
export declare function getDrainsDrainsFilterV2FromJSON(jsonString: string): SafeParseResult<GetDrainsDrainsFilterV2, SDKValidationError>;
/** @internal */
export declare const GetDrainsProjectAccess2$inboundSchema: z.ZodType<GetDrainsProjectAccess2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsProjectAccess2$Outbound = {
    access: "some";
    projectIds: Array<string>;
};
/** @internal */
export declare const GetDrainsProjectAccess2$outboundSchema: z.ZodType<GetDrainsProjectAccess2$Outbound, z.ZodTypeDef, GetDrainsProjectAccess2>;
export declare function getDrainsProjectAccess2ToJSON(getDrainsProjectAccess2: GetDrainsProjectAccess2): string;
export declare function getDrainsProjectAccess2FromJSON(jsonString: string): SafeParseResult<GetDrainsProjectAccess2, SDKValidationError>;
/** @internal */
export declare const GetDrainsProjectAccess1$inboundSchema: z.ZodType<GetDrainsProjectAccess1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsProjectAccess1$Outbound = {
    access: "all";
};
/** @internal */
export declare const GetDrainsProjectAccess1$outboundSchema: z.ZodType<GetDrainsProjectAccess1$Outbound, z.ZodTypeDef, GetDrainsProjectAccess1>;
export declare function getDrainsProjectAccess1ToJSON(getDrainsProjectAccess1: GetDrainsProjectAccess1): string;
export declare function getDrainsProjectAccess1FromJSON(jsonString: string): SafeParseResult<GetDrainsProjectAccess1, SDKValidationError>;
/** @internal */
export declare const DrainsProjectAccess$inboundSchema: z.ZodType<DrainsProjectAccess, z.ZodTypeDef, unknown>;
/** @internal */
export type DrainsProjectAccess$Outbound = GetDrainsProjectAccess1$Outbound | GetDrainsProjectAccess2$Outbound;
/** @internal */
export declare const DrainsProjectAccess$outboundSchema: z.ZodType<DrainsProjectAccess$Outbound, z.ZodTypeDef, DrainsProjectAccess>;
export declare function drainsProjectAccessToJSON(drainsProjectAccess: DrainsProjectAccess): string;
export declare function drainsProjectAccessFromJSON(jsonString: string): SafeParseResult<DrainsProjectAccess, SDKValidationError>;
/** @internal */
export declare const Drains2$inboundSchema: z.ZodType<Drains2, z.ZodTypeDef, unknown>;
/** @internal */
export type Drains2$Outbound = {
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
    schemas: GetDrainsDrainsSchemas$Outbound;
    delivery: GetDrainsDeliveryDrains1$Outbound | GetDrainsDeliveryDrains2$Outbound | GetDrainsDeliveryDrains3$Outbound | GetDrainsDeliveryDrains4$Outbound;
    sampling?: Array<GetDrainsDrainsSampling$Outbound> | undefined;
    source: GetDrainsSourceDrains1$Outbound | GetDrainsSourceDrains2$Outbound;
    filter?: string | undefined;
    filterV2?: GetDrainsFilterV2Drains1$Outbound | GetDrainsFilterV2Drains2$Outbound | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
    projectAccess?: GetDrainsProjectAccess1$Outbound | GetDrainsProjectAccess2$Outbound | undefined;
};
/** @internal */
export declare const Drains2$outboundSchema: z.ZodType<Drains2$Outbound, z.ZodTypeDef, Drains2>;
export declare function drains2ToJSON(drains2: Drains2): string;
export declare function drains2FromJSON(jsonString: string): SafeParseResult<Drains2, SDKValidationError>;
/** @internal */
export declare const DrainsStatus$inboundSchema: z.ZodNativeEnum<typeof DrainsStatus>;
/** @internal */
export declare const DrainsStatus$outboundSchema: z.ZodNativeEnum<typeof DrainsStatus>;
/** @internal */
export declare const DrainsDisabledReason$inboundSchema: z.ZodNativeEnum<typeof DrainsDisabledReason>;
/** @internal */
export declare const DrainsDisabledReason$outboundSchema: z.ZodNativeEnum<typeof DrainsDisabledReason>;
/** @internal */
export declare const DrainsLog$inboundSchema: z.ZodType<DrainsLog, z.ZodTypeDef, unknown>;
/** @internal */
export type DrainsLog$Outbound = {};
/** @internal */
export declare const DrainsLog$outboundSchema: z.ZodType<DrainsLog$Outbound, z.ZodTypeDef, DrainsLog>;
export declare function drainsLogToJSON(drainsLog: DrainsLog): string;
export declare function drainsLogFromJSON(jsonString: string): SafeParseResult<DrainsLog, SDKValidationError>;
/** @internal */
export declare const DrainsTrace$inboundSchema: z.ZodType<DrainsTrace, z.ZodTypeDef, unknown>;
/** @internal */
export type DrainsTrace$Outbound = {};
/** @internal */
export declare const DrainsTrace$outboundSchema: z.ZodType<DrainsTrace$Outbound, z.ZodTypeDef, DrainsTrace>;
export declare function drainsTraceToJSON(drainsTrace: DrainsTrace): string;
export declare function drainsTraceFromJSON(jsonString: string): SafeParseResult<DrainsTrace, SDKValidationError>;
/** @internal */
export declare const DrainsAnalytics$inboundSchema: z.ZodType<DrainsAnalytics, z.ZodTypeDef, unknown>;
/** @internal */
export type DrainsAnalytics$Outbound = {};
/** @internal */
export declare const DrainsAnalytics$outboundSchema: z.ZodType<DrainsAnalytics$Outbound, z.ZodTypeDef, DrainsAnalytics>;
export declare function drainsAnalyticsToJSON(drainsAnalytics: DrainsAnalytics): string;
export declare function drainsAnalyticsFromJSON(jsonString: string): SafeParseResult<DrainsAnalytics, SDKValidationError>;
/** @internal */
export declare const DrainsSpeedInsights$inboundSchema: z.ZodType<DrainsSpeedInsights, z.ZodTypeDef, unknown>;
/** @internal */
export type DrainsSpeedInsights$Outbound = {};
/** @internal */
export declare const DrainsSpeedInsights$outboundSchema: z.ZodType<DrainsSpeedInsights$Outbound, z.ZodTypeDef, DrainsSpeedInsights>;
export declare function drainsSpeedInsightsToJSON(drainsSpeedInsights: DrainsSpeedInsights): string;
export declare function drainsSpeedInsightsFromJSON(jsonString: string): SafeParseResult<DrainsSpeedInsights, SDKValidationError>;
/** @internal */
export declare const DrainsSchemas$inboundSchema: z.ZodType<DrainsSchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type DrainsSchemas$Outbound = {
    log?: DrainsLog$Outbound | undefined;
    trace?: DrainsTrace$Outbound | undefined;
    analytics?: DrainsAnalytics$Outbound | undefined;
    speed_insights?: DrainsSpeedInsights$Outbound | undefined;
};
/** @internal */
export declare const DrainsSchemas$outboundSchema: z.ZodType<DrainsSchemas$Outbound, z.ZodTypeDef, DrainsSchemas>;
export declare function drainsSchemasToJSON(drainsSchemas: DrainsSchemas): string;
export declare function drainsSchemasFromJSON(jsonString: string): SafeParseResult<DrainsSchemas, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryTarget$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryTarget>;
/** @internal */
export declare const GetDrainsDeliveryTarget$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryTarget>;
/** @internal */
export declare const GetDrainsDelivery4$inboundSchema: z.ZodType<GetDrainsDelivery4, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDelivery4$Outbound = {
    type: "internal";
    target: string;
};
/** @internal */
export declare const GetDrainsDelivery4$outboundSchema: z.ZodType<GetDrainsDelivery4$Outbound, z.ZodTypeDef, GetDrainsDelivery4>;
export declare function getDrainsDelivery4ToJSON(getDrainsDelivery4: GetDrainsDelivery4): string;
export declare function getDrainsDelivery4FromJSON(jsonString: string): SafeParseResult<GetDrainsDelivery4, SDKValidationError>;
/** @internal */
export declare const GetDrainsDelivery3$inboundSchema: z.ZodType<GetDrainsDelivery3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDelivery3$Outbound = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
/** @internal */
export declare const GetDrainsDelivery3$outboundSchema: z.ZodType<GetDrainsDelivery3$Outbound, z.ZodTypeDef, GetDrainsDelivery3>;
export declare function getDrainsDelivery3ToJSON(getDrainsDelivery3: GetDrainsDelivery3): string;
export declare function getDrainsDelivery3FromJSON(jsonString: string): SafeParseResult<GetDrainsDelivery3, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryEndpoint$inboundSchema: z.ZodType<GetDrainsDeliveryEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDeliveryEndpoint$Outbound = {
    traces: string;
};
/** @internal */
export declare const GetDrainsDeliveryEndpoint$outboundSchema: z.ZodType<GetDrainsDeliveryEndpoint$Outbound, z.ZodTypeDef, GetDrainsDeliveryEndpoint>;
export declare function getDrainsDeliveryEndpointToJSON(getDrainsDeliveryEndpoint: GetDrainsDeliveryEndpoint): string;
export declare function getDrainsDeliveryEndpointFromJSON(jsonString: string): SafeParseResult<GetDrainsDeliveryEndpoint, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryDrainsEncoding$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryDrainsEncoding>;
/** @internal */
export declare const GetDrainsDeliveryDrainsEncoding$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryDrainsEncoding>;
/** @internal */
export declare const GetDrainsSecretDrainsKind$inboundSchema: z.ZodNativeEnum<typeof GetDrainsSecretDrainsKind>;
/** @internal */
export declare const GetDrainsSecretDrainsKind$outboundSchema: z.ZodNativeEnum<typeof GetDrainsSecretDrainsKind>;
/** @internal */
export declare const GetDrainsSecretDrains2$inboundSchema: z.ZodType<GetDrainsSecretDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsSecretDrains2$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetDrainsSecretDrains2$outboundSchema: z.ZodType<GetDrainsSecretDrains2$Outbound, z.ZodTypeDef, GetDrainsSecretDrains2>;
export declare function getDrainsSecretDrains2ToJSON(getDrainsSecretDrains2: GetDrainsSecretDrains2): string;
export declare function getDrainsSecretDrains2FromJSON(jsonString: string): SafeParseResult<GetDrainsSecretDrains2, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryDrainsSecret$inboundSchema: z.ZodType<GetDrainsDeliveryDrainsSecret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDeliveryDrainsSecret$Outbound = GetDrainsSecretDrains2$Outbound | string;
/** @internal */
export declare const GetDrainsDeliveryDrainsSecret$outboundSchema: z.ZodType<GetDrainsDeliveryDrainsSecret$Outbound, z.ZodTypeDef, GetDrainsDeliveryDrainsSecret>;
export declare function getDrainsDeliveryDrainsSecretToJSON(getDrainsDeliveryDrainsSecret: GetDrainsDeliveryDrainsSecret): string;
export declare function getDrainsDeliveryDrainsSecretFromJSON(jsonString: string): SafeParseResult<GetDrainsDeliveryDrainsSecret, SDKValidationError>;
/** @internal */
export declare const GetDrainsDelivery2$inboundSchema: z.ZodType<GetDrainsDelivery2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDelivery2$Outbound = {
    type: "otlphttp";
    endpoint: GetDrainsDeliveryEndpoint$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainsSecretDrains2$Outbound | string | undefined;
};
/** @internal */
export declare const GetDrainsDelivery2$outboundSchema: z.ZodType<GetDrainsDelivery2$Outbound, z.ZodTypeDef, GetDrainsDelivery2>;
export declare function getDrainsDelivery2ToJSON(getDrainsDelivery2: GetDrainsDelivery2): string;
export declare function getDrainsDelivery2FromJSON(jsonString: string): SafeParseResult<GetDrainsDelivery2, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliveryEncoding$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryEncoding>;
/** @internal */
export declare const GetDrainsDeliveryEncoding$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryEncoding>;
/** @internal */
export declare const GetDrainsDeliveryCompression$inboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryCompression>;
/** @internal */
export declare const GetDrainsDeliveryCompression$outboundSchema: z.ZodNativeEnum<typeof GetDrainsDeliveryCompression>;
/** @internal */
export declare const GetDrainsSecretKind$inboundSchema: z.ZodNativeEnum<typeof GetDrainsSecretKind>;
/** @internal */
export declare const GetDrainsSecretKind$outboundSchema: z.ZodNativeEnum<typeof GetDrainsSecretKind>;
/** @internal */
export declare const GetDrainsSecret2$inboundSchema: z.ZodType<GetDrainsSecret2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsSecret2$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetDrainsSecret2$outboundSchema: z.ZodType<GetDrainsSecret2$Outbound, z.ZodTypeDef, GetDrainsSecret2>;
export declare function getDrainsSecret2ToJSON(getDrainsSecret2: GetDrainsSecret2): string;
export declare function getDrainsSecret2FromJSON(jsonString: string): SafeParseResult<GetDrainsSecret2, SDKValidationError>;
/** @internal */
export declare const GetDrainsDeliverySecret$inboundSchema: z.ZodType<GetDrainsDeliverySecret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDeliverySecret$Outbound = GetDrainsSecret2$Outbound | string;
/** @internal */
export declare const GetDrainsDeliverySecret$outboundSchema: z.ZodType<GetDrainsDeliverySecret$Outbound, z.ZodTypeDef, GetDrainsDeliverySecret>;
export declare function getDrainsDeliverySecretToJSON(getDrainsDeliverySecret: GetDrainsDeliverySecret): string;
export declare function getDrainsDeliverySecretFromJSON(jsonString: string): SafeParseResult<GetDrainsDeliverySecret, SDKValidationError>;
/** @internal */
export declare const GetDrainsDelivery1$inboundSchema: z.ZodType<GetDrainsDelivery1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsDelivery1$Outbound = {
    type: "http";
    endpoint: string;
    encoding: string;
    compression?: string | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetDrainsSecret2$Outbound | string | undefined;
};
/** @internal */
export declare const GetDrainsDelivery1$outboundSchema: z.ZodType<GetDrainsDelivery1$Outbound, z.ZodTypeDef, GetDrainsDelivery1>;
export declare function getDrainsDelivery1ToJSON(getDrainsDelivery1: GetDrainsDelivery1): string;
export declare function getDrainsDelivery1FromJSON(jsonString: string): SafeParseResult<GetDrainsDelivery1, SDKValidationError>;
/** @internal */
export declare const DrainsDelivery$inboundSchema: z.ZodType<DrainsDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type DrainsDelivery$Outbound = GetDrainsDelivery1$Outbound | GetDrainsDelivery2$Outbound | GetDrainsDelivery3$Outbound | GetDrainsDelivery4$Outbound;
/** @internal */
export declare const DrainsDelivery$outboundSchema: z.ZodType<DrainsDelivery$Outbound, z.ZodTypeDef, DrainsDelivery>;
export declare function drainsDeliveryToJSON(drainsDelivery: DrainsDelivery): string;
export declare function drainsDeliveryFromJSON(jsonString: string): SafeParseResult<DrainsDelivery, SDKValidationError>;
/** @internal */
export declare const DrainsType$inboundSchema: z.ZodNativeEnum<typeof DrainsType>;
/** @internal */
export declare const DrainsType$outboundSchema: z.ZodNativeEnum<typeof DrainsType>;
/** @internal */
export declare const DrainsEnv$inboundSchema: z.ZodNativeEnum<typeof DrainsEnv>;
/** @internal */
export declare const DrainsEnv$outboundSchema: z.ZodNativeEnum<typeof DrainsEnv>;
/** @internal */
export declare const DrainsSampling$inboundSchema: z.ZodType<DrainsSampling, z.ZodTypeDef, unknown>;
/** @internal */
export type DrainsSampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const DrainsSampling$outboundSchema: z.ZodType<DrainsSampling$Outbound, z.ZodTypeDef, DrainsSampling>;
export declare function drainsSamplingToJSON(drainsSampling: DrainsSampling): string;
export declare function drainsSamplingFromJSON(jsonString: string): SafeParseResult<DrainsSampling, SDKValidationError>;
/** @internal */
export declare const GetDrainsSource2$inboundSchema: z.ZodType<GetDrainsSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsSource2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetDrainsSource2$outboundSchema: z.ZodType<GetDrainsSource2$Outbound, z.ZodTypeDef, GetDrainsSource2>;
export declare function getDrainsSource2ToJSON(getDrainsSource2: GetDrainsSource2): string;
export declare function getDrainsSource2FromJSON(jsonString: string): SafeParseResult<GetDrainsSource2, SDKValidationError>;
/** @internal */
export declare const GetDrainsSource1$inboundSchema: z.ZodType<GetDrainsSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsSource1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const GetDrainsSource1$outboundSchema: z.ZodType<GetDrainsSource1$Outbound, z.ZodTypeDef, GetDrainsSource1>;
export declare function getDrainsSource1ToJSON(getDrainsSource1: GetDrainsSource1): string;
export declare function getDrainsSource1FromJSON(jsonString: string): SafeParseResult<GetDrainsSource1, SDKValidationError>;
/** @internal */
export declare const DrainsSource$inboundSchema: z.ZodType<DrainsSource, z.ZodTypeDef, unknown>;
/** @internal */
export type DrainsSource$Outbound = GetDrainsSource1$Outbound | GetDrainsSource2$Outbound;
/** @internal */
export declare const DrainsSource$outboundSchema: z.ZodType<DrainsSource$Outbound, z.ZodTypeDef, DrainsSource>;
export declare function drainsSourceToJSON(drainsSource: DrainsSource): string;
export declare function drainsSourceFromJSON(jsonString: string): SafeParseResult<DrainsSource, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilter2$inboundSchema: z.ZodType<GetDrainsFilter2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilter2$Outbound = {
    type: "odata";
    text: string;
};
/** @internal */
export declare const GetDrainsFilter2$outboundSchema: z.ZodType<GetDrainsFilter2$Outbound, z.ZodTypeDef, GetDrainsFilter2>;
export declare function getDrainsFilter2ToJSON(getDrainsFilter2: GetDrainsFilter2): string;
export declare function getDrainsFilter2FromJSON(jsonString: string): SafeParseResult<GetDrainsFilter2, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterProject$inboundSchema: z.ZodType<GetDrainsFilterProject, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetDrainsFilterProject$outboundSchema: z.ZodType<GetDrainsFilterProject$Outbound, z.ZodTypeDef, GetDrainsFilterProject>;
export declare function getDrainsFilterProjectToJSON(getDrainsFilterProject: GetDrainsFilterProject): string;
export declare function getDrainsFilterProjectFromJSON(jsonString: string): SafeParseResult<GetDrainsFilterProject, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterSources$inboundSchema: z.ZodNativeEnum<typeof GetDrainsFilterSources>;
/** @internal */
export declare const GetDrainsFilterSources$outboundSchema: z.ZodNativeEnum<typeof GetDrainsFilterSources>;
/** @internal */
export declare const GetDrainsFilterLog$inboundSchema: z.ZodType<GetDrainsFilterLog, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterLog$Outbound = {
    sources?: Array<string> | undefined;
    legacy_excludeCachedStaticAssetLogs?: boolean | undefined;
};
/** @internal */
export declare const GetDrainsFilterLog$outboundSchema: z.ZodType<GetDrainsFilterLog$Outbound, z.ZodTypeDef, GetDrainsFilterLog>;
export declare function getDrainsFilterLogToJSON(getDrainsFilterLog: GetDrainsFilterLog): string;
export declare function getDrainsFilterLogFromJSON(jsonString: string): SafeParseResult<GetDrainsFilterLog, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterEnvironments$inboundSchema: z.ZodNativeEnum<typeof GetDrainsFilterEnvironments>;
/** @internal */
export declare const GetDrainsFilterEnvironments$outboundSchema: z.ZodNativeEnum<typeof GetDrainsFilterEnvironments>;
/** @internal */
export declare const GetDrainsFilterDeployment$inboundSchema: z.ZodType<GetDrainsFilterDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const GetDrainsFilterDeployment$outboundSchema: z.ZodType<GetDrainsFilterDeployment$Outbound, z.ZodTypeDef, GetDrainsFilterDeployment>;
export declare function getDrainsFilterDeploymentToJSON(getDrainsFilterDeployment: GetDrainsFilterDeployment): string;
export declare function getDrainsFilterDeploymentFromJSON(jsonString: string): SafeParseResult<GetDrainsFilterDeployment, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilter1$inboundSchema: z.ZodType<GetDrainsFilter1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilter1$Outbound = {
    type: "basic";
    project?: GetDrainsFilterProject$Outbound | undefined;
    log?: GetDrainsFilterLog$Outbound | undefined;
    deployment?: GetDrainsFilterDeployment$Outbound | undefined;
};
/** @internal */
export declare const GetDrainsFilter1$outboundSchema: z.ZodType<GetDrainsFilter1$Outbound, z.ZodTypeDef, GetDrainsFilter1>;
export declare function getDrainsFilter1ToJSON(getDrainsFilter1: GetDrainsFilter1): string;
export declare function getDrainsFilter1FromJSON(jsonString: string): SafeParseResult<GetDrainsFilter1, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterV2Filter$inboundSchema: z.ZodType<GetDrainsFilterV2Filter, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterV2Filter$Outbound = GetDrainsFilter1$Outbound | GetDrainsFilter2$Outbound;
/** @internal */
export declare const GetDrainsFilterV2Filter$outboundSchema: z.ZodType<GetDrainsFilterV2Filter$Outbound, z.ZodTypeDef, GetDrainsFilterV2Filter>;
export declare function getDrainsFilterV2FilterToJSON(getDrainsFilterV2Filter: GetDrainsFilterV2Filter): string;
export declare function getDrainsFilterV2FilterFromJSON(jsonString: string): SafeParseResult<GetDrainsFilterV2Filter, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterV22$inboundSchema: z.ZodType<GetDrainsFilterV22, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterV22$Outbound = {
    version: "v2";
    filter: GetDrainsFilter1$Outbound | GetDrainsFilter2$Outbound;
};
/** @internal */
export declare const GetDrainsFilterV22$outboundSchema: z.ZodType<GetDrainsFilterV22$Outbound, z.ZodTypeDef, GetDrainsFilterV22>;
export declare function getDrainsFilterV22ToJSON(getDrainsFilterV22: GetDrainsFilterV22): string;
export declare function getDrainsFilterV22FromJSON(jsonString: string): SafeParseResult<GetDrainsFilterV22, SDKValidationError>;
/** @internal */
export declare const GetDrainsFilterV21$inboundSchema: z.ZodType<GetDrainsFilterV21, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsFilterV21$Outbound = {
    version: "v1";
};
/** @internal */
export declare const GetDrainsFilterV21$outboundSchema: z.ZodType<GetDrainsFilterV21$Outbound, z.ZodTypeDef, GetDrainsFilterV21>;
export declare function getDrainsFilterV21ToJSON(getDrainsFilterV21: GetDrainsFilterV21): string;
export declare function getDrainsFilterV21FromJSON(jsonString: string): SafeParseResult<GetDrainsFilterV21, SDKValidationError>;
/** @internal */
export declare const DrainsFilterV2$inboundSchema: z.ZodType<DrainsFilterV2, z.ZodTypeDef, unknown>;
/** @internal */
export type DrainsFilterV2$Outbound = GetDrainsFilterV21$Outbound | GetDrainsFilterV22$Outbound;
/** @internal */
export declare const DrainsFilterV2$outboundSchema: z.ZodType<DrainsFilterV2$Outbound, z.ZodTypeDef, DrainsFilterV2>;
export declare function drainsFilterV2ToJSON(drainsFilterV2: DrainsFilterV2): string;
export declare function drainsFilterV2FromJSON(jsonString: string): SafeParseResult<DrainsFilterV2, SDKValidationError>;
/** @internal */
export declare const Drains1$inboundSchema: z.ZodType<Drains1, z.ZodTypeDef, unknown>;
/** @internal */
export type Drains1$Outbound = {
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
    schemas: DrainsSchemas$Outbound;
    delivery: GetDrainsDelivery1$Outbound | GetDrainsDelivery2$Outbound | GetDrainsDelivery3$Outbound | GetDrainsDelivery4$Outbound;
    sampling?: Array<DrainsSampling$Outbound> | undefined;
    source: GetDrainsSource1$Outbound | GetDrainsSource2$Outbound;
    filter?: string | undefined;
    filterV2?: GetDrainsFilterV21$Outbound | GetDrainsFilterV22$Outbound | undefined;
};
/** @internal */
export declare const Drains1$outboundSchema: z.ZodType<Drains1$Outbound, z.ZodTypeDef, Drains1>;
export declare function drains1ToJSON(drains1: Drains1): string;
export declare function drains1FromJSON(jsonString: string): SafeParseResult<Drains1, SDKValidationError>;
/** @internal */
export declare const Drains$inboundSchema: z.ZodType<Drains, z.ZodTypeDef, unknown>;
/** @internal */
export type Drains$Outbound = Array<Drains1$Outbound> | Array<Drains2$Outbound>;
/** @internal */
export declare const Drains$outboundSchema: z.ZodType<Drains$Outbound, z.ZodTypeDef, Drains>;
export declare function drainsToJSON(drains: Drains): string;
export declare function drainsFromJSON(jsonString: string): SafeParseResult<Drains, SDKValidationError>;
/** @internal */
export declare const GetDrainsResponseBody$inboundSchema: z.ZodType<GetDrainsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDrainsResponseBody$Outbound = {
    drains: Array<Drains1$Outbound> | Array<Drains2$Outbound>;
};
/** @internal */
export declare const GetDrainsResponseBody$outboundSchema: z.ZodType<GetDrainsResponseBody$Outbound, z.ZodTypeDef, GetDrainsResponseBody>;
export declare function getDrainsResponseBodyToJSON(getDrainsResponseBody: GetDrainsResponseBody): string;
export declare function getDrainsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDrainsResponseBody, SDKValidationError>;
//# sourceMappingURL=getdrainsop.d.ts.map