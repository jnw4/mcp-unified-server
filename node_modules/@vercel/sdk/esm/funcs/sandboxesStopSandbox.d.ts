import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { StopSandboxRequest, StopSandboxResponseBody } from "../models/stopsandboxop.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Stop a sandbox
 *
 * @remarks
 * Stops a running sandbox and releases its allocated resources. All running processes within the sandbox will be terminated. This action cannot be undone. A stopped sandbox cannot be restarted.
 */
export declare function sandboxesStopSandbox(client: VercelCore, request: StopSandboxRequest, options?: RequestOptions): APIPromise<Result<StopSandboxResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesStopSandbox.d.ts.map