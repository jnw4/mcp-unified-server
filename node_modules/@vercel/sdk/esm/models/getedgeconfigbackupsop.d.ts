import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetEdgeConfigBackupsRequest = {
    edgeConfigId: string;
    next?: string | undefined;
    limit?: number | undefined;
    metadata?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type GetEdgeConfigBackupsMetadata = {
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    itemsCount?: number | undefined;
    itemsBytes?: number | undefined;
};
export type Backups = {
    metadata?: GetEdgeConfigBackupsMetadata | undefined;
    id: string;
    lastModified: number;
};
export type GetEdgeConfigBackupsPagination = {
    hasNext: boolean;
    next?: string | undefined;
};
export type GetEdgeConfigBackupsResponseBody = {
    backups: Array<Backups>;
    pagination: GetEdgeConfigBackupsPagination;
};
/** @internal */
export declare const GetEdgeConfigBackupsRequest$inboundSchema: z.ZodType<GetEdgeConfigBackupsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigBackupsRequest$Outbound = {
    edgeConfigId: string;
    next?: string | undefined;
    limit?: number | undefined;
    metadata?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetEdgeConfigBackupsRequest$outboundSchema: z.ZodType<GetEdgeConfigBackupsRequest$Outbound, z.ZodTypeDef, GetEdgeConfigBackupsRequest>;
export declare function getEdgeConfigBackupsRequestToJSON(getEdgeConfigBackupsRequest: GetEdgeConfigBackupsRequest): string;
export declare function getEdgeConfigBackupsRequestFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigBackupsRequest, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigBackupsMetadata$inboundSchema: z.ZodType<GetEdgeConfigBackupsMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigBackupsMetadata$Outbound = {
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    itemsCount?: number | undefined;
    itemsBytes?: number | undefined;
};
/** @internal */
export declare const GetEdgeConfigBackupsMetadata$outboundSchema: z.ZodType<GetEdgeConfigBackupsMetadata$Outbound, z.ZodTypeDef, GetEdgeConfigBackupsMetadata>;
export declare function getEdgeConfigBackupsMetadataToJSON(getEdgeConfigBackupsMetadata: GetEdgeConfigBackupsMetadata): string;
export declare function getEdgeConfigBackupsMetadataFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigBackupsMetadata, SDKValidationError>;
/** @internal */
export declare const Backups$inboundSchema: z.ZodType<Backups, z.ZodTypeDef, unknown>;
/** @internal */
export type Backups$Outbound = {
    metadata?: GetEdgeConfigBackupsMetadata$Outbound | undefined;
    id: string;
    lastModified: number;
};
/** @internal */
export declare const Backups$outboundSchema: z.ZodType<Backups$Outbound, z.ZodTypeDef, Backups>;
export declare function backupsToJSON(backups: Backups): string;
export declare function backupsFromJSON(jsonString: string): SafeParseResult<Backups, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigBackupsPagination$inboundSchema: z.ZodType<GetEdgeConfigBackupsPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigBackupsPagination$Outbound = {
    hasNext: boolean;
    next?: string | undefined;
};
/** @internal */
export declare const GetEdgeConfigBackupsPagination$outboundSchema: z.ZodType<GetEdgeConfigBackupsPagination$Outbound, z.ZodTypeDef, GetEdgeConfigBackupsPagination>;
export declare function getEdgeConfigBackupsPaginationToJSON(getEdgeConfigBackupsPagination: GetEdgeConfigBackupsPagination): string;
export declare function getEdgeConfigBackupsPaginationFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigBackupsPagination, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigBackupsResponseBody$inboundSchema: z.ZodType<GetEdgeConfigBackupsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigBackupsResponseBody$Outbound = {
    backups: Array<Backups$Outbound>;
    pagination: GetEdgeConfigBackupsPagination$Outbound;
};
/** @internal */
export declare const GetEdgeConfigBackupsResponseBody$outboundSchema: z.ZodType<GetEdgeConfigBackupsResponseBody$Outbound, z.ZodTypeDef, GetEdgeConfigBackupsResponseBody>;
export declare function getEdgeConfigBackupsResponseBodyToJSON(getEdgeConfigBackupsResponseBody: GetEdgeConfigBackupsResponseBody): string;
export declare function getEdgeConfigBackupsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigBackupsResponseBody, SDKValidationError>;
//# sourceMappingURL=getedgeconfigbackupsop.d.ts.map