import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
 */
export declare const CreateCustomEnvironmentType: {
    readonly Equals: "equals";
    readonly StartsWith: "startsWith";
    readonly EndsWith: "endsWith";
};
/**
 * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
 */
export type CreateCustomEnvironmentType = ClosedEnum<typeof CreateCustomEnvironmentType>;
/**
 * How we want to determine a matching branch. This is optional.
 */
export type CreateCustomEnvironmentBranchMatcher = {
    /**
     * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
     */
    type: CreateCustomEnvironmentType;
    /**
     * Git branch name or portion thereof.
     */
    pattern: string;
};
export type CreateCustomEnvironmentRequestBody = {
    /**
     * The slug of the custom environment to create.
     */
    slug?: string | undefined;
    /**
     * Description of the custom environment. This is optional.
     */
    description?: string | undefined;
    /**
     * How we want to determine a matching branch. This is optional.
     */
    branchMatcher?: CreateCustomEnvironmentBranchMatcher | undefined;
    /**
     * Where to copy environment variables from. This is optional.
     */
    copyEnvVarsFrom?: string | undefined;
};
export type CreateCustomEnvironmentRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateCustomEnvironmentRequestBody | undefined;
};
/**
 * The type of environment (production, preview, or development)
 */
export declare const CreateCustomEnvironmentEnvironmentType: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
/**
 * The type of environment (production, preview, or development)
 */
export type CreateCustomEnvironmentEnvironmentType = ClosedEnum<typeof CreateCustomEnvironmentEnvironmentType>;
/**
 * The type of matching to perform
 */
export declare const CreateCustomEnvironmentEnvironmentResponseType: {
    readonly EndsWith: "endsWith";
    readonly StartsWith: "startsWith";
    readonly Equals: "equals";
};
/**
 * The type of matching to perform
 */
export type CreateCustomEnvironmentEnvironmentResponseType = ClosedEnum<typeof CreateCustomEnvironmentEnvironmentResponseType>;
/**
 * Configuration for matching git branches to this environment
 */
export type CreateCustomEnvironmentEnvironmentBranchMatcher = {
    /**
     * The type of matching to perform
     */
    type: CreateCustomEnvironmentEnvironmentResponseType;
    /**
     * The pattern to match against branch names
     */
    pattern: string;
};
/**
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type CreateCustomEnvironmentVerification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/**
 * List of domains associated with this environment
 */
export type CreateCustomEnvironmentDomains = {
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
    verification?: Array<CreateCustomEnvironmentVerification> | undefined;
};
/**
 * Internal representation of a custom environment with all required properties
 */
export type CreateCustomEnvironmentResponseBody = {
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
    type: CreateCustomEnvironmentEnvironmentType;
    /**
     * Optional description of the environment's purpose
     */
    description?: string | undefined;
    /**
     * Configuration for matching git branches to this environment
     */
    branchMatcher?: CreateCustomEnvironmentEnvironmentBranchMatcher | undefined;
    /**
     * List of domains associated with this environment
     */
    domains?: Array<CreateCustomEnvironmentDomains> | undefined;
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
export declare const CreateCustomEnvironmentType$inboundSchema: z.ZodNativeEnum<typeof CreateCustomEnvironmentType>;
/** @internal */
export declare const CreateCustomEnvironmentType$outboundSchema: z.ZodNativeEnum<typeof CreateCustomEnvironmentType>;
/** @internal */
export declare const CreateCustomEnvironmentBranchMatcher$inboundSchema: z.ZodType<CreateCustomEnvironmentBranchMatcher, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCustomEnvironmentBranchMatcher$Outbound = {
    type: string;
    pattern: string;
};
/** @internal */
export declare const CreateCustomEnvironmentBranchMatcher$outboundSchema: z.ZodType<CreateCustomEnvironmentBranchMatcher$Outbound, z.ZodTypeDef, CreateCustomEnvironmentBranchMatcher>;
export declare function createCustomEnvironmentBranchMatcherToJSON(createCustomEnvironmentBranchMatcher: CreateCustomEnvironmentBranchMatcher): string;
export declare function createCustomEnvironmentBranchMatcherFromJSON(jsonString: string): SafeParseResult<CreateCustomEnvironmentBranchMatcher, SDKValidationError>;
/** @internal */
export declare const CreateCustomEnvironmentRequestBody$inboundSchema: z.ZodType<CreateCustomEnvironmentRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCustomEnvironmentRequestBody$Outbound = {
    slug?: string | undefined;
    description?: string | undefined;
    branchMatcher?: CreateCustomEnvironmentBranchMatcher$Outbound | undefined;
    copyEnvVarsFrom?: string | undefined;
};
/** @internal */
export declare const CreateCustomEnvironmentRequestBody$outboundSchema: z.ZodType<CreateCustomEnvironmentRequestBody$Outbound, z.ZodTypeDef, CreateCustomEnvironmentRequestBody>;
export declare function createCustomEnvironmentRequestBodyToJSON(createCustomEnvironmentRequestBody: CreateCustomEnvironmentRequestBody): string;
export declare function createCustomEnvironmentRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateCustomEnvironmentRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateCustomEnvironmentRequest$inboundSchema: z.ZodType<CreateCustomEnvironmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCustomEnvironmentRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateCustomEnvironmentRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CreateCustomEnvironmentRequest$outboundSchema: z.ZodType<CreateCustomEnvironmentRequest$Outbound, z.ZodTypeDef, CreateCustomEnvironmentRequest>;
export declare function createCustomEnvironmentRequestToJSON(createCustomEnvironmentRequest: CreateCustomEnvironmentRequest): string;
export declare function createCustomEnvironmentRequestFromJSON(jsonString: string): SafeParseResult<CreateCustomEnvironmentRequest, SDKValidationError>;
/** @internal */
export declare const CreateCustomEnvironmentEnvironmentType$inboundSchema: z.ZodNativeEnum<typeof CreateCustomEnvironmentEnvironmentType>;
/** @internal */
export declare const CreateCustomEnvironmentEnvironmentType$outboundSchema: z.ZodNativeEnum<typeof CreateCustomEnvironmentEnvironmentType>;
/** @internal */
export declare const CreateCustomEnvironmentEnvironmentResponseType$inboundSchema: z.ZodNativeEnum<typeof CreateCustomEnvironmentEnvironmentResponseType>;
/** @internal */
export declare const CreateCustomEnvironmentEnvironmentResponseType$outboundSchema: z.ZodNativeEnum<typeof CreateCustomEnvironmentEnvironmentResponseType>;
/** @internal */
export declare const CreateCustomEnvironmentEnvironmentBranchMatcher$inboundSchema: z.ZodType<CreateCustomEnvironmentEnvironmentBranchMatcher, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCustomEnvironmentEnvironmentBranchMatcher$Outbound = {
    type: string;
    pattern: string;
};
/** @internal */
export declare const CreateCustomEnvironmentEnvironmentBranchMatcher$outboundSchema: z.ZodType<CreateCustomEnvironmentEnvironmentBranchMatcher$Outbound, z.ZodTypeDef, CreateCustomEnvironmentEnvironmentBranchMatcher>;
export declare function createCustomEnvironmentEnvironmentBranchMatcherToJSON(createCustomEnvironmentEnvironmentBranchMatcher: CreateCustomEnvironmentEnvironmentBranchMatcher): string;
export declare function createCustomEnvironmentEnvironmentBranchMatcherFromJSON(jsonString: string): SafeParseResult<CreateCustomEnvironmentEnvironmentBranchMatcher, SDKValidationError>;
/** @internal */
export declare const CreateCustomEnvironmentVerification$inboundSchema: z.ZodType<CreateCustomEnvironmentVerification, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCustomEnvironmentVerification$Outbound = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/** @internal */
export declare const CreateCustomEnvironmentVerification$outboundSchema: z.ZodType<CreateCustomEnvironmentVerification$Outbound, z.ZodTypeDef, CreateCustomEnvironmentVerification>;
export declare function createCustomEnvironmentVerificationToJSON(createCustomEnvironmentVerification: CreateCustomEnvironmentVerification): string;
export declare function createCustomEnvironmentVerificationFromJSON(jsonString: string): SafeParseResult<CreateCustomEnvironmentVerification, SDKValidationError>;
/** @internal */
export declare const CreateCustomEnvironmentDomains$inboundSchema: z.ZodType<CreateCustomEnvironmentDomains, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCustomEnvironmentDomains$Outbound = {
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
    verification?: Array<CreateCustomEnvironmentVerification$Outbound> | undefined;
};
/** @internal */
export declare const CreateCustomEnvironmentDomains$outboundSchema: z.ZodType<CreateCustomEnvironmentDomains$Outbound, z.ZodTypeDef, CreateCustomEnvironmentDomains>;
export declare function createCustomEnvironmentDomainsToJSON(createCustomEnvironmentDomains: CreateCustomEnvironmentDomains): string;
export declare function createCustomEnvironmentDomainsFromJSON(jsonString: string): SafeParseResult<CreateCustomEnvironmentDomains, SDKValidationError>;
/** @internal */
export declare const CreateCustomEnvironmentResponseBody$inboundSchema: z.ZodType<CreateCustomEnvironmentResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCustomEnvironmentResponseBody$Outbound = {
    id: string;
    slug: string;
    type: string;
    description?: string | undefined;
    branchMatcher?: CreateCustomEnvironmentEnvironmentBranchMatcher$Outbound | undefined;
    domains?: Array<CreateCustomEnvironmentDomains$Outbound> | undefined;
    currentDeploymentAliases?: Array<string> | undefined;
    createdAt: number;
    updatedAt: number;
};
/** @internal */
export declare const CreateCustomEnvironmentResponseBody$outboundSchema: z.ZodType<CreateCustomEnvironmentResponseBody$Outbound, z.ZodTypeDef, CreateCustomEnvironmentResponseBody>;
export declare function createCustomEnvironmentResponseBodyToJSON(createCustomEnvironmentResponseBody: CreateCustomEnvironmentResponseBody): string;
export declare function createCustomEnvironmentResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateCustomEnvironmentResponseBody, SDKValidationError>;
//# sourceMappingURL=createcustomenvironmentop.d.ts.map