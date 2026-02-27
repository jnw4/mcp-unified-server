import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListBillingChargesRequest = {
    /**
     * Inclusive start of the date range as an ISO 8601 date-time string in UTC.
     */
    from: string;
    /**
     * Exclusive end of the date range as an ISO 8601 date-time string in UTC.
     */
    to: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/**
 * Currency used for billing (ISO 4217)
 */
export declare const BillingCurrency: {
    readonly Usd: "USD";
};
/**
 * Currency used for billing (ISO 4217)
 */
export type BillingCurrency = ClosedEnum<typeof BillingCurrency>;
/**
 * Classification of the charge
 */
export declare const ChargeCategory: {
    readonly Adjustment: "Adjustment";
    readonly Credit: "Credit";
    readonly Purchase: "Purchase";
    readonly Tax: "Tax";
    readonly Usage: "Usage";
};
/**
 * Classification of the charge
 */
export type ChargeCategory = ClosedEnum<typeof ChargeCategory>;
/**
 * High-level category of the service
 */
export declare const ServiceCategory: {
    readonly AIAndMachineLearning: "AI and Machine Learning";
    readonly Analytics: "Analytics";
    readonly BusinessApplications: "Business Applications";
    readonly Compute: "Compute";
    readonly Databases: "Databases";
    readonly DeveloperTools: "Developer Tools";
    readonly Multicloud: "Multicloud";
    readonly Identity: "Identity";
    readonly Integration: "Integration";
    readonly InternetOfThings: "Internet of Things";
    readonly ManagementAndGovernance: "Management and Governance";
    readonly Media: "Media";
    readonly Migration: "Migration";
    readonly Mobile: "Mobile";
    readonly Networking: "Networking";
    readonly Security: "Security";
    readonly Storage: "Storage";
    readonly Web: "Web";
    readonly Other: "Other";
};
/**
 * High-level category of the service
 */
export type ServiceCategory = ClosedEnum<typeof ServiceCategory>;
/**
 * Pricing model used for the charge.
 */
export declare const PricingCategory: {
    readonly Other: "Other";
    readonly Standard: "Standard";
    readonly Dynamic: "Dynamic";
    readonly Committed: "Committed";
};
/**
 * Pricing model used for the charge.
 */
export type PricingCategory = ClosedEnum<typeof PricingCategory>;
export declare const PricingCurrency: {
    readonly Usd: "USD";
};
export type PricingCurrency = ClosedEnum<typeof PricingCurrency>;
/**
 * Extension of the base schema for Focus charges. Includes pricing information for all customers.
 */
export type ListBillingChargesResponseBody = {
    /**
     * Charge amount serving as the basis for invoicing
     */
    billedCost: number;
    /**
     * Currency used for billing (ISO 4217)
     */
    billingCurrency: BillingCurrency;
    /**
     * Classification of the charge
     */
    chargeCategory: ChargeCategory;
    /**
     * Inclusive start of the charge period (ISO 8601 UTC)
     */
    chargePeriodStart: string;
    /**
     * Exclusive end of the charge period (ISO 8601 UTC) - Required in v1.3
     */
    chargePeriodEnd: string;
    /**
     * Volume of resource consumed
     */
    consumedQuantity: number;
    /**
     * Unit of measurement for consumed quantity
     */
    consumedUnit: string;
    /**
     * Amortized cost representation including discounts, pre-commitment credit purchase amount, etc.
     */
    effectiveCost: number;
    /**
     * Provider-assigned region identifier
     */
    regionId?: string | undefined;
    /**
     * Display name for the region
     */
    regionName?: string | undefined;
    /**
     * Display name for the service/product
     */
    serviceName: string;
    /**
     * High-level category of the service
     */
    serviceCategory?: ServiceCategory | undefined;
    /**
     * Entity making the resource/service available for purchase (v1.3)
     */
    serviceProviderName: string;
    /**
     * Charge metadata including the Vercel ProjectId and ProjectName information
     */
    tags: {
        [k: string]: string;
    };
    /**
     * Pricing model used for the charge.
     */
    pricingCategory: PricingCategory;
    pricingCurrency: PricingCurrency;
    pricingQuantity: number;
    pricingUnit: string;
};
/** @internal */
export declare const ListBillingChargesRequest$inboundSchema: z.ZodType<ListBillingChargesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListBillingChargesRequest$Outbound = {
    from: string;
    to: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListBillingChargesRequest$outboundSchema: z.ZodType<ListBillingChargesRequest$Outbound, z.ZodTypeDef, ListBillingChargesRequest>;
export declare function listBillingChargesRequestToJSON(listBillingChargesRequest: ListBillingChargesRequest): string;
export declare function listBillingChargesRequestFromJSON(jsonString: string): SafeParseResult<ListBillingChargesRequest, SDKValidationError>;
/** @internal */
export declare const BillingCurrency$inboundSchema: z.ZodNativeEnum<typeof BillingCurrency>;
/** @internal */
export declare const BillingCurrency$outboundSchema: z.ZodNativeEnum<typeof BillingCurrency>;
/** @internal */
export declare const ChargeCategory$inboundSchema: z.ZodNativeEnum<typeof ChargeCategory>;
/** @internal */
export declare const ChargeCategory$outboundSchema: z.ZodNativeEnum<typeof ChargeCategory>;
/** @internal */
export declare const ServiceCategory$inboundSchema: z.ZodNativeEnum<typeof ServiceCategory>;
/** @internal */
export declare const ServiceCategory$outboundSchema: z.ZodNativeEnum<typeof ServiceCategory>;
/** @internal */
export declare const PricingCategory$inboundSchema: z.ZodNativeEnum<typeof PricingCategory>;
/** @internal */
export declare const PricingCategory$outboundSchema: z.ZodNativeEnum<typeof PricingCategory>;
/** @internal */
export declare const PricingCurrency$inboundSchema: z.ZodNativeEnum<typeof PricingCurrency>;
/** @internal */
export declare const PricingCurrency$outboundSchema: z.ZodNativeEnum<typeof PricingCurrency>;
/** @internal */
export declare const ListBillingChargesResponseBody$inboundSchema: z.ZodType<ListBillingChargesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListBillingChargesResponseBody$Outbound = {
    BilledCost: number;
    BillingCurrency: string;
    ChargeCategory: string;
    ChargePeriodStart: string;
    ChargePeriodEnd: string;
    ConsumedQuantity: number;
    ConsumedUnit: string;
    EffectiveCost: number;
    RegionId?: string | undefined;
    RegionName?: string | undefined;
    ServiceName: string;
    ServiceCategory?: string | undefined;
    ServiceProviderName: string;
    Tags: {
        [k: string]: string;
    };
    PricingCategory: string;
    PricingCurrency: string;
    PricingQuantity: number;
    PricingUnit: string;
};
/** @internal */
export declare const ListBillingChargesResponseBody$outboundSchema: z.ZodType<ListBillingChargesResponseBody$Outbound, z.ZodTypeDef, ListBillingChargesResponseBody>;
export declare function listBillingChargesResponseBodyToJSON(listBillingChargesResponseBody: ListBillingChargesResponseBody): string;
export declare function listBillingChargesResponseBodyFromJSON(jsonString: string): SafeParseResult<ListBillingChargesResponseBody, SDKValidationError>;
//# sourceMappingURL=listbillingchargesop.d.ts.map