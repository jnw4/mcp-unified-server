import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListCheckRunsRequest = {
    projectIdOrName: string;
    /**
     * The ID of the resource that will be updated.
     */
    checkId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const ListCheckRunsSourceProvider: {
    readonly Github: "github";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type ListCheckRunsSourceProvider = ClosedEnum<typeof ListCheckRunsSourceProvider>;
export type ListCheckRunsSource3 = {
    kind: "git-provider";
    provider: ListCheckRunsSourceProvider;
    externalCheckName: string;
};
export type ListCheckRunsSource2 = {
    kind: "webhook";
    webhookId?: string | undefined;
};
export type ListCheckRunsSource1 = {
    kind: "integration";
    integrationId: string;
    integrationConfigurationId: string;
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
};
export type ListCheckRunsSource = ListCheckRunsSource1 | ListCheckRunsSource2 | ListCheckRunsSource3;
export declare const ListCheckRunsRequires: {
    readonly BuildReady: "build-ready";
    readonly DeploymentUrl: "deployment-url";
    readonly None: "none";
};
export type ListCheckRunsRequires = ClosedEnum<typeof ListCheckRunsRequires>;
export declare const ListCheckRunsBlocks: {
    readonly None: "none";
    readonly BuildStart: "build-start";
    readonly DeploymentStart: "deployment-start";
    readonly DeploymentAlias: "deployment-alias";
    readonly DeploymentPromotion: "deployment-promotion";
};
export type ListCheckRunsBlocks = ClosedEnum<typeof ListCheckRunsBlocks>;
export declare const ListCheckRunsStatus: {
    readonly Queued: "queued";
    readonly Running: "running";
    readonly Completed: "completed";
};
export type ListCheckRunsStatus = ClosedEnum<typeof ListCheckRunsStatus>;
export declare const ListCheckRunsConclusion: {
    readonly Timeout: "timeout";
    readonly Canceled: "canceled";
    readonly Skipped: "skipped";
    readonly Failed: "failed";
    readonly Neutral: "neutral";
    readonly Succeeded: "succeeded";
};
export type ListCheckRunsConclusion = ClosedEnum<typeof ListCheckRunsConclusion>;
export type Runs = {
    id: string;
    name: string;
    checkId: string;
    ownerId: string;
    deploymentId: string;
    projectId?: string | undefined;
    source: ListCheckRunsSource1 | ListCheckRunsSource2 | ListCheckRunsSource3;
    requires?: ListCheckRunsRequires | undefined;
    blocks?: ListCheckRunsBlocks | undefined;
    targets?: Array<string> | undefined;
    status: ListCheckRunsStatus;
    conclusion?: ListCheckRunsConclusion | undefined;
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
export type ListCheckRunsResponseBody = {
    runs: Array<Runs>;
};
/** @internal */
export declare const ListCheckRunsRequest$inboundSchema: z.ZodType<ListCheckRunsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCheckRunsRequest$Outbound = {
    projectIdOrName: string;
    checkId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListCheckRunsRequest$outboundSchema: z.ZodType<ListCheckRunsRequest$Outbound, z.ZodTypeDef, ListCheckRunsRequest>;
export declare function listCheckRunsRequestToJSON(listCheckRunsRequest: ListCheckRunsRequest): string;
export declare function listCheckRunsRequestFromJSON(jsonString: string): SafeParseResult<ListCheckRunsRequest, SDKValidationError>;
/** @internal */
export declare const ListCheckRunsSourceProvider$inboundSchema: z.ZodNativeEnum<typeof ListCheckRunsSourceProvider>;
/** @internal */
export declare const ListCheckRunsSourceProvider$outboundSchema: z.ZodNativeEnum<typeof ListCheckRunsSourceProvider>;
/** @internal */
export declare const ListCheckRunsSource3$inboundSchema: z.ZodType<ListCheckRunsSource3, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCheckRunsSource3$Outbound = {
    kind: "git-provider";
    provider: string;
    externalCheckName: string;
};
/** @internal */
export declare const ListCheckRunsSource3$outboundSchema: z.ZodType<ListCheckRunsSource3$Outbound, z.ZodTypeDef, ListCheckRunsSource3>;
export declare function listCheckRunsSource3ToJSON(listCheckRunsSource3: ListCheckRunsSource3): string;
export declare function listCheckRunsSource3FromJSON(jsonString: string): SafeParseResult<ListCheckRunsSource3, SDKValidationError>;
/** @internal */
export declare const ListCheckRunsSource2$inboundSchema: z.ZodType<ListCheckRunsSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCheckRunsSource2$Outbound = {
    kind: "webhook";
    webhookId?: string | undefined;
};
/** @internal */
export declare const ListCheckRunsSource2$outboundSchema: z.ZodType<ListCheckRunsSource2$Outbound, z.ZodTypeDef, ListCheckRunsSource2>;
export declare function listCheckRunsSource2ToJSON(listCheckRunsSource2: ListCheckRunsSource2): string;
export declare function listCheckRunsSource2FromJSON(jsonString: string): SafeParseResult<ListCheckRunsSource2, SDKValidationError>;
/** @internal */
export declare const ListCheckRunsSource1$inboundSchema: z.ZodType<ListCheckRunsSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCheckRunsSource1$Outbound = {
    kind: "integration";
    integrationId: string;
    integrationConfigurationId: string;
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
};
/** @internal */
export declare const ListCheckRunsSource1$outboundSchema: z.ZodType<ListCheckRunsSource1$Outbound, z.ZodTypeDef, ListCheckRunsSource1>;
export declare function listCheckRunsSource1ToJSON(listCheckRunsSource1: ListCheckRunsSource1): string;
export declare function listCheckRunsSource1FromJSON(jsonString: string): SafeParseResult<ListCheckRunsSource1, SDKValidationError>;
/** @internal */
export declare const ListCheckRunsSource$inboundSchema: z.ZodType<ListCheckRunsSource, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCheckRunsSource$Outbound = ListCheckRunsSource1$Outbound | ListCheckRunsSource2$Outbound | ListCheckRunsSource3$Outbound;
/** @internal */
export declare const ListCheckRunsSource$outboundSchema: z.ZodType<ListCheckRunsSource$Outbound, z.ZodTypeDef, ListCheckRunsSource>;
export declare function listCheckRunsSourceToJSON(listCheckRunsSource: ListCheckRunsSource): string;
export declare function listCheckRunsSourceFromJSON(jsonString: string): SafeParseResult<ListCheckRunsSource, SDKValidationError>;
/** @internal */
export declare const ListCheckRunsRequires$inboundSchema: z.ZodNativeEnum<typeof ListCheckRunsRequires>;
/** @internal */
export declare const ListCheckRunsRequires$outboundSchema: z.ZodNativeEnum<typeof ListCheckRunsRequires>;
/** @internal */
export declare const ListCheckRunsBlocks$inboundSchema: z.ZodNativeEnum<typeof ListCheckRunsBlocks>;
/** @internal */
export declare const ListCheckRunsBlocks$outboundSchema: z.ZodNativeEnum<typeof ListCheckRunsBlocks>;
/** @internal */
export declare const ListCheckRunsStatus$inboundSchema: z.ZodNativeEnum<typeof ListCheckRunsStatus>;
/** @internal */
export declare const ListCheckRunsStatus$outboundSchema: z.ZodNativeEnum<typeof ListCheckRunsStatus>;
/** @internal */
export declare const ListCheckRunsConclusion$inboundSchema: z.ZodNativeEnum<typeof ListCheckRunsConclusion>;
/** @internal */
export declare const ListCheckRunsConclusion$outboundSchema: z.ZodNativeEnum<typeof ListCheckRunsConclusion>;
/** @internal */
export declare const Runs$inboundSchema: z.ZodType<Runs, z.ZodTypeDef, unknown>;
/** @internal */
export type Runs$Outbound = {
    id: string;
    name: string;
    checkId: string;
    ownerId: string;
    deploymentId: string;
    projectId?: string | undefined;
    source: ListCheckRunsSource1$Outbound | ListCheckRunsSource2$Outbound | ListCheckRunsSource3$Outbound;
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
export declare const Runs$outboundSchema: z.ZodType<Runs$Outbound, z.ZodTypeDef, Runs>;
export declare function runsToJSON(runs: Runs): string;
export declare function runsFromJSON(jsonString: string): SafeParseResult<Runs, SDKValidationError>;
/** @internal */
export declare const ListCheckRunsResponseBody$inboundSchema: z.ZodType<ListCheckRunsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCheckRunsResponseBody$Outbound = {
    runs: Array<Runs$Outbound>;
};
/** @internal */
export declare const ListCheckRunsResponseBody$outboundSchema: z.ZodType<ListCheckRunsResponseBody$Outbound, z.ZodTypeDef, ListCheckRunsResponseBody>;
export declare function listCheckRunsResponseBodyToJSON(listCheckRunsResponseBody: ListCheckRunsResponseBody): string;
export declare function listCheckRunsResponseBodyFromJSON(jsonString: string): SafeParseResult<ListCheckRunsResponseBody, SDKValidationError>;
//# sourceMappingURL=listcheckrunsop.d.ts.map