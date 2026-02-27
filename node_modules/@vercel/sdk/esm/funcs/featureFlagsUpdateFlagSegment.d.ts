import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { Segment } from "../models/segment.js";
import { UpdateFlagSegmentRequest } from "../models/updateflagsegmentop.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update a segment
 *
 * @remarks
 * Update an existing feature flag segment.
 */
export declare function featureFlagsUpdateFlagSegment(client: VercelCore, request: UpdateFlagSegmentRequest, options?: RequestOptions): APIPromise<Result<Segment, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsUpdateFlagSegment.d.ts.map