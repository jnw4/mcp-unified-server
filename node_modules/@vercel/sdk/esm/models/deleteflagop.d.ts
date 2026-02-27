import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteFlagRequest = {
    /**
     * The project id or name
     */
    projectIdOrName: string;
    /**
     * The flag id or name
     */
    flagIdOrSlug: string;
    /**
     * Etag to match, can be used interchangeably with the `if-match` header
     */
    ifMatch?: string | undefined;
    /**
     * Whether to include metadata in the response
     */
    withMetadata?: boolean | undefined;
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
export declare const DeleteFlagRequest$inboundSchema: z.ZodType<DeleteFlagRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteFlagRequest$Outbound = {
    projectIdOrName: string;
    flagIdOrSlug: string;
    ifMatch?: string | undefined;
    withMetadata?: boolean | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteFlagRequest$outboundSchema: z.ZodType<DeleteFlagRequest$Outbound, z.ZodTypeDef, DeleteFlagRequest>;
export declare function deleteFlagRequestToJSON(deleteFlagRequest: DeleteFlagRequest): string;
export declare function deleteFlagRequestFromJSON(jsonString: string): SafeParseResult<DeleteFlagRequest, SDKValidationError>;
//# sourceMappingURL=deleteflagop.d.ts.map