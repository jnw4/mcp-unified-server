import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { Flag, Flag$Outbound } from "./flag.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The state of the flags to retrieve. Defaults to `active`.
 */
export declare const QueryParamState: {
    readonly Active: "active";
    readonly Archived: "archived";
};
/**
 * The state of the flags to retrieve. Defaults to `active`.
 */
export type QueryParamState = ClosedEnum<typeof QueryParamState>;
export type ListFlagsRequest = {
    /**
     * The project id or name
     */
    projectIdOrName: string;
    /**
     * The state of the flags to retrieve. Defaults to `active`.
     */
    state?: QueryParamState | undefined;
    /**
     * Whether to include metadata in the response
     */
    withMetadata?: boolean | undefined;
    /**
     * Maximum number of flags to return. When not set, all flags are returned.
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
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type ListFlagsPagination = {
    next: string | null;
};
export type ListFlagsResponseBody = {
    data: Array<Flag>;
    pagination: ListFlagsPagination;
};
/** @internal */
export declare const QueryParamState$inboundSchema: z.ZodNativeEnum<typeof QueryParamState>;
/** @internal */
export declare const QueryParamState$outboundSchema: z.ZodNativeEnum<typeof QueryParamState>;
/** @internal */
export declare const ListFlagsRequest$inboundSchema: z.ZodType<ListFlagsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagsRequest$Outbound = {
    projectIdOrName: string;
    state?: string | undefined;
    withMetadata?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
    search?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListFlagsRequest$outboundSchema: z.ZodType<ListFlagsRequest$Outbound, z.ZodTypeDef, ListFlagsRequest>;
export declare function listFlagsRequestToJSON(listFlagsRequest: ListFlagsRequest): string;
export declare function listFlagsRequestFromJSON(jsonString: string): SafeParseResult<ListFlagsRequest, SDKValidationError>;
/** @internal */
export declare const ListFlagsPagination$inboundSchema: z.ZodType<ListFlagsPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagsPagination$Outbound = {
    next: string | null;
};
/** @internal */
export declare const ListFlagsPagination$outboundSchema: z.ZodType<ListFlagsPagination$Outbound, z.ZodTypeDef, ListFlagsPagination>;
export declare function listFlagsPaginationToJSON(listFlagsPagination: ListFlagsPagination): string;
export declare function listFlagsPaginationFromJSON(jsonString: string): SafeParseResult<ListFlagsPagination, SDKValidationError>;
/** @internal */
export declare const ListFlagsResponseBody$inboundSchema: z.ZodType<ListFlagsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagsResponseBody$Outbound = {
    data: Array<Flag$Outbound>;
    pagination: ListFlagsPagination$Outbound;
};
/** @internal */
export declare const ListFlagsResponseBody$outboundSchema: z.ZodType<ListFlagsResponseBody$Outbound, z.ZodTypeDef, ListFlagsResponseBody>;
export declare function listFlagsResponseBodyToJSON(listFlagsResponseBody: ListFlagsResponseBody): string;
export declare function listFlagsResponseBodyFromJSON(jsonString: string): SafeParseResult<ListFlagsResponseBody, SDKValidationError>;
//# sourceMappingURL=listflagsop.d.ts.map