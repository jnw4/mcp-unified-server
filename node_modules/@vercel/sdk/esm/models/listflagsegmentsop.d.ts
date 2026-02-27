import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { Segment, Segment$Outbound } from "./segment.js";
export type ListFlagSegmentsRequest = {
    /**
     * The project id or name
     */
    projectIdOrName: string;
    /**
     * Whether to include metadata
     */
    withMetadata?: boolean | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type ListFlagSegmentsResponseBody = {
    data: Array<Segment>;
};
/** @internal */
export declare const ListFlagSegmentsRequest$inboundSchema: z.ZodType<ListFlagSegmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagSegmentsRequest$Outbound = {
    projectIdOrName: string;
    withMetadata: boolean;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListFlagSegmentsRequest$outboundSchema: z.ZodType<ListFlagSegmentsRequest$Outbound, z.ZodTypeDef, ListFlagSegmentsRequest>;
export declare function listFlagSegmentsRequestToJSON(listFlagSegmentsRequest: ListFlagSegmentsRequest): string;
export declare function listFlagSegmentsRequestFromJSON(jsonString: string): SafeParseResult<ListFlagSegmentsRequest, SDKValidationError>;
/** @internal */
export declare const ListFlagSegmentsResponseBody$inboundSchema: z.ZodType<ListFlagSegmentsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagSegmentsResponseBody$Outbound = {
    data: Array<Segment$Outbound>;
};
/** @internal */
export declare const ListFlagSegmentsResponseBody$outboundSchema: z.ZodType<ListFlagSegmentsResponseBody$Outbound, z.ZodTypeDef, ListFlagSegmentsResponseBody>;
export declare function listFlagSegmentsResponseBodyToJSON(listFlagSegmentsResponseBody: ListFlagSegmentsResponseBody): string;
export declare function listFlagSegmentsResponseBodyFromJSON(jsonString: string): SafeParseResult<ListFlagSegmentsResponseBody, SDKValidationError>;
//# sourceMappingURL=listflagsegmentsop.d.ts.map