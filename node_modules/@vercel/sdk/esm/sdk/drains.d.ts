import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CreateDrainRequest, CreateDrainResponseBody } from "../models/createdrainop.js";
import { DeleteDrainRequest } from "../models/deletedrainop.js";
import { GetDrainRequest, GetDrainResponseBody } from "../models/getdrainop.js";
import { GetDrainsRequest, GetDrainsResponseBody } from "../models/getdrainsop.js";
import { TestDrainRequest, TestDrainResponseBody } from "../models/testdrainop.js";
import { UpdateDrainRequest, UpdateDrainResponseBody } from "../models/updatedrainop.js";
export declare class Drains extends ClientSDK {
    /**
     * Create a new Drain
     *
     * @remarks
     * Create a new Drain with the provided configuration.
     */
    createDrain(request: CreateDrainRequest, options?: RequestOptions): Promise<CreateDrainResponseBody>;
    /**
     * Retrieve a list of all Drains
     *
     * @remarks
     * Allows to retrieve the list of Drains of the authenticated team.
     */
    getDrains(request: GetDrainsRequest, options?: RequestOptions): Promise<GetDrainsResponseBody>;
    /**
     * Delete a drain
     *
     * @remarks
     * Delete a specific Drain by passing the drain id in the URL.
     */
    deleteDrain(request: DeleteDrainRequest, options?: RequestOptions): Promise<void>;
    /**
     * Find a Drain by id
     *
     * @remarks
     * Get the information for a specific Drain by passing the drain id in the URL.
     */
    getDrain(request: GetDrainRequest, options?: RequestOptions): Promise<GetDrainResponseBody>;
    /**
     * Update an existing Drain
     *
     * @remarks
     * Update the configuration of an existing drain.
     */
    updateDrain(request: UpdateDrainRequest, options?: RequestOptions): Promise<UpdateDrainResponseBody>;
    /**
     * Validate Drain delivery configuration
     *
     * @remarks
     * Validate the delivery configuration of a Drain using sample events.
     */
    testDrain(request: TestDrainRequest, options?: RequestOptions): Promise<TestDrainResponseBody>;
}
//# sourceMappingURL=drains.d.ts.map