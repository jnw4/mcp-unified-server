import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type Utm = {
    /**
     * UTM source
     */
    utmSource?: string | undefined;
    /**
     * UTM medium
     */
    utmMedium?: string | undefined;
    /**
     * UTM campaign
     */
    utmCampaign?: string | undefined;
    /**
     * UTM term
     */
    utmTerm?: string | undefined;
};
/**
 * Attribution information for the session or current page
 */
export type Attribution = {
    /**
     * Session referrer
     */
    sessionReferrer?: string | undefined;
    /**
     * Session landing page
     */
    landingPage?: string | undefined;
    /**
     * Referrer to the signup page
     */
    pageBeforeConversionPage?: string | undefined;
    utm?: Utm | undefined;
};
export type CreateTeamRequestBody = {
    /**
     * The desired slug for the Team
     */
    slug: string;
    /**
     * The desired name for the Team. It will be generated from the provided slug if nothing is provided
     */
    name?: string | undefined;
    /**
     * Attribution information for the session or current page
     */
    attribution?: Attribution | undefined;
};
/**
 * The team was created successfully
 */
export type CreateTeamResponseBody = {
    /**
     * Id of the created team
     */
    id: string;
    slug: string;
};
/** @internal */
export declare const Utm$inboundSchema: z.ZodType<Utm, z.ZodTypeDef, unknown>;
/** @internal */
export type Utm$Outbound = {
    utmSource?: string | undefined;
    utmMedium?: string | undefined;
    utmCampaign?: string | undefined;
    utmTerm?: string | undefined;
};
/** @internal */
export declare const Utm$outboundSchema: z.ZodType<Utm$Outbound, z.ZodTypeDef, Utm>;
export declare function utmToJSON(utm: Utm): string;
export declare function utmFromJSON(jsonString: string): SafeParseResult<Utm, SDKValidationError>;
/** @internal */
export declare const Attribution$inboundSchema: z.ZodType<Attribution, z.ZodTypeDef, unknown>;
/** @internal */
export type Attribution$Outbound = {
    sessionReferrer?: string | undefined;
    landingPage?: string | undefined;
    pageBeforeConversionPage?: string | undefined;
    utm?: Utm$Outbound | undefined;
};
/** @internal */
export declare const Attribution$outboundSchema: z.ZodType<Attribution$Outbound, z.ZodTypeDef, Attribution>;
export declare function attributionToJSON(attribution: Attribution): string;
export declare function attributionFromJSON(jsonString: string): SafeParseResult<Attribution, SDKValidationError>;
/** @internal */
export declare const CreateTeamRequestBody$inboundSchema: z.ZodType<CreateTeamRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateTeamRequestBody$Outbound = {
    slug: string;
    name?: string | undefined;
    attribution?: Attribution$Outbound | undefined;
};
/** @internal */
export declare const CreateTeamRequestBody$outboundSchema: z.ZodType<CreateTeamRequestBody$Outbound, z.ZodTypeDef, CreateTeamRequestBody>;
export declare function createTeamRequestBodyToJSON(createTeamRequestBody: CreateTeamRequestBody): string;
export declare function createTeamRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateTeamRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateTeamResponseBody$inboundSchema: z.ZodType<CreateTeamResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateTeamResponseBody$Outbound = {
    id: string;
    slug: string;
};
/** @internal */
export declare const CreateTeamResponseBody$outboundSchema: z.ZodType<CreateTeamResponseBody$Outbound, z.ZodTypeDef, CreateTeamResponseBody>;
export declare function createTeamResponseBodyToJSON(createTeamResponseBody: CreateTeamResponseBody): string;
export declare function createTeamResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateTeamResponseBody, SDKValidationError>;
//# sourceMappingURL=createteamop.d.ts.map