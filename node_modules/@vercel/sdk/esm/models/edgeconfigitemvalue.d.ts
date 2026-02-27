import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type EdgeConfigItemValue = string | number | {
    [k: string]: EdgeConfigItemValue | null;
} | Array<EdgeConfigItemValue | null> | boolean;
/** @internal */
export declare const EdgeConfigItemValue$inboundSchema: z.ZodType<EdgeConfigItemValue, z.ZodTypeDef, unknown>;
/** @internal */
export type EdgeConfigItemValue$Outbound = string | number | {
    [k: string]: EdgeConfigItemValue$Outbound | null;
} | Array<EdgeConfigItemValue$Outbound | null> | boolean;
/** @internal */
export declare const EdgeConfigItemValue$outboundSchema: z.ZodType<EdgeConfigItemValue$Outbound, z.ZodTypeDef, EdgeConfigItemValue>;
export declare function edgeConfigItemValueToJSON(edgeConfigItemValue: EdgeConfigItemValue): string;
export declare function edgeConfigItemValueFromJSON(jsonString: string): SafeParseResult<EdgeConfigItemValue, SDKValidationError>;
//# sourceMappingURL=edgeconfigitemvalue.d.ts.map