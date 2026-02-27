import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetConfigurationRequest = {
    /**
     * ID of the configuration to check
     */
    id: string;
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
 * The configuration status. Optional. If not defined, assume 'ready'.
 */
export declare const GetConfigurationResponseBodyIntegrationsResponseStatus: {
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
export type GetConfigurationResponseBodyIntegrationsResponseStatus = ClosedEnum<typeof GetConfigurationResponseBodyIntegrationsResponseStatus>;
/**
 * Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
 */
export declare const GetConfigurationResponseBodyIntegrationsResponseSource: {
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
export type GetConfigurationResponseBodyIntegrationsResponseSource = ClosedEnum<typeof GetConfigurationResponseBodyIntegrationsResponseSource>;
export declare const GetConfigurationResponseBodyIntegrationsResponseType: {
    readonly IntegrationConfiguration: "integration-configuration";
};
export type GetConfigurationResponseBodyIntegrationsResponseType = ClosedEnum<typeof GetConfigurationResponseBodyIntegrationsResponseType>;
export declare const GetConfigurationResponseBodyIntegrationsResponseDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly DisabledByAdmin: "disabled-by-admin";
    readonly OriginalOwnerLeftTheTeam: "original-owner-left-the-team";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly OriginalOwnerRoleDowngraded: "original-owner-role-downgraded";
};
export type GetConfigurationResponseBodyIntegrationsResponseDisabledReason = ClosedEnum<typeof GetConfigurationResponseBodyIntegrationsResponseDisabledReason>;
/**
 * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
 */
export declare const GetConfigurationResponseBodyIntegrationsResponseInstallationType: {
    readonly Marketplace: "marketplace";
    readonly External: "external";
};
/**
 * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
 */
export type GetConfigurationResponseBodyIntegrationsResponseInstallationType = ClosedEnum<typeof GetConfigurationResponseBodyIntegrationsResponseInstallationType>;
/**
 * A configuration represents information about a single installation of an integration within an individual or team account
 */
export type GetConfigurationResponseBody3 = {
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
    status?: GetConfigurationResponseBodyIntegrationsResponseStatus | undefined;
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
    source?: GetConfigurationResponseBodyIntegrationsResponseSource | undefined;
    /**
     * The slug of the integration the configuration is created for.
     */
    slug?: string | undefined;
    /**
     * When the configuration was created for a team, this will show the ID of the team.
     */
    teamId?: string | null | undefined;
    type?: GetConfigurationResponseBodyIntegrationsResponseType | undefined;
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
    disabledReason?: GetConfigurationResponseBodyIntegrationsResponseDisabledReason | undefined;
    /**
     * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
     */
    installationType?: GetConfigurationResponseBodyIntegrationsResponseInstallationType | undefined;
};
/**
 * The configuration status. Optional. If not defined, assume 'ready'.
 */
export declare const GetConfigurationResponseBodyIntegrationsStatus: {
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
export type GetConfigurationResponseBodyIntegrationsStatus = ClosedEnum<typeof GetConfigurationResponseBodyIntegrationsStatus>;
/**
 * Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
 */
export declare const GetConfigurationResponseBodyIntegrationsSource: {
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
export type GetConfigurationResponseBodyIntegrationsSource = ClosedEnum<typeof GetConfigurationResponseBodyIntegrationsSource>;
export declare const GetConfigurationResponseBodyIntegrationsType: {
    readonly IntegrationConfiguration: "integration-configuration";
};
export type GetConfigurationResponseBodyIntegrationsType = ClosedEnum<typeof GetConfigurationResponseBodyIntegrationsType>;
export declare const GetConfigurationResponseBodyIntegrationsDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly DisabledByAdmin: "disabled-by-admin";
    readonly OriginalOwnerLeftTheTeam: "original-owner-left-the-team";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly OriginalOwnerRoleDowngraded: "original-owner-role-downgraded";
};
export type GetConfigurationResponseBodyIntegrationsDisabledReason = ClosedEnum<typeof GetConfigurationResponseBodyIntegrationsDisabledReason>;
/**
 * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
 */
export declare const GetConfigurationResponseBodyIntegrationsInstallationType: {
    readonly Marketplace: "marketplace";
    readonly External: "external";
};
/**
 * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
 */
export type GetConfigurationResponseBodyIntegrationsInstallationType = ClosedEnum<typeof GetConfigurationResponseBodyIntegrationsInstallationType>;
/**
 * The configuration with the provided id
 */
export type GetConfigurationResponseBody2 = {
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
    status?: GetConfigurationResponseBodyIntegrationsStatus | undefined;
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
    source?: GetConfigurationResponseBodyIntegrationsSource | undefined;
    /**
     * The slug of the integration the configuration is created for.
     */
    slug: string;
    /**
     * When the configuration was created for a team, this will show the ID of the team.
     */
    teamId?: string | null | undefined;
    type: GetConfigurationResponseBodyIntegrationsType;
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
    disabledReason?: GetConfigurationResponseBodyIntegrationsDisabledReason | undefined;
    /**
     * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
     */
    installationType?: GetConfigurationResponseBodyIntegrationsInstallationType | undefined;
};
/**
 * A string representing the permission for projects. Possible values are `all` or `selected`.
 */
export declare const ProjectSelection: {
    readonly Selected: "selected";
    readonly All: "all";
};
/**
 * A string representing the permission for projects. Possible values are `all` or `selected`.
 */
export type ProjectSelection = ClosedEnum<typeof ProjectSelection>;
export declare const GetConfigurationResponseBodyLevel: {
    readonly Error: "error";
    readonly Info: "info";
    readonly Warn: "warn";
};
export type GetConfigurationResponseBodyLevel = ClosedEnum<typeof GetConfigurationResponseBodyLevel>;
export type ResponseBodyNotification = {
    level: GetConfigurationResponseBodyLevel;
    title: string;
    message?: string | undefined;
    href?: string | undefined;
};
export type TransferRequestRequester = {
    name: string;
    email?: string | undefined;
};
export type TransferRequest2 = {
    kind: "transfer-from-marketplace";
    requestId: string;
    transferId: string;
    requester: TransferRequestRequester;
    createdAt: number;
    expiresAt: number;
    discardedAt?: number | undefined;
    discardedBy?: string | undefined;
    approvedAt?: number | undefined;
    approvedBy?: string | undefined;
    authorizationId?: string | undefined;
};
export declare const TransferRequestType: {
    readonly Prepayment: "prepayment";
    readonly Subscription: "subscription";
};
export type TransferRequestType = ClosedEnum<typeof TransferRequestType>;
export declare const TransferRequestScope: {
    readonly Installation: "installation";
    readonly Resource: "resource";
};
export type TransferRequestScope = ClosedEnum<typeof TransferRequestScope>;
export type TransferRequestBillingPlan = {
    id: string;
    type: TransferRequestType;
    scope?: TransferRequestScope | undefined;
    name: string;
    description: string;
    paymentMethodRequired?: boolean | undefined;
    preauthorizationAmount?: number | undefined;
};
export type Requester = {
    name: string;
    email?: string | undefined;
};
export type TransferRequest1 = {
    kind: "transfer-to-marketplace";
    metadata?: {
        [k: string]: any;
    } | undefined;
    billingPlan?: TransferRequestBillingPlan | undefined;
    requestId: string;
    transferId: string;
    requester: Requester;
    createdAt: number;
    expiresAt: number;
    discardedAt?: number | undefined;
    discardedBy?: string | undefined;
    approvedAt?: number | undefined;
    approvedBy?: string | undefined;
    authorizationId?: string | undefined;
};
export type TransferRequest = TransferRequest1 | TransferRequest2;
/**
 * The configuration status. Optional. If not defined, assume 'ready'.
 */
export declare const GetConfigurationResponseBodyStatus: {
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
export type GetConfigurationResponseBodyStatus = ClosedEnum<typeof GetConfigurationResponseBodyStatus>;
export declare const GetConfigurationResponseBodyType: {
    readonly IntegrationConfiguration: "integration-configuration";
};
export type GetConfigurationResponseBodyType = ClosedEnum<typeof GetConfigurationResponseBodyType>;
/**
 * Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
 */
export declare const GetConfigurationResponseBodySource: {
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
export type GetConfigurationResponseBodySource = ClosedEnum<typeof GetConfigurationResponseBodySource>;
export declare const GetConfigurationResponseBodyDisabledReason: {
    readonly DisabledByOwner: "disabled-by-owner";
    readonly FeatureNotAvailable: "feature-not-available";
    readonly DisabledByAdmin: "disabled-by-admin";
    readonly OriginalOwnerLeftTheTeam: "original-owner-left-the-team";
    readonly AccountPlanDowngrade: "account-plan-downgrade";
    readonly OriginalOwnerRoleDowngraded: "original-owner-role-downgraded";
};
export type GetConfigurationResponseBodyDisabledReason = ClosedEnum<typeof GetConfigurationResponseBodyDisabledReason>;
/**
 * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
 */
export declare const GetConfigurationResponseBodyInstallationType: {
    readonly Marketplace: "marketplace";
    readonly External: "external";
};
/**
 * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
 */
export type GetConfigurationResponseBodyInstallationType = ClosedEnum<typeof GetConfigurationResponseBodyInstallationType>;
export type GetConfigurationResponseBody1 = {
    /**
     * A string representing the permission for projects. Possible values are `all` or `selected`.
     */
    projectSelection: ProjectSelection;
    notification: ResponseBodyNotification;
    transferRequest: TransferRequest1 | TransferRequest2;
    /**
     * When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.
     */
    projects?: Array<string> | undefined;
    /**
     * The configuration status. Optional. If not defined, assume 'ready'.
     */
    status?: GetConfigurationResponseBodyStatus | undefined;
    type: GetConfigurationResponseBodyType;
    /**
     * A timestamp that tells you when the configuration was created
     */
    createdAt: number;
    /**
     * A timestamp that tells you when the configuration was deleted.
     */
    deletedAt?: number | null | undefined;
    /**
     * The unique identifier of the configuration
     */
    id: string;
    /**
     * The slug of the integration the configuration is created for.
     */
    slug: string;
    /**
     * When the configuration was created for a team, this will show the ID of the team.
     */
    teamId?: string | null | undefined;
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
     * Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
     */
    source?: GetConfigurationResponseBodySource | undefined;
    /**
     * The unique identifier of the app the configuration was created for
     */
    integrationId: string;
    /**
     * The user or team ID that owns the configuration
     */
    ownerId: string;
    canConfigureOpenTelemetry?: boolean | undefined;
    /**
     * A timestamp that tells you when the configuration was installed successfully
     */
    completedAt?: number | undefined;
    /**
     * An external identifier defined by the integration vendor.
     */
    externalId?: string | undefined;
    /**
     * A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.
     */
    disabledAt?: number | undefined;
    /**
     * A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid.
     */
    deleteRequestedAt?: number | null | undefined;
    disabledReason?: GetConfigurationResponseBodyDisabledReason | undefined;
    /**
     * Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
     */
    installationType?: GetConfigurationResponseBodyInstallationType | undefined;
};
/**
 * The configuration with the provided id
 */
export type GetConfigurationResponseBody = GetConfigurationResponseBody1 | GetConfigurationResponseBody2 | GetConfigurationResponseBody3;
/** @internal */
export declare const GetConfigurationRequest$inboundSchema: z.ZodType<GetConfigurationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetConfigurationRequest$outboundSchema: z.ZodType<GetConfigurationRequest$Outbound, z.ZodTypeDef, GetConfigurationRequest>;
export declare function getConfigurationRequestToJSON(getConfigurationRequest: GetConfigurationRequest): string;
export declare function getConfigurationRequestFromJSON(jsonString: string): SafeParseResult<GetConfigurationRequest, SDKValidationError>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsResponseStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsResponseStatus>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsResponseStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsResponseStatus>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsResponseSource$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsResponseSource>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsResponseSource$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsResponseSource>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsResponseType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsResponseType>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsResponseType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsResponseType>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsResponseDisabledReason$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsResponseDisabledReason>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsResponseDisabledReason$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsResponseDisabledReason>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsResponseInstallationType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsResponseInstallationType>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsResponseInstallationType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsResponseInstallationType>;
/** @internal */
export declare const GetConfigurationResponseBody3$inboundSchema: z.ZodType<GetConfigurationResponseBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationResponseBody3$Outbound = {
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
export declare const GetConfigurationResponseBody3$outboundSchema: z.ZodType<GetConfigurationResponseBody3$Outbound, z.ZodTypeDef, GetConfigurationResponseBody3>;
export declare function getConfigurationResponseBody3ToJSON(getConfigurationResponseBody3: GetConfigurationResponseBody3): string;
export declare function getConfigurationResponseBody3FromJSON(jsonString: string): SafeParseResult<GetConfigurationResponseBody3, SDKValidationError>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsStatus>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsStatus>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsSource$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsSource>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsSource$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsSource>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsType>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsType>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsDisabledReason$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsDisabledReason>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsDisabledReason$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsDisabledReason>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsInstallationType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsInstallationType>;
/** @internal */
export declare const GetConfigurationResponseBodyIntegrationsInstallationType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyIntegrationsInstallationType>;
/** @internal */
export declare const GetConfigurationResponseBody2$inboundSchema: z.ZodType<GetConfigurationResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationResponseBody2$Outbound = {
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
export declare const GetConfigurationResponseBody2$outboundSchema: z.ZodType<GetConfigurationResponseBody2$Outbound, z.ZodTypeDef, GetConfigurationResponseBody2>;
export declare function getConfigurationResponseBody2ToJSON(getConfigurationResponseBody2: GetConfigurationResponseBody2): string;
export declare function getConfigurationResponseBody2FromJSON(jsonString: string): SafeParseResult<GetConfigurationResponseBody2, SDKValidationError>;
/** @internal */
export declare const ProjectSelection$inboundSchema: z.ZodNativeEnum<typeof ProjectSelection>;
/** @internal */
export declare const ProjectSelection$outboundSchema: z.ZodNativeEnum<typeof ProjectSelection>;
/** @internal */
export declare const GetConfigurationResponseBodyLevel$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyLevel>;
/** @internal */
export declare const GetConfigurationResponseBodyLevel$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyLevel>;
/** @internal */
export declare const ResponseBodyNotification$inboundSchema: z.ZodType<ResponseBodyNotification, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyNotification$Outbound = {
    level: string;
    title: string;
    message?: string | undefined;
    href?: string | undefined;
};
/** @internal */
export declare const ResponseBodyNotification$outboundSchema: z.ZodType<ResponseBodyNotification$Outbound, z.ZodTypeDef, ResponseBodyNotification>;
export declare function responseBodyNotificationToJSON(responseBodyNotification: ResponseBodyNotification): string;
export declare function responseBodyNotificationFromJSON(jsonString: string): SafeParseResult<ResponseBodyNotification, SDKValidationError>;
/** @internal */
export declare const TransferRequestRequester$inboundSchema: z.ZodType<TransferRequestRequester, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferRequestRequester$Outbound = {
    name: string;
    email?: string | undefined;
};
/** @internal */
export declare const TransferRequestRequester$outboundSchema: z.ZodType<TransferRequestRequester$Outbound, z.ZodTypeDef, TransferRequestRequester>;
export declare function transferRequestRequesterToJSON(transferRequestRequester: TransferRequestRequester): string;
export declare function transferRequestRequesterFromJSON(jsonString: string): SafeParseResult<TransferRequestRequester, SDKValidationError>;
/** @internal */
export declare const TransferRequest2$inboundSchema: z.ZodType<TransferRequest2, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferRequest2$Outbound = {
    kind: "transfer-from-marketplace";
    requestId: string;
    transferId: string;
    requester: TransferRequestRequester$Outbound;
    createdAt: number;
    expiresAt: number;
    discardedAt?: number | undefined;
    discardedBy?: string | undefined;
    approvedAt?: number | undefined;
    approvedBy?: string | undefined;
    authorizationId?: string | undefined;
};
/** @internal */
export declare const TransferRequest2$outboundSchema: z.ZodType<TransferRequest2$Outbound, z.ZodTypeDef, TransferRequest2>;
export declare function transferRequest2ToJSON(transferRequest2: TransferRequest2): string;
export declare function transferRequest2FromJSON(jsonString: string): SafeParseResult<TransferRequest2, SDKValidationError>;
/** @internal */
export declare const TransferRequestType$inboundSchema: z.ZodNativeEnum<typeof TransferRequestType>;
/** @internal */
export declare const TransferRequestType$outboundSchema: z.ZodNativeEnum<typeof TransferRequestType>;
/** @internal */
export declare const TransferRequestScope$inboundSchema: z.ZodNativeEnum<typeof TransferRequestScope>;
/** @internal */
export declare const TransferRequestScope$outboundSchema: z.ZodNativeEnum<typeof TransferRequestScope>;
/** @internal */
export declare const TransferRequestBillingPlan$inboundSchema: z.ZodType<TransferRequestBillingPlan, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferRequestBillingPlan$Outbound = {
    id: string;
    type: string;
    scope?: string | undefined;
    name: string;
    description: string;
    paymentMethodRequired?: boolean | undefined;
    preauthorizationAmount?: number | undefined;
};
/** @internal */
export declare const TransferRequestBillingPlan$outboundSchema: z.ZodType<TransferRequestBillingPlan$Outbound, z.ZodTypeDef, TransferRequestBillingPlan>;
export declare function transferRequestBillingPlanToJSON(transferRequestBillingPlan: TransferRequestBillingPlan): string;
export declare function transferRequestBillingPlanFromJSON(jsonString: string): SafeParseResult<TransferRequestBillingPlan, SDKValidationError>;
/** @internal */
export declare const Requester$inboundSchema: z.ZodType<Requester, z.ZodTypeDef, unknown>;
/** @internal */
export type Requester$Outbound = {
    name: string;
    email?: string | undefined;
};
/** @internal */
export declare const Requester$outboundSchema: z.ZodType<Requester$Outbound, z.ZodTypeDef, Requester>;
export declare function requesterToJSON(requester: Requester): string;
export declare function requesterFromJSON(jsonString: string): SafeParseResult<Requester, SDKValidationError>;
/** @internal */
export declare const TransferRequest1$inboundSchema: z.ZodType<TransferRequest1, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferRequest1$Outbound = {
    kind: "transfer-to-marketplace";
    metadata?: {
        [k: string]: any;
    } | undefined;
    billingPlan?: TransferRequestBillingPlan$Outbound | undefined;
    requestId: string;
    transferId: string;
    requester: Requester$Outbound;
    createdAt: number;
    expiresAt: number;
    discardedAt?: number | undefined;
    discardedBy?: string | undefined;
    approvedAt?: number | undefined;
    approvedBy?: string | undefined;
    authorizationId?: string | undefined;
};
/** @internal */
export declare const TransferRequest1$outboundSchema: z.ZodType<TransferRequest1$Outbound, z.ZodTypeDef, TransferRequest1>;
export declare function transferRequest1ToJSON(transferRequest1: TransferRequest1): string;
export declare function transferRequest1FromJSON(jsonString: string): SafeParseResult<TransferRequest1, SDKValidationError>;
/** @internal */
export declare const TransferRequest$inboundSchema: z.ZodType<TransferRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferRequest$Outbound = TransferRequest1$Outbound | TransferRequest2$Outbound;
/** @internal */
export declare const TransferRequest$outboundSchema: z.ZodType<TransferRequest$Outbound, z.ZodTypeDef, TransferRequest>;
export declare function transferRequestToJSON(transferRequest: TransferRequest): string;
export declare function transferRequestFromJSON(jsonString: string): SafeParseResult<TransferRequest, SDKValidationError>;
/** @internal */
export declare const GetConfigurationResponseBodyStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyStatus>;
/** @internal */
export declare const GetConfigurationResponseBodyStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyStatus>;
/** @internal */
export declare const GetConfigurationResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyType>;
/** @internal */
export declare const GetConfigurationResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyType>;
/** @internal */
export declare const GetConfigurationResponseBodySource$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodySource>;
/** @internal */
export declare const GetConfigurationResponseBodySource$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodySource>;
/** @internal */
export declare const GetConfigurationResponseBodyDisabledReason$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyDisabledReason>;
/** @internal */
export declare const GetConfigurationResponseBodyDisabledReason$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyDisabledReason>;
/** @internal */
export declare const GetConfigurationResponseBodyInstallationType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyInstallationType>;
/** @internal */
export declare const GetConfigurationResponseBodyInstallationType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationResponseBodyInstallationType>;
/** @internal */
export declare const GetConfigurationResponseBody1$inboundSchema: z.ZodType<GetConfigurationResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationResponseBody1$Outbound = {
    projectSelection: string;
    notification: ResponseBodyNotification$Outbound;
    transferRequest: TransferRequest1$Outbound | TransferRequest2$Outbound;
    projects?: Array<string> | undefined;
    status?: string | undefined;
    type: string;
    createdAt: number;
    deletedAt?: number | null | undefined;
    id: string;
    slug: string;
    teamId?: string | null | undefined;
    updatedAt: number;
    userId: string;
    scopes: Array<string>;
    source?: string | undefined;
    integrationId: string;
    ownerId: string;
    canConfigureOpenTelemetry?: boolean | undefined;
    completedAt?: number | undefined;
    externalId?: string | undefined;
    disabledAt?: number | undefined;
    deleteRequestedAt?: number | null | undefined;
    disabledReason?: string | undefined;
    installationType?: string | undefined;
};
/** @internal */
export declare const GetConfigurationResponseBody1$outboundSchema: z.ZodType<GetConfigurationResponseBody1$Outbound, z.ZodTypeDef, GetConfigurationResponseBody1>;
export declare function getConfigurationResponseBody1ToJSON(getConfigurationResponseBody1: GetConfigurationResponseBody1): string;
export declare function getConfigurationResponseBody1FromJSON(jsonString: string): SafeParseResult<GetConfigurationResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationResponseBody$inboundSchema: z.ZodType<GetConfigurationResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationResponseBody$Outbound = GetConfigurationResponseBody1$Outbound | GetConfigurationResponseBody2$Outbound | GetConfigurationResponseBody3$Outbound;
/** @internal */
export declare const GetConfigurationResponseBody$outboundSchema: z.ZodType<GetConfigurationResponseBody$Outbound, z.ZodTypeDef, GetConfigurationResponseBody>;
export declare function getConfigurationResponseBodyToJSON(getConfigurationResponseBody: GetConfigurationResponseBody): string;
export declare function getConfigurationResponseBodyFromJSON(jsonString: string): SafeParseResult<GetConfigurationResponseBody, SDKValidationError>;
//# sourceMappingURL=getconfigurationop.d.ts.map