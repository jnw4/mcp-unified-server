import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { AuthToken, AuthToken$Outbound } from "./authtoken.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type CreateAuthTokenRequestBody = {
    name: string;
    expiresAt?: number | undefined;
    /**
     * The ID of the project to scope this token to
     */
    projectId?: string | undefined;
};
export type CreateAuthTokenRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: CreateAuthTokenRequestBody;
};
/**
 * Successful response.
 */
export type CreateAuthTokenResponseBody = {
    /**
     * Authentication token metadata.
     */
    token: AuthToken;
    /**
     * The authentication token's actual value. This token is only provided in this response, and can never be retrieved again in the future. Be sure to save it somewhere safe!
     */
    bearerToken: string;
};
/** @internal */
export declare const CreateAuthTokenRequestBody$inboundSchema: z.ZodType<CreateAuthTokenRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAuthTokenRequestBody$Outbound = {
    name: string;
    expiresAt?: number | undefined;
    projectId?: string | undefined;
};
/** @internal */
export declare const CreateAuthTokenRequestBody$outboundSchema: z.ZodType<CreateAuthTokenRequestBody$Outbound, z.ZodTypeDef, CreateAuthTokenRequestBody>;
export declare function createAuthTokenRequestBodyToJSON(createAuthTokenRequestBody: CreateAuthTokenRequestBody): string;
export declare function createAuthTokenRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateAuthTokenRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateAuthTokenRequest$inboundSchema: z.ZodType<CreateAuthTokenRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAuthTokenRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: CreateAuthTokenRequestBody$Outbound;
};
/** @internal */
export declare const CreateAuthTokenRequest$outboundSchema: z.ZodType<CreateAuthTokenRequest$Outbound, z.ZodTypeDef, CreateAuthTokenRequest>;
export declare function createAuthTokenRequestToJSON(createAuthTokenRequest: CreateAuthTokenRequest): string;
export declare function createAuthTokenRequestFromJSON(jsonString: string): SafeParseResult<CreateAuthTokenRequest, SDKValidationError>;
/** @internal */
export declare const CreateAuthTokenResponseBody$inboundSchema: z.ZodType<CreateAuthTokenResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAuthTokenResponseBody$Outbound = {
    token: AuthToken$Outbound;
    bearerToken: string;
};
/** @internal */
export declare const CreateAuthTokenResponseBody$outboundSchema: z.ZodType<CreateAuthTokenResponseBody$Outbound, z.ZodTypeDef, CreateAuthTokenResponseBody>;
export declare function createAuthTokenResponseBodyToJSON(createAuthTokenResponseBody: CreateAuthTokenResponseBody): string;
export declare function createAuthTokenResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateAuthTokenResponseBody, SDKValidationError>;
//# sourceMappingURL=createauthtokenop.d.ts.map