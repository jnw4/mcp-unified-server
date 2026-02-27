import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { UpdateStaticIpsRequest, UpdateStaticIpsResponseBody } from "../models/updatestaticipsop.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Configures Static IPs for a project
 *
 * @remarks
 * Allows configuring Static IPs for a project
 */
export declare function connectUpdateStaticIps(client: VercelCore, request: UpdateStaticIpsRequest, options?: RequestOptions): APIPromise<Result<Array<UpdateStaticIpsResponseBody>, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=connectUpdateStaticIps.d.ts.map