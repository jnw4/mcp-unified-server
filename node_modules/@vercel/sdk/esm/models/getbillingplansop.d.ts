import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const QueryParamSource: {
    readonly Marketplace: "marketplace";
    readonly DeployButton: "deploy-button";
    readonly External: "external";
    readonly V0: "v0";
    readonly ResourceClaims: "resource-claims";
    readonly Cli: "cli";
    readonly Oauth: "oauth";
    readonly Backoffice: "backoffice";
};
export type QueryParamSource = ClosedEnum<typeof QueryParamSource>;
export type GetBillingPlansRequest = {
    integrationIdOrSlug: string;
    integrationConfigurationId?: string | undefined;
    productIdOrSlug: string;
    metadata?: string | undefined;
    source?: QueryParamSource | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const GetBillingPlansType: {
    readonly Prepayment: "prepayment";
    readonly Subscription: "subscription";
};
export type GetBillingPlansType = ClosedEnum<typeof GetBillingPlansType>;
export declare const GetBillingPlansScope: {
    readonly Installation: "installation";
    readonly Resource: "resource";
};
export type GetBillingPlansScope = ClosedEnum<typeof GetBillingPlansScope>;
export type GetBillingPlansDetails = {
    label: string;
    value?: string | undefined;
};
export type GetBillingPlansHighlightedDetails = {
    label: string;
    value?: string | undefined;
};
export type Quote = {
    line: string;
    amount: string;
};
export type Plans = {
    type: GetBillingPlansType;
    description: string;
    id: string;
    name: string;
    scope: GetBillingPlansScope;
    paymentMethodRequired: boolean;
    preauthorizationAmount?: number | undefined;
    initialCharge?: string | undefined;
    minimumAmount?: string | undefined;
    maximumAmount?: string | undefined;
    maximumAmountAutoPurchasePerPeriod?: string | undefined;
    cost?: string | undefined;
    details?: Array<GetBillingPlansDetails> | undefined;
    highlightedDetails?: Array<GetBillingPlansHighlightedDetails> | undefined;
    quote?: Array<Quote> | undefined;
    effectiveDate?: string | undefined;
    disabled?: boolean | undefined;
};
export type GetBillingPlansResponseBody = {
    plans: Array<Plans>;
};
/** @internal */
export declare const QueryParamSource$inboundSchema: z.ZodNativeEnum<typeof QueryParamSource>;
/** @internal */
export declare const QueryParamSource$outboundSchema: z.ZodNativeEnum<typeof QueryParamSource>;
/** @internal */
export declare const GetBillingPlansRequest$inboundSchema: z.ZodType<GetBillingPlansRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBillingPlansRequest$Outbound = {
    integrationIdOrSlug: string;
    integrationConfigurationId?: string | undefined;
    productIdOrSlug: string;
    metadata?: string | undefined;
    source?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetBillingPlansRequest$outboundSchema: z.ZodType<GetBillingPlansRequest$Outbound, z.ZodTypeDef, GetBillingPlansRequest>;
export declare function getBillingPlansRequestToJSON(getBillingPlansRequest: GetBillingPlansRequest): string;
export declare function getBillingPlansRequestFromJSON(jsonString: string): SafeParseResult<GetBillingPlansRequest, SDKValidationError>;
/** @internal */
export declare const GetBillingPlansType$inboundSchema: z.ZodNativeEnum<typeof GetBillingPlansType>;
/** @internal */
export declare const GetBillingPlansType$outboundSchema: z.ZodNativeEnum<typeof GetBillingPlansType>;
/** @internal */
export declare const GetBillingPlansScope$inboundSchema: z.ZodNativeEnum<typeof GetBillingPlansScope>;
/** @internal */
export declare const GetBillingPlansScope$outboundSchema: z.ZodNativeEnum<typeof GetBillingPlansScope>;
/** @internal */
export declare const GetBillingPlansDetails$inboundSchema: z.ZodType<GetBillingPlansDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBillingPlansDetails$Outbound = {
    label: string;
    value?: string | undefined;
};
/** @internal */
export declare const GetBillingPlansDetails$outboundSchema: z.ZodType<GetBillingPlansDetails$Outbound, z.ZodTypeDef, GetBillingPlansDetails>;
export declare function getBillingPlansDetailsToJSON(getBillingPlansDetails: GetBillingPlansDetails): string;
export declare function getBillingPlansDetailsFromJSON(jsonString: string): SafeParseResult<GetBillingPlansDetails, SDKValidationError>;
/** @internal */
export declare const GetBillingPlansHighlightedDetails$inboundSchema: z.ZodType<GetBillingPlansHighlightedDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBillingPlansHighlightedDetails$Outbound = {
    label: string;
    value?: string | undefined;
};
/** @internal */
export declare const GetBillingPlansHighlightedDetails$outboundSchema: z.ZodType<GetBillingPlansHighlightedDetails$Outbound, z.ZodTypeDef, GetBillingPlansHighlightedDetails>;
export declare function getBillingPlansHighlightedDetailsToJSON(getBillingPlansHighlightedDetails: GetBillingPlansHighlightedDetails): string;
export declare function getBillingPlansHighlightedDetailsFromJSON(jsonString: string): SafeParseResult<GetBillingPlansHighlightedDetails, SDKValidationError>;
/** @internal */
export declare const Quote$inboundSchema: z.ZodType<Quote, z.ZodTypeDef, unknown>;
/** @internal */
export type Quote$Outbound = {
    line: string;
    amount: string;
};
/** @internal */
export declare const Quote$outboundSchema: z.ZodType<Quote$Outbound, z.ZodTypeDef, Quote>;
export declare function quoteToJSON(quote: Quote): string;
export declare function quoteFromJSON(jsonString: string): SafeParseResult<Quote, SDKValidationError>;
/** @internal */
export declare const Plans$inboundSchema: z.ZodType<Plans, z.ZodTypeDef, unknown>;
/** @internal */
export type Plans$Outbound = {
    type: string;
    description: string;
    id: string;
    name: string;
    scope: string;
    paymentMethodRequired: boolean;
    preauthorizationAmount?: number | undefined;
    initialCharge?: string | undefined;
    minimumAmount?: string | undefined;
    maximumAmount?: string | undefined;
    maximumAmountAutoPurchasePerPeriod?: string | undefined;
    cost?: string | undefined;
    details?: Array<GetBillingPlansDetails$Outbound> | undefined;
    highlightedDetails?: Array<GetBillingPlansHighlightedDetails$Outbound> | undefined;
    quote?: Array<Quote$Outbound> | undefined;
    effectiveDate?: string | undefined;
    disabled?: boolean | undefined;
};
/** @internal */
export declare const Plans$outboundSchema: z.ZodType<Plans$Outbound, z.ZodTypeDef, Plans>;
export declare function plansToJSON(plans: Plans): string;
export declare function plansFromJSON(jsonString: string): SafeParseResult<Plans, SDKValidationError>;
/** @internal */
export declare const GetBillingPlansResponseBody$inboundSchema: z.ZodType<GetBillingPlansResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBillingPlansResponseBody$Outbound = {
    plans: Array<Plans$Outbound>;
};
/** @internal */
export declare const GetBillingPlansResponseBody$outboundSchema: z.ZodType<GetBillingPlansResponseBody$Outbound, z.ZodTypeDef, GetBillingPlansResponseBody>;
export declare function getBillingPlansResponseBodyToJSON(getBillingPlansResponseBody: GetBillingPlansResponseBody): string;
export declare function getBillingPlansResponseBodyFromJSON(jsonString: string): SafeParseResult<GetBillingPlansResponseBody, SDKValidationError>;
//# sourceMappingURL=getbillingplansop.d.ts.map