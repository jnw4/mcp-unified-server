import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DangerouslyDeleteByTagsTags = Array<string> | string;
export declare const DangerouslyDeleteByTagsTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
};
export type DangerouslyDeleteByTagsTarget = ClosedEnum<typeof DangerouslyDeleteByTagsTarget>;
export type DangerouslyDeleteByTagsRequestBody = {
    revalidationDeadlineSeconds?: number | undefined;
    tags: Array<string> | string;
    target?: DangerouslyDeleteByTagsTarget | undefined;
};
export type DangerouslyDeleteByTagsRequest = {
    projectIdOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: DangerouslyDeleteByTagsRequestBody | undefined;
};
/** @internal */
export declare const DangerouslyDeleteByTagsTags$inboundSchema: z.ZodType<DangerouslyDeleteByTagsTags, z.ZodTypeDef, unknown>;
/** @internal */
export type DangerouslyDeleteByTagsTags$Outbound = Array<string> | string;
/** @internal */
export declare const DangerouslyDeleteByTagsTags$outboundSchema: z.ZodType<DangerouslyDeleteByTagsTags$Outbound, z.ZodTypeDef, DangerouslyDeleteByTagsTags>;
export declare function dangerouslyDeleteByTagsTagsToJSON(dangerouslyDeleteByTagsTags: DangerouslyDeleteByTagsTags): string;
export declare function dangerouslyDeleteByTagsTagsFromJSON(jsonString: string): SafeParseResult<DangerouslyDeleteByTagsTags, SDKValidationError>;
/** @internal */
export declare const DangerouslyDeleteByTagsTarget$inboundSchema: z.ZodNativeEnum<typeof DangerouslyDeleteByTagsTarget>;
/** @internal */
export declare const DangerouslyDeleteByTagsTarget$outboundSchema: z.ZodNativeEnum<typeof DangerouslyDeleteByTagsTarget>;
/** @internal */
export declare const DangerouslyDeleteByTagsRequestBody$inboundSchema: z.ZodType<DangerouslyDeleteByTagsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DangerouslyDeleteByTagsRequestBody$Outbound = {
    revalidationDeadlineSeconds?: number | undefined;
    tags: Array<string> | string;
    target?: string | undefined;
};
/** @internal */
export declare const DangerouslyDeleteByTagsRequestBody$outboundSchema: z.ZodType<DangerouslyDeleteByTagsRequestBody$Outbound, z.ZodTypeDef, DangerouslyDeleteByTagsRequestBody>;
export declare function dangerouslyDeleteByTagsRequestBodyToJSON(dangerouslyDeleteByTagsRequestBody: DangerouslyDeleteByTagsRequestBody): string;
export declare function dangerouslyDeleteByTagsRequestBodyFromJSON(jsonString: string): SafeParseResult<DangerouslyDeleteByTagsRequestBody, SDKValidationError>;
/** @internal */
export declare const DangerouslyDeleteByTagsRequest$inboundSchema: z.ZodType<DangerouslyDeleteByTagsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DangerouslyDeleteByTagsRequest$Outbound = {
    projectIdOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: DangerouslyDeleteByTagsRequestBody$Outbound | undefined;
};
/** @internal */
export declare const DangerouslyDeleteByTagsRequest$outboundSchema: z.ZodType<DangerouslyDeleteByTagsRequest$Outbound, z.ZodTypeDef, DangerouslyDeleteByTagsRequest>;
export declare function dangerouslyDeleteByTagsRequestToJSON(dangerouslyDeleteByTagsRequest: DangerouslyDeleteByTagsRequest): string;
export declare function dangerouslyDeleteByTagsRequestFromJSON(jsonString: string): SafeParseResult<DangerouslyDeleteByTagsRequest, SDKValidationError>;
//# sourceMappingURL=dangerouslydeletebytagsop.d.ts.map