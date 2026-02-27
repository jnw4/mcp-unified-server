import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { UpdateDeploymentCheckRunRequest, UpdateDeploymentCheckRunResponseBody } from "../models/updatedeploymentcheckrunop.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update a check run
 *
 * @remarks
 * Update an existing check run for a deployment.
 */
export declare function checksV2UpdateDeploymentCheckRun(client: VercelCore, request: UpdateDeploymentCheckRunRequest, options?: RequestOptions): APIPromise<Result<UpdateDeploymentCheckRunResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=checksV2UpdateDeploymentCheckRun.d.ts.map