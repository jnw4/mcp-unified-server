import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetFlagSegmentRequest } from "../models/getflagsegmentop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { Segment } from "../models/segment.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a segment
 *
 * @remarks
 * Retrieve a feature flag segment by ID or slug.
 */
export declare function featureFlagsGetFlagSegment(client: VercelCore, request: GetFlagSegmentRequest, options?: RequestOptions): APIPromise<Result<Segment, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsGetFlagSegment.d.ts.map