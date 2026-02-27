import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { DeleteConfigurableLogDrainRequest } from "../models/deleteconfigurablelogdrainop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Deletes a Configurable Log Drain (deprecated)
 *
 * @remarks
 * Deletes a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be deleted.
 */
export declare function logDrainsDeleteConfigurableLogDrain(client: VercelCore, request: DeleteConfigurableLogDrainRequest, options?: RequestOptions): APIPromise<Result<void, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=logDrainsDeleteConfigurableLogDrain.d.ts.map