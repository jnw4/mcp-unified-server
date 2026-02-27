import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment.
 */
export type UpdateResourceSecretsByIdEnvironmentOverrides = {
    /**
     * Value used for development environment.
     */
    development?: string | undefined;
    /**
     * Value used for preview environment.
     */
    preview?: string | undefined;
    /**
     * Value used for production environment.
     */
    production?: string | undefined;
};
export type UpdateResourceSecretsByIdSecrets = {
    name: string;
    value: string;
    prefix?: string | undefined;
    /**
     * A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment.
     */
    environmentOverrides?: UpdateResourceSecretsByIdEnvironmentOverrides | undefined;
};
export type UpdateResourceSecretsByIdRequestBody = {
    secrets: Array<UpdateResourceSecretsByIdSecrets>;
    /**
     * If true, will only overwrite the provided secrets instead of replacing all secrets.
     */
    partial?: boolean | undefined;
};
export type UpdateResourceSecretsByIdRequest = {
    integrationConfigurationId: string;
    resourceId: string;
    requestBody?: UpdateResourceSecretsByIdRequestBody | undefined;
};
/** @internal */
export declare const UpdateResourceSecretsByIdEnvironmentOverrides$inboundSchema: z.ZodType<UpdateResourceSecretsByIdEnvironmentOverrides, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceSecretsByIdEnvironmentOverrides$Outbound = {
    development?: string | undefined;
    preview?: string | undefined;
    production?: string | undefined;
};
/** @internal */
export declare const UpdateResourceSecretsByIdEnvironmentOverrides$outboundSchema: z.ZodType<UpdateResourceSecretsByIdEnvironmentOverrides$Outbound, z.ZodTypeDef, UpdateResourceSecretsByIdEnvironmentOverrides>;
export declare function updateResourceSecretsByIdEnvironmentOverridesToJSON(updateResourceSecretsByIdEnvironmentOverrides: UpdateResourceSecretsByIdEnvironmentOverrides): string;
export declare function updateResourceSecretsByIdEnvironmentOverridesFromJSON(jsonString: string): SafeParseResult<UpdateResourceSecretsByIdEnvironmentOverrides, SDKValidationError>;
/** @internal */
export declare const UpdateResourceSecretsByIdSecrets$inboundSchema: z.ZodType<UpdateResourceSecretsByIdSecrets, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceSecretsByIdSecrets$Outbound = {
    name: string;
    value: string;
    prefix?: string | undefined;
    environmentOverrides?: UpdateResourceSecretsByIdEnvironmentOverrides$Outbound | undefined;
};
/** @internal */
export declare const UpdateResourceSecretsByIdSecrets$outboundSchema: z.ZodType<UpdateResourceSecretsByIdSecrets$Outbound, z.ZodTypeDef, UpdateResourceSecretsByIdSecrets>;
export declare function updateResourceSecretsByIdSecretsToJSON(updateResourceSecretsByIdSecrets: UpdateResourceSecretsByIdSecrets): string;
export declare function updateResourceSecretsByIdSecretsFromJSON(jsonString: string): SafeParseResult<UpdateResourceSecretsByIdSecrets, SDKValidationError>;
/** @internal */
export declare const UpdateResourceSecretsByIdRequestBody$inboundSchema: z.ZodType<UpdateResourceSecretsByIdRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceSecretsByIdRequestBody$Outbound = {
    secrets: Array<UpdateResourceSecretsByIdSecrets$Outbound>;
    partial?: boolean | undefined;
};
/** @internal */
export declare const UpdateResourceSecretsByIdRequestBody$outboundSchema: z.ZodType<UpdateResourceSecretsByIdRequestBody$Outbound, z.ZodTypeDef, UpdateResourceSecretsByIdRequestBody>;
export declare function updateResourceSecretsByIdRequestBodyToJSON(updateResourceSecretsByIdRequestBody: UpdateResourceSecretsByIdRequestBody): string;
export declare function updateResourceSecretsByIdRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateResourceSecretsByIdRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateResourceSecretsByIdRequest$inboundSchema: z.ZodType<UpdateResourceSecretsByIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateResourceSecretsByIdRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
    RequestBody?: UpdateResourceSecretsByIdRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateResourceSecretsByIdRequest$outboundSchema: z.ZodType<UpdateResourceSecretsByIdRequest$Outbound, z.ZodTypeDef, UpdateResourceSecretsByIdRequest>;
export declare function updateResourceSecretsByIdRequestToJSON(updateResourceSecretsByIdRequest: UpdateResourceSecretsByIdRequest): string;
export declare function updateResourceSecretsByIdRequestFromJSON(jsonString: string): SafeParseResult<UpdateResourceSecretsByIdRequest, SDKValidationError>;
//# sourceMappingURL=updateresourcesecretsbyidop.d.ts.map