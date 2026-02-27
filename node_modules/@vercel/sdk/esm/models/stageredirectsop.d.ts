import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type StatusCode = number | string;
export type Redirects = {
    source: string;
    destination: string;
    statusCode?: number | string | undefined;
    permanent?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    query?: boolean | undefined;
    preserveQueryParams?: boolean | undefined;
};
export type StageRedirectsRequestBody = {
    projectId: string;
    teamId: string;
    overwrite?: boolean | undefined;
    name?: string | undefined;
    redirects?: Array<Redirects> | undefined;
};
export type StageRedirectsRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: StageRedirectsRequestBody | undefined;
};
export type StageRedirectsVersion = {
    /**
     * The unique identifier for the version.
     */
    id: string;
    /**
     * The key of the version. The key may be duplicated across versions if the contents are the same as a different version.
     */
    key: string;
    lastModified: number;
    createdBy: string;
    /**
     * Optional name for the version. If not provided, defaults to an ISO timestamp string.
     */
    name?: string | undefined;
    /**
     * Whether this version has not been promoted to production yet and is not serving end users.
     */
    isStaging?: boolean | undefined;
    /**
     * Whether this version is currently live in production.
     */
    isLive?: boolean | undefined;
    /**
     * The number of redirects in this version.
     */
    redirectCount?: number | undefined;
    /**
     * The staging link for previewing redirects in this version.
     */
    alias?: string | undefined;
};
export type StageRedirectsResponseBody = {
    alias: string | null;
    version: StageRedirectsVersion;
};
/** @internal */
export declare const StatusCode$inboundSchema: z.ZodType<StatusCode, z.ZodTypeDef, unknown>;
/** @internal */
export type StatusCode$Outbound = number | string;
/** @internal */
export declare const StatusCode$outboundSchema: z.ZodType<StatusCode$Outbound, z.ZodTypeDef, StatusCode>;
export declare function statusCodeToJSON(statusCode: StatusCode): string;
export declare function statusCodeFromJSON(jsonString: string): SafeParseResult<StatusCode, SDKValidationError>;
/** @internal */
export declare const Redirects$inboundSchema: z.ZodType<Redirects, z.ZodTypeDef, unknown>;
/** @internal */
export type Redirects$Outbound = {
    source: string;
    destination: string;
    statusCode?: number | string | undefined;
    permanent?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    query?: boolean | undefined;
    preserveQueryParams?: boolean | undefined;
};
/** @internal */
export declare const Redirects$outboundSchema: z.ZodType<Redirects$Outbound, z.ZodTypeDef, Redirects>;
export declare function redirectsToJSON(redirects: Redirects): string;
export declare function redirectsFromJSON(jsonString: string): SafeParseResult<Redirects, SDKValidationError>;
/** @internal */
export declare const StageRedirectsRequestBody$inboundSchema: z.ZodType<StageRedirectsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type StageRedirectsRequestBody$Outbound = {
    projectId: string;
    teamId: string;
    overwrite?: boolean | undefined;
    name?: string | undefined;
    redirects?: Array<Redirects$Outbound> | undefined;
};
/** @internal */
export declare const StageRedirectsRequestBody$outboundSchema: z.ZodType<StageRedirectsRequestBody$Outbound, z.ZodTypeDef, StageRedirectsRequestBody>;
export declare function stageRedirectsRequestBodyToJSON(stageRedirectsRequestBody: StageRedirectsRequestBody): string;
export declare function stageRedirectsRequestBodyFromJSON(jsonString: string): SafeParseResult<StageRedirectsRequestBody, SDKValidationError>;
/** @internal */
export declare const StageRedirectsRequest$inboundSchema: z.ZodType<StageRedirectsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type StageRedirectsRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: StageRedirectsRequestBody$Outbound | undefined;
};
/** @internal */
export declare const StageRedirectsRequest$outboundSchema: z.ZodType<StageRedirectsRequest$Outbound, z.ZodTypeDef, StageRedirectsRequest>;
export declare function stageRedirectsRequestToJSON(stageRedirectsRequest: StageRedirectsRequest): string;
export declare function stageRedirectsRequestFromJSON(jsonString: string): SafeParseResult<StageRedirectsRequest, SDKValidationError>;
/** @internal */
export declare const StageRedirectsVersion$inboundSchema: z.ZodType<StageRedirectsVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type StageRedirectsVersion$Outbound = {
    id: string;
    key: string;
    lastModified: number;
    createdBy: string;
    name?: string | undefined;
    isStaging?: boolean | undefined;
    isLive?: boolean | undefined;
    redirectCount?: number | undefined;
    alias?: string | undefined;
};
/** @internal */
export declare const StageRedirectsVersion$outboundSchema: z.ZodType<StageRedirectsVersion$Outbound, z.ZodTypeDef, StageRedirectsVersion>;
export declare function stageRedirectsVersionToJSON(stageRedirectsVersion: StageRedirectsVersion): string;
export declare function stageRedirectsVersionFromJSON(jsonString: string): SafeParseResult<StageRedirectsVersion, SDKValidationError>;
/** @internal */
export declare const StageRedirectsResponseBody$inboundSchema: z.ZodType<StageRedirectsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type StageRedirectsResponseBody$Outbound = {
    alias: string | null;
    version: StageRedirectsVersion$Outbound;
};
/** @internal */
export declare const StageRedirectsResponseBody$outboundSchema: z.ZodType<StageRedirectsResponseBody$Outbound, z.ZodTypeDef, StageRedirectsResponseBody>;
export declare function stageRedirectsResponseBodyToJSON(stageRedirectsResponseBody: StageRedirectsResponseBody): string;
export declare function stageRedirectsResponseBodyFromJSON(jsonString: string): SafeParseResult<StageRedirectsResponseBody, SDKValidationError>;
//# sourceMappingURL=stageredirectsop.d.ts.map