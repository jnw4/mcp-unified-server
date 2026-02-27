import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetRollingReleaseBillingStatusRequest = {
    /**
     * Project ID or project name (URL-encoded)
     */
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type ResponseBody4 = {
    availableSlots: number;
    reason: "available_slots";
    message: string;
};
export type GetRollingReleaseBillingStatusResponseBody3 = {
    availableSlots: number;
    reason: "no_available_slots";
    message: string;
    enabledProjects: Array<string>;
};
export declare const AvailableSlots: {
    readonly Unlimited: "unlimited";
};
export type AvailableSlots = ClosedEnum<typeof AvailableSlots>;
export type GetRollingReleaseBillingStatusResponseBody2 = {
    availableSlots: AvailableSlots;
    reason: "unlimited_slots";
    message: string;
};
export type GetRollingReleaseBillingStatusResponseBody1 = {
    availableSlots: number;
    reason: "plan_not_supported";
    message: string;
};
export type GetRollingReleaseBillingStatusResponseBody = GetRollingReleaseBillingStatusResponseBody1 | GetRollingReleaseBillingStatusResponseBody2 | GetRollingReleaseBillingStatusResponseBody3 | ResponseBody4;
/** @internal */
export declare const GetRollingReleaseBillingStatusRequest$inboundSchema: z.ZodType<GetRollingReleaseBillingStatusRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseBillingStatusRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetRollingReleaseBillingStatusRequest$outboundSchema: z.ZodType<GetRollingReleaseBillingStatusRequest$Outbound, z.ZodTypeDef, GetRollingReleaseBillingStatusRequest>;
export declare function getRollingReleaseBillingStatusRequestToJSON(getRollingReleaseBillingStatusRequest: GetRollingReleaseBillingStatusRequest): string;
export declare function getRollingReleaseBillingStatusRequestFromJSON(jsonString: string): SafeParseResult<GetRollingReleaseBillingStatusRequest, SDKValidationError>;
/** @internal */
export declare const ResponseBody4$inboundSchema: z.ZodType<ResponseBody4, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBody4$Outbound = {
    availableSlots: number;
    reason: "available_slots";
    message: string;
};
/** @internal */
export declare const ResponseBody4$outboundSchema: z.ZodType<ResponseBody4$Outbound, z.ZodTypeDef, ResponseBody4>;
export declare function responseBody4ToJSON(responseBody4: ResponseBody4): string;
export declare function responseBody4FromJSON(jsonString: string): SafeParseResult<ResponseBody4, SDKValidationError>;
/** @internal */
export declare const GetRollingReleaseBillingStatusResponseBody3$inboundSchema: z.ZodType<GetRollingReleaseBillingStatusResponseBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseBillingStatusResponseBody3$Outbound = {
    availableSlots: number;
    reason: "no_available_slots";
    message: string;
    enabledProjects: Array<string>;
};
/** @internal */
export declare const GetRollingReleaseBillingStatusResponseBody3$outboundSchema: z.ZodType<GetRollingReleaseBillingStatusResponseBody3$Outbound, z.ZodTypeDef, GetRollingReleaseBillingStatusResponseBody3>;
export declare function getRollingReleaseBillingStatusResponseBody3ToJSON(getRollingReleaseBillingStatusResponseBody3: GetRollingReleaseBillingStatusResponseBody3): string;
export declare function getRollingReleaseBillingStatusResponseBody3FromJSON(jsonString: string): SafeParseResult<GetRollingReleaseBillingStatusResponseBody3, SDKValidationError>;
/** @internal */
export declare const AvailableSlots$inboundSchema: z.ZodNativeEnum<typeof AvailableSlots>;
/** @internal */
export declare const AvailableSlots$outboundSchema: z.ZodNativeEnum<typeof AvailableSlots>;
/** @internal */
export declare const GetRollingReleaseBillingStatusResponseBody2$inboundSchema: z.ZodType<GetRollingReleaseBillingStatusResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseBillingStatusResponseBody2$Outbound = {
    availableSlots: string;
    reason: "unlimited_slots";
    message: string;
};
/** @internal */
export declare const GetRollingReleaseBillingStatusResponseBody2$outboundSchema: z.ZodType<GetRollingReleaseBillingStatusResponseBody2$Outbound, z.ZodTypeDef, GetRollingReleaseBillingStatusResponseBody2>;
export declare function getRollingReleaseBillingStatusResponseBody2ToJSON(getRollingReleaseBillingStatusResponseBody2: GetRollingReleaseBillingStatusResponseBody2): string;
export declare function getRollingReleaseBillingStatusResponseBody2FromJSON(jsonString: string): SafeParseResult<GetRollingReleaseBillingStatusResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetRollingReleaseBillingStatusResponseBody1$inboundSchema: z.ZodType<GetRollingReleaseBillingStatusResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseBillingStatusResponseBody1$Outbound = {
    availableSlots: number;
    reason: "plan_not_supported";
    message: string;
};
/** @internal */
export declare const GetRollingReleaseBillingStatusResponseBody1$outboundSchema: z.ZodType<GetRollingReleaseBillingStatusResponseBody1$Outbound, z.ZodTypeDef, GetRollingReleaseBillingStatusResponseBody1>;
export declare function getRollingReleaseBillingStatusResponseBody1ToJSON(getRollingReleaseBillingStatusResponseBody1: GetRollingReleaseBillingStatusResponseBody1): string;
export declare function getRollingReleaseBillingStatusResponseBody1FromJSON(jsonString: string): SafeParseResult<GetRollingReleaseBillingStatusResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetRollingReleaseBillingStatusResponseBody$inboundSchema: z.ZodType<GetRollingReleaseBillingStatusResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRollingReleaseBillingStatusResponseBody$Outbound = GetRollingReleaseBillingStatusResponseBody1$Outbound | GetRollingReleaseBillingStatusResponseBody2$Outbound | GetRollingReleaseBillingStatusResponseBody3$Outbound | ResponseBody4$Outbound;
/** @internal */
export declare const GetRollingReleaseBillingStatusResponseBody$outboundSchema: z.ZodType<GetRollingReleaseBillingStatusResponseBody$Outbound, z.ZodTypeDef, GetRollingReleaseBillingStatusResponseBody>;
export declare function getRollingReleaseBillingStatusResponseBodyToJSON(getRollingReleaseBillingStatusResponseBody: GetRollingReleaseBillingStatusResponseBody): string;
export declare function getRollingReleaseBillingStatusResponseBodyFromJSON(jsonString: string): SafeParseResult<GetRollingReleaseBillingStatusResponseBody, SDKValidationError>;
//# sourceMappingURL=getrollingreleasebillingstatusop.d.ts.map