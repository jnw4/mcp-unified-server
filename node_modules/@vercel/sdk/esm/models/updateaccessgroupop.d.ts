import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The project role that will be added to this Access Group. \"null\" will remove this project level role.
 */
export declare const UpdateAccessGroupRole: {
    readonly Admin: "ADMIN";
    readonly ProjectViewer: "PROJECT_VIEWER";
    readonly ProjectDeveloper: "PROJECT_DEVELOPER";
};
/**
 * The project role that will be added to this Access Group. \"null\" will remove this project level role.
 */
export type UpdateAccessGroupRole = ClosedEnum<typeof UpdateAccessGroupRole>;
export type UpdateAccessGroupProjects = {
    /**
     * The ID of the project.
     */
    projectId: string;
    /**
     * The project role that will be added to this Access Group. \"null\" will remove this project level role.
     */
    role: UpdateAccessGroupRole | null;
};
export type UpdateAccessGroupRequestBody = {
    /**
     * The name of the access group
     */
    name?: string | undefined;
    projects?: Array<UpdateAccessGroupProjects> | undefined;
    /**
     * List of members to add to the access group.
     */
    membersToAdd?: Array<string> | undefined;
    /**
     * List of members to remove from the access group.
     */
    membersToRemove?: Array<string> | undefined;
};
export type UpdateAccessGroupRequest = {
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: UpdateAccessGroupRequestBody;
};
export declare const UpdateAccessGroupEntitlements: {
    readonly V0: "v0";
};
export type UpdateAccessGroupEntitlements = ClosedEnum<typeof UpdateAccessGroupEntitlements>;
export type UpdateAccessGroupResponseBody = {
    entitlements: Array<UpdateAccessGroupEntitlements>;
    /**
     * The name of this access group.
     */
    name: string;
    /**
     * Timestamp in milliseconds when the access group was created.
     */
    createdAt: string;
    /**
     * ID of the team that this access group belongs to.
     */
    teamId: string;
    /**
     * Timestamp in milliseconds when the access group was last updated.
     */
    updatedAt: string;
    /**
     * ID of the access group.
     */
    accessGroupId: string;
    /**
     * Number of members in the access group.
     */
    membersCount: number;
    /**
     * Number of projects in the access group.
     */
    projectsCount: number;
    /**
     * Roles that the team has in the access group.
     */
    teamRoles?: Array<string> | undefined;
    /**
     * Permissions that the team has in the access group.
     */
    teamPermissions?: Array<string> | undefined;
};
/** @internal */
export declare const UpdateAccessGroupRole$inboundSchema: z.ZodNativeEnum<typeof UpdateAccessGroupRole>;
/** @internal */
export declare const UpdateAccessGroupRole$outboundSchema: z.ZodNativeEnum<typeof UpdateAccessGroupRole>;
/** @internal */
export declare const UpdateAccessGroupProjects$inboundSchema: z.ZodType<UpdateAccessGroupProjects, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAccessGroupProjects$Outbound = {
    projectId: string;
    role: string | null;
};
/** @internal */
export declare const UpdateAccessGroupProjects$outboundSchema: z.ZodType<UpdateAccessGroupProjects$Outbound, z.ZodTypeDef, UpdateAccessGroupProjects>;
export declare function updateAccessGroupProjectsToJSON(updateAccessGroupProjects: UpdateAccessGroupProjects): string;
export declare function updateAccessGroupProjectsFromJSON(jsonString: string): SafeParseResult<UpdateAccessGroupProjects, SDKValidationError>;
/** @internal */
export declare const UpdateAccessGroupRequestBody$inboundSchema: z.ZodType<UpdateAccessGroupRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAccessGroupRequestBody$Outbound = {
    name?: string | undefined;
    projects?: Array<UpdateAccessGroupProjects$Outbound> | undefined;
    membersToAdd?: Array<string> | undefined;
    membersToRemove?: Array<string> | undefined;
};
/** @internal */
export declare const UpdateAccessGroupRequestBody$outboundSchema: z.ZodType<UpdateAccessGroupRequestBody$Outbound, z.ZodTypeDef, UpdateAccessGroupRequestBody>;
export declare function updateAccessGroupRequestBodyToJSON(updateAccessGroupRequestBody: UpdateAccessGroupRequestBody): string;
export declare function updateAccessGroupRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateAccessGroupRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateAccessGroupRequest$inboundSchema: z.ZodType<UpdateAccessGroupRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAccessGroupRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: UpdateAccessGroupRequestBody$Outbound;
};
/** @internal */
export declare const UpdateAccessGroupRequest$outboundSchema: z.ZodType<UpdateAccessGroupRequest$Outbound, z.ZodTypeDef, UpdateAccessGroupRequest>;
export declare function updateAccessGroupRequestToJSON(updateAccessGroupRequest: UpdateAccessGroupRequest): string;
export declare function updateAccessGroupRequestFromJSON(jsonString: string): SafeParseResult<UpdateAccessGroupRequest, SDKValidationError>;
/** @internal */
export declare const UpdateAccessGroupEntitlements$inboundSchema: z.ZodNativeEnum<typeof UpdateAccessGroupEntitlements>;
/** @internal */
export declare const UpdateAccessGroupEntitlements$outboundSchema: z.ZodNativeEnum<typeof UpdateAccessGroupEntitlements>;
/** @internal */
export declare const UpdateAccessGroupResponseBody$inboundSchema: z.ZodType<UpdateAccessGroupResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAccessGroupResponseBody$Outbound = {
    entitlements: Array<string>;
    name: string;
    createdAt: string;
    teamId: string;
    updatedAt: string;
    accessGroupId: string;
    membersCount: number;
    projectsCount: number;
    teamRoles?: Array<string> | undefined;
    teamPermissions?: Array<string> | undefined;
};
/** @internal */
export declare const UpdateAccessGroupResponseBody$outboundSchema: z.ZodType<UpdateAccessGroupResponseBody$Outbound, z.ZodTypeDef, UpdateAccessGroupResponseBody>;
export declare function updateAccessGroupResponseBodyToJSON(updateAccessGroupResponseBody: UpdateAccessGroupResponseBody): string;
export declare function updateAccessGroupResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateAccessGroupResponseBody, SDKValidationError>;
//# sourceMappingURL=updateaccessgroupop.d.ts.map