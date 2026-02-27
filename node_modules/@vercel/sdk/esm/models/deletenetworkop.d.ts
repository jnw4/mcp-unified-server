import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteNetworkRequest = {
    /**
     * The ID of the network to delete
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
};
/** @internal */
export declare const DeleteNetworkRequest$inboundSchema: z.ZodType<DeleteNetworkRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteNetworkRequest$Outbound = {
    networkId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteNetworkRequest$outboundSchema: z.ZodType<DeleteNetworkRequest$Outbound, z.ZodTypeDef, DeleteNetworkRequest>;
export declare function deleteNetworkRequestToJSON(deleteNetworkRequest: DeleteNetworkRequest): string;
export declare function deleteNetworkRequestFromJSON(jsonString: string): SafeParseResult<DeleteNetworkRequest, SDKValidationError>;
//# sourceMappingURL=deletenetworkop.d.ts.map