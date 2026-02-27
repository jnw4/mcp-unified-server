import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { HttpApiDecodeError, HttpApiDecodeError$Outbound } from "./httpapidecodeerror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { TldNotSupported, TldNotSupported$Outbound } from "./tldnotsupported.js";
export type GetTldPriceRequest = {
    tld: string;
    /**
     * The number of years to get the price for. If not provided, the minimum number of years for the TLD will be used.
     */
    years?: string | undefined;
    teamId?: string | undefined;
};
/**
 * There was something wrong with the request
 */
export type GetTldPriceDomainsRegistrarResponseBody = TldNotSupported | HttpApiDecodeError;
export type PurchasePrice = number | string;
export type RenewalPrice = number | string;
export type TransferPrice = number | string;
/**
 * Success
 */
export type GetTldPriceResponseBody = {
    /**
     * The number of years the returned price is for.
     */
    years: number;
    purchasePrice: number | string;
    renewalPrice: number | string;
    transferPrice: number | string;
};
/** @internal */
export declare const GetTldPriceRequest$inboundSchema: z.ZodType<GetTldPriceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTldPriceRequest$Outbound = {
    tld: string;
    years?: string | undefined;
    teamId?: string | undefined;
};
/** @internal */
export declare const GetTldPriceRequest$outboundSchema: z.ZodType<GetTldPriceRequest$Outbound, z.ZodTypeDef, GetTldPriceRequest>;
export declare function getTldPriceRequestToJSON(getTldPriceRequest: GetTldPriceRequest): string;
export declare function getTldPriceRequestFromJSON(jsonString: string): SafeParseResult<GetTldPriceRequest, SDKValidationError>;
/** @internal */
export declare const GetTldPriceDomainsRegistrarResponseBody$inboundSchema: z.ZodType<GetTldPriceDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTldPriceDomainsRegistrarResponseBody$Outbound = TldNotSupported$Outbound | HttpApiDecodeError$Outbound;
/** @internal */
export declare const GetTldPriceDomainsRegistrarResponseBody$outboundSchema: z.ZodType<GetTldPriceDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function getTldPriceDomainsRegistrarResponseBodyToJSON(getTldPriceDomainsRegistrarResponseBody: GetTldPriceDomainsRegistrarResponseBody): string;
export declare function getTldPriceDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<GetTldPriceDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const PurchasePrice$inboundSchema: z.ZodType<PurchasePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type PurchasePrice$Outbound = number | string;
/** @internal */
export declare const PurchasePrice$outboundSchema: z.ZodType<PurchasePrice$Outbound, z.ZodTypeDef, PurchasePrice>;
export declare function purchasePriceToJSON(purchasePrice: PurchasePrice): string;
export declare function purchasePriceFromJSON(jsonString: string): SafeParseResult<PurchasePrice, SDKValidationError>;
/** @internal */
export declare const RenewalPrice$inboundSchema: z.ZodType<RenewalPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type RenewalPrice$Outbound = number | string;
/** @internal */
export declare const RenewalPrice$outboundSchema: z.ZodType<RenewalPrice$Outbound, z.ZodTypeDef, RenewalPrice>;
export declare function renewalPriceToJSON(renewalPrice: RenewalPrice): string;
export declare function renewalPriceFromJSON(jsonString: string): SafeParseResult<RenewalPrice, SDKValidationError>;
/** @internal */
export declare const TransferPrice$inboundSchema: z.ZodType<TransferPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferPrice$Outbound = number | string;
/** @internal */
export declare const TransferPrice$outboundSchema: z.ZodType<TransferPrice$Outbound, z.ZodTypeDef, TransferPrice>;
export declare function transferPriceToJSON(transferPrice: TransferPrice): string;
export declare function transferPriceFromJSON(jsonString: string): SafeParseResult<TransferPrice, SDKValidationError>;
/** @internal */
export declare const GetTldPriceResponseBody$inboundSchema: z.ZodType<GetTldPriceResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTldPriceResponseBody$Outbound = {
    years: number;
    purchasePrice: number | string;
    renewalPrice: number | string;
    transferPrice: number | string;
};
/** @internal */
export declare const GetTldPriceResponseBody$outboundSchema: z.ZodType<GetTldPriceResponseBody$Outbound, z.ZodTypeDef, GetTldPriceResponseBody>;
export declare function getTldPriceResponseBodyToJSON(getTldPriceResponseBody: GetTldPriceResponseBody): string;
export declare function getTldPriceResponseBodyFromJSON(jsonString: string): SafeParseResult<GetTldPriceResponseBody, SDKValidationError>;
//# sourceMappingURL=gettldpriceop.d.ts.map