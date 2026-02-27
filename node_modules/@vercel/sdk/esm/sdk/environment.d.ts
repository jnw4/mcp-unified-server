import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CreateCustomEnvironmentRequest, CreateCustomEnvironmentResponseBody } from "../models/createcustomenvironmentop.js";
import { CreateSharedEnvVariableRequest, CreateSharedEnvVariableResponseBody } from "../models/createsharedenvvariableop.js";
import { DeleteSharedEnvVariableRequest, DeleteSharedEnvVariableResponseBody } from "../models/deletesharedenvvariableop.js";
import { GetCustomEnvironmentRequest, GetCustomEnvironmentResponseBody } from "../models/getcustomenvironmentop.js";
import { GetSharedEnvVarRequest, GetSharedEnvVarResponseBody } from "../models/getsharedenvvarop.js";
import { GetV9ProjectsIdOrNameCustomEnvironmentsRequest, GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody } from "../models/getv9projectsidornamecustomenvironmentsop.js";
import { ListSharedEnvVariableRequest, ListSharedEnvVariableResponseBody } from "../models/listsharedenvvariableop.js";
import { RemoveCustomEnvironmentRequest, RemoveCustomEnvironmentResponseBody } from "../models/removecustomenvironmentop.js";
import { UnlinkSharedEnvVariableRequest, UnlinkSharedEnvVariableResponseBody } from "../models/unlinksharedenvvariableop.js";
import { UpdateCustomEnvironmentRequest, UpdateCustomEnvironmentResponseBody } from "../models/updatecustomenvironmentop.js";
import { UpdateSharedEnvVariableRequest, UpdateSharedEnvVariableResponseBody } from "../models/updatesharedenvvariableop.js";
export declare class Environment extends ClientSDK {
    /**
     * Create one or more shared environment variables
     *
     * @remarks
     * Creates shared environment variable(s) for a team.
     */
    createSharedEnvVariable(request: CreateSharedEnvVariableRequest, options?: RequestOptions): Promise<CreateSharedEnvVariableResponseBody>;
    /**
     * Lists all Shared Environment Variables for a team
     *
     * @remarks
     * Lists all Shared Environment Variables for a team, taking into account optional filters.
     */
    listSharedEnvVariable(request: ListSharedEnvVariableRequest, options?: RequestOptions): Promise<ListSharedEnvVariableResponseBody>;
    /**
     * Updates one or more shared environment variables
     *
     * @remarks
     * Updates a given Shared Environment Variable for a Team.
     */
    updateSharedEnvVariable(request: UpdateSharedEnvVariableRequest, options?: RequestOptions): Promise<UpdateSharedEnvVariableResponseBody>;
    /**
     * Delete one or more Env Var
     *
     * @remarks
     * Deletes one or many Shared Environment Variables for a given team.
     */
    deleteSharedEnvVariable(request: DeleteSharedEnvVariableRequest, options?: RequestOptions): Promise<DeleteSharedEnvVariableResponseBody>;
    /**
     * Retrieve the decrypted value of a Shared Environment Variable by id.
     *
     * @remarks
     * Retrieve the decrypted value of a Shared Environment Variable by id.
     */
    getSharedEnvVar(request: GetSharedEnvVarRequest, options?: RequestOptions): Promise<GetSharedEnvVarResponseBody>;
    /**
     * Disconnects a shared environment variable for a given project
     *
     * @remarks
     * Disconnects a shared environment variable for a given project
     */
    unlinkSharedEnvVariable(request: UnlinkSharedEnvVariableRequest, options?: RequestOptions): Promise<UnlinkSharedEnvVariableResponseBody>;
    /**
     * Create a custom environment for the current project.
     *
     * @remarks
     * Creates a custom environment for the current project. Cannot be named 'Production' or 'Preview'.
     */
    createCustomEnvironment(request: CreateCustomEnvironmentRequest, options?: RequestOptions): Promise<CreateCustomEnvironmentResponseBody>;
    /**
     * Retrieve custom environments
     *
     * @remarks
     * Retrieve custom environments for the project. Must not be named 'Production' or 'Preview'.
     */
    getV9ProjectsIdOrNameCustomEnvironments(request: GetV9ProjectsIdOrNameCustomEnvironmentsRequest, options?: RequestOptions): Promise<GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody>;
    /**
     * Retrieve a custom environment
     *
     * @remarks
     * Retrieve a custom environment for the project. Must not be named 'Production' or 'Preview'.
     */
    getCustomEnvironment(request: GetCustomEnvironmentRequest, options?: RequestOptions): Promise<GetCustomEnvironmentResponseBody>;
    /**
     * Update a custom environment
     *
     * @remarks
     * Update a custom environment for the project. Must not be named 'Production' or 'Preview'.
     */
    updateCustomEnvironment(request: UpdateCustomEnvironmentRequest, options?: RequestOptions): Promise<UpdateCustomEnvironmentResponseBody>;
    /**
     * Remove a custom environment
     *
     * @remarks
     * Remove a custom environment for the project. Must not be named 'Production' or 'Preview'.
     */
    removeCustomEnvironment(request: RemoveCustomEnvironmentRequest, options?: RequestOptions): Promise<RemoveCustomEnvironmentResponseBody>;
}
//# sourceMappingURL=environment.d.ts.map