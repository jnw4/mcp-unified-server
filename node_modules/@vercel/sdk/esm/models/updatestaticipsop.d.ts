import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UpdateStaticIpsRequestBody2 = {
    /**
     * Whether to use Static IPs for builds.
     */
    builds?: boolean | undefined;
    regions: Array<string>;
};
export type UpdateStaticIpsRequestBody1 = {
    /**
     * Whether to use Static IPs for builds.
     */
    builds: boolean;
    regions?: Array<string> | undefined;
};
export type UpdateStaticIpsRequestBody = UpdateStaticIpsRequestBody1 | UpdateStaticIpsRequestBody2;
export type UpdateStaticIpsRequest = {
    /**
     * The unique project identifier or the project name
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
    requestBody?: UpdateStaticIpsRequestBody1 | UpdateStaticIpsRequestBody2 | undefined;
};
export declare const UpdateStaticIpsEnvId2: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type UpdateStaticIpsEnvId2 = ClosedEnum<typeof UpdateStaticIpsEnvId2>;
export type UpdateStaticIpsEnvId = string | UpdateStaticIpsEnvId2;
export type UpdateStaticIpsAws = {
    subnetIds: Array<string>;
    securityGroupId?: string | undefined;
};
export type UpdateStaticIpsResponseBody = {
    envId: string | UpdateStaticIpsEnvId2;
    connectConfigurationId: string;
    dc?: string | undefined;
    passive: boolean;
    buildsEnabled: boolean;
    aws?: UpdateStaticIpsAws | undefined;
    createdAt: number;
    updatedAt: number;
};
/** @internal */
export declare const UpdateStaticIpsRequestBody2$inboundSchema: z.ZodType<UpdateStaticIpsRequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStaticIpsRequestBody2$Outbound = {
    builds?: boolean | undefined;
    regions: Array<string>;
};
/** @internal */
export declare const UpdateStaticIpsRequestBody2$outboundSchema: z.ZodType<UpdateStaticIpsRequestBody2$Outbound, z.ZodTypeDef, UpdateStaticIpsRequestBody2>;
export declare function updateStaticIpsRequestBody2ToJSON(updateStaticIpsRequestBody2: UpdateStaticIpsRequestBody2): string;
export declare function updateStaticIpsRequestBody2FromJSON(jsonString: string): SafeParseResult<UpdateStaticIpsRequestBody2, SDKValidationError>;
/** @internal */
export declare const UpdateStaticIpsRequestBody1$inboundSchema: z.ZodType<UpdateStaticIpsRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStaticIpsRequestBody1$Outbound = {
    builds: boolean;
    regions?: Array<string> | undefined;
};
/** @internal */
export declare const UpdateStaticIpsRequestBody1$outboundSchema: z.ZodType<UpdateStaticIpsRequestBody1$Outbound, z.ZodTypeDef, UpdateStaticIpsRequestBody1>;
export declare function updateStaticIpsRequestBody1ToJSON(updateStaticIpsRequestBody1: UpdateStaticIpsRequestBody1): string;
export declare function updateStaticIpsRequestBody1FromJSON(jsonString: string): SafeParseResult<UpdateStaticIpsRequestBody1, SDKValidationError>;
/** @internal */
export declare const UpdateStaticIpsRequestBody$inboundSchema: z.ZodType<UpdateStaticIpsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStaticIpsRequestBody$Outbound = UpdateStaticIpsRequestBody1$Outbound | UpdateStaticIpsRequestBody2$Outbound;
/** @internal */
export declare const UpdateStaticIpsRequestBody$outboundSchema: z.ZodType<UpdateStaticIpsRequestBody$Outbound, z.ZodTypeDef, UpdateStaticIpsRequestBody>;
export declare function updateStaticIpsRequestBodyToJSON(updateStaticIpsRequestBody: UpdateStaticIpsRequestBody): string;
export declare function updateStaticIpsRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateStaticIpsRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateStaticIpsRequest$inboundSchema: z.ZodType<UpdateStaticIpsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStaticIpsRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateStaticIpsRequestBody1$Outbound | UpdateStaticIpsRequestBody2$Outbound | undefined;
};
/** @internal */
export declare const UpdateStaticIpsRequest$outboundSchema: z.ZodType<UpdateStaticIpsRequest$Outbound, z.ZodTypeDef, UpdateStaticIpsRequest>;
export declare function updateStaticIpsRequestToJSON(updateStaticIpsRequest: UpdateStaticIpsRequest): string;
export declare function updateStaticIpsRequestFromJSON(jsonString: string): SafeParseResult<UpdateStaticIpsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateStaticIpsEnvId2$inboundSchema: z.ZodNativeEnum<typeof UpdateStaticIpsEnvId2>;
/** @internal */
export declare const UpdateStaticIpsEnvId2$outboundSchema: z.ZodNativeEnum<typeof UpdateStaticIpsEnvId2>;
/** @internal */
export declare const UpdateStaticIpsEnvId$inboundSchema: z.ZodType<UpdateStaticIpsEnvId, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStaticIpsEnvId$Outbound = string | string;
/** @internal */
export declare const UpdateStaticIpsEnvId$outboundSchema: z.ZodType<UpdateStaticIpsEnvId$Outbound, z.ZodTypeDef, UpdateStaticIpsEnvId>;
export declare function updateStaticIpsEnvIdToJSON(updateStaticIpsEnvId: UpdateStaticIpsEnvId): string;
export declare function updateStaticIpsEnvIdFromJSON(jsonString: string): SafeParseResult<UpdateStaticIpsEnvId, SDKValidationError>;
/** @internal */
export declare const UpdateStaticIpsAws$inboundSchema: z.ZodType<UpdateStaticIpsAws, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStaticIpsAws$Outbound = {
    subnetIds: Array<string>;
    securityGroupId?: string | undefined;
};
/** @internal */
export declare const UpdateStaticIpsAws$outboundSchema: z.ZodType<UpdateStaticIpsAws$Outbound, z.ZodTypeDef, UpdateStaticIpsAws>;
export declare function updateStaticIpsAwsToJSON(updateStaticIpsAws: UpdateStaticIpsAws): string;
export declare function updateStaticIpsAwsFromJSON(jsonString: string): SafeParseResult<UpdateStaticIpsAws, SDKValidationError>;
/** @internal */
export declare const UpdateStaticIpsResponseBody$inboundSchema: z.ZodType<UpdateStaticIpsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStaticIpsResponseBody$Outbound = {
    envId: string | string;
    connectConfigurationId: string;
    dc?: string | undefined;
    passive: boolean;
    buildsEnabled: boolean;
    aws?: UpdateStaticIpsAws$Outbound | undefined;
    createdAt: number;
    updatedAt: number;
};
/** @internal */
export declare const UpdateStaticIpsResponseBody$outboundSchema: z.ZodType<UpdateStaticIpsResponseBody$Outbound, z.ZodTypeDef, UpdateStaticIpsResponseBody>;
export declare function updateStaticIpsResponseBodyToJSON(updateStaticIpsResponseBody: UpdateStaticIpsResponseBody): string;
export declare function updateStaticIpsResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateStaticIpsResponseBody, SDKValidationError>;
//# sourceMappingURL=updatestaticipsop.d.ts.map