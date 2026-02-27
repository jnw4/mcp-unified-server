import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RemoveProjectEnvRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The unique environment variable identifier
     */
    id: string;
    /**
     * The unique custom environment identifier within the project
     */
    customEnvironmentId?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const RemoveProjectEnvResponseBodyProjectsResponseType: {
    readonly Secret: "secret";
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
export type RemoveProjectEnvResponseBodyProjectsResponseType = ClosedEnum<typeof RemoveProjectEnvResponseBodyProjectsResponseType>;
export declare const RemoveProjectEnvTargetProjectsResponse2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type RemoveProjectEnvTargetProjectsResponse2 = ClosedEnum<typeof RemoveProjectEnvTargetProjectsResponse2>;
export declare const RemoveProjectEnvTargetProjectsResponse1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type RemoveProjectEnvTargetProjectsResponse1 = ClosedEnum<typeof RemoveProjectEnvTargetProjectsResponse1>;
export type RemoveProjectEnvResponseBodyProjectsResponseTarget = Array<RemoveProjectEnvTargetProjectsResponse1> | RemoveProjectEnvTargetProjectsResponse2;
export type RemoveProjectEnvContentHintProjectsResponse15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse12 = {
    type: "postgres-database";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse11 = {
    type: "postgres-password";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse10 = {
    type: "postgres-host";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse9 = {
    type: "postgres-user";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse6 = {
    type: "postgres-url";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjectsResponse1 = {
    type: "redis-url";
    storeId: string;
};
export type RemoveProjectEnvResponseBodyProjectsResponseContentHint = RemoveProjectEnvContentHintProjectsResponse1 | RemoveProjectEnvContentHintProjectsResponse2 | RemoveProjectEnvContentHintProjectsResponse3 | RemoveProjectEnvContentHintProjectsResponse4 | RemoveProjectEnvContentHintProjectsResponse5 | RemoveProjectEnvContentHintProjectsResponse6 | RemoveProjectEnvContentHintProjectsResponse7 | RemoveProjectEnvContentHintProjectsResponse8 | RemoveProjectEnvContentHintProjectsResponse9 | RemoveProjectEnvContentHintProjectsResponse10 | RemoveProjectEnvContentHintProjectsResponse11 | RemoveProjectEnvContentHintProjectsResponse12 | RemoveProjectEnvContentHintProjectsResponse13 | RemoveProjectEnvContentHintProjectsResponse14 | RemoveProjectEnvContentHintProjectsResponse15;
export declare const RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type: {
    readonly FlagsSecret: "flags-secret";
};
export type RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type = ClosedEnum<typeof RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type RemoveProjectEnvResponseBodyProjectsResponseInternalContentHint = {
    type: RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type RemoveProjectEnvResponseBody3 = {
    type: RemoveProjectEnvResponseBodyProjectsResponseType;
    value: string;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    id?: string | undefined;
    createdBy?: string | null | undefined;
    target?: Array<RemoveProjectEnvTargetProjectsResponse1> | RemoveProjectEnvTargetProjectsResponse2 | undefined;
    key: string;
    gitBranch?: string | undefined;
    updatedBy?: string | null | undefined;
    /**
     * This is used to identify variables that have been migrated from type secret to sensitive.
     */
    sunsetSecretId?: string | undefined;
    /**
     * Legacy now-encryption ciphertext, present after migration swaps value/vsmValue
     */
    legacyValue?: string | undefined;
    decrypted?: boolean | undefined;
    configurationId?: string | null | undefined;
    contentHint?: RemoveProjectEnvContentHintProjectsResponse1 | RemoveProjectEnvContentHintProjectsResponse2 | RemoveProjectEnvContentHintProjectsResponse3 | RemoveProjectEnvContentHintProjectsResponse4 | RemoveProjectEnvContentHintProjectsResponse5 | RemoveProjectEnvContentHintProjectsResponse6 | RemoveProjectEnvContentHintProjectsResponse7 | RemoveProjectEnvContentHintProjectsResponse8 | RemoveProjectEnvContentHintProjectsResponse9 | RemoveProjectEnvContentHintProjectsResponse10 | RemoveProjectEnvContentHintProjectsResponse11 | RemoveProjectEnvContentHintProjectsResponse12 | RemoveProjectEnvContentHintProjectsResponse13 | RemoveProjectEnvContentHintProjectsResponse14 | RemoveProjectEnvContentHintProjectsResponse15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: RemoveProjectEnvResponseBodyProjectsResponseInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
export declare const RemoveProjectEnvResponseBodyProjectsType: {
    readonly Secret: "secret";
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
export type RemoveProjectEnvResponseBodyProjectsType = ClosedEnum<typeof RemoveProjectEnvResponseBodyProjectsType>;
export declare const RemoveProjectEnvTargetProjects2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type RemoveProjectEnvTargetProjects2 = ClosedEnum<typeof RemoveProjectEnvTargetProjects2>;
export declare const RemoveProjectEnvTargetProjects1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type RemoveProjectEnvTargetProjects1 = ClosedEnum<typeof RemoveProjectEnvTargetProjects1>;
export type RemoveProjectEnvResponseBodyProjectsTarget = Array<RemoveProjectEnvTargetProjects1> | RemoveProjectEnvTargetProjects2;
export type RemoveProjectEnvContentHintProjects15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type RemoveProjectEnvContentHintProjects14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type RemoveProjectEnvContentHintProjects13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects12 = {
    type: "postgres-database";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects11 = {
    type: "postgres-password";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects10 = {
    type: "postgres-host";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects9 = {
    type: "postgres-user";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects6 = {
    type: "postgres-url";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type RemoveProjectEnvContentHintProjects1 = {
    type: "redis-url";
    storeId: string;
};
export type RemoveProjectEnvResponseBodyProjectsContentHint = RemoveProjectEnvContentHintProjects1 | RemoveProjectEnvContentHintProjects2 | RemoveProjectEnvContentHintProjects3 | RemoveProjectEnvContentHintProjects4 | RemoveProjectEnvContentHintProjects5 | RemoveProjectEnvContentHintProjects6 | RemoveProjectEnvContentHintProjects7 | RemoveProjectEnvContentHintProjects8 | RemoveProjectEnvContentHintProjects9 | RemoveProjectEnvContentHintProjects10 | RemoveProjectEnvContentHintProjects11 | RemoveProjectEnvContentHintProjects12 | RemoveProjectEnvContentHintProjects13 | RemoveProjectEnvContentHintProjects14 | RemoveProjectEnvContentHintProjects15;
export declare const RemoveProjectEnvResponseBodyProjectsResponse200Type: {
    readonly FlagsSecret: "flags-secret";
};
export type RemoveProjectEnvResponseBodyProjectsResponse200Type = ClosedEnum<typeof RemoveProjectEnvResponseBodyProjectsResponse200Type>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type RemoveProjectEnvResponseBodyProjectsInternalContentHint = {
    type: RemoveProjectEnvResponseBodyProjectsResponse200Type;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type RemoveProjectEnvResponseBody2 = {
    system?: boolean | undefined;
    type: RemoveProjectEnvResponseBodyProjectsType;
    value: string;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    id?: string | undefined;
    createdBy?: string | null | undefined;
    target?: Array<RemoveProjectEnvTargetProjects1> | RemoveProjectEnvTargetProjects2 | undefined;
    key: string;
    gitBranch?: string | undefined;
    updatedBy?: string | null | undefined;
    /**
     * This is used to identify variables that have been migrated from type secret to sensitive.
     */
    sunsetSecretId?: string | undefined;
    /**
     * Legacy now-encryption ciphertext, present after migration swaps value/vsmValue
     */
    legacyValue?: string | undefined;
    decrypted?: boolean | undefined;
    configurationId?: string | null | undefined;
    contentHint?: RemoveProjectEnvContentHintProjects1 | RemoveProjectEnvContentHintProjects2 | RemoveProjectEnvContentHintProjects3 | RemoveProjectEnvContentHintProjects4 | RemoveProjectEnvContentHintProjects5 | RemoveProjectEnvContentHintProjects6 | RemoveProjectEnvContentHintProjects7 | RemoveProjectEnvContentHintProjects8 | RemoveProjectEnvContentHintProjects9 | RemoveProjectEnvContentHintProjects10 | RemoveProjectEnvContentHintProjects11 | RemoveProjectEnvContentHintProjects12 | RemoveProjectEnvContentHintProjects13 | RemoveProjectEnvContentHintProjects14 | RemoveProjectEnvContentHintProjects15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: RemoveProjectEnvResponseBodyProjectsInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
export declare const RemoveProjectEnvResponseBodyType: {
    readonly Secret: "secret";
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
export type RemoveProjectEnvResponseBodyType = ClosedEnum<typeof RemoveProjectEnvResponseBodyType>;
export declare const RemoveProjectEnvTarget2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type RemoveProjectEnvTarget2 = ClosedEnum<typeof RemoveProjectEnvTarget2>;
export declare const RemoveProjectEnvTarget1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type RemoveProjectEnvTarget1 = ClosedEnum<typeof RemoveProjectEnvTarget1>;
export type RemoveProjectEnvResponseBodyTarget = Array<RemoveProjectEnvTarget1> | RemoveProjectEnvTarget2;
export type RemoveProjectEnvContentHint15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type RemoveProjectEnvContentHint14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type RemoveProjectEnvContentHint13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type RemoveProjectEnvContentHint12 = {
    type: "postgres-database";
    storeId: string;
};
export type RemoveProjectEnvContentHint11 = {
    type: "postgres-password";
    storeId: string;
};
export type RemoveProjectEnvContentHint10 = {
    type: "postgres-host";
    storeId: string;
};
export type RemoveProjectEnvContentHint9 = {
    type: "postgres-user";
    storeId: string;
};
export type RemoveProjectEnvContentHint8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type RemoveProjectEnvContentHint7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type RemoveProjectEnvContentHint6 = {
    type: "postgres-url";
    storeId: string;
};
export type RemoveProjectEnvContentHint5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type RemoveProjectEnvContentHint4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type RemoveProjectEnvContentHint3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type RemoveProjectEnvContentHint2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type RemoveProjectEnvContentHint1 = {
    type: "redis-url";
    storeId: string;
};
export type RemoveProjectEnvResponseBodyContentHint = RemoveProjectEnvContentHint1 | RemoveProjectEnvContentHint2 | RemoveProjectEnvContentHint3 | RemoveProjectEnvContentHint4 | RemoveProjectEnvContentHint5 | RemoveProjectEnvContentHint6 | RemoveProjectEnvContentHint7 | RemoveProjectEnvContentHint8 | RemoveProjectEnvContentHint9 | RemoveProjectEnvContentHint10 | RemoveProjectEnvContentHint11 | RemoveProjectEnvContentHint12 | RemoveProjectEnvContentHint13 | RemoveProjectEnvContentHint14 | RemoveProjectEnvContentHint15;
export declare const RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJSONType: {
    readonly FlagsSecret: "flags-secret";
};
export type RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJSONType = ClosedEnum<typeof RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJSONType>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type RemoveProjectEnvResponseBodyInternalContentHint = {
    type: RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJSONType;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type RemoveProjectEnvResponseBody1 = {
    type: RemoveProjectEnvResponseBodyType;
    value: string;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    id?: string | undefined;
    createdBy?: string | null | undefined;
    target?: Array<RemoveProjectEnvTarget1> | RemoveProjectEnvTarget2 | undefined;
    key: string;
    gitBranch?: string | undefined;
    updatedBy?: string | null | undefined;
    /**
     * This is used to identify variables that have been migrated from type secret to sensitive.
     */
    sunsetSecretId?: string | undefined;
    /**
     * Legacy now-encryption ciphertext, present after migration swaps value/vsmValue
     */
    legacyValue?: string | undefined;
    decrypted?: boolean | undefined;
    configurationId?: string | null | undefined;
    contentHint?: RemoveProjectEnvContentHint1 | RemoveProjectEnvContentHint2 | RemoveProjectEnvContentHint3 | RemoveProjectEnvContentHint4 | RemoveProjectEnvContentHint5 | RemoveProjectEnvContentHint6 | RemoveProjectEnvContentHint7 | RemoveProjectEnvContentHint8 | RemoveProjectEnvContentHint9 | RemoveProjectEnvContentHint10 | RemoveProjectEnvContentHint11 | RemoveProjectEnvContentHint12 | RemoveProjectEnvContentHint13 | RemoveProjectEnvContentHint14 | RemoveProjectEnvContentHint15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: RemoveProjectEnvResponseBodyInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/**
 * The environment variable was successfully removed
 */
export type RemoveProjectEnvResponseBody = RemoveProjectEnvResponseBody2 | RemoveProjectEnvResponseBody3 | Array<RemoveProjectEnvResponseBody1>;
/** @internal */
export declare const RemoveProjectEnvRequest$inboundSchema: z.ZodType<RemoveProjectEnvRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvRequest$Outbound = {
    idOrName: string;
    id: string;
    customEnvironmentId?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const RemoveProjectEnvRequest$outboundSchema: z.ZodType<RemoveProjectEnvRequest$Outbound, z.ZodTypeDef, RemoveProjectEnvRequest>;
export declare function removeProjectEnvRequestToJSON(removeProjectEnvRequest: RemoveProjectEnvRequest): string;
export declare function removeProjectEnvRequestFromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvRequest, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponseType$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyProjectsResponseType>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponseType$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyProjectsResponseType>;
/** @internal */
export declare const RemoveProjectEnvTargetProjectsResponse2$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTargetProjectsResponse2>;
/** @internal */
export declare const RemoveProjectEnvTargetProjectsResponse2$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTargetProjectsResponse2>;
/** @internal */
export declare const RemoveProjectEnvTargetProjectsResponse1$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTargetProjectsResponse1>;
/** @internal */
export declare const RemoveProjectEnvTargetProjectsResponse1$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTargetProjectsResponse1>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponseTarget$inboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsResponseTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBodyProjectsResponseTarget$Outbound = Array<string> | string;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponseTarget$outboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsResponseTarget$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBodyProjectsResponseTarget>;
export declare function removeProjectEnvResponseBodyProjectsResponseTargetToJSON(removeProjectEnvResponseBodyProjectsResponseTarget: RemoveProjectEnvResponseBodyProjectsResponseTarget): string;
export declare function removeProjectEnvResponseBodyProjectsResponseTargetFromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBodyProjectsResponseTarget, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse15$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse15, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse15$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse15$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse15>;
export declare function removeProjectEnvContentHintProjectsResponse15ToJSON(removeProjectEnvContentHintProjectsResponse15: RemoveProjectEnvContentHintProjectsResponse15): string;
export declare function removeProjectEnvContentHintProjectsResponse15FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse15, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse14$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse14, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse14$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse14$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse14>;
export declare function removeProjectEnvContentHintProjectsResponse14ToJSON(removeProjectEnvContentHintProjectsResponse14: RemoveProjectEnvContentHintProjectsResponse14): string;
export declare function removeProjectEnvContentHintProjectsResponse14FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse14, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse13$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse13, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse13$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse13$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse13>;
export declare function removeProjectEnvContentHintProjectsResponse13ToJSON(removeProjectEnvContentHintProjectsResponse13: RemoveProjectEnvContentHintProjectsResponse13): string;
export declare function removeProjectEnvContentHintProjectsResponse13FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse13, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse12$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse12, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse12$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse12$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse12>;
export declare function removeProjectEnvContentHintProjectsResponse12ToJSON(removeProjectEnvContentHintProjectsResponse12: RemoveProjectEnvContentHintProjectsResponse12): string;
export declare function removeProjectEnvContentHintProjectsResponse12FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse12, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse11$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse11, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse11$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse11$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse11>;
export declare function removeProjectEnvContentHintProjectsResponse11ToJSON(removeProjectEnvContentHintProjectsResponse11: RemoveProjectEnvContentHintProjectsResponse11): string;
export declare function removeProjectEnvContentHintProjectsResponse11FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse11, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse10$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse10, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse10$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse10$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse10>;
export declare function removeProjectEnvContentHintProjectsResponse10ToJSON(removeProjectEnvContentHintProjectsResponse10: RemoveProjectEnvContentHintProjectsResponse10): string;
export declare function removeProjectEnvContentHintProjectsResponse10FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse10, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse9$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse9, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse9$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse9$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse9>;
export declare function removeProjectEnvContentHintProjectsResponse9ToJSON(removeProjectEnvContentHintProjectsResponse9: RemoveProjectEnvContentHintProjectsResponse9): string;
export declare function removeProjectEnvContentHintProjectsResponse9FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse9, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse8$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse8, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse8$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse8$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse8>;
export declare function removeProjectEnvContentHintProjectsResponse8ToJSON(removeProjectEnvContentHintProjectsResponse8: RemoveProjectEnvContentHintProjectsResponse8): string;
export declare function removeProjectEnvContentHintProjectsResponse8FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse8, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse7$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse7, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse7$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse7$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse7>;
export declare function removeProjectEnvContentHintProjectsResponse7ToJSON(removeProjectEnvContentHintProjectsResponse7: RemoveProjectEnvContentHintProjectsResponse7): string;
export declare function removeProjectEnvContentHintProjectsResponse7FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse7, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse6$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse6, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse6$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse6$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse6>;
export declare function removeProjectEnvContentHintProjectsResponse6ToJSON(removeProjectEnvContentHintProjectsResponse6: RemoveProjectEnvContentHintProjectsResponse6): string;
export declare function removeProjectEnvContentHintProjectsResponse6FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse6, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse5$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse5, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse5$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse5$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse5>;
export declare function removeProjectEnvContentHintProjectsResponse5ToJSON(removeProjectEnvContentHintProjectsResponse5: RemoveProjectEnvContentHintProjectsResponse5): string;
export declare function removeProjectEnvContentHintProjectsResponse5FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse5, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse4$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse4, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse4$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse4$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse4>;
export declare function removeProjectEnvContentHintProjectsResponse4ToJSON(removeProjectEnvContentHintProjectsResponse4: RemoveProjectEnvContentHintProjectsResponse4): string;
export declare function removeProjectEnvContentHintProjectsResponse4FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse4, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse3$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse3, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse3$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse3$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse3>;
export declare function removeProjectEnvContentHintProjectsResponse3ToJSON(removeProjectEnvContentHintProjectsResponse3: RemoveProjectEnvContentHintProjectsResponse3): string;
export declare function removeProjectEnvContentHintProjectsResponse3FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse3, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse2$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse2$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse2$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse2>;
export declare function removeProjectEnvContentHintProjectsResponse2ToJSON(removeProjectEnvContentHintProjectsResponse2: RemoveProjectEnvContentHintProjectsResponse2): string;
export declare function removeProjectEnvContentHintProjectsResponse2FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse2, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse1$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjectsResponse1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjectsResponse1$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjectsResponse1$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjectsResponse1>;
export declare function removeProjectEnvContentHintProjectsResponse1ToJSON(removeProjectEnvContentHintProjectsResponse1: RemoveProjectEnvContentHintProjectsResponse1): string;
export declare function removeProjectEnvContentHintProjectsResponse1FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjectsResponse1, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponseContentHint$inboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsResponseContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBodyProjectsResponseContentHint$Outbound = RemoveProjectEnvContentHintProjectsResponse1$Outbound | RemoveProjectEnvContentHintProjectsResponse2$Outbound | RemoveProjectEnvContentHintProjectsResponse3$Outbound | RemoveProjectEnvContentHintProjectsResponse4$Outbound | RemoveProjectEnvContentHintProjectsResponse5$Outbound | RemoveProjectEnvContentHintProjectsResponse6$Outbound | RemoveProjectEnvContentHintProjectsResponse7$Outbound | RemoveProjectEnvContentHintProjectsResponse8$Outbound | RemoveProjectEnvContentHintProjectsResponse9$Outbound | RemoveProjectEnvContentHintProjectsResponse10$Outbound | RemoveProjectEnvContentHintProjectsResponse11$Outbound | RemoveProjectEnvContentHintProjectsResponse12$Outbound | RemoveProjectEnvContentHintProjectsResponse13$Outbound | RemoveProjectEnvContentHintProjectsResponse14$Outbound | RemoveProjectEnvContentHintProjectsResponse15$Outbound;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponseContentHint$outboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsResponseContentHint$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBodyProjectsResponseContentHint>;
export declare function removeProjectEnvResponseBodyProjectsResponseContentHintToJSON(removeProjectEnvResponseBodyProjectsResponseContentHint: RemoveProjectEnvResponseBodyProjectsResponseContentHint): string;
export declare function removeProjectEnvResponseBodyProjectsResponseContentHintFromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBodyProjectsResponseContentHint, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponseInternalContentHint$inboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsResponseInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBodyProjectsResponseInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponseInternalContentHint$outboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsResponseInternalContentHint$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBodyProjectsResponseInternalContentHint>;
export declare function removeProjectEnvResponseBodyProjectsResponseInternalContentHintToJSON(removeProjectEnvResponseBodyProjectsResponseInternalContentHint: RemoveProjectEnvResponseBodyProjectsResponseInternalContentHint): string;
export declare function removeProjectEnvResponseBodyProjectsResponseInternalContentHintFromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBodyProjectsResponseInternalContentHint, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBody3$inboundSchema: z.ZodType<RemoveProjectEnvResponseBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBody3$Outbound = {
    type: string;
    value: string;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    id?: string | undefined;
    createdBy?: string | null | undefined;
    target?: Array<string> | string | undefined;
    key: string;
    gitBranch?: string | undefined;
    updatedBy?: string | null | undefined;
    sunsetSecretId?: string | undefined;
    legacyValue?: string | undefined;
    decrypted?: boolean | undefined;
    configurationId?: string | null | undefined;
    contentHint?: RemoveProjectEnvContentHintProjectsResponse1$Outbound | RemoveProjectEnvContentHintProjectsResponse2$Outbound | RemoveProjectEnvContentHintProjectsResponse3$Outbound | RemoveProjectEnvContentHintProjectsResponse4$Outbound | RemoveProjectEnvContentHintProjectsResponse5$Outbound | RemoveProjectEnvContentHintProjectsResponse6$Outbound | RemoveProjectEnvContentHintProjectsResponse7$Outbound | RemoveProjectEnvContentHintProjectsResponse8$Outbound | RemoveProjectEnvContentHintProjectsResponse9$Outbound | RemoveProjectEnvContentHintProjectsResponse10$Outbound | RemoveProjectEnvContentHintProjectsResponse11$Outbound | RemoveProjectEnvContentHintProjectsResponse12$Outbound | RemoveProjectEnvContentHintProjectsResponse13$Outbound | RemoveProjectEnvContentHintProjectsResponse14$Outbound | RemoveProjectEnvContentHintProjectsResponse15$Outbound | null | undefined;
    internalContentHint?: RemoveProjectEnvResponseBodyProjectsResponseInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/** @internal */
export declare const RemoveProjectEnvResponseBody3$outboundSchema: z.ZodType<RemoveProjectEnvResponseBody3$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBody3>;
export declare function removeProjectEnvResponseBody3ToJSON(removeProjectEnvResponseBody3: RemoveProjectEnvResponseBody3): string;
export declare function removeProjectEnvResponseBody3FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBody3, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsType$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyProjectsType>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsType$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyProjectsType>;
/** @internal */
export declare const RemoveProjectEnvTargetProjects2$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTargetProjects2>;
/** @internal */
export declare const RemoveProjectEnvTargetProjects2$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTargetProjects2>;
/** @internal */
export declare const RemoveProjectEnvTargetProjects1$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTargetProjects1>;
/** @internal */
export declare const RemoveProjectEnvTargetProjects1$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTargetProjects1>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsTarget$inboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBodyProjectsTarget$Outbound = Array<string> | string;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsTarget$outboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsTarget$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBodyProjectsTarget>;
export declare function removeProjectEnvResponseBodyProjectsTargetToJSON(removeProjectEnvResponseBodyProjectsTarget: RemoveProjectEnvResponseBodyProjectsTarget): string;
export declare function removeProjectEnvResponseBodyProjectsTargetFromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBodyProjectsTarget, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects15$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects15, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects15$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects15$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects15>;
export declare function removeProjectEnvContentHintProjects15ToJSON(removeProjectEnvContentHintProjects15: RemoveProjectEnvContentHintProjects15): string;
export declare function removeProjectEnvContentHintProjects15FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects15, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects14$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects14, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects14$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects14$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects14>;
export declare function removeProjectEnvContentHintProjects14ToJSON(removeProjectEnvContentHintProjects14: RemoveProjectEnvContentHintProjects14): string;
export declare function removeProjectEnvContentHintProjects14FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects14, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects13$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects13, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects13$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects13$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects13>;
export declare function removeProjectEnvContentHintProjects13ToJSON(removeProjectEnvContentHintProjects13: RemoveProjectEnvContentHintProjects13): string;
export declare function removeProjectEnvContentHintProjects13FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects13, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects12$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects12, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects12$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects12$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects12>;
export declare function removeProjectEnvContentHintProjects12ToJSON(removeProjectEnvContentHintProjects12: RemoveProjectEnvContentHintProjects12): string;
export declare function removeProjectEnvContentHintProjects12FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects12, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects11$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects11, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects11$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects11$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects11>;
export declare function removeProjectEnvContentHintProjects11ToJSON(removeProjectEnvContentHintProjects11: RemoveProjectEnvContentHintProjects11): string;
export declare function removeProjectEnvContentHintProjects11FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects11, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects10$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects10, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects10$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects10$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects10>;
export declare function removeProjectEnvContentHintProjects10ToJSON(removeProjectEnvContentHintProjects10: RemoveProjectEnvContentHintProjects10): string;
export declare function removeProjectEnvContentHintProjects10FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects10, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects9$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects9, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects9$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects9$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects9>;
export declare function removeProjectEnvContentHintProjects9ToJSON(removeProjectEnvContentHintProjects9: RemoveProjectEnvContentHintProjects9): string;
export declare function removeProjectEnvContentHintProjects9FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects9, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects8$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects8, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects8$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects8$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects8>;
export declare function removeProjectEnvContentHintProjects8ToJSON(removeProjectEnvContentHintProjects8: RemoveProjectEnvContentHintProjects8): string;
export declare function removeProjectEnvContentHintProjects8FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects8, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects7$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects7, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects7$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects7$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects7>;
export declare function removeProjectEnvContentHintProjects7ToJSON(removeProjectEnvContentHintProjects7: RemoveProjectEnvContentHintProjects7): string;
export declare function removeProjectEnvContentHintProjects7FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects7, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects6$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects6, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects6$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects6$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects6>;
export declare function removeProjectEnvContentHintProjects6ToJSON(removeProjectEnvContentHintProjects6: RemoveProjectEnvContentHintProjects6): string;
export declare function removeProjectEnvContentHintProjects6FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects6, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects5$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects5, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects5$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects5$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects5>;
export declare function removeProjectEnvContentHintProjects5ToJSON(removeProjectEnvContentHintProjects5: RemoveProjectEnvContentHintProjects5): string;
export declare function removeProjectEnvContentHintProjects5FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects5, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects4$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects4, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects4$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects4$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects4>;
export declare function removeProjectEnvContentHintProjects4ToJSON(removeProjectEnvContentHintProjects4: RemoveProjectEnvContentHintProjects4): string;
export declare function removeProjectEnvContentHintProjects4FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects4, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects3$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects3, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects3$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects3$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects3>;
export declare function removeProjectEnvContentHintProjects3ToJSON(removeProjectEnvContentHintProjects3: RemoveProjectEnvContentHintProjects3): string;
export declare function removeProjectEnvContentHintProjects3FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects3, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects2$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects2, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects2$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects2$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects2>;
export declare function removeProjectEnvContentHintProjects2ToJSON(removeProjectEnvContentHintProjects2: RemoveProjectEnvContentHintProjects2): string;
export declare function removeProjectEnvContentHintProjects2FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects2, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHintProjects1$inboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects1, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHintProjects1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHintProjects1$outboundSchema: z.ZodType<RemoveProjectEnvContentHintProjects1$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHintProjects1>;
export declare function removeProjectEnvContentHintProjects1ToJSON(removeProjectEnvContentHintProjects1: RemoveProjectEnvContentHintProjects1): string;
export declare function removeProjectEnvContentHintProjects1FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHintProjects1, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsContentHint$inboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBodyProjectsContentHint$Outbound = RemoveProjectEnvContentHintProjects1$Outbound | RemoveProjectEnvContentHintProjects2$Outbound | RemoveProjectEnvContentHintProjects3$Outbound | RemoveProjectEnvContentHintProjects4$Outbound | RemoveProjectEnvContentHintProjects5$Outbound | RemoveProjectEnvContentHintProjects6$Outbound | RemoveProjectEnvContentHintProjects7$Outbound | RemoveProjectEnvContentHintProjects8$Outbound | RemoveProjectEnvContentHintProjects9$Outbound | RemoveProjectEnvContentHintProjects10$Outbound | RemoveProjectEnvContentHintProjects11$Outbound | RemoveProjectEnvContentHintProjects12$Outbound | RemoveProjectEnvContentHintProjects13$Outbound | RemoveProjectEnvContentHintProjects14$Outbound | RemoveProjectEnvContentHintProjects15$Outbound;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsContentHint$outboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsContentHint$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBodyProjectsContentHint>;
export declare function removeProjectEnvResponseBodyProjectsContentHintToJSON(removeProjectEnvResponseBodyProjectsContentHint: RemoveProjectEnvResponseBodyProjectsContentHint): string;
export declare function removeProjectEnvResponseBodyProjectsContentHintFromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBodyProjectsContentHint, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponse200Type$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyProjectsResponse200Type>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponse200Type$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyProjectsResponse200Type>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsInternalContentHint$inboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBodyProjectsInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsInternalContentHint$outboundSchema: z.ZodType<RemoveProjectEnvResponseBodyProjectsInternalContentHint$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBodyProjectsInternalContentHint>;
export declare function removeProjectEnvResponseBodyProjectsInternalContentHintToJSON(removeProjectEnvResponseBodyProjectsInternalContentHint: RemoveProjectEnvResponseBodyProjectsInternalContentHint): string;
export declare function removeProjectEnvResponseBodyProjectsInternalContentHintFromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBodyProjectsInternalContentHint, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBody2$inboundSchema: z.ZodType<RemoveProjectEnvResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBody2$Outbound = {
    system?: boolean | undefined;
    type: string;
    value: string;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    id?: string | undefined;
    createdBy?: string | null | undefined;
    target?: Array<string> | string | undefined;
    key: string;
    gitBranch?: string | undefined;
    updatedBy?: string | null | undefined;
    sunsetSecretId?: string | undefined;
    legacyValue?: string | undefined;
    decrypted?: boolean | undefined;
    configurationId?: string | null | undefined;
    contentHint?: RemoveProjectEnvContentHintProjects1$Outbound | RemoveProjectEnvContentHintProjects2$Outbound | RemoveProjectEnvContentHintProjects3$Outbound | RemoveProjectEnvContentHintProjects4$Outbound | RemoveProjectEnvContentHintProjects5$Outbound | RemoveProjectEnvContentHintProjects6$Outbound | RemoveProjectEnvContentHintProjects7$Outbound | RemoveProjectEnvContentHintProjects8$Outbound | RemoveProjectEnvContentHintProjects9$Outbound | RemoveProjectEnvContentHintProjects10$Outbound | RemoveProjectEnvContentHintProjects11$Outbound | RemoveProjectEnvContentHintProjects12$Outbound | RemoveProjectEnvContentHintProjects13$Outbound | RemoveProjectEnvContentHintProjects14$Outbound | RemoveProjectEnvContentHintProjects15$Outbound | null | undefined;
    internalContentHint?: RemoveProjectEnvResponseBodyProjectsInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/** @internal */
export declare const RemoveProjectEnvResponseBody2$outboundSchema: z.ZodType<RemoveProjectEnvResponseBody2$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBody2>;
export declare function removeProjectEnvResponseBody2ToJSON(removeProjectEnvResponseBody2: RemoveProjectEnvResponseBody2): string;
export declare function removeProjectEnvResponseBody2FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBody2, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyType>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyType>;
/** @internal */
export declare const RemoveProjectEnvTarget2$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTarget2>;
/** @internal */
export declare const RemoveProjectEnvTarget2$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTarget2>;
/** @internal */
export declare const RemoveProjectEnvTarget1$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTarget1>;
/** @internal */
export declare const RemoveProjectEnvTarget1$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvTarget1>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyTarget$inboundSchema: z.ZodType<RemoveProjectEnvResponseBodyTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBodyTarget$Outbound = Array<string> | string;
/** @internal */
export declare const RemoveProjectEnvResponseBodyTarget$outboundSchema: z.ZodType<RemoveProjectEnvResponseBodyTarget$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBodyTarget>;
export declare function removeProjectEnvResponseBodyTargetToJSON(removeProjectEnvResponseBodyTarget: RemoveProjectEnvResponseBodyTarget): string;
export declare function removeProjectEnvResponseBodyTargetFromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBodyTarget, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint15$inboundSchema: z.ZodType<RemoveProjectEnvContentHint15, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint15$outboundSchema: z.ZodType<RemoveProjectEnvContentHint15$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint15>;
export declare function removeProjectEnvContentHint15ToJSON(removeProjectEnvContentHint15: RemoveProjectEnvContentHint15): string;
export declare function removeProjectEnvContentHint15FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint15, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint14$inboundSchema: z.ZodType<RemoveProjectEnvContentHint14, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint14$outboundSchema: z.ZodType<RemoveProjectEnvContentHint14$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint14>;
export declare function removeProjectEnvContentHint14ToJSON(removeProjectEnvContentHint14: RemoveProjectEnvContentHint14): string;
export declare function removeProjectEnvContentHint14FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint14, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint13$inboundSchema: z.ZodType<RemoveProjectEnvContentHint13, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint13$outboundSchema: z.ZodType<RemoveProjectEnvContentHint13$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint13>;
export declare function removeProjectEnvContentHint13ToJSON(removeProjectEnvContentHint13: RemoveProjectEnvContentHint13): string;
export declare function removeProjectEnvContentHint13FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint13, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint12$inboundSchema: z.ZodType<RemoveProjectEnvContentHint12, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint12$outboundSchema: z.ZodType<RemoveProjectEnvContentHint12$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint12>;
export declare function removeProjectEnvContentHint12ToJSON(removeProjectEnvContentHint12: RemoveProjectEnvContentHint12): string;
export declare function removeProjectEnvContentHint12FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint12, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint11$inboundSchema: z.ZodType<RemoveProjectEnvContentHint11, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint11$outboundSchema: z.ZodType<RemoveProjectEnvContentHint11$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint11>;
export declare function removeProjectEnvContentHint11ToJSON(removeProjectEnvContentHint11: RemoveProjectEnvContentHint11): string;
export declare function removeProjectEnvContentHint11FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint11, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint10$inboundSchema: z.ZodType<RemoveProjectEnvContentHint10, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint10$outboundSchema: z.ZodType<RemoveProjectEnvContentHint10$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint10>;
export declare function removeProjectEnvContentHint10ToJSON(removeProjectEnvContentHint10: RemoveProjectEnvContentHint10): string;
export declare function removeProjectEnvContentHint10FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint10, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint9$inboundSchema: z.ZodType<RemoveProjectEnvContentHint9, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint9$outboundSchema: z.ZodType<RemoveProjectEnvContentHint9$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint9>;
export declare function removeProjectEnvContentHint9ToJSON(removeProjectEnvContentHint9: RemoveProjectEnvContentHint9): string;
export declare function removeProjectEnvContentHint9FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint9, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint8$inboundSchema: z.ZodType<RemoveProjectEnvContentHint8, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint8$outboundSchema: z.ZodType<RemoveProjectEnvContentHint8$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint8>;
export declare function removeProjectEnvContentHint8ToJSON(removeProjectEnvContentHint8: RemoveProjectEnvContentHint8): string;
export declare function removeProjectEnvContentHint8FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint8, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint7$inboundSchema: z.ZodType<RemoveProjectEnvContentHint7, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint7$outboundSchema: z.ZodType<RemoveProjectEnvContentHint7$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint7>;
export declare function removeProjectEnvContentHint7ToJSON(removeProjectEnvContentHint7: RemoveProjectEnvContentHint7): string;
export declare function removeProjectEnvContentHint7FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint7, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint6$inboundSchema: z.ZodType<RemoveProjectEnvContentHint6, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint6$outboundSchema: z.ZodType<RemoveProjectEnvContentHint6$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint6>;
export declare function removeProjectEnvContentHint6ToJSON(removeProjectEnvContentHint6: RemoveProjectEnvContentHint6): string;
export declare function removeProjectEnvContentHint6FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint6, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint5$inboundSchema: z.ZodType<RemoveProjectEnvContentHint5, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint5$outboundSchema: z.ZodType<RemoveProjectEnvContentHint5$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint5>;
export declare function removeProjectEnvContentHint5ToJSON(removeProjectEnvContentHint5: RemoveProjectEnvContentHint5): string;
export declare function removeProjectEnvContentHint5FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint5, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint4$inboundSchema: z.ZodType<RemoveProjectEnvContentHint4, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint4$outboundSchema: z.ZodType<RemoveProjectEnvContentHint4$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint4>;
export declare function removeProjectEnvContentHint4ToJSON(removeProjectEnvContentHint4: RemoveProjectEnvContentHint4): string;
export declare function removeProjectEnvContentHint4FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint4, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint3$inboundSchema: z.ZodType<RemoveProjectEnvContentHint3, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint3$outboundSchema: z.ZodType<RemoveProjectEnvContentHint3$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint3>;
export declare function removeProjectEnvContentHint3ToJSON(removeProjectEnvContentHint3: RemoveProjectEnvContentHint3): string;
export declare function removeProjectEnvContentHint3FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint3, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint2$inboundSchema: z.ZodType<RemoveProjectEnvContentHint2, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint2$outboundSchema: z.ZodType<RemoveProjectEnvContentHint2$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint2>;
export declare function removeProjectEnvContentHint2ToJSON(removeProjectEnvContentHint2: RemoveProjectEnvContentHint2): string;
export declare function removeProjectEnvContentHint2FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint2, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvContentHint1$inboundSchema: z.ZodType<RemoveProjectEnvContentHint1, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvContentHint1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const RemoveProjectEnvContentHint1$outboundSchema: z.ZodType<RemoveProjectEnvContentHint1$Outbound, z.ZodTypeDef, RemoveProjectEnvContentHint1>;
export declare function removeProjectEnvContentHint1ToJSON(removeProjectEnvContentHint1: RemoveProjectEnvContentHint1): string;
export declare function removeProjectEnvContentHint1FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvContentHint1, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyContentHint$inboundSchema: z.ZodType<RemoveProjectEnvResponseBodyContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBodyContentHint$Outbound = RemoveProjectEnvContentHint1$Outbound | RemoveProjectEnvContentHint2$Outbound | RemoveProjectEnvContentHint3$Outbound | RemoveProjectEnvContentHint4$Outbound | RemoveProjectEnvContentHint5$Outbound | RemoveProjectEnvContentHint6$Outbound | RemoveProjectEnvContentHint7$Outbound | RemoveProjectEnvContentHint8$Outbound | RemoveProjectEnvContentHint9$Outbound | RemoveProjectEnvContentHint10$Outbound | RemoveProjectEnvContentHint11$Outbound | RemoveProjectEnvContentHint12$Outbound | RemoveProjectEnvContentHint13$Outbound | RemoveProjectEnvContentHint14$Outbound | RemoveProjectEnvContentHint15$Outbound;
/** @internal */
export declare const RemoveProjectEnvResponseBodyContentHint$outboundSchema: z.ZodType<RemoveProjectEnvResponseBodyContentHint$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBodyContentHint>;
export declare function removeProjectEnvResponseBodyContentHintToJSON(removeProjectEnvResponseBodyContentHint: RemoveProjectEnvResponseBodyContentHint): string;
export declare function removeProjectEnvResponseBodyContentHintFromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBodyContentHint, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJSONType$inboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJSONType>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJSONType$outboundSchema: z.ZodNativeEnum<typeof RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJSONType>;
/** @internal */
export declare const RemoveProjectEnvResponseBodyInternalContentHint$inboundSchema: z.ZodType<RemoveProjectEnvResponseBodyInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBodyInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const RemoveProjectEnvResponseBodyInternalContentHint$outboundSchema: z.ZodType<RemoveProjectEnvResponseBodyInternalContentHint$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBodyInternalContentHint>;
export declare function removeProjectEnvResponseBodyInternalContentHintToJSON(removeProjectEnvResponseBodyInternalContentHint: RemoveProjectEnvResponseBodyInternalContentHint): string;
export declare function removeProjectEnvResponseBodyInternalContentHintFromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBodyInternalContentHint, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBody1$inboundSchema: z.ZodType<RemoveProjectEnvResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBody1$Outbound = {
    type: string;
    value: string;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    id?: string | undefined;
    createdBy?: string | null | undefined;
    target?: Array<string> | string | undefined;
    key: string;
    gitBranch?: string | undefined;
    updatedBy?: string | null | undefined;
    sunsetSecretId?: string | undefined;
    legacyValue?: string | undefined;
    decrypted?: boolean | undefined;
    configurationId?: string | null | undefined;
    contentHint?: RemoveProjectEnvContentHint1$Outbound | RemoveProjectEnvContentHint2$Outbound | RemoveProjectEnvContentHint3$Outbound | RemoveProjectEnvContentHint4$Outbound | RemoveProjectEnvContentHint5$Outbound | RemoveProjectEnvContentHint6$Outbound | RemoveProjectEnvContentHint7$Outbound | RemoveProjectEnvContentHint8$Outbound | RemoveProjectEnvContentHint9$Outbound | RemoveProjectEnvContentHint10$Outbound | RemoveProjectEnvContentHint11$Outbound | RemoveProjectEnvContentHint12$Outbound | RemoveProjectEnvContentHint13$Outbound | RemoveProjectEnvContentHint14$Outbound | RemoveProjectEnvContentHint15$Outbound | null | undefined;
    internalContentHint?: RemoveProjectEnvResponseBodyInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/** @internal */
export declare const RemoveProjectEnvResponseBody1$outboundSchema: z.ZodType<RemoveProjectEnvResponseBody1$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBody1>;
export declare function removeProjectEnvResponseBody1ToJSON(removeProjectEnvResponseBody1: RemoveProjectEnvResponseBody1): string;
export declare function removeProjectEnvResponseBody1FromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBody1, SDKValidationError>;
/** @internal */
export declare const RemoveProjectEnvResponseBody$inboundSchema: z.ZodType<RemoveProjectEnvResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectEnvResponseBody$Outbound = RemoveProjectEnvResponseBody2$Outbound | RemoveProjectEnvResponseBody3$Outbound | Array<RemoveProjectEnvResponseBody1$Outbound>;
/** @internal */
export declare const RemoveProjectEnvResponseBody$outboundSchema: z.ZodType<RemoveProjectEnvResponseBody$Outbound, z.ZodTypeDef, RemoveProjectEnvResponseBody>;
export declare function removeProjectEnvResponseBodyToJSON(removeProjectEnvResponseBody: RemoveProjectEnvResponseBody): string;
export declare function removeProjectEnvResponseBodyFromJSON(jsonString: string): SafeParseResult<RemoveProjectEnvResponseBody, SDKValidationError>;
//# sourceMappingURL=removeprojectenvop.d.ts.map