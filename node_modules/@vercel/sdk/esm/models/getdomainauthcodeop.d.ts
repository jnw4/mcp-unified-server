import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { DomainNotRegistered, DomainNotRegistered$Outbound } from "./domainnotregistered.js";
import { Forbidden, Forbidden$Outbound } from "./forbidden.js";
import { HttpApiDecodeError, HttpApiDecodeError$Outbound } from "./httpapidecodeerror.js";
import { NotAuthorizedForScope, NotAuthorizedForScope$Outbound } from "./notauthorizedforscope.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetDomainAuthCodeRequest = {
    domain: string;
    teamId?: string | undefined;
};
/**
 * NotAuthorizedForScope
 */
export type GetDomainAuthCodeDomainsRegistrarResponseResponseBody = (NotAuthorizedForScope & {
    code: "not_authorized_for_scope";
}) | Forbidden;
/**
 * There was something wrong with the request
 */
export type GetDomainAuthCodeDomainsRegistrarResponseBody = DomainNotRegistered | HttpApiDecodeError;
/**
 * Success
 */
export type GetDomainAuthCodeResponseBody = {
    authCode: string;
};
/** @internal */
export declare const GetDomainAuthCodeRequest$inboundSchema: z.ZodType<GetDomainAuthCodeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainAuthCodeRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
};
/** @internal */
export declare const GetDomainAuthCodeRequest$outboundSchema: z.ZodType<GetDomainAuthCodeRequest$Outbound, z.ZodTypeDef, GetDomainAuthCodeRequest>;
export declare function getDomainAuthCodeRequestToJSON(getDomainAuthCodeRequest: GetDomainAuthCodeRequest): string;
export declare function getDomainAuthCodeRequestFromJSON(jsonString: string): SafeParseResult<GetDomainAuthCodeRequest, SDKValidationError>;
/** @internal */
export declare const GetDomainAuthCodeDomainsRegistrarResponseResponseBody$inboundSchema: z.ZodType<GetDomainAuthCodeDomainsRegistrarResponseResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainAuthCodeDomainsRegistrarResponseResponseBody$Outbound = (NotAuthorizedForScope$Outbound & {
    code: "not_authorized_for_scope";
}) | Forbidden$Outbound;
/** @internal */
export declare const GetDomainAuthCodeDomainsRegistrarResponseResponseBody$outboundSchema: z.ZodType<GetDomainAuthCodeDomainsRegistrarResponseResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function getDomainAuthCodeDomainsRegistrarResponseResponseBodyToJSON(getDomainAuthCodeDomainsRegistrarResponseResponseBody: GetDomainAuthCodeDomainsRegistrarResponseResponseBody): string;
export declare function getDomainAuthCodeDomainsRegistrarResponseResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDomainAuthCodeDomainsRegistrarResponseResponseBody, SDKValidationError>;
/** @internal */
export declare const GetDomainAuthCodeDomainsRegistrarResponseBody$inboundSchema: z.ZodType<GetDomainAuthCodeDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainAuthCodeDomainsRegistrarResponseBody$Outbound = DomainNotRegistered$Outbound | HttpApiDecodeError$Outbound;
/** @internal */
export declare const GetDomainAuthCodeDomainsRegistrarResponseBody$outboundSchema: z.ZodType<GetDomainAuthCodeDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function getDomainAuthCodeDomainsRegistrarResponseBodyToJSON(getDomainAuthCodeDomainsRegistrarResponseBody: GetDomainAuthCodeDomainsRegistrarResponseBody): string;
export declare function getDomainAuthCodeDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDomainAuthCodeDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const GetDomainAuthCodeResponseBody$inboundSchema: z.ZodType<GetDomainAuthCodeResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainAuthCodeResponseBody$Outbound = {
    authCode: string;
};
/** @internal */
export declare const GetDomainAuthCodeResponseBody$outboundSchema: z.ZodType<GetDomainAuthCodeResponseBody$Outbound, z.ZodTypeDef, GetDomainAuthCodeResponseBody>;
export declare function getDomainAuthCodeResponseBodyToJSON(getDomainAuthCodeResponseBody: GetDomainAuthCodeResponseBody): string;
export declare function getDomainAuthCodeResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDomainAuthCodeResponseBody, SDKValidationError>;
//# sourceMappingURL=getdomainauthcodeop.d.ts.map