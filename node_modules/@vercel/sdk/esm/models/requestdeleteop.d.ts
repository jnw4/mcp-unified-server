import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * An object describing the reason why the User account is being deleted.
 */
export type RequestDeleteReasons = {
    /**
     * Idenitifier slug of the reason why the User account is being deleted.
     */
    slug: string;
    /**
     * Description of the reason why the User account is being deleted.
     */
    description: string;
};
export type RequestDeleteRequestBody = {
    /**
     * Optional array of objects that describe the reason why the User account is being deleted.
     */
    reasons?: Array<RequestDeleteReasons> | undefined;
};
/**
 * Response indicating that the User deletion process has been initiated, and a confirmation email has been sent.
 */
export type RequestDeleteResponseBody = {
    /**
     * Unique identifier of the User who has initiated deletion.
     */
    id: string;
    /**
     * Email address of the User who has initiated deletion.
     */
    email: string;
    /**
     * User deletion progress status.
     */
    message: string;
};
/** @internal */
export declare const RequestDeleteReasons$inboundSchema: z.ZodType<RequestDeleteReasons, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestDeleteReasons$Outbound = {
    slug: string;
    description: string;
};
/** @internal */
export declare const RequestDeleteReasons$outboundSchema: z.ZodType<RequestDeleteReasons$Outbound, z.ZodTypeDef, RequestDeleteReasons>;
export declare function requestDeleteReasonsToJSON(requestDeleteReasons: RequestDeleteReasons): string;
export declare function requestDeleteReasonsFromJSON(jsonString: string): SafeParseResult<RequestDeleteReasons, SDKValidationError>;
/** @internal */
export declare const RequestDeleteRequestBody$inboundSchema: z.ZodType<RequestDeleteRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestDeleteRequestBody$Outbound = {
    reasons?: Array<RequestDeleteReasons$Outbound> | undefined;
};
/** @internal */
export declare const RequestDeleteRequestBody$outboundSchema: z.ZodType<RequestDeleteRequestBody$Outbound, z.ZodTypeDef, RequestDeleteRequestBody>;
export declare function requestDeleteRequestBodyToJSON(requestDeleteRequestBody: RequestDeleteRequestBody): string;
export declare function requestDeleteRequestBodyFromJSON(jsonString: string): SafeParseResult<RequestDeleteRequestBody, SDKValidationError>;
/** @internal */
export declare const RequestDeleteResponseBody$inboundSchema: z.ZodType<RequestDeleteResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestDeleteResponseBody$Outbound = {
    id: string;
    email: string;
    message: string;
};
/** @internal */
export declare const RequestDeleteResponseBody$outboundSchema: z.ZodType<RequestDeleteResponseBody$Outbound, z.ZodTypeDef, RequestDeleteResponseBody>;
export declare function requestDeleteResponseBodyToJSON(requestDeleteResponseBody: RequestDeleteResponseBody): string;
export declare function requestDeleteResponseBodyFromJSON(jsonString: string): SafeParseResult<RequestDeleteResponseBody, SDKValidationError>;
//# sourceMappingURL=requestdeleteop.d.ts.map