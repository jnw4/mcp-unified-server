import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The status of the snapshot.
 */
export declare const SnapshotStatus: {
    readonly Failed: "failed";
    readonly Created: "created";
    readonly Deleted: "deleted";
};
/**
 * The status of the snapshot.
 */
export type SnapshotStatus = ClosedEnum<typeof SnapshotStatus>;
/**
 * This object contains information related to a Snapshot of a Vercel Sandbox.
 */
export type Snapshot = {
    /**
     * The unique identifier of the snapshot.
     */
    id: string;
    /**
     * The unique identifier of the sandbox from which the snapshot was created.
     */
    sourceSandboxId: string;
    /**
     * The region where the snapshot is stored.
     */
    region: string;
    /**
     * The status of the snapshot.
     */
    status: SnapshotStatus;
    /**
     * The size of the snapshot in bytes.
     */
    sizeBytes: number;
    /**
     * The time when the snapshot will expire, in milliseconds since the epoch. If not set, the snapshot does not have any expiration.
     */
    expiresAt?: number | undefined;
    /**
     * The time when the snapshot was created, in milliseconds since the epoch.
     */
    createdAt: number;
    /**
     * The last time the snapshot was updated, in milliseconds since the epoch.
     */
    updatedAt: number;
};
/** @internal */
export declare const SnapshotStatus$inboundSchema: z.ZodNativeEnum<typeof SnapshotStatus>;
/** @internal */
export declare const SnapshotStatus$outboundSchema: z.ZodNativeEnum<typeof SnapshotStatus>;
/** @internal */
export declare const Snapshot$inboundSchema: z.ZodType<Snapshot, z.ZodTypeDef, unknown>;
/** @internal */
export type Snapshot$Outbound = {
    id: string;
    sourceSandboxId: string;
    region: string;
    status: string;
    sizeBytes: number;
    expiresAt?: number | undefined;
    createdAt: number;
    updatedAt: number;
};
/** @internal */
export declare const Snapshot$outboundSchema: z.ZodType<Snapshot$Outbound, z.ZodTypeDef, Snapshot>;
export declare function snapshotToJSON(snapshot: Snapshot): string;
export declare function snapshotFromJSON(jsonString: string): SafeParseResult<Snapshot, SDKValidationError>;
//# sourceMappingURL=snapshot.d.ts.map