import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListDeploymentCheckRunsRequest, ListDeploymentCheckRunsResponseBody } from "../models/listdeploymentcheckrunsop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List check runs for a deployment
 *
 * @remarks
 * List all check runs for a deployment.
 */
export declare function checksV2ListDeploymentCheckRuns(client: VercelCore, request: ListDeploymentCheckRunsRequest, options?: RequestOptions): APIPromise<Result<ListDeploymentCheckRunsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=checksV2ListDeploymentCheckRuns.d.ts.map