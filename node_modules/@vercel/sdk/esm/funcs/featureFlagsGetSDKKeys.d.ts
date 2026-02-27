import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetSDKKeysRequest, GetSDKKeysResponseBody } from "../models/getsdkkeysop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all SDK keys
 *
 * @remarks
 * Gets all SDK keys for a project.
 */
export declare function featureFlagsGetSDKKeys(client: VercelCore, request: GetSDKKeysRequest, options?: RequestOptions): APIPromise<Result<GetSDKKeysResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsGetSDKKeys.d.ts.map