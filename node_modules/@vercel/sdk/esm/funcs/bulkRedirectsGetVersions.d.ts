import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetVersionsRequest, GetVersionsResponseBody } from "../models/getversionsop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get the version history for a project's redirects.
 *
 * @remarks
 * Get the version history for a project's bulk redirects
 */
export declare function bulkRedirectsGetVersions(client: VercelCore, request: GetVersionsRequest, options?: RequestOptions): APIPromise<Result<GetVersionsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=bulkRedirectsGetVersions.d.ts.map