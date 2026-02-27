import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteEdgeConfigTokensRequestBody = {
    tokens: Array<string>;
};
export type DeleteEdgeConfigTokensRequest = {
    edgeConfigId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: DeleteEdgeConfigTokensRequestBody;
};
/** @internal */
export declare const DeleteEdgeConfigTokensRequestBody$inboundSchema: z.ZodType<DeleteEdgeConfigTokensRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteEdgeConfigTokensRequestBody$Outbound = {
    tokens: Array<string>;
};
/** @internal */
export declare const DeleteEdgeConfigTokensRequestBody$outboundSchema: z.ZodType<DeleteEdgeConfigTokensRequestBody$Outbound, z.ZodTypeDef, DeleteEdgeConfigTokensRequestBody>;
export declare function deleteEdgeConfigTokensRequestBodyToJSON(deleteEdgeConfigTokensRequestBody: DeleteEdgeConfigTokensRequestBody): string;
export declare function deleteEdgeConfigTokensRequestBodyFromJSON(jsonString: string): SafeParseResult<DeleteEdgeConfigTokensRequestBody, SDKValidationError>;
/** @internal */
export declare const DeleteEdgeConfigTokensRequest$inboundSchema: z.ZodType<DeleteEdgeConfigTokensRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteEdgeConfigTokensRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: DeleteEdgeConfigTokensRequestBody$Outbound;
};
/** @internal */
export declare const DeleteEdgeConfigTokensRequest$outboundSchema: z.ZodType<DeleteEdgeConfigTokensRequest$Outbound, z.ZodTypeDef, DeleteEdgeConfigTokensRequest>;
export declare function deleteEdgeConfigTokensRequestToJSON(deleteEdgeConfigTokensRequest: DeleteEdgeConfigTokensRequest): string;
export declare function deleteEdgeConfigTokensRequestFromJSON(jsonString: string): SafeParseResult<DeleteEdgeConfigTokensRequest, SDKValidationError>;
//# sourceMappingURL=deleteedgeconfigtokensop.d.ts.map