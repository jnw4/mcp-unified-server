import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * move-out
 */
export type PatchDomainRequestBody2 = {
    op?: string | undefined;
    /**
     * User or team to move domain to
     */
    destination?: string | undefined;
};
/**
 * update
 */
export type PatchDomainRequestBody1 = {
    op?: string | undefined;
    /**
     * This field is deprecated. Please use PATCH /v1/registrar/domains/{domainName}/auto-renew instead.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    renew?: boolean | undefined;
    /**
     * This field is deprecated. Please use PATCH /v1/registrar/domains/{domainName}/nameservers instead.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    customNameservers?: Array<string> | undefined;
    /**
     * Specifies whether this is a DNS zone that intends to use Vercel's nameservers.
     */
    zone?: boolean | undefined;
};
export type PatchDomainRequestBody = PatchDomainRequestBody1 | PatchDomainRequestBody2;
export type PatchDomainRequest = {
    domain: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: PatchDomainRequestBody1 | PatchDomainRequestBody2;
};
export type PatchDomainResponseBody3 = {
    renew?: boolean | undefined;
    customNameservers?: Array<string> | undefined;
    zone?: boolean | undefined;
};
export type PatchDomainResponseBody2 = {
    moved: boolean;
    token: string;
};
export type PatchDomainResponseBody1 = {
    moved: boolean;
};
export type PatchDomainResponseBody = PatchDomainResponseBody2 | PatchDomainResponseBody1 | PatchDomainResponseBody3;
/** @internal */
export declare const PatchDomainRequestBody2$inboundSchema: z.ZodType<PatchDomainRequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchDomainRequestBody2$Outbound = {
    op?: string | undefined;
    destination?: string | undefined;
};
/** @internal */
export declare const PatchDomainRequestBody2$outboundSchema: z.ZodType<PatchDomainRequestBody2$Outbound, z.ZodTypeDef, PatchDomainRequestBody2>;
export declare function patchDomainRequestBody2ToJSON(patchDomainRequestBody2: PatchDomainRequestBody2): string;
export declare function patchDomainRequestBody2FromJSON(jsonString: string): SafeParseResult<PatchDomainRequestBody2, SDKValidationError>;
/** @internal */
export declare const PatchDomainRequestBody1$inboundSchema: z.ZodType<PatchDomainRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchDomainRequestBody1$Outbound = {
    op?: string | undefined;
    renew?: boolean | undefined;
    customNameservers?: Array<string> | undefined;
    zone?: boolean | undefined;
};
/** @internal */
export declare const PatchDomainRequestBody1$outboundSchema: z.ZodType<PatchDomainRequestBody1$Outbound, z.ZodTypeDef, PatchDomainRequestBody1>;
export declare function patchDomainRequestBody1ToJSON(patchDomainRequestBody1: PatchDomainRequestBody1): string;
export declare function patchDomainRequestBody1FromJSON(jsonString: string): SafeParseResult<PatchDomainRequestBody1, SDKValidationError>;
/** @internal */
export declare const PatchDomainRequestBody$inboundSchema: z.ZodType<PatchDomainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchDomainRequestBody$Outbound = PatchDomainRequestBody1$Outbound | PatchDomainRequestBody2$Outbound;
/** @internal */
export declare const PatchDomainRequestBody$outboundSchema: z.ZodType<PatchDomainRequestBody$Outbound, z.ZodTypeDef, PatchDomainRequestBody>;
export declare function patchDomainRequestBodyToJSON(patchDomainRequestBody: PatchDomainRequestBody): string;
export declare function patchDomainRequestBodyFromJSON(jsonString: string): SafeParseResult<PatchDomainRequestBody, SDKValidationError>;
/** @internal */
export declare const PatchDomainRequest$inboundSchema: z.ZodType<PatchDomainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchDomainRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: PatchDomainRequestBody1$Outbound | PatchDomainRequestBody2$Outbound;
};
/** @internal */
export declare const PatchDomainRequest$outboundSchema: z.ZodType<PatchDomainRequest$Outbound, z.ZodTypeDef, PatchDomainRequest>;
export declare function patchDomainRequestToJSON(patchDomainRequest: PatchDomainRequest): string;
export declare function patchDomainRequestFromJSON(jsonString: string): SafeParseResult<PatchDomainRequest, SDKValidationError>;
/** @internal */
export declare const PatchDomainResponseBody3$inboundSchema: z.ZodType<PatchDomainResponseBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchDomainResponseBody3$Outbound = {
    renew?: boolean | undefined;
    customNameservers?: Array<string> | undefined;
    zone?: boolean | undefined;
};
/** @internal */
export declare const PatchDomainResponseBody3$outboundSchema: z.ZodType<PatchDomainResponseBody3$Outbound, z.ZodTypeDef, PatchDomainResponseBody3>;
export declare function patchDomainResponseBody3ToJSON(patchDomainResponseBody3: PatchDomainResponseBody3): string;
export declare function patchDomainResponseBody3FromJSON(jsonString: string): SafeParseResult<PatchDomainResponseBody3, SDKValidationError>;
/** @internal */
export declare const PatchDomainResponseBody2$inboundSchema: z.ZodType<PatchDomainResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchDomainResponseBody2$Outbound = {
    moved: boolean;
    token: string;
};
/** @internal */
export declare const PatchDomainResponseBody2$outboundSchema: z.ZodType<PatchDomainResponseBody2$Outbound, z.ZodTypeDef, PatchDomainResponseBody2>;
export declare function patchDomainResponseBody2ToJSON(patchDomainResponseBody2: PatchDomainResponseBody2): string;
export declare function patchDomainResponseBody2FromJSON(jsonString: string): SafeParseResult<PatchDomainResponseBody2, SDKValidationError>;
/** @internal */
export declare const PatchDomainResponseBody1$inboundSchema: z.ZodType<PatchDomainResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchDomainResponseBody1$Outbound = {
    moved: boolean;
};
/** @internal */
export declare const PatchDomainResponseBody1$outboundSchema: z.ZodType<PatchDomainResponseBody1$Outbound, z.ZodTypeDef, PatchDomainResponseBody1>;
export declare function patchDomainResponseBody1ToJSON(patchDomainResponseBody1: PatchDomainResponseBody1): string;
export declare function patchDomainResponseBody1FromJSON(jsonString: string): SafeParseResult<PatchDomainResponseBody1, SDKValidationError>;
/** @internal */
export declare const PatchDomainResponseBody$inboundSchema: z.ZodType<PatchDomainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchDomainResponseBody$Outbound = PatchDomainResponseBody2$Outbound | PatchDomainResponseBody1$Outbound | PatchDomainResponseBody3$Outbound;
/** @internal */
export declare const PatchDomainResponseBody$outboundSchema: z.ZodType<PatchDomainResponseBody$Outbound, z.ZodTypeDef, PatchDomainResponseBody>;
export declare function patchDomainResponseBodyToJSON(patchDomainResponseBody: PatchDomainResponseBody): string;
export declare function patchDomainResponseBodyFromJSON(jsonString: string): SafeParseResult<PatchDomainResponseBody, SDKValidationError>;
//# sourceMappingURL=patchdomainop.d.ts.map