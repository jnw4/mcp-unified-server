import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { BadRequest, BadRequest$Outbound } from "./badrequest.js";
import { DNSSECEnabled, DNSSECEnabled$Outbound } from "./dnssecenabled.js";
import { DomainAlreadyOwned, DomainAlreadyOwned$Outbound } from "./domainalreadyowned.js";
import { DomainNotAvailable, DomainNotAvailable$Outbound } from "./domainnotavailable.js";
import { DomainTooShort, DomainTooShort$Outbound } from "./domaintooshort.js";
import { ExpectedPriceMismatch, ExpectedPriceMismatch$Outbound } from "./expectedpricemismatch.js";
import { Forbidden, Forbidden$Outbound } from "./forbidden.js";
import { HttpApiDecodeError, HttpApiDecodeError$Outbound } from "./httpapidecodeerror.js";
import { NotAuthorizedForScope, NotAuthorizedForScope$Outbound } from "./notauthorizedforscope.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { TldNotSupported, TldNotSupported$Outbound } from "./tldnotsupported.js";
export type TransferInDomainContactInformation = {
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
export type TransferInDomainRequestBody = {
    /**
     * The auth code for the domain. You must obtain this code from the losing registrar.
     */
    authCode: string;
    /**
     * Whether the domain should be auto-renewed before it expires. This can be configured later through the Vercel Dashboard or the [Update auto-renew for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-auto-renew-for-a-domain) endpoint.
     */
    autoRenew: boolean;
    /**
     * The number of years to renew the domain for once it is transferred in. This must be a valid number of transfer years for the TLD.
     */
    years: number;
    expectedPrice: number;
    contactInformation: TransferInDomainContactInformation;
};
export type TransferInDomainRequest = {
    domain: string;
    teamId?: string | undefined;
    requestBody: TransferInDomainRequestBody;
};
/**
 * NotAuthorizedForScope
 */
export type TransferInDomainDomainsRegistrarResponseResponseBody = (NotAuthorizedForScope & {
    code: "not_authorized_for_scope";
}) | Forbidden;
/**
 * There was something wrong with the request
 */
export type TransferInDomainDomainsRegistrarResponseBody = BadRequest | DomainAlreadyOwned | DomainTooShort | DNSSECEnabled | ExpectedPriceMismatch | DomainNotAvailable | TldNotSupported | HttpApiDecodeError;
export declare const TransferInDomainMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
    readonly Put: "PUT";
    readonly Delete: "DELETE";
    readonly Patch: "PATCH";
};
export type TransferInDomainMethod = ClosedEnum<typeof TransferInDomainMethod>;
export type TransferInDomainLinks = {
    href: string;
    method: TransferInDomainMethod;
};
/**
 * Success
 */
export type TransferInDomainResponseBody = {
    /**
     * A valid order ID
     */
    orderId: string;
    links: {
        [k: string]: TransferInDomainLinks;
    };
};
/** @internal */
export declare const TransferInDomainContactInformation$inboundSchema: z.ZodType<TransferInDomainContactInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferInDomainContactInformation$Outbound = {
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
export declare const TransferInDomainContactInformation$outboundSchema: z.ZodType<TransferInDomainContactInformation$Outbound, z.ZodTypeDef, TransferInDomainContactInformation>;
export declare function transferInDomainContactInformationToJSON(transferInDomainContactInformation: TransferInDomainContactInformation): string;
export declare function transferInDomainContactInformationFromJSON(jsonString: string): SafeParseResult<TransferInDomainContactInformation, SDKValidationError>;
/** @internal */
export declare const TransferInDomainRequestBody$inboundSchema: z.ZodType<TransferInDomainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferInDomainRequestBody$Outbound = {
    authCode: string;
    autoRenew: boolean;
    years: number;
    expectedPrice: number;
    contactInformation: TransferInDomainContactInformation$Outbound;
};
/** @internal */
export declare const TransferInDomainRequestBody$outboundSchema: z.ZodType<TransferInDomainRequestBody$Outbound, z.ZodTypeDef, TransferInDomainRequestBody>;
export declare function transferInDomainRequestBodyToJSON(transferInDomainRequestBody: TransferInDomainRequestBody): string;
export declare function transferInDomainRequestBodyFromJSON(jsonString: string): SafeParseResult<TransferInDomainRequestBody, SDKValidationError>;
/** @internal */
export declare const TransferInDomainRequest$inboundSchema: z.ZodType<TransferInDomainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferInDomainRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
    RequestBody: TransferInDomainRequestBody$Outbound;
};
/** @internal */
export declare const TransferInDomainRequest$outboundSchema: z.ZodType<TransferInDomainRequest$Outbound, z.ZodTypeDef, TransferInDomainRequest>;
export declare function transferInDomainRequestToJSON(transferInDomainRequest: TransferInDomainRequest): string;
export declare function transferInDomainRequestFromJSON(jsonString: string): SafeParseResult<TransferInDomainRequest, SDKValidationError>;
/** @internal */
export declare const TransferInDomainDomainsRegistrarResponseResponseBody$inboundSchema: z.ZodType<TransferInDomainDomainsRegistrarResponseResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferInDomainDomainsRegistrarResponseResponseBody$Outbound = (NotAuthorizedForScope$Outbound & {
    code: "not_authorized_for_scope";
}) | Forbidden$Outbound;
/** @internal */
export declare const TransferInDomainDomainsRegistrarResponseResponseBody$outboundSchema: z.ZodType<TransferInDomainDomainsRegistrarResponseResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function transferInDomainDomainsRegistrarResponseResponseBodyToJSON(transferInDomainDomainsRegistrarResponseResponseBody: TransferInDomainDomainsRegistrarResponseResponseBody): string;
export declare function transferInDomainDomainsRegistrarResponseResponseBodyFromJSON(jsonString: string): SafeParseResult<TransferInDomainDomainsRegistrarResponseResponseBody, SDKValidationError>;
/** @internal */
export declare const TransferInDomainDomainsRegistrarResponseBody$inboundSchema: z.ZodType<TransferInDomainDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferInDomainDomainsRegistrarResponseBody$Outbound = BadRequest$Outbound | DomainAlreadyOwned$Outbound | DomainTooShort$Outbound | DNSSECEnabled$Outbound | ExpectedPriceMismatch$Outbound | DomainNotAvailable$Outbound | TldNotSupported$Outbound | HttpApiDecodeError$Outbound;
/** @internal */
export declare const TransferInDomainDomainsRegistrarResponseBody$outboundSchema: z.ZodType<TransferInDomainDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function transferInDomainDomainsRegistrarResponseBodyToJSON(transferInDomainDomainsRegistrarResponseBody: TransferInDomainDomainsRegistrarResponseBody): string;
export declare function transferInDomainDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<TransferInDomainDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const TransferInDomainMethod$inboundSchema: z.ZodNativeEnum<typeof TransferInDomainMethod>;
/** @internal */
export declare const TransferInDomainMethod$outboundSchema: z.ZodNativeEnum<typeof TransferInDomainMethod>;
/** @internal */
export declare const TransferInDomainLinks$inboundSchema: z.ZodType<TransferInDomainLinks, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferInDomainLinks$Outbound = {
    href: string;
    method: string;
};
/** @internal */
export declare const TransferInDomainLinks$outboundSchema: z.ZodType<TransferInDomainLinks$Outbound, z.ZodTypeDef, TransferInDomainLinks>;
export declare function transferInDomainLinksToJSON(transferInDomainLinks: TransferInDomainLinks): string;
export declare function transferInDomainLinksFromJSON(jsonString: string): SafeParseResult<TransferInDomainLinks, SDKValidationError>;
/** @internal */
export declare const TransferInDomainResponseBody$inboundSchema: z.ZodType<TransferInDomainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferInDomainResponseBody$Outbound = {
    orderId: string;
    _links: {
        [k: string]: TransferInDomainLinks$Outbound;
    };
};
/** @internal */
export declare const TransferInDomainResponseBody$outboundSchema: z.ZodType<TransferInDomainResponseBody$Outbound, z.ZodTypeDef, TransferInDomainResponseBody>;
export declare function transferInDomainResponseBodyToJSON(transferInDomainResponseBody: TransferInDomainResponseBody): string;
export declare function transferInDomainResponseBodyFromJSON(jsonString: string): SafeParseResult<TransferInDomainResponseBody, SDKValidationError>;
//# sourceMappingURL=transferindomainop.d.ts.map