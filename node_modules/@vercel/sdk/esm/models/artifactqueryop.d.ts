import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ArtifactQueryRequestBody = {
    /**
     * artifact hashes
     */
    hashes: Array<string>;
};
export type ArtifactQueryRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: ArtifactQueryRequestBody;
};
export type ResponseBodyError = {
    message: string;
};
export type ResponseBody2 = {
    error: ResponseBodyError;
};
export type ResponseBody1 = {
    size: number;
    taskDurationMs: number;
    tag?: string | undefined;
};
export type ResponseBody = ResponseBody1 | ResponseBody2;
/** @internal */
export declare const ArtifactQueryRequestBody$inboundSchema: z.ZodType<ArtifactQueryRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ArtifactQueryRequestBody$Outbound = {
    hashes: Array<string>;
};
/** @internal */
export declare const ArtifactQueryRequestBody$outboundSchema: z.ZodType<ArtifactQueryRequestBody$Outbound, z.ZodTypeDef, ArtifactQueryRequestBody>;
export declare function artifactQueryRequestBodyToJSON(artifactQueryRequestBody: ArtifactQueryRequestBody): string;
export declare function artifactQueryRequestBodyFromJSON(jsonString: string): SafeParseResult<ArtifactQueryRequestBody, SDKValidationError>;
/** @internal */
export declare const ArtifactQueryRequest$inboundSchema: z.ZodType<ArtifactQueryRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ArtifactQueryRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: ArtifactQueryRequestBody$Outbound;
};
/** @internal */
export declare const ArtifactQueryRequest$outboundSchema: z.ZodType<ArtifactQueryRequest$Outbound, z.ZodTypeDef, ArtifactQueryRequest>;
export declare function artifactQueryRequestToJSON(artifactQueryRequest: ArtifactQueryRequest): string;
export declare function artifactQueryRequestFromJSON(jsonString: string): SafeParseResult<ArtifactQueryRequest, SDKValidationError>;
/** @internal */
export declare const ResponseBodyError$inboundSchema: z.ZodType<ResponseBodyError, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyError$Outbound = {
    message: string;
};
/** @internal */
export declare const ResponseBodyError$outboundSchema: z.ZodType<ResponseBodyError$Outbound, z.ZodTypeDef, ResponseBodyError>;
export declare function responseBodyErrorToJSON(responseBodyError: ResponseBodyError): string;
export declare function responseBodyErrorFromJSON(jsonString: string): SafeParseResult<ResponseBodyError, SDKValidationError>;
/** @internal */
export declare const ResponseBody2$inboundSchema: z.ZodType<ResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBody2$Outbound = {
    error: ResponseBodyError$Outbound;
};
/** @internal */
export declare const ResponseBody2$outboundSchema: z.ZodType<ResponseBody2$Outbound, z.ZodTypeDef, ResponseBody2>;
export declare function responseBody2ToJSON(responseBody2: ResponseBody2): string;
export declare function responseBody2FromJSON(jsonString: string): SafeParseResult<ResponseBody2, SDKValidationError>;
/** @internal */
export declare const ResponseBody1$inboundSchema: z.ZodType<ResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBody1$Outbound = {
    size: number;
    taskDurationMs: number;
    tag?: string | undefined;
};
/** @internal */
export declare const ResponseBody1$outboundSchema: z.ZodType<ResponseBody1$Outbound, z.ZodTypeDef, ResponseBody1>;
export declare function responseBody1ToJSON(responseBody1: ResponseBody1): string;
export declare function responseBody1FromJSON(jsonString: string): SafeParseResult<ResponseBody1, SDKValidationError>;
/** @internal */
export declare const ResponseBody$inboundSchema: z.ZodType<ResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBody$Outbound = ResponseBody1$Outbound | ResponseBody2$Outbound;
/** @internal */
export declare const ResponseBody$outboundSchema: z.ZodType<ResponseBody$Outbound, z.ZodTypeDef, ResponseBody>;
export declare function responseBodyToJSON(responseBody: ResponseBody): string;
export declare function responseBodyFromJSON(jsonString: string): SafeParseResult<ResponseBody, SDKValidationError>;
//# sourceMappingURL=artifactqueryop.d.ts.map