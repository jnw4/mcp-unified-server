import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { UpdateNetworkPolicyRequest, UpdateNetworkPolicyResponseBody } from "../models/updatenetworkpolicyop.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update network policy
 *
 * @remarks
 * Replaces the network access policy of a running sandbox. Use this to control which external hosts the sandbox can communicate with. This is a full replacement. Any previously configured network rules will be overwritten.
 */
export declare function sandboxesUpdateNetworkPolicy(client: VercelCore, request: UpdateNetworkPolicyRequest, options?: RequestOptions): APIPromise<Result<UpdateNetworkPolicyResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=sandboxesUpdateNetworkPolicy.d.ts.map