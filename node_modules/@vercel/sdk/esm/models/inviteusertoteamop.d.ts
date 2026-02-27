import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The role of the user to invite
 */
export declare const InviteUserToTeamRole: {
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
 * The role of the user to invite
 */
export type InviteUserToTeamRole = ClosedEnum<typeof InviteUserToTeamRole>;
/**
 * Sets the project roles for the invited user
 */
export declare const InviteUserToTeamTeamsRole: {
    readonly Admin: "ADMIN";
    readonly ProjectViewer: "PROJECT_VIEWER";
    readonly ProjectDeveloper: "PROJECT_DEVELOPER";
    readonly ProjectGuest: "PROJECT_GUEST";
};
/**
 * Sets the project roles for the invited user
 */
export type InviteUserToTeamTeamsRole = ClosedEnum<typeof InviteUserToTeamTeamsRole>;
export type InviteUserToTeamProjects = {
    /**
     * The ID of the project.
     */
    projectId: string;
    /**
     * Sets the project roles for the invited user
     */
    role: InviteUserToTeamTeamsRole;
};
export type InviteUserToTeamRequestBody = {
    /**
     * The email address of the user to invite
     */
    email: string;
    /**
     * The role of the user to invite
     */
    role?: InviteUserToTeamRole | undefined;
    projects?: Array<InviteUserToTeamProjects> | undefined;
};
export type InviteUserToTeamRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId: string;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: Array<InviteUserToTeamRequestBody> | undefined;
};
/** @internal */
export declare const InviteUserToTeamRole$inboundSchema: z.ZodNativeEnum<typeof InviteUserToTeamRole>;
/** @internal */
export declare const InviteUserToTeamRole$outboundSchema: z.ZodNativeEnum<typeof InviteUserToTeamRole>;
/** @internal */
export declare const InviteUserToTeamTeamsRole$inboundSchema: z.ZodNativeEnum<typeof InviteUserToTeamTeamsRole>;
/** @internal */
export declare const InviteUserToTeamTeamsRole$outboundSchema: z.ZodNativeEnum<typeof InviteUserToTeamTeamsRole>;
/** @internal */
export declare const InviteUserToTeamProjects$inboundSchema: z.ZodType<InviteUserToTeamProjects, z.ZodTypeDef, unknown>;
/** @internal */
export type InviteUserToTeamProjects$Outbound = {
    projectId: string;
    role: string;
};
/** @internal */
export declare const InviteUserToTeamProjects$outboundSchema: z.ZodType<InviteUserToTeamProjects$Outbound, z.ZodTypeDef, InviteUserToTeamProjects>;
export declare function inviteUserToTeamProjectsToJSON(inviteUserToTeamProjects: InviteUserToTeamProjects): string;
export declare function inviteUserToTeamProjectsFromJSON(jsonString: string): SafeParseResult<InviteUserToTeamProjects, SDKValidationError>;
/** @internal */
export declare const InviteUserToTeamRequestBody$inboundSchema: z.ZodType<InviteUserToTeamRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type InviteUserToTeamRequestBody$Outbound = {
    email: string;
    role: string;
    projects?: Array<InviteUserToTeamProjects$Outbound> | undefined;
};
/** @internal */
export declare const InviteUserToTeamRequestBody$outboundSchema: z.ZodType<InviteUserToTeamRequestBody$Outbound, z.ZodTypeDef, InviteUserToTeamRequestBody>;
export declare function inviteUserToTeamRequestBodyToJSON(inviteUserToTeamRequestBody: InviteUserToTeamRequestBody): string;
export declare function inviteUserToTeamRequestBodyFromJSON(jsonString: string): SafeParseResult<InviteUserToTeamRequestBody, SDKValidationError>;
/** @internal */
export declare const InviteUserToTeamRequest$inboundSchema: z.ZodType<InviteUserToTeamRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type InviteUserToTeamRequest$Outbound = {
    teamId: string;
    slug?: string | undefined;
    RequestBody?: Array<InviteUserToTeamRequestBody$Outbound> | undefined;
};
/** @internal */
export declare const InviteUserToTeamRequest$outboundSchema: z.ZodType<InviteUserToTeamRequest$Outbound, z.ZodTypeDef, InviteUserToTeamRequest>;
export declare function inviteUserToTeamRequestToJSON(inviteUserToTeamRequest: InviteUserToTeamRequest): string;
export declare function inviteUserToTeamRequestFromJSON(jsonString: string): SafeParseResult<InviteUserToTeamRequest, SDKValidationError>;
//# sourceMappingURL=inviteusertoteamop.d.ts.map