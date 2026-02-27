import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteAccessGroupProjectRequest = {
    accessGroupIdOrName: string;
    projectId: string;
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
export declare const DeleteAccessGroupProjectRequest$inboundSchema: z.ZodType<DeleteAccessGroupProjectRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAccessGroupProjectRequest$Outbound = {
    accessGroupIdOrName: string;
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteAccessGroupProjectRequest$outboundSchema: z.ZodType<DeleteAccessGroupProjectRequest$Outbound, z.ZodTypeDef, DeleteAccessGroupProjectRequest>;
export declare function deleteAccessGroupProjectRequestToJSON(deleteAccessGroupProjectRequest: DeleteAccessGroupProjectRequest): string;
export declare function deleteAccessGroupProjectRequestFromJSON(jsonString: string): SafeParseResult<DeleteAccessGroupProjectRequest, SDKValidationError>;
//# sourceMappingURL=deleteaccessgroupprojectop.d.ts.map