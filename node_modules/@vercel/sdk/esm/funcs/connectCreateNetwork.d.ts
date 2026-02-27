import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateNetworkRequest } from "../models/createnetworkop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { Network } from "../models/network.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a Secure Compute network
 *
 * @remarks
 * Allows to create a Secure Compute network.
 */
export declare function connectCreateNetwork(client: VercelCore, request: CreateNetworkRequest, options?: RequestOptions): APIPromise<Result<Network, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=connectCreateNetwork.d.ts.map