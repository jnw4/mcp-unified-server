import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { DeleteSnapshotRequest, DeleteSnapshotResponseBody } from "../models/deletesnapshotop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete a snapshot
 *
 * @remarks
 * Permanently deletes a snapshot and frees its associated storage. This action cannot be undone. After deletion, the snapshot can no longer be used to create new sandboxes.
 */
export declare function sandboxesDeleteSnapshot(client: VercelCore, request: DeleteSnapshotRequest, options?: RequestOptions): APIPromise<Result<DeleteSnapshotResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesDeleteSnapshot.d.ts.map