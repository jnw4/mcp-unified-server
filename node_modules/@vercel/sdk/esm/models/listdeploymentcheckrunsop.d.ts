import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListDeploymentCheckRunsRequest = {
    deploymentId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const ListDeploymentCheckRunsSourceProvider: {
    readonly Github: "github";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type ListDeploymentCheckRunsSourceProvider = ClosedEnum<typeof ListDeploymentCheckRunsSourceProvider>;
export type ListDeploymentCheckRunsSource3 = {
    kind: "git-provider";
    provider: ListDeploymentCheckRunsSourceProvider;
    externalCheckName: string;
};
export type ListDeploymentCheckRunsSource2 = {
    kind: "webhook";
    webhookId?: string | undefined;
};
export type ListDeploymentCheckRunsSource1 = {
    kind: "integration";
    integrationId: string;
    integrationConfigurationId: string;
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
};
export type ListDeploymentCheckRunsSource = ListDeploymentCheckRunsSource1 | ListDeploymentCheckRunsSource2 | ListDeploymentCheckRunsSource3;
export declare const ListDeploymentCheckRunsRequires: {
    readonly BuildReady: "build-ready";
    readonly DeploymentUrl: "deployment-url";
    readonly None: "none";
};
export type ListDeploymentCheckRunsRequires = ClosedEnum<typeof ListDeploymentCheckRunsRequires>;
export declare const ListDeploymentCheckRunsBlocks: {
    readonly None: "none";
    readonly BuildStart: "build-start";
    readonly DeploymentStart: "deployment-start";
    readonly DeploymentAlias: "deployment-alias";
    readonly DeploymentPromotion: "deployment-promotion";
};
export type ListDeploymentCheckRunsBlocks = ClosedEnum<typeof ListDeploymentCheckRunsBlocks>;
export declare const ListDeploymentCheckRunsStatus: {
    readonly Queued: "queued";
    readonly Running: "running";
    readonly Completed: "completed";
};
export type ListDeploymentCheckRunsStatus = ClosedEnum<typeof ListDeploymentCheckRunsStatus>;
export declare const ListDeploymentCheckRunsConclusion: {
    readonly Timeout: "timeout";
    readonly Canceled: "canceled";
    readonly Skipped: "skipped";
    readonly Failed: "failed";
    readonly Neutral: "neutral";
    readonly Succeeded: "succeeded";
};
export type ListDeploymentCheckRunsConclusion = ClosedEnum<typeof ListDeploymentCheckRunsConclusion>;
export type ListDeploymentCheckRunsRuns = {
    id: string;
    name: string;
    checkId: string;
    ownerId: string;
    deploymentId: string;
    projectId?: string | undefined;
    source: ListDeploymentCheckRunsSource1 | ListDeploymentCheckRunsSource2 | ListDeploymentCheckRunsSource3;
    requires?: ListDeploymentCheckRunsRequires | undefined;
    blocks?: ListDeploymentCheckRunsBlocks | undefined;
    targets?: Array<string> | undefined;
    status: ListDeploymentCheckRunsStatus;
    conclusion?: ListDeploymentCheckRunsConclusion | undefined;
    conclusionText?: string | undefined;
    externalId?: string | undefined;
    externalUrl?: string | undefined;
    output?: {
        [k: string]: any;
    } | undefined;
    timeout: number;
    createdAt: number;
    updatedAt: number;
    completedAt?: number | undefined;
};
export type ListDeploymentCheckRunsResponseBody = {
    runs: Array<ListDeploymentCheckRunsRuns>;
};
/** @internal */
export declare const ListDeploymentCheckRunsRequest$inboundSchema: z.ZodType<ListDeploymentCheckRunsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentCheckRunsRequest$Outbound = {
    deploymentId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListDeploymentCheckRunsRequest$outboundSchema: z.ZodType<ListDeploymentCheckRunsRequest$Outbound, z.ZodTypeDef, ListDeploymentCheckRunsRequest>;
export declare function listDeploymentCheckRunsRequestToJSON(listDeploymentCheckRunsRequest: ListDeploymentCheckRunsRequest): string;
export declare function listDeploymentCheckRunsRequestFromJSON(jsonString: string): SafeParseResult<ListDeploymentCheckRunsRequest, SDKValidationError>;
/** @internal */
export declare const ListDeploymentCheckRunsSourceProvider$inboundSchema: z.ZodNativeEnum<typeof ListDeploymentCheckRunsSourceProvider>;
/** @internal */
export declare const ListDeploymentCheckRunsSourceProvider$outboundSchema: z.ZodNativeEnum<typeof ListDeploymentCheckRunsSourceProvider>;
/** @internal */
export declare const ListDeploymentCheckRunsSource3$inboundSchema: z.ZodType<ListDeploymentCheckRunsSource3, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentCheckRunsSource3$Outbound = {
    kind: "git-provider";
    provider: string;
    externalCheckName: string;
};
/** @internal */
export declare const ListDeploymentCheckRunsSource3$outboundSchema: z.ZodType<ListDeploymentCheckRunsSource3$Outbound, z.ZodTypeDef, ListDeploymentCheckRunsSource3>;
export declare function listDeploymentCheckRunsSource3ToJSON(listDeploymentCheckRunsSource3: ListDeploymentCheckRunsSource3): string;
export declare function listDeploymentCheckRunsSource3FromJSON(jsonString: string): SafeParseResult<ListDeploymentCheckRunsSource3, SDKValidationError>;
/** @internal */
export declare const ListDeploymentCheckRunsSource2$inboundSchema: z.ZodType<ListDeploymentCheckRunsSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentCheckRunsSource2$Outbound = {
    kind: "webhook";
    webhookId?: string | undefined;
};
/** @internal */
export declare const ListDeploymentCheckRunsSource2$outboundSchema: z.ZodType<ListDeploymentCheckRunsSource2$Outbound, z.ZodTypeDef, ListDeploymentCheckRunsSource2>;
export declare function listDeploymentCheckRunsSource2ToJSON(listDeploymentCheckRunsSource2: ListDeploymentCheckRunsSource2): string;
export declare function listDeploymentCheckRunsSource2FromJSON(jsonString: string): SafeParseResult<ListDeploymentCheckRunsSource2, SDKValidationError>;
/** @internal */
export declare const ListDeploymentCheckRunsSource1$inboundSchema: z.ZodType<ListDeploymentCheckRunsSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentCheckRunsSource1$Outbound = {
    kind: "integration";
    integrationId: string;
    integrationConfigurationId: string;
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
};
/** @internal */
export declare const ListDeploymentCheckRunsSource1$outboundSchema: z.ZodType<ListDeploymentCheckRunsSource1$Outbound, z.ZodTypeDef, ListDeploymentCheckRunsSource1>;
export declare function listDeploymentCheckRunsSource1ToJSON(listDeploymentCheckRunsSource1: ListDeploymentCheckRunsSource1): string;
export declare function listDeploymentCheckRunsSource1FromJSON(jsonString: string): SafeParseResult<ListDeploymentCheckRunsSource1, SDKValidationError>;
/** @internal */
export declare const ListDeploymentCheckRunsSource$inboundSchema: z.ZodType<ListDeploymentCheckRunsSource, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentCheckRunsSource$Outbound = ListDeploymentCheckRunsSource1$Outbound | ListDeploymentCheckRunsSource2$Outbound | ListDeploymentCheckRunsSource3$Outbound;
/** @internal */
export declare const ListDeploymentCheckRunsSource$outboundSchema: z.ZodType<ListDeploymentCheckRunsSource$Outbound, z.ZodTypeDef, ListDeploymentCheckRunsSource>;
export declare function listDeploymentCheckRunsSourceToJSON(listDeploymentCheckRunsSource: ListDeploymentCheckRunsSource): string;
export declare function listDeploymentCheckRunsSourceFromJSON(jsonString: string): SafeParseResult<ListDeploymentCheckRunsSource, SDKValidationError>;
/** @internal */
export declare const ListDeploymentCheckRunsRequires$inboundSchema: z.ZodNativeEnum<typeof ListDeploymentCheckRunsRequires>;
/** @internal */
export declare const ListDeploymentCheckRunsRequires$outboundSchema: z.ZodNativeEnum<typeof ListDeploymentCheckRunsRequires>;
/** @internal */
export declare const ListDeploymentCheckRunsBlocks$inboundSchema: z.ZodNativeEnum<typeof ListDeploymentCheckRunsBlocks>;
/** @internal */
export declare const ListDeploymentCheckRunsBlocks$outboundSchema: z.ZodNativeEnum<typeof ListDeploymentCheckRunsBlocks>;
/** @internal */
export declare const ListDeploymentCheckRunsStatus$inboundSchema: z.ZodNativeEnum<typeof ListDeploymentCheckRunsStatus>;
/** @internal */
export declare const ListDeploymentCheckRunsStatus$outboundSchema: z.ZodNativeEnum<typeof ListDeploymentCheckRunsStatus>;
/** @internal */
export declare const ListDeploymentCheckRunsConclusion$inboundSchema: z.ZodNativeEnum<typeof ListDeploymentCheckRunsConclusion>;
/** @internal */
export declare const ListDeploymentCheckRunsConclusion$outboundSchema: z.ZodNativeEnum<typeof ListDeploymentCheckRunsConclusion>;
/** @internal */
export declare const ListDeploymentCheckRunsRuns$inboundSchema: z.ZodType<ListDeploymentCheckRunsRuns, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentCheckRunsRuns$Outbound = {
    id: string;
    name: string;
    checkId: string;
    ownerId: string;
    deploymentId: string;
    projectId?: string | undefined;
    source: ListDeploymentCheckRunsSource1$Outbound | ListDeploymentCheckRunsSource2$Outbound | ListDeploymentCheckRunsSource3$Outbound;
    requires?: string | undefined;
    blocks?: string | undefined;
    targets?: Array<string> | undefined;
    status: string;
    conclusion?: string | undefined;
    conclusionText?: string | undefined;
    externalId?: string | undefined;
    externalUrl?: string | undefined;
    output?: {
        [k: string]: any;
    } | undefined;
    timeout: number;
    createdAt: number;
    updatedAt: number;
    completedAt?: number | undefined;
};
/** @internal */
export declare const ListDeploymentCheckRunsRuns$outboundSchema: z.ZodType<ListDeploymentCheckRunsRuns$Outbound, z.ZodTypeDef, ListDeploymentCheckRunsRuns>;
export declare function listDeploymentCheckRunsRunsToJSON(listDeploymentCheckRunsRuns: ListDeploymentCheckRunsRuns): string;
export declare function listDeploymentCheckRunsRunsFromJSON(jsonString: string): SafeParseResult<ListDeploymentCheckRunsRuns, SDKValidationError>;
/** @internal */
export declare const ListDeploymentCheckRunsResponseBody$inboundSchema: z.ZodType<ListDeploymentCheckRunsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentCheckRunsResponseBody$Outbound = {
    runs: Array<ListDeploymentCheckRunsRuns$Outbound>;
};
/** @internal */
export declare const ListDeploymentCheckRunsResponseBody$outboundSchema: z.ZodType<ListDeploymentCheckRunsResponseBody$Outbound, z.ZodTypeDef, ListDeploymentCheckRunsResponseBody>;
export declare function listDeploymentCheckRunsResponseBodyToJSON(listDeploymentCheckRunsResponseBody: ListDeploymentCheckRunsResponseBody): string;
export declare function listDeploymentCheckRunsResponseBodyFromJSON(jsonString: string): SafeParseResult<ListDeploymentCheckRunsResponseBody, SDKValidationError>;
//# sourceMappingURL=listdeploymentcheckrunsop.d.ts.map