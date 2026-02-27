import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetEdgeConfigsRequest = {
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
export type Transfer = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};
export type Schema = {};
export declare const GetEdgeConfigsType: {
    readonly Flags: "flags";
};
export type GetEdgeConfigsType = ClosedEnum<typeof GetEdgeConfigsType>;
export type Purpose = {
    type: GetEdgeConfigsType;
    projectId: string;
};
export type GetEdgeConfigsResponseBody = {
    id?: string | undefined;
    createdAt?: number | undefined;
    ownerId?: string | undefined;
    /**
     * Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).
     */
    slug?: string | undefined;
    updatedAt?: number | undefined;
    digest?: string | undefined;
    /**
     * Keeps track of the current state of the Edge Config while it gets transferred.
     */
    transfer?: Transfer | undefined;
    schema?: Schema | undefined;
    purpose?: Purpose | undefined;
    sizeInBytes: number;
    itemCount: number;
};
/** @internal */
export declare const GetEdgeConfigsRequest$inboundSchema: z.ZodType<GetEdgeConfigsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigsRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetEdgeConfigsRequest$outboundSchema: z.ZodType<GetEdgeConfigsRequest$Outbound, z.ZodTypeDef, GetEdgeConfigsRequest>;
export declare function getEdgeConfigsRequestToJSON(getEdgeConfigsRequest: GetEdgeConfigsRequest): string;
export declare function getEdgeConfigsRequestFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigsRequest, SDKValidationError>;
/** @internal */
export declare const Transfer$inboundSchema: z.ZodType<Transfer, z.ZodTypeDef, unknown>;
/** @internal */
export type Transfer$Outbound = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};
/** @internal */
export declare const Transfer$outboundSchema: z.ZodType<Transfer$Outbound, z.ZodTypeDef, Transfer>;
export declare function transferToJSON(transfer: Transfer): string;
export declare function transferFromJSON(jsonString: string): SafeParseResult<Transfer, SDKValidationError>;
/** @internal */
export declare const Schema$inboundSchema: z.ZodType<Schema, z.ZodTypeDef, unknown>;
/** @internal */
export type Schema$Outbound = {};
/** @internal */
export declare const Schema$outboundSchema: z.ZodType<Schema$Outbound, z.ZodTypeDef, Schema>;
export declare function schemaToJSON(schema: Schema): string;
export declare function schemaFromJSON(jsonString: string): SafeParseResult<Schema, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigsType$inboundSchema: z.ZodNativeEnum<typeof GetEdgeConfigsType>;
/** @internal */
export declare const GetEdgeConfigsType$outboundSchema: z.ZodNativeEnum<typeof GetEdgeConfigsType>;
/** @internal */
export declare const Purpose$inboundSchema: z.ZodType<Purpose, z.ZodTypeDef, unknown>;
/** @internal */
export type Purpose$Outbound = {
    type: string;
    projectId: string;
};
/** @internal */
export declare const Purpose$outboundSchema: z.ZodType<Purpose$Outbound, z.ZodTypeDef, Purpose>;
export declare function purposeToJSON(purpose: Purpose): string;
export declare function purposeFromJSON(jsonString: string): SafeParseResult<Purpose, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigsResponseBody$inboundSchema: z.ZodType<GetEdgeConfigsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigsResponseBody$Outbound = {
    id?: string | undefined;
    createdAt?: number | undefined;
    ownerId?: string | undefined;
    slug?: string | undefined;
    updatedAt?: number | undefined;
    digest?: string | undefined;
    transfer?: Transfer$Outbound | undefined;
    schema?: Schema$Outbound | undefined;
    purpose?: Purpose$Outbound | undefined;
    sizeInBytes: number;
    itemCount: number;
};
/** @internal */
export declare const GetEdgeConfigsResponseBody$outboundSchema: z.ZodType<GetEdgeConfigsResponseBody$Outbound, z.ZodTypeDef, GetEdgeConfigsResponseBody>;
export declare function getEdgeConfigsResponseBodyToJSON(getEdgeConfigsResponseBody: GetEdgeConfigsResponseBody): string;
export declare function getEdgeConfigsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigsResponseBody, SDKValidationError>;
//# sourceMappingURL=getedgeconfigsop.d.ts.map