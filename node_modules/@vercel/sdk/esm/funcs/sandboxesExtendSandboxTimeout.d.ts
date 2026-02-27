import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ExtendSandboxTimeoutRequest, ExtendSandboxTimeoutResponseBody } from "../models/extendsandboxtimeoutop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Extend sandbox timeout
 *
 * @remarks
 * Extends the maximum execution time of a running sandbox. The sandbox must be active and able to accept commands. The total timeout cannot exceed the maximum allowed limit for your account.
 */
export declare function sandboxesExtendSandboxTimeout(client: VercelCore, request: ExtendSandboxTimeoutRequest, options?: RequestOptions): APIPromise<Result<ExtendSandboxTimeoutResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesExtendSandboxTimeout.d.ts.map