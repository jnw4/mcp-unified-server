import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetDeploymentCheckRunRequest, GetDeploymentCheckRunResponseBody } from "../models/getdeploymentcheckrunop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a check run
 *
 * @remarks
 * Return a detailed response for a single check run.
 */
export declare function checksV2GetDeploymentCheckRun(client: VercelCore, request: GetDeploymentCheckRunRequest, options?: RequestOptions): APIPromise<Result<GetDeploymentCheckRunResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=checksV2GetDeploymentCheckRun.d.ts.map