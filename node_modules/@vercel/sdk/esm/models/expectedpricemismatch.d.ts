import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const ExpectedPriceMismatchCode: {
    readonly ExpectedPriceMismatch: "expected_price_mismatch";
};
export type ExpectedPriceMismatchCode = ClosedEnum<typeof ExpectedPriceMismatchCode>;
/**
 * The expected price passed does not match the actual price.
 */
export type ExpectedPriceMismatchData = {
    status: number;
    code: ExpectedPriceMismatchCode;
    message: string;
};
/**
 * The expected price passed does not match the actual price.
 */
export declare class ExpectedPriceMismatch extends VercelError {
    status: number;
    code: ExpectedPriceMismatchCode;
    /** The original data that was passed to this error instance. */
    data$: ExpectedPriceMismatchData;
    constructor(err: ExpectedPriceMismatchData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const ExpectedPriceMismatchCode$inboundSchema: z.ZodNativeEnum<typeof ExpectedPriceMismatchCode>;
/** @internal */
export declare const ExpectedPriceMismatchCode$outboundSchema: z.ZodNativeEnum<typeof ExpectedPriceMismatchCode>;
/** @internal */
export declare const ExpectedPriceMismatch$inboundSchema: z.ZodType<ExpectedPriceMismatch, z.ZodTypeDef, unknown>;
/** @internal */
export type ExpectedPriceMismatch$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const ExpectedPriceMismatch$outboundSchema: z.ZodType<ExpectedPriceMismatch$Outbound, z.ZodTypeDef, ExpectedPriceMismatch>;
//# sourceMappingURL=expectedpricemismatch.d.ts.map