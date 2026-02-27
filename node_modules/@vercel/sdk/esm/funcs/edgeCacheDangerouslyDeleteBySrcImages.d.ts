import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { DangerouslyDeleteBySrcImagesRequest } from "../models/dangerouslydeletebysrcimagesop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Dangerously delete by source image
 *
 * @remarks
 * Marks a source image as deleted, causing cache entries associated with that source image to be revalidated in the foreground on the next request. Use this method with caution because one source image can be associated with many paths and deleting the cache can cause many concurrent requests to the origin leading to cache stampede problem. This method is for advanced use cases and is not recommended; prefer using `invalidateBySrcImage` instead.
 */
export declare function edgeCacheDangerouslyDeleteBySrcImages(client: VercelCore, request: DangerouslyDeleteBySrcImagesRequest, options?: RequestOptions): APIPromise<Result<void, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=edgeCacheDangerouslyDeleteBySrcImages.d.ts.map