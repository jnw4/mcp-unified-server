import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
 */
export declare const UpdateCustomEnvironmentType: {
    readonly Equals: "equals";
    readonly StartsWith: "startsWith";
    readonly EndsWith: "endsWith";
};
/**
 * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
 */
export type UpdateCustomEnvironmentType = ClosedEnum<typeof UpdateCustomEnvironmentType>;
/**
 * How we want to determine a matching branch. This is optional.
 */
export type UpdateCustomEnvironmentBranchMatcher = {
    /**
     * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
     */
    type: UpdateCustomEnvironmentType;
    /**
     * Git branch name or portion thereof.
     */
    pattern: string;
};
export type UpdateCustomEnvironmentRequestBody = {
    /**
     * The slug of the custom environment.
     */
    slug?: string | undefined;
    /**
     * Description of the custom environment. This is optional.
     */
    description?: string | undefined;
    /**
     * How we want to determine a matching branch. This is optional.
     */
    branchMatcher?: UpdateCustomEnvironmentBranchMatcher | null | undefined;
};
export type UpdateCustomEnvironmentRequest = {
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
    requestBody?: UpdateCustomEnvironmentRequestBody | undefined;
};
/**
 * The type of environment (production, preview, or development)
 */
export declare const UpdateCustomEnvironmentEnvironmentType: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
/**
 * The type of environment (production, preview, or development)
 */
export type UpdateCustomEnvironmentEnvironmentType = ClosedEnum<typeof UpdateCustomEnvironmentEnvironmentType>;
/**
 * The type of matching to perform
 */
export declare const UpdateCustomEnvironmentEnvironmentResponseType: {
    readonly EndsWith: "endsWith";
    readonly StartsWith: "startsWith";
    readonly Equals: "equals";
};
/**
 * The type of matching to perform
 */
export type UpdateCustomEnvironmentEnvironmentResponseType = ClosedEnum<typeof UpdateCustomEnvironmentEnvironmentResponseType>;
/**
 * Configuration for matching git branches to this environment
 */
export type UpdateCustomEnvironmentEnvironmentBranchMatcher = {
    /**
     * The type of matching to perform
     */
    type: UpdateCustomEnvironmentEnvironmentResponseType;
    /**
     * The pattern to match against branch names
     */
    pattern: string;
};
/**
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type UpdateCustomEnvironmentVerification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/**
 * List of domains associated with this environment
 */
export type UpdateCustomEnvironmentDomains = {
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
    verification?: Array<UpdateCustomEnvironmentVerification> | undefined;
};
/**
 * Internal representation of a custom environment with all required properties
 */
export type UpdateCustomEnvironmentResponseBody = {
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
    type: UpdateCustomEnvironmentEnvironmentType;
    /**
     * Optional description of the environment's purpose
     */
    description?: string | undefined;
    /**
     * Configuration for matching git branches to this environment
     */
    branchMatcher?: UpdateCustomEnvironmentEnvironmentBranchMatcher | undefined;
    /**
     * List of domains associated with this environment
     */
    domains?: Array<UpdateCustomEnvironmentDomains> | undefined;
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
export declare const UpdateCustomEnvironmentType$inboundSchema: z.ZodNativeEnum<typeof UpdateCustomEnvironmentType>;
/** @internal */
export declare const UpdateCustomEnvironmentType$outboundSchema: z.ZodNativeEnum<typeof UpdateCustomEnvironmentType>;
/** @internal */
export declare const UpdateCustomEnvironmentBranchMatcher$inboundSchema: z.ZodType<UpdateCustomEnvironmentBranchMatcher, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCustomEnvironmentBranchMatcher$Outbound = {
    type: string;
    pattern: string;
};
/** @internal */
export declare const UpdateCustomEnvironmentBranchMatcher$outboundSchema: z.ZodType<UpdateCustomEnvironmentBranchMatcher$Outbound, z.ZodTypeDef, UpdateCustomEnvironmentBranchMatcher>;
export declare function updateCustomEnvironmentBranchMatcherToJSON(updateCustomEnvironmentBranchMatcher: UpdateCustomEnvironmentBranchMatcher): string;
export declare function updateCustomEnvironmentBranchMatcherFromJSON(jsonString: string): SafeParseResult<UpdateCustomEnvironmentBranchMatcher, SDKValidationError>;
/** @internal */
export declare const UpdateCustomEnvironmentRequestBody$inboundSchema: z.ZodType<UpdateCustomEnvironmentRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCustomEnvironmentRequestBody$Outbound = {
    slug?: string | undefined;
    description?: string | undefined;
    branchMatcher?: UpdateCustomEnvironmentBranchMatcher$Outbound | null | undefined;
};
/** @internal */
export declare const UpdateCustomEnvironmentRequestBody$outboundSchema: z.ZodType<UpdateCustomEnvironmentRequestBody$Outbound, z.ZodTypeDef, UpdateCustomEnvironmentRequestBody>;
export declare function updateCustomEnvironmentRequestBodyToJSON(updateCustomEnvironmentRequestBody: UpdateCustomEnvironmentRequestBody): string;
export declare function updateCustomEnvironmentRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateCustomEnvironmentRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateCustomEnvironmentRequest$inboundSchema: z.ZodType<UpdateCustomEnvironmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCustomEnvironmentRequest$Outbound = {
    idOrName: string;
    environmentSlugOrId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateCustomEnvironmentRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateCustomEnvironmentRequest$outboundSchema: z.ZodType<UpdateCustomEnvironmentRequest$Outbound, z.ZodTypeDef, UpdateCustomEnvironmentRequest>;
export declare function updateCustomEnvironmentRequestToJSON(updateCustomEnvironmentRequest: UpdateCustomEnvironmentRequest): string;
export declare function updateCustomEnvironmentRequestFromJSON(jsonString: string): SafeParseResult<UpdateCustomEnvironmentRequest, SDKValidationError>;
/** @internal */
export declare const UpdateCustomEnvironmentEnvironmentType$inboundSchema: z.ZodNativeEnum<typeof UpdateCustomEnvironmentEnvironmentType>;
/** @internal */
export declare const UpdateCustomEnvironmentEnvironmentType$outboundSchema: z.ZodNativeEnum<typeof UpdateCustomEnvironmentEnvironmentType>;
/** @internal */
export declare const UpdateCustomEnvironmentEnvironmentResponseType$inboundSchema: z.ZodNativeEnum<typeof UpdateCustomEnvironmentEnvironmentResponseType>;
/** @internal */
export declare const UpdateCustomEnvironmentEnvironmentResponseType$outboundSchema: z.ZodNativeEnum<typeof UpdateCustomEnvironmentEnvironmentResponseType>;
/** @internal */
export declare const UpdateCustomEnvironmentEnvironmentBranchMatcher$inboundSchema: z.ZodType<UpdateCustomEnvironmentEnvironmentBranchMatcher, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCustomEnvironmentEnvironmentBranchMatcher$Outbound = {
    type: string;
    pattern: string;
};
/** @internal */
export declare const UpdateCustomEnvironmentEnvironmentBranchMatcher$outboundSchema: z.ZodType<UpdateCustomEnvironmentEnvironmentBranchMatcher$Outbound, z.ZodTypeDef, UpdateCustomEnvironmentEnvironmentBranchMatcher>;
export declare function updateCustomEnvironmentEnvironmentBranchMatcherToJSON(updateCustomEnvironmentEnvironmentBranchMatcher: UpdateCustomEnvironmentEnvironmentBranchMatcher): string;
export declare function updateCustomEnvironmentEnvironmentBranchMatcherFromJSON(jsonString: string): SafeParseResult<UpdateCustomEnvironmentEnvironmentBranchMatcher, SDKValidationError>;
/** @internal */
export declare const UpdateCustomEnvironmentVerification$inboundSchema: z.ZodType<UpdateCustomEnvironmentVerification, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCustomEnvironmentVerification$Outbound = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/** @internal */
export declare const UpdateCustomEnvironmentVerification$outboundSchema: z.ZodType<UpdateCustomEnvironmentVerification$Outbound, z.ZodTypeDef, UpdateCustomEnvironmentVerification>;
export declare function updateCustomEnvironmentVerificationToJSON(updateCustomEnvironmentVerification: UpdateCustomEnvironmentVerification): string;
export declare function updateCustomEnvironmentVerificationFromJSON(jsonString: string): SafeParseResult<UpdateCustomEnvironmentVerification, SDKValidationError>;
/** @internal */
export declare const UpdateCustomEnvironmentDomains$inboundSchema: z.ZodType<UpdateCustomEnvironmentDomains, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCustomEnvironmentDomains$Outbound = {
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
    verification?: Array<UpdateCustomEnvironmentVerification$Outbound> | undefined;
};
/** @internal */
export declare const UpdateCustomEnvironmentDomains$outboundSchema: z.ZodType<UpdateCustomEnvironmentDomains$Outbound, z.ZodTypeDef, UpdateCustomEnvironmentDomains>;
export declare function updateCustomEnvironmentDomainsToJSON(updateCustomEnvironmentDomains: UpdateCustomEnvironmentDomains): string;
export declare function updateCustomEnvironmentDomainsFromJSON(jsonString: string): SafeParseResult<UpdateCustomEnvironmentDomains, SDKValidationError>;
/** @internal */
export declare const UpdateCustomEnvironmentResponseBody$inboundSchema: z.ZodType<UpdateCustomEnvironmentResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCustomEnvironmentResponseBody$Outbound = {
    id: string;
    slug: string;
    type: string;
    description?: string | undefined;
    branchMatcher?: UpdateCustomEnvironmentEnvironmentBranchMatcher$Outbound | undefined;
    domains?: Array<UpdateCustomEnvironmentDomains$Outbound> | undefined;
    currentDeploymentAliases?: Array<string> | undefined;
    createdAt: number;
    updatedAt: number;
};
/** @internal */
export declare const UpdateCustomEnvironmentResponseBody$outboundSchema: z.ZodType<UpdateCustomEnvironmentResponseBody$Outbound, z.ZodTypeDef, UpdateCustomEnvironmentResponseBody>;
export declare function updateCustomEnvironmentResponseBodyToJSON(updateCustomEnvironmentResponseBody: UpdateCustomEnvironmentResponseBody): string;
export declare function updateCustomEnvironmentResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateCustomEnvironmentResponseBody, SDKValidationError>;
//# sourceMappingURL=updatecustomenvironmentop.d.ts.map