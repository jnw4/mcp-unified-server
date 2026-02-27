import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RemoveRecordRequest = {
    domain: string;
    recordId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/**
 * Successful response by removing the specified DNS record.
 */
export type RemoveRecordResponseBody = {};
/** @internal */
export declare const RemoveRecordRequest$inboundSchema: z.ZodType<RemoveRecordRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveRecordRequest$Outbound = {
    domain: string;
    recordId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const RemoveRecordRequest$outboundSchema: z.ZodType<RemoveRecordRequest$Outbound, z.ZodTypeDef, RemoveRecordRequest>;
export declare function removeRecordRequestToJSON(removeRecordRequest: RemoveRecordRequest): string;
export declare function removeRecordRequestFromJSON(jsonString: string): SafeParseResult<RemoveRecordRequest, SDKValidationError>;
/** @internal */
export declare const RemoveRecordResponseBody$inboundSchema: z.ZodType<RemoveRecordResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveRecordResponseBody$Outbound = {};
/** @internal */
export declare const RemoveRecordResponseBody$outboundSchema: z.ZodType<RemoveRecordResponseBody$Outbound, z.ZodTypeDef, RemoveRecordResponseBody>;
export declare function removeRecordResponseBodyToJSON(removeRecordResponseBody: RemoveRecordResponseBody): string;
export declare function removeRecordResponseBodyFromJSON(jsonString: string): SafeParseResult<RemoveRecordResponseBody, SDKValidationError>;
//# sourceMappingURL=removerecordop.d.ts.map