import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetTldDomainsRegistrarResponseBody, GetTldRequest, GetTldResponseBody } from "../models/gettldop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { InternalServerError } from "../models/internalservererror.js";
import { NotAuthorizedForScope } from "../models/notauthorizedforscope.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { TooManyRequests } from "../models/toomanyrequests.js";
import { Unauthorized } from "../models/unauthorized.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get TLD
 *
 * @remarks
 * Get the metadata for a specific TLD.
 */
export declare function domainsRegistrarGetTld(client: VercelCore, request: GetTldRequest, options?: RequestOptions): APIPromise<Result<GetTldResponseBody, GetTldDomainsRegistrarResponseBody | Unauthorized | NotAuthorizedForScope | TooManyRequests | InternalServerError | VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=domainsRegistrarGetTld.d.ts.map