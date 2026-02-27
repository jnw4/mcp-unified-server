import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CreateConfigurableLogDrainRequest, CreateConfigurableLogDrainResponseBody } from "../models/createconfigurablelogdrainop.js";
import { CreateLogDrainRequest, CreateLogDrainResponseBody } from "../models/createlogdrainop.js";
import { DeleteConfigurableLogDrainRequest } from "../models/deleteconfigurablelogdrainop.js";
import { DeleteIntegrationLogDrainRequest } from "../models/deleteintegrationlogdrainop.js";
import { GetAllLogDrainsRequest, GetAllLogDrainsResponseBody } from "../models/getalllogdrainsop.js";
import { GetConfigurableLogDrainRequest, GetConfigurableLogDrainResponseBody } from "../models/getconfigurablelogdrainop.js";
import { GetIntegrationLogDrainsRequest, GetIntegrationLogDrainsResponseBody } from "../models/getintegrationlogdrainsop.js";
export declare class LogDrains extends ClientSDK {
    /**
     * Retrieves a Configurable Log Drain (deprecated)
     *
     * @remarks
     * Retrieves a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be accessed.
     */
    getConfigurableLogDrain(request: GetConfigurableLogDrainRequest, options?: RequestOptions): Promise<GetConfigurableLogDrainResponseBody>;
    /**
     * Deletes a Configurable Log Drain (deprecated)
     *
     * @remarks
     * Deletes a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be deleted.
     */
    deleteConfigurableLogDrain(request: DeleteConfigurableLogDrainRequest, options?: RequestOptions): Promise<void>;
    /**
     * Retrieves a list of all the Log Drains (deprecated)
     *
     * @remarks
     * Retrieves a list of all the Log Drains owned by the account. This endpoint must be called with an account AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated account can be accessed.
     */
    getAllLogDrains(request: GetAllLogDrainsRequest, options?: RequestOptions): Promise<GetAllLogDrainsResponseBody>;
    /**
     * Creates a Configurable Log Drain (deprecated)
     *
     * @remarks
     * Creates a configurable log drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed)
     */
    createConfigurableLogDrain(request: CreateConfigurableLogDrainRequest, options?: RequestOptions): Promise<CreateConfigurableLogDrainResponseBody>;
    /**
     * Retrieves a list of Integration log drains (deprecated)
     *
     * @remarks
     * Retrieves a list of all Integration log drains that are defined for the authenticated user or team. When using an OAuth2 token, the list is limited to log drains created by the authenticated integration.
     */
    getIntegrationLogDrains(request: GetIntegrationLogDrainsRequest, options?: RequestOptions): Promise<Array<GetIntegrationLogDrainsResponseBody>>;
    /**
     * Creates a new Integration Log Drain (deprecated)
     *
     * @remarks
     * Creates an Integration log drain. This endpoint must be called with an OAuth2 client (integration), since log drains are tied to integrations. If it is called with a different token type it will produce a 400 error.
     */
    createLogDrain(request: CreateLogDrainRequest, options?: RequestOptions): Promise<CreateLogDrainResponseBody>;
    /**
     * Deletes the Integration log drain with the provided `id` (deprecated)
     *
     * @remarks
     * Deletes the Integration log drain with the provided `id`. When using an OAuth2 Token, the log drain can be deleted only if the integration owns it.
     */
    deleteIntegrationLogDrain(request: DeleteIntegrationLogDrainRequest, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=logdrains.d.ts.map