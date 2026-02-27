import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { BadRequest, BadRequest$Outbound } from "./badrequest.js";
import { DomainNotAvailable, DomainNotAvailable$Outbound } from "./domainnotavailable.js";
import { DomainNotRegistered, DomainNotRegistered$Outbound } from "./domainnotregistered.js";
import { DomainTooShort, DomainTooShort$Outbound } from "./domaintooshort.js";
import { ExpectedPriceMismatch, ExpectedPriceMismatch$Outbound } from "./expectedpricemismatch.js";
import { Forbidden, Forbidden$Outbound } from "./forbidden.js";
import { HttpApiDecodeError, HttpApiDecodeError$Outbound } from "./httpapidecodeerror.js";
import { NotAuthorizedForScope, NotAuthorizedForScope$Outbound } from "./notauthorizedforscope.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { TldNotSupported, TldNotSupported$Outbound } from "./tldnotsupported.js";
export type RenewDomainContactInformation = {
    /**
     * a non empty string
     */
    firstName: string;
    /**
     * a non empty string
     */
    lastName: string;
    /**
     * A valid RFC 5322 email address
     */
    email: string;
    /**
     * A valid E.164 phone number
     */
    phone: string;
    /**
     * a non empty string
     */
    address1: string;
    /**
     * a non empty string
     */
    address2?: string | undefined;
    /**
     * a non empty string
     */
    city: string;
    /**
     * a non empty string
     */
    state: string;
    /**
     * a non empty string
     */
    zip: string;
    /**
     * A valid ISO 3166-1 alpha-2 country code
     */
    country: string;
    /**
     * a non empty string
     */
    companyName?: string | undefined;
    /**
     * A valid E.164 phone number
     */
    fax?: string | undefined;
};
export type RenewDomainRequestBody = {
    /**
     * The number of years to renew the domain for.
     */
    years: number;
    expectedPrice: number;
    contactInformation?: RenewDomainContactInformation | undefined;
};
export type RenewDomainRequest = {
    domain: string;
    teamId?: string | undefined;
    requestBody: RenewDomainRequestBody;
};
/**
 * NotAuthorizedForScope
 */
export type RenewDomainDomainsRegistrarResponseResponseBody = (NotAuthorizedForScope & {
    code: "not_authorized_for_scope";
}) | Forbidden;
/**
 * There was something wrong with the request
 */
export type RenewDomainDomainsRegistrarResponseBody = BadRequest | DomainTooShort | DomainNotRegistered | ExpectedPriceMismatch | DomainNotAvailable | TldNotSupported | HttpApiDecodeError;
export declare const RenewDomainMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
    readonly Put: "PUT";
    readonly Delete: "DELETE";
    readonly Patch: "PATCH";
};
export type RenewDomainMethod = ClosedEnum<typeof RenewDomainMethod>;
export type RenewDomainLinks = {
    href: string;
    method: RenewDomainMethod;
};
/**
 * Success
 */
export type RenewDomainResponseBody = {
    /**
     * A valid order ID
     */
    orderId: string;
    links: {
        [k: string]: RenewDomainLinks;
    };
};
/** @internal */
export declare const RenewDomainContactInformation$inboundSchema: z.ZodType<RenewDomainContactInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type RenewDomainContactInformation$Outbound = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address1: string;
    address2?: string | undefined;
    city: string;
    state: string;
    zip: string;
    country: string;
    companyName?: string | undefined;
    fax?: string | undefined;
};
/** @internal */
export declare const RenewDomainContactInformation$outboundSchema: z.ZodType<RenewDomainContactInformation$Outbound, z.ZodTypeDef, RenewDomainContactInformation>;
export declare function renewDomainContactInformationToJSON(renewDomainContactInformation: RenewDomainContactInformation): string;
export declare function renewDomainContactInformationFromJSON(jsonString: string): SafeParseResult<RenewDomainContactInformation, SDKValidationError>;
/** @internal */
export declare const RenewDomainRequestBody$inboundSchema: z.ZodType<RenewDomainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RenewDomainRequestBody$Outbound = {
    years: number;
    expectedPrice: number;
    contactInformation?: RenewDomainContactInformation$Outbound | undefined;
};
/** @internal */
export declare const RenewDomainRequestBody$outboundSchema: z.ZodType<RenewDomainRequestBody$Outbound, z.ZodTypeDef, RenewDomainRequestBody>;
export declare function renewDomainRequestBodyToJSON(renewDomainRequestBody: RenewDomainRequestBody): string;
export declare function renewDomainRequestBodyFromJSON(jsonString: string): SafeParseResult<RenewDomainRequestBody, SDKValidationError>;
/** @internal */
export declare const RenewDomainRequest$inboundSchema: z.ZodType<RenewDomainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RenewDomainRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
    RequestBody: RenewDomainRequestBody$Outbound;
};
/** @internal */
export declare const RenewDomainRequest$outboundSchema: z.ZodType<RenewDomainRequest$Outbound, z.ZodTypeDef, RenewDomainRequest>;
export declare function renewDomainRequestToJSON(renewDomainRequest: RenewDomainRequest): string;
export declare function renewDomainRequestFromJSON(jsonString: string): SafeParseResult<RenewDomainRequest, SDKValidationError>;
/** @internal */
export declare const RenewDomainDomainsRegistrarResponseResponseBody$inboundSchema: z.ZodType<RenewDomainDomainsRegistrarResponseResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RenewDomainDomainsRegistrarResponseResponseBody$Outbound = (NotAuthorizedForScope$Outbound & {
    code: "not_authorized_for_scope";
}) | Forbidden$Outbound;
/** @internal */
export declare const RenewDomainDomainsRegistrarResponseResponseBody$outboundSchema: z.ZodType<RenewDomainDomainsRegistrarResponseResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function renewDomainDomainsRegistrarResponseResponseBodyToJSON(renewDomainDomainsRegistrarResponseResponseBody: RenewDomainDomainsRegistrarResponseResponseBody): string;
export declare function renewDomainDomainsRegistrarResponseResponseBodyFromJSON(jsonString: string): SafeParseResult<RenewDomainDomainsRegistrarResponseResponseBody, SDKValidationError>;
/** @internal */
export declare const RenewDomainDomainsRegistrarResponseBody$inboundSchema: z.ZodType<RenewDomainDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RenewDomainDomainsRegistrarResponseBody$Outbound = BadRequest$Outbound | DomainTooShort$Outbound | DomainNotRegistered$Outbound | ExpectedPriceMismatch$Outbound | DomainNotAvailable$Outbound | TldNotSupported$Outbound | HttpApiDecodeError$Outbound;
/** @internal */
export declare const RenewDomainDomainsRegistrarResponseBody$outboundSchema: z.ZodType<RenewDomainDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function renewDomainDomainsRegistrarResponseBodyToJSON(renewDomainDomainsRegistrarResponseBody: RenewDomainDomainsRegistrarResponseBody): string;
export declare function renewDomainDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<RenewDomainDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const RenewDomainMethod$inboundSchema: z.ZodNativeEnum<typeof RenewDomainMethod>;
/** @internal */
export declare const RenewDomainMethod$outboundSchema: z.ZodNativeEnum<typeof RenewDomainMethod>;
/** @internal */
export declare const RenewDomainLinks$inboundSchema: z.ZodType<RenewDomainLinks, z.ZodTypeDef, unknown>;
/** @internal */
export type RenewDomainLinks$Outbound = {
    href: string;
    method: string;
};
/** @internal */
export declare const RenewDomainLinks$outboundSchema: z.ZodType<RenewDomainLinks$Outbound, z.ZodTypeDef, RenewDomainLinks>;
export declare function renewDomainLinksToJSON(renewDomainLinks: RenewDomainLinks): string;
export declare function renewDomainLinksFromJSON(jsonString: string): SafeParseResult<RenewDomainLinks, SDKValidationError>;
/** @internal */
export declare const RenewDomainResponseBody$inboundSchema: z.ZodType<RenewDomainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RenewDomainResponseBody$Outbound = {
    orderId: string;
    _links: {
        [k: string]: RenewDomainLinks$Outbound;
    };
};
/** @internal */
export declare const RenewDomainResponseBody$outboundSchema: z.ZodType<RenewDomainResponseBody$Outbound, z.ZodTypeDef, RenewDomainResponseBody>;
export declare function renewDomainResponseBodyToJSON(renewDomainResponseBody: RenewDomainResponseBody): string;
export declare function renewDomainResponseBodyFromJSON(jsonString: string): SafeParseResult<RenewDomainResponseBody, SDKValidationError>;
//# sourceMappingURL=renewdomainop.d.ts.map