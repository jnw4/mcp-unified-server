import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DangerouslyDeleteBySrcImagesRequestBody = {
    revalidationDeadlineSeconds?: number | undefined;
    srcImages: Array<string>;
};
export type DangerouslyDeleteBySrcImagesRequest = {
    projectIdOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: DangerouslyDeleteBySrcImagesRequestBody | undefined;
};
/** @internal */
export declare const DangerouslyDeleteBySrcImagesRequestBody$inboundSchema: z.ZodType<DangerouslyDeleteBySrcImagesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DangerouslyDeleteBySrcImagesRequestBody$Outbound = {
    revalidationDeadlineSeconds?: number | undefined;
    srcImages: Array<string>;
};
/** @internal */
export declare const DangerouslyDeleteBySrcImagesRequestBody$outboundSchema: z.ZodType<DangerouslyDeleteBySrcImagesRequestBody$Outbound, z.ZodTypeDef, DangerouslyDeleteBySrcImagesRequestBody>;
export declare function dangerouslyDeleteBySrcImagesRequestBodyToJSON(dangerouslyDeleteBySrcImagesRequestBody: DangerouslyDeleteBySrcImagesRequestBody): string;
export declare function dangerouslyDeleteBySrcImagesRequestBodyFromJSON(jsonString: string): SafeParseResult<DangerouslyDeleteBySrcImagesRequestBody, SDKValidationError>;
/** @internal */
export declare const DangerouslyDeleteBySrcImagesRequest$inboundSchema: z.ZodType<DangerouslyDeleteBySrcImagesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DangerouslyDeleteBySrcImagesRequest$Outbound = {
    projectIdOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: DangerouslyDeleteBySrcImagesRequestBody$Outbound | undefined;
};
/** @internal */
export declare const DangerouslyDeleteBySrcImagesRequest$outboundSchema: z.ZodType<DangerouslyDeleteBySrcImagesRequest$Outbound, z.ZodTypeDef, DangerouslyDeleteBySrcImagesRequest>;
export declare function dangerouslyDeleteBySrcImagesRequestToJSON(dangerouslyDeleteBySrcImagesRequest: DangerouslyDeleteBySrcImagesRequest): string;
export declare function dangerouslyDeleteBySrcImagesRequestFromJSON(jsonString: string): SafeParseResult<DangerouslyDeleteBySrcImagesRequest, SDKValidationError>;
//# sourceMappingURL=dangerouslydeletebysrcimagesop.d.ts.map