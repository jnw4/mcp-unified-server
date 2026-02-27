import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetConfigurableLogDrainRequest, GetConfigurableLogDrainResponseBody } from "../models/getconfigurablelogdrainop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Retrieves a Configurable Log Drain (deprecated)
 *
 * @remarks
 * Retrieves a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be accessed.
 */
export declare function logDrainsGetConfigurableLogDrain(client: VercelCore, request: GetConfigurableLogDrainRequest, options?: RequestOptions): APIPromise<Result<GetConfigurableLogDrainResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=logDrainsGetConfigurableLogDrain.d.ts.map