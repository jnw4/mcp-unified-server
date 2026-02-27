import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateDirectoryRequest, CreateDirectoryResponseBody } from "../models/createdirectoryop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a directory
 *
 * @remarks
 * Creates a new directory in a sandbox's filesystem. By default, parent directories are created recursively if they don't exist (similar to `mkdir -p`).
 */
export declare function sandboxesCreateDirectory(client: VercelCore, request: CreateDirectoryRequest, options?: RequestOptions): APIPromise<Result<CreateDirectoryResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesCreateDirectory.d.ts.map