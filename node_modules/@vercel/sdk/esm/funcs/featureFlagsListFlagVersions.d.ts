import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListFlagVersionsRequest, ListFlagVersionsResponseBody } from "../models/listflagversionsop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List flag versions
 *
 * @remarks
 * Lists flag versions for a given flag.
 */
export declare function featureFlagsListFlagVersions(client: VercelCore, request: ListFlagVersionsRequest, options?: RequestOptions): APIPromise<Result<ListFlagVersionsResponseBody | undefined, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=featureFlagsListFlagVersions.d.ts.map