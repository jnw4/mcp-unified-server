import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetDeploymentFeatureFlagsRequest = {
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
export type GetDeploymentFeatureFlagsFlags = {};
export type GetDeploymentFeatureFlagsStatus = {
    deploymentId: string;
    projectId: string;
    /**
     * The HTTP status code from the flags discovery endpoint.
     */
    responseStatus: number;
    /**
     * The number of flag definitions returned by the flags discovery endpoint.
     */
    flagCount: number;
    createdAt: number;
};
export type GetDeploymentFeatureFlagsResponseBody = {
    flags: Array<GetDeploymentFeatureFlagsFlags>;
    status: GetDeploymentFeatureFlagsStatus | null;
};
/** @internal */
export declare const GetDeploymentFeatureFlagsRequest$inboundSchema: z.ZodType<GetDeploymentFeatureFlagsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentFeatureFlagsRequest$Outbound = {
    deploymentId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetDeploymentFeatureFlagsRequest$outboundSchema: z.ZodType<GetDeploymentFeatureFlagsRequest$Outbound, z.ZodTypeDef, GetDeploymentFeatureFlagsRequest>;
export declare function getDeploymentFeatureFlagsRequestToJSON(getDeploymentFeatureFlagsRequest: GetDeploymentFeatureFlagsRequest): string;
export declare function getDeploymentFeatureFlagsRequestFromJSON(jsonString: string): SafeParseResult<GetDeploymentFeatureFlagsRequest, SDKValidationError>;
/** @internal */
export declare const GetDeploymentFeatureFlagsFlags$inboundSchema: z.ZodType<GetDeploymentFeatureFlagsFlags, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentFeatureFlagsFlags$Outbound = {};
/** @internal */
export declare const GetDeploymentFeatureFlagsFlags$outboundSchema: z.ZodType<GetDeploymentFeatureFlagsFlags$Outbound, z.ZodTypeDef, GetDeploymentFeatureFlagsFlags>;
export declare function getDeploymentFeatureFlagsFlagsToJSON(getDeploymentFeatureFlagsFlags: GetDeploymentFeatureFlagsFlags): string;
export declare function getDeploymentFeatureFlagsFlagsFromJSON(jsonString: string): SafeParseResult<GetDeploymentFeatureFlagsFlags, SDKValidationError>;
/** @internal */
export declare const GetDeploymentFeatureFlagsStatus$inboundSchema: z.ZodType<GetDeploymentFeatureFlagsStatus, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentFeatureFlagsStatus$Outbound = {
    deploymentId: string;
    projectId: string;
    responseStatus: number;
    flagCount: number;
    createdAt: number;
};
/** @internal */
export declare const GetDeploymentFeatureFlagsStatus$outboundSchema: z.ZodType<GetDeploymentFeatureFlagsStatus$Outbound, z.ZodTypeDef, GetDeploymentFeatureFlagsStatus>;
export declare function getDeploymentFeatureFlagsStatusToJSON(getDeploymentFeatureFlagsStatus: GetDeploymentFeatureFlagsStatus): string;
export declare function getDeploymentFeatureFlagsStatusFromJSON(jsonString: string): SafeParseResult<GetDeploymentFeatureFlagsStatus, SDKValidationError>;
/** @internal */
export declare const GetDeploymentFeatureFlagsResponseBody$inboundSchema: z.ZodType<GetDeploymentFeatureFlagsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentFeatureFlagsResponseBody$Outbound = {
    flags: Array<GetDeploymentFeatureFlagsFlags$Outbound>;
    status: GetDeploymentFeatureFlagsStatus$Outbound | null;
};
/** @internal */
export declare const GetDeploymentFeatureFlagsResponseBody$outboundSchema: z.ZodType<GetDeploymentFeatureFlagsResponseBody$Outbound, z.ZodTypeDef, GetDeploymentFeatureFlagsResponseBody>;
export declare function getDeploymentFeatureFlagsResponseBodyToJSON(getDeploymentFeatureFlagsResponseBody: GetDeploymentFeatureFlagsResponseBody): string;
export declare function getDeploymentFeatureFlagsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDeploymentFeatureFlagsResponseBody, SDKValidationError>;
//# sourceMappingURL=getdeploymentfeatureflagsop.d.ts.map