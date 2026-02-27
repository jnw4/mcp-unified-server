import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type BatchRemoveProjectEnvRequestBody = {
    /**
     * Array of environment variable IDs to delete
     */
    ids: Array<string>;
};
export type BatchRemoveProjectEnvRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: BatchRemoveProjectEnvRequestBody | undefined;
};
export type BatchRemoveProjectEnvResponseBody = {
    deleted: number;
    ids: Array<string>;
};
/** @internal */
export declare const BatchRemoveProjectEnvRequestBody$inboundSchema: z.ZodType<BatchRemoveProjectEnvRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type BatchRemoveProjectEnvRequestBody$Outbound = {
    ids: Array<string>;
};
/** @internal */
export declare const BatchRemoveProjectEnvRequestBody$outboundSchema: z.ZodType<BatchRemoveProjectEnvRequestBody$Outbound, z.ZodTypeDef, BatchRemoveProjectEnvRequestBody>;
export declare function batchRemoveProjectEnvRequestBodyToJSON(batchRemoveProjectEnvRequestBody: BatchRemoveProjectEnvRequestBody): string;
export declare function batchRemoveProjectEnvRequestBodyFromJSON(jsonString: string): SafeParseResult<BatchRemoveProjectEnvRequestBody, SDKValidationError>;
/** @internal */
export declare const BatchRemoveProjectEnvRequest$inboundSchema: z.ZodType<BatchRemoveProjectEnvRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BatchRemoveProjectEnvRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: BatchRemoveProjectEnvRequestBody$Outbound | undefined;
};
/** @internal */
export declare const BatchRemoveProjectEnvRequest$outboundSchema: z.ZodType<BatchRemoveProjectEnvRequest$Outbound, z.ZodTypeDef, BatchRemoveProjectEnvRequest>;
export declare function batchRemoveProjectEnvRequestToJSON(batchRemoveProjectEnvRequest: BatchRemoveProjectEnvRequest): string;
export declare function batchRemoveProjectEnvRequestFromJSON(jsonString: string): SafeParseResult<BatchRemoveProjectEnvRequest, SDKValidationError>;
/** @internal */
export declare const BatchRemoveProjectEnvResponseBody$inboundSchema: z.ZodType<BatchRemoveProjectEnvResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type BatchRemoveProjectEnvResponseBody$Outbound = {
    deleted: number;
    ids: Array<string>;
};
/** @internal */
export declare const BatchRemoveProjectEnvResponseBody$outboundSchema: z.ZodType<BatchRemoveProjectEnvResponseBody$Outbound, z.ZodTypeDef, BatchRemoveProjectEnvResponseBody>;
export declare function batchRemoveProjectEnvResponseBodyToJSON(batchRemoveProjectEnvResponseBody: BatchRemoveProjectEnvResponseBody): string;
export declare function batchRemoveProjectEnvResponseBodyFromJSON(jsonString: string): SafeParseResult<BatchRemoveProjectEnvResponseBody, SDKValidationError>;
//# sourceMappingURL=batchremoveprojectenvop.d.ts.map