import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { DangerouslyDeleteByTagsRequest } from "../models/dangerouslydeletebytagsop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Dangerously delete by tag
 *
 * @remarks
 * Marks a cache tag as deleted, causing cache entries associated with that tag to be revalidated in the foreground on the next request. Use this method with caution because one tag can be associated with many paths and deleting the cache can cause many concurrent requests to the origin leading to cache stampede problem. This method is for advanced use cases and is not recommended; prefer using `invalidateByTag` instead.
 */
export declare function edgeCacheDangerouslyDeleteByTags(client: VercelCore, request: DangerouslyDeleteByTagsRequest, options?: RequestOptions): APIPromise<Result<void, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=edgeCacheDangerouslyDeleteByTags.d.ts.map