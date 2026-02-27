import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetFlagSegmentRequest = {
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
export declare const GetFlagSegmentRequest$inboundSchema: z.ZodType<GetFlagSegmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFlagSegmentRequest$Outbound = {
    projectIdOrName: string;
    segmentIdOrSlug: string;
    withMetadata: boolean;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetFlagSegmentRequest$outboundSchema: z.ZodType<GetFlagSegmentRequest$Outbound, z.ZodTypeDef, GetFlagSegmentRequest>;
export declare function getFlagSegmentRequestToJSON(getFlagSegmentRequest: GetFlagSegmentRequest): string;
export declare function getFlagSegmentRequestFromJSON(jsonString: string): SafeParseResult<GetFlagSegmentRequest, SDKValidationError>;
//# sourceMappingURL=getflagsegmentop.d.ts.map