import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { DomainAlreadyRenewing, DomainAlreadyRenewing$Outbound } from "./domainalreadyrenewing.js";
import { DomainNotRegistered, DomainNotRegistered$Outbound } from "./domainnotregistered.js";
import { DomainNotRenewable, DomainNotRenewable$Outbound } from "./domainnotrenewable.js";
import { Forbidden, Forbidden$Outbound } from "./forbidden.js";
import { HttpApiDecodeError, HttpApiDecodeError$Outbound } from "./httpapidecodeerror.js";
import { NotAuthorizedForScope, NotAuthorizedForScope$Outbound } from "./notauthorizedforscope.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UpdateDomainAutoRenewRequestBody = {
    autoRenew: boolean;
};
export type UpdateDomainAutoRenewRequest = {
    domain: string;
    teamId?: string | undefined;
    requestBody: UpdateDomainAutoRenewRequestBody;
};
/**
 * NotAuthorizedForScope
 */
export type UpdateDomainAutoRenewDomainsRegistrarResponseBody = (NotAuthorizedForScope & {
    code: "not_authorized_for_scope";
}) | Forbidden;
/**
 * There was something wrong with the request
 */
export type UpdateDomainAutoRenewResponseBody = DomainAlreadyRenewing | DomainNotRenewable | DomainNotRegistered | HttpApiDecodeError;
/** @internal */
export declare const UpdateDomainAutoRenewRequestBody$inboundSchema: z.ZodType<UpdateDomainAutoRenewRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDomainAutoRenewRequestBody$Outbound = {
    autoRenew: boolean;
};
/** @internal */
export declare const UpdateDomainAutoRenewRequestBody$outboundSchema: z.ZodType<UpdateDomainAutoRenewRequestBody$Outbound, z.ZodTypeDef, UpdateDomainAutoRenewRequestBody>;
export declare function updateDomainAutoRenewRequestBodyToJSON(updateDomainAutoRenewRequestBody: UpdateDomainAutoRenewRequestBody): string;
export declare function updateDomainAutoRenewRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateDomainAutoRenewRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateDomainAutoRenewRequest$inboundSchema: z.ZodType<UpdateDomainAutoRenewRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDomainAutoRenewRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
    RequestBody: UpdateDomainAutoRenewRequestBody$Outbound;
};
/** @internal */
export declare const UpdateDomainAutoRenewRequest$outboundSchema: z.ZodType<UpdateDomainAutoRenewRequest$Outbound, z.ZodTypeDef, UpdateDomainAutoRenewRequest>;
export declare function updateDomainAutoRenewRequestToJSON(updateDomainAutoRenewRequest: UpdateDomainAutoRenewRequest): string;
export declare function updateDomainAutoRenewRequestFromJSON(jsonString: string): SafeParseResult<UpdateDomainAutoRenewRequest, SDKValidationError>;
/** @internal */
export declare const UpdateDomainAutoRenewDomainsRegistrarResponseBody$inboundSchema: z.ZodType<UpdateDomainAutoRenewDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDomainAutoRenewDomainsRegistrarResponseBody$Outbound = (NotAuthorizedForScope$Outbound & {
    code: "not_authorized_for_scope";
}) | Forbidden$Outbound;
/** @internal */
export declare const UpdateDomainAutoRenewDomainsRegistrarResponseBody$outboundSchema: z.ZodType<UpdateDomainAutoRenewDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function updateDomainAutoRenewDomainsRegistrarResponseBodyToJSON(updateDomainAutoRenewDomainsRegistrarResponseBody: UpdateDomainAutoRenewDomainsRegistrarResponseBody): string;
export declare function updateDomainAutoRenewDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateDomainAutoRenewDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const UpdateDomainAutoRenewResponseBody$inboundSchema: z.ZodType<UpdateDomainAutoRenewResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDomainAutoRenewResponseBody$Outbound = DomainAlreadyRenewing$Outbound | DomainNotRenewable$Outbound | DomainNotRegistered$Outbound | HttpApiDecodeError$Outbound;
/** @internal */
export declare const UpdateDomainAutoRenewResponseBody$outboundSchema: z.ZodType<UpdateDomainAutoRenewResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function updateDomainAutoRenewResponseBodyToJSON(updateDomainAutoRenewResponseBody: UpdateDomainAutoRenewResponseBody): string;
export declare function updateDomainAutoRenewResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateDomainAutoRenewResponseBody, SDKValidationError>;
//# sourceMappingURL=updatedomainautorenewop.d.ts.map