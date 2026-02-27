import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetDeploymentCheckRunRequest = {
    deploymentId: string;
    /**
     * The ID of the resource that will be updated.
     */
    checkRunId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const GetDeploymentCheckRunSourceProvider: {
    readonly Github: "github";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type GetDeploymentCheckRunSourceProvider = ClosedEnum<typeof GetDeploymentCheckRunSourceProvider>;
export type GetDeploymentCheckRunSource3 = {
    kind: "git-provider";
    provider: GetDeploymentCheckRunSourceProvider;
    externalCheckName: string;
};
export type GetDeploymentCheckRunSource2 = {
    kind: "webhook";
    webhookId?: string | undefined;
};
export type GetDeploymentCheckRunSource1 = {
    kind: "integration";
    integrationId: string;
    integrationConfigurationId: string;
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
};
export type GetDeploymentCheckRunSource = GetDeploymentCheckRunSource1 | GetDeploymentCheckRunSource2 | GetDeploymentCheckRunSource3;
export declare const GetDeploymentCheckRunRequires: {
    readonly BuildReady: "build-ready";
    readonly DeploymentUrl: "deployment-url";
    readonly None: "none";
};
export type GetDeploymentCheckRunRequires = ClosedEnum<typeof GetDeploymentCheckRunRequires>;
export declare const GetDeploymentCheckRunBlocks: {
    readonly None: "none";
    readonly BuildStart: "build-start";
    readonly DeploymentStart: "deployment-start";
    readonly DeploymentAlias: "deployment-alias";
    readonly DeploymentPromotion: "deployment-promotion";
};
export type GetDeploymentCheckRunBlocks = ClosedEnum<typeof GetDeploymentCheckRunBlocks>;
export declare const GetDeploymentCheckRunStatus: {
    readonly Queued: "queued";
    readonly Running: "running";
    readonly Completed: "completed";
};
export type GetDeploymentCheckRunStatus = ClosedEnum<typeof GetDeploymentCheckRunStatus>;
export declare const GetDeploymentCheckRunConclusion: {
    readonly Timeout: "timeout";
    readonly Canceled: "canceled";
    readonly Skipped: "skipped";
    readonly Failed: "failed";
    readonly Neutral: "neutral";
    readonly Succeeded: "succeeded";
};
export type GetDeploymentCheckRunConclusion = ClosedEnum<typeof GetDeploymentCheckRunConclusion>;
export type GetDeploymentCheckRunResponseBody = {
    id: string;
    name: string;
    checkId: string;
    ownerId: string;
    deploymentId: string;
    projectId?: string | undefined;
    source: GetDeploymentCheckRunSource1 | GetDeploymentCheckRunSource2 | GetDeploymentCheckRunSource3;
    requires?: GetDeploymentCheckRunRequires | undefined;
    blocks?: GetDeploymentCheckRunBlocks | undefined;
    targets?: Array<string> | undefined;
    status: GetDeploymentCheckRunStatus;
    conclusion?: GetDeploymentCheckRunConclusion | undefined;
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
export declare const GetDeploymentCheckRunRequest$inboundSchema: z.ZodType<GetDeploymentCheckRunRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentCheckRunRequest$Outbound = {
    deploymentId: string;
    checkRunId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetDeploymentCheckRunRequest$outboundSchema: z.ZodType<GetDeploymentCheckRunRequest$Outbound, z.ZodTypeDef, GetDeploymentCheckRunRequest>;
export declare function getDeploymentCheckRunRequestToJSON(getDeploymentCheckRunRequest: GetDeploymentCheckRunRequest): string;
export declare function getDeploymentCheckRunRequestFromJSON(jsonString: string): SafeParseResult<GetDeploymentCheckRunRequest, SDKValidationError>;
/** @internal */
export declare const GetDeploymentCheckRunSourceProvider$inboundSchema: z.ZodNativeEnum<typeof GetDeploymentCheckRunSourceProvider>;
/** @internal */
export declare const GetDeploymentCheckRunSourceProvider$outboundSchema: z.ZodNativeEnum<typeof GetDeploymentCheckRunSourceProvider>;
/** @internal */
export declare const GetDeploymentCheckRunSource3$inboundSchema: z.ZodType<GetDeploymentCheckRunSource3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentCheckRunSource3$Outbound = {
    kind: "git-provider";
    provider: string;
    externalCheckName: string;
};
/** @internal */
export declare const GetDeploymentCheckRunSource3$outboundSchema: z.ZodType<GetDeploymentCheckRunSource3$Outbound, z.ZodTypeDef, GetDeploymentCheckRunSource3>;
export declare function getDeploymentCheckRunSource3ToJSON(getDeploymentCheckRunSource3: GetDeploymentCheckRunSource3): string;
export declare function getDeploymentCheckRunSource3FromJSON(jsonString: string): SafeParseResult<GetDeploymentCheckRunSource3, SDKValidationError>;
/** @internal */
export declare const GetDeploymentCheckRunSource2$inboundSchema: z.ZodType<GetDeploymentCheckRunSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentCheckRunSource2$Outbound = {
    kind: "webhook";
    webhookId?: string | undefined;
};
/** @internal */
export declare const GetDeploymentCheckRunSource2$outboundSchema: z.ZodType<GetDeploymentCheckRunSource2$Outbound, z.ZodTypeDef, GetDeploymentCheckRunSource2>;
export declare function getDeploymentCheckRunSource2ToJSON(getDeploymentCheckRunSource2: GetDeploymentCheckRunSource2): string;
export declare function getDeploymentCheckRunSource2FromJSON(jsonString: string): SafeParseResult<GetDeploymentCheckRunSource2, SDKValidationError>;
/** @internal */
export declare const GetDeploymentCheckRunSource1$inboundSchema: z.ZodType<GetDeploymentCheckRunSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentCheckRunSource1$Outbound = {
    kind: "integration";
    integrationId: string;
    integrationConfigurationId: string;
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
};
/** @internal */
export declare const GetDeploymentCheckRunSource1$outboundSchema: z.ZodType<GetDeploymentCheckRunSource1$Outbound, z.ZodTypeDef, GetDeploymentCheckRunSource1>;
export declare function getDeploymentCheckRunSource1ToJSON(getDeploymentCheckRunSource1: GetDeploymentCheckRunSource1): string;
export declare function getDeploymentCheckRunSource1FromJSON(jsonString: string): SafeParseResult<GetDeploymentCheckRunSource1, SDKValidationError>;
/** @internal */
export declare const GetDeploymentCheckRunSource$inboundSchema: z.ZodType<GetDeploymentCheckRunSource, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentCheckRunSource$Outbound = GetDeploymentCheckRunSource1$Outbound | GetDeploymentCheckRunSource2$Outbound | GetDeploymentCheckRunSource3$Outbound;
/** @internal */
export declare const GetDeploymentCheckRunSource$outboundSchema: z.ZodType<GetDeploymentCheckRunSource$Outbound, z.ZodTypeDef, GetDeploymentCheckRunSource>;
export declare function getDeploymentCheckRunSourceToJSON(getDeploymentCheckRunSource: GetDeploymentCheckRunSource): string;
export declare function getDeploymentCheckRunSourceFromJSON(jsonString: string): SafeParseResult<GetDeploymentCheckRunSource, SDKValidationError>;
/** @internal */
export declare const GetDeploymentCheckRunRequires$inboundSchema: z.ZodNativeEnum<typeof GetDeploymentCheckRunRequires>;
/** @internal */
export declare const GetDeploymentCheckRunRequires$outboundSchema: z.ZodNativeEnum<typeof GetDeploymentCheckRunRequires>;
/** @internal */
export declare const GetDeploymentCheckRunBlocks$inboundSchema: z.ZodNativeEnum<typeof GetDeploymentCheckRunBlocks>;
/** @internal */
export declare const GetDeploymentCheckRunBlocks$outboundSchema: z.ZodNativeEnum<typeof GetDeploymentCheckRunBlocks>;
/** @internal */
export declare const GetDeploymentCheckRunStatus$inboundSchema: z.ZodNativeEnum<typeof GetDeploymentCheckRunStatus>;
/** @internal */
export declare const GetDeploymentCheckRunStatus$outboundSchema: z.ZodNativeEnum<typeof GetDeploymentCheckRunStatus>;
/** @internal */
export declare const GetDeploymentCheckRunConclusion$inboundSchema: z.ZodNativeEnum<typeof GetDeploymentCheckRunConclusion>;
/** @internal */
export declare const GetDeploymentCheckRunConclusion$outboundSchema: z.ZodNativeEnum<typeof GetDeploymentCheckRunConclusion>;
/** @internal */
export declare const GetDeploymentCheckRunResponseBody$inboundSchema: z.ZodType<GetDeploymentCheckRunResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentCheckRunResponseBody$Outbound = {
    id: string;
    name: string;
    checkId: string;
    ownerId: string;
    deploymentId: string;
    projectId?: string | undefined;
    source: GetDeploymentCheckRunSource1$Outbound | GetDeploymentCheckRunSource2$Outbound | GetDeploymentCheckRunSource3$Outbound;
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
export declare const GetDeploymentCheckRunResponseBody$outboundSchema: z.ZodType<GetDeploymentCheckRunResponseBody$Outbound, z.ZodTypeDef, GetDeploymentCheckRunResponseBody>;
export declare function getDeploymentCheckRunResponseBodyToJSON(getDeploymentCheckRunResponseBody: GetDeploymentCheckRunResponseBody): string;
export declare function getDeploymentCheckRunResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDeploymentCheckRunResponseBody, SDKValidationError>;
//# sourceMappingURL=getdeploymentcheckrunop.d.ts.map