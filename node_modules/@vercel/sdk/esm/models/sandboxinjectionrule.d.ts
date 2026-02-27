import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * HTTP header injection rules for outgoing requests matching specific domains.
 */
export type SandboxInjectionRule = {
    /**
     * The domain (or pattern) that this injection rule applies to. Supports wildcards like *.vercel.com.
     */
    domain: string;
    /**
     * The names of HTTP headers that have value that will be injected for requests to this domain.
     */
    headerNames?: Array<string> | undefined;
};
/** @internal */
export declare const SandboxInjectionRule$inboundSchema: z.ZodType<SandboxInjectionRule, z.ZodTypeDef, unknown>;
/** @internal */
export type SandboxInjectionRule$Outbound = {
    domain: string;
    headerNames?: Array<string> | undefined;
};
/** @internal */
export declare const SandboxInjectionRule$outboundSchema: z.ZodType<SandboxInjectionRule$Outbound, z.ZodTypeDef, SandboxInjectionRule>;
export declare function sandboxInjectionRuleToJSON(sandboxInjectionRule: SandboxInjectionRule): string;
export declare function sandboxInjectionRuleFromJSON(jsonString: string): SafeParseResult<SandboxInjectionRule, SDKValidationError>;
//# sourceMappingURL=sandboxinjectionrule.d.ts.map