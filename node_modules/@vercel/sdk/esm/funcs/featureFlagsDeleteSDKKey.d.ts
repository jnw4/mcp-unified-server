import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { DeleteSDKKeyRequest } from "../models/deletesdkkeyop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete an SDK key
 *
 * @remarks
 * Deletes an SDK key.
 */
export declare function featureFlagsDeleteSDKKey(client: VercelCore, request: DeleteSDKKeyRequest, options?: RequestOptions): APIPromise<Result<void, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsDeleteSDKKey.d.ts.map