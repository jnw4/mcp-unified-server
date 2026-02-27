import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { StageRedirectsRequest, StageRedirectsResponseBody } from "../models/stageredirectsop.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Stages new redirects for a project.
 *
 * @remarks
 * Stages new redirects for a project and returns the new version.
 */
export declare function bulkRedirectsStageRedirects(client: VercelCore, request: StageRedirectsRequest, options?: RequestOptions): APIPromise<Result<StageRedirectsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=bulkRedirectsStageRedirects.d.ts.map