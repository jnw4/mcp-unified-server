import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { BadRequest, BadRequest$Outbound } from "./badrequest.js";
import { HttpApiDecodeError, HttpApiDecodeError$Outbound } from "./httpapidecodeerror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetContactInfoSchemaRequest = {
    domain: string;
    teamId?: string | undefined;
};
/**
 * There was something wrong with the request
 */
export type GetContactInfoSchemaDomainsRegistrarResponseBody = BadRequest | HttpApiDecodeError;
/**
 * Success
 */
export type GetContactInfoSchemaResponseBody = {};
/** @internal */
export declare const GetContactInfoSchemaRequest$inboundSchema: z.ZodType<GetContactInfoSchemaRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetContactInfoSchemaRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
};
/** @internal */
export declare const GetContactInfoSchemaRequest$outboundSchema: z.ZodType<GetContactInfoSchemaRequest$Outbound, z.ZodTypeDef, GetContactInfoSchemaRequest>;
export declare function getContactInfoSchemaRequestToJSON(getContactInfoSchemaRequest: GetContactInfoSchemaRequest): string;
export declare function getContactInfoSchemaRequestFromJSON(jsonString: string): SafeParseResult<GetContactInfoSchemaRequest, SDKValidationError>;
/** @internal */
export declare const GetContactInfoSchemaDomainsRegistrarResponseBody$inboundSchema: z.ZodType<GetContactInfoSchemaDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetContactInfoSchemaDomainsRegistrarResponseBody$Outbound = BadRequest$Outbound | HttpApiDecodeError$Outbound;
/** @internal */
export declare const GetContactInfoSchemaDomainsRegistrarResponseBody$outboundSchema: z.ZodType<GetContactInfoSchemaDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function getContactInfoSchemaDomainsRegistrarResponseBodyToJSON(getContactInfoSchemaDomainsRegistrarResponseBody: GetContactInfoSchemaDomainsRegistrarResponseBody): string;
export declare function getContactInfoSchemaDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<GetContactInfoSchemaDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const GetContactInfoSchemaResponseBody$inboundSchema: z.ZodType<GetContactInfoSchemaResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetContactInfoSchemaResponseBody$Outbound = {};
/** @internal */
export declare const GetContactInfoSchemaResponseBody$outboundSchema: z.ZodType<GetContactInfoSchemaResponseBody$Outbound, z.ZodTypeDef, GetContactInfoSchemaResponseBody>;
export declare function getContactInfoSchemaResponseBodyToJSON(getContactInfoSchemaResponseBody: GetContactInfoSchemaResponseBody): string;
export declare function getContactInfoSchemaResponseBodyFromJSON(jsonString: string): SafeParseResult<GetContactInfoSchemaResponseBody, SDKValidationError>;
//# sourceMappingURL=getcontactinfoschemaop.d.ts.map