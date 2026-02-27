import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const Tag: {
    readonly Symbol: "symbol";
};
export type Tag = ClosedEnum<typeof Tag>;
/**
 * an object to be decoded into a globally shared symbol
 */
export type PropertyKey3 = {
    tag: Tag;
    key: string;
};
export type PropertyKey = PropertyKey3 | string | number;
/** @internal */
export declare const Tag$inboundSchema: z.ZodNativeEnum<typeof Tag>;
/** @internal */
export declare const Tag$outboundSchema: z.ZodNativeEnum<typeof Tag>;
/** @internal */
export declare const PropertyKey3$inboundSchema: z.ZodType<PropertyKey3, z.ZodTypeDef, unknown>;
/** @internal */
export type PropertyKey3$Outbound = {
    _tag: string;
    key: string;
};
/** @internal */
export declare const PropertyKey3$outboundSchema: z.ZodType<PropertyKey3$Outbound, z.ZodTypeDef, PropertyKey3>;
export declare function propertyKey3ToJSON(propertyKey3: PropertyKey3): string;
export declare function propertyKey3FromJSON(jsonString: string): SafeParseResult<PropertyKey3, SDKValidationError>;
/** @internal */
export declare const PropertyKey$inboundSchema: z.ZodType<PropertyKey, z.ZodTypeDef, unknown>;
/** @internal */
export type PropertyKey$Outbound = PropertyKey3$Outbound | string | number;
/** @internal */
export declare const PropertyKey$outboundSchema: z.ZodType<PropertyKey$Outbound, z.ZodTypeDef, PropertyKey>;
export declare function propertyKeyToJSON(propertyKey: PropertyKey): string;
export declare function propertyKeyFromJSON(jsonString: string): SafeParseResult<PropertyKey, SDKValidationError>;
//# sourceMappingURL=propertykey.d.ts.map