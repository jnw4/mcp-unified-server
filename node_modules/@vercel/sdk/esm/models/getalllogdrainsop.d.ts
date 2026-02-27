import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetAllLogDrainsRequest = {
    projectId?: string | undefined;
    projectIdOrName?: string | undefined;
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
export declare const GetAllLogDrainsDrainsStatus: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
    readonly Errored: "errored";
};
export type GetAllLogDrainsDrainsStatus = ClosedEnum<typeof GetAllLogDrainsDrainsStatus>;
export declare const GetAllLogDrainsDrainsLogDrainsDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly DisabledByAdmin: "disabled-by-admin";
};
export type GetAllLogDrainsDrainsLogDrainsDisabledReason = ClosedEnum<typeof GetAllLogDrainsDrainsLogDrainsDisabledReason>;
export type GetAllLogDrainsDrainsLogDrainsLog = {};
export type GetAllLogDrainsDrainsLogDrainsTrace = {};
export type GetAllLogDrainsDrainsLogDrainsAnalytics = {};
export type GetAllLogDrainsDrainsSpeedInsights = {};
export type GetAllLogDrainsDrainsLogDrainsSchemas = {
    log?: GetAllLogDrainsDrainsLogDrainsLog | undefined;
    trace?: GetAllLogDrainsDrainsLogDrainsTrace | undefined;
    analytics?: GetAllLogDrainsDrainsLogDrainsAnalytics | undefined;
    speedInsights?: GetAllLogDrainsDrainsSpeedInsights | undefined;
};
export declare const GetAllLogDrainsDeliveryTarget: {
    readonly VercelOtelTracesDb: "vercel-otel-traces-db";
};
export type GetAllLogDrainsDeliveryTarget = ClosedEnum<typeof GetAllLogDrainsDeliveryTarget>;
export type GetAllLogDrainsDelivery4 = {
    type: "internal";
    target: GetAllLogDrainsDeliveryTarget;
};
export type GetAllLogDrainsDelivery3 = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
export type GetAllLogDrainsDeliveryLogDrainsEndpoint = {
    traces: string;
};
export declare const GetAllLogDrainsDeliveryLogDrainsResponseEncoding: {
    readonly Json: "json";
    readonly Proto: "proto";
};
export type GetAllLogDrainsDeliveryLogDrainsResponseEncoding = ClosedEnum<typeof GetAllLogDrainsDeliveryLogDrainsResponseEncoding>;
export declare const GetAllLogDrainsSecretLogDrainsResponseKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetAllLogDrainsSecretLogDrainsResponseKind = ClosedEnum<typeof GetAllLogDrainsSecretLogDrainsResponseKind>;
export type GetAllLogDrainsSecretLogDrainsResponse2 = {
    kind: GetAllLogDrainsSecretLogDrainsResponseKind;
};
export type GetAllLogDrainsDeliveryLogDrainsSecret = GetAllLogDrainsSecretLogDrainsResponse2 | string;
export type GetAllLogDrainsDelivery2 = {
    type: "otlphttp";
    endpoint: GetAllLogDrainsDeliveryLogDrainsEndpoint;
    encoding: GetAllLogDrainsDeliveryLogDrainsResponseEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: GetAllLogDrainsSecretLogDrainsResponse2 | string | undefined;
};
export declare const GetAllLogDrainsDeliveryLogDrainsEncoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type GetAllLogDrainsDeliveryLogDrainsEncoding = ClosedEnum<typeof GetAllLogDrainsDeliveryLogDrainsEncoding>;
export declare const GetAllLogDrainsDeliveryLogDrainsCompression: {
    readonly None: "none";
    readonly Gzip: "gzip";
};
export type GetAllLogDrainsDeliveryLogDrainsCompression = ClosedEnum<typeof GetAllLogDrainsDeliveryLogDrainsCompression>;
export declare const GetAllLogDrainsSecretLogDrainsKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetAllLogDrainsSecretLogDrainsKind = ClosedEnum<typeof GetAllLogDrainsSecretLogDrainsKind>;
export type GetAllLogDrainsSecretLogDrains2 = {
    kind: GetAllLogDrainsSecretLogDrainsKind;
};
export type GetAllLogDrainsDeliverySecret = GetAllLogDrainsSecretLogDrains2 | string;
export type GetAllLogDrainsDelivery1 = {
    type: "http";
    endpoint: string;
    encoding: GetAllLogDrainsDeliveryLogDrainsEncoding;
    compression?: GetAllLogDrainsDeliveryLogDrainsCompression | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetAllLogDrainsSecretLogDrains2 | string | undefined;
};
export type GetAllLogDrainsDrainsLogDrainsDelivery = GetAllLogDrainsDelivery1 | GetAllLogDrainsDelivery2 | GetAllLogDrainsDelivery3 | GetAllLogDrainsDelivery4;
export declare const GetAllLogDrainsDrainsType: {
    readonly HeadSampling: "head_sampling";
};
export type GetAllLogDrainsDrainsType = ClosedEnum<typeof GetAllLogDrainsDrainsType>;
export declare const GetAllLogDrainsDrainsLogDrainsEnv: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type GetAllLogDrainsDrainsLogDrainsEnv = ClosedEnum<typeof GetAllLogDrainsDrainsLogDrainsEnv>;
export type GetAllLogDrainsDrainsLogDrainsSampling = {
    type: GetAllLogDrainsDrainsType;
    rate: number;
    env?: GetAllLogDrainsDrainsLogDrainsEnv | undefined;
    requestPath?: string | undefined;
};
export type GetAllLogDrainsSourceLogDrains2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type GetAllLogDrainsSourceLogDrains1 = {
    kind: "self-served";
};
export type GetAllLogDrainsDrainsSource = GetAllLogDrainsSourceLogDrains1 | GetAllLogDrainsSourceLogDrains2;
export type GetAllLogDrainsFilter2 = {
    type: "odata";
    text: string;
};
export type GetAllLogDrainsFilterProject = {
    ids?: Array<string> | undefined;
};
export declare const GetAllLogDrainsFilterLogDrainsSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type GetAllLogDrainsFilterLogDrainsSources = ClosedEnum<typeof GetAllLogDrainsFilterLogDrainsSources>;
export type GetAllLogDrainsFilterLog = {
    sources?: Array<GetAllLogDrainsFilterLogDrainsSources> | undefined;
    legacyExcludeCachedStaticAssetLogs?: boolean | undefined;
};
export declare const GetAllLogDrainsFilterLogDrainsEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type GetAllLogDrainsFilterLogDrainsEnvironments = ClosedEnum<typeof GetAllLogDrainsFilterLogDrainsEnvironments>;
export type GetAllLogDrainsFilterLogDrainsDeployment = {
    environments?: Array<GetAllLogDrainsFilterLogDrainsEnvironments> | undefined;
};
export type GetAllLogDrainsFilter1 = {
    type: "basic";
    project?: GetAllLogDrainsFilterProject | undefined;
    log?: GetAllLogDrainsFilterLog | undefined;
    deployment?: GetAllLogDrainsFilterLogDrainsDeployment | undefined;
};
export type GetAllLogDrainsFilterV2LogDrainsFilter = GetAllLogDrainsFilter1 | GetAllLogDrainsFilter2;
export type GetAllLogDrainsFilterV22 = {
    version: "v2";
    filter: GetAllLogDrainsFilter1 | GetAllLogDrainsFilter2;
};
export type GetAllLogDrainsFilterV21 = {
    version: "v1";
};
export type GetAllLogDrainsDrainsLogDrainsFilterV2 = GetAllLogDrainsFilterV21 | GetAllLogDrainsFilterV22;
export type GetAllLogDrainsProjectAccess2 = {
    access: "some";
    projectIds: Array<string>;
};
export type GetAllLogDrainsProjectAccess1 = {
    access: "all";
};
export type GetAllLogDrainsDrainsProjectAccess = GetAllLogDrainsProjectAccess1 | GetAllLogDrainsProjectAccess2;
export type GetAllLogDrainsDrains2 = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: GetAllLogDrainsDrainsStatus | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: GetAllLogDrainsDrainsLogDrainsDisabledReason | undefined;
    schemas: GetAllLogDrainsDrainsLogDrainsSchemas;
    delivery: GetAllLogDrainsDelivery1 | GetAllLogDrainsDelivery2 | GetAllLogDrainsDelivery3 | GetAllLogDrainsDelivery4;
    sampling?: Array<GetAllLogDrainsDrainsLogDrainsSampling> | undefined;
    source: GetAllLogDrainsSourceLogDrains1 | GetAllLogDrainsSourceLogDrains2;
    filter?: string | undefined;
    filterV2?: GetAllLogDrainsFilterV21 | GetAllLogDrainsFilterV22 | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
    projectAccess?: GetAllLogDrainsProjectAccess1 | GetAllLogDrainsProjectAccess2 | undefined;
};
export declare const GetAllLogDrainsDrainsLogDrainsStatus: {
    readonly Enabled: "enabled";
    readonly Disabled: "disabled";
    readonly Errored: "errored";
};
export type GetAllLogDrainsDrainsLogDrainsStatus = ClosedEnum<typeof GetAllLogDrainsDrainsLogDrainsStatus>;
export declare const GetAllLogDrainsDrainsDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly DisabledByAdmin: "disabled-by-admin";
};
export type GetAllLogDrainsDrainsDisabledReason = ClosedEnum<typeof GetAllLogDrainsDrainsDisabledReason>;
export type GetAllLogDrainsDrainsLog = {};
export type GetAllLogDrainsDrainsTrace = {};
export type GetAllLogDrainsDrainsAnalytics = {};
export type GetAllLogDrainsDrainsLogDrainsSpeedInsights = {};
export type GetAllLogDrainsDrainsSchemas = {
    log?: GetAllLogDrainsDrainsLog | undefined;
    trace?: GetAllLogDrainsDrainsTrace | undefined;
    analytics?: GetAllLogDrainsDrainsAnalytics | undefined;
    speedInsights?: GetAllLogDrainsDrainsLogDrainsSpeedInsights | undefined;
};
export declare const GetAllLogDrainsDeliveryLogDrainsTarget: {
    readonly VercelOtelTracesDb: "vercel-otel-traces-db";
};
export type GetAllLogDrainsDeliveryLogDrainsTarget = ClosedEnum<typeof GetAllLogDrainsDeliveryLogDrainsTarget>;
export type GetAllLogDrainsDeliveryLogDrains4 = {
    type: "internal";
    target: GetAllLogDrainsDeliveryLogDrainsTarget;
};
export type GetAllLogDrainsDeliveryLogDrains3 = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
export type GetAllLogDrainsDeliveryEndpoint = {
    traces: string;
};
export declare const GetAllLogDrainsDeliveryEncoding: {
    readonly Json: "json";
    readonly Proto: "proto";
};
export type GetAllLogDrainsDeliveryEncoding = ClosedEnum<typeof GetAllLogDrainsDeliveryEncoding>;
export declare const GetAllLogDrainsSecretKind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetAllLogDrainsSecretKind = ClosedEnum<typeof GetAllLogDrainsSecretKind>;
export type GetAllLogDrainsSecret2 = {
    kind: GetAllLogDrainsSecretKind;
};
export type GetAllLogDrainsDeliveryLogDrainsResponse200Secret = GetAllLogDrainsSecret2 | string;
export type GetAllLogDrainsDeliveryLogDrains2 = {
    type: "otlphttp";
    endpoint: GetAllLogDrainsDeliveryEndpoint;
    encoding: GetAllLogDrainsDeliveryEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: GetAllLogDrainsSecret2 | string | undefined;
};
export declare const GetAllLogDrainsDeliveryLogDrainsResponse200Encoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type GetAllLogDrainsDeliveryLogDrainsResponse200Encoding = ClosedEnum<typeof GetAllLogDrainsDeliveryLogDrainsResponse200Encoding>;
export declare const GetAllLogDrainsDeliveryCompression: {
    readonly None: "none";
    readonly Gzip: "gzip";
};
export type GetAllLogDrainsDeliveryCompression = ClosedEnum<typeof GetAllLogDrainsDeliveryCompression>;
export declare const GetAllLogDrainsSecretLogDrainsResponse200Kind: {
    readonly IntegrationSecret: "INTEGRATION_SECRET";
};
export type GetAllLogDrainsSecretLogDrainsResponse200Kind = ClosedEnum<typeof GetAllLogDrainsSecretLogDrainsResponse200Kind>;
export type GetAllLogDrainsSecretLogDrainsResponse2002 = {
    kind: GetAllLogDrainsSecretLogDrainsResponse200Kind;
};
export type GetAllLogDrainsDeliveryLogDrainsResponseSecret = GetAllLogDrainsSecretLogDrainsResponse2002 | string;
export type GetAllLogDrainsDeliveryLogDrains1 = {
    type: "http";
    endpoint: string;
    encoding: GetAllLogDrainsDeliveryLogDrainsResponse200Encoding;
    compression?: GetAllLogDrainsDeliveryCompression | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetAllLogDrainsSecretLogDrainsResponse2002 | string | undefined;
};
export type GetAllLogDrainsDrainsDelivery = GetAllLogDrainsDeliveryLogDrains1 | GetAllLogDrainsDeliveryLogDrains2 | GetAllLogDrainsDeliveryLogDrains3 | GetAllLogDrainsDeliveryLogDrains4;
export declare const GetAllLogDrainsDrainsLogDrainsType: {
    readonly HeadSampling: "head_sampling";
};
export type GetAllLogDrainsDrainsLogDrainsType = ClosedEnum<typeof GetAllLogDrainsDrainsLogDrainsType>;
export declare const GetAllLogDrainsDrainsEnv: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type GetAllLogDrainsDrainsEnv = ClosedEnum<typeof GetAllLogDrainsDrainsEnv>;
export type GetAllLogDrainsDrainsSampling = {
    type: GetAllLogDrainsDrainsLogDrainsType;
    rate: number;
    env?: GetAllLogDrainsDrainsEnv | undefined;
    requestPath?: string | undefined;
};
export type GetAllLogDrainsSource2 = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
export type GetAllLogDrainsSource1 = {
    kind: "self-served";
};
export type GetAllLogDrainsDrainsLogDrainsSource = GetAllLogDrainsSource1 | GetAllLogDrainsSource2;
export type GetAllLogDrainsFilterLogDrains2 = {
    type: "odata";
    text: string;
};
export type GetAllLogDrainsFilterLogDrainsProject = {
    ids?: Array<string> | undefined;
};
export declare const GetAllLogDrainsFilterSources: {
    readonly Build: "build";
    readonly Edge: "edge";
    readonly Lambda: "lambda";
    readonly Static: "static";
    readonly External: "external";
    readonly Firewall: "firewall";
    readonly Redirect: "redirect";
};
export type GetAllLogDrainsFilterSources = ClosedEnum<typeof GetAllLogDrainsFilterSources>;
export type GetAllLogDrainsFilterLogDrainsLog = {
    sources?: Array<GetAllLogDrainsFilterSources> | undefined;
    legacyExcludeCachedStaticAssetLogs?: boolean | undefined;
};
export declare const GetAllLogDrainsFilterEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type GetAllLogDrainsFilterEnvironments = ClosedEnum<typeof GetAllLogDrainsFilterEnvironments>;
export type GetAllLogDrainsFilterDeployment = {
    environments?: Array<GetAllLogDrainsFilterEnvironments> | undefined;
};
export type GetAllLogDrainsFilterLogDrains1 = {
    type: "basic";
    project?: GetAllLogDrainsFilterLogDrainsProject | undefined;
    log?: GetAllLogDrainsFilterLogDrainsLog | undefined;
    deployment?: GetAllLogDrainsFilterDeployment | undefined;
};
export type GetAllLogDrainsFilterV2Filter = GetAllLogDrainsFilterLogDrains1 | GetAllLogDrainsFilterLogDrains2;
export type GetAllLogDrainsFilterV2LogDrains2 = {
    version: "v2";
    filter: GetAllLogDrainsFilterLogDrains1 | GetAllLogDrainsFilterLogDrains2;
};
export type GetAllLogDrainsFilterV2LogDrains1 = {
    version: "v1";
};
export type GetAllLogDrainsDrainsFilterV2 = GetAllLogDrainsFilterV2LogDrains1 | GetAllLogDrainsFilterV2LogDrains2;
export type GetAllLogDrainsDrains1 = {
    id: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
    name: string;
    teamId?: string | null | undefined;
    ownerId: string;
    status?: GetAllLogDrainsDrainsLogDrainsStatus | undefined;
    firstErrorTimestamp?: number | undefined;
    disabledAt?: number | undefined;
    disabledBy?: string | undefined;
    disabledReason?: GetAllLogDrainsDrainsDisabledReason | undefined;
    schemas: GetAllLogDrainsDrainsSchemas;
    delivery: GetAllLogDrainsDeliveryLogDrains1 | GetAllLogDrainsDeliveryLogDrains2 | GetAllLogDrainsDeliveryLogDrains3 | GetAllLogDrainsDeliveryLogDrains4;
    sampling?: Array<GetAllLogDrainsDrainsSampling> | undefined;
    source: GetAllLogDrainsSource1 | GetAllLogDrainsSource2;
    filter?: string | undefined;
    filterV2?: GetAllLogDrainsFilterV2LogDrains1 | GetAllLogDrainsFilterV2LogDrains2 | undefined;
};
export type ResponseBodyDrains = Array<GetAllLogDrainsDrains1> | Array<GetAllLogDrainsDrains2>;
export type GetAllLogDrainsResponseBody2 = {
    drains: Array<GetAllLogDrainsDrains1> | Array<GetAllLogDrainsDrains2>;
};
export declare const GetAllLogDrainsResponseBodyFramework: {
    readonly Blitzjs: "blitzjs";
    readonly Nextjs: "nextjs";
    readonly Gatsby: "gatsby";
    readonly Remix: "remix";
    readonly ReactRouter: "react-router";
    readonly Astro: "astro";
    readonly Hexo: "hexo";
    readonly Eleventy: "eleventy";
    readonly Docusaurus2: "docusaurus-2";
    readonly Docusaurus: "docusaurus";
    readonly Preact: "preact";
    readonly Solidstart1: "solidstart-1";
    readonly Solidstart: "solidstart";
    readonly Dojo: "dojo";
    readonly Ember: "ember";
    readonly Vue: "vue";
    readonly Scully: "scully";
    readonly IonicAngular: "ionic-angular";
    readonly Angular: "angular";
    readonly Polymer: "polymer";
    readonly Svelte: "svelte";
    readonly Sveltekit: "sveltekit";
    readonly Sveltekit1: "sveltekit-1";
    readonly IonicReact: "ionic-react";
    readonly CreateReactApp: "create-react-app";
    readonly Gridsome: "gridsome";
    readonly Umijs: "umijs";
    readonly Sapper: "sapper";
    readonly Saber: "saber";
    readonly Stencil: "stencil";
    readonly Nuxtjs: "nuxtjs";
    readonly Redwoodjs: "redwoodjs";
    readonly Hugo: "hugo";
    readonly Jekyll: "jekyll";
    readonly Brunch: "brunch";
    readonly Middleman: "middleman";
    readonly Zola: "zola";
    readonly Hydrogen: "hydrogen";
    readonly Vite: "vite";
    readonly TanstackStart: "tanstack-start";
    readonly Vitepress: "vitepress";
    readonly Vuepress: "vuepress";
    readonly Parcel: "parcel";
    readonly Fastapi: "fastapi";
    readonly Flask: "flask";
    readonly Fasthtml: "fasthtml";
    readonly Django: "django";
    readonly SanityV3: "sanity-v3";
    readonly Sanity: "sanity";
    readonly Storybook: "storybook";
    readonly Nitro: "nitro";
    readonly Hono: "hono";
    readonly Express: "express";
    readonly H3: "h3";
    readonly Koa: "koa";
    readonly Nestjs: "nestjs";
    readonly Elysia: "elysia";
    readonly Fastify: "fastify";
    readonly Xmcp: "xmcp";
    readonly Python: "python";
    readonly Ruby: "ruby";
    readonly Rust: "rust";
    readonly Node: "node";
    readonly Go: "go";
    readonly Services: "services";
};
export type GetAllLogDrainsResponseBodyFramework = ClosedEnum<typeof GetAllLogDrainsResponseBodyFramework>;
export type ResponseBodyProjectsMetadata = {
    id: string;
    name: string;
    framework?: GetAllLogDrainsResponseBodyFramework | null | undefined;
    latestDeployment?: string | undefined;
};
export type GetAllLogDrainsResponseBody1 = {
    createdFrom: string;
    clientId?: string | undefined;
    configurationId?: string | undefined;
    projectsMetadata?: Array<ResponseBodyProjectsMetadata> | null | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
};
export type GetAllLogDrainsResponseBody = GetAllLogDrainsResponseBody2 | Array<GetAllLogDrainsResponseBody1>;
/** @internal */
export declare const GetAllLogDrainsRequest$inboundSchema: z.ZodType<GetAllLogDrainsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsRequest$Outbound = {
    projectId?: string | undefined;
    projectIdOrName?: string | undefined;
    includeMetadata: boolean;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetAllLogDrainsRequest$outboundSchema: z.ZodType<GetAllLogDrainsRequest$Outbound, z.ZodTypeDef, GetAllLogDrainsRequest>;
export declare function getAllLogDrainsRequestToJSON(getAllLogDrainsRequest: GetAllLogDrainsRequest): string;
export declare function getAllLogDrainsRequestFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsRequest, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsStatus$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsStatus>;
/** @internal */
export declare const GetAllLogDrainsDrainsStatus$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsStatus>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsDisabledReason$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsLogDrainsDisabledReason>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsDisabledReason$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsLogDrainsDisabledReason>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsLog$inboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsLog, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsLogDrainsLog$Outbound = {};
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsLog$outboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsLog$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsLogDrainsLog>;
export declare function getAllLogDrainsDrainsLogDrainsLogToJSON(getAllLogDrainsDrainsLogDrainsLog: GetAllLogDrainsDrainsLogDrainsLog): string;
export declare function getAllLogDrainsDrainsLogDrainsLogFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsLogDrainsLog, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsTrace$inboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsTrace, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsLogDrainsTrace$Outbound = {};
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsTrace$outboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsTrace$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsLogDrainsTrace>;
export declare function getAllLogDrainsDrainsLogDrainsTraceToJSON(getAllLogDrainsDrainsLogDrainsTrace: GetAllLogDrainsDrainsLogDrainsTrace): string;
export declare function getAllLogDrainsDrainsLogDrainsTraceFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsLogDrainsTrace, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsAnalytics$inboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsAnalytics, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsLogDrainsAnalytics$Outbound = {};
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsAnalytics$outboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsAnalytics$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsLogDrainsAnalytics>;
export declare function getAllLogDrainsDrainsLogDrainsAnalyticsToJSON(getAllLogDrainsDrainsLogDrainsAnalytics: GetAllLogDrainsDrainsLogDrainsAnalytics): string;
export declare function getAllLogDrainsDrainsLogDrainsAnalyticsFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsLogDrainsAnalytics, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsSpeedInsights$inboundSchema: z.ZodType<GetAllLogDrainsDrainsSpeedInsights, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsSpeedInsights$Outbound = {};
/** @internal */
export declare const GetAllLogDrainsDrainsSpeedInsights$outboundSchema: z.ZodType<GetAllLogDrainsDrainsSpeedInsights$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsSpeedInsights>;
export declare function getAllLogDrainsDrainsSpeedInsightsToJSON(getAllLogDrainsDrainsSpeedInsights: GetAllLogDrainsDrainsSpeedInsights): string;
export declare function getAllLogDrainsDrainsSpeedInsightsFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsSpeedInsights, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsSchemas$inboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsSchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsLogDrainsSchemas$Outbound = {
    log?: GetAllLogDrainsDrainsLogDrainsLog$Outbound | undefined;
    trace?: GetAllLogDrainsDrainsLogDrainsTrace$Outbound | undefined;
    analytics?: GetAllLogDrainsDrainsLogDrainsAnalytics$Outbound | undefined;
    speed_insights?: GetAllLogDrainsDrainsSpeedInsights$Outbound | undefined;
};
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsSchemas$outboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsSchemas$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsLogDrainsSchemas>;
export declare function getAllLogDrainsDrainsLogDrainsSchemasToJSON(getAllLogDrainsDrainsLogDrainsSchemas: GetAllLogDrainsDrainsLogDrainsSchemas): string;
export declare function getAllLogDrainsDrainsLogDrainsSchemasFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsLogDrainsSchemas, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryTarget$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryTarget>;
/** @internal */
export declare const GetAllLogDrainsDeliveryTarget$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryTarget>;
/** @internal */
export declare const GetAllLogDrainsDelivery4$inboundSchema: z.ZodType<GetAllLogDrainsDelivery4, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDelivery4$Outbound = {
    type: "internal";
    target: string;
};
/** @internal */
export declare const GetAllLogDrainsDelivery4$outboundSchema: z.ZodType<GetAllLogDrainsDelivery4$Outbound, z.ZodTypeDef, GetAllLogDrainsDelivery4>;
export declare function getAllLogDrainsDelivery4ToJSON(getAllLogDrainsDelivery4: GetAllLogDrainsDelivery4): string;
export declare function getAllLogDrainsDelivery4FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDelivery4, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDelivery3$inboundSchema: z.ZodType<GetAllLogDrainsDelivery3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDelivery3$Outbound = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
/** @internal */
export declare const GetAllLogDrainsDelivery3$outboundSchema: z.ZodType<GetAllLogDrainsDelivery3$Outbound, z.ZodTypeDef, GetAllLogDrainsDelivery3>;
export declare function getAllLogDrainsDelivery3ToJSON(getAllLogDrainsDelivery3: GetAllLogDrainsDelivery3): string;
export declare function getAllLogDrainsDelivery3FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDelivery3, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsEndpoint$inboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrainsEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDeliveryLogDrainsEndpoint$Outbound = {
    traces: string;
};
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsEndpoint$outboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrainsEndpoint$Outbound, z.ZodTypeDef, GetAllLogDrainsDeliveryLogDrainsEndpoint>;
export declare function getAllLogDrainsDeliveryLogDrainsEndpointToJSON(getAllLogDrainsDeliveryLogDrainsEndpoint: GetAllLogDrainsDeliveryLogDrainsEndpoint): string;
export declare function getAllLogDrainsDeliveryLogDrainsEndpointFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDeliveryLogDrainsEndpoint, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsResponseEncoding$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryLogDrainsResponseEncoding>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsResponseEncoding$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryLogDrainsResponseEncoding>;
/** @internal */
export declare const GetAllLogDrainsSecretLogDrainsResponseKind$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsSecretLogDrainsResponseKind>;
/** @internal */
export declare const GetAllLogDrainsSecretLogDrainsResponseKind$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsSecretLogDrainsResponseKind>;
/** @internal */
export declare const GetAllLogDrainsSecretLogDrainsResponse2$inboundSchema: z.ZodType<GetAllLogDrainsSecretLogDrainsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsSecretLogDrainsResponse2$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetAllLogDrainsSecretLogDrainsResponse2$outboundSchema: z.ZodType<GetAllLogDrainsSecretLogDrainsResponse2$Outbound, z.ZodTypeDef, GetAllLogDrainsSecretLogDrainsResponse2>;
export declare function getAllLogDrainsSecretLogDrainsResponse2ToJSON(getAllLogDrainsSecretLogDrainsResponse2: GetAllLogDrainsSecretLogDrainsResponse2): string;
export declare function getAllLogDrainsSecretLogDrainsResponse2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsSecretLogDrainsResponse2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsSecret$inboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrainsSecret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDeliveryLogDrainsSecret$Outbound = GetAllLogDrainsSecretLogDrainsResponse2$Outbound | string;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsSecret$outboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrainsSecret$Outbound, z.ZodTypeDef, GetAllLogDrainsDeliveryLogDrainsSecret>;
export declare function getAllLogDrainsDeliveryLogDrainsSecretToJSON(getAllLogDrainsDeliveryLogDrainsSecret: GetAllLogDrainsDeliveryLogDrainsSecret): string;
export declare function getAllLogDrainsDeliveryLogDrainsSecretFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDeliveryLogDrainsSecret, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDelivery2$inboundSchema: z.ZodType<GetAllLogDrainsDelivery2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDelivery2$Outbound = {
    type: "otlphttp";
    endpoint: GetAllLogDrainsDeliveryLogDrainsEndpoint$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: GetAllLogDrainsSecretLogDrainsResponse2$Outbound | string | undefined;
};
/** @internal */
export declare const GetAllLogDrainsDelivery2$outboundSchema: z.ZodType<GetAllLogDrainsDelivery2$Outbound, z.ZodTypeDef, GetAllLogDrainsDelivery2>;
export declare function getAllLogDrainsDelivery2ToJSON(getAllLogDrainsDelivery2: GetAllLogDrainsDelivery2): string;
export declare function getAllLogDrainsDelivery2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDelivery2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsEncoding$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryLogDrainsEncoding>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsEncoding$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryLogDrainsEncoding>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsCompression$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryLogDrainsCompression>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsCompression$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryLogDrainsCompression>;
/** @internal */
export declare const GetAllLogDrainsSecretLogDrainsKind$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsSecretLogDrainsKind>;
/** @internal */
export declare const GetAllLogDrainsSecretLogDrainsKind$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsSecretLogDrainsKind>;
/** @internal */
export declare const GetAllLogDrainsSecretLogDrains2$inboundSchema: z.ZodType<GetAllLogDrainsSecretLogDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsSecretLogDrains2$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetAllLogDrainsSecretLogDrains2$outboundSchema: z.ZodType<GetAllLogDrainsSecretLogDrains2$Outbound, z.ZodTypeDef, GetAllLogDrainsSecretLogDrains2>;
export declare function getAllLogDrainsSecretLogDrains2ToJSON(getAllLogDrainsSecretLogDrains2: GetAllLogDrainsSecretLogDrains2): string;
export declare function getAllLogDrainsSecretLogDrains2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsSecretLogDrains2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliverySecret$inboundSchema: z.ZodType<GetAllLogDrainsDeliverySecret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDeliverySecret$Outbound = GetAllLogDrainsSecretLogDrains2$Outbound | string;
/** @internal */
export declare const GetAllLogDrainsDeliverySecret$outboundSchema: z.ZodType<GetAllLogDrainsDeliverySecret$Outbound, z.ZodTypeDef, GetAllLogDrainsDeliverySecret>;
export declare function getAllLogDrainsDeliverySecretToJSON(getAllLogDrainsDeliverySecret: GetAllLogDrainsDeliverySecret): string;
export declare function getAllLogDrainsDeliverySecretFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDeliverySecret, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDelivery1$inboundSchema: z.ZodType<GetAllLogDrainsDelivery1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDelivery1$Outbound = {
    type: "http";
    endpoint: string;
    encoding: string;
    compression?: string | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetAllLogDrainsSecretLogDrains2$Outbound | string | undefined;
};
/** @internal */
export declare const GetAllLogDrainsDelivery1$outboundSchema: z.ZodType<GetAllLogDrainsDelivery1$Outbound, z.ZodTypeDef, GetAllLogDrainsDelivery1>;
export declare function getAllLogDrainsDelivery1ToJSON(getAllLogDrainsDelivery1: GetAllLogDrainsDelivery1): string;
export declare function getAllLogDrainsDelivery1FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDelivery1, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsDelivery$inboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsLogDrainsDelivery$Outbound = GetAllLogDrainsDelivery1$Outbound | GetAllLogDrainsDelivery2$Outbound | GetAllLogDrainsDelivery3$Outbound | GetAllLogDrainsDelivery4$Outbound;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsDelivery$outboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsDelivery$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsLogDrainsDelivery>;
export declare function getAllLogDrainsDrainsLogDrainsDeliveryToJSON(getAllLogDrainsDrainsLogDrainsDelivery: GetAllLogDrainsDrainsLogDrainsDelivery): string;
export declare function getAllLogDrainsDrainsLogDrainsDeliveryFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsLogDrainsDelivery, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsType$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsType>;
/** @internal */
export declare const GetAllLogDrainsDrainsType$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsType>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsEnv$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsLogDrainsEnv>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsEnv$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsLogDrainsEnv>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsSampling$inboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsSampling, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsLogDrainsSampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsSampling$outboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsSampling$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsLogDrainsSampling>;
export declare function getAllLogDrainsDrainsLogDrainsSamplingToJSON(getAllLogDrainsDrainsLogDrainsSampling: GetAllLogDrainsDrainsLogDrainsSampling): string;
export declare function getAllLogDrainsDrainsLogDrainsSamplingFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsLogDrainsSampling, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsSourceLogDrains2$inboundSchema: z.ZodType<GetAllLogDrainsSourceLogDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsSourceLogDrains2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetAllLogDrainsSourceLogDrains2$outboundSchema: z.ZodType<GetAllLogDrainsSourceLogDrains2$Outbound, z.ZodTypeDef, GetAllLogDrainsSourceLogDrains2>;
export declare function getAllLogDrainsSourceLogDrains2ToJSON(getAllLogDrainsSourceLogDrains2: GetAllLogDrainsSourceLogDrains2): string;
export declare function getAllLogDrainsSourceLogDrains2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsSourceLogDrains2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsSourceLogDrains1$inboundSchema: z.ZodType<GetAllLogDrainsSourceLogDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsSourceLogDrains1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const GetAllLogDrainsSourceLogDrains1$outboundSchema: z.ZodType<GetAllLogDrainsSourceLogDrains1$Outbound, z.ZodTypeDef, GetAllLogDrainsSourceLogDrains1>;
export declare function getAllLogDrainsSourceLogDrains1ToJSON(getAllLogDrainsSourceLogDrains1: GetAllLogDrainsSourceLogDrains1): string;
export declare function getAllLogDrainsSourceLogDrains1FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsSourceLogDrains1, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsSource$inboundSchema: z.ZodType<GetAllLogDrainsDrainsSource, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsSource$Outbound = GetAllLogDrainsSourceLogDrains1$Outbound | GetAllLogDrainsSourceLogDrains2$Outbound;
/** @internal */
export declare const GetAllLogDrainsDrainsSource$outboundSchema: z.ZodType<GetAllLogDrainsDrainsSource$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsSource>;
export declare function getAllLogDrainsDrainsSourceToJSON(getAllLogDrainsDrainsSource: GetAllLogDrainsDrainsSource): string;
export declare function getAllLogDrainsDrainsSourceFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsSource, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilter2$inboundSchema: z.ZodType<GetAllLogDrainsFilter2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilter2$Outbound = {
    type: "odata";
    text: string;
};
/** @internal */
export declare const GetAllLogDrainsFilter2$outboundSchema: z.ZodType<GetAllLogDrainsFilter2$Outbound, z.ZodTypeDef, GetAllLogDrainsFilter2>;
export declare function getAllLogDrainsFilter2ToJSON(getAllLogDrainsFilter2: GetAllLogDrainsFilter2): string;
export declare function getAllLogDrainsFilter2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilter2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterProject$inboundSchema: z.ZodType<GetAllLogDrainsFilterProject, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetAllLogDrainsFilterProject$outboundSchema: z.ZodType<GetAllLogDrainsFilterProject$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterProject>;
export declare function getAllLogDrainsFilterProjectToJSON(getAllLogDrainsFilterProject: GetAllLogDrainsFilterProject): string;
export declare function getAllLogDrainsFilterProjectFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterProject, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterLogDrainsSources$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsFilterLogDrainsSources>;
/** @internal */
export declare const GetAllLogDrainsFilterLogDrainsSources$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsFilterLogDrainsSources>;
/** @internal */
export declare const GetAllLogDrainsFilterLog$inboundSchema: z.ZodType<GetAllLogDrainsFilterLog, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterLog$Outbound = {
    sources?: Array<string> | undefined;
    legacy_excludeCachedStaticAssetLogs?: boolean | undefined;
};
/** @internal */
export declare const GetAllLogDrainsFilterLog$outboundSchema: z.ZodType<GetAllLogDrainsFilterLog$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterLog>;
export declare function getAllLogDrainsFilterLogToJSON(getAllLogDrainsFilterLog: GetAllLogDrainsFilterLog): string;
export declare function getAllLogDrainsFilterLogFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterLog, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterLogDrainsEnvironments$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsFilterLogDrainsEnvironments>;
/** @internal */
export declare const GetAllLogDrainsFilterLogDrainsEnvironments$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsFilterLogDrainsEnvironments>;
/** @internal */
export declare const GetAllLogDrainsFilterLogDrainsDeployment$inboundSchema: z.ZodType<GetAllLogDrainsFilterLogDrainsDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterLogDrainsDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const GetAllLogDrainsFilterLogDrainsDeployment$outboundSchema: z.ZodType<GetAllLogDrainsFilterLogDrainsDeployment$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterLogDrainsDeployment>;
export declare function getAllLogDrainsFilterLogDrainsDeploymentToJSON(getAllLogDrainsFilterLogDrainsDeployment: GetAllLogDrainsFilterLogDrainsDeployment): string;
export declare function getAllLogDrainsFilterLogDrainsDeploymentFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterLogDrainsDeployment, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilter1$inboundSchema: z.ZodType<GetAllLogDrainsFilter1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilter1$Outbound = {
    type: "basic";
    project?: GetAllLogDrainsFilterProject$Outbound | undefined;
    log?: GetAllLogDrainsFilterLog$Outbound | undefined;
    deployment?: GetAllLogDrainsFilterLogDrainsDeployment$Outbound | undefined;
};
/** @internal */
export declare const GetAllLogDrainsFilter1$outboundSchema: z.ZodType<GetAllLogDrainsFilter1$Outbound, z.ZodTypeDef, GetAllLogDrainsFilter1>;
export declare function getAllLogDrainsFilter1ToJSON(getAllLogDrainsFilter1: GetAllLogDrainsFilter1): string;
export declare function getAllLogDrainsFilter1FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilter1, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterV2LogDrainsFilter$inboundSchema: z.ZodType<GetAllLogDrainsFilterV2LogDrainsFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterV2LogDrainsFilter$Outbound = GetAllLogDrainsFilter1$Outbound | GetAllLogDrainsFilter2$Outbound;
/** @internal */
export declare const GetAllLogDrainsFilterV2LogDrainsFilter$outboundSchema: z.ZodType<GetAllLogDrainsFilterV2LogDrainsFilter$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterV2LogDrainsFilter>;
export declare function getAllLogDrainsFilterV2LogDrainsFilterToJSON(getAllLogDrainsFilterV2LogDrainsFilter: GetAllLogDrainsFilterV2LogDrainsFilter): string;
export declare function getAllLogDrainsFilterV2LogDrainsFilterFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterV2LogDrainsFilter, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterV22$inboundSchema: z.ZodType<GetAllLogDrainsFilterV22, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterV22$Outbound = {
    version: "v2";
    filter: GetAllLogDrainsFilter1$Outbound | GetAllLogDrainsFilter2$Outbound;
};
/** @internal */
export declare const GetAllLogDrainsFilterV22$outboundSchema: z.ZodType<GetAllLogDrainsFilterV22$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterV22>;
export declare function getAllLogDrainsFilterV22ToJSON(getAllLogDrainsFilterV22: GetAllLogDrainsFilterV22): string;
export declare function getAllLogDrainsFilterV22FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterV22, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterV21$inboundSchema: z.ZodType<GetAllLogDrainsFilterV21, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterV21$Outbound = {
    version: "v1";
};
/** @internal */
export declare const GetAllLogDrainsFilterV21$outboundSchema: z.ZodType<GetAllLogDrainsFilterV21$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterV21>;
export declare function getAllLogDrainsFilterV21ToJSON(getAllLogDrainsFilterV21: GetAllLogDrainsFilterV21): string;
export declare function getAllLogDrainsFilterV21FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterV21, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsFilterV2$inboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsFilterV2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsLogDrainsFilterV2$Outbound = GetAllLogDrainsFilterV21$Outbound | GetAllLogDrainsFilterV22$Outbound;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsFilterV2$outboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsFilterV2$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsLogDrainsFilterV2>;
export declare function getAllLogDrainsDrainsLogDrainsFilterV2ToJSON(getAllLogDrainsDrainsLogDrainsFilterV2: GetAllLogDrainsDrainsLogDrainsFilterV2): string;
export declare function getAllLogDrainsDrainsLogDrainsFilterV2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsLogDrainsFilterV2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsProjectAccess2$inboundSchema: z.ZodType<GetAllLogDrainsProjectAccess2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsProjectAccess2$Outbound = {
    access: "some";
    projectIds: Array<string>;
};
/** @internal */
export declare const GetAllLogDrainsProjectAccess2$outboundSchema: z.ZodType<GetAllLogDrainsProjectAccess2$Outbound, z.ZodTypeDef, GetAllLogDrainsProjectAccess2>;
export declare function getAllLogDrainsProjectAccess2ToJSON(getAllLogDrainsProjectAccess2: GetAllLogDrainsProjectAccess2): string;
export declare function getAllLogDrainsProjectAccess2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsProjectAccess2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsProjectAccess1$inboundSchema: z.ZodType<GetAllLogDrainsProjectAccess1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsProjectAccess1$Outbound = {
    access: "all";
};
/** @internal */
export declare const GetAllLogDrainsProjectAccess1$outboundSchema: z.ZodType<GetAllLogDrainsProjectAccess1$Outbound, z.ZodTypeDef, GetAllLogDrainsProjectAccess1>;
export declare function getAllLogDrainsProjectAccess1ToJSON(getAllLogDrainsProjectAccess1: GetAllLogDrainsProjectAccess1): string;
export declare function getAllLogDrainsProjectAccess1FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsProjectAccess1, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsProjectAccess$inboundSchema: z.ZodType<GetAllLogDrainsDrainsProjectAccess, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsProjectAccess$Outbound = GetAllLogDrainsProjectAccess1$Outbound | GetAllLogDrainsProjectAccess2$Outbound;
/** @internal */
export declare const GetAllLogDrainsDrainsProjectAccess$outboundSchema: z.ZodType<GetAllLogDrainsDrainsProjectAccess$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsProjectAccess>;
export declare function getAllLogDrainsDrainsProjectAccessToJSON(getAllLogDrainsDrainsProjectAccess: GetAllLogDrainsDrainsProjectAccess): string;
export declare function getAllLogDrainsDrainsProjectAccessFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsProjectAccess, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrains2$inboundSchema: z.ZodType<GetAllLogDrainsDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrains2$Outbound = {
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
    schemas: GetAllLogDrainsDrainsLogDrainsSchemas$Outbound;
    delivery: GetAllLogDrainsDelivery1$Outbound | GetAllLogDrainsDelivery2$Outbound | GetAllLogDrainsDelivery3$Outbound | GetAllLogDrainsDelivery4$Outbound;
    sampling?: Array<GetAllLogDrainsDrainsLogDrainsSampling$Outbound> | undefined;
    source: GetAllLogDrainsSourceLogDrains1$Outbound | GetAllLogDrainsSourceLogDrains2$Outbound;
    filter?: string | undefined;
    filterV2?: GetAllLogDrainsFilterV21$Outbound | GetAllLogDrainsFilterV22$Outbound | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
    projectAccess?: GetAllLogDrainsProjectAccess1$Outbound | GetAllLogDrainsProjectAccess2$Outbound | undefined;
};
/** @internal */
export declare const GetAllLogDrainsDrains2$outboundSchema: z.ZodType<GetAllLogDrainsDrains2$Outbound, z.ZodTypeDef, GetAllLogDrainsDrains2>;
export declare function getAllLogDrainsDrains2ToJSON(getAllLogDrainsDrains2: GetAllLogDrainsDrains2): string;
export declare function getAllLogDrainsDrains2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrains2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsStatus$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsLogDrainsStatus>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsStatus$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsLogDrainsStatus>;
/** @internal */
export declare const GetAllLogDrainsDrainsDisabledReason$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsDisabledReason>;
/** @internal */
export declare const GetAllLogDrainsDrainsDisabledReason$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsDisabledReason>;
/** @internal */
export declare const GetAllLogDrainsDrainsLog$inboundSchema: z.ZodType<GetAllLogDrainsDrainsLog, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsLog$Outbound = {};
/** @internal */
export declare const GetAllLogDrainsDrainsLog$outboundSchema: z.ZodType<GetAllLogDrainsDrainsLog$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsLog>;
export declare function getAllLogDrainsDrainsLogToJSON(getAllLogDrainsDrainsLog: GetAllLogDrainsDrainsLog): string;
export declare function getAllLogDrainsDrainsLogFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsLog, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsTrace$inboundSchema: z.ZodType<GetAllLogDrainsDrainsTrace, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsTrace$Outbound = {};
/** @internal */
export declare const GetAllLogDrainsDrainsTrace$outboundSchema: z.ZodType<GetAllLogDrainsDrainsTrace$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsTrace>;
export declare function getAllLogDrainsDrainsTraceToJSON(getAllLogDrainsDrainsTrace: GetAllLogDrainsDrainsTrace): string;
export declare function getAllLogDrainsDrainsTraceFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsTrace, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsAnalytics$inboundSchema: z.ZodType<GetAllLogDrainsDrainsAnalytics, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsAnalytics$Outbound = {};
/** @internal */
export declare const GetAllLogDrainsDrainsAnalytics$outboundSchema: z.ZodType<GetAllLogDrainsDrainsAnalytics$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsAnalytics>;
export declare function getAllLogDrainsDrainsAnalyticsToJSON(getAllLogDrainsDrainsAnalytics: GetAllLogDrainsDrainsAnalytics): string;
export declare function getAllLogDrainsDrainsAnalyticsFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsAnalytics, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsSpeedInsights$inboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsSpeedInsights, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsLogDrainsSpeedInsights$Outbound = {};
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsSpeedInsights$outboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsSpeedInsights$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsLogDrainsSpeedInsights>;
export declare function getAllLogDrainsDrainsLogDrainsSpeedInsightsToJSON(getAllLogDrainsDrainsLogDrainsSpeedInsights: GetAllLogDrainsDrainsLogDrainsSpeedInsights): string;
export declare function getAllLogDrainsDrainsLogDrainsSpeedInsightsFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsLogDrainsSpeedInsights, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsSchemas$inboundSchema: z.ZodType<GetAllLogDrainsDrainsSchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsSchemas$Outbound = {
    log?: GetAllLogDrainsDrainsLog$Outbound | undefined;
    trace?: GetAllLogDrainsDrainsTrace$Outbound | undefined;
    analytics?: GetAllLogDrainsDrainsAnalytics$Outbound | undefined;
    speed_insights?: GetAllLogDrainsDrainsLogDrainsSpeedInsights$Outbound | undefined;
};
/** @internal */
export declare const GetAllLogDrainsDrainsSchemas$outboundSchema: z.ZodType<GetAllLogDrainsDrainsSchemas$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsSchemas>;
export declare function getAllLogDrainsDrainsSchemasToJSON(getAllLogDrainsDrainsSchemas: GetAllLogDrainsDrainsSchemas): string;
export declare function getAllLogDrainsDrainsSchemasFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsSchemas, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsTarget$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryLogDrainsTarget>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsTarget$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryLogDrainsTarget>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrains4$inboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrains4, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDeliveryLogDrains4$Outbound = {
    type: "internal";
    target: string;
};
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrains4$outboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrains4$Outbound, z.ZodTypeDef, GetAllLogDrainsDeliveryLogDrains4>;
export declare function getAllLogDrainsDeliveryLogDrains4ToJSON(getAllLogDrainsDeliveryLogDrains4: GetAllLogDrainsDeliveryLogDrains4): string;
export declare function getAllLogDrainsDeliveryLogDrains4FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDeliveryLogDrains4, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrains3$inboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrains3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDeliveryLogDrains3$Outbound = {
    type: "clickhouse";
    endpoint: string;
    table: string;
};
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrains3$outboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrains3$Outbound, z.ZodTypeDef, GetAllLogDrainsDeliveryLogDrains3>;
export declare function getAllLogDrainsDeliveryLogDrains3ToJSON(getAllLogDrainsDeliveryLogDrains3: GetAllLogDrainsDeliveryLogDrains3): string;
export declare function getAllLogDrainsDeliveryLogDrains3FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDeliveryLogDrains3, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryEndpoint$inboundSchema: z.ZodType<GetAllLogDrainsDeliveryEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDeliveryEndpoint$Outbound = {
    traces: string;
};
/** @internal */
export declare const GetAllLogDrainsDeliveryEndpoint$outboundSchema: z.ZodType<GetAllLogDrainsDeliveryEndpoint$Outbound, z.ZodTypeDef, GetAllLogDrainsDeliveryEndpoint>;
export declare function getAllLogDrainsDeliveryEndpointToJSON(getAllLogDrainsDeliveryEndpoint: GetAllLogDrainsDeliveryEndpoint): string;
export declare function getAllLogDrainsDeliveryEndpointFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDeliveryEndpoint, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryEncoding$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryEncoding>;
/** @internal */
export declare const GetAllLogDrainsDeliveryEncoding$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryEncoding>;
/** @internal */
export declare const GetAllLogDrainsSecretKind$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsSecretKind>;
/** @internal */
export declare const GetAllLogDrainsSecretKind$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsSecretKind>;
/** @internal */
export declare const GetAllLogDrainsSecret2$inboundSchema: z.ZodType<GetAllLogDrainsSecret2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsSecret2$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetAllLogDrainsSecret2$outboundSchema: z.ZodType<GetAllLogDrainsSecret2$Outbound, z.ZodTypeDef, GetAllLogDrainsSecret2>;
export declare function getAllLogDrainsSecret2ToJSON(getAllLogDrainsSecret2: GetAllLogDrainsSecret2): string;
export declare function getAllLogDrainsSecret2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsSecret2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsResponse200Secret$inboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrainsResponse200Secret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDeliveryLogDrainsResponse200Secret$Outbound = GetAllLogDrainsSecret2$Outbound | string;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsResponse200Secret$outboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrainsResponse200Secret$Outbound, z.ZodTypeDef, GetAllLogDrainsDeliveryLogDrainsResponse200Secret>;
export declare function getAllLogDrainsDeliveryLogDrainsResponse200SecretToJSON(getAllLogDrainsDeliveryLogDrainsResponse200Secret: GetAllLogDrainsDeliveryLogDrainsResponse200Secret): string;
export declare function getAllLogDrainsDeliveryLogDrainsResponse200SecretFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDeliveryLogDrainsResponse200Secret, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrains2$inboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDeliveryLogDrains2$Outbound = {
    type: "otlphttp";
    endpoint: GetAllLogDrainsDeliveryEndpoint$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: GetAllLogDrainsSecret2$Outbound | string | undefined;
};
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrains2$outboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrains2$Outbound, z.ZodTypeDef, GetAllLogDrainsDeliveryLogDrains2>;
export declare function getAllLogDrainsDeliveryLogDrains2ToJSON(getAllLogDrainsDeliveryLogDrains2: GetAllLogDrainsDeliveryLogDrains2): string;
export declare function getAllLogDrainsDeliveryLogDrains2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDeliveryLogDrains2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsResponse200Encoding$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryLogDrainsResponse200Encoding>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsResponse200Encoding$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryLogDrainsResponse200Encoding>;
/** @internal */
export declare const GetAllLogDrainsDeliveryCompression$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryCompression>;
/** @internal */
export declare const GetAllLogDrainsDeliveryCompression$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDeliveryCompression>;
/** @internal */
export declare const GetAllLogDrainsSecretLogDrainsResponse200Kind$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsSecretLogDrainsResponse200Kind>;
/** @internal */
export declare const GetAllLogDrainsSecretLogDrainsResponse200Kind$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsSecretLogDrainsResponse200Kind>;
/** @internal */
export declare const GetAllLogDrainsSecretLogDrainsResponse2002$inboundSchema: z.ZodType<GetAllLogDrainsSecretLogDrainsResponse2002, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsSecretLogDrainsResponse2002$Outbound = {
    kind: string;
};
/** @internal */
export declare const GetAllLogDrainsSecretLogDrainsResponse2002$outboundSchema: z.ZodType<GetAllLogDrainsSecretLogDrainsResponse2002$Outbound, z.ZodTypeDef, GetAllLogDrainsSecretLogDrainsResponse2002>;
export declare function getAllLogDrainsSecretLogDrainsResponse2002ToJSON(getAllLogDrainsSecretLogDrainsResponse2002: GetAllLogDrainsSecretLogDrainsResponse2002): string;
export declare function getAllLogDrainsSecretLogDrainsResponse2002FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsSecretLogDrainsResponse2002, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsResponseSecret$inboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrainsResponseSecret, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDeliveryLogDrainsResponseSecret$Outbound = GetAllLogDrainsSecretLogDrainsResponse2002$Outbound | string;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrainsResponseSecret$outboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrainsResponseSecret$Outbound, z.ZodTypeDef, GetAllLogDrainsDeliveryLogDrainsResponseSecret>;
export declare function getAllLogDrainsDeliveryLogDrainsResponseSecretToJSON(getAllLogDrainsDeliveryLogDrainsResponseSecret: GetAllLogDrainsDeliveryLogDrainsResponseSecret): string;
export declare function getAllLogDrainsDeliveryLogDrainsResponseSecretFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDeliveryLogDrainsResponseSecret, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrains1$inboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDeliveryLogDrains1$Outbound = {
    type: "http";
    endpoint: string;
    encoding: string;
    compression?: string | undefined;
    headers: {
        [k: string]: string;
    };
    secret?: GetAllLogDrainsSecretLogDrainsResponse2002$Outbound | string | undefined;
};
/** @internal */
export declare const GetAllLogDrainsDeliveryLogDrains1$outboundSchema: z.ZodType<GetAllLogDrainsDeliveryLogDrains1$Outbound, z.ZodTypeDef, GetAllLogDrainsDeliveryLogDrains1>;
export declare function getAllLogDrainsDeliveryLogDrains1ToJSON(getAllLogDrainsDeliveryLogDrains1: GetAllLogDrainsDeliveryLogDrains1): string;
export declare function getAllLogDrainsDeliveryLogDrains1FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDeliveryLogDrains1, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsDelivery$inboundSchema: z.ZodType<GetAllLogDrainsDrainsDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsDelivery$Outbound = GetAllLogDrainsDeliveryLogDrains1$Outbound | GetAllLogDrainsDeliveryLogDrains2$Outbound | GetAllLogDrainsDeliveryLogDrains3$Outbound | GetAllLogDrainsDeliveryLogDrains4$Outbound;
/** @internal */
export declare const GetAllLogDrainsDrainsDelivery$outboundSchema: z.ZodType<GetAllLogDrainsDrainsDelivery$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsDelivery>;
export declare function getAllLogDrainsDrainsDeliveryToJSON(getAllLogDrainsDrainsDelivery: GetAllLogDrainsDrainsDelivery): string;
export declare function getAllLogDrainsDrainsDeliveryFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsDelivery, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsType$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsLogDrainsType>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsType$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsLogDrainsType>;
/** @internal */
export declare const GetAllLogDrainsDrainsEnv$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsEnv>;
/** @internal */
export declare const GetAllLogDrainsDrainsEnv$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsDrainsEnv>;
/** @internal */
export declare const GetAllLogDrainsDrainsSampling$inboundSchema: z.ZodType<GetAllLogDrainsDrainsSampling, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsSampling$Outbound = {
    type: string;
    rate: number;
    env?: string | undefined;
    requestPath?: string | undefined;
};
/** @internal */
export declare const GetAllLogDrainsDrainsSampling$outboundSchema: z.ZodType<GetAllLogDrainsDrainsSampling$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsSampling>;
export declare function getAllLogDrainsDrainsSamplingToJSON(getAllLogDrainsDrainsSampling: GetAllLogDrainsDrainsSampling): string;
export declare function getAllLogDrainsDrainsSamplingFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsSampling, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsSource2$inboundSchema: z.ZodType<GetAllLogDrainsSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsSource2$Outbound = {
    kind: "integration";
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
    integrationId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetAllLogDrainsSource2$outboundSchema: z.ZodType<GetAllLogDrainsSource2$Outbound, z.ZodTypeDef, GetAllLogDrainsSource2>;
export declare function getAllLogDrainsSource2ToJSON(getAllLogDrainsSource2: GetAllLogDrainsSource2): string;
export declare function getAllLogDrainsSource2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsSource2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsSource1$inboundSchema: z.ZodType<GetAllLogDrainsSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsSource1$Outbound = {
    kind: "self-served";
};
/** @internal */
export declare const GetAllLogDrainsSource1$outboundSchema: z.ZodType<GetAllLogDrainsSource1$Outbound, z.ZodTypeDef, GetAllLogDrainsSource1>;
export declare function getAllLogDrainsSource1ToJSON(getAllLogDrainsSource1: GetAllLogDrainsSource1): string;
export declare function getAllLogDrainsSource1FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsSource1, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsSource$inboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsSource, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsLogDrainsSource$Outbound = GetAllLogDrainsSource1$Outbound | GetAllLogDrainsSource2$Outbound;
/** @internal */
export declare const GetAllLogDrainsDrainsLogDrainsSource$outboundSchema: z.ZodType<GetAllLogDrainsDrainsLogDrainsSource$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsLogDrainsSource>;
export declare function getAllLogDrainsDrainsLogDrainsSourceToJSON(getAllLogDrainsDrainsLogDrainsSource: GetAllLogDrainsDrainsLogDrainsSource): string;
export declare function getAllLogDrainsDrainsLogDrainsSourceFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsLogDrainsSource, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterLogDrains2$inboundSchema: z.ZodType<GetAllLogDrainsFilterLogDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterLogDrains2$Outbound = {
    type: "odata";
    text: string;
};
/** @internal */
export declare const GetAllLogDrainsFilterLogDrains2$outboundSchema: z.ZodType<GetAllLogDrainsFilterLogDrains2$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterLogDrains2>;
export declare function getAllLogDrainsFilterLogDrains2ToJSON(getAllLogDrainsFilterLogDrains2: GetAllLogDrainsFilterLogDrains2): string;
export declare function getAllLogDrainsFilterLogDrains2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterLogDrains2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterLogDrainsProject$inboundSchema: z.ZodType<GetAllLogDrainsFilterLogDrainsProject, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterLogDrainsProject$Outbound = {
    ids?: Array<string> | undefined;
};
/** @internal */
export declare const GetAllLogDrainsFilterLogDrainsProject$outboundSchema: z.ZodType<GetAllLogDrainsFilterLogDrainsProject$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterLogDrainsProject>;
export declare function getAllLogDrainsFilterLogDrainsProjectToJSON(getAllLogDrainsFilterLogDrainsProject: GetAllLogDrainsFilterLogDrainsProject): string;
export declare function getAllLogDrainsFilterLogDrainsProjectFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterLogDrainsProject, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterSources$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsFilterSources>;
/** @internal */
export declare const GetAllLogDrainsFilterSources$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsFilterSources>;
/** @internal */
export declare const GetAllLogDrainsFilterLogDrainsLog$inboundSchema: z.ZodType<GetAllLogDrainsFilterLogDrainsLog, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterLogDrainsLog$Outbound = {
    sources?: Array<string> | undefined;
    legacy_excludeCachedStaticAssetLogs?: boolean | undefined;
};
/** @internal */
export declare const GetAllLogDrainsFilterLogDrainsLog$outboundSchema: z.ZodType<GetAllLogDrainsFilterLogDrainsLog$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterLogDrainsLog>;
export declare function getAllLogDrainsFilterLogDrainsLogToJSON(getAllLogDrainsFilterLogDrainsLog: GetAllLogDrainsFilterLogDrainsLog): string;
export declare function getAllLogDrainsFilterLogDrainsLogFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterLogDrainsLog, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterEnvironments$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsFilterEnvironments>;
/** @internal */
export declare const GetAllLogDrainsFilterEnvironments$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsFilterEnvironments>;
/** @internal */
export declare const GetAllLogDrainsFilterDeployment$inboundSchema: z.ZodType<GetAllLogDrainsFilterDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterDeployment$Outbound = {
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const GetAllLogDrainsFilterDeployment$outboundSchema: z.ZodType<GetAllLogDrainsFilterDeployment$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterDeployment>;
export declare function getAllLogDrainsFilterDeploymentToJSON(getAllLogDrainsFilterDeployment: GetAllLogDrainsFilterDeployment): string;
export declare function getAllLogDrainsFilterDeploymentFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterDeployment, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterLogDrains1$inboundSchema: z.ZodType<GetAllLogDrainsFilterLogDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterLogDrains1$Outbound = {
    type: "basic";
    project?: GetAllLogDrainsFilterLogDrainsProject$Outbound | undefined;
    log?: GetAllLogDrainsFilterLogDrainsLog$Outbound | undefined;
    deployment?: GetAllLogDrainsFilterDeployment$Outbound | undefined;
};
/** @internal */
export declare const GetAllLogDrainsFilterLogDrains1$outboundSchema: z.ZodType<GetAllLogDrainsFilterLogDrains1$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterLogDrains1>;
export declare function getAllLogDrainsFilterLogDrains1ToJSON(getAllLogDrainsFilterLogDrains1: GetAllLogDrainsFilterLogDrains1): string;
export declare function getAllLogDrainsFilterLogDrains1FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterLogDrains1, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterV2Filter$inboundSchema: z.ZodType<GetAllLogDrainsFilterV2Filter, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterV2Filter$Outbound = GetAllLogDrainsFilterLogDrains1$Outbound | GetAllLogDrainsFilterLogDrains2$Outbound;
/** @internal */
export declare const GetAllLogDrainsFilterV2Filter$outboundSchema: z.ZodType<GetAllLogDrainsFilterV2Filter$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterV2Filter>;
export declare function getAllLogDrainsFilterV2FilterToJSON(getAllLogDrainsFilterV2Filter: GetAllLogDrainsFilterV2Filter): string;
export declare function getAllLogDrainsFilterV2FilterFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterV2Filter, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterV2LogDrains2$inboundSchema: z.ZodType<GetAllLogDrainsFilterV2LogDrains2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterV2LogDrains2$Outbound = {
    version: "v2";
    filter: GetAllLogDrainsFilterLogDrains1$Outbound | GetAllLogDrainsFilterLogDrains2$Outbound;
};
/** @internal */
export declare const GetAllLogDrainsFilterV2LogDrains2$outboundSchema: z.ZodType<GetAllLogDrainsFilterV2LogDrains2$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterV2LogDrains2>;
export declare function getAllLogDrainsFilterV2LogDrains2ToJSON(getAllLogDrainsFilterV2LogDrains2: GetAllLogDrainsFilterV2LogDrains2): string;
export declare function getAllLogDrainsFilterV2LogDrains2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterV2LogDrains2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsFilterV2LogDrains1$inboundSchema: z.ZodType<GetAllLogDrainsFilterV2LogDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsFilterV2LogDrains1$Outbound = {
    version: "v1";
};
/** @internal */
export declare const GetAllLogDrainsFilterV2LogDrains1$outboundSchema: z.ZodType<GetAllLogDrainsFilterV2LogDrains1$Outbound, z.ZodTypeDef, GetAllLogDrainsFilterV2LogDrains1>;
export declare function getAllLogDrainsFilterV2LogDrains1ToJSON(getAllLogDrainsFilterV2LogDrains1: GetAllLogDrainsFilterV2LogDrains1): string;
export declare function getAllLogDrainsFilterV2LogDrains1FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsFilterV2LogDrains1, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrainsFilterV2$inboundSchema: z.ZodType<GetAllLogDrainsDrainsFilterV2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrainsFilterV2$Outbound = GetAllLogDrainsFilterV2LogDrains1$Outbound | GetAllLogDrainsFilterV2LogDrains2$Outbound;
/** @internal */
export declare const GetAllLogDrainsDrainsFilterV2$outboundSchema: z.ZodType<GetAllLogDrainsDrainsFilterV2$Outbound, z.ZodTypeDef, GetAllLogDrainsDrainsFilterV2>;
export declare function getAllLogDrainsDrainsFilterV2ToJSON(getAllLogDrainsDrainsFilterV2: GetAllLogDrainsDrainsFilterV2): string;
export declare function getAllLogDrainsDrainsFilterV2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrainsFilterV2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsDrains1$inboundSchema: z.ZodType<GetAllLogDrainsDrains1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsDrains1$Outbound = {
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
    schemas: GetAllLogDrainsDrainsSchemas$Outbound;
    delivery: GetAllLogDrainsDeliveryLogDrains1$Outbound | GetAllLogDrainsDeliveryLogDrains2$Outbound | GetAllLogDrainsDeliveryLogDrains3$Outbound | GetAllLogDrainsDeliveryLogDrains4$Outbound;
    sampling?: Array<GetAllLogDrainsDrainsSampling$Outbound> | undefined;
    source: GetAllLogDrainsSource1$Outbound | GetAllLogDrainsSource2$Outbound;
    filter?: string | undefined;
    filterV2?: GetAllLogDrainsFilterV2LogDrains1$Outbound | GetAllLogDrainsFilterV2LogDrains2$Outbound | undefined;
};
/** @internal */
export declare const GetAllLogDrainsDrains1$outboundSchema: z.ZodType<GetAllLogDrainsDrains1$Outbound, z.ZodTypeDef, GetAllLogDrainsDrains1>;
export declare function getAllLogDrainsDrains1ToJSON(getAllLogDrainsDrains1: GetAllLogDrainsDrains1): string;
export declare function getAllLogDrainsDrains1FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsDrains1, SDKValidationError>;
/** @internal */
export declare const ResponseBodyDrains$inboundSchema: z.ZodType<ResponseBodyDrains, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyDrains$Outbound = Array<GetAllLogDrainsDrains1$Outbound> | Array<GetAllLogDrainsDrains2$Outbound>;
/** @internal */
export declare const ResponseBodyDrains$outboundSchema: z.ZodType<ResponseBodyDrains$Outbound, z.ZodTypeDef, ResponseBodyDrains>;
export declare function responseBodyDrainsToJSON(responseBodyDrains: ResponseBodyDrains): string;
export declare function responseBodyDrainsFromJSON(jsonString: string): SafeParseResult<ResponseBodyDrains, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsResponseBody2$inboundSchema: z.ZodType<GetAllLogDrainsResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsResponseBody2$Outbound = {
    drains: Array<GetAllLogDrainsDrains1$Outbound> | Array<GetAllLogDrainsDrains2$Outbound>;
};
/** @internal */
export declare const GetAllLogDrainsResponseBody2$outboundSchema: z.ZodType<GetAllLogDrainsResponseBody2$Outbound, z.ZodTypeDef, GetAllLogDrainsResponseBody2>;
export declare function getAllLogDrainsResponseBody2ToJSON(getAllLogDrainsResponseBody2: GetAllLogDrainsResponseBody2): string;
export declare function getAllLogDrainsResponseBody2FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsResponseBodyFramework$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsResponseBodyFramework>;
/** @internal */
export declare const GetAllLogDrainsResponseBodyFramework$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsResponseBodyFramework>;
/** @internal */
export declare const ResponseBodyProjectsMetadata$inboundSchema: z.ZodType<ResponseBodyProjectsMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyProjectsMetadata$Outbound = {
    id: string;
    name: string;
    framework?: string | null | undefined;
    latestDeployment?: string | undefined;
};
/** @internal */
export declare const ResponseBodyProjectsMetadata$outboundSchema: z.ZodType<ResponseBodyProjectsMetadata$Outbound, z.ZodTypeDef, ResponseBodyProjectsMetadata>;
export declare function responseBodyProjectsMetadataToJSON(responseBodyProjectsMetadata: ResponseBodyProjectsMetadata): string;
export declare function responseBodyProjectsMetadataFromJSON(jsonString: string): SafeParseResult<ResponseBodyProjectsMetadata, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsResponseBody1$inboundSchema: z.ZodType<GetAllLogDrainsResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsResponseBody1$Outbound = {
    createdFrom: string;
    clientId?: string | undefined;
    configurationId?: string | undefined;
    projectsMetadata?: Array<ResponseBodyProjectsMetadata$Outbound> | null | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
};
/** @internal */
export declare const GetAllLogDrainsResponseBody1$outboundSchema: z.ZodType<GetAllLogDrainsResponseBody1$Outbound, z.ZodTypeDef, GetAllLogDrainsResponseBody1>;
export declare function getAllLogDrainsResponseBody1ToJSON(getAllLogDrainsResponseBody1: GetAllLogDrainsResponseBody1): string;
export declare function getAllLogDrainsResponseBody1FromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetAllLogDrainsResponseBody$inboundSchema: z.ZodType<GetAllLogDrainsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllLogDrainsResponseBody$Outbound = GetAllLogDrainsResponseBody2$Outbound | Array<GetAllLogDrainsResponseBody1$Outbound>;
/** @internal */
export declare const GetAllLogDrainsResponseBody$outboundSchema: z.ZodType<GetAllLogDrainsResponseBody$Outbound, z.ZodTypeDef, GetAllLogDrainsResponseBody>;
export declare function getAllLogDrainsResponseBodyToJSON(getAllLogDrainsResponseBody: GetAllLogDrainsResponseBody): string;
export declare function getAllLogDrainsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetAllLogDrainsResponseBody, SDKValidationError>;
//# sourceMappingURL=getalllogdrainsop.d.ts.map