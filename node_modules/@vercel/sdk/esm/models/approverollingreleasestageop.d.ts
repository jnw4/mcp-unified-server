import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ApproveRollingReleaseStageRequestBody = {
    /**
     * The index of the stage to transition to
     */
    nextStageIndex: number;
    /**
     * The id of the canary deployment to approve for the next stage
     */
    canaryDeploymentId: string;
};
export type ApproveRollingReleaseStageRequest = {
    /**
     * Project ID or project name (URL-encoded)
     */
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: ApproveRollingReleaseStageRequestBody | undefined;
};
/**
 * The current state of the rolling release
 */
export declare const ApproveRollingReleaseStageState: {
    readonly Active: "ACTIVE";
    readonly Complete: "COMPLETE";
    readonly Aborted: "ABORTED";
};
/**
 * The current state of the rolling release
 */
export type ApproveRollingReleaseStageState = ClosedEnum<typeof ApproveRollingReleaseStageState>;
/**
 * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
 */
export declare const ApproveRollingReleaseStageReadyState: {
    readonly Building: "BUILDING";
    readonly Error: "ERROR";
    readonly Initializing: "INITIALIZING";
    readonly Queued: "QUEUED";
    readonly Ready: "READY";
    readonly Canceled: "CANCELED";
};
/**
 * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
 */
export type ApproveRollingReleaseStageReadyState = ClosedEnum<typeof ApproveRollingReleaseStageReadyState>;
/**
 * Where was the deployment created from
 */
export declare const ApproveRollingReleaseStageSource: {
    readonly Import: "import";
    readonly ApiTriggerGitDeploy: "api-trigger-git-deploy";
    readonly Cli: "cli";
    readonly CloneRepo: "clone/repo";
    readonly Git: "git";
    readonly ImportRepo: "import/repo";
    readonly Redeploy: "redeploy";
    readonly V0Web: "v0-web";
};
/**
 * Where was the deployment created from
 */
export type ApproveRollingReleaseStageSource = ClosedEnum<typeof ApproveRollingReleaseStageSource>;
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export declare const ApproveRollingReleaseStageTarget: {
    readonly Staging: "staging";
    readonly Production: "production";
};
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export type ApproveRollingReleaseStageTarget = ClosedEnum<typeof ApproveRollingReleaseStageTarget>;
/**
 * The current deployment receiving production traffic
 */
export type ApproveRollingReleaseStageCurrentDeployment = {
    /**
     * The name of the project associated with the deployment at the time that the deployment was created
     */
    name: string;
    /**
     * A number containing the date when the deployment was created in milliseconds
     */
    createdAt: number;
    /**
     * A string holding the unique ID of the deployment
     */
    id: string;
    /**
     * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
     */
    readyState: ApproveRollingReleaseStageReadyState;
    readyStateAt?: number | undefined;
    /**
     * Where was the deployment created from
     */
    source?: ApproveRollingReleaseStageSource | undefined;
    /**
     * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
     */
    target?: ApproveRollingReleaseStageTarget | null | undefined;
    /**
     * A string with the unique URL of the deployment
     */
    url: string;
};
/**
 * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
 */
export declare const ApproveRollingReleaseStageRollingReleaseReadyState: {
    readonly Building: "BUILDING";
    readonly Error: "ERROR";
    readonly Initializing: "INITIALIZING";
    readonly Queued: "QUEUED";
    readonly Ready: "READY";
    readonly Canceled: "CANCELED";
};
/**
 * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
 */
export type ApproveRollingReleaseStageRollingReleaseReadyState = ClosedEnum<typeof ApproveRollingReleaseStageRollingReleaseReadyState>;
/**
 * Where was the deployment created from
 */
export declare const ApproveRollingReleaseStageRollingReleaseSource: {
    readonly Import: "import";
    readonly ApiTriggerGitDeploy: "api-trigger-git-deploy";
    readonly Cli: "cli";
    readonly CloneRepo: "clone/repo";
    readonly Git: "git";
    readonly ImportRepo: "import/repo";
    readonly Redeploy: "redeploy";
    readonly V0Web: "v0-web";
};
/**
 * Where was the deployment created from
 */
export type ApproveRollingReleaseStageRollingReleaseSource = ClosedEnum<typeof ApproveRollingReleaseStageRollingReleaseSource>;
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export declare const ApproveRollingReleaseStageRollingReleaseTarget: {
    readonly Staging: "staging";
    readonly Production: "production";
};
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export type ApproveRollingReleaseStageRollingReleaseTarget = ClosedEnum<typeof ApproveRollingReleaseStageRollingReleaseTarget>;
/**
 * The canary deployment being rolled out
 */
export type ApproveRollingReleaseStageCanaryDeployment = {
    /**
     * The name of the project associated with the deployment at the time that the deployment was created
     */
    name: string;
    /**
     * A number containing the date when the deployment was created in milliseconds
     */
    createdAt: number;
    /**
     * A string holding the unique ID of the deployment
     */
    id: string;
    /**
     * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
     */
    readyState: ApproveRollingReleaseStageRollingReleaseReadyState;
    readyStateAt?: number | undefined;
    /**
     * Where was the deployment created from
     */
    source?: ApproveRollingReleaseStageRollingReleaseSource | undefined;
    /**
     * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
     */
    target?: ApproveRollingReleaseStageRollingReleaseTarget | null | undefined;
    /**
     * A string with the unique URL of the deployment
     */
    url: string;
};
/**
 * The advancement type of the rolling release
 */
export declare const ApproveRollingReleaseStageAdvancementType: {
    readonly Automatic: "automatic";
    readonly ManualApproval: "manual-approval";
};
/**
 * The advancement type of the rolling release
 */
export type ApproveRollingReleaseStageAdvancementType = ClosedEnum<typeof ApproveRollingReleaseStageAdvancementType>;
/**
 * All stages configured for this rolling release
 */
export type ApproveRollingReleaseStageStages = {
    /**
     * The zero-based index of the stage
     */
    index: number;
    /**
     * Whether or not this stage is the final stage (targetPercentage === 100)
     */
    isFinalStage: boolean;
    /**
     * The percentage of traffic to serve to the canary deployment (0-100)
     */
    targetPercentage: number;
    /**
     * Whether or not this stage requires manual approval to proceed
     */
    requireApproval: boolean;
    /**
     * Duration in seconds for automatic advancement, null for manual stages or the final stage
     */
    duration: number | null;
    /**
     * Whether to linearly shift traffic over the duration of this stage
     */
    linearShift?: boolean | undefined;
};
/**
 * The currently active stage, null if the rollout is aborted
 */
export type ApproveRollingReleaseStageActiveStage = {
    /**
     * The zero-based index of the stage
     */
    index: number;
    /**
     * Whether or not this stage is the final stage (targetPercentage === 100)
     */
    isFinalStage: boolean;
    /**
     * The percentage of traffic to serve to the canary deployment (0-100)
     */
    targetPercentage: number;
    /**
     * Whether or not this stage requires manual approval to proceed
     */
    requireApproval: boolean;
    /**
     * Duration in seconds for automatic advancement, null for manual stages or the final stage
     */
    duration: number | null;
    /**
     * Whether to linearly shift traffic over the duration of this stage
     */
    linearShift?: boolean | undefined;
};
/**
 * The next stage to be activated, null if not in ACTIVE state
 */
export type ApproveRollingReleaseStageNextStage = {
    /**
     * The zero-based index of the stage
     */
    index: number;
    /**
     * Whether or not this stage is the final stage (targetPercentage === 100)
     */
    isFinalStage: boolean;
    /**
     * The percentage of traffic to serve to the canary deployment (0-100)
     */
    targetPercentage: number;
    /**
     * Whether or not this stage requires manual approval to proceed
     */
    requireApproval: boolean;
    /**
     * Duration in seconds for automatic advancement, null for manual stages or the final stage
     */
    duration: number | null;
    /**
     * Whether to linearly shift traffic over the duration of this stage
     */
    linearShift?: boolean | undefined;
};
/**
 * Rolling release information including configuration and document details, or null if no rolling release exists
 */
export type ApproveRollingReleaseStageRollingRelease = {
    /**
     * The current state of the rolling release
     */
    state: ApproveRollingReleaseStageState;
    /**
     * The current deployment receiving production traffic
     */
    currentDeployment: ApproveRollingReleaseStageCurrentDeployment | null;
    /**
     * The canary deployment being rolled out
     */
    canaryDeployment: ApproveRollingReleaseStageCanaryDeployment | null;
    /**
     * The ID of a deployment queued for the next rolling release
     */
    queuedDeploymentId: string | null;
    /**
     * The advancement type of the rolling release
     */
    advancementType: ApproveRollingReleaseStageAdvancementType;
    /**
     * All stages configured for this rolling release
     */
    stages: Array<ApproveRollingReleaseStageStages>;
    /**
     * The currently active stage, null if the rollout is aborted
     */
    activeStage: ApproveRollingReleaseStageActiveStage | null;
    /**
     * The next stage to be activated, null if not in ACTIVE state
     */
    nextStage: ApproveRollingReleaseStageNextStage | null;
    /**
     * Unix timestamp in milliseconds when the rolling release started
     */
    startedAt: number;
    /**
     * Unix timestamp in milliseconds when the rolling release was last updated
     */
    updatedAt: number;
};
/**
 * The response format for rolling release endpoints that return rolling release information
 */
export type ApproveRollingReleaseStageResponseBody = {
    /**
     * Rolling release information including configuration and document details, or null if no rolling release exists
     */
    rollingRelease: ApproveRollingReleaseStageRollingRelease | null;
};
/** @internal */
export declare const ApproveRollingReleaseStageRequestBody$inboundSchema: z.ZodType<ApproveRollingReleaseStageRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ApproveRollingReleaseStageRequestBody$Outbound = {
    nextStageIndex: number;
    canaryDeploymentId: string;
};
/** @internal */
export declare const ApproveRollingReleaseStageRequestBody$outboundSchema: z.ZodType<ApproveRollingReleaseStageRequestBody$Outbound, z.ZodTypeDef, ApproveRollingReleaseStageRequestBody>;
export declare function approveRollingReleaseStageRequestBodyToJSON(approveRollingReleaseStageRequestBody: ApproveRollingReleaseStageRequestBody): string;
export declare function approveRollingReleaseStageRequestBodyFromJSON(jsonString: string): SafeParseResult<ApproveRollingReleaseStageRequestBody, SDKValidationError>;
/** @internal */
export declare const ApproveRollingReleaseStageRequest$inboundSchema: z.ZodType<ApproveRollingReleaseStageRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ApproveRollingReleaseStageRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: ApproveRollingReleaseStageRequestBody$Outbound | undefined;
};
/** @internal */
export declare const ApproveRollingReleaseStageRequest$outboundSchema: z.ZodType<ApproveRollingReleaseStageRequest$Outbound, z.ZodTypeDef, ApproveRollingReleaseStageRequest>;
export declare function approveRollingReleaseStageRequestToJSON(approveRollingReleaseStageRequest: ApproveRollingReleaseStageRequest): string;
export declare function approveRollingReleaseStageRequestFromJSON(jsonString: string): SafeParseResult<ApproveRollingReleaseStageRequest, SDKValidationError>;
/** @internal */
export declare const ApproveRollingReleaseStageState$inboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageState>;
/** @internal */
export declare const ApproveRollingReleaseStageState$outboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageState>;
/** @internal */
export declare const ApproveRollingReleaseStageReadyState$inboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageReadyState>;
/** @internal */
export declare const ApproveRollingReleaseStageReadyState$outboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageReadyState>;
/** @internal */
export declare const ApproveRollingReleaseStageSource$inboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageSource>;
/** @internal */
export declare const ApproveRollingReleaseStageSource$outboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageSource>;
/** @internal */
export declare const ApproveRollingReleaseStageTarget$inboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageTarget>;
/** @internal */
export declare const ApproveRollingReleaseStageTarget$outboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageTarget>;
/** @internal */
export declare const ApproveRollingReleaseStageCurrentDeployment$inboundSchema: z.ZodType<ApproveRollingReleaseStageCurrentDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type ApproveRollingReleaseStageCurrentDeployment$Outbound = {
    name: string;
    createdAt: number;
    id: string;
    readyState: string;
    readyStateAt?: number | undefined;
    source?: string | undefined;
    target?: string | null | undefined;
    url: string;
};
/** @internal */
export declare const ApproveRollingReleaseStageCurrentDeployment$outboundSchema: z.ZodType<ApproveRollingReleaseStageCurrentDeployment$Outbound, z.ZodTypeDef, ApproveRollingReleaseStageCurrentDeployment>;
export declare function approveRollingReleaseStageCurrentDeploymentToJSON(approveRollingReleaseStageCurrentDeployment: ApproveRollingReleaseStageCurrentDeployment): string;
export declare function approveRollingReleaseStageCurrentDeploymentFromJSON(jsonString: string): SafeParseResult<ApproveRollingReleaseStageCurrentDeployment, SDKValidationError>;
/** @internal */
export declare const ApproveRollingReleaseStageRollingReleaseReadyState$inboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageRollingReleaseReadyState>;
/** @internal */
export declare const ApproveRollingReleaseStageRollingReleaseReadyState$outboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageRollingReleaseReadyState>;
/** @internal */
export declare const ApproveRollingReleaseStageRollingReleaseSource$inboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageRollingReleaseSource>;
/** @internal */
export declare const ApproveRollingReleaseStageRollingReleaseSource$outboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageRollingReleaseSource>;
/** @internal */
export declare const ApproveRollingReleaseStageRollingReleaseTarget$inboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageRollingReleaseTarget>;
/** @internal */
export declare const ApproveRollingReleaseStageRollingReleaseTarget$outboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageRollingReleaseTarget>;
/** @internal */
export declare const ApproveRollingReleaseStageCanaryDeployment$inboundSchema: z.ZodType<ApproveRollingReleaseStageCanaryDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type ApproveRollingReleaseStageCanaryDeployment$Outbound = {
    name: string;
    createdAt: number;
    id: string;
    readyState: string;
    readyStateAt?: number | undefined;
    source?: string | undefined;
    target?: string | null | undefined;
    url: string;
};
/** @internal */
export declare const ApproveRollingReleaseStageCanaryDeployment$outboundSchema: z.ZodType<ApproveRollingReleaseStageCanaryDeployment$Outbound, z.ZodTypeDef, ApproveRollingReleaseStageCanaryDeployment>;
export declare function approveRollingReleaseStageCanaryDeploymentToJSON(approveRollingReleaseStageCanaryDeployment: ApproveRollingReleaseStageCanaryDeployment): string;
export declare function approveRollingReleaseStageCanaryDeploymentFromJSON(jsonString: string): SafeParseResult<ApproveRollingReleaseStageCanaryDeployment, SDKValidationError>;
/** @internal */
export declare const ApproveRollingReleaseStageAdvancementType$inboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageAdvancementType>;
/** @internal */
export declare const ApproveRollingReleaseStageAdvancementType$outboundSchema: z.ZodNativeEnum<typeof ApproveRollingReleaseStageAdvancementType>;
/** @internal */
export declare const ApproveRollingReleaseStageStages$inboundSchema: z.ZodType<ApproveRollingReleaseStageStages, z.ZodTypeDef, unknown>;
/** @internal */
export type ApproveRollingReleaseStageStages$Outbound = {
    index: number;
    isFinalStage: boolean;
    targetPercentage: number;
    requireApproval: boolean;
    duration: number | null;
    linearShift?: boolean | undefined;
};
/** @internal */
export declare const ApproveRollingReleaseStageStages$outboundSchema: z.ZodType<ApproveRollingReleaseStageStages$Outbound, z.ZodTypeDef, ApproveRollingReleaseStageStages>;
export declare function approveRollingReleaseStageStagesToJSON(approveRollingReleaseStageStages: ApproveRollingReleaseStageStages): string;
export declare function approveRollingReleaseStageStagesFromJSON(jsonString: string): SafeParseResult<ApproveRollingReleaseStageStages, SDKValidationError>;
/** @internal */
export declare const ApproveRollingReleaseStageActiveStage$inboundSchema: z.ZodType<ApproveRollingReleaseStageActiveStage, z.ZodTypeDef, unknown>;
/** @internal */
export type ApproveRollingReleaseStageActiveStage$Outbound = {
    index: number;
    isFinalStage: boolean;
    targetPercentage: number;
    requireApproval: boolean;
    duration: number | null;
    linearShift?: boolean | undefined;
};
/** @internal */
export declare const ApproveRollingReleaseStageActiveStage$outboundSchema: z.ZodType<ApproveRollingReleaseStageActiveStage$Outbound, z.ZodTypeDef, ApproveRollingReleaseStageActiveStage>;
export declare function approveRollingReleaseStageActiveStageToJSON(approveRollingReleaseStageActiveStage: ApproveRollingReleaseStageActiveStage): string;
export declare function approveRollingReleaseStageActiveStageFromJSON(jsonString: string): SafeParseResult<ApproveRollingReleaseStageActiveStage, SDKValidationError>;
/** @internal */
export declare const ApproveRollingReleaseStageNextStage$inboundSchema: z.ZodType<ApproveRollingReleaseStageNextStage, z.ZodTypeDef, unknown>;
/** @internal */
export type ApproveRollingReleaseStageNextStage$Outbound = {
    index: number;
    isFinalStage: boolean;
    targetPercentage: number;
    requireApproval: boolean;
    duration: number | null;
    linearShift?: boolean | undefined;
};
/** @internal */
export declare const ApproveRollingReleaseStageNextStage$outboundSchema: z.ZodType<ApproveRollingReleaseStageNextStage$Outbound, z.ZodTypeDef, ApproveRollingReleaseStageNextStage>;
export declare function approveRollingReleaseStageNextStageToJSON(approveRollingReleaseStageNextStage: ApproveRollingReleaseStageNextStage): string;
export declare function approveRollingReleaseStageNextStageFromJSON(jsonString: string): SafeParseResult<ApproveRollingReleaseStageNextStage, SDKValidationError>;
/** @internal */
export declare const ApproveRollingReleaseStageRollingRelease$inboundSchema: z.ZodType<ApproveRollingReleaseStageRollingRelease, z.ZodTypeDef, unknown>;
/** @internal */
export type ApproveRollingReleaseStageRollingRelease$Outbound = {
    state: string;
    currentDeployment: ApproveRollingReleaseStageCurrentDeployment$Outbound | null;
    canaryDeployment: ApproveRollingReleaseStageCanaryDeployment$Outbound | null;
    queuedDeploymentId: string | null;
    advancementType: string;
    stages: Array<ApproveRollingReleaseStageStages$Outbound>;
    activeStage: ApproveRollingReleaseStageActiveStage$Outbound | null;
    nextStage: ApproveRollingReleaseStageNextStage$Outbound | null;
    startedAt: number;
    updatedAt: number;
};
/** @internal */
export declare const ApproveRollingReleaseStageRollingRelease$outboundSchema: z.ZodType<ApproveRollingReleaseStageRollingRelease$Outbound, z.ZodTypeDef, ApproveRollingReleaseStageRollingRelease>;
export declare function approveRollingReleaseStageRollingReleaseToJSON(approveRollingReleaseStageRollingRelease: ApproveRollingReleaseStageRollingRelease): string;
export declare function approveRollingReleaseStageRollingReleaseFromJSON(jsonString: string): SafeParseResult<ApproveRollingReleaseStageRollingRelease, SDKValidationError>;
/** @internal */
export declare const ApproveRollingReleaseStageResponseBody$inboundSchema: z.ZodType<ApproveRollingReleaseStageResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ApproveRollingReleaseStageResponseBody$Outbound = {
    rollingRelease: ApproveRollingReleaseStageRollingRelease$Outbound | null;
};
/** @internal */
export declare const ApproveRollingReleaseStageResponseBody$outboundSchema: z.ZodType<ApproveRollingReleaseStageResponseBody$Outbound, z.ZodTypeDef, ApproveRollingReleaseStageResponseBody>;
export declare function approveRollingReleaseStageResponseBodyToJSON(approveRollingReleaseStageResponseBody: ApproveRollingReleaseStageResponseBody): string;
export declare function approveRollingReleaseStageResponseBodyFromJSON(jsonString: string): SafeParseResult<ApproveRollingReleaseStageResponseBody, SDKValidationError>;
//# sourceMappingURL=approverollingreleasestageop.d.ts.map