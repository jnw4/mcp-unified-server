import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetEdgeConfigItemRequest = {
    edgeConfigId: string;
    edgeConfigItemKey: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/** @internal */
export declare const GetEdgeConfigItemRequest$inboundSchema: z.ZodType<GetEdgeConfigItemRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigItemRequest$Outbound = {
    edgeConfigId: string;
    edgeConfigItemKey: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetEdgeConfigItemRequest$outboundSchema: z.ZodType<GetEdgeConfigItemRequest$Outbound, z.ZodTypeDef, GetEdgeConfigItemRequest>;
export declare function getEdgeConfigItemRequestToJSON(getEdgeConfigItemRequest: GetEdgeConfigItemRequest): string;
export declare function getEdgeConfigItemRequestFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigItemRequest, SDKValidationError>;
//# sourceMappingURL=getedgeconfigitemop.d.ts.map