import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The type of environment variable
 */
export declare const CreateProjectEnv2Type: {
    readonly System: "system";
    readonly Secret: "secret";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
/**
 * The type of environment variable
 */
export type CreateProjectEnv2Type = ClosedEnum<typeof CreateProjectEnv2Type>;
export declare const CreateProjectEnv2Target: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateProjectEnv2Target = ClosedEnum<typeof CreateProjectEnv2Target>;
export type CreateProjectEnv22 = {
    /**
     * The name of the environment variable
     */
    key: string;
    /**
     * The value of the environment variable
     */
    value: string;
    /**
     * The type of environment variable
     */
    type: CreateProjectEnv2Type;
    /**
     * The target environment of the environment variable
     */
    target?: Array<CreateProjectEnv2Target> | undefined;
    /**
     * If defined, the git branch of the environment variable (must have target=preview)
     */
    gitBranch?: string | null | undefined;
    /**
     * A comment to add context on what this environment variable is for
     */
    comment?: string | undefined;
    /**
     * The custom environment IDs associated with the environment variable
     */
    customEnvironmentIds: Array<string>;
};
/**
 * The type of environment variable
 */
export declare const TwoType: {
    readonly System: "system";
    readonly Secret: "secret";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
/**
 * The type of environment variable
 */
export type TwoType = ClosedEnum<typeof TwoType>;
export declare const TwoTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type TwoTarget = ClosedEnum<typeof TwoTarget>;
export type CreateProjectEnv21 = {
    /**
     * The name of the environment variable
     */
    key: string;
    /**
     * The value of the environment variable
     */
    value: string;
    /**
     * The type of environment variable
     */
    type: TwoType;
    /**
     * The target environment of the environment variable
     */
    target: Array<TwoTarget>;
    /**
     * If defined, the git branch of the environment variable (must have target=preview)
     */
    gitBranch?: string | null | undefined;
    /**
     * A comment to add context on what this environment variable is for
     */
    comment?: string | undefined;
    /**
     * The custom environment IDs associated with the environment variable
     */
    customEnvironmentIds?: Array<string> | undefined;
};
export type CreateProjectEnvRequestBody2 = CreateProjectEnv21 | CreateProjectEnv22;
/**
 * The type of environment variable
 */
export declare const CreateProjectEnv1Type: {
    readonly System: "system";
    readonly Secret: "secret";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
/**
 * The type of environment variable
 */
export type CreateProjectEnv1Type = ClosedEnum<typeof CreateProjectEnv1Type>;
export declare const CreateProjectEnv1Target: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateProjectEnv1Target = ClosedEnum<typeof CreateProjectEnv1Target>;
export type CreateProjectEnv12 = {
    /**
     * The name of the environment variable
     */
    key: string;
    /**
     * The value of the environment variable
     */
    value: string;
    /**
     * The type of environment variable
     */
    type: CreateProjectEnv1Type;
    /**
     * The target environment of the environment variable
     */
    target?: Array<CreateProjectEnv1Target> | undefined;
    /**
     * If defined, the git branch of the environment variable (must have target=preview)
     */
    gitBranch?: string | null | undefined;
    /**
     * A comment to add context on what this environment variable is for
     */
    comment?: string | undefined;
    /**
     * The custom environment IDs associated with the environment variable
     */
    customEnvironmentIds: Array<string>;
};
/**
 * The type of environment variable
 */
export declare const OneType: {
    readonly System: "system";
    readonly Secret: "secret";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
/**
 * The type of environment variable
 */
export type OneType = ClosedEnum<typeof OneType>;
export declare const OneTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type OneTarget = ClosedEnum<typeof OneTarget>;
export type CreateProjectEnv11 = {
    /**
     * The name of the environment variable
     */
    key: string;
    /**
     * The value of the environment variable
     */
    value: string;
    /**
     * The type of environment variable
     */
    type: OneType;
    /**
     * The target environment of the environment variable
     */
    target: Array<OneTarget>;
    /**
     * If defined, the git branch of the environment variable (must have target=preview)
     */
    gitBranch?: string | null | undefined;
    /**
     * A comment to add context on what this environment variable is for
     */
    comment?: string | undefined;
    /**
     * The custom environment IDs associated with the environment variable
     */
    customEnvironmentIds?: Array<string> | undefined;
};
export type CreateProjectEnvRequestBody1 = CreateProjectEnv11 | CreateProjectEnv12;
export type CreateProjectEnvRequestBody = CreateProjectEnv11 | CreateProjectEnv12 | Array<CreateProjectEnv21 | CreateProjectEnv22>;
export type CreateProjectEnvRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * Allow override of environment variable if it already exists
     */
    upsert?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: CreateProjectEnv11 | CreateProjectEnv12 | Array<CreateProjectEnv21 | CreateProjectEnv22>;
};
export declare const CreateProjectEnvTargetProjects2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateProjectEnvTargetProjects2 = ClosedEnum<typeof CreateProjectEnvTargetProjects2>;
export type CreateProjectEnvCreatedTarget = Array<string> | CreateProjectEnvTargetProjects2;
export declare const CreateProjectEnvCreatedType: {
    readonly Secret: "secret";
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
export type CreateProjectEnvCreatedType = ClosedEnum<typeof CreateProjectEnvCreatedType>;
export type CreateProjectEnvContentHintProjects15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type CreateProjectEnvContentHintProjects14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type CreateProjectEnvContentHintProjects13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects12 = {
    type: "postgres-database";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects11 = {
    type: "postgres-password";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects10 = {
    type: "postgres-host";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects9 = {
    type: "postgres-user";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects6 = {
    type: "postgres-url";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type CreateProjectEnvContentHintProjects1 = {
    type: "redis-url";
    storeId: string;
};
export type CreateProjectEnvCreatedContentHint = CreateProjectEnvContentHintProjects1 | CreateProjectEnvContentHintProjects2 | CreateProjectEnvContentHintProjects3 | CreateProjectEnvContentHintProjects4 | CreateProjectEnvContentHintProjects5 | CreateProjectEnvContentHintProjects6 | CreateProjectEnvContentHintProjects7 | CreateProjectEnvContentHintProjects8 | CreateProjectEnvContentHintProjects9 | CreateProjectEnvContentHintProjects10 | CreateProjectEnvContentHintProjects11 | CreateProjectEnvContentHintProjects12 | CreateProjectEnvContentHintProjects13 | CreateProjectEnvContentHintProjects14 | CreateProjectEnvContentHintProjects15;
export declare const CreateProjectEnvCreatedProjectsResponseType: {
    readonly FlagsSecret: "flags-secret";
};
export type CreateProjectEnvCreatedProjectsResponseType = ClosedEnum<typeof CreateProjectEnvCreatedProjectsResponseType>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type CreateProjectEnvCreatedInternalContentHint = {
    type: CreateProjectEnvCreatedProjectsResponseType;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type Created2 = {
    target?: Array<string> | CreateProjectEnvTargetProjects2 | undefined;
    type: CreateProjectEnvCreatedType;
    /**
     * This is used to identify variables that have been migrated from type secret to sensitive.
     */
    sunsetSecretId?: string | undefined;
    /**
     * Legacy now-encryption ciphertext, present after migration swaps value/vsmValue
     */
    legacyValue?: string | undefined;
    decrypted?: boolean | undefined;
    value: string;
    vsmValue?: string | undefined;
    id?: string | undefined;
    key: string;
    configurationId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    createdBy?: string | null | undefined;
    updatedBy?: string | null | undefined;
    gitBranch?: string | undefined;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    contentHint?: CreateProjectEnvContentHintProjects1 | CreateProjectEnvContentHintProjects2 | CreateProjectEnvContentHintProjects3 | CreateProjectEnvContentHintProjects4 | CreateProjectEnvContentHintProjects5 | CreateProjectEnvContentHintProjects6 | CreateProjectEnvContentHintProjects7 | CreateProjectEnvContentHintProjects8 | CreateProjectEnvContentHintProjects9 | CreateProjectEnvContentHintProjects10 | CreateProjectEnvContentHintProjects11 | CreateProjectEnvContentHintProjects12 | CreateProjectEnvContentHintProjects13 | CreateProjectEnvContentHintProjects14 | CreateProjectEnvContentHintProjects15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: CreateProjectEnvCreatedInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    system?: boolean | undefined;
};
export declare const CreateProjectEnvTarget2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateProjectEnvTarget2 = ClosedEnum<typeof CreateProjectEnvTarget2>;
export declare const CreateProjectEnvTarget1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateProjectEnvTarget1 = ClosedEnum<typeof CreateProjectEnvTarget1>;
export type CreatedTarget = Array<CreateProjectEnvTarget1> | CreateProjectEnvTarget2;
export declare const CreatedType: {
    readonly Secret: "secret";
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
export type CreatedType = ClosedEnum<typeof CreatedType>;
export type CreateProjectEnvContentHint15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type CreateProjectEnvContentHint14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type CreateProjectEnvContentHint13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type CreateProjectEnvContentHint12 = {
    type: "postgres-database";
    storeId: string;
};
export type CreateProjectEnvContentHint11 = {
    type: "postgres-password";
    storeId: string;
};
export type CreateProjectEnvContentHint10 = {
    type: "postgres-host";
    storeId: string;
};
export type CreateProjectEnvContentHint9 = {
    type: "postgres-user";
    storeId: string;
};
export type CreateProjectEnvContentHint8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type CreateProjectEnvContentHint7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type CreateProjectEnvContentHint6 = {
    type: "postgres-url";
    storeId: string;
};
export type CreateProjectEnvContentHint5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type CreateProjectEnvContentHint4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type CreateProjectEnvContentHint3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type CreateProjectEnvContentHint2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type CreateProjectEnvContentHint1 = {
    type: "redis-url";
    storeId: string;
};
export type CreatedContentHint = CreateProjectEnvContentHint1 | CreateProjectEnvContentHint2 | CreateProjectEnvContentHint3 | CreateProjectEnvContentHint4 | CreateProjectEnvContentHint5 | CreateProjectEnvContentHint6 | CreateProjectEnvContentHint7 | CreateProjectEnvContentHint8 | CreateProjectEnvContentHint9 | CreateProjectEnvContentHint10 | CreateProjectEnvContentHint11 | CreateProjectEnvContentHint12 | CreateProjectEnvContentHint13 | CreateProjectEnvContentHint14 | CreateProjectEnvContentHint15;
export declare const CreateProjectEnvCreatedProjectsType: {
    readonly FlagsSecret: "flags-secret";
};
export type CreateProjectEnvCreatedProjectsType = ClosedEnum<typeof CreateProjectEnvCreatedProjectsType>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type CreatedInternalContentHint = {
    type: CreateProjectEnvCreatedProjectsType;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type Created1 = {
    target?: Array<CreateProjectEnvTarget1> | CreateProjectEnvTarget2 | undefined;
    type: CreatedType;
    /**
     * This is used to identify variables that have been migrated from type secret to sensitive.
     */
    sunsetSecretId?: string | undefined;
    /**
     * Legacy now-encryption ciphertext, present after migration swaps value/vsmValue
     */
    legacyValue?: string | undefined;
    decrypted?: boolean | undefined;
    value: string;
    vsmValue?: string | undefined;
    id?: string | undefined;
    key: string;
    configurationId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    createdBy?: string | null | undefined;
    updatedBy?: string | null | undefined;
    gitBranch?: string | undefined;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    contentHint?: CreateProjectEnvContentHint1 | CreateProjectEnvContentHint2 | CreateProjectEnvContentHint3 | CreateProjectEnvContentHint4 | CreateProjectEnvContentHint5 | CreateProjectEnvContentHint6 | CreateProjectEnvContentHint7 | CreateProjectEnvContentHint8 | CreateProjectEnvContentHint9 | CreateProjectEnvContentHint10 | CreateProjectEnvContentHint11 | CreateProjectEnvContentHint12 | CreateProjectEnvContentHint13 | CreateProjectEnvContentHint14 | CreateProjectEnvContentHint15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: CreatedInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    system?: boolean | undefined;
};
export type CreateProjectEnvCreated = Created1 | Array<Created2>;
export declare const CreateProjectEnvValue2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateProjectEnvValue2 = ClosedEnum<typeof CreateProjectEnvValue2>;
export type CreateProjectEnvValue = string | Array<CreateProjectEnvValue2>;
export declare const CreateProjectEnvTargetProjectsResponse2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateProjectEnvTargetProjectsResponse2 = ClosedEnum<typeof CreateProjectEnvTargetProjectsResponse2>;
export declare const CreateProjectEnvTargetProjects1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateProjectEnvTargetProjects1 = ClosedEnum<typeof CreateProjectEnvTargetProjects1>;
export type CreateProjectEnvTarget = Array<CreateProjectEnvTargetProjects1> | CreateProjectEnvTargetProjectsResponse2;
export type CreateProjectEnvError = {
    code: string;
    message: string;
    key?: string | undefined;
    envVarId?: string | undefined;
    envVarKey?: string | undefined;
    action?: string | undefined;
    link?: string | undefined;
    value?: string | Array<CreateProjectEnvValue2> | undefined;
    gitBranch?: string | undefined;
    target?: Array<CreateProjectEnvTargetProjects1> | CreateProjectEnvTargetProjectsResponse2 | undefined;
    project?: string | undefined;
};
export type CreateProjectEnvFailed = {
    error: CreateProjectEnvError;
};
/**
 * The environment variable was created successfully
 */
export type CreateProjectEnvResponseBody = {
    created: Created1 | Array<Created2>;
    failed: Array<CreateProjectEnvFailed>;
};
/** @internal */
export declare const CreateProjectEnv2Type$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnv2Type>;
/** @internal */
export declare const CreateProjectEnv2Type$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnv2Type>;
/** @internal */
export declare const CreateProjectEnv2Target$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnv2Target>;
/** @internal */
export declare const CreateProjectEnv2Target$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnv2Target>;
/** @internal */
export declare const CreateProjectEnv22$inboundSchema: z.ZodType<CreateProjectEnv22, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnv22$Outbound = {
    key: string;
    value: string;
    type: string;
    target?: Array<string> | undefined;
    gitBranch?: string | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds: Array<string>;
};
/** @internal */
export declare const CreateProjectEnv22$outboundSchema: z.ZodType<CreateProjectEnv22$Outbound, z.ZodTypeDef, CreateProjectEnv22>;
export declare function createProjectEnv22ToJSON(createProjectEnv22: CreateProjectEnv22): string;
export declare function createProjectEnv22FromJSON(jsonString: string): SafeParseResult<CreateProjectEnv22, SDKValidationError>;
/** @internal */
export declare const TwoType$inboundSchema: z.ZodNativeEnum<typeof TwoType>;
/** @internal */
export declare const TwoType$outboundSchema: z.ZodNativeEnum<typeof TwoType>;
/** @internal */
export declare const TwoTarget$inboundSchema: z.ZodNativeEnum<typeof TwoTarget>;
/** @internal */
export declare const TwoTarget$outboundSchema: z.ZodNativeEnum<typeof TwoTarget>;
/** @internal */
export declare const CreateProjectEnv21$inboundSchema: z.ZodType<CreateProjectEnv21, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnv21$Outbound = {
    key: string;
    value: string;
    type: string;
    target: Array<string>;
    gitBranch?: string | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/** @internal */
export declare const CreateProjectEnv21$outboundSchema: z.ZodType<CreateProjectEnv21$Outbound, z.ZodTypeDef, CreateProjectEnv21>;
export declare function createProjectEnv21ToJSON(createProjectEnv21: CreateProjectEnv21): string;
export declare function createProjectEnv21FromJSON(jsonString: string): SafeParseResult<CreateProjectEnv21, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvRequestBody2$inboundSchema: z.ZodType<CreateProjectEnvRequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvRequestBody2$Outbound = CreateProjectEnv21$Outbound | CreateProjectEnv22$Outbound;
/** @internal */
export declare const CreateProjectEnvRequestBody2$outboundSchema: z.ZodType<CreateProjectEnvRequestBody2$Outbound, z.ZodTypeDef, CreateProjectEnvRequestBody2>;
export declare function createProjectEnvRequestBody2ToJSON(createProjectEnvRequestBody2: CreateProjectEnvRequestBody2): string;
export declare function createProjectEnvRequestBody2FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvRequestBody2, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnv1Type$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnv1Type>;
/** @internal */
export declare const CreateProjectEnv1Type$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnv1Type>;
/** @internal */
export declare const CreateProjectEnv1Target$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnv1Target>;
/** @internal */
export declare const CreateProjectEnv1Target$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnv1Target>;
/** @internal */
export declare const CreateProjectEnv12$inboundSchema: z.ZodType<CreateProjectEnv12, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnv12$Outbound = {
    key: string;
    value: string;
    type: string;
    target?: Array<string> | undefined;
    gitBranch?: string | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds: Array<string>;
};
/** @internal */
export declare const CreateProjectEnv12$outboundSchema: z.ZodType<CreateProjectEnv12$Outbound, z.ZodTypeDef, CreateProjectEnv12>;
export declare function createProjectEnv12ToJSON(createProjectEnv12: CreateProjectEnv12): string;
export declare function createProjectEnv12FromJSON(jsonString: string): SafeParseResult<CreateProjectEnv12, SDKValidationError>;
/** @internal */
export declare const OneType$inboundSchema: z.ZodNativeEnum<typeof OneType>;
/** @internal */
export declare const OneType$outboundSchema: z.ZodNativeEnum<typeof OneType>;
/** @internal */
export declare const OneTarget$inboundSchema: z.ZodNativeEnum<typeof OneTarget>;
/** @internal */
export declare const OneTarget$outboundSchema: z.ZodNativeEnum<typeof OneTarget>;
/** @internal */
export declare const CreateProjectEnv11$inboundSchema: z.ZodType<CreateProjectEnv11, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnv11$Outbound = {
    key: string;
    value: string;
    type: string;
    target: Array<string>;
    gitBranch?: string | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/** @internal */
export declare const CreateProjectEnv11$outboundSchema: z.ZodType<CreateProjectEnv11$Outbound, z.ZodTypeDef, CreateProjectEnv11>;
export declare function createProjectEnv11ToJSON(createProjectEnv11: CreateProjectEnv11): string;
export declare function createProjectEnv11FromJSON(jsonString: string): SafeParseResult<CreateProjectEnv11, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvRequestBody1$inboundSchema: z.ZodType<CreateProjectEnvRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvRequestBody1$Outbound = CreateProjectEnv11$Outbound | CreateProjectEnv12$Outbound;
/** @internal */
export declare const CreateProjectEnvRequestBody1$outboundSchema: z.ZodType<CreateProjectEnvRequestBody1$Outbound, z.ZodTypeDef, CreateProjectEnvRequestBody1>;
export declare function createProjectEnvRequestBody1ToJSON(createProjectEnvRequestBody1: CreateProjectEnvRequestBody1): string;
export declare function createProjectEnvRequestBody1FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvRequestBody1, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvRequestBody$inboundSchema: z.ZodType<CreateProjectEnvRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvRequestBody$Outbound = CreateProjectEnv11$Outbound | CreateProjectEnv12$Outbound | Array<CreateProjectEnv21$Outbound | CreateProjectEnv22$Outbound>;
/** @internal */
export declare const CreateProjectEnvRequestBody$outboundSchema: z.ZodType<CreateProjectEnvRequestBody$Outbound, z.ZodTypeDef, CreateProjectEnvRequestBody>;
export declare function createProjectEnvRequestBodyToJSON(createProjectEnvRequestBody: CreateProjectEnvRequestBody): string;
export declare function createProjectEnvRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateProjectEnvRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvRequest$inboundSchema: z.ZodType<CreateProjectEnvRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvRequest$Outbound = {
    idOrName: string;
    upsert?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: CreateProjectEnv11$Outbound | CreateProjectEnv12$Outbound | Array<CreateProjectEnv21$Outbound | CreateProjectEnv22$Outbound>;
};
/** @internal */
export declare const CreateProjectEnvRequest$outboundSchema: z.ZodType<CreateProjectEnvRequest$Outbound, z.ZodTypeDef, CreateProjectEnvRequest>;
export declare function createProjectEnvRequestToJSON(createProjectEnvRequest: CreateProjectEnvRequest): string;
export declare function createProjectEnvRequestFromJSON(jsonString: string): SafeParseResult<CreateProjectEnvRequest, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvTargetProjects2$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvTargetProjects2>;
/** @internal */
export declare const CreateProjectEnvTargetProjects2$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvTargetProjects2>;
/** @internal */
export declare const CreateProjectEnvCreatedTarget$inboundSchema: z.ZodType<CreateProjectEnvCreatedTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvCreatedTarget$Outbound = Array<string> | string;
/** @internal */
export declare const CreateProjectEnvCreatedTarget$outboundSchema: z.ZodType<CreateProjectEnvCreatedTarget$Outbound, z.ZodTypeDef, CreateProjectEnvCreatedTarget>;
export declare function createProjectEnvCreatedTargetToJSON(createProjectEnvCreatedTarget: CreateProjectEnvCreatedTarget): string;
export declare function createProjectEnvCreatedTargetFromJSON(jsonString: string): SafeParseResult<CreateProjectEnvCreatedTarget, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvCreatedType$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvCreatedType>;
/** @internal */
export declare const CreateProjectEnvCreatedType$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvCreatedType>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects15$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects15, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects15$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects15$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects15>;
export declare function createProjectEnvContentHintProjects15ToJSON(createProjectEnvContentHintProjects15: CreateProjectEnvContentHintProjects15): string;
export declare function createProjectEnvContentHintProjects15FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects15, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects14$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects14, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects14$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects14$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects14>;
export declare function createProjectEnvContentHintProjects14ToJSON(createProjectEnvContentHintProjects14: CreateProjectEnvContentHintProjects14): string;
export declare function createProjectEnvContentHintProjects14FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects14, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects13$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects13, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects13$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects13$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects13>;
export declare function createProjectEnvContentHintProjects13ToJSON(createProjectEnvContentHintProjects13: CreateProjectEnvContentHintProjects13): string;
export declare function createProjectEnvContentHintProjects13FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects13, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects12$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects12, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects12$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects12$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects12>;
export declare function createProjectEnvContentHintProjects12ToJSON(createProjectEnvContentHintProjects12: CreateProjectEnvContentHintProjects12): string;
export declare function createProjectEnvContentHintProjects12FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects12, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects11$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects11, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects11$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects11$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects11>;
export declare function createProjectEnvContentHintProjects11ToJSON(createProjectEnvContentHintProjects11: CreateProjectEnvContentHintProjects11): string;
export declare function createProjectEnvContentHintProjects11FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects11, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects10$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects10, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects10$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects10$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects10>;
export declare function createProjectEnvContentHintProjects10ToJSON(createProjectEnvContentHintProjects10: CreateProjectEnvContentHintProjects10): string;
export declare function createProjectEnvContentHintProjects10FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects10, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects9$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects9, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects9$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects9$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects9>;
export declare function createProjectEnvContentHintProjects9ToJSON(createProjectEnvContentHintProjects9: CreateProjectEnvContentHintProjects9): string;
export declare function createProjectEnvContentHintProjects9FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects9, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects8$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects8, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects8$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects8$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects8>;
export declare function createProjectEnvContentHintProjects8ToJSON(createProjectEnvContentHintProjects8: CreateProjectEnvContentHintProjects8): string;
export declare function createProjectEnvContentHintProjects8FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects8, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects7$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects7, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects7$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects7$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects7>;
export declare function createProjectEnvContentHintProjects7ToJSON(createProjectEnvContentHintProjects7: CreateProjectEnvContentHintProjects7): string;
export declare function createProjectEnvContentHintProjects7FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects7, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects6$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects6, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects6$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects6$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects6>;
export declare function createProjectEnvContentHintProjects6ToJSON(createProjectEnvContentHintProjects6: CreateProjectEnvContentHintProjects6): string;
export declare function createProjectEnvContentHintProjects6FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects6, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects5$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects5, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects5$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects5$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects5>;
export declare function createProjectEnvContentHintProjects5ToJSON(createProjectEnvContentHintProjects5: CreateProjectEnvContentHintProjects5): string;
export declare function createProjectEnvContentHintProjects5FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects5, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects4$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects4, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects4$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects4$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects4>;
export declare function createProjectEnvContentHintProjects4ToJSON(createProjectEnvContentHintProjects4: CreateProjectEnvContentHintProjects4): string;
export declare function createProjectEnvContentHintProjects4FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects4, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects3$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects3, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects3$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects3$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects3>;
export declare function createProjectEnvContentHintProjects3ToJSON(createProjectEnvContentHintProjects3: CreateProjectEnvContentHintProjects3): string;
export declare function createProjectEnvContentHintProjects3FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects3, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects2$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects2$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects2$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects2>;
export declare function createProjectEnvContentHintProjects2ToJSON(createProjectEnvContentHintProjects2: CreateProjectEnvContentHintProjects2): string;
export declare function createProjectEnvContentHintProjects2FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects2, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHintProjects1$inboundSchema: z.ZodType<CreateProjectEnvContentHintProjects1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHintProjects1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHintProjects1$outboundSchema: z.ZodType<CreateProjectEnvContentHintProjects1$Outbound, z.ZodTypeDef, CreateProjectEnvContentHintProjects1>;
export declare function createProjectEnvContentHintProjects1ToJSON(createProjectEnvContentHintProjects1: CreateProjectEnvContentHintProjects1): string;
export declare function createProjectEnvContentHintProjects1FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHintProjects1, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvCreatedContentHint$inboundSchema: z.ZodType<CreateProjectEnvCreatedContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvCreatedContentHint$Outbound = CreateProjectEnvContentHintProjects1$Outbound | CreateProjectEnvContentHintProjects2$Outbound | CreateProjectEnvContentHintProjects3$Outbound | CreateProjectEnvContentHintProjects4$Outbound | CreateProjectEnvContentHintProjects5$Outbound | CreateProjectEnvContentHintProjects6$Outbound | CreateProjectEnvContentHintProjects7$Outbound | CreateProjectEnvContentHintProjects8$Outbound | CreateProjectEnvContentHintProjects9$Outbound | CreateProjectEnvContentHintProjects10$Outbound | CreateProjectEnvContentHintProjects11$Outbound | CreateProjectEnvContentHintProjects12$Outbound | CreateProjectEnvContentHintProjects13$Outbound | CreateProjectEnvContentHintProjects14$Outbound | CreateProjectEnvContentHintProjects15$Outbound;
/** @internal */
export declare const CreateProjectEnvCreatedContentHint$outboundSchema: z.ZodType<CreateProjectEnvCreatedContentHint$Outbound, z.ZodTypeDef, CreateProjectEnvCreatedContentHint>;
export declare function createProjectEnvCreatedContentHintToJSON(createProjectEnvCreatedContentHint: CreateProjectEnvCreatedContentHint): string;
export declare function createProjectEnvCreatedContentHintFromJSON(jsonString: string): SafeParseResult<CreateProjectEnvCreatedContentHint, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvCreatedProjectsResponseType$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvCreatedProjectsResponseType>;
/** @internal */
export declare const CreateProjectEnvCreatedProjectsResponseType$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvCreatedProjectsResponseType>;
/** @internal */
export declare const CreateProjectEnvCreatedInternalContentHint$inboundSchema: z.ZodType<CreateProjectEnvCreatedInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvCreatedInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const CreateProjectEnvCreatedInternalContentHint$outboundSchema: z.ZodType<CreateProjectEnvCreatedInternalContentHint$Outbound, z.ZodTypeDef, CreateProjectEnvCreatedInternalContentHint>;
export declare function createProjectEnvCreatedInternalContentHintToJSON(createProjectEnvCreatedInternalContentHint: CreateProjectEnvCreatedInternalContentHint): string;
export declare function createProjectEnvCreatedInternalContentHintFromJSON(jsonString: string): SafeParseResult<CreateProjectEnvCreatedInternalContentHint, SDKValidationError>;
/** @internal */
export declare const Created2$inboundSchema: z.ZodType<Created2, z.ZodTypeDef, unknown>;
/** @internal */
export type Created2$Outbound = {
    target?: Array<string> | string | undefined;
    type: string;
    sunsetSecretId?: string | undefined;
    legacyValue?: string | undefined;
    decrypted?: boolean | undefined;
    value: string;
    vsmValue?: string | undefined;
    id?: string | undefined;
    key: string;
    configurationId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    createdBy?: string | null | undefined;
    updatedBy?: string | null | undefined;
    gitBranch?: string | undefined;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    contentHint?: CreateProjectEnvContentHintProjects1$Outbound | CreateProjectEnvContentHintProjects2$Outbound | CreateProjectEnvContentHintProjects3$Outbound | CreateProjectEnvContentHintProjects4$Outbound | CreateProjectEnvContentHintProjects5$Outbound | CreateProjectEnvContentHintProjects6$Outbound | CreateProjectEnvContentHintProjects7$Outbound | CreateProjectEnvContentHintProjects8$Outbound | CreateProjectEnvContentHintProjects9$Outbound | CreateProjectEnvContentHintProjects10$Outbound | CreateProjectEnvContentHintProjects11$Outbound | CreateProjectEnvContentHintProjects12$Outbound | CreateProjectEnvContentHintProjects13$Outbound | CreateProjectEnvContentHintProjects14$Outbound | CreateProjectEnvContentHintProjects15$Outbound | null | undefined;
    internalContentHint?: CreateProjectEnvCreatedInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    system?: boolean | undefined;
};
/** @internal */
export declare const Created2$outboundSchema: z.ZodType<Created2$Outbound, z.ZodTypeDef, Created2>;
export declare function created2ToJSON(created2: Created2): string;
export declare function created2FromJSON(jsonString: string): SafeParseResult<Created2, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvTarget2$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvTarget2>;
/** @internal */
export declare const CreateProjectEnvTarget2$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvTarget2>;
/** @internal */
export declare const CreateProjectEnvTarget1$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvTarget1>;
/** @internal */
export declare const CreateProjectEnvTarget1$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvTarget1>;
/** @internal */
export declare const CreatedTarget$inboundSchema: z.ZodType<CreatedTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type CreatedTarget$Outbound = Array<string> | string;
/** @internal */
export declare const CreatedTarget$outboundSchema: z.ZodType<CreatedTarget$Outbound, z.ZodTypeDef, CreatedTarget>;
export declare function createdTargetToJSON(createdTarget: CreatedTarget): string;
export declare function createdTargetFromJSON(jsonString: string): SafeParseResult<CreatedTarget, SDKValidationError>;
/** @internal */
export declare const CreatedType$inboundSchema: z.ZodNativeEnum<typeof CreatedType>;
/** @internal */
export declare const CreatedType$outboundSchema: z.ZodNativeEnum<typeof CreatedType>;
/** @internal */
export declare const CreateProjectEnvContentHint15$inboundSchema: z.ZodType<CreateProjectEnvContentHint15, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint15$outboundSchema: z.ZodType<CreateProjectEnvContentHint15$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint15>;
export declare function createProjectEnvContentHint15ToJSON(createProjectEnvContentHint15: CreateProjectEnvContentHint15): string;
export declare function createProjectEnvContentHint15FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint15, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint14$inboundSchema: z.ZodType<CreateProjectEnvContentHint14, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint14$outboundSchema: z.ZodType<CreateProjectEnvContentHint14$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint14>;
export declare function createProjectEnvContentHint14ToJSON(createProjectEnvContentHint14: CreateProjectEnvContentHint14): string;
export declare function createProjectEnvContentHint14FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint14, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint13$inboundSchema: z.ZodType<CreateProjectEnvContentHint13, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint13$outboundSchema: z.ZodType<CreateProjectEnvContentHint13$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint13>;
export declare function createProjectEnvContentHint13ToJSON(createProjectEnvContentHint13: CreateProjectEnvContentHint13): string;
export declare function createProjectEnvContentHint13FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint13, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint12$inboundSchema: z.ZodType<CreateProjectEnvContentHint12, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint12$outboundSchema: z.ZodType<CreateProjectEnvContentHint12$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint12>;
export declare function createProjectEnvContentHint12ToJSON(createProjectEnvContentHint12: CreateProjectEnvContentHint12): string;
export declare function createProjectEnvContentHint12FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint12, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint11$inboundSchema: z.ZodType<CreateProjectEnvContentHint11, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint11$outboundSchema: z.ZodType<CreateProjectEnvContentHint11$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint11>;
export declare function createProjectEnvContentHint11ToJSON(createProjectEnvContentHint11: CreateProjectEnvContentHint11): string;
export declare function createProjectEnvContentHint11FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint11, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint10$inboundSchema: z.ZodType<CreateProjectEnvContentHint10, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint10$outboundSchema: z.ZodType<CreateProjectEnvContentHint10$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint10>;
export declare function createProjectEnvContentHint10ToJSON(createProjectEnvContentHint10: CreateProjectEnvContentHint10): string;
export declare function createProjectEnvContentHint10FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint10, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint9$inboundSchema: z.ZodType<CreateProjectEnvContentHint9, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint9$outboundSchema: z.ZodType<CreateProjectEnvContentHint9$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint9>;
export declare function createProjectEnvContentHint9ToJSON(createProjectEnvContentHint9: CreateProjectEnvContentHint9): string;
export declare function createProjectEnvContentHint9FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint9, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint8$inboundSchema: z.ZodType<CreateProjectEnvContentHint8, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint8$outboundSchema: z.ZodType<CreateProjectEnvContentHint8$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint8>;
export declare function createProjectEnvContentHint8ToJSON(createProjectEnvContentHint8: CreateProjectEnvContentHint8): string;
export declare function createProjectEnvContentHint8FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint8, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint7$inboundSchema: z.ZodType<CreateProjectEnvContentHint7, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint7$outboundSchema: z.ZodType<CreateProjectEnvContentHint7$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint7>;
export declare function createProjectEnvContentHint7ToJSON(createProjectEnvContentHint7: CreateProjectEnvContentHint7): string;
export declare function createProjectEnvContentHint7FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint7, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint6$inboundSchema: z.ZodType<CreateProjectEnvContentHint6, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint6$outboundSchema: z.ZodType<CreateProjectEnvContentHint6$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint6>;
export declare function createProjectEnvContentHint6ToJSON(createProjectEnvContentHint6: CreateProjectEnvContentHint6): string;
export declare function createProjectEnvContentHint6FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint6, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint5$inboundSchema: z.ZodType<CreateProjectEnvContentHint5, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint5$outboundSchema: z.ZodType<CreateProjectEnvContentHint5$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint5>;
export declare function createProjectEnvContentHint5ToJSON(createProjectEnvContentHint5: CreateProjectEnvContentHint5): string;
export declare function createProjectEnvContentHint5FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint5, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint4$inboundSchema: z.ZodType<CreateProjectEnvContentHint4, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint4$outboundSchema: z.ZodType<CreateProjectEnvContentHint4$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint4>;
export declare function createProjectEnvContentHint4ToJSON(createProjectEnvContentHint4: CreateProjectEnvContentHint4): string;
export declare function createProjectEnvContentHint4FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint4, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint3$inboundSchema: z.ZodType<CreateProjectEnvContentHint3, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint3$outboundSchema: z.ZodType<CreateProjectEnvContentHint3$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint3>;
export declare function createProjectEnvContentHint3ToJSON(createProjectEnvContentHint3: CreateProjectEnvContentHint3): string;
export declare function createProjectEnvContentHint3FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint3, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint2$inboundSchema: z.ZodType<CreateProjectEnvContentHint2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint2$outboundSchema: z.ZodType<CreateProjectEnvContentHint2$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint2>;
export declare function createProjectEnvContentHint2ToJSON(createProjectEnvContentHint2: CreateProjectEnvContentHint2): string;
export declare function createProjectEnvContentHint2FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint2, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvContentHint1$inboundSchema: z.ZodType<CreateProjectEnvContentHint1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvContentHint1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const CreateProjectEnvContentHint1$outboundSchema: z.ZodType<CreateProjectEnvContentHint1$Outbound, z.ZodTypeDef, CreateProjectEnvContentHint1>;
export declare function createProjectEnvContentHint1ToJSON(createProjectEnvContentHint1: CreateProjectEnvContentHint1): string;
export declare function createProjectEnvContentHint1FromJSON(jsonString: string): SafeParseResult<CreateProjectEnvContentHint1, SDKValidationError>;
/** @internal */
export declare const CreatedContentHint$inboundSchema: z.ZodType<CreatedContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type CreatedContentHint$Outbound = CreateProjectEnvContentHint1$Outbound | CreateProjectEnvContentHint2$Outbound | CreateProjectEnvContentHint3$Outbound | CreateProjectEnvContentHint4$Outbound | CreateProjectEnvContentHint5$Outbound | CreateProjectEnvContentHint6$Outbound | CreateProjectEnvContentHint7$Outbound | CreateProjectEnvContentHint8$Outbound | CreateProjectEnvContentHint9$Outbound | CreateProjectEnvContentHint10$Outbound | CreateProjectEnvContentHint11$Outbound | CreateProjectEnvContentHint12$Outbound | CreateProjectEnvContentHint13$Outbound | CreateProjectEnvContentHint14$Outbound | CreateProjectEnvContentHint15$Outbound;
/** @internal */
export declare const CreatedContentHint$outboundSchema: z.ZodType<CreatedContentHint$Outbound, z.ZodTypeDef, CreatedContentHint>;
export declare function createdContentHintToJSON(createdContentHint: CreatedContentHint): string;
export declare function createdContentHintFromJSON(jsonString: string): SafeParseResult<CreatedContentHint, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvCreatedProjectsType$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvCreatedProjectsType>;
/** @internal */
export declare const CreateProjectEnvCreatedProjectsType$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvCreatedProjectsType>;
/** @internal */
export declare const CreatedInternalContentHint$inboundSchema: z.ZodType<CreatedInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type CreatedInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const CreatedInternalContentHint$outboundSchema: z.ZodType<CreatedInternalContentHint$Outbound, z.ZodTypeDef, CreatedInternalContentHint>;
export declare function createdInternalContentHintToJSON(createdInternalContentHint: CreatedInternalContentHint): string;
export declare function createdInternalContentHintFromJSON(jsonString: string): SafeParseResult<CreatedInternalContentHint, SDKValidationError>;
/** @internal */
export declare const Created1$inboundSchema: z.ZodType<Created1, z.ZodTypeDef, unknown>;
/** @internal */
export type Created1$Outbound = {
    target?: Array<string> | string | undefined;
    type: string;
    sunsetSecretId?: string | undefined;
    legacyValue?: string | undefined;
    decrypted?: boolean | undefined;
    value: string;
    vsmValue?: string | undefined;
    id?: string | undefined;
    key: string;
    configurationId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    createdBy?: string | null | undefined;
    updatedBy?: string | null | undefined;
    gitBranch?: string | undefined;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    contentHint?: CreateProjectEnvContentHint1$Outbound | CreateProjectEnvContentHint2$Outbound | CreateProjectEnvContentHint3$Outbound | CreateProjectEnvContentHint4$Outbound | CreateProjectEnvContentHint5$Outbound | CreateProjectEnvContentHint6$Outbound | CreateProjectEnvContentHint7$Outbound | CreateProjectEnvContentHint8$Outbound | CreateProjectEnvContentHint9$Outbound | CreateProjectEnvContentHint10$Outbound | CreateProjectEnvContentHint11$Outbound | CreateProjectEnvContentHint12$Outbound | CreateProjectEnvContentHint13$Outbound | CreateProjectEnvContentHint14$Outbound | CreateProjectEnvContentHint15$Outbound | null | undefined;
    internalContentHint?: CreatedInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    system?: boolean | undefined;
};
/** @internal */
export declare const Created1$outboundSchema: z.ZodType<Created1$Outbound, z.ZodTypeDef, Created1>;
export declare function created1ToJSON(created1: Created1): string;
export declare function created1FromJSON(jsonString: string): SafeParseResult<Created1, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvCreated$inboundSchema: z.ZodType<CreateProjectEnvCreated, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvCreated$Outbound = Created1$Outbound | Array<Created2$Outbound>;
/** @internal */
export declare const CreateProjectEnvCreated$outboundSchema: z.ZodType<CreateProjectEnvCreated$Outbound, z.ZodTypeDef, CreateProjectEnvCreated>;
export declare function createProjectEnvCreatedToJSON(createProjectEnvCreated: CreateProjectEnvCreated): string;
export declare function createProjectEnvCreatedFromJSON(jsonString: string): SafeParseResult<CreateProjectEnvCreated, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvValue2$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvValue2>;
/** @internal */
export declare const CreateProjectEnvValue2$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvValue2>;
/** @internal */
export declare const CreateProjectEnvValue$inboundSchema: z.ZodType<CreateProjectEnvValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvValue$Outbound = string | Array<string>;
/** @internal */
export declare const CreateProjectEnvValue$outboundSchema: z.ZodType<CreateProjectEnvValue$Outbound, z.ZodTypeDef, CreateProjectEnvValue>;
export declare function createProjectEnvValueToJSON(createProjectEnvValue: CreateProjectEnvValue): string;
export declare function createProjectEnvValueFromJSON(jsonString: string): SafeParseResult<CreateProjectEnvValue, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvTargetProjectsResponse2$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvTargetProjectsResponse2>;
/** @internal */
export declare const CreateProjectEnvTargetProjectsResponse2$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvTargetProjectsResponse2>;
/** @internal */
export declare const CreateProjectEnvTargetProjects1$inboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvTargetProjects1>;
/** @internal */
export declare const CreateProjectEnvTargetProjects1$outboundSchema: z.ZodNativeEnum<typeof CreateProjectEnvTargetProjects1>;
/** @internal */
export declare const CreateProjectEnvTarget$inboundSchema: z.ZodType<CreateProjectEnvTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvTarget$Outbound = Array<string> | string;
/** @internal */
export declare const CreateProjectEnvTarget$outboundSchema: z.ZodType<CreateProjectEnvTarget$Outbound, z.ZodTypeDef, CreateProjectEnvTarget>;
export declare function createProjectEnvTargetToJSON(createProjectEnvTarget: CreateProjectEnvTarget): string;
export declare function createProjectEnvTargetFromJSON(jsonString: string): SafeParseResult<CreateProjectEnvTarget, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvError$inboundSchema: z.ZodType<CreateProjectEnvError, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvError$Outbound = {
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
export declare const CreateProjectEnvError$outboundSchema: z.ZodType<CreateProjectEnvError$Outbound, z.ZodTypeDef, CreateProjectEnvError>;
export declare function createProjectEnvErrorToJSON(createProjectEnvError: CreateProjectEnvError): string;
export declare function createProjectEnvErrorFromJSON(jsonString: string): SafeParseResult<CreateProjectEnvError, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvFailed$inboundSchema: z.ZodType<CreateProjectEnvFailed, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvFailed$Outbound = {
    error: CreateProjectEnvError$Outbound;
};
/** @internal */
export declare const CreateProjectEnvFailed$outboundSchema: z.ZodType<CreateProjectEnvFailed$Outbound, z.ZodTypeDef, CreateProjectEnvFailed>;
export declare function createProjectEnvFailedToJSON(createProjectEnvFailed: CreateProjectEnvFailed): string;
export declare function createProjectEnvFailedFromJSON(jsonString: string): SafeParseResult<CreateProjectEnvFailed, SDKValidationError>;
/** @internal */
export declare const CreateProjectEnvResponseBody$inboundSchema: z.ZodType<CreateProjectEnvResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectEnvResponseBody$Outbound = {
    created: Created1$Outbound | Array<Created2$Outbound>;
    failed: Array<CreateProjectEnvFailed$Outbound>;
};
/** @internal */
export declare const CreateProjectEnvResponseBody$outboundSchema: z.ZodType<CreateProjectEnvResponseBody$Outbound, z.ZodTypeDef, CreateProjectEnvResponseBody>;
export declare function createProjectEnvResponseBodyToJSON(createProjectEnvResponseBody: CreateProjectEnvResponseBody): string;
export declare function createProjectEnvResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateProjectEnvResponseBody, SDKValidationError>;
//# sourceMappingURL=createprojectenvop.d.ts.map