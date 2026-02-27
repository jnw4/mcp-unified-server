import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetMemberRequest = {
    integrationConfigurationId: string;
    memberId: string;
};
/**
 * "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles."
 */
export declare const GetMemberRole: {
    readonly Admin: "ADMIN";
    readonly User: "USER";
};
/**
 * "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles."
 */
export type GetMemberRole = ClosedEnum<typeof GetMemberRole>;
export type GetMemberResponseBody = {
    id: string;
    /**
     * "The `ADMIN` role, by default, is provided to users capable of installing integrations, while the `USER` role can be granted to Vercel users with the Vercel `Billing` or Vercel `Viewer` role, which are considered to be Read-Only roles."
     */
    role: GetMemberRole;
    globalUserId?: string | undefined;
    userEmail?: string | undefined;
};
/** @internal */
export declare const GetMemberRequest$inboundSchema: z.ZodType<GetMemberRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetMemberRequest$Outbound = {
    integrationConfigurationId: string;
    memberId: string;
};
/** @internal */
export declare const GetMemberRequest$outboundSchema: z.ZodType<GetMemberRequest$Outbound, z.ZodTypeDef, GetMemberRequest>;
export declare function getMemberRequestToJSON(getMemberRequest: GetMemberRequest): string;
export declare function getMemberRequestFromJSON(jsonString: string): SafeParseResult<GetMemberRequest, SDKValidationError>;
/** @internal */
export declare const GetMemberRole$inboundSchema: z.ZodNativeEnum<typeof GetMemberRole>;
/** @internal */
export declare const GetMemberRole$outboundSchema: z.ZodNativeEnum<typeof GetMemberRole>;
/** @internal */
export declare const GetMemberResponseBody$inboundSchema: z.ZodType<GetMemberResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetMemberResponseBody$Outbound = {
    id: string;
    role: string;
    globalUserId?: string | undefined;
    userEmail?: string | undefined;
};
/** @internal */
export declare const GetMemberResponseBody$outboundSchema: z.ZodType<GetMemberResponseBody$Outbound, z.ZodTypeDef, GetMemberResponseBody>;
export declare function getMemberResponseBodyToJSON(getMemberResponseBody: GetMemberResponseBody): string;
export declare function getMemberResponseBodyFromJSON(jsonString: string): SafeParseResult<GetMemberResponseBody, SDKValidationError>;
//# sourceMappingURL=getmemberop.d.ts.map