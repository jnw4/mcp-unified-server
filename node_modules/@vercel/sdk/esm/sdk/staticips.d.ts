import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { UpdateStaticIpsRequest, UpdateStaticIpsResponseBody } from "../models/updatestaticipsop.js";
export declare class StaticIps extends ClientSDK {
    /**
     * Configures Static IPs for a project
     *
     * @remarks
     * Allows configuring Static IPs for a project
     */
    updateStaticIps(request: UpdateStaticIpsRequest, options?: RequestOptions): Promise<Array<UpdateStaticIpsResponseBody>>;
}
//# sourceMappingURL=staticips.d.ts.map