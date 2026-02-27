import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListAccessGroupProjectsRequest = {
    /**
     * The ID or name of the Access Group.
     */
    idOrName: string;
    /**
     * Limit how many access group projects should be returned.
     */
    limit?: number | undefined;
    /**
     * Continuation cursor to retrieve the next page of results.
     */
    next?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const ListAccessGroupProjectsRole: {
    readonly Admin: "ADMIN";
    readonly ProjectDeveloper: "PROJECT_DEVELOPER";
    readonly ProjectViewer: "PROJECT_VIEWER";
    readonly ProjectGuest: "PROJECT_GUEST";
};
export type ListAccessGroupProjectsRole = ClosedEnum<typeof ListAccessGroupProjectsRole>;
export type ListAccessGroupProjectsProject = {
    name?: string | undefined;
    framework?: string | null | undefined;
    latestDeploymentId?: string | undefined;
};
export type ListAccessGroupProjectsProjects = {
    projectId: string;
    role: ListAccessGroupProjectsRole;
    createdAt: string;
    updatedAt: string;
    project: ListAccessGroupProjectsProject;
};
export type ListAccessGroupProjectsPagination = {
    count: number;
    next: string | null;
};
export type ListAccessGroupProjectsResponseBody = {
    projects: Array<ListAccessGroupProjectsProjects>;
    pagination: ListAccessGroupProjectsPagination;
};
/** @internal */
export declare const ListAccessGroupProjectsRequest$inboundSchema: z.ZodType<ListAccessGroupProjectsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAccessGroupProjectsRequest$Outbound = {
    idOrName: string;
    limit?: number | undefined;
    next?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListAccessGroupProjectsRequest$outboundSchema: z.ZodType<ListAccessGroupProjectsRequest$Outbound, z.ZodTypeDef, ListAccessGroupProjectsRequest>;
export declare function listAccessGroupProjectsRequestToJSON(listAccessGroupProjectsRequest: ListAccessGroupProjectsRequest): string;
export declare function listAccessGroupProjectsRequestFromJSON(jsonString: string): SafeParseResult<ListAccessGroupProjectsRequest, SDKValidationError>;
/** @internal */
export declare const ListAccessGroupProjectsRole$inboundSchema: z.ZodNativeEnum<typeof ListAccessGroupProjectsRole>;
/** @internal */
export declare const ListAccessGroupProjectsRole$outboundSchema: z.ZodNativeEnum<typeof ListAccessGroupProjectsRole>;
/** @internal */
export declare const ListAccessGroupProjectsProject$inboundSchema: z.ZodType<ListAccessGroupProjectsProject, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAccessGroupProjectsProject$Outbound = {
    name?: string | undefined;
    framework?: string | null | undefined;
    latestDeploymentId?: string | undefined;
};
/** @internal */
export declare const ListAccessGroupProjectsProject$outboundSchema: z.ZodType<ListAccessGroupProjectsProject$Outbound, z.ZodTypeDef, ListAccessGroupProjectsProject>;
export declare function listAccessGroupProjectsProjectToJSON(listAccessGroupProjectsProject: ListAccessGroupProjectsProject): string;
export declare function listAccessGroupProjectsProjectFromJSON(jsonString: string): SafeParseResult<ListAccessGroupProjectsProject, SDKValidationError>;
/** @internal */
export declare const ListAccessGroupProjectsProjects$inboundSchema: z.ZodType<ListAccessGroupProjectsProjects, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAccessGroupProjectsProjects$Outbound = {
    projectId: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    project: ListAccessGroupProjectsProject$Outbound;
};
/** @internal */
export declare const ListAccessGroupProjectsProjects$outboundSchema: z.ZodType<ListAccessGroupProjectsProjects$Outbound, z.ZodTypeDef, ListAccessGroupProjectsProjects>;
export declare function listAccessGroupProjectsProjectsToJSON(listAccessGroupProjectsProjects: ListAccessGroupProjectsProjects): string;
export declare function listAccessGroupProjectsProjectsFromJSON(jsonString: string): SafeParseResult<ListAccessGroupProjectsProjects, SDKValidationError>;
/** @internal */
export declare const ListAccessGroupProjectsPagination$inboundSchema: z.ZodType<ListAccessGroupProjectsPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAccessGroupProjectsPagination$Outbound = {
    count: number;
    next: string | null;
};
/** @internal */
export declare const ListAccessGroupProjectsPagination$outboundSchema: z.ZodType<ListAccessGroupProjectsPagination$Outbound, z.ZodTypeDef, ListAccessGroupProjectsPagination>;
export declare function listAccessGroupProjectsPaginationToJSON(listAccessGroupProjectsPagination: ListAccessGroupProjectsPagination): string;
export declare function listAccessGroupProjectsPaginationFromJSON(jsonString: string): SafeParseResult<ListAccessGroupProjectsPagination, SDKValidationError>;
/** @internal */
export declare const ListAccessGroupProjectsResponseBody$inboundSchema: z.ZodType<ListAccessGroupProjectsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAccessGroupProjectsResponseBody$Outbound = {
    projects: Array<ListAccessGroupProjectsProjects$Outbound>;
    pagination: ListAccessGroupProjectsPagination$Outbound;
};
/** @internal */
export declare const ListAccessGroupProjectsResponseBody$outboundSchema: z.ZodType<ListAccessGroupProjectsResponseBody$Outbound, z.ZodTypeDef, ListAccessGroupProjectsResponseBody>;
export declare function listAccessGroupProjectsResponseBodyToJSON(listAccessGroupProjectsResponseBody: ListAccessGroupProjectsResponseBody): string;
export declare function listAccessGroupProjectsResponseBodyFromJSON(jsonString: string): SafeParseResult<ListAccessGroupProjectsResponseBody, SDKValidationError>;
//# sourceMappingURL=listaccessgroupprojectsop.d.ts.map