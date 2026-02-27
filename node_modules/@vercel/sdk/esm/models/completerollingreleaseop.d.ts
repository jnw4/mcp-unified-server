import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type CompleteRollingReleaseRequestBody = {
    /**
     * The ID of the canary deployment to complete
     */
    canaryDeploymentId: string;
};
export type CompleteRollingReleaseRequest = {
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
    requestBody?: CompleteRollingReleaseRequestBody | undefined;
};
/**
 * The current state of the rolling release
 */
export declare const CompleteRollingReleaseState: {
    readonly Active: "ACTIVE";
    readonly Complete: "COMPLETE";
    readonly Aborted: "ABORTED";
};
/**
 * The current state of the rolling release
 */
export type CompleteRollingReleaseState = ClosedEnum<typeof CompleteRollingReleaseState>;
/**
 * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
 */
export declare const CompleteRollingReleaseReadyState: {
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
export type CompleteRollingReleaseReadyState = ClosedEnum<typeof CompleteRollingReleaseReadyState>;
/**
 * Where was the deployment created from
 */
export declare const CompleteRollingReleaseSource: {
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
export type CompleteRollingReleaseSource = ClosedEnum<typeof CompleteRollingReleaseSource>;
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export declare const CompleteRollingReleaseTarget: {
    readonly Staging: "staging";
    readonly Production: "production";
};
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export type CompleteRollingReleaseTarget = ClosedEnum<typeof CompleteRollingReleaseTarget>;
/**
 * The current deployment receiving production traffic
 */
export type CompleteRollingReleaseCurrentDeployment = {
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
    readyState: CompleteRollingReleaseReadyState;
    readyStateAt?: number | undefined;
    /**
     * Where was the deployment created from
     */
    source?: CompleteRollingReleaseSource | undefined;
    /**
     * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
     */
    target?: CompleteRollingReleaseTarget | null | undefined;
    /**
     * A string with the unique URL of the deployment
     */
    url: string;
};
/**
 * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
 */
export declare const CompleteRollingReleaseRollingReleaseReadyState: {
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
export type CompleteRollingReleaseRollingReleaseReadyState = ClosedEnum<typeof CompleteRollingReleaseRollingReleaseReadyState>;
/**
 * Where was the deployment created from
 */
export declare const CompleteRollingReleaseRollingReleaseSource: {
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
export type CompleteRollingReleaseRollingReleaseSource = ClosedEnum<typeof CompleteRollingReleaseRollingReleaseSource>;
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export declare const CompleteRollingReleaseRollingReleaseTarget: {
    readonly Staging: "staging";
    readonly Production: "production";
};
/**
 * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
 */
export type CompleteRollingReleaseRollingReleaseTarget = ClosedEnum<typeof CompleteRollingReleaseRollingReleaseTarget>;
/**
 * The canary deployment being rolled out
 */
export type CompleteRollingReleaseCanaryDeployment = {
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
    readyState: CompleteRollingReleaseRollingReleaseReadyState;
    readyStateAt?: number | undefined;
    /**
     * Where was the deployment created from
     */
    source?: CompleteRollingReleaseRollingReleaseSource | undefined;
    /**
     * If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned. `null` value indicates the "preview" deployment.
     */
    target?: CompleteRollingReleaseRollingReleaseTarget | null | undefined;
    /**
     * A string with the unique URL of the deployment
     */
    url: string;
};
/**
 * The advancement type of the rolling release
 */
export declare const CompleteRollingReleaseAdvancementType: {
    readonly Automatic: "automatic";
    readonly ManualApproval: "manual-approval";
};
/**
 * The advancement type of the rolling release
 */
export type CompleteRollingReleaseAdvancementType = ClosedEnum<typeof CompleteRollingReleaseAdvancementType>;
/**
 * All stages configured for this rolling release
 */
export type CompleteRollingReleaseStages = {
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
export type CompleteRollingReleaseActiveStage = {
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
export type CompleteRollingReleaseNextStage = {
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
export type CompleteRollingReleaseRollingRelease = {
    /**
     * The current state of the rolling release
     */
    state: CompleteRollingReleaseState;
    /**
     * The current deployment receiving production traffic
     */
    currentDeployment: CompleteRollingReleaseCurrentDeployment | null;
    /**
     * The canary deployment being rolled out
     */
    canaryDeployment: CompleteRollingReleaseCanaryDeployment | null;
    /**
     * The ID of a deployment queued for the next rolling release
     */
    queuedDeploymentId: string | null;
    /**
     * The advancement type of the rolling release
     */
    advancementType: CompleteRollingReleaseAdvancementType;
    /**
     * All stages configured for this rolling release
     */
    stages: Array<CompleteRollingReleaseStages>;
    /**
     * The currently active stage, null if the rollout is aborted
     */
    activeStage: CompleteRollingReleaseActiveStage | null;
    /**
     * The next stage to be activated, null if not in ACTIVE state
     */
    nextStage: CompleteRollingReleaseNextStage | null;
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
export type CompleteRollingReleaseResponseBody = {
    /**
     * Rolling release information including configuration and document details, or null if no rolling release exists
     */
    rollingRelease: CompleteRollingReleaseRollingRelease | null;
};
/** @internal */
export declare const CompleteRollingReleaseRequestBody$inboundSchema: z.ZodType<CompleteRollingReleaseRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteRollingReleaseRequestBody$Outbound = {
    canaryDeploymentId: string;
};
/** @internal */
export declare const CompleteRollingReleaseRequestBody$outboundSchema: z.ZodType<CompleteRollingReleaseRequestBody$Outbound, z.ZodTypeDef, CompleteRollingReleaseRequestBody>;
export declare function completeRollingReleaseRequestBodyToJSON(completeRollingReleaseRequestBody: CompleteRollingReleaseRequestBody): string;
export declare function completeRollingReleaseRequestBodyFromJSON(jsonString: string): SafeParseResult<CompleteRollingReleaseRequestBody, SDKValidationError>;
/** @internal */
export declare const CompleteRollingReleaseRequest$inboundSchema: z.ZodType<CompleteRollingReleaseRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteRollingReleaseRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CompleteRollingReleaseRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CompleteRollingReleaseRequest$outboundSchema: z.ZodType<CompleteRollingReleaseRequest$Outbound, z.ZodTypeDef, CompleteRollingReleaseRequest>;
export declare function completeRollingReleaseRequestToJSON(completeRollingReleaseRequest: CompleteRollingReleaseRequest): string;
export declare function completeRollingReleaseRequestFromJSON(jsonString: string): SafeParseResult<CompleteRollingReleaseRequest, SDKValidationError>;
/** @internal */
export declare const CompleteRollingReleaseState$inboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseState>;
/** @internal */
export declare const CompleteRollingReleaseState$outboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseState>;
/** @internal */
export declare const CompleteRollingReleaseReadyState$inboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseReadyState>;
/** @internal */
export declare const CompleteRollingReleaseReadyState$outboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseReadyState>;
/** @internal */
export declare const CompleteRollingReleaseSource$inboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseSource>;
/** @internal */
export declare const CompleteRollingReleaseSource$outboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseSource>;
/** @internal */
export declare const CompleteRollingReleaseTarget$inboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseTarget>;
/** @internal */
export declare const CompleteRollingReleaseTarget$outboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseTarget>;
/** @internal */
export declare const CompleteRollingReleaseCurrentDeployment$inboundSchema: z.ZodType<CompleteRollingReleaseCurrentDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteRollingReleaseCurrentDeployment$Outbound = {
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
export declare const CompleteRollingReleaseCurrentDeployment$outboundSchema: z.ZodType<CompleteRollingReleaseCurrentDeployment$Outbound, z.ZodTypeDef, CompleteRollingReleaseCurrentDeployment>;
export declare function completeRollingReleaseCurrentDeploymentToJSON(completeRollingReleaseCurrentDeployment: CompleteRollingReleaseCurrentDeployment): string;
export declare function completeRollingReleaseCurrentDeploymentFromJSON(jsonString: string): SafeParseResult<CompleteRollingReleaseCurrentDeployment, SDKValidationError>;
/** @internal */
export declare const CompleteRollingReleaseRollingReleaseReadyState$inboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseRollingReleaseReadyState>;
/** @internal */
export declare const CompleteRollingReleaseRollingReleaseReadyState$outboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseRollingReleaseReadyState>;
/** @internal */
export declare const CompleteRollingReleaseRollingReleaseSource$inboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseRollingReleaseSource>;
/** @internal */
export declare const CompleteRollingReleaseRollingReleaseSource$outboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseRollingReleaseSource>;
/** @internal */
export declare const CompleteRollingReleaseRollingReleaseTarget$inboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseRollingReleaseTarget>;
/** @internal */
export declare const CompleteRollingReleaseRollingReleaseTarget$outboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseRollingReleaseTarget>;
/** @internal */
export declare const CompleteRollingReleaseCanaryDeployment$inboundSchema: z.ZodType<CompleteRollingReleaseCanaryDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteRollingReleaseCanaryDeployment$Outbound = {
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
export declare const CompleteRollingReleaseCanaryDeployment$outboundSchema: z.ZodType<CompleteRollingReleaseCanaryDeployment$Outbound, z.ZodTypeDef, CompleteRollingReleaseCanaryDeployment>;
export declare function completeRollingReleaseCanaryDeploymentToJSON(completeRollingReleaseCanaryDeployment: CompleteRollingReleaseCanaryDeployment): string;
export declare function completeRollingReleaseCanaryDeploymentFromJSON(jsonString: string): SafeParseResult<CompleteRollingReleaseCanaryDeployment, SDKValidationError>;
/** @internal */
export declare const CompleteRollingReleaseAdvancementType$inboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseAdvancementType>;
/** @internal */
export declare const CompleteRollingReleaseAdvancementType$outboundSchema: z.ZodNativeEnum<typeof CompleteRollingReleaseAdvancementType>;
/** @internal */
export declare const CompleteRollingReleaseStages$inboundSchema: z.ZodType<CompleteRollingReleaseStages, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteRollingReleaseStages$Outbound = {
    index: number;
    isFinalStage: boolean;
    targetPercentage: number;
    requireApproval: boolean;
    duration: number | null;
    linearShift?: boolean | undefined;
};
/** @internal */
export declare const CompleteRollingReleaseStages$outboundSchema: z.ZodType<CompleteRollingReleaseStages$Outbound, z.ZodTypeDef, CompleteRollingReleaseStages>;
export declare function completeRollingReleaseStagesToJSON(completeRollingReleaseStages: CompleteRollingReleaseStages): string;
export declare function completeRollingReleaseStagesFromJSON(jsonString: string): SafeParseResult<CompleteRollingReleaseStages, SDKValidationError>;
/** @internal */
export declare const CompleteRollingReleaseActiveStage$inboundSchema: z.ZodType<CompleteRollingReleaseActiveStage, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteRollingReleaseActiveStage$Outbound = {
    index: number;
    isFinalStage: boolean;
    targetPercentage: number;
    requireApproval: boolean;
    duration: number | null;
    linearShift?: boolean | undefined;
};
/** @internal */
export declare const CompleteRollingReleaseActiveStage$outboundSchema: z.ZodType<CompleteRollingReleaseActiveStage$Outbound, z.ZodTypeDef, CompleteRollingReleaseActiveStage>;
export declare function completeRollingReleaseActiveStageToJSON(completeRollingReleaseActiveStage: CompleteRollingReleaseActiveStage): string;
export declare function completeRollingReleaseActiveStageFromJSON(jsonString: string): SafeParseResult<CompleteRollingReleaseActiveStage, SDKValidationError>;
/** @internal */
export declare const CompleteRollingReleaseNextStage$inboundSchema: z.ZodType<CompleteRollingReleaseNextStage, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteRollingReleaseNextStage$Outbound = {
    index: number;
    isFinalStage: boolean;
    targetPercentage: number;
    requireApproval: boolean;
    duration: number | null;
    linearShift?: boolean | undefined;
};
/** @internal */
export declare const CompleteRollingReleaseNextStage$outboundSchema: z.ZodType<CompleteRollingReleaseNextStage$Outbound, z.ZodTypeDef, CompleteRollingReleaseNextStage>;
export declare function completeRollingReleaseNextStageToJSON(completeRollingReleaseNextStage: CompleteRollingReleaseNextStage): string;
export declare function completeRollingReleaseNextStageFromJSON(jsonString: string): SafeParseResult<CompleteRollingReleaseNextStage, SDKValidationError>;
/** @internal */
export declare const CompleteRollingReleaseRollingRelease$inboundSchema: z.ZodType<CompleteRollingReleaseRollingRelease, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteRollingReleaseRollingRelease$Outbound = {
    state: string;
    currentDeployment: CompleteRollingReleaseCurrentDeployment$Outbound | null;
    canaryDeployment: CompleteRollingReleaseCanaryDeployment$Outbound | null;
    queuedDeploymentId: string | null;
    advancementType: string;
    stages: Array<CompleteRollingReleaseStages$Outbound>;
    activeStage: CompleteRollingReleaseActiveStage$Outbound | null;
    nextStage: CompleteRollingReleaseNextStage$Outbound | null;
    startedAt: number;
    updatedAt: number;
};
/** @internal */
export declare const CompleteRollingReleaseRollingRelease$outboundSchema: z.ZodType<CompleteRollingReleaseRollingRelease$Outbound, z.ZodTypeDef, CompleteRollingReleaseRollingRelease>;
export declare function completeRollingReleaseRollingReleaseToJSON(completeRollingReleaseRollingRelease: CompleteRollingReleaseRollingRelease): string;
export declare function completeRollingReleaseRollingReleaseFromJSON(jsonString: string): SafeParseResult<CompleteRollingReleaseRollingRelease, SDKValidationError>;
/** @internal */
export declare const CompleteRollingReleaseResponseBody$inboundSchema: z.ZodType<CompleteRollingReleaseResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteRollingReleaseResponseBody$Outbound = {
    rollingRelease: CompleteRollingReleaseRollingRelease$Outbound | null;
};
/** @internal */
export declare const CompleteRollingReleaseResponseBody$outboundSchema: z.ZodType<CompleteRollingReleaseResponseBody$Outbound, z.ZodTypeDef, CompleteRollingReleaseResponseBody>;
export declare function completeRollingReleaseResponseBodyToJSON(completeRollingReleaseResponseBody: CompleteRollingReleaseResponseBody): string;
export declare function completeRollingReleaseResponseBodyFromJSON(jsonString: string): SafeParseResult<CompleteRollingReleaseResponseBody, SDKValidationError>;
//# sourceMappingURL=completerollingreleaseop.d.ts.map