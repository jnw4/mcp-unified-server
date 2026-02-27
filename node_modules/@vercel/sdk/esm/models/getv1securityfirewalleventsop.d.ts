import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetV1SecurityFirewallEventsRequest = {
    projectId: string;
    startTimestamp?: number | undefined;
    endTimestamp?: number | undefined;
    hosts?: string | undefined;
};
export type Actions = {
    startTime: string;
    endTime: string;
    isActive: boolean;
    actionType: string;
    host: string;
    publicIp: string;
    count: number;
};
export type GetV1SecurityFirewallEventsResponseBody = {
    actions: Array<Actions>;
};
/** @internal */
export declare const GetV1SecurityFirewallEventsRequest$inboundSchema: z.ZodType<GetV1SecurityFirewallEventsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1SecurityFirewallEventsRequest$Outbound = {
    projectId: string;
    startTimestamp?: number | undefined;
    endTimestamp?: number | undefined;
    hosts?: string | undefined;
};
/** @internal */
export declare const GetV1SecurityFirewallEventsRequest$outboundSchema: z.ZodType<GetV1SecurityFirewallEventsRequest$Outbound, z.ZodTypeDef, GetV1SecurityFirewallEventsRequest>;
export declare function getV1SecurityFirewallEventsRequestToJSON(getV1SecurityFirewallEventsRequest: GetV1SecurityFirewallEventsRequest): string;
export declare function getV1SecurityFirewallEventsRequestFromJSON(jsonString: string): SafeParseResult<GetV1SecurityFirewallEventsRequest, SDKValidationError>;
/** @internal */
export declare const Actions$inboundSchema: z.ZodType<Actions, z.ZodTypeDef, unknown>;
/** @internal */
export type Actions$Outbound = {
    startTime: string;
    endTime: string;
    isActive: boolean;
    action_type: string;
    host: string;
    public_ip: string;
    count: number;
};
/** @internal */
export declare const Actions$outboundSchema: z.ZodType<Actions$Outbound, z.ZodTypeDef, Actions>;
export declare function actionsToJSON(actions: Actions): string;
export declare function actionsFromJSON(jsonString: string): SafeParseResult<Actions, SDKValidationError>;
/** @internal */
export declare const GetV1SecurityFirewallEventsResponseBody$inboundSchema: z.ZodType<GetV1SecurityFirewallEventsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1SecurityFirewallEventsResponseBody$Outbound = {
    actions: Array<Actions$Outbound>;
};
/** @internal */
export declare const GetV1SecurityFirewallEventsResponseBody$outboundSchema: z.ZodType<GetV1SecurityFirewallEventsResponseBody$Outbound, z.ZodTypeDef, GetV1SecurityFirewallEventsResponseBody>;
export declare function getV1SecurityFirewallEventsResponseBodyToJSON(getV1SecurityFirewallEventsResponseBody: GetV1SecurityFirewallEventsResponseBody): string;
export declare function getV1SecurityFirewallEventsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetV1SecurityFirewallEventsResponseBody, SDKValidationError>;
//# sourceMappingURL=getv1securityfirewalleventsop.d.ts.map