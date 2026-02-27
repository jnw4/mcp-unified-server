import * as z from "zod/v3";
import { VercelError } from "./vercelerror.js";
export type ForbiddenData = {
    status: number;
    code: "forbidden";
    message: string;
};
export declare class Forbidden extends VercelError {
    status: number;
    code: "forbidden";
    /** The original data that was passed to this error instance. */
    data$: ForbiddenData;
    constructor(err: ForbiddenData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const Forbidden$inboundSchema: z.ZodType<Forbidden, z.ZodTypeDef, unknown>;
/** @internal */
export type Forbidden$Outbound = {
    status: number;
    code: "forbidden";
    message: string;
};
/** @internal */
export declare const Forbidden$outboundSchema: z.ZodType<Forbidden$Outbound, z.ZodTypeDef, Forbidden>;
//# sourceMappingURL=forbidden.d.ts.map