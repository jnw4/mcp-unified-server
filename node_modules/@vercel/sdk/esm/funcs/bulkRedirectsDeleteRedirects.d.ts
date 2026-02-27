import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { DeleteRedirectsRequest, DeleteRedirectsResponseBody } from "../models/deleteredirectsop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete project-level redirects.
 *
 * @remarks
 * Deletes the provided redirects from the latest version of the projects' bulk redirects. Stages a new change with the new redirects and returns the alias for the new version in the response.
 */
export declare function bulkRedirectsDeleteRedirects(client: VercelCore, request: DeleteRedirectsRequest, options?: RequestOptions): APIPromise<Result<DeleteRedirectsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=bulkRedirectsDeleteRedirects.d.ts.map