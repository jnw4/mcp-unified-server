import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const AuthTokenScopesOrigin: {
    readonly Saml: "saml";
    readonly Github: "github";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
    readonly Email: "email";
    readonly Manual: "manual";
    readonly Passkey: "passkey";
    readonly Otp: "otp";
    readonly Sms: "sms";
    readonly Invite: "invite";
    readonly Google: "google";
    readonly Apple: "apple";
    readonly App: "app";
    readonly Emu: "emu";
};
export type AuthTokenScopesOrigin = ClosedEnum<typeof AuthTokenScopesOrigin>;
/**
 * The access scopes granted to the token.
 */
export type Scopes2 = {
    type: "team";
    teamId: string;
    origin?: AuthTokenScopesOrigin | undefined;
    createdAt: number;
    expiresAt?: number | undefined;
};
/**
 * Possible multi-factor origins
 */
export declare const AuthTokenScopes1Origin: {
    readonly Totp: "totp";
    readonly Webauthn: "webauthn";
    readonly RecoveryCode: "recovery-code";
};
/**
 * Possible multi-factor origins
 */
export type AuthTokenScopes1Origin = ClosedEnum<typeof AuthTokenScopes1Origin>;
export type Sudo = {
    /**
     * Possible multi-factor origins
     */
    origin: AuthTokenScopes1Origin;
    expiresAt: number;
};
export declare const ScopesOrigin: {
    readonly Saml: "saml";
    readonly Github: "github";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
    readonly Email: "email";
    readonly Manual: "manual";
    readonly Passkey: "passkey";
    readonly Otp: "otp";
    readonly Sms: "sms";
    readonly Invite: "invite";
    readonly Google: "google";
    readonly Apple: "apple";
    readonly App: "app";
    readonly Emu: "emu";
};
export type ScopesOrigin = ClosedEnum<typeof ScopesOrigin>;
/**
 * The access scopes granted to the token.
 */
export type Scopes1 = {
    type: "user";
    sudo?: Sudo | undefined;
    origin?: ScopesOrigin | undefined;
    createdAt: number;
    expiresAt?: number | undefined;
};
export type Scopes = Scopes1 | Scopes2;
/**
 * Authentication token metadata.
 */
export type AuthToken = {
    /**
     * The unique identifier of the token.
     */
    id: string;
    /**
     * The human-readable name of the token.
     */
    name: string;
    /**
     * The type of the token.
     */
    type: string;
    /**
     * The token's prefix, for identification purposes.
     */
    prefix?: string | undefined;
    /**
     * The last few characters of the token, for identification purposes.
     */
    suffix?: string | undefined;
    /**
     * The origin of how the token was created.
     */
    origin?: string | undefined;
    /**
     * The access scopes granted to the token.
     */
    scopes?: Array<Scopes1 | Scopes2> | undefined;
    /**
     * Timestamp (in milliseconds) of when the token was created.
     */
    createdAt: number;
    /**
     * Timestamp (in milliseconds) of when the token was most recently used.
     */
    activeAt: number;
    /**
     * Timestamp (in milliseconds) of when the token expires.
     */
    expiresAt?: number | undefined;
    /**
     * Timestamp (in milliseconds) of when the token was marked as leaked.
     */
    leakedAt?: number | undefined;
    /**
     * URL where the token was discovered as leaked.
     */
    leakedUrl?: string | undefined;
};
/** @internal */
export declare const AuthTokenScopesOrigin$inboundSchema: z.ZodNativeEnum<typeof AuthTokenScopesOrigin>;
/** @internal */
export declare const AuthTokenScopesOrigin$outboundSchema: z.ZodNativeEnum<typeof AuthTokenScopesOrigin>;
/** @internal */
export declare const Scopes2$inboundSchema: z.ZodType<Scopes2, z.ZodTypeDef, unknown>;
/** @internal */
export type Scopes2$Outbound = {
    type: "team";
    teamId: string;
    origin?: string | undefined;
    createdAt: number;
    expiresAt?: number | undefined;
};
/** @internal */
export declare const Scopes2$outboundSchema: z.ZodType<Scopes2$Outbound, z.ZodTypeDef, Scopes2>;
export declare function scopes2ToJSON(scopes2: Scopes2): string;
export declare function scopes2FromJSON(jsonString: string): SafeParseResult<Scopes2, SDKValidationError>;
/** @internal */
export declare const AuthTokenScopes1Origin$inboundSchema: z.ZodNativeEnum<typeof AuthTokenScopes1Origin>;
/** @internal */
export declare const AuthTokenScopes1Origin$outboundSchema: z.ZodNativeEnum<typeof AuthTokenScopes1Origin>;
/** @internal */
export declare const Sudo$inboundSchema: z.ZodType<Sudo, z.ZodTypeDef, unknown>;
/** @internal */
export type Sudo$Outbound = {
    origin: string;
    expiresAt: number;
};
/** @internal */
export declare const Sudo$outboundSchema: z.ZodType<Sudo$Outbound, z.ZodTypeDef, Sudo>;
export declare function sudoToJSON(sudo: Sudo): string;
export declare function sudoFromJSON(jsonString: string): SafeParseResult<Sudo, SDKValidationError>;
/** @internal */
export declare const ScopesOrigin$inboundSchema: z.ZodNativeEnum<typeof ScopesOrigin>;
/** @internal */
export declare const ScopesOrigin$outboundSchema: z.ZodNativeEnum<typeof ScopesOrigin>;
/** @internal */
export declare const Scopes1$inboundSchema: z.ZodType<Scopes1, z.ZodTypeDef, unknown>;
/** @internal */
export type Scopes1$Outbound = {
    type: "user";
    sudo?: Sudo$Outbound | undefined;
    origin?: string | undefined;
    createdAt: number;
    expiresAt?: number | undefined;
};
/** @internal */
export declare const Scopes1$outboundSchema: z.ZodType<Scopes1$Outbound, z.ZodTypeDef, Scopes1>;
export declare function scopes1ToJSON(scopes1: Scopes1): string;
export declare function scopes1FromJSON(jsonString: string): SafeParseResult<Scopes1, SDKValidationError>;
/** @internal */
export declare const Scopes$inboundSchema: z.ZodType<Scopes, z.ZodTypeDef, unknown>;
/** @internal */
export type Scopes$Outbound = Scopes1$Outbound | Scopes2$Outbound;
/** @internal */
export declare const Scopes$outboundSchema: z.ZodType<Scopes$Outbound, z.ZodTypeDef, Scopes>;
export declare function scopesToJSON(scopes: Scopes): string;
export declare function scopesFromJSON(jsonString: string): SafeParseResult<Scopes, SDKValidationError>;
/** @internal */
export declare const AuthToken$inboundSchema: z.ZodType<AuthToken, z.ZodTypeDef, unknown>;
/** @internal */
export type AuthToken$Outbound = {
    id: string;
    name: string;
    type: string;
    prefix?: string | undefined;
    suffix?: string | undefined;
    origin?: string | undefined;
    scopes?: Array<Scopes1$Outbound | Scopes2$Outbound> | undefined;
    createdAt: number;
    activeAt: number;
    expiresAt?: number | undefined;
    leakedAt?: number | undefined;
    leakedUrl?: string | undefined;
};
/** @internal */
export declare const AuthToken$outboundSchema: z.ZodType<AuthToken$Outbound, z.ZodTypeDef, AuthToken>;
export declare function authTokenToJSON(authToken: AuthToken): string;
export declare function authTokenFromJSON(jsonString: string): SafeParseResult<AuthToken, SDKValidationError>;
//# sourceMappingURL=authtoken.d.ts.map