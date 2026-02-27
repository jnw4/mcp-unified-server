import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { DeleteSharedEnvVariableRequest, DeleteSharedEnvVariableResponseBody } from "../models/deletesharedenvvariableop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete one or more Env Var
 *
 * @remarks
 * Deletes one or many Shared Environment Variables for a given team.
 */
export declare function environmentDeleteSharedEnvVariable(client: VercelCore, request: DeleteSharedEnvVariableRequest, options?: RequestOptions): APIPromise<Result<DeleteSharedEnvVariableResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=environmentDeleteSharedEnvVariable.d.ts.map