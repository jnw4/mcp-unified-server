import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateProjectCheckRequest, CreateProjectCheckResponseBody } from "../models/createprojectcheckop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a check
 *
 * @remarks
 * Creates a new check for a project.
 */
export declare function checksV2CreateProjectCheck(client: VercelCore, request: CreateProjectCheckRequest, options?: RequestOptions): APIPromise<Result<CreateProjectCheckResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=checksV2CreateProjectCheck.d.ts.map