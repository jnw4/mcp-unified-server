import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The current status of the check
 */
export declare const UpdateCheckStatus: {
    readonly Running: "running";
    readonly Completed: "completed";
};
/**
 * The current status of the check
 */
export type UpdateCheckStatus = ClosedEnum<typeof UpdateCheckStatus>;
/**
 * The result of the check being run
 */
export declare const UpdateCheckConclusion: {
    readonly Canceled: "canceled";
    readonly Failed: "failed";
    readonly Neutral: "neutral";
    readonly Succeeded: "succeeded";
    readonly Skipped: "skipped";
};
/**
 * The result of the check being run
 */
export type UpdateCheckConclusion = ClosedEnum<typeof UpdateCheckConclusion>;
export declare const UpdateCheckSource: {
    readonly WebVitals: "web-vitals";
};
export type UpdateCheckSource = ClosedEnum<typeof UpdateCheckSource>;
export type Fcp = {
    /**
     * First Contentful Paint value
     */
    value: number | null;
    /**
     * Previous First Contentful Paint value to display a delta
     */
    previousValue?: number | undefined;
    source: UpdateCheckSource;
};
export declare const UpdateCheckChecksSource: {
    readonly WebVitals: "web-vitals";
};
export type UpdateCheckChecksSource = ClosedEnum<typeof UpdateCheckChecksSource>;
export type Lcp = {
    /**
     * Largest Contentful Paint value
     */
    value: number | null;
    /**
     * Previous Largest Contentful Paint value to display a delta
     */
    previousValue?: number | undefined;
    source: UpdateCheckChecksSource;
};
export declare const UpdateCheckChecksRequestSource: {
    readonly WebVitals: "web-vitals";
};
export type UpdateCheckChecksRequestSource = ClosedEnum<typeof UpdateCheckChecksRequestSource>;
export type Cls = {
    /**
     * Cumulative Layout Shift value
     */
    value: number | null;
    /**
     * Previous Cumulative Layout Shift value to display a delta
     */
    previousValue?: number | undefined;
    source: UpdateCheckChecksRequestSource;
};
export declare const UpdateCheckChecksRequestRequestBodySource: {
    readonly WebVitals: "web-vitals";
};
export type UpdateCheckChecksRequestRequestBodySource = ClosedEnum<typeof UpdateCheckChecksRequestRequestBodySource>;
export type Tbt = {
    /**
     * Total Blocking Time value
     */
    value: number | null;
    /**
     * Previous Total Blocking Time value to display a delta
     */
    previousValue?: number | undefined;
    source: UpdateCheckChecksRequestRequestBodySource;
};
export declare const UpdateCheckChecksRequestRequestBodyOutputSource: {
    readonly WebVitals: "web-vitals";
};
export type UpdateCheckChecksRequestRequestBodyOutputSource = ClosedEnum<typeof UpdateCheckChecksRequestRequestBodyOutputSource>;
export type VirtualExperienceScore = {
    /**
     * The calculated Virtual Experience Score value, between 0 and 100
     */
    value: number | null;
    /**
     * A previous Virtual Experience Score value to display a delta, between 0 and 100
     */
    previousValue?: number | undefined;
    source: UpdateCheckChecksRequestRequestBodyOutputSource;
};
/**
 * Metrics about the page
 */
export type Metrics = {
    fcp: Fcp;
    lcp: Lcp;
    cls: Cls;
    tbt: Tbt;
    virtualExperienceScore?: VirtualExperienceScore | undefined;
};
/**
 * The results of the check Run
 */
export type UpdateCheckOutput = {
    /**
     * Metrics about the page
     */
    metrics?: Metrics | undefined;
};
export type UpdateCheckRequestBody = {
    /**
     * The name of the check being created
     */
    name?: string | undefined;
    /**
     * Path of the page that is being checked
     */
    path?: string | undefined;
    /**
     * The current status of the check
     */
    status?: UpdateCheckStatus | undefined;
    /**
     * The result of the check being run
     */
    conclusion?: UpdateCheckConclusion | undefined;
    /**
     * A URL a user may visit to see more information about the check
     */
    detailsUrl?: string | undefined;
    /**
     * The results of the check Run
     */
    output?: UpdateCheckOutput | undefined;
    /**
     * An identifier that can be used as an external reference
     */
    externalId?: string | undefined;
};
export type UpdateCheckRequest = {
    /**
     * The deployment to update the check for.
     */
    deploymentId: string;
    /**
     * The check being updated
     */
    checkId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: UpdateCheckRequestBody;
};
export declare const UpdateCheckChecksStatus: {
    readonly Running: "running";
    readonly Completed: "completed";
    readonly Registered: "registered";
};
export type UpdateCheckChecksStatus = ClosedEnum<typeof UpdateCheckChecksStatus>;
export declare const UpdateCheckChecksConclusion: {
    readonly Canceled: "canceled";
    readonly Skipped: "skipped";
    readonly Failed: "failed";
    readonly Neutral: "neutral";
    readonly Succeeded: "succeeded";
    readonly Stale: "stale";
};
export type UpdateCheckChecksConclusion = ClosedEnum<typeof UpdateCheckChecksConclusion>;
export declare const UpdateCheckChecksResponseSource: {
    readonly WebVitals: "web-vitals";
};
export type UpdateCheckChecksResponseSource = ClosedEnum<typeof UpdateCheckChecksResponseSource>;
export type UpdateCheckFCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: UpdateCheckChecksResponseSource;
};
export declare const UpdateCheckChecksResponse200Source: {
    readonly WebVitals: "web-vitals";
};
export type UpdateCheckChecksResponse200Source = ClosedEnum<typeof UpdateCheckChecksResponse200Source>;
export type UpdateCheckLCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: UpdateCheckChecksResponse200Source;
};
export declare const UpdateCheckChecksResponse200ApplicationJSONSource: {
    readonly WebVitals: "web-vitals";
};
export type UpdateCheckChecksResponse200ApplicationJSONSource = ClosedEnum<typeof UpdateCheckChecksResponse200ApplicationJSONSource>;
export type UpdateCheckCLS = {
    value: number | null;
    previousValue?: number | undefined;
    source: UpdateCheckChecksResponse200ApplicationJSONSource;
};
export declare const UpdateCheckChecksResponse200ApplicationJSONResponseBodySource: {
    readonly WebVitals: "web-vitals";
};
export type UpdateCheckChecksResponse200ApplicationJSONResponseBodySource = ClosedEnum<typeof UpdateCheckChecksResponse200ApplicationJSONResponseBodySource>;
export type UpdateCheckTBT = {
    value: number | null;
    previousValue?: number | undefined;
    source: UpdateCheckChecksResponse200ApplicationJSONResponseBodySource;
};
export declare const UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource: {
    readonly WebVitals: "web-vitals";
};
export type UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource = ClosedEnum<typeof UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource>;
export type UpdateCheckVirtualExperienceScore = {
    value: number | null;
    previousValue?: number | undefined;
    source: UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource;
};
export type UpdateCheckMetrics = {
    fcp: UpdateCheckFCP;
    lcp: UpdateCheckLCP;
    cls: UpdateCheckCLS;
    tbt: UpdateCheckTBT;
    virtualExperienceScore?: UpdateCheckVirtualExperienceScore | undefined;
};
export type UpdateCheckChecksOutput = {
    metrics?: UpdateCheckMetrics | undefined;
};
export type UpdateCheckResponseBody = {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    deploymentId: string;
    status: UpdateCheckChecksStatus;
    conclusion?: UpdateCheckChecksConclusion | undefined;
    externalId?: string | undefined;
    output?: UpdateCheckChecksOutput | undefined;
    completedAt?: number | undefined;
    path?: string | undefined;
    blocking: boolean;
    detailsUrl?: string | undefined;
    integrationId: string;
    startedAt?: number | undefined;
    rerequestable?: boolean | undefined;
};
/** @internal */
export declare const UpdateCheckStatus$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckStatus>;
/** @internal */
export declare const UpdateCheckStatus$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckStatus>;
/** @internal */
export declare const UpdateCheckConclusion$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckConclusion>;
/** @internal */
export declare const UpdateCheckConclusion$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckConclusion>;
/** @internal */
export declare const UpdateCheckSource$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckSource>;
/** @internal */
export declare const UpdateCheckSource$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckSource>;
/** @internal */
export declare const Fcp$inboundSchema: z.ZodType<Fcp, z.ZodTypeDef, unknown>;
/** @internal */
export type Fcp$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const Fcp$outboundSchema: z.ZodType<Fcp$Outbound, z.ZodTypeDef, Fcp>;
export declare function fcpToJSON(fcp: Fcp): string;
export declare function fcpFromJSON(jsonString: string): SafeParseResult<Fcp, SDKValidationError>;
/** @internal */
export declare const UpdateCheckChecksSource$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksSource>;
/** @internal */
export declare const UpdateCheckChecksSource$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksSource>;
/** @internal */
export declare const Lcp$inboundSchema: z.ZodType<Lcp, z.ZodTypeDef, unknown>;
/** @internal */
export type Lcp$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const Lcp$outboundSchema: z.ZodType<Lcp$Outbound, z.ZodTypeDef, Lcp>;
export declare function lcpToJSON(lcp: Lcp): string;
export declare function lcpFromJSON(jsonString: string): SafeParseResult<Lcp, SDKValidationError>;
/** @internal */
export declare const UpdateCheckChecksRequestSource$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksRequestSource>;
/** @internal */
export declare const UpdateCheckChecksRequestSource$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksRequestSource>;
/** @internal */
export declare const Cls$inboundSchema: z.ZodType<Cls, z.ZodTypeDef, unknown>;
/** @internal */
export type Cls$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const Cls$outboundSchema: z.ZodType<Cls$Outbound, z.ZodTypeDef, Cls>;
export declare function clsToJSON(cls: Cls): string;
export declare function clsFromJSON(jsonString: string): SafeParseResult<Cls, SDKValidationError>;
/** @internal */
export declare const UpdateCheckChecksRequestRequestBodySource$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksRequestRequestBodySource>;
/** @internal */
export declare const UpdateCheckChecksRequestRequestBodySource$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksRequestRequestBodySource>;
/** @internal */
export declare const Tbt$inboundSchema: z.ZodType<Tbt, z.ZodTypeDef, unknown>;
/** @internal */
export type Tbt$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const Tbt$outboundSchema: z.ZodType<Tbt$Outbound, z.ZodTypeDef, Tbt>;
export declare function tbtToJSON(tbt: Tbt): string;
export declare function tbtFromJSON(jsonString: string): SafeParseResult<Tbt, SDKValidationError>;
/** @internal */
export declare const UpdateCheckChecksRequestRequestBodyOutputSource$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksRequestRequestBodyOutputSource>;
/** @internal */
export declare const UpdateCheckChecksRequestRequestBodyOutputSource$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksRequestRequestBodyOutputSource>;
/** @internal */
export declare const VirtualExperienceScore$inboundSchema: z.ZodType<VirtualExperienceScore, z.ZodTypeDef, unknown>;
/** @internal */
export type VirtualExperienceScore$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const VirtualExperienceScore$outboundSchema: z.ZodType<VirtualExperienceScore$Outbound, z.ZodTypeDef, VirtualExperienceScore>;
export declare function virtualExperienceScoreToJSON(virtualExperienceScore: VirtualExperienceScore): string;
export declare function virtualExperienceScoreFromJSON(jsonString: string): SafeParseResult<VirtualExperienceScore, SDKValidationError>;
/** @internal */
export declare const Metrics$inboundSchema: z.ZodType<Metrics, z.ZodTypeDef, unknown>;
/** @internal */
export type Metrics$Outbound = {
    FCP: Fcp$Outbound;
    LCP: Lcp$Outbound;
    CLS: Cls$Outbound;
    TBT: Tbt$Outbound;
    virtualExperienceScore?: VirtualExperienceScore$Outbound | undefined;
};
/** @internal */
export declare const Metrics$outboundSchema: z.ZodType<Metrics$Outbound, z.ZodTypeDef, Metrics>;
export declare function metricsToJSON(metrics: Metrics): string;
export declare function metricsFromJSON(jsonString: string): SafeParseResult<Metrics, SDKValidationError>;
/** @internal */
export declare const UpdateCheckOutput$inboundSchema: z.ZodType<UpdateCheckOutput, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCheckOutput$Outbound = {
    metrics?: Metrics$Outbound | undefined;
};
/** @internal */
export declare const UpdateCheckOutput$outboundSchema: z.ZodType<UpdateCheckOutput$Outbound, z.ZodTypeDef, UpdateCheckOutput>;
export declare function updateCheckOutputToJSON(updateCheckOutput: UpdateCheckOutput): string;
export declare function updateCheckOutputFromJSON(jsonString: string): SafeParseResult<UpdateCheckOutput, SDKValidationError>;
/** @internal */
export declare const UpdateCheckRequestBody$inboundSchema: z.ZodType<UpdateCheckRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCheckRequestBody$Outbound = {
    name?: string | undefined;
    path?: string | undefined;
    status?: string | undefined;
    conclusion?: string | undefined;
    detailsUrl?: string | undefined;
    output?: UpdateCheckOutput$Outbound | undefined;
    externalId?: string | undefined;
};
/** @internal */
export declare const UpdateCheckRequestBody$outboundSchema: z.ZodType<UpdateCheckRequestBody$Outbound, z.ZodTypeDef, UpdateCheckRequestBody>;
export declare function updateCheckRequestBodyToJSON(updateCheckRequestBody: UpdateCheckRequestBody): string;
export declare function updateCheckRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateCheckRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateCheckRequest$inboundSchema: z.ZodType<UpdateCheckRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCheckRequest$Outbound = {
    deploymentId: string;
    checkId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: UpdateCheckRequestBody$Outbound;
};
/** @internal */
export declare const UpdateCheckRequest$outboundSchema: z.ZodType<UpdateCheckRequest$Outbound, z.ZodTypeDef, UpdateCheckRequest>;
export declare function updateCheckRequestToJSON(updateCheckRequest: UpdateCheckRequest): string;
export declare function updateCheckRequestFromJSON(jsonString: string): SafeParseResult<UpdateCheckRequest, SDKValidationError>;
/** @internal */
export declare const UpdateCheckChecksStatus$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksStatus>;
/** @internal */
export declare const UpdateCheckChecksStatus$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksStatus>;
/** @internal */
export declare const UpdateCheckChecksConclusion$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksConclusion>;
/** @internal */
export declare const UpdateCheckChecksConclusion$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksConclusion>;
/** @internal */
export declare const UpdateCheckChecksResponseSource$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksResponseSource>;
/** @internal */
export declare const UpdateCheckChecksResponseSource$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksResponseSource>;
/** @internal */
export declare const UpdateCheckFCP$inboundSchema: z.ZodType<UpdateCheckFCP, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCheckFCP$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const UpdateCheckFCP$outboundSchema: z.ZodType<UpdateCheckFCP$Outbound, z.ZodTypeDef, UpdateCheckFCP>;
export declare function updateCheckFCPToJSON(updateCheckFCP: UpdateCheckFCP): string;
export declare function updateCheckFCPFromJSON(jsonString: string): SafeParseResult<UpdateCheckFCP, SDKValidationError>;
/** @internal */
export declare const UpdateCheckChecksResponse200Source$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksResponse200Source>;
/** @internal */
export declare const UpdateCheckChecksResponse200Source$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksResponse200Source>;
/** @internal */
export declare const UpdateCheckLCP$inboundSchema: z.ZodType<UpdateCheckLCP, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCheckLCP$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const UpdateCheckLCP$outboundSchema: z.ZodType<UpdateCheckLCP$Outbound, z.ZodTypeDef, UpdateCheckLCP>;
export declare function updateCheckLCPToJSON(updateCheckLCP: UpdateCheckLCP): string;
export declare function updateCheckLCPFromJSON(jsonString: string): SafeParseResult<UpdateCheckLCP, SDKValidationError>;
/** @internal */
export declare const UpdateCheckChecksResponse200ApplicationJSONSource$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksResponse200ApplicationJSONSource>;
/** @internal */
export declare const UpdateCheckChecksResponse200ApplicationJSONSource$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksResponse200ApplicationJSONSource>;
/** @internal */
export declare const UpdateCheckCLS$inboundSchema: z.ZodType<UpdateCheckCLS, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCheckCLS$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const UpdateCheckCLS$outboundSchema: z.ZodType<UpdateCheckCLS$Outbound, z.ZodTypeDef, UpdateCheckCLS>;
export declare function updateCheckCLSToJSON(updateCheckCLS: UpdateCheckCLS): string;
export declare function updateCheckCLSFromJSON(jsonString: string): SafeParseResult<UpdateCheckCLS, SDKValidationError>;
/** @internal */
export declare const UpdateCheckChecksResponse200ApplicationJSONResponseBodySource$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksResponse200ApplicationJSONResponseBodySource>;
/** @internal */
export declare const UpdateCheckChecksResponse200ApplicationJSONResponseBodySource$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksResponse200ApplicationJSONResponseBodySource>;
/** @internal */
export declare const UpdateCheckTBT$inboundSchema: z.ZodType<UpdateCheckTBT, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCheckTBT$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const UpdateCheckTBT$outboundSchema: z.ZodType<UpdateCheckTBT$Outbound, z.ZodTypeDef, UpdateCheckTBT>;
export declare function updateCheckTBTToJSON(updateCheckTBT: UpdateCheckTBT): string;
export declare function updateCheckTBTFromJSON(jsonString: string): SafeParseResult<UpdateCheckTBT, SDKValidationError>;
/** @internal */
export declare const UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource$inboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource>;
/** @internal */
export declare const UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource$outboundSchema: z.ZodNativeEnum<typeof UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource>;
/** @internal */
export declare const UpdateCheckVirtualExperienceScore$inboundSchema: z.ZodType<UpdateCheckVirtualExperienceScore, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCheckVirtualExperienceScore$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const UpdateCheckVirtualExperienceScore$outboundSchema: z.ZodType<UpdateCheckVirtualExperienceScore$Outbound, z.ZodTypeDef, UpdateCheckVirtualExperienceScore>;
export declare function updateCheckVirtualExperienceScoreToJSON(updateCheckVirtualExperienceScore: UpdateCheckVirtualExperienceScore): string;
export declare function updateCheckVirtualExperienceScoreFromJSON(jsonString: string): SafeParseResult<UpdateCheckVirtualExperienceScore, SDKValidationError>;
/** @internal */
export declare const UpdateCheckMetrics$inboundSchema: z.ZodType<UpdateCheckMetrics, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCheckMetrics$Outbound = {
    FCP: UpdateCheckFCP$Outbound;
    LCP: UpdateCheckLCP$Outbound;
    CLS: UpdateCheckCLS$Outbound;
    TBT: UpdateCheckTBT$Outbound;
    virtualExperienceScore?: UpdateCheckVirtualExperienceScore$Outbound | undefined;
};
/** @internal */
export declare const UpdateCheckMetrics$outboundSchema: z.ZodType<UpdateCheckMetrics$Outbound, z.ZodTypeDef, UpdateCheckMetrics>;
export declare function updateCheckMetricsToJSON(updateCheckMetrics: UpdateCheckMetrics): string;
export declare function updateCheckMetricsFromJSON(jsonString: string): SafeParseResult<UpdateCheckMetrics, SDKValidationError>;
/** @internal */
export declare const UpdateCheckChecksOutput$inboundSchema: z.ZodType<UpdateCheckChecksOutput, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCheckChecksOutput$Outbound = {
    metrics?: UpdateCheckMetrics$Outbound | undefined;
};
/** @internal */
export declare const UpdateCheckChecksOutput$outboundSchema: z.ZodType<UpdateCheckChecksOutput$Outbound, z.ZodTypeDef, UpdateCheckChecksOutput>;
export declare function updateCheckChecksOutputToJSON(updateCheckChecksOutput: UpdateCheckChecksOutput): string;
export declare function updateCheckChecksOutputFromJSON(jsonString: string): SafeParseResult<UpdateCheckChecksOutput, SDKValidationError>;
/** @internal */
export declare const UpdateCheckResponseBody$inboundSchema: z.ZodType<UpdateCheckResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCheckResponseBody$Outbound = {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    deploymentId: string;
    status: string;
    conclusion?: string | undefined;
    externalId?: string | undefined;
    output?: UpdateCheckChecksOutput$Outbound | undefined;
    completedAt?: number | undefined;
    path?: string | undefined;
    blocking: boolean;
    detailsUrl?: string | undefined;
    integrationId: string;
    startedAt?: number | undefined;
    rerequestable?: boolean | undefined;
};
/** @internal */
export declare const UpdateCheckResponseBody$outboundSchema: z.ZodType<UpdateCheckResponseBody$Outbound, z.ZodTypeDef, UpdateCheckResponseBody>;
export declare function updateCheckResponseBodyToJSON(updateCheckResponseBody: UpdateCheckResponseBody): string;
export declare function updateCheckResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateCheckResponseBody, SDKValidationError>;
//# sourceMappingURL=updatecheckop.d.ts.map