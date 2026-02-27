import { VercelCore } from "../core.js";
import { JsonLStream } from "../lib/jsonl.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetCommandLogsRequest, GetCommandLogsResponseBody } from "../models/getcommandlogsop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Stream command logs
 *
 * @remarks
 * Streams the output of a command in real-time using newline-delimited JSON (ND-JSON). Each entry includes the output data and stream type. Stream types include `stdout`, `stderr`, and `error` (for stream failures).
 */
export declare function sandboxesGetCommandLogs(client: VercelCore, request: GetCommandLogsRequest, options?: RequestOptions): APIPromise<Result<JsonLStream<GetCommandLogsResponseBody>, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesGetCommandLogs.d.ts.map