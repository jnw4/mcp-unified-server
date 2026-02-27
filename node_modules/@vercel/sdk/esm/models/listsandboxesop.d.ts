import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { Sandbox, Sandbox$Outbound } from "./sandbox.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListSandboxesRequest = {
    /**
     * The unique identifier or name of the project to list sandboxes for.
     */
    project?: string | undefined;
    /**
     * Maximum number of sandboxes to return in the response. Used for pagination.
     */
    limit?: number | undefined;
    /**
     * Filter sandboxes created after this timestamp. Specified as Unix time in milliseconds.
     */
    since?: number | undefined;
    /**
     * Filter sandboxes created before this timestamp. Specified as Unix time in milliseconds.
     */
    until?: number | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type ListSandboxesResponseBodyPagination = {
    total: number;
    /**
     * Amount of items in the current page.
     */
    count: number;
    /**
     * Timestamp that must be used to request the next page.
     */
    next: number | null;
    /**
     * Timestamp that must be used to request the previous page.
     */
    prev: number | null;
};
export type ListSandboxesResponseBody2 = {
    sandboxes: Array<Sandbox>;
    pagination: ListSandboxesResponseBodyPagination;
};
export type ListSandboxesResponseBody1 = {};
/**
 * The list of sandboxes matching the request filters.
 */
export type ListSandboxesResponseBody = ListSandboxesResponseBody2 | ListSandboxesResponseBody1;
/** @internal */
export declare const ListSandboxesRequest$inboundSchema: z.ZodType<ListSandboxesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSandboxesRequest$Outbound = {
    project?: string | undefined;
    limit?: number | undefined;
    since?: number | undefined;
    until?: number | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListSandboxesRequest$outboundSchema: z.ZodType<ListSandboxesRequest$Outbound, z.ZodTypeDef, ListSandboxesRequest>;
export declare function listSandboxesRequestToJSON(listSandboxesRequest: ListSandboxesRequest): string;
export declare function listSandboxesRequestFromJSON(jsonString: string): SafeParseResult<ListSandboxesRequest, SDKValidationError>;
/** @internal */
export declare const ListSandboxesResponseBodyPagination$inboundSchema: z.ZodType<ListSandboxesResponseBodyPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSandboxesResponseBodyPagination$Outbound = {
    total: number;
    count: number;
    next: number | null;
    prev: number | null;
};
/** @internal */
export declare const ListSandboxesResponseBodyPagination$outboundSchema: z.ZodType<ListSandboxesResponseBodyPagination$Outbound, z.ZodTypeDef, ListSandboxesResponseBodyPagination>;
export declare function listSandboxesResponseBodyPaginationToJSON(listSandboxesResponseBodyPagination: ListSandboxesResponseBodyPagination): string;
export declare function listSandboxesResponseBodyPaginationFromJSON(jsonString: string): SafeParseResult<ListSandboxesResponseBodyPagination, SDKValidationError>;
/** @internal */
export declare const ListSandboxesResponseBody2$inboundSchema: z.ZodType<ListSandboxesResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSandboxesResponseBody2$Outbound = {
    sandboxes: Array<Sandbox$Outbound>;
    pagination: ListSandboxesResponseBodyPagination$Outbound;
};
/** @internal */
export declare const ListSandboxesResponseBody2$outboundSchema: z.ZodType<ListSandboxesResponseBody2$Outbound, z.ZodTypeDef, ListSandboxesResponseBody2>;
export declare function listSandboxesResponseBody2ToJSON(listSandboxesResponseBody2: ListSandboxesResponseBody2): string;
export declare function listSandboxesResponseBody2FromJSON(jsonString: string): SafeParseResult<ListSandboxesResponseBody2, SDKValidationError>;
/** @internal */
export declare const ListSandboxesResponseBody1$inboundSchema: z.ZodType<ListSandboxesResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSandboxesResponseBody1$Outbound = {};
/** @internal */
export declare const ListSandboxesResponseBody1$outboundSchema: z.ZodType<ListSandboxesResponseBody1$Outbound, z.ZodTypeDef, ListSandboxesResponseBody1>;
export declare function listSandboxesResponseBody1ToJSON(listSandboxesResponseBody1: ListSandboxesResponseBody1): string;
export declare function listSandboxesResponseBody1FromJSON(jsonString: string): SafeParseResult<ListSandboxesResponseBody1, SDKValidationError>;
/** @internal */
export declare const ListSandboxesResponseBody$inboundSchema: z.ZodType<ListSandboxesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSandboxesResponseBody$Outbound = ListSandboxesResponseBody2$Outbound | ListSandboxesResponseBody1$Outbound;
/** @internal */
export declare const ListSandboxesResponseBody$outboundSchema: z.ZodType<ListSandboxesResponseBody$Outbound, z.ZodTypeDef, ListSandboxesResponseBody>;
export declare function listSandboxesResponseBodyToJSON(listSandboxesResponseBody: ListSandboxesResponseBody): string;
export declare function listSandboxesResponseBodyFromJSON(jsonString: string): SafeParseResult<ListSandboxesResponseBody, SDKValidationError>;
//# sourceMappingURL=listsandboxesop.d.ts.map