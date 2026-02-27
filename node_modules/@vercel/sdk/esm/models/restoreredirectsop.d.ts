import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RestoreRedirectsRequestBody = {
    name?: string | undefined;
    /**
     * The redirects to restore. The source of the redirect is used to match the redirect to restore.
     */
    redirects: Array<string>;
};
export type RestoreRedirectsRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: RestoreRedirectsRequestBody | undefined;
};
export type RestoreRedirectsVersion = {
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
export type RestoreRedirectsResponseBody = {
    version: RestoreRedirectsVersion;
    restored: Array<string>;
    failedToRestore: Array<string>;
};
/** @internal */
export declare const RestoreRedirectsRequestBody$inboundSchema: z.ZodType<RestoreRedirectsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RestoreRedirectsRequestBody$Outbound = {
    name?: string | undefined;
    redirects: Array<string>;
};
/** @internal */
export declare const RestoreRedirectsRequestBody$outboundSchema: z.ZodType<RestoreRedirectsRequestBody$Outbound, z.ZodTypeDef, RestoreRedirectsRequestBody>;
export declare function restoreRedirectsRequestBodyToJSON(restoreRedirectsRequestBody: RestoreRedirectsRequestBody): string;
export declare function restoreRedirectsRequestBodyFromJSON(jsonString: string): SafeParseResult<RestoreRedirectsRequestBody, SDKValidationError>;
/** @internal */
export declare const RestoreRedirectsRequest$inboundSchema: z.ZodType<RestoreRedirectsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RestoreRedirectsRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: RestoreRedirectsRequestBody$Outbound | undefined;
};
/** @internal */
export declare const RestoreRedirectsRequest$outboundSchema: z.ZodType<RestoreRedirectsRequest$Outbound, z.ZodTypeDef, RestoreRedirectsRequest>;
export declare function restoreRedirectsRequestToJSON(restoreRedirectsRequest: RestoreRedirectsRequest): string;
export declare function restoreRedirectsRequestFromJSON(jsonString: string): SafeParseResult<RestoreRedirectsRequest, SDKValidationError>;
/** @internal */
export declare const RestoreRedirectsVersion$inboundSchema: z.ZodType<RestoreRedirectsVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type RestoreRedirectsVersion$Outbound = {
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
export declare const RestoreRedirectsVersion$outboundSchema: z.ZodType<RestoreRedirectsVersion$Outbound, z.ZodTypeDef, RestoreRedirectsVersion>;
export declare function restoreRedirectsVersionToJSON(restoreRedirectsVersion: RestoreRedirectsVersion): string;
export declare function restoreRedirectsVersionFromJSON(jsonString: string): SafeParseResult<RestoreRedirectsVersion, SDKValidationError>;
/** @internal */
export declare const RestoreRedirectsResponseBody$inboundSchema: z.ZodType<RestoreRedirectsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RestoreRedirectsResponseBody$Outbound = {
    version: RestoreRedirectsVersion$Outbound;
    restored: Array<string>;
    failedToRestore: Array<string>;
};
/** @internal */
export declare const RestoreRedirectsResponseBody$outboundSchema: z.ZodType<RestoreRedirectsResponseBody$Outbound, z.ZodTypeDef, RestoreRedirectsResponseBody>;
export declare function restoreRedirectsResponseBodyToJSON(restoreRedirectsResponseBody: RestoreRedirectsResponseBody): string;
export declare function restoreRedirectsResponseBodyFromJSON(jsonString: string): SafeParseResult<RestoreRedirectsResponseBody, SDKValidationError>;
//# sourceMappingURL=restoreredirectsop.d.ts.map