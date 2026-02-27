import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The project role that will be added to this Access Group.
 */
export declare const CreateAccessGroupProjectRole: {
    readonly Admin: "ADMIN";
    readonly ProjectViewer: "PROJECT_VIEWER";
    readonly ProjectDeveloper: "PROJECT_DEVELOPER";
};
/**
 * The project role that will be added to this Access Group.
 */
export type CreateAccessGroupProjectRole = ClosedEnum<typeof CreateAccessGroupProjectRole>;
export type CreateAccessGroupProjectRequestBody = {
    /**
     * The ID of the project.
     */
    projectId: string;
    /**
     * The project role that will be added to this Access Group.
     */
    role: CreateAccessGroupProjectRole;
};
export type CreateAccessGroupProjectRequest = {
    accessGroupIdOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: CreateAccessGroupProjectRequestBody;
};
export declare const CreateAccessGroupProjectAccessGroupsRole: {
    readonly Admin: "ADMIN";
    readonly ProjectDeveloper: "PROJECT_DEVELOPER";
    readonly ProjectViewer: "PROJECT_VIEWER";
    readonly ProjectGuest: "PROJECT_GUEST";
};
export type CreateAccessGroupProjectAccessGroupsRole = ClosedEnum<typeof CreateAccessGroupProjectAccessGroupsRole>;
export type CreateAccessGroupProjectResponseBody = {
    teamId: string;
    accessGroupId: string;
    projectId: string;
    role: CreateAccessGroupProjectAccessGroupsRole;
    createdAt: string;
    updatedAt: string;
};
/** @internal */
export declare const CreateAccessGroupProjectRole$inboundSchema: z.ZodNativeEnum<typeof CreateAccessGroupProjectRole>;
/** @internal */
export declare const CreateAccessGroupProjectRole$outboundSchema: z.ZodNativeEnum<typeof CreateAccessGroupProjectRole>;
/** @internal */
export declare const CreateAccessGroupProjectRequestBody$inboundSchema: z.ZodType<CreateAccessGroupProjectRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAccessGroupProjectRequestBody$Outbound = {
    projectId: string;
    role: string;
};
/** @internal */
export declare const CreateAccessGroupProjectRequestBody$outboundSchema: z.ZodType<CreateAccessGroupProjectRequestBody$Outbound, z.ZodTypeDef, CreateAccessGroupProjectRequestBody>;
export declare function createAccessGroupProjectRequestBodyToJSON(createAccessGroupProjectRequestBody: CreateAccessGroupProjectRequestBody): string;
export declare function createAccessGroupProjectRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateAccessGroupProjectRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateAccessGroupProjectRequest$inboundSchema: z.ZodType<CreateAccessGroupProjectRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAccessGroupProjectRequest$Outbound = {
    accessGroupIdOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: CreateAccessGroupProjectRequestBody$Outbound;
};
/** @internal */
export declare const CreateAccessGroupProjectRequest$outboundSchema: z.ZodType<CreateAccessGroupProjectRequest$Outbound, z.ZodTypeDef, CreateAccessGroupProjectRequest>;
export declare function createAccessGroupProjectRequestToJSON(createAccessGroupProjectRequest: CreateAccessGroupProjectRequest): string;
export declare function createAccessGroupProjectRequestFromJSON(jsonString: string): SafeParseResult<CreateAccessGroupProjectRequest, SDKValidationError>;
/** @internal */
export declare const CreateAccessGroupProjectAccessGroupsRole$inboundSchema: z.ZodNativeEnum<typeof CreateAccessGroupProjectAccessGroupsRole>;
/** @internal */
export declare const CreateAccessGroupProjectAccessGroupsRole$outboundSchema: z.ZodNativeEnum<typeof CreateAccessGroupProjectAccessGroupsRole>;
/** @internal */
export declare const CreateAccessGroupProjectResponseBody$inboundSchema: z.ZodType<CreateAccessGroupProjectResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAccessGroupProjectResponseBody$Outbound = {
    teamId: string;
    accessGroupId: string;
    projectId: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};
/** @internal */
export declare const CreateAccessGroupProjectResponseBody$outboundSchema: z.ZodType<CreateAccessGroupProjectResponseBody$Outbound, z.ZodTypeDef, CreateAccessGroupProjectResponseBody>;
export declare function createAccessGroupProjectResponseBodyToJSON(createAccessGroupProjectResponseBody: CreateAccessGroupProjectResponseBody): string;
export declare function createAccessGroupProjectResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateAccessGroupProjectResponseBody, SDKValidationError>;
//# sourceMappingURL=createaccessgroupprojectop.d.ts.map