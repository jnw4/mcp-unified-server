import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type CreateDeploymentCheckRunRequestBody = {
    checkId: string;
};
export type CreateDeploymentCheckRunRequest = {
    deploymentId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateDeploymentCheckRunRequestBody | undefined;
};
export declare const CreateDeploymentCheckRunSourceProvider: {
    readonly Github: "github";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type CreateDeploymentCheckRunSourceProvider = ClosedEnum<typeof CreateDeploymentCheckRunSourceProvider>;
export type CreateDeploymentCheckRunSource3 = {
    kind: "git-provider";
    provider: CreateDeploymentCheckRunSourceProvider;
    externalCheckName: string;
};
export type CreateDeploymentCheckRunSource2 = {
    kind: "webhook";
    webhookId?: string | undefined;
};
export type CreateDeploymentCheckRunSource1 = {
    kind: "integration";
    integrationId: string;
    integrationConfigurationId: string;
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
};
export type CreateDeploymentCheckRunSource = CreateDeploymentCheckRunSource1 | CreateDeploymentCheckRunSource2 | CreateDeploymentCheckRunSource3;
export declare const CreateDeploymentCheckRunRequires: {
    readonly BuildReady: "build-ready";
    readonly DeploymentUrl: "deployment-url";
    readonly None: "none";
};
export type CreateDeploymentCheckRunRequires = ClosedEnum<typeof CreateDeploymentCheckRunRequires>;
export declare const CreateDeploymentCheckRunBlocks: {
    readonly None: "none";
    readonly BuildStart: "build-start";
    readonly DeploymentStart: "deployment-start";
    readonly DeploymentAlias: "deployment-alias";
    readonly DeploymentPromotion: "deployment-promotion";
};
export type CreateDeploymentCheckRunBlocks = ClosedEnum<typeof CreateDeploymentCheckRunBlocks>;
export declare const CreateDeploymentCheckRunStatus: {
    readonly Queued: "queued";
    readonly Running: "running";
    readonly Completed: "completed";
};
export type CreateDeploymentCheckRunStatus = ClosedEnum<typeof CreateDeploymentCheckRunStatus>;
export declare const CreateDeploymentCheckRunConclusion: {
    readonly Timeout: "timeout";
    readonly Canceled: "canceled";
    readonly Skipped: "skipped";
    readonly Failed: "failed";
    readonly Neutral: "neutral";
    readonly Succeeded: "succeeded";
};
export type CreateDeploymentCheckRunConclusion = ClosedEnum<typeof CreateDeploymentCheckRunConclusion>;
export type CreateDeploymentCheckRunResponseBody = {
    id: string;
    name: string;
    checkId: string;
    ownerId: string;
    deploymentId: string;
    projectId?: string | undefined;
    source: CreateDeploymentCheckRunSource1 | CreateDeploymentCheckRunSource2 | CreateDeploymentCheckRunSource3;
    requires?: CreateDeploymentCheckRunRequires | undefined;
    blocks?: CreateDeploymentCheckRunBlocks | undefined;
    targets?: Array<string> | undefined;
    status: CreateDeploymentCheckRunStatus;
    conclusion?: CreateDeploymentCheckRunConclusion | undefined;
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
export declare const CreateDeploymentCheckRunRequestBody$inboundSchema: z.ZodType<CreateDeploymentCheckRunRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDeploymentCheckRunRequestBody$Outbound = {
    checkId: string;
};
/** @internal */
export declare const CreateDeploymentCheckRunRequestBody$outboundSchema: z.ZodType<CreateDeploymentCheckRunRequestBody$Outbound, z.ZodTypeDef, CreateDeploymentCheckRunRequestBody>;
export declare function createDeploymentCheckRunRequestBodyToJSON(createDeploymentCheckRunRequestBody: CreateDeploymentCheckRunRequestBody): string;
export declare function createDeploymentCheckRunRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateDeploymentCheckRunRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateDeploymentCheckRunRequest$inboundSchema: z.ZodType<CreateDeploymentCheckRunRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDeploymentCheckRunRequest$Outbound = {
    deploymentId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateDeploymentCheckRunRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CreateDeploymentCheckRunRequest$outboundSchema: z.ZodType<CreateDeploymentCheckRunRequest$Outbound, z.ZodTypeDef, CreateDeploymentCheckRunRequest>;
export declare function createDeploymentCheckRunRequestToJSON(createDeploymentCheckRunRequest: CreateDeploymentCheckRunRequest): string;
export declare function createDeploymentCheckRunRequestFromJSON(jsonString: string): SafeParseResult<CreateDeploymentCheckRunRequest, SDKValidationError>;
/** @internal */
export declare const CreateDeploymentCheckRunSourceProvider$inboundSchema: z.ZodNativeEnum<typeof CreateDeploymentCheckRunSourceProvider>;
/** @internal */
export declare const CreateDeploymentCheckRunSourceProvider$outboundSchema: z.ZodNativeEnum<typeof CreateDeploymentCheckRunSourceProvider>;
/** @internal */
export declare const CreateDeploymentCheckRunSource3$inboundSchema: z.ZodType<CreateDeploymentCheckRunSource3, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDeploymentCheckRunSource3$Outbound = {
    kind: "git-provider";
    provider: string;
    externalCheckName: string;
};
/** @internal */
export declare const CreateDeploymentCheckRunSource3$outboundSchema: z.ZodType<CreateDeploymentCheckRunSource3$Outbound, z.ZodTypeDef, CreateDeploymentCheckRunSource3>;
export declare function createDeploymentCheckRunSource3ToJSON(createDeploymentCheckRunSource3: CreateDeploymentCheckRunSource3): string;
export declare function createDeploymentCheckRunSource3FromJSON(jsonString: string): SafeParseResult<CreateDeploymentCheckRunSource3, SDKValidationError>;
/** @internal */
export declare const CreateDeploymentCheckRunSource2$inboundSchema: z.ZodType<CreateDeploymentCheckRunSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDeploymentCheckRunSource2$Outbound = {
    kind: "webhook";
    webhookId?: string | undefined;
};
/** @internal */
export declare const CreateDeploymentCheckRunSource2$outboundSchema: z.ZodType<CreateDeploymentCheckRunSource2$Outbound, z.ZodTypeDef, CreateDeploymentCheckRunSource2>;
export declare function createDeploymentCheckRunSource2ToJSON(createDeploymentCheckRunSource2: CreateDeploymentCheckRunSource2): string;
export declare function createDeploymentCheckRunSource2FromJSON(jsonString: string): SafeParseResult<CreateDeploymentCheckRunSource2, SDKValidationError>;
/** @internal */
export declare const CreateDeploymentCheckRunSource1$inboundSchema: z.ZodType<CreateDeploymentCheckRunSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDeploymentCheckRunSource1$Outbound = {
    kind: "integration";
    integrationId: string;
    integrationConfigurationId: string;
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
};
/** @internal */
export declare const CreateDeploymentCheckRunSource1$outboundSchema: z.ZodType<CreateDeploymentCheckRunSource1$Outbound, z.ZodTypeDef, CreateDeploymentCheckRunSource1>;
export declare function createDeploymentCheckRunSource1ToJSON(createDeploymentCheckRunSource1: CreateDeploymentCheckRunSource1): string;
export declare function createDeploymentCheckRunSource1FromJSON(jsonString: string): SafeParseResult<CreateDeploymentCheckRunSource1, SDKValidationError>;
/** @internal */
export declare const CreateDeploymentCheckRunSource$inboundSchema: z.ZodType<CreateDeploymentCheckRunSource, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDeploymentCheckRunSource$Outbound = CreateDeploymentCheckRunSource1$Outbound | CreateDeploymentCheckRunSource2$Outbound | CreateDeploymentCheckRunSource3$Outbound;
/** @internal */
export declare const CreateDeploymentCheckRunSource$outboundSchema: z.ZodType<CreateDeploymentCheckRunSource$Outbound, z.ZodTypeDef, CreateDeploymentCheckRunSource>;
export declare function createDeploymentCheckRunSourceToJSON(createDeploymentCheckRunSource: CreateDeploymentCheckRunSource): string;
export declare function createDeploymentCheckRunSourceFromJSON(jsonString: string): SafeParseResult<CreateDeploymentCheckRunSource, SDKValidationError>;
/** @internal */
export declare const CreateDeploymentCheckRunRequires$inboundSchema: z.ZodNativeEnum<typeof CreateDeploymentCheckRunRequires>;
/** @internal */
export declare const CreateDeploymentCheckRunRequires$outboundSchema: z.ZodNativeEnum<typeof CreateDeploymentCheckRunRequires>;
/** @internal */
export declare const CreateDeploymentCheckRunBlocks$inboundSchema: z.ZodNativeEnum<typeof CreateDeploymentCheckRunBlocks>;
/** @internal */
export declare const CreateDeploymentCheckRunBlocks$outboundSchema: z.ZodNativeEnum<typeof CreateDeploymentCheckRunBlocks>;
/** @internal */
export declare const CreateDeploymentCheckRunStatus$inboundSchema: z.ZodNativeEnum<typeof CreateDeploymentCheckRunStatus>;
/** @internal */
export declare const CreateDeploymentCheckRunStatus$outboundSchema: z.ZodNativeEnum<typeof CreateDeploymentCheckRunStatus>;
/** @internal */
export declare const CreateDeploymentCheckRunConclusion$inboundSchema: z.ZodNativeEnum<typeof CreateDeploymentCheckRunConclusion>;
/** @internal */
export declare const CreateDeploymentCheckRunConclusion$outboundSchema: z.ZodNativeEnum<typeof CreateDeploymentCheckRunConclusion>;
/** @internal */
export declare const CreateDeploymentCheckRunResponseBody$inboundSchema: z.ZodType<CreateDeploymentCheckRunResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDeploymentCheckRunResponseBody$Outbound = {
    id: string;
    name: string;
    checkId: string;
    ownerId: string;
    deploymentId: string;
    projectId?: string | undefined;
    source: CreateDeploymentCheckRunSource1$Outbound | CreateDeploymentCheckRunSource2$Outbound | CreateDeploymentCheckRunSource3$Outbound;
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
export declare const CreateDeploymentCheckRunResponseBody$outboundSchema: z.ZodType<CreateDeploymentCheckRunResponseBody$Outbound, z.ZodTypeDef, CreateDeploymentCheckRunResponseBody>;
export declare function createDeploymentCheckRunResponseBodyToJSON(createDeploymentCheckRunResponseBody: CreateDeploymentCheckRunResponseBody): string;
export declare function createDeploymentCheckRunResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateDeploymentCheckRunResponseBody, SDKValidationError>;
//# sourceMappingURL=createdeploymentcheckrunop.d.ts.map