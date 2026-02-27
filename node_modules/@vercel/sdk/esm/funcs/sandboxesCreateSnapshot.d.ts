import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateSnapshotRequest, CreateSnapshotResponseBody } from "../models/createsnapshotop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a snapshot
 *
 * @remarks
 * Creates a point-in-time snapshot of a running sandbox's filesystem. Snapshots can be used to quickly restore a sandbox to a previous state or to create new sandboxes with pre-configured environments. The sandbox must be running and able to accept commands for a snapshot to be created. The sandbox will be terminated after the snapshot is created.
 */
export declare function sandboxesCreateSnapshot(client: VercelCore, request: CreateSnapshotRequest, options?: RequestOptions): APIPromise<Result<CreateSnapshotResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesCreateSnapshot.d.ts.map