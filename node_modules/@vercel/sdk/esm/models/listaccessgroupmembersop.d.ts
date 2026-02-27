import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListAccessGroupMembersRequest = {
    /**
     * The ID or name of the Access Group.
     */
    idOrName: string;
    /**
     * Limit how many access group members should be returned.
     */
    limit?: number | undefined;
    /**
     * Continuation cursor to retrieve the next page of results.
     */
    next?: string | undefined;
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
export declare const ListAccessGroupMembersTeamRole: {
    readonly Owner: "OWNER";
    readonly Member: "MEMBER";
    readonly Developer: "DEVELOPER";
    readonly Security: "SECURITY";
    readonly Billing: "BILLING";
    readonly Viewer: "VIEWER";
    readonly ViewerForPlus: "VIEWER_FOR_PLUS";
    readonly Contributor: "CONTRIBUTOR";
};
export type ListAccessGroupMembersTeamRole = ClosedEnum<typeof ListAccessGroupMembersTeamRole>;
export type Members = {
    avatar?: string | undefined;
    email: string;
    uid: string;
    username: string;
    name?: string | undefined;
    createdAt?: string | undefined;
    teamRole: ListAccessGroupMembersTeamRole;
};
export type ListAccessGroupMembersPagination = {
    count: number;
    next: string | null;
};
export type ListAccessGroupMembersResponseBody = {
    members: Array<Members>;
    pagination: ListAccessGroupMembersPagination;
};
/** @internal */
export declare const ListAccessGroupMembersRequest$inboundSchema: z.ZodType<ListAccessGroupMembersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAccessGroupMembersRequest$Outbound = {
    idOrName: string;
    limit?: number | undefined;
    next?: string | undefined;
    search?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListAccessGroupMembersRequest$outboundSchema: z.ZodType<ListAccessGroupMembersRequest$Outbound, z.ZodTypeDef, ListAccessGroupMembersRequest>;
export declare function listAccessGroupMembersRequestToJSON(listAccessGroupMembersRequest: ListAccessGroupMembersRequest): string;
export declare function listAccessGroupMembersRequestFromJSON(jsonString: string): SafeParseResult<ListAccessGroupMembersRequest, SDKValidationError>;
/** @internal */
export declare const ListAccessGroupMembersTeamRole$inboundSchema: z.ZodNativeEnum<typeof ListAccessGroupMembersTeamRole>;
/** @internal */
export declare const ListAccessGroupMembersTeamRole$outboundSchema: z.ZodNativeEnum<typeof ListAccessGroupMembersTeamRole>;
/** @internal */
export declare const Members$inboundSchema: z.ZodType<Members, z.ZodTypeDef, unknown>;
/** @internal */
export type Members$Outbound = {
    avatar?: string | undefined;
    email: string;
    uid: string;
    username: string;
    name?: string | undefined;
    createdAt?: string | undefined;
    teamRole: string;
};
/** @internal */
export declare const Members$outboundSchema: z.ZodType<Members$Outbound, z.ZodTypeDef, Members>;
export declare function membersToJSON(members: Members): string;
export declare function membersFromJSON(jsonString: string): SafeParseResult<Members, SDKValidationError>;
/** @internal */
export declare const ListAccessGroupMembersPagination$inboundSchema: z.ZodType<ListAccessGroupMembersPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAccessGroupMembersPagination$Outbound = {
    count: number;
    next: string | null;
};
/** @internal */
export declare const ListAccessGroupMembersPagination$outboundSchema: z.ZodType<ListAccessGroupMembersPagination$Outbound, z.ZodTypeDef, ListAccessGroupMembersPagination>;
export declare function listAccessGroupMembersPaginationToJSON(listAccessGroupMembersPagination: ListAccessGroupMembersPagination): string;
export declare function listAccessGroupMembersPaginationFromJSON(jsonString: string): SafeParseResult<ListAccessGroupMembersPagination, SDKValidationError>;
/** @internal */
export declare const ListAccessGroupMembersResponseBody$inboundSchema: z.ZodType<ListAccessGroupMembersResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAccessGroupMembersResponseBody$Outbound = {
    members: Array<Members$Outbound>;
    pagination: ListAccessGroupMembersPagination$Outbound;
};
/** @internal */
export declare const ListAccessGroupMembersResponseBody$outboundSchema: z.ZodType<ListAccessGroupMembersResponseBody$Outbound, z.ZodTypeDef, ListAccessGroupMembersResponseBody>;
export declare function listAccessGroupMembersResponseBodyToJSON(listAccessGroupMembersResponseBody: ListAccessGroupMembersResponseBody): string;
export declare function listAccessGroupMembersResponseBodyFromJSON(jsonString: string): SafeParseResult<ListAccessGroupMembersResponseBody, SDKValidationError>;
//# sourceMappingURL=listaccessgroupmembersop.d.ts.map