import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetProjectDomainRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The project domain name
     */
    domain: string;
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
export type Verification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
export type GetProjectDomainResponseBody = {
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
    verification?: Array<Verification> | undefined;
};
/** @internal */
export declare const GetProjectDomainRequest$inboundSchema: z.ZodType<GetProjectDomainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectDomainRequest$Outbound = {
    idOrName: string;
    domain: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetProjectDomainRequest$outboundSchema: z.ZodType<GetProjectDomainRequest$Outbound, z.ZodTypeDef, GetProjectDomainRequest>;
export declare function getProjectDomainRequestToJSON(getProjectDomainRequest: GetProjectDomainRequest): string;
export declare function getProjectDomainRequestFromJSON(jsonString: string): SafeParseResult<GetProjectDomainRequest, SDKValidationError>;
/** @internal */
export declare const Verification$inboundSchema: z.ZodType<Verification, z.ZodTypeDef, unknown>;
/** @internal */
export type Verification$Outbound = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/** @internal */
export declare const Verification$outboundSchema: z.ZodType<Verification$Outbound, z.ZodTypeDef, Verification>;
export declare function verificationToJSON(verification: Verification): string;
export declare function verificationFromJSON(jsonString: string): SafeParseResult<Verification, SDKValidationError>;
/** @internal */
export declare const GetProjectDomainResponseBody$inboundSchema: z.ZodType<GetProjectDomainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectDomainResponseBody$Outbound = {
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
    verification?: Array<Verification$Outbound> | undefined;
};
/** @internal */
export declare const GetProjectDomainResponseBody$outboundSchema: z.ZodType<GetProjectDomainResponseBody$Outbound, z.ZodTypeDef, GetProjectDomainResponseBody>;
export declare function getProjectDomainResponseBodyToJSON(getProjectDomainResponseBody: GetProjectDomainResponseBody): string;
export declare function getProjectDomainResponseBodyFromJSON(jsonString: string): SafeParseResult<GetProjectDomainResponseBody, SDKValidationError>;
//# sourceMappingURL=getprojectdomainop.d.ts.map