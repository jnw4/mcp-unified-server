import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { RequestRollbackRequest } from "../models/requestrollbackop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Points all production domains for a project to the given deploy
 *
 * @remarks
 * Allows users to rollback to a deployment.
 */
export declare function projectsRequestRollback(client: VercelCore, request: RequestRollbackRequest, options?: RequestOptions): APIPromise<Result<void, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=projectsRequestRollback.d.ts.map