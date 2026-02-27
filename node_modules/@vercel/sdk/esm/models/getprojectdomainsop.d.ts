import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Filters only production domains when set to `true`.
 */
export declare const Production: {
    readonly True: "true";
    readonly False: "false";
};
/**
 * Filters only production domains when set to `true`.
 */
export type Production = ClosedEnum<typeof Production>;
/**
 * Filters on the target of the domain. Can be either \"production\", \"preview\"
 */
export declare const QueryParamTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
};
/**
 * Filters on the target of the domain. Can be either \"production\", \"preview\"
 */
export type QueryParamTarget = ClosedEnum<typeof QueryParamTarget>;
/**
 * Excludes redirect project domains when \"false\". Includes redirect project domains when \"true\" (default).
 */
export declare const QueryParamRedirects: {
    readonly True: "true";
    readonly False: "false";
};
/**
 * Excludes redirect project domains when \"false\". Includes redirect project domains when \"true\" (default).
 */
export type QueryParamRedirects = ClosedEnum<typeof QueryParamRedirects>;
/**
 * Filters domains based on their verification status.
 */
export declare const Verified: {
    readonly True: "true";
    readonly False: "false";
};
/**
 * Filters domains based on their verification status.
 */
export type Verified = ClosedEnum<typeof Verified>;
/**
 * Domains sort order by createdAt
 */
export declare const Order: {
    readonly Asc: "ASC";
    readonly Desc: "DESC";
};
/**
 * Domains sort order by createdAt
 */
export type Order = ClosedEnum<typeof Order>;
export type GetProjectDomainsRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * Filters only production domains when set to `true`.
     */
    production?: Production | undefined;
    /**
     * Filters on the target of the domain. Can be either \"production\", \"preview\"
     */
    target?: QueryParamTarget | undefined;
    /**
     * The unique custom environment identifier within the project
     */
    customEnvironmentId?: string | undefined;
    /**
     * Filters domains based on specific branch.
     */
    gitBranch?: string | undefined;
    /**
     * Excludes redirect project domains when \"false\". Includes redirect project domains when \"true\" (default).
     */
    redirects?: QueryParamRedirects | undefined;
    /**
     * Filters domains based on their redirect target.
     */
    redirect?: string | undefined;
    /**
     * Filters domains based on their verification status.
     */
    verified?: Verified | undefined;
    /**
     * Maximum number of domains to list from a request (max 100).
     */
    limit?: number | undefined;
    /**
     * Get domains created after this JavaScript timestamp.
     */
    since?: number | undefined;
    /**
     * Get domains created before this JavaScript timestamp.
     */
    until?: number | undefined;
    /**
     * Domains sort order by createdAt
     */
    order?: Order | undefined;
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
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type GetProjectDomainsResponseBodyVerification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
export type GetProjectDomainsResponseBodyDomains = {
    name: string;
    apexName: string;
    projectId: string;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
    gitBranch?: string | null | undefined;
    customEnvironmentId?: string | null | undefined;
    updatedAt?: number | undefined;
    createdAt?: number | undefined;
    /**
     * `true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.
     */
    verified: boolean;
    /**
     * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
     */
    verification?: Array<GetProjectDomainsResponseBodyVerification> | undefined;
};
export type GetProjectDomainsResponseBody2 = {
    domains: Array<GetProjectDomainsResponseBodyDomains>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};
/**
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type ResponseBodyVerification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
export type ResponseBodyDomains = {
    name: string;
    apexName: string;
    projectId: string;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
    gitBranch?: string | null | undefined;
    customEnvironmentId?: string | null | undefined;
    updatedAt?: number | undefined;
    createdAt?: number | undefined;
    /**
     * `true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.
     */
    verified: boolean;
    /**
     * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
     */
    verification?: Array<ResponseBodyVerification> | undefined;
};
export type GetProjectDomainsResponseBodyPagination = {
    count: number;
    next: number | null;
    prev: number | null;
};
export type GetProjectDomainsResponseBody1 = {
    domains: Array<ResponseBodyDomains>;
    pagination: GetProjectDomainsResponseBodyPagination;
};
/**
 * Successful response retrieving a list of domains
 */
export type GetProjectDomainsResponseBody = GetProjectDomainsResponseBody1 | GetProjectDomainsResponseBody2;
/** @internal */
export declare const Production$inboundSchema: z.ZodNativeEnum<typeof Production>;
/** @internal */
export declare const Production$outboundSchema: z.ZodNativeEnum<typeof Production>;
/** @internal */
export declare const QueryParamTarget$inboundSchema: z.ZodNativeEnum<typeof QueryParamTarget>;
/** @internal */
export declare const QueryParamTarget$outboundSchema: z.ZodNativeEnum<typeof QueryParamTarget>;
/** @internal */
export declare const QueryParamRedirects$inboundSchema: z.ZodNativeEnum<typeof QueryParamRedirects>;
/** @internal */
export declare const QueryParamRedirects$outboundSchema: z.ZodNativeEnum<typeof QueryParamRedirects>;
/** @internal */
export declare const Verified$inboundSchema: z.ZodNativeEnum<typeof Verified>;
/** @internal */
export declare const Verified$outboundSchema: z.ZodNativeEnum<typeof Verified>;
/** @internal */
export declare const Order$inboundSchema: z.ZodNativeEnum<typeof Order>;
/** @internal */
export declare const Order$outboundSchema: z.ZodNativeEnum<typeof Order>;
/** @internal */
export declare const GetProjectDomainsRequest$inboundSchema: z.ZodType<GetProjectDomainsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectDomainsRequest$Outbound = {
    idOrName: string;
    production: string;
    target?: string | undefined;
    customEnvironmentId?: string | undefined;
    gitBranch?: string | undefined;
    redirects: string;
    redirect?: string | undefined;
    verified?: string | undefined;
    limit?: number | undefined;
    since?: number | undefined;
    until?: number | undefined;
    order: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetProjectDomainsRequest$outboundSchema: z.ZodType<GetProjectDomainsRequest$Outbound, z.ZodTypeDef, GetProjectDomainsRequest>;
export declare function getProjectDomainsRequestToJSON(getProjectDomainsRequest: GetProjectDomainsRequest): string;
export declare function getProjectDomainsRequestFromJSON(jsonString: string): SafeParseResult<GetProjectDomainsRequest, SDKValidationError>;
/** @internal */
export declare const GetProjectDomainsResponseBodyVerification$inboundSchema: z.ZodType<GetProjectDomainsResponseBodyVerification, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectDomainsResponseBodyVerification$Outbound = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/** @internal */
export declare const GetProjectDomainsResponseBodyVerification$outboundSchema: z.ZodType<GetProjectDomainsResponseBodyVerification$Outbound, z.ZodTypeDef, GetProjectDomainsResponseBodyVerification>;
export declare function getProjectDomainsResponseBodyVerificationToJSON(getProjectDomainsResponseBodyVerification: GetProjectDomainsResponseBodyVerification): string;
export declare function getProjectDomainsResponseBodyVerificationFromJSON(jsonString: string): SafeParseResult<GetProjectDomainsResponseBodyVerification, SDKValidationError>;
/** @internal */
export declare const GetProjectDomainsResponseBodyDomains$inboundSchema: z.ZodType<GetProjectDomainsResponseBodyDomains, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectDomainsResponseBodyDomains$Outbound = {
    name: string;
    apexName: string;
    projectId: string;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
    gitBranch?: string | null | undefined;
    customEnvironmentId?: string | null | undefined;
    updatedAt?: number | undefined;
    createdAt?: number | undefined;
    verified: boolean;
    verification?: Array<GetProjectDomainsResponseBodyVerification$Outbound> | undefined;
};
/** @internal */
export declare const GetProjectDomainsResponseBodyDomains$outboundSchema: z.ZodType<GetProjectDomainsResponseBodyDomains$Outbound, z.ZodTypeDef, GetProjectDomainsResponseBodyDomains>;
export declare function getProjectDomainsResponseBodyDomainsToJSON(getProjectDomainsResponseBodyDomains: GetProjectDomainsResponseBodyDomains): string;
export declare function getProjectDomainsResponseBodyDomainsFromJSON(jsonString: string): SafeParseResult<GetProjectDomainsResponseBodyDomains, SDKValidationError>;
/** @internal */
export declare const GetProjectDomainsResponseBody2$inboundSchema: z.ZodType<GetProjectDomainsResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectDomainsResponseBody2$Outbound = {
    domains: Array<GetProjectDomainsResponseBodyDomains$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const GetProjectDomainsResponseBody2$outboundSchema: z.ZodType<GetProjectDomainsResponseBody2$Outbound, z.ZodTypeDef, GetProjectDomainsResponseBody2>;
export declare function getProjectDomainsResponseBody2ToJSON(getProjectDomainsResponseBody2: GetProjectDomainsResponseBody2): string;
export declare function getProjectDomainsResponseBody2FromJSON(jsonString: string): SafeParseResult<GetProjectDomainsResponseBody2, SDKValidationError>;
/** @internal */
export declare const ResponseBodyVerification$inboundSchema: z.ZodType<ResponseBodyVerification, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyVerification$Outbound = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/** @internal */
export declare const ResponseBodyVerification$outboundSchema: z.ZodType<ResponseBodyVerification$Outbound, z.ZodTypeDef, ResponseBodyVerification>;
export declare function responseBodyVerificationToJSON(responseBodyVerification: ResponseBodyVerification): string;
export declare function responseBodyVerificationFromJSON(jsonString: string): SafeParseResult<ResponseBodyVerification, SDKValidationError>;
/** @internal */
export declare const ResponseBodyDomains$inboundSchema: z.ZodType<ResponseBodyDomains, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyDomains$Outbound = {
    name: string;
    apexName: string;
    projectId: string;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
    gitBranch?: string | null | undefined;
    customEnvironmentId?: string | null | undefined;
    updatedAt?: number | undefined;
    createdAt?: number | undefined;
    verified: boolean;
    verification?: Array<ResponseBodyVerification$Outbound> | undefined;
};
/** @internal */
export declare const ResponseBodyDomains$outboundSchema: z.ZodType<ResponseBodyDomains$Outbound, z.ZodTypeDef, ResponseBodyDomains>;
export declare function responseBodyDomainsToJSON(responseBodyDomains: ResponseBodyDomains): string;
export declare function responseBodyDomainsFromJSON(jsonString: string): SafeParseResult<ResponseBodyDomains, SDKValidationError>;
/** @internal */
export declare const GetProjectDomainsResponseBodyPagination$inboundSchema: z.ZodType<GetProjectDomainsResponseBodyPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectDomainsResponseBodyPagination$Outbound = {
    count: number;
    next: number | null;
    prev: number | null;
};
/** @internal */
export declare const GetProjectDomainsResponseBodyPagination$outboundSchema: z.ZodType<GetProjectDomainsResponseBodyPagination$Outbound, z.ZodTypeDef, GetProjectDomainsResponseBodyPagination>;
export declare function getProjectDomainsResponseBodyPaginationToJSON(getProjectDomainsResponseBodyPagination: GetProjectDomainsResponseBodyPagination): string;
export declare function getProjectDomainsResponseBodyPaginationFromJSON(jsonString: string): SafeParseResult<GetProjectDomainsResponseBodyPagination, SDKValidationError>;
/** @internal */
export declare const GetProjectDomainsResponseBody1$inboundSchema: z.ZodType<GetProjectDomainsResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectDomainsResponseBody1$Outbound = {
    domains: Array<ResponseBodyDomains$Outbound>;
    pagination: GetProjectDomainsResponseBodyPagination$Outbound;
};
/** @internal */
export declare const GetProjectDomainsResponseBody1$outboundSchema: z.ZodType<GetProjectDomainsResponseBody1$Outbound, z.ZodTypeDef, GetProjectDomainsResponseBody1>;
export declare function getProjectDomainsResponseBody1ToJSON(getProjectDomainsResponseBody1: GetProjectDomainsResponseBody1): string;
export declare function getProjectDomainsResponseBody1FromJSON(jsonString: string): SafeParseResult<GetProjectDomainsResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetProjectDomainsResponseBody$inboundSchema: z.ZodType<GetProjectDomainsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectDomainsResponseBody$Outbound = GetProjectDomainsResponseBody1$Outbound | GetProjectDomainsResponseBody2$Outbound;
/** @internal */
export declare const GetProjectDomainsResponseBody$outboundSchema: z.ZodType<GetProjectDomainsResponseBody$Outbound, z.ZodTypeDef, GetProjectDomainsResponseBody>;
export declare function getProjectDomainsResponseBodyToJSON(getProjectDomainsResponseBody: GetProjectDomainsResponseBody): string;
export declare function getProjectDomainsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetProjectDomainsResponseBody, SDKValidationError>;
//# sourceMappingURL=getprojectdomainsop.d.ts.map