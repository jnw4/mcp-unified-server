import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The project role that will be added to this Access Group.
 */
export declare const UpdateAccessGroupProjectRole: {
    readonly Admin: "ADMIN";
    readonly ProjectViewer: "PROJECT_VIEWER";
    readonly ProjectDeveloper: "PROJECT_DEVELOPER";
};
/**
 * The project role that will be added to this Access Group.
 */
export type UpdateAccessGroupProjectRole = ClosedEnum<typeof UpdateAccessGroupProjectRole>;
export type UpdateAccessGroupProjectRequestBody = {
    /**
     * The project role that will be added to this Access Group.
     */
    role: UpdateAccessGroupProjectRole;
};
export type UpdateAccessGroupProjectRequest = {
    accessGroupIdOrName: string;
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: UpdateAccessGroupProjectRequestBody;
};
export declare const UpdateAccessGroupProjectAccessGroupsRole: {
    readonly Admin: "ADMIN";
    readonly ProjectDeveloper: "PROJECT_DEVELOPER";
    readonly ProjectViewer: "PROJECT_VIEWER";
    readonly ProjectGuest: "PROJECT_GUEST";
};
export type UpdateAccessGroupProjectAccessGroupsRole = ClosedEnum<typeof UpdateAccessGroupProjectAccessGroupsRole>;
export type UpdateAccessGroupProjectResponseBody = {
    teamId: string;
    accessGroupId: string;
    projectId: string;
    role: UpdateAccessGroupProjectAccessGroupsRole;
    createdAt: string;
    updatedAt: string;
};
/** @internal */
export declare const UpdateAccessGroupProjectRole$inboundSchema: z.ZodNativeEnum<typeof UpdateAccessGroupProjectRole>;
/** @internal */
export declare const UpdateAccessGroupProjectRole$outboundSchema: z.ZodNativeEnum<typeof UpdateAccessGroupProjectRole>;
/** @internal */
export declare const UpdateAccessGroupProjectRequestBody$inboundSchema: z.ZodType<UpdateAccessGroupProjectRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAccessGroupProjectRequestBody$Outbound = {
    role: string;
};
/** @internal */
export declare const UpdateAccessGroupProjectRequestBody$outboundSchema: z.ZodType<UpdateAccessGroupProjectRequestBody$Outbound, z.ZodTypeDef, UpdateAccessGroupProjectRequestBody>;
export declare function updateAccessGroupProjectRequestBodyToJSON(updateAccessGroupProjectRequestBody: UpdateAccessGroupProjectRequestBody): string;
export declare function updateAccessGroupProjectRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateAccessGroupProjectRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateAccessGroupProjectRequest$inboundSchema: z.ZodType<UpdateAccessGroupProjectRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAccessGroupProjectRequest$Outbound = {
    accessGroupIdOrName: string;
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: UpdateAccessGroupProjectRequestBody$Outbound;
};
/** @internal */
export declare const UpdateAccessGroupProjectRequest$outboundSchema: z.ZodType<UpdateAccessGroupProjectRequest$Outbound, z.ZodTypeDef, UpdateAccessGroupProjectRequest>;
export declare function updateAccessGroupProjectRequestToJSON(updateAccessGroupProjectRequest: UpdateAccessGroupProjectRequest): string;
export declare function updateAccessGroupProjectRequestFromJSON(jsonString: string): SafeParseResult<UpdateAccessGroupProjectRequest, SDKValidationError>;
/** @internal */
export declare const UpdateAccessGroupProjectAccessGroupsRole$inboundSchema: z.ZodNativeEnum<typeof UpdateAccessGroupProjectAccessGroupsRole>;
/** @internal */
export declare const UpdateAccessGroupProjectAccessGroupsRole$outboundSchema: z.ZodNativeEnum<typeof UpdateAccessGroupProjectAccessGroupsRole>;
/** @internal */
export declare const UpdateAccessGroupProjectResponseBody$inboundSchema: z.ZodType<UpdateAccessGroupProjectResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAccessGroupProjectResponseBody$Outbound = {
    teamId: string;
    accessGroupId: string;
    projectId: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};
/** @internal */
export declare const UpdateAccessGroupProjectResponseBody$outboundSchema: z.ZodType<UpdateAccessGroupProjectResponseBody$Outbound, z.ZodTypeDef, UpdateAccessGroupProjectResponseBody>;
export declare function updateAccessGroupProjectResponseBodyToJSON(updateAccessGroupProjectResponseBody: UpdateAccessGroupProjectResponseBody): string;
export declare function updateAccessGroupProjectResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateAccessGroupProjectResponseBody, SDKValidationError>;
//# sourceMappingURL=updateaccessgroupprojectop.d.ts.map