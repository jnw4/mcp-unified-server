import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const View: {
    readonly Account: "account";
    readonly Project: "project";
};
export type View = ClosedEnum<typeof View>;
export declare const InstallationType: {
    readonly Marketplace: "marketplace";
    readonly External: "external";
    readonly Provisioning: "provisioning";
};
export type InstallationType = ClosedEnum<typeof InstallationType>;
export type GetConfigurationsRequest = {
    view: View;
    installationType?: InstallationType | undefined;
    /**
     * ID of the integration
     */
    integrationIdOrSlug?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const TagIds: {
    readonly TagAgents: "tag_agents";
    readonly TagAi: "tag_ai";
    readonly TagAnalytics: "tag_analytics";
    readonly TagAuthentication: "tag_authentication";
    readonly TagCms: "tag_cms";
    readonly TagCodeRepository: "tag_code_repository";
    readonly TagCodeReview: "tag_code_review";
    readonly TagCodeSecurity: "tag_code_security";
    readonly TagCodeTesting: "tag_code_testing";
    readonly TagCommerce: "tag_commerce";
    readonly TagDatabases: "tag_databases";
    readonly TagDevTools: "tag_dev_tools";
    readonly TagExperimentation: "tag_experimentation";
    readonly TagFlags: "tag_flags";
    readonly TagLogging: "tag_logging";
    readonly TagMessaging: "tag_messaging";
    readonly TagMonitoring: "tag_monitoring";
    readonly TagObservability: "tag_observability";
    readonly TagPayments: "tag_payments";
    readonly TagPerformance: "tag_performance";
    readonly TagProductivity: "tag_productivity";
    readonly TagSearching: "tag_searching";
    readonly TagSecurity: "tag_security";
    readonly TagSupportAgent: "tag_support_agent";
    readonly TagTesting: "tag_testing";
    readonly TagVideo: "tag_video";
    readonly TagWebAutomation: "tag_web_automation";
    readonly TagWorkflow: "tag_workflow";
};
export type TagIds = ClosedEnum<typeof TagIds>;
export type ResponseBodyIntegration = {
    name: string;
    icon: string;
    isLegacy: boolean;
    flags?: Array<string> | undefined;
    assignedBetaLabelAt?: number | undefined;
    tagIds?: Array<TagIds> | undefined;
};
/**
 * The configuration status. Optional. If not defined, assume 'ready'.
 */
export declare const GetConfigurationsResponseBodyIntegrationsStatus: {
    readonly Error: "error";
    readonly Ready: "ready";
    readonly Pending: "pending";
    readonly Onboarding: "onboarding";
    readonly Suspended: "suspended";
    readonly Resumed: "resumed";
    readonly Uninstalled: "uninstalled";
};
/**
 * The configuration status. Optional. If not defined, assume 'ready'.
 */
export type GetConfigurationsResponseBodyIntegrationsStatus = ClosedEnum<typeof GetConfigurationsResponseBodyIntegrationsStatus>;
/**
 * Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
 */
export declare const GetConfigurationsResponseBodyIntegrationsSource: {
    readonly Marketplace: "marketplace";
    readonly DeployButton: "deploy-button";
    readonly External: "external";
    readonly V0: "v0";
    readonly ResourceClaims: "resource-claims";
    readonly Cli: "cli";
    readonly Oauth: "oauth";
    readonly Backoffice: "backoffice";
};
/**
 * Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
 */
export type GetConfigurationsResponseBodyIntegrationsSource = ClosedEnum<typeof GetConfigurationsResponseBodyIntegrationsSource>;
export declare const GetConfigurationsResponseBodyIntegrationsType: {
    readonly IntegrationConfiguration: "integration-configuration";
};
export type GetConfigurationsResponseBodyIntegrationsType = ClosedEnum<typeof GetConfigurationsResponseBodyIntegrationsType>;
export declare const GetConfigurationsResponseBodyIntegrationsDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly DisabledByAdmin: "disabled-by-admin";
    readonly OriginalOwnerLeftTheTeam: "original-owner-left-the-team";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly OriginalOwnerRoleDowngraded: "original-owner-role-downgraded";
};
export type GetConfigurationsResponseBodyIntegrationsDisabledReason = ClosedEnum<typeof GetConfigurationsResponseBodyIntegrationsDisabledReason>;
/**
 * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
 */
export declare const GetConfigurationsResponseBodyInstallationType: {
    readonly Marketplace: "marketplace";
    readonly External: "external";
};
/**
 * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
 */
export type GetConfigurationsResponseBodyInstallationType = ClosedEnum<typeof GetConfigurationsResponseBodyInstallationType>;
export type GetConfigurationsResponseBody2 = {
    integration: ResponseBodyIntegration;
    /**
     * A timestamp that tells you when the configuration was installed successfully
     */
    completedAt?: number | undefined;
    /**
     * A timestamp that tells you when the configuration was created
     */
    createdAt: number;
    /**
     * The unique identifier of the configuration
     */
    id: string;
    /**
     * The unique identifier of the app the configuration was created for
     */
    integrationId: string;
    /**
     * The user or team ID that owns the configuration
     */
    ownerId: string;
    /**
     * The configuration status. Optional. If not defined, assume 'ready'.
     */
    status?: GetConfigurationsResponseBodyIntegrationsStatus | undefined;
    /**
     * An external identifier defined by the integration vendor.
     */
    externalId?: string | undefined;
    /**
     * When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.
     */
    projects?: Array<string> | undefined;
    /**
     * Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
     */
    source?: GetConfigurationsResponseBodyIntegrationsSource | undefined;
    /**
     * The slug of the integration the configuration is created for.
     */
    slug: string;
    /**
     * When the configuration was created for a team, this will show the ID of the team.
     */
    teamId?: string | null | undefined;
    type: GetConfigurationsResponseBodyIntegrationsType;
    /**
     * A timestamp that tells you when the configuration was updated.
     */
    updatedAt: number;
    /**
     * The ID of the user that created the configuration.
     */
    userId: string;
    /**
     * The resources that are allowed to be accessed by the configuration.
     */
    scopes: Array<string>;
    /**
     * A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.
     */
    disabledAt?: number | undefined;
    /**
     * A timestamp that tells you when the configuration was deleted.
     */
    deletedAt?: number | null | undefined;
    /**
     * A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid.
     */
    deleteRequestedAt?: number | null | undefined;
    disabledReason?: GetConfigurationsResponseBodyIntegrationsDisabledReason | undefined;
    /**
     * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
     */
    installationType?: GetConfigurationsResponseBodyInstallationType | undefined;
};
/**
 * The configuration status. Optional. If not defined, assume 'ready'.
 */
export declare const GetConfigurationsResponseBodyStatus: {
    readonly Error: "error";
    readonly Ready: "ready";
    readonly Pending: "pending";
    readonly Onboarding: "onboarding";
    readonly Suspended: "suspended";
    readonly Resumed: "resumed";
    readonly Uninstalled: "uninstalled";
};
/**
 * The configuration status. Optional. If not defined, assume 'ready'.
 */
export type GetConfigurationsResponseBodyStatus = ClosedEnum<typeof GetConfigurationsResponseBodyStatus>;
/**
 * Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
 */
export declare const GetConfigurationsResponseBodySource: {
    readonly Marketplace: "marketplace";
    readonly DeployButton: "deploy-button";
    readonly External: "external";
    readonly V0: "v0";
    readonly ResourceClaims: "resource-claims";
    readonly Cli: "cli";
    readonly Oauth: "oauth";
    readonly Backoffice: "backoffice";
};
/**
 * Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
 */
export type GetConfigurationsResponseBodySource = ClosedEnum<typeof GetConfigurationsResponseBodySource>;
export declare const GetConfigurationsResponseBodyType: {
    readonly IntegrationConfiguration: "integration-configuration";
};
export type GetConfigurationsResponseBodyType = ClosedEnum<typeof GetConfigurationsResponseBodyType>;
export declare const GetConfigurationsResponseBodyDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly DisabledByAdmin: "disabled-by-admin";
    readonly OriginalOwnerLeftTheTeam: "original-owner-left-the-team";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly OriginalOwnerRoleDowngraded: "original-owner-role-downgraded";
};
export type GetConfigurationsResponseBodyDisabledReason = ClosedEnum<typeof GetConfigurationsResponseBodyDisabledReason>;
/**
 * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
 */
export declare const ResponseBodyInstallationType: {
    readonly Marketplace: "marketplace";
    readonly External: "external";
};
/**
 * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
 */
export type ResponseBodyInstallationType = ClosedEnum<typeof ResponseBodyInstallationType>;
/**
 * The list of configurations for the authenticated user
 */
export type GetConfigurationsResponseBody1 = {
    /**
     * A timestamp that tells you when the configuration was installed successfully
     */
    completedAt?: number | undefined;
    /**
     * A timestamp that tells you when the configuration was created
     */
    createdAt?: number | undefined;
    /**
     * The unique identifier of the configuration
     */
    id?: string | undefined;
    /**
     * The unique identifier of the app the configuration was created for
     */
    integrationId?: string | undefined;
    /**
     * The user or team ID that owns the configuration
     */
    ownerId?: string | undefined;
    /**
     * The configuration status. Optional. If not defined, assume 'ready'.
     */
    status?: GetConfigurationsResponseBodyStatus | undefined;
    /**
     * An external identifier defined by the integration vendor.
     */
    externalId?: string | undefined;
    /**
     * When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.
     */
    projects?: Array<string> | undefined;
    /**
     * Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
     */
    source?: GetConfigurationsResponseBodySource | undefined;
    /**
     * The slug of the integration the configuration is created for.
     */
    slug?: string | undefined;
    /**
     * When the configuration was created for a team, this will show the ID of the team.
     */
    teamId?: string | null | undefined;
    type?: GetConfigurationsResponseBodyType | undefined;
    /**
     * A timestamp that tells you when the configuration was updated.
     */
    updatedAt?: number | undefined;
    /**
     * The ID of the user that created the configuration.
     */
    userId?: string | undefined;
    /**
     * The resources that are allowed to be accessed by the configuration.
     */
    scopes?: Array<string> | undefined;
    /**
     * A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.
     */
    disabledAt?: number | undefined;
    /**
     * A timestamp that tells you when the configuration was deleted.
     */
    deletedAt?: number | null | undefined;
    /**
     * A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid.
     */
    deleteRequestedAt?: number | null | undefined;
    disabledReason?: GetConfigurationsResponseBodyDisabledReason | undefined;
    /**
     * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
     */
    installationType?: ResponseBodyInstallationType | undefined;
};
/**
 * The list of configurations for the authenticated user
 */
export type GetConfigurationsResponseBody = Array<GetConfigurationsResponseBody1> | Array<GetConfigurationsResponseBody2>;
/** @internal */
export declare const View$inboundSchema: z.ZodNativeEnum<typeof View>;
/** @internal */
export declare const View$outboundSchema: z.ZodNativeEnum<typeof View>;
/** @internal */
export declare const InstallationType$inboundSchema: z.ZodNativeEnum<typeof InstallationType>;
/** @internal */
export declare const InstallationType$outboundSchema: z.ZodNativeEnum<typeof InstallationType>;
/** @internal */
export declare const GetConfigurationsRequest$inboundSchema: z.ZodType<GetConfigurationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationsRequest$Outbound = {
    view: string;
    installationType?: string | undefined;
    integrationIdOrSlug?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetConfigurationsRequest$outboundSchema: z.ZodType<GetConfigurationsRequest$Outbound, z.ZodTypeDef, GetConfigurationsRequest>;
export declare function getConfigurationsRequestToJSON(getConfigurationsRequest: GetConfigurationsRequest): string;
export declare function getConfigurationsRequestFromJSON(jsonString: string): SafeParseResult<GetConfigurationsRequest, SDKValidationError>;
/** @internal */
export declare const TagIds$inboundSchema: z.ZodNativeEnum<typeof TagIds>;
/** @internal */
export declare const TagIds$outboundSchema: z.ZodNativeEnum<typeof TagIds>;
/** @internal */
export declare const ResponseBodyIntegration$inboundSchema: z.ZodType<ResponseBodyIntegration, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyIntegration$Outbound = {
    name: string;
    icon: string;
    isLegacy: boolean;
    flags?: Array<string> | undefined;
    assignedBetaLabelAt?: number | undefined;
    tagIds?: Array<string> | undefined;
};
/** @internal */
export declare const ResponseBodyIntegration$outboundSchema: z.ZodType<ResponseBodyIntegration$Outbound, z.ZodTypeDef, ResponseBodyIntegration>;
export declare function responseBodyIntegrationToJSON(responseBodyIntegration: ResponseBodyIntegration): string;
export declare function responseBodyIntegrationFromJSON(jsonString: string): SafeParseResult<ResponseBodyIntegration, SDKValidationError>;
/** @internal */
export declare const GetConfigurationsResponseBodyIntegrationsStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyIntegrationsStatus>;
/** @internal */
export declare const GetConfigurationsResponseBodyIntegrationsStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyIntegrationsStatus>;
/** @internal */
export declare const GetConfigurationsResponseBodyIntegrationsSource$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyIntegrationsSource>;
/** @internal */
export declare const GetConfigurationsResponseBodyIntegrationsSource$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyIntegrationsSource>;
/** @internal */
export declare const GetConfigurationsResponseBodyIntegrationsType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyIntegrationsType>;
/** @internal */
export declare const GetConfigurationsResponseBodyIntegrationsType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyIntegrationsType>;
/** @internal */
export declare const GetConfigurationsResponseBodyIntegrationsDisabledReason$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyIntegrationsDisabledReason>;
/** @internal */
export declare const GetConfigurationsResponseBodyIntegrationsDisabledReason$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyIntegrationsDisabledReason>;
/** @internal */
export declare const GetConfigurationsResponseBodyInstallationType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyInstallationType>;
/** @internal */
export declare const GetConfigurationsResponseBodyInstallationType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyInstallationType>;
/** @internal */
export declare const GetConfigurationsResponseBody2$inboundSchema: z.ZodType<GetConfigurationsResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationsResponseBody2$Outbound = {
    integration: ResponseBodyIntegration$Outbound;
    completedAt?: number | undefined;
    createdAt: number;
    id: string;
    integrationId: string;
    ownerId: string;
    status?: string | undefined;
    externalId?: string | undefined;
    projects?: Array<string> | undefined;
    source?: string | undefined;
    slug: string;
    teamId?: string | null | undefined;
    type: string;
    updatedAt: number;
    userId: string;
    scopes: Array<string>;
    disabledAt?: number | undefined;
    deletedAt?: number | null | undefined;
    deleteRequestedAt?: number | null | undefined;
    disabledReason?: string | undefined;
    installationType?: string | undefined;
};
/** @internal */
export declare const GetConfigurationsResponseBody2$outboundSchema: z.ZodType<GetConfigurationsResponseBody2$Outbound, z.ZodTypeDef, GetConfigurationsResponseBody2>;
export declare function getConfigurationsResponseBody2ToJSON(getConfigurationsResponseBody2: GetConfigurationsResponseBody2): string;
export declare function getConfigurationsResponseBody2FromJSON(jsonString: string): SafeParseResult<GetConfigurationsResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetConfigurationsResponseBodyStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyStatus>;
/** @internal */
export declare const GetConfigurationsResponseBodyStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyStatus>;
/** @internal */
export declare const GetConfigurationsResponseBodySource$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodySource>;
/** @internal */
export declare const GetConfigurationsResponseBodySource$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodySource>;
/** @internal */
export declare const GetConfigurationsResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyType>;
/** @internal */
export declare const GetConfigurationsResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyType>;
/** @internal */
export declare const GetConfigurationsResponseBodyDisabledReason$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyDisabledReason>;
/** @internal */
export declare const GetConfigurationsResponseBodyDisabledReason$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationsResponseBodyDisabledReason>;
/** @internal */
export declare const ResponseBodyInstallationType$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyInstallationType>;
/** @internal */
export declare const ResponseBodyInstallationType$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyInstallationType>;
/** @internal */
export declare const GetConfigurationsResponseBody1$inboundSchema: z.ZodType<GetConfigurationsResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationsResponseBody1$Outbound = {
    completedAt?: number | undefined;
    createdAt?: number | undefined;
    id?: string | undefined;
    integrationId?: string | undefined;
    ownerId?: string | undefined;
    status?: string | undefined;
    externalId?: string | undefined;
    projects?: Array<string> | undefined;
    source?: string | undefined;
    slug?: string | undefined;
    teamId?: string | null | undefined;
    type?: string | undefined;
    updatedAt?: number | undefined;
    userId?: string | undefined;
    scopes?: Array<string> | undefined;
    disabledAt?: number | undefined;
    deletedAt?: number | null | undefined;
    deleteRequestedAt?: number | null | undefined;
    disabledReason?: string | undefined;
    installationType?: string | undefined;
};
/** @internal */
export declare const GetConfigurationsResponseBody1$outboundSchema: z.ZodType<GetConfigurationsResponseBody1$Outbound, z.ZodTypeDef, GetConfigurationsResponseBody1>;
export declare function getConfigurationsResponseBody1ToJSON(getConfigurationsResponseBody1: GetConfigurationsResponseBody1): string;
export declare function getConfigurationsResponseBody1FromJSON(jsonString: string): SafeParseResult<GetConfigurationsResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationsResponseBody$inboundSchema: z.ZodType<GetConfigurationsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationsResponseBody$Outbound = Array<GetConfigurationsResponseBody1$Outbound> | Array<GetConfigurationsResponseBody2$Outbound>;
/** @internal */
export declare const GetConfigurationsResponseBody$outboundSchema: z.ZodType<GetConfigurationsResponseBody$Outbound, z.ZodTypeDef, GetConfigurationsResponseBody>;
export declare function getConfigurationsResponseBodyToJSON(getConfigurationsResponseBody: GetConfigurationsResponseBody): string;
export declare function getConfigurationsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetConfigurationsResponseBody, SDKValidationError>;
//# sourceMappingURL=getconfigurationsop.d.ts.map