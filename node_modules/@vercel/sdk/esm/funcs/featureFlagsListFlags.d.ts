import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListFlagsRequest, ListFlagsResponseBody } from "../models/listflagsop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List flags
 *
 * @remarks
 * Retrieve feature flags for a project. The list can be filtered by state and supports pagination.
 */
export declare function featureFlagsListFlags(client: VercelCore, request: ListFlagsRequest, options?: RequestOptions): APIPromise<Result<ListFlagsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsListFlags.d.ts.map