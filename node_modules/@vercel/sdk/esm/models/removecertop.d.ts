import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RemoveCertRequest = {
    /**
     * The cert id to remove
     */
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type RemoveCertResponseBody = {};
/** @internal */
export declare const RemoveCertRequest$inboundSchema: z.ZodType<RemoveCertRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveCertRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const RemoveCertRequest$outboundSchema: z.ZodType<RemoveCertRequest$Outbound, z.ZodTypeDef, RemoveCertRequest>;
export declare function removeCertRequestToJSON(removeCertRequest: RemoveCertRequest): string;
export declare function removeCertRequestFromJSON(jsonString: string): SafeParseResult<RemoveCertRequest, SDKValidationError>;
/** @internal */
export declare const RemoveCertResponseBody$inboundSchema: z.ZodType<RemoveCertResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveCertResponseBody$Outbound = {};
/** @internal */
export declare const RemoveCertResponseBody$outboundSchema: z.ZodType<RemoveCertResponseBody$Outbound, z.ZodTypeDef, RemoveCertResponseBody>;
export declare function removeCertResponseBodyToJSON(removeCertResponseBody: RemoveCertResponseBody): string;
export declare function removeCertResponseBodyFromJSON(jsonString: string): SafeParseResult<RemoveCertResponseBody, SDKValidationError>;
//# sourceMappingURL=removecertop.d.ts.map