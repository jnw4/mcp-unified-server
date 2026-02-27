import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetSharedEnvVarRequest, GetSharedEnvVarResponseBody } from "../models/getsharedenvvarop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Retrieve the decrypted value of a Shared Environment Variable by id.
 *
 * @remarks
 * Retrieve the decrypted value of a Shared Environment Variable by id.
 */
export declare function environmentGetSharedEnvVar(client: VercelCore, request: GetSharedEnvVarRequest, options?: RequestOptions): APIPromise<Result<GetSharedEnvVarResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=environmentGetSharedEnvVar.d.ts.map