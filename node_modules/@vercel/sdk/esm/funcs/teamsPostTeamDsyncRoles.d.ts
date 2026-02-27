import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { PostTeamDsyncRolesRequest, PostTeamDsyncRolesResponseBody } from "../models/postteamdsyncrolesop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update Team Directory Sync Role Mappings
 *
 * @remarks
 * Update the Directory Sync role mappings for a Team. This endpoint allows updating the mapping between directory groups and team roles or access groups.
 */
export declare function teamsPostTeamDsyncRoles(client: VercelCore, request: PostTeamDsyncRolesRequest, options?: RequestOptions): APIPromise<Result<PostTeamDsyncRolesResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=teamsPostTeamDsyncRoles.d.ts.map