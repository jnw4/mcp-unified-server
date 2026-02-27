import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type JoinTeamRequestBody = {
    /**
     * The invite code to join the team.
     */
    inviteCode?: string | undefined;
};
export type JoinTeamRequest = {
    teamId: string;
    requestBody: JoinTeamRequestBody;
};
/**
 * Successfully joined a team.
 */
export type JoinTeamResponseBody = {
    /**
     * The ID of the team the user joined.
     */
    teamId: string;
    /**
     * The slug of the team the user joined.
     */
    slug: string;
    /**
     * The name of the team the user joined.
     */
    name: string;
    /**
     * The origin of how the user joined.
     */
    from: string;
};
/** @internal */
export declare const JoinTeamRequestBody$inboundSchema: z.ZodType<JoinTeamRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type JoinTeamRequestBody$Outbound = {
    inviteCode?: string | undefined;
};
/** @internal */
export declare const JoinTeamRequestBody$outboundSchema: z.ZodType<JoinTeamRequestBody$Outbound, z.ZodTypeDef, JoinTeamRequestBody>;
export declare function joinTeamRequestBodyToJSON(joinTeamRequestBody: JoinTeamRequestBody): string;
export declare function joinTeamRequestBodyFromJSON(jsonString: string): SafeParseResult<JoinTeamRequestBody, SDKValidationError>;
/** @internal */
export declare const JoinTeamRequest$inboundSchema: z.ZodType<JoinTeamRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type JoinTeamRequest$Outbound = {
    teamId: string;
    RequestBody: JoinTeamRequestBody$Outbound;
};
/** @internal */
export declare const JoinTeamRequest$outboundSchema: z.ZodType<JoinTeamRequest$Outbound, z.ZodTypeDef, JoinTeamRequest>;
export declare function joinTeamRequestToJSON(joinTeamRequest: JoinTeamRequest): string;
export declare function joinTeamRequestFromJSON(jsonString: string): SafeParseResult<JoinTeamRequest, SDKValidationError>;
/** @internal */
export declare const JoinTeamResponseBody$inboundSchema: z.ZodType<JoinTeamResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type JoinTeamResponseBody$Outbound = {
    teamId: string;
    slug: string;
    name: string;
    from: string;
};
/** @internal */
export declare const JoinTeamResponseBody$outboundSchema: z.ZodType<JoinTeamResponseBody$Outbound, z.ZodTypeDef, JoinTeamResponseBody>;
export declare function joinTeamResponseBodyToJSON(joinTeamResponseBody: JoinTeamResponseBody): string;
export declare function joinTeamResponseBodyFromJSON(jsonString: string): SafeParseResult<JoinTeamResponseBody, SDKValidationError>;
//# sourceMappingURL=jointeamop.d.ts.map