import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * This object represents a public route in a Vercel Sandbox.
 */
export type SandboxPublicRoute = {
    /**
     * A public URL to access the corresponding port in the Sandbox.
     */
    url: string;
    /**
     * The user port number that the route is mapped to.
     */
    port: number;
    /**
     * The subdomain assigned to this route.
     */
    subdomain: string;
    /**
     * Whether the route is reserved by the system (e.g. for internal use).
     */
    system?: boolean | undefined;
};
/** @internal */
export declare const SandboxPublicRoute$inboundSchema: z.ZodType<SandboxPublicRoute, z.ZodTypeDef, unknown>;
/** @internal */
export type SandboxPublicRoute$Outbound = {
    url: string;
    port: number;
    subdomain: string;
    system?: boolean | undefined;
};
/** @internal */
export declare const SandboxPublicRoute$outboundSchema: z.ZodType<SandboxPublicRoute$Outbound, z.ZodTypeDef, SandboxPublicRoute>;
export declare function sandboxPublicRouteToJSON(sandboxPublicRoute: SandboxPublicRoute): string;
export declare function sandboxPublicRouteFromJSON(jsonString: string): SafeParseResult<SandboxPublicRoute, SDKValidationError>;
//# sourceMappingURL=sandboxpublicroute.d.ts.map