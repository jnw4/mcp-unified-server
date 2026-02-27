import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { DeleteProjectCheckRequest, DeleteProjectCheckResponseBody } from "../models/deleteprojectcheckop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete a check
 *
 * @remarks
 * Delete an existing check and all of its runs.
 */
export declare function checksV2DeleteProjectCheck(client: VercelCore, request: DeleteProjectCheckRequest, options?: RequestOptions): APIPromise<Result<DeleteProjectCheckResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=checksV2DeleteProjectCheck.d.ts.map