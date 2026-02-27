import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UploadFileRequest = {
    /**
     * The file size in bytes
     */
    contentLength?: number | undefined;
    /**
     * The file SHA1 used to check the integrity
     */
    xVercelDigest?: string | undefined;
    /**
     * The file SHA1 used to check the integrity
     */
    xNowDigest?: string | undefined;
    /**
     * The file size as an alternative to `Content-Length`
     */
    xNowSize?: number | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array | undefined;
};
export type UploadFileResponseBody2 = {};
export type UploadFileResponseBody1 = {
    /**
     * Array of URLs where the file was updated
     */
    urls: Array<string>;
};
/**
 * File already uploaded
 *
 * @remarks
 * File successfully uploaded
 */
export type UploadFileResponseBody = UploadFileResponseBody1 | UploadFileResponseBody2;
/** @internal */
export declare const UploadFileRequest$inboundSchema: z.ZodType<UploadFileRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadFileRequest$Outbound = {
    "Content-Length"?: number | undefined;
    "x-vercel-digest"?: string | undefined;
    "x-now-digest"?: string | undefined;
    "x-now-size"?: number | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array | undefined;
};
/** @internal */
export declare const UploadFileRequest$outboundSchema: z.ZodType<UploadFileRequest$Outbound, z.ZodTypeDef, UploadFileRequest>;
export declare function uploadFileRequestToJSON(uploadFileRequest: UploadFileRequest): string;
export declare function uploadFileRequestFromJSON(jsonString: string): SafeParseResult<UploadFileRequest, SDKValidationError>;
/** @internal */
export declare const UploadFileResponseBody2$inboundSchema: z.ZodType<UploadFileResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadFileResponseBody2$Outbound = {};
/** @internal */
export declare const UploadFileResponseBody2$outboundSchema: z.ZodType<UploadFileResponseBody2$Outbound, z.ZodTypeDef, UploadFileResponseBody2>;
export declare function uploadFileResponseBody2ToJSON(uploadFileResponseBody2: UploadFileResponseBody2): string;
export declare function uploadFileResponseBody2FromJSON(jsonString: string): SafeParseResult<UploadFileResponseBody2, SDKValidationError>;
/** @internal */
export declare const UploadFileResponseBody1$inboundSchema: z.ZodType<UploadFileResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadFileResponseBody1$Outbound = {
    urls: Array<string>;
};
/** @internal */
export declare const UploadFileResponseBody1$outboundSchema: z.ZodType<UploadFileResponseBody1$Outbound, z.ZodTypeDef, UploadFileResponseBody1>;
export declare function uploadFileResponseBody1ToJSON(uploadFileResponseBody1: UploadFileResponseBody1): string;
export declare function uploadFileResponseBody1FromJSON(jsonString: string): SafeParseResult<UploadFileResponseBody1, SDKValidationError>;
/** @internal */
export declare const UploadFileResponseBody$inboundSchema: z.ZodType<UploadFileResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadFileResponseBody$Outbound = UploadFileResponseBody1$Outbound | UploadFileResponseBody2$Outbound;
/** @internal */
export declare const UploadFileResponseBody$outboundSchema: z.ZodType<UploadFileResponseBody$Outbound, z.ZodTypeDef, UploadFileResponseBody>;
export declare function uploadFileResponseBodyToJSON(uploadFileResponseBody: UploadFileResponseBody): string;
export declare function uploadFileResponseBodyFromJSON(jsonString: string): SafeParseResult<UploadFileResponseBody, SDKValidationError>;
//# sourceMappingURL=uploadfileop.d.ts.map