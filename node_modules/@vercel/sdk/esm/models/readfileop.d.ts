import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ReadFileRequestBody = {
    /**
     * The base directory for resolving relative paths. If not specified, paths are resolved from the sandbox home directory.
     */
    cwd?: string | undefined;
    /**
     * The path of the file to read. Can be absolute or relative to the working directory.
     */
    path: string;
};
export type ReadFileRequest = {
    /**
     * The unique identifier of the sandbox to read the file from.
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
    requestBody?: ReadFileRequestBody | undefined;
};
/** @internal */
export declare const ReadFileRequestBody$inboundSchema: z.ZodType<ReadFileRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ReadFileRequestBody$Outbound = {
    cwd?: string | undefined;
    path: string;
};
/** @internal */
export declare const ReadFileRequestBody$outboundSchema: z.ZodType<ReadFileRequestBody$Outbound, z.ZodTypeDef, ReadFileRequestBody>;
export declare function readFileRequestBodyToJSON(readFileRequestBody: ReadFileRequestBody): string;
export declare function readFileRequestBodyFromJSON(jsonString: string): SafeParseResult<ReadFileRequestBody, SDKValidationError>;
/** @internal */
export declare const ReadFileRequest$inboundSchema: z.ZodType<ReadFileRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ReadFileRequest$Outbound = {
    sandboxId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: ReadFileRequestBody$Outbound | undefined;
};
/** @internal */
export declare const ReadFileRequest$outboundSchema: z.ZodType<ReadFileRequest$Outbound, z.ZodTypeDef, ReadFileRequest>;
export declare function readFileRequestToJSON(readFileRequest: ReadFileRequest): string;
export declare function readFileRequestFromJSON(jsonString: string): SafeParseResult<ReadFileRequest, SDKValidationError>;
//# sourceMappingURL=readfileop.d.ts.map