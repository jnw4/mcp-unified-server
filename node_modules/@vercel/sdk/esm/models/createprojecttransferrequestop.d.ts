import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type CreateProjectTransferRequestRequestBody = {
    /**
     * The URL to send a webhook to when the transfer is accepted.
     */
    callbackUrl?: string | undefined;
    /**
     * The secret to use to sign the webhook payload with HMAC-SHA256.
     */
    callbackSecret?: string | undefined;
};
export type CreateProjectTransferRequestRequest = {
    /**
     * The ID or name of the project to transfer.
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
    requestBody?: CreateProjectTransferRequestRequestBody | undefined;
};
/**
 * The project transfer request has been initiated successfully.
 */
export type CreateProjectTransferRequestResponseBody = {
    /**
     * Code that can be used to accept the project transfer request.
     */
    code: string;
};
/** @internal */
export declare const CreateProjectTransferRequestRequestBody$inboundSchema: z.ZodType<CreateProjectTransferRequestRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectTransferRequestRequestBody$Outbound = {
    callbackUrl?: string | undefined;
    callbackSecret?: string | undefined;
};
/** @internal */
export declare const CreateProjectTransferRequestRequestBody$outboundSchema: z.ZodType<CreateProjectTransferRequestRequestBody$Outbound, z.ZodTypeDef, CreateProjectTransferRequestRequestBody>;
export declare function createProjectTransferRequestRequestBodyToJSON(createProjectTransferRequestRequestBody: CreateProjectTransferRequestRequestBody): string;
export declare function createProjectTransferRequestRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateProjectTransferRequestRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateProjectTransferRequestRequest$inboundSchema: z.ZodType<CreateProjectTransferRequestRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectTransferRequestRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateProjectTransferRequestRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CreateProjectTransferRequestRequest$outboundSchema: z.ZodType<CreateProjectTransferRequestRequest$Outbound, z.ZodTypeDef, CreateProjectTransferRequestRequest>;
export declare function createProjectTransferRequestRequestToJSON(createProjectTransferRequestRequest: CreateProjectTransferRequestRequest): string;
export declare function createProjectTransferRequestRequestFromJSON(jsonString: string): SafeParseResult<CreateProjectTransferRequestRequest, SDKValidationError>;
/** @internal */
export declare const CreateProjectTransferRequestResponseBody$inboundSchema: z.ZodType<CreateProjectTransferRequestResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateProjectTransferRequestResponseBody$Outbound = {
    code: string;
};
/** @internal */
export declare const CreateProjectTransferRequestResponseBody$outboundSchema: z.ZodType<CreateProjectTransferRequestResponseBody$Outbound, z.ZodTypeDef, CreateProjectTransferRequestResponseBody>;
export declare function createProjectTransferRequestResponseBodyToJSON(createProjectTransferRequestResponseBody: CreateProjectTransferRequestResponseBody): string;
export declare function createProjectTransferRequestResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateProjectTransferRequestResponseBody, SDKValidationError>;
//# sourceMappingURL=createprojecttransferrequestop.d.ts.map