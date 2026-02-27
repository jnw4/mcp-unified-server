import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The type of the DNS record
 */
export declare const UpdateRecordType: {
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
 * The type of the DNS record
 */
export type UpdateRecordType = ClosedEnum<typeof UpdateRecordType>;
export type Srv = {
    target: string | null;
    weight: number | null;
    port: number | null;
    priority: number | null;
};
export type Https = {
    priority: number | null;
    target: string | null;
    params?: string | null | undefined;
};
export type UpdateRecordRequestBody = {
    /**
     * The name of the DNS record
     */
    name?: string | null | undefined;
    /**
     * The value of the DNS record
     */
    value?: string | null | undefined;
    /**
     * The type of the DNS record
     */
    type?: UpdateRecordType | null | undefined;
    /**
     * The Time to live (TTL) value of the DNS record
     */
    ttl?: number | null | undefined;
    /**
     * The MX priority value of the DNS record
     */
    mxPriority?: number | null | undefined;
    srv?: Srv | null | undefined;
    https?: Https | null | undefined;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};
export type UpdateRecordRequest = {
    /**
     * The id of the DNS record
     */
    recordId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: UpdateRecordRequestBody;
};
export declare const UpdateRecordDnsType: {
    readonly Record: "record";
    readonly RecordSys: "record-sys";
};
export type UpdateRecordDnsType = ClosedEnum<typeof UpdateRecordDnsType>;
export declare const RecordType: {
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
export type RecordType = ClosedEnum<typeof RecordType>;
export type UpdateRecordResponseBody = {
    id: string;
    name: string;
    type: UpdateRecordDnsType;
    value: string;
    creator: string;
    domain: string;
    ttl?: number | undefined;
    comment?: string | undefined;
    recordType: RecordType;
    createdAt?: number | null | undefined;
};
/** @internal */
export declare const UpdateRecordType$inboundSchema: z.ZodNativeEnum<typeof UpdateRecordType>;
/** @internal */
export declare const UpdateRecordType$outboundSchema: z.ZodNativeEnum<typeof UpdateRecordType>;
/** @internal */
export declare const Srv$inboundSchema: z.ZodType<Srv, z.ZodTypeDef, unknown>;
/** @internal */
export type Srv$Outbound = {
    target: string | null;
    weight: number | null;
    port: number | null;
    priority: number | null;
};
/** @internal */
export declare const Srv$outboundSchema: z.ZodType<Srv$Outbound, z.ZodTypeDef, Srv>;
export declare function srvToJSON(srv: Srv): string;
export declare function srvFromJSON(jsonString: string): SafeParseResult<Srv, SDKValidationError>;
/** @internal */
export declare const Https$inboundSchema: z.ZodType<Https, z.ZodTypeDef, unknown>;
/** @internal */
export type Https$Outbound = {
    priority: number | null;
    target: string | null;
    params?: string | null | undefined;
};
/** @internal */
export declare const Https$outboundSchema: z.ZodType<Https$Outbound, z.ZodTypeDef, Https>;
export declare function httpsToJSON(https: Https): string;
export declare function httpsFromJSON(jsonString: string): SafeParseResult<Https, SDKValidationError>;
/** @internal */
export declare const UpdateRecordRequestBody$inboundSchema: z.ZodType<UpdateRecordRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRecordRequestBody$Outbound = {
    name?: string | null | undefined;
    value?: string | null | undefined;
    type?: string | null | undefined;
    ttl?: number | null | undefined;
    mxPriority?: number | null | undefined;
    srv?: Srv$Outbound | null | undefined;
    https?: Https$Outbound | null | undefined;
    comment?: string | undefined;
};
/** @internal */
export declare const UpdateRecordRequestBody$outboundSchema: z.ZodType<UpdateRecordRequestBody$Outbound, z.ZodTypeDef, UpdateRecordRequestBody>;
export declare function updateRecordRequestBodyToJSON(updateRecordRequestBody: UpdateRecordRequestBody): string;
export declare function updateRecordRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateRecordRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateRecordRequest$inboundSchema: z.ZodType<UpdateRecordRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRecordRequest$Outbound = {
    recordId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: UpdateRecordRequestBody$Outbound;
};
/** @internal */
export declare const UpdateRecordRequest$outboundSchema: z.ZodType<UpdateRecordRequest$Outbound, z.ZodTypeDef, UpdateRecordRequest>;
export declare function updateRecordRequestToJSON(updateRecordRequest: UpdateRecordRequest): string;
export declare function updateRecordRequestFromJSON(jsonString: string): SafeParseResult<UpdateRecordRequest, SDKValidationError>;
/** @internal */
export declare const UpdateRecordDnsType$inboundSchema: z.ZodNativeEnum<typeof UpdateRecordDnsType>;
/** @internal */
export declare const UpdateRecordDnsType$outboundSchema: z.ZodNativeEnum<typeof UpdateRecordDnsType>;
/** @internal */
export declare const RecordType$inboundSchema: z.ZodNativeEnum<typeof RecordType>;
/** @internal */
export declare const RecordType$outboundSchema: z.ZodNativeEnum<typeof RecordType>;
/** @internal */
export declare const UpdateRecordResponseBody$inboundSchema: z.ZodType<UpdateRecordResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRecordResponseBody$Outbound = {
    id: string;
    name: string;
    type: string;
    value: string;
    creator: string;
    domain: string;
    ttl?: number | undefined;
    comment?: string | undefined;
    recordType: string;
    createdAt?: number | null | undefined;
};
/** @internal */
export declare const UpdateRecordResponseBody$outboundSchema: z.ZodType<UpdateRecordResponseBody$Outbound, z.ZodTypeDef, UpdateRecordResponseBody>;
export declare function updateRecordResponseBodyToJSON(updateRecordResponseBody: UpdateRecordResponseBody): string;
export declare function updateRecordResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateRecordResponseBody, SDKValidationError>;
//# sourceMappingURL=updaterecordop.d.ts.map