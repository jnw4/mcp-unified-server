import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SandboxInjectionRule, SandboxInjectionRule$Outbound } from "./sandboxinjectionrule.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The network policy mode. - 'allow-all': All traffic is allowed. - 'deny-all': All traffic is blocked. - 'custom': Traffic is controlled by explicit allow/deny rules.
 */
export declare const Mode: {
    readonly AllowAll: "allow-all";
    readonly DenyAll: "deny-all";
    readonly Custom: "custom";
};
/**
 * The network policy mode. - 'allow-all': All traffic is allowed. - 'deny-all': All traffic is blocked. - 'custom': Traffic is controlled by explicit allow/deny rules.
 */
export type Mode = ClosedEnum<typeof Mode>;
/**
 * The network policy applied to this sandbox, if any.
 */
export type SandboxNetworkPolicy = {
    /**
     * The network policy mode. - 'allow-all': All traffic is allowed. - 'deny-all': All traffic is blocked. - 'custom': Traffic is controlled by explicit allow/deny rules.
     */
    mode: Mode;
    /**
     * List of domain names the sandbox is allowed to connect to. Supports wildcard patterns (e.g., "*.vercel.com" matches all subdomains).
     */
    allowedDomains?: Array<string> | undefined;
    /**
     * List of IP address ranges (in CIDR notation) the sandbox is allowed to connect to.
     */
    allowedCIDRs?: Array<string> | undefined;
    /**
     * List of IP address ranges (in CIDR notation) the sandbox is blocked from connecting to. These rules take precedence over all allowed rules.
     */
    deniedCIDRs?: Array<string> | undefined;
    /**
     * HTTP header injection rules for outgoing requests matching specific domains.
     */
    injectionRules?: Array<SandboxInjectionRule> | undefined;
};
/** @internal */
export declare const Mode$inboundSchema: z.ZodNativeEnum<typeof Mode>;
/** @internal */
export declare const Mode$outboundSchema: z.ZodNativeEnum<typeof Mode>;
/** @internal */
export declare const SandboxNetworkPolicy$inboundSchema: z.ZodType<SandboxNetworkPolicy, z.ZodTypeDef, unknown>;
/** @internal */
export type SandboxNetworkPolicy$Outbound = {
    mode: string;
    allowedDomains?: Array<string> | undefined;
    allowedCIDRs?: Array<string> | undefined;
    deniedCIDRs?: Array<string> | undefined;
    injectionRules?: Array<SandboxInjectionRule$Outbound> | undefined;
};
/** @internal */
export declare const SandboxNetworkPolicy$outboundSchema: z.ZodType<SandboxNetworkPolicy$Outbound, z.ZodTypeDef, SandboxNetworkPolicy>;
export declare function sandboxNetworkPolicyToJSON(sandboxNetworkPolicy: SandboxNetworkPolicy): string;
export declare function sandboxNetworkPolicyFromJSON(jsonString: string): SafeParseResult<SandboxNetworkPolicy, SDKValidationError>;
//# sourceMappingURL=sandboxnetworkpolicy.d.ts.map