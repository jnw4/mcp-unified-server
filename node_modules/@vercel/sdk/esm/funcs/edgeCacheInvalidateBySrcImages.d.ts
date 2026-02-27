import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { InvalidateBySrcImagesRequest } from "../models/invalidatebysrcimagesop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Invalidate by source image
 *
 * @remarks
 * Marks a source image as stale, causing its corresponding transformed images to be revalidated in the background on the next request.
 */
export declare function edgeCacheInvalidateBySrcImages(client: VercelCore, request: InvalidateBySrcImagesRequest, options?: RequestOptions): APIPromise<Result<void, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=edgeCacheInvalidateBySrcImages.d.ts.map