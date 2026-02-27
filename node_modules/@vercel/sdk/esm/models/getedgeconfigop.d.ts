import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetEdgeConfigRequest = {
    edgeConfigId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/**
 * Keeps track of the current state of the Edge Config while it gets transferred.
 */
export type GetEdgeConfigTransfer = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};
export type GetEdgeConfigPurpose2 = {
    type: "experimentation";
    resourceId: string;
};
export type GetEdgeConfigPurpose1 = {
    type: "flags";
    projectId: string;
};
export type GetEdgeConfigPurpose = GetEdgeConfigPurpose1 | GetEdgeConfigPurpose2;
export type GetEdgeConfigSchema = {};
/**
 * The EdgeConfig.
 */
export type GetEdgeConfigResponseBody = {
    /**
     * Keeps track of the current state of the Edge Config while it gets transferred.
     */
    transfer?: GetEdgeConfigTransfer | undefined;
    id: string;
    createdAt: number;
    /**
     * The ID of the user who created the Edge Config, optional because it is not always set.
     */
    createdBy?: string | undefined;
    ownerId: string;
    /**
     * Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).
     */
    slug: string;
    updatedAt: number;
    digest: string;
    purpose?: GetEdgeConfigPurpose1 | GetEdgeConfigPurpose2 | undefined;
    deletedAt?: number | null | undefined;
    schema?: GetEdgeConfigSchema | undefined;
    /**
     * Timestamp of when the Edge Config was synced to DynamoDB initially. It is only set when syncing the entire Edge Config, not when updating.
     */
    syncedToDynamoAt?: number | undefined;
    sizeInBytes: number;
    itemCount: number;
};
/** @internal */
export declare const GetEdgeConfigRequest$inboundSchema: z.ZodType<GetEdgeConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetEdgeConfigRequest$outboundSchema: z.ZodType<GetEdgeConfigRequest$Outbound, z.ZodTypeDef, GetEdgeConfigRequest>;
export declare function getEdgeConfigRequestToJSON(getEdgeConfigRequest: GetEdgeConfigRequest): string;
export declare function getEdgeConfigRequestFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigRequest, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigTransfer$inboundSchema: z.ZodType<GetEdgeConfigTransfer, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigTransfer$Outbound = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};
/** @internal */
export declare const GetEdgeConfigTransfer$outboundSchema: z.ZodType<GetEdgeConfigTransfer$Outbound, z.ZodTypeDef, GetEdgeConfigTransfer>;
export declare function getEdgeConfigTransferToJSON(getEdgeConfigTransfer: GetEdgeConfigTransfer): string;
export declare function getEdgeConfigTransferFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigTransfer, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigPurpose2$inboundSchema: z.ZodType<GetEdgeConfigPurpose2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigPurpose2$Outbound = {
    type: "experimentation";
    resourceId: string;
};
/** @internal */
export declare const GetEdgeConfigPurpose2$outboundSchema: z.ZodType<GetEdgeConfigPurpose2$Outbound, z.ZodTypeDef, GetEdgeConfigPurpose2>;
export declare function getEdgeConfigPurpose2ToJSON(getEdgeConfigPurpose2: GetEdgeConfigPurpose2): string;
export declare function getEdgeConfigPurpose2FromJSON(jsonString: string): SafeParseResult<GetEdgeConfigPurpose2, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigPurpose1$inboundSchema: z.ZodType<GetEdgeConfigPurpose1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigPurpose1$Outbound = {
    type: "flags";
    projectId: string;
};
/** @internal */
export declare const GetEdgeConfigPurpose1$outboundSchema: z.ZodType<GetEdgeConfigPurpose1$Outbound, z.ZodTypeDef, GetEdgeConfigPurpose1>;
export declare function getEdgeConfigPurpose1ToJSON(getEdgeConfigPurpose1: GetEdgeConfigPurpose1): string;
export declare function getEdgeConfigPurpose1FromJSON(jsonString: string): SafeParseResult<GetEdgeConfigPurpose1, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigPurpose$inboundSchema: z.ZodType<GetEdgeConfigPurpose, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigPurpose$Outbound = GetEdgeConfigPurpose1$Outbound | GetEdgeConfigPurpose2$Outbound;
/** @internal */
export declare const GetEdgeConfigPurpose$outboundSchema: z.ZodType<GetEdgeConfigPurpose$Outbound, z.ZodTypeDef, GetEdgeConfigPurpose>;
export declare function getEdgeConfigPurposeToJSON(getEdgeConfigPurpose: GetEdgeConfigPurpose): string;
export declare function getEdgeConfigPurposeFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigPurpose, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigSchema$inboundSchema: z.ZodType<GetEdgeConfigSchema, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigSchema$Outbound = {};
/** @internal */
export declare const GetEdgeConfigSchema$outboundSchema: z.ZodType<GetEdgeConfigSchema$Outbound, z.ZodTypeDef, GetEdgeConfigSchema>;
export declare function getEdgeConfigSchemaToJSON(getEdgeConfigSchema: GetEdgeConfigSchema): string;
export declare function getEdgeConfigSchemaFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigSchema, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigResponseBody$inboundSchema: z.ZodType<GetEdgeConfigResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigResponseBody$Outbound = {
    transfer?: GetEdgeConfigTransfer$Outbound | undefined;
    id: string;
    createdAt: number;
    createdBy?: string | undefined;
    ownerId: string;
    slug: string;
    updatedAt: number;
    digest: string;
    purpose?: GetEdgeConfigPurpose1$Outbound | GetEdgeConfigPurpose2$Outbound | undefined;
    deletedAt?: number | null | undefined;
    schema?: GetEdgeConfigSchema$Outbound | undefined;
    syncedToDynamoAt?: number | undefined;
    sizeInBytes: number;
    itemCount: number;
};
/** @internal */
export declare const GetEdgeConfigResponseBody$outboundSchema: z.ZodType<GetEdgeConfigResponseBody$Outbound, z.ZodTypeDef, GetEdgeConfigResponseBody>;
export declare function getEdgeConfigResponseBodyToJSON(getEdgeConfigResponseBody: GetEdgeConfigResponseBody): string;
export declare function getEdgeConfigResponseBodyFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigResponseBody, SDKValidationError>;
//# sourceMappingURL=getedgeconfigop.d.ts.map