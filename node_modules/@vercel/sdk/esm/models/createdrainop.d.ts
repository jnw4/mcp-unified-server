import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const CreateDrainProjects: {
    readonly Some: "some";
    readonly All: "all";
};
export type CreateDrainProjects = ClosedEnum<typeof CreateDrainProjects>;
export type CreateDrainFilter2 = {
    type: string;
    text: string;
};
export type CreateDrainFilterProject = {
    ids?: Array<string> | undefined;
};
export declare const FilterSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type FilterSources = ClosedEnum<typeof FilterSources>;
export type Log = {
    sources?: Array<FilterSources> | undefined;
};
export declare const FilterEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type FilterEnvironments = ClosedEnum<typeof FilterEnvironments>;
export type CreateDrainFilterDeployment = {
    environments?: Array<FilterEnvironments> | undefined;
};
export type Filter1 = {
    type: string;
    project?: CreateDrainFilterProject | undefined;
    log?: Log | undefined;
    deployment?: CreateDrainFilterDeployment | undefined;
};
export type FilterFilter = CreateDrainFilter2 | Filter1;
export type Filter2 = {
    version: string;
    filter: CreateDrainFilter2 | Filter1;
};
export type Filter = Filter2 | string;
export type Schemas = {
    version: string;
};
export type Endpoint1 = {
    traces: string;
};
export type Endpoint = Endpoint1;
export declare const CreateDrainDeliveryEncoding: {
    readonly Proto: "proto";
    readonly Json: "json";
};
export type CreateDrainDeliveryEncoding = ClosedEnum<typeof CreateDrainDeliveryEncoding>;
export type Delivery2 = {
    type: string;
    endpoint: Endpoint1;
    encoding: CreateDrainDeliveryEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: string | undefined;
};
export declare const Compression: {
    readonly Gzip: "gzip";
    readonly None: "none";
};
export type Compression = ClosedEnum<typeof Compression>;
export declare const DeliveryEncoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type DeliveryEncoding = ClosedEnum<typeof DeliveryEncoding>;
export type Delivery1 = {
    type: string;
    endpoint: string;
    compression?: Compression | undefined;
    encoding: DeliveryEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: string | undefined;
};
export type Delivery = Delivery1 | Delivery2;
/**
 * Environment to apply sampling to
 */
export declare const Env: {
    readonly Production: "production";
    readonly Preview: "preview";
};
/**
 * Environment to apply sampling to
 */
export type Env = ClosedEnum<typeof Env>;
export type Sampling = {
    type: string;
    /**
     * Sampling rate from 0 to 1 (e.g., 0.1 for 10%)
     */
    rate: number;
    /**
     * Environment to apply sampling to
     */
    env?: Env | undefined;
    /**
     * Request path prefix to apply the sampling rule to
     */
    requestPath?: string | undefined;
};
export type Transforms = {
    id: string;
};
export type Source2 = {
    kind?: string | undefined;
};
export type One3 = {
    kind?: string | undefined;
};
export type One2 = {
    kind?: string | undefined;
    resourceId: string;
};
export type CreateDrain11 = {
    kind?: string | undefined;
    externalResourceId: string;
};
export type Source1 = CreateDrain11 | One2 | One3;
export type CreateDrainSource = CreateDrain11 | One2 | One3 | Source2;
export type CreateDrainRequestBody = {
    name: string;
    projects: CreateDrainProjects;
    projectIds?: Array<string> | undefined;
    filter?: Filter2 | string | undefined;
    schemas: {
        [k: string]: Schemas;
    };
    delivery?: Delivery1 | Delivery2 | undefined;
    sampling?: Array<Sampling> | undefined;
    transforms?: Array<Transforms> | undefined;
    source?: CreateDrain11 | One2 | One3 | Source2 | undefined;
};
export type CreateDrainRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateDrainRequestBody | undefined;
};
export declare const CreateDrainResponseBodyDrainsStatus: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
    readonly Errored: "errored";
};
export type CreateDrainResponseBodyDrainsStatus = ClosedEnum<typeof CreateDrainResponseBodyDrainsStatus>;
export declare const ResponseBodyDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly DisabledByAdmin: "disabled-by-admin";
};
export type ResponseBodyDisabledReason = ClosedEnum<typeof ResponseBodyDisabledReason>;
export type CreateDrainResponseBodyLog = {};
export type ResponseBodyTrace = {};
export type CreateDrainResponseBodyDrainsAnalytics = {};
export type CreateDrainResponseBodyDrainsSpeedInsights = {};
export type CreateDrainResponseBodySchemas = {
    log?: CreateDrainResponseBodyLog | undefined;
    trace?: ResponseBodyTrace | undefined;
    analytics?: CreateDrainResponseBodyDrainsAnalytics | undefined;
    speedInsights?: CreateDrainResponseBodyDrainsSpeedInsights | undefined;
};
export declare const CreateDrainDeliveryTarget: {
    readonly VercelOtelTracesDb: "vercel-otel-traces-db";
};
export type CreateDrainDeliveryTarget = ClosedEnum<typeof CreateDrainDeliveryTarget>;
export type CreateDrainDelivery4 = {
    type: "internal";
    target: CreateDrainDeliveryTarget;
};
export type CreateDrainDelivery3 = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
export type CreateDrainDeliveryEndpoint = {
    traces: string;
};
export declare const CreateDrainDeliveryDrainsResponse200ApplicationJSONEncoding: {
    readonly Json: "json";
    readonly Proto: "proto";
};
export type CreateDrainDeliveryDrainsResponse200ApplicationJSONEncoding = ClosedEnum<typeof CreateDrainDeliveryDrainsResponse200ApplicationJSONEncoding>;
export declare const CreateDrainSecretDrainsResponseKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type CreateDrainSecretDrainsResponseKind = ClosedEnum<typeof CreateDrainSecretDrainsResponseKind>;
export type CreateDrainSecretDrainsResponse2 = {
    kind: CreateDrainSecretDrainsResponseKind;
};
export type CreateDrainDeliveryDrainsSecret = CreateDrainSecretDrainsResponse2 | string;
export type CreateDrainDeliveryDrains2 = {
    type: "otlphttp";
    endpoint: CreateDrainDeliveryEndpoint;
    encoding: CreateDrainDeliveryDrainsResponse200ApplicationJSONEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: CreateDrainSecretDrainsResponse2 | string | undefined;
};
export declare const CreateDrainDeliveryDrainsResponse200Encoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type CreateDrainDeliveryDrainsResponse200Encoding = ClosedEnum<typeof CreateDrainDeliveryDrainsResponse200Encoding>;
export declare const CreateDrainDeliveryCompression: {
    readonly None: "none";
    readonly Gzip: "gzip";
};
export type CreateDrainDeliveryCompression = ClosedEnum<typeof CreateDrainDeliveryCompression>;
export declare const CreateDrainSecretDrainsKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type CreateDrainSecretDrainsKind = ClosedEnum<typeof CreateDrainSecretDrainsKind>;
export type CreateDrainSecretDrains2 = {
    kind: CreateDrainSecretDrainsKind;
};
export type CreateDrainDeliverySecret = CreateDrainSecretDrains2 | string;
export type CreateDrainDeliveryDrains1 = {
    type: "http";
    endpoint: string;
    encoding: CreateDrainDeliveryDrainsResponse200Encoding;
    compression?: CreateDrainDeliveryCompression | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: CreateDrainSecretDrains2 | string | undefined;
};
export type CreateDrainResponseBodyDelivery = CreateDrainDeliveryDrains1 | CreateDrainDeliveryDrains2 | CreateDrainDelivery3 | CreateDrainDelivery4;
export declare const CreateDrainResponseBodyDrainsType: {
    readonly HeadSampling: "head_sampling";
};
export type CreateDrainResponseBodyDrainsType = ClosedEnum<typeof CreateDrainResponseBodyDrainsType>;
export declare const CreateDrainResponseBodyEnv: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type CreateDrainResponseBodyEnv = ClosedEnum<typeof CreateDrainResponseBodyEnv>;
export type CreateDrainResponseBodySampling = {
    type: CreateDrainResponseBodyDrainsType;
    rate: number;
    env?: CreateDrainResponseBodyEnv | undefined;
    requestPath?: string | undefined;
};
export type CreateDrainSourceDrains2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type CreateDrainSourceDrains1 = {
    kind: "self-served";
};
export type CreateDrainResponseBodyDrainsSource = CreateDrainSourceDrains1 | CreateDrainSourceDrains2;
export type CreateDrainFilterDrainsResponse2 = {
    type: "odata";
    text: string;
};
export type CreateDrainFilterDrainsResponseProject = {
    ids?: Array<string> | undefined;
};
export declare const CreateDrainFilterDrainsSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type CreateDrainFilterDrainsSources = ClosedEnum<typeof CreateDrainFilterDrainsSources>;
export type CreateDrainFilterLog = {
    sources?: Array<CreateDrainFilterDrainsSources> | undefined;
    legacyExcludeCachedStaticAssetLogs?: boolean | undefined;
};
export declare const CreateDrainFilterDrainsEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type CreateDrainFilterDrainsEnvironments = ClosedEnum<typeof CreateDrainFilterDrainsEnvironments>;
export type CreateDrainFilterDrainsResponseDeployment = {
    environments?: Array<CreateDrainFilterDrainsEnvironments> | undefined;
};
export type CreateDrainFilterDrains1 = {
    type: "basic";
    project?: CreateDrainFilterDrainsResponseProject | undefined;
    log?: CreateDrainFilterLog | undefined;
    deployment?: CreateDrainFilterDrainsResponseDeployment | undefined;
};
export type CreateDrainFilterV2Filter = CreateDrainFilterDrains1 | CreateDrainFilterDrainsResponse2;
export type CreateDrainFilterV22 = {
    version: "v2";
    filter: CreateDrainFilterDrains1 | CreateDrainFilterDrainsResponse2;
};
export type CreateDrainFilterV21 = {
    version: "v1";
};
export type ResponseBodyFilterV2 = CreateDrainFilterV21 | CreateDrainFilterV22;
export type ProjectAccess2 = {
    access: "some";
    projectIds: Array<string>;
};
export type ProjectAccess1 = {
    access: "all";
};
export type ProjectAccess = ProjectAccess1 | ProjectAccess2;
export type CreateDrainResponseBody2 = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: CreateDrainResponseBodyDrainsStatus | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: ResponseBodyDisabledReason | undefined;
    schemas: CreateDrainResponseBodySchemas;
    delivery: CreateDrainDeliveryDrains1 | CreateDrainDeliveryDrains2 | CreateDrainDelivery3 | CreateDrainDelivery4;
    sampling?: Array<CreateDrainResponseBodySampling> | undefined;
    source: CreateDrainSourceDrains1 | CreateDrainSourceDrains2;
    filter?: string | undefined;
    filterV2?: CreateDrainFilterV21 | CreateDrainFilterV22 | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
    projectAccess?: ProjectAccess1 | ProjectAccess2 | undefined;
};
export declare const CreateDrainResponseBodyStatus: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
    readonly Errored: "errored";
};
export type CreateDrainResponseBodyStatus = ClosedEnum<typeof CreateDrainResponseBodyStatus>;
export declare const DisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly DisabledByAdmin: "disabled-by-admin";
};
export type DisabledReason = ClosedEnum<typeof DisabledReason>;
export type ResponseBodyLog = {};
export type Trace = {};
export type CreateDrainResponseBodyAnalytics = {};
export type CreateDrainResponseBodySpeedInsights = {};
export type ResponseBodySchemas = {
    log?: ResponseBodyLog | undefined;
    trace?: Trace | undefined;
    analytics?: CreateDrainResponseBodyAnalytics | undefined;
    speedInsights?: CreateDrainResponseBodySpeedInsights | undefined;
};
export declare const DeliveryTarget: {
    readonly VercelOtelTracesDb: "vercel-otel-traces-db";
};
export type DeliveryTarget = ClosedEnum<typeof DeliveryTarget>;
export type Delivery4 = {
    type: "internal";
    target: DeliveryTarget;
};
export type Delivery3 = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
export type CreateDrainDeliveryDrainsEndpoint = {
    traces: string;
};
export declare const CreateDrainDeliveryDrainsResponseEncoding: {
    readonly Json: "json";
    readonly Proto: "proto";
};
export type CreateDrainDeliveryDrainsResponseEncoding = ClosedEnum<typeof CreateDrainDeliveryDrainsResponseEncoding>;
export declare const CreateDrainSecretKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type CreateDrainSecretKind = ClosedEnum<typeof CreateDrainSecretKind>;
export type CreateDrainSecret2 = {
    kind: CreateDrainSecretKind;
};
export type DeliverySecret = CreateDrainSecret2 | string;
export type CreateDrainDelivery2 = {
    type: "otlphttp";
    endpoint: CreateDrainDeliveryDrainsEndpoint;
    encoding: CreateDrainDeliveryDrainsResponseEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: CreateDrainSecret2 | string | undefined;
};
export declare const CreateDrainDeliveryDrainsEncoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type CreateDrainDeliveryDrainsEncoding = ClosedEnum<typeof CreateDrainDeliveryDrainsEncoding>;
export declare const CreateDrainDeliveryDrainsCompression: {
    readonly None: "none";
    readonly Gzip: "gzip";
};
export type CreateDrainDeliveryDrainsCompression = ClosedEnum<typeof CreateDrainDeliveryDrainsCompression>;
export declare const SecretKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type SecretKind = ClosedEnum<typeof SecretKind>;
export type Secret2 = {
    kind: SecretKind;
};
export type Secret = Secret2 | string;
export type CreateDrainDelivery1 = {
    type: "http";
    endpoint: string;
    encoding: CreateDrainDeliveryDrainsEncoding;
    compression?: CreateDrainDeliveryDrainsCompression | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: Secret2 | string | undefined;
};
export type ResponseBodyDelivery = CreateDrainDelivery1 | CreateDrainDelivery2 | Delivery3 | Delivery4;
export declare const CreateDrainResponseBodyType: {
    readonly HeadSampling: "head_sampling";
};
export type CreateDrainResponseBodyType = ClosedEnum<typeof CreateDrainResponseBodyType>;
export declare const CreateDrainResponseBodyDrainsEnv: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type CreateDrainResponseBodyDrainsEnv = ClosedEnum<typeof CreateDrainResponseBodyDrainsEnv>;
export type ResponseBodySampling = {
    type: CreateDrainResponseBodyType;
    rate: number;
    env?: CreateDrainResponseBodyDrainsEnv | undefined;
    requestPath?: string | undefined;
};
export type CreateDrainSource2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type CreateDrainSource1 = {
    kind: "self-served";
};
export type CreateDrainResponseBodySource = CreateDrainSource1 | CreateDrainSource2;
export type CreateDrainFilterDrains2 = {
    type: "odata";
    text: string;
};
export type CreateDrainFilterDrainsProject = {
    ids?: Array<string> | undefined;
};
export declare const CreateDrainFilterSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type CreateDrainFilterSources = ClosedEnum<typeof CreateDrainFilterSources>;
export type CreateDrainFilterDrainsLog = {
    sources?: Array<CreateDrainFilterSources> | undefined;
    legacyExcludeCachedStaticAssetLogs?: boolean | undefined;
};
export declare const CreateDrainFilterEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type CreateDrainFilterEnvironments = ClosedEnum<typeof CreateDrainFilterEnvironments>;
export type CreateDrainFilterDrainsDeployment = {
    environments?: Array<CreateDrainFilterEnvironments> | undefined;
};
export type CreateDrainFilter1 = {
    type: "basic";
    project?: CreateDrainFilterDrainsProject | undefined;
    log?: CreateDrainFilterDrainsLog | undefined;
    deployment?: CreateDrainFilterDrainsDeployment | undefined;
};
export type FilterV2Filter = CreateDrainFilter1 | CreateDrainFilterDrains2;
export type FilterV22 = {
    version: "v2";
    filter: CreateDrainFilter1 | CreateDrainFilterDrains2;
};
export type FilterV21 = {
    version: "v1";
};
export type FilterV2 = FilterV21 | FilterV22;
export type CreateDrainResponseBody1 = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: CreateDrainResponseBodyStatus | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: DisabledReason | undefined;
    schemas: ResponseBodySchemas;
    delivery: CreateDrainDelivery1 | CreateDrainDelivery2 | Delivery3 | Delivery4;
    sampling?: Array<ResponseBodySampling> | undefined;
    source: CreateDrainSource1 | CreateDrainSource2;
    filter?: string | undefined;
    filterV2?: FilterV21 | FilterV22 | undefined;
};
export type CreateDrainResponseBody = CreateDrainResponseBody1 | CreateDrainResponseBody2;
/** @internal */
export declare const CreateDrainProjects$inboundSchema: z.ZodNativeEnum<typeof CreateDrainProjects>;
/** @internal */
export declare const CreateDrainProjects$outboundSchema: z.ZodNativeEnum<typeof CreateDrainProjects>;
/** @internal */
export declare const CreateDrainFilter2$inboundSchema: z.ZodType<CreateDrainFilter2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilter2$Outbound = {
    type: string;
    text: string;
};
/** @internal */
export declare const CreateDrainFilter2$outboundSchema: z.ZodType<CreateDrainFilter2$Outbound, z.ZodTypeDef, CreateDrainFilter2>;
export declare function createDrainFilter2ToJSON(createDrainFilter2: CreateDrainFilter2): string;
export declare function createDrainFilter2FromJSON(jsonString: string): SafeParseResult<CreateDrainFilter2, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterProject$inboundSchema: z.ZodType<CreateDrainFilterProject, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const CreateDrainFilterProject$outboundSchema: z.ZodType<CreateDrainFilterProject$Outbound, z.ZodTypeDef, CreateDrainFilterProject>;
export declare function createDrainFilterProjectToJSON(createDrainFilterProject: CreateDrainFilterProject): string;
export declare function createDrainFilterProjectFromJSON(jsonString: string): SafeParseResult<CreateDrainFilterProject, SDKValidationError>;
/** @internal */
export declare const FilterSources$inboundSchema: z.ZodNativeEnum<typeof FilterSources>;
/** @internal */
export declare const FilterSources$outboundSchema: z.ZodNativeEnum<typeof FilterSources>;
/** @internal */
export declare const Log$inboundSchema: z.ZodType<Log, z.ZodTypeDef, unknown>;
/** @internal */
export type Log$Outbound = {
    sources?: Array<string> | undefined;
};
/** @internal */
export declare const Log$outboundSchema: z.ZodType<Log$Outbound, z.ZodTypeDef, Log>;
export declare function logToJSON(log: Log): string;
export declare function logFromJSON(jsonString: string): SafeParseResult<Log, SDKValidationError>;
/** @internal */
export declare const FilterEnvironments$inboundSchema: z.ZodNativeEnum<typeof FilterEnvironments>;
/** @internal */
export declare const FilterEnvironments$outboundSchema: z.ZodNativeEnum<typeof FilterEnvironments>;
/** @internal */
export declare const CreateDrainFilterDeployment$inboundSchema: z.ZodType<CreateDrainFilterDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const CreateDrainFilterDeployment$outboundSchema: z.ZodType<CreateDrainFilterDeployment$Outbound, z.ZodTypeDef, CreateDrainFilterDeployment>;
export declare function createDrainFilterDeploymentToJSON(createDrainFilterDeployment: CreateDrainFilterDeployment): string;
export declare function createDrainFilterDeploymentFromJSON(jsonString: string): SafeParseResult<CreateDrainFilterDeployment, SDKValidationError>;
/** @internal */
export declare const Filter1$inboundSchema: z.ZodType<Filter1, z.ZodTypeDef, unknown>;
/** @internal */
export type Filter1$Outbound = {
    type: string;
    project?: CreateDrainFilterProject$Outbound | undefined;
    log?: Log$Outbound | undefined;
    deployment?: CreateDrainFilterDeployment$Outbound | undefined;
};
/** @internal */
export declare const Filter1$outboundSchema: z.ZodType<Filter1$Outbound, z.ZodTypeDef, Filter1>;
export declare function filter1ToJSON(filter1: Filter1): string;
export declare function filter1FromJSON(jsonString: string): SafeParseResult<Filter1, SDKValidationError>;
/** @internal */
export declare const FilterFilter$inboundSchema: z.ZodType<FilterFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterFilter$Outbound = CreateDrainFilter2$Outbound | Filter1$Outbound;
/** @internal */
export declare const FilterFilter$outboundSchema: z.ZodType<FilterFilter$Outbound, z.ZodTypeDef, FilterFilter>;
export declare function filterFilterToJSON(filterFilter: FilterFilter): string;
export declare function filterFilterFromJSON(jsonString: string): SafeParseResult<FilterFilter, SDKValidationError>;
/** @internal */
export declare const Filter2$inboundSchema: z.ZodType<Filter2, z.ZodTypeDef, unknown>;
/** @internal */
export type Filter2$Outbound = {
    version: string;
    filter: CreateDrainFilter2$Outbound | Filter1$Outbound;
};
/** @internal */
export declare const Filter2$outboundSchema: z.ZodType<Filter2$Outbound, z.ZodTypeDef, Filter2>;
export declare function filter2ToJSON(filter2: Filter2): string;
export declare function filter2FromJSON(jsonString: string): SafeParseResult<Filter2, SDKValidationError>;
/** @internal */
export declare const Filter$inboundSchema: z.ZodType<Filter, z.ZodTypeDef, unknown>;
/** @internal */
export type Filter$Outbound = Filter2$Outbound | string;
/** @internal */
export declare const Filter$outboundSchema: z.ZodType<Filter$Outbound, z.ZodTypeDef, Filter>;
export declare function filterToJSON(filter: Filter): string;
export declare function filterFromJSON(jsonString: string): SafeParseResult<Filter, SDKValidationError>;
/** @internal */
export declare const Schemas$inboundSchema: z.ZodType<Schemas, z.ZodTypeDef, unknown>;
/** @internal */
export type Schemas$Outbound = {
    version: string;
};
/** @internal */
export declare const Schemas$outboundSchema: z.ZodType<Schemas$Outbound, z.ZodTypeDef, Schemas>;
export declare function schemasToJSON(schemas: Schemas): string;
export declare function schemasFromJSON(jsonString: string): SafeParseResult<Schemas, SDKValidationError>;
/** @internal */
export declare const Endpoint1$inboundSchema: z.ZodType<Endpoint1, z.ZodTypeDef, unknown>;
/** @internal */
export type Endpoint1$Outbound = {
    traces: string;
};
/** @internal */
export declare const Endpoint1$outboundSchema: z.ZodType<Endpoint1$Outbound, z.ZodTypeDef, Endpoint1>;
export declare function endpoint1ToJSON(endpoint1: Endpoint1): string;
export declare function endpoint1FromJSON(jsonString: string): SafeParseResult<Endpoint1, SDKValidationError>;
/** @internal */
export declare const Endpoint$inboundSchema: z.ZodType<Endpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type Endpoint$Outbound = Endpoint1$Outbound;
/** @internal */
export declare const Endpoint$outboundSchema: z.ZodType<Endpoint$Outbound, z.ZodTypeDef, Endpoint>;
export declare function endpointToJSON(endpoint: Endpoint): string;
export declare function endpointFromJSON(jsonString: string): SafeParseResult<Endpoint, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliveryEncoding$inboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryEncoding>;
/** @internal */
export declare const CreateDrainDeliveryEncoding$outboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryEncoding>;
/** @internal */
export declare const Delivery2$inboundSchema: z.ZodType<Delivery2, z.ZodTypeDef, unknown>;
/** @internal */
export type Delivery2$Outbound = {
    type: string;
    endpoint: Endpoint1$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: string | undefined;
};
/** @internal */
export declare const Delivery2$outboundSchema: z.ZodType<Delivery2$Outbound, z.ZodTypeDef, Delivery2>;
export declare function delivery2ToJSON(delivery2: Delivery2): string;
export declare function delivery2FromJSON(jsonString: string): SafeParseResult<Delivery2, SDKValidationError>;
/** @internal */
export declare const Compression$inboundSchema: z.ZodNativeEnum<typeof Compression>;
/** @internal */
export declare const Compression$outboundSchema: z.ZodNativeEnum<typeof Compression>;
/** @internal */
export declare const DeliveryEncoding$inboundSchema: z.ZodNativeEnum<typeof DeliveryEncoding>;
/** @internal */
export declare const DeliveryEncoding$outboundSchema: z.ZodNativeEnum<typeof DeliveryEncoding>;
/** @internal */
export declare const Delivery1$inboundSchema: z.ZodType<Delivery1, z.ZodTypeDef, unknown>;
/** @internal */
export type Delivery1$Outbound = {
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
export declare const Delivery1$outboundSchema: z.ZodType<Delivery1$Outbound, z.ZodTypeDef, Delivery1>;
export declare function delivery1ToJSON(delivery1: Delivery1): string;
export declare function delivery1FromJSON(jsonString: string): SafeParseResult<Delivery1, SDKValidationError>;
/** @internal */
export declare const Delivery$inboundSchema: z.ZodType<Delivery, z.ZodTypeDef, unknown>;
/** @internal */
export type Delivery$Outbound = Delivery1$Outbound | Delivery2$Outbound;
/** @internal */
export declare const Delivery$outboundSchema: z.ZodType<Delivery$Outbound, z.ZodTypeDef, Delivery>;
export declare function deliveryToJSON(delivery: Delivery): string;
export declare function deliveryFromJSON(jsonString: string): SafeParseResult<Delivery, SDKValidationError>;
/** @internal */
export declare const Env$inboundSchema: z.ZodNativeEnum<typeof Env>;
/** @internal */
export declare const Env$outboundSchema: z.ZodNativeEnum<typeof Env>;
/** @internal */
export declare const Sampling$inboundSchema: z.ZodType<Sampling, z.ZodTypeDef, unknown>;
/** @internal */
export type Sampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const Sampling$outboundSchema: z.ZodType<Sampling$Outbound, z.ZodTypeDef, Sampling>;
export declare function samplingToJSON(sampling: Sampling): string;
export declare function samplingFromJSON(jsonString: string): SafeParseResult<Sampling, SDKValidationError>;
/** @internal */
export declare const Transforms$inboundSchema: z.ZodType<Transforms, z.ZodTypeDef, unknown>;
/** @internal */
export type Transforms$Outbound = {
    id: string;
};
/** @internal */
export declare const Transforms$outboundSchema: z.ZodType<Transforms$Outbound, z.ZodTypeDef, Transforms>;
export declare function transformsToJSON(transforms: Transforms): string;
export declare function transformsFromJSON(jsonString: string): SafeParseResult<Transforms, SDKValidationError>;
/** @internal */
export declare const Source2$inboundSchema: z.ZodType<Source2, z.ZodTypeDef, unknown>;
/** @internal */
export type Source2$Outbound = {
    kind: string;
};
/** @internal */
export declare const Source2$outboundSchema: z.ZodType<Source2$Outbound, z.ZodTypeDef, Source2>;
export declare function source2ToJSON(source2: Source2): string;
export declare function source2FromJSON(jsonString: string): SafeParseResult<Source2, SDKValidationError>;
/** @internal */
export declare const One3$inboundSchema: z.ZodType<One3, z.ZodTypeDef, unknown>;
/** @internal */
export type One3$Outbound = {
    kind: string;
};
/** @internal */
export declare const One3$outboundSchema: z.ZodType<One3$Outbound, z.ZodTypeDef, One3>;
export declare function one3ToJSON(one3: One3): string;
export declare function one3FromJSON(jsonString: string): SafeParseResult<One3, SDKValidationError>;
/** @internal */
export declare const One2$inboundSchema: z.ZodType<One2, z.ZodTypeDef, unknown>;
/** @internal */
export type One2$Outbound = {
    kind: string;
    resourceId: string;
};
/** @internal */
export declare const One2$outboundSchema: z.ZodType<One2$Outbound, z.ZodTypeDef, One2>;
export declare function one2ToJSON(one2: One2): string;
export declare function one2FromJSON(jsonString: string): SafeParseResult<One2, SDKValidationError>;
/** @internal */
export declare const CreateDrain11$inboundSchema: z.ZodType<CreateDrain11, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrain11$Outbound = {
    kind: string;
    externalResourceId: string;
};
/** @internal */
export declare const CreateDrain11$outboundSchema: z.ZodType<CreateDrain11$Outbound, z.ZodTypeDef, CreateDrain11>;
export declare function createDrain11ToJSON(createDrain11: CreateDrain11): string;
export declare function createDrain11FromJSON(jsonString: string): SafeParseResult<CreateDrain11, SDKValidationError>;
/** @internal */
export declare const Source1$inboundSchema: z.ZodType<Source1, z.ZodTypeDef, unknown>;
/** @internal */
export type Source1$Outbound = CreateDrain11$Outbound | One2$Outbound | One3$Outbound;
/** @internal */
export declare const Source1$outboundSchema: z.ZodType<Source1$Outbound, z.ZodTypeDef, Source1>;
export declare function source1ToJSON(source1: Source1): string;
export declare function source1FromJSON(jsonString: string): SafeParseResult<Source1, SDKValidationError>;
/** @internal */
export declare const CreateDrainSource$inboundSchema: z.ZodType<CreateDrainSource, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainSource$Outbound = CreateDrain11$Outbound | One2$Outbound | One3$Outbound | Source2$Outbound;
/** @internal */
export declare const CreateDrainSource$outboundSchema: z.ZodType<CreateDrainSource$Outbound, z.ZodTypeDef, CreateDrainSource>;
export declare function createDrainSourceToJSON(createDrainSource: CreateDrainSource): string;
export declare function createDrainSourceFromJSON(jsonString: string): SafeParseResult<CreateDrainSource, SDKValidationError>;
/** @internal */
export declare const CreateDrainRequestBody$inboundSchema: z.ZodType<CreateDrainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainRequestBody$Outbound = {
    name: string;
    projects: string;
    projectIds?: Array<string> | undefined;
    filter?: Filter2$Outbound | string | undefined;
    schemas: {
        [k: string]: Schemas$Outbound;
    };
    delivery?: Delivery1$Outbound | Delivery2$Outbound | undefined;
    sampling?: Array<Sampling$Outbound> | undefined;
    transforms?: Array<Transforms$Outbound> | undefined;
    source?: CreateDrain11$Outbound | One2$Outbound | One3$Outbound | Source2$Outbound | undefined;
};
/** @internal */
export declare const CreateDrainRequestBody$outboundSchema: z.ZodType<CreateDrainRequestBody$Outbound, z.ZodTypeDef, CreateDrainRequestBody>;
export declare function createDrainRequestBodyToJSON(createDrainRequestBody: CreateDrainRequestBody): string;
export declare function createDrainRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateDrainRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateDrainRequest$inboundSchema: z.ZodType<CreateDrainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateDrainRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CreateDrainRequest$outboundSchema: z.ZodType<CreateDrainRequest$Outbound, z.ZodTypeDef, CreateDrainRequest>;
export declare function createDrainRequestToJSON(createDrainRequest: CreateDrainRequest): string;
export declare function createDrainRequestFromJSON(jsonString: string): SafeParseResult<CreateDrainRequest, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodyDrainsStatus$inboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyDrainsStatus>;
/** @internal */
export declare const CreateDrainResponseBodyDrainsStatus$outboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyDrainsStatus>;
/** @internal */
export declare const ResponseBodyDisabledReason$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyDisabledReason>;
/** @internal */
export declare const ResponseBodyDisabledReason$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyDisabledReason>;
/** @internal */
export declare const CreateDrainResponseBodyLog$inboundSchema: z.ZodType<CreateDrainResponseBodyLog, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBodyLog$Outbound = {};
/** @internal */
export declare const CreateDrainResponseBodyLog$outboundSchema: z.ZodType<CreateDrainResponseBodyLog$Outbound, z.ZodTypeDef, CreateDrainResponseBodyLog>;
export declare function createDrainResponseBodyLogToJSON(createDrainResponseBodyLog: CreateDrainResponseBodyLog): string;
export declare function createDrainResponseBodyLogFromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBodyLog, SDKValidationError>;
/** @internal */
export declare const ResponseBodyTrace$inboundSchema: z.ZodType<ResponseBodyTrace, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyTrace$Outbound = {};
/** @internal */
export declare const ResponseBodyTrace$outboundSchema: z.ZodType<ResponseBodyTrace$Outbound, z.ZodTypeDef, ResponseBodyTrace>;
export declare function responseBodyTraceToJSON(responseBodyTrace: ResponseBodyTrace): string;
export declare function responseBodyTraceFromJSON(jsonString: string): SafeParseResult<ResponseBodyTrace, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodyDrainsAnalytics$inboundSchema: z.ZodType<CreateDrainResponseBodyDrainsAnalytics, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBodyDrainsAnalytics$Outbound = {};
/** @internal */
export declare const CreateDrainResponseBodyDrainsAnalytics$outboundSchema: z.ZodType<CreateDrainResponseBodyDrainsAnalytics$Outbound, z.ZodTypeDef, CreateDrainResponseBodyDrainsAnalytics>;
export declare function createDrainResponseBodyDrainsAnalyticsToJSON(createDrainResponseBodyDrainsAnalytics: CreateDrainResponseBodyDrainsAnalytics): string;
export declare function createDrainResponseBodyDrainsAnalyticsFromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBodyDrainsAnalytics, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodyDrainsSpeedInsights$inboundSchema: z.ZodType<CreateDrainResponseBodyDrainsSpeedInsights, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBodyDrainsSpeedInsights$Outbound = {};
/** @internal */
export declare const CreateDrainResponseBodyDrainsSpeedInsights$outboundSchema: z.ZodType<CreateDrainResponseBodyDrainsSpeedInsights$Outbound, z.ZodTypeDef, CreateDrainResponseBodyDrainsSpeedInsights>;
export declare function createDrainResponseBodyDrainsSpeedInsightsToJSON(createDrainResponseBodyDrainsSpeedInsights: CreateDrainResponseBodyDrainsSpeedInsights): string;
export declare function createDrainResponseBodyDrainsSpeedInsightsFromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBodyDrainsSpeedInsights, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodySchemas$inboundSchema: z.ZodType<CreateDrainResponseBodySchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBodySchemas$Outbound = {
    log?: CreateDrainResponseBodyLog$Outbound | undefined;
    trace?: ResponseBodyTrace$Outbound | undefined;
    analytics?: CreateDrainResponseBodyDrainsAnalytics$Outbound | undefined;
    speed_insights?: CreateDrainResponseBodyDrainsSpeedInsights$Outbound | undefined;
};
/** @internal */
export declare const CreateDrainResponseBodySchemas$outboundSchema: z.ZodType<CreateDrainResponseBodySchemas$Outbound, z.ZodTypeDef, CreateDrainResponseBodySchemas>;
export declare function createDrainResponseBodySchemasToJSON(createDrainResponseBodySchemas: CreateDrainResponseBodySchemas): string;
export declare function createDrainResponseBodySchemasFromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBodySchemas, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliveryTarget$inboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryTarget>;
/** @internal */
export declare const CreateDrainDeliveryTarget$outboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryTarget>;
/** @internal */
export declare const CreateDrainDelivery4$inboundSchema: z.ZodType<CreateDrainDelivery4, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainDelivery4$Outbound = {
    type: "internal";
    target: string;
};
/** @internal */
export declare const CreateDrainDelivery4$outboundSchema: z.ZodType<CreateDrainDelivery4$Outbound, z.ZodTypeDef, CreateDrainDelivery4>;
export declare function createDrainDelivery4ToJSON(createDrainDelivery4: CreateDrainDelivery4): string;
export declare function createDrainDelivery4FromJSON(jsonString: string): SafeParseResult<CreateDrainDelivery4, SDKValidationError>;
/** @internal */
export declare const CreateDrainDelivery3$inboundSchema: z.ZodType<CreateDrainDelivery3, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainDelivery3$Outbound = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
/** @internal */
export declare const CreateDrainDelivery3$outboundSchema: z.ZodType<CreateDrainDelivery3$Outbound, z.ZodTypeDef, CreateDrainDelivery3>;
export declare function createDrainDelivery3ToJSON(createDrainDelivery3: CreateDrainDelivery3): string;
export declare function createDrainDelivery3FromJSON(jsonString: string): SafeParseResult<CreateDrainDelivery3, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliveryEndpoint$inboundSchema: z.ZodType<CreateDrainDeliveryEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainDeliveryEndpoint$Outbound = {
    traces: string;
};
/** @internal */
export declare const CreateDrainDeliveryEndpoint$outboundSchema: z.ZodType<CreateDrainDeliveryEndpoint$Outbound, z.ZodTypeDef, CreateDrainDeliveryEndpoint>;
export declare function createDrainDeliveryEndpointToJSON(createDrainDeliveryEndpoint: CreateDrainDeliveryEndpoint): string;
export declare function createDrainDeliveryEndpointFromJSON(jsonString: string): SafeParseResult<CreateDrainDeliveryEndpoint, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliveryDrainsResponse200ApplicationJSONEncoding$inboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryDrainsResponse200ApplicationJSONEncoding>;
/** @internal */
export declare const CreateDrainDeliveryDrainsResponse200ApplicationJSONEncoding$outboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryDrainsResponse200ApplicationJSONEncoding>;
/** @internal */
export declare const CreateDrainSecretDrainsResponseKind$inboundSchema: z.ZodNativeEnum<typeof CreateDrainSecretDrainsResponseKind>;
/** @internal */
export declare const CreateDrainSecretDrainsResponseKind$outboundSchema: z.ZodNativeEnum<typeof CreateDrainSecretDrainsResponseKind>;
/** @internal */
export declare const CreateDrainSecretDrainsResponse2$inboundSchema: z.ZodType<CreateDrainSecretDrainsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainSecretDrainsResponse2$Outbound = {
    kind: string;
};
/** @internal */
export declare const CreateDrainSecretDrainsResponse2$outboundSchema: z.ZodType<CreateDrainSecretDrainsResponse2$Outbound, z.ZodTypeDef, CreateDrainSecretDrainsResponse2>;
export declare function createDrainSecretDrainsResponse2ToJSON(createDrainSecretDrainsResponse2: CreateDrainSecretDrainsResponse2): string;
export declare function createDrainSecretDrainsResponse2FromJSON(jsonString: string): SafeParseResult<CreateDrainSecretDrainsResponse2, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliveryDrainsSecret$inboundSchema: z.ZodType<CreateDrainDeliveryDrainsSecret, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainDeliveryDrainsSecret$Outbound = CreateDrainSecretDrainsResponse2$Outbound | string;
/** @internal */
export declare const CreateDrainDeliveryDrainsSecret$outboundSchema: z.ZodType<CreateDrainDeliveryDrainsSecret$Outbound, z.ZodTypeDef, CreateDrainDeliveryDrainsSecret>;
export declare function createDrainDeliveryDrainsSecretToJSON(createDrainDeliveryDrainsSecret: CreateDrainDeliveryDrainsSecret): string;
export declare function createDrainDeliveryDrainsSecretFromJSON(jsonString: string): SafeParseResult<CreateDrainDeliveryDrainsSecret, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliveryDrains2$inboundSchema: z.ZodType<CreateDrainDeliveryDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainDeliveryDrains2$Outbound = {
    type: "otlphttp";
    endpoint: CreateDrainDeliveryEndpoint$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: CreateDrainSecretDrainsResponse2$Outbound | string | undefined;
};
/** @internal */
export declare const CreateDrainDeliveryDrains2$outboundSchema: z.ZodType<CreateDrainDeliveryDrains2$Outbound, z.ZodTypeDef, CreateDrainDeliveryDrains2>;
export declare function createDrainDeliveryDrains2ToJSON(createDrainDeliveryDrains2: CreateDrainDeliveryDrains2): string;
export declare function createDrainDeliveryDrains2FromJSON(jsonString: string): SafeParseResult<CreateDrainDeliveryDrains2, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliveryDrainsResponse200Encoding$inboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryDrainsResponse200Encoding>;
/** @internal */
export declare const CreateDrainDeliveryDrainsResponse200Encoding$outboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryDrainsResponse200Encoding>;
/** @internal */
export declare const CreateDrainDeliveryCompression$inboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryCompression>;
/** @internal */
export declare const CreateDrainDeliveryCompression$outboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryCompression>;
/** @internal */
export declare const CreateDrainSecretDrainsKind$inboundSchema: z.ZodNativeEnum<typeof CreateDrainSecretDrainsKind>;
/** @internal */
export declare const CreateDrainSecretDrainsKind$outboundSchema: z.ZodNativeEnum<typeof CreateDrainSecretDrainsKind>;
/** @internal */
export declare const CreateDrainSecretDrains2$inboundSchema: z.ZodType<CreateDrainSecretDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainSecretDrains2$Outbound = {
    kind: string;
};
/** @internal */
export declare const CreateDrainSecretDrains2$outboundSchema: z.ZodType<CreateDrainSecretDrains2$Outbound, z.ZodTypeDef, CreateDrainSecretDrains2>;
export declare function createDrainSecretDrains2ToJSON(createDrainSecretDrains2: CreateDrainSecretDrains2): string;
export declare function createDrainSecretDrains2FromJSON(jsonString: string): SafeParseResult<CreateDrainSecretDrains2, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliverySecret$inboundSchema: z.ZodType<CreateDrainDeliverySecret, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainDeliverySecret$Outbound = CreateDrainSecretDrains2$Outbound | string;
/** @internal */
export declare const CreateDrainDeliverySecret$outboundSchema: z.ZodType<CreateDrainDeliverySecret$Outbound, z.ZodTypeDef, CreateDrainDeliverySecret>;
export declare function createDrainDeliverySecretToJSON(createDrainDeliverySecret: CreateDrainDeliverySecret): string;
export declare function createDrainDeliverySecretFromJSON(jsonString: string): SafeParseResult<CreateDrainDeliverySecret, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliveryDrains1$inboundSchema: z.ZodType<CreateDrainDeliveryDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainDeliveryDrains1$Outbound = {
    type: "http";
    endpoint: string;
    encoding: string;
    compression?: string | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: CreateDrainSecretDrains2$Outbound | string | undefined;
};
/** @internal */
export declare const CreateDrainDeliveryDrains1$outboundSchema: z.ZodType<CreateDrainDeliveryDrains1$Outbound, z.ZodTypeDef, CreateDrainDeliveryDrains1>;
export declare function createDrainDeliveryDrains1ToJSON(createDrainDeliveryDrains1: CreateDrainDeliveryDrains1): string;
export declare function createDrainDeliveryDrains1FromJSON(jsonString: string): SafeParseResult<CreateDrainDeliveryDrains1, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodyDelivery$inboundSchema: z.ZodType<CreateDrainResponseBodyDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBodyDelivery$Outbound = CreateDrainDeliveryDrains1$Outbound | CreateDrainDeliveryDrains2$Outbound | CreateDrainDelivery3$Outbound | CreateDrainDelivery4$Outbound;
/** @internal */
export declare const CreateDrainResponseBodyDelivery$outboundSchema: z.ZodType<CreateDrainResponseBodyDelivery$Outbound, z.ZodTypeDef, CreateDrainResponseBodyDelivery>;
export declare function createDrainResponseBodyDeliveryToJSON(createDrainResponseBodyDelivery: CreateDrainResponseBodyDelivery): string;
export declare function createDrainResponseBodyDeliveryFromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBodyDelivery, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodyDrainsType$inboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyDrainsType>;
/** @internal */
export declare const CreateDrainResponseBodyDrainsType$outboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyDrainsType>;
/** @internal */
export declare const CreateDrainResponseBodyEnv$inboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyEnv>;
/** @internal */
export declare const CreateDrainResponseBodyEnv$outboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyEnv>;
/** @internal */
export declare const CreateDrainResponseBodySampling$inboundSchema: z.ZodType<CreateDrainResponseBodySampling, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBodySampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const CreateDrainResponseBodySampling$outboundSchema: z.ZodType<CreateDrainResponseBodySampling$Outbound, z.ZodTypeDef, CreateDrainResponseBodySampling>;
export declare function createDrainResponseBodySamplingToJSON(createDrainResponseBodySampling: CreateDrainResponseBodySampling): string;
export declare function createDrainResponseBodySamplingFromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBodySampling, SDKValidationError>;
/** @internal */
export declare const CreateDrainSourceDrains2$inboundSchema: z.ZodType<CreateDrainSourceDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainSourceDrains2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const CreateDrainSourceDrains2$outboundSchema: z.ZodType<CreateDrainSourceDrains2$Outbound, z.ZodTypeDef, CreateDrainSourceDrains2>;
export declare function createDrainSourceDrains2ToJSON(createDrainSourceDrains2: CreateDrainSourceDrains2): string;
export declare function createDrainSourceDrains2FromJSON(jsonString: string): SafeParseResult<CreateDrainSourceDrains2, SDKValidationError>;
/** @internal */
export declare const CreateDrainSourceDrains1$inboundSchema: z.ZodType<CreateDrainSourceDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainSourceDrains1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const CreateDrainSourceDrains1$outboundSchema: z.ZodType<CreateDrainSourceDrains1$Outbound, z.ZodTypeDef, CreateDrainSourceDrains1>;
export declare function createDrainSourceDrains1ToJSON(createDrainSourceDrains1: CreateDrainSourceDrains1): string;
export declare function createDrainSourceDrains1FromJSON(jsonString: string): SafeParseResult<CreateDrainSourceDrains1, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodyDrainsSource$inboundSchema: z.ZodType<CreateDrainResponseBodyDrainsSource, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBodyDrainsSource$Outbound = CreateDrainSourceDrains1$Outbound | CreateDrainSourceDrains2$Outbound;
/** @internal */
export declare const CreateDrainResponseBodyDrainsSource$outboundSchema: z.ZodType<CreateDrainResponseBodyDrainsSource$Outbound, z.ZodTypeDef, CreateDrainResponseBodyDrainsSource>;
export declare function createDrainResponseBodyDrainsSourceToJSON(createDrainResponseBodyDrainsSource: CreateDrainResponseBodyDrainsSource): string;
export declare function createDrainResponseBodyDrainsSourceFromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBodyDrainsSource, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterDrainsResponse2$inboundSchema: z.ZodType<CreateDrainFilterDrainsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterDrainsResponse2$Outbound = {
    type: "odata";
    text: string;
};
/** @internal */
export declare const CreateDrainFilterDrainsResponse2$outboundSchema: z.ZodType<CreateDrainFilterDrainsResponse2$Outbound, z.ZodTypeDef, CreateDrainFilterDrainsResponse2>;
export declare function createDrainFilterDrainsResponse2ToJSON(createDrainFilterDrainsResponse2: CreateDrainFilterDrainsResponse2): string;
export declare function createDrainFilterDrainsResponse2FromJSON(jsonString: string): SafeParseResult<CreateDrainFilterDrainsResponse2, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterDrainsResponseProject$inboundSchema: z.ZodType<CreateDrainFilterDrainsResponseProject, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterDrainsResponseProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const CreateDrainFilterDrainsResponseProject$outboundSchema: z.ZodType<CreateDrainFilterDrainsResponseProject$Outbound, z.ZodTypeDef, CreateDrainFilterDrainsResponseProject>;
export declare function createDrainFilterDrainsResponseProjectToJSON(createDrainFilterDrainsResponseProject: CreateDrainFilterDrainsResponseProject): string;
export declare function createDrainFilterDrainsResponseProjectFromJSON(jsonString: string): SafeParseResult<CreateDrainFilterDrainsResponseProject, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterDrainsSources$inboundSchema: z.ZodNativeEnum<typeof CreateDrainFilterDrainsSources>;
/** @internal */
export declare const CreateDrainFilterDrainsSources$outboundSchema: z.ZodNativeEnum<typeof CreateDrainFilterDrainsSources>;
/** @internal */
export declare const CreateDrainFilterLog$inboundSchema: z.ZodType<CreateDrainFilterLog, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterLog$Outbound = {
    sources?: Array<string> | undefined;
    legacy_excludeCachedStaticAssetLogs?: boolean | undefined;
};
/** @internal */
export declare const CreateDrainFilterLog$outboundSchema: z.ZodType<CreateDrainFilterLog$Outbound, z.ZodTypeDef, CreateDrainFilterLog>;
export declare function createDrainFilterLogToJSON(createDrainFilterLog: CreateDrainFilterLog): string;
export declare function createDrainFilterLogFromJSON(jsonString: string): SafeParseResult<CreateDrainFilterLog, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterDrainsEnvironments$inboundSchema: z.ZodNativeEnum<typeof CreateDrainFilterDrainsEnvironments>;
/** @internal */
export declare const CreateDrainFilterDrainsEnvironments$outboundSchema: z.ZodNativeEnum<typeof CreateDrainFilterDrainsEnvironments>;
/** @internal */
export declare const CreateDrainFilterDrainsResponseDeployment$inboundSchema: z.ZodType<CreateDrainFilterDrainsResponseDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterDrainsResponseDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const CreateDrainFilterDrainsResponseDeployment$outboundSchema: z.ZodType<CreateDrainFilterDrainsResponseDeployment$Outbound, z.ZodTypeDef, CreateDrainFilterDrainsResponseDeployment>;
export declare function createDrainFilterDrainsResponseDeploymentToJSON(createDrainFilterDrainsResponseDeployment: CreateDrainFilterDrainsResponseDeployment): string;
export declare function createDrainFilterDrainsResponseDeploymentFromJSON(jsonString: string): SafeParseResult<CreateDrainFilterDrainsResponseDeployment, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterDrains1$inboundSchema: z.ZodType<CreateDrainFilterDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterDrains1$Outbound = {
    type: "basic";
    project?: CreateDrainFilterDrainsResponseProject$Outbound | undefined;
    log?: CreateDrainFilterLog$Outbound | undefined;
    deployment?: CreateDrainFilterDrainsResponseDeployment$Outbound | undefined;
};
/** @internal */
export declare const CreateDrainFilterDrains1$outboundSchema: z.ZodType<CreateDrainFilterDrains1$Outbound, z.ZodTypeDef, CreateDrainFilterDrains1>;
export declare function createDrainFilterDrains1ToJSON(createDrainFilterDrains1: CreateDrainFilterDrains1): string;
export declare function createDrainFilterDrains1FromJSON(jsonString: string): SafeParseResult<CreateDrainFilterDrains1, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterV2Filter$inboundSchema: z.ZodType<CreateDrainFilterV2Filter, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterV2Filter$Outbound = CreateDrainFilterDrains1$Outbound | CreateDrainFilterDrainsResponse2$Outbound;
/** @internal */
export declare const CreateDrainFilterV2Filter$outboundSchema: z.ZodType<CreateDrainFilterV2Filter$Outbound, z.ZodTypeDef, CreateDrainFilterV2Filter>;
export declare function createDrainFilterV2FilterToJSON(createDrainFilterV2Filter: CreateDrainFilterV2Filter): string;
export declare function createDrainFilterV2FilterFromJSON(jsonString: string): SafeParseResult<CreateDrainFilterV2Filter, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterV22$inboundSchema: z.ZodType<CreateDrainFilterV22, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterV22$Outbound = {
    version: "v2";
    filter: CreateDrainFilterDrains1$Outbound | CreateDrainFilterDrainsResponse2$Outbound;
};
/** @internal */
export declare const CreateDrainFilterV22$outboundSchema: z.ZodType<CreateDrainFilterV22$Outbound, z.ZodTypeDef, CreateDrainFilterV22>;
export declare function createDrainFilterV22ToJSON(createDrainFilterV22: CreateDrainFilterV22): string;
export declare function createDrainFilterV22FromJSON(jsonString: string): SafeParseResult<CreateDrainFilterV22, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterV21$inboundSchema: z.ZodType<CreateDrainFilterV21, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterV21$Outbound = {
    version: "v1";
};
/** @internal */
export declare const CreateDrainFilterV21$outboundSchema: z.ZodType<CreateDrainFilterV21$Outbound, z.ZodTypeDef, CreateDrainFilterV21>;
export declare function createDrainFilterV21ToJSON(createDrainFilterV21: CreateDrainFilterV21): string;
export declare function createDrainFilterV21FromJSON(jsonString: string): SafeParseResult<CreateDrainFilterV21, SDKValidationError>;
/** @internal */
export declare const ResponseBodyFilterV2$inboundSchema: z.ZodType<ResponseBodyFilterV2, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyFilterV2$Outbound = CreateDrainFilterV21$Outbound | CreateDrainFilterV22$Outbound;
/** @internal */
export declare const ResponseBodyFilterV2$outboundSchema: z.ZodType<ResponseBodyFilterV2$Outbound, z.ZodTypeDef, ResponseBodyFilterV2>;
export declare function responseBodyFilterV2ToJSON(responseBodyFilterV2: ResponseBodyFilterV2): string;
export declare function responseBodyFilterV2FromJSON(jsonString: string): SafeParseResult<ResponseBodyFilterV2, SDKValidationError>;
/** @internal */
export declare const ProjectAccess2$inboundSchema: z.ZodType<ProjectAccess2, z.ZodTypeDef, unknown>;
/** @internal */
export type ProjectAccess2$Outbound = {
    access: "some";
    projectIds: Array<string>;
};
/** @internal */
export declare const ProjectAccess2$outboundSchema: z.ZodType<ProjectAccess2$Outbound, z.ZodTypeDef, ProjectAccess2>;
export declare function projectAccess2ToJSON(projectAccess2: ProjectAccess2): string;
export declare function projectAccess2FromJSON(jsonString: string): SafeParseResult<ProjectAccess2, SDKValidationError>;
/** @internal */
export declare const ProjectAccess1$inboundSchema: z.ZodType<ProjectAccess1, z.ZodTypeDef, unknown>;
/** @internal */
export type ProjectAccess1$Outbound = {
    access: "all";
};
/** @internal */
export declare const ProjectAccess1$outboundSchema: z.ZodType<ProjectAccess1$Outbound, z.ZodTypeDef, ProjectAccess1>;
export declare function projectAccess1ToJSON(projectAccess1: ProjectAccess1): string;
export declare function projectAccess1FromJSON(jsonString: string): SafeParseResult<ProjectAccess1, SDKValidationError>;
/** @internal */
export declare const ProjectAccess$inboundSchema: z.ZodType<ProjectAccess, z.ZodTypeDef, unknown>;
/** @internal */
export type ProjectAccess$Outbound = ProjectAccess1$Outbound | ProjectAccess2$Outbound;
/** @internal */
export declare const ProjectAccess$outboundSchema: z.ZodType<ProjectAccess$Outbound, z.ZodTypeDef, ProjectAccess>;
export declare function projectAccessToJSON(projectAccess: ProjectAccess): string;
export declare function projectAccessFromJSON(jsonString: string): SafeParseResult<ProjectAccess, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBody2$inboundSchema: z.ZodType<CreateDrainResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBody2$Outbound = {
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
    schemas: CreateDrainResponseBodySchemas$Outbound;
    delivery: CreateDrainDeliveryDrains1$Outbound | CreateDrainDeliveryDrains2$Outbound | CreateDrainDelivery3$Outbound | CreateDrainDelivery4$Outbound;
    sampling?: Array<CreateDrainResponseBodySampling$Outbound> | undefined;
    source: CreateDrainSourceDrains1$Outbound | CreateDrainSourceDrains2$Outbound;
    filter?: string | undefined;
    filterV2?: CreateDrainFilterV21$Outbound | CreateDrainFilterV22$Outbound | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
    projectAccess?: ProjectAccess1$Outbound | ProjectAccess2$Outbound | undefined;
};
/** @internal */
export declare const CreateDrainResponseBody2$outboundSchema: z.ZodType<CreateDrainResponseBody2$Outbound, z.ZodTypeDef, CreateDrainResponseBody2>;
export declare function createDrainResponseBody2ToJSON(createDrainResponseBody2: CreateDrainResponseBody2): string;
export declare function createDrainResponseBody2FromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBody2, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodyStatus$inboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyStatus>;
/** @internal */
export declare const CreateDrainResponseBodyStatus$outboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyStatus>;
/** @internal */
export declare const DisabledReason$inboundSchema: z.ZodNativeEnum<typeof DisabledReason>;
/** @internal */
export declare const DisabledReason$outboundSchema: z.ZodNativeEnum<typeof DisabledReason>;
/** @internal */
export declare const ResponseBodyLog$inboundSchema: z.ZodType<ResponseBodyLog, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyLog$Outbound = {};
/** @internal */
export declare const ResponseBodyLog$outboundSchema: z.ZodType<ResponseBodyLog$Outbound, z.ZodTypeDef, ResponseBodyLog>;
export declare function responseBodyLogToJSON(responseBodyLog: ResponseBodyLog): string;
export declare function responseBodyLogFromJSON(jsonString: string): SafeParseResult<ResponseBodyLog, SDKValidationError>;
/** @internal */
export declare const Trace$inboundSchema: z.ZodType<Trace, z.ZodTypeDef, unknown>;
/** @internal */
export type Trace$Outbound = {};
/** @internal */
export declare const Trace$outboundSchema: z.ZodType<Trace$Outbound, z.ZodTypeDef, Trace>;
export declare function traceToJSON(trace: Trace): string;
export declare function traceFromJSON(jsonString: string): SafeParseResult<Trace, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodyAnalytics$inboundSchema: z.ZodType<CreateDrainResponseBodyAnalytics, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBodyAnalytics$Outbound = {};
/** @internal */
export declare const CreateDrainResponseBodyAnalytics$outboundSchema: z.ZodType<CreateDrainResponseBodyAnalytics$Outbound, z.ZodTypeDef, CreateDrainResponseBodyAnalytics>;
export declare function createDrainResponseBodyAnalyticsToJSON(createDrainResponseBodyAnalytics: CreateDrainResponseBodyAnalytics): string;
export declare function createDrainResponseBodyAnalyticsFromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBodyAnalytics, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodySpeedInsights$inboundSchema: z.ZodType<CreateDrainResponseBodySpeedInsights, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBodySpeedInsights$Outbound = {};
/** @internal */
export declare const CreateDrainResponseBodySpeedInsights$outboundSchema: z.ZodType<CreateDrainResponseBodySpeedInsights$Outbound, z.ZodTypeDef, CreateDrainResponseBodySpeedInsights>;
export declare function createDrainResponseBodySpeedInsightsToJSON(createDrainResponseBodySpeedInsights: CreateDrainResponseBodySpeedInsights): string;
export declare function createDrainResponseBodySpeedInsightsFromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBodySpeedInsights, SDKValidationError>;
/** @internal */
export declare const ResponseBodySchemas$inboundSchema: z.ZodType<ResponseBodySchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodySchemas$Outbound = {
    log?: ResponseBodyLog$Outbound | undefined;
    trace?: Trace$Outbound | undefined;
    analytics?: CreateDrainResponseBodyAnalytics$Outbound | undefined;
    speed_insights?: CreateDrainResponseBodySpeedInsights$Outbound | undefined;
};
/** @internal */
export declare const ResponseBodySchemas$outboundSchema: z.ZodType<ResponseBodySchemas$Outbound, z.ZodTypeDef, ResponseBodySchemas>;
export declare function responseBodySchemasToJSON(responseBodySchemas: ResponseBodySchemas): string;
export declare function responseBodySchemasFromJSON(jsonString: string): SafeParseResult<ResponseBodySchemas, SDKValidationError>;
/** @internal */
export declare const DeliveryTarget$inboundSchema: z.ZodNativeEnum<typeof DeliveryTarget>;
/** @internal */
export declare const DeliveryTarget$outboundSchema: z.ZodNativeEnum<typeof DeliveryTarget>;
/** @internal */
export declare const Delivery4$inboundSchema: z.ZodType<Delivery4, z.ZodTypeDef, unknown>;
/** @internal */
export type Delivery4$Outbound = {
    type: "internal";
    target: string;
};
/** @internal */
export declare const Delivery4$outboundSchema: z.ZodType<Delivery4$Outbound, z.ZodTypeDef, Delivery4>;
export declare function delivery4ToJSON(delivery4: Delivery4): string;
export declare function delivery4FromJSON(jsonString: string): SafeParseResult<Delivery4, SDKValidationError>;
/** @internal */
export declare const Delivery3$inboundSchema: z.ZodType<Delivery3, z.ZodTypeDef, unknown>;
/** @internal */
export type Delivery3$Outbound = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
/** @internal */
export declare const Delivery3$outboundSchema: z.ZodType<Delivery3$Outbound, z.ZodTypeDef, Delivery3>;
export declare function delivery3ToJSON(delivery3: Delivery3): string;
export declare function delivery3FromJSON(jsonString: string): SafeParseResult<Delivery3, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliveryDrainsEndpoint$inboundSchema: z.ZodType<CreateDrainDeliveryDrainsEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainDeliveryDrainsEndpoint$Outbound = {
    traces: string;
};
/** @internal */
export declare const CreateDrainDeliveryDrainsEndpoint$outboundSchema: z.ZodType<CreateDrainDeliveryDrainsEndpoint$Outbound, z.ZodTypeDef, CreateDrainDeliveryDrainsEndpoint>;
export declare function createDrainDeliveryDrainsEndpointToJSON(createDrainDeliveryDrainsEndpoint: CreateDrainDeliveryDrainsEndpoint): string;
export declare function createDrainDeliveryDrainsEndpointFromJSON(jsonString: string): SafeParseResult<CreateDrainDeliveryDrainsEndpoint, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliveryDrainsResponseEncoding$inboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryDrainsResponseEncoding>;
/** @internal */
export declare const CreateDrainDeliveryDrainsResponseEncoding$outboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryDrainsResponseEncoding>;
/** @internal */
export declare const CreateDrainSecretKind$inboundSchema: z.ZodNativeEnum<typeof CreateDrainSecretKind>;
/** @internal */
export declare const CreateDrainSecretKind$outboundSchema: z.ZodNativeEnum<typeof CreateDrainSecretKind>;
/** @internal */
export declare const CreateDrainSecret2$inboundSchema: z.ZodType<CreateDrainSecret2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainSecret2$Outbound = {
    kind: string;
};
/** @internal */
export declare const CreateDrainSecret2$outboundSchema: z.ZodType<CreateDrainSecret2$Outbound, z.ZodTypeDef, CreateDrainSecret2>;
export declare function createDrainSecret2ToJSON(createDrainSecret2: CreateDrainSecret2): string;
export declare function createDrainSecret2FromJSON(jsonString: string): SafeParseResult<CreateDrainSecret2, SDKValidationError>;
/** @internal */
export declare const DeliverySecret$inboundSchema: z.ZodType<DeliverySecret, z.ZodTypeDef, unknown>;
/** @internal */
export type DeliverySecret$Outbound = CreateDrainSecret2$Outbound | string;
/** @internal */
export declare const DeliverySecret$outboundSchema: z.ZodType<DeliverySecret$Outbound, z.ZodTypeDef, DeliverySecret>;
export declare function deliverySecretToJSON(deliverySecret: DeliverySecret): string;
export declare function deliverySecretFromJSON(jsonString: string): SafeParseResult<DeliverySecret, SDKValidationError>;
/** @internal */
export declare const CreateDrainDelivery2$inboundSchema: z.ZodType<CreateDrainDelivery2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainDelivery2$Outbound = {
    type: "otlphttp";
    endpoint: CreateDrainDeliveryDrainsEndpoint$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: CreateDrainSecret2$Outbound | string | undefined;
};
/** @internal */
export declare const CreateDrainDelivery2$outboundSchema: z.ZodType<CreateDrainDelivery2$Outbound, z.ZodTypeDef, CreateDrainDelivery2>;
export declare function createDrainDelivery2ToJSON(createDrainDelivery2: CreateDrainDelivery2): string;
export declare function createDrainDelivery2FromJSON(jsonString: string): SafeParseResult<CreateDrainDelivery2, SDKValidationError>;
/** @internal */
export declare const CreateDrainDeliveryDrainsEncoding$inboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryDrainsEncoding>;
/** @internal */
export declare const CreateDrainDeliveryDrainsEncoding$outboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryDrainsEncoding>;
/** @internal */
export declare const CreateDrainDeliveryDrainsCompression$inboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryDrainsCompression>;
/** @internal */
export declare const CreateDrainDeliveryDrainsCompression$outboundSchema: z.ZodNativeEnum<typeof CreateDrainDeliveryDrainsCompression>;
/** @internal */
export declare const SecretKind$inboundSchema: z.ZodNativeEnum<typeof SecretKind>;
/** @internal */
export declare const SecretKind$outboundSchema: z.ZodNativeEnum<typeof SecretKind>;
/** @internal */
export declare const Secret2$inboundSchema: z.ZodType<Secret2, z.ZodTypeDef, unknown>;
/** @internal */
export type Secret2$Outbound = {
    kind: string;
};
/** @internal */
export declare const Secret2$outboundSchema: z.ZodType<Secret2$Outbound, z.ZodTypeDef, Secret2>;
export declare function secret2ToJSON(secret2: Secret2): string;
export declare function secret2FromJSON(jsonString: string): SafeParseResult<Secret2, SDKValidationError>;
/** @internal */
export declare const Secret$inboundSchema: z.ZodType<Secret, z.ZodTypeDef, unknown>;
/** @internal */
export type Secret$Outbound = Secret2$Outbound | string;
/** @internal */
export declare const Secret$outboundSchema: z.ZodType<Secret$Outbound, z.ZodTypeDef, Secret>;
export declare function secretToJSON(secret: Secret): string;
export declare function secretFromJSON(jsonString: string): SafeParseResult<Secret, SDKValidationError>;
/** @internal */
export declare const CreateDrainDelivery1$inboundSchema: z.ZodType<CreateDrainDelivery1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainDelivery1$Outbound = {
    type: "http";
    endpoint: string;
    encoding: string;
    compression?: string | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: Secret2$Outbound | string | undefined;
};
/** @internal */
export declare const CreateDrainDelivery1$outboundSchema: z.ZodType<CreateDrainDelivery1$Outbound, z.ZodTypeDef, CreateDrainDelivery1>;
export declare function createDrainDelivery1ToJSON(createDrainDelivery1: CreateDrainDelivery1): string;
export declare function createDrainDelivery1FromJSON(jsonString: string): SafeParseResult<CreateDrainDelivery1, SDKValidationError>;
/** @internal */
export declare const ResponseBodyDelivery$inboundSchema: z.ZodType<ResponseBodyDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyDelivery$Outbound = CreateDrainDelivery1$Outbound | CreateDrainDelivery2$Outbound | Delivery3$Outbound | Delivery4$Outbound;
/** @internal */
export declare const ResponseBodyDelivery$outboundSchema: z.ZodType<ResponseBodyDelivery$Outbound, z.ZodTypeDef, ResponseBodyDelivery>;
export declare function responseBodyDeliveryToJSON(responseBodyDelivery: ResponseBodyDelivery): string;
export declare function responseBodyDeliveryFromJSON(jsonString: string): SafeParseResult<ResponseBodyDelivery, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyType>;
/** @internal */
export declare const CreateDrainResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyType>;
/** @internal */
export declare const CreateDrainResponseBodyDrainsEnv$inboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyDrainsEnv>;
/** @internal */
export declare const CreateDrainResponseBodyDrainsEnv$outboundSchema: z.ZodNativeEnum<typeof CreateDrainResponseBodyDrainsEnv>;
/** @internal */
export declare const ResponseBodySampling$inboundSchema: z.ZodType<ResponseBodySampling, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodySampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const ResponseBodySampling$outboundSchema: z.ZodType<ResponseBodySampling$Outbound, z.ZodTypeDef, ResponseBodySampling>;
export declare function responseBodySamplingToJSON(responseBodySampling: ResponseBodySampling): string;
export declare function responseBodySamplingFromJSON(jsonString: string): SafeParseResult<ResponseBodySampling, SDKValidationError>;
/** @internal */
export declare const CreateDrainSource2$inboundSchema: z.ZodType<CreateDrainSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainSource2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const CreateDrainSource2$outboundSchema: z.ZodType<CreateDrainSource2$Outbound, z.ZodTypeDef, CreateDrainSource2>;
export declare function createDrainSource2ToJSON(createDrainSource2: CreateDrainSource2): string;
export declare function createDrainSource2FromJSON(jsonString: string): SafeParseResult<CreateDrainSource2, SDKValidationError>;
/** @internal */
export declare const CreateDrainSource1$inboundSchema: z.ZodType<CreateDrainSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainSource1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const CreateDrainSource1$outboundSchema: z.ZodType<CreateDrainSource1$Outbound, z.ZodTypeDef, CreateDrainSource1>;
export declare function createDrainSource1ToJSON(createDrainSource1: CreateDrainSource1): string;
export declare function createDrainSource1FromJSON(jsonString: string): SafeParseResult<CreateDrainSource1, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBodySource$inboundSchema: z.ZodType<CreateDrainResponseBodySource, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBodySource$Outbound = CreateDrainSource1$Outbound | CreateDrainSource2$Outbound;
/** @internal */
export declare const CreateDrainResponseBodySource$outboundSchema: z.ZodType<CreateDrainResponseBodySource$Outbound, z.ZodTypeDef, CreateDrainResponseBodySource>;
export declare function createDrainResponseBodySourceToJSON(createDrainResponseBodySource: CreateDrainResponseBodySource): string;
export declare function createDrainResponseBodySourceFromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBodySource, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterDrains2$inboundSchema: z.ZodType<CreateDrainFilterDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterDrains2$Outbound = {
    type: "odata";
    text: string;
};
/** @internal */
export declare const CreateDrainFilterDrains2$outboundSchema: z.ZodType<CreateDrainFilterDrains2$Outbound, z.ZodTypeDef, CreateDrainFilterDrains2>;
export declare function createDrainFilterDrains2ToJSON(createDrainFilterDrains2: CreateDrainFilterDrains2): string;
export declare function createDrainFilterDrains2FromJSON(jsonString: string): SafeParseResult<CreateDrainFilterDrains2, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterDrainsProject$inboundSchema: z.ZodType<CreateDrainFilterDrainsProject, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterDrainsProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const CreateDrainFilterDrainsProject$outboundSchema: z.ZodType<CreateDrainFilterDrainsProject$Outbound, z.ZodTypeDef, CreateDrainFilterDrainsProject>;
export declare function createDrainFilterDrainsProjectToJSON(createDrainFilterDrainsProject: CreateDrainFilterDrainsProject): string;
export declare function createDrainFilterDrainsProjectFromJSON(jsonString: string): SafeParseResult<CreateDrainFilterDrainsProject, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterSources$inboundSchema: z.ZodNativeEnum<typeof CreateDrainFilterSources>;
/** @internal */
export declare const CreateDrainFilterSources$outboundSchema: z.ZodNativeEnum<typeof CreateDrainFilterSources>;
/** @internal */
export declare const CreateDrainFilterDrainsLog$inboundSchema: z.ZodType<CreateDrainFilterDrainsLog, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterDrainsLog$Outbound = {
    sources?: Array<string> | undefined;
    legacy_excludeCachedStaticAssetLogs?: boolean | undefined;
};
/** @internal */
export declare const CreateDrainFilterDrainsLog$outboundSchema: z.ZodType<CreateDrainFilterDrainsLog$Outbound, z.ZodTypeDef, CreateDrainFilterDrainsLog>;
export declare function createDrainFilterDrainsLogToJSON(createDrainFilterDrainsLog: CreateDrainFilterDrainsLog): string;
export declare function createDrainFilterDrainsLogFromJSON(jsonString: string): SafeParseResult<CreateDrainFilterDrainsLog, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilterEnvironments$inboundSchema: z.ZodNativeEnum<typeof CreateDrainFilterEnvironments>;
/** @internal */
export declare const CreateDrainFilterEnvironments$outboundSchema: z.ZodNativeEnum<typeof CreateDrainFilterEnvironments>;
/** @internal */
export declare const CreateDrainFilterDrainsDeployment$inboundSchema: z.ZodType<CreateDrainFilterDrainsDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilterDrainsDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const CreateDrainFilterDrainsDeployment$outboundSchema: z.ZodType<CreateDrainFilterDrainsDeployment$Outbound, z.ZodTypeDef, CreateDrainFilterDrainsDeployment>;
export declare function createDrainFilterDrainsDeploymentToJSON(createDrainFilterDrainsDeployment: CreateDrainFilterDrainsDeployment): string;
export declare function createDrainFilterDrainsDeploymentFromJSON(jsonString: string): SafeParseResult<CreateDrainFilterDrainsDeployment, SDKValidationError>;
/** @internal */
export declare const CreateDrainFilter1$inboundSchema: z.ZodType<CreateDrainFilter1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainFilter1$Outbound = {
    type: "basic";
    project?: CreateDrainFilterDrainsProject$Outbound | undefined;
    log?: CreateDrainFilterDrainsLog$Outbound | undefined;
    deployment?: CreateDrainFilterDrainsDeployment$Outbound | undefined;
};
/** @internal */
export declare const CreateDrainFilter1$outboundSchema: z.ZodType<CreateDrainFilter1$Outbound, z.ZodTypeDef, CreateDrainFilter1>;
export declare function createDrainFilter1ToJSON(createDrainFilter1: CreateDrainFilter1): string;
export declare function createDrainFilter1FromJSON(jsonString: string): SafeParseResult<CreateDrainFilter1, SDKValidationError>;
/** @internal */
export declare const FilterV2Filter$inboundSchema: z.ZodType<FilterV2Filter, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterV2Filter$Outbound = CreateDrainFilter1$Outbound | CreateDrainFilterDrains2$Outbound;
/** @internal */
export declare const FilterV2Filter$outboundSchema: z.ZodType<FilterV2Filter$Outbound, z.ZodTypeDef, FilterV2Filter>;
export declare function filterV2FilterToJSON(filterV2Filter: FilterV2Filter): string;
export declare function filterV2FilterFromJSON(jsonString: string): SafeParseResult<FilterV2Filter, SDKValidationError>;
/** @internal */
export declare const FilterV22$inboundSchema: z.ZodType<FilterV22, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterV22$Outbound = {
    version: "v2";
    filter: CreateDrainFilter1$Outbound | CreateDrainFilterDrains2$Outbound;
};
/** @internal */
export declare const FilterV22$outboundSchema: z.ZodType<FilterV22$Outbound, z.ZodTypeDef, FilterV22>;
export declare function filterV22ToJSON(filterV22: FilterV22): string;
export declare function filterV22FromJSON(jsonString: string): SafeParseResult<FilterV22, SDKValidationError>;
/** @internal */
export declare const FilterV21$inboundSchema: z.ZodType<FilterV21, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterV21$Outbound = {
    version: "v1";
};
/** @internal */
export declare const FilterV21$outboundSchema: z.ZodType<FilterV21$Outbound, z.ZodTypeDef, FilterV21>;
export declare function filterV21ToJSON(filterV21: FilterV21): string;
export declare function filterV21FromJSON(jsonString: string): SafeParseResult<FilterV21, SDKValidationError>;
/** @internal */
export declare const FilterV2$inboundSchema: z.ZodType<FilterV2, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterV2$Outbound = FilterV21$Outbound | FilterV22$Outbound;
/** @internal */
export declare const FilterV2$outboundSchema: z.ZodType<FilterV2$Outbound, z.ZodTypeDef, FilterV2>;
export declare function filterV2ToJSON(filterV2: FilterV2): string;
export declare function filterV2FromJSON(jsonString: string): SafeParseResult<FilterV2, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBody1$inboundSchema: z.ZodType<CreateDrainResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBody1$Outbound = {
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
    schemas: ResponseBodySchemas$Outbound;
    delivery: CreateDrainDelivery1$Outbound | CreateDrainDelivery2$Outbound | Delivery3$Outbound | Delivery4$Outbound;
    sampling?: Array<ResponseBodySampling$Outbound> | undefined;
    source: CreateDrainSource1$Outbound | CreateDrainSource2$Outbound;
    filter?: string | undefined;
    filterV2?: FilterV21$Outbound | FilterV22$Outbound | undefined;
};
/** @internal */
export declare const CreateDrainResponseBody1$outboundSchema: z.ZodType<CreateDrainResponseBody1$Outbound, z.ZodTypeDef, CreateDrainResponseBody1>;
export declare function createDrainResponseBody1ToJSON(createDrainResponseBody1: CreateDrainResponseBody1): string;
export declare function createDrainResponseBody1FromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBody1, SDKValidationError>;
/** @internal */
export declare const CreateDrainResponseBody$inboundSchema: z.ZodType<CreateDrainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDrainResponseBody$Outbound = CreateDrainResponseBody1$Outbound | CreateDrainResponseBody2$Outbound;
/** @internal */
export declare const CreateDrainResponseBody$outboundSchema: z.ZodType<CreateDrainResponseBody$Outbound, z.ZodTypeDef, CreateDrainResponseBody>;
export declare function createDrainResponseBodyToJSON(createDrainResponseBody: CreateDrainResponseBody): string;
export declare function createDrainResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateDrainResponseBody, SDKValidationError>;
//# sourceMappingURL=createdrainop.d.ts.map