import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { ConnectIntegrationResourceToProjectRequest } from "../models/connectintegrationresourcetoprojectop.js";
import { CreateIntegrationStoreDirectRequest, CreateIntegrationStoreDirectResponseBody } from "../models/createintegrationstoredirectop.js";
import { DeleteConfigurationRequest } from "../models/deleteconfigurationop.js";
import { GetBillingPlansRequest, GetBillingPlansResponseBody } from "../models/getbillingplansop.js";
import { GetConfigurationRequest, GetConfigurationResponseBody } from "../models/getconfigurationop.js";
import { GetConfigurationProductsRequest, GetConfigurationProductsResponseBody } from "../models/getconfigurationproductsop.js";
import { GetConfigurationsRequest, GetConfigurationsResponseBody } from "../models/getconfigurationsop.js";
import { GitNamespacesRequest, GitNamespacesResponseBody } from "../models/gitnamespacesop.js";
import { SearchRepoRequest, SearchRepoResponseBody } from "../models/searchrepoop.js";
import { UpdateIntegrationDeploymentActionRequest } from "../models/updateintegrationdeploymentactionop.js";
export declare class Integrations extends ClientSDK {
    /**
     * Update deployment integration action
     *
     * @remarks
     * Updates the deployment integration action for the specified integration installation
     */
    updateIntegrationDeploymentAction(request: UpdateIntegrationDeploymentActionRequest, options?: RequestOptions): Promise<void>;
    /**
     * List git namespaces by provider
     *
     * @remarks
     * Lists git namespaces for a supported provider. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider is not provided, it will try to obtain it from the user that authenticated the request.
     */
    gitNamespaces(request: GitNamespacesRequest, options?: RequestOptions): Promise<Array<GitNamespacesResponseBody>>;
    /**
     * List git repositories linked to namespace by provider
     *
     * @remarks
     * Lists git repositories linked to a namespace `id` for a supported provider. A specific namespace `id` can be obtained via the `git-namespaces`  endpoint. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider or namespace is not provided, it will try to obtain it from the user that authenticated the request.
     */
    searchRepo(request: SearchRepoRequest, options?: RequestOptions): Promise<SearchRepoResponseBody>;
    /**
     * List integration billing plans
     *
     * @remarks
     * Get a list of billing plans for an integration and product.
     */
    getBillingPlans(request: GetBillingPlansRequest, options?: RequestOptions): Promise<GetBillingPlansResponseBody>;
    /**
     * Connect integration resource to project
     *
     * @remarks
     * Connects an integration resource to a Vercel project. This endpoint establishes a connection between a provisioned integration resource (from storage APIs like `POST /v1/storage/stores/integration/direct`) and a specific Vercel project.
     */
    connectIntegrationResourceToProject(request: ConnectIntegrationResourceToProjectRequest, options?: RequestOptions): Promise<void>;
    /**
     * Get configurations for the authenticated user or team
     *
     * @remarks
     * Allows to retrieve all configurations for an authenticated integration. When the `project` view is used, configurations generated for the authorization flow will be filtered out of the results.
     */
    getConfigurations(request: GetConfigurationsRequest, options?: RequestOptions): Promise<GetConfigurationsResponseBody>;
    /**
     * Retrieve an integration configuration
     *
     * @remarks
     * Allows to retrieve a the configuration with the provided id in case it exists. The authenticated user or team must be the owner of the config in order to access it.
     */
    getConfiguration(request: GetConfigurationRequest, options?: RequestOptions): Promise<GetConfigurationResponseBody>;
    /**
     * Delete an integration configuration
     *
     * @remarks
     * Allows to remove the configuration with the `id` provided in the parameters. The configuration and all of its resources will be removed. This includes Webhooks, LogDrains and Project Env variables.
     */
    deleteConfiguration(request: DeleteConfigurationRequest, options?: RequestOptions): Promise<void>;
    /**
     * List products for integration configuration
     *
     * @remarks
     * Returns products available for an integration configuration. Each product includes a `metadataSchema` field with the JSON Schema for required and optional metadata fields.
     */
    getConfigurationProducts(request: GetConfigurationProductsRequest, options?: RequestOptions): Promise<GetConfigurationProductsResponseBody>;
    /**
     * Create integration store (free and paid plans)
     *
     * @remarks
     * Creates an integration store with automatic billing plan handling. For free resources, omit `billingPlanId` to auto-discover free plans. For paid resources, provide a `billingPlanId` from the billing plans endpoint.
     */
    createIntegrationStoreDirect(request: CreateIntegrationStoreDirectRequest, options?: RequestOptions): Promise<CreateIntegrationStoreDirectResponseBody>;
}
//# sourceMappingURL=integrations.d.ts.map