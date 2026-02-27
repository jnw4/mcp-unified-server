import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteIntegrationLogDrainRequest = {
    /**
     * ID of the log drain to be deleted
     */
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
export declare const DeleteIntegrationLogDrainRequest$inboundSchema: z.ZodType<DeleteIntegrationLogDrainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteIntegrationLogDrainRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteIntegrationLogDrainRequest$outboundSchema: z.ZodType<DeleteIntegrationLogDrainRequest$Outbound, z.ZodTypeDef, DeleteIntegrationLogDrainRequest>;
export declare function deleteIntegrationLogDrainRequestToJSON(deleteIntegrationLogDrainRequest: DeleteIntegrationLogDrainRequest): string;
export declare function deleteIntegrationLogDrainRequestFromJSON(jsonString: string): SafeParseResult<DeleteIntegrationLogDrainRequest, SDKValidationError>;
//# sourceMappingURL=deleteintegrationlogdrainop.d.ts.map