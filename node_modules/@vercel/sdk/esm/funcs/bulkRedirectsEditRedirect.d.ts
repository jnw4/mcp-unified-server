import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { EditRedirectRequest, EditRedirectResponseBody } from "../models/editredirectop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Edit a project-level redirect.
 *
 * @remarks
 * Edits a single redirect identified by its source path. Stages a new change with the modified redirect and returns the alias for the new version in the response.
 */
export declare function bulkRedirectsEditRedirect(client: VercelCore, request: EditRedirectRequest, options?: RequestOptions): APIPromise<Result<EditRedirectResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=bulkRedirectsEditRedirect.d.ts.map