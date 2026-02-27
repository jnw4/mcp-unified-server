import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { Network } from "../models/network.js";
import { ReadNetworkRequest } from "../models/readnetworkop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Read a Secure Compute network
 *
 * @remarks
 * Allows to read a Secure Compute network.
 */
export declare function connectReadNetwork(client: VercelCore, request: ReadNetworkRequest, options?: RequestOptions): APIPromise<Result<Network, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=connectReadNetwork.d.ts.map