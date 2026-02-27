import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteProjectCheckRequest = {
    projectIdOrName: string;
    checkId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type DeleteProjectCheckResponseBody = {
    success: boolean;
};
/** @internal */
export declare const DeleteProjectCheckRequest$inboundSchema: z.ZodType<DeleteProjectCheckRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteProjectCheckRequest$Outbound = {
    projectIdOrName: string;
    checkId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteProjectCheckRequest$outboundSchema: z.ZodType<DeleteProjectCheckRequest$Outbound, z.ZodTypeDef, DeleteProjectCheckRequest>;
export declare function deleteProjectCheckRequestToJSON(deleteProjectCheckRequest: DeleteProjectCheckRequest): string;
export declare function deleteProjectCheckRequestFromJSON(jsonString: string): SafeParseResult<DeleteProjectCheckRequest, SDKValidationError>;
/** @internal */
export declare const DeleteProjectCheckResponseBody$inboundSchema: z.ZodType<DeleteProjectCheckResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteProjectCheckResponseBody$Outbound = {
    success: boolean;
};
/** @internal */
export declare const DeleteProjectCheckResponseBody$outboundSchema: z.ZodType<DeleteProjectCheckResponseBody$Outbound, z.ZodTypeDef, DeleteProjectCheckResponseBody>;
export declare function deleteProjectCheckResponseBodyToJSON(deleteProjectCheckResponseBody: DeleteProjectCheckResponseBody): string;
export declare function deleteProjectCheckResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteProjectCheckResponseBody, SDKValidationError>;
//# sourceMappingURL=deleteprojectcheckop.d.ts.map