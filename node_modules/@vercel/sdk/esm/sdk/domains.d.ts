import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CreateOrTransferDomainRequest, CreateOrTransferDomainResponseBody } from "../models/createortransferdomainop.js";
import { DeleteDomainRequest, DeleteDomainResponseBody } from "../models/deletedomainop.js";
import { GetDomainConfigRequest, GetDomainConfigResponseBody } from "../models/getdomainconfigop.js";
import { GetDomainRequest, GetDomainResponseBody } from "../models/getdomainop.js";
import { GetDomainsRequest, GetDomainsResponseBody } from "../models/getdomainsop.js";
import { PatchDomainRequest, PatchDomainResponseBody } from "../models/patchdomainop.js";
export declare class Domains extends ClientSDK {
    /**
     * Get a Domain's configuration
     *
     * @remarks
     * Get a Domain's configuration.
     */
    getDomainConfig(request: GetDomainConfigRequest, options?: RequestOptions): Promise<GetDomainConfigResponseBody>;
    /**
     * Get Information for a Single Domain
     *
     * @remarks
     * Get information for a single domain in an account or team.
     */
    getDomain(request: GetDomainRequest, options?: RequestOptions): Promise<GetDomainResponseBody>;
    /**
     * List all the domains
     *
     * @remarks
     * Retrieves a list of domains registered for the authenticated user or team. By default it returns the last 20 domains if no limit is provided.
     */
    getDomains(request: GetDomainsRequest, options?: RequestOptions): Promise<GetDomainsResponseBody>;
    /**
     * Add an existing domain to the Vercel platform
     *
     * @remarks
     * This endpoint is used for adding a new apex domain name with Vercel for the authenticating user. Note: This endpoint is no longer used for initiating domain transfers from external registrars to Vercel. For this, please use the endpoint [Transfer-in a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/transfer-in-a-domain).
     */
    createOrTransferDomain(request: CreateOrTransferDomainRequest, options?: RequestOptions): Promise<CreateOrTransferDomainResponseBody>;
    /**
     * Update or move apex domain
     *
     * @remarks
     * Update or move apex domain. Note: This endpoint is no longer used for updating auto-renew or nameservers. For this, please use the endpoints [Update auto-renew for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-auto-renew-for-a-domain) and [Update nameservers for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-nameservers-for-a-domain).
     */
    patchDomain(request: PatchDomainRequest, options?: RequestOptions): Promise<PatchDomainResponseBody>;
    /**
     * Remove a domain by name
     *
     * @remarks
     * Delete a previously registered domain name from Vercel. Deleting a domain will automatically remove any associated aliases.
     */
    deleteDomain(request: DeleteDomainRequest, options?: RequestOptions): Promise<DeleteDomainResponseBody>;
}
//# sourceMappingURL=domains.d.ts.map