import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetEdgeConfigSchemaRequest = {
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
 * The EdgeConfig.
 */
export type GetEdgeConfigSchemaResponseBody = {};
/** @internal */
export declare const GetEdgeConfigSchemaRequest$inboundSchema: z.ZodType<GetEdgeConfigSchemaRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigSchemaRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetEdgeConfigSchemaRequest$outboundSchema: z.ZodType<GetEdgeConfigSchemaRequest$Outbound, z.ZodTypeDef, GetEdgeConfigSchemaRequest>;
export declare function getEdgeConfigSchemaRequestToJSON(getEdgeConfigSchemaRequest: GetEdgeConfigSchemaRequest): string;
export declare function getEdgeConfigSchemaRequestFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigSchemaRequest, SDKValidationError>;
/** @internal */
export declare const GetEdgeConfigSchemaResponseBody$inboundSchema: z.ZodType<GetEdgeConfigSchemaResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigSchemaResponseBody$Outbound = {};
/** @internal */
export declare const GetEdgeConfigSchemaResponseBody$outboundSchema: z.ZodType<GetEdgeConfigSchemaResponseBody$Outbound, z.ZodTypeDef, GetEdgeConfigSchemaResponseBody>;
export declare function getEdgeConfigSchemaResponseBodyToJSON(getEdgeConfigSchemaResponseBody: GetEdgeConfigSchemaResponseBody): string;
export declare function getEdgeConfigSchemaResponseBodyFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigSchemaResponseBody, SDKValidationError>;
//# sourceMappingURL=getedgeconfigschemaop.d.ts.map