import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteDomainRequest = {
    /**
     * The name of the domain.
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
};
/**
 * Successful response removing a domain.
 */
export type DeleteDomainResponseBody = {
    uid: string;
};
/** @internal */
export declare const DeleteDomainRequest$inboundSchema: z.ZodType<DeleteDomainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteDomainRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteDomainRequest$outboundSchema: z.ZodType<DeleteDomainRequest$Outbound, z.ZodTypeDef, DeleteDomainRequest>;
export declare function deleteDomainRequestToJSON(deleteDomainRequest: DeleteDomainRequest): string;
export declare function deleteDomainRequestFromJSON(jsonString: string): SafeParseResult<DeleteDomainRequest, SDKValidationError>;
/** @internal */
export declare const DeleteDomainResponseBody$inboundSchema: z.ZodType<DeleteDomainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteDomainResponseBody$Outbound = {
    uid: string;
};
/** @internal */
export declare const DeleteDomainResponseBody$outboundSchema: z.ZodType<DeleteDomainResponseBody$Outbound, z.ZodTypeDef, DeleteDomainResponseBody>;
export declare function deleteDomainResponseBodyToJSON(deleteDomainResponseBody: DeleteDomainResponseBody): string;
export declare function deleteDomainResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteDomainResponseBody, SDKValidationError>;
//# sourceMappingURL=deletedomainop.d.ts.map