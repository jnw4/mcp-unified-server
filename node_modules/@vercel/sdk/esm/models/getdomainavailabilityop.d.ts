import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetDomainAvailabilityRequest = {
    domain: string;
    teamId?: string | undefined;
};
/**
 * Success
 */
export type GetDomainAvailabilityResponseBody = {
    available: boolean;
};
/** @internal */
export declare const GetDomainAvailabilityRequest$inboundSchema: z.ZodType<GetDomainAvailabilityRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainAvailabilityRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
};
/** @internal */
export declare const GetDomainAvailabilityRequest$outboundSchema: z.ZodType<GetDomainAvailabilityRequest$Outbound, z.ZodTypeDef, GetDomainAvailabilityRequest>;
export declare function getDomainAvailabilityRequestToJSON(getDomainAvailabilityRequest: GetDomainAvailabilityRequest): string;
export declare function getDomainAvailabilityRequestFromJSON(jsonString: string): SafeParseResult<GetDomainAvailabilityRequest, SDKValidationError>;
/** @internal */
export declare const GetDomainAvailabilityResponseBody$inboundSchema: z.ZodType<GetDomainAvailabilityResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainAvailabilityResponseBody$Outbound = {
    available: boolean;
};
/** @internal */
export declare const GetDomainAvailabilityResponseBody$outboundSchema: z.ZodType<GetDomainAvailabilityResponseBody$Outbound, z.ZodTypeDef, GetDomainAvailabilityResponseBody>;
export declare function getDomainAvailabilityResponseBodyToJSON(getDomainAvailabilityResponseBody: GetDomainAvailabilityResponseBody): string;
export declare function getDomainAvailabilityResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDomainAvailabilityResponseBody, SDKValidationError>;
//# sourceMappingURL=getdomainavailabilityop.d.ts.map