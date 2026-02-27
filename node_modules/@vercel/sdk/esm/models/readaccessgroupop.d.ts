import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ReadAccessGroupRequest = {
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const ReadAccessGroupTeamPermissions: {
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
export type ReadAccessGroupTeamPermissions = ClosedEnum<typeof ReadAccessGroupTeamPermissions>;
export declare const ReadAccessGroupEntitlements: {
    readonly V0: "v0";
};
export type ReadAccessGroupEntitlements = ClosedEnum<typeof ReadAccessGroupEntitlements>;
export type ReadAccessGroupResponseBody = {
    teamPermissions?: Array<ReadAccessGroupTeamPermissions> | undefined;
    entitlements?: Array<ReadAccessGroupEntitlements> | undefined;
    isDsyncManaged: boolean;
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
};
/** @internal */
export declare const ReadAccessGroupRequest$inboundSchema: z.ZodType<ReadAccessGroupRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ReadAccessGroupRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ReadAccessGroupRequest$outboundSchema: z.ZodType<ReadAccessGroupRequest$Outbound, z.ZodTypeDef, ReadAccessGroupRequest>;
export declare function readAccessGroupRequestToJSON(readAccessGroupRequest: ReadAccessGroupRequest): string;
export declare function readAccessGroupRequestFromJSON(jsonString: string): SafeParseResult<ReadAccessGroupRequest, SDKValidationError>;
/** @internal */
export declare const ReadAccessGroupTeamPermissions$inboundSchema: z.ZodNativeEnum<typeof ReadAccessGroupTeamPermissions>;
/** @internal */
export declare const ReadAccessGroupTeamPermissions$outboundSchema: z.ZodNativeEnum<typeof ReadAccessGroupTeamPermissions>;
/** @internal */
export declare const ReadAccessGroupEntitlements$inboundSchema: z.ZodNativeEnum<typeof ReadAccessGroupEntitlements>;
/** @internal */
export declare const ReadAccessGroupEntitlements$outboundSchema: z.ZodNativeEnum<typeof ReadAccessGroupEntitlements>;
/** @internal */
export declare const ReadAccessGroupResponseBody$inboundSchema: z.ZodType<ReadAccessGroupResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ReadAccessGroupResponseBody$Outbound = {
    teamPermissions?: Array<string> | undefined;
    entitlements?: Array<string> | undefined;
    isDsyncManaged: boolean;
    name: string;
    createdAt: string;
    teamId: string;
    updatedAt: string;
    accessGroupId: string;
    membersCount: number;
    projectsCount: number;
    teamRoles?: Array<string> | undefined;
};
/** @internal */
export declare const ReadAccessGroupResponseBody$outboundSchema: z.ZodType<ReadAccessGroupResponseBody$Outbound, z.ZodTypeDef, ReadAccessGroupResponseBody>;
export declare function readAccessGroupResponseBodyToJSON(readAccessGroupResponseBody: ReadAccessGroupResponseBody): string;
export declare function readAccessGroupResponseBodyFromJSON(jsonString: string): SafeParseResult<ReadAccessGroupResponseBody, SDKValidationError>;
//# sourceMappingURL=readaccessgroupop.d.ts.map