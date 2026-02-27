import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const BadRequestCode: {
    readonly BadRequest: "bad_request";
};
export type BadRequestCode = ClosedEnum<typeof BadRequestCode>;
export type BadRequestData = {
    status: number;
    code: BadRequestCode;
    message: string;
};
export declare class BadRequest extends VercelError {
    status: number;
    code: BadRequestCode;
    /** The original data that was passed to this error instance. */
    data$: BadRequestData;
    constructor(err: BadRequestData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const BadRequestCode$inboundSchema: z.ZodNativeEnum<typeof BadRequestCode>;
/** @internal */
export declare const BadRequestCode$outboundSchema: z.ZodNativeEnum<typeof BadRequestCode>;
/** @internal */
export declare const BadRequest$inboundSchema: z.ZodType<BadRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BadRequest$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const BadRequest$outboundSchema: z.ZodType<BadRequest$Outbound, z.ZodTypeDef, BadRequest>;
//# sourceMappingURL=badrequest.d.ts.map