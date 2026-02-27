import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type PatchTeamRoles2 = {
    accessGroupId: string;
};
export declare const PatchTeamRoles1: {
    readonly Owner: "OWNER";
    readonly Member: "MEMBER";
    readonly Developer: "DEVELOPER";
    readonly Security: "SECURITY";
    readonly Billing: "BILLING";
    readonly Viewer: "VIEWER";
    readonly ViewerForPlus: "VIEWER_FOR_PLUS";
    readonly Contributor: "CONTRIBUTOR";
};
export type PatchTeamRoles1 = ClosedEnum<typeof PatchTeamRoles1>;
export type PatchTeamRoles = PatchTeamRoles2 | PatchTeamRoles1;
export type PatchTeamSaml = {
    /**
     * Require that members of the team use SAML Single Sign-On.
     */
    enforced?: boolean | undefined;
    /**
     * Directory groups to role or access group mappings.
     */
    roles?: {
        [k: string]: PatchTeamRoles2 | PatchTeamRoles1;
    } | undefined;
};
/**
 * Whether or not remote caching is enabled for the team
 */
export type PatchTeamRemoteCaching = {
    /**
     * Enable or disable remote caching for the team.
     */
    enabled?: boolean | undefined;
};
/**
 * Specify if the password will apply to every Deployment Target or just Preview
 */
export declare const PatchTeamDeploymentType: {
    readonly All: "all";
    readonly Preview: "preview";
    readonly ProdDeploymentUrlsAndAllPreviews: "prod_deployment_urls_and_all_previews";
    readonly AllExceptCustomDomains: "all_except_custom_domains";
};
/**
 * Specify if the password will apply to every Deployment Target or just Preview
 */
export type PatchTeamDeploymentType = ClosedEnum<typeof PatchTeamDeploymentType>;
/**
 * Allows to protect project deployments with a password
 */
export type PatchTeamPasswordProtection = {
    /**
     * Specify if the password will apply to every Deployment Target or just Preview
     */
    deploymentType: PatchTeamDeploymentType;
    /**
     * The password that will be used to protect Project Deployments
     */
    password?: string | null | undefined;
};
/**
 * Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview
 */
export declare const PatchTeamTeamsDeploymentType: {
    readonly All: "all";
    readonly Preview: "preview";
    readonly ProdDeploymentUrlsAndAllPreviews: "prod_deployment_urls_and_all_previews";
    readonly AllExceptCustomDomains: "all_except_custom_domains";
};
/**
 * Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview
 */
export type PatchTeamTeamsDeploymentType = ClosedEnum<typeof PatchTeamTeamsDeploymentType>;
/**
 * Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team
 */
export type PatchTeamSsoProtection = {
    /**
     * Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview
     */
    deploymentType?: PatchTeamTeamsDeploymentType | undefined;
};
/**
 * Default deployment protection settings for new projects.
 */
export type PatchTeamDefaultDeploymentProtection = {
    /**
     * Allows to protect project deployments with a password
     */
    passwordProtection?: PatchTeamPasswordProtection | null | undefined;
    /**
     * Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team
     */
    ssoProtection?: PatchTeamSsoProtection | null | undefined;
};
/**
 * The time period to keep non-production deployments for
 */
export declare const Expiration: {
    readonly Threey: "3y";
    readonly Twoy: "2y";
    readonly Oney: "1y";
    readonly Sixm: "6m";
    readonly Threem: "3m";
    readonly Twom: "2m";
    readonly Onem: "1m";
    readonly Twow: "2w";
    readonly Onew: "1w";
    readonly Oned: "1d";
    readonly Unlimited: "unlimited";
};
/**
 * The time period to keep non-production deployments for
 */
export type Expiration = ClosedEnum<typeof Expiration>;
/**
 * The time period to keep production deployments for
 */
export declare const ExpirationProduction: {
    readonly Threey: "3y";
    readonly Twoy: "2y";
    readonly Oney: "1y";
    readonly Sixm: "6m";
    readonly Threem: "3m";
    readonly Twom: "2m";
    readonly Onem: "1m";
    readonly Twow: "2w";
    readonly Onew: "1w";
    readonly Oned: "1d";
    readonly Unlimited: "unlimited";
};
/**
 * The time period to keep production deployments for
 */
export type ExpirationProduction = ClosedEnum<typeof ExpirationProduction>;
/**
 * The time period to keep canceled deployments for
 */
export declare const ExpirationCanceled: {
    readonly Oney: "1y";
    readonly Sixm: "6m";
    readonly Threem: "3m";
    readonly Twom: "2m";
    readonly Onem: "1m";
    readonly Twow: "2w";
    readonly Onew: "1w";
    readonly Oned: "1d";
    readonly Unlimited: "unlimited";
};
/**
 * The time period to keep canceled deployments for
 */
export type ExpirationCanceled = ClosedEnum<typeof ExpirationCanceled>;
/**
 * The time period to keep errored deployments for
 */
export declare const ExpirationErrored: {
    readonly Oney: "1y";
    readonly Sixm: "6m";
    readonly Threem: "3m";
    readonly Twom: "2m";
    readonly Onem: "1m";
    readonly Twow: "2w";
    readonly Onew: "1w";
    readonly Oned: "1d";
    readonly Unlimited: "unlimited";
};
/**
 * The time period to keep errored deployments for
 */
export type ExpirationErrored = ClosedEnum<typeof ExpirationErrored>;
export type PatchTeamDefaultExpirationSettings = {
    /**
     * The time period to keep non-production deployments for
     */
    expiration?: Expiration | undefined;
    /**
     * The time period to keep production deployments for
     */
    expirationProduction?: ExpirationProduction | undefined;
    /**
     * The time period to keep canceled deployments for
     */
    expirationCanceled?: ExpirationCanceled | undefined;
    /**
     * The time period to keep errored deployments for
     */
    expirationErrored?: ExpirationErrored | undefined;
};
/**
 * When enabled, deployment protection settings require stricter permissions (owner-only).
 */
export type PatchTeamStrictDeploymentProtectionSettings = {
    /**
     * Enable or disable strict deployment protection settings.
     */
    enabled: boolean;
};
/**
 * The NSNB preference for the team.
 */
export declare const NsnbConfigPreference: {
    readonly AutoApproval: "auto-approval";
    readonly ManualApproval: "manual-approval";
    readonly Block: "block";
};
/**
 * The NSNB preference for the team.
 */
export type NsnbConfigPreference = ClosedEnum<typeof NsnbConfigPreference>;
/**
 * NSNB configuration for the team.
 */
export type NsnbConfig1 = {
    /**
     * The NSNB preference for the team.
     */
    preference: NsnbConfigPreference;
};
export type PatchTeamNsnbConfig = NsnbConfig1 | string;
/**
 * Default build machine type for new builds: standard, enhanced, or turbo.
 */
export declare const PatchTeamDefault: {
    readonly Standard: "standard";
    readonly Enhanced: "enhanced";
    readonly Turbo: "turbo";
};
/**
 * Default build machine type for new builds: standard, enhanced, or turbo.
 */
export type PatchTeamDefault = ClosedEnum<typeof PatchTeamDefault>;
/**
 * Build machine configuration.
 */
export type PatchTeamBuildMachine = {
    /**
     * Default build machine type for new builds: standard, enhanced, or turbo.
     */
    default?: PatchTeamDefault | undefined;
};
/**
 * Resource configuration for the team.
 */
export type PatchTeamResourceConfig = {
    /**
     * Build machine configuration.
     */
    buildMachine?: PatchTeamBuildMachine | undefined;
};
export type PatchTeamRequestBody = {
    /**
     * The hash value of an uploaded image.
     */
    avatar?: string | undefined;
    /**
     * A short text that describes the team.
     */
    description?: string | undefined;
    emailDomain?: string | null | undefined;
    /**
     * The name of the team.
     */
    name?: string | undefined;
    /**
     * Suffix that will be used for all preview deployments.
     */
    previewDeploymentSuffix?: string | null | undefined;
    /**
     * Create a new invite code and replace the current one.
     */
    regenerateInviteCode?: boolean | undefined;
    saml?: PatchTeamSaml | undefined;
    /**
     * A new slug for the team.
     */
    slug?: string | undefined;
    /**
     * Enable preview toolbar: one of on, off or default.
     */
    enablePreviewFeedback?: string | undefined;
    /**
     * Enable production toolbar: one of on, off or default.
     */
    enableProductionFeedback?: string | undefined;
    /**
     * Sensitive environment variable policy: one of on, off or default.
     */
    sensitiveEnvironmentVariablePolicy?: string | undefined;
    /**
     * Whether or not remote caching is enabled for the team
     */
    remoteCaching?: PatchTeamRemoteCaching | undefined;
    /**
     * Display or hide IP addresses in Monitoring queries.
     */
    hideIpAddresses?: boolean | undefined;
    /**
     * Display or hide IP addresses in Log Drains.
     */
    hideIpAddressesInLogDrains?: boolean | undefined;
    /**
     * Default deployment protection settings for new projects.
     */
    defaultDeploymentProtection?: PatchTeamDefaultDeploymentProtection | undefined;
    defaultExpirationSettings?: PatchTeamDefaultExpirationSettings | undefined;
    /**
     * When enabled, deployment protection settings require stricter permissions (owner-only).
     */
    strictDeploymentProtectionSettings?: PatchTeamStrictDeploymentProtectionSettings | undefined;
    nsnbConfig?: NsnbConfig1 | string | undefined;
    /**
     * Resource configuration for the team.
     */
    resourceConfig?: PatchTeamResourceConfig | undefined;
};
export type PatchTeamRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId: string;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: PatchTeamRequestBody;
};
/** @internal */
export declare const PatchTeamRoles2$inboundSchema: z.ZodType<PatchTeamRoles2, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamRoles2$Outbound = {
    accessGroupId: string;
};
/** @internal */
export declare const PatchTeamRoles2$outboundSchema: z.ZodType<PatchTeamRoles2$Outbound, z.ZodTypeDef, PatchTeamRoles2>;
export declare function patchTeamRoles2ToJSON(patchTeamRoles2: PatchTeamRoles2): string;
export declare function patchTeamRoles2FromJSON(jsonString: string): SafeParseResult<PatchTeamRoles2, SDKValidationError>;
/** @internal */
export declare const PatchTeamRoles1$inboundSchema: z.ZodNativeEnum<typeof PatchTeamRoles1>;
/** @internal */
export declare const PatchTeamRoles1$outboundSchema: z.ZodNativeEnum<typeof PatchTeamRoles1>;
/** @internal */
export declare const PatchTeamRoles$inboundSchema: z.ZodType<PatchTeamRoles, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamRoles$Outbound = PatchTeamRoles2$Outbound | string;
/** @internal */
export declare const PatchTeamRoles$outboundSchema: z.ZodType<PatchTeamRoles$Outbound, z.ZodTypeDef, PatchTeamRoles>;
export declare function patchTeamRolesToJSON(patchTeamRoles: PatchTeamRoles): string;
export declare function patchTeamRolesFromJSON(jsonString: string): SafeParseResult<PatchTeamRoles, SDKValidationError>;
/** @internal */
export declare const PatchTeamSaml$inboundSchema: z.ZodType<PatchTeamSaml, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamSaml$Outbound = {
    enforced?: boolean | undefined;
    roles?: {
        [k: string]: PatchTeamRoles2$Outbound | string;
    } | undefined;
};
/** @internal */
export declare const PatchTeamSaml$outboundSchema: z.ZodType<PatchTeamSaml$Outbound, z.ZodTypeDef, PatchTeamSaml>;
export declare function patchTeamSamlToJSON(patchTeamSaml: PatchTeamSaml): string;
export declare function patchTeamSamlFromJSON(jsonString: string): SafeParseResult<PatchTeamSaml, SDKValidationError>;
/** @internal */
export declare const PatchTeamRemoteCaching$inboundSchema: z.ZodType<PatchTeamRemoteCaching, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamRemoteCaching$Outbound = {
    enabled?: boolean | undefined;
};
/** @internal */
export declare const PatchTeamRemoteCaching$outboundSchema: z.ZodType<PatchTeamRemoteCaching$Outbound, z.ZodTypeDef, PatchTeamRemoteCaching>;
export declare function patchTeamRemoteCachingToJSON(patchTeamRemoteCaching: PatchTeamRemoteCaching): string;
export declare function patchTeamRemoteCachingFromJSON(jsonString: string): SafeParseResult<PatchTeamRemoteCaching, SDKValidationError>;
/** @internal */
export declare const PatchTeamDeploymentType$inboundSchema: z.ZodNativeEnum<typeof PatchTeamDeploymentType>;
/** @internal */
export declare const PatchTeamDeploymentType$outboundSchema: z.ZodNativeEnum<typeof PatchTeamDeploymentType>;
/** @internal */
export declare const PatchTeamPasswordProtection$inboundSchema: z.ZodType<PatchTeamPasswordProtection, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamPasswordProtection$Outbound = {
    deploymentType: string;
    password?: string | null | undefined;
};
/** @internal */
export declare const PatchTeamPasswordProtection$outboundSchema: z.ZodType<PatchTeamPasswordProtection$Outbound, z.ZodTypeDef, PatchTeamPasswordProtection>;
export declare function patchTeamPasswordProtectionToJSON(patchTeamPasswordProtection: PatchTeamPasswordProtection): string;
export declare function patchTeamPasswordProtectionFromJSON(jsonString: string): SafeParseResult<PatchTeamPasswordProtection, SDKValidationError>;
/** @internal */
export declare const PatchTeamTeamsDeploymentType$inboundSchema: z.ZodNativeEnum<typeof PatchTeamTeamsDeploymentType>;
/** @internal */
export declare const PatchTeamTeamsDeploymentType$outboundSchema: z.ZodNativeEnum<typeof PatchTeamTeamsDeploymentType>;
/** @internal */
export declare const PatchTeamSsoProtection$inboundSchema: z.ZodType<PatchTeamSsoProtection, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamSsoProtection$Outbound = {
    deploymentType: string;
};
/** @internal */
export declare const PatchTeamSsoProtection$outboundSchema: z.ZodType<PatchTeamSsoProtection$Outbound, z.ZodTypeDef, PatchTeamSsoProtection>;
export declare function patchTeamSsoProtectionToJSON(patchTeamSsoProtection: PatchTeamSsoProtection): string;
export declare function patchTeamSsoProtectionFromJSON(jsonString: string): SafeParseResult<PatchTeamSsoProtection, SDKValidationError>;
/** @internal */
export declare const PatchTeamDefaultDeploymentProtection$inboundSchema: z.ZodType<PatchTeamDefaultDeploymentProtection, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamDefaultDeploymentProtection$Outbound = {
    passwordProtection?: PatchTeamPasswordProtection$Outbound | null | undefined;
    ssoProtection?: PatchTeamSsoProtection$Outbound | null | undefined;
};
/** @internal */
export declare const PatchTeamDefaultDeploymentProtection$outboundSchema: z.ZodType<PatchTeamDefaultDeploymentProtection$Outbound, z.ZodTypeDef, PatchTeamDefaultDeploymentProtection>;
export declare function patchTeamDefaultDeploymentProtectionToJSON(patchTeamDefaultDeploymentProtection: PatchTeamDefaultDeploymentProtection): string;
export declare function patchTeamDefaultDeploymentProtectionFromJSON(jsonString: string): SafeParseResult<PatchTeamDefaultDeploymentProtection, SDKValidationError>;
/** @internal */
export declare const Expiration$inboundSchema: z.ZodNativeEnum<typeof Expiration>;
/** @internal */
export declare const Expiration$outboundSchema: z.ZodNativeEnum<typeof Expiration>;
/** @internal */
export declare const ExpirationProduction$inboundSchema: z.ZodNativeEnum<typeof ExpirationProduction>;
/** @internal */
export declare const ExpirationProduction$outboundSchema: z.ZodNativeEnum<typeof ExpirationProduction>;
/** @internal */
export declare const ExpirationCanceled$inboundSchema: z.ZodNativeEnum<typeof ExpirationCanceled>;
/** @internal */
export declare const ExpirationCanceled$outboundSchema: z.ZodNativeEnum<typeof ExpirationCanceled>;
/** @internal */
export declare const ExpirationErrored$inboundSchema: z.ZodNativeEnum<typeof ExpirationErrored>;
/** @internal */
export declare const ExpirationErrored$outboundSchema: z.ZodNativeEnum<typeof ExpirationErrored>;
/** @internal */
export declare const PatchTeamDefaultExpirationSettings$inboundSchema: z.ZodType<PatchTeamDefaultExpirationSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamDefaultExpirationSettings$Outbound = {
    expiration?: string | undefined;
    expirationProduction?: string | undefined;
    expirationCanceled?: string | undefined;
    expirationErrored?: string | undefined;
};
/** @internal */
export declare const PatchTeamDefaultExpirationSettings$outboundSchema: z.ZodType<PatchTeamDefaultExpirationSettings$Outbound, z.ZodTypeDef, PatchTeamDefaultExpirationSettings>;
export declare function patchTeamDefaultExpirationSettingsToJSON(patchTeamDefaultExpirationSettings: PatchTeamDefaultExpirationSettings): string;
export declare function patchTeamDefaultExpirationSettingsFromJSON(jsonString: string): SafeParseResult<PatchTeamDefaultExpirationSettings, SDKValidationError>;
/** @internal */
export declare const PatchTeamStrictDeploymentProtectionSettings$inboundSchema: z.ZodType<PatchTeamStrictDeploymentProtectionSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamStrictDeploymentProtectionSettings$Outbound = {
    enabled: boolean;
};
/** @internal */
export declare const PatchTeamStrictDeploymentProtectionSettings$outboundSchema: z.ZodType<PatchTeamStrictDeploymentProtectionSettings$Outbound, z.ZodTypeDef, PatchTeamStrictDeploymentProtectionSettings>;
export declare function patchTeamStrictDeploymentProtectionSettingsToJSON(patchTeamStrictDeploymentProtectionSettings: PatchTeamStrictDeploymentProtectionSettings): string;
export declare function patchTeamStrictDeploymentProtectionSettingsFromJSON(jsonString: string): SafeParseResult<PatchTeamStrictDeploymentProtectionSettings, SDKValidationError>;
/** @internal */
export declare const NsnbConfigPreference$inboundSchema: z.ZodNativeEnum<typeof NsnbConfigPreference>;
/** @internal */
export declare const NsnbConfigPreference$outboundSchema: z.ZodNativeEnum<typeof NsnbConfigPreference>;
/** @internal */
export declare const NsnbConfig1$inboundSchema: z.ZodType<NsnbConfig1, z.ZodTypeDef, unknown>;
/** @internal */
export type NsnbConfig1$Outbound = {
    preference: string;
};
/** @internal */
export declare const NsnbConfig1$outboundSchema: z.ZodType<NsnbConfig1$Outbound, z.ZodTypeDef, NsnbConfig1>;
export declare function nsnbConfig1ToJSON(nsnbConfig1: NsnbConfig1): string;
export declare function nsnbConfig1FromJSON(jsonString: string): SafeParseResult<NsnbConfig1, SDKValidationError>;
/** @internal */
export declare const PatchTeamNsnbConfig$inboundSchema: z.ZodType<PatchTeamNsnbConfig, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamNsnbConfig$Outbound = NsnbConfig1$Outbound | string;
/** @internal */
export declare const PatchTeamNsnbConfig$outboundSchema: z.ZodType<PatchTeamNsnbConfig$Outbound, z.ZodTypeDef, PatchTeamNsnbConfig>;
export declare function patchTeamNsnbConfigToJSON(patchTeamNsnbConfig: PatchTeamNsnbConfig): string;
export declare function patchTeamNsnbConfigFromJSON(jsonString: string): SafeParseResult<PatchTeamNsnbConfig, SDKValidationError>;
/** @internal */
export declare const PatchTeamDefault$inboundSchema: z.ZodNativeEnum<typeof PatchTeamDefault>;
/** @internal */
export declare const PatchTeamDefault$outboundSchema: z.ZodNativeEnum<typeof PatchTeamDefault>;
/** @internal */
export declare const PatchTeamBuildMachine$inboundSchema: z.ZodType<PatchTeamBuildMachine, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamBuildMachine$Outbound = {
    default?: string | undefined;
};
/** @internal */
export declare const PatchTeamBuildMachine$outboundSchema: z.ZodType<PatchTeamBuildMachine$Outbound, z.ZodTypeDef, PatchTeamBuildMachine>;
export declare function patchTeamBuildMachineToJSON(patchTeamBuildMachine: PatchTeamBuildMachine): string;
export declare function patchTeamBuildMachineFromJSON(jsonString: string): SafeParseResult<PatchTeamBuildMachine, SDKValidationError>;
/** @internal */
export declare const PatchTeamResourceConfig$inboundSchema: z.ZodType<PatchTeamResourceConfig, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamResourceConfig$Outbound = {
    buildMachine?: PatchTeamBuildMachine$Outbound | undefined;
};
/** @internal */
export declare const PatchTeamResourceConfig$outboundSchema: z.ZodType<PatchTeamResourceConfig$Outbound, z.ZodTypeDef, PatchTeamResourceConfig>;
export declare function patchTeamResourceConfigToJSON(patchTeamResourceConfig: PatchTeamResourceConfig): string;
export declare function patchTeamResourceConfigFromJSON(jsonString: string): SafeParseResult<PatchTeamResourceConfig, SDKValidationError>;
/** @internal */
export declare const PatchTeamRequestBody$inboundSchema: z.ZodType<PatchTeamRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamRequestBody$Outbound = {
    avatar?: string | undefined;
    description?: string | undefined;
    emailDomain?: string | null | undefined;
    name?: string | undefined;
    previewDeploymentSuffix?: string | null | undefined;
    regenerateInviteCode?: boolean | undefined;
    saml?: PatchTeamSaml$Outbound | undefined;
    slug?: string | undefined;
    enablePreviewFeedback?: string | undefined;
    enableProductionFeedback?: string | undefined;
    sensitiveEnvironmentVariablePolicy?: string | undefined;
    remoteCaching?: PatchTeamRemoteCaching$Outbound | undefined;
    hideIpAddresses?: boolean | undefined;
    hideIpAddressesInLogDrains?: boolean | undefined;
    defaultDeploymentProtection?: PatchTeamDefaultDeploymentProtection$Outbound | undefined;
    defaultExpirationSettings?: PatchTeamDefaultExpirationSettings$Outbound | undefined;
    strictDeploymentProtectionSettings?: PatchTeamStrictDeploymentProtectionSettings$Outbound | undefined;
    nsnbConfig?: NsnbConfig1$Outbound | string | undefined;
    resourceConfig?: PatchTeamResourceConfig$Outbound | undefined;
};
/** @internal */
export declare const PatchTeamRequestBody$outboundSchema: z.ZodType<PatchTeamRequestBody$Outbound, z.ZodTypeDef, PatchTeamRequestBody>;
export declare function patchTeamRequestBodyToJSON(patchTeamRequestBody: PatchTeamRequestBody): string;
export declare function patchTeamRequestBodyFromJSON(jsonString: string): SafeParseResult<PatchTeamRequestBody, SDKValidationError>;
/** @internal */
export declare const PatchTeamRequest$inboundSchema: z.ZodType<PatchTeamRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchTeamRequest$Outbound = {
    teamId: string;
    slug?: string | undefined;
    RequestBody: PatchTeamRequestBody$Outbound;
};
/** @internal */
export declare const PatchTeamRequest$outboundSchema: z.ZodType<PatchTeamRequest$Outbound, z.ZodTypeDef, PatchTeamRequest>;
export declare function patchTeamRequestToJSON(patchTeamRequest: PatchTeamRequest): string;
export declare function patchTeamRequestFromJSON(jsonString: string): SafeParseResult<PatchTeamRequest, SDKValidationError>;
//# sourceMappingURL=patchteamop.d.ts.map