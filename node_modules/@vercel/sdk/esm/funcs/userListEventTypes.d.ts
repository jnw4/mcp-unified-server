import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListEventTypesRequest, ListEventTypesResponseBody } from "../models/listeventtypesop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List Event Types
 *
 * @remarks
 * Returns the list of user-facing event types with descriptions.
 */
export declare function userListEventTypes(client: VercelCore, request: ListEventTypesRequest, options?: RequestOptions): APIPromise<Result<ListEventTypesResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=userListEventTypes.d.ts.map