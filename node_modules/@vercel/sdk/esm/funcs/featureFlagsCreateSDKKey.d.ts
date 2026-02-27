import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateSDKKeyRequest } from "../models/createsdkkeyop.js";
import { FlagsSDKKey } from "../models/flagssdkkey.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create an SDK key
 *
 * @remarks
 * Creates an SDK key.
 */
export declare function featureFlagsCreateSDKKey(client: VercelCore, request: CreateSDKKeyRequest, options?: RequestOptions): APIPromise<Result<FlagsSDKKey, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsCreateSDKKey.d.ts.map