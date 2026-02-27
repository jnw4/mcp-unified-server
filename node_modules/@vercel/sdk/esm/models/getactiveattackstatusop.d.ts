import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetActiveAttackStatusRequest = {
    projectId: string;
    since?: number | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type AnomalyAlerts = {
    atMinute: string;
    zscore: number;
    totalRequestsMinute: number;
    avgRequests: number;
    stddevRequests: number;
};
export type DdosAlerts = {
    atMinute: string;
    totalReqs: number;
};
export type AffectedHostMap = {
    anomalyAlerts?: {
        [k: string]: AnomalyAlerts;
    } | undefined;
    ddosAlerts?: {
        [k: string]: DdosAlerts;
    } | undefined;
};
export type Anomalies = {
    projectId: string;
    ownerId: string;
    startTime: number;
    endTime: number | null;
    atMinute: number;
    state?: string | undefined;
    affectedHostMap: {
        [k: string]: AffectedHostMap;
    };
};
export type GetActiveAttackStatusResponseBody2 = {
    anomalies: Array<Anomalies>;
};
export type GetActiveAttackStatusResponseBody1 = {};
export type GetActiveAttackStatusResponseBody = GetActiveAttackStatusResponseBody2 | GetActiveAttackStatusResponseBody1;
/** @internal */
export declare const GetActiveAttackStatusRequest$inboundSchema: z.ZodType<GetActiveAttackStatusRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetActiveAttackStatusRequest$Outbound = {
    projectId: string;
    since?: number | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetActiveAttackStatusRequest$outboundSchema: z.ZodType<GetActiveAttackStatusRequest$Outbound, z.ZodTypeDef, GetActiveAttackStatusRequest>;
export declare function getActiveAttackStatusRequestToJSON(getActiveAttackStatusRequest: GetActiveAttackStatusRequest): string;
export declare function getActiveAttackStatusRequestFromJSON(jsonString: string): SafeParseResult<GetActiveAttackStatusRequest, SDKValidationError>;
/** @internal */
export declare const AnomalyAlerts$inboundSchema: z.ZodType<AnomalyAlerts, z.ZodTypeDef, unknown>;
/** @internal */
export type AnomalyAlerts$Outbound = {
    at_minute: string;
    zscore: number;
    total_requests_minute: number;
    avg_requests: number;
    stddev_requests: number;
};
/** @internal */
export declare const AnomalyAlerts$outboundSchema: z.ZodType<AnomalyAlerts$Outbound, z.ZodTypeDef, AnomalyAlerts>;
export declare function anomalyAlertsToJSON(anomalyAlerts: AnomalyAlerts): string;
export declare function anomalyAlertsFromJSON(jsonString: string): SafeParseResult<AnomalyAlerts, SDKValidationError>;
/** @internal */
export declare const DdosAlerts$inboundSchema: z.ZodType<DdosAlerts, z.ZodTypeDef, unknown>;
/** @internal */
export type DdosAlerts$Outbound = {
    atMinute: string;
    totalReqs: number;
};
/** @internal */
export declare const DdosAlerts$outboundSchema: z.ZodType<DdosAlerts$Outbound, z.ZodTypeDef, DdosAlerts>;
export declare function ddosAlertsToJSON(ddosAlerts: DdosAlerts): string;
export declare function ddosAlertsFromJSON(jsonString: string): SafeParseResult<DdosAlerts, SDKValidationError>;
/** @internal */
export declare const AffectedHostMap$inboundSchema: z.ZodType<AffectedHostMap, z.ZodTypeDef, unknown>;
/** @internal */
export type AffectedHostMap$Outbound = {
    anomalyAlerts?: {
        [k: string]: AnomalyAlerts$Outbound;
    } | undefined;
    ddosAlerts?: {
        [k: string]: DdosAlerts$Outbound;
    } | undefined;
};
/** @internal */
export declare const AffectedHostMap$outboundSchema: z.ZodType<AffectedHostMap$Outbound, z.ZodTypeDef, AffectedHostMap>;
export declare function affectedHostMapToJSON(affectedHostMap: AffectedHostMap): string;
export declare function affectedHostMapFromJSON(jsonString: string): SafeParseResult<AffectedHostMap, SDKValidationError>;
/** @internal */
export declare const Anomalies$inboundSchema: z.ZodType<Anomalies, z.ZodTypeDef, unknown>;
/** @internal */
export type Anomalies$Outbound = {
    projectId: string;
    ownerId: string;
    startTime: number;
    endTime: number | null;
    atMinute: number;
    state?: string | undefined;
    affectedHostMap: {
        [k: string]: AffectedHostMap$Outbound;
    };
};
/** @internal */
export declare const Anomalies$outboundSchema: z.ZodType<Anomalies$Outbound, z.ZodTypeDef, Anomalies>;
export declare function anomaliesToJSON(anomalies: Anomalies): string;
export declare function anomaliesFromJSON(jsonString: string): SafeParseResult<Anomalies, SDKValidationError>;
/** @internal */
export declare const GetActiveAttackStatusResponseBody2$inboundSchema: z.ZodType<GetActiveAttackStatusResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetActiveAttackStatusResponseBody2$Outbound = {
    anomalies: Array<Anomalies$Outbound>;
};
/** @internal */
export declare const GetActiveAttackStatusResponseBody2$outboundSchema: z.ZodType<GetActiveAttackStatusResponseBody2$Outbound, z.ZodTypeDef, GetActiveAttackStatusResponseBody2>;
export declare function getActiveAttackStatusResponseBody2ToJSON(getActiveAttackStatusResponseBody2: GetActiveAttackStatusResponseBody2): string;
export declare function getActiveAttackStatusResponseBody2FromJSON(jsonString: string): SafeParseResult<GetActiveAttackStatusResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetActiveAttackStatusResponseBody1$inboundSchema: z.ZodType<GetActiveAttackStatusResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetActiveAttackStatusResponseBody1$Outbound = {};
/** @internal */
export declare const GetActiveAttackStatusResponseBody1$outboundSchema: z.ZodType<GetActiveAttackStatusResponseBody1$Outbound, z.ZodTypeDef, GetActiveAttackStatusResponseBody1>;
export declare function getActiveAttackStatusResponseBody1ToJSON(getActiveAttackStatusResponseBody1: GetActiveAttackStatusResponseBody1): string;
export declare function getActiveAttackStatusResponseBody1FromJSON(jsonString: string): SafeParseResult<GetActiveAttackStatusResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetActiveAttackStatusResponseBody$inboundSchema: z.ZodType<GetActiveAttackStatusResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetActiveAttackStatusResponseBody$Outbound = GetActiveAttackStatusResponseBody2$Outbound | GetActiveAttackStatusResponseBody1$Outbound;
/** @internal */
export declare const GetActiveAttackStatusResponseBody$outboundSchema: z.ZodType<GetActiveAttackStatusResponseBody$Outbound, z.ZodTypeDef, GetActiveAttackStatusResponseBody>;
export declare function getActiveAttackStatusResponseBodyToJSON(getActiveAttackStatusResponseBody: GetActiveAttackStatusResponseBody): string;
export declare function getActiveAttackStatusResponseBodyFromJSON(jsonString: string): SafeParseResult<GetActiveAttackStatusResponseBody, SDKValidationError>;
//# sourceMappingURL=getactiveattackstatusop.d.ts.map