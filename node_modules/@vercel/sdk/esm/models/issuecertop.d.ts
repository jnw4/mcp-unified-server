import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type IssueCertRequestBody = {
    /**
     * The common names the cert should be issued for
     */
    cns?: Array<string> | undefined;
};
export type IssueCertRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: IssueCertRequestBody | undefined;
};
export type IssueCertResponseBody = {
    id: string;
    createdAt: number;
    expiresAt: number;
    autoRenew: boolean;
    cns: Array<string>;
};
/** @internal */
export declare const IssueCertRequestBody$inboundSchema: z.ZodType<IssueCertRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type IssueCertRequestBody$Outbound = {
    cns?: Array<string> | undefined;
};
/** @internal */
export declare const IssueCertRequestBody$outboundSchema: z.ZodType<IssueCertRequestBody$Outbound, z.ZodTypeDef, IssueCertRequestBody>;
export declare function issueCertRequestBodyToJSON(issueCertRequestBody: IssueCertRequestBody): string;
export declare function issueCertRequestBodyFromJSON(jsonString: string): SafeParseResult<IssueCertRequestBody, SDKValidationError>;
/** @internal */
export declare const IssueCertRequest$inboundSchema: z.ZodType<IssueCertRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IssueCertRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: IssueCertRequestBody$Outbound | undefined;
};
/** @internal */
export declare const IssueCertRequest$outboundSchema: z.ZodType<IssueCertRequest$Outbound, z.ZodTypeDef, IssueCertRequest>;
export declare function issueCertRequestToJSON(issueCertRequest: IssueCertRequest): string;
export declare function issueCertRequestFromJSON(jsonString: string): SafeParseResult<IssueCertRequest, SDKValidationError>;
/** @internal */
export declare const IssueCertResponseBody$inboundSchema: z.ZodType<IssueCertResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type IssueCertResponseBody$Outbound = {
    id: string;
    createdAt: number;
    expiresAt: number;
    autoRenew: boolean;
    cns: Array<string>;
};
/** @internal */
export declare const IssueCertResponseBody$outboundSchema: z.ZodType<IssueCertResponseBody$Outbound, z.ZodTypeDef, IssueCertResponseBody>;
export declare function issueCertResponseBodyToJSON(issueCertResponseBody: IssueCertResponseBody): string;
export declare function issueCertResponseBodyFromJSON(jsonString: string): SafeParseResult<IssueCertResponseBody, SDKValidationError>;
//# sourceMappingURL=issuecertop.d.ts.map