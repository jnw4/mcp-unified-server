import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GitNamespacesRequest, GitNamespacesResponseBody } from "../models/gitnamespacesop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List git namespaces by provider
 *
 * @remarks
 * Lists git namespaces for a supported provider. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider is not provided, it will try to obtain it from the user that authenticated the request.
 */
export declare function integrationsGitNamespaces(client: VercelCore, request: GitNamespacesRequest, options?: RequestOptions): APIPromise<Result<Array<GitNamespacesResponseBody>, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=integrationsGitNamespaces.d.ts.map