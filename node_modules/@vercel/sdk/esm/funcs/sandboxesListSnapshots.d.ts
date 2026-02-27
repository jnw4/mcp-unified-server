import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListSnapshotsRequest, ListSnapshotsResponseBody } from "../models/listsnapshotsop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List snapshots
 *
 * @remarks
 * Retrieves a paginated list of snapshots for a specific project.
 */
export declare function sandboxesListSnapshots(client: VercelCore, request: ListSnapshotsRequest, options?: RequestOptions): APIPromise<Result<ListSnapshotsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesListSnapshots.d.ts.map