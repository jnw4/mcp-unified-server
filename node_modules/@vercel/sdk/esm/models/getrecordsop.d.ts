import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetRecordsRequest = {
    domain: string;
    /**
     * Maximum number of records to list from a request.
     */
    limit?: string | undefined;
    /**
     * Get records created after this JavaScript timestamp.
     */
    since?: string | undefined;
    /**
     * Get records created before this JavaScript timestamp.
     */
    until?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const GetRecordsResponseBodyDnsType: {
    readonly A: "A";
    readonly Aaaa: "AAAA";
    readonly Alias: "ALIAS";
    readonly Caa: "CAA";
    readonly Cname: "CNAME";
    readonly Https: "HTTPS";
    readonly Mx: "MX";
    readonly Srv: "SRV";
    readonly Txt: "TXT";
    readonly Ns: "NS";
};
export type GetRecordsResponseBodyDnsType = ClosedEnum<typeof GetRecordsResponseBodyDnsType>;
export type ResponseBodyRecords = {
    id: string;
    slug: string;
    name: string;
    type: GetRecordsResponseBodyDnsType;
    value: string;
    mxPriority?: number | undefined;
    priority?: number | undefined;
    creator: string;
    created: number | null;
    updated: number | null;
    createdAt: number | null;
    updatedAt: number | null;
    ttl?: number | undefined;
    comment?: string | undefined;
};
/**
 * Successful response retrieving a list of paginated DNS records.
 */
export type GetRecordsResponseBody3 = {
    records: Array<ResponseBodyRecords>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};
export declare const GetRecordsResponseBodyType: {
    readonly A: "A";
    readonly Aaaa: "AAAA";
    readonly Alias: "ALIAS";
    readonly Caa: "CAA";
    readonly Cname: "CNAME";
    readonly Https: "HTTPS";
    readonly Mx: "MX";
    readonly Srv: "SRV";
    readonly Txt: "TXT";
    readonly Ns: "NS";
};
export type GetRecordsResponseBodyType = ClosedEnum<typeof GetRecordsResponseBodyType>;
export type Records = {
    id: string;
    slug: string;
    name: string;
    type: GetRecordsResponseBodyType;
    value: string;
    mxPriority?: number | undefined;
    priority?: number | undefined;
    creator: string;
    created: number | null;
    updated: number | null;
    createdAt: number | null;
    updatedAt: number | null;
    ttl?: number | undefined;
    comment?: string | undefined;
};
export type GetRecordsResponseBody2 = {
    records: Array<Records>;
};
/**
 * Successful response retrieving a list of paginated DNS records.
 */
export type GetRecordsResponseBody = GetRecordsResponseBody3 | GetRecordsResponseBody2 | string;
/** @internal */
export declare const GetRecordsRequest$inboundSchema: z.ZodType<GetRecordsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRecordsRequest$Outbound = {
    domain: string;
    limit?: string | undefined;
    since?: string | undefined;
    until?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetRecordsRequest$outboundSchema: z.ZodType<GetRecordsRequest$Outbound, z.ZodTypeDef, GetRecordsRequest>;
export declare function getRecordsRequestToJSON(getRecordsRequest: GetRecordsRequest): string;
export declare function getRecordsRequestFromJSON(jsonString: string): SafeParseResult<GetRecordsRequest, SDKValidationError>;
/** @internal */
export declare const GetRecordsResponseBodyDnsType$inboundSchema: z.ZodNativeEnum<typeof GetRecordsResponseBodyDnsType>;
/** @internal */
export declare const GetRecordsResponseBodyDnsType$outboundSchema: z.ZodNativeEnum<typeof GetRecordsResponseBodyDnsType>;
/** @internal */
export declare const ResponseBodyRecords$inboundSchema: z.ZodType<ResponseBodyRecords, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyRecords$Outbound = {
    id: string;
    slug: string;
    name: string;
    type: string;
    value: string;
    mxPriority?: number | undefined;
    priority?: number | undefined;
    creator: string;
    created: number | null;
    updated: number | null;
    createdAt: number | null;
    updatedAt: number | null;
    ttl?: number | undefined;
    comment?: string | undefined;
};
/** @internal */
export declare const ResponseBodyRecords$outboundSchema: z.ZodType<ResponseBodyRecords$Outbound, z.ZodTypeDef, ResponseBodyRecords>;
export declare function responseBodyRecordsToJSON(responseBodyRecords: ResponseBodyRecords): string;
export declare function responseBodyRecordsFromJSON(jsonString: string): SafeParseResult<ResponseBodyRecords, SDKValidationError>;
/** @internal */
export declare const GetRecordsResponseBody3$inboundSchema: z.ZodType<GetRecordsResponseBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRecordsResponseBody3$Outbound = {
    records: Array<ResponseBodyRecords$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const GetRecordsResponseBody3$outboundSchema: z.ZodType<GetRecordsResponseBody3$Outbound, z.ZodTypeDef, GetRecordsResponseBody3>;
export declare function getRecordsResponseBody3ToJSON(getRecordsResponseBody3: GetRecordsResponseBody3): string;
export declare function getRecordsResponseBody3FromJSON(jsonString: string): SafeParseResult<GetRecordsResponseBody3, SDKValidationError>;
/** @internal */
export declare const GetRecordsResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof GetRecordsResponseBodyType>;
/** @internal */
export declare const GetRecordsResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof GetRecordsResponseBodyType>;
/** @internal */
export declare const Records$inboundSchema: z.ZodType<Records, z.ZodTypeDef, unknown>;
/** @internal */
export type Records$Outbound = {
    id: string;
    slug: string;
    name: string;
    type: string;
    value: string;
    mxPriority?: number | undefined;
    priority?: number | undefined;
    creator: string;
    created: number | null;
    updated: number | null;
    createdAt: number | null;
    updatedAt: number | null;
    ttl?: number | undefined;
    comment?: string | undefined;
};
/** @internal */
export declare const Records$outboundSchema: z.ZodType<Records$Outbound, z.ZodTypeDef, Records>;
export declare function recordsToJSON(records: Records): string;
export declare function recordsFromJSON(jsonString: string): SafeParseResult<Records, SDKValidationError>;
/** @internal */
export declare const GetRecordsResponseBody2$inboundSchema: z.ZodType<GetRecordsResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRecordsResponseBody2$Outbound = {
    records: Array<Records$Outbound>;
};
/** @internal */
export declare const GetRecordsResponseBody2$outboundSchema: z.ZodType<GetRecordsResponseBody2$Outbound, z.ZodTypeDef, GetRecordsResponseBody2>;
export declare function getRecordsResponseBody2ToJSON(getRecordsResponseBody2: GetRecordsResponseBody2): string;
export declare function getRecordsResponseBody2FromJSON(jsonString: string): SafeParseResult<GetRecordsResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetRecordsResponseBody$inboundSchema: z.ZodType<GetRecordsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRecordsResponseBody$Outbound = GetRecordsResponseBody3$Outbound | GetRecordsResponseBody2$Outbound | string;
/** @internal */
export declare const GetRecordsResponseBody$outboundSchema: z.ZodType<GetRecordsResponseBody$Outbound, z.ZodTypeDef, GetRecordsResponseBody>;
export declare function getRecordsResponseBodyToJSON(getRecordsResponseBody: GetRecordsResponseBody): string;
export declare function getRecordsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetRecordsResponseBody, SDKValidationError>;
//# sourceMappingURL=getrecordsop.d.ts.map