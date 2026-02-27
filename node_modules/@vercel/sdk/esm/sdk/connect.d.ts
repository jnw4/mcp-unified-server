import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CreateNetworkRequest } from "../models/createnetworkop.js";
import { DeleteNetworkRequest } from "../models/deletenetworkop.js";
import { ListNetworksRequest } from "../models/listnetworksop.js";
import { Network } from "../models/network.js";
import { ReadNetworkRequest } from "../models/readnetworkop.js";
import { UpdateNetworkRequest } from "../models/updatenetworkop.js";
import { UpdateStaticIpsRequest, UpdateStaticIpsResponseBody } from "../models/updatestaticipsop.js";
export declare class Connect extends ClientSDK {
    /**
     * List Secure Compute networks
     *
     * @remarks
     * Allows to list Secure Compute networks.
     */
    listNetworks(request: ListNetworksRequest, options?: RequestOptions): Promise<Array<Network>>;
    /**
     * Create a Secure Compute network
     *
     * @remarks
     * Allows to create a Secure Compute network.
     */
    createNetwork(request: CreateNetworkRequest, options?: RequestOptions): Promise<Network>;
    /**
     * Delete a Secure Compute network
     *
     * @remarks
     * Allows to delete a Secure Compute network.
     */
    deleteNetwork(request: DeleteNetworkRequest, options?: RequestOptions): Promise<void>;
    /**
     * Update a Secure Compute network
     *
     * @remarks
     * Allows to update a Secure Compute network.
     */
    updateNetwork(request: UpdateNetworkRequest, options?: RequestOptions): Promise<Network>;
    /**
     * Read a Secure Compute network
     *
     * @remarks
     * Allows to read a Secure Compute network.
     */
    readNetwork(request: ReadNetworkRequest, options?: RequestOptions): Promise<Network>;
    /**
     * Configures Static IPs for a project
     *
     * @remarks
     * Allows configuring Static IPs for a project
     */
    updateStaticIps(request: UpdateStaticIpsRequest, options?: RequestOptions): Promise<Array<UpdateStaticIpsResponseBody>>;
}
//# sourceMappingURL=connect.d.ts.map