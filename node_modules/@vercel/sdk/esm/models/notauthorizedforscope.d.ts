import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const NotAuthorizedForScopeCode: {
    readonly NotAuthorizedForScope: "not_authorized_for_scope";
};
export type NotAuthorizedForScopeCode = ClosedEnum<typeof NotAuthorizedForScopeCode>;
export type NotAuthorizedForScopeData = {
    status: number;
    code: NotAuthorizedForScopeCode;
    message: string;
};
export declare class NotAuthorizedForScope extends VercelError {
    status: number;
    code: NotAuthorizedForScopeCode;
    /** The original data that was passed to this error instance. */
    data$: NotAuthorizedForScopeData;
    constructor(err: NotAuthorizedForScopeData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const NotAuthorizedForScopeCode$inboundSchema: z.ZodNativeEnum<typeof NotAuthorizedForScopeCode>;
/** @internal */
export declare const NotAuthorizedForScopeCode$outboundSchema: z.ZodNativeEnum<typeof NotAuthorizedForScopeCode>;
/** @internal */
export declare const NotAuthorizedForScope$inboundSchema: z.ZodType<NotAuthorizedForScope, z.ZodTypeDef, unknown>;
/** @internal */
export type NotAuthorizedForScope$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const NotAuthorizedForScope$outboundSchema: z.ZodType<NotAuthorizedForScope$Outbound, z.ZodTypeDef, NotAuthorizedForScope>;
//# sourceMappingURL=notauthorizedforscope.d.ts.map