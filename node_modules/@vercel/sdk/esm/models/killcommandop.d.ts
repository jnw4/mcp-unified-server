import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SandboxCommand, SandboxCommand$Outbound } from "./sandboxcommand.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type KillCommandRequestBody = {
    /**
     * The POSIX signal number to send to the process. Common values: 15 (SIGTERM) for graceful termination, 9 (SIGKILL) for forced termination.
     */
    signal: number;
};
export type KillCommandRequest = {
    /**
     * The unique identifier of the command to terminate.
     */
    cmdId: string;
    /**
     * The unique identifier of the sandbox containing the command.
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
    requestBody?: KillCommandRequestBody | undefined;
};
/**
 * The command was terminated successfully.
 */
export type KillCommandResponseBody = {
    /**
     * This object represents command run in a Vercel Sandbox.
     */
    command: SandboxCommand;
};
/** @internal */
export declare const KillCommandRequestBody$inboundSchema: z.ZodType<KillCommandRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type KillCommandRequestBody$Outbound = {
    signal: number;
};
/** @internal */
export declare const KillCommandRequestBody$outboundSchema: z.ZodType<KillCommandRequestBody$Outbound, z.ZodTypeDef, KillCommandRequestBody>;
export declare function killCommandRequestBodyToJSON(killCommandRequestBody: KillCommandRequestBody): string;
export declare function killCommandRequestBodyFromJSON(jsonString: string): SafeParseResult<KillCommandRequestBody, SDKValidationError>;
/** @internal */
export declare const KillCommandRequest$inboundSchema: z.ZodType<KillCommandRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type KillCommandRequest$Outbound = {
    cmdId: string;
    sandboxId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: KillCommandRequestBody$Outbound | undefined;
};
/** @internal */
export declare const KillCommandRequest$outboundSchema: z.ZodType<KillCommandRequest$Outbound, z.ZodTypeDef, KillCommandRequest>;
export declare function killCommandRequestToJSON(killCommandRequest: KillCommandRequest): string;
export declare function killCommandRequestFromJSON(jsonString: string): SafeParseResult<KillCommandRequest, SDKValidationError>;
/** @internal */
export declare const KillCommandResponseBody$inboundSchema: z.ZodType<KillCommandResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type KillCommandResponseBody$Outbound = {
    command: SandboxCommand$Outbound;
};
/** @internal */
export declare const KillCommandResponseBody$outboundSchema: z.ZodType<KillCommandResponseBody$Outbound, z.ZodTypeDef, KillCommandResponseBody>;
export declare function killCommandResponseBodyToJSON(killCommandResponseBody: KillCommandResponseBody): string;
export declare function killCommandResponseBodyFromJSON(jsonString: string): SafeParseResult<KillCommandResponseBody, SDKValidationError>;
//# sourceMappingURL=killcommandop.d.ts.map