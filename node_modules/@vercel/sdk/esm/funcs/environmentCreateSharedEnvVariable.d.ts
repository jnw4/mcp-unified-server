import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateSharedEnvVariableRequest, CreateSharedEnvVariableResponseBody } from "../models/createsharedenvvariableop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create one or more shared environment variables
 *
 * @remarks
 * Creates shared environment variable(s) for a team.
 */
export declare function environmentCreateSharedEnvVariable(client: VercelCore, request: CreateSharedEnvVariableRequest, options?: RequestOptions): APIPromise<Result<CreateSharedEnvVariableResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=environmentCreateSharedEnvVariable.d.ts.map