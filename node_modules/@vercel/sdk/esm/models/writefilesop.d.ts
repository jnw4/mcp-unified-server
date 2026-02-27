import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type WriteFilesRequest = {
    /**
     * The target directory where the tarball contents will be extracted. If not specified, files are extracted to the sandbox home directory.
     */
    xCwd?: string | undefined;
    /**
     * The unique identifier of the sandbox to write files to.
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
};
/**
 * The files were successfully written to the sandbox.
 */
export type WriteFilesResponseBody = {};
/** @internal */
export declare const WriteFilesRequest$inboundSchema: z.ZodType<WriteFilesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WriteFilesRequest$Outbound = {
    "x-cwd"?: string | undefined;
    sandboxId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const WriteFilesRequest$outboundSchema: z.ZodType<WriteFilesRequest$Outbound, z.ZodTypeDef, WriteFilesRequest>;
export declare function writeFilesRequestToJSON(writeFilesRequest: WriteFilesRequest): string;
export declare function writeFilesRequestFromJSON(jsonString: string): SafeParseResult<WriteFilesRequest, SDKValidationError>;
/** @internal */
export declare const WriteFilesResponseBody$inboundSchema: z.ZodType<WriteFilesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type WriteFilesResponseBody$Outbound = {};
/** @internal */
export declare const WriteFilesResponseBody$outboundSchema: z.ZodType<WriteFilesResponseBody$Outbound, z.ZodTypeDef, WriteFilesResponseBody>;
export declare function writeFilesResponseBodyToJSON(writeFilesResponseBody: WriteFilesResponseBody): string;
export declare function writeFilesResponseBodyFromJSON(jsonString: string): SafeParseResult<WriteFilesResponseBody, SDKValidationError>;
//# sourceMappingURL=writefilesop.d.ts.map