import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteDrainRequest = {
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
export declare const DeleteDrainRequest$inboundSchema: z.ZodType<DeleteDrainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteDrainRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteDrainRequest$outboundSchema: z.ZodType<DeleteDrainRequest$Outbound, z.ZodTypeDef, DeleteDrainRequest>;
export declare function deleteDrainRequestToJSON(deleteDrainRequest: DeleteDrainRequest): string;
export declare function deleteDrainRequestFromJSON(jsonString: string): SafeParseResult<DeleteDrainRequest, SDKValidationError>;
//# sourceMappingURL=deletedrainop.d.ts.map