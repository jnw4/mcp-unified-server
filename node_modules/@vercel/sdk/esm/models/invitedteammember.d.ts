import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The role used for the invitation
 */
export declare const Role: {
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
 * The role used for the invitation
 */
export type Role = ClosedEnum<typeof Role>;
/**
 * The team roles of the user
 */
export declare const TeamRoles: {
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
 * The team roles of the user
 */
export type TeamRoles = ClosedEnum<typeof TeamRoles>;
/**
 * The team permissions of the user
 */
export declare const TeamPermissions: {
    readonly IntegrationManager: "IntegrationManager";
    readonly CreateProject: "CreateProject";
    readonly FullProductionDeployment: "FullProductionDeployment";
    readonly UsageViewer: "UsageViewer";
    readonly EnvVariableManager: "EnvVariableManager";
    readonly EnvironmentManager: "EnvironmentManager";
    readonly V0Builder: "V0Builder";
    readonly V0Chatter: "V0Chatter";
    readonly V0Viewer: "V0Viewer";
};
/**
 * The team permissions of the user
 */
export type TeamPermissions = ClosedEnum<typeof TeamPermissions>;
/**
 * The member was successfully added to the team.
 */
export type InvitedTeamMember = {
    /**
     * The ID of the invited user
     */
    uid: string;
    /**
     * The username of the invited user
     */
    username: string;
    /**
     * The email of the invited user.
     */
    email: string;
    /**
     * The role used for the invitation
     */
    role: Role;
    /**
     * The team roles of the user
     */
    teamRoles?: Array<TeamRoles> | undefined;
    /**
     * The team permissions of the user
     */
    teamPermissions?: Array<TeamPermissions> | undefined;
};
/** @internal */
export declare const Role$inboundSchema: z.ZodNativeEnum<typeof Role>;
/** @internal */
export declare const Role$outboundSchema: z.ZodNativeEnum<typeof Role>;
/** @internal */
export declare const TeamRoles$inboundSchema: z.ZodNativeEnum<typeof TeamRoles>;
/** @internal */
export declare const TeamRoles$outboundSchema: z.ZodNativeEnum<typeof TeamRoles>;
/** @internal */
export declare const TeamPermissions$inboundSchema: z.ZodNativeEnum<typeof TeamPermissions>;
/** @internal */
export declare const TeamPermissions$outboundSchema: z.ZodNativeEnum<typeof TeamPermissions>;
/** @internal */
export declare const InvitedTeamMember$inboundSchema: z.ZodType<InvitedTeamMember, z.ZodTypeDef, unknown>;
/** @internal */
export type InvitedTeamMember$Outbound = {
    uid: string;
    username: string;
    email: string;
    role: string;
    teamRoles?: Array<string> | undefined;
    teamPermissions?: Array<string> | undefined;
};
/** @internal */
export declare const InvitedTeamMember$outboundSchema: z.ZodType<InvitedTeamMember$Outbound, z.ZodTypeDef, InvitedTeamMember>;
export declare function invitedTeamMemberToJSON(invitedTeamMember: InvitedTeamMember): string;
export declare function invitedTeamMemberFromJSON(jsonString: string): SafeParseResult<InvitedTeamMember, SDKValidationError>;
//# sourceMappingURL=invitedteammember.d.ts.map