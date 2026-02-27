import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetEdgeConfigTokenRequest = {
    edgeConfigId: string;
    token: string;
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
export declare const GetEdgeConfigTokenRequest$inboundSchema: z.ZodType<GetEdgeConfigTokenRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEdgeConfigTokenRequest$Outbound = {
    edgeConfigId: string;
    token: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetEdgeConfigTokenRequest$outboundSchema: z.ZodType<GetEdgeConfigTokenRequest$Outbound, z.ZodTypeDef, GetEdgeConfigTokenRequest>;
export declare function getEdgeConfigTokenRequestToJSON(getEdgeConfigTokenRequest: GetEdgeConfigTokenRequest): string;
export declare function getEdgeConfigTokenRequestFromJSON(jsonString: string): SafeParseResult<GetEdgeConfigTokenRequest, SDKValidationError>;
//# sourceMappingURL=getedgeconfigtokenop.d.ts.map