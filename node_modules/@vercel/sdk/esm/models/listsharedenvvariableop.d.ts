import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListSharedEnvVariableRequest = {
    search?: string | undefined;
    /**
     * Filter SharedEnvVariables that belong to a project
     */
    projectId?: string | undefined;
    /**
     * Filter SharedEnvVariables based on comma separated ids
     */
    ids?: string | undefined;
    /**
     * Filter SharedEnvVariables based on comma separated ids
     */
    excludeIdsQueryParameter?: string | undefined;
    /**
     * Filter SharedEnvVariables based on comma separated ids
     */
    excludeIdsQueryParameter1?: string | undefined;
    /**
     * Filter SharedEnvVariables that belong to a project
     */
    excludeProjectIdQueryParameter?: string | undefined;
    /**
     * Filter SharedEnvVariables that belong to a project
     */
    excludeProjectIdQueryParameter1?: string | undefined;
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
 * The type of this cosmos doc instance, if blank, assume secret.
 */
export declare const ListSharedEnvVariableType: {
    readonly Encrypted: "encrypted";
    readonly Sensitive: "sensitive";
    readonly System: "system";
    readonly Plain: "plain";
};
/**
 * The type of this cosmos doc instance, if blank, assume secret.
 */
export type ListSharedEnvVariableType = ClosedEnum<typeof ListSharedEnvVariableType>;
/**
 * environments this env variable targets
 */
export declare const ListSharedEnvVariableTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
/**
 * environments this env variable targets
 */
export type ListSharedEnvVariableTarget = ClosedEnum<typeof ListSharedEnvVariableTarget>;
export type ListSharedEnvVariableData = {
    /**
     * The date when the Shared Env Var was created.
     */
    created?: Date | undefined;
    /**
     * The name of the Shared Env Var.
     */
    key?: string | undefined;
    /**
     * The unique identifier of the owner (team) the Shared Env Var was created for.
     */
    ownerId?: string | null | undefined;
    /**
     * The unique identifier of the Shared Env Var.
     */
    id?: string | undefined;
    /**
     * The unique identifier of the user who created the Shared Env Var.
     */
    createdBy?: string | null | undefined;
    /**
     * The unique identifier of the user who deleted the Shared Env Var.
     */
    deletedBy?: string | null | undefined;
    /**
     * The unique identifier of the user who last updated the Shared Env Var.
     */
    updatedBy?: string | null | undefined;
    /**
     * Timestamp for when the Shared Env Var was created.
     */
    createdAt?: number | undefined;
    /**
     * Timestamp for when the Shared Env Var was (soft) deleted.
     */
    deletedAt?: number | undefined;
    /**
     * Timestamp for when the Shared Env Var was last updated.
     */
    updatedAt?: number | undefined;
    /**
     * The value of the Shared Env Var.
     */
    value?: string | undefined;
    /**
     * The unique identifiers of the projects which the Shared Env Var is linked to.
     */
    projectId?: Array<string> | undefined;
    /**
     * The type of this cosmos doc instance, if blank, assume secret.
     */
    type?: ListSharedEnvVariableType | undefined;
    /**
     * environments this env variable targets
     */
    target?: Array<ListSharedEnvVariableTarget> | undefined;
    /**
     * whether or not this env varible applies to custom environments
     */
    applyToAllCustomEnvironments?: boolean | undefined;
    /**
     * whether or not this env variable is decrypted
     */
    decrypted?: boolean | undefined;
    /**
     * A user provided comment that describes what this Shared Env Var is for.
     */
    comment?: string | undefined;
    /**
     * The last editor full name or username.
     */
    lastEditedByDisplayName?: string | undefined;
};
export type ListSharedEnvVariableResponseBody = {
    data: Array<ListSharedEnvVariableData>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};
/** @internal */
export declare const ListSharedEnvVariableRequest$inboundSchema: z.ZodType<ListSharedEnvVariableRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSharedEnvVariableRequest$Outbound = {
    search?: string | undefined;
    projectId?: string | undefined;
    ids?: string | undefined;
    exclude_idsQueryParameter?: string | undefined;
    "exclude-idsQueryParameter1"?: string | undefined;
    exclude_projectIdQueryParameter?: string | undefined;
    "exclude-projectIdQueryParameter1"?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListSharedEnvVariableRequest$outboundSchema: z.ZodType<ListSharedEnvVariableRequest$Outbound, z.ZodTypeDef, ListSharedEnvVariableRequest>;
export declare function listSharedEnvVariableRequestToJSON(listSharedEnvVariableRequest: ListSharedEnvVariableRequest): string;
export declare function listSharedEnvVariableRequestFromJSON(jsonString: string): SafeParseResult<ListSharedEnvVariableRequest, SDKValidationError>;
/** @internal */
export declare const ListSharedEnvVariableType$inboundSchema: z.ZodNativeEnum<typeof ListSharedEnvVariableType>;
/** @internal */
export declare const ListSharedEnvVariableType$outboundSchema: z.ZodNativeEnum<typeof ListSharedEnvVariableType>;
/** @internal */
export declare const ListSharedEnvVariableTarget$inboundSchema: z.ZodNativeEnum<typeof ListSharedEnvVariableTarget>;
/** @internal */
export declare const ListSharedEnvVariableTarget$outboundSchema: z.ZodNativeEnum<typeof ListSharedEnvVariableTarget>;
/** @internal */
export declare const ListSharedEnvVariableData$inboundSchema: z.ZodType<ListSharedEnvVariableData, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSharedEnvVariableData$Outbound = {
    created?: string | undefined;
    key?: string | undefined;
    ownerId?: string | null | undefined;
    id?: string | undefined;
    createdBy?: string | null | undefined;
    deletedBy?: string | null | undefined;
    updatedBy?: string | null | undefined;
    createdAt?: number | undefined;
    deletedAt?: number | undefined;
    updatedAt?: number | undefined;
    value?: string | undefined;
    projectId?: Array<string> | undefined;
    type?: string | undefined;
    target?: Array<string> | undefined;
    applyToAllCustomEnvironments?: boolean | undefined;
    decrypted?: boolean | undefined;
    comment?: string | undefined;
    lastEditedByDisplayName?: string | undefined;
};
/** @internal */
export declare const ListSharedEnvVariableData$outboundSchema: z.ZodType<ListSharedEnvVariableData$Outbound, z.ZodTypeDef, ListSharedEnvVariableData>;
export declare function listSharedEnvVariableDataToJSON(listSharedEnvVariableData: ListSharedEnvVariableData): string;
export declare function listSharedEnvVariableDataFromJSON(jsonString: string): SafeParseResult<ListSharedEnvVariableData, SDKValidationError>;
/** @internal */
export declare const ListSharedEnvVariableResponseBody$inboundSchema: z.ZodType<ListSharedEnvVariableResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSharedEnvVariableResponseBody$Outbound = {
    data: Array<ListSharedEnvVariableData$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListSharedEnvVariableResponseBody$outboundSchema: z.ZodType<ListSharedEnvVariableResponseBody$Outbound, z.ZodTypeDef, ListSharedEnvVariableResponseBody>;
export declare function listSharedEnvVariableResponseBodyToJSON(listSharedEnvVariableResponseBody: ListSharedEnvVariableResponseBody): string;
export declare function listSharedEnvVariableResponseBodyFromJSON(jsonString: string): SafeParseResult<ListSharedEnvVariableResponseBody, SDKValidationError>;
//# sourceMappingURL=listsharedenvvariableop.d.ts.map