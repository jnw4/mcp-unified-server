import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListTeamFlagsRequest, ListTeamFlagsResponseBody } from "../models/listteamflagsop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List all flags for a team
 *
 * @remarks
 * Retrieve all feature flags for a team across all projects. The list can be filtered by state and supports pagination.
 */
export declare function featureFlagsListTeamFlags(client: VercelCore, request: ListTeamFlagsRequest, options?: RequestOptions): APIPromise<Result<ListTeamFlagsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsListTeamFlags.d.ts.map