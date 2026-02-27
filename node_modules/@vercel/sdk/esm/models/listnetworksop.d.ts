import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListNetworksRequest = {
    /**
     * Whether to include Hosted Zones in the response
     */
    includeHostedZones?: boolean | undefined;
    /**
     * Whether to include VPC Peering connections in the response
     */
    includePeeringConnections?: boolean | undefined;
    /**
     * Whether to include projects in the response
     */
    includeProjects?: boolean | undefined;
    /**
     * The query to use as a filter for returned networks
     */
    search?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/** @internal */
export declare const ListNetworksRequest$inboundSchema: z.ZodType<ListNetworksRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListNetworksRequest$Outbound = {
    includeHostedZones: boolean;
    includePeeringConnections: boolean;
    includeProjects: boolean;
    search?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListNetworksRequest$outboundSchema: z.ZodType<ListNetworksRequest$Outbound, z.ZodTypeDef, ListNetworksRequest>;
export declare function listNetworksRequestToJSON(listNetworksRequest: ListNetworksRequest): string;
export declare function listNetworksRequestFromJSON(jsonString: string): SafeParseResult<ListNetworksRequest, SDKValidationError>;
//# sourceMappingURL=listnetworksop.d.ts.map