import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteProjectRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
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
export declare const DeleteProjectRequest$inboundSchema: z.ZodType<DeleteProjectRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteProjectRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteProjectRequest$outboundSchema: z.ZodType<DeleteProjectRequest$Outbound, z.ZodTypeDef, DeleteProjectRequest>;
export declare function deleteProjectRequestToJSON(deleteProjectRequest: DeleteProjectRequest): string;
export declare function deleteProjectRequestFromJSON(jsonString: string): SafeParseResult<DeleteProjectRequest, SDKValidationError>;
//# sourceMappingURL=deleteprojectop.d.ts.map