import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { Sandbox, Sandbox$Outbound } from "./sandbox.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The network access policy mode. Use \"allow-all\" to permit all outbound traffic. Use \"deny-all\" to block all outbound traffic. Use \"custom\" to specify explicit allow/deny rules.
 */
export declare const UpdateNetworkPolicyMode: {
    readonly AllowAll: "allow-all";
    readonly DenyAll: "deny-all";
    readonly Custom: "custom";
    readonly DefaultAllow: "default-allow";
    readonly DefaultDeny: "default-deny";
};
/**
 * The network access policy mode. Use \"allow-all\" to permit all outbound traffic. Use \"deny-all\" to block all outbound traffic. Use \"custom\" to specify explicit allow/deny rules.
 */
export type UpdateNetworkPolicyMode = ClosedEnum<typeof UpdateNetworkPolicyMode>;
/**
 * Network access policy for the sandbox.\n    Controls which external hosts the sandbox can communicate with.\n    Use \"allow-all\" mode to allow all traffic, \"deny-all\" to block all traffic or \"custom\" to provide specific rules.
 */
export type UpdateNetworkPolicyRequestBody = {
    /**
     * The network access policy mode. Use \"allow-all\" to permit all outbound traffic. Use \"deny-all\" to block all outbound traffic. Use \"custom\" to specify explicit allow/deny rules.
     */
    mode: UpdateNetworkPolicyMode;
    /**
     * List of domain names the sandbox is allowed to connect to. Only applies when mode is \"custom\". Supports wildcard patterns (e.g., \"*.example.com\" matches all subdomains).
     */
    allowedDomains?: Array<string> | undefined;
    /**
     * List of IP address ranges (in CIDR notation) the sandbox is allowed to connect to. Traffic to these addresses bypasses domain-based restrictions.
     */
    allowedCIDRs?: Array<string> | undefined;
    /**
     * List of IP address ranges (in CIDR notation) the sandbox is blocked from connecting to. These rules take precedence over all allowed rules.
     */
    deniedCIDRs?: Array<string> | undefined;
};
export type UpdateNetworkPolicyRequest = {
    /**
     * The unique identifier of the sandbox to update the network policy for.
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
    requestBody?: UpdateNetworkPolicyRequestBody | undefined;
};
/**
 * The sandbox network policy was updated successfully.
 */
export type UpdateNetworkPolicyResponseBody = {
    /**
     * This object contains information related to a Vercel Sandbox.
     */
    sandbox: Sandbox;
};
/** @internal */
export declare const UpdateNetworkPolicyMode$inboundSchema: z.ZodNativeEnum<typeof UpdateNetworkPolicyMode>;
/** @internal */
export declare const UpdateNetworkPolicyMode$outboundSchema: z.ZodNativeEnum<typeof UpdateNetworkPolicyMode>;
/** @internal */
export declare const UpdateNetworkPolicyRequestBody$inboundSchema: z.ZodType<UpdateNetworkPolicyRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateNetworkPolicyRequestBody$Outbound = {
    mode: string;
    allowedDomains?: Array<string> | undefined;
    allowedCIDRs?: Array<string> | undefined;
    deniedCIDRs?: Array<string> | undefined;
};
/** @internal */
export declare const UpdateNetworkPolicyRequestBody$outboundSchema: z.ZodType<UpdateNetworkPolicyRequestBody$Outbound, z.ZodTypeDef, UpdateNetworkPolicyRequestBody>;
export declare function updateNetworkPolicyRequestBodyToJSON(updateNetworkPolicyRequestBody: UpdateNetworkPolicyRequestBody): string;
export declare function updateNetworkPolicyRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateNetworkPolicyRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateNetworkPolicyRequest$inboundSchema: z.ZodType<UpdateNetworkPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateNetworkPolicyRequest$Outbound = {
    sandboxId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateNetworkPolicyRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateNetworkPolicyRequest$outboundSchema: z.ZodType<UpdateNetworkPolicyRequest$Outbound, z.ZodTypeDef, UpdateNetworkPolicyRequest>;
export declare function updateNetworkPolicyRequestToJSON(updateNetworkPolicyRequest: UpdateNetworkPolicyRequest): string;
export declare function updateNetworkPolicyRequestFromJSON(jsonString: string): SafeParseResult<UpdateNetworkPolicyRequest, SDKValidationError>;
/** @internal */
export declare const UpdateNetworkPolicyResponseBody$inboundSchema: z.ZodType<UpdateNetworkPolicyResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateNetworkPolicyResponseBody$Outbound = {
    sandbox: Sandbox$Outbound;
};
/** @internal */
export declare const UpdateNetworkPolicyResponseBody$outboundSchema: z.ZodType<UpdateNetworkPolicyResponseBody$Outbound, z.ZodTypeDef, UpdateNetworkPolicyResponseBody>;
export declare function updateNetworkPolicyResponseBodyToJSON(updateNetworkPolicyResponseBody: UpdateNetworkPolicyResponseBody): string;
export declare function updateNetworkPolicyResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateNetworkPolicyResponseBody, SDKValidationError>;
//# sourceMappingURL=updatenetworkpolicyop.d.ts.map