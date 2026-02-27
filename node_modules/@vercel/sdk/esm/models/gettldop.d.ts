import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { HttpApiDecodeError, HttpApiDecodeError$Outbound } from "./httpapidecodeerror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { TldNotSupported, TldNotSupported$Outbound } from "./tldnotsupported.js";
export type GetTldRequest = {
    tld: string;
    teamId?: string | undefined;
};
/**
 * There was something wrong with the request
 */
export type GetTldDomainsRegistrarResponseBody = TldNotSupported | HttpApiDecodeError;
/**
 * Success
 */
export type GetTldResponseBody = {
    /**
     * The language codes that are supported for the TLD. The key is the language code, and the value is the name of the language.
     */
    supportedLanguageCodes: {
        [k: string]: string;
    };
};
/** @internal */
export declare const GetTldRequest$inboundSchema: z.ZodType<GetTldRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTldRequest$Outbound = {
    tld: string;
    teamId?: string | undefined;
};
/** @internal */
export declare const GetTldRequest$outboundSchema: z.ZodType<GetTldRequest$Outbound, z.ZodTypeDef, GetTldRequest>;
export declare function getTldRequestToJSON(getTldRequest: GetTldRequest): string;
export declare function getTldRequestFromJSON(jsonString: string): SafeParseResult<GetTldRequest, SDKValidationError>;
/** @internal */
export declare const GetTldDomainsRegistrarResponseBody$inboundSchema: z.ZodType<GetTldDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTldDomainsRegistrarResponseBody$Outbound = TldNotSupported$Outbound | HttpApiDecodeError$Outbound;
/** @internal */
export declare const GetTldDomainsRegistrarResponseBody$outboundSchema: z.ZodType<GetTldDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function getTldDomainsRegistrarResponseBodyToJSON(getTldDomainsRegistrarResponseBody: GetTldDomainsRegistrarResponseBody): string;
export declare function getTldDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<GetTldDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const GetTldResponseBody$inboundSchema: z.ZodType<GetTldResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTldResponseBody$Outbound = {
    supportedLanguageCodes: {
        [k: string]: string;
    };
};
/** @internal */
export declare const GetTldResponseBody$outboundSchema: z.ZodType<GetTldResponseBody$Outbound, z.ZodTypeDef, GetTldResponseBody>;
export declare function getTldResponseBodyToJSON(getTldResponseBody: GetTldResponseBody): string;
export declare function getTldResponseBodyFromJSON(jsonString: string): SafeParseResult<GetTldResponseBody, SDKValidationError>;
//# sourceMappingURL=gettldop.d.ts.map