import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListSandboxesRequest, ListSandboxesResponseBody } from "../models/listsandboxesop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List sandboxes
 *
 * @remarks
 * Retrieves a paginated list of sandboxes belonging to a specific project. Results can be filtered by creation time using the `since` and `until` parameters.
 */
export declare function sandboxesListSandboxes(client: VercelCore, request: ListSandboxesRequest, options?: RequestOptions): APIPromise<Result<ListSandboxesResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesListSandboxes.d.ts.map