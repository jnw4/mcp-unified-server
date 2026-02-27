import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type CreateCheckRequestBody = {
    /**
     * The name of the check being created
     */
    name: string;
    /**
     * Path of the page that is being checked
     */
    path?: string | undefined;
    /**
     * Whether the check should block a deployment from succeeding
     */
    blocking: boolean;
    /**
     * URL to display for further details
     */
    detailsUrl?: string | undefined;
    /**
     * An identifier that can be used as an external reference
     */
    externalId?: string | undefined;
    /**
     * Whether a user should be able to request for the check to be rerun if it fails
     */
    rerequestable?: boolean | undefined;
};
export type CreateCheckRequest = {
    /**
     * The deployment to create the check for.
     */
    deploymentId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: CreateCheckRequestBody;
};
export declare const CreateCheckStatus: {
    readonly Running: "running";
    readonly Completed: "completed";
    readonly Registered: "registered";
};
export type CreateCheckStatus = ClosedEnum<typeof CreateCheckStatus>;
export declare const CreateCheckConclusion: {
    readonly Canceled: "canceled";
    readonly Skipped: "skipped";
    readonly Failed: "failed";
    readonly Neutral: "neutral";
    readonly Succeeded: "succeeded";
    readonly Stale: "stale";
};
export type CreateCheckConclusion = ClosedEnum<typeof CreateCheckConclusion>;
export declare const CreateCheckSource: {
    readonly WebVitals: "web-vitals";
};
export type CreateCheckSource = ClosedEnum<typeof CreateCheckSource>;
export type CreateCheckFCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: CreateCheckSource;
};
export declare const CreateCheckChecksSource: {
    readonly WebVitals: "web-vitals";
};
export type CreateCheckChecksSource = ClosedEnum<typeof CreateCheckChecksSource>;
export type CreateCheckLCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: CreateCheckChecksSource;
};
export declare const CreateCheckChecksResponseSource: {
    readonly WebVitals: "web-vitals";
};
export type CreateCheckChecksResponseSource = ClosedEnum<typeof CreateCheckChecksResponseSource>;
export type CreateCheckCLS = {
    value: number | null;
    previousValue?: number | undefined;
    source: CreateCheckChecksResponseSource;
};
export declare const CreateCheckChecksResponse200Source: {
    readonly WebVitals: "web-vitals";
};
export type CreateCheckChecksResponse200Source = ClosedEnum<typeof CreateCheckChecksResponse200Source>;
export type CreateCheckTBT = {
    value: number | null;
    previousValue?: number | undefined;
    source: CreateCheckChecksResponse200Source;
};
export declare const CreateCheckChecksResponse200ApplicationJSONSource: {
    readonly WebVitals: "web-vitals";
};
export type CreateCheckChecksResponse200ApplicationJSONSource = ClosedEnum<typeof CreateCheckChecksResponse200ApplicationJSONSource>;
export type CreateCheckVirtualExperienceScore = {
    value: number | null;
    previousValue?: number | undefined;
    source: CreateCheckChecksResponse200ApplicationJSONSource;
};
export type CreateCheckMetrics = {
    fcp: CreateCheckFCP;
    lcp: CreateCheckLCP;
    cls: CreateCheckCLS;
    tbt: CreateCheckTBT;
    virtualExperienceScore?: CreateCheckVirtualExperienceScore | undefined;
};
export type CreateCheckOutput = {
    metrics?: CreateCheckMetrics | undefined;
};
export type CreateCheckResponseBody = {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    deploymentId: string;
    status: CreateCheckStatus;
    conclusion?: CreateCheckConclusion | undefined;
    externalId?: string | undefined;
    output?: CreateCheckOutput | undefined;
    completedAt?: number | undefined;
    path?: string | undefined;
    blocking: boolean;
    detailsUrl?: string | undefined;
    integrationId: string;
    startedAt?: number | undefined;
    rerequestable?: boolean | undefined;
};
/** @internal */
export declare const CreateCheckRequestBody$inboundSchema: z.ZodType<CreateCheckRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckRequestBody$Outbound = {
    name: string;
    path?: string | undefined;
    blocking: boolean;
    detailsUrl?: string | undefined;
    externalId?: string | undefined;
    rerequestable?: boolean | undefined;
};
/** @internal */
export declare const CreateCheckRequestBody$outboundSchema: z.ZodType<CreateCheckRequestBody$Outbound, z.ZodTypeDef, CreateCheckRequestBody>;
export declare function createCheckRequestBodyToJSON(createCheckRequestBody: CreateCheckRequestBody): string;
export declare function createCheckRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateCheckRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateCheckRequest$inboundSchema: z.ZodType<CreateCheckRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckRequest$Outbound = {
    deploymentId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: CreateCheckRequestBody$Outbound;
};
/** @internal */
export declare const CreateCheckRequest$outboundSchema: z.ZodType<CreateCheckRequest$Outbound, z.ZodTypeDef, CreateCheckRequest>;
export declare function createCheckRequestToJSON(createCheckRequest: CreateCheckRequest): string;
export declare function createCheckRequestFromJSON(jsonString: string): SafeParseResult<CreateCheckRequest, SDKValidationError>;
/** @internal */
export declare const CreateCheckStatus$inboundSchema: z.ZodNativeEnum<typeof CreateCheckStatus>;
/** @internal */
export declare const CreateCheckStatus$outboundSchema: z.ZodNativeEnum<typeof CreateCheckStatus>;
/** @internal */
export declare const CreateCheckConclusion$inboundSchema: z.ZodNativeEnum<typeof CreateCheckConclusion>;
/** @internal */
export declare const CreateCheckConclusion$outboundSchema: z.ZodNativeEnum<typeof CreateCheckConclusion>;
/** @internal */
export declare const CreateCheckSource$inboundSchema: z.ZodNativeEnum<typeof CreateCheckSource>;
/** @internal */
export declare const CreateCheckSource$outboundSchema: z.ZodNativeEnum<typeof CreateCheckSource>;
/** @internal */
export declare const CreateCheckFCP$inboundSchema: z.ZodType<CreateCheckFCP, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckFCP$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const CreateCheckFCP$outboundSchema: z.ZodType<CreateCheckFCP$Outbound, z.ZodTypeDef, CreateCheckFCP>;
export declare function createCheckFCPToJSON(createCheckFCP: CreateCheckFCP): string;
export declare function createCheckFCPFromJSON(jsonString: string): SafeParseResult<CreateCheckFCP, SDKValidationError>;
/** @internal */
export declare const CreateCheckChecksSource$inboundSchema: z.ZodNativeEnum<typeof CreateCheckChecksSource>;
/** @internal */
export declare const CreateCheckChecksSource$outboundSchema: z.ZodNativeEnum<typeof CreateCheckChecksSource>;
/** @internal */
export declare const CreateCheckLCP$inboundSchema: z.ZodType<CreateCheckLCP, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckLCP$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const CreateCheckLCP$outboundSchema: z.ZodType<CreateCheckLCP$Outbound, z.ZodTypeDef, CreateCheckLCP>;
export declare function createCheckLCPToJSON(createCheckLCP: CreateCheckLCP): string;
export declare function createCheckLCPFromJSON(jsonString: string): SafeParseResult<CreateCheckLCP, SDKValidationError>;
/** @internal */
export declare const CreateCheckChecksResponseSource$inboundSchema: z.ZodNativeEnum<typeof CreateCheckChecksResponseSource>;
/** @internal */
export declare const CreateCheckChecksResponseSource$outboundSchema: z.ZodNativeEnum<typeof CreateCheckChecksResponseSource>;
/** @internal */
export declare const CreateCheckCLS$inboundSchema: z.ZodType<CreateCheckCLS, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckCLS$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const CreateCheckCLS$outboundSchema: z.ZodType<CreateCheckCLS$Outbound, z.ZodTypeDef, CreateCheckCLS>;
export declare function createCheckCLSToJSON(createCheckCLS: CreateCheckCLS): string;
export declare function createCheckCLSFromJSON(jsonString: string): SafeParseResult<CreateCheckCLS, SDKValidationError>;
/** @internal */
export declare const CreateCheckChecksResponse200Source$inboundSchema: z.ZodNativeEnum<typeof CreateCheckChecksResponse200Source>;
/** @internal */
export declare const CreateCheckChecksResponse200Source$outboundSchema: z.ZodNativeEnum<typeof CreateCheckChecksResponse200Source>;
/** @internal */
export declare const CreateCheckTBT$inboundSchema: z.ZodType<CreateCheckTBT, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckTBT$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const CreateCheckTBT$outboundSchema: z.ZodType<CreateCheckTBT$Outbound, z.ZodTypeDef, CreateCheckTBT>;
export declare function createCheckTBTToJSON(createCheckTBT: CreateCheckTBT): string;
export declare function createCheckTBTFromJSON(jsonString: string): SafeParseResult<CreateCheckTBT, SDKValidationError>;
/** @internal */
export declare const CreateCheckChecksResponse200ApplicationJSONSource$inboundSchema: z.ZodNativeEnum<typeof CreateCheckChecksResponse200ApplicationJSONSource>;
/** @internal */
export declare const CreateCheckChecksResponse200ApplicationJSONSource$outboundSchema: z.ZodNativeEnum<typeof CreateCheckChecksResponse200ApplicationJSONSource>;
/** @internal */
export declare const CreateCheckVirtualExperienceScore$inboundSchema: z.ZodType<CreateCheckVirtualExperienceScore, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckVirtualExperienceScore$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const CreateCheckVirtualExperienceScore$outboundSchema: z.ZodType<CreateCheckVirtualExperienceScore$Outbound, z.ZodTypeDef, CreateCheckVirtualExperienceScore>;
export declare function createCheckVirtualExperienceScoreToJSON(createCheckVirtualExperienceScore: CreateCheckVirtualExperienceScore): string;
export declare function createCheckVirtualExperienceScoreFromJSON(jsonString: string): SafeParseResult<CreateCheckVirtualExperienceScore, SDKValidationError>;
/** @internal */
export declare const CreateCheckMetrics$inboundSchema: z.ZodType<CreateCheckMetrics, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckMetrics$Outbound = {
    FCP: CreateCheckFCP$Outbound;
    LCP: CreateCheckLCP$Outbound;
    CLS: CreateCheckCLS$Outbound;
    TBT: CreateCheckTBT$Outbound;
    virtualExperienceScore?: CreateCheckVirtualExperienceScore$Outbound | undefined;
};
/** @internal */
export declare const CreateCheckMetrics$outboundSchema: z.ZodType<CreateCheckMetrics$Outbound, z.ZodTypeDef, CreateCheckMetrics>;
export declare function createCheckMetricsToJSON(createCheckMetrics: CreateCheckMetrics): string;
export declare function createCheckMetricsFromJSON(jsonString: string): SafeParseResult<CreateCheckMetrics, SDKValidationError>;
/** @internal */
export declare const CreateCheckOutput$inboundSchema: z.ZodType<CreateCheckOutput, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckOutput$Outbound = {
    metrics?: CreateCheckMetrics$Outbound | undefined;
};
/** @internal */
export declare const CreateCheckOutput$outboundSchema: z.ZodType<CreateCheckOutput$Outbound, z.ZodTypeDef, CreateCheckOutput>;
export declare function createCheckOutputToJSON(createCheckOutput: CreateCheckOutput): string;
export declare function createCheckOutputFromJSON(jsonString: string): SafeParseResult<CreateCheckOutput, SDKValidationError>;
/** @internal */
export declare const CreateCheckResponseBody$inboundSchema: z.ZodType<CreateCheckResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCheckResponseBody$Outbound = {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    deploymentId: string;
    status: string;
    conclusion?: string | undefined;
    externalId?: string | undefined;
    output?: CreateCheckOutput$Outbound | undefined;
    completedAt?: number | undefined;
    path?: string | undefined;
    blocking: boolean;
    detailsUrl?: string | undefined;
    integrationId: string;
    startedAt?: number | undefined;
    rerequestable?: boolean | undefined;
};
/** @internal */
export declare const CreateCheckResponseBody$outboundSchema: z.ZodType<CreateCheckResponseBody$Outbound, z.ZodTypeDef, CreateCheckResponseBody>;
export declare function createCheckResponseBodyToJSON(createCheckResponseBody: CreateCheckResponseBody): string;
export declare function createCheckResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateCheckResponseBody, SDKValidationError>;
//# sourceMappingURL=createcheckop.d.ts.map