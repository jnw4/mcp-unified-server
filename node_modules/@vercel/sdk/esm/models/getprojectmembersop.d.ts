import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetProjectMembersRequest = {
    /**
     * The ID or name of the Project.
     */
    idOrName: string;
    /**
     * Limit how many project members should be returned
     */
    limit?: number | undefined;
    /**
     * Timestamp in milliseconds to only include members added since then.
     */
    since?: number | undefined;
    /**
     * Timestamp in milliseconds to only include members added until then.
     */
    until?: number | undefined;
    /**
     * Search project members by their name, username, and email.
     */
    search?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/**
 * Role of this user in the project.
 */
export declare const ResponseBodyRole: {
    readonly Admin: "ADMIN";
    readonly ProjectDeveloper: "PROJECT_DEVELOPER";
    readonly ProjectViewer: "PROJECT_VIEWER";
    readonly ProjectGuest: "PROJECT_GUEST";
};
/**
 * Role of this user in the project.
 */
export type ResponseBodyRole = ClosedEnum<typeof ResponseBodyRole>;
/**
 * Role of this user in the project.
 */
export declare const ComputedProjectRole: {
    readonly Admin: "ADMIN";
    readonly ProjectDeveloper: "PROJECT_DEVELOPER";
    readonly ProjectViewer: "PROJECT_VIEWER";
    readonly ProjectGuest: "PROJECT_GUEST";
};
/**
 * Role of this user in the project.
 */
export type ComputedProjectRole = ClosedEnum<typeof ComputedProjectRole>;
/**
 * The role of this user in the team.
 */
export declare const ResponseBodyTeamRole: {
    readonly Owner: "OWNER";
    readonly Member: "MEMBER";
    readonly Developer: "DEVELOPER";
    readonly Security: "SECURITY";
    readonly Billing: "BILLING";
    readonly Viewer: "VIEWER";
    readonly ViewerForPlus: "VIEWER_FOR_PLUS";
    readonly Contributor: "CONTRIBUTOR";
};
/**
 * The role of this user in the team.
 */
export type ResponseBodyTeamRole = ClosedEnum<typeof ResponseBodyTeamRole>;
export type ResponseBodyMembers = {
    /**
     * ID of the file for the Avatar of this member.
     */
    avatar?: string | undefined;
    /**
     * The email of this member.
     */
    email: string;
    /**
     * Role of this user in the project.
     */
    role: ResponseBodyRole;
    /**
     * Role of this user in the project.
     */
    computedProjectRole: ComputedProjectRole;
    /**
     * The ID of this user.
     */
    uid: string;
    /**
     * The unique username of this user.
     */
    username: string;
    /**
     * The name of this user.
     */
    name?: string | undefined;
    /**
     * Timestamp in milliseconds when this member was added.
     */
    createdAt: number;
    /**
     * The role of this user in the team.
     */
    teamRole: ResponseBodyTeamRole;
};
export type GetProjectMembersResponseBodyPagination = {
    hasNext: boolean;
    /**
     * Amount of items in the current page.
     */
    count: number;
    /**
     * Timestamp that must be used to request the next page.
     */
    next: number | null;
    /**
     * Timestamp that must be used to request the previous page.
     */
    prev: number | null;
};
/**
 * Paginated list of members for the project.
 */
export type GetProjectMembersResponseBody2 = {
    members: Array<ResponseBodyMembers>;
    pagination: GetProjectMembersResponseBodyPagination;
};
export type GetProjectMembersResponseBody1 = {};
/**
 * Paginated list of members for the project.
 */
export type GetProjectMembersResponseBody = GetProjectMembersResponseBody2 | GetProjectMembersResponseBody1;
/** @internal */
export declare const GetProjectMembersRequest$inboundSchema: z.ZodType<GetProjectMembersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectMembersRequest$Outbound = {
    idOrName: string;
    limit?: number | undefined;
    since?: number | undefined;
    until?: number | undefined;
    search?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetProjectMembersRequest$outboundSchema: z.ZodType<GetProjectMembersRequest$Outbound, z.ZodTypeDef, GetProjectMembersRequest>;
export declare function getProjectMembersRequestToJSON(getProjectMembersRequest: GetProjectMembersRequest): string;
export declare function getProjectMembersRequestFromJSON(jsonString: string): SafeParseResult<GetProjectMembersRequest, SDKValidationError>;
/** @internal */
export declare const ResponseBodyRole$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyRole>;
/** @internal */
export declare const ResponseBodyRole$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyRole>;
/** @internal */
export declare const ComputedProjectRole$inboundSchema: z.ZodNativeEnum<typeof ComputedProjectRole>;
/** @internal */
export declare const ComputedProjectRole$outboundSchema: z.ZodNativeEnum<typeof ComputedProjectRole>;
/** @internal */
export declare const ResponseBodyTeamRole$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyTeamRole>;
/** @internal */
export declare const ResponseBodyTeamRole$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyTeamRole>;
/** @internal */
export declare const ResponseBodyMembers$inboundSchema: z.ZodType<ResponseBodyMembers, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyMembers$Outbound = {
    avatar?: string | undefined;
    email: string;
    role: string;
    computedProjectRole: string;
    uid: string;
    username: string;
    name?: string | undefined;
    createdAt: number;
    teamRole: string;
};
/** @internal */
export declare const ResponseBodyMembers$outboundSchema: z.ZodType<ResponseBodyMembers$Outbound, z.ZodTypeDef, ResponseBodyMembers>;
export declare function responseBodyMembersToJSON(responseBodyMembers: ResponseBodyMembers): string;
export declare function responseBodyMembersFromJSON(jsonString: string): SafeParseResult<ResponseBodyMembers, SDKValidationError>;
/** @internal */
export declare const GetProjectMembersResponseBodyPagination$inboundSchema: z.ZodType<GetProjectMembersResponseBodyPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectMembersResponseBodyPagination$Outbound = {
    hasNext: boolean;
    count: number;
    next: number | null;
    prev: number | null;
};
/** @internal */
export declare const GetProjectMembersResponseBodyPagination$outboundSchema: z.ZodType<GetProjectMembersResponseBodyPagination$Outbound, z.ZodTypeDef, GetProjectMembersResponseBodyPagination>;
export declare function getProjectMembersResponseBodyPaginationToJSON(getProjectMembersResponseBodyPagination: GetProjectMembersResponseBodyPagination): string;
export declare function getProjectMembersResponseBodyPaginationFromJSON(jsonString: string): SafeParseResult<GetProjectMembersResponseBodyPagination, SDKValidationError>;
/** @internal */
export declare const GetProjectMembersResponseBody2$inboundSchema: z.ZodType<GetProjectMembersResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectMembersResponseBody2$Outbound = {
    members: Array<ResponseBodyMembers$Outbound>;
    pagination: GetProjectMembersResponseBodyPagination$Outbound;
};
/** @internal */
export declare const GetProjectMembersResponseBody2$outboundSchema: z.ZodType<GetProjectMembersResponseBody2$Outbound, z.ZodTypeDef, GetProjectMembersResponseBody2>;
export declare function getProjectMembersResponseBody2ToJSON(getProjectMembersResponseBody2: GetProjectMembersResponseBody2): string;
export declare function getProjectMembersResponseBody2FromJSON(jsonString: string): SafeParseResult<GetProjectMembersResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetProjectMembersResponseBody1$inboundSchema: z.ZodType<GetProjectMembersResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectMembersResponseBody1$Outbound = {};
/** @internal */
export declare const GetProjectMembersResponseBody1$outboundSchema: z.ZodType<GetProjectMembersResponseBody1$Outbound, z.ZodTypeDef, GetProjectMembersResponseBody1>;
export declare function getProjectMembersResponseBody1ToJSON(getProjectMembersResponseBody1: GetProjectMembersResponseBody1): string;
export declare function getProjectMembersResponseBody1FromJSON(jsonString: string): SafeParseResult<GetProjectMembersResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetProjectMembersResponseBody$inboundSchema: z.ZodType<GetProjectMembersResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectMembersResponseBody$Outbound = GetProjectMembersResponseBody2$Outbound | GetProjectMembersResponseBody1$Outbound;
/** @internal */
export declare const GetProjectMembersResponseBody$outboundSchema: z.ZodType<GetProjectMembersResponseBody$Outbound, z.ZodTypeDef, GetProjectMembersResponseBody>;
export declare function getProjectMembersResponseBodyToJSON(getProjectMembersResponseBody: GetProjectMembersResponseBody): string;
export declare function getProjectMembersResponseBodyFromJSON(jsonString: string): SafeParseResult<GetProjectMembersResponseBody, SDKValidationError>;
//# sourceMappingURL=getprojectmembersop.d.ts.map