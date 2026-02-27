import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { TestDrainRequest, TestDrainResponseBody } from "../models/testdrainop.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Validate Drain delivery configuration
 *
 * @remarks
 * Validate the delivery configuration of a Drain using sample events.
 */
export declare function drainsTestDrain(client: VercelCore, request: TestDrainRequest, options?: RequestOptions): APIPromise<Result<TestDrainResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=drainsTestDrain.d.ts.map