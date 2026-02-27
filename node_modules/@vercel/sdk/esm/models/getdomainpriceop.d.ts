import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { BadRequest, BadRequest$Outbound } from "./badrequest.js";
import { DomainTooShort, DomainTooShort$Outbound } from "./domaintooshort.js";
import { HttpApiDecodeError, HttpApiDecodeError$Outbound } from "./httpapidecodeerror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { TldNotSupported, TldNotSupported$Outbound } from "./tldnotsupported.js";
export type GetDomainPriceRequest = {
    domain: string;
    /**
     * The number of years to get the price for. If not provided, the minimum number of years for the TLD will be used.
     */
    years?: string | undefined;
    teamId?: string | undefined;
};
/**
 * There was something wrong with the request
 */
export type GetDomainPriceDomainsRegistrarResponseBody = BadRequest | DomainTooShort | TldNotSupported | HttpApiDecodeError;
export type GetDomainPricePurchasePrice = number | string;
export type GetDomainPriceRenewalPrice = number | string;
export type GetDomainPriceTransferPrice = number | string;
/**
 * Success
 */
export type GetDomainPriceResponseBody = {
    years: number;
    purchasePrice: number | string;
    renewalPrice: number | string;
    transferPrice: number | string;
};
/** @internal */
export declare const GetDomainPriceRequest$inboundSchema: z.ZodType<GetDomainPriceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainPriceRequest$Outbound = {
    domain: string;
    years?: string | undefined;
    teamId?: string | undefined;
};
/** @internal */
export declare const GetDomainPriceRequest$outboundSchema: z.ZodType<GetDomainPriceRequest$Outbound, z.ZodTypeDef, GetDomainPriceRequest>;
export declare function getDomainPriceRequestToJSON(getDomainPriceRequest: GetDomainPriceRequest): string;
export declare function getDomainPriceRequestFromJSON(jsonString: string): SafeParseResult<GetDomainPriceRequest, SDKValidationError>;
/** @internal */
export declare const GetDomainPriceDomainsRegistrarResponseBody$inboundSchema: z.ZodType<GetDomainPriceDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainPriceDomainsRegistrarResponseBody$Outbound = BadRequest$Outbound | DomainTooShort$Outbound | TldNotSupported$Outbound | HttpApiDecodeError$Outbound;
/** @internal */
export declare const GetDomainPriceDomainsRegistrarResponseBody$outboundSchema: z.ZodType<GetDomainPriceDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function getDomainPriceDomainsRegistrarResponseBodyToJSON(getDomainPriceDomainsRegistrarResponseBody: GetDomainPriceDomainsRegistrarResponseBody): string;
export declare function getDomainPriceDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDomainPriceDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const GetDomainPricePurchasePrice$inboundSchema: z.ZodType<GetDomainPricePurchasePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainPricePurchasePrice$Outbound = number | string;
/** @internal */
export declare const GetDomainPricePurchasePrice$outboundSchema: z.ZodType<GetDomainPricePurchasePrice$Outbound, z.ZodTypeDef, GetDomainPricePurchasePrice>;
export declare function getDomainPricePurchasePriceToJSON(getDomainPricePurchasePrice: GetDomainPricePurchasePrice): string;
export declare function getDomainPricePurchasePriceFromJSON(jsonString: string): SafeParseResult<GetDomainPricePurchasePrice, SDKValidationError>;
/** @internal */
export declare const GetDomainPriceRenewalPrice$inboundSchema: z.ZodType<GetDomainPriceRenewalPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainPriceRenewalPrice$Outbound = number | string;
/** @internal */
export declare const GetDomainPriceRenewalPrice$outboundSchema: z.ZodType<GetDomainPriceRenewalPrice$Outbound, z.ZodTypeDef, GetDomainPriceRenewalPrice>;
export declare function getDomainPriceRenewalPriceToJSON(getDomainPriceRenewalPrice: GetDomainPriceRenewalPrice): string;
export declare function getDomainPriceRenewalPriceFromJSON(jsonString: string): SafeParseResult<GetDomainPriceRenewalPrice, SDKValidationError>;
/** @internal */
export declare const GetDomainPriceTransferPrice$inboundSchema: z.ZodType<GetDomainPriceTransferPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainPriceTransferPrice$Outbound = number | string;
/** @internal */
export declare const GetDomainPriceTransferPrice$outboundSchema: z.ZodType<GetDomainPriceTransferPrice$Outbound, z.ZodTypeDef, GetDomainPriceTransferPrice>;
export declare function getDomainPriceTransferPriceToJSON(getDomainPriceTransferPrice: GetDomainPriceTransferPrice): string;
export declare function getDomainPriceTransferPriceFromJSON(jsonString: string): SafeParseResult<GetDomainPriceTransferPrice, SDKValidationError>;
/** @internal */
export declare const GetDomainPriceResponseBody$inboundSchema: z.ZodType<GetDomainPriceResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainPriceResponseBody$Outbound = {
    years: number;
    purchasePrice: number | string;
    renewalPrice: number | string;
    transferPrice: number | string;
};
/** @internal */
export declare const GetDomainPriceResponseBody$outboundSchema: z.ZodType<GetDomainPriceResponseBody$Outbound, z.ZodTypeDef, GetDomainPriceResponseBody>;
export declare function getDomainPriceResponseBodyToJSON(getDomainPriceResponseBody: GetDomainPriceResponseBody): string;
export declare function getDomainPriceResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDomainPriceResponseBody, SDKValidationError>;
//# sourceMappingURL=getdomainpriceop.d.ts.map