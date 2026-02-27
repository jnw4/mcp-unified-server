import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteAccessGroupRequest = {
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
export declare const DeleteAccessGroupRequest$inboundSchema: z.ZodType<DeleteAccessGroupRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAccessGroupRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteAccessGroupRequest$outboundSchema: z.ZodType<DeleteAccessGroupRequest$Outbound, z.ZodTypeDef, DeleteAccessGroupRequest>;
export declare function deleteAccessGroupRequestToJSON(deleteAccessGroupRequest: DeleteAccessGroupRequest): string;
export declare function deleteAccessGroupRequestFromJSON(jsonString: string): SafeParseResult<DeleteAccessGroupRequest, SDKValidationError>;
//# sourceMappingURL=deleteaccessgroupop.d.ts.map