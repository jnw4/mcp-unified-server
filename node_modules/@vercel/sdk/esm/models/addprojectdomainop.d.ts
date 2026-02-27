import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Status code for domain redirect
 */
export declare const AddProjectDomainRedirectStatusCode: {
    readonly ThreeHundredAndOne: 301;
    readonly ThreeHundredAndTwo: 302;
    readonly ThreeHundredAndSeven: 307;
    readonly ThreeHundredAndEight: 308;
};
/**
 * Status code for domain redirect
 */
export type AddProjectDomainRedirectStatusCode = ClosedEnum<typeof AddProjectDomainRedirectStatusCode>;
export type AddProjectDomainRequestBody = {
    /**
     * The project domain name
     */
    name: string;
    /**
     * Git branch to link the project domain
     */
    gitBranch?: string | null | undefined;
    /**
     * The unique custom environment identifier within the project
     */
    customEnvironmentId?: string | undefined;
    /**
     * Target destination domain for redirect
     */
    redirect?: string | null | undefined;
    /**
     * Status code for domain redirect
     */
    redirectStatusCode?: AddProjectDomainRedirectStatusCode | null | undefined;
};
export type AddProjectDomainRequest = {
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
    requestBody: AddProjectDomainRequestBody;
};
/**
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type AddProjectDomainVerification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/**
 * The domain was successfully added to the project
 */
export type AddProjectDomainResponseBody = {
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
    verification?: Array<AddProjectDomainVerification> | undefined;
};
/** @internal */
export declare const AddProjectDomainRedirectStatusCode$inboundSchema: z.ZodNativeEnum<typeof AddProjectDomainRedirectStatusCode>;
/** @internal */
export declare const AddProjectDomainRedirectStatusCode$outboundSchema: z.ZodNativeEnum<typeof AddProjectDomainRedirectStatusCode>;
/** @internal */
export declare const AddProjectDomainRequestBody$inboundSchema: z.ZodType<AddProjectDomainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type AddProjectDomainRequestBody$Outbound = {
    name: string;
    gitBranch?: string | null | undefined;
    customEnvironmentId?: string | undefined;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
};
/** @internal */
export declare const AddProjectDomainRequestBody$outboundSchema: z.ZodType<AddProjectDomainRequestBody$Outbound, z.ZodTypeDef, AddProjectDomainRequestBody>;
export declare function addProjectDomainRequestBodyToJSON(addProjectDomainRequestBody: AddProjectDomainRequestBody): string;
export declare function addProjectDomainRequestBodyFromJSON(jsonString: string): SafeParseResult<AddProjectDomainRequestBody, SDKValidationError>;
/** @internal */
export declare const AddProjectDomainRequest$inboundSchema: z.ZodType<AddProjectDomainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AddProjectDomainRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: AddProjectDomainRequestBody$Outbound;
};
/** @internal */
export declare const AddProjectDomainRequest$outboundSchema: z.ZodType<AddProjectDomainRequest$Outbound, z.ZodTypeDef, AddProjectDomainRequest>;
export declare function addProjectDomainRequestToJSON(addProjectDomainRequest: AddProjectDomainRequest): string;
export declare function addProjectDomainRequestFromJSON(jsonString: string): SafeParseResult<AddProjectDomainRequest, SDKValidationError>;
/** @internal */
export declare const AddProjectDomainVerification$inboundSchema: z.ZodType<AddProjectDomainVerification, z.ZodTypeDef, unknown>;
/** @internal */
export type AddProjectDomainVerification$Outbound = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/** @internal */
export declare const AddProjectDomainVerification$outboundSchema: z.ZodType<AddProjectDomainVerification$Outbound, z.ZodTypeDef, AddProjectDomainVerification>;
export declare function addProjectDomainVerificationToJSON(addProjectDomainVerification: AddProjectDomainVerification): string;
export declare function addProjectDomainVerificationFromJSON(jsonString: string): SafeParseResult<AddProjectDomainVerification, SDKValidationError>;
/** @internal */
export declare const AddProjectDomainResponseBody$inboundSchema: z.ZodType<AddProjectDomainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type AddProjectDomainResponseBody$Outbound = {
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
    verification?: Array<AddProjectDomainVerification$Outbound> | undefined;
};
/** @internal */
export declare const AddProjectDomainResponseBody$outboundSchema: z.ZodType<AddProjectDomainResponseBody$Outbound, z.ZodTypeDef, AddProjectDomainResponseBody>;
export declare function addProjectDomainResponseBodyToJSON(addProjectDomainResponseBody: AddProjectDomainResponseBody): string;
export declare function addProjectDomainResponseBodyFromJSON(jsonString: string): SafeParseResult<AddProjectDomainResponseBody, SDKValidationError>;
//# sourceMappingURL=addprojectdomainop.d.ts.map