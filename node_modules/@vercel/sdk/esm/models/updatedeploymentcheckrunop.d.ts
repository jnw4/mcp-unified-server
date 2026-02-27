import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const UpdateDeploymentCheckRunStatus: {
    readonly Queued: "queued";
    readonly Running: "running";
    readonly Completed: "completed";
};
export type UpdateDeploymentCheckRunStatus = ClosedEnum<typeof UpdateDeploymentCheckRunStatus>;
export type Output = {};
export declare const Conclusion: {
    readonly Canceled: "canceled";
    readonly Skipped: "skipped";
    readonly Timeout: "timeout";
    readonly Failed: "failed";
    readonly Neutral: "neutral";
    readonly Succeeded: "succeeded";
};
export type Conclusion = ClosedEnum<typeof Conclusion>;
export type UpdateDeploymentCheckRunRequestBody = {
    externalId?: string | undefined;
    externalUrl?: string | undefined;
    status?: UpdateDeploymentCheckRunStatus | undefined;
    output?: Output | undefined;
    completedAt?: number | undefined;
    conclusion?: Conclusion | undefined;
    conclusionText?: string | undefined;
};
export type UpdateDeploymentCheckRunRequest = {
    deploymentId: string;
    checkRunId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UpdateDeploymentCheckRunRequestBody | undefined;
};
export declare const UpdateDeploymentCheckRunSourceProvider: {
    readonly Github: "github";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type UpdateDeploymentCheckRunSourceProvider = ClosedEnum<typeof UpdateDeploymentCheckRunSourceProvider>;
export type UpdateDeploymentCheckRunSource3 = {
    kind: "git-provider";
    provider: UpdateDeploymentCheckRunSourceProvider;
    externalCheckName: string;
};
export type UpdateDeploymentCheckRunSource2 = {
    kind: "webhook";
    webhookId?: string | undefined;
};
export type UpdateDeploymentCheckRunSource1 = {
    kind: "integration";
    integrationId: string;
    integrationConfigurationId: string;
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
};
export type UpdateDeploymentCheckRunSource = UpdateDeploymentCheckRunSource1 | UpdateDeploymentCheckRunSource2 | UpdateDeploymentCheckRunSource3;
export declare const UpdateDeploymentCheckRunRequires: {
    readonly BuildReady: "build-ready";
    readonly DeploymentUrl: "deployment-url";
    readonly None: "none";
};
export type UpdateDeploymentCheckRunRequires = ClosedEnum<typeof UpdateDeploymentCheckRunRequires>;
export declare const UpdateDeploymentCheckRunBlocks: {
    readonly None: "none";
    readonly BuildStart: "build-start";
    readonly DeploymentStart: "deployment-start";
    readonly DeploymentAlias: "deployment-alias";
    readonly DeploymentPromotion: "deployment-promotion";
};
export type UpdateDeploymentCheckRunBlocks = ClosedEnum<typeof UpdateDeploymentCheckRunBlocks>;
export declare const UpdateDeploymentCheckRunChecksV2Status: {
    readonly Queued: "queued";
    readonly Running: "running";
    readonly Completed: "completed";
};
export type UpdateDeploymentCheckRunChecksV2Status = ClosedEnum<typeof UpdateDeploymentCheckRunChecksV2Status>;
export declare const UpdateDeploymentCheckRunConclusion: {
    readonly Timeout: "timeout";
    readonly Canceled: "canceled";
    readonly Skipped: "skipped";
    readonly Failed: "failed";
    readonly Neutral: "neutral";
    readonly Succeeded: "succeeded";
};
export type UpdateDeploymentCheckRunConclusion = ClosedEnum<typeof UpdateDeploymentCheckRunConclusion>;
export type UpdateDeploymentCheckRunResponseBody = {
    id: string;
    name: string;
    checkId: string;
    ownerId: string;
    deploymentId: string;
    projectId?: string | undefined;
    source: UpdateDeploymentCheckRunSource1 | UpdateDeploymentCheckRunSource2 | UpdateDeploymentCheckRunSource3;
    requires?: UpdateDeploymentCheckRunRequires | undefined;
    blocks?: UpdateDeploymentCheckRunBlocks | undefined;
    targets?: Array<string> | undefined;
    status: UpdateDeploymentCheckRunChecksV2Status;
    conclusion?: UpdateDeploymentCheckRunConclusion | undefined;
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
export declare const UpdateDeploymentCheckRunStatus$inboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunStatus>;
/** @internal */
export declare const UpdateDeploymentCheckRunStatus$outboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunStatus>;
/** @internal */
export declare const Output$inboundSchema: z.ZodType<Output, z.ZodTypeDef, unknown>;
/** @internal */
export type Output$Outbound = {};
/** @internal */
export declare const Output$outboundSchema: z.ZodType<Output$Outbound, z.ZodTypeDef, Output>;
export declare function outputToJSON(output: Output): string;
export declare function outputFromJSON(jsonString: string): SafeParseResult<Output, SDKValidationError>;
/** @internal */
export declare const Conclusion$inboundSchema: z.ZodNativeEnum<typeof Conclusion>;
/** @internal */
export declare const Conclusion$outboundSchema: z.ZodNativeEnum<typeof Conclusion>;
/** @internal */
export declare const UpdateDeploymentCheckRunRequestBody$inboundSchema: z.ZodType<UpdateDeploymentCheckRunRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDeploymentCheckRunRequestBody$Outbound = {
    externalId?: string | undefined;
    externalUrl?: string | undefined;
    status?: string | undefined;
    output?: Output$Outbound | undefined;
    completedAt?: number | undefined;
    conclusion?: string | undefined;
    conclusionText?: string | undefined;
};
/** @internal */
export declare const UpdateDeploymentCheckRunRequestBody$outboundSchema: z.ZodType<UpdateDeploymentCheckRunRequestBody$Outbound, z.ZodTypeDef, UpdateDeploymentCheckRunRequestBody>;
export declare function updateDeploymentCheckRunRequestBodyToJSON(updateDeploymentCheckRunRequestBody: UpdateDeploymentCheckRunRequestBody): string;
export declare function updateDeploymentCheckRunRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateDeploymentCheckRunRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateDeploymentCheckRunRequest$inboundSchema: z.ZodType<UpdateDeploymentCheckRunRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDeploymentCheckRunRequest$Outbound = {
    deploymentId: string;
    checkRunId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateDeploymentCheckRunRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateDeploymentCheckRunRequest$outboundSchema: z.ZodType<UpdateDeploymentCheckRunRequest$Outbound, z.ZodTypeDef, UpdateDeploymentCheckRunRequest>;
export declare function updateDeploymentCheckRunRequestToJSON(updateDeploymentCheckRunRequest: UpdateDeploymentCheckRunRequest): string;
export declare function updateDeploymentCheckRunRequestFromJSON(jsonString: string): SafeParseResult<UpdateDeploymentCheckRunRequest, SDKValidationError>;
/** @internal */
export declare const UpdateDeploymentCheckRunSourceProvider$inboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunSourceProvider>;
/** @internal */
export declare const UpdateDeploymentCheckRunSourceProvider$outboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunSourceProvider>;
/** @internal */
export declare const UpdateDeploymentCheckRunSource3$inboundSchema: z.ZodType<UpdateDeploymentCheckRunSource3, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDeploymentCheckRunSource3$Outbound = {
    kind: "git-provider";
    provider: string;
    externalCheckName: string;
};
/** @internal */
export declare const UpdateDeploymentCheckRunSource3$outboundSchema: z.ZodType<UpdateDeploymentCheckRunSource3$Outbound, z.ZodTypeDef, UpdateDeploymentCheckRunSource3>;
export declare function updateDeploymentCheckRunSource3ToJSON(updateDeploymentCheckRunSource3: UpdateDeploymentCheckRunSource3): string;
export declare function updateDeploymentCheckRunSource3FromJSON(jsonString: string): SafeParseResult<UpdateDeploymentCheckRunSource3, SDKValidationError>;
/** @internal */
export declare const UpdateDeploymentCheckRunSource2$inboundSchema: z.ZodType<UpdateDeploymentCheckRunSource2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDeploymentCheckRunSource2$Outbound = {
    kind: "webhook";
    webhookId?: string | undefined;
};
/** @internal */
export declare const UpdateDeploymentCheckRunSource2$outboundSchema: z.ZodType<UpdateDeploymentCheckRunSource2$Outbound, z.ZodTypeDef, UpdateDeploymentCheckRunSource2>;
export declare function updateDeploymentCheckRunSource2ToJSON(updateDeploymentCheckRunSource2: UpdateDeploymentCheckRunSource2): string;
export declare function updateDeploymentCheckRunSource2FromJSON(jsonString: string): SafeParseResult<UpdateDeploymentCheckRunSource2, SDKValidationError>;
/** @internal */
export declare const UpdateDeploymentCheckRunSource1$inboundSchema: z.ZodType<UpdateDeploymentCheckRunSource1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDeploymentCheckRunSource1$Outbound = {
    kind: "integration";
    integrationId: string;
    integrationConfigurationId: string;
    resourceId?: string | undefined;
    externalResourceId?: string | undefined;
};
/** @internal */
export declare const UpdateDeploymentCheckRunSource1$outboundSchema: z.ZodType<UpdateDeploymentCheckRunSource1$Outbound, z.ZodTypeDef, UpdateDeploymentCheckRunSource1>;
export declare function updateDeploymentCheckRunSource1ToJSON(updateDeploymentCheckRunSource1: UpdateDeploymentCheckRunSource1): string;
export declare function updateDeploymentCheckRunSource1FromJSON(jsonString: string): SafeParseResult<UpdateDeploymentCheckRunSource1, SDKValidationError>;
/** @internal */
export declare const UpdateDeploymentCheckRunSource$inboundSchema: z.ZodType<UpdateDeploymentCheckRunSource, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDeploymentCheckRunSource$Outbound = UpdateDeploymentCheckRunSource1$Outbound | UpdateDeploymentCheckRunSource2$Outbound | UpdateDeploymentCheckRunSource3$Outbound;
/** @internal */
export declare const UpdateDeploymentCheckRunSource$outboundSchema: z.ZodType<UpdateDeploymentCheckRunSource$Outbound, z.ZodTypeDef, UpdateDeploymentCheckRunSource>;
export declare function updateDeploymentCheckRunSourceToJSON(updateDeploymentCheckRunSource: UpdateDeploymentCheckRunSource): string;
export declare function updateDeploymentCheckRunSourceFromJSON(jsonString: string): SafeParseResult<UpdateDeploymentCheckRunSource, SDKValidationError>;
/** @internal */
export declare const UpdateDeploymentCheckRunRequires$inboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunRequires>;
/** @internal */
export declare const UpdateDeploymentCheckRunRequires$outboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunRequires>;
/** @internal */
export declare const UpdateDeploymentCheckRunBlocks$inboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunBlocks>;
/** @internal */
export declare const UpdateDeploymentCheckRunBlocks$outboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunBlocks>;
/** @internal */
export declare const UpdateDeploymentCheckRunChecksV2Status$inboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunChecksV2Status>;
/** @internal */
export declare const UpdateDeploymentCheckRunChecksV2Status$outboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunChecksV2Status>;
/** @internal */
export declare const UpdateDeploymentCheckRunConclusion$inboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunConclusion>;
/** @internal */
export declare const UpdateDeploymentCheckRunConclusion$outboundSchema: z.ZodNativeEnum<typeof UpdateDeploymentCheckRunConclusion>;
/** @internal */
export declare const UpdateDeploymentCheckRunResponseBody$inboundSchema: z.ZodType<UpdateDeploymentCheckRunResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDeploymentCheckRunResponseBody$Outbound = {
    id: string;
    name: string;
    checkId: string;
    ownerId: string;
    deploymentId: string;
    projectId?: string | undefined;
    source: UpdateDeploymentCheckRunSource1$Outbound | UpdateDeploymentCheckRunSource2$Outbound | UpdateDeploymentCheckRunSource3$Outbound;
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
export declare const UpdateDeploymentCheckRunResponseBody$outboundSchema: z.ZodType<UpdateDeploymentCheckRunResponseBody$Outbound, z.ZodTypeDef, UpdateDeploymentCheckRunResponseBody>;
export declare function updateDeploymentCheckRunResponseBodyToJSON(updateDeploymentCheckRunResponseBody: UpdateDeploymentCheckRunResponseBody): string;
export declare function updateDeploymentCheckRunResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateDeploymentCheckRunResponseBody, SDKValidationError>;
//# sourceMappingURL=updatedeploymentcheckrunop.d.ts.map