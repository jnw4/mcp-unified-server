import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { Snapshot, Snapshot$Outbound } from "./snapshot.js";
export type DeleteSnapshotRequest = {
    /**
     * The unique identifier of the snapshot to delete.
     */
    snapshotId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type DeleteSnapshotResponseBody = {
    /**
     * This object contains information related to a Snapshot of a Vercel Sandbox.
     */
    snapshot: Snapshot;
};
/** @internal */
export declare const DeleteSnapshotRequest$inboundSchema: z.ZodType<DeleteSnapshotRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSnapshotRequest$Outbound = {
    snapshotId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteSnapshotRequest$outboundSchema: z.ZodType<DeleteSnapshotRequest$Outbound, z.ZodTypeDef, DeleteSnapshotRequest>;
export declare function deleteSnapshotRequestToJSON(deleteSnapshotRequest: DeleteSnapshotRequest): string;
export declare function deleteSnapshotRequestFromJSON(jsonString: string): SafeParseResult<DeleteSnapshotRequest, SDKValidationError>;
/** @internal */
export declare const DeleteSnapshotResponseBody$inboundSchema: z.ZodType<DeleteSnapshotResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSnapshotResponseBody$Outbound = {
    snapshot: Snapshot$Outbound;
};
/** @internal */
export declare const DeleteSnapshotResponseBody$outboundSchema: z.ZodType<DeleteSnapshotResponseBody$Outbound, z.ZodTypeDef, DeleteSnapshotResponseBody>;
export declare function deleteSnapshotResponseBodyToJSON(deleteSnapshotResponseBody: DeleteSnapshotResponseBody): string;
export declare function deleteSnapshotResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteSnapshotResponseBody, SDKValidationError>;
//# sourceMappingURL=deletesnapshotop.d.ts.map