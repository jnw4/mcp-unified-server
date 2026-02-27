import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SandboxCommand, SandboxCommand$Outbound } from "./sandboxcommand.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * If set to \"true\", the request will block until the command finishes execution. Useful for synchronously waiting for command completion.
 */
export declare const Wait: {
    readonly True: "true";
    readonly False: "false";
};
/**
 * If set to \"true\", the request will block until the command finishes execution. Useful for synchronously waiting for command completion.
 */
export type Wait = ClosedEnum<typeof Wait>;
export type GetCommandRequest = {
    /**
     * The unique identifier of the sandbox containing the command.
     */
    sandboxId: string;
    /**
     * The unique identifier of the command to retrieve.
     */
    cmdId: string;
    /**
     * If set to \"true\", the request will block until the command finishes execution. Useful for synchronously waiting for command completion.
     */
    wait?: Wait | undefined;
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
 * The command data along with the exit code if the command did finish.
 */
export type GetCommandResponseBody = {
    /**
     * This object represents command run in a Vercel Sandbox.
     */
    command: SandboxCommand;
};
/** @internal */
export declare const Wait$inboundSchema: z.ZodNativeEnum<typeof Wait>;
/** @internal */
export declare const Wait$outboundSchema: z.ZodNativeEnum<typeof Wait>;
/** @internal */
export declare const GetCommandRequest$inboundSchema: z.ZodType<GetCommandRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCommandRequest$Outbound = {
    sandboxId: string;
    cmdId: string;
    wait: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetCommandRequest$outboundSchema: z.ZodType<GetCommandRequest$Outbound, z.ZodTypeDef, GetCommandRequest>;
export declare function getCommandRequestToJSON(getCommandRequest: GetCommandRequest): string;
export declare function getCommandRequestFromJSON(jsonString: string): SafeParseResult<GetCommandRequest, SDKValidationError>;
/** @internal */
export declare const GetCommandResponseBody$inboundSchema: z.ZodType<GetCommandResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCommandResponseBody$Outbound = {
    command: SandboxCommand$Outbound;
};
/** @internal */
export declare const GetCommandResponseBody$outboundSchema: z.ZodType<GetCommandResponseBody$Outbound, z.ZodTypeDef, GetCommandResponseBody>;
export declare function getCommandResponseBodyToJSON(getCommandResponseBody: GetCommandResponseBody): string;
export declare function getCommandResponseBodyFromJSON(jsonString: string): SafeParseResult<GetCommandResponseBody, SDKValidationError>;
//# sourceMappingURL=getcommandop.d.ts.map