import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const OrderTooExpensiveCode: {
    readonly OrderTooExpensive: "order_too_expensive";
};
export type OrderTooExpensiveCode = ClosedEnum<typeof OrderTooExpensiveCode>;
/**
 * The total price of the order is too high.
 */
export type OrderTooExpensiveData = {
    status: number;
    code: OrderTooExpensiveCode;
    message: string;
};
/**
 * The total price of the order is too high.
 */
export declare class OrderTooExpensive extends VercelError {
    status: number;
    code: OrderTooExpensiveCode;
    /** The original data that was passed to this error instance. */
    data$: OrderTooExpensiveData;
    constructor(err: OrderTooExpensiveData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const OrderTooExpensiveCode$inboundSchema: z.ZodNativeEnum<typeof OrderTooExpensiveCode>;
/** @internal */
export declare const OrderTooExpensiveCode$outboundSchema: z.ZodNativeEnum<typeof OrderTooExpensiveCode>;
/** @internal */
export declare const OrderTooExpensive$inboundSchema: z.ZodType<OrderTooExpensive, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderTooExpensive$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const OrderTooExpensive$outboundSchema: z.ZodType<OrderTooExpensive$Outbound, z.ZodTypeDef, OrderTooExpensive>;
//# sourceMappingURL=ordertooexpensive.d.ts.map