import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetSandboxRequest, GetSandboxResponseBody } from "../models/getsandboxop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a sandbox
 *
 * @remarks
 * Retrieves detailed information about a specific sandbox, including its current status, resource configuration, and exposed routes.
 */
export declare function sandboxesGetSandbox(client: VercelCore, request: GetSandboxRequest, options?: RequestOptions): APIPromise<Result<GetSandboxResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesGetSandbox.d.ts.map