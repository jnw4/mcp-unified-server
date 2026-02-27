import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { AuthUser, AuthUser$Outbound } from "./authuser.js";
import { AuthUserLimited, AuthUserLimited$Outbound } from "./authuserlimited.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetAuthUserUser = AuthUser | AuthUserLimited;
/**
 * Successful response.
 */
export type GetAuthUserResponseBody = {
    user: AuthUser | AuthUserLimited;
};
/** @internal */
export declare const GetAuthUserUser$inboundSchema: z.ZodType<GetAuthUserUser, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAuthUserUser$Outbound = AuthUser$Outbound | AuthUserLimited$Outbound;
/** @internal */
export declare const GetAuthUserUser$outboundSchema: z.ZodType<GetAuthUserUser$Outbound, z.ZodTypeDef, GetAuthUserUser>;
export declare function getAuthUserUserToJSON(getAuthUserUser: GetAuthUserUser): string;
export declare function getAuthUserUserFromJSON(jsonString: string): SafeParseResult<GetAuthUserUser, SDKValidationError>;
/** @internal */
export declare const GetAuthUserResponseBody$inboundSchema: z.ZodType<GetAuthUserResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAuthUserResponseBody$Outbound = {
    user: AuthUser$Outbound | AuthUserLimited$Outbound;
};
/** @internal */
export declare const GetAuthUserResponseBody$outboundSchema: z.ZodType<GetAuthUserResponseBody$Outbound, z.ZodTypeDef, GetAuthUserResponseBody>;
export declare function getAuthUserResponseBodyToJSON(getAuthUserResponseBody: GetAuthUserResponseBody): string;
export declare function getAuthUserResponseBodyFromJSON(jsonString: string): SafeParseResult<GetAuthUserResponseBody, SDKValidationError>;
//# sourceMappingURL=getauthuserop.d.ts.map