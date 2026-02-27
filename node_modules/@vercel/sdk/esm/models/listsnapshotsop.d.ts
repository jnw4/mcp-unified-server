import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { Snapshot, Snapshot$Outbound } from "./snapshot.js";
export type ListSnapshotsRequest = {
    /**
     * The unique identifier or name of the project to list snapshots for.
     */
    project?: string | undefined;
    /**
     * Maximum number of snapshots to return in the response. Used for pagination.
     */
    limit?: number | undefined;
    /**
     * Filter snapshots created after this timestamp. Specified as Unix time in milliseconds.
     */
    since?: number | undefined;
    /**
     * Filter snapshots created before this timestamp. Specified as Unix time in milliseconds.
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
export type ListSnapshotsResponseBodyPagination = {
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
export type ListSnapshotsResponseBody2 = {
    snapshots: Array<Snapshot>;
    pagination: ListSnapshotsResponseBodyPagination;
};
export type ListSnapshotsResponseBody1 = {};
export type ListSnapshotsResponseBody = ListSnapshotsResponseBody2 | ListSnapshotsResponseBody1;
/** @internal */
export declare const ListSnapshotsRequest$inboundSchema: z.ZodType<ListSnapshotsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSnapshotsRequest$Outbound = {
    project?: string | undefined;
    limit?: number | undefined;
    since?: number | undefined;
    until?: number | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListSnapshotsRequest$outboundSchema: z.ZodType<ListSnapshotsRequest$Outbound, z.ZodTypeDef, ListSnapshotsRequest>;
export declare function listSnapshotsRequestToJSON(listSnapshotsRequest: ListSnapshotsRequest): string;
export declare function listSnapshotsRequestFromJSON(jsonString: string): SafeParseResult<ListSnapshotsRequest, SDKValidationError>;
/** @internal */
export declare const ListSnapshotsResponseBodyPagination$inboundSchema: z.ZodType<ListSnapshotsResponseBodyPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSnapshotsResponseBodyPagination$Outbound = {
    total: number;
    count: number;
    next: number | null;
    prev: number | null;
};
/** @internal */
export declare const ListSnapshotsResponseBodyPagination$outboundSchema: z.ZodType<ListSnapshotsResponseBodyPagination$Outbound, z.ZodTypeDef, ListSnapshotsResponseBodyPagination>;
export declare function listSnapshotsResponseBodyPaginationToJSON(listSnapshotsResponseBodyPagination: ListSnapshotsResponseBodyPagination): string;
export declare function listSnapshotsResponseBodyPaginationFromJSON(jsonString: string): SafeParseResult<ListSnapshotsResponseBodyPagination, SDKValidationError>;
/** @internal */
export declare const ListSnapshotsResponseBody2$inboundSchema: z.ZodType<ListSnapshotsResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSnapshotsResponseBody2$Outbound = {
    snapshots: Array<Snapshot$Outbound>;
    pagination: ListSnapshotsResponseBodyPagination$Outbound;
};
/** @internal */
export declare const ListSnapshotsResponseBody2$outboundSchema: z.ZodType<ListSnapshotsResponseBody2$Outbound, z.ZodTypeDef, ListSnapshotsResponseBody2>;
export declare function listSnapshotsResponseBody2ToJSON(listSnapshotsResponseBody2: ListSnapshotsResponseBody2): string;
export declare function listSnapshotsResponseBody2FromJSON(jsonString: string): SafeParseResult<ListSnapshotsResponseBody2, SDKValidationError>;
/** @internal */
export declare const ListSnapshotsResponseBody1$inboundSchema: z.ZodType<ListSnapshotsResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSnapshotsResponseBody1$Outbound = {};
/** @internal */
export declare const ListSnapshotsResponseBody1$outboundSchema: z.ZodType<ListSnapshotsResponseBody1$Outbound, z.ZodTypeDef, ListSnapshotsResponseBody1>;
export declare function listSnapshotsResponseBody1ToJSON(listSnapshotsResponseBody1: ListSnapshotsResponseBody1): string;
export declare function listSnapshotsResponseBody1FromJSON(jsonString: string): SafeParseResult<ListSnapshotsResponseBody1, SDKValidationError>;
/** @internal */
export declare const ListSnapshotsResponseBody$inboundSchema: z.ZodType<ListSnapshotsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSnapshotsResponseBody$Outbound = ListSnapshotsResponseBody2$Outbound | ListSnapshotsResponseBody1$Outbound;
/** @internal */
export declare const ListSnapshotsResponseBody$outboundSchema: z.ZodType<ListSnapshotsResponseBody$Outbound, z.ZodTypeDef, ListSnapshotsResponseBody>;
export declare function listSnapshotsResponseBodyToJSON(listSnapshotsResponseBody: ListSnapshotsResponseBody): string;
export declare function listSnapshotsResponseBodyFromJSON(jsonString: string): SafeParseResult<ListSnapshotsResponseBody, SDKValidationError>;
//# sourceMappingURL=listsnapshotsop.d.ts.map