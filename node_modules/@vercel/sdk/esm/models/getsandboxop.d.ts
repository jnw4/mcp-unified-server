import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { Sandbox, Sandbox$Outbound } from "./sandbox.js";
import { SandboxPublicRoute, SandboxPublicRoute$Outbound } from "./sandboxpublicroute.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetSandboxRequest = {
    /**
     * The unique identifier of the sandbox to retrieve.
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
export type GetSandboxResponseBody = {
    /**
     * This object contains information related to a Vercel Sandbox.
     */
    sandbox: Sandbox;
    routes: Array<SandboxPublicRoute>;
};
/** @internal */
export declare const GetSandboxRequest$inboundSchema: z.ZodType<GetSandboxRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSandboxRequest$Outbound = {
    sandboxId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetSandboxRequest$outboundSchema: z.ZodType<GetSandboxRequest$Outbound, z.ZodTypeDef, GetSandboxRequest>;
export declare function getSandboxRequestToJSON(getSandboxRequest: GetSandboxRequest): string;
export declare function getSandboxRequestFromJSON(jsonString: string): SafeParseResult<GetSandboxRequest, SDKValidationError>;
/** @internal */
export declare const GetSandboxResponseBody$inboundSchema: z.ZodType<GetSandboxResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSandboxResponseBody$Outbound = {
    sandbox: Sandbox$Outbound;
    routes: Array<SandboxPublicRoute$Outbound>;
};
/** @internal */
export declare const GetSandboxResponseBody$outboundSchema: z.ZodType<GetSandboxResponseBody$Outbound, z.ZodTypeDef, GetSandboxResponseBody>;
export declare function getSandboxResponseBodyToJSON(getSandboxResponseBody: GetSandboxResponseBody): string;
export declare function getSandboxResponseBodyFromJSON(jsonString: string): SafeParseResult<GetSandboxResponseBody, SDKValidationError>;
//# sourceMappingURL=getsandboxop.d.ts.map