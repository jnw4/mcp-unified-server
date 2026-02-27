import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const Code: {
    readonly Unauthorized: "unauthorized";
};
export type Code = ClosedEnum<typeof Code>;
export type UnauthorizedData = {
    status: number;
    code: Code;
    message: string;
};
export declare class Unauthorized extends VercelError {
    status: number;
    code: Code;
    /** The original data that was passed to this error instance. */
    data$: UnauthorizedData;
    constructor(err: UnauthorizedData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const Code$inboundSchema: z.ZodNativeEnum<typeof Code>;
/** @internal */
export declare const Code$outboundSchema: z.ZodNativeEnum<typeof Code>;
/** @internal */
export declare const Unauthorized$inboundSchema: z.ZodType<Unauthorized, z.ZodTypeDef, unknown>;
/** @internal */
export type Unauthorized$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const Unauthorized$outboundSchema: z.ZodType<Unauthorized$Outbound, z.ZodTypeDef, Unauthorized>;
//# sourceMappingURL=unauthorized.d.ts.map