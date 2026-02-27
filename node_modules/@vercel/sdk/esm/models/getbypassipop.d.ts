import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetBypassIpRequest = {
    projectId: string;
    limit?: number | undefined;
    /**
     * Filter by source IP
     */
    sourceIp?: string | undefined;
    /**
     * Filter by domain
     */
    domain?: string | undefined;
    /**
     * Filter by project scoped rules
     */
    projectScope?: boolean | undefined;
    /**
     * Used for pagination. Retrieves results after the provided id
     */
    offset?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const GetBypassIpAction: {
    readonly Bypass: "bypass";
    readonly Block: "block";
};
export type GetBypassIpAction = ClosedEnum<typeof GetBypassIpAction>;
export type GetBypassIpResult = {
    ownerId: string;
    id: string;
    domain: string;
    ip: string;
    action?: GetBypassIpAction | undefined;
    projectId?: string | undefined;
    isProjectRule?: boolean | undefined;
    note?: string | undefined;
    createdAt: string;
    actorId?: string | undefined;
    updatedAt: string;
    updatedAtHour: string;
    deletedAt?: string | undefined;
    expiresAt?: number | null | undefined;
};
export type GetBypassIpPagination = {
    ownerId: string;
    id: string;
};
export type GetBypassIpResponseBody = {
    result: Array<GetBypassIpResult>;
    pagination?: GetBypassIpPagination | undefined;
};
/** @internal */
export declare const GetBypassIpRequest$inboundSchema: z.ZodType<GetBypassIpRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBypassIpRequest$Outbound = {
    projectId: string;
    limit?: number | undefined;
    sourceIp?: string | undefined;
    domain?: string | undefined;
    projectScope?: boolean | undefined;
    offset?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetBypassIpRequest$outboundSchema: z.ZodType<GetBypassIpRequest$Outbound, z.ZodTypeDef, GetBypassIpRequest>;
export declare function getBypassIpRequestToJSON(getBypassIpRequest: GetBypassIpRequest): string;
export declare function getBypassIpRequestFromJSON(jsonString: string): SafeParseResult<GetBypassIpRequest, SDKValidationError>;
/** @internal */
export declare const GetBypassIpAction$inboundSchema: z.ZodNativeEnum<typeof GetBypassIpAction>;
/** @internal */
export declare const GetBypassIpAction$outboundSchema: z.ZodNativeEnum<typeof GetBypassIpAction>;
/** @internal */
export declare const GetBypassIpResult$inboundSchema: z.ZodType<GetBypassIpResult, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBypassIpResult$Outbound = {
    OwnerId: string;
    Id: string;
    Domain: string;
    Ip: string;
    Action?: string | undefined;
    ProjectId?: string | undefined;
    IsProjectRule?: boolean | undefined;
    Note?: string | undefined;
    CreatedAt: string;
    ActorId?: string | undefined;
    UpdatedAt: string;
    UpdatedAtHour: string;
    DeletedAt?: string | undefined;
    ExpiresAt?: number | null | undefined;
};
/** @internal */
export declare const GetBypassIpResult$outboundSchema: z.ZodType<GetBypassIpResult$Outbound, z.ZodTypeDef, GetBypassIpResult>;
export declare function getBypassIpResultToJSON(getBypassIpResult: GetBypassIpResult): string;
export declare function getBypassIpResultFromJSON(jsonString: string): SafeParseResult<GetBypassIpResult, SDKValidationError>;
/** @internal */
export declare const GetBypassIpPagination$inboundSchema: z.ZodType<GetBypassIpPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBypassIpPagination$Outbound = {
    OwnerId: string;
    Id: string;
};
/** @internal */
export declare const GetBypassIpPagination$outboundSchema: z.ZodType<GetBypassIpPagination$Outbound, z.ZodTypeDef, GetBypassIpPagination>;
export declare function getBypassIpPaginationToJSON(getBypassIpPagination: GetBypassIpPagination): string;
export declare function getBypassIpPaginationFromJSON(jsonString: string): SafeParseResult<GetBypassIpPagination, SDKValidationError>;
/** @internal */
export declare const GetBypassIpResponseBody$inboundSchema: z.ZodType<GetBypassIpResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBypassIpResponseBody$Outbound = {
    result: Array<GetBypassIpResult$Outbound>;
    pagination?: GetBypassIpPagination$Outbound | undefined;
};
/** @internal */
export declare const GetBypassIpResponseBody$outboundSchema: z.ZodType<GetBypassIpResponseBody$Outbound, z.ZodTypeDef, GetBypassIpResponseBody>;
export declare function getBypassIpResponseBodyToJSON(getBypassIpResponseBody: GetBypassIpResponseBody): string;
export declare function getBypassIpResponseBodyFromJSON(jsonString: string): SafeParseResult<GetBypassIpResponseBody, SDKValidationError>;
//# sourceMappingURL=getbypassipop.d.ts.map