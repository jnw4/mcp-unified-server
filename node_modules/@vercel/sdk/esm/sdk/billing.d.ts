import { JsonLStream } from "../lib/jsonl.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { ListBillingChargesRequest, ListBillingChargesResponseBody } from "../models/listbillingchargesop.js";
import { ListContractCommitmentsRequest, ListContractCommitmentsResponseBody } from "../models/listcontractcommitmentsop.js";
export declare class Billing extends ClientSDK {
    /**
     * List FOCUS billing charges
     *
     * @remarks
     * Returns the billing charge data in FOCUS v1.3 JSONL format for a specified Vercel team, within a date range specified by `from` and `to` query parameters. Supports 1-day granularity with a maximum date range of 1 year. The response is streamed as newline-delimited JSON (JSONL) and can be optionally compressed with gzip if the `Accept-Encoding: gzip` header is provided. This is only available for Owner, Member, Developer, Security, Billing, and Enterprise Viewer roles for the supplied team.
     */
    listBillingCharges(request: ListBillingChargesRequest, options?: RequestOptions): Promise<JsonLStream<ListBillingChargesResponseBody>>;
    /**
     * List FOCUS contract commitments
     *
     * @remarks
     * Returns commitment allocations per contract period in FOCUS v1.3 JSONL format for a specified Vercel team. The response is streamed as newline-delimited JSON (JSONL). This endpoint is only applicable to Enterprise Vercel customers. An empty response is returned for non-Enterprise (Pro/Flex) customers.
     */
    listContractCommitments(request: ListContractCommitmentsRequest, options?: RequestOptions): Promise<JsonLStream<ListContractCommitmentsResponseBody>>;
}
//# sourceMappingURL=billing.d.ts.map