import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type FlagJSONValue = string | number | Array<FlagJSONValue | null> | {
    [k: string]: FlagJSONValue | null;
} | boolean;
/** @internal */
export declare const FlagJSONValue$inboundSchema: z.ZodType<FlagJSONValue, z.ZodTypeDef, unknown>;
/** @internal */
export type FlagJSONValue$Outbound = string | number | Array<FlagJSONValue$Outbound | null> | {
    [k: string]: FlagJSONValue$Outbound | null;
} | boolean;
/** @internal */
export declare const FlagJSONValue$outboundSchema: z.ZodType<FlagJSONValue$Outbound, z.ZodTypeDef, FlagJSONValue>;
export declare function flagJSONValueToJSON(flagJSONValue: FlagJSONValue): string;
export declare function flagJSONValueFromJSON(jsonString: string): SafeParseResult<FlagJSONValue, SDKValidationError>;
//# sourceMappingURL=flagjsonvalue.d.ts.map