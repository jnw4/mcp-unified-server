import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ConnectIntegrationResourceToProjectRequestBody = {
    projectId: string;
};
export type ConnectIntegrationResourceToProjectRequest = {
    integrationConfigurationId: string;
    resourceId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: ConnectIntegrationResourceToProjectRequestBody | undefined;
};
/** @internal */
export declare const ConnectIntegrationResourceToProjectRequestBody$inboundSchema: z.ZodType<ConnectIntegrationResourceToProjectRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectIntegrationResourceToProjectRequestBody$Outbound = {
    projectId: string;
};
/** @internal */
export declare const ConnectIntegrationResourceToProjectRequestBody$outboundSchema: z.ZodType<ConnectIntegrationResourceToProjectRequestBody$Outbound, z.ZodTypeDef, ConnectIntegrationResourceToProjectRequestBody>;
export declare function connectIntegrationResourceToProjectRequestBodyToJSON(connectIntegrationResourceToProjectRequestBody: ConnectIntegrationResourceToProjectRequestBody): string;
export declare function connectIntegrationResourceToProjectRequestBodyFromJSON(jsonString: string): SafeParseResult<ConnectIntegrationResourceToProjectRequestBody, SDKValidationError>;
/** @internal */
export declare const ConnectIntegrationResourceToProjectRequest$inboundSchema: z.ZodType<ConnectIntegrationResourceToProjectRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectIntegrationResourceToProjectRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: ConnectIntegrationResourceToProjectRequestBody$Outbound | undefined;
};
/** @internal */
export declare const ConnectIntegrationResourceToProjectRequest$outboundSchema: z.ZodType<ConnectIntegrationResourceToProjectRequest$Outbound, z.ZodTypeDef, ConnectIntegrationResourceToProjectRequest>;
export declare function connectIntegrationResourceToProjectRequestToJSON(connectIntegrationResourceToProjectRequest: ConnectIntegrationResourceToProjectRequest): string;
export declare function connectIntegrationResourceToProjectRequestFromJSON(jsonString: string): SafeParseResult<ConnectIntegrationResourceToProjectRequest, SDKValidationError>;
//# sourceMappingURL=connectintegrationresourcetoprojectop.d.ts.map