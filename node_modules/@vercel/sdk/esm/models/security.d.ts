import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type Security = {
    bearerToken?: string | undefined;
};
/** @internal */
export declare const Security$inboundSchema: z.ZodType<Security, z.ZodTypeDef, unknown>;
/** @internal */
export type Security$Outbound = {
    bearerToken?: string | undefined;
};
/** @internal */
export declare const Security$outboundSchema: z.ZodType<Security$Outbound, z.ZodTypeDef, Security>;
export declare function securityToJSON(security: Security): string;
export declare function securityFromJSON(jsonString: string): SafeParseResult<Security, SDKValidationError>;
//# sourceMappingURL=security.d.ts.map