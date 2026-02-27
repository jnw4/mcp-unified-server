import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { Team, Team$Outbound } from "./team.js";
import { TeamLimited, TeamLimited$Outbound } from "./teamlimited.js";
export type GetTeamsRequest = {
    /**
     * Maximum number of Teams which may be returned.
     */
    limit?: number | undefined;
    /**
     * Timestamp (in milliseconds) to only include Teams created since then.
     */
    since?: number | undefined;
    /**
     * Timestamp (in milliseconds) to only include Teams created until then.
     */
    until?: number | undefined;
};
export type GetTeamsTeams = Team | TeamLimited;
/**
 * A paginated list of teams.
 */
export type GetTeamsResponseBody = {
    teams: Array<Team | TeamLimited>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};
/** @internal */
export declare const GetTeamsRequest$inboundSchema: z.ZodType<GetTeamsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTeamsRequest$Outbound = {
    limit?: number | undefined;
    since?: number | undefined;
    until?: number | undefined;
};
/** @internal */
export declare const GetTeamsRequest$outboundSchema: z.ZodType<GetTeamsRequest$Outbound, z.ZodTypeDef, GetTeamsRequest>;
export declare function getTeamsRequestToJSON(getTeamsRequest: GetTeamsRequest): string;
export declare function getTeamsRequestFromJSON(jsonString: string): SafeParseResult<GetTeamsRequest, SDKValidationError>;
/** @internal */
export declare const GetTeamsTeams$inboundSchema: z.ZodType<GetTeamsTeams, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTeamsTeams$Outbound = Team$Outbound | TeamLimited$Outbound;
/** @internal */
export declare const GetTeamsTeams$outboundSchema: z.ZodType<GetTeamsTeams$Outbound, z.ZodTypeDef, GetTeamsTeams>;
export declare function getTeamsTeamsToJSON(getTeamsTeams: GetTeamsTeams): string;
export declare function getTeamsTeamsFromJSON(jsonString: string): SafeParseResult<GetTeamsTeams, SDKValidationError>;
/** @internal */
export declare const GetTeamsResponseBody$inboundSchema: z.ZodType<GetTeamsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTeamsResponseBody$Outbound = {
    teams: Array<Team$Outbound | TeamLimited$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const GetTeamsResponseBody$outboundSchema: z.ZodType<GetTeamsResponseBody$Outbound, z.ZodTypeDef, GetTeamsResponseBody>;
export declare function getTeamsResponseBodyToJSON(getTeamsResponseBody: GetTeamsResponseBody): string;
export declare function getTeamsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetTeamsResponseBody, SDKValidationError>;
//# sourceMappingURL=getteamsop.d.ts.map