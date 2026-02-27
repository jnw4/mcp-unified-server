import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * If true, the environment variable value will be decrypted
 *
 * @deprecated enum: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export declare const Decrypt: {
    readonly True: "true";
    readonly False: "false";
};
/**
 * If true, the environment variable value will be decrypted
 *
 * @deprecated enum: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type Decrypt = ClosedEnum<typeof Decrypt>;
export type FilterProjectEnvsRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * If defined, the git branch of the environment variable to filter the results (must have target=preview)
     */
    gitBranch?: string | undefined;
    /**
     * If true, the environment variable value will be decrypted
     */
    decrypt?: Decrypt | undefined;
    /**
     * The source that is calling the endpoint.
     */
    source?: string | undefined;
    /**
     * The unique custom environment identifier within the project
     */
    customEnvironmentId?: string | undefined;
    /**
     * The custom environment slug (name) within the project
     */
    customEnvironmentSlug?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const FilterProjectEnvsTargetProjectsResponse2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type FilterProjectEnvsTargetProjectsResponse2 = ClosedEnum<typeof FilterProjectEnvsTargetProjectsResponse2>;
export declare const FilterProjectEnvsTargetProjectsResponse1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type FilterProjectEnvsTargetProjectsResponse1 = ClosedEnum<typeof FilterProjectEnvsTargetProjectsResponse1>;
export type FilterProjectEnvsResponseBodyProjectsResponseTarget = Array<FilterProjectEnvsTargetProjectsResponse1> | FilterProjectEnvsTargetProjectsResponse2;
export declare const FilterProjectEnvsResponseBodyProjectsResponse200Type: {
    readonly Secret: "secret";
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
export type FilterProjectEnvsResponseBodyProjectsResponse200Type = ClosedEnum<typeof FilterProjectEnvsResponseBodyProjectsResponse200Type>;
export type FilterProjectEnvsContentHintProjectsResponse15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse12 = {
    type: "postgres-database";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse11 = {
    type: "postgres-password";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse10 = {
    type: "postgres-host";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse9 = {
    type: "postgres-user";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse6 = {
    type: "postgres-url";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjectsResponse1 = {
    type: "redis-url";
    storeId: string;
};
export type FilterProjectEnvsResponseBodyProjectsContentHint = FilterProjectEnvsContentHintProjectsResponse1 | FilterProjectEnvsContentHintProjectsResponse2 | FilterProjectEnvsContentHintProjectsResponse3 | FilterProjectEnvsContentHintProjectsResponse4 | FilterProjectEnvsContentHintProjectsResponse5 | FilterProjectEnvsContentHintProjectsResponse6 | FilterProjectEnvsContentHintProjectsResponse7 | FilterProjectEnvsContentHintProjectsResponse8 | FilterProjectEnvsContentHintProjectsResponse9 | FilterProjectEnvsContentHintProjectsResponse10 | FilterProjectEnvsContentHintProjectsResponse11 | FilterProjectEnvsContentHintProjectsResponse12 | FilterProjectEnvsContentHintProjectsResponse13 | FilterProjectEnvsContentHintProjectsResponse14 | FilterProjectEnvsContentHintProjectsResponse15;
export declare const FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJson3Type: {
    readonly FlagsSecret: "flags-secret";
};
export type FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJson3Type = ClosedEnum<typeof FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJson3Type>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type FilterProjectEnvsResponseBodyProjectsInternalContentHint = {
    type: FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJson3Type;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type ResponseBodyEnvs = {
    target?: Array<FilterProjectEnvsTargetProjectsResponse1> | FilterProjectEnvsTargetProjectsResponse2 | undefined;
    type: FilterProjectEnvsResponseBodyProjectsResponse200Type;
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
    contentHint?: FilterProjectEnvsContentHintProjectsResponse1 | FilterProjectEnvsContentHintProjectsResponse2 | FilterProjectEnvsContentHintProjectsResponse3 | FilterProjectEnvsContentHintProjectsResponse4 | FilterProjectEnvsContentHintProjectsResponse5 | FilterProjectEnvsContentHintProjectsResponse6 | FilterProjectEnvsContentHintProjectsResponse7 | FilterProjectEnvsContentHintProjectsResponse8 | FilterProjectEnvsContentHintProjectsResponse9 | FilterProjectEnvsContentHintProjectsResponse10 | FilterProjectEnvsContentHintProjectsResponse11 | FilterProjectEnvsContentHintProjectsResponse12 | FilterProjectEnvsContentHintProjectsResponse13 | FilterProjectEnvsContentHintProjectsResponse14 | FilterProjectEnvsContentHintProjectsResponse15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: FilterProjectEnvsResponseBodyProjectsInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    system?: boolean | undefined;
};
/**
 * The list of environment variables for the given project
 */
export type FilterProjectEnvsResponseBody3 = {
    envs: Array<ResponseBodyEnvs>;
};
export declare const FilterProjectEnvsTargetProjects2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type FilterProjectEnvsTargetProjects2 = ClosedEnum<typeof FilterProjectEnvsTargetProjects2>;
export declare const FilterProjectEnvsTargetProjects1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type FilterProjectEnvsTargetProjects1 = ClosedEnum<typeof FilterProjectEnvsTargetProjects1>;
export type FilterProjectEnvsResponseBodyProjectsTarget = Array<FilterProjectEnvsTargetProjects1> | FilterProjectEnvsTargetProjects2;
export declare const FilterProjectEnvsResponseBodyProjectsResponseType: {
    readonly Secret: "secret";
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
export type FilterProjectEnvsResponseBodyProjectsResponseType = ClosedEnum<typeof FilterProjectEnvsResponseBodyProjectsResponseType>;
export type FilterProjectEnvsContentHintProjects15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type FilterProjectEnvsContentHintProjects14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type FilterProjectEnvsContentHintProjects13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects12 = {
    type: "postgres-database";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects11 = {
    type: "postgres-password";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects10 = {
    type: "postgres-host";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects9 = {
    type: "postgres-user";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects6 = {
    type: "postgres-url";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type FilterProjectEnvsContentHintProjects1 = {
    type: "redis-url";
    storeId: string;
};
export type FilterProjectEnvsResponseBodyContentHint = FilterProjectEnvsContentHintProjects1 | FilterProjectEnvsContentHintProjects2 | FilterProjectEnvsContentHintProjects3 | FilterProjectEnvsContentHintProjects4 | FilterProjectEnvsContentHintProjects5 | FilterProjectEnvsContentHintProjects6 | FilterProjectEnvsContentHintProjects7 | FilterProjectEnvsContentHintProjects8 | FilterProjectEnvsContentHintProjects9 | FilterProjectEnvsContentHintProjects10 | FilterProjectEnvsContentHintProjects11 | FilterProjectEnvsContentHintProjects12 | FilterProjectEnvsContentHintProjects13 | FilterProjectEnvsContentHintProjects14 | FilterProjectEnvsContentHintProjects15;
export declare const FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJSONType: {
    readonly FlagsSecret: "flags-secret";
};
export type FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJSONType = ClosedEnum<typeof FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJSONType>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type FilterProjectEnvsResponseBodyInternalContentHint = {
    type: FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJSONType;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type Envs = {
    target?: Array<FilterProjectEnvsTargetProjects1> | FilterProjectEnvsTargetProjects2 | undefined;
    type: FilterProjectEnvsResponseBodyProjectsResponseType;
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
    contentHint?: FilterProjectEnvsContentHintProjects1 | FilterProjectEnvsContentHintProjects2 | FilterProjectEnvsContentHintProjects3 | FilterProjectEnvsContentHintProjects4 | FilterProjectEnvsContentHintProjects5 | FilterProjectEnvsContentHintProjects6 | FilterProjectEnvsContentHintProjects7 | FilterProjectEnvsContentHintProjects8 | FilterProjectEnvsContentHintProjects9 | FilterProjectEnvsContentHintProjects10 | FilterProjectEnvsContentHintProjects11 | FilterProjectEnvsContentHintProjects12 | FilterProjectEnvsContentHintProjects13 | FilterProjectEnvsContentHintProjects14 | FilterProjectEnvsContentHintProjects15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: FilterProjectEnvsResponseBodyInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    system?: boolean | undefined;
};
export type FilterProjectEnvsResponseBody2 = {
    envs: Array<Envs>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};
export declare const FilterProjectEnvsTarget2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type FilterProjectEnvsTarget2 = ClosedEnum<typeof FilterProjectEnvsTarget2>;
export declare const FilterProjectEnvsTarget1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type FilterProjectEnvsTarget1 = ClosedEnum<typeof FilterProjectEnvsTarget1>;
export type FilterProjectEnvsResponseBodyTarget = Array<FilterProjectEnvsTarget1> | FilterProjectEnvsTarget2;
export declare const FilterProjectEnvsResponseBodyType: {
    readonly Secret: "secret";
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
export type FilterProjectEnvsResponseBodyType = ClosedEnum<typeof FilterProjectEnvsResponseBodyType>;
export type FilterProjectEnvsContentHint15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type FilterProjectEnvsContentHint14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type FilterProjectEnvsContentHint13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type FilterProjectEnvsContentHint12 = {
    type: "postgres-database";
    storeId: string;
};
export type FilterProjectEnvsContentHint11 = {
    type: "postgres-password";
    storeId: string;
};
export type FilterProjectEnvsContentHint10 = {
    type: "postgres-host";
    storeId: string;
};
export type FilterProjectEnvsContentHint9 = {
    type: "postgres-user";
    storeId: string;
};
export type FilterProjectEnvsContentHint8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type FilterProjectEnvsContentHint7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type FilterProjectEnvsContentHint6 = {
    type: "postgres-url";
    storeId: string;
};
export type FilterProjectEnvsContentHint5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type FilterProjectEnvsContentHint4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type FilterProjectEnvsContentHint3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type FilterProjectEnvsContentHint2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type FilterProjectEnvsContentHint1 = {
    type: "redis-url";
    storeId: string;
};
export type ResponseBodyContentHint = FilterProjectEnvsContentHint1 | FilterProjectEnvsContentHint2 | FilterProjectEnvsContentHint3 | FilterProjectEnvsContentHint4 | FilterProjectEnvsContentHint5 | FilterProjectEnvsContentHint6 | FilterProjectEnvsContentHint7 | FilterProjectEnvsContentHint8 | FilterProjectEnvsContentHint9 | FilterProjectEnvsContentHint10 | FilterProjectEnvsContentHint11 | FilterProjectEnvsContentHint12 | FilterProjectEnvsContentHint13 | FilterProjectEnvsContentHint14 | FilterProjectEnvsContentHint15;
export declare const FilterProjectEnvsResponseBodyProjectsType: {
    readonly FlagsSecret: "flags-secret";
};
export type FilterProjectEnvsResponseBodyProjectsType = ClosedEnum<typeof FilterProjectEnvsResponseBodyProjectsType>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type ResponseBodyInternalContentHint = {
    type: FilterProjectEnvsResponseBodyProjectsType;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type FilterProjectEnvsResponseBody1 = {
    target?: Array<FilterProjectEnvsTarget1> | FilterProjectEnvsTarget2 | undefined;
    type: FilterProjectEnvsResponseBodyType;
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
    contentHint?: FilterProjectEnvsContentHint1 | FilterProjectEnvsContentHint2 | FilterProjectEnvsContentHint3 | FilterProjectEnvsContentHint4 | FilterProjectEnvsContentHint5 | FilterProjectEnvsContentHint6 | FilterProjectEnvsContentHint7 | FilterProjectEnvsContentHint8 | FilterProjectEnvsContentHint9 | FilterProjectEnvsContentHint10 | FilterProjectEnvsContentHint11 | FilterProjectEnvsContentHint12 | FilterProjectEnvsContentHint13 | FilterProjectEnvsContentHint14 | FilterProjectEnvsContentHint15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: ResponseBodyInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    system?: boolean | undefined;
};
/**
 * The list of environment variables for the given project
 */
export type FilterProjectEnvsResponseBody = FilterProjectEnvsResponseBody1 | FilterProjectEnvsResponseBody2 | FilterProjectEnvsResponseBody3;
/** @internal */
export declare const Decrypt$inboundSchema: z.ZodNativeEnum<typeof Decrypt>;
/** @internal */
export declare const Decrypt$outboundSchema: z.ZodNativeEnum<typeof Decrypt>;
/** @internal */
export declare const FilterProjectEnvsRequest$inboundSchema: z.ZodType<FilterProjectEnvsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsRequest$Outbound = {
    idOrName: string;
    gitBranch?: string | undefined;
    decrypt?: string | undefined;
    source?: string | undefined;
    customEnvironmentId?: string | undefined;
    customEnvironmentSlug?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const FilterProjectEnvsRequest$outboundSchema: z.ZodType<FilterProjectEnvsRequest$Outbound, z.ZodTypeDef, FilterProjectEnvsRequest>;
export declare function filterProjectEnvsRequestToJSON(filterProjectEnvsRequest: FilterProjectEnvsRequest): string;
export declare function filterProjectEnvsRequestFromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsRequest, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsTargetProjectsResponse2$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTargetProjectsResponse2>;
/** @internal */
export declare const FilterProjectEnvsTargetProjectsResponse2$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTargetProjectsResponse2>;
/** @internal */
export declare const FilterProjectEnvsTargetProjectsResponse1$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTargetProjectsResponse1>;
/** @internal */
export declare const FilterProjectEnvsTargetProjectsResponse1$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTargetProjectsResponse1>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsResponseTarget$inboundSchema: z.ZodType<FilterProjectEnvsResponseBodyProjectsResponseTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsResponseBodyProjectsResponseTarget$Outbound = Array<string> | string;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsResponseTarget$outboundSchema: z.ZodType<FilterProjectEnvsResponseBodyProjectsResponseTarget$Outbound, z.ZodTypeDef, FilterProjectEnvsResponseBodyProjectsResponseTarget>;
export declare function filterProjectEnvsResponseBodyProjectsResponseTargetToJSON(filterProjectEnvsResponseBodyProjectsResponseTarget: FilterProjectEnvsResponseBodyProjectsResponseTarget): string;
export declare function filterProjectEnvsResponseBodyProjectsResponseTargetFromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsResponseBodyProjectsResponseTarget, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsResponse200Type$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyProjectsResponse200Type>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsResponse200Type$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyProjectsResponse200Type>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse15$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse15, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse15$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse15$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse15>;
export declare function filterProjectEnvsContentHintProjectsResponse15ToJSON(filterProjectEnvsContentHintProjectsResponse15: FilterProjectEnvsContentHintProjectsResponse15): string;
export declare function filterProjectEnvsContentHintProjectsResponse15FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse15, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse14$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse14, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse14$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse14$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse14>;
export declare function filterProjectEnvsContentHintProjectsResponse14ToJSON(filterProjectEnvsContentHintProjectsResponse14: FilterProjectEnvsContentHintProjectsResponse14): string;
export declare function filterProjectEnvsContentHintProjectsResponse14FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse14, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse13$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse13, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse13$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse13$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse13>;
export declare function filterProjectEnvsContentHintProjectsResponse13ToJSON(filterProjectEnvsContentHintProjectsResponse13: FilterProjectEnvsContentHintProjectsResponse13): string;
export declare function filterProjectEnvsContentHintProjectsResponse13FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse13, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse12$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse12, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse12$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse12$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse12>;
export declare function filterProjectEnvsContentHintProjectsResponse12ToJSON(filterProjectEnvsContentHintProjectsResponse12: FilterProjectEnvsContentHintProjectsResponse12): string;
export declare function filterProjectEnvsContentHintProjectsResponse12FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse12, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse11$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse11, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse11$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse11$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse11>;
export declare function filterProjectEnvsContentHintProjectsResponse11ToJSON(filterProjectEnvsContentHintProjectsResponse11: FilterProjectEnvsContentHintProjectsResponse11): string;
export declare function filterProjectEnvsContentHintProjectsResponse11FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse11, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse10$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse10, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse10$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse10$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse10>;
export declare function filterProjectEnvsContentHintProjectsResponse10ToJSON(filterProjectEnvsContentHintProjectsResponse10: FilterProjectEnvsContentHintProjectsResponse10): string;
export declare function filterProjectEnvsContentHintProjectsResponse10FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse10, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse9$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse9, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse9$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse9$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse9>;
export declare function filterProjectEnvsContentHintProjectsResponse9ToJSON(filterProjectEnvsContentHintProjectsResponse9: FilterProjectEnvsContentHintProjectsResponse9): string;
export declare function filterProjectEnvsContentHintProjectsResponse9FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse9, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse8$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse8, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse8$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse8$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse8>;
export declare function filterProjectEnvsContentHintProjectsResponse8ToJSON(filterProjectEnvsContentHintProjectsResponse8: FilterProjectEnvsContentHintProjectsResponse8): string;
export declare function filterProjectEnvsContentHintProjectsResponse8FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse8, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse7$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse7, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse7$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse7$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse7>;
export declare function filterProjectEnvsContentHintProjectsResponse7ToJSON(filterProjectEnvsContentHintProjectsResponse7: FilterProjectEnvsContentHintProjectsResponse7): string;
export declare function filterProjectEnvsContentHintProjectsResponse7FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse7, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse6$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse6, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse6$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse6$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse6>;
export declare function filterProjectEnvsContentHintProjectsResponse6ToJSON(filterProjectEnvsContentHintProjectsResponse6: FilterProjectEnvsContentHintProjectsResponse6): string;
export declare function filterProjectEnvsContentHintProjectsResponse6FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse6, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse5$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse5, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse5$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse5$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse5>;
export declare function filterProjectEnvsContentHintProjectsResponse5ToJSON(filterProjectEnvsContentHintProjectsResponse5: FilterProjectEnvsContentHintProjectsResponse5): string;
export declare function filterProjectEnvsContentHintProjectsResponse5FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse5, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse4$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse4, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse4$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse4$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse4>;
export declare function filterProjectEnvsContentHintProjectsResponse4ToJSON(filterProjectEnvsContentHintProjectsResponse4: FilterProjectEnvsContentHintProjectsResponse4): string;
export declare function filterProjectEnvsContentHintProjectsResponse4FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse4, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse3$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse3, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse3$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse3$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse3>;
export declare function filterProjectEnvsContentHintProjectsResponse3ToJSON(filterProjectEnvsContentHintProjectsResponse3: FilterProjectEnvsContentHintProjectsResponse3): string;
export declare function filterProjectEnvsContentHintProjectsResponse3FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse3, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse2$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse2$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse2$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse2>;
export declare function filterProjectEnvsContentHintProjectsResponse2ToJSON(filterProjectEnvsContentHintProjectsResponse2: FilterProjectEnvsContentHintProjectsResponse2): string;
export declare function filterProjectEnvsContentHintProjectsResponse2FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse2, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse1$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjectsResponse1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjectsResponse1$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjectsResponse1$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjectsResponse1>;
export declare function filterProjectEnvsContentHintProjectsResponse1ToJSON(filterProjectEnvsContentHintProjectsResponse1: FilterProjectEnvsContentHintProjectsResponse1): string;
export declare function filterProjectEnvsContentHintProjectsResponse1FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjectsResponse1, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsContentHint$inboundSchema: z.ZodType<FilterProjectEnvsResponseBodyProjectsContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsResponseBodyProjectsContentHint$Outbound = FilterProjectEnvsContentHintProjectsResponse1$Outbound | FilterProjectEnvsContentHintProjectsResponse2$Outbound | FilterProjectEnvsContentHintProjectsResponse3$Outbound | FilterProjectEnvsContentHintProjectsResponse4$Outbound | FilterProjectEnvsContentHintProjectsResponse5$Outbound | FilterProjectEnvsContentHintProjectsResponse6$Outbound | FilterProjectEnvsContentHintProjectsResponse7$Outbound | FilterProjectEnvsContentHintProjectsResponse8$Outbound | FilterProjectEnvsContentHintProjectsResponse9$Outbound | FilterProjectEnvsContentHintProjectsResponse10$Outbound | FilterProjectEnvsContentHintProjectsResponse11$Outbound | FilterProjectEnvsContentHintProjectsResponse12$Outbound | FilterProjectEnvsContentHintProjectsResponse13$Outbound | FilterProjectEnvsContentHintProjectsResponse14$Outbound | FilterProjectEnvsContentHintProjectsResponse15$Outbound;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsContentHint$outboundSchema: z.ZodType<FilterProjectEnvsResponseBodyProjectsContentHint$Outbound, z.ZodTypeDef, FilterProjectEnvsResponseBodyProjectsContentHint>;
export declare function filterProjectEnvsResponseBodyProjectsContentHintToJSON(filterProjectEnvsResponseBodyProjectsContentHint: FilterProjectEnvsResponseBodyProjectsContentHint): string;
export declare function filterProjectEnvsResponseBodyProjectsContentHintFromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsResponseBodyProjectsContentHint, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJson3Type$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJson3Type>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJson3Type$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJson3Type>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsInternalContentHint$inboundSchema: z.ZodType<FilterProjectEnvsResponseBodyProjectsInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsResponseBodyProjectsInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsInternalContentHint$outboundSchema: z.ZodType<FilterProjectEnvsResponseBodyProjectsInternalContentHint$Outbound, z.ZodTypeDef, FilterProjectEnvsResponseBodyProjectsInternalContentHint>;
export declare function filterProjectEnvsResponseBodyProjectsInternalContentHintToJSON(filterProjectEnvsResponseBodyProjectsInternalContentHint: FilterProjectEnvsResponseBodyProjectsInternalContentHint): string;
export declare function filterProjectEnvsResponseBodyProjectsInternalContentHintFromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsResponseBodyProjectsInternalContentHint, SDKValidationError>;
/** @internal */
export declare const ResponseBodyEnvs$inboundSchema: z.ZodType<ResponseBodyEnvs, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyEnvs$Outbound = {
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
    contentHint?: FilterProjectEnvsContentHintProjectsResponse1$Outbound | FilterProjectEnvsContentHintProjectsResponse2$Outbound | FilterProjectEnvsContentHintProjectsResponse3$Outbound | FilterProjectEnvsContentHintProjectsResponse4$Outbound | FilterProjectEnvsContentHintProjectsResponse5$Outbound | FilterProjectEnvsContentHintProjectsResponse6$Outbound | FilterProjectEnvsContentHintProjectsResponse7$Outbound | FilterProjectEnvsContentHintProjectsResponse8$Outbound | FilterProjectEnvsContentHintProjectsResponse9$Outbound | FilterProjectEnvsContentHintProjectsResponse10$Outbound | FilterProjectEnvsContentHintProjectsResponse11$Outbound | FilterProjectEnvsContentHintProjectsResponse12$Outbound | FilterProjectEnvsContentHintProjectsResponse13$Outbound | FilterProjectEnvsContentHintProjectsResponse14$Outbound | FilterProjectEnvsContentHintProjectsResponse15$Outbound | null | undefined;
    internalContentHint?: FilterProjectEnvsResponseBodyProjectsInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    system?: boolean | undefined;
};
/** @internal */
export declare const ResponseBodyEnvs$outboundSchema: z.ZodType<ResponseBodyEnvs$Outbound, z.ZodTypeDef, ResponseBodyEnvs>;
export declare function responseBodyEnvsToJSON(responseBodyEnvs: ResponseBodyEnvs): string;
export declare function responseBodyEnvsFromJSON(jsonString: string): SafeParseResult<ResponseBodyEnvs, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBody3$inboundSchema: z.ZodType<FilterProjectEnvsResponseBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsResponseBody3$Outbound = {
    envs: Array<ResponseBodyEnvs$Outbound>;
};
/** @internal */
export declare const FilterProjectEnvsResponseBody3$outboundSchema: z.ZodType<FilterProjectEnvsResponseBody3$Outbound, z.ZodTypeDef, FilterProjectEnvsResponseBody3>;
export declare function filterProjectEnvsResponseBody3ToJSON(filterProjectEnvsResponseBody3: FilterProjectEnvsResponseBody3): string;
export declare function filterProjectEnvsResponseBody3FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsResponseBody3, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsTargetProjects2$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTargetProjects2>;
/** @internal */
export declare const FilterProjectEnvsTargetProjects2$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTargetProjects2>;
/** @internal */
export declare const FilterProjectEnvsTargetProjects1$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTargetProjects1>;
/** @internal */
export declare const FilterProjectEnvsTargetProjects1$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTargetProjects1>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsTarget$inboundSchema: z.ZodType<FilterProjectEnvsResponseBodyProjectsTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsResponseBodyProjectsTarget$Outbound = Array<string> | string;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsTarget$outboundSchema: z.ZodType<FilterProjectEnvsResponseBodyProjectsTarget$Outbound, z.ZodTypeDef, FilterProjectEnvsResponseBodyProjectsTarget>;
export declare function filterProjectEnvsResponseBodyProjectsTargetToJSON(filterProjectEnvsResponseBodyProjectsTarget: FilterProjectEnvsResponseBodyProjectsTarget): string;
export declare function filterProjectEnvsResponseBodyProjectsTargetFromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsResponseBodyProjectsTarget, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsResponseType$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyProjectsResponseType>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsResponseType$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyProjectsResponseType>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects15$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects15, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects15$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects15$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects15>;
export declare function filterProjectEnvsContentHintProjects15ToJSON(filterProjectEnvsContentHintProjects15: FilterProjectEnvsContentHintProjects15): string;
export declare function filterProjectEnvsContentHintProjects15FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects15, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects14$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects14, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects14$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects14$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects14>;
export declare function filterProjectEnvsContentHintProjects14ToJSON(filterProjectEnvsContentHintProjects14: FilterProjectEnvsContentHintProjects14): string;
export declare function filterProjectEnvsContentHintProjects14FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects14, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects13$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects13, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects13$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects13$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects13>;
export declare function filterProjectEnvsContentHintProjects13ToJSON(filterProjectEnvsContentHintProjects13: FilterProjectEnvsContentHintProjects13): string;
export declare function filterProjectEnvsContentHintProjects13FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects13, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects12$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects12, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects12$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects12$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects12>;
export declare function filterProjectEnvsContentHintProjects12ToJSON(filterProjectEnvsContentHintProjects12: FilterProjectEnvsContentHintProjects12): string;
export declare function filterProjectEnvsContentHintProjects12FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects12, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects11$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects11, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects11$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects11$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects11>;
export declare function filterProjectEnvsContentHintProjects11ToJSON(filterProjectEnvsContentHintProjects11: FilterProjectEnvsContentHintProjects11): string;
export declare function filterProjectEnvsContentHintProjects11FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects11, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects10$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects10, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects10$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects10$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects10>;
export declare function filterProjectEnvsContentHintProjects10ToJSON(filterProjectEnvsContentHintProjects10: FilterProjectEnvsContentHintProjects10): string;
export declare function filterProjectEnvsContentHintProjects10FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects10, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects9$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects9, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects9$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects9$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects9>;
export declare function filterProjectEnvsContentHintProjects9ToJSON(filterProjectEnvsContentHintProjects9: FilterProjectEnvsContentHintProjects9): string;
export declare function filterProjectEnvsContentHintProjects9FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects9, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects8$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects8, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects8$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects8$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects8>;
export declare function filterProjectEnvsContentHintProjects8ToJSON(filterProjectEnvsContentHintProjects8: FilterProjectEnvsContentHintProjects8): string;
export declare function filterProjectEnvsContentHintProjects8FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects8, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects7$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects7, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects7$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects7$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects7>;
export declare function filterProjectEnvsContentHintProjects7ToJSON(filterProjectEnvsContentHintProjects7: FilterProjectEnvsContentHintProjects7): string;
export declare function filterProjectEnvsContentHintProjects7FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects7, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects6$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects6, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects6$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects6$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects6>;
export declare function filterProjectEnvsContentHintProjects6ToJSON(filterProjectEnvsContentHintProjects6: FilterProjectEnvsContentHintProjects6): string;
export declare function filterProjectEnvsContentHintProjects6FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects6, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects5$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects5, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects5$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects5$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects5>;
export declare function filterProjectEnvsContentHintProjects5ToJSON(filterProjectEnvsContentHintProjects5: FilterProjectEnvsContentHintProjects5): string;
export declare function filterProjectEnvsContentHintProjects5FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects5, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects4$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects4, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects4$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects4$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects4>;
export declare function filterProjectEnvsContentHintProjects4ToJSON(filterProjectEnvsContentHintProjects4: FilterProjectEnvsContentHintProjects4): string;
export declare function filterProjectEnvsContentHintProjects4FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects4, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects3$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects3, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects3$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects3$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects3>;
export declare function filterProjectEnvsContentHintProjects3ToJSON(filterProjectEnvsContentHintProjects3: FilterProjectEnvsContentHintProjects3): string;
export declare function filterProjectEnvsContentHintProjects3FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects3, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects2$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects2, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects2$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects2$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects2>;
export declare function filterProjectEnvsContentHintProjects2ToJSON(filterProjectEnvsContentHintProjects2: FilterProjectEnvsContentHintProjects2): string;
export declare function filterProjectEnvsContentHintProjects2FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects2, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHintProjects1$inboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects1, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHintProjects1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHintProjects1$outboundSchema: z.ZodType<FilterProjectEnvsContentHintProjects1$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHintProjects1>;
export declare function filterProjectEnvsContentHintProjects1ToJSON(filterProjectEnvsContentHintProjects1: FilterProjectEnvsContentHintProjects1): string;
export declare function filterProjectEnvsContentHintProjects1FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHintProjects1, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyContentHint$inboundSchema: z.ZodType<FilterProjectEnvsResponseBodyContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsResponseBodyContentHint$Outbound = FilterProjectEnvsContentHintProjects1$Outbound | FilterProjectEnvsContentHintProjects2$Outbound | FilterProjectEnvsContentHintProjects3$Outbound | FilterProjectEnvsContentHintProjects4$Outbound | FilterProjectEnvsContentHintProjects5$Outbound | FilterProjectEnvsContentHintProjects6$Outbound | FilterProjectEnvsContentHintProjects7$Outbound | FilterProjectEnvsContentHintProjects8$Outbound | FilterProjectEnvsContentHintProjects9$Outbound | FilterProjectEnvsContentHintProjects10$Outbound | FilterProjectEnvsContentHintProjects11$Outbound | FilterProjectEnvsContentHintProjects12$Outbound | FilterProjectEnvsContentHintProjects13$Outbound | FilterProjectEnvsContentHintProjects14$Outbound | FilterProjectEnvsContentHintProjects15$Outbound;
/** @internal */
export declare const FilterProjectEnvsResponseBodyContentHint$outboundSchema: z.ZodType<FilterProjectEnvsResponseBodyContentHint$Outbound, z.ZodTypeDef, FilterProjectEnvsResponseBodyContentHint>;
export declare function filterProjectEnvsResponseBodyContentHintToJSON(filterProjectEnvsResponseBodyContentHint: FilterProjectEnvsResponseBodyContentHint): string;
export declare function filterProjectEnvsResponseBodyContentHintFromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsResponseBodyContentHint, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJSONType$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJSONType>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJSONType$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyProjectsResponse200ApplicationJSONType>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyInternalContentHint$inboundSchema: z.ZodType<FilterProjectEnvsResponseBodyInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsResponseBodyInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const FilterProjectEnvsResponseBodyInternalContentHint$outboundSchema: z.ZodType<FilterProjectEnvsResponseBodyInternalContentHint$Outbound, z.ZodTypeDef, FilterProjectEnvsResponseBodyInternalContentHint>;
export declare function filterProjectEnvsResponseBodyInternalContentHintToJSON(filterProjectEnvsResponseBodyInternalContentHint: FilterProjectEnvsResponseBodyInternalContentHint): string;
export declare function filterProjectEnvsResponseBodyInternalContentHintFromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsResponseBodyInternalContentHint, SDKValidationError>;
/** @internal */
export declare const Envs$inboundSchema: z.ZodType<Envs, z.ZodTypeDef, unknown>;
/** @internal */
export type Envs$Outbound = {
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
    contentHint?: FilterProjectEnvsContentHintProjects1$Outbound | FilterProjectEnvsContentHintProjects2$Outbound | FilterProjectEnvsContentHintProjects3$Outbound | FilterProjectEnvsContentHintProjects4$Outbound | FilterProjectEnvsContentHintProjects5$Outbound | FilterProjectEnvsContentHintProjects6$Outbound | FilterProjectEnvsContentHintProjects7$Outbound | FilterProjectEnvsContentHintProjects8$Outbound | FilterProjectEnvsContentHintProjects9$Outbound | FilterProjectEnvsContentHintProjects10$Outbound | FilterProjectEnvsContentHintProjects11$Outbound | FilterProjectEnvsContentHintProjects12$Outbound | FilterProjectEnvsContentHintProjects13$Outbound | FilterProjectEnvsContentHintProjects14$Outbound | FilterProjectEnvsContentHintProjects15$Outbound | null | undefined;
    internalContentHint?: FilterProjectEnvsResponseBodyInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    system?: boolean | undefined;
};
/** @internal */
export declare const Envs$outboundSchema: z.ZodType<Envs$Outbound, z.ZodTypeDef, Envs>;
export declare function envsToJSON(envs: Envs): string;
export declare function envsFromJSON(jsonString: string): SafeParseResult<Envs, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBody2$inboundSchema: z.ZodType<FilterProjectEnvsResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsResponseBody2$Outbound = {
    envs: Array<Envs$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const FilterProjectEnvsResponseBody2$outboundSchema: z.ZodType<FilterProjectEnvsResponseBody2$Outbound, z.ZodTypeDef, FilterProjectEnvsResponseBody2>;
export declare function filterProjectEnvsResponseBody2ToJSON(filterProjectEnvsResponseBody2: FilterProjectEnvsResponseBody2): string;
export declare function filterProjectEnvsResponseBody2FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsResponseBody2, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsTarget2$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTarget2>;
/** @internal */
export declare const FilterProjectEnvsTarget2$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTarget2>;
/** @internal */
export declare const FilterProjectEnvsTarget1$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTarget1>;
/** @internal */
export declare const FilterProjectEnvsTarget1$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsTarget1>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyTarget$inboundSchema: z.ZodType<FilterProjectEnvsResponseBodyTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsResponseBodyTarget$Outbound = Array<string> | string;
/** @internal */
export declare const FilterProjectEnvsResponseBodyTarget$outboundSchema: z.ZodType<FilterProjectEnvsResponseBodyTarget$Outbound, z.ZodTypeDef, FilterProjectEnvsResponseBodyTarget>;
export declare function filterProjectEnvsResponseBodyTargetToJSON(filterProjectEnvsResponseBodyTarget: FilterProjectEnvsResponseBodyTarget): string;
export declare function filterProjectEnvsResponseBodyTargetFromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsResponseBodyTarget, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyType>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyType>;
/** @internal */
export declare const FilterProjectEnvsContentHint15$inboundSchema: z.ZodType<FilterProjectEnvsContentHint15, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint15$outboundSchema: z.ZodType<FilterProjectEnvsContentHint15$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint15>;
export declare function filterProjectEnvsContentHint15ToJSON(filterProjectEnvsContentHint15: FilterProjectEnvsContentHint15): string;
export declare function filterProjectEnvsContentHint15FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint15, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint14$inboundSchema: z.ZodType<FilterProjectEnvsContentHint14, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint14$outboundSchema: z.ZodType<FilterProjectEnvsContentHint14$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint14>;
export declare function filterProjectEnvsContentHint14ToJSON(filterProjectEnvsContentHint14: FilterProjectEnvsContentHint14): string;
export declare function filterProjectEnvsContentHint14FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint14, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint13$inboundSchema: z.ZodType<FilterProjectEnvsContentHint13, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint13$outboundSchema: z.ZodType<FilterProjectEnvsContentHint13$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint13>;
export declare function filterProjectEnvsContentHint13ToJSON(filterProjectEnvsContentHint13: FilterProjectEnvsContentHint13): string;
export declare function filterProjectEnvsContentHint13FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint13, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint12$inboundSchema: z.ZodType<FilterProjectEnvsContentHint12, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint12$outboundSchema: z.ZodType<FilterProjectEnvsContentHint12$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint12>;
export declare function filterProjectEnvsContentHint12ToJSON(filterProjectEnvsContentHint12: FilterProjectEnvsContentHint12): string;
export declare function filterProjectEnvsContentHint12FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint12, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint11$inboundSchema: z.ZodType<FilterProjectEnvsContentHint11, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint11$outboundSchema: z.ZodType<FilterProjectEnvsContentHint11$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint11>;
export declare function filterProjectEnvsContentHint11ToJSON(filterProjectEnvsContentHint11: FilterProjectEnvsContentHint11): string;
export declare function filterProjectEnvsContentHint11FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint11, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint10$inboundSchema: z.ZodType<FilterProjectEnvsContentHint10, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint10$outboundSchema: z.ZodType<FilterProjectEnvsContentHint10$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint10>;
export declare function filterProjectEnvsContentHint10ToJSON(filterProjectEnvsContentHint10: FilterProjectEnvsContentHint10): string;
export declare function filterProjectEnvsContentHint10FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint10, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint9$inboundSchema: z.ZodType<FilterProjectEnvsContentHint9, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint9$outboundSchema: z.ZodType<FilterProjectEnvsContentHint9$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint9>;
export declare function filterProjectEnvsContentHint9ToJSON(filterProjectEnvsContentHint9: FilterProjectEnvsContentHint9): string;
export declare function filterProjectEnvsContentHint9FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint9, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint8$inboundSchema: z.ZodType<FilterProjectEnvsContentHint8, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint8$outboundSchema: z.ZodType<FilterProjectEnvsContentHint8$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint8>;
export declare function filterProjectEnvsContentHint8ToJSON(filterProjectEnvsContentHint8: FilterProjectEnvsContentHint8): string;
export declare function filterProjectEnvsContentHint8FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint8, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint7$inboundSchema: z.ZodType<FilterProjectEnvsContentHint7, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint7$outboundSchema: z.ZodType<FilterProjectEnvsContentHint7$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint7>;
export declare function filterProjectEnvsContentHint7ToJSON(filterProjectEnvsContentHint7: FilterProjectEnvsContentHint7): string;
export declare function filterProjectEnvsContentHint7FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint7, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint6$inboundSchema: z.ZodType<FilterProjectEnvsContentHint6, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint6$outboundSchema: z.ZodType<FilterProjectEnvsContentHint6$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint6>;
export declare function filterProjectEnvsContentHint6ToJSON(filterProjectEnvsContentHint6: FilterProjectEnvsContentHint6): string;
export declare function filterProjectEnvsContentHint6FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint6, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint5$inboundSchema: z.ZodType<FilterProjectEnvsContentHint5, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint5$outboundSchema: z.ZodType<FilterProjectEnvsContentHint5$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint5>;
export declare function filterProjectEnvsContentHint5ToJSON(filterProjectEnvsContentHint5: FilterProjectEnvsContentHint5): string;
export declare function filterProjectEnvsContentHint5FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint5, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint4$inboundSchema: z.ZodType<FilterProjectEnvsContentHint4, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint4$outboundSchema: z.ZodType<FilterProjectEnvsContentHint4$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint4>;
export declare function filterProjectEnvsContentHint4ToJSON(filterProjectEnvsContentHint4: FilterProjectEnvsContentHint4): string;
export declare function filterProjectEnvsContentHint4FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint4, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint3$inboundSchema: z.ZodType<FilterProjectEnvsContentHint3, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint3$outboundSchema: z.ZodType<FilterProjectEnvsContentHint3$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint3>;
export declare function filterProjectEnvsContentHint3ToJSON(filterProjectEnvsContentHint3: FilterProjectEnvsContentHint3): string;
export declare function filterProjectEnvsContentHint3FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint3, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint2$inboundSchema: z.ZodType<FilterProjectEnvsContentHint2, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint2$outboundSchema: z.ZodType<FilterProjectEnvsContentHint2$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint2>;
export declare function filterProjectEnvsContentHint2ToJSON(filterProjectEnvsContentHint2: FilterProjectEnvsContentHint2): string;
export declare function filterProjectEnvsContentHint2FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint2, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsContentHint1$inboundSchema: z.ZodType<FilterProjectEnvsContentHint1, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsContentHint1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const FilterProjectEnvsContentHint1$outboundSchema: z.ZodType<FilterProjectEnvsContentHint1$Outbound, z.ZodTypeDef, FilterProjectEnvsContentHint1>;
export declare function filterProjectEnvsContentHint1ToJSON(filterProjectEnvsContentHint1: FilterProjectEnvsContentHint1): string;
export declare function filterProjectEnvsContentHint1FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsContentHint1, SDKValidationError>;
/** @internal */
export declare const ResponseBodyContentHint$inboundSchema: z.ZodType<ResponseBodyContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyContentHint$Outbound = FilterProjectEnvsContentHint1$Outbound | FilterProjectEnvsContentHint2$Outbound | FilterProjectEnvsContentHint3$Outbound | FilterProjectEnvsContentHint4$Outbound | FilterProjectEnvsContentHint5$Outbound | FilterProjectEnvsContentHint6$Outbound | FilterProjectEnvsContentHint7$Outbound | FilterProjectEnvsContentHint8$Outbound | FilterProjectEnvsContentHint9$Outbound | FilterProjectEnvsContentHint10$Outbound | FilterProjectEnvsContentHint11$Outbound | FilterProjectEnvsContentHint12$Outbound | FilterProjectEnvsContentHint13$Outbound | FilterProjectEnvsContentHint14$Outbound | FilterProjectEnvsContentHint15$Outbound;
/** @internal */
export declare const ResponseBodyContentHint$outboundSchema: z.ZodType<ResponseBodyContentHint$Outbound, z.ZodTypeDef, ResponseBodyContentHint>;
export declare function responseBodyContentHintToJSON(responseBodyContentHint: ResponseBodyContentHint): string;
export declare function responseBodyContentHintFromJSON(jsonString: string): SafeParseResult<ResponseBodyContentHint, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsType$inboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyProjectsType>;
/** @internal */
export declare const FilterProjectEnvsResponseBodyProjectsType$outboundSchema: z.ZodNativeEnum<typeof FilterProjectEnvsResponseBodyProjectsType>;
/** @internal */
export declare const ResponseBodyInternalContentHint$inboundSchema: z.ZodType<ResponseBodyInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const ResponseBodyInternalContentHint$outboundSchema: z.ZodType<ResponseBodyInternalContentHint$Outbound, z.ZodTypeDef, ResponseBodyInternalContentHint>;
export declare function responseBodyInternalContentHintToJSON(responseBodyInternalContentHint: ResponseBodyInternalContentHint): string;
export declare function responseBodyInternalContentHintFromJSON(jsonString: string): SafeParseResult<ResponseBodyInternalContentHint, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBody1$inboundSchema: z.ZodType<FilterProjectEnvsResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsResponseBody1$Outbound = {
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
    contentHint?: FilterProjectEnvsContentHint1$Outbound | FilterProjectEnvsContentHint2$Outbound | FilterProjectEnvsContentHint3$Outbound | FilterProjectEnvsContentHint4$Outbound | FilterProjectEnvsContentHint5$Outbound | FilterProjectEnvsContentHint6$Outbound | FilterProjectEnvsContentHint7$Outbound | FilterProjectEnvsContentHint8$Outbound | FilterProjectEnvsContentHint9$Outbound | FilterProjectEnvsContentHint10$Outbound | FilterProjectEnvsContentHint11$Outbound | FilterProjectEnvsContentHint12$Outbound | FilterProjectEnvsContentHint13$Outbound | FilterProjectEnvsContentHint14$Outbound | FilterProjectEnvsContentHint15$Outbound | null | undefined;
    internalContentHint?: ResponseBodyInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    system?: boolean | undefined;
};
/** @internal */
export declare const FilterProjectEnvsResponseBody1$outboundSchema: z.ZodType<FilterProjectEnvsResponseBody1$Outbound, z.ZodTypeDef, FilterProjectEnvsResponseBody1>;
export declare function filterProjectEnvsResponseBody1ToJSON(filterProjectEnvsResponseBody1: FilterProjectEnvsResponseBody1): string;
export declare function filterProjectEnvsResponseBody1FromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsResponseBody1, SDKValidationError>;
/** @internal */
export declare const FilterProjectEnvsResponseBody$inboundSchema: z.ZodType<FilterProjectEnvsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type FilterProjectEnvsResponseBody$Outbound = FilterProjectEnvsResponseBody1$Outbound | FilterProjectEnvsResponseBody2$Outbound | FilterProjectEnvsResponseBody3$Outbound;
/** @internal */
export declare const FilterProjectEnvsResponseBody$outboundSchema: z.ZodType<FilterProjectEnvsResponseBody$Outbound, z.ZodTypeDef, FilterProjectEnvsResponseBody>;
export declare function filterProjectEnvsResponseBodyToJSON(filterProjectEnvsResponseBody: FilterProjectEnvsResponseBody): string;
export declare function filterProjectEnvsResponseBodyFromJSON(jsonString: string): SafeParseResult<FilterProjectEnvsResponseBody, SDKValidationError>;
//# sourceMappingURL=filterprojectenvsop.d.ts.map