import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetEdgeConfigItemsRequest = {
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
/** @internal */
export declare const GetEdgeConfigItemsRequest$inboundSchema: z.ZodType<GetEdgeConfigItemsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigItemsRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetEdgeConfigItemsRequest$outboundSchema: z.ZodType<GetEdgeConfigItemsRequest$Outbound, z.ZodTypeDef, GetEdgeConfigItemsRequest>;
export declare function getEdgeConfigItemsRequestToJSON(getEdgeConfigItemsRequest: GetEdgeConfigItemsRequest): string;
export declare function getEdgeConfigItemsRequestFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigItemsRequest, SDKValidationError>;
//# sourceMappingURL=getedgeconfigitemsop.d.ts.map