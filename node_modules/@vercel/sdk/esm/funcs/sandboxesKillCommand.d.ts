import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { KillCommandRequest, KillCommandResponseBody } from "../models/killcommandop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Kill a command
 *
 * @remarks
 * Sends a signal to terminate a running command in a sandbox. The signal can be used to gracefully stop (SIGTERM) or forcefully kill (SIGKILL) the process. The command must still be running for this operation to succeed.
 */
export declare function sandboxesKillCommand(client: VercelCore, request: KillCommandRequest, options?: RequestOptions): APIPromise<Result<KillCommandResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesKillCommand.d.ts.map