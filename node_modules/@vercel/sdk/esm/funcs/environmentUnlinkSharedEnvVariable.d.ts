import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { UnlinkSharedEnvVariableRequest, UnlinkSharedEnvVariableResponseBody } from "../models/unlinksharedenvvariableop.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Disconnects a shared environment variable for a given project
 *
 * @remarks
 * Disconnects a shared environment variable for a given project
 */
export declare function environmentUnlinkSharedEnvVariable(client: VercelCore, request: UnlinkSharedEnvVariableRequest, options?: RequestOptions): APIPromise<Result<UnlinkSharedEnvVariableResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=environmentUnlinkSharedEnvVariable.d.ts.map