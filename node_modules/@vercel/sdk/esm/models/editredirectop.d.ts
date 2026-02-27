import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The redirect object to edit. The source field is used to match the redirect to modify.
 */
export type Redirect = {
    source: string;
    destination?: string | undefined;
    statusCode?: number | undefined;
    permanent?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    query?: boolean | undefined;
    preserveQueryParams?: boolean | undefined;
};
export type EditRedirectRequestBody = {
    name?: string | undefined;
    /**
     * The redirect object to edit. The source field is used to match the redirect to modify.
     */
    redirect: Redirect;
    /**
     * If true, restores the redirect from the latest production version to staging.
     */
    restore?: boolean | undefined;
};
export type EditRedirectRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: EditRedirectRequestBody | undefined;
};
export type EditRedirectVersion = {
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
export type EditRedirectResponseBody = {
    alias: string | null;
    version: EditRedirectVersion;
};
/** @internal */
export declare const Redirect$inboundSchema: z.ZodType<Redirect, z.ZodTypeDef, unknown>;
/** @internal */
export type Redirect$Outbound = {
    source: string;
    destination?: string | undefined;
    statusCode?: number | undefined;
    permanent?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    query?: boolean | undefined;
    preserveQueryParams?: boolean | undefined;
};
/** @internal */
export declare const Redirect$outboundSchema: z.ZodType<Redirect$Outbound, z.ZodTypeDef, Redirect>;
export declare function redirectToJSON(redirect: Redirect): string;
export declare function redirectFromJSON(jsonString: string): SafeParseResult<Redirect, SDKValidationError>;
/** @internal */
export declare const EditRedirectRequestBody$inboundSchema: z.ZodType<EditRedirectRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRedirectRequestBody$Outbound = {
    name?: string | undefined;
    redirect: Redirect$Outbound;
    restore?: boolean | undefined;
};
/** @internal */
export declare const EditRedirectRequestBody$outboundSchema: z.ZodType<EditRedirectRequestBody$Outbound, z.ZodTypeDef, EditRedirectRequestBody>;
export declare function editRedirectRequestBodyToJSON(editRedirectRequestBody: EditRedirectRequestBody): string;
export declare function editRedirectRequestBodyFromJSON(jsonString: string): SafeParseResult<EditRedirectRequestBody, SDKValidationError>;
/** @internal */
export declare const EditRedirectRequest$inboundSchema: z.ZodType<EditRedirectRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRedirectRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: EditRedirectRequestBody$Outbound | undefined;
};
/** @internal */
export declare const EditRedirectRequest$outboundSchema: z.ZodType<EditRedirectRequest$Outbound, z.ZodTypeDef, EditRedirectRequest>;
export declare function editRedirectRequestToJSON(editRedirectRequest: EditRedirectRequest): string;
export declare function editRedirectRequestFromJSON(jsonString: string): SafeParseResult<EditRedirectRequest, SDKValidationError>;
/** @internal */
export declare const EditRedirectVersion$inboundSchema: z.ZodType<EditRedirectVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRedirectVersion$Outbound = {
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
export declare const EditRedirectVersion$outboundSchema: z.ZodType<EditRedirectVersion$Outbound, z.ZodTypeDef, EditRedirectVersion>;
export declare function editRedirectVersionToJSON(editRedirectVersion: EditRedirectVersion): string;
export declare function editRedirectVersionFromJSON(jsonString: string): SafeParseResult<EditRedirectVersion, SDKValidationError>;
/** @internal */
export declare const EditRedirectResponseBody$inboundSchema: z.ZodType<EditRedirectResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type EditRedirectResponseBody$Outbound = {
    alias: string | null;
    version: EditRedirectVersion$Outbound;
};
/** @internal */
export declare const EditRedirectResponseBody$outboundSchema: z.ZodType<EditRedirectResponseBody$Outbound, z.ZodTypeDef, EditRedirectResponseBody>;
export declare function editRedirectResponseBodyToJSON(editRedirectResponseBody: EditRedirectResponseBody): string;
export declare function editRedirectResponseBodyFromJSON(jsonString: string): SafeParseResult<EditRedirectResponseBody, SDKValidationError>;
//# sourceMappingURL=editredirectop.d.ts.map