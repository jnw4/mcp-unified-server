import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetInvoiceRequest = {
    integrationConfigurationId: string;
    invoiceId: string;
};
/**
 * Invoice state.
 */
export declare const GetInvoiceState: {
    readonly Pending: "pending";
    readonly Paid: "paid";
    readonly Notpaid: "notpaid";
    readonly Draft: "draft";
    readonly Scheduled: "scheduled";
    readonly Invoiced: "invoiced";
    readonly Overdue: "overdue";
    readonly RefundRequested: "refund_requested";
    readonly Refunded: "refunded";
};
/**
 * Invoice state.
 */
export type GetInvoiceState = ClosedEnum<typeof GetInvoiceState>;
/**
 * Subscription period for this billing cycle. ISO 8601 timestamps.
 */
export type GetInvoicePeriod = {
    start: string;
    end: string;
};
/**
 * Invoice items.
 */
export type GetInvoiceItems = {
    /**
     * Partner's billing plan ID.
     */
    billingPlanId: string;
    /**
     * Partner's resource ID. If not specified, indicates installation-wide item.
     */
    resourceId?: string | undefined;
    /**
     * Start and end are only needed if different from the period's start/end. ISO 8601 timestamp.
     */
    start?: string | undefined;
    /**
     * Start and end are only needed if different from the period's start/end. ISO 8601 timestamp.
     */
    end?: string | undefined;
    /**
     * Invoice item name.
     */
    name: string;
    /**
     * Additional item details.
     */
    details?: string | undefined;
    /**
     * Item price. A dollar-based decimal string.
     */
    price: string;
    /**
     * Item quantity.
     */
    quantity: number;
    /**
     * Units for item's quantity.
     */
    units: string;
    /**
     * Item total. A dollar-based decimal string.
     */
    total: string;
};
/**
 * Invoice discounts.
 */
export type GetInvoiceDiscounts = {
    /**
     * Partner's billing plan ID.
     */
    billingPlanId: string;
    /**
     * Partner's resource ID. If not specified, indicates installation-wide discount.
     */
    resourceId?: string | undefined;
    /**
     * Start and end are only needed if different from the period's start/end. ISO 8601 timestamp.
     */
    start?: string | undefined;
    /**
     * Start and end are only needed if different from the period's start/end. ISO 8601 timestamp.
     */
    end?: string | undefined;
    /**
     * Discount name.
     */
    name: string;
    /**
     * Additional discount details.
     */
    details?: string | undefined;
    /**
     * Discount amount. A dollar-based decimal string.
     */
    amount: string;
};
export type GetInvoiceResponseBody = {
    /**
     * Whether the invoice is in the testmode (no real transaction created).
     */
    test?: boolean | undefined;
    /**
     * Vercel Marketplace Invoice ID.
     */
    invoiceId: string;
    /**
     * Partner-supplied Invoice ID, if applicable.
     */
    externalId?: string | undefined;
    /**
     * Invoice state.
     */
    state: GetInvoiceState;
    /**
     * User-readable invoice number.
     */
    invoiceNumber?: string | undefined;
    /**
     * Invoice date. ISO 8601 timestamp.
     */
    invoiceDate: string;
    /**
     * Subscription period for this billing cycle. ISO 8601 timestamps.
     */
    period: GetInvoicePeriod;
    /**
     * Moment the invoice was paid. ISO 8601 timestamp.
     */
    paidAt?: string | undefined;
    /**
     * Most recent moment the invoice was refunded. ISO 8601 timestamp.
     */
    refundedAt?: string | undefined;
    /**
     * Additional memo for the invoice.
     */
    memo?: string | undefined;
    /**
     * Invoice items.
     */
    items: Array<GetInvoiceItems>;
    /**
     * Invoice discounts.
     */
    discounts?: Array<GetInvoiceDiscounts> | undefined;
    /**
     * Invoice total amount. A dollar-based decimal string.
     */
    total: string;
    /**
     * The reason for refund. Only applicable for states "refunded" or "refund_request".
     */
    refundReason?: string | undefined;
    /**
     * Refund amount. Only applicable for states "refunded" or "refund_request". A dollar-based decimal string.
     */
    refundTotal?: string | undefined;
    /**
     * System creation date. ISO 8601 timestamp.
     */
    created: string;
    /**
     * System update date. ISO 8601 timestamp.
     */
    updated: string;
};
/** @internal */
export declare const GetInvoiceRequest$inboundSchema: z.ZodType<GetInvoiceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetInvoiceRequest$Outbound = {
    integrationConfigurationId: string;
    invoiceId: string;
};
/** @internal */
export declare const GetInvoiceRequest$outboundSchema: z.ZodType<GetInvoiceRequest$Outbound, z.ZodTypeDef, GetInvoiceRequest>;
export declare function getInvoiceRequestToJSON(getInvoiceRequest: GetInvoiceRequest): string;
export declare function getInvoiceRequestFromJSON(jsonString: string): SafeParseResult<GetInvoiceRequest, SDKValidationError>;
/** @internal */
export declare const GetInvoiceState$inboundSchema: z.ZodNativeEnum<typeof GetInvoiceState>;
/** @internal */
export declare const GetInvoiceState$outboundSchema: z.ZodNativeEnum<typeof GetInvoiceState>;
/** @internal */
export declare const GetInvoicePeriod$inboundSchema: z.ZodType<GetInvoicePeriod, z.ZodTypeDef, unknown>;
/** @internal */
export type GetInvoicePeriod$Outbound = {
    start: string;
    end: string;
};
/** @internal */
export declare const GetInvoicePeriod$outboundSchema: z.ZodType<GetInvoicePeriod$Outbound, z.ZodTypeDef, GetInvoicePeriod>;
export declare function getInvoicePeriodToJSON(getInvoicePeriod: GetInvoicePeriod): string;
export declare function getInvoicePeriodFromJSON(jsonString: string): SafeParseResult<GetInvoicePeriod, SDKValidationError>;
/** @internal */
export declare const GetInvoiceItems$inboundSchema: z.ZodType<GetInvoiceItems, z.ZodTypeDef, unknown>;
/** @internal */
export type GetInvoiceItems$Outbound = {
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
export declare const GetInvoiceItems$outboundSchema: z.ZodType<GetInvoiceItems$Outbound, z.ZodTypeDef, GetInvoiceItems>;
export declare function getInvoiceItemsToJSON(getInvoiceItems: GetInvoiceItems): string;
export declare function getInvoiceItemsFromJSON(jsonString: string): SafeParseResult<GetInvoiceItems, SDKValidationError>;
/** @internal */
export declare const GetInvoiceDiscounts$inboundSchema: z.ZodType<GetInvoiceDiscounts, z.ZodTypeDef, unknown>;
/** @internal */
export type GetInvoiceDiscounts$Outbound = {
    billingPlanId: string;
    resourceId?: string | undefined;
    start?: string | undefined;
    end?: string | undefined;
    name: string;
    details?: string | undefined;
    amount: string;
};
/** @internal */
export declare const GetInvoiceDiscounts$outboundSchema: z.ZodType<GetInvoiceDiscounts$Outbound, z.ZodTypeDef, GetInvoiceDiscounts>;
export declare function getInvoiceDiscountsToJSON(getInvoiceDiscounts: GetInvoiceDiscounts): string;
export declare function getInvoiceDiscountsFromJSON(jsonString: string): SafeParseResult<GetInvoiceDiscounts, SDKValidationError>;
/** @internal */
export declare const GetInvoiceResponseBody$inboundSchema: z.ZodType<GetInvoiceResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetInvoiceResponseBody$Outbound = {
    test?: boolean | undefined;
    invoiceId: string;
    externalId?: string | undefined;
    state: string;
    invoiceNumber?: string | undefined;
    invoiceDate: string;
    period: GetInvoicePeriod$Outbound;
    paidAt?: string | undefined;
    refundedAt?: string | undefined;
    memo?: string | undefined;
    items: Array<GetInvoiceItems$Outbound>;
    discounts?: Array<GetInvoiceDiscounts$Outbound> | undefined;
    total: string;
    refundReason?: string | undefined;
    refundTotal?: string | undefined;
    created: string;
    updated: string;
};
/** @internal */
export declare const GetInvoiceResponseBody$outboundSchema: z.ZodType<GetInvoiceResponseBody$Outbound, z.ZodTypeDef, GetInvoiceResponseBody>;
export declare function getInvoiceResponseBodyToJSON(getInvoiceResponseBody: GetInvoiceResponseBody): string;
export declare function getInvoiceResponseBodyFromJSON(jsonString: string): SafeParseResult<GetInvoiceResponseBody, SDKValidationError>;
//# sourceMappingURL=getinvoiceop.d.ts.map