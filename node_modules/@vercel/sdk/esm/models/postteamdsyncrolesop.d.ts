import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type PostTeamDsyncRolesRoles2 = {
    accessGroupId: string;
};
export declare const PostTeamDsyncRolesRoles1: {
    readonly Owner: "OWNER";
    readonly Member: "MEMBER";
    readonly Developer: "DEVELOPER";
    readonly Security: "SECURITY";
    readonly Billing: "BILLING";
    readonly Viewer: "VIEWER";
    readonly ViewerForPlus: "VIEWER_FOR_PLUS";
    readonly Contributor: "CONTRIBUTOR";
};
export type PostTeamDsyncRolesRoles1 = ClosedEnum<typeof PostTeamDsyncRolesRoles1>;
export type PostTeamDsyncRolesRoles = PostTeamDsyncRolesRoles2 | PostTeamDsyncRolesRoles1;
export type PostTeamDsyncRolesRequestBody = {
    /**
     * Directory groups to role or access group mappings.
     */
    roles: {
        [k: string]: PostTeamDsyncRolesRoles2 | PostTeamDsyncRolesRoles1;
    };
};
export type PostTeamDsyncRolesRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId: string;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: PostTeamDsyncRolesRequestBody | undefined;
};
export type PostTeamDsyncRolesResponseBody = {
    ok: boolean;
};
/** @internal */
export declare const PostTeamDsyncRolesRoles2$inboundSchema: z.ZodType<PostTeamDsyncRolesRoles2, z.ZodTypeDef, unknown>;
/** @internal */
export type PostTeamDsyncRolesRoles2$Outbound = {
    accessGroupId: string;
};
/** @internal */
export declare const PostTeamDsyncRolesRoles2$outboundSchema: z.ZodType<PostTeamDsyncRolesRoles2$Outbound, z.ZodTypeDef, PostTeamDsyncRolesRoles2>;
export declare function postTeamDsyncRolesRoles2ToJSON(postTeamDsyncRolesRoles2: PostTeamDsyncRolesRoles2): string;
export declare function postTeamDsyncRolesRoles2FromJSON(jsonString: string): SafeParseResult<PostTeamDsyncRolesRoles2, SDKValidationError>;
/** @internal */
export declare const PostTeamDsyncRolesRoles1$inboundSchema: z.ZodNativeEnum<typeof PostTeamDsyncRolesRoles1>;
/** @internal */
export declare const PostTeamDsyncRolesRoles1$outboundSchema: z.ZodNativeEnum<typeof PostTeamDsyncRolesRoles1>;
/** @internal */
export declare const PostTeamDsyncRolesRoles$inboundSchema: z.ZodType<PostTeamDsyncRolesRoles, z.ZodTypeDef, unknown>;
/** @internal */
export type PostTeamDsyncRolesRoles$Outbound = PostTeamDsyncRolesRoles2$Outbound | string;
/** @internal */
export declare const PostTeamDsyncRolesRoles$outboundSchema: z.ZodType<PostTeamDsyncRolesRoles$Outbound, z.ZodTypeDef, PostTeamDsyncRolesRoles>;
export declare function postTeamDsyncRolesRolesToJSON(postTeamDsyncRolesRoles: PostTeamDsyncRolesRoles): string;
export declare function postTeamDsyncRolesRolesFromJSON(jsonString: string): SafeParseResult<PostTeamDsyncRolesRoles, SDKValidationError>;
/** @internal */
export declare const PostTeamDsyncRolesRequestBody$inboundSchema: z.ZodType<PostTeamDsyncRolesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostTeamDsyncRolesRequestBody$Outbound = {
    roles: {
        [k: string]: PostTeamDsyncRolesRoles2$Outbound | string;
    };
};
/** @internal */
export declare const PostTeamDsyncRolesRequestBody$outboundSchema: z.ZodType<PostTeamDsyncRolesRequestBody$Outbound, z.ZodTypeDef, PostTeamDsyncRolesRequestBody>;
export declare function postTeamDsyncRolesRequestBodyToJSON(postTeamDsyncRolesRequestBody: PostTeamDsyncRolesRequestBody): string;
export declare function postTeamDsyncRolesRequestBodyFromJSON(jsonString: string): SafeParseResult<PostTeamDsyncRolesRequestBody, SDKValidationError>;
/** @internal */
export declare const PostTeamDsyncRolesRequest$inboundSchema: z.ZodType<PostTeamDsyncRolesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostTeamDsyncRolesRequest$Outbound = {
    teamId: string;
    slug?: string | undefined;
    RequestBody?: PostTeamDsyncRolesRequestBody$Outbound | undefined;
};
/** @internal */
export declare const PostTeamDsyncRolesRequest$outboundSchema: z.ZodType<PostTeamDsyncRolesRequest$Outbound, z.ZodTypeDef, PostTeamDsyncRolesRequest>;
export declare function postTeamDsyncRolesRequestToJSON(postTeamDsyncRolesRequest: PostTeamDsyncRolesRequest): string;
export declare function postTeamDsyncRolesRequestFromJSON(jsonString: string): SafeParseResult<PostTeamDsyncRolesRequest, SDKValidationError>;
/** @internal */
export declare const PostTeamDsyncRolesResponseBody$inboundSchema: z.ZodType<PostTeamDsyncRolesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostTeamDsyncRolesResponseBody$Outbound = {
    ok: boolean;
};
/** @internal */
export declare const PostTeamDsyncRolesResponseBody$outboundSchema: z.ZodType<PostTeamDsyncRolesResponseBody$Outbound, z.ZodTypeDef, PostTeamDsyncRolesResponseBody>;
export declare function postTeamDsyncRolesResponseBodyToJSON(postTeamDsyncRolesResponseBody: PostTeamDsyncRolesResponseBody): string;
export declare function postTeamDsyncRolesResponseBodyFromJSON(jsonString: string): SafeParseResult<PostTeamDsyncRolesResponseBody, SDKValidationError>;
//# sourceMappingURL=postteamdsyncrolesop.d.ts.map