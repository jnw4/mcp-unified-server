import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { InvitedTeamMember } from "../models/invitedteammember.js";
import { InviteUserToTeamRequest } from "../models/inviteusertoteamop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Invite a user
 *
 * @remarks
 * Invite a user to join the team specified in the URL. The authenticated user needs to be an `OWNER` in order to successfully invoke this endpoint. The user to be invited must be specified by email.
 */
export declare function teamsInviteUserToTeam(client: VercelCore, request: InviteUserToTeamRequest, options?: RequestOptions): APIPromise<Result<InvitedTeamMember, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=teamsInviteUserToTeam.d.ts.map