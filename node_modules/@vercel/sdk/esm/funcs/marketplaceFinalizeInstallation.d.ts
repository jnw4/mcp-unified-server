import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { FinalizeInstallationRequest } from "../models/finalizeinstallationop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Finalize Installation
 *
 * @remarks
 * This endpoint allows the partner to mark an installation as finalized. This means you will not send any more invoices for the installation. Use this after a customer has requested uninstall and you have sent any remaining invoices. This will allow the uninstall process to proceed immediately after all invoices have been paid. <br/> Use the `credentials.access_token` we provided in the [Upsert Installation](#upsert-installation) body to authorize this request.
 */
export declare function marketplaceFinalizeInstallation(client: VercelCore, request: FinalizeInstallationRequest, options?: RequestOptions): APIPromise<Result<void, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=marketplaceFinalizeInstallation.d.ts.map