import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateDrainRequest, CreateDrainResponseBody } from "../models/createdrainop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a new Drain
 *
 * @remarks
 * Create a new Drain with the provided configuration.
 */
export declare function drainsCreateDrain(client: VercelCore, request: CreateDrainRequest, options?: RequestOptions): APIPromise<Result<CreateDrainResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=drainsCreateDrain.d.ts.map