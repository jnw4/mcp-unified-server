import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { EdgeConfigItemValue, EdgeConfigItemValue$Outbound } from "./edgeconfigitemvalue.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetEdgeConfigBackupRequest = {
    edgeConfigId: string;
    edgeConfigBackupVersionId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type ResponseBodyUser = {
    id: string;
    username: string;
    email: string;
    name?: string | undefined;
    avatar?: string | undefined;
};
export type GetEdgeConfigBackupResponseBodyItems = {
    description?: string | undefined;
    createdAt: number;
    updatedAt: number;
    value: EdgeConfigItemValue | null;
};
export type ResponseBodyBackup = {
    items: {
        [k: string]: GetEdgeConfigBackupResponseBodyItems;
    };
    /**
     * Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).
     */
    slug: string;
    updatedAt: number;
    digest: string;
};
export type ResponseBodyMetadata = {
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    itemsCount?: number | undefined;
    itemsBytes?: number | undefined;
};
export type GetEdgeConfigBackupResponseBody2 = {
    user: ResponseBodyUser;
    id: string;
    lastModified: number;
    backup: ResponseBodyBackup;
    metadata: ResponseBodyMetadata;
};
export type ResponseBodyItems = {
    description?: string | undefined;
    createdAt: number;
    updatedAt: number;
    value: EdgeConfigItemValue | null;
};
export type Backup = {
    items: {
        [k: string]: ResponseBodyItems;
    };
    /**
     * Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).
     */
    slug: string;
    updatedAt: number;
    digest: string;
};
export type GetEdgeConfigBackupResponseBodyMetadata = {
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    itemsCount?: number | undefined;
    itemsBytes?: number | undefined;
};
export type GetEdgeConfigBackupResponseBodyUser = {
    id: string;
    username: string;
    email: string;
    name?: string | undefined;
    avatar?: string | undefined;
};
/**
 * The object the API responds with when requesting an Edge Config backup
 */
export type GetEdgeConfigBackupResponseBody1 = {
    id: string;
    lastModified: number;
    backup: Backup;
    metadata: GetEdgeConfigBackupResponseBodyMetadata;
    user?: GetEdgeConfigBackupResponseBodyUser | undefined;
};
export type GetEdgeConfigBackupResponseBody = GetEdgeConfigBackupResponseBody2 | GetEdgeConfigBackupResponseBody1;
/** @internal */
export declare const GetEdgeConfigBackupRequest$inboundSchema: z.ZodType<GetEdgeConfigBackupRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigBackupRequest$Outbound = {
    edgeConfigId: string;
    edgeConfigBackupVersionId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetEdgeConfigBackupRequest$outboundSchema: z.ZodType<GetEdgeConfigBackupRequest$Outbound, z.ZodTypeDef, GetEdgeConfigBackupRequest>;
export declare function getEdgeConfigBackupRequestToJSON(getEdgeConfigBackupRequest: GetEdgeConfigBackupRequest): string;
export declare function getEdgeConfigBackupRequestFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigBackupRequest, SDKValidationError>;
/** @internal */
export declare const ResponseBodyUser$inboundSchema: z.ZodType<ResponseBodyUser, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyUser$Outbound = {
    id: string;
    username: string;
    email: string;
    name?: string | undefined;
    avatar?: string | undefined;
};
/** @internal */
export declare const ResponseBodyUser$outboundSchema: z.ZodType<ResponseBodyUser$Outbound, z.ZodTypeDef, ResponseBodyUser>;
export declare function responseBodyUserToJSON(responseBodyUser: ResponseBodyUser): string;
export declare function responseBodyUserFromJSON(jsonString: string): SafeParseResult<ResponseBodyUser, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigBackupResponseBodyItems$inboundSchema: z.ZodType<GetEdgeConfigBackupResponseBodyItems, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigBackupResponseBodyItems$Outbound = {
    description?: string | undefined;
    createdAt: number;
    updatedAt: number;
    value: EdgeConfigItemValue$Outbound | null;
};
/** @internal */
export declare const GetEdgeConfigBackupResponseBodyItems$outboundSchema: z.ZodType<GetEdgeConfigBackupResponseBodyItems$Outbound, z.ZodTypeDef, GetEdgeConfigBackupResponseBodyItems>;
export declare function getEdgeConfigBackupResponseBodyItemsToJSON(getEdgeConfigBackupResponseBodyItems: GetEdgeConfigBackupResponseBodyItems): string;
export declare function getEdgeConfigBackupResponseBodyItemsFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigBackupResponseBodyItems, SDKValidationError>;
/** @internal */
export declare const ResponseBodyBackup$inboundSchema: z.ZodType<ResponseBodyBackup, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyBackup$Outbound = {
    items: {
        [k: string]: GetEdgeConfigBackupResponseBodyItems$Outbound;
    };
    slug: string;
    updatedAt: number;
    digest: string;
};
/** @internal */
export declare const ResponseBodyBackup$outboundSchema: z.ZodType<ResponseBodyBackup$Outbound, z.ZodTypeDef, ResponseBodyBackup>;
export declare function responseBodyBackupToJSON(responseBodyBackup: ResponseBodyBackup): string;
export declare function responseBodyBackupFromJSON(jsonString: string): SafeParseResult<ResponseBodyBackup, SDKValidationError>;
/** @internal */
export declare const ResponseBodyMetadata$inboundSchema: z.ZodType<ResponseBodyMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyMetadata$Outbound = {
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    itemsCount?: number | undefined;
    itemsBytes?: number | undefined;
};
/** @internal */
export declare const ResponseBodyMetadata$outboundSchema: z.ZodType<ResponseBodyMetadata$Outbound, z.ZodTypeDef, ResponseBodyMetadata>;
export declare function responseBodyMetadataToJSON(responseBodyMetadata: ResponseBodyMetadata): string;
export declare function responseBodyMetadataFromJSON(jsonString: string): SafeParseResult<ResponseBodyMetadata, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigBackupResponseBody2$inboundSchema: z.ZodType<GetEdgeConfigBackupResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigBackupResponseBody2$Outbound = {
    user: ResponseBodyUser$Outbound;
    id: string;
    lastModified: number;
    backup: ResponseBodyBackup$Outbound;
    metadata: ResponseBodyMetadata$Outbound;
};
/** @internal */
export declare const GetEdgeConfigBackupResponseBody2$outboundSchema: z.ZodType<GetEdgeConfigBackupResponseBody2$Outbound, z.ZodTypeDef, GetEdgeConfigBackupResponseBody2>;
export declare function getEdgeConfigBackupResponseBody2ToJSON(getEdgeConfigBackupResponseBody2: GetEdgeConfigBackupResponseBody2): string;
export declare function getEdgeConfigBackupResponseBody2FromJSON(jsonString: string): SafeParseResult<GetEdgeConfigBackupResponseBody2, SDKValidationError>;
/** @internal */
export declare const ResponseBodyItems$inboundSchema: z.ZodType<ResponseBodyItems, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyItems$Outbound = {
    description?: string | undefined;
    createdAt: number;
    updatedAt: number;
    value: EdgeConfigItemValue$Outbound | null;
};
/** @internal */
export declare const ResponseBodyItems$outboundSchema: z.ZodType<ResponseBodyItems$Outbound, z.ZodTypeDef, ResponseBodyItems>;
export declare function responseBodyItemsToJSON(responseBodyItems: ResponseBodyItems): string;
export declare function responseBodyItemsFromJSON(jsonString: string): SafeParseResult<ResponseBodyItems, SDKValidationError>;
/** @internal */
export declare const Backup$inboundSchema: z.ZodType<Backup, z.ZodTypeDef, unknown>;
/** @internal */
export type Backup$Outbound = {
    items: {
        [k: string]: ResponseBodyItems$Outbound;
    };
    slug: string;
    updatedAt: number;
    digest: string;
};
/** @internal */
export declare const Backup$outboundSchema: z.ZodType<Backup$Outbound, z.ZodTypeDef, Backup>;
export declare function backupToJSON(backup: Backup): string;
export declare function backupFromJSON(jsonString: string): SafeParseResult<Backup, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigBackupResponseBodyMetadata$inboundSchema: z.ZodType<GetEdgeConfigBackupResponseBodyMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigBackupResponseBodyMetadata$Outbound = {
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    itemsCount?: number | undefined;
    itemsBytes?: number | undefined;
};
/** @internal */
export declare const GetEdgeConfigBackupResponseBodyMetadata$outboundSchema: z.ZodType<GetEdgeConfigBackupResponseBodyMetadata$Outbound, z.ZodTypeDef, GetEdgeConfigBackupResponseBodyMetadata>;
export declare function getEdgeConfigBackupResponseBodyMetadataToJSON(getEdgeConfigBackupResponseBodyMetadata: GetEdgeConfigBackupResponseBodyMetadata): string;
export declare function getEdgeConfigBackupResponseBodyMetadataFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigBackupResponseBodyMetadata, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigBackupResponseBodyUser$inboundSchema: z.ZodType<GetEdgeConfigBackupResponseBodyUser, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigBackupResponseBodyUser$Outbound = {
    id: string;
    username: string;
    email: string;
    name?: string | undefined;
    avatar?: string | undefined;
};
/** @internal */
export declare const GetEdgeConfigBackupResponseBodyUser$outboundSchema: z.ZodType<GetEdgeConfigBackupResponseBodyUser$Outbound, z.ZodTypeDef, GetEdgeConfigBackupResponseBodyUser>;
export declare function getEdgeConfigBackupResponseBodyUserToJSON(getEdgeConfigBackupResponseBodyUser: GetEdgeConfigBackupResponseBodyUser): string;
export declare function getEdgeConfigBackupResponseBodyUserFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigBackupResponseBodyUser, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigBackupResponseBody1$inboundSchema: z.ZodType<GetEdgeConfigBackupResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigBackupResponseBody1$Outbound = {
    id: string;
    lastModified: number;
    backup: Backup$Outbound;
    metadata: GetEdgeConfigBackupResponseBodyMetadata$Outbound;
    user?: GetEdgeConfigBackupResponseBodyUser$Outbound | undefined;
};
/** @internal */
export declare const GetEdgeConfigBackupResponseBody1$outboundSchema: z.ZodType<GetEdgeConfigBackupResponseBody1$Outbound, z.ZodTypeDef, GetEdgeConfigBackupResponseBody1>;
export declare function getEdgeConfigBackupResponseBody1ToJSON(getEdgeConfigBackupResponseBody1: GetEdgeConfigBackupResponseBody1): string;
export declare function getEdgeConfigBackupResponseBody1FromJSON(jsonString: string): SafeParseResult<GetEdgeConfigBackupResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigBackupResponseBody$inboundSchema: z.ZodType<GetEdgeConfigBackupResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigBackupResponseBody$Outbound = GetEdgeConfigBackupResponseBody2$Outbound | GetEdgeConfigBackupResponseBody1$Outbound;
/** @internal */
export declare const GetEdgeConfigBackupResponseBody$outboundSchema: z.ZodType<GetEdgeConfigBackupResponseBody$Outbound, z.ZodTypeDef, GetEdgeConfigBackupResponseBody>;
export declare function getEdgeConfigBackupResponseBodyToJSON(getEdgeConfigBackupResponseBody: GetEdgeConfigBackupResponseBody): string;
export declare function getEdgeConfigBackupResponseBodyFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigBackupResponseBody, SDKValidationError>;
//# sourceMappingURL=getedgeconfigbackupop.d.ts.map