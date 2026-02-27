import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListProjectChecksRequest, ListProjectChecksResponseBody } from "../models/listprojectchecksop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List all checks for a project
 *
 * @remarks
 * List all checks for a project, optionally filtered by target.
 */
export declare function checksV2ListProjectChecks(client: VercelCore, request: ListProjectChecksRequest, options?: RequestOptions): APIPromise<Result<ListProjectChecksResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=checksV2ListProjectChecks.d.ts.map