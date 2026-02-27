import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { Sandbox, Sandbox$Outbound } from "./sandbox.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ExtendSandboxTimeoutRequestBody = {
    /**
     * The amount of time in milliseconds to add to the current timeout. Must be at least 1000ms (1 second).
     */
    duration: number;
};
export type ExtendSandboxTimeoutRequest = {
    /**
     * The unique identifier of the sandbox to extend the timeout for.
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
    requestBody?: ExtendSandboxTimeoutRequestBody | undefined;
};
/**
 * The sandbox timeout was extended successfully.
 */
export type ExtendSandboxTimeoutResponseBody = {
    /**
     * This object contains information related to a Vercel Sandbox.
     */
    sandbox: Sandbox;
};
/** @internal */
export declare const ExtendSandboxTimeoutRequestBody$inboundSchema: z.ZodType<ExtendSandboxTimeoutRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ExtendSandboxTimeoutRequestBody$Outbound = {
    duration: number;
};
/** @internal */
export declare const ExtendSandboxTimeoutRequestBody$outboundSchema: z.ZodType<ExtendSandboxTimeoutRequestBody$Outbound, z.ZodTypeDef, ExtendSandboxTimeoutRequestBody>;
export declare function extendSandboxTimeoutRequestBodyToJSON(extendSandboxTimeoutRequestBody: ExtendSandboxTimeoutRequestBody): string;
export declare function extendSandboxTimeoutRequestBodyFromJSON(jsonString: string): SafeParseResult<ExtendSandboxTimeoutRequestBody, SDKValidationError>;
/** @internal */
export declare const ExtendSandboxTimeoutRequest$inboundSchema: z.ZodType<ExtendSandboxTimeoutRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ExtendSandboxTimeoutRequest$Outbound = {
    sandboxId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: ExtendSandboxTimeoutRequestBody$Outbound | undefined;
};
/** @internal */
export declare const ExtendSandboxTimeoutRequest$outboundSchema: z.ZodType<ExtendSandboxTimeoutRequest$Outbound, z.ZodTypeDef, ExtendSandboxTimeoutRequest>;
export declare function extendSandboxTimeoutRequestToJSON(extendSandboxTimeoutRequest: ExtendSandboxTimeoutRequest): string;
export declare function extendSandboxTimeoutRequestFromJSON(jsonString: string): SafeParseResult<ExtendSandboxTimeoutRequest, SDKValidationError>;
/** @internal */
export declare const ExtendSandboxTimeoutResponseBody$inboundSchema: z.ZodType<ExtendSandboxTimeoutResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ExtendSandboxTimeoutResponseBody$Outbound = {
    sandbox: Sandbox$Outbound;
};
/** @internal */
export declare const ExtendSandboxTimeoutResponseBody$outboundSchema: z.ZodType<ExtendSandboxTimeoutResponseBody$Outbound, z.ZodTypeDef, ExtendSandboxTimeoutResponseBody>;
export declare function extendSandboxTimeoutResponseBodyToJSON(extendSandboxTimeoutResponseBody: ExtendSandboxTimeoutResponseBody): string;
export declare function extendSandboxTimeoutResponseBodyFromJSON(jsonString: string): SafeParseResult<ExtendSandboxTimeoutResponseBody, SDKValidationError>;
//# sourceMappingURL=extendsandboxtimeoutop.d.ts.map