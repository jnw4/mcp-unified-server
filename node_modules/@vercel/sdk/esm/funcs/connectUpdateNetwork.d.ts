import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { Network } from "../models/network.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { UpdateNetworkRequest } from "../models/updatenetworkop.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update a Secure Compute network
 *
 * @remarks
 * Allows to update a Secure Compute network.
 */
export declare function connectUpdateNetwork(client: VercelCore, request: UpdateNetworkRequest, options?: RequestOptions): APIPromise<Result<Network, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=connectUpdateNetwork.d.ts.map