import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateDeploymentCheckRunRequest, CreateDeploymentCheckRunResponseBody } from "../models/createdeploymentcheckrunop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a check run
 *
 * @remarks
 * Creates a new check run for a deployment.
 */
export declare function checksV2CreateDeploymentCheckRun(client: VercelCore, request: CreateDeploymentCheckRunRequest, options?: RequestOptions): APIPromise<Result<CreateDeploymentCheckRunResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=checksV2CreateDeploymentCheckRun.d.ts.map