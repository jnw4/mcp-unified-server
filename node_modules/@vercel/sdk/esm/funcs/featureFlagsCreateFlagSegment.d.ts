import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateFlagSegmentRequest, CreateFlagSegmentResponseBody } from "../models/createflagsegmentop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a segment
 *
 * @remarks
 * Create a new feature flag segment.
 */
export declare function featureFlagsCreateFlagSegment(client: VercelCore, request: CreateFlagSegmentRequest, options?: RequestOptions): APIPromise<Result<CreateFlagSegmentResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsCreateFlagSegment.d.ts.map