import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListNetworksRequest } from "../models/listnetworksop.js";
import { Network } from "../models/network.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List Secure Compute networks
 *
 * @remarks
 * Allows to list Secure Compute networks.
 */
export declare function connectListNetworks(client: VercelCore, request: ListNetworksRequest, options?: RequestOptions): APIPromise<Result<Array<Network>, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=connectListNetworks.d.ts.map