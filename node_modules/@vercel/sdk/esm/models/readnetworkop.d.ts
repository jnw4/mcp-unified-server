import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ReadNetworkRequest = {
    /**
     * The unique identifier of the Secure Compute network
     */
    networkId: string;
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
export declare const ReadNetworkRequest$inboundSchema: z.ZodType<ReadNetworkRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ReadNetworkRequest$Outbound = {
    networkId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ReadNetworkRequest$outboundSchema: z.ZodType<ReadNetworkRequest$Outbound, z.ZodTypeDef, ReadNetworkRequest>;
export declare function readNetworkRequestToJSON(readNetworkRequest: ReadNetworkRequest): string;
export declare function readNetworkRequestFromJSON(jsonString: string): SafeParseResult<ReadNetworkRequest, SDKValidationError>;
//# sourceMappingURL=readnetworkop.d.ts.map