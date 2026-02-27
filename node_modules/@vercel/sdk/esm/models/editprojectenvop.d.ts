import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const EditProjectEnvTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type EditProjectEnvTarget = ClosedEnum<typeof EditProjectEnvTarget>;
/**
 * The type of environment variable
 */
export declare const EditProjectEnvType: {
    readonly System: "system";
    readonly Secret: "secret";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
/**
 * The type of environment variable
 */
export type EditProjectEnvType = ClosedEnum<typeof EditProjectEnvType>;
export type EditProjectEnvRequestBody = {
    /**
     * The name of the environment variable
     */
    key?: string | undefined;
    /**
     * The target environment of the environment variable
     */
    target?: Array<EditProjectEnvTarget> | undefined;
    /**
     * If defined, the git branch of the environment variable (must have target=preview)
     */
    gitBranch?: string | null | undefined;
    /**
     * The type of environment variable
     */
    type?: EditProjectEnvType | undefined;
    /**
     * The value of the environment variable
     */
    value?: string | undefined;
    /**
     * The custom environments that the environment variable should be synced to
     */
    customEnvironmentIds?: Array<string> | undefined;
    /**
     * A comment to add context on what this env var is for
     */
    comment?: string | undefined;
};
export type EditProjectEnvRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The unique environment variable identifier
     */
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: EditProjectEnvRequestBody;
};
export declare const EditProjectEnvProjectsType: {
    readonly Secret: "secret";
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
export type EditProjectEnvProjectsType = ClosedEnum<typeof EditProjectEnvProjectsType>;
export declare const EditProjectEnvTarget2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type EditProjectEnvTarget2 = ClosedEnum<typeof EditProjectEnvTarget2>;
export declare const EditProjectEnvTarget1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type EditProjectEnvTarget1 = ClosedEnum<typeof EditProjectEnvTarget1>;
export type EditProjectEnvProjectsTarget = Array<EditProjectEnvTarget1> | EditProjectEnvTarget2;
export type ContentHint15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type ContentHint14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type ContentHint13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type ContentHint12 = {
    type: "postgres-database";
    storeId: string;
};
export type ContentHint11 = {
    type: "postgres-password";
    storeId: string;
};
export type ContentHint10 = {
    type: "postgres-host";
    storeId: string;
};
export type ContentHint9 = {
    type: "postgres-user";
    storeId: string;
};
export type ContentHint8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type ContentHint7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type ContentHint6 = {
    type: "postgres-url";
    storeId: string;
};
export type ContentHint5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type ContentHint4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type ContentHint3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type ContentHint2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type ContentHint1 = {
    type: "redis-url";
    storeId: string;
};
export type ContentHint = ContentHint1 | ContentHint2 | ContentHint3 | ContentHint4 | ContentHint5 | ContentHint6 | ContentHint7 | ContentHint8 | ContentHint9 | ContentHint10 | ContentHint11 | ContentHint12 | ContentHint13 | ContentHint14 | ContentHint15;
export declare const EditProjectEnvProjectsResponseType: {
    readonly FlagsSecret: "flags-secret";
};
export type EditProjectEnvProjectsResponseType = ClosedEnum<typeof EditProjectEnvProjectsResponseType>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type InternalContentHint = {
    type: EditProjectEnvProjectsResponseType;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
/**
 * The environment variable was successfully edited
 */
export type EditProjectEnvResponseBody = {
    type: EditProjectEnvProjectsType;
    value: string;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    id?: string | undefined;
    createdBy?: string | null | undefined;
    target?: Array<EditProjectEnvTarget1> | EditProjectEnvTarget2 | undefined;
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
    contentHint?: ContentHint1 | ContentHint2 | ContentHint3 | ContentHint4 | ContentHint5 | ContentHint6 | ContentHint7 | ContentHint8 | ContentHint9 | ContentHint10 | ContentHint11 | ContentHint12 | ContentHint13 | ContentHint14 | ContentHint15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: InternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/** @internal */
export declare const EditProjectEnvTarget$inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget>;
/** @internal */
export declare const EditProjectEnvTarget$outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget>;
/** @internal */
export declare const EditProjectEnvType$inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvType>;
/** @internal */
export declare const EditProjectEnvType$outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvType>;
/** @internal */
export declare const EditProjectEnvRequestBody$inboundSchema: z.ZodType<EditProjectEnvRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvRequestBody$Outbound = {
    key?: string | undefined;
    target?: Array<string> | undefined;
    gitBranch?: string | null | undefined;
    type?: string | undefined;
    value?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    comment?: string | undefined;
};
/** @internal */
export declare const EditProjectEnvRequestBody$outboundSchema: z.ZodType<EditProjectEnvRequestBody$Outbound, z.ZodTypeDef, EditProjectEnvRequestBody>;
export declare function editProjectEnvRequestBodyToJSON(editProjectEnvRequestBody: EditProjectEnvRequestBody): string;
export declare function editProjectEnvRequestBodyFromJSON(jsonString: string): SafeParseResult<EditProjectEnvRequestBody, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvRequest$inboundSchema: z.ZodType<EditProjectEnvRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvRequest$Outbound = {
    idOrName: string;
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: EditProjectEnvRequestBody$Outbound;
};
/** @internal */
export declare const EditProjectEnvRequest$outboundSchema: z.ZodType<EditProjectEnvRequest$Outbound, z.ZodTypeDef, EditProjectEnvRequest>;
export declare function editProjectEnvRequestToJSON(editProjectEnvRequest: EditProjectEnvRequest): string;
export declare function editProjectEnvRequestFromJSON(jsonString: string): SafeParseResult<EditProjectEnvRequest, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvProjectsType$inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvProjectsType>;
/** @internal */
export declare const EditProjectEnvProjectsType$outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvProjectsType>;
/** @internal */
export declare const EditProjectEnvTarget2$inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget2>;
/** @internal */
export declare const EditProjectEnvTarget2$outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget2>;
/** @internal */
export declare const EditProjectEnvTarget1$inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget1>;
/** @internal */
export declare const EditProjectEnvTarget1$outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget1>;
/** @internal */
export declare const EditProjectEnvProjectsTarget$inboundSchema: z.ZodType<EditProjectEnvProjectsTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvProjectsTarget$Outbound = Array<string> | string;
/** @internal */
export declare const EditProjectEnvProjectsTarget$outboundSchema: z.ZodType<EditProjectEnvProjectsTarget$Outbound, z.ZodTypeDef, EditProjectEnvProjectsTarget>;
export declare function editProjectEnvProjectsTargetToJSON(editProjectEnvProjectsTarget: EditProjectEnvProjectsTarget): string;
export declare function editProjectEnvProjectsTargetFromJSON(jsonString: string): SafeParseResult<EditProjectEnvProjectsTarget, SDKValidationError>;
/** @internal */
export declare const ContentHint15$inboundSchema: z.ZodType<ContentHint15, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const ContentHint15$outboundSchema: z.ZodType<ContentHint15$Outbound, z.ZodTypeDef, ContentHint15>;
export declare function contentHint15ToJSON(contentHint15: ContentHint15): string;
export declare function contentHint15FromJSON(jsonString: string): SafeParseResult<ContentHint15, SDKValidationError>;
/** @internal */
export declare const ContentHint14$inboundSchema: z.ZodType<ContentHint14, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const ContentHint14$outboundSchema: z.ZodType<ContentHint14$Outbound, z.ZodTypeDef, ContentHint14>;
export declare function contentHint14ToJSON(contentHint14: ContentHint14): string;
export declare function contentHint14FromJSON(jsonString: string): SafeParseResult<ContentHint14, SDKValidationError>;
/** @internal */
export declare const ContentHint13$inboundSchema: z.ZodType<ContentHint13, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const ContentHint13$outboundSchema: z.ZodType<ContentHint13$Outbound, z.ZodTypeDef, ContentHint13>;
export declare function contentHint13ToJSON(contentHint13: ContentHint13): string;
export declare function contentHint13FromJSON(jsonString: string): SafeParseResult<ContentHint13, SDKValidationError>;
/** @internal */
export declare const ContentHint12$inboundSchema: z.ZodType<ContentHint12, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const ContentHint12$outboundSchema: z.ZodType<ContentHint12$Outbound, z.ZodTypeDef, ContentHint12>;
export declare function contentHint12ToJSON(contentHint12: ContentHint12): string;
export declare function contentHint12FromJSON(jsonString: string): SafeParseResult<ContentHint12, SDKValidationError>;
/** @internal */
export declare const ContentHint11$inboundSchema: z.ZodType<ContentHint11, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const ContentHint11$outboundSchema: z.ZodType<ContentHint11$Outbound, z.ZodTypeDef, ContentHint11>;
export declare function contentHint11ToJSON(contentHint11: ContentHint11): string;
export declare function contentHint11FromJSON(jsonString: string): SafeParseResult<ContentHint11, SDKValidationError>;
/** @internal */
export declare const ContentHint10$inboundSchema: z.ZodType<ContentHint10, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const ContentHint10$outboundSchema: z.ZodType<ContentHint10$Outbound, z.ZodTypeDef, ContentHint10>;
export declare function contentHint10ToJSON(contentHint10: ContentHint10): string;
export declare function contentHint10FromJSON(jsonString: string): SafeParseResult<ContentHint10, SDKValidationError>;
/** @internal */
export declare const ContentHint9$inboundSchema: z.ZodType<ContentHint9, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const ContentHint9$outboundSchema: z.ZodType<ContentHint9$Outbound, z.ZodTypeDef, ContentHint9>;
export declare function contentHint9ToJSON(contentHint9: ContentHint9): string;
export declare function contentHint9FromJSON(jsonString: string): SafeParseResult<ContentHint9, SDKValidationError>;
/** @internal */
export declare const ContentHint8$inboundSchema: z.ZodType<ContentHint8, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const ContentHint8$outboundSchema: z.ZodType<ContentHint8$Outbound, z.ZodTypeDef, ContentHint8>;
export declare function contentHint8ToJSON(contentHint8: ContentHint8): string;
export declare function contentHint8FromJSON(jsonString: string): SafeParseResult<ContentHint8, SDKValidationError>;
/** @internal */
export declare const ContentHint7$inboundSchema: z.ZodType<ContentHint7, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const ContentHint7$outboundSchema: z.ZodType<ContentHint7$Outbound, z.ZodTypeDef, ContentHint7>;
export declare function contentHint7ToJSON(contentHint7: ContentHint7): string;
export declare function contentHint7FromJSON(jsonString: string): SafeParseResult<ContentHint7, SDKValidationError>;
/** @internal */
export declare const ContentHint6$inboundSchema: z.ZodType<ContentHint6, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const ContentHint6$outboundSchema: z.ZodType<ContentHint6$Outbound, z.ZodTypeDef, ContentHint6>;
export declare function contentHint6ToJSON(contentHint6: ContentHint6): string;
export declare function contentHint6FromJSON(jsonString: string): SafeParseResult<ContentHint6, SDKValidationError>;
/** @internal */
export declare const ContentHint5$inboundSchema: z.ZodType<ContentHint5, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const ContentHint5$outboundSchema: z.ZodType<ContentHint5$Outbound, z.ZodTypeDef, ContentHint5>;
export declare function contentHint5ToJSON(contentHint5: ContentHint5): string;
export declare function contentHint5FromJSON(jsonString: string): SafeParseResult<ContentHint5, SDKValidationError>;
/** @internal */
export declare const ContentHint4$inboundSchema: z.ZodType<ContentHint4, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const ContentHint4$outboundSchema: z.ZodType<ContentHint4$Outbound, z.ZodTypeDef, ContentHint4>;
export declare function contentHint4ToJSON(contentHint4: ContentHint4): string;
export declare function contentHint4FromJSON(jsonString: string): SafeParseResult<ContentHint4, SDKValidationError>;
/** @internal */
export declare const ContentHint3$inboundSchema: z.ZodType<ContentHint3, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const ContentHint3$outboundSchema: z.ZodType<ContentHint3$Outbound, z.ZodTypeDef, ContentHint3>;
export declare function contentHint3ToJSON(contentHint3: ContentHint3): string;
export declare function contentHint3FromJSON(jsonString: string): SafeParseResult<ContentHint3, SDKValidationError>;
/** @internal */
export declare const ContentHint2$inboundSchema: z.ZodType<ContentHint2, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const ContentHint2$outboundSchema: z.ZodType<ContentHint2$Outbound, z.ZodTypeDef, ContentHint2>;
export declare function contentHint2ToJSON(contentHint2: ContentHint2): string;
export declare function contentHint2FromJSON(jsonString: string): SafeParseResult<ContentHint2, SDKValidationError>;
/** @internal */
export declare const ContentHint1$inboundSchema: z.ZodType<ContentHint1, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const ContentHint1$outboundSchema: z.ZodType<ContentHint1$Outbound, z.ZodTypeDef, ContentHint1>;
export declare function contentHint1ToJSON(contentHint1: ContentHint1): string;
export declare function contentHint1FromJSON(jsonString: string): SafeParseResult<ContentHint1, SDKValidationError>;
/** @internal */
export declare const ContentHint$inboundSchema: z.ZodType<ContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type ContentHint$Outbound = ContentHint1$Outbound | ContentHint2$Outbound | ContentHint3$Outbound | ContentHint4$Outbound | ContentHint5$Outbound | ContentHint6$Outbound | ContentHint7$Outbound | ContentHint8$Outbound | ContentHint9$Outbound | ContentHint10$Outbound | ContentHint11$Outbound | ContentHint12$Outbound | ContentHint13$Outbound | ContentHint14$Outbound | ContentHint15$Outbound;
/** @internal */
export declare const ContentHint$outboundSchema: z.ZodType<ContentHint$Outbound, z.ZodTypeDef, ContentHint>;
export declare function contentHintToJSON(contentHint: ContentHint): string;
export declare function contentHintFromJSON(jsonString: string): SafeParseResult<ContentHint, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvProjectsResponseType$inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvProjectsResponseType>;
/** @internal */
export declare const EditProjectEnvProjectsResponseType$outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvProjectsResponseType>;
/** @internal */
export declare const InternalContentHint$inboundSchema: z.ZodType<InternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type InternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const InternalContentHint$outboundSchema: z.ZodType<InternalContentHint$Outbound, z.ZodTypeDef, InternalContentHint>;
export declare function internalContentHintToJSON(internalContentHint: InternalContentHint): string;
export declare function internalContentHintFromJSON(jsonString: string): SafeParseResult<InternalContentHint, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvResponseBody$inboundSchema: z.ZodType<EditProjectEnvResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvResponseBody$Outbound = {
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
    contentHint?: ContentHint1$Outbound | ContentHint2$Outbound | ContentHint3$Outbound | ContentHint4$Outbound | ContentHint5$Outbound | ContentHint6$Outbound | ContentHint7$Outbound | ContentHint8$Outbound | ContentHint9$Outbound | ContentHint10$Outbound | ContentHint11$Outbound | ContentHint12$Outbound | ContentHint13$Outbound | ContentHint14$Outbound | ContentHint15$Outbound | null | undefined;
    internalContentHint?: InternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/** @internal */
export declare const EditProjectEnvResponseBody$outboundSchema: z.ZodType<EditProjectEnvResponseBody$Outbound, z.ZodTypeDef, EditProjectEnvResponseBody>;
export declare function editProjectEnvResponseBodyToJSON(editProjectEnvResponseBody: EditProjectEnvResponseBody): string;
export declare function editProjectEnvResponseBodyFromJSON(jsonString: string): SafeParseResult<EditProjectEnvResponseBody, SDKValidationError>;
//# sourceMappingURL=editprojectenvop.d.ts.map