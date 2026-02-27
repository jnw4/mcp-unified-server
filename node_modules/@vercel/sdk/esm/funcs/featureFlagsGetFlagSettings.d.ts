import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetFlagSettingsRequest, GetFlagSettingsResponseBody } from "../models/getflagsettingsop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get project flag settings
 *
 * @remarks
 * Retrieve feature flag settings for a project.
 */
export declare function featureFlagsGetFlagSettings(client: VercelCore, request: GetFlagSettingsRequest, options?: RequestOptions): APIPromise<Result<GetFlagSettingsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsGetFlagSettings.d.ts.map