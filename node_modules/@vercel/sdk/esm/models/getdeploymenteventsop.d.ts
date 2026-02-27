import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Order of the returned events based on the timestamp.
 */
export declare const Direction: {
    readonly Backward: "backward";
    readonly Forward: "forward";
};
/**
 * Order of the returned events based on the timestamp.
 */
export type Direction = ClosedEnum<typeof Direction>;
/**
 * HTTP status code range to filter events by.
 */
export type QueryParamStatusCode = number | string;
export type GetDeploymentEventsRequest = {
    /**
     * The unique identifier or hostname of the deployment.
     */
    idOrUrl: string;
    /**
     * Order of the returned events based on the timestamp.
     */
    direction?: Direction | undefined;
    /**
     * When enabled, this endpoint will return live events as they happen.
     */
    follow?: number | undefined;
    /**
     * Maximum number of events to return. Provide `-1` to return all available logs.
     */
    limit?: number | undefined;
    /**
     * Deployment build ID.
     */
    name?: string | undefined;
    /**
     * Timestamp for when build logs should be pulled from.
     */
    since?: number | undefined;
    /**
     * Timestamp for when the build logs should be pulled up until.
     */
    until?: number | undefined;
    /**
     * HTTP status code range to filter events by.
     */
    statusCode?: number | string | undefined;
    delimiter?: number | undefined;
    builds?: number | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type ResponseBodyInfo = {
    type: string;
    name: string;
    entrypoint?: string | undefined;
    path?: string | undefined;
    step?: string | undefined;
    readyState?: string | undefined;
};
export declare const GetDeploymentEventsResponseBodyDeploymentsType: {
    readonly Delimiter: "delimiter";
    readonly Command: "command";
    readonly Stdout: "stdout";
    readonly Stderr: "stderr";
    readonly Exit: "exit";
    readonly DeploymentState: "deployment-state";
    readonly Middleware: "middleware";
    readonly MiddlewareInvocation: "middleware-invocation";
    readonly EdgeFunctionInvocation: "edge-function-invocation";
    readonly Metric: "metric";
    readonly Report: "report";
    readonly Fatal: "fatal";
};
export type GetDeploymentEventsResponseBodyDeploymentsType = ClosedEnum<typeof GetDeploymentEventsResponseBodyDeploymentsType>;
export declare const ResponseBodyLevel: {
    readonly Error: "error";
    readonly Warning: "warning";
};
export type ResponseBodyLevel = ClosedEnum<typeof ResponseBodyLevel>;
export type GetDeploymentEventsResponseBodyDeployments2 = {
    created: number;
    date: number;
    deploymentId: string;
    id: string;
    info: ResponseBodyInfo;
    serial: string;
    text?: string | undefined;
    type: GetDeploymentEventsResponseBodyDeploymentsType;
    level?: ResponseBodyLevel | undefined;
};
export declare const GetDeploymentEventsResponseBodyType: {
    readonly Delimiter: "delimiter";
    readonly Command: "command";
    readonly Stdout: "stdout";
    readonly Stderr: "stderr";
    readonly Exit: "exit";
    readonly DeploymentState: "deployment-state";
    readonly Middleware: "middleware";
    readonly MiddlewareInvocation: "middleware-invocation";
    readonly EdgeFunctionInvocation: "edge-function-invocation";
    readonly Metric: "metric";
    readonly Report: "report";
    readonly Fatal: "fatal";
};
export type GetDeploymentEventsResponseBodyType = ClosedEnum<typeof GetDeploymentEventsResponseBodyType>;
export type GetDeploymentEventsResponseBodyInfo = {
    type: string;
    name: string;
    entrypoint?: string | undefined;
    path?: string | undefined;
    step?: string | undefined;
    readyState?: string | undefined;
};
export declare const ResponseBodyVercelCache: {
    readonly Miss: "MISS";
    readonly Hit: "HIT";
    readonly Stale: "STALE";
    readonly Bypass: "BYPASS";
    readonly Prerender: "PRERENDER";
    readonly Revalidated: "REVALIDATED";
};
export type ResponseBodyVercelCache = ClosedEnum<typeof ResponseBodyVercelCache>;
export declare const ResponseBodyWafAction: {
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly Deny: "deny";
    readonly Bypass: "bypass";
    readonly RateLimit: "rate_limit";
};
export type ResponseBodyWafAction = ClosedEnum<typeof ResponseBodyWafAction>;
export type ResponseBodyProxy = {
    timestamp: number;
    method: string;
    host: string;
    path: string;
    statusCode?: number | undefined;
    userAgent: Array<string>;
    referer: string;
    clientIp?: string | undefined;
    region: string;
    scheme?: string | undefined;
    responseByteSize?: number | undefined;
    cacheId?: string | undefined;
    pathType?: string | undefined;
    pathTypeVariant?: string | undefined;
    vercelId?: string | undefined;
    vercelCache?: ResponseBodyVercelCache | undefined;
    lambdaRegion?: string | undefined;
    wafAction?: ResponseBodyWafAction | undefined;
    wafRuleId?: string | undefined;
};
export type ResponseBodyPayload = {
    deploymentId: string;
    info?: GetDeploymentEventsResponseBodyInfo | undefined;
    text?: string | undefined;
    id: string;
    date: number;
    serial: string;
    created?: number | undefined;
    statusCode?: number | undefined;
    requestId?: string | undefined;
    proxy?: ResponseBodyProxy | undefined;
};
export type GetDeploymentEventsResponseBodyDeployments1 = {
    type: GetDeploymentEventsResponseBodyType;
    created: number;
    payload: ResponseBodyPayload;
};
export type GetDeploymentEventsResponseBody = GetDeploymentEventsResponseBodyDeployments2 | GetDeploymentEventsResponseBodyDeployments1;
export type Info = {
    type: string;
    name: string;
    entrypoint?: string | undefined;
    path?: string | undefined;
    step?: string | undefined;
    readyState?: string | undefined;
};
export declare const ResponseBodyType: {
    readonly Delimiter: "delimiter";
    readonly Command: "command";
    readonly Stdout: "stdout";
    readonly Stderr: "stderr";
    readonly Exit: "exit";
    readonly DeploymentState: "deployment-state";
    readonly Middleware: "middleware";
    readonly MiddlewareInvocation: "middleware-invocation";
    readonly EdgeFunctionInvocation: "edge-function-invocation";
    readonly Metric: "metric";
    readonly Report: "report";
    readonly Fatal: "fatal";
};
export type ResponseBodyType = ClosedEnum<typeof ResponseBodyType>;
export declare const GetDeploymentEventsResponseBodyLevel: {
    readonly Error: "error";
    readonly Warning: "warning";
};
export type GetDeploymentEventsResponseBodyLevel = ClosedEnum<typeof GetDeploymentEventsResponseBodyLevel>;
export type GetDeploymentEventsResponseBody2 = {
    created: number;
    date: number;
    deploymentId: string;
    id: string;
    info: Info;
    serial: string;
    text?: string | undefined;
    type: ResponseBodyType;
    level?: GetDeploymentEventsResponseBodyLevel | undefined;
};
export declare const GetDeploymentEventsResponseBodyDeploymentsResponseType: {
    readonly Delimiter: "delimiter";
    readonly Command: "command";
    readonly Stdout: "stdout";
    readonly Stderr: "stderr";
    readonly Exit: "exit";
    readonly DeploymentState: "deployment-state";
    readonly Middleware: "middleware";
    readonly MiddlewareInvocation: "middleware-invocation";
    readonly EdgeFunctionInvocation: "edge-function-invocation";
    readonly Metric: "metric";
    readonly Report: "report";
    readonly Fatal: "fatal";
};
export type GetDeploymentEventsResponseBodyDeploymentsResponseType = ClosedEnum<typeof GetDeploymentEventsResponseBodyDeploymentsResponseType>;
export type GetDeploymentEventsResponseBodyDeploymentsInfo = {
    type: string;
    name: string;
    entrypoint?: string | undefined;
    path?: string | undefined;
    step?: string | undefined;
    readyState?: string | undefined;
};
export declare const VercelCache: {
    readonly Miss: "MISS";
    readonly Hit: "HIT";
    readonly Stale: "STALE";
    readonly Bypass: "BYPASS";
    readonly Prerender: "PRERENDER";
    readonly Revalidated: "REVALIDATED";
};
export type VercelCache = ClosedEnum<typeof VercelCache>;
export declare const WafAction: {
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly Deny: "deny";
    readonly Bypass: "bypass";
    readonly RateLimit: "rate_limit";
};
export type WafAction = ClosedEnum<typeof WafAction>;
export type Proxy = {
    timestamp: number;
    method: string;
    host: string;
    path: string;
    statusCode?: number | undefined;
    userAgent: Array<string>;
    referer: string;
    clientIp?: string | undefined;
    region: string;
    scheme?: string | undefined;
    responseByteSize?: number | undefined;
    cacheId?: string | undefined;
    pathType?: string | undefined;
    pathTypeVariant?: string | undefined;
    vercelId?: string | undefined;
    vercelCache?: VercelCache | undefined;
    lambdaRegion?: string | undefined;
    wafAction?: WafAction | undefined;
    wafRuleId?: string | undefined;
};
export type GetDeploymentEventsResponseBodyPayload = {
    deploymentId: string;
    info?: GetDeploymentEventsResponseBodyDeploymentsInfo | undefined;
    text?: string | undefined;
    id: string;
    date: number;
    serial: string;
    created?: number | undefined;
    statusCode?: number | undefined;
    requestId?: string | undefined;
    proxy?: Proxy | undefined;
};
export type GetDeploymentEventsResponseBody1 = {
    type: GetDeploymentEventsResponseBodyDeploymentsResponseType;
    created: number;
    payload: GetDeploymentEventsResponseBodyPayload;
};
export type GetDeploymentEventsDeploymentsResponseBody = GetDeploymentEventsResponseBody2 | GetDeploymentEventsResponseBody1;
export type GetDeploymentEventsResponse = Array<GetDeploymentEventsResponseBody2 | GetDeploymentEventsResponseBody1 | null> | GetDeploymentEventsResponseBodyDeployments2 | GetDeploymentEventsResponseBodyDeployments1;
/** @internal */
export declare const Direction$inboundSchema: z.ZodNativeEnum<typeof Direction>;
/** @internal */
export declare const Direction$outboundSchema: z.ZodNativeEnum<typeof Direction>;
/** @internal */
export declare const QueryParamStatusCode$inboundSchema: z.ZodType<QueryParamStatusCode, z.ZodTypeDef, unknown>;
/** @internal */
export type QueryParamStatusCode$Outbound = number | string;
/** @internal */
export declare const QueryParamStatusCode$outboundSchema: z.ZodType<QueryParamStatusCode$Outbound, z.ZodTypeDef, QueryParamStatusCode>;
export declare function queryParamStatusCodeToJSON(queryParamStatusCode: QueryParamStatusCode): string;
export declare function queryParamStatusCodeFromJSON(jsonString: string): SafeParseResult<QueryParamStatusCode, SDKValidationError>;
/** @internal */
export declare const GetDeploymentEventsRequest$inboundSchema: z.ZodType<GetDeploymentEventsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentEventsRequest$Outbound = {
    idOrUrl: string;
    direction: string;
    follow?: number | undefined;
    limit?: number | undefined;
    name?: string | undefined;
    since?: number | undefined;
    until?: number | undefined;
    statusCode?: number | string | undefined;
    delimiter?: number | undefined;
    builds?: number | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetDeploymentEventsRequest$outboundSchema: z.ZodType<GetDeploymentEventsRequest$Outbound, z.ZodTypeDef, GetDeploymentEventsRequest>;
export declare function getDeploymentEventsRequestToJSON(getDeploymentEventsRequest: GetDeploymentEventsRequest): string;
export declare function getDeploymentEventsRequestFromJSON(jsonString: string): SafeParseResult<GetDeploymentEventsRequest, SDKValidationError>;
/** @internal */
export declare const ResponseBodyInfo$inboundSchema: z.ZodType<ResponseBodyInfo, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyInfo$Outbound = {
    type: string;
    name: string;
    entrypoint?: string | undefined;
    path?: string | undefined;
    step?: string | undefined;
    readyState?: string | undefined;
};
/** @internal */
export declare const ResponseBodyInfo$outboundSchema: z.ZodType<ResponseBodyInfo$Outbound, z.ZodTypeDef, ResponseBodyInfo>;
export declare function responseBodyInfoToJSON(responseBodyInfo: ResponseBodyInfo): string;
export declare function responseBodyInfoFromJSON(jsonString: string): SafeParseResult<ResponseBodyInfo, SDKValidationError>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyDeploymentsType$inboundSchema: z.ZodNativeEnum<typeof GetDeploymentEventsResponseBodyDeploymentsType>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyDeploymentsType$outboundSchema: z.ZodNativeEnum<typeof GetDeploymentEventsResponseBodyDeploymentsType>;
/** @internal */
export declare const ResponseBodyLevel$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyLevel>;
/** @internal */
export declare const ResponseBodyLevel$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyLevel>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyDeployments2$inboundSchema: z.ZodType<GetDeploymentEventsResponseBodyDeployments2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentEventsResponseBodyDeployments2$Outbound = {
    created: number;
    date: number;
    deploymentId: string;
    id: string;
    info: ResponseBodyInfo$Outbound;
    serial: string;
    text?: string | undefined;
    type: string;
    level?: string | undefined;
};
/** @internal */
export declare const GetDeploymentEventsResponseBodyDeployments2$outboundSchema: z.ZodType<GetDeploymentEventsResponseBodyDeployments2$Outbound, z.ZodTypeDef, GetDeploymentEventsResponseBodyDeployments2>;
export declare function getDeploymentEventsResponseBodyDeployments2ToJSON(getDeploymentEventsResponseBodyDeployments2: GetDeploymentEventsResponseBodyDeployments2): string;
export declare function getDeploymentEventsResponseBodyDeployments2FromJSON(jsonString: string): SafeParseResult<GetDeploymentEventsResponseBodyDeployments2, SDKValidationError>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof GetDeploymentEventsResponseBodyType>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof GetDeploymentEventsResponseBodyType>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyInfo$inboundSchema: z.ZodType<GetDeploymentEventsResponseBodyInfo, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentEventsResponseBodyInfo$Outbound = {
    type: string;
    name: string;
    entrypoint?: string | undefined;
    path?: string | undefined;
    step?: string | undefined;
    readyState?: string | undefined;
};
/** @internal */
export declare const GetDeploymentEventsResponseBodyInfo$outboundSchema: z.ZodType<GetDeploymentEventsResponseBodyInfo$Outbound, z.ZodTypeDef, GetDeploymentEventsResponseBodyInfo>;
export declare function getDeploymentEventsResponseBodyInfoToJSON(getDeploymentEventsResponseBodyInfo: GetDeploymentEventsResponseBodyInfo): string;
export declare function getDeploymentEventsResponseBodyInfoFromJSON(jsonString: string): SafeParseResult<GetDeploymentEventsResponseBodyInfo, SDKValidationError>;
/** @internal */
export declare const ResponseBodyVercelCache$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyVercelCache>;
/** @internal */
export declare const ResponseBodyVercelCache$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyVercelCache>;
/** @internal */
export declare const ResponseBodyWafAction$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyWafAction>;
/** @internal */
export declare const ResponseBodyWafAction$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyWafAction>;
/** @internal */
export declare const ResponseBodyProxy$inboundSchema: z.ZodType<ResponseBodyProxy, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyProxy$Outbound = {
    timestamp: number;
    method: string;
    host: string;
    path: string;
    statusCode?: number | undefined;
    userAgent: Array<string>;
    referer: string;
    clientIp?: string | undefined;
    region: string;
    scheme?: string | undefined;
    responseByteSize?: number | undefined;
    cacheId?: string | undefined;
    pathType?: string | undefined;
    pathTypeVariant?: string | undefined;
    vercelId?: string | undefined;
    vercelCache?: string | undefined;
    lambdaRegion?: string | undefined;
    wafAction?: string | undefined;
    wafRuleId?: string | undefined;
};
/** @internal */
export declare const ResponseBodyProxy$outboundSchema: z.ZodType<ResponseBodyProxy$Outbound, z.ZodTypeDef, ResponseBodyProxy>;
export declare function responseBodyProxyToJSON(responseBodyProxy: ResponseBodyProxy): string;
export declare function responseBodyProxyFromJSON(jsonString: string): SafeParseResult<ResponseBodyProxy, SDKValidationError>;
/** @internal */
export declare const ResponseBodyPayload$inboundSchema: z.ZodType<ResponseBodyPayload, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyPayload$Outbound = {
    deploymentId: string;
    info?: GetDeploymentEventsResponseBodyInfo$Outbound | undefined;
    text?: string | undefined;
    id: string;
    date: number;
    serial: string;
    created?: number | undefined;
    statusCode?: number | undefined;
    requestId?: string | undefined;
    proxy?: ResponseBodyProxy$Outbound | undefined;
};
/** @internal */
export declare const ResponseBodyPayload$outboundSchema: z.ZodType<ResponseBodyPayload$Outbound, z.ZodTypeDef, ResponseBodyPayload>;
export declare function responseBodyPayloadToJSON(responseBodyPayload: ResponseBodyPayload): string;
export declare function responseBodyPayloadFromJSON(jsonString: string): SafeParseResult<ResponseBodyPayload, SDKValidationError>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyDeployments1$inboundSchema: z.ZodType<GetDeploymentEventsResponseBodyDeployments1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentEventsResponseBodyDeployments1$Outbound = {
    type: string;
    created: number;
    payload: ResponseBodyPayload$Outbound;
};
/** @internal */
export declare const GetDeploymentEventsResponseBodyDeployments1$outboundSchema: z.ZodType<GetDeploymentEventsResponseBodyDeployments1$Outbound, z.ZodTypeDef, GetDeploymentEventsResponseBodyDeployments1>;
export declare function getDeploymentEventsResponseBodyDeployments1ToJSON(getDeploymentEventsResponseBodyDeployments1: GetDeploymentEventsResponseBodyDeployments1): string;
export declare function getDeploymentEventsResponseBodyDeployments1FromJSON(jsonString: string): SafeParseResult<GetDeploymentEventsResponseBodyDeployments1, SDKValidationError>;
/** @internal */
export declare const GetDeploymentEventsResponseBody$inboundSchema: z.ZodType<GetDeploymentEventsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentEventsResponseBody$Outbound = GetDeploymentEventsResponseBodyDeployments2$Outbound | GetDeploymentEventsResponseBodyDeployments1$Outbound;
/** @internal */
export declare const GetDeploymentEventsResponseBody$outboundSchema: z.ZodType<GetDeploymentEventsResponseBody$Outbound, z.ZodTypeDef, GetDeploymentEventsResponseBody>;
export declare function getDeploymentEventsResponseBodyToJSON(getDeploymentEventsResponseBody: GetDeploymentEventsResponseBody): string;
export declare function getDeploymentEventsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDeploymentEventsResponseBody, SDKValidationError>;
/** @internal */
export declare const Info$inboundSchema: z.ZodType<Info, z.ZodTypeDef, unknown>;
/** @internal */
export type Info$Outbound = {
    type: string;
    name: string;
    entrypoint?: string | undefined;
    path?: string | undefined;
    step?: string | undefined;
    readyState?: string | undefined;
};
/** @internal */
export declare const Info$outboundSchema: z.ZodType<Info$Outbound, z.ZodTypeDef, Info>;
export declare function infoToJSON(info: Info): string;
export declare function infoFromJSON(jsonString: string): SafeParseResult<Info, SDKValidationError>;
/** @internal */
export declare const ResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyType>;
/** @internal */
export declare const ResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyType>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyLevel$inboundSchema: z.ZodNativeEnum<typeof GetDeploymentEventsResponseBodyLevel>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyLevel$outboundSchema: z.ZodNativeEnum<typeof GetDeploymentEventsResponseBodyLevel>;
/** @internal */
export declare const GetDeploymentEventsResponseBody2$inboundSchema: z.ZodType<GetDeploymentEventsResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentEventsResponseBody2$Outbound = {
    created: number;
    date: number;
    deploymentId: string;
    id: string;
    info: Info$Outbound;
    serial: string;
    text?: string | undefined;
    type: string;
    level?: string | undefined;
};
/** @internal */
export declare const GetDeploymentEventsResponseBody2$outboundSchema: z.ZodType<GetDeploymentEventsResponseBody2$Outbound, z.ZodTypeDef, GetDeploymentEventsResponseBody2>;
export declare function getDeploymentEventsResponseBody2ToJSON(getDeploymentEventsResponseBody2: GetDeploymentEventsResponseBody2): string;
export declare function getDeploymentEventsResponseBody2FromJSON(jsonString: string): SafeParseResult<GetDeploymentEventsResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyDeploymentsResponseType$inboundSchema: z.ZodNativeEnum<typeof GetDeploymentEventsResponseBodyDeploymentsResponseType>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyDeploymentsResponseType$outboundSchema: z.ZodNativeEnum<typeof GetDeploymentEventsResponseBodyDeploymentsResponseType>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyDeploymentsInfo$inboundSchema: z.ZodType<GetDeploymentEventsResponseBodyDeploymentsInfo, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentEventsResponseBodyDeploymentsInfo$Outbound = {
    type: string;
    name: string;
    entrypoint?: string | undefined;
    path?: string | undefined;
    step?: string | undefined;
    readyState?: string | undefined;
};
/** @internal */
export declare const GetDeploymentEventsResponseBodyDeploymentsInfo$outboundSchema: z.ZodType<GetDeploymentEventsResponseBodyDeploymentsInfo$Outbound, z.ZodTypeDef, GetDeploymentEventsResponseBodyDeploymentsInfo>;
export declare function getDeploymentEventsResponseBodyDeploymentsInfoToJSON(getDeploymentEventsResponseBodyDeploymentsInfo: GetDeploymentEventsResponseBodyDeploymentsInfo): string;
export declare function getDeploymentEventsResponseBodyDeploymentsInfoFromJSON(jsonString: string): SafeParseResult<GetDeploymentEventsResponseBodyDeploymentsInfo, SDKValidationError>;
/** @internal */
export declare const VercelCache$inboundSchema: z.ZodNativeEnum<typeof VercelCache>;
/** @internal */
export declare const VercelCache$outboundSchema: z.ZodNativeEnum<typeof VercelCache>;
/** @internal */
export declare const WafAction$inboundSchema: z.ZodNativeEnum<typeof WafAction>;
/** @internal */
export declare const WafAction$outboundSchema: z.ZodNativeEnum<typeof WafAction>;
/** @internal */
export declare const Proxy$inboundSchema: z.ZodType<Proxy, z.ZodTypeDef, unknown>;
/** @internal */
export type Proxy$Outbound = {
    timestamp: number;
    method: string;
    host: string;
    path: string;
    statusCode?: number | undefined;
    userAgent: Array<string>;
    referer: string;
    clientIp?: string | undefined;
    region: string;
    scheme?: string | undefined;
    responseByteSize?: number | undefined;
    cacheId?: string | undefined;
    pathType?: string | undefined;
    pathTypeVariant?: string | undefined;
    vercelId?: string | undefined;
    vercelCache?: string | undefined;
    lambdaRegion?: string | undefined;
    wafAction?: string | undefined;
    wafRuleId?: string | undefined;
};
/** @internal */
export declare const Proxy$outboundSchema: z.ZodType<Proxy$Outbound, z.ZodTypeDef, Proxy>;
export declare function proxyToJSON(proxy: Proxy): string;
export declare function proxyFromJSON(jsonString: string): SafeParseResult<Proxy, SDKValidationError>;
/** @internal */
export declare const GetDeploymentEventsResponseBodyPayload$inboundSchema: z.ZodType<GetDeploymentEventsResponseBodyPayload, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentEventsResponseBodyPayload$Outbound = {
    deploymentId: string;
    info?: GetDeploymentEventsResponseBodyDeploymentsInfo$Outbound | undefined;
    text?: string | undefined;
    id: string;
    date: number;
    serial: string;
    created?: number | undefined;
    statusCode?: number | undefined;
    requestId?: string | undefined;
    proxy?: Proxy$Outbound | undefined;
};
/** @internal */
export declare const GetDeploymentEventsResponseBodyPayload$outboundSchema: z.ZodType<GetDeploymentEventsResponseBodyPayload$Outbound, z.ZodTypeDef, GetDeploymentEventsResponseBodyPayload>;
export declare function getDeploymentEventsResponseBodyPayloadToJSON(getDeploymentEventsResponseBodyPayload: GetDeploymentEventsResponseBodyPayload): string;
export declare function getDeploymentEventsResponseBodyPayloadFromJSON(jsonString: string): SafeParseResult<GetDeploymentEventsResponseBodyPayload, SDKValidationError>;
/** @internal */
export declare const GetDeploymentEventsResponseBody1$inboundSchema: z.ZodType<GetDeploymentEventsResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentEventsResponseBody1$Outbound = {
    type: string;
    created: number;
    payload: GetDeploymentEventsResponseBodyPayload$Outbound;
};
/** @internal */
export declare const GetDeploymentEventsResponseBody1$outboundSchema: z.ZodType<GetDeploymentEventsResponseBody1$Outbound, z.ZodTypeDef, GetDeploymentEventsResponseBody1>;
export declare function getDeploymentEventsResponseBody1ToJSON(getDeploymentEventsResponseBody1: GetDeploymentEventsResponseBody1): string;
export declare function getDeploymentEventsResponseBody1FromJSON(jsonString: string): SafeParseResult<GetDeploymentEventsResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetDeploymentEventsDeploymentsResponseBody$inboundSchema: z.ZodType<GetDeploymentEventsDeploymentsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentEventsDeploymentsResponseBody$Outbound = GetDeploymentEventsResponseBody2$Outbound | GetDeploymentEventsResponseBody1$Outbound;
/** @internal */
export declare const GetDeploymentEventsDeploymentsResponseBody$outboundSchema: z.ZodType<GetDeploymentEventsDeploymentsResponseBody$Outbound, z.ZodTypeDef, GetDeploymentEventsDeploymentsResponseBody>;
export declare function getDeploymentEventsDeploymentsResponseBodyToJSON(getDeploymentEventsDeploymentsResponseBody: GetDeploymentEventsDeploymentsResponseBody): string;
export declare function getDeploymentEventsDeploymentsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDeploymentEventsDeploymentsResponseBody, SDKValidationError>;
/** @internal */
export declare const GetDeploymentEventsResponse$inboundSchema: z.ZodType<GetDeploymentEventsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentEventsResponse$Outbound = Array<GetDeploymentEventsResponseBody2$Outbound | GetDeploymentEventsResponseBody1$Outbound | null> | GetDeploymentEventsResponseBodyDeployments2$Outbound | GetDeploymentEventsResponseBodyDeployments1$Outbound;
/** @internal */
export declare const GetDeploymentEventsResponse$outboundSchema: z.ZodType<GetDeploymentEventsResponse$Outbound, z.ZodTypeDef, GetDeploymentEventsResponse>;
export declare function getDeploymentEventsResponseToJSON(getDeploymentEventsResponse: GetDeploymentEventsResponse): string;
export declare function getDeploymentEventsResponseFromJSON(jsonString: string): SafeParseResult<GetDeploymentEventsResponse, SDKValidationError>;
//# sourceMappingURL=getdeploymenteventsop.d.ts.map