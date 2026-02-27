import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { RestoreRedirectsRequest, RestoreRedirectsResponseBody } from "../models/restoreredirectsop.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Restore staged project-level redirects to their production version.
 *
 * @remarks
 * Restores the provided redirects in the staging version to the value in the production version. If no production version exists, removes the redirects from staging.
 */
export declare function bulkRedirectsRestoreRedirects(client: VercelCore, request: RestoreRedirectsRequest, options?: RequestOptions): APIPromise<Result<RestoreRedirectsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=bulkRedirectsRestoreRedirects.d.ts.map