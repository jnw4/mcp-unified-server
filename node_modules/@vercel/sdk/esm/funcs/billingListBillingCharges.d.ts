import { VercelCore } from "../core.js";
import { JsonLStream } from "../lib/jsonl.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListBillingChargesRequest, ListBillingChargesResponseBody } from "../models/listbillingchargesop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List FOCUS billing charges
 *
 * @remarks
 * Returns the billing charge data in FOCUS v1.3 JSONL format for a specified Vercel team, within a date range specified by `from` and `to` query parameters. Supports 1-day granularity with a maximum date range of 1 year. The response is streamed as newline-delimited JSON (JSONL) and can be optionally compressed with gzip if the `Accept-Encoding: gzip` header is provided. This is only available for Owner, Member, Developer, Security, Billing, and Enterprise Viewer roles for the supplied team.
 */
export declare function billingListBillingCharges(client: VercelCore, request: ListBillingChargesRequest, options?: RequestOptions): APIPromise<Result<JsonLStream<ListBillingChargesResponseBody>, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=billingListBillingCharges.d.ts.map