import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetRollingReleaseConfigRequest = {
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
 * An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100.
 */
export type GetRollingReleaseConfigStages = {
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
/**
 * Project-level rolling release configuration that defines how deployments should be gradually rolled out
 */
export type GetRollingReleaseConfigRollingRelease = {
    /**
     * The environment that the release targets, currently only supports production. Adding in case we want to configure with alias groups or custom environments.
     */
    target: string;
    /**
     * An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100.
     */
    stages?: Array<GetRollingReleaseConfigStages> | null | undefined;
    /**
     * Whether the request served by a canary deployment should return a header indicating a canary was served. Defaults to `false` when omitted.
     */
    canaryResponseHeader?: boolean | undefined;
};
export type GetRollingReleaseConfigResponseBody = {
    /**
     * Project-level rolling release configuration that defines how deployments should be gradually rolled out
     */
    rollingRelease: GetRollingReleaseConfigRollingRelease | null;
};
/** @internal */
export declare const GetRollingReleaseConfigRequest$inboundSchema: z.ZodType<GetRollingReleaseConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseConfigRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetRollingReleaseConfigRequest$outboundSchema: z.ZodType<GetRollingReleaseConfigRequest$Outbound, z.ZodTypeDef, GetRollingReleaseConfigRequest>;
export declare function getRollingReleaseConfigRequestToJSON(getRollingReleaseConfigRequest: GetRollingReleaseConfigRequest): string;
export declare function getRollingReleaseConfigRequestFromJSON(jsonString: string): SafeParseResult<GetRollingReleaseConfigRequest, SDKValidationError>;
/** @internal */
export declare const GetRollingReleaseConfigStages$inboundSchema: z.ZodType<GetRollingReleaseConfigStages, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseConfigStages$Outbound = {
    targetPercentage: number;
    requireApproval?: boolean | undefined;
    duration?: number | undefined;
    linearShift?: boolean | undefined;
};
/** @internal */
export declare const GetRollingReleaseConfigStages$outboundSchema: z.ZodType<GetRollingReleaseConfigStages$Outbound, z.ZodTypeDef, GetRollingReleaseConfigStages>;
export declare function getRollingReleaseConfigStagesToJSON(getRollingReleaseConfigStages: GetRollingReleaseConfigStages): string;
export declare function getRollingReleaseConfigStagesFromJSON(jsonString: string): SafeParseResult<GetRollingReleaseConfigStages, SDKValidationError>;
/** @internal */
export declare const GetRollingReleaseConfigRollingRelease$inboundSchema: z.ZodType<GetRollingReleaseConfigRollingRelease, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseConfigRollingRelease$Outbound = {
    target: string;
    stages?: Array<GetRollingReleaseConfigStages$Outbound> | null | undefined;
    canaryResponseHeader?: boolean | undefined;
};
/** @internal */
export declare const GetRollingReleaseConfigRollingRelease$outboundSchema: z.ZodType<GetRollingReleaseConfigRollingRelease$Outbound, z.ZodTypeDef, GetRollingReleaseConfigRollingRelease>;
export declare function getRollingReleaseConfigRollingReleaseToJSON(getRollingReleaseConfigRollingRelease: GetRollingReleaseConfigRollingRelease): string;
export declare function getRollingReleaseConfigRollingReleaseFromJSON(jsonString: string): SafeParseResult<GetRollingReleaseConfigRollingRelease, SDKValidationError>;
/** @internal */
export declare const GetRollingReleaseConfigResponseBody$inboundSchema: z.ZodType<GetRollingReleaseConfigResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseConfigResponseBody$Outbound = {
    rollingRelease: GetRollingReleaseConfigRollingRelease$Outbound | null;
};
/** @internal */
export declare const GetRollingReleaseConfigResponseBody$outboundSchema: z.ZodType<GetRollingReleaseConfigResponseBody$Outbound, z.ZodTypeDef, GetRollingReleaseConfigResponseBody>;
export declare function getRollingReleaseConfigResponseBodyToJSON(getRollingReleaseConfigResponseBody: GetRollingReleaseConfigResponseBody): string;
export declare function getRollingReleaseConfigResponseBodyFromJSON(jsonString: string): SafeParseResult<GetRollingReleaseConfigResponseBody, SDKValidationError>;
//# sourceMappingURL=getrollingreleaseconfigop.d.ts.map