import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Period for the billing cycle. The period end date cannot be older than 24 hours earlier than our current server's time.
 */
export type Period = {
    start: Date;
    end: Date;
};
export type BillingItems = {
    /**
     * Partner's billing plan ID.
     */
    billingPlanId: string;
    /**
     * Partner's resource ID.
     */
    resourceId?: string | undefined;
    /**
     * Start and end are only needed if different from the period's start/end.
     */
    start?: Date | undefined;
    /**
     * Start and end are only needed if different from the period's start/end.
     */
    end?: Date | undefined;
    /**
     * Line item name.
     */
    name: string;
    /**
     * Line item details.
     */
    details?: string | undefined;
    /**
     * Price per unit.
     */
    price: string;
    /**
     * Quantity of units.
     */
    quantity: number;
    /**
     * Units of the quantity.
     */
    units: string;
    /**
     * Total amount.
     */
    total: string;
};
export type Discounts = {
    /**
     * Partner's billing plan ID.
     */
    billingPlanId: string;
    /**
     * Partner's resource ID.
     */
    resourceId?: string | undefined;
    /**
     * Start and end are only needed if different from the period's start/end.
     */
    start?: Date | undefined;
    /**
     * Start and end are only needed if different from the period's start/end.
     */
    end?: Date | undefined;
    /**
     * Discount name.
     */
    name: string;
    /**
     * Discount details.
     */
    details?: string | undefined;
    /**
     * Discount amount.
     */
    amount: string;
};
export type Billing2 = {
    items: Array<BillingItems>;
    discounts?: Array<Discounts> | undefined;
};
export type Billing1 = {
    /**
     * Partner's billing plan ID.
     */
    billingPlanId: string;
    /**
     * Partner's resource ID.
     */
    resourceId?: string | undefined;
    /**
     * Start and end are only needed if different from the period's start/end.
     */
    start?: Date | undefined;
    /**
     * Start and end are only needed if different from the period's start/end.
     */
    end?: Date | undefined;
    /**
     * Line item name.
     */
    name: string;
    /**
     * Line item details.
     */
    details?: string | undefined;
    /**
     * Price per unit.
     */
    price: string;
    /**
     * Quantity of units.
     */
    quantity: number;
    /**
     * Units of the quantity.
     */
    units: string;
    /**
     * Total amount.
     */
    total: string;
};
/**
 * Billing data (interim invoicing data).
 */
export type SubmitBillingDataBilling = Billing2 | Array<Billing1>;
/**
 * \n              Type of the metric.\n              - total: measured total value, such as Database size\n              - interval: usage during the period, such as i/o or number of queries.\n              - rate: rate of usage, such as queries per second.\n
 */
export declare const SubmitBillingDataType: {
    readonly Total: "total";
    readonly Interval: "interval";
    readonly Rate: "rate";
};
/**
 * \n              Type of the metric.\n              - total: measured total value, such as Database size\n              - interval: usage during the period, such as i/o or number of queries.\n              - rate: rate of usage, such as queries per second.\n
 */
export type SubmitBillingDataType = ClosedEnum<typeof SubmitBillingDataType>;
export type Usage = {
    /**
     * Partner's resource ID.
     */
    resourceId?: string | undefined;
    /**
     * Metric name.
     */
    name: string;
    /**
     * \n              Type of the metric.\n              - total: measured total value, such as Database size\n              - interval: usage during the period, such as i/o or number of queries.\n              - rate: rate of usage, such as queries per second.\n
     */
    type: SubmitBillingDataType;
    /**
     * Metric units. Example: \"GB\"
     */
    units: string;
    /**
     * Metric value for the day. Could be a final or an interim value for the day.
     */
    dayValue: number;
    /**
     * Metric value for the billing period. Could be a final or an interim value for the period.
     */
    periodValue: number;
    /**
     * The limit value of the metric for a billing period, if a limit is defined by the plan.
     */
    planValue?: number | undefined;
};
export type SubmitBillingDataRequestBody = {
    /**
     * Server time of your integration, used to determine the most recent data for race conditions & updates. Only the latest usage data for a given day, week, and month will be kept.
     */
    timestamp: Date;
    /**
     * End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. This tells us which day the usage data is for, and also allows for your \"end of day\" to be different from UTC 00:00:00. eod must be within the period dates, and cannot be older than 24h earlier from our server's current time.
     */
    eod: Date;
    /**
     * Period for the billing cycle. The period end date cannot be older than 24 hours earlier than our current server's time.
     */
    period: Period;
    /**
     * Billing data (interim invoicing data).
     */
    billing: Billing2 | Array<Billing1>;
    usage: Array<Usage>;
};
export type SubmitBillingDataRequest = {
    integrationConfigurationId: string;
    requestBody: SubmitBillingDataRequestBody;
};
/** @internal */
export declare const Period$inboundSchema: z.ZodType<Period, z.ZodTypeDef, unknown>;
/** @internal */
export type Period$Outbound = {
    start: string;
    end: string;
};
/** @internal */
export declare const Period$outboundSchema: z.ZodType<Period$Outbound, z.ZodTypeDef, Period>;
export declare function periodToJSON(period: Period): string;
export declare function periodFromJSON(jsonString: string): SafeParseResult<Period, SDKValidationError>;
/** @internal */
export declare const BillingItems$inboundSchema: z.ZodType<BillingItems, z.ZodTypeDef, unknown>;
/** @internal */
export type BillingItems$Outbound = {
    billingPlanId: string;
    resourceId?: string | undefined;
    start?: string | undefined;
    end?: string | undefined;
    name: string;
    details?: string | undefined;
    price: string;
    quantity: number;
    units: string;
    total: string;
};
/** @internal */
export declare const BillingItems$outboundSchema: z.ZodType<BillingItems$Outbound, z.ZodTypeDef, BillingItems>;
export declare function billingItemsToJSON(billingItems: BillingItems): string;
export declare function billingItemsFromJSON(jsonString: string): SafeParseResult<BillingItems, SDKValidationError>;
/** @internal */
export declare const Discounts$inboundSchema: z.ZodType<Discounts, z.ZodTypeDef, unknown>;
/** @internal */
export type Discounts$Outbound = {
    billingPlanId: string;
    resourceId?: string | undefined;
    start?: string | undefined;
    end?: string | undefined;
    name: string;
    details?: string | undefined;
    amount: string;
};
/** @internal */
export declare const Discounts$outboundSchema: z.ZodType<Discounts$Outbound, z.ZodTypeDef, Discounts>;
export declare function discountsToJSON(discounts: Discounts): string;
export declare function discountsFromJSON(jsonString: string): SafeParseResult<Discounts, SDKValidationError>;
/** @internal */
export declare const Billing2$inboundSchema: z.ZodType<Billing2, z.ZodTypeDef, unknown>;
/** @internal */
export type Billing2$Outbound = {
    items: Array<BillingItems$Outbound>;
    discounts?: Array<Discounts$Outbound> | undefined;
};
/** @internal */
export declare const Billing2$outboundSchema: z.ZodType<Billing2$Outbound, z.ZodTypeDef, Billing2>;
export declare function billing2ToJSON(billing2: Billing2): string;
export declare function billing2FromJSON(jsonString: string): SafeParseResult<Billing2, SDKValidationError>;
/** @internal */
export declare const Billing1$inboundSchema: z.ZodType<Billing1, z.ZodTypeDef, unknown>;
/** @internal */
export type Billing1$Outbound = {
    billingPlanId: string;
    resourceId?: string | undefined;
    start?: string | undefined;
    end?: string | undefined;
    name: string;
    details?: string | undefined;
    price: string;
    quantity: number;
    units: string;
    total: string;
};
/** @internal */
export declare const Billing1$outboundSchema: z.ZodType<Billing1$Outbound, z.ZodTypeDef, Billing1>;
export declare function billing1ToJSON(billing1: Billing1): string;
export declare function billing1FromJSON(jsonString: string): SafeParseResult<Billing1, SDKValidationError>;
/** @internal */
export declare const SubmitBillingDataBilling$inboundSchema: z.ZodType<SubmitBillingDataBilling, z.ZodTypeDef, unknown>;
/** @internal */
export type SubmitBillingDataBilling$Outbound = Billing2$Outbound | Array<Billing1$Outbound>;
/** @internal */
export declare const SubmitBillingDataBilling$outboundSchema: z.ZodType<SubmitBillingDataBilling$Outbound, z.ZodTypeDef, SubmitBillingDataBilling>;
export declare function submitBillingDataBillingToJSON(submitBillingDataBilling: SubmitBillingDataBilling): string;
export declare function submitBillingDataBillingFromJSON(jsonString: string): SafeParseResult<SubmitBillingDataBilling, SDKValidationError>;
/** @internal */
export declare const SubmitBillingDataType$inboundSchema: z.ZodNativeEnum<typeof SubmitBillingDataType>;
/** @internal */
export declare const SubmitBillingDataType$outboundSchema: z.ZodNativeEnum<typeof SubmitBillingDataType>;
/** @internal */
export declare const Usage$inboundSchema: z.ZodType<Usage, z.ZodTypeDef, unknown>;
/** @internal */
export type Usage$Outbound = {
    resourceId?: string | undefined;
    name: string;
    type: string;
    units: string;
    dayValue: number;
    periodValue: number;
    planValue?: number | undefined;
};
/** @internal */
export declare const Usage$outboundSchema: z.ZodType<Usage$Outbound, z.ZodTypeDef, Usage>;
export declare function usageToJSON(usage: Usage): string;
export declare function usageFromJSON(jsonString: string): SafeParseResult<Usage, SDKValidationError>;
/** @internal */
export declare const SubmitBillingDataRequestBody$inboundSchema: z.ZodType<SubmitBillingDataRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type SubmitBillingDataRequestBody$Outbound = {
    timestamp: string;
    eod: string;
    period: Period$Outbound;
    billing: Billing2$Outbound | Array<Billing1$Outbound>;
    usage: Array<Usage$Outbound>;
};
/** @internal */
export declare const SubmitBillingDataRequestBody$outboundSchema: z.ZodType<SubmitBillingDataRequestBody$Outbound, z.ZodTypeDef, SubmitBillingDataRequestBody>;
export declare function submitBillingDataRequestBodyToJSON(submitBillingDataRequestBody: SubmitBillingDataRequestBody): string;
export declare function submitBillingDataRequestBodyFromJSON(jsonString: string): SafeParseResult<SubmitBillingDataRequestBody, SDKValidationError>;
/** @internal */
export declare const SubmitBillingDataRequest$inboundSchema: z.ZodType<SubmitBillingDataRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SubmitBillingDataRequest$Outbound = {
    integrationConfigurationId: string;
    RequestBody: SubmitBillingDataRequestBody$Outbound;
};
/** @internal */
export declare const SubmitBillingDataRequest$outboundSchema: z.ZodType<SubmitBillingDataRequest$Outbound, z.ZodTypeDef, SubmitBillingDataRequest>;
export declare function submitBillingDataRequestToJSON(submitBillingDataRequest: SubmitBillingDataRequest): string;
export declare function submitBillingDataRequestFromJSON(jsonString: string): SafeParseResult<SubmitBillingDataRequest, SDKValidationError>;
//# sourceMappingURL=submitbillingdataop.d.ts.map