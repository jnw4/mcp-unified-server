import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateConfigurableLogDrainRequest, CreateConfigurableLogDrainResponseBody } from "../models/createconfigurablelogdrainop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Creates a Configurable Log Drain (deprecated)
 *
 * @remarks
 * Creates a configurable log drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed)
 */
export declare function logDrainsCreateConfigurableLogDrain(client: VercelCore, request: CreateConfigurableLogDrainRequest, options?: RequestOptions): APIPromise<Result<CreateConfigurableLogDrainResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=logDrainsCreateConfigurableLogDrain.d.ts.map