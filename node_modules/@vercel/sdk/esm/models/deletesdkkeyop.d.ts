import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteSDKKeyRequest = {
    /**
     * The project id or name
     */
    projectIdOrName: string;
    /**
     * The SDK key hash key to delete
     */
    hashKey: string;
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
export declare const DeleteSDKKeyRequest$inboundSchema: z.ZodType<DeleteSDKKeyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSDKKeyRequest$Outbound = {
    projectIdOrName: string;
    hashKey: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteSDKKeyRequest$outboundSchema: z.ZodType<DeleteSDKKeyRequest$Outbound, z.ZodTypeDef, DeleteSDKKeyRequest>;
export declare function deleteSDKKeyRequestToJSON(deleteSDKKeyRequest: DeleteSDKKeyRequest): string;
export declare function deleteSDKKeyRequestFromJSON(jsonString: string): SafeParseResult<DeleteSDKKeyRequest, SDKValidationError>;
//# sourceMappingURL=deletesdkkeyop.d.ts.map