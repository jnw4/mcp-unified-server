import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const SDKKeyType: {
    readonly Server: "server";
    readonly Mobile: "mobile";
    readonly Client: "client";
};
export type SDKKeyType = ClosedEnum<typeof SDKKeyType>;
export type CreateSDKKeyRequestBody = {
    sdkKeyType: SDKKeyType;
    environment: string;
    label?: string | undefined;
};
export type CreateSDKKeyRequest = {
    /**
     * The project id or name
     */
    projectIdOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateSDKKeyRequestBody | undefined;
};
/** @internal */
export declare const SDKKeyType$inboundSchema: z.ZodNativeEnum<typeof SDKKeyType>;
/** @internal */
export declare const SDKKeyType$outboundSchema: z.ZodNativeEnum<typeof SDKKeyType>;
/** @internal */
export declare const CreateSDKKeyRequestBody$inboundSchema: z.ZodType<CreateSDKKeyRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSDKKeyRequestBody$Outbound = {
    sdkKeyType: string;
    environment: string;
    label?: string | undefined;
};
/** @internal */
export declare const CreateSDKKeyRequestBody$outboundSchema: z.ZodType<CreateSDKKeyRequestBody$Outbound, z.ZodTypeDef, CreateSDKKeyRequestBody>;
export declare function createSDKKeyRequestBodyToJSON(createSDKKeyRequestBody: CreateSDKKeyRequestBody): string;
export declare function createSDKKeyRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateSDKKeyRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateSDKKeyRequest$inboundSchema: z.ZodType<CreateSDKKeyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSDKKeyRequest$Outbound = {
    projectIdOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateSDKKeyRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CreateSDKKeyRequest$outboundSchema: z.ZodType<CreateSDKKeyRequest$Outbound, z.ZodTypeDef, CreateSDKKeyRequest>;
export declare function createSDKKeyRequestToJSON(createSDKKeyRequest: CreateSDKKeyRequest): string;
export declare function createSDKKeyRequestFromJSON(jsonString: string): SafeParseResult<CreateSDKKeyRequest, SDKValidationError>;
//# sourceMappingURL=createsdkkeyop.d.ts.map