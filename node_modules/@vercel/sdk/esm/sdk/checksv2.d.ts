import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CreateDeploymentCheckRunRequest, CreateDeploymentCheckRunResponseBody } from "../models/createdeploymentcheckrunop.js";
import { CreateProjectCheckRequest, CreateProjectCheckResponseBody } from "../models/createprojectcheckop.js";
import { DeleteProjectCheckRequest, DeleteProjectCheckResponseBody } from "../models/deleteprojectcheckop.js";
import { GetDeploymentCheckRunRequest, GetDeploymentCheckRunResponseBody } from "../models/getdeploymentcheckrunop.js";
import { GetProjectCheckRequest, GetProjectCheckResponseBody } from "../models/getprojectcheckop.js";
import { ListCheckRunsRequest, ListCheckRunsResponseBody } from "../models/listcheckrunsop.js";
import { ListDeploymentCheckRunsRequest, ListDeploymentCheckRunsResponseBody } from "../models/listdeploymentcheckrunsop.js";
import { ListProjectChecksRequest, ListProjectChecksResponseBody } from "../models/listprojectchecksop.js";
import { UpdateDeploymentCheckRunRequest, UpdateDeploymentCheckRunResponseBody } from "../models/updatedeploymentcheckrunop.js";
import { UpdateProjectCheckRequest, UpdateProjectCheckResponseBody } from "../models/updateprojectcheckop.js";
export declare class ChecksV2 extends ClientSDK {
    /**
     * List all checks for a project
     *
     * @remarks
     * List all checks for a project, optionally filtered by target.
     */
    listProjectChecks(request: ListProjectChecksRequest, options?: RequestOptions): Promise<ListProjectChecksResponseBody>;
    /**
     * Create a check
     *
     * @remarks
     * Creates a new check for a project.
     */
    createProjectCheck(request: CreateProjectCheckRequest, options?: RequestOptions): Promise<CreateProjectCheckResponseBody>;
    /**
     * Get a check
     *
     * @remarks
     * Return a detailed response for a single check.
     */
    getProjectCheck(request: GetProjectCheckRequest, options?: RequestOptions): Promise<GetProjectCheckResponseBody>;
    /**
     * Update a check
     *
     * @remarks
     * Update an existing check.
     */
    updateProjectCheck(request: UpdateProjectCheckRequest, options?: RequestOptions): Promise<UpdateProjectCheckResponseBody>;
    /**
     * Delete a check
     *
     * @remarks
     * Delete an existing check and all of its runs.
     */
    deleteProjectCheck(request: DeleteProjectCheckRequest, options?: RequestOptions): Promise<DeleteProjectCheckResponseBody>;
    /**
     * List runs for a check
     *
     * @remarks
     * List all runs associated with a given check.
     */
    listCheckRuns(request: ListCheckRunsRequest, options?: RequestOptions): Promise<ListCheckRunsResponseBody>;
    /**
     * List check runs for a deployment
     *
     * @remarks
     * List all check runs for a deployment.
     */
    listDeploymentCheckRuns(request: ListDeploymentCheckRunsRequest, options?: RequestOptions): Promise<ListDeploymentCheckRunsResponseBody>;
    /**
     * Create a check run
     *
     * @remarks
     * Creates a new check run for a deployment.
     */
    createDeploymentCheckRun(request: CreateDeploymentCheckRunRequest, options?: RequestOptions): Promise<CreateDeploymentCheckRunResponseBody>;
    /**
     * Get a check run
     *
     * @remarks
     * Return a detailed response for a single check run.
     */
    getDeploymentCheckRun(request: GetDeploymentCheckRunRequest, options?: RequestOptions): Promise<GetDeploymentCheckRunResponseBody>;
    /**
     * Update a check run
     *
     * @remarks
     * Update an existing check run for a deployment.
     */
    updateDeploymentCheckRun(request: UpdateDeploymentCheckRunRequest, options?: RequestOptions): Promise<UpdateDeploymentCheckRunResponseBody>;
}
//# sourceMappingURL=checksv2.d.ts.map