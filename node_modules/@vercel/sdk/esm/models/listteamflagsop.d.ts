import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { Flag, Flag$Outbound } from "./flag.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The state of the flags to retrieve. Defaults to `active`.
 */
export declare const ListTeamFlagsQueryParamState: {
    readonly Active: "active";
    readonly Archived: "archived";
};
/**
 * The state of the flags to retrieve. Defaults to `active`.
 */
export type ListTeamFlagsQueryParamState = ClosedEnum<typeof ListTeamFlagsQueryParamState>;
/**
 * The kind of flags to retrieve.
 */
export declare const QueryParamKind: {
    readonly Boolean: "boolean";
    readonly String: "string";
    readonly Number: "number";
};
/**
 * The kind of flags to retrieve.
 */
export type QueryParamKind = ClosedEnum<typeof QueryParamKind>;
export type ListTeamFlagsRequest = {
    /**
     * The state of the flags to retrieve. Defaults to `active`.
     */
    state?: ListTeamFlagsQueryParamState | undefined;
    /**
     * Whether to include metadata in the response
     */
    withMetadata?: boolean | undefined;
    /**
     * Maximum number of flags to return.
     */
    limit?: number | undefined;
    /**
     * Pagination cursor to continue from.
     */
    cursor?: string | undefined;
    /**
     * Search flags by their slug or description. Case-insensitive.
     */
    search?: string | undefined;
    /**
     * The kind of flags to retrieve.
     */
    kind?: QueryParamKind | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId: string;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type ListTeamFlagsPagination = {
    next: string | null;
};
export type ListTeamFlagsResponseBody = {
    data: Array<Flag>;
    pagination: ListTeamFlagsPagination;
};
/** @internal */
export declare const ListTeamFlagsQueryParamState$inboundSchema: z.ZodNativeEnum<typeof ListTeamFlagsQueryParamState>;
/** @internal */
export declare const ListTeamFlagsQueryParamState$outboundSchema: z.ZodNativeEnum<typeof ListTeamFlagsQueryParamState>;
/** @internal */
export declare const QueryParamKind$inboundSchema: z.ZodNativeEnum<typeof QueryParamKind>;
/** @internal */
export declare const QueryParamKind$outboundSchema: z.ZodNativeEnum<typeof QueryParamKind>;
/** @internal */
export declare const ListTeamFlagsRequest$inboundSchema: z.ZodType<ListTeamFlagsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListTeamFlagsRequest$Outbound = {
    state?: string | undefined;
    withMetadata?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
    search?: string | undefined;
    kind?: string | undefined;
    teamId: string;
    slug?: string | undefined;
};
/** @internal */
export declare const ListTeamFlagsRequest$outboundSchema: z.ZodType<ListTeamFlagsRequest$Outbound, z.ZodTypeDef, ListTeamFlagsRequest>;
export declare function listTeamFlagsRequestToJSON(listTeamFlagsRequest: ListTeamFlagsRequest): string;
export declare function listTeamFlagsRequestFromJSON(jsonString: string): SafeParseResult<ListTeamFlagsRequest, SDKValidationError>;
/** @internal */
export declare const ListTeamFlagsPagination$inboundSchema: z.ZodType<ListTeamFlagsPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type ListTeamFlagsPagination$Outbound = {
    next: string | null;
};
/** @internal */
export declare const ListTeamFlagsPagination$outboundSchema: z.ZodType<ListTeamFlagsPagination$Outbound, z.ZodTypeDef, ListTeamFlagsPagination>;
export declare function listTeamFlagsPaginationToJSON(listTeamFlagsPagination: ListTeamFlagsPagination): string;
export declare function listTeamFlagsPaginationFromJSON(jsonString: string): SafeParseResult<ListTeamFlagsPagination, SDKValidationError>;
/** @internal */
export declare const ListTeamFlagsResponseBody$inboundSchema: z.ZodType<ListTeamFlagsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListTeamFlagsResponseBody$Outbound = {
    data: Array<Flag$Outbound>;
    pagination: ListTeamFlagsPagination$Outbound;
};
/** @internal */
export declare const ListTeamFlagsResponseBody$outboundSchema: z.ZodType<ListTeamFlagsResponseBody$Outbound, z.ZodTypeDef, ListTeamFlagsResponseBody>;
export declare function listTeamFlagsResponseBodyToJSON(listTeamFlagsResponseBody: ListTeamFlagsResponseBody): string;
export declare function listTeamFlagsResponseBodyFromJSON(jsonString: string): SafeParseResult<ListTeamFlagsResponseBody, SDKValidationError>;
//# sourceMappingURL=listteamflagsop.d.ts.map