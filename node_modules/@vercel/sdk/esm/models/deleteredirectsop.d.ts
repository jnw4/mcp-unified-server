import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteRedirectsRequestBody = {
    name?: string | undefined;
    /**
     * The redirects to delete. The source of the redirect is used to match the redirect to delete.
     */
    redirects: Array<string>;
};
export type DeleteRedirectsRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: DeleteRedirectsRequestBody | undefined;
};
export type DeleteRedirectsResponseBodyBulkRedirectsResponseVersion = {
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
export type ResponseBody3 = {
    alias: string | null;
    version: DeleteRedirectsResponseBodyBulkRedirectsResponseVersion;
};
export type DeleteRedirectsResponseBodyBulkRedirectsVersion = {
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
export type DeleteRedirectsResponseBody2 = {
    alias?: any | null | undefined;
    version: DeleteRedirectsResponseBodyBulkRedirectsVersion;
};
export type DeleteRedirectsResponseBodyVersion = {
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
export type DeleteRedirectsResponseBody1 = {
    alias?: string | undefined;
    version: DeleteRedirectsResponseBodyVersion;
};
export type DeleteRedirectsResponseBody = DeleteRedirectsResponseBody2 | ResponseBody3 | DeleteRedirectsResponseBody1;
/** @internal */
export declare const DeleteRedirectsRequestBody$inboundSchema: z.ZodType<DeleteRedirectsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsRequestBody$Outbound = {
    name?: string | undefined;
    redirects: Array<string>;
};
/** @internal */
export declare const DeleteRedirectsRequestBody$outboundSchema: z.ZodType<DeleteRedirectsRequestBody$Outbound, z.ZodTypeDef, DeleteRedirectsRequestBody>;
export declare function deleteRedirectsRequestBodyToJSON(deleteRedirectsRequestBody: DeleteRedirectsRequestBody): string;
export declare function deleteRedirectsRequestBodyFromJSON(jsonString: string): SafeParseResult<DeleteRedirectsRequestBody, SDKValidationError>;
/** @internal */
export declare const DeleteRedirectsRequest$inboundSchema: z.ZodType<DeleteRedirectsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: DeleteRedirectsRequestBody$Outbound | undefined;
};
/** @internal */
export declare const DeleteRedirectsRequest$outboundSchema: z.ZodType<DeleteRedirectsRequest$Outbound, z.ZodTypeDef, DeleteRedirectsRequest>;
export declare function deleteRedirectsRequestToJSON(deleteRedirectsRequest: DeleteRedirectsRequest): string;
export declare function deleteRedirectsRequestFromJSON(jsonString: string): SafeParseResult<DeleteRedirectsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteRedirectsResponseBodyBulkRedirectsResponseVersion$inboundSchema: z.ZodType<DeleteRedirectsResponseBodyBulkRedirectsResponseVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsResponseBodyBulkRedirectsResponseVersion$Outbound = {
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
export declare const DeleteRedirectsResponseBodyBulkRedirectsResponseVersion$outboundSchema: z.ZodType<DeleteRedirectsResponseBodyBulkRedirectsResponseVersion$Outbound, z.ZodTypeDef, DeleteRedirectsResponseBodyBulkRedirectsResponseVersion>;
export declare function deleteRedirectsResponseBodyBulkRedirectsResponseVersionToJSON(deleteRedirectsResponseBodyBulkRedirectsResponseVersion: DeleteRedirectsResponseBodyBulkRedirectsResponseVersion): string;
export declare function deleteRedirectsResponseBodyBulkRedirectsResponseVersionFromJSON(jsonString: string): SafeParseResult<DeleteRedirectsResponseBodyBulkRedirectsResponseVersion, SDKValidationError>;
/** @internal */
export declare const ResponseBody3$inboundSchema: z.ZodType<ResponseBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBody3$Outbound = {
    alias: string | null;
    version: DeleteRedirectsResponseBodyBulkRedirectsResponseVersion$Outbound;
};
/** @internal */
export declare const ResponseBody3$outboundSchema: z.ZodType<ResponseBody3$Outbound, z.ZodTypeDef, ResponseBody3>;
export declare function responseBody3ToJSON(responseBody3: ResponseBody3): string;
export declare function responseBody3FromJSON(jsonString: string): SafeParseResult<ResponseBody3, SDKValidationError>;
/** @internal */
export declare const DeleteRedirectsResponseBodyBulkRedirectsVersion$inboundSchema: z.ZodType<DeleteRedirectsResponseBodyBulkRedirectsVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsResponseBodyBulkRedirectsVersion$Outbound = {
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
export declare const DeleteRedirectsResponseBodyBulkRedirectsVersion$outboundSchema: z.ZodType<DeleteRedirectsResponseBodyBulkRedirectsVersion$Outbound, z.ZodTypeDef, DeleteRedirectsResponseBodyBulkRedirectsVersion>;
export declare function deleteRedirectsResponseBodyBulkRedirectsVersionToJSON(deleteRedirectsResponseBodyBulkRedirectsVersion: DeleteRedirectsResponseBodyBulkRedirectsVersion): string;
export declare function deleteRedirectsResponseBodyBulkRedirectsVersionFromJSON(jsonString: string): SafeParseResult<DeleteRedirectsResponseBodyBulkRedirectsVersion, SDKValidationError>;
/** @internal */
export declare const DeleteRedirectsResponseBody2$inboundSchema: z.ZodType<DeleteRedirectsResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsResponseBody2$Outbound = {
    alias?: any | null | undefined;
    version: DeleteRedirectsResponseBodyBulkRedirectsVersion$Outbound;
};
/** @internal */
export declare const DeleteRedirectsResponseBody2$outboundSchema: z.ZodType<DeleteRedirectsResponseBody2$Outbound, z.ZodTypeDef, DeleteRedirectsResponseBody2>;
export declare function deleteRedirectsResponseBody2ToJSON(deleteRedirectsResponseBody2: DeleteRedirectsResponseBody2): string;
export declare function deleteRedirectsResponseBody2FromJSON(jsonString: string): SafeParseResult<DeleteRedirectsResponseBody2, SDKValidationError>;
/** @internal */
export declare const DeleteRedirectsResponseBodyVersion$inboundSchema: z.ZodType<DeleteRedirectsResponseBodyVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsResponseBodyVersion$Outbound = {
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
export declare const DeleteRedirectsResponseBodyVersion$outboundSchema: z.ZodType<DeleteRedirectsResponseBodyVersion$Outbound, z.ZodTypeDef, DeleteRedirectsResponseBodyVersion>;
export declare function deleteRedirectsResponseBodyVersionToJSON(deleteRedirectsResponseBodyVersion: DeleteRedirectsResponseBodyVersion): string;
export declare function deleteRedirectsResponseBodyVersionFromJSON(jsonString: string): SafeParseResult<DeleteRedirectsResponseBodyVersion, SDKValidationError>;
/** @internal */
export declare const DeleteRedirectsResponseBody1$inboundSchema: z.ZodType<DeleteRedirectsResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsResponseBody1$Outbound = {
    alias?: string | undefined;
    version: DeleteRedirectsResponseBodyVersion$Outbound;
};
/** @internal */
export declare const DeleteRedirectsResponseBody1$outboundSchema: z.ZodType<DeleteRedirectsResponseBody1$Outbound, z.ZodTypeDef, DeleteRedirectsResponseBody1>;
export declare function deleteRedirectsResponseBody1ToJSON(deleteRedirectsResponseBody1: DeleteRedirectsResponseBody1): string;
export declare function deleteRedirectsResponseBody1FromJSON(jsonString: string): SafeParseResult<DeleteRedirectsResponseBody1, SDKValidationError>;
/** @internal */
export declare const DeleteRedirectsResponseBody$inboundSchema: z.ZodType<DeleteRedirectsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsResponseBody$Outbound = DeleteRedirectsResponseBody2$Outbound | ResponseBody3$Outbound | DeleteRedirectsResponseBody1$Outbound;
/** @internal */
export declare const DeleteRedirectsResponseBody$outboundSchema: z.ZodType<DeleteRedirectsResponseBody$Outbound, z.ZodTypeDef, DeleteRedirectsResponseBody>;
export declare function deleteRedirectsResponseBodyToJSON(deleteRedirectsResponseBody: DeleteRedirectsResponseBody): string;
export declare function deleteRedirectsResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteRedirectsResponseBody, SDKValidationError>;
//# sourceMappingURL=deleteredirectsop.d.ts.map