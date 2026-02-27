import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { Sandbox, Sandbox$Outbound } from "./sandbox.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { Snapshot, Snapshot$Outbound } from "./snapshot.js";
export type CreateSnapshotRequestBody = {
    /**
     * The number of milliseconds after which the snapshot will expire and be deleted. Use 0 for no expiration.
     */
    expiration?: number | undefined;
};
export type CreateSnapshotRequest = {
    /**
     * The unique identifier of the sandbox to snapshot.
     */
    sandboxId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateSnapshotRequestBody | undefined;
};
export type CreateSnapshotResponseBody = {
    /**
     * This object contains information related to a Snapshot of a Vercel Sandbox.
     */
    snapshot: Snapshot;
    /**
     * This object contains information related to a Vercel Sandbox.
     */
    sandbox: Sandbox;
};
/** @internal */
export declare const CreateSnapshotRequestBody$inboundSchema: z.ZodType<CreateSnapshotRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSnapshotRequestBody$Outbound = {
    expiration?: number | undefined;
};
/** @internal */
export declare const CreateSnapshotRequestBody$outboundSchema: z.ZodType<CreateSnapshotRequestBody$Outbound, z.ZodTypeDef, CreateSnapshotRequestBody>;
export declare function createSnapshotRequestBodyToJSON(createSnapshotRequestBody: CreateSnapshotRequestBody): string;
export declare function createSnapshotRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateSnapshotRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateSnapshotRequest$inboundSchema: z.ZodType<CreateSnapshotRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSnapshotRequest$Outbound = {
    sandboxId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateSnapshotRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CreateSnapshotRequest$outboundSchema: z.ZodType<CreateSnapshotRequest$Outbound, z.ZodTypeDef, CreateSnapshotRequest>;
export declare function createSnapshotRequestToJSON(createSnapshotRequest: CreateSnapshotRequest): string;
export declare function createSnapshotRequestFromJSON(jsonString: string): SafeParseResult<CreateSnapshotRequest, SDKValidationError>;
/** @internal */
export declare const CreateSnapshotResponseBody$inboundSchema: z.ZodType<CreateSnapshotResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSnapshotResponseBody$Outbound = {
    snapshot: Snapshot$Outbound;
    sandbox: Sandbox$Outbound;
};
/** @internal */
export declare const CreateSnapshotResponseBody$outboundSchema: z.ZodType<CreateSnapshotResponseBody$Outbound, z.ZodTypeDef, CreateSnapshotResponseBody>;
export declare function createSnapshotResponseBodyToJSON(createSnapshotResponseBody: CreateSnapshotResponseBody): string;
export declare function createSnapshotResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateSnapshotResponseBody, SDKValidationError>;
//# sourceMappingURL=createsnapshotop.d.ts.map