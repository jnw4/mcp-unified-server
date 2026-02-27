import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
 */
export type Pagination = {
    /**
     * Amount of items in the current page.
     */
    count: number;
    /**
     * Timestamp that must be used to request the next page.
     */
    next: number | null;
    /**
     * Timestamp that must be used to request the previous page.
     */
    prev: number | null;
};
/** @internal */
export declare const Pagination$inboundSchema: z.ZodType<Pagination, z.ZodTypeDef, unknown>;
/** @internal */
export type Pagination$Outbound = {
    count: number;
    next: number | null;
    prev: number | null;
};
/** @internal */
export declare const Pagination$outboundSchema: z.ZodType<Pagination$Outbound, z.ZodTypeDef, Pagination>;
export declare function paginationToJSON(pagination: Pagination): string;
export declare function paginationFromJSON(jsonString: string): SafeParseResult<Pagination, SDKValidationError>;
//# sourceMappingURL=pagination.d.ts.map