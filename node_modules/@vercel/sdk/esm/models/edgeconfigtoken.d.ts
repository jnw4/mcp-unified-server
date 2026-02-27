import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The EdgeConfig.
 */
export type EdgeConfigToken = {
    token: string;
    label: string;
    /**
     * This is not the token itself, but rather an id to identify the token by
     */
    id: string;
    edgeConfigId: string;
    createdAt: number;
};
/** @internal */
export declare const EdgeConfigToken$inboundSchema: z.ZodType<EdgeConfigToken, z.ZodTypeDef, unknown>;
/** @internal */
export type EdgeConfigToken$Outbound = {
    token: string;
    label: string;
    id: string;
    edgeConfigId: string;
    createdAt: number;
};
/** @internal */
export declare const EdgeConfigToken$outboundSchema: z.ZodType<EdgeConfigToken$Outbound, z.ZodTypeDef, EdgeConfigToken>;
export declare function edgeConfigTokenToJSON(edgeConfigToken: EdgeConfigToken): string;
export declare function edgeConfigTokenFromJSON(jsonString: string): SafeParseResult<EdgeConfigToken, SDKValidationError>;
//# sourceMappingURL=edgeconfigtoken.d.ts.map