import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { Flag } from "../models/flag.js";
import { GetFlagRequest } from "../models/getflagop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a flag
 *
 * @remarks
 * Retrieve a specific feature flag by its ID or slug.
 */
export declare function featureFlagsGetFlag(client: VercelCore, request: GetFlagRequest, options?: RequestOptions): APIPromise<Result<Flag | undefined, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsGetFlag.d.ts.map