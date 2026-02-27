import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetSnapshotRequest, GetSnapshotResponseBody } from "../models/getsnapshotop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a snapshot
 *
 * @remarks
 * Retrieves detailed information about a specific snapshot, including its creation time, size, expiration date, and the source sandbox it was created from.
 */
export declare function sandboxesGetSnapshot(client: VercelCore, request: GetSnapshotRequest, options?: RequestOptions): APIPromise<Result<GetSnapshotResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesGetSnapshot.d.ts.map