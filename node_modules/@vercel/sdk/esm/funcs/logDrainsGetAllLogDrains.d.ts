import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetAllLogDrainsRequest, GetAllLogDrainsResponseBody } from "../models/getalllogdrainsop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Retrieves a list of all the Log Drains (deprecated)
 *
 * @remarks
 * Retrieves a list of all the Log Drains owned by the account. This endpoint must be called with an account AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated account can be accessed.
 */
export declare function logDrainsGetAllLogDrains(client: VercelCore, request: GetAllLogDrainsRequest, options?: RequestOptions): APIPromise<Result<GetAllLogDrainsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=logDrainsGetAllLogDrains.d.ts.map