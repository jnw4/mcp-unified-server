import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UpdateRollingReleaseConfigRequest = {
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
};
/**
 * A stage object configured for a rolling release once a new deployment is triggered the first stage will be read in the proxy for first time visitors, and if a RNG < targetPercentage then it will serve the new deployment. Upon approval the next stage will be read, etc.
 */
export type UpdateRollingReleaseConfigResponseBodyStages = {
    /**
     * The percentage of traffic to serve to the canary deployment (0-100)
     */
    targetPercentage: number;
    /**
     * Whether or not this stage requires manual approval to proceed
     */
    requireApproval?: boolean | undefined;
    /**
     * Duration in minutes for automatic advancement to the next stage
     */
    duration?: number | undefined;
    /**
     * Whether to linearly shift traffic over the duration of this stage
     */
    linearShift?: boolean | undefined;
};
export type UpdateRollingReleaseConfigResponseBodyRollingRelease = {
    stages?: Array<UpdateRollingReleaseConfigResponseBodyStages> | null | undefined;
};
export type UpdateRollingReleaseConfigResponseBody2 = {
    rollingRelease: UpdateRollingReleaseConfigResponseBodyRollingRelease | null;
};
export type UpdateRollingReleaseConfigResponseBody1 = {
    rollingRelease?: any | null | undefined;
};
export type UpdateRollingReleaseConfigResponseBody = UpdateRollingReleaseConfigResponseBody1 | UpdateRollingReleaseConfigResponseBody2;
/** @internal */
export declare const UpdateRollingReleaseConfigRequest$inboundSchema: z.ZodType<UpdateRollingReleaseConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRollingReleaseConfigRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const UpdateRollingReleaseConfigRequest$outboundSchema: z.ZodType<UpdateRollingReleaseConfigRequest$Outbound, z.ZodTypeDef, UpdateRollingReleaseConfigRequest>;
export declare function updateRollingReleaseConfigRequestToJSON(updateRollingReleaseConfigRequest: UpdateRollingReleaseConfigRequest): string;
export declare function updateRollingReleaseConfigRequestFromJSON(jsonString: string): SafeParseResult<UpdateRollingReleaseConfigRequest, SDKValidationError>;
/** @internal */
export declare const UpdateRollingReleaseConfigResponseBodyStages$inboundSchema: z.ZodType<UpdateRollingReleaseConfigResponseBodyStages, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRollingReleaseConfigResponseBodyStages$Outbound = {
    targetPercentage: number;
    requireApproval?: boolean | undefined;
    duration?: number | undefined;
    linearShift?: boolean | undefined;
};
/** @internal */
export declare const UpdateRollingReleaseConfigResponseBodyStages$outboundSchema: z.ZodType<UpdateRollingReleaseConfigResponseBodyStages$Outbound, z.ZodTypeDef, UpdateRollingReleaseConfigResponseBodyStages>;
export declare function updateRollingReleaseConfigResponseBodyStagesToJSON(updateRollingReleaseConfigResponseBodyStages: UpdateRollingReleaseConfigResponseBodyStages): string;
export declare function updateRollingReleaseConfigResponseBodyStagesFromJSON(jsonString: string): SafeParseResult<UpdateRollingReleaseConfigResponseBodyStages, SDKValidationError>;
/** @internal */
export declare const UpdateRollingReleaseConfigResponseBodyRollingRelease$inboundSchema: z.ZodType<UpdateRollingReleaseConfigResponseBodyRollingRelease, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRollingReleaseConfigResponseBodyRollingRelease$Outbound = {
    stages?: Array<UpdateRollingReleaseConfigResponseBodyStages$Outbound> | null | undefined;
};
/** @internal */
export declare const UpdateRollingReleaseConfigResponseBodyRollingRelease$outboundSchema: z.ZodType<UpdateRollingReleaseConfigResponseBodyRollingRelease$Outbound, z.ZodTypeDef, UpdateRollingReleaseConfigResponseBodyRollingRelease>;
export declare function updateRollingReleaseConfigResponseBodyRollingReleaseToJSON(updateRollingReleaseConfigResponseBodyRollingRelease: UpdateRollingReleaseConfigResponseBodyRollingRelease): string;
export declare function updateRollingReleaseConfigResponseBodyRollingReleaseFromJSON(jsonString: string): SafeParseResult<UpdateRollingReleaseConfigResponseBodyRollingRelease, SDKValidationError>;
/** @internal */
export declare const UpdateRollingReleaseConfigResponseBody2$inboundSchema: z.ZodType<UpdateRollingReleaseConfigResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRollingReleaseConfigResponseBody2$Outbound = {
    rollingRelease: UpdateRollingReleaseConfigResponseBodyRollingRelease$Outbound | null;
};
/** @internal */
export declare const UpdateRollingReleaseConfigResponseBody2$outboundSchema: z.ZodType<UpdateRollingReleaseConfigResponseBody2$Outbound, z.ZodTypeDef, UpdateRollingReleaseConfigResponseBody2>;
export declare function updateRollingReleaseConfigResponseBody2ToJSON(updateRollingReleaseConfigResponseBody2: UpdateRollingReleaseConfigResponseBody2): string;
export declare function updateRollingReleaseConfigResponseBody2FromJSON(jsonString: string): SafeParseResult<UpdateRollingReleaseConfigResponseBody2, SDKValidationError>;
/** @internal */
export declare const UpdateRollingReleaseConfigResponseBody1$inboundSchema: z.ZodType<UpdateRollingReleaseConfigResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRollingReleaseConfigResponseBody1$Outbound = {
    rollingRelease?: any | null | undefined;
};
/** @internal */
export declare const UpdateRollingReleaseConfigResponseBody1$outboundSchema: z.ZodType<UpdateRollingReleaseConfigResponseBody1$Outbound, z.ZodTypeDef, UpdateRollingReleaseConfigResponseBody1>;
export declare function updateRollingReleaseConfigResponseBody1ToJSON(updateRollingReleaseConfigResponseBody1: UpdateRollingReleaseConfigResponseBody1): string;
export declare function updateRollingReleaseConfigResponseBody1FromJSON(jsonString: string): SafeParseResult<UpdateRollingReleaseConfigResponseBody1, SDKValidationError>;
/** @internal */
export declare const UpdateRollingReleaseConfigResponseBody$inboundSchema: z.ZodType<UpdateRollingReleaseConfigResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRollingReleaseConfigResponseBody$Outbound = UpdateRollingReleaseConfigResponseBody1$Outbound | UpdateRollingReleaseConfigResponseBody2$Outbound;
/** @internal */
export declare const UpdateRollingReleaseConfigResponseBody$outboundSchema: z.ZodType<UpdateRollingReleaseConfigResponseBody$Outbound, z.ZodTypeDef, UpdateRollingReleaseConfigResponseBody>;
export declare function updateRollingReleaseConfigResponseBodyToJSON(updateRollingReleaseConfigResponseBody: UpdateRollingReleaseConfigResponseBody): string;
export declare function updateRollingReleaseConfigResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateRollingReleaseConfigResponseBody, SDKValidationError>;
//# sourceMappingURL=updaterollingreleaseconfigop.d.ts.map