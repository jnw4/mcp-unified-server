import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const QueryParam2: {
    readonly Only: "only";
};
export type QueryParam2 = ClosedEnum<typeof QueryParam2>;
export type Diff = boolean | QueryParam2;
export declare const SortBy: {
    readonly Source: "source";
    readonly Destination: "destination";
    readonly StatusCode: "statusCode";
};
export type SortBy = ClosedEnum<typeof SortBy>;
export declare const SortOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type SortOrder = ClosedEnum<typeof SortOrder>;
export type GetRedirectsRequest = {
    projectId: string;
    versionId?: string | undefined;
    q?: string | undefined;
    diff?: boolean | QueryParam2 | undefined;
    page?: number | undefined;
    perPage?: number | undefined;
    sortBy?: SortBy | undefined;
    sortOrder?: SortOrder | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type ResponseBodyRedirects = {
    statusCode?: number | undefined;
    permanent?: boolean | undefined;
    sensitive?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    query?: boolean | undefined;
    preserveQueryParams?: boolean | undefined;
    source: string;
    destination: string;
};
export type ResponseBodyVersion = {
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
export type GetRedirectsResponseBodyPagination = {
    page: number;
    perPage: number;
    numPages: number;
};
export type GetRedirectsResponseBody2 = {
    redirects: Array<ResponseBodyRedirects>;
    version?: ResponseBodyVersion | undefined;
    pagination: GetRedirectsResponseBodyPagination;
};
export type GetRedirectsResponseBody = GetRedirectsResponseBody2 | {
    [k: string]: any;
};
/** @internal */
export declare const QueryParam2$inboundSchema: z.ZodNativeEnum<typeof QueryParam2>;
/** @internal */
export declare const QueryParam2$outboundSchema: z.ZodNativeEnum<typeof QueryParam2>;
/** @internal */
export declare const Diff$inboundSchema: z.ZodType<Diff, z.ZodTypeDef, unknown>;
/** @internal */
export type Diff$Outbound = boolean | string;
/** @internal */
export declare const Diff$outboundSchema: z.ZodType<Diff$Outbound, z.ZodTypeDef, Diff>;
export declare function diffToJSON(diff: Diff): string;
export declare function diffFromJSON(jsonString: string): SafeParseResult<Diff, SDKValidationError>;
/** @internal */
export declare const SortBy$inboundSchema: z.ZodNativeEnum<typeof SortBy>;
/** @internal */
export declare const SortBy$outboundSchema: z.ZodNativeEnum<typeof SortBy>;
/** @internal */
export declare const SortOrder$inboundSchema: z.ZodNativeEnum<typeof SortOrder>;
/** @internal */
export declare const SortOrder$outboundSchema: z.ZodNativeEnum<typeof SortOrder>;
/** @internal */
export declare const GetRedirectsRequest$inboundSchema: z.ZodType<GetRedirectsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRedirectsRequest$Outbound = {
    projectId: string;
    versionId?: string | undefined;
    q?: string | undefined;
    diff?: boolean | string | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
    sort_by?: string | undefined;
    sort_order?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetRedirectsRequest$outboundSchema: z.ZodType<GetRedirectsRequest$Outbound, z.ZodTypeDef, GetRedirectsRequest>;
export declare function getRedirectsRequestToJSON(getRedirectsRequest: GetRedirectsRequest): string;
export declare function getRedirectsRequestFromJSON(jsonString: string): SafeParseResult<GetRedirectsRequest, SDKValidationError>;
/** @internal */
export declare const ResponseBodyRedirects$inboundSchema: z.ZodType<ResponseBodyRedirects, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyRedirects$Outbound = {
    statusCode?: number | undefined;
    permanent?: boolean | undefined;
    sensitive?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    query?: boolean | undefined;
    preserveQueryParams?: boolean | undefined;
    source: string;
    destination: string;
};
/** @internal */
export declare const ResponseBodyRedirects$outboundSchema: z.ZodType<ResponseBodyRedirects$Outbound, z.ZodTypeDef, ResponseBodyRedirects>;
export declare function responseBodyRedirectsToJSON(responseBodyRedirects: ResponseBodyRedirects): string;
export declare function responseBodyRedirectsFromJSON(jsonString: string): SafeParseResult<ResponseBodyRedirects, SDKValidationError>;
/** @internal */
export declare const ResponseBodyVersion$inboundSchema: z.ZodType<ResponseBodyVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyVersion$Outbound = {
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
export declare const ResponseBodyVersion$outboundSchema: z.ZodType<ResponseBodyVersion$Outbound, z.ZodTypeDef, ResponseBodyVersion>;
export declare function responseBodyVersionToJSON(responseBodyVersion: ResponseBodyVersion): string;
export declare function responseBodyVersionFromJSON(jsonString: string): SafeParseResult<ResponseBodyVersion, SDKValidationError>;
/** @internal */
export declare const GetRedirectsResponseBodyPagination$inboundSchema: z.ZodType<GetRedirectsResponseBodyPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRedirectsResponseBodyPagination$Outbound = {
    page: number;
    per_page: number;
    numPages: number;
};
/** @internal */
export declare const GetRedirectsResponseBodyPagination$outboundSchema: z.ZodType<GetRedirectsResponseBodyPagination$Outbound, z.ZodTypeDef, GetRedirectsResponseBodyPagination>;
export declare function getRedirectsResponseBodyPaginationToJSON(getRedirectsResponseBodyPagination: GetRedirectsResponseBodyPagination): string;
export declare function getRedirectsResponseBodyPaginationFromJSON(jsonString: string): SafeParseResult<GetRedirectsResponseBodyPagination, SDKValidationError>;
/** @internal */
export declare const GetRedirectsResponseBody2$inboundSchema: z.ZodType<GetRedirectsResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRedirectsResponseBody2$Outbound = {
    redirects: Array<ResponseBodyRedirects$Outbound>;
    version?: ResponseBodyVersion$Outbound | undefined;
    pagination: GetRedirectsResponseBodyPagination$Outbound;
};
/** @internal */
export declare const GetRedirectsResponseBody2$outboundSchema: z.ZodType<GetRedirectsResponseBody2$Outbound, z.ZodTypeDef, GetRedirectsResponseBody2>;
export declare function getRedirectsResponseBody2ToJSON(getRedirectsResponseBody2: GetRedirectsResponseBody2): string;
export declare function getRedirectsResponseBody2FromJSON(jsonString: string): SafeParseResult<GetRedirectsResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetRedirectsResponseBody$inboundSchema: z.ZodType<GetRedirectsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRedirectsResponseBody$Outbound = GetRedirectsResponseBody2$Outbound | {
    [k: string]: any;
};
/** @internal */
export declare const GetRedirectsResponseBody$outboundSchema: z.ZodType<GetRedirectsResponseBody$Outbound, z.ZodTypeDef, GetRedirectsResponseBody>;
export declare function getRedirectsResponseBodyToJSON(getRedirectsResponseBody: GetRedirectsResponseBody): string;
export declare function getRedirectsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetRedirectsResponseBody, SDKValidationError>;
//# sourceMappingURL=getredirectsop.d.ts.map