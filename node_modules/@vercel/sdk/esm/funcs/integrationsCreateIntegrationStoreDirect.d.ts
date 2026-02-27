import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CreateIntegrationStoreDirectRequest, CreateIntegrationStoreDirectResponseBody } from "../models/createintegrationstoredirectop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create integration store (free and paid plans)
 *
 * @remarks
 * Creates an integration store with automatic billing plan handling. For free resources, omit `billingPlanId` to auto-discover free plans. For paid resources, provide a `billingPlanId` from the billing plans endpoint.
 */
export declare function integrationsCreateIntegrationStoreDirect(client: VercelCore, request: CreateIntegrationStoreDirectRequest, options?: RequestOptions): APIPromise<Result<CreateIntegrationStoreDirectResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=integrationsCreateIntegrationStoreDirect.d.ts.map