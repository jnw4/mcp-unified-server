import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const UpdateSharedEnvVariableTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type UpdateSharedEnvVariableTarget = ClosedEnum<typeof UpdateSharedEnvVariableTarget>;
/**
 * Incrementally update project linking without specifying the full list
 */
export type ProjectIdUpdates = {
    /**
     * Project IDs to add to this environment variable
     */
    link?: Array<string> | undefined;
    /**
     * Project IDs to remove from this environment variable
     */
    unlink?: Array<string> | undefined;
};
/**
 * The new type of the Shared Environment Variable
 */
export declare const UpdateSharedEnvVariableType: {
    readonly Encrypted: "encrypted";
    readonly Sensitive: "sensitive";
};
/**
 * The new type of the Shared Environment Variable
 */
export type UpdateSharedEnvVariableType = ClosedEnum<typeof UpdateSharedEnvVariableType>;
export type Updates = {
    /**
     * The name of the Shared Environment Variable
     */
    key?: string | undefined;
    /**
     * The value of the Shared Environment Variable
     */
    value?: string | undefined;
    /**
     * The target environment of the Shared Environment Variable
     */
    target?: Array<UpdateSharedEnvVariableTarget> | undefined;
    /**
     * Associate a Shared Environment Variable to projects.
     */
    projectId?: Array<string> | undefined;
    /**
     * Incrementally update project linking without specifying the full list
     */
    projectIdUpdates?: ProjectIdUpdates | undefined;
    /**
     * The new type of the Shared Environment Variable
     */
    type?: UpdateSharedEnvVariableType | undefined;
    /**
     * A comment to add context on what this Shared Environment Variable is for
     */
    comment?: string | undefined;
};
export type UpdateSharedEnvVariableRequestBody = {
    /**
     * An object where each key is an environment variable ID (not the key name) and the value is the update to apply
     */
    updates: {
        [k: string]: Updates;
    };
};
export type UpdateSharedEnvVariableRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UpdateSharedEnvVariableRequestBody | undefined;
};
/**
 * The type of this cosmos doc instance, if blank, assume secret.
 */
export declare const UpdateSharedEnvVariableEnvironmentType: {
    readonly Encrypted: "encrypted";
    readonly Sensitive: "sensitive";
    readonly System: "system";
    readonly Plain: "plain";
};
/**
 * The type of this cosmos doc instance, if blank, assume secret.
 */
export type UpdateSharedEnvVariableEnvironmentType = ClosedEnum<typeof UpdateSharedEnvVariableEnvironmentType>;
/**
 * environments this env variable targets
 */
export declare const UpdateSharedEnvVariableEnvironmentTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
/**
 * environments this env variable targets
 */
export type UpdateSharedEnvVariableEnvironmentTarget = ClosedEnum<typeof UpdateSharedEnvVariableEnvironmentTarget>;
export type Updated = {
    /**
     * The date when the Shared Env Var was created.
     */
    created?: Date | undefined;
    /**
     * The name of the Shared Env Var.
     */
    key?: string | undefined;
    /**
     * The unique identifier of the owner (team) the Shared Env Var was created for.
     */
    ownerId?: string | null | undefined;
    /**
     * The unique identifier of the Shared Env Var.
     */
    id?: string | undefined;
    /**
     * The unique identifier of the user who created the Shared Env Var.
     */
    createdBy?: string | null | undefined;
    /**
     * The unique identifier of the user who deleted the Shared Env Var.
     */
    deletedBy?: string | null | undefined;
    /**
     * The unique identifier of the user who last updated the Shared Env Var.
     */
    updatedBy?: string | null | undefined;
    /**
     * Timestamp for when the Shared Env Var was created.
     */
    createdAt?: number | undefined;
    /**
     * Timestamp for when the Shared Env Var was (soft) deleted.
     */
    deletedAt?: number | undefined;
    /**
     * Timestamp for when the Shared Env Var was last updated.
     */
    updatedAt?: number | undefined;
    /**
     * The value of the Shared Env Var.
     */
    value?: string | undefined;
    /**
     * The unique identifiers of the projects which the Shared Env Var is linked to.
     */
    projectId?: Array<string> | undefined;
    /**
     * The type of this cosmos doc instance, if blank, assume secret.
     */
    type?: UpdateSharedEnvVariableEnvironmentType | undefined;
    /**
     * environments this env variable targets
     */
    target?: Array<UpdateSharedEnvVariableEnvironmentTarget> | undefined;
    /**
     * whether or not this env varible applies to custom environments
     */
    applyToAllCustomEnvironments?: boolean | undefined;
    /**
     * whether or not this env variable is decrypted
     */
    decrypted?: boolean | undefined;
    /**
     * A user provided comment that describes what this Shared Env Var is for.
     */
    comment?: string | undefined;
    /**
     * The last editor full name or username.
     */
    lastEditedByDisplayName?: string | undefined;
};
export declare const UpdateSharedEnvVariableValue2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type UpdateSharedEnvVariableValue2 = ClosedEnum<typeof UpdateSharedEnvVariableValue2>;
export type UpdateSharedEnvVariableValue = string | Array<UpdateSharedEnvVariableValue2>;
export declare const UpdateSharedEnvVariableTarget2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type UpdateSharedEnvVariableTarget2 = ClosedEnum<typeof UpdateSharedEnvVariableTarget2>;
export declare const UpdateSharedEnvVariableTarget1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type UpdateSharedEnvVariableTarget1 = ClosedEnum<typeof UpdateSharedEnvVariableTarget1>;
export type UpdateSharedEnvVariableEnvironmentResponseTarget = Array<UpdateSharedEnvVariableTarget1> | UpdateSharedEnvVariableTarget2;
export type UpdateSharedEnvVariableError = {
    code: string;
    message: string;
    key?: string | undefined;
    envVarId?: string | undefined;
    envVarKey?: string | undefined;
    action?: string | undefined;
    link?: string | undefined;
    value?: string | Array<UpdateSharedEnvVariableValue2> | undefined;
    gitBranch?: string | undefined;
    target?: Array<UpdateSharedEnvVariableTarget1> | UpdateSharedEnvVariableTarget2 | undefined;
    project?: string | undefined;
};
export type UpdateSharedEnvVariableFailed = {
    error: UpdateSharedEnvVariableError;
};
export type UpdateSharedEnvVariableResponseBody = {
    updated: Array<Updated>;
    failed: Array<UpdateSharedEnvVariableFailed>;
};
/** @internal */
export declare const UpdateSharedEnvVariableTarget$inboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableTarget>;
/** @internal */
export declare const UpdateSharedEnvVariableTarget$outboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableTarget>;
/** @internal */
export declare const ProjectIdUpdates$inboundSchema: z.ZodType<ProjectIdUpdates, z.ZodTypeDef, unknown>;
/** @internal */
export type ProjectIdUpdates$Outbound = {
    link?: Array<string> | undefined;
    unlink?: Array<string> | undefined;
};
/** @internal */
export declare const ProjectIdUpdates$outboundSchema: z.ZodType<ProjectIdUpdates$Outbound, z.ZodTypeDef, ProjectIdUpdates>;
export declare function projectIdUpdatesToJSON(projectIdUpdates: ProjectIdUpdates): string;
export declare function projectIdUpdatesFromJSON(jsonString: string): SafeParseResult<ProjectIdUpdates, SDKValidationError>;
/** @internal */
export declare const UpdateSharedEnvVariableType$inboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableType>;
/** @internal */
export declare const UpdateSharedEnvVariableType$outboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableType>;
/** @internal */
export declare const Updates$inboundSchema: z.ZodType<Updates, z.ZodTypeDef, unknown>;
/** @internal */
export type Updates$Outbound = {
    key?: string | undefined;
    value?: string | undefined;
    target?: Array<string> | undefined;
    projectId?: Array<string> | undefined;
    projectIdUpdates?: ProjectIdUpdates$Outbound | undefined;
    type?: string | undefined;
    comment?: string | undefined;
};
/** @internal */
export declare const Updates$outboundSchema: z.ZodType<Updates$Outbound, z.ZodTypeDef, Updates>;
export declare function updatesToJSON(updates: Updates): string;
export declare function updatesFromJSON(jsonString: string): SafeParseResult<Updates, SDKValidationError>;
/** @internal */
export declare const UpdateSharedEnvVariableRequestBody$inboundSchema: z.ZodType<UpdateSharedEnvVariableRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSharedEnvVariableRequestBody$Outbound = {
    updates: {
        [k: string]: Updates$Outbound;
    };
};
/** @internal */
export declare const UpdateSharedEnvVariableRequestBody$outboundSchema: z.ZodType<UpdateSharedEnvVariableRequestBody$Outbound, z.ZodTypeDef, UpdateSharedEnvVariableRequestBody>;
export declare function updateSharedEnvVariableRequestBodyToJSON(updateSharedEnvVariableRequestBody: UpdateSharedEnvVariableRequestBody): string;
export declare function updateSharedEnvVariableRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateSharedEnvVariableRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateSharedEnvVariableRequest$inboundSchema: z.ZodType<UpdateSharedEnvVariableRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSharedEnvVariableRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateSharedEnvVariableRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateSharedEnvVariableRequest$outboundSchema: z.ZodType<UpdateSharedEnvVariableRequest$Outbound, z.ZodTypeDef, UpdateSharedEnvVariableRequest>;
export declare function updateSharedEnvVariableRequestToJSON(updateSharedEnvVariableRequest: UpdateSharedEnvVariableRequest): string;
export declare function updateSharedEnvVariableRequestFromJSON(jsonString: string): SafeParseResult<UpdateSharedEnvVariableRequest, SDKValidationError>;
/** @internal */
export declare const UpdateSharedEnvVariableEnvironmentType$inboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableEnvironmentType>;
/** @internal */
export declare const UpdateSharedEnvVariableEnvironmentType$outboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableEnvironmentType>;
/** @internal */
export declare const UpdateSharedEnvVariableEnvironmentTarget$inboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableEnvironmentTarget>;
/** @internal */
export declare const UpdateSharedEnvVariableEnvironmentTarget$outboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableEnvironmentTarget>;
/** @internal */
export declare const Updated$inboundSchema: z.ZodType<Updated, z.ZodTypeDef, unknown>;
/** @internal */
export type Updated$Outbound = {
    created?: string | undefined;
    key?: string | undefined;
    ownerId?: string | null | undefined;
    id?: string | undefined;
    createdBy?: string | null | undefined;
    deletedBy?: string | null | undefined;
    updatedBy?: string | null | undefined;
    createdAt?: number | undefined;
    deletedAt?: number | undefined;
    updatedAt?: number | undefined;
    value?: string | undefined;
    projectId?: Array<string> | undefined;
    type?: string | undefined;
    target?: Array<string> | undefined;
    applyToAllCustomEnvironments?: boolean | undefined;
    decrypted?: boolean | undefined;
    comment?: string | undefined;
    lastEditedByDisplayName?: string | undefined;
};
/** @internal */
export declare const Updated$outboundSchema: z.ZodType<Updated$Outbound, z.ZodTypeDef, Updated>;
export declare function updatedToJSON(updated: Updated): string;
export declare function updatedFromJSON(jsonString: string): SafeParseResult<Updated, SDKValidationError>;
/** @internal */
export declare const UpdateSharedEnvVariableValue2$inboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableValue2>;
/** @internal */
export declare const UpdateSharedEnvVariableValue2$outboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableValue2>;
/** @internal */
export declare const UpdateSharedEnvVariableValue$inboundSchema: z.ZodType<UpdateSharedEnvVariableValue, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSharedEnvVariableValue$Outbound = string | Array<string>;
/** @internal */
export declare const UpdateSharedEnvVariableValue$outboundSchema: z.ZodType<UpdateSharedEnvVariableValue$Outbound, z.ZodTypeDef, UpdateSharedEnvVariableValue>;
export declare function updateSharedEnvVariableValueToJSON(updateSharedEnvVariableValue: UpdateSharedEnvVariableValue): string;
export declare function updateSharedEnvVariableValueFromJSON(jsonString: string): SafeParseResult<UpdateSharedEnvVariableValue, SDKValidationError>;
/** @internal */
export declare const UpdateSharedEnvVariableTarget2$inboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableTarget2>;
/** @internal */
export declare const UpdateSharedEnvVariableTarget2$outboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableTarget2>;
/** @internal */
export declare const UpdateSharedEnvVariableTarget1$inboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableTarget1>;
/** @internal */
export declare const UpdateSharedEnvVariableTarget1$outboundSchema: z.ZodNativeEnum<typeof UpdateSharedEnvVariableTarget1>;
/** @internal */
export declare const UpdateSharedEnvVariableEnvironmentResponseTarget$inboundSchema: z.ZodType<UpdateSharedEnvVariableEnvironmentResponseTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSharedEnvVariableEnvironmentResponseTarget$Outbound = Array<string> | string;
/** @internal */
export declare const UpdateSharedEnvVariableEnvironmentResponseTarget$outboundSchema: z.ZodType<UpdateSharedEnvVariableEnvironmentResponseTarget$Outbound, z.ZodTypeDef, UpdateSharedEnvVariableEnvironmentResponseTarget>;
export declare function updateSharedEnvVariableEnvironmentResponseTargetToJSON(updateSharedEnvVariableEnvironmentResponseTarget: UpdateSharedEnvVariableEnvironmentResponseTarget): string;
export declare function updateSharedEnvVariableEnvironmentResponseTargetFromJSON(jsonString: string): SafeParseResult<UpdateSharedEnvVariableEnvironmentResponseTarget, SDKValidationError>;
/** @internal */
export declare const UpdateSharedEnvVariableError$inboundSchema: z.ZodType<UpdateSharedEnvVariableError, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSharedEnvVariableError$Outbound = {
    code: string;
    message: string;
    key?: string | undefined;
    envVarId?: string | undefined;
    envVarKey?: string | undefined;
    action?: string | undefined;
    link?: string | undefined;
    value?: string | Array<string> | undefined;
    gitBranch?: string | undefined;
    target?: Array<string> | string | undefined;
    project?: string | undefined;
};
/** @internal */
export declare const UpdateSharedEnvVariableError$outboundSchema: z.ZodType<UpdateSharedEnvVariableError$Outbound, z.ZodTypeDef, UpdateSharedEnvVariableError>;
export declare function updateSharedEnvVariableErrorToJSON(updateSharedEnvVariableError: UpdateSharedEnvVariableError): string;
export declare function updateSharedEnvVariableErrorFromJSON(jsonString: string): SafeParseResult<UpdateSharedEnvVariableError, SDKValidationError>;
/** @internal */
export declare const UpdateSharedEnvVariableFailed$inboundSchema: z.ZodType<UpdateSharedEnvVariableFailed, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSharedEnvVariableFailed$Outbound = {
    error: UpdateSharedEnvVariableError$Outbound;
};
/** @internal */
export declare const UpdateSharedEnvVariableFailed$outboundSchema: z.ZodType<UpdateSharedEnvVariableFailed$Outbound, z.ZodTypeDef, UpdateSharedEnvVariableFailed>;
export declare function updateSharedEnvVariableFailedToJSON(updateSharedEnvVariableFailed: UpdateSharedEnvVariableFailed): string;
export declare function updateSharedEnvVariableFailedFromJSON(jsonString: string): SafeParseResult<UpdateSharedEnvVariableFailed, SDKValidationError>;
/** @internal */
export declare const UpdateSharedEnvVariableResponseBody$inboundSchema: z.ZodType<UpdateSharedEnvVariableResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSharedEnvVariableResponseBody$Outbound = {
    updated: Array<Updated$Outbound>;
    failed: Array<UpdateSharedEnvVariableFailed$Outbound>;
};
/** @internal */
export declare const UpdateSharedEnvVariableResponseBody$outboundSchema: z.ZodType<UpdateSharedEnvVariableResponseBody$Outbound, z.ZodTypeDef, UpdateSharedEnvVariableResponseBody>;
export declare function updateSharedEnvVariableResponseBodyToJSON(updateSharedEnvVariableResponseBody: UpdateSharedEnvVariableResponseBody): string;
export declare function updateSharedEnvVariableResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateSharedEnvVariableResponseBody, SDKValidationError>;
//# sourceMappingURL=updatesharedenvvariableop.d.ts.map