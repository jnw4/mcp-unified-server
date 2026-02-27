import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetCheckRequest = {
    /**
     * The deployment to get the check for.
     */
    deploymentId: string;
    /**
     * The check to fetch
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
};
export declare const GetCheckStatus: {
    readonly Running: "running";
    readonly Completed: "completed";
    readonly Registered: "registered";
};
export type GetCheckStatus = ClosedEnum<typeof GetCheckStatus>;
export declare const GetCheckConclusion: {
    readonly Canceled: "canceled";
    readonly Skipped: "skipped";
    readonly Failed: "failed";
    readonly Neutral: "neutral";
    readonly Succeeded: "succeeded";
    readonly Stale: "stale";
};
export type GetCheckConclusion = ClosedEnum<typeof GetCheckConclusion>;
export declare const GetCheckSource: {
    readonly WebVitals: "web-vitals";
};
export type GetCheckSource = ClosedEnum<typeof GetCheckSource>;
export type GetCheckFCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetCheckSource;
};
export declare const GetCheckChecksSource: {
    readonly WebVitals: "web-vitals";
};
export type GetCheckChecksSource = ClosedEnum<typeof GetCheckChecksSource>;
export type GetCheckLCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetCheckChecksSource;
};
export declare const GetCheckChecksResponseSource: {
    readonly WebVitals: "web-vitals";
};
export type GetCheckChecksResponseSource = ClosedEnum<typeof GetCheckChecksResponseSource>;
export type GetCheckCLS = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetCheckChecksResponseSource;
};
export declare const GetCheckChecksResponse200Source: {
    readonly WebVitals: "web-vitals";
};
export type GetCheckChecksResponse200Source = ClosedEnum<typeof GetCheckChecksResponse200Source>;
export type GetCheckTBT = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetCheckChecksResponse200Source;
};
export declare const GetCheckChecksResponse200ApplicationJSONSource: {
    readonly WebVitals: "web-vitals";
};
export type GetCheckChecksResponse200ApplicationJSONSource = ClosedEnum<typeof GetCheckChecksResponse200ApplicationJSONSource>;
export type GetCheckVirtualExperienceScore = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetCheckChecksResponse200ApplicationJSONSource;
};
export type GetCheckMetrics = {
    fcp: GetCheckFCP;
    lcp: GetCheckLCP;
    cls: GetCheckCLS;
    tbt: GetCheckTBT;
    virtualExperienceScore?: GetCheckVirtualExperienceScore | undefined;
};
export type GetCheckOutput = {
    metrics?: GetCheckMetrics | undefined;
};
export type GetCheckResponseBody = {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    deploymentId: string;
    status: GetCheckStatus;
    conclusion?: GetCheckConclusion | undefined;
    externalId?: string | undefined;
    output?: GetCheckOutput | undefined;
    completedAt?: number | undefined;
    path?: string | undefined;
    blocking: boolean;
    detailsUrl?: string | undefined;
    integrationId: string;
    startedAt?: number | undefined;
    rerequestable?: boolean | undefined;
};
/** @internal */
export declare const GetCheckRequest$inboundSchema: z.ZodType<GetCheckRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCheckRequest$Outbound = {
    deploymentId: string;
    checkId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetCheckRequest$outboundSchema: z.ZodType<GetCheckRequest$Outbound, z.ZodTypeDef, GetCheckRequest>;
export declare function getCheckRequestToJSON(getCheckRequest: GetCheckRequest): string;
export declare function getCheckRequestFromJSON(jsonString: string): SafeParseResult<GetCheckRequest, SDKValidationError>;
/** @internal */
export declare const GetCheckStatus$inboundSchema: z.ZodNativeEnum<typeof GetCheckStatus>;
/** @internal */
export declare const GetCheckStatus$outboundSchema: z.ZodNativeEnum<typeof GetCheckStatus>;
/** @internal */
export declare const GetCheckConclusion$inboundSchema: z.ZodNativeEnum<typeof GetCheckConclusion>;
/** @internal */
export declare const GetCheckConclusion$outboundSchema: z.ZodNativeEnum<typeof GetCheckConclusion>;
/** @internal */
export declare const GetCheckSource$inboundSchema: z.ZodNativeEnum<typeof GetCheckSource>;
/** @internal */
export declare const GetCheckSource$outboundSchema: z.ZodNativeEnum<typeof GetCheckSource>;
/** @internal */
export declare const GetCheckFCP$inboundSchema: z.ZodType<GetCheckFCP, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCheckFCP$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const GetCheckFCP$outboundSchema: z.ZodType<GetCheckFCP$Outbound, z.ZodTypeDef, GetCheckFCP>;
export declare function getCheckFCPToJSON(getCheckFCP: GetCheckFCP): string;
export declare function getCheckFCPFromJSON(jsonString: string): SafeParseResult<GetCheckFCP, SDKValidationError>;
/** @internal */
export declare const GetCheckChecksSource$inboundSchema: z.ZodNativeEnum<typeof GetCheckChecksSource>;
/** @internal */
export declare const GetCheckChecksSource$outboundSchema: z.ZodNativeEnum<typeof GetCheckChecksSource>;
/** @internal */
export declare const GetCheckLCP$inboundSchema: z.ZodType<GetCheckLCP, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCheckLCP$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const GetCheckLCP$outboundSchema: z.ZodType<GetCheckLCP$Outbound, z.ZodTypeDef, GetCheckLCP>;
export declare function getCheckLCPToJSON(getCheckLCP: GetCheckLCP): string;
export declare function getCheckLCPFromJSON(jsonString: string): SafeParseResult<GetCheckLCP, SDKValidationError>;
/** @internal */
export declare const GetCheckChecksResponseSource$inboundSchema: z.ZodNativeEnum<typeof GetCheckChecksResponseSource>;
/** @internal */
export declare const GetCheckChecksResponseSource$outboundSchema: z.ZodNativeEnum<typeof GetCheckChecksResponseSource>;
/** @internal */
export declare const GetCheckCLS$inboundSchema: z.ZodType<GetCheckCLS, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCheckCLS$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const GetCheckCLS$outboundSchema: z.ZodType<GetCheckCLS$Outbound, z.ZodTypeDef, GetCheckCLS>;
export declare function getCheckCLSToJSON(getCheckCLS: GetCheckCLS): string;
export declare function getCheckCLSFromJSON(jsonString: string): SafeParseResult<GetCheckCLS, SDKValidationError>;
/** @internal */
export declare const GetCheckChecksResponse200Source$inboundSchema: z.ZodNativeEnum<typeof GetCheckChecksResponse200Source>;
/** @internal */
export declare const GetCheckChecksResponse200Source$outboundSchema: z.ZodNativeEnum<typeof GetCheckChecksResponse200Source>;
/** @internal */
export declare const GetCheckTBT$inboundSchema: z.ZodType<GetCheckTBT, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCheckTBT$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const GetCheckTBT$outboundSchema: z.ZodType<GetCheckTBT$Outbound, z.ZodTypeDef, GetCheckTBT>;
export declare function getCheckTBTToJSON(getCheckTBT: GetCheckTBT): string;
export declare function getCheckTBTFromJSON(jsonString: string): SafeParseResult<GetCheckTBT, SDKValidationError>;
/** @internal */
export declare const GetCheckChecksResponse200ApplicationJSONSource$inboundSchema: z.ZodNativeEnum<typeof GetCheckChecksResponse200ApplicationJSONSource>;
/** @internal */
export declare const GetCheckChecksResponse200ApplicationJSONSource$outboundSchema: z.ZodNativeEnum<typeof GetCheckChecksResponse200ApplicationJSONSource>;
/** @internal */
export declare const GetCheckVirtualExperienceScore$inboundSchema: z.ZodType<GetCheckVirtualExperienceScore, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCheckVirtualExperienceScore$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const GetCheckVirtualExperienceScore$outboundSchema: z.ZodType<GetCheckVirtualExperienceScore$Outbound, z.ZodTypeDef, GetCheckVirtualExperienceScore>;
export declare function getCheckVirtualExperienceScoreToJSON(getCheckVirtualExperienceScore: GetCheckVirtualExperienceScore): string;
export declare function getCheckVirtualExperienceScoreFromJSON(jsonString: string): SafeParseResult<GetCheckVirtualExperienceScore, SDKValidationError>;
/** @internal */
export declare const GetCheckMetrics$inboundSchema: z.ZodType<GetCheckMetrics, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCheckMetrics$Outbound = {
    FCP: GetCheckFCP$Outbound;
    LCP: GetCheckLCP$Outbound;
    CLS: GetCheckCLS$Outbound;
    TBT: GetCheckTBT$Outbound;
    virtualExperienceScore?: GetCheckVirtualExperienceScore$Outbound | undefined;
};
/** @internal */
export declare const GetCheckMetrics$outboundSchema: z.ZodType<GetCheckMetrics$Outbound, z.ZodTypeDef, GetCheckMetrics>;
export declare function getCheckMetricsToJSON(getCheckMetrics: GetCheckMetrics): string;
export declare function getCheckMetricsFromJSON(jsonString: string): SafeParseResult<GetCheckMetrics, SDKValidationError>;
/** @internal */
export declare const GetCheckOutput$inboundSchema: z.ZodType<GetCheckOutput, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCheckOutput$Outbound = {
    metrics?: GetCheckMetrics$Outbound | undefined;
};
/** @internal */
export declare const GetCheckOutput$outboundSchema: z.ZodType<GetCheckOutput$Outbound, z.ZodTypeDef, GetCheckOutput>;
export declare function getCheckOutputToJSON(getCheckOutput: GetCheckOutput): string;
export declare function getCheckOutputFromJSON(jsonString: string): SafeParseResult<GetCheckOutput, SDKValidationError>;
/** @internal */
export declare const GetCheckResponseBody$inboundSchema: z.ZodType<GetCheckResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCheckResponseBody$Outbound = {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    deploymentId: string;
    status: string;
    conclusion?: string | undefined;
    externalId?: string | undefined;
    output?: GetCheckOutput$Outbound | undefined;
    completedAt?: number | undefined;
    path?: string | undefined;
    blocking: boolean;
    detailsUrl?: string | undefined;
    integrationId: string;
    startedAt?: number | undefined;
    rerequestable?: boolean | undefined;
};
/** @internal */
export declare const GetCheckResponseBody$outboundSchema: z.ZodType<GetCheckResponseBody$Outbound, z.ZodTypeDef, GetCheckResponseBody>;
export declare function getCheckResponseBodyToJSON(getCheckResponseBody: GetCheckResponseBody): string;
export declare function getCheckResponseBodyFromJSON(jsonString: string): SafeParseResult<GetCheckResponseBody, SDKValidationError>;
//# sourceMappingURL=getcheckop.d.ts.map