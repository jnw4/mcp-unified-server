import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RemoveTeamMemberRequest = {
    /**
     * The user ID of the member.
     */
    uid: string;
    /**
     * The ID of the team to set as the new default team for the Northstar user.
     */
    newDefaultTeamId?: string | undefined;
    teamId: string;
};
/**
 * Successfully removed a member of the team.
 */
export type RemoveTeamMemberResponseBody = {
    /**
     * ID of the team.
     */
    id: string;
};
/** @internal */
export declare const RemoveTeamMemberRequest$inboundSchema: z.ZodType<RemoveTeamMemberRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveTeamMemberRequest$Outbound = {
    uid: string;
    newDefaultTeamId?: string | undefined;
    teamId: string;
};
/** @internal */
export declare const RemoveTeamMemberRequest$outboundSchema: z.ZodType<RemoveTeamMemberRequest$Outbound, z.ZodTypeDef, RemoveTeamMemberRequest>;
export declare function removeTeamMemberRequestToJSON(removeTeamMemberRequest: RemoveTeamMemberRequest): string;
export declare function removeTeamMemberRequestFromJSON(jsonString: string): SafeParseResult<RemoveTeamMemberRequest, SDKValidationError>;
/** @internal */
export declare const RemoveTeamMemberResponseBody$inboundSchema: z.ZodType<RemoveTeamMemberResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveTeamMemberResponseBody$Outbound = {
    id: string;
};
/** @internal */
export declare const RemoveTeamMemberResponseBody$outboundSchema: z.ZodType<RemoveTeamMemberResponseBody$Outbound, z.ZodTypeDef, RemoveTeamMemberResponseBody>;
export declare function removeTeamMemberResponseBodyToJSON(removeTeamMemberResponseBody: RemoveTeamMemberResponseBody): string;
export declare function removeTeamMemberResponseBodyFromJSON(jsonString: string): SafeParseResult<RemoveTeamMemberResponseBody, SDKValidationError>;
//# sourceMappingURL=removeteammemberop.d.ts.map