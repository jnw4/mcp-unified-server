import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetVersionsRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type Versions = {
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
export type GetVersionsResponseBody = {
    versions: Array<Versions>;
};
/** @internal */
export declare const GetVersionsRequest$inboundSchema: z.ZodType<GetVersionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetVersionsRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetVersionsRequest$outboundSchema: z.ZodType<GetVersionsRequest$Outbound, z.ZodTypeDef, GetVersionsRequest>;
export declare function getVersionsRequestToJSON(getVersionsRequest: GetVersionsRequest): string;
export declare function getVersionsRequestFromJSON(jsonString: string): SafeParseResult<GetVersionsRequest, SDKValidationError>;
/** @internal */
export declare const Versions$inboundSchema: z.ZodType<Versions, z.ZodTypeDef, unknown>;
/** @internal */
export type Versions$Outbound = {
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
export declare const Versions$outboundSchema: z.ZodType<Versions$Outbound, z.ZodTypeDef, Versions>;
export declare function versionsToJSON(versions: Versions): string;
export declare function versionsFromJSON(jsonString: string): SafeParseResult<Versions, SDKValidationError>;
/** @internal */
export declare const GetVersionsResponseBody$inboundSchema: z.ZodType<GetVersionsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetVersionsResponseBody$Outbound = {
    versions: Array<Versions$Outbound>;
};
/** @internal */
export declare const GetVersionsResponseBody$outboundSchema: z.ZodType<GetVersionsResponseBody$Outbound, z.ZodTypeDef, GetVersionsResponseBody>;
export declare function getVersionsResponseBodyToJSON(getVersionsResponseBody: GetVersionsResponseBody): string;
export declare function getVersionsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetVersionsResponseBody, SDKValidationError>;
//# sourceMappingURL=getversionsop.d.ts.map