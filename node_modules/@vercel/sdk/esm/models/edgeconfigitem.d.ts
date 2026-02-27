import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { EdgeConfigItemValue, EdgeConfigItemValue$Outbound } from "./edgeconfigitemvalue.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The EdgeConfig.
 */
export type EdgeConfigItem = {
    key: string;
    value: EdgeConfigItemValue | null;
    description?: string | undefined;
    edgeConfigId: string;
    createdAt: number;
    updatedAt: number;
};
/** @internal */
export declare const EdgeConfigItem$inboundSchema: z.ZodType<EdgeConfigItem, z.ZodTypeDef, unknown>;
/** @internal */
export type EdgeConfigItem$Outbound = {
    key: string;
    value: EdgeConfigItemValue$Outbound | null;
    description?: string | undefined;
    edgeConfigId: string;
    createdAt: number;
    updatedAt: number;
};
/** @internal */
export declare const EdgeConfigItem$outboundSchema: z.ZodType<EdgeConfigItem$Outbound, z.ZodTypeDef, EdgeConfigItem>;
export declare function edgeConfigItemToJSON(edgeConfigItem: EdgeConfigItem): string;
export declare function edgeConfigItemFromJSON(jsonString: string): SafeParseResult<EdgeConfigItem, SDKValidationError>;
//# sourceMappingURL=edgeconfigitem.d.ts.map