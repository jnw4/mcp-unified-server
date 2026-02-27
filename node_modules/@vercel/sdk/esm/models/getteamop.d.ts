import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetTeamRequest = {
    slug?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId: string;
};
/** @internal */
export declare const GetTeamRequest$inboundSchema: z.ZodType<GetTeamRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTeamRequest$Outbound = {
    slug?: string | undefined;
    teamId: string;
};
/** @internal */
export declare const GetTeamRequest$outboundSchema: z.ZodType<GetTeamRequest$Outbound, z.ZodTypeDef, GetTeamRequest>;
export declare function getTeamRequestToJSON(getTeamRequest: GetTeamRequest): string;
export declare function getTeamRequestFromJSON(jsonString: string): SafeParseResult<GetTeamRequest, SDKValidationError>;
//# sourceMappingURL=getteamop.d.ts.map