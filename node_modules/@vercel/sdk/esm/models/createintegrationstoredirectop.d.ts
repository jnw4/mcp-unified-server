import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type CreateIntegrationStoreDirectMetadata = string | number | boolean | Array<string> | Array<number>;
/**
 * Source of the store creation request
 */
export declare const CreateIntegrationStoreDirectSource: {
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
 * Source of the store creation request
 */
export type CreateIntegrationStoreDirectSource = ClosedEnum<typeof CreateIntegrationStoreDirectSource>;
export type CreateIntegrationStoreDirectRequestBody = {
    /**
     * Human-readable name for the storage resource
     */
    name: string;
    /**
     * ID of your integration configuration. Get this from GET /v1/integrations/configurations
     */
    integrationConfigurationId: string;
    /**
     * ID or slug of the integration product. Get available products from GET /v1/integrations/configuration/{id}/products
     */
    integrationProductIdOrSlug?: any | undefined;
    /**
     * Optional key-value pairs for resource metadata
     */
    metadata?: {
        [k: string]: string | number | boolean | Array<string> | Array<number>;
    } | undefined;
    /**
     * Optional external identifier for tracking purposes
     */
    externalId?: string | undefined;
    /**
     * Protocol-specific configuration settings
     */
    protocolSettings?: {
        [k: string]: any;
    } | undefined;
    /**
     * Source of the store creation request
     */
    source?: CreateIntegrationStoreDirectSource | undefined;
    /**
     * ID of the billing plan for paid resources. Get available plans from GET /integrations/integration/{id}/products/{productId}/plans. If not provided, automatically discovers free billing plans.
     */
    billingPlanId?: string | undefined;
    /**
     * Payment method ID for paid resources. Optional - uses default payment method if not provided.
     */
    paymentMethodId?: string | undefined;
    /**
     * Amount in cents for prepayment billing plans. Required only for prepayment plans with variable amounts.
     */
    prepaymentAmountCents?: number | undefined;
};
export type CreateIntegrationStoreDirectRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateIntegrationStoreDirectRequestBody | undefined;
};
export declare const CreateIntegrationStoreDirectFramework: {
    readonly Blitzjs: "blitzjs";
    readonly Nextjs: "nextjs";
    readonly Gatsby: "gatsby";
    readonly Remix: "remix";
    readonly ReactRouter: "react-router";
    readonly Astro: "astro";
    readonly Hexo: "hexo";
    readonly Eleventy: "eleventy";
    readonly Docusaurus2: "docusaurus-2";
    readonly Docusaurus: "docusaurus";
    readonly Preact: "preact";
    readonly Solidstart1: "solidstart-1";
    readonly Solidstart: "solidstart";
    readonly Dojo: "dojo";
    readonly Ember: "ember";
    readonly Vue: "vue";
    readonly Scully: "scully";
    readonly IonicAngular: "ionic-angular";
    readonly Angular: "angular";
    readonly Polymer: "polymer";
    readonly Svelte: "svelte";
    readonly Sveltekit: "sveltekit";
    readonly Sveltekit1: "sveltekit-1";
    readonly IonicReact: "ionic-react";
    readonly CreateReactApp: "create-react-app";
    readonly Gridsome: "gridsome";
    readonly Umijs: "umijs";
    readonly Sapper: "sapper";
    readonly Saber: "saber";
    readonly Stencil: "stencil";
    readonly Nuxtjs: "nuxtjs";
    readonly Redwoodjs: "redwoodjs";
    readonly Hugo: "hugo";
    readonly Jekyll: "jekyll";
    readonly Brunch: "brunch";
    readonly Middleman: "middleman";
    readonly Zola: "zola";
    readonly Hydrogen: "hydrogen";
    readonly Vite: "vite";
    readonly TanstackStart: "tanstack-start";
    readonly Vitepress: "vitepress";
    readonly Vuepress: "vuepress";
    readonly Parcel: "parcel";
    readonly Fastapi: "fastapi";
    readonly Flask: "flask";
    readonly Fasthtml: "fasthtml";
    readonly Django: "django";
    readonly SanityV3: "sanity-v3";
    readonly Sanity: "sanity";
    readonly Storybook: "storybook";
    readonly Nitro: "nitro";
    readonly Hono: "hono";
    readonly Express: "express";
    readonly H3: "h3";
    readonly Koa: "koa";
    readonly Nestjs: "nestjs";
    readonly Elysia: "elysia";
    readonly Fastify: "fastify";
    readonly Xmcp: "xmcp";
    readonly Python: "python";
    readonly Ruby: "ruby";
    readonly Rust: "rust";
    readonly Node: "node";
    readonly Go: "go";
    readonly Services: "services";
};
export type CreateIntegrationStoreDirectFramework = ClosedEnum<typeof CreateIntegrationStoreDirectFramework>;
export declare const CreateIntegrationStoreDirectEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateIntegrationStoreDirectEnvironments = ClosedEnum<typeof CreateIntegrationStoreDirectEnvironments>;
export declare const CreateIntegrationStoreDirectIntegrationsEnvironments: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type CreateIntegrationStoreDirectIntegrationsEnvironments = ClosedEnum<typeof CreateIntegrationStoreDirectIntegrationsEnvironments>;
export type CreateIntegrationStoreDirectActions = {
    slug: string;
    environments: Array<CreateIntegrationStoreDirectIntegrationsEnvironments>;
};
export type CreateIntegrationStoreDirectDeployments = {
    required: boolean;
    actions: Array<CreateIntegrationStoreDirectActions>;
};
export type CreateIntegrationStoreDirectProjectsMetadata = {
    id: string;
    projectId: string;
    name: string;
    framework?: CreateIntegrationStoreDirectFramework | null | undefined;
    latestDeployment?: string | undefined;
    environments: Array<CreateIntegrationStoreDirectEnvironments>;
    envVarPrefix: string | null;
    environmentVariables: Array<string>;
    deployments?: CreateIntegrationStoreDirectDeployments | undefined;
};
export declare const Providers2: {
    readonly Wildcard: "*";
};
export type Providers2 = ClosedEnum<typeof Providers2>;
export declare const Providers1: {
    readonly Github: "github";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type Providers1 = ClosedEnum<typeof Providers1>;
export type Providers = Array<Providers1> | Providers2;
export type Git = {
    providers: Array<Providers1> | Providers2;
    owners?: Array<string> | undefined;
    repos?: Array<string> | undefined;
};
export type ProjectFilter = {
    git?: Git | undefined;
};
export declare const CreateIntegrationStoreDirectStatus: {
    readonly Available: "available";
    readonly Error: "error";
    readonly Suspended: "suspended";
    readonly LimitsExceededSuspended: "limits-exceeded-suspended";
    readonly LimitsExceededSuspendedStoreCount: "limits-exceeded-suspended-store-count";
    readonly Initializing: "initializing";
    readonly Onboarding: "onboarding";
    readonly Uninstalled: "uninstalled";
};
export type CreateIntegrationStoreDirectStatus = ClosedEnum<typeof CreateIntegrationStoreDirectStatus>;
export declare const CreateIntegrationStoreDirectOwnership: {
    readonly Owned: "owned";
    readonly Linked: "linked";
    readonly Sandbox: "sandbox";
};
export type CreateIntegrationStoreDirectOwnership = ClosedEnum<typeof CreateIntegrationStoreDirectOwnership>;
export type SecretRotation1 = {
    maxDelayHours: number;
};
export type SecretRotation = SecretRotation1 | boolean;
export type Capabilities = {
    mcp?: boolean | undefined;
    mcpReadonly?: boolean | undefined;
    sso?: boolean | undefined;
    billable?: boolean | undefined;
    transferable?: boolean | undefined;
    secretsSync?: boolean | undefined;
    secretRotation?: SecretRotation1 | boolean | undefined;
    projects?: boolean | undefined;
    v0?: boolean | undefined;
};
export type CreateIntegrationStoreDirectIntegrationsMetadata = string | number | Array<string> | Array<number> | boolean;
export declare const ExternalResourceStatus: {
    readonly Error: "error";
    readonly Suspended: "suspended";
    readonly Onboarding: "onboarding";
    readonly Uninstalled: "uninstalled";
    readonly Ready: "ready";
    readonly Pending: "pending";
    readonly Resumed: "resumed";
};
export type ExternalResourceStatus = ClosedEnum<typeof ExternalResourceStatus>;
export type CreateIntegrationStoreDirectSecretRotation1 = {
    maxDelayHours: number;
};
export type CreateIntegrationStoreDirectSecretRotation = CreateIntegrationStoreDirectSecretRotation1 | boolean;
export type CreateIntegrationStoreDirectCapabilities = {
    mcp?: boolean | undefined;
    mcpReadonly?: boolean | undefined;
    sso?: boolean | undefined;
    billable?: boolean | undefined;
    transferable?: boolean | undefined;
    secretsSync?: boolean | undefined;
    secretRotation?: CreateIntegrationStoreDirectSecretRotation1 | boolean | undefined;
    sandbox?: boolean | undefined;
    linking?: boolean | undefined;
    projects?: boolean | undefined;
    v0?: boolean | undefined;
    importResource?: boolean | undefined;
    connectedImportResource?: boolean | undefined;
    nativeImportResource?: boolean | undefined;
    databaseUI?: boolean | undefined;
};
export declare const CreateIntegrationStoreDirectIntegrationsType: {
    readonly Object: "object";
};
export type CreateIntegrationStoreDirectIntegrationsType = ClosedEnum<typeof CreateIntegrationStoreDirectIntegrationsType>;
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10Type: {
    readonly String: "string";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10Type = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10Type>;
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiControl: {
    readonly GitNamespace: "git-namespace";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiControl = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiControl>;
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3>;
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnly = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3;
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3>;
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHidden = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3;
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3>;
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabled = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3;
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescription = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2 | string;
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue = {
    expr: string;
};
export declare const PropertiesGitProviders: {
    readonly Github: "github";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type PropertiesGitProviders = ClosedEnum<typeof PropertiesGitProviders>;
export type CreateIntegrationStoreDirectProperties10 = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10Type;
    uiControl: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiControl;
    description?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3 | undefined;
    uiHidden?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3 | undefined;
    uiDisabled?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3 | undefined;
    uiDescription?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2 | string | undefined;
    uiFormattedValue?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
    gitProviders?: Array<PropertiesGitProviders> | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaType: {
    readonly String: "string";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaType = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaType>;
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiControl: {
    readonly Domain: "domain";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiControl = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiControl>;
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3>;
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnly = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3;
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3>;
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHidden = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3;
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3>;
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabled = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3;
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescription = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2 | string;
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue = {
    expr: string;
};
export type CreateIntegrationStoreDirectProperties9 = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaType;
    uiControl: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiControl;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    description?: string | undefined;
    default?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3 | undefined;
    uiHidden?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3 | undefined;
    uiDisabled?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3 | undefined;
    uiDescription?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2 | string | undefined;
    uiFormattedValue?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductType: {
    readonly Array: "array";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductType = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductType>;
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema8Type: {
    readonly String: "string";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema8Type = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema8Type>;
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseItems = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema8Type;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    enum?: Array<string> | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiControl: {
    readonly MultiVercelRegion: "multi-vercel-region";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiControl = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiControl>;
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody3 = ClosedEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody3>;
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Disabled = CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody3;
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody3 = ClosedEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody3>;
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Hidden = CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody3;
export type CreateIntegrationStoreDirectUiOptionsIntegrations3 = {
    value: string;
    disabled?: CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody3 | undefined;
    hidden?: CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody3 | undefined;
};
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson3 = ClosedEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson3>;
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectUiOptionsIntegrationsResponseDisabled = CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1 | boolean | CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson3;
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson3 = ClosedEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson3>;
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectUiOptionsIntegrationsResponseHidden = CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1 | boolean | CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson3;
export type CreateIntegrationStoreDirectUiOptionsIntegrations1 = {
    value: string;
    label: string;
    disabled?: CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1 | boolean | CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson3 | undefined;
    hidden?: CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1 | boolean | CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson3 | undefined;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptions = CreateIntegrationStoreDirectUiOptionsIntegrations1 | CreateIntegrationStoreDirectUiOptionsIntegrations3 | string;
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3>;
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnly = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3;
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3>;
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHidden = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3;
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3>;
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabled = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3;
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescription = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2 | string;
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue = {
    expr: string;
};
export type CreateIntegrationStoreDirectProperties8 = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductType;
    items: CreateIntegrationStoreDirectPropertiesIntegrationsResponseItems;
    uiControl: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiControl;
    uiOptions: Array<CreateIntegrationStoreDirectUiOptionsIntegrations1 | CreateIntegrationStoreDirectUiOptionsIntegrations3 | string>;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    description?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3 | undefined;
    uiHidden?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3 | undefined;
    uiDisabled?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3 | undefined;
    uiDescription?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2 | string | undefined;
    uiFormattedValue?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
    default?: Array<string> | undefined;
    example?: Array<string> | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreType: {
    readonly String: "string";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreType = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreType>;
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiControl: {
    readonly VercelRegion: "vercel-region";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiControl = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiControl>;
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse2003: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse2003 = ClosedEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse2003>;
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse2001 = {
    expr: string;
};
export type CreateIntegrationStoreDirectUiOptionsIntegrationsDisabled = CreateIntegrationStoreDirectDisabledIntegrationsResponse2001 | boolean | CreateIntegrationStoreDirectDisabledIntegrationsResponse2003;
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse2003: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse2003 = ClosedEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse2003>;
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse2001 = {
    expr: string;
};
export type CreateIntegrationStoreDirectUiOptionsIntegrationsHidden = CreateIntegrationStoreDirectHiddenIntegrationsResponse2001 | boolean | CreateIntegrationStoreDirectHiddenIntegrationsResponse2003;
export type CreateIntegrationStoreDirectUiOptions3 = {
    value: string;
    disabled?: CreateIntegrationStoreDirectDisabledIntegrationsResponse2001 | boolean | CreateIntegrationStoreDirectDisabledIntegrationsResponse2003 | undefined;
    hidden?: CreateIntegrationStoreDirectHiddenIntegrationsResponse2001 | boolean | CreateIntegrationStoreDirectHiddenIntegrationsResponse2003 | undefined;
};
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse3 = ClosedEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse3>;
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectUiOptionsDisabled = CreateIntegrationStoreDirectDisabledIntegrationsResponse1 | boolean | CreateIntegrationStoreDirectDisabledIntegrationsResponse3;
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse3 = ClosedEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse3>;
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectUiOptionsHidden = CreateIntegrationStoreDirectHiddenIntegrationsResponse1 | boolean | CreateIntegrationStoreDirectHiddenIntegrationsResponse3;
export type CreateIntegrationStoreDirectUiOptions1 = {
    value: string;
    label: string;
    disabled?: CreateIntegrationStoreDirectDisabledIntegrationsResponse1 | boolean | CreateIntegrationStoreDirectDisabledIntegrationsResponse3 | undefined;
    hidden?: CreateIntegrationStoreDirectHiddenIntegrationsResponse1 | boolean | CreateIntegrationStoreDirectHiddenIntegrationsResponse3 | undefined;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiOptions = CreateIntegrationStoreDirectUiOptions1 | CreateIntegrationStoreDirectUiOptions3 | string;
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore3>;
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnly = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore3;
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore3>;
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHidden = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore3;
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore3>;
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabled = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore3;
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescription = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2 | string;
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue = {
    expr: string;
};
export type CreateIntegrationStoreDirectProperties7 = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreType;
    uiControl: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiControl;
    uiOptions: Array<CreateIntegrationStoreDirectUiOptions1 | CreateIntegrationStoreDirectUiOptions3 | string>;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    description?: string | undefined;
    default?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore3 | undefined;
    uiHidden?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore3 | undefined;
    uiDisabled?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore3 | undefined;
    uiDescription?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2 | string | undefined;
    uiFormattedValue?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType: {
    readonly Array: "array";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType>;
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema6Type: {
    readonly String: "string";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema6Type = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema6Type>;
export type CreateIntegrationStoreDirectPropertiesIntegrationsItems = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema6Type;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    enum?: Array<string> | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl: {
    readonly MultiSelect: "multi-select";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl>;
export declare const CreateIntegrationStoreDirectDisabledIntegrations3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectDisabledIntegrations3 = ClosedEnum<typeof CreateIntegrationStoreDirectDisabledIntegrations3>;
export type CreateIntegrationStoreDirectDisabledIntegrations1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsDisabled = CreateIntegrationStoreDirectDisabledIntegrations1 | boolean | CreateIntegrationStoreDirectDisabledIntegrations3;
export declare const CreateIntegrationStoreDirectHiddenIntegrations3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectHiddenIntegrations3 = ClosedEnum<typeof CreateIntegrationStoreDirectHiddenIntegrations3>;
export type CreateIntegrationStoreDirectHiddenIntegrations1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsHidden = CreateIntegrationStoreDirectHiddenIntegrations1 | boolean | CreateIntegrationStoreDirectHiddenIntegrations3;
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiOptions = {
    value: string;
    label: string;
    disabled?: CreateIntegrationStoreDirectDisabledIntegrations1 | boolean | CreateIntegrationStoreDirectDisabledIntegrations3 | undefined;
    hidden?: CreateIntegrationStoreDirectHiddenIntegrations1 | boolean | CreateIntegrationStoreDirectHiddenIntegrations3 | undefined;
};
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3>;
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3;
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3>;
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3;
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3>;
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3;
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2 | string;
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue = {
    expr: string;
};
export type CreateIntegrationStoreDirectProperties6 = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType;
    items: CreateIntegrationStoreDirectPropertiesIntegrationsItems;
    uiControl: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl;
    uiOptions: Array<CreateIntegrationStoreDirectPropertiesIntegrationsUiOptions>;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    description?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3 | undefined;
    uiHidden?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3 | undefined;
    uiDisabled?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3 | undefined;
    uiDescription?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2 | string | undefined;
    uiFormattedValue?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
    default?: Array<string> | undefined;
    example?: Array<string> | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONType: {
    readonly String: "string";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONType = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONType>;
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiControl: {
    readonly Select: "select";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiControl = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiControl>;
export declare const CreateIntegrationStoreDirectDisabled3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectDisabled3 = ClosedEnum<typeof CreateIntegrationStoreDirectDisabled3>;
export type CreateIntegrationStoreDirectDisabled1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesDisabled = CreateIntegrationStoreDirectDisabled1 | boolean | CreateIntegrationStoreDirectDisabled3;
export declare const CreateIntegrationStoreDirectHidden3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectHidden3 = ClosedEnum<typeof CreateIntegrationStoreDirectHidden3>;
export type CreateIntegrationStoreDirectHidden1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesHidden = CreateIntegrationStoreDirectHidden1 | boolean | CreateIntegrationStoreDirectHidden3;
export type CreateIntegrationStoreDirectPropertiesUiOptions = {
    value: string;
    label: string;
    disabled?: CreateIntegrationStoreDirectDisabled1 | boolean | CreateIntegrationStoreDirectDisabled3 | undefined;
    hidden?: CreateIntegrationStoreDirectHidden1 | boolean | CreateIntegrationStoreDirectHidden3 | undefined;
};
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson3>;
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson3;
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson3>;
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHidden = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson3;
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson3>;
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabled = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson3;
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescription = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2 | string;
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue = {
    expr: string;
};
export type CreateIntegrationStoreDirectProperties5 = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONType;
    uiControl: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiControl;
    uiOptions: Array<CreateIntegrationStoreDirectPropertiesUiOptions>;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    description?: string | undefined;
    default?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson3 | undefined;
    uiHidden?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson3 | undefined;
    uiDisabled?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson3 | undefined;
    uiDescription?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2 | string | undefined;
    uiFormattedValue?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200Type: {
    readonly Array: "array";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200Type = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200Type>;
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema4Type: {
    readonly Number: "number";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema4Type = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema4Type>;
export type CreateIntegrationStoreDirectPropertiesItems = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema4Type;
    description?: string | undefined;
    minimum?: number | undefined;
    exclusiveMinimum?: number | undefined;
    maximum?: number | undefined;
    exclusiveMaximum?: number | undefined;
    default?: number | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiControl: {
    readonly Slider: "slider";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiControl = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiControl>;
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2003: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2003 = ClosedEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2003>;
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnly = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2003;
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2003: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2003 = ClosedEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2003>;
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiHidden = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2003;
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2003: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2003 = ClosedEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2003>;
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabled = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2003;
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescription = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002 | string;
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue = {
    expr: string;
};
export type CreateIntegrationStoreDirectProperties4 = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200Type;
    items: CreateIntegrationStoreDirectPropertiesItems;
    uiControl: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiControl;
    uiSteps: Array<number>;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    description?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2003 | undefined;
    uiHidden?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2003 | undefined;
    uiDisabled?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2003 | undefined;
    uiDescription?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002 | string | undefined;
    uiFormattedValue?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue | undefined;
    default?: Array<number> | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseType: {
    readonly Boolean: "boolean";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseType = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponseType>;
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiControl: {
    readonly Toggle: "toggle";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiControl = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiControl>;
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse3>;
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnly = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse3;
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse3>;
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiHidden = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse3;
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse3>;
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabled = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse3;
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDescription = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2 | string;
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue = {
    expr: string;
};
export type CreateIntegrationStoreDirectProperties3 = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsResponseType;
    uiControl: CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiControl;
    description?: string | undefined;
    default?: boolean | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse3 | undefined;
    uiHidden?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrationsResponse3 | undefined;
    uiDisabled?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrationsResponse3 | undefined;
    uiDescription?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2 | string | undefined;
    uiFormattedValue?: CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsType: {
    readonly Number: "number";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsType = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsType>;
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiControl: {
    readonly Input: "input";
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiControl = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsUiControl>;
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrations3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiReadOnlyIntegrations3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrations3>;
export type CreateIntegrationStoreDirectUiReadOnlyIntegrations1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiReadOnly = CreateIntegrationStoreDirectUiReadOnlyIntegrations1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrations3;
export declare const CreateIntegrationStoreDirectUiHiddenIntegrations3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiHiddenIntegrations3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrations3>;
export type CreateIntegrationStoreDirectUiHiddenIntegrations1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiHidden = CreateIntegrationStoreDirectUiHiddenIntegrations1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrations3;
export declare const CreateIntegrationStoreDirectUiDisabledIntegrations3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiDisabledIntegrations3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrations3>;
export type CreateIntegrationStoreDirectUiDisabledIntegrations1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiDisabled = CreateIntegrationStoreDirectUiDisabledIntegrations1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrations3;
export type CreateIntegrationStoreDirectUiDescriptionIntegrations2 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiDescription = CreateIntegrationStoreDirectUiDescriptionIntegrations2 | string;
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue = {
    expr: string;
};
export type CreateIntegrationStoreDirectProperties2 = {
    type: CreateIntegrationStoreDirectPropertiesIntegrationsType;
    uiControl: CreateIntegrationStoreDirectPropertiesIntegrationsUiControl;
    maximum?: number | undefined;
    exclusiveMaximum?: number | undefined;
    minimum?: number | undefined;
    exclusiveMinimum?: number | undefined;
    description?: string | undefined;
    default?: number | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: CreateIntegrationStoreDirectUiReadOnlyIntegrations1 | boolean | CreateIntegrationStoreDirectUiReadOnlyIntegrations3 | undefined;
    uiHidden?: CreateIntegrationStoreDirectUiHiddenIntegrations1 | boolean | CreateIntegrationStoreDirectUiHiddenIntegrations3 | undefined;
    uiDisabled?: CreateIntegrationStoreDirectUiDisabledIntegrations1 | boolean | CreateIntegrationStoreDirectUiDisabledIntegrations3 | undefined;
    uiDescription?: CreateIntegrationStoreDirectUiDescriptionIntegrations2 | string | undefined;
    uiFormattedValue?: CreateIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
};
export declare const CreateIntegrationStoreDirectPropertiesType: {
    readonly String: "string";
};
export type CreateIntegrationStoreDirectPropertiesType = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesType>;
export declare const CreateIntegrationStoreDirectPropertiesUiControl: {
    readonly Input: "input";
};
export type CreateIntegrationStoreDirectPropertiesUiControl = ClosedEnum<typeof CreateIntegrationStoreDirectPropertiesUiControl>;
export declare const CreateIntegrationStoreDirectUiReadOnly3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiReadOnly3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiReadOnly3>;
export type CreateIntegrationStoreDirectUiReadOnly1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesUiReadOnly = CreateIntegrationStoreDirectUiReadOnly1 | boolean | CreateIntegrationStoreDirectUiReadOnly3;
export declare const CreateIntegrationStoreDirectUiHidden3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiHidden3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiHidden3>;
export type CreateIntegrationStoreDirectUiHidden1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesUiHidden = CreateIntegrationStoreDirectUiHidden1 | boolean | CreateIntegrationStoreDirectUiHidden3;
export declare const CreateIntegrationStoreDirectUiDisabled3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type CreateIntegrationStoreDirectUiDisabled3 = ClosedEnum<typeof CreateIntegrationStoreDirectUiDisabled3>;
export type CreateIntegrationStoreDirectUiDisabled1 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesUiDisabled = CreateIntegrationStoreDirectUiDisabled1 | boolean | CreateIntegrationStoreDirectUiDisabled3;
export type CreateIntegrationStoreDirectUiDescription2 = {
    expr: string;
};
export type CreateIntegrationStoreDirectPropertiesUiDescription = CreateIntegrationStoreDirectUiDescription2 | string;
export type CreateIntegrationStoreDirectPropertiesUiFormattedValue = {
    expr: string;
};
export type CreateIntegrationStoreDirectProperties1 = {
    type: CreateIntegrationStoreDirectPropertiesType;
    uiControl: CreateIntegrationStoreDirectPropertiesUiControl;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    description?: string | undefined;
    default?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: CreateIntegrationStoreDirectUiReadOnly1 | boolean | CreateIntegrationStoreDirectUiReadOnly3 | undefined;
    uiHidden?: CreateIntegrationStoreDirectUiHidden1 | boolean | CreateIntegrationStoreDirectUiHidden3 | undefined;
    uiDisabled?: CreateIntegrationStoreDirectUiDisabled1 | boolean | CreateIntegrationStoreDirectUiDisabled3 | undefined;
    uiDescription?: CreateIntegrationStoreDirectUiDescription2 | string | undefined;
    uiFormattedValue?: CreateIntegrationStoreDirectPropertiesUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
};
export type CreateIntegrationStoreDirectProperties = CreateIntegrationStoreDirectProperties4 | CreateIntegrationStoreDirectProperties6 | CreateIntegrationStoreDirectProperties8 | CreateIntegrationStoreDirectProperties5 | CreateIntegrationStoreDirectProperties7 | CreateIntegrationStoreDirectProperties1 | CreateIntegrationStoreDirectProperties2 | CreateIntegrationStoreDirectProperties3 | CreateIntegrationStoreDirectProperties9 | CreateIntegrationStoreDirectProperties10;
export type CreateIntegrationStoreDirectMetadataSchema = {
    type: CreateIntegrationStoreDirectIntegrationsType;
    properties: {
        [k: string]: CreateIntegrationStoreDirectProperties4 | CreateIntegrationStoreDirectProperties6 | CreateIntegrationStoreDirectProperties8 | CreateIntegrationStoreDirectProperties5 | CreateIntegrationStoreDirectProperties7 | CreateIntegrationStoreDirectProperties1 | CreateIntegrationStoreDirectProperties2 | CreateIntegrationStoreDirectProperties3 | CreateIntegrationStoreDirectProperties9 | CreateIntegrationStoreDirectProperties10;
    };
    required?: Array<string> | undefined;
};
export type ResourceLinks = {
    href: string;
    title: string;
};
export declare const CreateIntegrationStoreDirectTags: {
    readonly EdgeConfig: "edge-config";
    readonly Redis: "redis";
    readonly Postgres: "postgres";
    readonly Blob: "blob";
    readonly Experimentation: "experimentation";
    readonly Checks: "checks";
    readonly Storage: "storage";
    readonly Ai: "ai";
    readonly Observability: "observability";
    readonly Video: "video";
    readonly Authentication: "authentication";
    readonly Workflow: "workflow";
    readonly LogDrain: "logDrain";
    readonly TraceDrain: "traceDrain";
    readonly Messaging: "messaging";
    readonly Other: "other";
    readonly Mysql: "mysql";
    readonly Kv: "kv";
    readonly Vector: "vector";
    readonly Libsql: "libsql";
    readonly Sqlite: "sqlite";
    readonly Rds: "rds";
    readonly Drains: "drains";
    readonly Mcp: "mcp";
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
    readonly TagChecks: "tag_checks";
    readonly TagStorage: "tag_storage";
    readonly TagLogDrain: "tag_logDrain";
    readonly TagTraceDrain: "tag_traceDrain";
    readonly TagOther: "tag_other";
};
export type CreateIntegrationStoreDirectTags = ClosedEnum<typeof CreateIntegrationStoreDirectTags>;
export declare const ProjectConnectionScopes: {
    readonly ReadDeployment: "read:deployment";
    readonly ReadDomain: "read:domain";
    readonly ReadProject: "read:project";
    readonly ReadWriteDeployment: "read-write:deployment";
    readonly ReadWriteDeploymentCheck: "read-write:deployment-check";
    readonly ReadWriteDomain: "read-write:domain";
    readonly ReadWriteGlobalProjectEnvVars: "read-write:global-project-env-vars";
    readonly ReadWriteIntegrationDeploymentAction: "read-write:integration-deployment-action";
    readonly ReadWriteLogDrain: "read-write:log-drain";
    readonly ReadWriteDrains: "read-write:drains";
    readonly ReadWriteProjectEnvVars: "read-write:project-env-vars";
    readonly ReadWriteProjectProtectionBypass: "read-write:project-protection-bypass";
};
export type ProjectConnectionScopes = ClosedEnum<typeof ProjectConnectionScopes>;
export type Repl = {
    enabled: boolean;
    supportsReadOnlyMode: boolean;
    welcomeMessage?: string | undefined;
};
export declare const CreateIntegrationStoreDirectIntegrationsResponseType: {
    readonly ConnectToProject: "connect_to_project";
    readonly ConfigureProjectConnections: "configure_project_connections";
    readonly AddDrain: "add_drain";
};
export type CreateIntegrationStoreDirectIntegrationsResponseType = ClosedEnum<typeof CreateIntegrationStoreDirectIntegrationsResponseType>;
export type CreateIntegrationStoreDirectIntegrationsActions = {
    type: CreateIntegrationStoreDirectIntegrationsResponseType;
};
export type Steps = {
    title: string;
    content: string;
    actions?: Array<CreateIntegrationStoreDirectIntegrationsActions> | undefined;
};
export type Guides = {
    framework: string;
    title: string;
    steps: Array<Steps>;
};
export type CreateIntegrationStoreDirectIntegration = {
    id: string;
    name: string;
    slug: string;
    supportsInstallationBillingPlans?: boolean | undefined;
    icon: string;
    flags?: Array<string> | undefined;
};
export declare const SupportedProtocols: {
    readonly Experimentation: "experimentation";
    readonly Checks: "checks";
    readonly Storage: "storage";
    readonly Ai: "ai";
    readonly Observability: "observability";
    readonly Video: "video";
    readonly Authentication: "authentication";
    readonly Workflow: "workflow";
    readonly LogDrain: "logDrain";
    readonly TraceDrain: "traceDrain";
    readonly Messaging: "messaging";
    readonly Other: "other";
};
export type SupportedProtocols = ClosedEnum<typeof SupportedProtocols>;
export declare const CreateIntegrationStoreDirectPrimaryProtocol: {
    readonly Experimentation: "experimentation";
    readonly Checks: "checks";
    readonly Storage: "storage";
    readonly Ai: "ai";
    readonly Observability: "observability";
    readonly Video: "video";
    readonly Authentication: "authentication";
    readonly Workflow: "workflow";
    readonly LogDrain: "logDrain";
    readonly TraceDrain: "traceDrain";
    readonly Messaging: "messaging";
    readonly Other: "other";
};
export type CreateIntegrationStoreDirectPrimaryProtocol = ClosedEnum<typeof CreateIntegrationStoreDirectPrimaryProtocol>;
export declare const LogDrainStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type LogDrainStatus = ClosedEnum<typeof LogDrainStatus>;
export type Product = {
    id?: string | undefined;
    name?: string | undefined;
    slug?: string | undefined;
    iconUrl?: string | undefined;
    capabilities?: CreateIntegrationStoreDirectCapabilities | undefined;
    shortDescription?: string | undefined;
    metadataSchema?: CreateIntegrationStoreDirectMetadataSchema | undefined;
    resourceLinks?: Array<ResourceLinks> | undefined;
    tags?: Array<CreateIntegrationStoreDirectTags> | undefined;
    projectConnectionScopes?: Array<ProjectConnectionScopes> | undefined;
    showSSOLinkOnProjectConnection?: boolean | undefined;
    disableResourceRenaming?: boolean | undefined;
    /**
     * Custom resource title to display during installation and configuration. If not provided, defaults to protocol-based defaults.
     */
    resourceTitle?: string | undefined;
    /**
     * URL to a skill/guide for how AI agents should use this product. Providers can specify this to help agents understand how to interact with their integration.
     */
    agentSkillUrl?: string | undefined;
    repl?: Repl | undefined;
    guides?: Array<Guides> | undefined;
    integration: CreateIntegrationStoreDirectIntegration;
    integrationConfigurationId: string;
    supportedProtocols: Array<SupportedProtocols>;
    primaryProtocol?: CreateIntegrationStoreDirectPrimaryProtocol | undefined;
    logDrainStatus?: LogDrainStatus | undefined;
};
export type CreateIntegrationStoreDirectExperimentation = {
    edgeConfigSyncingEnabled?: boolean | undefined;
    edgeConfigId?: string | undefined;
    edgeConfigTokenId?: string | undefined;
};
export type CreateIntegrationStoreDirectProtocolSettings = {
    experimentation?: CreateIntegrationStoreDirectExperimentation | undefined;
};
export declare const CreateIntegrationStoreDirectLevel: {
    readonly Error: "error";
    readonly Info: "info";
    readonly Warn: "warn";
};
export type CreateIntegrationStoreDirectLevel = ClosedEnum<typeof CreateIntegrationStoreDirectLevel>;
export type CreateIntegrationStoreDirectNotification = {
    title: string;
    level: CreateIntegrationStoreDirectLevel;
    message?: string | undefined;
    href?: string | undefined;
};
export type CreateIntegrationStoreDirectSecrets = {
    name: string;
    length: number;
};
export declare const CreateIntegrationStoreDirectType: {
    readonly Prepayment: "prepayment";
    readonly Subscription: "subscription";
};
export type CreateIntegrationStoreDirectType = ClosedEnum<typeof CreateIntegrationStoreDirectType>;
export declare const CreateIntegrationStoreDirectScope: {
    readonly Installation: "installation";
    readonly Resource: "resource";
};
export type CreateIntegrationStoreDirectScope = ClosedEnum<typeof CreateIntegrationStoreDirectScope>;
export type CreateIntegrationStoreDirectDetails = {
    label: string;
    value?: string | undefined;
};
export type CreateIntegrationStoreDirectHighlightedDetails = {
    label: string;
    value?: string | undefined;
};
export type CreateIntegrationStoreDirectQuote = {
    line: string;
    amount: string;
};
export type CreateIntegrationStoreDirectBillingPlan = {
    type: CreateIntegrationStoreDirectType;
    description: string;
    id: string;
    name: string;
    scope: CreateIntegrationStoreDirectScope;
    paymentMethodRequired: boolean;
    preauthorizationAmount?: number | undefined;
    initialCharge?: string | undefined;
    minimumAmount?: string | undefined;
    maximumAmount?: string | undefined;
    maximumAmountAutoPurchasePerPeriod?: string | undefined;
    cost?: string | undefined;
    details?: Array<CreateIntegrationStoreDirectDetails> | undefined;
    highlightedDetails?: Array<CreateIntegrationStoreDirectHighlightedDetails> | undefined;
    quote?: Array<CreateIntegrationStoreDirectQuote> | undefined;
    effectiveDate?: string | undefined;
    disabled?: boolean | undefined;
};
/**
 * The deployment targets that this resource is available for.
 */
export declare const CreateIntegrationStoreDirectTargets: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
/**
 * The deployment targets that this resource is available for.
 */
export type CreateIntegrationStoreDirectTargets = ClosedEnum<typeof CreateIntegrationStoreDirectTargets>;
export type CreateIntegrationStoreDirectStore = {
    projectsMetadata: Array<CreateIntegrationStoreDirectProjectsMetadata>;
    projectFilter?: ProjectFilter | undefined;
    totalConnectedProjects?: number | undefined;
    usageQuotaExceeded: boolean;
    status: CreateIntegrationStoreDirectStatus | null;
    ownership?: CreateIntegrationStoreDirectOwnership | undefined;
    capabilities?: Capabilities | undefined;
    metadata?: {
        [k: string]: string | number | Array<string> | Array<number> | boolean;
    } | undefined;
    externalResourceId: string;
    externalResourceStatus?: ExternalResourceStatus | null | undefined;
    directPartnerConsoleUrl?: string | undefined;
    product: Product;
    protocolSettings?: CreateIntegrationStoreDirectProtocolSettings | undefined;
    notification?: CreateIntegrationStoreDirectNotification | undefined;
    secrets: Array<CreateIntegrationStoreDirectSecrets>;
    billingPlan?: CreateIntegrationStoreDirectBillingPlan | undefined;
    /**
     * The timestamp when secret rotation was requested.
     */
    secretRotationRequestedAt?: number | undefined;
    /**
     * The reason for the secret rotation request.
     */
    secretRotationRequestedReason?: string | undefined;
    /**
     * The ID of the user/team who requested the secret rotation.
     */
    secretRotationRequestedBy?: string | undefined;
    /**
     * The timestamp when secret rotation was completed.
     */
    secretRotationCompletedAt?: number | undefined;
    /**
     * The ID of the parent resource. Used to establish a parent-child relationship between resources, such as sandbox resources linking to their owner account resource.
     */
    parentId?: string | undefined;
    /**
     * The deployment targets that this resource is available for.
     */
    targets?: Array<CreateIntegrationStoreDirectTargets> | undefined;
};
export type CreateIntegrationStoreDirectResponseBody = {
    store: CreateIntegrationStoreDirectStore | null;
};
/** @internal */
export declare const CreateIntegrationStoreDirectMetadata$inboundSchema: z.ZodType<CreateIntegrationStoreDirectMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectMetadata$Outbound = string | number | boolean | Array<string> | Array<number>;
/** @internal */
export declare const CreateIntegrationStoreDirectMetadata$outboundSchema: z.ZodType<CreateIntegrationStoreDirectMetadata$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectMetadata>;
export declare function createIntegrationStoreDirectMetadataToJSON(createIntegrationStoreDirectMetadata: CreateIntegrationStoreDirectMetadata): string;
export declare function createIntegrationStoreDirectMetadataFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectMetadata, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectSource$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectSource>;
/** @internal */
export declare const CreateIntegrationStoreDirectSource$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectSource>;
/** @internal */
export declare const CreateIntegrationStoreDirectRequestBody$inboundSchema: z.ZodType<CreateIntegrationStoreDirectRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectRequestBody$Outbound = {
    name: string;
    integrationConfigurationId: string;
    integrationProductIdOrSlug?: any | undefined;
    metadata?: {
        [k: string]: string | number | boolean | Array<string> | Array<number>;
    } | undefined;
    externalId?: string | undefined;
    protocolSettings?: {
        [k: string]: any;
    } | undefined;
    source: string;
    billingPlanId?: string | undefined;
    paymentMethodId?: string | undefined;
    prepaymentAmountCents?: number | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectRequestBody$outboundSchema: z.ZodType<CreateIntegrationStoreDirectRequestBody$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectRequestBody>;
export declare function createIntegrationStoreDirectRequestBodyToJSON(createIntegrationStoreDirectRequestBody: CreateIntegrationStoreDirectRequestBody): string;
export declare function createIntegrationStoreDirectRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectRequest$inboundSchema: z.ZodType<CreateIntegrationStoreDirectRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateIntegrationStoreDirectRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectRequest$outboundSchema: z.ZodType<CreateIntegrationStoreDirectRequest$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectRequest>;
export declare function createIntegrationStoreDirectRequestToJSON(createIntegrationStoreDirectRequest: CreateIntegrationStoreDirectRequest): string;
export declare function createIntegrationStoreDirectRequestFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectRequest, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectFramework$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectFramework>;
/** @internal */
export declare const CreateIntegrationStoreDirectFramework$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectFramework>;
/** @internal */
export declare const CreateIntegrationStoreDirectEnvironments$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectEnvironments>;
/** @internal */
export declare const CreateIntegrationStoreDirectEnvironments$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectEnvironments>;
/** @internal */
export declare const CreateIntegrationStoreDirectIntegrationsEnvironments$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectIntegrationsEnvironments>;
/** @internal */
export declare const CreateIntegrationStoreDirectIntegrationsEnvironments$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectIntegrationsEnvironments>;
/** @internal */
export declare const CreateIntegrationStoreDirectActions$inboundSchema: z.ZodType<CreateIntegrationStoreDirectActions, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectActions$Outbound = {
    slug: string;
    environments: Array<string>;
};
/** @internal */
export declare const CreateIntegrationStoreDirectActions$outboundSchema: z.ZodType<CreateIntegrationStoreDirectActions$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectActions>;
export declare function createIntegrationStoreDirectActionsToJSON(createIntegrationStoreDirectActions: CreateIntegrationStoreDirectActions): string;
export declare function createIntegrationStoreDirectActionsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectActions, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectDeployments$inboundSchema: z.ZodType<CreateIntegrationStoreDirectDeployments, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectDeployments$Outbound = {
    required: boolean;
    actions: Array<CreateIntegrationStoreDirectActions$Outbound>;
};
/** @internal */
export declare const CreateIntegrationStoreDirectDeployments$outboundSchema: z.ZodType<CreateIntegrationStoreDirectDeployments$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectDeployments>;
export declare function createIntegrationStoreDirectDeploymentsToJSON(createIntegrationStoreDirectDeployments: CreateIntegrationStoreDirectDeployments): string;
export declare function createIntegrationStoreDirectDeploymentsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectDeployments, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProjectsMetadata$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProjectsMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProjectsMetadata$Outbound = {
    id: string;
    projectId: string;
    name: string;
    framework?: string | null | undefined;
    latestDeployment?: string | undefined;
    environments: Array<string>;
    envVarPrefix: string | null;
    environmentVariables: Array<string>;
    deployments?: CreateIntegrationStoreDirectDeployments$Outbound | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProjectsMetadata$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProjectsMetadata$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProjectsMetadata>;
export declare function createIntegrationStoreDirectProjectsMetadataToJSON(createIntegrationStoreDirectProjectsMetadata: CreateIntegrationStoreDirectProjectsMetadata): string;
export declare function createIntegrationStoreDirectProjectsMetadataFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProjectsMetadata, SDKValidationError>;
/** @internal */
export declare const Providers2$inboundSchema: z.ZodNativeEnum<typeof Providers2>;
/** @internal */
export declare const Providers2$outboundSchema: z.ZodNativeEnum<typeof Providers2>;
/** @internal */
export declare const Providers1$inboundSchema: z.ZodNativeEnum<typeof Providers1>;
/** @internal */
export declare const Providers1$outboundSchema: z.ZodNativeEnum<typeof Providers1>;
/** @internal */
export declare const Providers$inboundSchema: z.ZodType<Providers, z.ZodTypeDef, unknown>;
/** @internal */
export type Providers$Outbound = Array<string> | string;
/** @internal */
export declare const Providers$outboundSchema: z.ZodType<Providers$Outbound, z.ZodTypeDef, Providers>;
export declare function providersToJSON(providers: Providers): string;
export declare function providersFromJSON(jsonString: string): SafeParseResult<Providers, SDKValidationError>;
/** @internal */
export declare const Git$inboundSchema: z.ZodType<Git, z.ZodTypeDef, unknown>;
/** @internal */
export type Git$Outbound = {
    providers: Array<string> | string;
    owners?: Array<string> | undefined;
    repos?: Array<string> | undefined;
};
/** @internal */
export declare const Git$outboundSchema: z.ZodType<Git$Outbound, z.ZodTypeDef, Git>;
export declare function gitToJSON(git: Git): string;
export declare function gitFromJSON(jsonString: string): SafeParseResult<Git, SDKValidationError>;
/** @internal */
export declare const ProjectFilter$inboundSchema: z.ZodType<ProjectFilter, z.ZodTypeDef, unknown>;
/** @internal */
export type ProjectFilter$Outbound = {
    git?: Git$Outbound | undefined;
};
/** @internal */
export declare const ProjectFilter$outboundSchema: z.ZodType<ProjectFilter$Outbound, z.ZodTypeDef, ProjectFilter>;
export declare function projectFilterToJSON(projectFilter: ProjectFilter): string;
export declare function projectFilterFromJSON(jsonString: string): SafeParseResult<ProjectFilter, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectStatus$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectStatus>;
/** @internal */
export declare const CreateIntegrationStoreDirectStatus$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectStatus>;
/** @internal */
export declare const CreateIntegrationStoreDirectOwnership$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectOwnership>;
/** @internal */
export declare const CreateIntegrationStoreDirectOwnership$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectOwnership>;
/** @internal */
export declare const SecretRotation1$inboundSchema: z.ZodType<SecretRotation1, z.ZodTypeDef, unknown>;
/** @internal */
export type SecretRotation1$Outbound = {
    maxDelayHours: number;
};
/** @internal */
export declare const SecretRotation1$outboundSchema: z.ZodType<SecretRotation1$Outbound, z.ZodTypeDef, SecretRotation1>;
export declare function secretRotation1ToJSON(secretRotation1: SecretRotation1): string;
export declare function secretRotation1FromJSON(jsonString: string): SafeParseResult<SecretRotation1, SDKValidationError>;
/** @internal */
export declare const SecretRotation$inboundSchema: z.ZodType<SecretRotation, z.ZodTypeDef, unknown>;
/** @internal */
export type SecretRotation$Outbound = SecretRotation1$Outbound | boolean;
/** @internal */
export declare const SecretRotation$outboundSchema: z.ZodType<SecretRotation$Outbound, z.ZodTypeDef, SecretRotation>;
export declare function secretRotationToJSON(secretRotation: SecretRotation): string;
export declare function secretRotationFromJSON(jsonString: string): SafeParseResult<SecretRotation, SDKValidationError>;
/** @internal */
export declare const Capabilities$inboundSchema: z.ZodType<Capabilities, z.ZodTypeDef, unknown>;
/** @internal */
export type Capabilities$Outbound = {
    mcp?: boolean | undefined;
    mcpReadonly?: boolean | undefined;
    sso?: boolean | undefined;
    billable?: boolean | undefined;
    transferable?: boolean | undefined;
    secretsSync?: boolean | undefined;
    secretRotation?: SecretRotation1$Outbound | boolean | undefined;
    projects?: boolean | undefined;
    v0?: boolean | undefined;
};
/** @internal */
export declare const Capabilities$outboundSchema: z.ZodType<Capabilities$Outbound, z.ZodTypeDef, Capabilities>;
export declare function capabilitiesToJSON(capabilities: Capabilities): string;
export declare function capabilitiesFromJSON(jsonString: string): SafeParseResult<Capabilities, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectIntegrationsMetadata$inboundSchema: z.ZodType<CreateIntegrationStoreDirectIntegrationsMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectIntegrationsMetadata$Outbound = string | number | Array<string> | Array<number> | boolean;
/** @internal */
export declare const CreateIntegrationStoreDirectIntegrationsMetadata$outboundSchema: z.ZodType<CreateIntegrationStoreDirectIntegrationsMetadata$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectIntegrationsMetadata>;
export declare function createIntegrationStoreDirectIntegrationsMetadataToJSON(createIntegrationStoreDirectIntegrationsMetadata: CreateIntegrationStoreDirectIntegrationsMetadata): string;
export declare function createIntegrationStoreDirectIntegrationsMetadataFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectIntegrationsMetadata, SDKValidationError>;
/** @internal */
export declare const ExternalResourceStatus$inboundSchema: z.ZodNativeEnum<typeof ExternalResourceStatus>;
/** @internal */
export declare const ExternalResourceStatus$outboundSchema: z.ZodNativeEnum<typeof ExternalResourceStatus>;
/** @internal */
export declare const CreateIntegrationStoreDirectSecretRotation1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectSecretRotation1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectSecretRotation1$Outbound = {
    maxDelayHours: number;
};
/** @internal */
export declare const CreateIntegrationStoreDirectSecretRotation1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectSecretRotation1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectSecretRotation1>;
export declare function createIntegrationStoreDirectSecretRotation1ToJSON(createIntegrationStoreDirectSecretRotation1: CreateIntegrationStoreDirectSecretRotation1): string;
export declare function createIntegrationStoreDirectSecretRotation1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectSecretRotation1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectSecretRotation$inboundSchema: z.ZodType<CreateIntegrationStoreDirectSecretRotation, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectSecretRotation$Outbound = CreateIntegrationStoreDirectSecretRotation1$Outbound | boolean;
/** @internal */
export declare const CreateIntegrationStoreDirectSecretRotation$outboundSchema: z.ZodType<CreateIntegrationStoreDirectSecretRotation$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectSecretRotation>;
export declare function createIntegrationStoreDirectSecretRotationToJSON(createIntegrationStoreDirectSecretRotation: CreateIntegrationStoreDirectSecretRotation): string;
export declare function createIntegrationStoreDirectSecretRotationFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectSecretRotation, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectCapabilities$inboundSchema: z.ZodType<CreateIntegrationStoreDirectCapabilities, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectCapabilities$Outbound = {
    mcp?: boolean | undefined;
    mcpReadonly?: boolean | undefined;
    sso?: boolean | undefined;
    billable?: boolean | undefined;
    transferable?: boolean | undefined;
    secretsSync?: boolean | undefined;
    secretRotation?: CreateIntegrationStoreDirectSecretRotation1$Outbound | boolean | undefined;
    sandbox?: boolean | undefined;
    linking?: boolean | undefined;
    projects?: boolean | undefined;
    v0?: boolean | undefined;
    importResource?: boolean | undefined;
    connectedImportResource?: boolean | undefined;
    nativeImportResource?: boolean | undefined;
    databaseUI?: boolean | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectCapabilities$outboundSchema: z.ZodType<CreateIntegrationStoreDirectCapabilities$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectCapabilities>;
export declare function createIntegrationStoreDirectCapabilitiesToJSON(createIntegrationStoreDirectCapabilities: CreateIntegrationStoreDirectCapabilities): string;
export declare function createIntegrationStoreDirectCapabilitiesFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectCapabilities, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectIntegrationsType$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectIntegrationsType>;
/** @internal */
export declare const CreateIntegrationStoreDirectIntegrationsType$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectIntegrationsType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10Type$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10Type>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10Type$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10Type>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiControl$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiControl$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1>;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1ToJSON(createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1): string;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnly$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnly$Outbound = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnly$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnly$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnly>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnlyToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnly: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnly): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnlyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiReadOnly, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1>;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1ToJSON(createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1): string;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHidden$Outbound = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHidden>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHiddenToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHidden: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHidden): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1>;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1ToJSON(createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1): string;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabled$Outbound = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabled>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabledToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabled: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabled): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2>;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2ToJSON(createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2): string;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescription$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescription$Outbound = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescription$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescription$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescription>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescriptionToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescription: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescription): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescriptionFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiDescription, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValueToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValueFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue, SDKValidationError>;
/** @internal */
export declare const PropertiesGitProviders$inboundSchema: z.ZodNativeEnum<typeof PropertiesGitProviders>;
/** @internal */
export declare const PropertiesGitProviders$outboundSchema: z.ZodNativeEnum<typeof PropertiesGitProviders>;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties10$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties10, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProperties10$Outbound = {
    type: string;
    "ui:control": string;
    description?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound | boolean | string | undefined;
    "ui:hidden"?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound | boolean | string | undefined;
    "ui:disabled"?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties1$Outbound | boolean | string | undefined;
    "ui:description"?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaProperties2$Outbound | string | undefined;
    "ui:formatted-value"?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema10UiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
    "git:providers"?: Array<string> | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProperties10$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties10$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProperties10>;
export declare function createIntegrationStoreDirectProperties10ToJSON(createIntegrationStoreDirectProperties10: CreateIntegrationStoreDirectProperties10): string;
export declare function createIntegrationStoreDirectProperties10FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProperties10, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaType$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaType$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiControl$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiControl$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1>;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1ToJSON(createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1): string;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnly$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnly$Outbound = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnly$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnly$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnly>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnlyToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnly: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnly): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnlyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiReadOnly, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1>;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1ToJSON(createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1): string;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHidden$Outbound = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHidden>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHiddenToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHidden: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHidden): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1>;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1ToJSON(createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1): string;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabled$Outbound = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabled>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabledToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabled: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabled): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2>;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2ToJSON(createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2): string;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescription$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescription$Outbound = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescription$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescription$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescription>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescriptionToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescription: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescription): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescriptionFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiDescription, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValueToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValueFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties9$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties9, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProperties9$Outbound = {
    type: string;
    "ui:control": string;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    description?: string | undefined;
    default?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound | boolean | string | undefined;
    "ui:hidden"?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound | boolean | string | undefined;
    "ui:disabled"?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema1$Outbound | boolean | string | undefined;
    "ui:description"?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema2$Outbound | string | undefined;
    "ui:formatted-value"?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchemaUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProperties9$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties9$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProperties9>;
export declare function createIntegrationStoreDirectProperties9ToJSON(createIntegrationStoreDirectProperties9: CreateIntegrationStoreDirectProperties9): string;
export declare function createIntegrationStoreDirectProperties9FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProperties9, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductType$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductType$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema8Type$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema8Type>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema8Type$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema8Type>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseItems$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseItems, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseItems$Outbound = {
    type: string;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    enum?: Array<string> | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseItems$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseItems$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponseItems>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseItemsToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponseItems: CreateIntegrationStoreDirectPropertiesIntegrationsResponseItems): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseItemsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponseItems, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiControl$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiControl$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1>;
export declare function createIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1ToJSON(createIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1: CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1): string;
export declare function createIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Disabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Disabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Disabled$Outbound = CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Disabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Disabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Disabled>;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsResponse200DisabledToJSON(createIntegrationStoreDirectUiOptionsIntegrationsResponse200Disabled: CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Disabled): string;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsResponse200DisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Disabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1>;
export declare function createIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1ToJSON(createIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1: CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1): string;
export declare function createIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Hidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Hidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Hidden$Outbound = CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Hidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Hidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Hidden>;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsResponse200HiddenToJSON(createIntegrationStoreDirectUiOptionsIntegrationsResponse200Hidden: CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Hidden): string;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsResponse200HiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptionsIntegrationsResponse200Hidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrations3$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrations3, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptionsIntegrations3$Outbound = {
    value: string;
    disabled?: CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string | undefined;
    hidden?: CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrations3$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrations3$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptionsIntegrations3>;
export declare function createIntegrationStoreDirectUiOptionsIntegrations3ToJSON(createIntegrationStoreDirectUiOptionsIntegrations3: CreateIntegrationStoreDirectUiOptionsIntegrations3): string;
export declare function createIntegrationStoreDirectUiOptionsIntegrations3FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptionsIntegrations3, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1>;
export declare function createIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSON1ToJSON(createIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1: CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1): string;
export declare function createIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJSON1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsResponseDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsResponseDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptionsIntegrationsResponseDisabled$Outbound = CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsResponseDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsResponseDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptionsIntegrationsResponseDisabled>;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsResponseDisabledToJSON(createIntegrationStoreDirectUiOptionsIntegrationsResponseDisabled: CreateIntegrationStoreDirectUiOptionsIntegrationsResponseDisabled): string;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsResponseDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptionsIntegrationsResponseDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1>;
export declare function createIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSON1ToJSON(createIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1: CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1): string;
export declare function createIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJSON1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsResponseHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsResponseHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptionsIntegrationsResponseHidden$Outbound = CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsResponseHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsResponseHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptionsIntegrationsResponseHidden>;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsResponseHiddenToJSON(createIntegrationStoreDirectUiOptionsIntegrationsResponseHidden: CreateIntegrationStoreDirectUiOptionsIntegrationsResponseHidden): string;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsResponseHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptionsIntegrationsResponseHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrations1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrations1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptionsIntegrations1$Outbound = {
    value: string;
    label: string;
    disabled?: CreateIntegrationStoreDirectDisabledIntegrationsResponse200ApplicationJson1$Outbound | boolean | string | undefined;
    hidden?: CreateIntegrationStoreDirectHiddenIntegrationsResponse200ApplicationJson1$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrations1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrations1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptionsIntegrations1>;
export declare function createIntegrationStoreDirectUiOptionsIntegrations1ToJSON(createIntegrationStoreDirectUiOptionsIntegrations1: CreateIntegrationStoreDirectUiOptionsIntegrations1): string;
export declare function createIntegrationStoreDirectUiOptionsIntegrations1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptionsIntegrations1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptions$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptions, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptions$Outbound = CreateIntegrationStoreDirectUiOptionsIntegrations1$Outbound | CreateIntegrationStoreDirectUiOptionsIntegrations3$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptions$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptions$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptions>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptionsToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptions: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptions): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptionsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiOptions, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1>;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1ToJSON(createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1): string;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnly$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnly$Outbound = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnly$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnly$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnly>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnlyToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnly: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnly): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnlyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiReadOnly, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1>;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1ToJSON(createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1): string;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHidden$Outbound = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHidden>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHiddenToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHidden: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHidden): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1>;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1ToJSON(createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1): string;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabled$Outbound = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabled>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabledToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabled: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabled): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2>;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2ToJSON(createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2): string;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescription$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescription$Outbound = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescription$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescription$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescription>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescriptionToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescription: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescription): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescriptionFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiDescription, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValueToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValueFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties8$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties8, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProperties8$Outbound = {
    type: string;
    items: CreateIntegrationStoreDirectPropertiesIntegrationsResponseItems$Outbound;
    "ui:control": string;
    "ui:options": Array<CreateIntegrationStoreDirectUiOptionsIntegrations1$Outbound | CreateIntegrationStoreDirectUiOptionsIntegrations3$Outbound | string>;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    description?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound | boolean | string | undefined;
    "ui:hidden"?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound | boolean | string | undefined;
    "ui:disabled"?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct1$Outbound | boolean | string | undefined;
    "ui:description"?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStoreProduct2$Outbound | string | undefined;
    "ui:formatted-value"?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
    default?: Array<string> | undefined;
    example?: Array<string> | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProperties8$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties8$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProperties8>;
export declare function createIntegrationStoreDirectProperties8ToJSON(createIntegrationStoreDirectProperties8: CreateIntegrationStoreDirectProperties8): string;
export declare function createIntegrationStoreDirectProperties8FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProperties8, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreType$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreType$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiControl$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiControl$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse2003$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse2003>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse2003$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse2003>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse2001$inboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabledIntegrationsResponse2001, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse2001$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse2001$outboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabledIntegrationsResponse2001$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectDisabledIntegrationsResponse2001>;
export declare function createIntegrationStoreDirectDisabledIntegrationsResponse2001ToJSON(createIntegrationStoreDirectDisabledIntegrationsResponse2001: CreateIntegrationStoreDirectDisabledIntegrationsResponse2001): string;
export declare function createIntegrationStoreDirectDisabledIntegrationsResponse2001FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectDisabledIntegrationsResponse2001, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptionsIntegrationsDisabled$Outbound = CreateIntegrationStoreDirectDisabledIntegrationsResponse2001$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptionsIntegrationsDisabled>;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsDisabledToJSON(createIntegrationStoreDirectUiOptionsIntegrationsDisabled: CreateIntegrationStoreDirectUiOptionsIntegrationsDisabled): string;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptionsIntegrationsDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse2003$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse2003>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse2003$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse2003>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse2001$inboundSchema: z.ZodType<CreateIntegrationStoreDirectHiddenIntegrationsResponse2001, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse2001$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse2001$outboundSchema: z.ZodType<CreateIntegrationStoreDirectHiddenIntegrationsResponse2001$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectHiddenIntegrationsResponse2001>;
export declare function createIntegrationStoreDirectHiddenIntegrationsResponse2001ToJSON(createIntegrationStoreDirectHiddenIntegrationsResponse2001: CreateIntegrationStoreDirectHiddenIntegrationsResponse2001): string;
export declare function createIntegrationStoreDirectHiddenIntegrationsResponse2001FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectHiddenIntegrationsResponse2001, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptionsIntegrationsHidden$Outbound = CreateIntegrationStoreDirectHiddenIntegrationsResponse2001$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsIntegrationsHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsIntegrationsHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptionsIntegrationsHidden>;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsHiddenToJSON(createIntegrationStoreDirectUiOptionsIntegrationsHidden: CreateIntegrationStoreDirectUiOptionsIntegrationsHidden): string;
export declare function createIntegrationStoreDirectUiOptionsIntegrationsHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptionsIntegrationsHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptions3$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptions3, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptions3$Outbound = {
    value: string;
    disabled?: CreateIntegrationStoreDirectDisabledIntegrationsResponse2001$Outbound | boolean | string | undefined;
    hidden?: CreateIntegrationStoreDirectHiddenIntegrationsResponse2001$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptions3$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptions3$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptions3>;
export declare function createIntegrationStoreDirectUiOptions3ToJSON(createIntegrationStoreDirectUiOptions3: CreateIntegrationStoreDirectUiOptions3): string;
export declare function createIntegrationStoreDirectUiOptions3FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptions3, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse3>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabledIntegrationsResponse3>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabledIntegrationsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectDisabledIntegrationsResponse1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrationsResponse1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabledIntegrationsResponse1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectDisabledIntegrationsResponse1>;
export declare function createIntegrationStoreDirectDisabledIntegrationsResponse1ToJSON(createIntegrationStoreDirectDisabledIntegrationsResponse1: CreateIntegrationStoreDirectDisabledIntegrationsResponse1): string;
export declare function createIntegrationStoreDirectDisabledIntegrationsResponse1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectDisabledIntegrationsResponse1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptionsDisabled$Outbound = CreateIntegrationStoreDirectDisabledIntegrationsResponse1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptionsDisabled>;
export declare function createIntegrationStoreDirectUiOptionsDisabledToJSON(createIntegrationStoreDirectUiOptionsDisabled: CreateIntegrationStoreDirectUiOptionsDisabled): string;
export declare function createIntegrationStoreDirectUiOptionsDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptionsDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse3>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHiddenIntegrationsResponse3>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectHiddenIntegrationsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectHiddenIntegrationsResponse1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrationsResponse1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectHiddenIntegrationsResponse1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectHiddenIntegrationsResponse1>;
export declare function createIntegrationStoreDirectHiddenIntegrationsResponse1ToJSON(createIntegrationStoreDirectHiddenIntegrationsResponse1: CreateIntegrationStoreDirectHiddenIntegrationsResponse1): string;
export declare function createIntegrationStoreDirectHiddenIntegrationsResponse1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectHiddenIntegrationsResponse1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptionsHidden$Outbound = CreateIntegrationStoreDirectHiddenIntegrationsResponse1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptionsHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptionsHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptionsHidden>;
export declare function createIntegrationStoreDirectUiOptionsHiddenToJSON(createIntegrationStoreDirectUiOptionsHidden: CreateIntegrationStoreDirectUiOptionsHidden): string;
export declare function createIntegrationStoreDirectUiOptionsHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptionsHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptions1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptions1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiOptions1$Outbound = {
    value: string;
    label: string;
    disabled?: CreateIntegrationStoreDirectDisabledIntegrationsResponse1$Outbound | boolean | string | undefined;
    hidden?: CreateIntegrationStoreDirectHiddenIntegrationsResponse1$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiOptions1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiOptions1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiOptions1>;
export declare function createIntegrationStoreDirectUiOptions1ToJSON(createIntegrationStoreDirectUiOptions1: CreateIntegrationStoreDirectUiOptions1): string;
export declare function createIntegrationStoreDirectUiOptions1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiOptions1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiOptions$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiOptions, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiOptions$Outbound = CreateIntegrationStoreDirectUiOptions1$Outbound | CreateIntegrationStoreDirectUiOptions3$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiOptions$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiOptions$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiOptions>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiOptionsToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponseUiOptions: CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiOptions): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiOptionsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiOptions, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1>;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1ToJSON(createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1): string;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnly$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnly$Outbound = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnly$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnly$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnly>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnlyToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnly: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnly): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnlyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiReadOnly, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1>;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1ToJSON(createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1): string;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHidden$Outbound = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHidden>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHiddenToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHidden: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHidden): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1>;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1ToJSON(createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1): string;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabled$Outbound = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabled>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabledToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabled: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabled): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2>;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2ToJSON(createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2): string;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescription$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescription$Outbound = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescription$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescription$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescription>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescriptionToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescription: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescription): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescriptionFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiDescription, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValueToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValueFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties7$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties7, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProperties7$Outbound = {
    type: string;
    "ui:control": string;
    "ui:options": Array<CreateIntegrationStoreDirectUiOptions1$Outbound | CreateIntegrationStoreDirectUiOptions3$Outbound | string>;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    description?: string | undefined;
    default?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound | boolean | string | undefined;
    "ui:hidden"?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound | boolean | string | undefined;
    "ui:disabled"?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyStore1$Outbound | boolean | string | undefined;
    "ui:description"?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyStore2$Outbound | string | undefined;
    "ui:formatted-value"?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProperties7$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties7$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProperties7>;
export declare function createIntegrationStoreDirectProperties7ToJSON(createIntegrationStoreDirectProperties7: CreateIntegrationStoreDirectProperties7): string;
export declare function createIntegrationStoreDirectProperties7FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProperties7, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema6Type$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema6Type>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema6Type$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema6Type>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsItems$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsItems$Outbound = {
    type: string;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    enum?: Array<string> | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsItems$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsItems$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsItems>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsItemsToJSON(createIntegrationStoreDirectPropertiesIntegrationsItems: CreateIntegrationStoreDirectPropertiesIntegrationsItems): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsItemsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsItems, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrations3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabledIntegrations3>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrations3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabledIntegrations3>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrations1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabledIntegrations1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectDisabledIntegrations1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectDisabledIntegrations1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabledIntegrations1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectDisabledIntegrations1>;
export declare function createIntegrationStoreDirectDisabledIntegrations1ToJSON(createIntegrationStoreDirectDisabledIntegrations1: CreateIntegrationStoreDirectDisabledIntegrations1): string;
export declare function createIntegrationStoreDirectDisabledIntegrations1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectDisabledIntegrations1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsDisabled$Outbound = CreateIntegrationStoreDirectDisabledIntegrations1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsDisabled>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsDisabledToJSON(createIntegrationStoreDirectPropertiesIntegrationsDisabled: CreateIntegrationStoreDirectPropertiesIntegrationsDisabled): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrations3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHiddenIntegrations3>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrations3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHiddenIntegrations3>;
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrations1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectHiddenIntegrations1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectHiddenIntegrations1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectHiddenIntegrations1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectHiddenIntegrations1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectHiddenIntegrations1>;
export declare function createIntegrationStoreDirectHiddenIntegrations1ToJSON(createIntegrationStoreDirectHiddenIntegrations1: CreateIntegrationStoreDirectHiddenIntegrations1): string;
export declare function createIntegrationStoreDirectHiddenIntegrations1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectHiddenIntegrations1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsHidden$Outbound = CreateIntegrationStoreDirectHiddenIntegrations1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsHidden>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsHiddenToJSON(createIntegrationStoreDirectPropertiesIntegrationsHidden: CreateIntegrationStoreDirectPropertiesIntegrationsHidden): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiOptions$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiOptions, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiOptions$Outbound = {
    value: string;
    label: string;
    disabled?: CreateIntegrationStoreDirectDisabledIntegrations1$Outbound | boolean | string | undefined;
    hidden?: CreateIntegrationStoreDirectHiddenIntegrations1$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiOptions$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiOptions$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsUiOptions>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiOptionsToJSON(createIntegrationStoreDirectPropertiesIntegrationsUiOptions: CreateIntegrationStoreDirectPropertiesIntegrationsUiOptions): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiOptionsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsUiOptions, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1>;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1ToJSON(createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1): string;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly$Outbound = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnlyToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnlyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1>;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1ToJSON(createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1): string;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden$Outbound = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHiddenToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1>;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1ToJSON(createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1): string;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled$Outbound = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabledToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2>;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2ToJSON(createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2): string;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription$Outbound = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescriptionToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescriptionFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValueToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValueFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties6$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties6, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProperties6$Outbound = {
    type: string;
    items: CreateIntegrationStoreDirectPropertiesIntegrationsItems$Outbound;
    "ui:control": string;
    "ui:options": Array<CreateIntegrationStoreDirectPropertiesIntegrationsUiOptions$Outbound>;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    description?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string | undefined;
    "ui:hidden"?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string | undefined;
    "ui:disabled"?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string | undefined;
    "ui:description"?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$Outbound | string | undefined;
    "ui:formatted-value"?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
    default?: Array<string> | undefined;
    example?: Array<string> | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProperties6$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties6$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProperties6>;
export declare function createIntegrationStoreDirectProperties6ToJSON(createIntegrationStoreDirectProperties6: CreateIntegrationStoreDirectProperties6): string;
export declare function createIntegrationStoreDirectProperties6FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProperties6, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONType$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONType$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiControl$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiControl$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabled3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabled3>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabled3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectDisabled3>;
/** @internal */
export declare const CreateIntegrationStoreDirectDisabled1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabled1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectDisabled1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectDisabled1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectDisabled1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectDisabled1>;
export declare function createIntegrationStoreDirectDisabled1ToJSON(createIntegrationStoreDirectDisabled1: CreateIntegrationStoreDirectDisabled1): string;
export declare function createIntegrationStoreDirectDisabled1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectDisabled1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesDisabled$Outbound = CreateIntegrationStoreDirectDisabled1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesDisabled>;
export declare function createIntegrationStoreDirectPropertiesDisabledToJSON(createIntegrationStoreDirectPropertiesDisabled: CreateIntegrationStoreDirectPropertiesDisabled): string;
export declare function createIntegrationStoreDirectPropertiesDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectHidden3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHidden3>;
/** @internal */
export declare const CreateIntegrationStoreDirectHidden3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectHidden3>;
/** @internal */
export declare const CreateIntegrationStoreDirectHidden1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectHidden1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectHidden1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectHidden1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectHidden1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectHidden1>;
export declare function createIntegrationStoreDirectHidden1ToJSON(createIntegrationStoreDirectHidden1: CreateIntegrationStoreDirectHidden1): string;
export declare function createIntegrationStoreDirectHidden1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectHidden1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesHidden$Outbound = CreateIntegrationStoreDirectHidden1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesHidden>;
export declare function createIntegrationStoreDirectPropertiesHiddenToJSON(createIntegrationStoreDirectPropertiesHidden: CreateIntegrationStoreDirectPropertiesHidden): string;
export declare function createIntegrationStoreDirectPropertiesHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiOptions$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiOptions, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesUiOptions$Outbound = {
    value: string;
    label: string;
    disabled?: CreateIntegrationStoreDirectDisabled1$Outbound | boolean | string | undefined;
    hidden?: CreateIntegrationStoreDirectHidden1$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiOptions$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiOptions$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesUiOptions>;
export declare function createIntegrationStoreDirectPropertiesUiOptionsToJSON(createIntegrationStoreDirectPropertiesUiOptions: CreateIntegrationStoreDirectPropertiesUiOptions): string;
export declare function createIntegrationStoreDirectPropertiesUiOptionsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesUiOptions, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1>;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSON1ToJSON(createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1): string;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJSON1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly$Outbound = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnlyToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnlyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1>;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSON1ToJSON(createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1): string;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJSON1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHidden$Outbound = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHidden>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHiddenToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHidden: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHidden): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1>;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSON1ToJSON(createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1): string;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJSON1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabled$Outbound = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabled>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabledToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabled: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabled): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2>;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSON2ToJSON(createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2): string;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJSON2FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescription$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescription$Outbound = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescription$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescription$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescription>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescriptionToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescription: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescription): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescriptionFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiDescription, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValueToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValueFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties5$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties5, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProperties5$Outbound = {
    type: string;
    "ui:control": string;
    "ui:options": Array<CreateIntegrationStoreDirectPropertiesUiOptions$Outbound>;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    description?: string | undefined;
    default?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse200ApplicationJson1$Outbound | boolean | string | undefined;
    "ui:hidden"?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse200ApplicationJson1$Outbound | boolean | string | undefined;
    "ui:disabled"?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse200ApplicationJson1$Outbound | boolean | string | undefined;
    "ui:description"?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse200ApplicationJson2$Outbound | string | undefined;
    "ui:formatted-value"?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProperties5$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties5$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProperties5>;
export declare function createIntegrationStoreDirectProperties5ToJSON(createIntegrationStoreDirectProperties5: CreateIntegrationStoreDirectProperties5): string;
export declare function createIntegrationStoreDirectProperties5FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProperties5, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200Type$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200Type>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200Type$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200Type>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema4Type$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema4Type>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema4Type$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200ApplicationJSONResponseBodyStoreProductMetadataSchema4Type>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesItems$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesItems, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesItems$Outbound = {
    type: string;
    description?: string | undefined;
    minimum?: number | undefined;
    exclusiveMinimum?: number | undefined;
    maximum?: number | undefined;
    exclusiveMaximum?: number | undefined;
    default?: number | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesItems$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesItems$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesItems>;
export declare function createIntegrationStoreDirectPropertiesItemsToJSON(createIntegrationStoreDirectPropertiesItems: CreateIntegrationStoreDirectPropertiesItems): string;
export declare function createIntegrationStoreDirectPropertiesItemsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesItems, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiControl$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiControl$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2003$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2003>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2003$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2003>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001>;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001ToJSON(createIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001): string;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnly$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnly$Outbound = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnly$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnly$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnly>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnlyToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnly: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnly): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnlyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiReadOnly, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2003$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2003>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2003$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2003>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001>;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse2001ToJSON(createIntegrationStoreDirectUiHiddenIntegrationsResponse2001: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001): string;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse2001FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiHidden$Outbound = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiHidden>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiHiddenToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200UiHidden: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiHidden): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2003$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2003>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2003$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2003>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001>;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse2001ToJSON(createIntegrationStoreDirectUiDisabledIntegrationsResponse2001: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001): string;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse2001FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabled$Outbound = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabled>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabledToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabled: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabled): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002>;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse2002ToJSON(createIntegrationStoreDirectUiDescriptionIntegrationsResponse2002: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002): string;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse2002FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescription$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescription$Outbound = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescription$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescription$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescription>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescriptionToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescription: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescription): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescriptionFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiDescription, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValueToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValueFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties4$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties4, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProperties4$Outbound = {
    type: string;
    items: CreateIntegrationStoreDirectPropertiesItems$Outbound;
    "ui:control": string;
    "ui:steps": Array<number>;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    description?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse2001$Outbound | boolean | string | undefined;
    "ui:hidden"?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse2001$Outbound | boolean | string | undefined;
    "ui:disabled"?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse2001$Outbound | boolean | string | undefined;
    "ui:description"?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2002$Outbound | string | undefined;
    "ui:formatted-value"?: CreateIntegrationStoreDirectPropertiesIntegrationsResponse200UiFormattedValue$Outbound | undefined;
    default?: Array<number> | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProperties4$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties4$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProperties4>;
export declare function createIntegrationStoreDirectProperties4ToJSON(createIntegrationStoreDirectProperties4: CreateIntegrationStoreDirectProperties4): string;
export declare function createIntegrationStoreDirectProperties4FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProperties4, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseType$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponseType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseType$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponseType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiControl$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiControl$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1>;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse1ToJSON(createIntegrationStoreDirectUiReadOnlyIntegrationsResponse1: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1): string;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrationsResponse1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnly$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnly$Outbound = CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnly$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnly$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnly>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnlyToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnly: CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnly): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnlyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiReadOnly, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrationsResponse3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1>;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse1ToJSON(createIntegrationStoreDirectUiHiddenIntegrationsResponse1: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1): string;
export declare function createIntegrationStoreDirectUiHiddenIntegrationsResponse1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiHidden$Outbound = CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiHidden>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiHiddenToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponseUiHidden: CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiHidden): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrationsResponse3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1>;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse1ToJSON(createIntegrationStoreDirectUiDisabledIntegrationsResponse1: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1): string;
export declare function createIntegrationStoreDirectUiDisabledIntegrationsResponse1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabled$Outbound = CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabled>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabledToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabled: CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabled): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2>;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse2ToJSON(createIntegrationStoreDirectUiDescriptionIntegrationsResponse2: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2): string;
export declare function createIntegrationStoreDirectUiDescriptionIntegrationsResponse2FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDescription$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDescription$Outbound = CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDescription$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDescription$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDescription>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiDescriptionToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponseUiDescription: CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDescription): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiDescriptionFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiDescription, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValueToJSON(createIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue: CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValueFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties3$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties3, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProperties3$Outbound = {
    type: string;
    "ui:control": string;
    description?: string | undefined;
    default?: boolean | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: CreateIntegrationStoreDirectUiReadOnlyIntegrationsResponse1$Outbound | boolean | string | undefined;
    "ui:hidden"?: CreateIntegrationStoreDirectUiHiddenIntegrationsResponse1$Outbound | boolean | string | undefined;
    "ui:disabled"?: CreateIntegrationStoreDirectUiDisabledIntegrationsResponse1$Outbound | boolean | string | undefined;
    "ui:description"?: CreateIntegrationStoreDirectUiDescriptionIntegrationsResponse2$Outbound | string | undefined;
    "ui:formatted-value"?: CreateIntegrationStoreDirectPropertiesIntegrationsResponseUiFormattedValue$Outbound | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProperties3$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties3$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProperties3>;
export declare function createIntegrationStoreDirectProperties3ToJSON(createIntegrationStoreDirectProperties3: CreateIntegrationStoreDirectProperties3): string;
export declare function createIntegrationStoreDirectProperties3FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProperties3, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsType$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsType$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiControl$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiControl$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesIntegrationsUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrations3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrations3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrations3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnlyIntegrations3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrations1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrations1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiReadOnlyIntegrations1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnlyIntegrations1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnlyIntegrations1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiReadOnlyIntegrations1>;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrations1ToJSON(createIntegrationStoreDirectUiReadOnlyIntegrations1: CreateIntegrationStoreDirectUiReadOnlyIntegrations1): string;
export declare function createIntegrationStoreDirectUiReadOnlyIntegrations1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiReadOnlyIntegrations1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiReadOnly$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiReadOnly$Outbound = CreateIntegrationStoreDirectUiReadOnlyIntegrations1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiReadOnly$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiReadOnly$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsUiReadOnly>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiReadOnlyToJSON(createIntegrationStoreDirectPropertiesIntegrationsUiReadOnly: CreateIntegrationStoreDirectPropertiesIntegrationsUiReadOnly): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiReadOnlyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsUiReadOnly, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrations3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrations3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrations3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHiddenIntegrations3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrations1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrations1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiHiddenIntegrations1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiHiddenIntegrations1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHiddenIntegrations1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiHiddenIntegrations1>;
export declare function createIntegrationStoreDirectUiHiddenIntegrations1ToJSON(createIntegrationStoreDirectUiHiddenIntegrations1: CreateIntegrationStoreDirectUiHiddenIntegrations1): string;
export declare function createIntegrationStoreDirectUiHiddenIntegrations1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiHiddenIntegrations1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiHidden$Outbound = CreateIntegrationStoreDirectUiHiddenIntegrations1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsUiHidden>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiHiddenToJSON(createIntegrationStoreDirectPropertiesIntegrationsUiHidden: CreateIntegrationStoreDirectPropertiesIntegrationsUiHidden): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsUiHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrations3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrations3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrations3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabledIntegrations3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrations1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrations1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDisabledIntegrations1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabledIntegrations1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabledIntegrations1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDisabledIntegrations1>;
export declare function createIntegrationStoreDirectUiDisabledIntegrations1ToJSON(createIntegrationStoreDirectUiDisabledIntegrations1: CreateIntegrationStoreDirectUiDisabledIntegrations1): string;
export declare function createIntegrationStoreDirectUiDisabledIntegrations1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDisabledIntegrations1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiDisabled$Outbound = CreateIntegrationStoreDirectUiDisabledIntegrations1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsUiDisabled>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiDisabledToJSON(createIntegrationStoreDirectPropertiesIntegrationsUiDisabled: CreateIntegrationStoreDirectPropertiesIntegrationsUiDisabled): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsUiDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrations2$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrations2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDescriptionIntegrations2$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescriptionIntegrations2$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescriptionIntegrations2$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDescriptionIntegrations2>;
export declare function createIntegrationStoreDirectUiDescriptionIntegrations2ToJSON(createIntegrationStoreDirectUiDescriptionIntegrations2: CreateIntegrationStoreDirectUiDescriptionIntegrations2): string;
export declare function createIntegrationStoreDirectUiDescriptionIntegrations2FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDescriptionIntegrations2, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiDescription$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiDescription$Outbound = CreateIntegrationStoreDirectUiDescriptionIntegrations2$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiDescription$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiDescription$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsUiDescription>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiDescriptionToJSON(createIntegrationStoreDirectPropertiesIntegrationsUiDescription: CreateIntegrationStoreDirectPropertiesIntegrationsUiDescription): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiDescriptionFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsUiDescription, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue>;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiFormattedValueToJSON(createIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue: CreateIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue): string;
export declare function createIntegrationStoreDirectPropertiesIntegrationsUiFormattedValueFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties2$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProperties2$Outbound = {
    type: string;
    "ui:control": string;
    maximum?: number | undefined;
    exclusiveMaximum?: number | undefined;
    minimum?: number | undefined;
    exclusiveMinimum?: number | undefined;
    description?: string | undefined;
    default?: number | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: CreateIntegrationStoreDirectUiReadOnlyIntegrations1$Outbound | boolean | string | undefined;
    "ui:hidden"?: CreateIntegrationStoreDirectUiHiddenIntegrations1$Outbound | boolean | string | undefined;
    "ui:disabled"?: CreateIntegrationStoreDirectUiDisabledIntegrations1$Outbound | boolean | string | undefined;
    "ui:description"?: CreateIntegrationStoreDirectUiDescriptionIntegrations2$Outbound | string | undefined;
    "ui:formatted-value"?: CreateIntegrationStoreDirectPropertiesIntegrationsUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProperties2$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties2$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProperties2>;
export declare function createIntegrationStoreDirectProperties2ToJSON(createIntegrationStoreDirectProperties2: CreateIntegrationStoreDirectProperties2): string;
export declare function createIntegrationStoreDirectProperties2FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProperties2, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesType$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesType$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesType>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiControl$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiControl$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPropertiesUiControl>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnly3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnly3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnly3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiReadOnly3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnly1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnly1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiReadOnly1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiReadOnly1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiReadOnly1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiReadOnly1>;
export declare function createIntegrationStoreDirectUiReadOnly1ToJSON(createIntegrationStoreDirectUiReadOnly1: CreateIntegrationStoreDirectUiReadOnly1): string;
export declare function createIntegrationStoreDirectUiReadOnly1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiReadOnly1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiReadOnly$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesUiReadOnly$Outbound = CreateIntegrationStoreDirectUiReadOnly1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiReadOnly$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiReadOnly$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesUiReadOnly>;
export declare function createIntegrationStoreDirectPropertiesUiReadOnlyToJSON(createIntegrationStoreDirectPropertiesUiReadOnly: CreateIntegrationStoreDirectPropertiesUiReadOnly): string;
export declare function createIntegrationStoreDirectPropertiesUiReadOnlyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesUiReadOnly, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHidden3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHidden3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHidden3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiHidden3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiHidden1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHidden1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiHidden1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiHidden1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiHidden1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiHidden1>;
export declare function createIntegrationStoreDirectUiHidden1ToJSON(createIntegrationStoreDirectUiHidden1: CreateIntegrationStoreDirectUiHidden1): string;
export declare function createIntegrationStoreDirectUiHidden1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiHidden1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiHidden$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesUiHidden$Outbound = CreateIntegrationStoreDirectUiHidden1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiHidden$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiHidden$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesUiHidden>;
export declare function createIntegrationStoreDirectPropertiesUiHiddenToJSON(createIntegrationStoreDirectPropertiesUiHidden: CreateIntegrationStoreDirectPropertiesUiHidden): string;
export declare function createIntegrationStoreDirectPropertiesUiHiddenFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesUiHidden, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabled3$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabled3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabled3$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectUiDisabled3>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabled1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabled1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDisabled1$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDisabled1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDisabled1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDisabled1>;
export declare function createIntegrationStoreDirectUiDisabled1ToJSON(createIntegrationStoreDirectUiDisabled1: CreateIntegrationStoreDirectUiDisabled1): string;
export declare function createIntegrationStoreDirectUiDisabled1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDisabled1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiDisabled$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesUiDisabled$Outbound = CreateIntegrationStoreDirectUiDisabled1$Outbound | boolean | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiDisabled$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiDisabled$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesUiDisabled>;
export declare function createIntegrationStoreDirectPropertiesUiDisabledToJSON(createIntegrationStoreDirectPropertiesUiDisabled: CreateIntegrationStoreDirectPropertiesUiDisabled): string;
export declare function createIntegrationStoreDirectPropertiesUiDisabledFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesUiDisabled, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescription2$inboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescription2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectUiDescription2$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectUiDescription2$outboundSchema: z.ZodType<CreateIntegrationStoreDirectUiDescription2$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectUiDescription2>;
export declare function createIntegrationStoreDirectUiDescription2ToJSON(createIntegrationStoreDirectUiDescription2: CreateIntegrationStoreDirectUiDescription2): string;
export declare function createIntegrationStoreDirectUiDescription2FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectUiDescription2, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiDescription$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesUiDescription$Outbound = CreateIntegrationStoreDirectUiDescription2$Outbound | string;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiDescription$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiDescription$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesUiDescription>;
export declare function createIntegrationStoreDirectPropertiesUiDescriptionToJSON(createIntegrationStoreDirectPropertiesUiDescription: CreateIntegrationStoreDirectPropertiesUiDescription): string;
export declare function createIntegrationStoreDirectPropertiesUiDescriptionFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesUiDescription, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiFormattedValue$inboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectPropertiesUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectPropertiesUiFormattedValue$outboundSchema: z.ZodType<CreateIntegrationStoreDirectPropertiesUiFormattedValue$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectPropertiesUiFormattedValue>;
export declare function createIntegrationStoreDirectPropertiesUiFormattedValueToJSON(createIntegrationStoreDirectPropertiesUiFormattedValue: CreateIntegrationStoreDirectPropertiesUiFormattedValue): string;
export declare function createIntegrationStoreDirectPropertiesUiFormattedValueFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectPropertiesUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties1$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProperties1$Outbound = {
    type: string;
    "ui:control": string;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    description?: string | undefined;
    default?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: CreateIntegrationStoreDirectUiReadOnly1$Outbound | boolean | string | undefined;
    "ui:hidden"?: CreateIntegrationStoreDirectUiHidden1$Outbound | boolean | string | undefined;
    "ui:disabled"?: CreateIntegrationStoreDirectUiDisabled1$Outbound | boolean | string | undefined;
    "ui:description"?: CreateIntegrationStoreDirectUiDescription2$Outbound | string | undefined;
    "ui:formatted-value"?: CreateIntegrationStoreDirectPropertiesUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProperties1$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties1$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProperties1>;
export declare function createIntegrationStoreDirectProperties1ToJSON(createIntegrationStoreDirectProperties1: CreateIntegrationStoreDirectProperties1): string;
export declare function createIntegrationStoreDirectProperties1FromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProperties1, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProperties$Outbound = CreateIntegrationStoreDirectProperties4$Outbound | CreateIntegrationStoreDirectProperties6$Outbound | CreateIntegrationStoreDirectProperties8$Outbound | CreateIntegrationStoreDirectProperties5$Outbound | CreateIntegrationStoreDirectProperties7$Outbound | CreateIntegrationStoreDirectProperties1$Outbound | CreateIntegrationStoreDirectProperties2$Outbound | CreateIntegrationStoreDirectProperties3$Outbound | CreateIntegrationStoreDirectProperties9$Outbound | CreateIntegrationStoreDirectProperties10$Outbound;
/** @internal */
export declare const CreateIntegrationStoreDirectProperties$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProperties$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProperties>;
export declare function createIntegrationStoreDirectPropertiesToJSON(createIntegrationStoreDirectProperties: CreateIntegrationStoreDirectProperties): string;
export declare function createIntegrationStoreDirectPropertiesFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProperties, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectMetadataSchema$inboundSchema: z.ZodType<CreateIntegrationStoreDirectMetadataSchema, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectMetadataSchema$Outbound = {
    type: string;
    properties: {
        [k: string]: CreateIntegrationStoreDirectProperties4$Outbound | CreateIntegrationStoreDirectProperties6$Outbound | CreateIntegrationStoreDirectProperties8$Outbound | CreateIntegrationStoreDirectProperties5$Outbound | CreateIntegrationStoreDirectProperties7$Outbound | CreateIntegrationStoreDirectProperties1$Outbound | CreateIntegrationStoreDirectProperties2$Outbound | CreateIntegrationStoreDirectProperties3$Outbound | CreateIntegrationStoreDirectProperties9$Outbound | CreateIntegrationStoreDirectProperties10$Outbound;
    };
    required?: Array<string> | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectMetadataSchema$outboundSchema: z.ZodType<CreateIntegrationStoreDirectMetadataSchema$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectMetadataSchema>;
export declare function createIntegrationStoreDirectMetadataSchemaToJSON(createIntegrationStoreDirectMetadataSchema: CreateIntegrationStoreDirectMetadataSchema): string;
export declare function createIntegrationStoreDirectMetadataSchemaFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectMetadataSchema, SDKValidationError>;
/** @internal */
export declare const ResourceLinks$inboundSchema: z.ZodType<ResourceLinks, z.ZodTypeDef, unknown>;
/** @internal */
export type ResourceLinks$Outbound = {
    href: string;
    title: string;
};
/** @internal */
export declare const ResourceLinks$outboundSchema: z.ZodType<ResourceLinks$Outbound, z.ZodTypeDef, ResourceLinks>;
export declare function resourceLinksToJSON(resourceLinks: ResourceLinks): string;
export declare function resourceLinksFromJSON(jsonString: string): SafeParseResult<ResourceLinks, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectTags$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectTags>;
/** @internal */
export declare const CreateIntegrationStoreDirectTags$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectTags>;
/** @internal */
export declare const ProjectConnectionScopes$inboundSchema: z.ZodNativeEnum<typeof ProjectConnectionScopes>;
/** @internal */
export declare const ProjectConnectionScopes$outboundSchema: z.ZodNativeEnum<typeof ProjectConnectionScopes>;
/** @internal */
export declare const Repl$inboundSchema: z.ZodType<Repl, z.ZodTypeDef, unknown>;
/** @internal */
export type Repl$Outbound = {
    enabled: boolean;
    supportsReadOnlyMode: boolean;
    welcomeMessage?: string | undefined;
};
/** @internal */
export declare const Repl$outboundSchema: z.ZodType<Repl$Outbound, z.ZodTypeDef, Repl>;
export declare function replToJSON(repl: Repl): string;
export declare function replFromJSON(jsonString: string): SafeParseResult<Repl, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectIntegrationsResponseType$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectIntegrationsResponseType>;
/** @internal */
export declare const CreateIntegrationStoreDirectIntegrationsResponseType$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectIntegrationsResponseType>;
/** @internal */
export declare const CreateIntegrationStoreDirectIntegrationsActions$inboundSchema: z.ZodType<CreateIntegrationStoreDirectIntegrationsActions, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectIntegrationsActions$Outbound = {
    type: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectIntegrationsActions$outboundSchema: z.ZodType<CreateIntegrationStoreDirectIntegrationsActions$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectIntegrationsActions>;
export declare function createIntegrationStoreDirectIntegrationsActionsToJSON(createIntegrationStoreDirectIntegrationsActions: CreateIntegrationStoreDirectIntegrationsActions): string;
export declare function createIntegrationStoreDirectIntegrationsActionsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectIntegrationsActions, SDKValidationError>;
/** @internal */
export declare const Steps$inboundSchema: z.ZodType<Steps, z.ZodTypeDef, unknown>;
/** @internal */
export type Steps$Outbound = {
    title: string;
    content: string;
    actions?: Array<CreateIntegrationStoreDirectIntegrationsActions$Outbound> | undefined;
};
/** @internal */
export declare const Steps$outboundSchema: z.ZodType<Steps$Outbound, z.ZodTypeDef, Steps>;
export declare function stepsToJSON(steps: Steps): string;
export declare function stepsFromJSON(jsonString: string): SafeParseResult<Steps, SDKValidationError>;
/** @internal */
export declare const Guides$inboundSchema: z.ZodType<Guides, z.ZodTypeDef, unknown>;
/** @internal */
export type Guides$Outbound = {
    framework: string;
    title: string;
    steps: Array<Steps$Outbound>;
};
/** @internal */
export declare const Guides$outboundSchema: z.ZodType<Guides$Outbound, z.ZodTypeDef, Guides>;
export declare function guidesToJSON(guides: Guides): string;
export declare function guidesFromJSON(jsonString: string): SafeParseResult<Guides, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectIntegration$inboundSchema: z.ZodType<CreateIntegrationStoreDirectIntegration, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectIntegration$Outbound = {
    id: string;
    name: string;
    slug: string;
    supportsInstallationBillingPlans?: boolean | undefined;
    icon: string;
    flags?: Array<string> | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectIntegration$outboundSchema: z.ZodType<CreateIntegrationStoreDirectIntegration$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectIntegration>;
export declare function createIntegrationStoreDirectIntegrationToJSON(createIntegrationStoreDirectIntegration: CreateIntegrationStoreDirectIntegration): string;
export declare function createIntegrationStoreDirectIntegrationFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectIntegration, SDKValidationError>;
/** @internal */
export declare const SupportedProtocols$inboundSchema: z.ZodNativeEnum<typeof SupportedProtocols>;
/** @internal */
export declare const SupportedProtocols$outboundSchema: z.ZodNativeEnum<typeof SupportedProtocols>;
/** @internal */
export declare const CreateIntegrationStoreDirectPrimaryProtocol$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPrimaryProtocol>;
/** @internal */
export declare const CreateIntegrationStoreDirectPrimaryProtocol$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectPrimaryProtocol>;
/** @internal */
export declare const LogDrainStatus$inboundSchema: z.ZodNativeEnum<typeof LogDrainStatus>;
/** @internal */
export declare const LogDrainStatus$outboundSchema: z.ZodNativeEnum<typeof LogDrainStatus>;
/** @internal */
export declare const Product$inboundSchema: z.ZodType<Product, z.ZodTypeDef, unknown>;
/** @internal */
export type Product$Outbound = {
    id?: string | undefined;
    name?: string | undefined;
    slug?: string | undefined;
    iconUrl?: string | undefined;
    capabilities?: CreateIntegrationStoreDirectCapabilities$Outbound | undefined;
    shortDescription?: string | undefined;
    metadataSchema?: CreateIntegrationStoreDirectMetadataSchema$Outbound | undefined;
    resourceLinks?: Array<ResourceLinks$Outbound> | undefined;
    tags?: Array<string> | undefined;
    projectConnectionScopes?: Array<string> | undefined;
    showSSOLinkOnProjectConnection?: boolean | undefined;
    disableResourceRenaming?: boolean | undefined;
    resourceTitle?: string | undefined;
    agentSkillUrl?: string | undefined;
    repl?: Repl$Outbound | undefined;
    guides?: Array<Guides$Outbound> | undefined;
    integration: CreateIntegrationStoreDirectIntegration$Outbound;
    integrationConfigurationId: string;
    supportedProtocols: Array<string>;
    primaryProtocol?: string | undefined;
    logDrainStatus?: string | undefined;
};
/** @internal */
export declare const Product$outboundSchema: z.ZodType<Product$Outbound, z.ZodTypeDef, Product>;
export declare function productToJSON(product: Product): string;
export declare function productFromJSON(jsonString: string): SafeParseResult<Product, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectExperimentation$inboundSchema: z.ZodType<CreateIntegrationStoreDirectExperimentation, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectExperimentation$Outbound = {
    edgeConfigSyncingEnabled?: boolean | undefined;
    edgeConfigId?: string | undefined;
    edgeConfigTokenId?: string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectExperimentation$outboundSchema: z.ZodType<CreateIntegrationStoreDirectExperimentation$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectExperimentation>;
export declare function createIntegrationStoreDirectExperimentationToJSON(createIntegrationStoreDirectExperimentation: CreateIntegrationStoreDirectExperimentation): string;
export declare function createIntegrationStoreDirectExperimentationFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectExperimentation, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectProtocolSettings$inboundSchema: z.ZodType<CreateIntegrationStoreDirectProtocolSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectProtocolSettings$Outbound = {
    experimentation?: CreateIntegrationStoreDirectExperimentation$Outbound | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectProtocolSettings$outboundSchema: z.ZodType<CreateIntegrationStoreDirectProtocolSettings$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectProtocolSettings>;
export declare function createIntegrationStoreDirectProtocolSettingsToJSON(createIntegrationStoreDirectProtocolSettings: CreateIntegrationStoreDirectProtocolSettings): string;
export declare function createIntegrationStoreDirectProtocolSettingsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectProtocolSettings, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectLevel$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectLevel>;
/** @internal */
export declare const CreateIntegrationStoreDirectLevel$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectLevel>;
/** @internal */
export declare const CreateIntegrationStoreDirectNotification$inboundSchema: z.ZodType<CreateIntegrationStoreDirectNotification, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectNotification$Outbound = {
    title: string;
    level: string;
    message?: string | undefined;
    href?: string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectNotification$outboundSchema: z.ZodType<CreateIntegrationStoreDirectNotification$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectNotification>;
export declare function createIntegrationStoreDirectNotificationToJSON(createIntegrationStoreDirectNotification: CreateIntegrationStoreDirectNotification): string;
export declare function createIntegrationStoreDirectNotificationFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectNotification, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectSecrets$inboundSchema: z.ZodType<CreateIntegrationStoreDirectSecrets, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectSecrets$Outbound = {
    name: string;
    length: number;
};
/** @internal */
export declare const CreateIntegrationStoreDirectSecrets$outboundSchema: z.ZodType<CreateIntegrationStoreDirectSecrets$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectSecrets>;
export declare function createIntegrationStoreDirectSecretsToJSON(createIntegrationStoreDirectSecrets: CreateIntegrationStoreDirectSecrets): string;
export declare function createIntegrationStoreDirectSecretsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectSecrets, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectType$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectType>;
/** @internal */
export declare const CreateIntegrationStoreDirectType$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectType>;
/** @internal */
export declare const CreateIntegrationStoreDirectScope$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectScope>;
/** @internal */
export declare const CreateIntegrationStoreDirectScope$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectScope>;
/** @internal */
export declare const CreateIntegrationStoreDirectDetails$inboundSchema: z.ZodType<CreateIntegrationStoreDirectDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectDetails$Outbound = {
    label: string;
    value?: string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectDetails$outboundSchema: z.ZodType<CreateIntegrationStoreDirectDetails$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectDetails>;
export declare function createIntegrationStoreDirectDetailsToJSON(createIntegrationStoreDirectDetails: CreateIntegrationStoreDirectDetails): string;
export declare function createIntegrationStoreDirectDetailsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectDetails, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectHighlightedDetails$inboundSchema: z.ZodType<CreateIntegrationStoreDirectHighlightedDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectHighlightedDetails$Outbound = {
    label: string;
    value?: string | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectHighlightedDetails$outboundSchema: z.ZodType<CreateIntegrationStoreDirectHighlightedDetails$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectHighlightedDetails>;
export declare function createIntegrationStoreDirectHighlightedDetailsToJSON(createIntegrationStoreDirectHighlightedDetails: CreateIntegrationStoreDirectHighlightedDetails): string;
export declare function createIntegrationStoreDirectHighlightedDetailsFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectHighlightedDetails, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectQuote$inboundSchema: z.ZodType<CreateIntegrationStoreDirectQuote, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectQuote$Outbound = {
    line: string;
    amount: string;
};
/** @internal */
export declare const CreateIntegrationStoreDirectQuote$outboundSchema: z.ZodType<CreateIntegrationStoreDirectQuote$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectQuote>;
export declare function createIntegrationStoreDirectQuoteToJSON(createIntegrationStoreDirectQuote: CreateIntegrationStoreDirectQuote): string;
export declare function createIntegrationStoreDirectQuoteFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectQuote, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectBillingPlan$inboundSchema: z.ZodType<CreateIntegrationStoreDirectBillingPlan, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectBillingPlan$Outbound = {
    type: string;
    description: string;
    id: string;
    name: string;
    scope: string;
    paymentMethodRequired: boolean;
    preauthorizationAmount?: number | undefined;
    initialCharge?: string | undefined;
    minimumAmount?: string | undefined;
    maximumAmount?: string | undefined;
    maximumAmountAutoPurchasePerPeriod?: string | undefined;
    cost?: string | undefined;
    details?: Array<CreateIntegrationStoreDirectDetails$Outbound> | undefined;
    highlightedDetails?: Array<CreateIntegrationStoreDirectHighlightedDetails$Outbound> | undefined;
    quote?: Array<CreateIntegrationStoreDirectQuote$Outbound> | undefined;
    effectiveDate?: string | undefined;
    disabled?: boolean | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectBillingPlan$outboundSchema: z.ZodType<CreateIntegrationStoreDirectBillingPlan$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectBillingPlan>;
export declare function createIntegrationStoreDirectBillingPlanToJSON(createIntegrationStoreDirectBillingPlan: CreateIntegrationStoreDirectBillingPlan): string;
export declare function createIntegrationStoreDirectBillingPlanFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectBillingPlan, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectTargets$inboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectTargets>;
/** @internal */
export declare const CreateIntegrationStoreDirectTargets$outboundSchema: z.ZodNativeEnum<typeof CreateIntegrationStoreDirectTargets>;
/** @internal */
export declare const CreateIntegrationStoreDirectStore$inboundSchema: z.ZodType<CreateIntegrationStoreDirectStore, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectStore$Outbound = {
    projectsMetadata: Array<CreateIntegrationStoreDirectProjectsMetadata$Outbound>;
    projectFilter?: ProjectFilter$Outbound | undefined;
    totalConnectedProjects?: number | undefined;
    usageQuotaExceeded: boolean;
    status: string | null;
    ownership?: string | undefined;
    capabilities?: Capabilities$Outbound | undefined;
    metadata?: {
        [k: string]: string | number | Array<string> | Array<number> | boolean;
    } | undefined;
    externalResourceId: string;
    externalResourceStatus?: string | null | undefined;
    directPartnerConsoleUrl?: string | undefined;
    product: Product$Outbound;
    protocolSettings?: CreateIntegrationStoreDirectProtocolSettings$Outbound | undefined;
    notification?: CreateIntegrationStoreDirectNotification$Outbound | undefined;
    secrets: Array<CreateIntegrationStoreDirectSecrets$Outbound>;
    billingPlan?: CreateIntegrationStoreDirectBillingPlan$Outbound | undefined;
    secretRotationRequestedAt?: number | undefined;
    secretRotationRequestedReason?: string | undefined;
    secretRotationRequestedBy?: string | undefined;
    secretRotationCompletedAt?: number | undefined;
    parentId?: string | undefined;
    targets?: Array<string> | undefined;
};
/** @internal */
export declare const CreateIntegrationStoreDirectStore$outboundSchema: z.ZodType<CreateIntegrationStoreDirectStore$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectStore>;
export declare function createIntegrationStoreDirectStoreToJSON(createIntegrationStoreDirectStore: CreateIntegrationStoreDirectStore): string;
export declare function createIntegrationStoreDirectStoreFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectStore, SDKValidationError>;
/** @internal */
export declare const CreateIntegrationStoreDirectResponseBody$inboundSchema: z.ZodType<CreateIntegrationStoreDirectResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIntegrationStoreDirectResponseBody$Outbound = {
    store: CreateIntegrationStoreDirectStore$Outbound | null;
};
/** @internal */
export declare const CreateIntegrationStoreDirectResponseBody$outboundSchema: z.ZodType<CreateIntegrationStoreDirectResponseBody$Outbound, z.ZodTypeDef, CreateIntegrationStoreDirectResponseBody>;
export declare function createIntegrationStoreDirectResponseBodyToJSON(createIntegrationStoreDirectResponseBody: CreateIntegrationStoreDirectResponseBody): string;
export declare function createIntegrationStoreDirectResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateIntegrationStoreDirectResponseBody, SDKValidationError>;
//# sourceMappingURL=createintegrationstoredirectop.d.ts.map