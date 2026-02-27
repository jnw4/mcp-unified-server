import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { Sandbox, Sandbox$Outbound } from "./sandbox.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type StopSandboxRequest = {
    /**
     * The unique identifier of the sandbox to stop.
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
 * The sandbox was stopped successfully.
 */
export type StopSandboxResponseBody = {
    /**
     * This object contains information related to a Vercel Sandbox.
     */
    sandbox: Sandbox;
};
/** @internal */
export declare const StopSandboxRequest$inboundSchema: z.ZodType<StopSandboxRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type StopSandboxRequest$Outbound = {
    sandboxId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const StopSandboxRequest$outboundSchema: z.ZodType<StopSandboxRequest$Outbound, z.ZodTypeDef, StopSandboxRequest>;
export declare function stopSandboxRequestToJSON(stopSandboxRequest: StopSandboxRequest): string;
export declare function stopSandboxRequestFromJSON(jsonString: string): SafeParseResult<StopSandboxRequest, SDKValidationError>;
/** @internal */
export declare const StopSandboxResponseBody$inboundSchema: z.ZodType<StopSandboxResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type StopSandboxResponseBody$Outbound = {
    sandbox: Sandbox$Outbound;
};
/** @internal */
export declare const StopSandboxResponseBody$outboundSchema: z.ZodType<StopSandboxResponseBody$Outbound, z.ZodTypeDef, StopSandboxResponseBody>;
export declare function stopSandboxResponseBodyToJSON(stopSandboxResponseBody: StopSandboxResponseBody): string;
export declare function stopSandboxResponseBodyFromJSON(jsonString: string): SafeParseResult<StopSandboxResponseBody, SDKValidationError>;
//# sourceMappingURL=stopsandboxop.d.ts.map