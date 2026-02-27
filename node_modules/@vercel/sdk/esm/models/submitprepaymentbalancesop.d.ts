import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * A credit balance for a particular token type
 */
export type Balances = {
    /**
     * Partner's resource ID, exclude if credits are tied to the installation and not an individual resource.
     */
    resourceId?: string | undefined;
    /**
     * A human-readable description of the credits the user currently has, e.g. \"2,000 Tokens\"
     */
    credit?: string | undefined;
    /**
     * The name of the credits, for display purposes, e.g. \"Tokens\"
     */
    nameLabel?: string | undefined;
    /**
     * The dollar value of the credit balance, in USD and provided in cents, which is used to trigger automatic purchase thresholds.
     */
    currencyValueInCents: number;
};
export type SubmitPrepaymentBalancesRequestBody = {
    /**
     * Server time of your integration, used to determine the most recent data for race conditions & updates. Only the latest usage data for a given day, week, and month will be kept.
     */
    timestamp: Date;
    balances: Array<Balances>;
};
export type SubmitPrepaymentBalancesRequest = {
    integrationConfigurationId: string;
    requestBody?: SubmitPrepaymentBalancesRequestBody | undefined;
};
/** @internal */
export declare const Balances$inboundSchema: z.ZodType<Balances, z.ZodTypeDef, unknown>;
/** @internal */
export type Balances$Outbound = {
    resourceId?: string | undefined;
    credit?: string | undefined;
    nameLabel?: string | undefined;
    currencyValueInCents: number;
};
/** @internal */
export declare const Balances$outboundSchema: z.ZodType<Balances$Outbound, z.ZodTypeDef, Balances>;
export declare function balancesToJSON(balances: Balances): string;
export declare function balancesFromJSON(jsonString: string): SafeParseResult<Balances, SDKValidationError>;
/** @internal */
export declare const SubmitPrepaymentBalancesRequestBody$inboundSchema: z.ZodType<SubmitPrepaymentBalancesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type SubmitPrepaymentBalancesRequestBody$Outbound = {
    timestamp: string;
    balances: Array<Balances$Outbound>;
};
/** @internal */
export declare const SubmitPrepaymentBalancesRequestBody$outboundSchema: z.ZodType<SubmitPrepaymentBalancesRequestBody$Outbound, z.ZodTypeDef, SubmitPrepaymentBalancesRequestBody>;
export declare function submitPrepaymentBalancesRequestBodyToJSON(submitPrepaymentBalancesRequestBody: SubmitPrepaymentBalancesRequestBody): string;
export declare function submitPrepaymentBalancesRequestBodyFromJSON(jsonString: string): SafeParseResult<SubmitPrepaymentBalancesRequestBody, SDKValidationError>;
/** @internal */
export declare const SubmitPrepaymentBalancesRequest$inboundSchema: z.ZodType<SubmitPrepaymentBalancesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SubmitPrepaymentBalancesRequest$Outbound = {
    integrationConfigurationId: string;
    RequestBody?: SubmitPrepaymentBalancesRequestBody$Outbound | undefined;
};
/** @internal */
export declare const SubmitPrepaymentBalancesRequest$outboundSchema: z.ZodType<SubmitPrepaymentBalancesRequest$Outbound, z.ZodTypeDef, SubmitPrepaymentBalancesRequest>;
export declare function submitPrepaymentBalancesRequestToJSON(submitPrepaymentBalancesRequest: SubmitPrepaymentBalancesRequest): string;
export declare function submitPrepaymentBalancesRequestFromJSON(jsonString: string): SafeParseResult<SubmitPrepaymentBalancesRequest, SDKValidationError>;
//# sourceMappingURL=submitprepaymentbalancesop.d.ts.map