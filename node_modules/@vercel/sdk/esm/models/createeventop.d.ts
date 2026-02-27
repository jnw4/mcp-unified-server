import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type Event2 = {
    type: "resource.updated";
    /**
     * Partner-provided product slug or id
     */
    productId?: string | undefined;
    /**
     * Partner provided resource ID
     */
    resourceId: string;
};
export type Event1 = {
    type: "installation.updated";
    /**
     * The installation-level billing plan ID
     */
    billingPlanId?: string | undefined;
};
export type CreateEventEvent = Event1 | Event2;
export type CreateEventRequestBody = {
    event: Event1 | Event2;
};
export type CreateEventRequest = {
    integrationConfigurationId: string;
    requestBody: CreateEventRequestBody;
};
/** @internal */
export declare const Event2$inboundSchema: z.ZodType<Event2, z.ZodTypeDef, unknown>;
/** @internal */
export type Event2$Outbound = {
    type: "resource.updated";
    productId?: string | undefined;
    resourceId: string;
};
/** @internal */
export declare const Event2$outboundSchema: z.ZodType<Event2$Outbound, z.ZodTypeDef, Event2>;
export declare function event2ToJSON(event2: Event2): string;
export declare function event2FromJSON(jsonString: string): SafeParseResult<Event2, SDKValidationError>;
/** @internal */
export declare const Event1$inboundSchema: z.ZodType<Event1, z.ZodTypeDef, unknown>;
/** @internal */
export type Event1$Outbound = {
    type: "installation.updated";
    billingPlanId?: string | undefined;
};
/** @internal */
export declare const Event1$outboundSchema: z.ZodType<Event1$Outbound, z.ZodTypeDef, Event1>;
export declare function event1ToJSON(event1: Event1): string;
export declare function event1FromJSON(jsonString: string): SafeParseResult<Event1, SDKValidationError>;
/** @internal */
export declare const CreateEventEvent$inboundSchema: z.ZodType<CreateEventEvent, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEventEvent$Outbound = Event1$Outbound | Event2$Outbound;
/** @internal */
export declare const CreateEventEvent$outboundSchema: z.ZodType<CreateEventEvent$Outbound, z.ZodTypeDef, CreateEventEvent>;
export declare function createEventEventToJSON(createEventEvent: CreateEventEvent): string;
export declare function createEventEventFromJSON(jsonString: string): SafeParseResult<CreateEventEvent, SDKValidationError>;
/** @internal */
export declare const CreateEventRequestBody$inboundSchema: z.ZodType<CreateEventRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEventRequestBody$Outbound = {
    event: Event1$Outbound | Event2$Outbound;
};
/** @internal */
export declare const CreateEventRequestBody$outboundSchema: z.ZodType<CreateEventRequestBody$Outbound, z.ZodTypeDef, CreateEventRequestBody>;
export declare function createEventRequestBodyToJSON(createEventRequestBody: CreateEventRequestBody): string;
export declare function createEventRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateEventRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateEventRequest$inboundSchema: z.ZodType<CreateEventRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEventRequest$Outbound = {
    integrationConfigurationId: string;
    RequestBody: CreateEventRequestBody$Outbound;
};
/** @internal */
export declare const CreateEventRequest$outboundSchema: z.ZodType<CreateEventRequest$Outbound, z.ZodTypeDef, CreateEventRequest>;
export declare function createEventRequestToJSON(createEventRequest: CreateEventRequest): string;
export declare function createEventRequestFromJSON(jsonString: string): SafeParseResult<CreateEventRequest, SDKValidationError>;
//# sourceMappingURL=createeventop.d.ts.map