import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteTeamInviteCodeRequest = {
    /**
     * The Team invite code ID.
     */
    inviteId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId: string;
};
/**
 * Successfully deleted Team invite code.
 */
export type DeleteTeamInviteCodeResponseBody = {
    /**
     * ID of the team.
     */
    id: string;
};
/** @internal */
export declare const DeleteTeamInviteCodeRequest$inboundSchema: z.ZodType<DeleteTeamInviteCodeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteTeamInviteCodeRequest$Outbound = {
    inviteId: string;
    teamId: string;
};
/** @internal */
export declare const DeleteTeamInviteCodeRequest$outboundSchema: z.ZodType<DeleteTeamInviteCodeRequest$Outbound, z.ZodTypeDef, DeleteTeamInviteCodeRequest>;
export declare function deleteTeamInviteCodeRequestToJSON(deleteTeamInviteCodeRequest: DeleteTeamInviteCodeRequest): string;
export declare function deleteTeamInviteCodeRequestFromJSON(jsonString: string): SafeParseResult<DeleteTeamInviteCodeRequest, SDKValidationError>;
/** @internal */
export declare const DeleteTeamInviteCodeResponseBody$inboundSchema: z.ZodType<DeleteTeamInviteCodeResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteTeamInviteCodeResponseBody$Outbound = {
    id: string;
};
/** @internal */
export declare const DeleteTeamInviteCodeResponseBody$outboundSchema: z.ZodType<DeleteTeamInviteCodeResponseBody$Outbound, z.ZodTypeDef, DeleteTeamInviteCodeResponseBody>;
export declare function deleteTeamInviteCodeResponseBodyToJSON(deleteTeamInviteCodeResponseBody: DeleteTeamInviteCodeResponseBody): string;
export declare function deleteTeamInviteCodeResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteTeamInviteCodeResponseBody, SDKValidationError>;
//# sourceMappingURL=deleteteaminvitecodeop.d.ts.map