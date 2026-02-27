import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetProjectCheckRequest, GetProjectCheckResponseBody } from "../models/getprojectcheckop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a check
 *
 * @remarks
 * Return a detailed response for a single check.
 */
export declare function checksV2GetProjectCheck(client: VercelCore, request: GetProjectCheckRequest, options?: RequestOptions): APIPromise<Result<GetProjectCheckResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=checksV2GetProjectCheck.d.ts.map