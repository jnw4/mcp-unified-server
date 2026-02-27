import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type Tags = Array<string> | string;
export declare const InvalidateByTagsTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type InvalidateByTagsTarget = ClosedEnum<typeof InvalidateByTagsTarget>;
export type InvalidateByTagsRequestBody = {
    tags: Array<string> | string;
    target?: InvalidateByTagsTarget | undefined;
};
export type InvalidateByTagsRequest = {
    projectIdOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: InvalidateByTagsRequestBody | undefined;
};
/** @internal */
export declare const Tags$inboundSchema: z.ZodType<Tags, z.ZodTypeDef, unknown>;
/** @internal */
export type Tags$Outbound = Array<string> | string;
/** @internal */
export declare const Tags$outboundSchema: z.ZodType<Tags$Outbound, z.ZodTypeDef, Tags>;
export declare function tagsToJSON(tags: Tags): string;
export declare function tagsFromJSON(jsonString: string): SafeParseResult<Tags, SDKValidationError>;
/** @internal */
export declare const InvalidateByTagsTarget$inboundSchema: z.ZodNativeEnum<typeof InvalidateByTagsTarget>;
/** @internal */
export declare const InvalidateByTagsTarget$outboundSchema: z.ZodNativeEnum<typeof InvalidateByTagsTarget>;
/** @internal */
export declare const InvalidateByTagsRequestBody$inboundSchema: z.ZodType<InvalidateByTagsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type InvalidateByTagsRequestBody$Outbound = {
    tags: Array<string> | string;
    target?: string | undefined;
};
/** @internal */
export declare const InvalidateByTagsRequestBody$outboundSchema: z.ZodType<InvalidateByTagsRequestBody$Outbound, z.ZodTypeDef, InvalidateByTagsRequestBody>;
export declare function invalidateByTagsRequestBodyToJSON(invalidateByTagsRequestBody: InvalidateByTagsRequestBody): string;
export declare function invalidateByTagsRequestBodyFromJSON(jsonString: string): SafeParseResult<InvalidateByTagsRequestBody, SDKValidationError>;
/** @internal */
export declare const InvalidateByTagsRequest$inboundSchema: z.ZodType<InvalidateByTagsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type InvalidateByTagsRequest$Outbound = {
    projectIdOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: InvalidateByTagsRequestBody$Outbound | undefined;
};
/** @internal */
export declare const InvalidateByTagsRequest$outboundSchema: z.ZodType<InvalidateByTagsRequest$Outbound, z.ZodTypeDef, InvalidateByTagsRequest>;
export declare function invalidateByTagsRequestToJSON(invalidateByTagsRequest: InvalidateByTagsRequest): string;
export declare function invalidateByTagsRequestFromJSON(jsonString: string): SafeParseResult<InvalidateByTagsRequest, SDKValidationError>;
//# sourceMappingURL=invalidatebytagsop.d.ts.map