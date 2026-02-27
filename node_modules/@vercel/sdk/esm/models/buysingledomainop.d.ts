import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { AdditionalContactInfoRequired, AdditionalContactInfoRequired$Outbound } from "./additionalcontactinforequired.js";
import { DomainNotAvailable, DomainNotAvailable$Outbound } from "./domainnotavailable.js";
import { DomainTooShort, DomainTooShort$Outbound } from "./domaintooshort.js";
import { ExpectedPriceMismatch, ExpectedPriceMismatch$Outbound } from "./expectedpricemismatch.js";
import { Forbidden, Forbidden$Outbound } from "./forbidden.js";
import { HttpApiDecodeError, HttpApiDecodeError$Outbound } from "./httpapidecodeerror.js";
import { InvalidAdditionalContactInfo, InvalidAdditionalContactInfo$Outbound } from "./invalidadditionalcontactinfo.js";
import { LanguageCodeRequired, LanguageCodeRequired$Outbound } from "./languagecoderequired.js";
import { NotAuthorizedForScope, NotAuthorizedForScope$Outbound } from "./notauthorizedforscope.js";
import { OrderTooExpensive, OrderTooExpensive$Outbound } from "./ordertooexpensive.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { TldNotSupported, TldNotSupported$Outbound } from "./tldnotsupported.js";
export type Additional = {};
/**
 * The contact information for the domain. Some TLDs require additional contact information. Use the [Get contact info schema](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema) endpoint to retrieve the required fields.
 */
export type ContactInformation = {
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
    additional?: Additional | undefined;
};
export type BuySingleDomainRequestBody = {
    /**
     * Whether the domain should be auto-renewed before it expires. This can be configured later through the Vercel Dashboard or the [Update auto-renew for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-auto-renew-for-a-domain) endpoint.
     */
    autoRenew: boolean;
    /**
     * The number of years to purchase the domain for.
     */
    years: number;
    expectedPrice: number;
    /**
     * The contact information for the domain. Some TLDs require additional contact information. Use the [Get contact info schema](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema) endpoint to retrieve the required fields.
     */
    contactInformation: ContactInformation;
    /**
     * The language code for the domain. For punycode domains, this must be provided. The list of supported language codes for a TLD can be retrieved from the [Get TLD](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-tld) endpoint.
     */
    languageCode?: string | undefined;
};
export type BuySingleDomainRequest = {
    domain: string;
    teamId?: string | undefined;
    requestBody: BuySingleDomainRequestBody;
};
/**
 * NotAuthorizedForScope
 */
export type BuySingleDomainDomainsRegistrarResponseResponseBody = (NotAuthorizedForScope & {
    code: "not_authorized_for_scope";
}) | Forbidden;
/**
 * There was something wrong with the request
 */
export type BuySingleDomainDomainsRegistrarResponseBody = DomainTooShort | OrderTooExpensive | InvalidAdditionalContactInfo | AdditionalContactInfoRequired | ExpectedPriceMismatch | DomainNotAvailable | LanguageCodeRequired | TldNotSupported | HttpApiDecodeError;
export declare const BuySingleDomainMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
    readonly Put: "PUT";
    readonly Delete: "DELETE";
    readonly Patch: "PATCH";
};
export type BuySingleDomainMethod = ClosedEnum<typeof BuySingleDomainMethod>;
export type Links = {
    href: string;
    method: BuySingleDomainMethod;
};
/**
 * Success
 */
export type BuySingleDomainResponseBody = {
    /**
     * A valid order ID
     */
    orderId: string;
    links: {
        [k: string]: Links;
    };
};
/** @internal */
export declare const Additional$inboundSchema: z.ZodType<Additional, z.ZodTypeDef, unknown>;
/** @internal */
export type Additional$Outbound = {};
/** @internal */
export declare const Additional$outboundSchema: z.ZodType<Additional$Outbound, z.ZodTypeDef, Additional>;
export declare function additionalToJSON(additional: Additional): string;
export declare function additionalFromJSON(jsonString: string): SafeParseResult<Additional, SDKValidationError>;
/** @internal */
export declare const ContactInformation$inboundSchema: z.ZodType<ContactInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type ContactInformation$Outbound = {
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
    additional?: Additional$Outbound | undefined;
};
/** @internal */
export declare const ContactInformation$outboundSchema: z.ZodType<ContactInformation$Outbound, z.ZodTypeDef, ContactInformation>;
export declare function contactInformationToJSON(contactInformation: ContactInformation): string;
export declare function contactInformationFromJSON(jsonString: string): SafeParseResult<ContactInformation, SDKValidationError>;
/** @internal */
export declare const BuySingleDomainRequestBody$inboundSchema: z.ZodType<BuySingleDomainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type BuySingleDomainRequestBody$Outbound = {
    autoRenew: boolean;
    years: number;
    expectedPrice: number;
    contactInformation: ContactInformation$Outbound;
    languageCode?: string | undefined;
};
/** @internal */
export declare const BuySingleDomainRequestBody$outboundSchema: z.ZodType<BuySingleDomainRequestBody$Outbound, z.ZodTypeDef, BuySingleDomainRequestBody>;
export declare function buySingleDomainRequestBodyToJSON(buySingleDomainRequestBody: BuySingleDomainRequestBody): string;
export declare function buySingleDomainRequestBodyFromJSON(jsonString: string): SafeParseResult<BuySingleDomainRequestBody, SDKValidationError>;
/** @internal */
export declare const BuySingleDomainRequest$inboundSchema: z.ZodType<BuySingleDomainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BuySingleDomainRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
    RequestBody: BuySingleDomainRequestBody$Outbound;
};
/** @internal */
export declare const BuySingleDomainRequest$outboundSchema: z.ZodType<BuySingleDomainRequest$Outbound, z.ZodTypeDef, BuySingleDomainRequest>;
export declare function buySingleDomainRequestToJSON(buySingleDomainRequest: BuySingleDomainRequest): string;
export declare function buySingleDomainRequestFromJSON(jsonString: string): SafeParseResult<BuySingleDomainRequest, SDKValidationError>;
/** @internal */
export declare const BuySingleDomainDomainsRegistrarResponseResponseBody$inboundSchema: z.ZodType<BuySingleDomainDomainsRegistrarResponseResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type BuySingleDomainDomainsRegistrarResponseResponseBody$Outbound = (NotAuthorizedForScope$Outbound & {
    code: "not_authorized_for_scope";
}) | Forbidden$Outbound;
/** @internal */
export declare const BuySingleDomainDomainsRegistrarResponseResponseBody$outboundSchema: z.ZodType<BuySingleDomainDomainsRegistrarResponseResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function buySingleDomainDomainsRegistrarResponseResponseBodyToJSON(buySingleDomainDomainsRegistrarResponseResponseBody: BuySingleDomainDomainsRegistrarResponseResponseBody): string;
export declare function buySingleDomainDomainsRegistrarResponseResponseBodyFromJSON(jsonString: string): SafeParseResult<BuySingleDomainDomainsRegistrarResponseResponseBody, SDKValidationError>;
/** @internal */
export declare const BuySingleDomainDomainsRegistrarResponseBody$inboundSchema: z.ZodType<BuySingleDomainDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type BuySingleDomainDomainsRegistrarResponseBody$Outbound = DomainTooShort$Outbound | OrderTooExpensive$Outbound | InvalidAdditionalContactInfo$Outbound | AdditionalContactInfoRequired$Outbound | ExpectedPriceMismatch$Outbound | DomainNotAvailable$Outbound | LanguageCodeRequired$Outbound | TldNotSupported$Outbound | HttpApiDecodeError$Outbound;
/** @internal */
export declare const BuySingleDomainDomainsRegistrarResponseBody$outboundSchema: z.ZodType<BuySingleDomainDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function buySingleDomainDomainsRegistrarResponseBodyToJSON(buySingleDomainDomainsRegistrarResponseBody: BuySingleDomainDomainsRegistrarResponseBody): string;
export declare function buySingleDomainDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<BuySingleDomainDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const BuySingleDomainMethod$inboundSchema: z.ZodNativeEnum<typeof BuySingleDomainMethod>;
/** @internal */
export declare const BuySingleDomainMethod$outboundSchema: z.ZodNativeEnum<typeof BuySingleDomainMethod>;
/** @internal */
export declare const Links$inboundSchema: z.ZodType<Links, z.ZodTypeDef, unknown>;
/** @internal */
export type Links$Outbound = {
    href: string;
    method: string;
};
/** @internal */
export declare const Links$outboundSchema: z.ZodType<Links$Outbound, z.ZodTypeDef, Links>;
export declare function linksToJSON(links: Links): string;
export declare function linksFromJSON(jsonString: string): SafeParseResult<Links, SDKValidationError>;
/** @internal */
export declare const BuySingleDomainResponseBody$inboundSchema: z.ZodType<BuySingleDomainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type BuySingleDomainResponseBody$Outbound = {
    orderId: string;
    _links: {
        [k: string]: Links$Outbound;
    };
};
/** @internal */
export declare const BuySingleDomainResponseBody$outboundSchema: z.ZodType<BuySingleDomainResponseBody$Outbound, z.ZodTypeDef, BuySingleDomainResponseBody>;
export declare function buySingleDomainResponseBodyToJSON(buySingleDomainResponseBody: BuySingleDomainResponseBody): string;
export declare function buySingleDomainResponseBodyFromJSON(jsonString: string): SafeParseResult<BuySingleDomainResponseBody, SDKValidationError>;
//# sourceMappingURL=buysingledomainop.d.ts.map