import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type AddBypassIpRequestBody2 = {
    domain?: string | undefined;
    /**
     * If the specified bypass will apply to all domains for a project.
     */
    projectScope: boolean;
    sourceIp?: string | undefined;
    allSources?: boolean | undefined;
    /**
     * Time to live in milliseconds
     */
    ttl?: number | undefined;
    note?: string | undefined;
};
export type AddBypassIpRequestBody1 = {
    domain: string;
    /**
     * If the specified bypass will apply to all domains for a project.
     */
    projectScope?: boolean | undefined;
    sourceIp?: string | undefined;
    allSources?: boolean | undefined;
    /**
     * Time to live in milliseconds
     */
    ttl?: number | undefined;
    note?: string | undefined;
};
export type AddBypassIpRequestBody = AddBypassIpRequestBody1 | AddBypassIpRequestBody2;
export type AddBypassIpRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: AddBypassIpRequestBody1 | AddBypassIpRequestBody2 | undefined;
};
export declare const ResponseBodyAction: {
    readonly Bypass: "bypass";
    readonly Block: "block";
};
export type ResponseBodyAction = ClosedEnum<typeof ResponseBodyAction>;
export type AddBypassIpResponseBodyResult = {
    ownerId: string;
    id: string;
    domain: string;
    ip: string;
    action?: ResponseBodyAction | undefined;
    projectId?: string | undefined;
    isProjectRule?: boolean | undefined;
    note?: string | undefined;
    createdAt: string;
    actorId?: string | undefined;
    updatedAt: string;
    updatedAtHour: string;
    deletedAt?: string | undefined;
    expiresAt?: number | null | undefined;
};
export type AddBypassIpResponseBody2 = {
    ok: boolean;
    result?: Array<AddBypassIpResponseBodyResult> | undefined;
};
export type ResponseBodyResult = {
    ownerId: string;
    id: string;
    domain: string;
    ip?: string | undefined;
    projectId: string;
    note: string;
    isProjectRule: boolean;
};
export type AddBypassIpResponseBody1 = {
    ok: boolean;
    result: Array<ResponseBodyResult>;
    pagination?: any | null | undefined;
};
export type AddBypassIpResponseBody = AddBypassIpResponseBody1 | AddBypassIpResponseBody2;
/** @internal */
export declare const AddBypassIpRequestBody2$inboundSchema: z.ZodType<AddBypassIpRequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type AddBypassIpRequestBody2$Outbound = {
    domain?: string | undefined;
    projectScope: boolean;
    sourceIp?: string | undefined;
    allSources?: boolean | undefined;
    ttl?: number | undefined;
    note?: string | undefined;
};
/** @internal */
export declare const AddBypassIpRequestBody2$outboundSchema: z.ZodType<AddBypassIpRequestBody2$Outbound, z.ZodTypeDef, AddBypassIpRequestBody2>;
export declare function addBypassIpRequestBody2ToJSON(addBypassIpRequestBody2: AddBypassIpRequestBody2): string;
export declare function addBypassIpRequestBody2FromJSON(jsonString: string): SafeParseResult<AddBypassIpRequestBody2, SDKValidationError>;
/** @internal */
export declare const AddBypassIpRequestBody1$inboundSchema: z.ZodType<AddBypassIpRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type AddBypassIpRequestBody1$Outbound = {
    domain: string;
    projectScope?: boolean | undefined;
    sourceIp?: string | undefined;
    allSources?: boolean | undefined;
    ttl?: number | undefined;
    note?: string | undefined;
};
/** @internal */
export declare const AddBypassIpRequestBody1$outboundSchema: z.ZodType<AddBypassIpRequestBody1$Outbound, z.ZodTypeDef, AddBypassIpRequestBody1>;
export declare function addBypassIpRequestBody1ToJSON(addBypassIpRequestBody1: AddBypassIpRequestBody1): string;
export declare function addBypassIpRequestBody1FromJSON(jsonString: string): SafeParseResult<AddBypassIpRequestBody1, SDKValidationError>;
/** @internal */
export declare const AddBypassIpRequestBody$inboundSchema: z.ZodType<AddBypassIpRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type AddBypassIpRequestBody$Outbound = AddBypassIpRequestBody1$Outbound | AddBypassIpRequestBody2$Outbound;
/** @internal */
export declare const AddBypassIpRequestBody$outboundSchema: z.ZodType<AddBypassIpRequestBody$Outbound, z.ZodTypeDef, AddBypassIpRequestBody>;
export declare function addBypassIpRequestBodyToJSON(addBypassIpRequestBody: AddBypassIpRequestBody): string;
export declare function addBypassIpRequestBodyFromJSON(jsonString: string): SafeParseResult<AddBypassIpRequestBody, SDKValidationError>;
/** @internal */
export declare const AddBypassIpRequest$inboundSchema: z.ZodType<AddBypassIpRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AddBypassIpRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: AddBypassIpRequestBody1$Outbound | AddBypassIpRequestBody2$Outbound | undefined;
};
/** @internal */
export declare const AddBypassIpRequest$outboundSchema: z.ZodType<AddBypassIpRequest$Outbound, z.ZodTypeDef, AddBypassIpRequest>;
export declare function addBypassIpRequestToJSON(addBypassIpRequest: AddBypassIpRequest): string;
export declare function addBypassIpRequestFromJSON(jsonString: string): SafeParseResult<AddBypassIpRequest, SDKValidationError>;
/** @internal */
export declare const ResponseBodyAction$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyAction>;
/** @internal */
export declare const ResponseBodyAction$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyAction>;
/** @internal */
export declare const AddBypassIpResponseBodyResult$inboundSchema: z.ZodType<AddBypassIpResponseBodyResult, z.ZodTypeDef, unknown>;
/** @internal */
export type AddBypassIpResponseBodyResult$Outbound = {
    OwnerId: string;
    Id: string;
    Domain: string;
    Ip: string;
    Action?: string | undefined;
    ProjectId?: string | undefined;
    IsProjectRule?: boolean | undefined;
    Note?: string | undefined;
    CreatedAt: string;
    ActorId?: string | undefined;
    UpdatedAt: string;
    UpdatedAtHour: string;
    DeletedAt?: string | undefined;
    ExpiresAt?: number | null | undefined;
};
/** @internal */
export declare const AddBypassIpResponseBodyResult$outboundSchema: z.ZodType<AddBypassIpResponseBodyResult$Outbound, z.ZodTypeDef, AddBypassIpResponseBodyResult>;
export declare function addBypassIpResponseBodyResultToJSON(addBypassIpResponseBodyResult: AddBypassIpResponseBodyResult): string;
export declare function addBypassIpResponseBodyResultFromJSON(jsonString: string): SafeParseResult<AddBypassIpResponseBodyResult, SDKValidationError>;
/** @internal */
export declare const AddBypassIpResponseBody2$inboundSchema: z.ZodType<AddBypassIpResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type AddBypassIpResponseBody2$Outbound = {
    ok: boolean;
    result?: Array<AddBypassIpResponseBodyResult$Outbound> | undefined;
};
/** @internal */
export declare const AddBypassIpResponseBody2$outboundSchema: z.ZodType<AddBypassIpResponseBody2$Outbound, z.ZodTypeDef, AddBypassIpResponseBody2>;
export declare function addBypassIpResponseBody2ToJSON(addBypassIpResponseBody2: AddBypassIpResponseBody2): string;
export declare function addBypassIpResponseBody2FromJSON(jsonString: string): SafeParseResult<AddBypassIpResponseBody2, SDKValidationError>;
/** @internal */
export declare const ResponseBodyResult$inboundSchema: z.ZodType<ResponseBodyResult, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyResult$Outbound = {
    OwnerId: string;
    Id: string;
    Domain: string;
    Ip?: string | undefined;
    ProjectId: string;
    Note: string;
    IsProjectRule: boolean;
};
/** @internal */
export declare const ResponseBodyResult$outboundSchema: z.ZodType<ResponseBodyResult$Outbound, z.ZodTypeDef, ResponseBodyResult>;
export declare function responseBodyResultToJSON(responseBodyResult: ResponseBodyResult): string;
export declare function responseBodyResultFromJSON(jsonString: string): SafeParseResult<ResponseBodyResult, SDKValidationError>;
/** @internal */
export declare const AddBypassIpResponseBody1$inboundSchema: z.ZodType<AddBypassIpResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type AddBypassIpResponseBody1$Outbound = {
    ok: boolean;
    result: Array<ResponseBodyResult$Outbound>;
    pagination?: any | null | undefined;
};
/** @internal */
export declare const AddBypassIpResponseBody1$outboundSchema: z.ZodType<AddBypassIpResponseBody1$Outbound, z.ZodTypeDef, AddBypassIpResponseBody1>;
export declare function addBypassIpResponseBody1ToJSON(addBypassIpResponseBody1: AddBypassIpResponseBody1): string;
export declare function addBypassIpResponseBody1FromJSON(jsonString: string): SafeParseResult<AddBypassIpResponseBody1, SDKValidationError>;
/** @internal */
export declare const AddBypassIpResponseBody$inboundSchema: z.ZodType<AddBypassIpResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type AddBypassIpResponseBody$Outbound = AddBypassIpResponseBody1$Outbound | AddBypassIpResponseBody2$Outbound;
/** @internal */
export declare const AddBypassIpResponseBody$outboundSchema: z.ZodType<AddBypassIpResponseBody$Outbound, z.ZodTypeDef, AddBypassIpResponseBody>;
export declare function addBypassIpResponseBodyToJSON(addBypassIpResponseBody: AddBypassIpResponseBody): string;
export declare function addBypassIpResponseBodyFromJSON(jsonString: string): SafeParseResult<AddBypassIpResponseBody, SDKValidationError>;
//# sourceMappingURL=addbypassipop.d.ts.map