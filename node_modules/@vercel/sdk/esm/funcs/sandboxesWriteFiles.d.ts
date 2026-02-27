import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { WriteFilesRequest, WriteFilesResponseBody } from "../models/writefilesop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Write files
 *
 * @remarks
 * Uploads and extracts files to a sandbox's filesystem. Files must be uploaded as a gzipped tarball (`.tar.gz`) with the `Content-Type` header set to `application/gzip`. The tarball contents are extracted to the sandbox's working directory, or to a custom directory specified via the `x-cwd` header.
 */
export declare function sandboxesWriteFiles(client: VercelCore, request: WriteFilesRequest, options?: RequestOptions): APIPromise<Result<WriteFilesResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesWriteFiles.d.ts.map