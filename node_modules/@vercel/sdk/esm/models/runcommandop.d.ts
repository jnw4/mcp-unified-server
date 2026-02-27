import * as z from "zod/v3";
import { JsonLStream } from "../lib/jsonl.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SandboxCommand, SandboxCommand$Outbound } from "./sandboxcommand.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RunCommandRequestBody = {
    /**
     * The executable or shell command to run. This is the program name without arguments.
     */
    command: string;
    /**
     * Arguments to pass to the command. Each argument should be a separate array element.
     */
    args?: Array<string> | undefined;
    /**
     * The working directory in which to execute the command. Defaults to the sandbox home directory if not specified.
     */
    cwd?: string | undefined;
    /**
     * Additional environment variables to set for this command. These are merged with the sandbox environment.
     */
    env?: {
        [k: string]: string;
    } | undefined;
    /**
     * Execute the command with root (superuser) privileges.
     */
    sudo?: boolean | undefined;
    /**
     * If true, returns an ND-JSON stream that emits the command status when started and again when finished. Useful for synchronously waiting for command completion.
     */
    wait?: boolean | undefined;
};
export type RunCommandRequest = {
    /**
     * The unique identifier of the sandbox in which to execute the command.
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
    requestBody?: RunCommandRequestBody | undefined;
};
export type RunCommandSandboxesResponseBody = {
    /**
     * This object represents command run in a Vercel Sandbox.
     */
    command: SandboxCommand;
};
export type RunCommandResponseBody = {
    /**
     * This object represents command run in a Vercel Sandbox.
     */
    command: SandboxCommand;
};
export type RunCommandResponse = RunCommandResponseBody | JsonLStream<RunCommandSandboxesResponseBody>;
/** @internal */
export declare const RunCommandRequestBody$inboundSchema: z.ZodType<RunCommandRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RunCommandRequestBody$Outbound = {
    command: string;
    args?: Array<string> | undefined;
    cwd?: string | undefined;
    env?: {
        [k: string]: string;
    } | undefined;
    sudo: boolean;
    wait: boolean;
};
/** @internal */
export declare const RunCommandRequestBody$outboundSchema: z.ZodType<RunCommandRequestBody$Outbound, z.ZodTypeDef, RunCommandRequestBody>;
export declare function runCommandRequestBodyToJSON(runCommandRequestBody: RunCommandRequestBody): string;
export declare function runCommandRequestBodyFromJSON(jsonString: string): SafeParseResult<RunCommandRequestBody, SDKValidationError>;
/** @internal */
export declare const RunCommandRequest$inboundSchema: z.ZodType<RunCommandRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RunCommandRequest$Outbound = {
    sandboxId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: RunCommandRequestBody$Outbound | undefined;
};
/** @internal */
export declare const RunCommandRequest$outboundSchema: z.ZodType<RunCommandRequest$Outbound, z.ZodTypeDef, RunCommandRequest>;
export declare function runCommandRequestToJSON(runCommandRequest: RunCommandRequest): string;
export declare function runCommandRequestFromJSON(jsonString: string): SafeParseResult<RunCommandRequest, SDKValidationError>;
/** @internal */
export declare const RunCommandSandboxesResponseBody$inboundSchema: z.ZodType<RunCommandSandboxesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RunCommandSandboxesResponseBody$Outbound = {
    command: SandboxCommand$Outbound;
};
/** @internal */
export declare const RunCommandSandboxesResponseBody$outboundSchema: z.ZodType<RunCommandSandboxesResponseBody$Outbound, z.ZodTypeDef, RunCommandSandboxesResponseBody>;
export declare function runCommandSandboxesResponseBodyToJSON(runCommandSandboxesResponseBody: RunCommandSandboxesResponseBody): string;
export declare function runCommandSandboxesResponseBodyFromJSON(jsonString: string): SafeParseResult<RunCommandSandboxesResponseBody, SDKValidationError>;
/** @internal */
export declare const RunCommandResponseBody$inboundSchema: z.ZodType<RunCommandResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RunCommandResponseBody$Outbound = {
    command: SandboxCommand$Outbound;
};
/** @internal */
export declare const RunCommandResponseBody$outboundSchema: z.ZodType<RunCommandResponseBody$Outbound, z.ZodTypeDef, RunCommandResponseBody>;
export declare function runCommandResponseBodyToJSON(runCommandResponseBody: RunCommandResponseBody): string;
export declare function runCommandResponseBodyFromJSON(jsonString: string): SafeParseResult<RunCommandResponseBody, SDKValidationError>;
/** @internal */
export declare const RunCommandResponse$inboundSchema: z.ZodType<RunCommandResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RunCommandResponse$Outbound = RunCommandResponseBody$Outbound | never;
/** @internal */
export declare const RunCommandResponse$outboundSchema: z.ZodType<RunCommandResponse$Outbound, z.ZodTypeDef, RunCommandResponse>;
export declare function runCommandResponseToJSON(runCommandResponse: RunCommandResponse): string;
export declare function runCommandResponseFromJSON(jsonString: string): SafeParseResult<RunCommandResponse, SDKValidationError>;
//# sourceMappingURL=runcommandop.d.ts.map