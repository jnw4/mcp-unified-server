import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Filter by rolling release state
 */
export declare const GetRollingReleaseQueryParamState: {
    readonly Active: "ACTIVE";
    readonly Complete: "COMPLETE";
    readonly Aborted: "ABORTED";
};
/**
 * Filter by rolling release state
 */
export type GetRollingReleaseQueryParamState = ClosedEnum<typeof GetRollingReleaseQueryParamState>;
export type GetRollingReleaseRequest = {
    /**
     * Project ID or project name (URL-encoded)
     */
    idOrName: string;
    /**
     * Filter by rolling release state
     */
    state?: GetRollingReleaseQueryParamState | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/**
 * The current state of the rolling release
 */
export declare const GetRollingReleaseState: {
    readonly Active: "ACTIVE";
    readonly Complete: "COMPLETE";
    readonly Aborted: "ABORTED";
};
/**
 * The current state of the rolling release
 */
export type GetRollingReleaseState = ClosedEnum<typeof GetRollingReleaseState>;
/**
 * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
 */
export declare const GetRollingReleaseReadyState: {
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
export type GetRollingReleaseReadyState = ClosedEnum<typeof GetRollingReleaseReadyState>;
/**
 * Where was the deployment created from
 */
export declare const GetRollingReleaseSource: {
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
export type GetRollingReleaseSource = ClosedEnum<typeof GetRollingReleaseSource>;
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export declare const GetRollingReleaseTarget: {
    readonly Staging: "staging";
    readonly Production: "production";
};
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export type GetRollingReleaseTarget = ClosedEnum<typeof GetRollingReleaseTarget>;
/**
 * The current deployment receiving production traffic
 */
export type CurrentDeployment = {
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
    readyState: GetRollingReleaseReadyState;
    readyStateAt?: number | undefined;
    /**
     * Where was the deployment created from
     */
    source?: GetRollingReleaseSource | undefined;
    /**
     * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
     */
    target?: GetRollingReleaseTarget | null | undefined;
    /**
     * A string with the unique URL of the deployment
     */
    url: string;
};
/**
 * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
 */
export declare const GetRollingReleaseRollingReleaseReadyState: {
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
export type GetRollingReleaseRollingReleaseReadyState = ClosedEnum<typeof GetRollingReleaseRollingReleaseReadyState>;
/**
 * Where was the deployment created from
 */
export declare const GetRollingReleaseRollingReleaseSource: {
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
export type GetRollingReleaseRollingReleaseSource = ClosedEnum<typeof GetRollingReleaseRollingReleaseSource>;
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export declare const GetRollingReleaseRollingReleaseTarget: {
    readonly Staging: "staging";
    readonly Production: "production";
};
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export type GetRollingReleaseRollingReleaseTarget = ClosedEnum<typeof GetRollingReleaseRollingReleaseTarget>;
/**
 * The canary deployment being rolled out
 */
export type CanaryDeployment = {
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
    readyState: GetRollingReleaseRollingReleaseReadyState;
    readyStateAt?: number | undefined;
    /**
     * Where was the deployment created from
     */
    source?: GetRollingReleaseRollingReleaseSource | undefined;
    /**
     * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
     */
    target?: GetRollingReleaseRollingReleaseTarget | null | undefined;
    /**
     * A string with the unique URL of the deployment
     */
    url: string;
};
/**
 * The advancement type of the rolling release
 */
export declare const AdvancementType: {
    readonly Automatic: "automatic";
    readonly ManualApproval: "manual-approval";
};
/**
 * The advancement type of the rolling release
 */
export type AdvancementType = ClosedEnum<typeof AdvancementType>;
/**
 * All stages configured for this rolling release
 */
export type GetRollingReleaseStages = {
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
export type ActiveStage = {
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
export type NextStage = {
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
export type GetRollingReleaseRollingRelease = {
    /**
     * The current state of the rolling release
     */
    state: GetRollingReleaseState;
    /**
     * The current deployment receiving production traffic
     */
    currentDeployment: CurrentDeployment | null;
    /**
     * The canary deployment being rolled out
     */
    canaryDeployment: CanaryDeployment | null;
    /**
     * The ID of a deployment queued for the next rolling release
     */
    queuedDeploymentId: string | null;
    /**
     * The advancement type of the rolling release
     */
    advancementType: AdvancementType;
    /**
     * All stages configured for this rolling release
     */
    stages: Array<GetRollingReleaseStages>;
    /**
     * The currently active stage, null if the rollout is aborted
     */
    activeStage: ActiveStage | null;
    /**
     * The next stage to be activated, null if not in ACTIVE state
     */
    nextStage: NextStage | null;
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
export type GetRollingReleaseResponseBody = {
    /**
     * Rolling release information including configuration and document details, or null if no rolling release exists
     */
    rollingRelease: GetRollingReleaseRollingRelease | null;
};
/** @internal */
export declare const GetRollingReleaseQueryParamState$inboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseQueryParamState>;
/** @internal */
export declare const GetRollingReleaseQueryParamState$outboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseQueryParamState>;
/** @internal */
export declare const GetRollingReleaseRequest$inboundSchema: z.ZodType<GetRollingReleaseRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseRequest$Outbound = {
    idOrName: string;
    state?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetRollingReleaseRequest$outboundSchema: z.ZodType<GetRollingReleaseRequest$Outbound, z.ZodTypeDef, GetRollingReleaseRequest>;
export declare function getRollingReleaseRequestToJSON(getRollingReleaseRequest: GetRollingReleaseRequest): string;
export declare function getRollingReleaseRequestFromJSON(jsonString: string): SafeParseResult<GetRollingReleaseRequest, SDKValidationError>;
/** @internal */
export declare const GetRollingReleaseState$inboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseState>;
/** @internal */
export declare const GetRollingReleaseState$outboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseState>;
/** @internal */
export declare const GetRollingReleaseReadyState$inboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseReadyState>;
/** @internal */
export declare const GetRollingReleaseReadyState$outboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseReadyState>;
/** @internal */
export declare const GetRollingReleaseSource$inboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseSource>;
/** @internal */
export declare const GetRollingReleaseSource$outboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseSource>;
/** @internal */
export declare const GetRollingReleaseTarget$inboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseTarget>;
/** @internal */
export declare const GetRollingReleaseTarget$outboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseTarget>;
/** @internal */
export declare const CurrentDeployment$inboundSchema: z.ZodType<CurrentDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type CurrentDeployment$Outbound = {
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
export declare const CurrentDeployment$outboundSchema: z.ZodType<CurrentDeployment$Outbound, z.ZodTypeDef, CurrentDeployment>;
export declare function currentDeploymentToJSON(currentDeployment: CurrentDeployment): string;
export declare function currentDeploymentFromJSON(jsonString: string): SafeParseResult<CurrentDeployment, SDKValidationError>;
/** @internal */
export declare const GetRollingReleaseRollingReleaseReadyState$inboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseRollingReleaseReadyState>;
/** @internal */
export declare const GetRollingReleaseRollingReleaseReadyState$outboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseRollingReleaseReadyState>;
/** @internal */
export declare const GetRollingReleaseRollingReleaseSource$inboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseRollingReleaseSource>;
/** @internal */
export declare const GetRollingReleaseRollingReleaseSource$outboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseRollingReleaseSource>;
/** @internal */
export declare const GetRollingReleaseRollingReleaseTarget$inboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseRollingReleaseTarget>;
/** @internal */
export declare const GetRollingReleaseRollingReleaseTarget$outboundSchema: z.ZodNativeEnum<typeof GetRollingReleaseRollingReleaseTarget>;
/** @internal */
export declare const CanaryDeployment$inboundSchema: z.ZodType<CanaryDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type CanaryDeployment$Outbound = {
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
export declare const CanaryDeployment$outboundSchema: z.ZodType<CanaryDeployment$Outbound, z.ZodTypeDef, CanaryDeployment>;
export declare function canaryDeploymentToJSON(canaryDeployment: CanaryDeployment): string;
export declare function canaryDeploymentFromJSON(jsonString: string): SafeParseResult<CanaryDeployment, SDKValidationError>;
/** @internal */
export declare const AdvancementType$inboundSchema: z.ZodNativeEnum<typeof AdvancementType>;
/** @internal */
export declare const AdvancementType$outboundSchema: z.ZodNativeEnum<typeof AdvancementType>;
/** @internal */
export declare const GetRollingReleaseStages$inboundSchema: z.ZodType<GetRollingReleaseStages, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseStages$Outbound = {
    index: number;
    isFinalStage: boolean;
    targetPercentage: number;
    requireApproval: boolean;
    duration: number | null;
    linearShift?: boolean | undefined;
};
/** @internal */
export declare const GetRollingReleaseStages$outboundSchema: z.ZodType<GetRollingReleaseStages$Outbound, z.ZodTypeDef, GetRollingReleaseStages>;
export declare function getRollingReleaseStagesToJSON(getRollingReleaseStages: GetRollingReleaseStages): string;
export declare function getRollingReleaseStagesFromJSON(jsonString: string): SafeParseResult<GetRollingReleaseStages, SDKValidationError>;
/** @internal */
export declare const ActiveStage$inboundSchema: z.ZodType<ActiveStage, z.ZodTypeDef, unknown>;
/** @internal */
export type ActiveStage$Outbound = {
    index: number;
    isFinalStage: boolean;
    targetPercentage: number;
    requireApproval: boolean;
    duration: number | null;
    linearShift?: boolean | undefined;
};
/** @internal */
export declare const ActiveStage$outboundSchema: z.ZodType<ActiveStage$Outbound, z.ZodTypeDef, ActiveStage>;
export declare function activeStageToJSON(activeStage: ActiveStage): string;
export declare function activeStageFromJSON(jsonString: string): SafeParseResult<ActiveStage, SDKValidationError>;
/** @internal */
export declare const NextStage$inboundSchema: z.ZodType<NextStage, z.ZodTypeDef, unknown>;
/** @internal */
export type NextStage$Outbound = {
    index: number;
    isFinalStage: boolean;
    targetPercentage: number;
    requireApproval: boolean;
    duration: number | null;
    linearShift?: boolean | undefined;
};
/** @internal */
export declare const NextStage$outboundSchema: z.ZodType<NextStage$Outbound, z.ZodTypeDef, NextStage>;
export declare function nextStageToJSON(nextStage: NextStage): string;
export declare function nextStageFromJSON(jsonString: string): SafeParseResult<NextStage, SDKValidationError>;
/** @internal */
export declare const GetRollingReleaseRollingRelease$inboundSchema: z.ZodType<GetRollingReleaseRollingRelease, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseRollingRelease$Outbound = {
    state: string;
    currentDeployment: CurrentDeployment$Outbound | null;
    canaryDeployment: CanaryDeployment$Outbound | null;
    queuedDeploymentId: string | null;
    advancementType: string;
    stages: Array<GetRollingReleaseStages$Outbound>;
    activeStage: ActiveStage$Outbound | null;
    nextStage: NextStage$Outbound | null;
    startedAt: number;
    updatedAt: number;
};
/** @internal */
export declare const GetRollingReleaseRollingRelease$outboundSchema: z.ZodType<GetRollingReleaseRollingRelease$Outbound, z.ZodTypeDef, GetRollingReleaseRollingRelease>;
export declare function getRollingReleaseRollingReleaseToJSON(getRollingReleaseRollingRelease: GetRollingReleaseRollingRelease): string;
export declare function getRollingReleaseRollingReleaseFromJSON(jsonString: string): SafeParseResult<GetRollingReleaseRollingRelease, SDKValidationError>;
/** @internal */
export declare const GetRollingReleaseResponseBody$inboundSchema: z.ZodType<GetRollingReleaseResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseResponseBody$Outbound = {
    rollingRelease: GetRollingReleaseRollingRelease$Outbound | null;
};
/** @internal */
export declare const GetRollingReleaseResponseBody$outboundSchema: z.ZodType<GetRollingReleaseResponseBody$Outbound, z.ZodTypeDef, GetRollingReleaseResponseBody>;
export declare function getRollingReleaseResponseBodyToJSON(getRollingReleaseResponseBody: GetRollingReleaseResponseBody): string;
export declare function getRollingReleaseResponseBodyFromJSON(jsonString: string): SafeParseResult<GetRollingReleaseResponseBody, SDKValidationError>;
//# sourceMappingURL=getrollingreleaseop.d.ts.map