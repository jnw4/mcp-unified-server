import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UpdateEdgeConfigRequestBody = {
    slug: string;
};
export type UpdateEdgeConfigRequest = {
    edgeConfigId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: UpdateEdgeConfigRequestBody;
};
/**
 * Keeps track of the current state of the Edge Config while it gets transferred.
 */
export type UpdateEdgeConfigTransfer = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};
export type UpdateEdgeConfigPurpose2 = {
    type: "experimentation";
    resourceId: string;
};
export type UpdateEdgeConfigPurpose1 = {
    type: "flags";
    projectId: string;
};
export type UpdateEdgeConfigPurpose = UpdateEdgeConfigPurpose1 | UpdateEdgeConfigPurpose2;
export type UpdateEdgeConfigSchema = {};
/**
 * An Edge Config
 */
export type UpdateEdgeConfigResponseBody = {
    /**
     * Keeps track of the current state of the Edge Config while it gets transferred.
     */
    transfer?: UpdateEdgeConfigTransfer | undefined;
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
    purpose?: UpdateEdgeConfigPurpose1 | UpdateEdgeConfigPurpose2 | undefined;
    deletedAt?: number | null | undefined;
    schema?: UpdateEdgeConfigSchema | undefined;
    /**
     * Timestamp of when the Edge Config was synced to DynamoDB initially. It is only set when syncing the entire Edge Config, not when updating.
     */
    syncedToDynamoAt?: number | undefined;
    sizeInBytes: number;
    itemCount: number;
};
/** @internal */
export declare const UpdateEdgeConfigRequestBody$inboundSchema: z.ZodType<UpdateEdgeConfigRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateEdgeConfigRequestBody$Outbound = {
    slug: string;
};
/** @internal */
export declare const UpdateEdgeConfigRequestBody$outboundSchema: z.ZodType<UpdateEdgeConfigRequestBody$Outbound, z.ZodTypeDef, UpdateEdgeConfigRequestBody>;
export declare function updateEdgeConfigRequestBodyToJSON(updateEdgeConfigRequestBody: UpdateEdgeConfigRequestBody): string;
export declare function updateEdgeConfigRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateEdgeConfigRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateEdgeConfigRequest$inboundSchema: z.ZodType<UpdateEdgeConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateEdgeConfigRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: UpdateEdgeConfigRequestBody$Outbound;
};
/** @internal */
export declare const UpdateEdgeConfigRequest$outboundSchema: z.ZodType<UpdateEdgeConfigRequest$Outbound, z.ZodTypeDef, UpdateEdgeConfigRequest>;
export declare function updateEdgeConfigRequestToJSON(updateEdgeConfigRequest: UpdateEdgeConfigRequest): string;
export declare function updateEdgeConfigRequestFromJSON(jsonString: string): SafeParseResult<UpdateEdgeConfigRequest, SDKValidationError>;
/** @internal */
export declare const UpdateEdgeConfigTransfer$inboundSchema: z.ZodType<UpdateEdgeConfigTransfer, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateEdgeConfigTransfer$Outbound = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};
/** @internal */
export declare const UpdateEdgeConfigTransfer$outboundSchema: z.ZodType<UpdateEdgeConfigTransfer$Outbound, z.ZodTypeDef, UpdateEdgeConfigTransfer>;
export declare function updateEdgeConfigTransferToJSON(updateEdgeConfigTransfer: UpdateEdgeConfigTransfer): string;
export declare function updateEdgeConfigTransferFromJSON(jsonString: string): SafeParseResult<UpdateEdgeConfigTransfer, SDKValidationError>;
/** @internal */
export declare const UpdateEdgeConfigPurpose2$inboundSchema: z.ZodType<UpdateEdgeConfigPurpose2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateEdgeConfigPurpose2$Outbound = {
    type: "experimentation";
    resourceId: string;
};
/** @internal */
export declare const UpdateEdgeConfigPurpose2$outboundSchema: z.ZodType<UpdateEdgeConfigPurpose2$Outbound, z.ZodTypeDef, UpdateEdgeConfigPurpose2>;
export declare function updateEdgeConfigPurpose2ToJSON(updateEdgeConfigPurpose2: UpdateEdgeConfigPurpose2): string;
export declare function updateEdgeConfigPurpose2FromJSON(jsonString: string): SafeParseResult<UpdateEdgeConfigPurpose2, SDKValidationError>;
/** @internal */
export declare const UpdateEdgeConfigPurpose1$inboundSchema: z.ZodType<UpdateEdgeConfigPurpose1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateEdgeConfigPurpose1$Outbound = {
    type: "flags";
    projectId: string;
};
/** @internal */
export declare const UpdateEdgeConfigPurpose1$outboundSchema: z.ZodType<UpdateEdgeConfigPurpose1$Outbound, z.ZodTypeDef, UpdateEdgeConfigPurpose1>;
export declare function updateEdgeConfigPurpose1ToJSON(updateEdgeConfigPurpose1: UpdateEdgeConfigPurpose1): string;
export declare function updateEdgeConfigPurpose1FromJSON(jsonString: string): SafeParseResult<UpdateEdgeConfigPurpose1, SDKValidationError>;
/** @internal */
export declare const UpdateEdgeConfigPurpose$inboundSchema: z.ZodType<UpdateEdgeConfigPurpose, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateEdgeConfigPurpose$Outbound = UpdateEdgeConfigPurpose1$Outbound | UpdateEdgeConfigPurpose2$Outbound;
/** @internal */
export declare const UpdateEdgeConfigPurpose$outboundSchema: z.ZodType<UpdateEdgeConfigPurpose$Outbound, z.ZodTypeDef, UpdateEdgeConfigPurpose>;
export declare function updateEdgeConfigPurposeToJSON(updateEdgeConfigPurpose: UpdateEdgeConfigPurpose): string;
export declare function updateEdgeConfigPurposeFromJSON(jsonString: string): SafeParseResult<UpdateEdgeConfigPurpose, SDKValidationError>;
/** @internal */
export declare const UpdateEdgeConfigSchema$inboundSchema: z.ZodType<UpdateEdgeConfigSchema, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateEdgeConfigSchema$Outbound = {};
/** @internal */
export declare const UpdateEdgeConfigSchema$outboundSchema: z.ZodType<UpdateEdgeConfigSchema$Outbound, z.ZodTypeDef, UpdateEdgeConfigSchema>;
export declare function updateEdgeConfigSchemaToJSON(updateEdgeConfigSchema: UpdateEdgeConfigSchema): string;
export declare function updateEdgeConfigSchemaFromJSON(jsonString: string): SafeParseResult<UpdateEdgeConfigSchema, SDKValidationError>;
/** @internal */
export declare const UpdateEdgeConfigResponseBody$inboundSchema: z.ZodType<UpdateEdgeConfigResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateEdgeConfigResponseBody$Outbound = {
    transfer?: UpdateEdgeConfigTransfer$Outbound | undefined;
    id: string;
    createdAt: number;
    createdBy?: string | undefined;
    ownerId: string;
    slug: string;
    updatedAt: number;
    digest: string;
    purpose?: UpdateEdgeConfigPurpose1$Outbound | UpdateEdgeConfigPurpose2$Outbound | undefined;
    deletedAt?: number | null | undefined;
    schema?: UpdateEdgeConfigSchema$Outbound | undefined;
    syncedToDynamoAt?: number | undefined;
    sizeInBytes: number;
    itemCount: number;
};
/** @internal */
export declare const UpdateEdgeConfigResponseBody$outboundSchema: z.ZodType<UpdateEdgeConfigResponseBody$Outbound, z.ZodTypeDef, UpdateEdgeConfigResponseBody>;
export declare function updateEdgeConfigResponseBodyToJSON(updateEdgeConfigResponseBody: UpdateEdgeConfigResponseBody): string;
export declare function updateEdgeConfigResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateEdgeConfigResponseBody, SDKValidationError>;
//# sourceMappingURL=updateedgeconfigop.d.ts.map