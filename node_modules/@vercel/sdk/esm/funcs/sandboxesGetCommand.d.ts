import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetCommandRequest, GetCommandResponseBody } from "../models/getcommandop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a command
 *
 * @remarks
 * Retrieves the current status and details of a command executed in a sandbox. Use the `wait` parameter to block until the command finishes execution.
 */
export declare function sandboxesGetCommand(client: VercelCore, request: GetCommandRequest, options?: RequestOptions): APIPromise<Result<GetCommandResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesGetCommand.d.ts.map