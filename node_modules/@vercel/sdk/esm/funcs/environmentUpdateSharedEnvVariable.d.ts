import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { UpdateSharedEnvVariableRequest, UpdateSharedEnvVariableResponseBody } from "../models/updatesharedenvvariableop.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Updates one or more shared environment variables
 *
 * @remarks
 * Updates a given Shared Environment Variable for a Team.
 */
export declare function environmentUpdateSharedEnvVariable(client: VercelCore, request: UpdateSharedEnvVariableRequest, options?: RequestOptions): APIPromise<Result<UpdateSharedEnvVariableResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=environmentUpdateSharedEnvVariable.d.ts.map