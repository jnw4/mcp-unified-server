import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SandboxCommand, SandboxCommand$Outbound } from "./sandboxcommand.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListCommandsRequest = {
    /**
     * The unique identifier of the sandbox to list commands for.
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
 * The list of commands executed in the sandbox.
 */
export type ListCommandsResponseBody = {
    commands: Array<SandboxCommand>;
};
/** @internal */
export declare const ListCommandsRequest$inboundSchema: z.ZodType<ListCommandsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCommandsRequest$Outbound = {
    sandboxId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListCommandsRequest$outboundSchema: z.ZodType<ListCommandsRequest$Outbound, z.ZodTypeDef, ListCommandsRequest>;
export declare function listCommandsRequestToJSON(listCommandsRequest: ListCommandsRequest): string;
export declare function listCommandsRequestFromJSON(jsonString: string): SafeParseResult<ListCommandsRequest, SDKValidationError>;
/** @internal */
export declare const ListCommandsResponseBody$inboundSchema: z.ZodType<ListCommandsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCommandsResponseBody$Outbound = {
    commands: Array<SandboxCommand$Outbound>;
};
/** @internal */
export declare const ListCommandsResponseBody$outboundSchema: z.ZodType<ListCommandsResponseBody$Outbound, z.ZodTypeDef, ListCommandsResponseBody>;
export declare function listCommandsResponseBodyToJSON(listCommandsResponseBody: ListCommandsResponseBody): string;
export declare function listCommandsResponseBodyFromJSON(jsonString: string): SafeParseResult<ListCommandsResponseBody, SDKValidationError>;
//# sourceMappingURL=listcommandsop.d.ts.map