import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Status code for domain redirect
 */
export declare const MoveProjectDomainRedirectStatusCode: {
    readonly ThreeHundredAndOne: 301;
    readonly ThreeHundredAndTwo: 302;
    readonly ThreeHundredAndSeven: 307;
    readonly ThreeHundredAndEight: 308;
};
/**
 * Status code for domain redirect
 */
export type MoveProjectDomainRedirectStatusCode = ClosedEnum<typeof MoveProjectDomainRedirectStatusCode>;
export type MoveProjectDomainRequestBody = {
    /**
     * The unique target project identifier
     */
    projectId: string;
    /**
     * Git branch to link the project domain
     */
    gitBranch?: string | null | undefined;
    /**
     * Target destination domain for redirect
     */
    redirect?: string | null | undefined;
    /**
     * Status code for domain redirect
     */
    redirectStatusCode?: MoveProjectDomainRedirectStatusCode | null | undefined;
};
export type MoveProjectDomainRequest = {
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
    requestBody?: MoveProjectDomainRequestBody | undefined;
};
/**
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type MoveProjectDomainVerification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/**
 * The domain was updated successfuly
 */
export type MoveProjectDomainResponseBody = {
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
    verification?: Array<MoveProjectDomainVerification> | undefined;
};
/** @internal */
export declare const MoveProjectDomainRedirectStatusCode$inboundSchema: z.ZodNativeEnum<typeof MoveProjectDomainRedirectStatusCode>;
/** @internal */
export declare const MoveProjectDomainRedirectStatusCode$outboundSchema: z.ZodNativeEnum<typeof MoveProjectDomainRedirectStatusCode>;
/** @internal */
export declare const MoveProjectDomainRequestBody$inboundSchema: z.ZodType<MoveProjectDomainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type MoveProjectDomainRequestBody$Outbound = {
    projectId: string;
    gitBranch?: string | null | undefined;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
};
/** @internal */
export declare const MoveProjectDomainRequestBody$outboundSchema: z.ZodType<MoveProjectDomainRequestBody$Outbound, z.ZodTypeDef, MoveProjectDomainRequestBody>;
export declare function moveProjectDomainRequestBodyToJSON(moveProjectDomainRequestBody: MoveProjectDomainRequestBody): string;
export declare function moveProjectDomainRequestBodyFromJSON(jsonString: string): SafeParseResult<MoveProjectDomainRequestBody, SDKValidationError>;
/** @internal */
export declare const MoveProjectDomainRequest$inboundSchema: z.ZodType<MoveProjectDomainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type MoveProjectDomainRequest$Outbound = {
    idOrName: string;
    domain: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: MoveProjectDomainRequestBody$Outbound | undefined;
};
/** @internal */
export declare const MoveProjectDomainRequest$outboundSchema: z.ZodType<MoveProjectDomainRequest$Outbound, z.ZodTypeDef, MoveProjectDomainRequest>;
export declare function moveProjectDomainRequestToJSON(moveProjectDomainRequest: MoveProjectDomainRequest): string;
export declare function moveProjectDomainRequestFromJSON(jsonString: string): SafeParseResult<MoveProjectDomainRequest, SDKValidationError>;
/** @internal */
export declare const MoveProjectDomainVerification$inboundSchema: z.ZodType<MoveProjectDomainVerification, z.ZodTypeDef, unknown>;
/** @internal */
export type MoveProjectDomainVerification$Outbound = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};
/** @internal */
export declare const MoveProjectDomainVerification$outboundSchema: z.ZodType<MoveProjectDomainVerification$Outbound, z.ZodTypeDef, MoveProjectDomainVerification>;
export declare function moveProjectDomainVerificationToJSON(moveProjectDomainVerification: MoveProjectDomainVerification): string;
export declare function moveProjectDomainVerificationFromJSON(jsonString: string): SafeParseResult<MoveProjectDomainVerification, SDKValidationError>;
/** @internal */
export declare const MoveProjectDomainResponseBody$inboundSchema: z.ZodType<MoveProjectDomainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type MoveProjectDomainResponseBody$Outbound = {
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
    verification?: Array<MoveProjectDomainVerification$Outbound> | undefined;
};
/** @internal */
export declare const MoveProjectDomainResponseBody$outboundSchema: z.ZodType<MoveProjectDomainResponseBody$Outbound, z.ZodTypeDef, MoveProjectDomainResponseBody>;
export declare function moveProjectDomainResponseBodyToJSON(moveProjectDomainResponseBody: MoveProjectDomainResponseBody): string;
export declare function moveProjectDomainResponseBodyFromJSON(jsonString: string): SafeParseResult<MoveProjectDomainResponseBody, SDKValidationError>;
//# sourceMappingURL=moveprojectdomainop.d.ts.map