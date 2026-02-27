import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type CreateDirectoryRequestBody = {
    /**
     * The base directory for resolving relative paths. If not specified, paths are resolved from the sandbox home directory.
     */
    cwd?: string | undefined;
    /**
     * The path of the directory to create. Can be absolute or relative to the working directory.
     */
    path: string;
    /**
     * If true, creates parent directories as needed (like `mkdir -p`). If false, fails if parent directories do not exist.
     */
    recursive?: boolean | undefined;
};
export type CreateDirectoryRequest = {
    /**
     * The unique identifier of the sandbox to create the directory in.
     */
    sandboxId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateDirectoryRequestBody | undefined;
};
/**
 * The directory was created successfully.
 */
export type CreateDirectoryResponseBody = {};
/** @internal */
export declare const CreateDirectoryRequestBody$inboundSchema: z.ZodType<CreateDirectoryRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDirectoryRequestBody$Outbound = {
    cwd?: string | undefined;
    path: string;
    recursive: boolean;
};
/** @internal */
export declare const CreateDirectoryRequestBody$outboundSchema: z.ZodType<CreateDirectoryRequestBody$Outbound, z.ZodTypeDef, CreateDirectoryRequestBody>;
export declare function createDirectoryRequestBodyToJSON(createDirectoryRequestBody: CreateDirectoryRequestBody): string;
export declare function createDirectoryRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateDirectoryRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateDirectoryRequest$inboundSchema: z.ZodType<CreateDirectoryRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDirectoryRequest$Outbound = {
    sandboxId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateDirectoryRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CreateDirectoryRequest$outboundSchema: z.ZodType<CreateDirectoryRequest$Outbound, z.ZodTypeDef, CreateDirectoryRequest>;
export declare function createDirectoryRequestToJSON(createDirectoryRequest: CreateDirectoryRequest): string;
export declare function createDirectoryRequestFromJSON(jsonString: string): SafeParseResult<CreateDirectoryRequest, SDKValidationError>;
/** @internal */
export declare const CreateDirectoryResponseBody$inboundSchema: z.ZodType<CreateDirectoryResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDirectoryResponseBody$Outbound = {};
/** @internal */
export declare const CreateDirectoryResponseBody$outboundSchema: z.ZodType<CreateDirectoryResponseBody$Outbound, z.ZodTypeDef, CreateDirectoryResponseBody>;
export declare function createDirectoryResponseBodyToJSON(createDirectoryResponseBody: CreateDirectoryResponseBody): string;
export declare function createDirectoryResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateDirectoryResponseBody, SDKValidationError>;
//# sourceMappingURL=createdirectoryop.d.ts.map