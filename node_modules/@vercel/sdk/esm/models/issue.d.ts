import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { PropertyKey, PropertyKey$Outbound } from "./propertykey.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Represents an error encountered while parsing a value to match the schema
 */
export type Issue = {
    /**
     * The path to the property where the issue occurred
     */
    path: Array<PropertyKey>;
    /**
     * A descriptive message explaining the issue
     */
    message: string;
};
/** @internal */
export declare const Issue$inboundSchema: z.ZodType<Issue, z.ZodTypeDef, unknown>;
/** @internal */
export type Issue$Outbound = {
    path: Array<PropertyKey$Outbound>;
    message: string;
};
/** @internal */
export declare const Issue$outboundSchema: z.ZodType<Issue$Outbound, z.ZodTypeDef, Issue>;
export declare function issueToJSON(issue: Issue): string;
export declare function issueFromJSON(jsonString: string): SafeParseResult<Issue, SDKValidationError>;
//# sourceMappingURL=issue.d.ts.map