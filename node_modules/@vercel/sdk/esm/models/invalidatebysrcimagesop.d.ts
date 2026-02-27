import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type InvalidateBySrcImagesRequestBody = {
    srcImages: Array<string>;
};
export type InvalidateBySrcImagesRequest = {
    projectIdOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: InvalidateBySrcImagesRequestBody | undefined;
};
/** @internal */
export declare const InvalidateBySrcImagesRequestBody$inboundSchema: z.ZodType<InvalidateBySrcImagesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type InvalidateBySrcImagesRequestBody$Outbound = {
    srcImages: Array<string>;
};
/** @internal */
export declare const InvalidateBySrcImagesRequestBody$outboundSchema: z.ZodType<InvalidateBySrcImagesRequestBody$Outbound, z.ZodTypeDef, InvalidateBySrcImagesRequestBody>;
export declare function invalidateBySrcImagesRequestBodyToJSON(invalidateBySrcImagesRequestBody: InvalidateBySrcImagesRequestBody): string;
export declare function invalidateBySrcImagesRequestBodyFromJSON(jsonString: string): SafeParseResult<InvalidateBySrcImagesRequestBody, SDKValidationError>;
/** @internal */
export declare const InvalidateBySrcImagesRequest$inboundSchema: z.ZodType<InvalidateBySrcImagesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type InvalidateBySrcImagesRequest$Outbound = {
    projectIdOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: InvalidateBySrcImagesRequestBody$Outbound | undefined;
};
/** @internal */
export declare const InvalidateBySrcImagesRequest$outboundSchema: z.ZodType<InvalidateBySrcImagesRequest$Outbound, z.ZodTypeDef, InvalidateBySrcImagesRequest>;
export declare function invalidateBySrcImagesRequestToJSON(invalidateBySrcImagesRequest: InvalidateBySrcImagesRequest): string;
export declare function invalidateBySrcImagesRequestFromJSON(jsonString: string): SafeParseResult<InvalidateBySrcImagesRequest, SDKValidationError>;
//# sourceMappingURL=invalidatebysrcimagesop.d.ts.map