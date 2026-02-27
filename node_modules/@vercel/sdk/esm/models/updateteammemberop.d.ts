import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The project role of the member that will be added. \"null\" will remove this project level role.
 */
export declare const UpdateTeamMemberRole: {
    readonly Admin: "ADMIN";
    readonly ProjectViewer: "PROJECT_VIEWER";
    readonly ProjectDeveloper: "PROJECT_DEVELOPER";
};
/**
 * The project role of the member that will be added. \"null\" will remove this project level role.
 */
export type UpdateTeamMemberRole = ClosedEnum<typeof UpdateTeamMemberRole>;
export type UpdateTeamMemberProjects = {
    /**
     * The ID of the project.
     */
    projectId: string;
    /**
     * The project role of the member that will be added. \"null\" will remove this project level role.
     */
    role: UpdateTeamMemberRole | null;
};
export type UpdateTeamMemberJoinedFrom = {
    ssoUserId?: any | null | undefined;
};
export type UpdateTeamMemberRequestBody = {
    /**
     * Accept a user who requested access to the team.
     */
    confirmed?: boolean | undefined;
    /**
     * The role in the team of the member.
     */
    role?: string | undefined;
    projects?: Array<UpdateTeamMemberProjects> | undefined;
    joinedFrom?: UpdateTeamMemberJoinedFrom | undefined;
};
export type UpdateTeamMemberRequest = {
    /**
     * The ID of the member.
     */
    uid: string;
    teamId: string;
    requestBody: UpdateTeamMemberRequestBody;
};
/**
 * Successfully updated the membership.
 */
export type UpdateTeamMemberResponseBody = {
    /**
     * ID of the team.
     */
    id: string;
};
/** @internal */
export declare const UpdateTeamMemberRole$inboundSchema: z.ZodNativeEnum<typeof UpdateTeamMemberRole>;
/** @internal */
export declare const UpdateTeamMemberRole$outboundSchema: z.ZodNativeEnum<typeof UpdateTeamMemberRole>;
/** @internal */
export declare const UpdateTeamMemberProjects$inboundSchema: z.ZodType<UpdateTeamMemberProjects, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateTeamMemberProjects$Outbound = {
    projectId: string;
    role: string | null;
};
/** @internal */
export declare const UpdateTeamMemberProjects$outboundSchema: z.ZodType<UpdateTeamMemberProjects$Outbound, z.ZodTypeDef, UpdateTeamMemberProjects>;
export declare function updateTeamMemberProjectsToJSON(updateTeamMemberProjects: UpdateTeamMemberProjects): string;
export declare function updateTeamMemberProjectsFromJSON(jsonString: string): SafeParseResult<UpdateTeamMemberProjects, SDKValidationError>;
/** @internal */
export declare const UpdateTeamMemberJoinedFrom$inboundSchema: z.ZodType<UpdateTeamMemberJoinedFrom, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateTeamMemberJoinedFrom$Outbound = {
    ssoUserId?: any | null | undefined;
};
/** @internal */
export declare const UpdateTeamMemberJoinedFrom$outboundSchema: z.ZodType<UpdateTeamMemberJoinedFrom$Outbound, z.ZodTypeDef, UpdateTeamMemberJoinedFrom>;
export declare function updateTeamMemberJoinedFromToJSON(updateTeamMemberJoinedFrom: UpdateTeamMemberJoinedFrom): string;
export declare function updateTeamMemberJoinedFromFromJSON(jsonString: string): SafeParseResult<UpdateTeamMemberJoinedFrom, SDKValidationError>;
/** @internal */
export declare const UpdateTeamMemberRequestBody$inboundSchema: z.ZodType<UpdateTeamMemberRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateTeamMemberRequestBody$Outbound = {
    confirmed?: boolean | undefined;
    role: string;
    projects?: Array<UpdateTeamMemberProjects$Outbound> | undefined;
    joinedFrom?: UpdateTeamMemberJoinedFrom$Outbound | undefined;
};
/** @internal */
export declare const UpdateTeamMemberRequestBody$outboundSchema: z.ZodType<UpdateTeamMemberRequestBody$Outbound, z.ZodTypeDef, UpdateTeamMemberRequestBody>;
export declare function updateTeamMemberRequestBodyToJSON(updateTeamMemberRequestBody: UpdateTeamMemberRequestBody): string;
export declare function updateTeamMemberRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateTeamMemberRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateTeamMemberRequest$inboundSchema: z.ZodType<UpdateTeamMemberRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateTeamMemberRequest$Outbound = {
    uid: string;
    teamId: string;
    RequestBody: UpdateTeamMemberRequestBody$Outbound;
};
/** @internal */
export declare const UpdateTeamMemberRequest$outboundSchema: z.ZodType<UpdateTeamMemberRequest$Outbound, z.ZodTypeDef, UpdateTeamMemberRequest>;
export declare function updateTeamMemberRequestToJSON(updateTeamMemberRequest: UpdateTeamMemberRequest): string;
export declare function updateTeamMemberRequestFromJSON(jsonString: string): SafeParseResult<UpdateTeamMemberRequest, SDKValidationError>;
/** @internal */
export declare const UpdateTeamMemberResponseBody$inboundSchema: z.ZodType<UpdateTeamMemberResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateTeamMemberResponseBody$Outbound = {
    id: string;
};
/** @internal */
export declare const UpdateTeamMemberResponseBody$outboundSchema: z.ZodType<UpdateTeamMemberResponseBody$Outbound, z.ZodTypeDef, UpdateTeamMemberResponseBody>;
export declare function updateTeamMemberResponseBodyToJSON(updateTeamMemberResponseBody: UpdateTeamMemberResponseBody): string;
export declare function updateTeamMemberResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateTeamMemberResponseBody, SDKValidationError>;
//# sourceMappingURL=updateteammemberop.d.ts.map