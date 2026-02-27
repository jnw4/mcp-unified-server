import { VercelCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetV1SecurityFirewallEventsRequest, GetV1SecurityFirewallEventsResponseBody } from "../models/getv1securityfirewalleventsop.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Read Firewall Actions by Project
 *
 * @remarks
 * Retrieve firewall actions for a project
 */
export declare function securityGetV1SecurityFirewallEvents(client: VercelCore, request: GetV1SecurityFirewallEventsRequest, options?: RequestOptions): APIPromise<Result<GetV1SecurityFirewallEventsResponseBody, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=securityGetV1SecurityFirewallEvents.d.ts.map