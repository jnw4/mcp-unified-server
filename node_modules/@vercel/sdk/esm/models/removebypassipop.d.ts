import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RemoveBypassIpRequestBody2 = {
    domain?: string | undefined;
    projectScope: boolean;
    sourceIp?: string | undefined;
    allSources?: boolean | undefined;
    note?: string | undefined;
};
export type RemoveBypassIpRequestBody1 = {
    domain: string;
    projectScope?: boolean | undefined;
    sourceIp?: string | undefined;
    allSources?: boolean | undefined;
    note?: string | undefined;
};
export type RemoveBypassIpRequestBody = RemoveBypassIpRequestBody1 | RemoveBypassIpRequestBody2;
export type RemoveBypassIpRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: RemoveBypassIpRequestBody1 | RemoveBypassIpRequestBody2 | undefined;
};
export type RemoveBypassIpResponseBody = {
    ok: boolean;
};
/** @internal */
export declare const RemoveBypassIpRequestBody2$inboundSchema: z.ZodType<RemoveBypassIpRequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveBypassIpRequestBody2$Outbound = {
    domain?: string | undefined;
    projectScope: boolean;
    sourceIp?: string | undefined;
    allSources?: boolean | undefined;
    note?: string | undefined;
};
/** @internal */
export declare const RemoveBypassIpRequestBody2$outboundSchema: z.ZodType<RemoveBypassIpRequestBody2$Outbound, z.ZodTypeDef, RemoveBypassIpRequestBody2>;
export declare function removeBypassIpRequestBody2ToJSON(removeBypassIpRequestBody2: RemoveBypassIpRequestBody2): string;
export declare function removeBypassIpRequestBody2FromJSON(jsonString: string): SafeParseResult<RemoveBypassIpRequestBody2, SDKValidationError>;
/** @internal */
export declare const RemoveBypassIpRequestBody1$inboundSchema: z.ZodType<RemoveBypassIpRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveBypassIpRequestBody1$Outbound = {
    domain: string;
    projectScope?: boolean | undefined;
    sourceIp?: string | undefined;
    allSources?: boolean | undefined;
    note?: string | undefined;
};
/** @internal */
export declare const RemoveBypassIpRequestBody1$outboundSchema: z.ZodType<RemoveBypassIpRequestBody1$Outbound, z.ZodTypeDef, RemoveBypassIpRequestBody1>;
export declare function removeBypassIpRequestBody1ToJSON(removeBypassIpRequestBody1: RemoveBypassIpRequestBody1): string;
export declare function removeBypassIpRequestBody1FromJSON(jsonString: string): SafeParseResult<RemoveBypassIpRequestBody1, SDKValidationError>;
/** @internal */
export declare const RemoveBypassIpRequestBody$inboundSchema: z.ZodType<RemoveBypassIpRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveBypassIpRequestBody$Outbound = RemoveBypassIpRequestBody1$Outbound | RemoveBypassIpRequestBody2$Outbound;
/** @internal */
export declare const RemoveBypassIpRequestBody$outboundSchema: z.ZodType<RemoveBypassIpRequestBody$Outbound, z.ZodTypeDef, RemoveBypassIpRequestBody>;
export declare function removeBypassIpRequestBodyToJSON(removeBypassIpRequestBody: RemoveBypassIpRequestBody): string;
export declare function removeBypassIpRequestBodyFromJSON(jsonString: string): SafeParseResult<RemoveBypassIpRequestBody, SDKValidationError>;
/** @internal */
export declare const RemoveBypassIpRequest$inboundSchema: z.ZodType<RemoveBypassIpRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveBypassIpRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: RemoveBypassIpRequestBody1$Outbound | RemoveBypassIpRequestBody2$Outbound | undefined;
};
/** @internal */
export declare const RemoveBypassIpRequest$outboundSchema: z.ZodType<RemoveBypassIpRequest$Outbound, z.ZodTypeDef, RemoveBypassIpRequest>;
export declare function removeBypassIpRequestToJSON(removeBypassIpRequest: RemoveBypassIpRequest): string;
export declare function removeBypassIpRequestFromJSON(jsonString: string): SafeParseResult<RemoveBypassIpRequest, SDKValidationError>;
/** @internal */
export declare const RemoveBypassIpResponseBody$inboundSchema: z.ZodType<RemoveBypassIpResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveBypassIpResponseBody$Outbound = {
    ok: boolean;
};
/** @internal */
export declare const RemoveBypassIpResponseBody$outboundSchema: z.ZodType<RemoveBypassIpResponseBody$Outbound, z.ZodTypeDef, RemoveBypassIpResponseBody>;
export declare function removeBypassIpResponseBodyToJSON(removeBypassIpResponseBody: RemoveBypassIpResponseBody): string;
export declare function removeBypassIpResponseBodyFromJSON(jsonString: string): SafeParseResult<RemoveBypassIpResponseBody, SDKValidationError>;
//# sourceMappingURL=removebypassipop.d.ts.map