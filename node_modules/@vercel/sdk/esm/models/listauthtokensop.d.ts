import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { AuthToken, AuthToken$Outbound } from "./authtoken.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListAuthTokensResponseBody = {
    tokens: Array<AuthToken>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};
/** @internal */
export declare const ListAuthTokensResponseBody$inboundSchema: z.ZodType<ListAuthTokensResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAuthTokensResponseBody$Outbound = {
    tokens: Array<AuthToken$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListAuthTokensResponseBody$outboundSchema: z.ZodType<ListAuthTokensResponseBody$Outbound, z.ZodTypeDef, ListAuthTokensResponseBody>;
export declare function listAuthTokensResponseBodyToJSON(listAuthTokensResponseBody: ListAuthTokensResponseBody): string;
export declare function listAuthTokensResponseBodyFromJSON(jsonString: string): SafeParseResult<ListAuthTokensResponseBody, SDKValidationError>;
//# sourceMappingURL=listauthtokensop.d.ts.map