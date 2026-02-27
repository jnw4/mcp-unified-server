import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetDrainRequest, GetDrainResponseBody } from "../models/getdrainop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Find a Drain by id
 *
 * @remarks
 * Get the information for a specific Drain by passing the drain id in the URL.
 */
export declare function drainsGetDrain(client: VercelCore, request: GetDrainRequest, options?: RequestOptions): APIPromise<Result<GetDrainResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=drainsGetDrain.d.ts.map