import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteAuthTokenRequest = {
    /**
     * The identifier of the token to invalidate. The special value \"current\" may be supplied, which invalidates the token that the HTTP request was authenticated with.
     */
    tokenId: string;
};
/**
 * Authentication token successfully deleted.
 */
export type DeleteAuthTokenResponseBody = {
    /**
     * The unique identifier of the token that was deleted.
     */
    tokenId: string;
};
/** @internal */
export declare const DeleteAuthTokenRequest$inboundSchema: z.ZodType<DeleteAuthTokenRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAuthTokenRequest$Outbound = {
    tokenId: string;
};
/** @internal */
export declare const DeleteAuthTokenRequest$outboundSchema: z.ZodType<DeleteAuthTokenRequest$Outbound, z.ZodTypeDef, DeleteAuthTokenRequest>;
export declare function deleteAuthTokenRequestToJSON(deleteAuthTokenRequest: DeleteAuthTokenRequest): string;
export declare function deleteAuthTokenRequestFromJSON(jsonString: string): SafeParseResult<DeleteAuthTokenRequest, SDKValidationError>;
/** @internal */
export declare const DeleteAuthTokenResponseBody$inboundSchema: z.ZodType<DeleteAuthTokenResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAuthTokenResponseBody$Outbound = {
    tokenId: string;
};
/** @internal */
export declare const DeleteAuthTokenResponseBody$outboundSchema: z.ZodType<DeleteAuthTokenResponseBody$Outbound, z.ZodTypeDef, DeleteAuthTokenResponseBody>;
export declare function deleteAuthTokenResponseBodyToJSON(deleteAuthTokenResponseBody: DeleteAuthTokenResponseBody): string;
export declare function deleteAuthTokenResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteAuthTokenResponseBody, SDKValidationError>;
//# sourceMappingURL=deleteauthtokenop.d.ts.map