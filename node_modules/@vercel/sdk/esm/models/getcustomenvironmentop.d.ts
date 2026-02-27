import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetCustomEnvironmentRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The unique custom environment identifier within the project
     */
    environmentSlugOrId: string;
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
 * The type of environment (production, preview, or development)
 */
export declare const GetCustomEnvironmentType: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
/**
 * The type of environment (production, preview, or development)
 */
export type GetCustomEnvironmentType = ClosedEnum<typeof GetCustomEnvironmentType>;
/**
 * The type of matching to perform
 */
export declare const GetCustomEnvironmentEnvironmentType: {
    readonly EndsWith: "endsWith";
    readonly StartsWith: "startsWith";
    readonly Equals: "equals";
};
/**
 * The type of matching to perform
 */
export type GetCustomEnvironmentEnvironmentType = ClosedEnum<typeof GetCustomEnvironmentEnvironmentType>;
/**
 * Configuration for matching git branches to this environment
 */
export type GetCustomEnvironmentBranchMatcher = {
    /**
     * The type of matching to perform
     */
    type: GetCustomEnvironmentEnvironmentType;
    /**
     * The pattern to match against branch names
     */
    pattern: string;
};
/**
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type GetCustomEnvironmentVerification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/**
 * List of domains associated with this environment
 */
export type GetCustomEnvironmentDomains = {
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
    verification?: Array<GetCustomEnvironmentVerification> | undefined;
};
/**
 * Internal representation of a custom environment with all required properties
 */
export type GetCustomEnvironmentResponseBody = {
    /**
     * Unique identifier for the custom environment (format: env_*)
     */
    id: string;
    /**
     * URL-friendly name of the environment
     */
    slug: string;
    /**
     * The type of environment (production, preview, or development)
     */
    type: GetCustomEnvironmentType;
    /**
     * Optional description of the environment's purpose
     */
    description?: string | undefined;
    /**
     * Configuration for matching git branches to this environment
     */
    branchMatcher?: GetCustomEnvironmentBranchMatcher | undefined;
    /**
     * List of domains associated with this environment
     */
    domains?: Array<GetCustomEnvironmentDomains> | undefined;
    /**
     * List of aliases for the current deployment
     */
    currentDeploymentAliases?: Array<string> | undefined;
    /**
     * Timestamp when the environment was created
     */
    createdAt: number;
    /**
     * Timestamp when the environment was last updated
     */
    updatedAt: number;
};
/** @internal */
export declare const GetCustomEnvironmentRequest$inboundSchema: z.ZodType<GetCustomEnvironmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCustomEnvironmentRequest$Outbound = {
    idOrName: string;
    environmentSlugOrId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetCustomEnvironmentRequest$outboundSchema: z.ZodType<GetCustomEnvironmentRequest$Outbound, z.ZodTypeDef, GetCustomEnvironmentRequest>;
export declare function getCustomEnvironmentRequestToJSON(getCustomEnvironmentRequest: GetCustomEnvironmentRequest): string;
export declare function getCustomEnvironmentRequestFromJSON(jsonString: string): SafeParseResult<GetCustomEnvironmentRequest, SDKValidationError>;
/** @internal */
export declare const GetCustomEnvironmentType$inboundSchema: z.ZodNativeEnum<typeof GetCustomEnvironmentType>;
/** @internal */
export declare const GetCustomEnvironmentType$outboundSchema: z.ZodNativeEnum<typeof GetCustomEnvironmentType>;
/** @internal */
export declare const GetCustomEnvironmentEnvironmentType$inboundSchema: z.ZodNativeEnum<typeof GetCustomEnvironmentEnvironmentType>;
/** @internal */
export declare const GetCustomEnvironmentEnvironmentType$outboundSchema: z.ZodNativeEnum<typeof GetCustomEnvironmentEnvironmentType>;
/** @internal */
export declare const GetCustomEnvironmentBranchMatcher$inboundSchema: z.ZodType<GetCustomEnvironmentBranchMatcher, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCustomEnvironmentBranchMatcher$Outbound = {
    type: string;
    pattern: string;
};
/** @internal */
export declare const GetCustomEnvironmentBranchMatcher$outboundSchema: z.ZodType<GetCustomEnvironmentBranchMatcher$Outbound, z.ZodTypeDef, GetCustomEnvironmentBranchMatcher>;
export declare function getCustomEnvironmentBranchMatcherToJSON(getCustomEnvironmentBranchMatcher: GetCustomEnvironmentBranchMatcher): string;
export declare function getCustomEnvironmentBranchMatcherFromJSON(jsonString: string): SafeParseResult<GetCustomEnvironmentBranchMatcher, SDKValidationError>;
/** @internal */
export declare const GetCustomEnvironmentVerification$inboundSchema: z.ZodType<GetCustomEnvironmentVerification, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCustomEnvironmentVerification$Outbound = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/** @internal */
export declare const GetCustomEnvironmentVerification$outboundSchema: z.ZodType<GetCustomEnvironmentVerification$Outbound, z.ZodTypeDef, GetCustomEnvironmentVerification>;
export declare function getCustomEnvironmentVerificationToJSON(getCustomEnvironmentVerification: GetCustomEnvironmentVerification): string;
export declare function getCustomEnvironmentVerificationFromJSON(jsonString: string): SafeParseResult<GetCustomEnvironmentVerification, SDKValidationError>;
/** @internal */
export declare const GetCustomEnvironmentDomains$inboundSchema: z.ZodType<GetCustomEnvironmentDomains, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCustomEnvironmentDomains$Outbound = {
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
    verification?: Array<GetCustomEnvironmentVerification$Outbound> | undefined;
};
/** @internal */
export declare const GetCustomEnvironmentDomains$outboundSchema: z.ZodType<GetCustomEnvironmentDomains$Outbound, z.ZodTypeDef, GetCustomEnvironmentDomains>;
export declare function getCustomEnvironmentDomainsToJSON(getCustomEnvironmentDomains: GetCustomEnvironmentDomains): string;
export declare function getCustomEnvironmentDomainsFromJSON(jsonString: string): SafeParseResult<GetCustomEnvironmentDomains, SDKValidationError>;
/** @internal */
export declare const GetCustomEnvironmentResponseBody$inboundSchema: z.ZodType<GetCustomEnvironmentResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCustomEnvironmentResponseBody$Outbound = {
    id: string;
    slug: string;
    type: string;
    description?: string | undefined;
    branchMatcher?: GetCustomEnvironmentBranchMatcher$Outbound | undefined;
    domains?: Array<GetCustomEnvironmentDomains$Outbound> | undefined;
    currentDeploymentAliases?: Array<string> | undefined;
    createdAt: number;
    updatedAt: number;
};
/** @internal */
export declare const GetCustomEnvironmentResponseBody$outboundSchema: z.ZodType<GetCustomEnvironmentResponseBody$Outbound, z.ZodTypeDef, GetCustomEnvironmentResponseBody>;
export declare function getCustomEnvironmentResponseBodyToJSON(getCustomEnvironmentResponseBody: GetCustomEnvironmentResponseBody): string;
export declare function getCustomEnvironmentResponseBodyFromJSON(jsonString: string): SafeParseResult<GetCustomEnvironmentResponseBody, SDKValidationError>;
//# sourceMappingURL=getcustomenvironmentop.d.ts.map