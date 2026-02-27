import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { DomainNotRegistered, DomainNotRegistered$Outbound } from "./domainnotregistered.js";
import { Forbidden, Forbidden$Outbound } from "./forbidden.js";
import { HttpApiDecodeError, HttpApiDecodeError$Outbound } from "./httpapidecodeerror.js";
import { NotAuthorizedForScope, NotAuthorizedForScope$Outbound } from "./notauthorizedforscope.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UpdateDomainNameserversRequestBody = {
    nameservers: Array<string>;
};
export type UpdateDomainNameserversRequest = {
    domain: string;
    teamId?: string | undefined;
    requestBody: UpdateDomainNameserversRequestBody;
};
/**
 * NotAuthorizedForScope
 */
export type UpdateDomainNameserversDomainsRegistrarResponseBody = (NotAuthorizedForScope & {
    code: "not_authorized_for_scope";
}) | Forbidden;
/**
 * There was something wrong with the request
 */
export type UpdateDomainNameserversResponseBody = DomainNotRegistered | HttpApiDecodeError;
/** @internal */
export declare const UpdateDomainNameserversRequestBody$inboundSchema: z.ZodType<UpdateDomainNameserversRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDomainNameserversRequestBody$Outbound = {
    nameservers: Array<string>;
};
/** @internal */
export declare const UpdateDomainNameserversRequestBody$outboundSchema: z.ZodType<UpdateDomainNameserversRequestBody$Outbound, z.ZodTypeDef, UpdateDomainNameserversRequestBody>;
export declare function updateDomainNameserversRequestBodyToJSON(updateDomainNameserversRequestBody: UpdateDomainNameserversRequestBody): string;
export declare function updateDomainNameserversRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateDomainNameserversRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateDomainNameserversRequest$inboundSchema: z.ZodType<UpdateDomainNameserversRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDomainNameserversRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
    RequestBody: UpdateDomainNameserversRequestBody$Outbound;
};
/** @internal */
export declare const UpdateDomainNameserversRequest$outboundSchema: z.ZodType<UpdateDomainNameserversRequest$Outbound, z.ZodTypeDef, UpdateDomainNameserversRequest>;
export declare function updateDomainNameserversRequestToJSON(updateDomainNameserversRequest: UpdateDomainNameserversRequest): string;
export declare function updateDomainNameserversRequestFromJSON(jsonString: string): SafeParseResult<UpdateDomainNameserversRequest, SDKValidationError>;
/** @internal */
export declare const UpdateDomainNameserversDomainsRegistrarResponseBody$inboundSchema: z.ZodType<UpdateDomainNameserversDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDomainNameserversDomainsRegistrarResponseBody$Outbound = (NotAuthorizedForScope$Outbound & {
    code: "not_authorized_for_scope";
}) | Forbidden$Outbound;
/** @internal */
export declare const UpdateDomainNameserversDomainsRegistrarResponseBody$outboundSchema: z.ZodType<UpdateDomainNameserversDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function updateDomainNameserversDomainsRegistrarResponseBodyToJSON(updateDomainNameserversDomainsRegistrarResponseBody: UpdateDomainNameserversDomainsRegistrarResponseBody): string;
export declare function updateDomainNameserversDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateDomainNameserversDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const UpdateDomainNameserversResponseBody$inboundSchema: z.ZodType<UpdateDomainNameserversResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDomainNameserversResponseBody$Outbound = DomainNotRegistered$Outbound | HttpApiDecodeError$Outbound;
/** @internal */
export declare const UpdateDomainNameserversResponseBody$outboundSchema: z.ZodType<UpdateDomainNameserversResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function updateDomainNameserversResponseBodyToJSON(updateDomainNameserversResponseBody: UpdateDomainNameserversResponseBody): string;
export declare function updateDomainNameserversResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateDomainNameserversResponseBody, SDKValidationError>;
//# sourceMappingURL=updatedomainnameserversop.d.ts.map