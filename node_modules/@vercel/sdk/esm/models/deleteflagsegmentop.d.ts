import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteFlagSegmentRequest = {
    /**
     * The project id or name
     */
    projectIdOrName: string;
    /**
     * The segment slug
     */
    segmentIdOrSlug: string;
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
/** @internal */
export declare const DeleteFlagSegmentRequest$inboundSchema: z.ZodType<DeleteFlagSegmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteFlagSegmentRequest$Outbound = {
    projectIdOrName: string;
    segmentIdOrSlug: string;
    withMetadata: boolean;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteFlagSegmentRequest$outboundSchema: z.ZodType<DeleteFlagSegmentRequest$Outbound, z.ZodTypeDef, DeleteFlagSegmentRequest>;
export declare function deleteFlagSegmentRequestToJSON(deleteFlagSegmentRequest: DeleteFlagSegmentRequest): string;
export declare function deleteFlagSegmentRequestFromJSON(jsonString: string): SafeParseResult<DeleteFlagSegmentRequest, SDKValidationError>;
//# sourceMappingURL=deleteflagsegmentop.d.ts.map