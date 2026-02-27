import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListCheckRunsRequest, ListCheckRunsResponseBody } from "../models/listcheckrunsop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List runs for a check
 *
 * @remarks
 * List all runs associated with a given check.
 */
export declare function checksV2ListCheckRuns(client: VercelCore, request: ListCheckRunsRequest, options?: RequestOptions): APIPromise<Result<ListCheckRunsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=checksV2ListCheckRuns.d.ts.map