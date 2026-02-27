import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ExchangeSsoTokenRequestBody2 = {
    /**
     * The refresh token received from previous token exchange
     */
    refreshToken: string;
    /**
     * The integration client id
     */
    clientId: string;
    /**
     * The integration client secret
     */
    clientSecret: string;
    /**
     * The grant type, when using x-www-form-urlencoded content type
     */
    grantType: "refresh_token";
};
export type ExchangeSsoTokenRequestBody1 = {
    /**
     * The sensitive code received from Vercel
     */
    code: string;
    /**
     * The state received from the initialization request
     */
    state?: string | undefined;
    /**
     * The integration client id
     */
    clientId: string;
    /**
     * The integration client secret
     */
    clientSecret: string;
    /**
     * The integration redirect URI
     */
    redirectUri?: string | undefined;
    /**
     * The grant type, when using x-www-form-urlencoded content type
     */
    grantType: "authorization_code";
};
export type ExchangeSsoTokenRequestBody = ExchangeSsoTokenRequestBody1 | ExchangeSsoTokenRequestBody2;
export type ExchangeSsoTokenResponseBody2 = {
    idToken: string;
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
};
export type ExchangeSsoTokenResponseBody1 = {
    idToken: string;
    tokenType: string | null;
    expiresIn?: number | undefined;
    accessToken: string | null;
    refreshToken?: string | undefined;
};
export type ExchangeSsoTokenResponseBody = ExchangeSsoTokenResponseBody2 | ExchangeSsoTokenResponseBody1;
/** @internal */
export declare const ExchangeSsoTokenRequestBody2$inboundSchema: z.ZodType<ExchangeSsoTokenRequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type ExchangeSsoTokenRequestBody2$Outbound = {
    refresh_token: string;
    client_id: string;
    client_secret: string;
    grant_type: "refresh_token";
};
/** @internal */
export declare const ExchangeSsoTokenRequestBody2$outboundSchema: z.ZodType<ExchangeSsoTokenRequestBody2$Outbound, z.ZodTypeDef, ExchangeSsoTokenRequestBody2>;
export declare function exchangeSsoTokenRequestBody2ToJSON(exchangeSsoTokenRequestBody2: ExchangeSsoTokenRequestBody2): string;
export declare function exchangeSsoTokenRequestBody2FromJSON(jsonString: string): SafeParseResult<ExchangeSsoTokenRequestBody2, SDKValidationError>;
/** @internal */
export declare const ExchangeSsoTokenRequestBody1$inboundSchema: z.ZodType<ExchangeSsoTokenRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type ExchangeSsoTokenRequestBody1$Outbound = {
    code: string;
    state?: string | undefined;
    client_id: string;
    client_secret: string;
    redirect_uri?: string | undefined;
    grant_type: "authorization_code";
};
/** @internal */
export declare const ExchangeSsoTokenRequestBody1$outboundSchema: z.ZodType<ExchangeSsoTokenRequestBody1$Outbound, z.ZodTypeDef, ExchangeSsoTokenRequestBody1>;
export declare function exchangeSsoTokenRequestBody1ToJSON(exchangeSsoTokenRequestBody1: ExchangeSsoTokenRequestBody1): string;
export declare function exchangeSsoTokenRequestBody1FromJSON(jsonString: string): SafeParseResult<ExchangeSsoTokenRequestBody1, SDKValidationError>;
/** @internal */
export declare const ExchangeSsoTokenRequestBody$inboundSchema: z.ZodType<ExchangeSsoTokenRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ExchangeSsoTokenRequestBody$Outbound = ExchangeSsoTokenRequestBody1$Outbound | ExchangeSsoTokenRequestBody2$Outbound;
/** @internal */
export declare const ExchangeSsoTokenRequestBody$outboundSchema: z.ZodType<ExchangeSsoTokenRequestBody$Outbound, z.ZodTypeDef, ExchangeSsoTokenRequestBody>;
export declare function exchangeSsoTokenRequestBodyToJSON(exchangeSsoTokenRequestBody: ExchangeSsoTokenRequestBody): string;
export declare function exchangeSsoTokenRequestBodyFromJSON(jsonString: string): SafeParseResult<ExchangeSsoTokenRequestBody, SDKValidationError>;
/** @internal */
export declare const ExchangeSsoTokenResponseBody2$inboundSchema: z.ZodType<ExchangeSsoTokenResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type ExchangeSsoTokenResponseBody2$Outbound = {
    id_token: string;
    token_type: string;
    access_token: string;
    refresh_token: string;
    expires_in: number;
};
/** @internal */
export declare const ExchangeSsoTokenResponseBody2$outboundSchema: z.ZodType<ExchangeSsoTokenResponseBody2$Outbound, z.ZodTypeDef, ExchangeSsoTokenResponseBody2>;
export declare function exchangeSsoTokenResponseBody2ToJSON(exchangeSsoTokenResponseBody2: ExchangeSsoTokenResponseBody2): string;
export declare function exchangeSsoTokenResponseBody2FromJSON(jsonString: string): SafeParseResult<ExchangeSsoTokenResponseBody2, SDKValidationError>;
/** @internal */
export declare const ExchangeSsoTokenResponseBody1$inboundSchema: z.ZodType<ExchangeSsoTokenResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type ExchangeSsoTokenResponseBody1$Outbound = {
    id_token: string;
    token_type: string | null;
    expires_in?: number | undefined;
    access_token: string | null;
    refresh_token?: string | undefined;
};
/** @internal */
export declare const ExchangeSsoTokenResponseBody1$outboundSchema: z.ZodType<ExchangeSsoTokenResponseBody1$Outbound, z.ZodTypeDef, ExchangeSsoTokenResponseBody1>;
export declare function exchangeSsoTokenResponseBody1ToJSON(exchangeSsoTokenResponseBody1: ExchangeSsoTokenResponseBody1): string;
export declare function exchangeSsoTokenResponseBody1FromJSON(jsonString: string): SafeParseResult<ExchangeSsoTokenResponseBody1, SDKValidationError>;
/** @internal */
export declare const ExchangeSsoTokenResponseBody$inboundSchema: z.ZodType<ExchangeSsoTokenResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ExchangeSsoTokenResponseBody$Outbound = ExchangeSsoTokenResponseBody2$Outbound | ExchangeSsoTokenResponseBody1$Outbound;
/** @internal */
export declare const ExchangeSsoTokenResponseBody$outboundSchema: z.ZodType<ExchangeSsoTokenResponseBody$Outbound, z.ZodTypeDef, ExchangeSsoTokenResponseBody>;
export declare function exchangeSsoTokenResponseBodyToJSON(exchangeSsoTokenResponseBody: ExchangeSsoTokenResponseBody): string;
export declare function exchangeSsoTokenResponseBodyFromJSON(jsonString: string): SafeParseResult<ExchangeSsoTokenResponseBody, SDKValidationError>;
//# sourceMappingURL=exchangessotokenop.d.ts.map