import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteAliasRequest = {
    /**
     * The ID or alias that will be removed
     */
    aliasId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const DeleteAliasStatus: {
    readonly Success: "SUCCESS";
};
export type DeleteAliasStatus = ClosedEnum<typeof DeleteAliasStatus>;
/**
 * The alias was successfully removed
 */
export type DeleteAliasResponseBody = {
    status: DeleteAliasStatus;
};
/** @internal */
export declare const DeleteAliasRequest$inboundSchema: z.ZodType<DeleteAliasRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAliasRequest$Outbound = {
    aliasId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteAliasRequest$outboundSchema: z.ZodType<DeleteAliasRequest$Outbound, z.ZodTypeDef, DeleteAliasRequest>;
export declare function deleteAliasRequestToJSON(deleteAliasRequest: DeleteAliasRequest): string;
export declare function deleteAliasRequestFromJSON(jsonString: string): SafeParseResult<DeleteAliasRequest, SDKValidationError>;
/** @internal */
export declare const DeleteAliasStatus$inboundSchema: z.ZodNativeEnum<typeof DeleteAliasStatus>;
/** @internal */
export declare const DeleteAliasStatus$outboundSchema: z.ZodNativeEnum<typeof DeleteAliasStatus>;
/** @internal */
export declare const DeleteAliasResponseBody$inboundSchema: z.ZodType<DeleteAliasResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAliasResponseBody$Outbound = {
    status: string;
};
/** @internal */
export declare const DeleteAliasResponseBody$outboundSchema: z.ZodType<DeleteAliasResponseBody$Outbound, z.ZodTypeDef, DeleteAliasResponseBody>;
export declare function deleteAliasResponseBodyToJSON(deleteAliasResponseBody: DeleteAliasResponseBody): string;
export declare function deleteAliasResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteAliasResponseBody, SDKValidationError>;
//# sourceMappingURL=deletealiasop.d.ts.map