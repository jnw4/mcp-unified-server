import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListContractCommitmentsRequest = {
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
 * Highest-level classification of the contract commitment. 'Spend' for Pro ($20/month), 'Usage' for Enterprise (MIU allocation).
 */
export declare const ContractCommitmentCategory: {
    readonly Usage: "Usage";
    readonly Spend: "Spend";
};
/**
 * Highest-level classification of the contract commitment. 'Spend' for Pro ($20/month), 'Usage' for Enterprise (MIU allocation).
 */
export type ContractCommitmentCategory = ClosedEnum<typeof ContractCommitmentCategory>;
/**
 * Contract commitment information describing terms within a contract. New in FOCUS v1.3 - tracks commitment terms separate from cost/usage rows. For Vercel: - Pro: $20 monthly spend commitment - Enterprise: MIU allocation per period (usage commitment)
 */
export type ListContractCommitmentsResponseBody = {
    /**
     * Highest-level classification of the contract commitment. 'Spend' for Pro ($20/month), 'Usage' for Enterprise (MIU allocation).
     */
    contractCommitmentCategory: ContractCommitmentCategory;
    /**
     * Monetary value of the contract commitment (in BillingCurrency). Required when ContractCommitmentCategory is 'Spend'. For Pro: 20 (USD)
     */
    contractCommitmentCost?: number | undefined;
    /**
     * Self-contained summary of the contract commitment's terms
     */
    contractCommitmentDescription?: string | undefined;
    /**
     * Unique identifier for a single contract term within a contract. Maps to specific commitment period or allocation ID.
     */
    contractCommitmentId: string;
    /**
     * Inclusive start of the commitment term period (ISO 8601 UTC)
     */
    contractCommitmentPeriodStart: string;
    /**
     * Exclusive end of the commitment term period (ISO 8601 UTC)
     */
    contractCommitmentPeriodEnd: string;
    /**
     * Amount associated with the commitment (in ContractCommitmentUnit). Required when ContractCommitmentCategory is 'Usage'. For Enterprise: MIU allocation amount.
     */
    contractCommitmentQuantity?: number | undefined;
    /**
     * Service-provider-assigned name identifying the commitment type. 'Pro' or 'Enterprise' for Vercel.
     */
    contractCommitmentType: string;
    /**
     * Measurement unit for ContractCommitmentQuantity. 'MIUs' for Enterprise, 'USD' for Pro spend commitments.
     */
    contractCommitmentUnit: string;
    /**
     * Service-provider-assigned identifier for a contract. Maps to Orb Subscription ID for Vercel.
     */
    contractId: string;
    /**
     * Inclusive start of the overall contract period (ISO 8601 UTC)
     */
    contractPeriodStart: string;
    /**
     * Exclusive end of the overall contract period (ISO 8601 UTC)
     */
    contractPeriodEnd: string;
    billingCurrency: string;
};
/** @internal */
export declare const ListContractCommitmentsRequest$inboundSchema: z.ZodType<ListContractCommitmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListContractCommitmentsRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListContractCommitmentsRequest$outboundSchema: z.ZodType<ListContractCommitmentsRequest$Outbound, z.ZodTypeDef, ListContractCommitmentsRequest>;
export declare function listContractCommitmentsRequestToJSON(listContractCommitmentsRequest: ListContractCommitmentsRequest): string;
export declare function listContractCommitmentsRequestFromJSON(jsonString: string): SafeParseResult<ListContractCommitmentsRequest, SDKValidationError>;
/** @internal */
export declare const ContractCommitmentCategory$inboundSchema: z.ZodNativeEnum<typeof ContractCommitmentCategory>;
/** @internal */
export declare const ContractCommitmentCategory$outboundSchema: z.ZodNativeEnum<typeof ContractCommitmentCategory>;
/** @internal */
export declare const ListContractCommitmentsResponseBody$inboundSchema: z.ZodType<ListContractCommitmentsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListContractCommitmentsResponseBody$Outbound = {
    ContractCommitmentCategory: string;
    ContractCommitmentCost?: number | undefined;
    ContractCommitmentDescription?: string | undefined;
    ContractCommitmentId: string;
    ContractCommitmentPeriodStart: string;
    ContractCommitmentPeriodEnd: string;
    ContractCommitmentQuantity?: number | undefined;
    ContractCommitmentType: string;
    ContractCommitmentUnit: string;
    ContractId: string;
    ContractPeriodStart: string;
    ContractPeriodEnd: string;
    BillingCurrency: string;
};
/** @internal */
export declare const ListContractCommitmentsResponseBody$outboundSchema: z.ZodType<ListContractCommitmentsResponseBody$Outbound, z.ZodTypeDef, ListContractCommitmentsResponseBody>;
export declare function listContractCommitmentsResponseBodyToJSON(listContractCommitmentsResponseBody: ListContractCommitmentsResponseBody): string;
export declare function listContractCommitmentsResponseBodyFromJSON(jsonString: string): SafeParseResult<ListContractCommitmentsResponseBody, SDKValidationError>;
//# sourceMappingURL=listcontractcommitmentsop.d.ts.map