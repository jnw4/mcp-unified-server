import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetV9ProjectsIdOrNameCustomEnvironmentsRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * Fetch custom environments for a specific git branch
     */
    gitBranch?: string | undefined;
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
 * The maximum number of custom environments allowed either by the team's plan type or a custom override.
 */
export type AccountLimit = {
    total: number;
};
/**
 * The type of environment (production, preview, or development)
 */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsType: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
/**
 * The type of environment (production, preview, or development)
 */
export type GetV9ProjectsIdOrNameCustomEnvironmentsType = ClosedEnum<typeof GetV9ProjectsIdOrNameCustomEnvironmentsType>;
/**
 * The type of matching to perform
 */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentType: {
    readonly EndsWith: "endsWith";
    readonly StartsWith: "startsWith";
    readonly Equals: "equals";
};
/**
 * The type of matching to perform
 */
export type GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentType = ClosedEnum<typeof GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentType>;
/**
 * Configuration for matching git branches to this environment
 */
export type GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher = {
    /**
     * The type of matching to perform
     */
    type: GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentType;
    /**
     * The pattern to match against branch names
     */
    pattern: string;
};
/**
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type GetV9ProjectsIdOrNameCustomEnvironmentsVerification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/**
 * List of domains associated with this environment
 */
export type GetV9ProjectsIdOrNameCustomEnvironmentsDomains = {
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
    verification?: Array<GetV9ProjectsIdOrNameCustomEnvironmentsVerification> | undefined;
};
export type GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments = {
    /**
     * The type of environment (production, preview, or development)
     */
    type: GetV9ProjectsIdOrNameCustomEnvironmentsType;
    /**
     * Optional description of the environment's purpose
     */
    description?: string | undefined;
    /**
     * Timestamp when the environment was created
     */
    createdAt: number;
    /**
     * Timestamp when the environment was last updated
     */
    updatedAt: number;
    /**
     * Unique identifier for the custom environment (format: env_*)
     */
    id: string;
    /**
     * URL-friendly name of the environment
     */
    slug: string;
    /**
     * Configuration for matching git branches to this environment
     */
    branchMatcher?: GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher | undefined;
    /**
     * List of domains associated with this environment
     */
    domains?: Array<GetV9ProjectsIdOrNameCustomEnvironmentsDomains> | undefined;
    /**
     * List of aliases for the current deployment
     */
    currentDeploymentAliases?: Array<string> | undefined;
};
export type GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody = {
    /**
     * The maximum number of custom environments allowed either by the team's plan type or a custom override.
     */
    accountLimit: AccountLimit;
    environments: Array<GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments>;
};
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsRequest$inboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV9ProjectsIdOrNameCustomEnvironmentsRequest$Outbound = {
    idOrName: string;
    gitBranch?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsRequest$outboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsRequest$Outbound, z.ZodTypeDef, GetV9ProjectsIdOrNameCustomEnvironmentsRequest>;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsRequestToJSON(getV9ProjectsIdOrNameCustomEnvironmentsRequest: GetV9ProjectsIdOrNameCustomEnvironmentsRequest): string;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsRequestFromJSON(jsonString: string): SafeParseResult<GetV9ProjectsIdOrNameCustomEnvironmentsRequest, SDKValidationError>;
/** @internal */
export declare const AccountLimit$inboundSchema: z.ZodType<AccountLimit, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountLimit$Outbound = {
    total: number;
};
/** @internal */
export declare const AccountLimit$outboundSchema: z.ZodType<AccountLimit$Outbound, z.ZodTypeDef, AccountLimit>;
export declare function accountLimitToJSON(accountLimit: AccountLimit): string;
export declare function accountLimitFromJSON(jsonString: string): SafeParseResult<AccountLimit, SDKValidationError>;
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsType$inboundSchema: z.ZodNativeEnum<typeof GetV9ProjectsIdOrNameCustomEnvironmentsType>;
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsType$outboundSchema: z.ZodNativeEnum<typeof GetV9ProjectsIdOrNameCustomEnvironmentsType>;
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentType$inboundSchema: z.ZodNativeEnum<typeof GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentType>;
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentType$outboundSchema: z.ZodNativeEnum<typeof GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentType>;
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher$inboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher$Outbound = {
    type: string;
    pattern: string;
};
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher$outboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher$Outbound, z.ZodTypeDef, GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher>;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsBranchMatcherToJSON(getV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher: GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher): string;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsBranchMatcherFromJSON(jsonString: string): SafeParseResult<GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher, SDKValidationError>;
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsVerification$inboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsVerification, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV9ProjectsIdOrNameCustomEnvironmentsVerification$Outbound = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsVerification$outboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsVerification$Outbound, z.ZodTypeDef, GetV9ProjectsIdOrNameCustomEnvironmentsVerification>;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsVerificationToJSON(getV9ProjectsIdOrNameCustomEnvironmentsVerification: GetV9ProjectsIdOrNameCustomEnvironmentsVerification): string;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsVerificationFromJSON(jsonString: string): SafeParseResult<GetV9ProjectsIdOrNameCustomEnvironmentsVerification, SDKValidationError>;
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsDomains$inboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsDomains, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV9ProjectsIdOrNameCustomEnvironmentsDomains$Outbound = {
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
    verification?: Array<GetV9ProjectsIdOrNameCustomEnvironmentsVerification$Outbound> | undefined;
};
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsDomains$outboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsDomains$Outbound, z.ZodTypeDef, GetV9ProjectsIdOrNameCustomEnvironmentsDomains>;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsDomainsToJSON(getV9ProjectsIdOrNameCustomEnvironmentsDomains: GetV9ProjectsIdOrNameCustomEnvironmentsDomains): string;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsDomainsFromJSON(jsonString: string): SafeParseResult<GetV9ProjectsIdOrNameCustomEnvironmentsDomains, SDKValidationError>;
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$inboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$Outbound = {
    type: string;
    description?: string | undefined;
    createdAt: number;
    updatedAt: number;
    id: string;
    slug: string;
    branchMatcher?: GetV9ProjectsIdOrNameCustomEnvironmentsBranchMatcher$Outbound | undefined;
    domains?: Array<GetV9ProjectsIdOrNameCustomEnvironmentsDomains$Outbound> | undefined;
    currentDeploymentAliases?: Array<string> | undefined;
};
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$outboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$Outbound, z.ZodTypeDef, GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments>;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsEnvironmentsToJSON(getV9ProjectsIdOrNameCustomEnvironmentsEnvironments: GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments): string;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsEnvironmentsFromJSON(jsonString: string): SafeParseResult<GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments, SDKValidationError>;
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$inboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$Outbound = {
    accountLimit: AccountLimit$Outbound;
    environments: Array<GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments$Outbound>;
};
/** @internal */
export declare const GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$outboundSchema: z.ZodType<GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody$Outbound, z.ZodTypeDef, GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody>;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsResponseBodyToJSON(getV9ProjectsIdOrNameCustomEnvironmentsResponseBody: GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody): string;
export declare function getV9ProjectsIdOrNameCustomEnvironmentsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody, SDKValidationError>;
//# sourceMappingURL=getv9projectsidornamecustomenvironmentsop.d.ts.map