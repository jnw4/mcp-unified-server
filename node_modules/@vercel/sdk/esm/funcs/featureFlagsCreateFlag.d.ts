import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateFlagRequest, CreateFlagResponseBody } from "../models/createflagop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a flag
 *
 * @remarks
 * Create a new feature flag for a project. The flag must have a unique slug within the project and specify its kind (boolean, string, or number).
 */
export declare function featureFlagsCreateFlag(client: VercelCore, request: CreateFlagRequest, options?: RequestOptions): APIPromise<Result<CreateFlagResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsCreateFlag.d.ts.map