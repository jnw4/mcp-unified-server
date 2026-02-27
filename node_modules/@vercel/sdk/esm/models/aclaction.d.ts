import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
/**
 * Enum containing the actions that can be performed against a resource. Group operations are included.
 */
export declare const ACLAction: {
    readonly Create: "create";
    readonly Delete: "delete";
    readonly Read: "read";
    readonly Update: "update";
    readonly List: "list";
};
/**
 * Enum containing the actions that can be performed against a resource. Group operations are included.
 */
export type ACLAction = ClosedEnum<typeof ACLAction>;
/** @internal */
export declare const ACLAction$inboundSchema: z.ZodNativeEnum<typeof ACLAction>;
/** @internal */
export declare const ACLAction$outboundSchema: z.ZodNativeEnum<typeof ACLAction>;
//# sourceMappingURL=aclaction.d.ts.map