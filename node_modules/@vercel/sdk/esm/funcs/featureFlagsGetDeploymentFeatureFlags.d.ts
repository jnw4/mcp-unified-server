import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetDeploymentFeatureFlagsRequest, GetDeploymentFeatureFlagsResponseBody } from "../models/getdeploymentfeatureflagsop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Retrieve the feature flags of a deployment
 *
 * @remarks
 * Retrieve the feature flags of a deployment.
 */
export declare function featureFlagsGetDeploymentFeatureFlags(client: VercelCore, request: GetDeploymentFeatureFlagsRequest, options?: RequestOptions): APIPromise<Result<GetDeploymentFeatureFlagsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsGetDeploymentFeatureFlags.d.ts.map