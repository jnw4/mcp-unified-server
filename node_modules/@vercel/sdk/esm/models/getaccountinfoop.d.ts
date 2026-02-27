import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetAccountInfoRequest = {
    integrationConfigurationId: string;
};
/**
 * The best contact for the integration, which can change as team members and their roles change.
 */
export type Contact = {
    email: string;
    name?: string | undefined;
};
export type GetAccountInfoResponseBody = {
    /**
     * The name of the team the installation is tied to.
     */
    name?: string | undefined;
    /**
     * A URL linking to the installation in the Vercel Dashboard.
     */
    url: string;
    /**
     * The best contact for the integration, which can change as team members and their roles change.
     */
    contact: Contact | null;
};
/** @internal */
export declare const GetAccountInfoRequest$inboundSchema: z.ZodType<GetAccountInfoRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAccountInfoRequest$Outbound = {
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetAccountInfoRequest$outboundSchema: z.ZodType<GetAccountInfoRequest$Outbound, z.ZodTypeDef, GetAccountInfoRequest>;
export declare function getAccountInfoRequestToJSON(getAccountInfoRequest: GetAccountInfoRequest): string;
export declare function getAccountInfoRequestFromJSON(jsonString: string): SafeParseResult<GetAccountInfoRequest, SDKValidationError>;
/** @internal */
export declare const Contact$inboundSchema: z.ZodType<Contact, z.ZodTypeDef, unknown>;
/** @internal */
export type Contact$Outbound = {
    email: string;
    name?: string | undefined;
};
/** @internal */
export declare const Contact$outboundSchema: z.ZodType<Contact$Outbound, z.ZodTypeDef, Contact>;
export declare function contactToJSON(contact: Contact): string;
export declare function contactFromJSON(jsonString: string): SafeParseResult<Contact, SDKValidationError>;
/** @internal */
export declare const GetAccountInfoResponseBody$inboundSchema: z.ZodType<GetAccountInfoResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAccountInfoResponseBody$Outbound = {
    name?: string | undefined;
    url: string;
    contact: Contact$Outbound | null;
};
/** @internal */
export declare const GetAccountInfoResponseBody$outboundSchema: z.ZodType<GetAccountInfoResponseBody$Outbound, z.ZodTypeDef, GetAccountInfoResponseBody>;
export declare function getAccountInfoResponseBodyToJSON(getAccountInfoResponseBody: GetAccountInfoResponseBody): string;
export declare function getAccountInfoResponseBodyFromJSON(jsonString: string): SafeParseResult<GetAccountInfoResponseBody, SDKValidationError>;
//# sourceMappingURL=getaccountinfoop.d.ts.map