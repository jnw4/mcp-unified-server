import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteEdgeConfigSchemaRequest = {
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
export declare const DeleteEdgeConfigSchemaRequest$inboundSchema: z.ZodType<DeleteEdgeConfigSchemaRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteEdgeConfigSchemaRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteEdgeConfigSchemaRequest$outboundSchema: z.ZodType<DeleteEdgeConfigSchemaRequest$Outbound, z.ZodTypeDef, DeleteEdgeConfigSchemaRequest>;
export declare function deleteEdgeConfigSchemaRequestToJSON(deleteEdgeConfigSchemaRequest: DeleteEdgeConfigSchemaRequest): string;
export declare function deleteEdgeConfigSchemaRequestFromJSON(jsonString: string): SafeParseResult<DeleteEdgeConfigSchemaRequest, SDKValidationError>;
//# sourceMappingURL=deleteedgeconfigschemaop.d.ts.map