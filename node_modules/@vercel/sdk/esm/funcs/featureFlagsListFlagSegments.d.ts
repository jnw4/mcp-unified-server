import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListFlagSegmentsRequest, ListFlagSegmentsResponseBody } from "../models/listflagsegmentsop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List segments
 *
 * @remarks
 * List all feature flag segments for a project.
 */
export declare function featureFlagsListFlagSegments(client: VercelCore, request: ListFlagSegmentsRequest, options?: RequestOptions): APIPromise<Result<ListFlagSegmentsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsListFlagSegments.d.ts.map