import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type PatchEdgeConfigSchemaRequestBody = {
    definition?: any | undefined;
};
export type PatchEdgeConfigSchemaRequest = {
    edgeConfigId: string;
    dryRun?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: PatchEdgeConfigSchemaRequestBody;
};
/**
 * The JSON schema uploaded by the user
 */
export type PatchEdgeConfigSchemaResponseBody = {};
/** @internal */
export declare const PatchEdgeConfigSchemaRequestBody$inboundSchema: z.ZodType<PatchEdgeConfigSchemaRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigSchemaRequestBody$Outbound = {
    definition?: any | undefined;
};
/** @internal */
export declare const PatchEdgeConfigSchemaRequestBody$outboundSchema: z.ZodType<PatchEdgeConfigSchemaRequestBody$Outbound, z.ZodTypeDef, PatchEdgeConfigSchemaRequestBody>;
export declare function patchEdgeConfigSchemaRequestBodyToJSON(patchEdgeConfigSchemaRequestBody: PatchEdgeConfigSchemaRequestBody): string;
export declare function patchEdgeConfigSchemaRequestBodyFromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigSchemaRequestBody, SDKValidationError>;
/** @internal */
export declare const PatchEdgeConfigSchemaRequest$inboundSchema: z.ZodType<PatchEdgeConfigSchemaRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigSchemaRequest$Outbound = {
    edgeConfigId: string;
    dryRun?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: PatchEdgeConfigSchemaRequestBody$Outbound;
};
/** @internal */
export declare const PatchEdgeConfigSchemaRequest$outboundSchema: z.ZodType<PatchEdgeConfigSchemaRequest$Outbound, z.ZodTypeDef, PatchEdgeConfigSchemaRequest>;
export declare function patchEdgeConfigSchemaRequestToJSON(patchEdgeConfigSchemaRequest: PatchEdgeConfigSchemaRequest): string;
export declare function patchEdgeConfigSchemaRequestFromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigSchemaRequest, SDKValidationError>;
/** @internal */
export declare const PatchEdgeConfigSchemaResponseBody$inboundSchema: z.ZodType<PatchEdgeConfigSchemaResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigSchemaResponseBody$Outbound = {};
/** @internal */
export declare const PatchEdgeConfigSchemaResponseBody$outboundSchema: z.ZodType<PatchEdgeConfigSchemaResponseBody$Outbound, z.ZodTypeDef, PatchEdgeConfigSchemaResponseBody>;
export declare function patchEdgeConfigSchemaResponseBodyToJSON(patchEdgeConfigSchemaResponseBody: PatchEdgeConfigSchemaResponseBody): string;
export declare function patchEdgeConfigSchemaResponseBodyFromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigSchemaResponseBody, SDKValidationError>;
//# sourceMappingURL=patchedgeconfigschemaop.d.ts.map