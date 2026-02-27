import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * This object represents command run in a Vercel Sandbox.
 */
export type SandboxCommand = {
    /**
     * The ID of the command.
     */
    id: string;
    /**
     * The name of the command.
     */
    name: string;
    /**
     * The arguments of the command.
     */
    args: Array<string>;
    /**
     * The current working directory of the command.
     */
    cwd: string;
    /**
     * The ID of the sandbox associated with the command.
     */
    sandboxId: string;
    /**
     * If the command did finish, the exit code.
     */
    exitCode: number | null;
    /**
     * When the command was started, in milliseconds since the epoch.
     */
    startedAt: number;
};
/** @internal */
export declare const SandboxCommand$inboundSchema: z.ZodType<SandboxCommand, z.ZodTypeDef, unknown>;
/** @internal */
export type SandboxCommand$Outbound = {
    id: string;
    name: string;
    args: Array<string>;
    cwd: string;
    sandboxId: string;
    exitCode: number | null;
    startedAt: number;
};
/** @internal */
export declare const SandboxCommand$outboundSchema: z.ZodType<SandboxCommand$Outbound, z.ZodTypeDef, SandboxCommand>;
export declare function sandboxCommandToJSON(sandboxCommand: SandboxCommand): string;
export declare function sandboxCommandFromJSON(jsonString: string): SafeParseResult<SandboxCommand, SDKValidationError>;
//# sourceMappingURL=sandboxcommand.d.ts.map