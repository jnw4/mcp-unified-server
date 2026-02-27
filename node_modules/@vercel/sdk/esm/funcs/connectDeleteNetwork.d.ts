import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { DeleteNetworkRequest } from "../models/deletenetworkop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete a Secure Compute network
 *
 * @remarks
 * Allows to delete a Secure Compute network.
 */
export declare function connectDeleteNetwork(client: VercelCore, request: DeleteNetworkRequest, options?: RequestOptions): APIPromise<Result<void, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=connectDeleteNetwork.d.ts.map