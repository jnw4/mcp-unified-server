import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * String indicating the type of file tree entry.
 */
export declare const FileTreeType: {
    readonly Directory: "directory";
    readonly File: "file";
    readonly Symlink: "symlink";
    readonly Lambda: "lambda";
    readonly Middleware: "middleware";
    readonly Invalid: "invalid";
};
/**
 * String indicating the type of file tree entry.
 */
export type FileTreeType = ClosedEnum<typeof FileTreeType>;
/**
 * A deployment file tree entry
 */
export type FileTree = {
    /**
     * The name of the file tree entry
     */
    name: string;
    /**
     * String indicating the type of file tree entry.
     */
    type: FileTreeType;
    /**
     * The unique identifier of the file (only valid for the `file` type)
     */
    uid?: string | undefined;
    /**
     * The list of children files of the directory (only valid for the `directory` type)
     */
    children?: Array<FileTree> | undefined;
    /**
     * The content-type of the file (only valid for the `file` type)
     */
    contentType?: string | undefined;
    /**
     * The file "mode" indicating file type and permissions.
     */
    mode: number;
};
/** @internal */
export declare const FileTreeType$inboundSchema: z.ZodNativeEnum<typeof FileTreeType>;
/** @internal */
export declare const FileTreeType$outboundSchema: z.ZodNativeEnum<typeof FileTreeType>;
/** @internal */
export declare const FileTree$inboundSchema: z.ZodType<FileTree, z.ZodTypeDef, unknown>;
/** @internal */
export type FileTree$Outbound = {
    name: string;
    type: string;
    uid?: string | undefined;
    children?: Array<FileTree$Outbound> | undefined;
    contentType?: string | undefined;
    mode: number;
};
/** @internal */
export declare const FileTree$outboundSchema: z.ZodType<FileTree$Outbound, z.ZodTypeDef, FileTree>;
export declare function fileTreeToJSON(fileTree: FileTree): string;
export declare function fileTreeFromJSON(jsonString: string): SafeParseResult<FileTree, SDKValidationError>;
//# sourceMappingURL=filetree.d.ts.map