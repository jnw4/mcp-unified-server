import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type CreateEdgeConfigTokenRequestBody = {
    label: string;
};
export type CreateEdgeConfigTokenRequest = {
    edgeConfigId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: CreateEdgeConfigTokenRequestBody;
};
export type CreateEdgeConfigTokenResponseBody = {
    token: string;
    id: string;
};
/** @internal */
export declare const CreateEdgeConfigTokenRequestBody$inboundSchema: z.ZodType<CreateEdgeConfigTokenRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEdgeConfigTokenRequestBody$Outbound = {
    label: string;
};
/** @internal */
export declare const CreateEdgeConfigTokenRequestBody$outboundSchema: z.ZodType<CreateEdgeConfigTokenRequestBody$Outbound, z.ZodTypeDef, CreateEdgeConfigTokenRequestBody>;
export declare function createEdgeConfigTokenRequestBodyToJSON(createEdgeConfigTokenRequestBody: CreateEdgeConfigTokenRequestBody): string;
export declare function createEdgeConfigTokenRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateEdgeConfigTokenRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateEdgeConfigTokenRequest$inboundSchema: z.ZodType<CreateEdgeConfigTokenRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEdgeConfigTokenRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: CreateEdgeConfigTokenRequestBody$Outbound;
};
/** @internal */
export declare const CreateEdgeConfigTokenRequest$outboundSchema: z.ZodType<CreateEdgeConfigTokenRequest$Outbound, z.ZodTypeDef, CreateEdgeConfigTokenRequest>;
export declare function createEdgeConfigTokenRequestToJSON(createEdgeConfigTokenRequest: CreateEdgeConfigTokenRequest): string;
export declare function createEdgeConfigTokenRequestFromJSON(jsonString: string): SafeParseResult<CreateEdgeConfigTokenRequest, SDKValidationError>;
/** @internal */
export declare const CreateEdgeConfigTokenResponseBody$inboundSchema: z.ZodType<CreateEdgeConfigTokenResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateEdgeConfigTokenResponseBody$Outbound = {
    token: string;
    id: string;
};
/** @internal */
export declare const CreateEdgeConfigTokenResponseBody$outboundSchema: z.ZodType<CreateEdgeConfigTokenResponseBody$Outbound, z.ZodTypeDef, CreateEdgeConfigTokenResponseBody>;
export declare function createEdgeConfigTokenResponseBodyToJSON(createEdgeConfigTokenResponseBody: CreateEdgeConfigTokenResponseBody): string;
export declare function createEdgeConfigTokenResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateEdgeConfigTokenResponseBody, SDKValidationError>;
//# sourceMappingURL=createedgeconfigtokenop.d.ts.map