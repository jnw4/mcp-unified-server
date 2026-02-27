import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type CreateNetworkRequestBody = {
    awsAvailabilityZoneIds?: Array<string> | undefined;
    /**
     * The CIDR block of the network
     */
    cidr: string;
    /**
     * The name of the network
     */
    name: string;
    /**
     * The region where the network will be created
     */
    region: string;
};
export type CreateNetworkRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateNetworkRequestBody | undefined;
};
/** @internal */
export declare const CreateNetworkRequestBody$inboundSchema: z.ZodType<CreateNetworkRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateNetworkRequestBody$Outbound = {
    awsAvailabilityZoneIds?: Array<string> | undefined;
    cidr: string;
    name: string;
    region: string;
};
/** @internal */
export declare const CreateNetworkRequestBody$outboundSchema: z.ZodType<CreateNetworkRequestBody$Outbound, z.ZodTypeDef, CreateNetworkRequestBody>;
export declare function createNetworkRequestBodyToJSON(createNetworkRequestBody: CreateNetworkRequestBody): string;
export declare function createNetworkRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateNetworkRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateNetworkRequest$inboundSchema: z.ZodType<CreateNetworkRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateNetworkRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateNetworkRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CreateNetworkRequest$outboundSchema: z.ZodType<CreateNetworkRequest$Outbound, z.ZodTypeDef, CreateNetworkRequest>;
export declare function createNetworkRequestToJSON(createNetworkRequest: CreateNetworkRequest): string;
export declare function createNetworkRequestFromJSON(jsonString: string): SafeParseResult<CreateNetworkRequest, SDKValidationError>;
//# sourceMappingURL=createnetworkop.d.ts.map