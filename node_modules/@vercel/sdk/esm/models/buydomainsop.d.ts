import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { AdditionalContactInfoRequired, AdditionalContactInfoRequired$Outbound } from "./additionalcontactinforequired.js";
import { DomainNotAvailable, DomainNotAvailable$Outbound } from "./domainnotavailable.js";
import { DomainTooShort, DomainTooShort$Outbound } from "./domaintooshort.js";
import { DuplicateDomains, DuplicateDomains$Outbound } from "./duplicatedomains.js";
import { ExpectedPriceMismatch, ExpectedPriceMismatch$Outbound } from "./expectedpricemismatch.js";
import { Forbidden, Forbidden$Outbound } from "./forbidden.js";
import { HttpApiDecodeError, HttpApiDecodeError$Outbound } from "./httpapidecodeerror.js";
import { InvalidAdditionalContactInfo, InvalidAdditionalContactInfo$Outbound } from "./invalidadditionalcontactinfo.js";
import { LanguageCodeRequired, LanguageCodeRequired$Outbound } from "./languagecoderequired.js";
import { NotAuthorizedForScope, NotAuthorizedForScope$Outbound } from "./notauthorizedforscope.js";
import { OrderTooExpensive, OrderTooExpensive$Outbound } from "./ordertooexpensive.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { TldNotSupported, TldNotSupported$Outbound } from "./tldnotsupported.js";
import { TooManyDomains, TooManyDomains$Outbound } from "./toomanydomains.js";
export type Domains = {
    /**
     * A valid domain name
     */
    domainName: string;
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
     * The language code for the domain. For punycode domains, this must be provided. The list of supported language codes for a TLD can be retrieved from the [Get TLD](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-tld) endpoint.
     */
    languageCode?: string | undefined;
};
export type BuyDomainsAdditional = {};
/**
 * The contact information for the domain. Some TLDs require additional contact information. Use the [Get contact info schema](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema) endpoint to retrieve the required fields.
 */
export type BuyDomainsContactInformation = {
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
    additional?: BuyDomainsAdditional | undefined;
};
export type BuyDomainsRequestBody = {
    domains: Array<Domains>;
    /**
     * The contact information for the domain. Some TLDs require additional contact information. Use the [Get contact info schema](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema) endpoint to retrieve the required fields.
     */
    contactInformation: BuyDomainsContactInformation;
};
export type BuyDomainsRequest = {
    teamId?: string | undefined;
    requestBody: BuyDomainsRequestBody;
};
/**
 * NotAuthorizedForScope
 */
export type BuyDomainsDomainsRegistrarResponseResponseBody = (NotAuthorizedForScope & {
    code: "not_authorized_for_scope";
}) | Forbidden;
/**
 * There was something wrong with the request
 */
export type BuyDomainsDomainsRegistrarResponseBody = DomainTooShort | OrderTooExpensive | TooManyDomains | InvalidAdditionalContactInfo | AdditionalContactInfoRequired | DuplicateDomains | ExpectedPriceMismatch | DomainNotAvailable | LanguageCodeRequired | TldNotSupported | HttpApiDecodeError;
export declare const BuyDomainsMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
    readonly Put: "PUT";
    readonly Delete: "DELETE";
    readonly Patch: "PATCH";
};
export type BuyDomainsMethod = ClosedEnum<typeof BuyDomainsMethod>;
export type BuyDomainsLinks = {
    href: string;
    method: BuyDomainsMethod;
};
/**
 * Success
 */
export type BuyDomainsResponseBody = {
    /**
     * A valid order ID
     */
    orderId: string;
    links: {
        [k: string]: BuyDomainsLinks;
    };
};
/** @internal */
export declare const Domains$inboundSchema: z.ZodType<Domains, z.ZodTypeDef, unknown>;
/** @internal */
export type Domains$Outbound = {
    domainName: string;
    autoRenew: boolean;
    years: number;
    expectedPrice: number;
    languageCode?: string | undefined;
};
/** @internal */
export declare const Domains$outboundSchema: z.ZodType<Domains$Outbound, z.ZodTypeDef, Domains>;
export declare function domainsToJSON(domains: Domains): string;
export declare function domainsFromJSON(jsonString: string): SafeParseResult<Domains, SDKValidationError>;
/** @internal */
export declare const BuyDomainsAdditional$inboundSchema: z.ZodType<BuyDomainsAdditional, z.ZodTypeDef, unknown>;
/** @internal */
export type BuyDomainsAdditional$Outbound = {};
/** @internal */
export declare const BuyDomainsAdditional$outboundSchema: z.ZodType<BuyDomainsAdditional$Outbound, z.ZodTypeDef, BuyDomainsAdditional>;
export declare function buyDomainsAdditionalToJSON(buyDomainsAdditional: BuyDomainsAdditional): string;
export declare function buyDomainsAdditionalFromJSON(jsonString: string): SafeParseResult<BuyDomainsAdditional, SDKValidationError>;
/** @internal */
export declare const BuyDomainsContactInformation$inboundSchema: z.ZodType<BuyDomainsContactInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type BuyDomainsContactInformation$Outbound = {
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
    additional?: BuyDomainsAdditional$Outbound | undefined;
};
/** @internal */
export declare const BuyDomainsContactInformation$outboundSchema: z.ZodType<BuyDomainsContactInformation$Outbound, z.ZodTypeDef, BuyDomainsContactInformation>;
export declare function buyDomainsContactInformationToJSON(buyDomainsContactInformation: BuyDomainsContactInformation): string;
export declare function buyDomainsContactInformationFromJSON(jsonString: string): SafeParseResult<BuyDomainsContactInformation, SDKValidationError>;
/** @internal */
export declare const BuyDomainsRequestBody$inboundSchema: z.ZodType<BuyDomainsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type BuyDomainsRequestBody$Outbound = {
    domains: Array<Domains$Outbound>;
    contactInformation: BuyDomainsContactInformation$Outbound;
};
/** @internal */
export declare const BuyDomainsRequestBody$outboundSchema: z.ZodType<BuyDomainsRequestBody$Outbound, z.ZodTypeDef, BuyDomainsRequestBody>;
export declare function buyDomainsRequestBodyToJSON(buyDomainsRequestBody: BuyDomainsRequestBody): string;
export declare function buyDomainsRequestBodyFromJSON(jsonString: string): SafeParseResult<BuyDomainsRequestBody, SDKValidationError>;
/** @internal */
export declare const BuyDomainsRequest$inboundSchema: z.ZodType<BuyDomainsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BuyDomainsRequest$Outbound = {
    teamId?: string | undefined;
    RequestBody: BuyDomainsRequestBody$Outbound;
};
/** @internal */
export declare const BuyDomainsRequest$outboundSchema: z.ZodType<BuyDomainsRequest$Outbound, z.ZodTypeDef, BuyDomainsRequest>;
export declare function buyDomainsRequestToJSON(buyDomainsRequest: BuyDomainsRequest): string;
export declare function buyDomainsRequestFromJSON(jsonString: string): SafeParseResult<BuyDomainsRequest, SDKValidationError>;
/** @internal */
export declare const BuyDomainsDomainsRegistrarResponseResponseBody$inboundSchema: z.ZodType<BuyDomainsDomainsRegistrarResponseResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type BuyDomainsDomainsRegistrarResponseResponseBody$Outbound = (NotAuthorizedForScope$Outbound & {
    code: "not_authorized_for_scope";
}) | Forbidden$Outbound;
/** @internal */
export declare const BuyDomainsDomainsRegistrarResponseResponseBody$outboundSchema: z.ZodType<BuyDomainsDomainsRegistrarResponseResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function buyDomainsDomainsRegistrarResponseResponseBodyToJSON(buyDomainsDomainsRegistrarResponseResponseBody: BuyDomainsDomainsRegistrarResponseResponseBody): string;
export declare function buyDomainsDomainsRegistrarResponseResponseBodyFromJSON(jsonString: string): SafeParseResult<BuyDomainsDomainsRegistrarResponseResponseBody, SDKValidationError>;
/** @internal */
export declare const BuyDomainsDomainsRegistrarResponseBody$inboundSchema: z.ZodType<BuyDomainsDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type BuyDomainsDomainsRegistrarResponseBody$Outbound = DomainTooShort$Outbound | OrderTooExpensive$Outbound | TooManyDomains$Outbound | InvalidAdditionalContactInfo$Outbound | AdditionalContactInfoRequired$Outbound | DuplicateDomains$Outbound | ExpectedPriceMismatch$Outbound | DomainNotAvailable$Outbound | LanguageCodeRequired$Outbound | TldNotSupported$Outbound | HttpApiDecodeError$Outbound;
/** @internal */
export declare const BuyDomainsDomainsRegistrarResponseBody$outboundSchema: z.ZodType<BuyDomainsDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function buyDomainsDomainsRegistrarResponseBodyToJSON(buyDomainsDomainsRegistrarResponseBody: BuyDomainsDomainsRegistrarResponseBody): string;
export declare function buyDomainsDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<BuyDomainsDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const BuyDomainsMethod$inboundSchema: z.ZodNativeEnum<typeof BuyDomainsMethod>;
/** @internal */
export declare const BuyDomainsMethod$outboundSchema: z.ZodNativeEnum<typeof BuyDomainsMethod>;
/** @internal */
export declare const BuyDomainsLinks$inboundSchema: z.ZodType<BuyDomainsLinks, z.ZodTypeDef, unknown>;
/** @internal */
export type BuyDomainsLinks$Outbound = {
    href: string;
    method: string;
};
/** @internal */
export declare const BuyDomainsLinks$outboundSchema: z.ZodType<BuyDomainsLinks$Outbound, z.ZodTypeDef, BuyDomainsLinks>;
export declare function buyDomainsLinksToJSON(buyDomainsLinks: BuyDomainsLinks): string;
export declare function buyDomainsLinksFromJSON(jsonString: string): SafeParseResult<BuyDomainsLinks, SDKValidationError>;
/** @internal */
export declare const BuyDomainsResponseBody$inboundSchema: z.ZodType<BuyDomainsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type BuyDomainsResponseBody$Outbound = {
    orderId: string;
    _links: {
        [k: string]: BuyDomainsLinks$Outbound;
    };
};
/** @internal */
export declare const BuyDomainsResponseBody$outboundSchema: z.ZodType<BuyDomainsResponseBody$Outbound, z.ZodTypeDef, BuyDomainsResponseBody>;
export declare function buyDomainsResponseBodyToJSON(buyDomainsResponseBody: BuyDomainsResponseBody): string;
export declare function buyDomainsResponseBodyFromJSON(jsonString: string): SafeParseResult<BuyDomainsResponseBody, SDKValidationError>;
//# sourceMappingURL=buydomainsop.d.ts.map