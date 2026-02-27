import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { AuthToken, AuthToken$Outbound } from "./authtoken.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetAuthTokenRequest = {
    /**
     * The identifier of the token to retrieve. The special value \"current\" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with.
     */
    tokenId: string;
};
/**
 * Successful response.
 */
export type GetAuthTokenResponseBody = {
    /**
     * Authentication token metadata.
     */
    token: AuthToken;
};
/** @internal */
export declare const GetAuthTokenRequest$inboundSchema: z.ZodType<GetAuthTokenRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAuthTokenRequest$Outbound = {
    tokenId: string;
};
/** @internal */
export declare const GetAuthTokenRequest$outboundSchema: z.ZodType<GetAuthTokenRequest$Outbound, z.ZodTypeDef, GetAuthTokenRequest>;
export declare function getAuthTokenRequestToJSON(getAuthTokenRequest: GetAuthTokenRequest): string;
export declare function getAuthTokenRequestFromJSON(jsonString: string): SafeParseResult<GetAuthTokenRequest, SDKValidationError>;
/** @internal */
export declare const GetAuthTokenResponseBody$inboundSchema: z.ZodType<GetAuthTokenResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAuthTokenResponseBody$Outbound = {
    token: AuthToken$Outbound;
};
/** @internal */
export declare const GetAuthTokenResponseBody$outboundSchema: z.ZodType<GetAuthTokenResponseBody$Outbound, z.ZodTypeDef, GetAuthTokenResponseBody>;
export declare function getAuthTokenResponseBodyToJSON(getAuthTokenResponseBody: GetAuthTokenResponseBody): string;
export declare function getAuthTokenResponseBodyFromJSON(jsonString: string): SafeParseResult<GetAuthTokenResponseBody, SDKValidationError>;
//# sourceMappingURL=getauthtokenop.d.ts.map