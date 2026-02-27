import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetSharedEnvVarRequest = {
    /**
     * The unique ID for the Shared Environment Variable to get the decrypted value.
     */
    id: string;
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
export declare const GetSharedEnvVarType: {
    readonly Encrypted: "encrypted";
    readonly Sensitive: "sensitive";
    readonly System: "system";
    readonly Plain: "plain";
};
/**
 * The type of this cosmos doc instance, if blank, assume secret.
 */
export type GetSharedEnvVarType = ClosedEnum<typeof GetSharedEnvVarType>;
/**
 * environments this env variable targets
 */
export declare const GetSharedEnvVarTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
/**
 * environments this env variable targets
 */
export type GetSharedEnvVarTarget = ClosedEnum<typeof GetSharedEnvVarTarget>;
export type GetSharedEnvVarResponseBody = {
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
    type?: GetSharedEnvVarType | undefined;
    /**
     * environments this env variable targets
     */
    target?: Array<GetSharedEnvVarTarget> | undefined;
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
/** @internal */
export declare const GetSharedEnvVarRequest$inboundSchema: z.ZodType<GetSharedEnvVarRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSharedEnvVarRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetSharedEnvVarRequest$outboundSchema: z.ZodType<GetSharedEnvVarRequest$Outbound, z.ZodTypeDef, GetSharedEnvVarRequest>;
export declare function getSharedEnvVarRequestToJSON(getSharedEnvVarRequest: GetSharedEnvVarRequest): string;
export declare function getSharedEnvVarRequestFromJSON(jsonString: string): SafeParseResult<GetSharedEnvVarRequest, SDKValidationError>;
/** @internal */
export declare const GetSharedEnvVarType$inboundSchema: z.ZodNativeEnum<typeof GetSharedEnvVarType>;
/** @internal */
export declare const GetSharedEnvVarType$outboundSchema: z.ZodNativeEnum<typeof GetSharedEnvVarType>;
/** @internal */
export declare const GetSharedEnvVarTarget$inboundSchema: z.ZodNativeEnum<typeof GetSharedEnvVarTarget>;
/** @internal */
export declare const GetSharedEnvVarTarget$outboundSchema: z.ZodNativeEnum<typeof GetSharedEnvVarTarget>;
/** @internal */
export declare const GetSharedEnvVarResponseBody$inboundSchema: z.ZodType<GetSharedEnvVarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSharedEnvVarResponseBody$Outbound = {
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
export declare const GetSharedEnvVarResponseBody$outboundSchema: z.ZodType<GetSharedEnvVarResponseBody$Outbound, z.ZodTypeDef, GetSharedEnvVarResponseBody>;
export declare function getSharedEnvVarResponseBodyToJSON(getSharedEnvVarResponseBody: GetSharedEnvVarResponseBody): string;
export declare function getSharedEnvVarResponseBodyFromJSON(jsonString: string): SafeParseResult<GetSharedEnvVarResponseBody, SDKValidationError>;
//# sourceMappingURL=getsharedenvvarop.d.ts.map