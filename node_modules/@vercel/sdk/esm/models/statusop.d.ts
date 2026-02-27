import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type StatusRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const StatusStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
    readonly OverLimit: "over_limit";
    readonly Paused: "paused";
};
export type StatusStatus = ClosedEnum<typeof StatusStatus>;
export type StatusResponseBody = {
    status: StatusStatus;
};
/** @internal */
export declare const StatusRequest$inboundSchema: z.ZodType<StatusRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type StatusRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const StatusRequest$outboundSchema: z.ZodType<StatusRequest$Outbound, z.ZodTypeDef, StatusRequest>;
export declare function statusRequestToJSON(statusRequest: StatusRequest): string;
export declare function statusRequestFromJSON(jsonString: string): SafeParseResult<StatusRequest, SDKValidationError>;
/** @internal */
export declare const StatusStatus$inboundSchema: z.ZodNativeEnum<typeof StatusStatus>;
/** @internal */
export declare const StatusStatus$outboundSchema: z.ZodNativeEnum<typeof StatusStatus>;
/** @internal */
export declare const StatusResponseBody$inboundSchema: z.ZodType<StatusResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type StatusResponseBody$Outbound = {
    status: string;
};
/** @internal */
export declare const StatusResponseBody$outboundSchema: z.ZodType<StatusResponseBody$Outbound, z.ZodTypeDef, StatusResponseBody>;
export declare function statusResponseBodyToJSON(statusResponseBody: StatusResponseBody): string;
export declare function statusResponseBodyFromJSON(jsonString: string): SafeParseResult<StatusResponseBody, SDKValidationError>;
//# sourceMappingURL=statusop.d.ts.map