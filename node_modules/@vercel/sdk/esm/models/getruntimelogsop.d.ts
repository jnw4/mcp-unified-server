import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetRuntimeLogsRequest = {
    projectId: string;
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
export declare const GetRuntimeLogsLevel: {
    readonly Error: "error";
    readonly Warning: "warning";
    readonly Info: "info";
};
export type GetRuntimeLogsLevel = ClosedEnum<typeof GetRuntimeLogsLevel>;
export declare const GetRuntimeLogsSource: {
    readonly Delimiter: "delimiter";
    readonly EdgeFunction: "edge-function";
    readonly EdgeMiddleware: "edge-middleware";
    readonly Serverless: "serverless";
    readonly Request: "request";
};
export type GetRuntimeLogsSource = ClosedEnum<typeof GetRuntimeLogsSource>;
export type GetRuntimeLogsResponseBody = {
    level: GetRuntimeLogsLevel;
    message: string;
    rowId: string;
    source: GetRuntimeLogsSource;
    timestampInMs: number;
    domain: string;
    messageTruncated: boolean;
    requestMethod: string;
    requestPath: string;
    responseStatusCode: number;
};
/** @internal */
export declare const GetRuntimeLogsRequest$inboundSchema: z.ZodType<GetRuntimeLogsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRuntimeLogsRequest$Outbound = {
    projectId: string;
    deploymentId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetRuntimeLogsRequest$outboundSchema: z.ZodType<GetRuntimeLogsRequest$Outbound, z.ZodTypeDef, GetRuntimeLogsRequest>;
export declare function getRuntimeLogsRequestToJSON(getRuntimeLogsRequest: GetRuntimeLogsRequest): string;
export declare function getRuntimeLogsRequestFromJSON(jsonString: string): SafeParseResult<GetRuntimeLogsRequest, SDKValidationError>;
/** @internal */
export declare const GetRuntimeLogsLevel$inboundSchema: z.ZodNativeEnum<typeof GetRuntimeLogsLevel>;
/** @internal */
export declare const GetRuntimeLogsLevel$outboundSchema: z.ZodNativeEnum<typeof GetRuntimeLogsLevel>;
/** @internal */
export declare const GetRuntimeLogsSource$inboundSchema: z.ZodNativeEnum<typeof GetRuntimeLogsSource>;
/** @internal */
export declare const GetRuntimeLogsSource$outboundSchema: z.ZodNativeEnum<typeof GetRuntimeLogsSource>;
/** @internal */
export declare const GetRuntimeLogsResponseBody$inboundSchema: z.ZodType<GetRuntimeLogsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRuntimeLogsResponseBody$Outbound = {
    level: string;
    message: string;
    rowId: string;
    source: string;
    timestampInMs: number;
    domain: string;
    messageTruncated: boolean;
    requestMethod: string;
    requestPath: string;
    responseStatusCode: number;
};
/** @internal */
export declare const GetRuntimeLogsResponseBody$outboundSchema: z.ZodType<GetRuntimeLogsResponseBody$Outbound, z.ZodTypeDef, GetRuntimeLogsResponseBody>;
export declare function getRuntimeLogsResponseBodyToJSON(getRuntimeLogsResponseBody: GetRuntimeLogsResponseBody): string;
export declare function getRuntimeLogsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetRuntimeLogsResponseBody, SDKValidationError>;
//# sourceMappingURL=getruntimelogsop.d.ts.map