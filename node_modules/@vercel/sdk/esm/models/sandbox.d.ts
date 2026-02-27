import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SandboxNetworkPolicy, SandboxNetworkPolicy$Outbound } from "./sandboxnetworkpolicy.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The status of the sandbox.
 */
export declare const SandboxStatus: {
    readonly Failed: "failed";
    readonly Aborted: "aborted";
    readonly Pending: "pending";
    readonly Stopping: "stopping";
    readonly Snapshotting: "snapshotting";
    readonly Running: "running";
    readonly Stopped: "stopped";
};
/**
 * The status of the sandbox.
 */
export type SandboxStatus = ClosedEnum<typeof SandboxStatus>;
/**
 * This object contains information related to a Vercel Sandbox.
 */
export type Sandbox = {
    /**
     * The unique identifier of the sandbox.
     */
    id: string;
    /**
     * Memory allocated to this sandbox in MB.
     */
    memory: number;
    /**
     * Number of vCPUs allocated to this sandbox.
     */
    vcpus: number;
    /**
     * The region where the sandbox is hosted.
     */
    region: string;
    /**
     * The runtime of the sandbox.
     */
    runtime: string;
    /**
     * The maximum amount of time the sandbox will run for in milliseconds.
     */
    timeout: number;
    /**
     * The status of the sandbox.
     */
    status: SandboxStatus;
    /**
     * The time when the sandbox was requested, in milliseconds since the epoch.
     */
    requestedAt: number;
    /**
     * The time when the sandbox was started, in milliseconds since the epoch.
     */
    startedAt?: number | undefined;
    /**
     * The working directory of the sandbox.
     */
    cwd: string;
    /**
     * The time when the sandbox was requested to stop, in milliseconds since the epoch.
     */
    requestedStopAt?: number | undefined;
    /**
     * The time when the sandbox was stopped, in milliseconds since the epoch.
     */
    stoppedAt?: number | undefined;
    /**
     * The time when the sandbox was aborted, in milliseconds since the epoch.
     */
    abortedAt?: number | undefined;
    /**
     * The duration of the sandbox in milliseconds.
     */
    duration?: number | undefined;
    /**
     * The unique identifier of the snapshot associated with this sandbox, if any.
     */
    sourceSnapshotId?: string | undefined;
    /**
     * The time when a snapshot was requested, in milliseconds since the epoch.
     */
    snapshottedAt?: number | undefined;
    /**
     * The time when the sandbox was created, in milliseconds since the epoch.
     */
    createdAt: number;
    /**
     * The last time the sandbox was updated, in milliseconds since the epoch.
     */
    updatedAt: number;
    /**
     * The network policy applied to this sandbox, if any.
     */
    networkPolicy?: SandboxNetworkPolicy | undefined;
};
/** @internal */
export declare const SandboxStatus$inboundSchema: z.ZodNativeEnum<typeof SandboxStatus>;
/** @internal */
export declare const SandboxStatus$outboundSchema: z.ZodNativeEnum<typeof SandboxStatus>;
/** @internal */
export declare const Sandbox$inboundSchema: z.ZodType<Sandbox, z.ZodTypeDef, unknown>;
/** @internal */
export type Sandbox$Outbound = {
    id: string;
    memory: number;
    vcpus: number;
    region: string;
    runtime: string;
    timeout: number;
    status: string;
    requestedAt: number;
    startedAt?: number | undefined;
    cwd: string;
    requestedStopAt?: number | undefined;
    stoppedAt?: number | undefined;
    abortedAt?: number | undefined;
    duration?: number | undefined;
    sourceSnapshotId?: string | undefined;
    snapshottedAt?: number | undefined;
    createdAt: number;
    updatedAt: number;
    networkPolicy?: SandboxNetworkPolicy$Outbound | undefined;
};
/** @internal */
export declare const Sandbox$outboundSchema: z.ZodType<Sandbox$Outbound, z.ZodTypeDef, Sandbox>;
export declare function sandboxToJSON(sandbox: Sandbox): string;
export declare function sandboxFromJSON(jsonString: string): SafeParseResult<Sandbox, SDKValidationError>;
//# sourceMappingURL=sandbox.d.ts.map