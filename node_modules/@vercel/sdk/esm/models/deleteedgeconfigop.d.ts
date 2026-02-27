import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteEdgeConfigRequest = {
    edgeConfigId: string;
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
export declare const DeleteEdgeConfigRequest$inboundSchema: z.ZodType<DeleteEdgeConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteEdgeConfigRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteEdgeConfigRequest$outboundSchema: z.ZodType<DeleteEdgeConfigRequest$Outbound, z.ZodTypeDef, DeleteEdgeConfigRequest>;
export declare function deleteEdgeConfigRequestToJSON(deleteEdgeConfigRequest: DeleteEdgeConfigRequest): string;
export declare function deleteEdgeConfigRequestFromJSON(jsonString: string): SafeParseResult<DeleteEdgeConfigRequest, SDKValidationError>;
//# sourceMappingURL=deleteedgeconfigop.d.ts.map