import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { DeleteRedirectsRequest, DeleteRedirectsResponseBody } from "../models/deleteredirectsop.js";
import { EditRedirectRequest, EditRedirectResponseBody } from "../models/editredirectop.js";
import { GetRedirectsRequest, GetRedirectsResponseBody } from "../models/getredirectsop.js";
import { GetVersionsRequest, GetVersionsResponseBody } from "../models/getversionsop.js";
import { RestoreRedirectsRequest, RestoreRedirectsResponseBody } from "../models/restoreredirectsop.js";
import { StageRedirectsRequest, StageRedirectsResponseBody } from "../models/stageredirectsop.js";
import { UpdateVersionRequest, UpdateVersionResponseBody } from "../models/updateversionop.js";
export declare class BulkRedirects extends ClientSDK {
    /**
     * Stages new redirects for a project.
     *
     * @remarks
     * Stages new redirects for a project and returns the new version.
     */
    stageRedirects(request: StageRedirectsRequest, options?: RequestOptions): Promise<StageRedirectsResponseBody>;
    /**
     * Gets project-level redirects.
     *
     * @remarks
     * Get the version history for a project's bulk redirects
     */
    getRedirects(request: GetRedirectsRequest, options?: RequestOptions): Promise<GetRedirectsResponseBody>;
    /**
     * Delete project-level redirects.
     *
     * @remarks
     * Deletes the provided redirects from the latest version of the projects' bulk redirects. Stages a new change with the new redirects and returns the alias for the new version in the response.
     */
    deleteRedirects(request: DeleteRedirectsRequest, options?: RequestOptions): Promise<DeleteRedirectsResponseBody>;
    /**
     * Edit a project-level redirect.
     *
     * @remarks
     * Edits a single redirect identified by its source path. Stages a new change with the modified redirect and returns the alias for the new version in the response.
     */
    editRedirect(request: EditRedirectRequest, options?: RequestOptions): Promise<EditRedirectResponseBody>;
    /**
     * Restore staged project-level redirects to their production version.
     *
     * @remarks
     * Restores the provided redirects in the staging version to the value in the production version. If no production version exists, removes the redirects from staging.
     */
    restoreRedirects(request: RestoreRedirectsRequest, options?: RequestOptions): Promise<RestoreRedirectsResponseBody>;
    /**
     * Get the version history for a project's redirects.
     *
     * @remarks
     * Get the version history for a project's bulk redirects
     */
    getVersions(request: GetVersionsRequest, options?: RequestOptions): Promise<GetVersionsResponseBody>;
    /**
     * Promote a staging version to production or restore a previous production version.
     *
     * @remarks
     * Update a version by promoting staging to production or restoring a previous production version
     */
    updateVersion(request: UpdateVersionRequest, options?: RequestOptions): Promise<UpdateVersionResponseBody>;
}
//# sourceMappingURL=bulkredirects.d.ts.map