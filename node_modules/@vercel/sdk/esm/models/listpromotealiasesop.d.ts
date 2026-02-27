import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListPromoteAliasesRequest = {
    projectId: string;
    /**
     * Maximum number of aliases to list from a request (max 100).
     */
    limit?: number | undefined;
    /**
     * Get aliases created after this epoch timestamp.
     */
    since?: number | undefined;
    /**
     * Get aliases created before this epoch timestamp.
     */
    until?: number | undefined;
    /**
     * Filter results down to aliases that failed to map to the requested deployment
     */
    failedOnly?: boolean | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type ResponseBodyAliases = {
    status: string;
    alias: string;
    id: string;
};
export type ListPromoteAliasesResponseBody2 = {
    aliases: Array<ResponseBodyAliases>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};
export type ListPromoteAliasesResponseBody1 = {};
export type ListPromoteAliasesResponseBody = ListPromoteAliasesResponseBody2 | ListPromoteAliasesResponseBody1;
/** @internal */
export declare const ListPromoteAliasesRequest$inboundSchema: z.ZodType<ListPromoteAliasesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListPromoteAliasesRequest$Outbound = {
    projectId: string;
    limit?: number | undefined;
    since?: number | undefined;
    until?: number | undefined;
    failedOnly?: boolean | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListPromoteAliasesRequest$outboundSchema: z.ZodType<ListPromoteAliasesRequest$Outbound, z.ZodTypeDef, ListPromoteAliasesRequest>;
export declare function listPromoteAliasesRequestToJSON(listPromoteAliasesRequest: ListPromoteAliasesRequest): string;
export declare function listPromoteAliasesRequestFromJSON(jsonString: string): SafeParseResult<ListPromoteAliasesRequest, SDKValidationError>;
/** @internal */
export declare const ResponseBodyAliases$inboundSchema: z.ZodType<ResponseBodyAliases, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyAliases$Outbound = {
    status: string;
    alias: string;
    id: string;
};
/** @internal */
export declare const ResponseBodyAliases$outboundSchema: z.ZodType<ResponseBodyAliases$Outbound, z.ZodTypeDef, ResponseBodyAliases>;
export declare function responseBodyAliasesToJSON(responseBodyAliases: ResponseBodyAliases): string;
export declare function responseBodyAliasesFromJSON(jsonString: string): SafeParseResult<ResponseBodyAliases, SDKValidationError>;
/** @internal */
export declare const ListPromoteAliasesResponseBody2$inboundSchema: z.ZodType<ListPromoteAliasesResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListPromoteAliasesResponseBody2$Outbound = {
    aliases: Array<ResponseBodyAliases$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListPromoteAliasesResponseBody2$outboundSchema: z.ZodType<ListPromoteAliasesResponseBody2$Outbound, z.ZodTypeDef, ListPromoteAliasesResponseBody2>;
export declare function listPromoteAliasesResponseBody2ToJSON(listPromoteAliasesResponseBody2: ListPromoteAliasesResponseBody2): string;
export declare function listPromoteAliasesResponseBody2FromJSON(jsonString: string): SafeParseResult<ListPromoteAliasesResponseBody2, SDKValidationError>;
/** @internal */
export declare const ListPromoteAliasesResponseBody1$inboundSchema: z.ZodType<ListPromoteAliasesResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListPromoteAliasesResponseBody1$Outbound = {};
/** @internal */
export declare const ListPromoteAliasesResponseBody1$outboundSchema: z.ZodType<ListPromoteAliasesResponseBody1$Outbound, z.ZodTypeDef, ListPromoteAliasesResponseBody1>;
export declare function listPromoteAliasesResponseBody1ToJSON(listPromoteAliasesResponseBody1: ListPromoteAliasesResponseBody1): string;
export declare function listPromoteAliasesResponseBody1FromJSON(jsonString: string): SafeParseResult<ListPromoteAliasesResponseBody1, SDKValidationError>;
/** @internal */
export declare const ListPromoteAliasesResponseBody$inboundSchema: z.ZodType<ListPromoteAliasesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListPromoteAliasesResponseBody$Outbound = ListPromoteAliasesResponseBody2$Outbound | ListPromoteAliasesResponseBody1$Outbound;
/** @internal */
export declare const ListPromoteAliasesResponseBody$outboundSchema: z.ZodType<ListPromoteAliasesResponseBody$Outbound, z.ZodTypeDef, ListPromoteAliasesResponseBody>;
export declare function listPromoteAliasesResponseBodyToJSON(listPromoteAliasesResponseBody: ListPromoteAliasesResponseBody): string;
export declare function listPromoteAliasesResponseBodyFromJSON(jsonString: string): SafeParseResult<ListPromoteAliasesResponseBody, SDKValidationError>;
//# sourceMappingURL=listpromotealiasesop.d.ts.map