import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetDrainsRequest, GetDrainsResponseBody } from "../models/getdrainsop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Retrieve a list of all Drains
 *
 * @remarks
 * Allows to retrieve the list of Drains of the authenticated team.
 */
export declare function drainsGetDrains(client: VercelCore, request: GetDrainsRequest, options?: RequestOptions): APIPromise<Result<GetDrainsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=drainsGetDrains.d.ts.map