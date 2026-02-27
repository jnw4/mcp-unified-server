import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UploadCertRequestBody = {
    /**
     * The certificate authority
     */
    ca: string;
    /**
     * The certificate key
     */
    key: string;
    /**
     * The certificate
     */
    cert: string;
    /**
     * Skip validation of the certificate
     */
    skipValidation?: boolean | undefined;
};
export type UploadCertRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UploadCertRequestBody | undefined;
};
export type UploadCertResponseBody = {
    id: string;
    createdAt: number;
    expiresAt: number;
    autoRenew: boolean;
    cns: Array<string>;
};
/** @internal */
export declare const UploadCertRequestBody$inboundSchema: z.ZodType<UploadCertRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadCertRequestBody$Outbound = {
    ca: string;
    key: string;
    cert: string;
    skipValidation?: boolean | undefined;
};
/** @internal */
export declare const UploadCertRequestBody$outboundSchema: z.ZodType<UploadCertRequestBody$Outbound, z.ZodTypeDef, UploadCertRequestBody>;
export declare function uploadCertRequestBodyToJSON(uploadCertRequestBody: UploadCertRequestBody): string;
export declare function uploadCertRequestBodyFromJSON(jsonString: string): SafeParseResult<UploadCertRequestBody, SDKValidationError>;
/** @internal */
export declare const UploadCertRequest$inboundSchema: z.ZodType<UploadCertRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadCertRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UploadCertRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UploadCertRequest$outboundSchema: z.ZodType<UploadCertRequest$Outbound, z.ZodTypeDef, UploadCertRequest>;
export declare function uploadCertRequestToJSON(uploadCertRequest: UploadCertRequest): string;
export declare function uploadCertRequestFromJSON(jsonString: string): SafeParseResult<UploadCertRequest, SDKValidationError>;
/** @internal */
export declare const UploadCertResponseBody$inboundSchema: z.ZodType<UploadCertResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadCertResponseBody$Outbound = {
    id: string;
    createdAt: number;
    expiresAt: number;
    autoRenew: boolean;
    cns: Array<string>;
};
/** @internal */
export declare const UploadCertResponseBody$outboundSchema: z.ZodType<UploadCertResponseBody$Outbound, z.ZodTypeDef, UploadCertResponseBody>;
export declare function uploadCertResponseBodyToJSON(uploadCertResponseBody: UploadCertResponseBody): string;
export declare function uploadCertResponseBodyFromJSON(jsonString: string): SafeParseResult<UploadCertResponseBody, SDKValidationError>;
//# sourceMappingURL=uploadcertop.d.ts.map