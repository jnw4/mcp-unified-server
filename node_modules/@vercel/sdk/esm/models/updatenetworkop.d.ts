import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UpdateNetworkRequestBody = {
    /**
     * The name of the Secure Compute network
     */
    name: string;
};
export type UpdateNetworkRequest = {
    /**
     * The unique identifier of the Secure Compute network
     */
    networkId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UpdateNetworkRequestBody | undefined;
};
/** @internal */
export declare const UpdateNetworkRequestBody$inboundSchema: z.ZodType<UpdateNetworkRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateNetworkRequestBody$Outbound = {
    name: string;
};
/** @internal */
export declare const UpdateNetworkRequestBody$outboundSchema: z.ZodType<UpdateNetworkRequestBody$Outbound, z.ZodTypeDef, UpdateNetworkRequestBody>;
export declare function updateNetworkRequestBodyToJSON(updateNetworkRequestBody: UpdateNetworkRequestBody): string;
export declare function updateNetworkRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateNetworkRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateNetworkRequest$inboundSchema: z.ZodType<UpdateNetworkRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateNetworkRequest$Outbound = {
    networkId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateNetworkRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateNetworkRequest$outboundSchema: z.ZodType<UpdateNetworkRequest$Outbound, z.ZodTypeDef, UpdateNetworkRequest>;
export declare function updateNetworkRequestToJSON(updateNetworkRequest: UpdateNetworkRequest): string;
export declare function updateNetworkRequestFromJSON(jsonString: string): SafeParseResult<UpdateNetworkRequest, SDKValidationError>;
//# sourceMappingURL=updatenetworkop.d.ts.map