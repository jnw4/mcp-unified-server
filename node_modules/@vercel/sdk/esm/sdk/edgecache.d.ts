import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { DangerouslyDeleteBySrcImagesRequest } from "../models/dangerouslydeletebysrcimagesop.js";
import { DangerouslyDeleteByTagsRequest } from "../models/dangerouslydeletebytagsop.js";
import { InvalidateBySrcImagesRequest } from "../models/invalidatebysrcimagesop.js";
import { InvalidateByTagsRequest } from "../models/invalidatebytagsop.js";
export declare class EdgeCache extends ClientSDK {
    /**
     * Invalidate by tag
     *
     * @remarks
     * Marks a cache tag as stale, causing cache entries associated with that tag to be revalidated in the background on the next request.
     */
    invalidateByTags(request: InvalidateByTagsRequest, options?: RequestOptions): Promise<void>;
    /**
     * Dangerously delete by tag
     *
     * @remarks
     * Marks a cache tag as deleted, causing cache entries associated with that tag to be revalidated in the foreground on the next request. Use this method with caution because one tag can be associated with many paths and deleting the cache can cause many concurrent requests to the origin leading to cache stampede problem. This method is for advanced use cases and is not recommended; prefer using `invalidateByTag` instead.
     */
    dangerouslyDeleteByTags(request: DangerouslyDeleteByTagsRequest, options?: RequestOptions): Promise<void>;
    /**
     * Invalidate by source image
     *
     * @remarks
     * Marks a source image as stale, causing its corresponding transformed images to be revalidated in the background on the next request.
     */
    invalidateBySrcImages(request: InvalidateBySrcImagesRequest, options?: RequestOptions): Promise<void>;
    /**
     * Dangerously delete by source image
     *
     * @remarks
     * Marks a source image as deleted, causing cache entries associated with that source image to be revalidated in the foreground on the next request. Use this method with caution because one source image can be associated with many paths and deleting the cache can cause many concurrent requests to the origin leading to cache stampede problem. This method is for advanced use cases and is not recommended; prefer using `invalidateBySrcImage` instead.
     */
    dangerouslyDeleteBySrcImages(request: DangerouslyDeleteBySrcImagesRequest, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=edgecache.d.ts.map