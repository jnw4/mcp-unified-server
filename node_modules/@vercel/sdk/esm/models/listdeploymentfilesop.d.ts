import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListDeploymentFilesRequest = {
    /**
     * The unique deployment identifier
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
export declare const ListDeploymentFilesRequest$inboundSchema: z.ZodType<ListDeploymentFilesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentFilesRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListDeploymentFilesRequest$outboundSchema: z.ZodType<ListDeploymentFilesRequest$Outbound, z.ZodTypeDef, ListDeploymentFilesRequest>;
export declare function listDeploymentFilesRequestToJSON(listDeploymentFilesRequest: ListDeploymentFilesRequest): string;
export declare function listDeploymentFilesRequestFromJSON(jsonString: string): SafeParseResult<ListDeploymentFilesRequest, SDKValidationError>;
//# sourceMappingURL=listdeploymentfilesop.d.ts.map