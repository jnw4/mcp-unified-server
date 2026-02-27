import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ReadFileRequest } from "../models/readfileop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Read a file
 *
 * @remarks
 * Downloads the contents of a file from a sandbox's filesystem. The file content is returned as a binary stream with appropriate Content-Disposition headers for file download.
 */
export declare function sandboxesReadFile(client: VercelCore, request: ReadFileRequest, options?: RequestOptions): APIPromise<Result<ReadableStream<Uint8Array>, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesReadFile.d.ts.map