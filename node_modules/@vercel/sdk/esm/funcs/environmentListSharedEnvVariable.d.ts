import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListSharedEnvVariableRequest, ListSharedEnvVariableResponseBody } from "../models/listsharedenvvariableop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Lists all Shared Environment Variables for a team
 *
 * @remarks
 * Lists all Shared Environment Variables for a team, taking into account optional filters.
 */
export declare function environmentListSharedEnvVariable(client: VercelCore, request: ListSharedEnvVariableRequest, options?: RequestOptions): APIPromise<Result<ListSharedEnvVariableResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=environmentListSharedEnvVariable.d.ts.map