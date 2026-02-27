import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetAllChecksRequest = {
    /**
     * The deployment to get all checks for
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
};
export declare const GetAllChecksConclusion: {
    readonly Canceled: "canceled";
    readonly Skipped: "skipped";
    readonly Failed: "failed";
    readonly Neutral: "neutral";
    readonly Succeeded: "succeeded";
    readonly Stale: "stale";
};
export type GetAllChecksConclusion = ClosedEnum<typeof GetAllChecksConclusion>;
export declare const GetAllChecksSource: {
    readonly WebVitals: "web-vitals";
};
export type GetAllChecksSource = ClosedEnum<typeof GetAllChecksSource>;
export type GetAllChecksFCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetAllChecksSource;
};
export declare const GetAllChecksChecksSource: {
    readonly WebVitals: "web-vitals";
};
export type GetAllChecksChecksSource = ClosedEnum<typeof GetAllChecksChecksSource>;
export type GetAllChecksLCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetAllChecksChecksSource;
};
export declare const GetAllChecksChecksResponseSource: {
    readonly WebVitals: "web-vitals";
};
export type GetAllChecksChecksResponseSource = ClosedEnum<typeof GetAllChecksChecksResponseSource>;
export type GetAllChecksCLS = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetAllChecksChecksResponseSource;
};
export declare const GetAllChecksChecksResponse200Source: {
    readonly WebVitals: "web-vitals";
};
export type GetAllChecksChecksResponse200Source = ClosedEnum<typeof GetAllChecksChecksResponse200Source>;
export type GetAllChecksTBT = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetAllChecksChecksResponse200Source;
};
export declare const GetAllChecksChecksResponse200ApplicationJSONSource: {
    readonly WebVitals: "web-vitals";
};
export type GetAllChecksChecksResponse200ApplicationJSONSource = ClosedEnum<typeof GetAllChecksChecksResponse200ApplicationJSONSource>;
export type GetAllChecksVirtualExperienceScore = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetAllChecksChecksResponse200ApplicationJSONSource;
};
export type GetAllChecksMetrics = {
    fcp: GetAllChecksFCP;
    lcp: GetAllChecksLCP;
    cls: GetAllChecksCLS;
    tbt: GetAllChecksTBT;
    virtualExperienceScore?: GetAllChecksVirtualExperienceScore | undefined;
};
export type GetAllChecksOutput = {
    metrics?: GetAllChecksMetrics | undefined;
};
export declare const GetAllChecksStatus: {
    readonly Running: "running";
    readonly Completed: "completed";
    readonly Registered: "registered";
};
export type GetAllChecksStatus = ClosedEnum<typeof GetAllChecksStatus>;
export type GetAllChecksChecks = {
    completedAt?: number | undefined;
    conclusion?: GetAllChecksConclusion | undefined;
    createdAt: number;
    detailsUrl?: string | undefined;
    id: string;
    integrationId: string;
    name: string;
    output?: GetAllChecksOutput | undefined;
    path?: string | undefined;
    rerequestable: boolean;
    blocking: boolean;
    startedAt?: number | undefined;
    status: GetAllChecksStatus;
    updatedAt: number;
};
export type GetAllChecksResponseBody = {
    checks: Array<GetAllChecksChecks>;
};
/** @internal */
export declare const GetAllChecksRequest$inboundSchema: z.ZodType<GetAllChecksRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllChecksRequest$Outbound = {
    deploymentId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetAllChecksRequest$outboundSchema: z.ZodType<GetAllChecksRequest$Outbound, z.ZodTypeDef, GetAllChecksRequest>;
export declare function getAllChecksRequestToJSON(getAllChecksRequest: GetAllChecksRequest): string;
export declare function getAllChecksRequestFromJSON(jsonString: string): SafeParseResult<GetAllChecksRequest, SDKValidationError>;
/** @internal */
export declare const GetAllChecksConclusion$inboundSchema: z.ZodNativeEnum<typeof GetAllChecksConclusion>;
/** @internal */
export declare const GetAllChecksConclusion$outboundSchema: z.ZodNativeEnum<typeof GetAllChecksConclusion>;
/** @internal */
export declare const GetAllChecksSource$inboundSchema: z.ZodNativeEnum<typeof GetAllChecksSource>;
/** @internal */
export declare const GetAllChecksSource$outboundSchema: z.ZodNativeEnum<typeof GetAllChecksSource>;
/** @internal */
export declare const GetAllChecksFCP$inboundSchema: z.ZodType<GetAllChecksFCP, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllChecksFCP$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const GetAllChecksFCP$outboundSchema: z.ZodType<GetAllChecksFCP$Outbound, z.ZodTypeDef, GetAllChecksFCP>;
export declare function getAllChecksFCPToJSON(getAllChecksFCP: GetAllChecksFCP): string;
export declare function getAllChecksFCPFromJSON(jsonString: string): SafeParseResult<GetAllChecksFCP, SDKValidationError>;
/** @internal */
export declare const GetAllChecksChecksSource$inboundSchema: z.ZodNativeEnum<typeof GetAllChecksChecksSource>;
/** @internal */
export declare const GetAllChecksChecksSource$outboundSchema: z.ZodNativeEnum<typeof GetAllChecksChecksSource>;
/** @internal */
export declare const GetAllChecksLCP$inboundSchema: z.ZodType<GetAllChecksLCP, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllChecksLCP$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const GetAllChecksLCP$outboundSchema: z.ZodType<GetAllChecksLCP$Outbound, z.ZodTypeDef, GetAllChecksLCP>;
export declare function getAllChecksLCPToJSON(getAllChecksLCP: GetAllChecksLCP): string;
export declare function getAllChecksLCPFromJSON(jsonString: string): SafeParseResult<GetAllChecksLCP, SDKValidationError>;
/** @internal */
export declare const GetAllChecksChecksResponseSource$inboundSchema: z.ZodNativeEnum<typeof GetAllChecksChecksResponseSource>;
/** @internal */
export declare const GetAllChecksChecksResponseSource$outboundSchema: z.ZodNativeEnum<typeof GetAllChecksChecksResponseSource>;
/** @internal */
export declare const GetAllChecksCLS$inboundSchema: z.ZodType<GetAllChecksCLS, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllChecksCLS$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const GetAllChecksCLS$outboundSchema: z.ZodType<GetAllChecksCLS$Outbound, z.ZodTypeDef, GetAllChecksCLS>;
export declare function getAllChecksCLSToJSON(getAllChecksCLS: GetAllChecksCLS): string;
export declare function getAllChecksCLSFromJSON(jsonString: string): SafeParseResult<GetAllChecksCLS, SDKValidationError>;
/** @internal */
export declare const GetAllChecksChecksResponse200Source$inboundSchema: z.ZodNativeEnum<typeof GetAllChecksChecksResponse200Source>;
/** @internal */
export declare const GetAllChecksChecksResponse200Source$outboundSchema: z.ZodNativeEnum<typeof GetAllChecksChecksResponse200Source>;
/** @internal */
export declare const GetAllChecksTBT$inboundSchema: z.ZodType<GetAllChecksTBT, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllChecksTBT$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const GetAllChecksTBT$outboundSchema: z.ZodType<GetAllChecksTBT$Outbound, z.ZodTypeDef, GetAllChecksTBT>;
export declare function getAllChecksTBTToJSON(getAllChecksTBT: GetAllChecksTBT): string;
export declare function getAllChecksTBTFromJSON(jsonString: string): SafeParseResult<GetAllChecksTBT, SDKValidationError>;
/** @internal */
export declare const GetAllChecksChecksResponse200ApplicationJSONSource$inboundSchema: z.ZodNativeEnum<typeof GetAllChecksChecksResponse200ApplicationJSONSource>;
/** @internal */
export declare const GetAllChecksChecksResponse200ApplicationJSONSource$outboundSchema: z.ZodNativeEnum<typeof GetAllChecksChecksResponse200ApplicationJSONSource>;
/** @internal */
export declare const GetAllChecksVirtualExperienceScore$inboundSchema: z.ZodType<GetAllChecksVirtualExperienceScore, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllChecksVirtualExperienceScore$Outbound = {
    value: number | null;
    previousValue?: number | undefined;
    source: string;
};
/** @internal */
export declare const GetAllChecksVirtualExperienceScore$outboundSchema: z.ZodType<GetAllChecksVirtualExperienceScore$Outbound, z.ZodTypeDef, GetAllChecksVirtualExperienceScore>;
export declare function getAllChecksVirtualExperienceScoreToJSON(getAllChecksVirtualExperienceScore: GetAllChecksVirtualExperienceScore): string;
export declare function getAllChecksVirtualExperienceScoreFromJSON(jsonString: string): SafeParseResult<GetAllChecksVirtualExperienceScore, SDKValidationError>;
/** @internal */
export declare const GetAllChecksMetrics$inboundSchema: z.ZodType<GetAllChecksMetrics, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllChecksMetrics$Outbound = {
    FCP: GetAllChecksFCP$Outbound;
    LCP: GetAllChecksLCP$Outbound;
    CLS: GetAllChecksCLS$Outbound;
    TBT: GetAllChecksTBT$Outbound;
    virtualExperienceScore?: GetAllChecksVirtualExperienceScore$Outbound | undefined;
};
/** @internal */
export declare const GetAllChecksMetrics$outboundSchema: z.ZodType<GetAllChecksMetrics$Outbound, z.ZodTypeDef, GetAllChecksMetrics>;
export declare function getAllChecksMetricsToJSON(getAllChecksMetrics: GetAllChecksMetrics): string;
export declare function getAllChecksMetricsFromJSON(jsonString: string): SafeParseResult<GetAllChecksMetrics, SDKValidationError>;
/** @internal */
export declare const GetAllChecksOutput$inboundSchema: z.ZodType<GetAllChecksOutput, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllChecksOutput$Outbound = {
    metrics?: GetAllChecksMetrics$Outbound | undefined;
};
/** @internal */
export declare const GetAllChecksOutput$outboundSchema: z.ZodType<GetAllChecksOutput$Outbound, z.ZodTypeDef, GetAllChecksOutput>;
export declare function getAllChecksOutputToJSON(getAllChecksOutput: GetAllChecksOutput): string;
export declare function getAllChecksOutputFromJSON(jsonString: string): SafeParseResult<GetAllChecksOutput, SDKValidationError>;
/** @internal */
export declare const GetAllChecksStatus$inboundSchema: z.ZodNativeEnum<typeof GetAllChecksStatus>;
/** @internal */
export declare const GetAllChecksStatus$outboundSchema: z.ZodNativeEnum<typeof GetAllChecksStatus>;
/** @internal */
export declare const GetAllChecksChecks$inboundSchema: z.ZodType<GetAllChecksChecks, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllChecksChecks$Outbound = {
    completedAt?: number | undefined;
    conclusion?: string | undefined;
    createdAt: number;
    detailsUrl?: string | undefined;
    id: string;
    integrationId: string;
    name: string;
    output?: GetAllChecksOutput$Outbound | undefined;
    path?: string | undefined;
    rerequestable: boolean;
    blocking: boolean;
    startedAt?: number | undefined;
    status: string;
    updatedAt: number;
};
/** @internal */
export declare const GetAllChecksChecks$outboundSchema: z.ZodType<GetAllChecksChecks$Outbound, z.ZodTypeDef, GetAllChecksChecks>;
export declare function getAllChecksChecksToJSON(getAllChecksChecks: GetAllChecksChecks): string;
export declare function getAllChecksChecksFromJSON(jsonString: string): SafeParseResult<GetAllChecksChecks, SDKValidationError>;
/** @internal */
export declare const GetAllChecksResponseBody$inboundSchema: z.ZodType<GetAllChecksResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllChecksResponseBody$Outbound = {
    checks: Array<GetAllChecksChecks$Outbound>;
};
/** @internal */
export declare const GetAllChecksResponseBody$outboundSchema: z.ZodType<GetAllChecksResponseBody$Outbound, z.ZodTypeDef, GetAllChecksResponseBody>;
export declare function getAllChecksResponseBodyToJSON(getAllChecksResponseBody: GetAllChecksResponseBody): string;
export declare function getAllChecksResponseBodyFromJSON(jsonString: string): SafeParseResult<GetAllChecksResponseBody, SDKValidationError>;
//# sourceMappingURL=getallchecksop.d.ts.map