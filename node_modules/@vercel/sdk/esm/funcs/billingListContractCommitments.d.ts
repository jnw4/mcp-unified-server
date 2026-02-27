import { VercelCore } from "../core.js";
import { JsonLStream } from "../lib/jsonl.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/httpclienterrors.js";
import { ListContractCommitmentsRequest, ListContractCommitmentsResponseBody } from "../models/listcontractcommitmentsop.js";
import { ResponseValidationError } from "../models/responsevalidationerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { VercelError } from "../models/vercelerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List FOCUS contract commitments
 *
 * @remarks
 * Returns commitment allocations per contract period in FOCUS v1.3 JSONL format for a specified Vercel team. The response is streamed as newline-delimited JSON (JSONL). This endpoint is only applicable to Enterprise Vercel customers. An empty response is returned for non-Enterprise (Pro/Flex) customers.
 */
export declare function billingListContractCommitments(client: VercelCore, request: ListContractCommitmentsRequest, options?: RequestOptions): APIPromise<Result<JsonLStream<ListContractCommitmentsResponseBody>, VercelError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=billingListContractCommitments.d.ts.map