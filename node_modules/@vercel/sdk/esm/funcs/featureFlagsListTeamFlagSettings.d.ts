import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListTeamFlagSettingsRequest, ListTeamFlagSettingsResponseBody } from "../models/listteamflagsettingsop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List team project flag settings
 *
 * @remarks
 * Retrieve feature flag settings for projects in a team.
 */
export declare function featureFlagsListTeamFlagSettings(client: VercelCore, request: ListTeamFlagSettingsRequest, options?: RequestOptions): APIPromise<Result<ListTeamFlagSettingsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsListTeamFlagSettings.d.ts.map