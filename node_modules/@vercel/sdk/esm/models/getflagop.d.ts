import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetFlagRequest = {
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
export declare const GetFlagRequest$inboundSchema: z.ZodType<GetFlagRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFlagRequest$Outbound = {
    projectIdOrName: string;
    flagIdOrSlug: string;
    ifMatch?: string | undefined;
    withMetadata?: boolean | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetFlagRequest$outboundSchema: z.ZodType<GetFlagRequest$Outbound, z.ZodTypeDef, GetFlagRequest>;
export declare function getFlagRequestToJSON(getFlagRequest: GetFlagRequest): string;
export declare function getFlagRequestFromJSON(jsonString: string): SafeParseResult<GetFlagRequest, SDKValidationError>;
//# sourceMappingURL=getflagop.d.ts.map