import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The type of record, it could be one of the valid DNS records.
 */
export declare const CreateRecordRequestBodyDnsRequest10Type: {
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
/**
 * The type of record, it could be one of the valid DNS records.
 */
export type CreateRecordRequestBodyDnsRequest10Type = ClosedEnum<typeof CreateRecordRequestBodyDnsRequest10Type>;
export type RequestBodyHttps = {
    priority: number | null;
    target: string;
    params?: string | undefined;
};
export type RequestBody10 = {
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest10Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    https: RequestBodyHttps;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};
/**
 * The type of record, it could be one of the valid DNS records.
 */
export declare const CreateRecordRequestBodyDnsRequest9Type: {
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
/**
 * The type of record, it could be one of the valid DNS records.
 */
export type CreateRecordRequestBodyDnsRequest9Type = ClosedEnum<typeof CreateRecordRequestBodyDnsRequest9Type>;
export type RequestBody9 = {
    /**
     * A subdomain name.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest9Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * An NS domain value.
     */
    value?: string | undefined;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};
/**
 * The type of record, it could be one of the valid DNS records.
 */
export declare const CreateRecordRequestBodyDnsRequest8Type: {
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
/**
 * The type of record, it could be one of the valid DNS records.
 */
export type CreateRecordRequestBodyDnsRequest8Type = ClosedEnum<typeof CreateRecordRequestBodyDnsRequest8Type>;
export type RequestBody8 = {
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest8Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * A TXT record containing arbitrary text.
     */
    value: string;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};
/**
 * The type of record, it could be one of the valid DNS records.
 */
export declare const CreateRecordRequestBodyDnsRequest7Type: {
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
/**
 * The type of record, it could be one of the valid DNS records.
 */
export type CreateRecordRequestBodyDnsRequest7Type = ClosedEnum<typeof CreateRecordRequestBodyDnsRequest7Type>;
export type RequestBodySrv = {
    priority: number | null;
    weight: number | null;
    port: number | null;
    target: string;
};
export type RequestBody7 = {
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest7Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    srv: RequestBodySrv;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};
/**
 * The type of record, it could be one of the valid DNS records.
 */
export declare const CreateRecordRequestBodyDnsRequest6Type: {
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
/**
 * The type of record, it could be one of the valid DNS records.
 */
export type CreateRecordRequestBodyDnsRequest6Type = ClosedEnum<typeof CreateRecordRequestBodyDnsRequest6Type>;
export type RequestBody6 = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest6Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * An MX record specifying the mail server responsible for accepting messages on behalf of the domain name.
     */
    value: string;
    mxPriority: number;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};
/**
 * The type of record, it could be one of the valid DNS records.
 */
export declare const CreateRecordRequestBodyDnsRequest5Type: {
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
/**
 * The type of record, it could be one of the valid DNS records.
 */
export type CreateRecordRequestBodyDnsRequest5Type = ClosedEnum<typeof CreateRecordRequestBodyDnsRequest5Type>;
export type RequestBody5 = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest5Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * A CNAME record mapping to another domain name.
     */
    value?: string | undefined;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};
/**
 * The type of record, it could be one of the valid DNS records.
 */
export declare const CreateRecordRequestBodyDnsRequestType: {
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
/**
 * The type of record, it could be one of the valid DNS records.
 */
export type CreateRecordRequestBodyDnsRequestType = ClosedEnum<typeof CreateRecordRequestBodyDnsRequestType>;
export type RequestBody4 = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequestType;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * A CAA record to specify which Certificate Authorities (CAs) are allowed to issue certificates for the domain.
     */
    value: string;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};
/**
 * The type of record, it could be one of the valid DNS records.
 */
export declare const CreateRecordRequestBodyDnsType: {
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
/**
 * The type of record, it could be one of the valid DNS records.
 */
export type CreateRecordRequestBodyDnsType = ClosedEnum<typeof CreateRecordRequestBodyDnsType>;
export type RequestBody3 = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsType;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * An ALIAS virtual record pointing to a hostname resolved to an A record on server side.
     */
    value: string;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};
/**
 * The type of record, it could be one of the valid DNS records.
 */
export declare const CreateRecordRequestBodyType: {
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
/**
 * The type of record, it could be one of the valid DNS records.
 */
export type CreateRecordRequestBodyType = ClosedEnum<typeof CreateRecordRequestBodyType>;
export type RequestBody2 = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyType;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * An AAAA record pointing to an IPv6 address.
     */
    value: string;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};
/**
 * The type of record, it could be one of the valid DNS records.
 */
export declare const RequestBodyType: {
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
/**
 * The type of record, it could be one of the valid DNS records.
 */
export type RequestBodyType = ClosedEnum<typeof RequestBodyType>;
export type RequestBody1 = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: RequestBodyType;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * The record value must be a valid IPv4 address.
     */
    value: string;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};
export type CreateRecordRequestBody = RequestBody6 | RequestBody1 | RequestBody2 | RequestBody3 | RequestBody4 | RequestBody5 | RequestBody7 | RequestBody8 | RequestBody9 | RequestBody10;
export type CreateRecordRequest = {
    /**
     * The domain used to create the DNS record.
     */
    domain: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: RequestBody6 | RequestBody1 | RequestBody2 | RequestBody3 | RequestBody4 | RequestBody5 | RequestBody7 | RequestBody8 | RequestBody9 | RequestBody10;
};
export type CreateRecordResponseBody2 = {
    /**
     * The id of the newly created DNS record
     */
    uid: string;
};
export type CreateRecordResponseBody1 = {
    uid: string;
    updated: number;
};
/**
 * Successful response showing the uid of the newly created DNS record.
 */
export type CreateRecordResponseBody = CreateRecordResponseBody1 | CreateRecordResponseBody2;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest10Type$inboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest10Type>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest10Type$outboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest10Type>;
/** @internal */
export declare const RequestBodyHttps$inboundSchema: z.ZodType<RequestBodyHttps, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyHttps$Outbound = {
    priority: number | null;
    target: string;
    params?: string | undefined;
};
/** @internal */
export declare const RequestBodyHttps$outboundSchema: z.ZodType<RequestBodyHttps$Outbound, z.ZodTypeDef, RequestBodyHttps>;
export declare function requestBodyHttpsToJSON(requestBodyHttps: RequestBodyHttps): string;
export declare function requestBodyHttpsFromJSON(jsonString: string): SafeParseResult<RequestBodyHttps, SDKValidationError>;
/** @internal */
export declare const RequestBody10$inboundSchema: z.ZodType<RequestBody10, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody10$Outbound = {
    type: string;
    ttl?: number | undefined;
    https: RequestBodyHttps$Outbound;
    comment?: string | undefined;
};
/** @internal */
export declare const RequestBody10$outboundSchema: z.ZodType<RequestBody10$Outbound, z.ZodTypeDef, RequestBody10>;
export declare function requestBody10ToJSON(requestBody10: RequestBody10): string;
export declare function requestBody10FromJSON(jsonString: string): SafeParseResult<RequestBody10, SDKValidationError>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest9Type$inboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest9Type>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest9Type$outboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest9Type>;
/** @internal */
export declare const RequestBody9$inboundSchema: z.ZodType<RequestBody9, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody9$Outbound = {
    name: string;
    type: string;
    ttl?: number | undefined;
    value?: string | undefined;
    comment?: string | undefined;
};
/** @internal */
export declare const RequestBody9$outboundSchema: z.ZodType<RequestBody9$Outbound, z.ZodTypeDef, RequestBody9>;
export declare function requestBody9ToJSON(requestBody9: RequestBody9): string;
export declare function requestBody9FromJSON(jsonString: string): SafeParseResult<RequestBody9, SDKValidationError>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest8Type$inboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest8Type>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest8Type$outboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest8Type>;
/** @internal */
export declare const RequestBody8$inboundSchema: z.ZodType<RequestBody8, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody8$Outbound = {
    type: string;
    ttl?: number | undefined;
    value: string;
    comment?: string | undefined;
};
/** @internal */
export declare const RequestBody8$outboundSchema: z.ZodType<RequestBody8$Outbound, z.ZodTypeDef, RequestBody8>;
export declare function requestBody8ToJSON(requestBody8: RequestBody8): string;
export declare function requestBody8FromJSON(jsonString: string): SafeParseResult<RequestBody8, SDKValidationError>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest7Type$inboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest7Type>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest7Type$outboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest7Type>;
/** @internal */
export declare const RequestBodySrv$inboundSchema: z.ZodType<RequestBodySrv, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodySrv$Outbound = {
    priority: number | null;
    weight: number | null;
    port: number | null;
    target: string;
};
/** @internal */
export declare const RequestBodySrv$outboundSchema: z.ZodType<RequestBodySrv$Outbound, z.ZodTypeDef, RequestBodySrv>;
export declare function requestBodySrvToJSON(requestBodySrv: RequestBodySrv): string;
export declare function requestBodySrvFromJSON(jsonString: string): SafeParseResult<RequestBodySrv, SDKValidationError>;
/** @internal */
export declare const RequestBody7$inboundSchema: z.ZodType<RequestBody7, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody7$Outbound = {
    type: string;
    ttl?: number | undefined;
    srv: RequestBodySrv$Outbound;
    comment?: string | undefined;
};
/** @internal */
export declare const RequestBody7$outboundSchema: z.ZodType<RequestBody7$Outbound, z.ZodTypeDef, RequestBody7>;
export declare function requestBody7ToJSON(requestBody7: RequestBody7): string;
export declare function requestBody7FromJSON(jsonString: string): SafeParseResult<RequestBody7, SDKValidationError>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest6Type$inboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest6Type>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest6Type$outboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest6Type>;
/** @internal */
export declare const RequestBody6$inboundSchema: z.ZodType<RequestBody6, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody6$Outbound = {
    name: string;
    type: string;
    ttl?: number | undefined;
    value: string;
    mxPriority: number;
    comment?: string | undefined;
};
/** @internal */
export declare const RequestBody6$outboundSchema: z.ZodType<RequestBody6$Outbound, z.ZodTypeDef, RequestBody6>;
export declare function requestBody6ToJSON(requestBody6: RequestBody6): string;
export declare function requestBody6FromJSON(jsonString: string): SafeParseResult<RequestBody6, SDKValidationError>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest5Type$inboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest5Type>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequest5Type$outboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequest5Type>;
/** @internal */
export declare const RequestBody5$inboundSchema: z.ZodType<RequestBody5, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody5$Outbound = {
    name: string;
    type: string;
    ttl?: number | undefined;
    value?: string | undefined;
    comment?: string | undefined;
};
/** @internal */
export declare const RequestBody5$outboundSchema: z.ZodType<RequestBody5$Outbound, z.ZodTypeDef, RequestBody5>;
export declare function requestBody5ToJSON(requestBody5: RequestBody5): string;
export declare function requestBody5FromJSON(jsonString: string): SafeParseResult<RequestBody5, SDKValidationError>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequestType$inboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequestType>;
/** @internal */
export declare const CreateRecordRequestBodyDnsRequestType$outboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsRequestType>;
/** @internal */
export declare const RequestBody4$inboundSchema: z.ZodType<RequestBody4, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody4$Outbound = {
    name: string;
    type: string;
    ttl?: number | undefined;
    value: string;
    comment?: string | undefined;
};
/** @internal */
export declare const RequestBody4$outboundSchema: z.ZodType<RequestBody4$Outbound, z.ZodTypeDef, RequestBody4>;
export declare function requestBody4ToJSON(requestBody4: RequestBody4): string;
export declare function requestBody4FromJSON(jsonString: string): SafeParseResult<RequestBody4, SDKValidationError>;
/** @internal */
export declare const CreateRecordRequestBodyDnsType$inboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsType>;
/** @internal */
export declare const CreateRecordRequestBodyDnsType$outboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyDnsType>;
/** @internal */
export declare const RequestBody3$inboundSchema: z.ZodType<RequestBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody3$Outbound = {
    name: string;
    type: string;
    ttl?: number | undefined;
    value: string;
    comment?: string | undefined;
};
/** @internal */
export declare const RequestBody3$outboundSchema: z.ZodType<RequestBody3$Outbound, z.ZodTypeDef, RequestBody3>;
export declare function requestBody3ToJSON(requestBody3: RequestBody3): string;
export declare function requestBody3FromJSON(jsonString: string): SafeParseResult<RequestBody3, SDKValidationError>;
/** @internal */
export declare const CreateRecordRequestBodyType$inboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyType>;
/** @internal */
export declare const CreateRecordRequestBodyType$outboundSchema: z.ZodNativeEnum<typeof CreateRecordRequestBodyType>;
/** @internal */
export declare const RequestBody2$inboundSchema: z.ZodType<RequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody2$Outbound = {
    name: string;
    type: string;
    ttl?: number | undefined;
    value: string;
    comment?: string | undefined;
};
/** @internal */
export declare const RequestBody2$outboundSchema: z.ZodType<RequestBody2$Outbound, z.ZodTypeDef, RequestBody2>;
export declare function requestBody2ToJSON(requestBody2: RequestBody2): string;
export declare function requestBody2FromJSON(jsonString: string): SafeParseResult<RequestBody2, SDKValidationError>;
/** @internal */
export declare const RequestBodyType$inboundSchema: z.ZodNativeEnum<typeof RequestBodyType>;
/** @internal */
export declare const RequestBodyType$outboundSchema: z.ZodNativeEnum<typeof RequestBodyType>;
/** @internal */
export declare const RequestBody1$inboundSchema: z.ZodType<RequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody1$Outbound = {
    name: string;
    type: string;
    ttl?: number | undefined;
    value: string;
    comment?: string | undefined;
};
/** @internal */
export declare const RequestBody1$outboundSchema: z.ZodType<RequestBody1$Outbound, z.ZodTypeDef, RequestBody1>;
export declare function requestBody1ToJSON(requestBody1: RequestBody1): string;
export declare function requestBody1FromJSON(jsonString: string): SafeParseResult<RequestBody1, SDKValidationError>;
/** @internal */
export declare const CreateRecordRequestBody$inboundSchema: z.ZodType<CreateRecordRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateRecordRequestBody$Outbound = RequestBody6$Outbound | RequestBody1$Outbound | RequestBody2$Outbound | RequestBody3$Outbound | RequestBody4$Outbound | RequestBody5$Outbound | RequestBody7$Outbound | RequestBody8$Outbound | RequestBody9$Outbound | RequestBody10$Outbound;
/** @internal */
export declare const CreateRecordRequestBody$outboundSchema: z.ZodType<CreateRecordRequestBody$Outbound, z.ZodTypeDef, CreateRecordRequestBody>;
export declare function createRecordRequestBodyToJSON(createRecordRequestBody: CreateRecordRequestBody): string;
export declare function createRecordRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateRecordRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateRecordRequest$inboundSchema: z.ZodType<CreateRecordRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateRecordRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: RequestBody6$Outbound | RequestBody1$Outbound | RequestBody2$Outbound | RequestBody3$Outbound | RequestBody4$Outbound | RequestBody5$Outbound | RequestBody7$Outbound | RequestBody8$Outbound | RequestBody9$Outbound | RequestBody10$Outbound;
};
/** @internal */
export declare const CreateRecordRequest$outboundSchema: z.ZodType<CreateRecordRequest$Outbound, z.ZodTypeDef, CreateRecordRequest>;
export declare function createRecordRequestToJSON(createRecordRequest: CreateRecordRequest): string;
export declare function createRecordRequestFromJSON(jsonString: string): SafeParseResult<CreateRecordRequest, SDKValidationError>;
/** @internal */
export declare const CreateRecordResponseBody2$inboundSchema: z.ZodType<CreateRecordResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateRecordResponseBody2$Outbound = {
    uid: string;
};
/** @internal */
export declare const CreateRecordResponseBody2$outboundSchema: z.ZodType<CreateRecordResponseBody2$Outbound, z.ZodTypeDef, CreateRecordResponseBody2>;
export declare function createRecordResponseBody2ToJSON(createRecordResponseBody2: CreateRecordResponseBody2): string;
export declare function createRecordResponseBody2FromJSON(jsonString: string): SafeParseResult<CreateRecordResponseBody2, SDKValidationError>;
/** @internal */
export declare const CreateRecordResponseBody1$inboundSchema: z.ZodType<CreateRecordResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateRecordResponseBody1$Outbound = {
    uid: string;
    updated: number;
};
/** @internal */
export declare const CreateRecordResponseBody1$outboundSchema: z.ZodType<CreateRecordResponseBody1$Outbound, z.ZodTypeDef, CreateRecordResponseBody1>;
export declare function createRecordResponseBody1ToJSON(createRecordResponseBody1: CreateRecordResponseBody1): string;
export declare function createRecordResponseBody1FromJSON(jsonString: string): SafeParseResult<CreateRecordResponseBody1, SDKValidationError>;
/** @internal */
export declare const CreateRecordResponseBody$inboundSchema: z.ZodType<CreateRecordResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateRecordResponseBody$Outbound = CreateRecordResponseBody1$Outbound | CreateRecordResponseBody2$Outbound;
/** @internal */
export declare const CreateRecordResponseBody$outboundSchema: z.ZodType<CreateRecordResponseBody$Outbound, z.ZodTypeDef, CreateRecordResponseBody>;
export declare function createRecordResponseBodyToJSON(createRecordResponseBody: CreateRecordResponseBody): string;
export declare function createRecordResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateRecordResponseBody, SDKValidationError>;
//# sourceMappingURL=createrecordop.d.ts.map