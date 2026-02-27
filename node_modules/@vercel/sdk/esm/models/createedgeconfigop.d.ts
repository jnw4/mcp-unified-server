import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type CreateEdgeConfigRequestBody = {
    slug: string;
    items?: {
        [k: string]: any;
    } | undefined;
};
export type CreateEdgeConfigRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: CreateEdgeConfigRequestBody;
};
/**
 * Keeps track of the current state of the Edge Config while it gets transferred.
 */
export type CreateEdgeConfigTransfer = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};
export type Purpose2 = {
    type: "experimentation";
    resourceId: string;
};
export type Purpose1 = {
    type: "flags";
    projectId: string;
};
export type CreateEdgeConfigPurpose = Purpose1 | Purpose2;
export type CreateEdgeConfigSchema = {};
/**
 * An Edge Config
 */
export type CreateEdgeConfigResponseBody = {
    /**
     * Keeps track of the current state of the Edge Config while it gets transferred.
     */
    transfer?: CreateEdgeConfigTransfer | undefined;
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
    purpose?: Purpose1 | Purpose2 | undefined;
    deletedAt?: number | null | undefined;
    schema?: CreateEdgeConfigSchema | undefined;
    /**
     * Timestamp of when the Edge Config was synced to DynamoDB initially. It is only set when syncing the entire Edge Config, not when updating.
     */
    syncedToDynamoAt?: number | undefined;
    sizeInBytes: number;
    itemCount: number;
};
/** @internal */
export declare const CreateEdgeConfigRequestBody$inboundSchema: z.ZodType<CreateEdgeConfigRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEdgeConfigRequestBody$Outbound = {
    slug: string;
    items?: {
        [k: string]: any;
    } | undefined;
};
/** @internal */
export declare const CreateEdgeConfigRequestBody$outboundSchema: z.ZodType<CreateEdgeConfigRequestBody$Outbound, z.ZodTypeDef, CreateEdgeConfigRequestBody>;
export declare function createEdgeConfigRequestBodyToJSON(createEdgeConfigRequestBody: CreateEdgeConfigRequestBody): string;
export declare function createEdgeConfigRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateEdgeConfigRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateEdgeConfigRequest$inboundSchema: z.ZodType<CreateEdgeConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEdgeConfigRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: CreateEdgeConfigRequestBody$Outbound;
};
/** @internal */
export declare const CreateEdgeConfigRequest$outboundSchema: z.ZodType<CreateEdgeConfigRequest$Outbound, z.ZodTypeDef, CreateEdgeConfigRequest>;
export declare function createEdgeConfigRequestToJSON(createEdgeConfigRequest: CreateEdgeConfigRequest): string;
export declare function createEdgeConfigRequestFromJSON(jsonString: string): SafeParseResult<CreateEdgeConfigRequest, SDKValidationError>;
/** @internal */
export declare const CreateEdgeConfigTransfer$inboundSchema: z.ZodType<CreateEdgeConfigTransfer, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEdgeConfigTransfer$Outbound = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};
/** @internal */
export declare const CreateEdgeConfigTransfer$outboundSchema: z.ZodType<CreateEdgeConfigTransfer$Outbound, z.ZodTypeDef, CreateEdgeConfigTransfer>;
export declare function createEdgeConfigTransferToJSON(createEdgeConfigTransfer: CreateEdgeConfigTransfer): string;
export declare function createEdgeConfigTransferFromJSON(jsonString: string): SafeParseResult<CreateEdgeConfigTransfer, SDKValidationError>;
/** @internal */
export declare const Purpose2$inboundSchema: z.ZodType<Purpose2, z.ZodTypeDef, unknown>;
/** @internal */
export type Purpose2$Outbound = {
    type: "experimentation";
    resourceId: string;
};
/** @internal */
export declare const Purpose2$outboundSchema: z.ZodType<Purpose2$Outbound, z.ZodTypeDef, Purpose2>;
export declare function purpose2ToJSON(purpose2: Purpose2): string;
export declare function purpose2FromJSON(jsonString: string): SafeParseResult<Purpose2, SDKValidationError>;
/** @internal */
export declare const Purpose1$inboundSchema: z.ZodType<Purpose1, z.ZodTypeDef, unknown>;
/** @internal */
export type Purpose1$Outbound = {
    type: "flags";
    projectId: string;
};
/** @internal */
export declare const Purpose1$outboundSchema: z.ZodType<Purpose1$Outbound, z.ZodTypeDef, Purpose1>;
export declare function purpose1ToJSON(purpose1: Purpose1): string;
export declare function purpose1FromJSON(jsonString: string): SafeParseResult<Purpose1, SDKValidationError>;
/** @internal */
export declare const CreateEdgeConfigPurpose$inboundSchema: z.ZodType<CreateEdgeConfigPurpose, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEdgeConfigPurpose$Outbound = Purpose1$Outbound | Purpose2$Outbound;
/** @internal */
export declare const CreateEdgeConfigPurpose$outboundSchema: z.ZodType<CreateEdgeConfigPurpose$Outbound, z.ZodTypeDef, CreateEdgeConfigPurpose>;
export declare function createEdgeConfigPurposeToJSON(createEdgeConfigPurpose: CreateEdgeConfigPurpose): string;
export declare function createEdgeConfigPurposeFromJSON(jsonString: string): SafeParseResult<CreateEdgeConfigPurpose, SDKValidationError>;
/** @internal */
export declare const CreateEdgeConfigSchema$inboundSchema: z.ZodType<CreateEdgeConfigSchema, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEdgeConfigSchema$Outbound = {};
/** @internal */
export declare const CreateEdgeConfigSchema$outboundSchema: z.ZodType<CreateEdgeConfigSchema$Outbound, z.ZodTypeDef, CreateEdgeConfigSchema>;
export declare function createEdgeConfigSchemaToJSON(createEdgeConfigSchema: CreateEdgeConfigSchema): string;
export declare function createEdgeConfigSchemaFromJSON(jsonString: string): SafeParseResult<CreateEdgeConfigSchema, SDKValidationError>;
/** @internal */
export declare const CreateEdgeConfigResponseBody$inboundSchema: z.ZodType<CreateEdgeConfigResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEdgeConfigResponseBody$Outbound = {
    transfer?: CreateEdgeConfigTransfer$Outbound | undefined;
    id: string;
    createdAt: number;
    createdBy?: string | undefined;
    ownerId: string;
    slug: string;
    updatedAt: number;
    digest: string;
    purpose?: Purpose1$Outbound | Purpose2$Outbound | undefined;
    deletedAt?: number | null | undefined;
    schema?: CreateEdgeConfigSchema$Outbound | undefined;
    syncedToDynamoAt?: number | undefined;
    sizeInBytes: number;
    itemCount: number;
};
/** @internal */
export declare const CreateEdgeConfigResponseBody$outboundSchema: z.ZodType<CreateEdgeConfigResponseBody$Outbound, z.ZodTypeDef, CreateEdgeConfigResponseBody>;
export declare function createEdgeConfigResponseBodyToJSON(createEdgeConfigResponseBody: CreateEdgeConfigResponseBody): string;
export declare function createEdgeConfigResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateEdgeConfigResponseBody, SDKValidationError>;
//# sourceMappingURL=createedgeconfigop.d.ts.map