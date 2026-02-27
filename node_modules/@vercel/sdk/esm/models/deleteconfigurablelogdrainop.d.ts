import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteConfigurableLogDrainRequest = {
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteConfigurableLogDrainRequest$inboundSchema: z.ZodType<DeleteConfigurableLogDrainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteConfigurableLogDrainRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteConfigurableLogDrainRequest$outboundSchema: z.ZodType<DeleteConfigurableLogDrainRequest$Outbound, z.ZodTypeDef, DeleteConfigurableLogDrainRequest>;
export declare function deleteConfigurableLogDrainRequestToJSON(deleteConfigurableLogDrainRequest: DeleteConfigurableLogDrainRequest): string;
export declare function deleteConfigurableLogDrainRequestFromJSON(jsonString: string): SafeParseResult<DeleteConfigurableLogDrainRequest, SDKValidationError>;
//# sourceMappingURL=deleteconfigurablelogdrainop.d.ts.map