import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetConfigurationProductsRequest, GetConfigurationProductsResponseBody } from "../models/getconfigurationproductsop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List products for integration configuration
 *
 * @remarks
 * Returns products available for an integration configuration. Each product includes a `metadataSchema` field with the JSON Schema for required and optional metadata fields.
 */
export declare function integrationsGetConfigurationProducts(client: VercelCore, request: GetConfigurationProductsRequest, options?: RequestOptions): APIPromise<Result<GetConfigurationProductsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=integrationsGetConfigurationProducts.d.ts.map