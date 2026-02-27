import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RequestBodyEvs = {
    /**
     * The name of the Shared Environment Variable
     */
    key: string;
    /**
     * The value of the Shared Environment Variable
     */
    value: string;
    /**
     * A comment to add context on what this Shared Environment Variable is for
     */
    comment?: string | undefined;
};
/**
 * The type of environment variable
 */
export declare const CreateSharedEnvVariableRequestBodyEnvironmentType: {
    readonly Encrypted: "encrypted";
    readonly Sensitive: "sensitive";
};
/**
 * The type of environment variable
 */
export type CreateSharedEnvVariableRequestBodyEnvironmentType = ClosedEnum<typeof CreateSharedEnvVariableRequestBodyEnvironmentType>;
export declare const CreateSharedEnvVariableRequestBodyTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateSharedEnvVariableRequestBodyTarget = ClosedEnum<typeof CreateSharedEnvVariableRequestBodyTarget>;
export type CreateSharedEnvVariableRequestBody2 = {
    evs: Array<RequestBodyEvs>;
    /**
     * The type of environment variable
     */
    type?: CreateSharedEnvVariableRequestBodyEnvironmentType | undefined;
    /**
     * The target environment of the Shared Environment Variable
     */
    target?: Array<CreateSharedEnvVariableRequestBodyTarget> | undefined;
    /**
     * Associate a Shared Environment Variable to projects.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    projectId?: Array<string> | undefined;
};
export type Evs = {
    /**
     * The name of the Shared Environment Variable
     */
    key: string;
    /**
     * The value of the Shared Environment Variable
     */
    value: string;
    /**
     * A comment to add context on what this Shared Environment Variable is for
     */
    comment?: string | undefined;
};
/**
 * The type of environment variable
 */
export declare const CreateSharedEnvVariableRequestBodyType: {
    readonly Encrypted: "encrypted";
    readonly Sensitive: "sensitive";
};
/**
 * The type of environment variable
 */
export type CreateSharedEnvVariableRequestBodyType = ClosedEnum<typeof CreateSharedEnvVariableRequestBodyType>;
export declare const RequestBodyTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type RequestBodyTarget = ClosedEnum<typeof RequestBodyTarget>;
export type CreateSharedEnvVariableRequestBody1 = {
    evs: Array<Evs>;
    /**
     * The type of environment variable
     */
    type?: CreateSharedEnvVariableRequestBodyType | undefined;
    /**
     * The target environment of the Shared Environment Variable
     */
    target: Array<RequestBodyTarget>;
    /**
     * Associate a Shared Environment Variable to projects.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    projectId?: Array<string> | undefined;
};
export type CreateSharedEnvVariableRequestBody = CreateSharedEnvVariableRequestBody1 | CreateSharedEnvVariableRequestBody2;
export type CreateSharedEnvVariableRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateSharedEnvVariableRequestBody1 | CreateSharedEnvVariableRequestBody2 | undefined;
};
/**
 * The type of this cosmos doc instance, if blank, assume secret.
 */
export declare const CreateSharedEnvVariableType: {
    readonly Encrypted: "encrypted";
    readonly Sensitive: "sensitive";
    readonly System: "system";
    readonly Plain: "plain";
};
/**
 * The type of this cosmos doc instance, if blank, assume secret.
 */
export type CreateSharedEnvVariableType = ClosedEnum<typeof CreateSharedEnvVariableType>;
/**
 * environments this env variable targets
 */
export declare const CreateSharedEnvVariableTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
/**
 * environments this env variable targets
 */
export type CreateSharedEnvVariableTarget = ClosedEnum<typeof CreateSharedEnvVariableTarget>;
export type Created = {
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
    type?: CreateSharedEnvVariableType | undefined;
    /**
     * environments this env variable targets
     */
    target?: Array<CreateSharedEnvVariableTarget> | undefined;
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
export declare const Value2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type Value2 = ClosedEnum<typeof Value2>;
export type CreateSharedEnvVariableValue = string | Array<Value2>;
export declare const CreateSharedEnvVariableTarget2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateSharedEnvVariableTarget2 = ClosedEnum<typeof CreateSharedEnvVariableTarget2>;
export declare const CreateSharedEnvVariableTarget1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateSharedEnvVariableTarget1 = ClosedEnum<typeof CreateSharedEnvVariableTarget1>;
export type CreateSharedEnvVariableEnvironmentTarget = Array<CreateSharedEnvVariableTarget1> | CreateSharedEnvVariableTarget2;
export type CreateSharedEnvVariableError = {
    code: string;
    message: string;
    key?: string | undefined;
    envVarId?: string | undefined;
    envVarKey?: string | undefined;
    action?: string | undefined;
    link?: string | undefined;
    value?: string | Array<Value2> | undefined;
    gitBranch?: string | undefined;
    target?: Array<CreateSharedEnvVariableTarget1> | CreateSharedEnvVariableTarget2 | undefined;
    project?: string | undefined;
};
export type Failed = {
    error: CreateSharedEnvVariableError;
};
export type CreateSharedEnvVariableResponseBody = {
    created: Array<Created>;
    failed: Array<Failed>;
};
/** @internal */
export declare const RequestBodyEvs$inboundSchema: z.ZodType<RequestBodyEvs, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyEvs$Outbound = {
    key: string;
    value: string;
    comment?: string | undefined;
};
/** @internal */
export declare const RequestBodyEvs$outboundSchema: z.ZodType<RequestBodyEvs$Outbound, z.ZodTypeDef, RequestBodyEvs>;
export declare function requestBodyEvsToJSON(requestBodyEvs: RequestBodyEvs): string;
export declare function requestBodyEvsFromJSON(jsonString: string): SafeParseResult<RequestBodyEvs, SDKValidationError>;
/** @internal */
export declare const CreateSharedEnvVariableRequestBodyEnvironmentType$inboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableRequestBodyEnvironmentType>;
/** @internal */
export declare const CreateSharedEnvVariableRequestBodyEnvironmentType$outboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableRequestBodyEnvironmentType>;
/** @internal */
export declare const CreateSharedEnvVariableRequestBodyTarget$inboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableRequestBodyTarget>;
/** @internal */
export declare const CreateSharedEnvVariableRequestBodyTarget$outboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableRequestBodyTarget>;
/** @internal */
export declare const CreateSharedEnvVariableRequestBody2$inboundSchema: z.ZodType<CreateSharedEnvVariableRequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSharedEnvVariableRequestBody2$Outbound = {
    evs: Array<RequestBodyEvs$Outbound>;
    type?: string | undefined;
    target?: Array<string> | undefined;
    projectId?: Array<string> | undefined;
};
/** @internal */
export declare const CreateSharedEnvVariableRequestBody2$outboundSchema: z.ZodType<CreateSharedEnvVariableRequestBody2$Outbound, z.ZodTypeDef, CreateSharedEnvVariableRequestBody2>;
export declare function createSharedEnvVariableRequestBody2ToJSON(createSharedEnvVariableRequestBody2: CreateSharedEnvVariableRequestBody2): string;
export declare function createSharedEnvVariableRequestBody2FromJSON(jsonString: string): SafeParseResult<CreateSharedEnvVariableRequestBody2, SDKValidationError>;
/** @internal */
export declare const Evs$inboundSchema: z.ZodType<Evs, z.ZodTypeDef, unknown>;
/** @internal */
export type Evs$Outbound = {
    key: string;
    value: string;
    comment?: string | undefined;
};
/** @internal */
export declare const Evs$outboundSchema: z.ZodType<Evs$Outbound, z.ZodTypeDef, Evs>;
export declare function evsToJSON(evs: Evs): string;
export declare function evsFromJSON(jsonString: string): SafeParseResult<Evs, SDKValidationError>;
/** @internal */
export declare const CreateSharedEnvVariableRequestBodyType$inboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableRequestBodyType>;
/** @internal */
export declare const CreateSharedEnvVariableRequestBodyType$outboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableRequestBodyType>;
/** @internal */
export declare const RequestBodyTarget$inboundSchema: z.ZodNativeEnum<typeof RequestBodyTarget>;
/** @internal */
export declare const RequestBodyTarget$outboundSchema: z.ZodNativeEnum<typeof RequestBodyTarget>;
/** @internal */
export declare const CreateSharedEnvVariableRequestBody1$inboundSchema: z.ZodType<CreateSharedEnvVariableRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSharedEnvVariableRequestBody1$Outbound = {
    evs: Array<Evs$Outbound>;
    type?: string | undefined;
    target: Array<string>;
    projectId?: Array<string> | undefined;
};
/** @internal */
export declare const CreateSharedEnvVariableRequestBody1$outboundSchema: z.ZodType<CreateSharedEnvVariableRequestBody1$Outbound, z.ZodTypeDef, CreateSharedEnvVariableRequestBody1>;
export declare function createSharedEnvVariableRequestBody1ToJSON(createSharedEnvVariableRequestBody1: CreateSharedEnvVariableRequestBody1): string;
export declare function createSharedEnvVariableRequestBody1FromJSON(jsonString: string): SafeParseResult<CreateSharedEnvVariableRequestBody1, SDKValidationError>;
/** @internal */
export declare const CreateSharedEnvVariableRequestBody$inboundSchema: z.ZodType<CreateSharedEnvVariableRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSharedEnvVariableRequestBody$Outbound = CreateSharedEnvVariableRequestBody1$Outbound | CreateSharedEnvVariableRequestBody2$Outbound;
/** @internal */
export declare const CreateSharedEnvVariableRequestBody$outboundSchema: z.ZodType<CreateSharedEnvVariableRequestBody$Outbound, z.ZodTypeDef, CreateSharedEnvVariableRequestBody>;
export declare function createSharedEnvVariableRequestBodyToJSON(createSharedEnvVariableRequestBody: CreateSharedEnvVariableRequestBody): string;
export declare function createSharedEnvVariableRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateSharedEnvVariableRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateSharedEnvVariableRequest$inboundSchema: z.ZodType<CreateSharedEnvVariableRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSharedEnvVariableRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateSharedEnvVariableRequestBody1$Outbound | CreateSharedEnvVariableRequestBody2$Outbound | undefined;
};
/** @internal */
export declare const CreateSharedEnvVariableRequest$outboundSchema: z.ZodType<CreateSharedEnvVariableRequest$Outbound, z.ZodTypeDef, CreateSharedEnvVariableRequest>;
export declare function createSharedEnvVariableRequestToJSON(createSharedEnvVariableRequest: CreateSharedEnvVariableRequest): string;
export declare function createSharedEnvVariableRequestFromJSON(jsonString: string): SafeParseResult<CreateSharedEnvVariableRequest, SDKValidationError>;
/** @internal */
export declare const CreateSharedEnvVariableType$inboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableType>;
/** @internal */
export declare const CreateSharedEnvVariableType$outboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableType>;
/** @internal */
export declare const CreateSharedEnvVariableTarget$inboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableTarget>;
/** @internal */
export declare const CreateSharedEnvVariableTarget$outboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableTarget>;
/** @internal */
export declare const Created$inboundSchema: z.ZodType<Created, z.ZodTypeDef, unknown>;
/** @internal */
export type Created$Outbound = {
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
export declare const Created$outboundSchema: z.ZodType<Created$Outbound, z.ZodTypeDef, Created>;
export declare function createdToJSON(created: Created): string;
export declare function createdFromJSON(jsonString: string): SafeParseResult<Created, SDKValidationError>;
/** @internal */
export declare const Value2$inboundSchema: z.ZodNativeEnum<typeof Value2>;
/** @internal */
export declare const Value2$outboundSchema: z.ZodNativeEnum<typeof Value2>;
/** @internal */
export declare const CreateSharedEnvVariableValue$inboundSchema: z.ZodType<CreateSharedEnvVariableValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSharedEnvVariableValue$Outbound = string | Array<string>;
/** @internal */
export declare const CreateSharedEnvVariableValue$outboundSchema: z.ZodType<CreateSharedEnvVariableValue$Outbound, z.ZodTypeDef, CreateSharedEnvVariableValue>;
export declare function createSharedEnvVariableValueToJSON(createSharedEnvVariableValue: CreateSharedEnvVariableValue): string;
export declare function createSharedEnvVariableValueFromJSON(jsonString: string): SafeParseResult<CreateSharedEnvVariableValue, SDKValidationError>;
/** @internal */
export declare const CreateSharedEnvVariableTarget2$inboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableTarget2>;
/** @internal */
export declare const CreateSharedEnvVariableTarget2$outboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableTarget2>;
/** @internal */
export declare const CreateSharedEnvVariableTarget1$inboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableTarget1>;
/** @internal */
export declare const CreateSharedEnvVariableTarget1$outboundSchema: z.ZodNativeEnum<typeof CreateSharedEnvVariableTarget1>;
/** @internal */
export declare const CreateSharedEnvVariableEnvironmentTarget$inboundSchema: z.ZodType<CreateSharedEnvVariableEnvironmentTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSharedEnvVariableEnvironmentTarget$Outbound = Array<string> | string;
/** @internal */
export declare const CreateSharedEnvVariableEnvironmentTarget$outboundSchema: z.ZodType<CreateSharedEnvVariableEnvironmentTarget$Outbound, z.ZodTypeDef, CreateSharedEnvVariableEnvironmentTarget>;
export declare function createSharedEnvVariableEnvironmentTargetToJSON(createSharedEnvVariableEnvironmentTarget: CreateSharedEnvVariableEnvironmentTarget): string;
export declare function createSharedEnvVariableEnvironmentTargetFromJSON(jsonString: string): SafeParseResult<CreateSharedEnvVariableEnvironmentTarget, SDKValidationError>;
/** @internal */
export declare const CreateSharedEnvVariableError$inboundSchema: z.ZodType<CreateSharedEnvVariableError, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSharedEnvVariableError$Outbound = {
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
export declare const CreateSharedEnvVariableError$outboundSchema: z.ZodType<CreateSharedEnvVariableError$Outbound, z.ZodTypeDef, CreateSharedEnvVariableError>;
export declare function createSharedEnvVariableErrorToJSON(createSharedEnvVariableError: CreateSharedEnvVariableError): string;
export declare function createSharedEnvVariableErrorFromJSON(jsonString: string): SafeParseResult<CreateSharedEnvVariableError, SDKValidationError>;
/** @internal */
export declare const Failed$inboundSchema: z.ZodType<Failed, z.ZodTypeDef, unknown>;
/** @internal */
export type Failed$Outbound = {
    error: CreateSharedEnvVariableError$Outbound;
};
/** @internal */
export declare const Failed$outboundSchema: z.ZodType<Failed$Outbound, z.ZodTypeDef, Failed>;
export declare function failedToJSON(failed: Failed): string;
export declare function failedFromJSON(jsonString: string): SafeParseResult<Failed, SDKValidationError>;
/** @internal */
export declare const CreateSharedEnvVariableResponseBody$inboundSchema: z.ZodType<CreateSharedEnvVariableResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSharedEnvVariableResponseBody$Outbound = {
    created: Array<Created$Outbound>;
    failed: Array<Failed$Outbound>;
};
/** @internal */
export declare const CreateSharedEnvVariableResponseBody$outboundSchema: z.ZodType<CreateSharedEnvVariableResponseBody$Outbound, z.ZodTypeDef, CreateSharedEnvVariableResponseBody>;
export declare function createSharedEnvVariableResponseBodyToJSON(createSharedEnvVariableResponseBody: CreateSharedEnvVariableResponseBody): string;
export declare function createSharedEnvVariableResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateSharedEnvVariableResponseBody, SDKValidationError>;
//# sourceMappingURL=createsharedenvvariableop.d.ts.map