import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest } from "../models/patchv1projectsprojectidrollbackdeploymentidupdatedescriptionop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Updates the description for a rollback
 *
 * @remarks
 * Updates the reason for a rollback, without changing the rollback status itself.
 */
export declare function projectsPatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription(client: VercelCore, request: PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest, options?: RequestOptions): APIPromise<Result<void, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=projectsPatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription.d.ts.map