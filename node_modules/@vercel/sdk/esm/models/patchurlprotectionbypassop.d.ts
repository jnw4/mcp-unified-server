import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const PatchUrlProtectionBypassRequestBodyScope: {
    readonly AliasProtectionOverride: "alias-protection-override";
};
export type PatchUrlProtectionBypassRequestBodyScope = ClosedEnum<typeof PatchUrlProtectionBypassRequestBodyScope>;
export declare const PatchUrlProtectionBypassRequestBodyAction: {
    readonly Create: "create";
    readonly Revoke: "revoke";
};
export type PatchUrlProtectionBypassRequestBodyAction = ClosedEnum<typeof PatchUrlProtectionBypassRequestBodyAction>;
export type Override = {
    scope: PatchUrlProtectionBypassRequestBodyScope;
    action: PatchUrlProtectionBypassRequestBodyAction;
};
export type PatchUrlProtectionBypassRequestBody3 = {
    override: Override;
};
/**
 * Invitation status for the user scoped bypass.
 */
export declare const PatchUrlProtectionBypassScopeAccess: {
    readonly Denied: "denied";
    readonly Granted: "granted";
};
/**
 * Invitation status for the user scoped bypass.
 */
export type PatchUrlProtectionBypassScopeAccess = ClosedEnum<typeof PatchUrlProtectionBypassScopeAccess>;
export type Scope2 = {
    /**
     * Specified user id for the scoped bypass.
     */
    userId?: string | undefined;
    /**
     * Specified email for the scoped bypass.
     */
    email: string;
    /**
     * Invitation status for the user scoped bypass.
     */
    access: PatchUrlProtectionBypassScopeAccess;
};
/**
 * Invitation status for the user scoped bypass.
 */
export declare const ScopeAccess: {
    readonly Denied: "denied";
    readonly Granted: "granted";
};
/**
 * Invitation status for the user scoped bypass.
 */
export type ScopeAccess = ClosedEnum<typeof ScopeAccess>;
export type Scope1 = {
    /**
     * Specified user id for the scoped bypass.
     */
    userId: string;
    /**
     * Specified email for the scoped bypass.
     */
    email?: string | undefined;
    /**
     * Invitation status for the user scoped bypass.
     */
    access: ScopeAccess;
};
/**
 * Instructions for creating a user scoped protection bypass
 */
export type RequestBodyScope = Scope1 | Scope2;
export type PatchUrlProtectionBypassRequestBody2 = {
    /**
     * Instructions for creating a user scoped protection bypass
     */
    scope: Scope1 | Scope2;
};
/**
 * Optional instructions for revoking and regenerating a shareable link
 */
export type RequestBodyRevoke = {
    /**
     * Sharebale link to revoked
     */
    secret: string;
    /**
     * Whether or not a new shareable link should be created after the provided secret is revoked
     */
    regenerate: boolean;
};
export type PatchUrlProtectionBypassRequestBody1 = {
    /**
     * Optional time the shareable link is valid for in seconds. If not provided, the shareable link will never expire.
     */
    ttl?: number | undefined;
    /**
     * Optional instructions for revoking and regenerating a shareable link
     */
    revoke?: RequestBodyRevoke | undefined;
};
export type PatchUrlProtectionBypassRequestBody = PatchUrlProtectionBypassRequestBody2 | PatchUrlProtectionBypassRequestBody3 | PatchUrlProtectionBypassRequestBody1;
export type PatchUrlProtectionBypassRequest = {
    /**
     * The alias or deployment ID
     */
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: PatchUrlProtectionBypassRequestBody2 | PatchUrlProtectionBypassRequestBody3 | PatchUrlProtectionBypassRequestBody1 | undefined;
};
/** @internal */
export declare const PatchUrlProtectionBypassRequestBodyScope$inboundSchema: z.ZodNativeEnum<typeof PatchUrlProtectionBypassRequestBodyScope>;
/** @internal */
export declare const PatchUrlProtectionBypassRequestBodyScope$outboundSchema: z.ZodNativeEnum<typeof PatchUrlProtectionBypassRequestBodyScope>;
/** @internal */
export declare const PatchUrlProtectionBypassRequestBodyAction$inboundSchema: z.ZodNativeEnum<typeof PatchUrlProtectionBypassRequestBodyAction>;
/** @internal */
export declare const PatchUrlProtectionBypassRequestBodyAction$outboundSchema: z.ZodNativeEnum<typeof PatchUrlProtectionBypassRequestBodyAction>;
/** @internal */
export declare const Override$inboundSchema: z.ZodType<Override, z.ZodTypeDef, unknown>;
/** @internal */
export type Override$Outbound = {
    scope: string;
    action: string;
};
/** @internal */
export declare const Override$outboundSchema: z.ZodType<Override$Outbound, z.ZodTypeDef, Override>;
export declare function overrideToJSON(override: Override): string;
export declare function overrideFromJSON(jsonString: string): SafeParseResult<Override, SDKValidationError>;
/** @internal */
export declare const PatchUrlProtectionBypassRequestBody3$inboundSchema: z.ZodType<PatchUrlProtectionBypassRequestBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchUrlProtectionBypassRequestBody3$Outbound = {
    override: Override$Outbound;
};
/** @internal */
export declare const PatchUrlProtectionBypassRequestBody3$outboundSchema: z.ZodType<PatchUrlProtectionBypassRequestBody3$Outbound, z.ZodTypeDef, PatchUrlProtectionBypassRequestBody3>;
export declare function patchUrlProtectionBypassRequestBody3ToJSON(patchUrlProtectionBypassRequestBody3: PatchUrlProtectionBypassRequestBody3): string;
export declare function patchUrlProtectionBypassRequestBody3FromJSON(jsonString: string): SafeParseResult<PatchUrlProtectionBypassRequestBody3, SDKValidationError>;
/** @internal */
export declare const PatchUrlProtectionBypassScopeAccess$inboundSchema: z.ZodNativeEnum<typeof PatchUrlProtectionBypassScopeAccess>;
/** @internal */
export declare const PatchUrlProtectionBypassScopeAccess$outboundSchema: z.ZodNativeEnum<typeof PatchUrlProtectionBypassScopeAccess>;
/** @internal */
export declare const Scope2$inboundSchema: z.ZodType<Scope2, z.ZodTypeDef, unknown>;
/** @internal */
export type Scope2$Outbound = {
    userId?: string | undefined;
    email: string;
    access: string;
};
/** @internal */
export declare const Scope2$outboundSchema: z.ZodType<Scope2$Outbound, z.ZodTypeDef, Scope2>;
export declare function scope2ToJSON(scope2: Scope2): string;
export declare function scope2FromJSON(jsonString: string): SafeParseResult<Scope2, SDKValidationError>;
/** @internal */
export declare const ScopeAccess$inboundSchema: z.ZodNativeEnum<typeof ScopeAccess>;
/** @internal */
export declare const ScopeAccess$outboundSchema: z.ZodNativeEnum<typeof ScopeAccess>;
/** @internal */
export declare const Scope1$inboundSchema: z.ZodType<Scope1, z.ZodTypeDef, unknown>;
/** @internal */
export type Scope1$Outbound = {
    userId: string;
    email?: string | undefined;
    access: string;
};
/** @internal */
export declare const Scope1$outboundSchema: z.ZodType<Scope1$Outbound, z.ZodTypeDef, Scope1>;
export declare function scope1ToJSON(scope1: Scope1): string;
export declare function scope1FromJSON(jsonString: string): SafeParseResult<Scope1, SDKValidationError>;
/** @internal */
export declare const RequestBodyScope$inboundSchema: z.ZodType<RequestBodyScope, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyScope$Outbound = Scope1$Outbound | Scope2$Outbound;
/** @internal */
export declare const RequestBodyScope$outboundSchema: z.ZodType<RequestBodyScope$Outbound, z.ZodTypeDef, RequestBodyScope>;
export declare function requestBodyScopeToJSON(requestBodyScope: RequestBodyScope): string;
export declare function requestBodyScopeFromJSON(jsonString: string): SafeParseResult<RequestBodyScope, SDKValidationError>;
/** @internal */
export declare const PatchUrlProtectionBypassRequestBody2$inboundSchema: z.ZodType<PatchUrlProtectionBypassRequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchUrlProtectionBypassRequestBody2$Outbound = {
    scope: Scope1$Outbound | Scope2$Outbound;
};
/** @internal */
export declare const PatchUrlProtectionBypassRequestBody2$outboundSchema: z.ZodType<PatchUrlProtectionBypassRequestBody2$Outbound, z.ZodTypeDef, PatchUrlProtectionBypassRequestBody2>;
export declare function patchUrlProtectionBypassRequestBody2ToJSON(patchUrlProtectionBypassRequestBody2: PatchUrlProtectionBypassRequestBody2): string;
export declare function patchUrlProtectionBypassRequestBody2FromJSON(jsonString: string): SafeParseResult<PatchUrlProtectionBypassRequestBody2, SDKValidationError>;
/** @internal */
export declare const RequestBodyRevoke$inboundSchema: z.ZodType<RequestBodyRevoke, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyRevoke$Outbound = {
    secret: string;
    regenerate: boolean;
};
/** @internal */
export declare const RequestBodyRevoke$outboundSchema: z.ZodType<RequestBodyRevoke$Outbound, z.ZodTypeDef, RequestBodyRevoke>;
export declare function requestBodyRevokeToJSON(requestBodyRevoke: RequestBodyRevoke): string;
export declare function requestBodyRevokeFromJSON(jsonString: string): SafeParseResult<RequestBodyRevoke, SDKValidationError>;
/** @internal */
export declare const PatchUrlProtectionBypassRequestBody1$inboundSchema: z.ZodType<PatchUrlProtectionBypassRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchUrlProtectionBypassRequestBody1$Outbound = {
    ttl?: number | undefined;
    revoke?: RequestBodyRevoke$Outbound | undefined;
};
/** @internal */
export declare const PatchUrlProtectionBypassRequestBody1$outboundSchema: z.ZodType<PatchUrlProtectionBypassRequestBody1$Outbound, z.ZodTypeDef, PatchUrlProtectionBypassRequestBody1>;
export declare function patchUrlProtectionBypassRequestBody1ToJSON(patchUrlProtectionBypassRequestBody1: PatchUrlProtectionBypassRequestBody1): string;
export declare function patchUrlProtectionBypassRequestBody1FromJSON(jsonString: string): SafeParseResult<PatchUrlProtectionBypassRequestBody1, SDKValidationError>;
/** @internal */
export declare const PatchUrlProtectionBypassRequestBody$inboundSchema: z.ZodType<PatchUrlProtectionBypassRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchUrlProtectionBypassRequestBody$Outbound = PatchUrlProtectionBypassRequestBody2$Outbound | PatchUrlProtectionBypassRequestBody3$Outbound | PatchUrlProtectionBypassRequestBody1$Outbound;
/** @internal */
export declare const PatchUrlProtectionBypassRequestBody$outboundSchema: z.ZodType<PatchUrlProtectionBypassRequestBody$Outbound, z.ZodTypeDef, PatchUrlProtectionBypassRequestBody>;
export declare function patchUrlProtectionBypassRequestBodyToJSON(patchUrlProtectionBypassRequestBody: PatchUrlProtectionBypassRequestBody): string;
export declare function patchUrlProtectionBypassRequestBodyFromJSON(jsonString: string): SafeParseResult<PatchUrlProtectionBypassRequestBody, SDKValidationError>;
/** @internal */
export declare const PatchUrlProtectionBypassRequest$inboundSchema: z.ZodType<PatchUrlProtectionBypassRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchUrlProtectionBypassRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: PatchUrlProtectionBypassRequestBody2$Outbound | PatchUrlProtectionBypassRequestBody3$Outbound | PatchUrlProtectionBypassRequestBody1$Outbound | undefined;
};
/** @internal */
export declare const PatchUrlProtectionBypassRequest$outboundSchema: z.ZodType<PatchUrlProtectionBypassRequest$Outbound, z.ZodTypeDef, PatchUrlProtectionBypassRequest>;
export declare function patchUrlProtectionBypassRequestToJSON(patchUrlProtectionBypassRequest: PatchUrlProtectionBypassRequest): string;
export declare function patchUrlProtectionBypassRequestFromJSON(jsonString: string): SafeParseResult<PatchUrlProtectionBypassRequest, SDKValidationError>;
//# sourceMappingURL=patchurlprotectionbypassop.d.ts.map