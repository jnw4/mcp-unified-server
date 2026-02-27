import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Optional instructions for revoking and regenerating a automation bypass
 */
export type Revoke = {
    /**
     * Automation bypass to revoked
     */
    secret: string;
    /**
     * Whether or not a new automation bypass should be created after the provided secret is revoked
     */
    regenerate: boolean;
};
/**
 * Generate a new secret. If neither generate or revoke are provided, a new random secret will be generated.
 */
export type Generate = {
    /**
     * Optional value of the secret to generate, don't send it for oauth2 tokens
     */
    secret?: string | undefined;
    /**
     * Note to be displayed in the UI for this bypass
     */
    note?: string | undefined;
};
/**
 * Update an existing bypass
 */
export type Update = {
    /**
     * Automation bypass to updated
     */
    secret: string;
    /**
     * Whether or not this bypass is set as the VERCEL_AUTOMATION_BYPASS_SECRET environment variable on deployments
     */
    isEnvVar?: boolean | undefined;
    /**
     * Note to be displayed in the UI for this bypass
     */
    note?: string | undefined;
};
export type UpdateProjectProtectionBypassRequestBody = {
    /**
     * Optional instructions for revoking and regenerating a automation bypass
     */
    revoke?: Revoke | undefined;
    /**
     * Generate a new secret. If neither generate or revoke are provided, a new random secret will be generated.
     */
    generate?: Generate | undefined;
    /**
     * Update an existing bypass
     */
    update?: Update | undefined;
};
export type UpdateProjectProtectionBypassRequest = {
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
    requestBody: UpdateProjectProtectionBypassRequestBody;
};
export type UpdateProjectProtectionBypassProtectionBypass2 = {
    createdAt: number;
    createdBy: string;
    scope: "automation-bypass";
    /**
     * When there was only one bypass, it was automatically set as an env var on deployments. With multiple bypasses, there is always one bypass that is selected as the default, and gets set as an env var on deployments. As this is a new field, undefined means that the bypass is the env var. If there are any automation bypasses, exactly one must be the env var.
     */
    isEnvVar?: boolean | undefined;
    /**
     * Optional note about the bypass to be displayed in the UI
     */
    note?: string | undefined;
};
export type UpdateProjectProtectionBypassProtectionBypass1 = {
    createdAt: number;
    createdBy: string;
    scope: "integration-automation-bypass";
    integrationId: string;
    configurationId: string;
};
export type UpdateProjectProtectionBypassProtectionBypass = UpdateProjectProtectionBypassProtectionBypass1 | UpdateProjectProtectionBypassProtectionBypass2;
export type UpdateProjectProtectionBypassResponseBody = {
    protectionBypass?: {
        [k: string]: UpdateProjectProtectionBypassProtectionBypass1 | UpdateProjectProtectionBypassProtectionBypass2;
    } | undefined;
};
/** @internal */
export declare const Revoke$inboundSchema: z.ZodType<Revoke, z.ZodTypeDef, unknown>;
/** @internal */
export type Revoke$Outbound = {
    secret: string;
    regenerate: boolean;
};
/** @internal */
export declare const Revoke$outboundSchema: z.ZodType<Revoke$Outbound, z.ZodTypeDef, Revoke>;
export declare function revokeToJSON(revoke: Revoke): string;
export declare function revokeFromJSON(jsonString: string): SafeParseResult<Revoke, SDKValidationError>;
/** @internal */
export declare const Generate$inboundSchema: z.ZodType<Generate, z.ZodTypeDef, unknown>;
/** @internal */
export type Generate$Outbound = {
    secret?: string | undefined;
    note?: string | undefined;
};
/** @internal */
export declare const Generate$outboundSchema: z.ZodType<Generate$Outbound, z.ZodTypeDef, Generate>;
export declare function generateToJSON(generate: Generate): string;
export declare function generateFromJSON(jsonString: string): SafeParseResult<Generate, SDKValidationError>;
/** @internal */
export declare const Update$inboundSchema: z.ZodType<Update, z.ZodTypeDef, unknown>;
/** @internal */
export type Update$Outbound = {
    secret: string;
    isEnvVar?: boolean | undefined;
    note?: string | undefined;
};
/** @internal */
export declare const Update$outboundSchema: z.ZodType<Update$Outbound, z.ZodTypeDef, Update>;
export declare function updateToJSON(update: Update): string;
export declare function updateFromJSON(jsonString: string): SafeParseResult<Update, SDKValidationError>;
/** @internal */
export declare const UpdateProjectProtectionBypassRequestBody$inboundSchema: z.ZodType<UpdateProjectProtectionBypassRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateProjectProtectionBypassRequestBody$Outbound = {
    revoke?: Revoke$Outbound | undefined;
    generate?: Generate$Outbound | undefined;
    update?: Update$Outbound | undefined;
};
/** @internal */
export declare const UpdateProjectProtectionBypassRequestBody$outboundSchema: z.ZodType<UpdateProjectProtectionBypassRequestBody$Outbound, z.ZodTypeDef, UpdateProjectProtectionBypassRequestBody>;
export declare function updateProjectProtectionBypassRequestBodyToJSON(updateProjectProtectionBypassRequestBody: UpdateProjectProtectionBypassRequestBody): string;
export declare function updateProjectProtectionBypassRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateProjectProtectionBypassRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateProjectProtectionBypassRequest$inboundSchema: z.ZodType<UpdateProjectProtectionBypassRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateProjectProtectionBypassRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: UpdateProjectProtectionBypassRequestBody$Outbound;
};
/** @internal */
export declare const UpdateProjectProtectionBypassRequest$outboundSchema: z.ZodType<UpdateProjectProtectionBypassRequest$Outbound, z.ZodTypeDef, UpdateProjectProtectionBypassRequest>;
export declare function updateProjectProtectionBypassRequestToJSON(updateProjectProtectionBypassRequest: UpdateProjectProtectionBypassRequest): string;
export declare function updateProjectProtectionBypassRequestFromJSON(jsonString: string): SafeParseResult<UpdateProjectProtectionBypassRequest, SDKValidationError>;
/** @internal */
export declare const UpdateProjectProtectionBypassProtectionBypass2$inboundSchema: z.ZodType<UpdateProjectProtectionBypassProtectionBypass2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateProjectProtectionBypassProtectionBypass2$Outbound = {
    createdAt: number;
    createdBy: string;
    scope: "automation-bypass";
    isEnvVar?: boolean | undefined;
    note?: string | undefined;
};
/** @internal */
export declare const UpdateProjectProtectionBypassProtectionBypass2$outboundSchema: z.ZodType<UpdateProjectProtectionBypassProtectionBypass2$Outbound, z.ZodTypeDef, UpdateProjectProtectionBypassProtectionBypass2>;
export declare function updateProjectProtectionBypassProtectionBypass2ToJSON(updateProjectProtectionBypassProtectionBypass2: UpdateProjectProtectionBypassProtectionBypass2): string;
export declare function updateProjectProtectionBypassProtectionBypass2FromJSON(jsonString: string): SafeParseResult<UpdateProjectProtectionBypassProtectionBypass2, SDKValidationError>;
/** @internal */
export declare const UpdateProjectProtectionBypassProtectionBypass1$inboundSchema: z.ZodType<UpdateProjectProtectionBypassProtectionBypass1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateProjectProtectionBypassProtectionBypass1$Outbound = {
    createdAt: number;
    createdBy: string;
    scope: "integration-automation-bypass";
    integrationId: string;
    configurationId: string;
};
/** @internal */
export declare const UpdateProjectProtectionBypassProtectionBypass1$outboundSchema: z.ZodType<UpdateProjectProtectionBypassProtectionBypass1$Outbound, z.ZodTypeDef, UpdateProjectProtectionBypassProtectionBypass1>;
export declare function updateProjectProtectionBypassProtectionBypass1ToJSON(updateProjectProtectionBypassProtectionBypass1: UpdateProjectProtectionBypassProtectionBypass1): string;
export declare function updateProjectProtectionBypassProtectionBypass1FromJSON(jsonString: string): SafeParseResult<UpdateProjectProtectionBypassProtectionBypass1, SDKValidationError>;
/** @internal */
export declare const UpdateProjectProtectionBypassProtectionBypass$inboundSchema: z.ZodType<UpdateProjectProtectionBypassProtectionBypass, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateProjectProtectionBypassProtectionBypass$Outbound = UpdateProjectProtectionBypassProtectionBypass1$Outbound | UpdateProjectProtectionBypassProtectionBypass2$Outbound;
/** @internal */
export declare const UpdateProjectProtectionBypassProtectionBypass$outboundSchema: z.ZodType<UpdateProjectProtectionBypassProtectionBypass$Outbound, z.ZodTypeDef, UpdateProjectProtectionBypassProtectionBypass>;
export declare function updateProjectProtectionBypassProtectionBypassToJSON(updateProjectProtectionBypassProtectionBypass: UpdateProjectProtectionBypassProtectionBypass): string;
export declare function updateProjectProtectionBypassProtectionBypassFromJSON(jsonString: string): SafeParseResult<UpdateProjectProtectionBypassProtectionBypass, SDKValidationError>;
/** @internal */
export declare const UpdateProjectProtectionBypassResponseBody$inboundSchema: z.ZodType<UpdateProjectProtectionBypassResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateProjectProtectionBypassResponseBody$Outbound = {
    protectionBypass?: {
        [k: string]: UpdateProjectProtectionBypassProtectionBypass1$Outbound | UpdateProjectProtectionBypassProtectionBypass2$Outbound;
    } | undefined;
};
/** @internal */
export declare const UpdateProjectProtectionBypassResponseBody$outboundSchema: z.ZodType<UpdateProjectProtectionBypassResponseBody$Outbound, z.ZodTypeDef, UpdateProjectProtectionBypassResponseBody>;
export declare function updateProjectProtectionBypassResponseBodyToJSON(updateProjectProtectionBypassResponseBody: UpdateProjectProtectionBypassResponseBody): string;
export declare function updateProjectProtectionBypassResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateProjectProtectionBypassResponseBody, SDKValidationError>;
//# sourceMappingURL=updateprojectprotectionbypassop.d.ts.map