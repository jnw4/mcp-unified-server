import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { Snapshot, Snapshot$Outbound } from "./snapshot.js";
export type GetSnapshotRequest = {
    /**
     * The unique identifier of the snapshot to retrieve.
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
export type GetSnapshotResponseBody = {
    /**
     * This object contains information related to a Snapshot of a Vercel Sandbox.
     */
    snapshot: Snapshot;
};
/** @internal */
export declare const GetSnapshotRequest$inboundSchema: z.ZodType<GetSnapshotRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSnapshotRequest$Outbound = {
    snapshotId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetSnapshotRequest$outboundSchema: z.ZodType<GetSnapshotRequest$Outbound, z.ZodTypeDef, GetSnapshotRequest>;
export declare function getSnapshotRequestToJSON(getSnapshotRequest: GetSnapshotRequest): string;
export declare function getSnapshotRequestFromJSON(jsonString: string): SafeParseResult<GetSnapshotRequest, SDKValidationError>;
/** @internal */
export declare const GetSnapshotResponseBody$inboundSchema: z.ZodType<GetSnapshotResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSnapshotResponseBody$Outbound = {
    snapshot: Snapshot$Outbound;
};
/** @internal */
export declare const GetSnapshotResponseBody$outboundSchema: z.ZodType<GetSnapshotResponseBody$Outbound, z.ZodTypeDef, GetSnapshotResponseBody>;
export declare function getSnapshotResponseBodyToJSON(getSnapshotResponseBody: GetSnapshotResponseBody): string;
export declare function getSnapshotResponseBodyFromJSON(jsonString: string): SafeParseResult<GetSnapshotResponseBody, SDKValidationError>;
//# sourceMappingURL=getsnapshotop.d.ts.map