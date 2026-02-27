import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RemoveProjectDomainRequestBody = {
    /**
     * Whether to remove all domains from this project that redirect to the domain being removed.
     */
    removeRedirects?: boolean | undefined;
};
export type RemoveProjectDomainRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The project domain name
     */
    domain: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: RemoveProjectDomainRequestBody | undefined;
};
/**
 * The domain was succesfully removed from the project
 */
export type RemoveProjectDomainResponseBody = {};
/** @internal */
export declare const RemoveProjectDomainRequestBody$inboundSchema: z.ZodType<RemoveProjectDomainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectDomainRequestBody$Outbound = {
    removeRedirects?: boolean | undefined;
};
/** @internal */
export declare const RemoveProjectDomainRequestBody$outboundSchema: z.ZodType<RemoveProjectDomainRequestBody$Outbound, z.ZodTypeDef, RemoveProjectDomainRequestBody>;
export declare function removeProjectDomainRequestBodyToJSON(removeProjectDomainRequestBody: RemoveProjectDomainRequestBody): string;
export declare function removeProjectDomainRequestBodyFromJSON(jsonString: string): SafeParseResult<RemoveProjectDomainRequestBody, SDKValidationError>;
/** @internal */
export declare const RemoveProjectDomainRequest$inboundSchema: z.ZodType<RemoveProjectDomainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectDomainRequest$Outbound = {
    idOrName: string;
    domain: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: RemoveProjectDomainRequestBody$Outbound | undefined;
};
/** @internal */
export declare const RemoveProjectDomainRequest$outboundSchema: z.ZodType<RemoveProjectDomainRequest$Outbound, z.ZodTypeDef, RemoveProjectDomainRequest>;
export declare function removeProjectDomainRequestToJSON(removeProjectDomainRequest: RemoveProjectDomainRequest): string;
export declare function removeProjectDomainRequestFromJSON(jsonString: string): SafeParseResult<RemoveProjectDomainRequest, SDKValidationError>;
/** @internal */
export declare const RemoveProjectDomainResponseBody$inboundSchema: z.ZodType<RemoveProjectDomainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectDomainResponseBody$Outbound = {};
/** @internal */
export declare const RemoveProjectDomainResponseBody$outboundSchema: z.ZodType<RemoveProjectDomainResponseBody$Outbound, z.ZodTypeDef, RemoveProjectDomainResponseBody>;
export declare function removeProjectDomainResponseBodyToJSON(removeProjectDomainResponseBody: RemoveProjectDomainResponseBody): string;
export declare function removeProjectDomainResponseBodyFromJSON(jsonString: string): SafeParseResult<RemoveProjectDomainResponseBody, SDKValidationError>;
//# sourceMappingURL=removeprojectdomainop.d.ts.map