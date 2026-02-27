import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { UpdateVersionRequest, UpdateVersionResponseBody } from "../models/updateversionop.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Promote a staging version to production or restore a previous production version.
 *
 * @remarks
 * Update a version by promoting staging to production or restoring a previous production version
 */
export declare function bulkRedirectsUpdateVersion(client: VercelCore, request: UpdateVersionRequest, options?: RequestOptions): APIPromise<Result<UpdateVersionResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=bulkRedirectsUpdateVersion.d.ts.map