import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { RunCommandRequest, RunCommandResponse } from "../models/runcommandop.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
export declare enum RunCommandAcceptEnum {
    applicationJson = "application/json",
    applicationXNdjson = "application/x-ndjson"
}
/**
 * Execute a command
 *
 * @remarks
 * Executes a shell command inside a running sandbox. The command runs asynchronously and returns immediately with a command ID that can be used to track its progress and retrieve its output. Optionally, use the `wait` parameter to stream the command status until completion.
 */
export declare function sandboxesRunCommand(client: VercelCore, request: RunCommandRequest, options?: RequestOptions & {
    acceptHeaderOverride?: RunCommandAcceptEnum;
}): APIPromise<Result<RunCommandResponse, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesRunCommand.d.ts.map