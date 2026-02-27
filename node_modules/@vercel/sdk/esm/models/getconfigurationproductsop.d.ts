import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetConfigurationProductsRequest = {
    /**
     * ID of the integration configuration
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
export declare const GetConfigurationProductsStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsStatus = ClosedEnum<typeof GetConfigurationProductsStatus>;
export type GetConfigurationProductsRepl = {
    enabled: boolean;
    supportsReadOnlyMode: boolean;
    welcomeMessage?: string | undefined;
};
export type Storage = {
    status: GetConfigurationProductsStatus;
    repl?: GetConfigurationProductsRepl | undefined;
};
export declare const GetConfigurationProductsIntegrationsStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsIntegrationsStatus = ClosedEnum<typeof GetConfigurationProductsIntegrationsStatus>;
export type GetConfigurationProductsExperimentation = {
    status: GetConfigurationProductsIntegrationsStatus;
    edgeConfigSyncingSupport?: boolean | undefined;
};
export declare const GetConfigurationProductsIntegrationsResponseStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsIntegrationsResponseStatus = ClosedEnum<typeof GetConfigurationProductsIntegrationsResponseStatus>;
export type Ai = {
    status: GetConfigurationProductsIntegrationsResponseStatus;
};
export declare const GetConfigurationProductsIntegrationsResponse200Status: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsIntegrationsResponse200Status = ClosedEnum<typeof GetConfigurationProductsIntegrationsResponse200Status>;
export type Authentication = {
    status: GetConfigurationProductsIntegrationsResponse200Status;
};
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsIntegrationsResponse200ApplicationJSONStatus = ClosedEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONStatus>;
export type Observability = {
    status: GetConfigurationProductsIntegrationsResponse200ApplicationJSONStatus;
};
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyStatus = ClosedEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyStatus>;
export type Video = {
    status: GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyStatus;
};
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsStatus = ClosedEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsStatus>;
export type Workflow = {
    status: GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsStatus;
};
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsStatus = ClosedEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsStatus>;
export type GetConfigurationProductsChecks = {
    status: GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsStatus;
};
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsLogDrainStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsLogDrainStatus = ClosedEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsLogDrainStatus>;
export declare const Format: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type Format = ClosedEnum<typeof Format>;
export type LogDrain = {
    status: GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsLogDrainStatus;
    endpoint: string;
    headers?: {
        [k: string]: string;
    } | undefined;
    format: Format;
};
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsTraceDrainStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsTraceDrainStatus = ClosedEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsTraceDrainStatus>;
export declare const GetConfigurationProductsFormat: {
    readonly Json: "json";
    readonly Proto: "proto";
};
export type GetConfigurationProductsFormat = ClosedEnum<typeof GetConfigurationProductsFormat>;
export type TraceDrain = {
    status: GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsTraceDrainStatus;
    endpoint: string;
    headers?: {
        [k: string]: string;
    } | undefined;
    format: GetConfigurationProductsFormat;
};
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsMessagingStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsMessagingStatus = ClosedEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsMessagingStatus>;
export type Messaging = {
    status: GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsMessagingStatus;
};
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsOtherStatus: {
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsOtherStatus = ClosedEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsOtherStatus>;
export type Other = {
    status: GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsOtherStatus;
};
export type Protocols = {
    storage?: Storage | undefined;
    experimentation?: GetConfigurationProductsExperimentation | undefined;
    ai?: Ai | undefined;
    authentication?: Authentication | undefined;
    observability?: Observability | undefined;
    video?: Video | undefined;
    workflow?: Workflow | undefined;
    checks?: GetConfigurationProductsChecks | undefined;
    logDrain?: LogDrain | undefined;
    traceDrain?: TraceDrain | undefined;
    messaging?: Messaging | undefined;
    other?: Other | undefined;
};
export declare const PrimaryProtocol: {
    readonly Checks: "checks";
    readonly Ai: "ai";
    readonly Authentication: "authentication";
    readonly Storage: "storage";
    readonly Experimentation: "experimentation";
    readonly Messaging: "messaging";
    readonly Observability: "observability";
    readonly Video: "video";
    readonly Workflow: "workflow";
    readonly LogDrain: "logDrain";
    readonly TraceDrain: "traceDrain";
    readonly Other: "other";
};
export type PrimaryProtocol = ClosedEnum<typeof PrimaryProtocol>;
export declare const GetConfigurationProductsType: {
    readonly Object: "object";
};
export type GetConfigurationProductsType = ClosedEnum<typeof GetConfigurationProductsType>;
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema10Type: {
    readonly String: "string";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema10Type = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema10Type>;
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiControl: {
    readonly GitNamespace: "git-namespace";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiControl = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiControl>;
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3 = ClosedEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3>;
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnly = GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3;
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3 = ClosedEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3>;
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHidden = GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3;
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3 = ClosedEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3>;
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabled = GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3;
export type GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescription = GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2 | string;
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue = {
    expr: string;
};
export declare const GitProviders: {
    readonly Github: "github";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type GitProviders = ClosedEnum<typeof GitProviders>;
export type Properties10 = {
    type: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema10Type;
    uiControl: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiControl;
    description?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3 | undefined;
    uiHidden?: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3 | undefined;
    uiDisabled?: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3 | undefined;
    uiDescription?: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2 | string | undefined;
    uiFormattedValue?: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
    gitProviders?: Array<GitProviders> | undefined;
};
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaType: {
    readonly String: "string";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaType = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaType>;
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiControl: {
    readonly Domain: "domain";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiControl = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiControl>;
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3 = ClosedEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3>;
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnly = GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3;
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3 = ClosedEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3>;
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHidden = GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3;
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3 = ClosedEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3>;
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabled = GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3;
export type GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescription = GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2 | string;
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue = {
    expr: string;
};
export type Properties9 = {
    type: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaType;
    uiControl: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiControl;
    description?: string | undefined;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3 | undefined;
    uiHidden?: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3 | undefined;
    uiDisabled?: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3 | undefined;
    uiDescription?: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2 | string | undefined;
    uiFormattedValue?: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
};
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsType: {
    readonly Array: "array";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsType = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsType>;
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema8Type: {
    readonly String: "string";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema8Type = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema8Type>;
export type GetConfigurationProductsPropertiesIntegrationsItems = {
    type: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema8Type;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    enum?: Array<string> | undefined;
};
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl: {
    readonly MultiVercelRegion: "multi-vercel-region";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl>;
export declare const GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson3 = ClosedEnum<typeof GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson3>;
export type GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1 = {
    expr: string;
};
export type GetConfigurationProductsUiOptionsIntegrationsResponseDisabled = GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1 | boolean | GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson3;
export declare const GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson3 = ClosedEnum<typeof GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson3>;
export type GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1 = {
    expr: string;
};
export type GetConfigurationProductsUiOptionsIntegrationsResponseHidden = GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1 | boolean | GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson3;
export type GetConfigurationProductsUiOptions3 = {
    value: string;
    disabled?: GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1 | boolean | GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson3 | undefined;
    hidden?: GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1 | boolean | GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson3 | undefined;
};
export declare const GetConfigurationProductsDisabledIntegrationsResponse2003: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsDisabledIntegrationsResponse2003 = ClosedEnum<typeof GetConfigurationProductsDisabledIntegrationsResponse2003>;
export type GetConfigurationProductsDisabledIntegrationsResponse2001 = {
    expr: string;
};
export type GetConfigurationProductsUiOptionsIntegrationsDisabled = GetConfigurationProductsDisabledIntegrationsResponse2001 | boolean | GetConfigurationProductsDisabledIntegrationsResponse2003;
export declare const GetConfigurationProductsHiddenIntegrationsResponse2003: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsHiddenIntegrationsResponse2003 = ClosedEnum<typeof GetConfigurationProductsHiddenIntegrationsResponse2003>;
export type GetConfigurationProductsHiddenIntegrationsResponse2001 = {
    expr: string;
};
export type GetConfigurationProductsUiOptionsIntegrationsHidden = GetConfigurationProductsHiddenIntegrationsResponse2001 | boolean | GetConfigurationProductsHiddenIntegrationsResponse2003;
export type GetConfigurationProductsUiOptions1 = {
    value: string;
    label: string;
    disabled?: GetConfigurationProductsDisabledIntegrationsResponse2001 | boolean | GetConfigurationProductsDisabledIntegrationsResponse2003 | undefined;
    hidden?: GetConfigurationProductsHiddenIntegrationsResponse2001 | boolean | GetConfigurationProductsHiddenIntegrationsResponse2003 | undefined;
};
export type GetConfigurationProductsPropertiesIntegrationsUiOptions = GetConfigurationProductsUiOptions1 | GetConfigurationProductsUiOptions3 | string;
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts3 = ClosedEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts3>;
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly = GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts3;
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts3 = ClosedEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts3>;
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden = GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts3;
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts3 = ClosedEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts3>;
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled = GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts3;
export type GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription = GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2 | string;
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue = {
    expr: string;
};
export type Properties8 = {
    type: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsType;
    items: GetConfigurationProductsPropertiesIntegrationsItems;
    uiControl: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl;
    uiOptions: Array<GetConfigurationProductsUiOptions1 | GetConfigurationProductsUiOptions3 | string>;
    description?: string | undefined;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts3 | undefined;
    uiHidden?: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts3 | undefined;
    uiDisabled?: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts3 | undefined;
    uiDescription?: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2 | string | undefined;
    uiFormattedValue?: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
    default?: Array<string> | undefined;
    example?: Array<string> | undefined;
};
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType: {
    readonly String: "string";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType>;
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiControl: {
    readonly VercelRegion: "vercel-region";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiControl = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiControl>;
export declare const GetConfigurationProductsDisabledIntegrationsResponse3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsDisabledIntegrationsResponse3 = ClosedEnum<typeof GetConfigurationProductsDisabledIntegrationsResponse3>;
export type GetConfigurationProductsDisabledIntegrationsResponse1 = {
    expr: string;
};
export type GetConfigurationProductsUiOptionsDisabled = GetConfigurationProductsDisabledIntegrationsResponse1 | boolean | GetConfigurationProductsDisabledIntegrationsResponse3;
export declare const GetConfigurationProductsHiddenIntegrationsResponse3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsHiddenIntegrationsResponse3 = ClosedEnum<typeof GetConfigurationProductsHiddenIntegrationsResponse3>;
export type GetConfigurationProductsHiddenIntegrationsResponse1 = {
    expr: string;
};
export type GetConfigurationProductsUiOptionsHidden = GetConfigurationProductsHiddenIntegrationsResponse1 | boolean | GetConfigurationProductsHiddenIntegrationsResponse3;
export type UiOptions3 = {
    value: string;
    disabled?: GetConfigurationProductsDisabledIntegrationsResponse1 | boolean | GetConfigurationProductsDisabledIntegrationsResponse3 | undefined;
    hidden?: GetConfigurationProductsHiddenIntegrationsResponse1 | boolean | GetConfigurationProductsHiddenIntegrationsResponse3 | undefined;
};
export declare const GetConfigurationProductsDisabledIntegrations3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsDisabledIntegrations3 = ClosedEnum<typeof GetConfigurationProductsDisabledIntegrations3>;
export type GetConfigurationProductsDisabledIntegrations1 = {
    expr: string;
};
export type UiOptionsDisabled = GetConfigurationProductsDisabledIntegrations1 | boolean | GetConfigurationProductsDisabledIntegrations3;
export declare const GetConfigurationProductsHiddenIntegrations3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsHiddenIntegrations3 = ClosedEnum<typeof GetConfigurationProductsHiddenIntegrations3>;
export type GetConfigurationProductsHiddenIntegrations1 = {
    expr: string;
};
export type UiOptionsHidden = GetConfigurationProductsHiddenIntegrations1 | boolean | GetConfigurationProductsHiddenIntegrations3;
export type UiOptions1 = {
    value: string;
    label: string;
    disabled?: GetConfigurationProductsDisabledIntegrations1 | boolean | GetConfigurationProductsDisabledIntegrations3 | undefined;
    hidden?: GetConfigurationProductsHiddenIntegrations1 | boolean | GetConfigurationProductsHiddenIntegrations3 | undefined;
};
export type GetConfigurationProductsPropertiesUiOptions = UiOptions1 | UiOptions3 | string;
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3 = ClosedEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3>;
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly = GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3;
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3 = ClosedEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3>;
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHidden = GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3;
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3 = ClosedEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3>;
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabled = GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3;
export type GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescription = GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2 | string;
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue = {
    expr: string;
};
export type Properties7 = {
    type: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType;
    uiControl: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiControl;
    uiOptions: Array<UiOptions1 | UiOptions3 | string>;
    description?: string | undefined;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3 | undefined;
    uiHidden?: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3 | undefined;
    uiDisabled?: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3 | undefined;
    uiDescription?: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2 | string | undefined;
    uiFormattedValue?: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
};
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONType: {
    readonly Array: "array";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONType = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONType>;
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema6Type: {
    readonly String: "string";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema6Type = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema6Type>;
export type GetConfigurationProductsPropertiesItems = {
    type: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema6Type;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    enum?: Array<string> | undefined;
};
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiControl: {
    readonly MultiSelect: "multi-select";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200UiControl = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200UiControl>;
export declare const GetConfigurationProductsDisabled3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsDisabled3 = ClosedEnum<typeof GetConfigurationProductsDisabled3>;
export type GetConfigurationProductsDisabled1 = {
    expr: string;
};
export type PropertiesDisabled = GetConfigurationProductsDisabled1 | boolean | GetConfigurationProductsDisabled3;
export declare const GetConfigurationProductsHidden3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsHidden3 = ClosedEnum<typeof GetConfigurationProductsHidden3>;
export type GetConfigurationProductsHidden1 = {
    expr: string;
};
export type PropertiesHidden = GetConfigurationProductsHidden1 | boolean | GetConfigurationProductsHidden3;
export type PropertiesUiOptions = {
    value: string;
    label: string;
    disabled?: GetConfigurationProductsDisabled1 | boolean | GetConfigurationProductsDisabled3 | undefined;
    hidden?: GetConfigurationProductsHidden1 | boolean | GetConfigurationProductsHidden3 | undefined;
};
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson3 = ClosedEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson3>;
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200UiReadOnly = GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson3;
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson3 = ClosedEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson3>;
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200UiHidden = GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson3;
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson3 = ClosedEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson3>;
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200UiDisabled = GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson3;
export type GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200UiDescription = GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2 | string;
export type GetConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue = {
    expr: string;
};
export type Properties6 = {
    type: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONType;
    items: GetConfigurationProductsPropertiesItems;
    uiControl: GetConfigurationProductsPropertiesIntegrationsResponse200UiControl;
    uiOptions: Array<PropertiesUiOptions>;
    description?: string | undefined;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson3 | undefined;
    uiHidden?: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson3 | undefined;
    uiDisabled?: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson3 | undefined;
    uiDescription?: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2 | string | undefined;
    uiFormattedValue?: GetConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
    default?: Array<string> | undefined;
    example?: Array<string> | undefined;
};
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200Type: {
    readonly String: "string";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200Type = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200Type>;
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiControl: {
    readonly Select: "select";
};
export type GetConfigurationProductsPropertiesIntegrationsResponseUiControl = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponseUiControl>;
export declare const Disabled3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type Disabled3 = ClosedEnum<typeof Disabled3>;
export type Disabled1 = {
    expr: string;
};
export type Disabled = Disabled1 | boolean | Disabled3;
export declare const Hidden3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type Hidden3 = ClosedEnum<typeof Hidden3>;
export type Hidden1 = {
    expr: string;
};
export type Hidden = Hidden1 | boolean | Hidden3;
export type UiOptions = {
    value: string;
    label: string;
    disabled?: Disabled1 | boolean | Disabled3 | undefined;
    hidden?: Hidden1 | boolean | Hidden3 | undefined;
};
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse2003: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse2003 = ClosedEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse2003>;
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse2001 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponseUiReadOnly = GetConfigurationProductsUiReadOnlyIntegrationsResponse2001 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse2003;
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse2003: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiHiddenIntegrationsResponse2003 = ClosedEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse2003>;
export type GetConfigurationProductsUiHiddenIntegrationsResponse2001 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponseUiHidden = GetConfigurationProductsUiHiddenIntegrationsResponse2001 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse2003;
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse2003: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiDisabledIntegrationsResponse2003 = ClosedEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse2003>;
export type GetConfigurationProductsUiDisabledIntegrationsResponse2001 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponseUiDisabled = GetConfigurationProductsUiDisabledIntegrationsResponse2001 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse2003;
export type GetConfigurationProductsUiDescriptionIntegrationsResponse2002 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsResponseUiDescription = GetConfigurationProductsUiDescriptionIntegrationsResponse2002 | string;
export type GetConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue = {
    expr: string;
};
export type Properties5 = {
    type: GetConfigurationProductsPropertiesIntegrationsResponse200Type;
    uiControl: GetConfigurationProductsPropertiesIntegrationsResponseUiControl;
    uiOptions: Array<UiOptions>;
    description?: string | undefined;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: GetConfigurationProductsUiReadOnlyIntegrationsResponse2001 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse2003 | undefined;
    uiHidden?: GetConfigurationProductsUiHiddenIntegrationsResponse2001 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse2003 | undefined;
    uiDisabled?: GetConfigurationProductsUiDisabledIntegrationsResponse2001 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse2003 | undefined;
    uiDescription?: GetConfigurationProductsUiDescriptionIntegrationsResponse2002 | string | undefined;
    uiFormattedValue?: GetConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
};
export declare const GetConfigurationProductsPropertiesIntegrationsResponseType: {
    readonly Array: "array";
};
export type GetConfigurationProductsPropertiesIntegrationsResponseType = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponseType>;
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema4Type: {
    readonly Number: "number";
};
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema4Type = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema4Type>;
export type PropertiesItems = {
    type: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema4Type;
    description?: string | undefined;
    minimum?: number | undefined;
    exclusiveMinimum?: number | undefined;
    maximum?: number | undefined;
    exclusiveMaximum?: number | undefined;
    default?: number | undefined;
};
export declare const GetConfigurationProductsPropertiesIntegrationsUiControl: {
    readonly Slider: "slider";
};
export type GetConfigurationProductsPropertiesIntegrationsUiControl = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsUiControl>;
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse3 = ClosedEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse3>;
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsUiReadOnly = GetConfigurationProductsUiReadOnlyIntegrationsResponse1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse3;
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiHiddenIntegrationsResponse3 = ClosedEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse3>;
export type GetConfigurationProductsUiHiddenIntegrationsResponse1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsUiHidden = GetConfigurationProductsUiHiddenIntegrationsResponse1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse3;
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiDisabledIntegrationsResponse3 = ClosedEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse3>;
export type GetConfigurationProductsUiDisabledIntegrationsResponse1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsUiDisabled = GetConfigurationProductsUiDisabledIntegrationsResponse1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse3;
export type GetConfigurationProductsUiDescriptionIntegrationsResponse2 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesIntegrationsUiDescription = GetConfigurationProductsUiDescriptionIntegrationsResponse2 | string;
export type GetConfigurationProductsPropertiesIntegrationsUiFormattedValue = {
    expr: string;
};
export type Properties4 = {
    type: GetConfigurationProductsPropertiesIntegrationsResponseType;
    items: PropertiesItems;
    uiControl: GetConfigurationProductsPropertiesIntegrationsUiControl;
    uiSteps: Array<number>;
    description?: string | undefined;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: GetConfigurationProductsUiReadOnlyIntegrationsResponse1 | boolean | GetConfigurationProductsUiReadOnlyIntegrationsResponse3 | undefined;
    uiHidden?: GetConfigurationProductsUiHiddenIntegrationsResponse1 | boolean | GetConfigurationProductsUiHiddenIntegrationsResponse3 | undefined;
    uiDisabled?: GetConfigurationProductsUiDisabledIntegrationsResponse1 | boolean | GetConfigurationProductsUiDisabledIntegrationsResponse3 | undefined;
    uiDescription?: GetConfigurationProductsUiDescriptionIntegrationsResponse2 | string | undefined;
    uiFormattedValue?: GetConfigurationProductsPropertiesIntegrationsUiFormattedValue | undefined;
    default?: Array<number> | undefined;
};
export declare const GetConfigurationProductsPropertiesIntegrationsType: {
    readonly Boolean: "boolean";
};
export type GetConfigurationProductsPropertiesIntegrationsType = ClosedEnum<typeof GetConfigurationProductsPropertiesIntegrationsType>;
export declare const GetConfigurationProductsPropertiesUiControl: {
    readonly Toggle: "toggle";
};
export type GetConfigurationProductsPropertiesUiControl = ClosedEnum<typeof GetConfigurationProductsPropertiesUiControl>;
export declare const GetConfigurationProductsUiReadOnlyIntegrations3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiReadOnlyIntegrations3 = ClosedEnum<typeof GetConfigurationProductsUiReadOnlyIntegrations3>;
export type GetConfigurationProductsUiReadOnlyIntegrations1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesUiReadOnly = GetConfigurationProductsUiReadOnlyIntegrations1 | boolean | GetConfigurationProductsUiReadOnlyIntegrations3;
export declare const GetConfigurationProductsUiHiddenIntegrations3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiHiddenIntegrations3 = ClosedEnum<typeof GetConfigurationProductsUiHiddenIntegrations3>;
export type GetConfigurationProductsUiHiddenIntegrations1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesUiHidden = GetConfigurationProductsUiHiddenIntegrations1 | boolean | GetConfigurationProductsUiHiddenIntegrations3;
export declare const GetConfigurationProductsUiDisabledIntegrations3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiDisabledIntegrations3 = ClosedEnum<typeof GetConfigurationProductsUiDisabledIntegrations3>;
export type GetConfigurationProductsUiDisabledIntegrations1 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesUiDisabled = GetConfigurationProductsUiDisabledIntegrations1 | boolean | GetConfigurationProductsUiDisabledIntegrations3;
export type GetConfigurationProductsUiDescriptionIntegrations2 = {
    expr: string;
};
export type GetConfigurationProductsPropertiesUiDescription = GetConfigurationProductsUiDescriptionIntegrations2 | string;
export type GetConfigurationProductsPropertiesUiFormattedValue = {
    expr: string;
};
export type Properties3 = {
    type: GetConfigurationProductsPropertiesIntegrationsType;
    uiControl: GetConfigurationProductsPropertiesUiControl;
    description?: string | undefined;
    default?: boolean | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: GetConfigurationProductsUiReadOnlyIntegrations1 | boolean | GetConfigurationProductsUiReadOnlyIntegrations3 | undefined;
    uiHidden?: GetConfigurationProductsUiHiddenIntegrations1 | boolean | GetConfigurationProductsUiHiddenIntegrations3 | undefined;
    uiDisabled?: GetConfigurationProductsUiDisabledIntegrations1 | boolean | GetConfigurationProductsUiDisabledIntegrations3 | undefined;
    uiDescription?: GetConfigurationProductsUiDescriptionIntegrations2 | string | undefined;
    uiFormattedValue?: GetConfigurationProductsPropertiesUiFormattedValue | undefined;
};
export declare const GetConfigurationProductsPropertiesType: {
    readonly Number: "number";
};
export type GetConfigurationProductsPropertiesType = ClosedEnum<typeof GetConfigurationProductsPropertiesType>;
export declare const PropertiesUiControl: {
    readonly Input: "input";
};
export type PropertiesUiControl = ClosedEnum<typeof PropertiesUiControl>;
export declare const GetConfigurationProductsUiReadOnly3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiReadOnly3 = ClosedEnum<typeof GetConfigurationProductsUiReadOnly3>;
export type GetConfigurationProductsUiReadOnly1 = {
    expr: string;
};
export type PropertiesUiReadOnly = GetConfigurationProductsUiReadOnly1 | boolean | GetConfigurationProductsUiReadOnly3;
export declare const GetConfigurationProductsUiHidden3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiHidden3 = ClosedEnum<typeof GetConfigurationProductsUiHidden3>;
export type GetConfigurationProductsUiHidden1 = {
    expr: string;
};
export type PropertiesUiHidden = GetConfigurationProductsUiHidden1 | boolean | GetConfigurationProductsUiHidden3;
export declare const GetConfigurationProductsUiDisabled3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type GetConfigurationProductsUiDisabled3 = ClosedEnum<typeof GetConfigurationProductsUiDisabled3>;
export type GetConfigurationProductsUiDisabled1 = {
    expr: string;
};
export type PropertiesUiDisabled = GetConfigurationProductsUiDisabled1 | boolean | GetConfigurationProductsUiDisabled3;
export type GetConfigurationProductsUiDescription2 = {
    expr: string;
};
export type PropertiesUiDescription = GetConfigurationProductsUiDescription2 | string;
export type PropertiesUiFormattedValue = {
    expr: string;
};
export type Properties2 = {
    type: GetConfigurationProductsPropertiesType;
    uiControl: PropertiesUiControl;
    minimum?: number | undefined;
    maximum?: number | undefined;
    description?: string | undefined;
    exclusiveMaximum?: number | undefined;
    exclusiveMinimum?: number | undefined;
    default?: number | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: GetConfigurationProductsUiReadOnly1 | boolean | GetConfigurationProductsUiReadOnly3 | undefined;
    uiHidden?: GetConfigurationProductsUiHidden1 | boolean | GetConfigurationProductsUiHidden3 | undefined;
    uiDisabled?: GetConfigurationProductsUiDisabled1 | boolean | GetConfigurationProductsUiDisabled3 | undefined;
    uiDescription?: GetConfigurationProductsUiDescription2 | string | undefined;
    uiFormattedValue?: PropertiesUiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
};
export declare const PropertiesType: {
    readonly String: "string";
};
export type PropertiesType = ClosedEnum<typeof PropertiesType>;
export declare const UiControl: {
    readonly Input: "input";
};
export type UiControl = ClosedEnum<typeof UiControl>;
export declare const UiReadOnly3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type UiReadOnly3 = ClosedEnum<typeof UiReadOnly3>;
export type UiReadOnly1 = {
    expr: string;
};
export type UiReadOnly = UiReadOnly1 | boolean | UiReadOnly3;
export declare const UiHidden3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type UiHidden3 = ClosedEnum<typeof UiHidden3>;
export type UiHidden1 = {
    expr: string;
};
export type UiHidden = UiHidden1 | boolean | UiHidden3;
export declare const UiDisabled3: {
    readonly Update: "update";
    readonly Create: "create";
};
export type UiDisabled3 = ClosedEnum<typeof UiDisabled3>;
export type UiDisabled1 = {
    expr: string;
};
export type UiDisabled = UiDisabled1 | boolean | UiDisabled3;
export type UiDescription2 = {
    expr: string;
};
export type UiDescription = UiDescription2 | string;
export type UiFormattedValue = {
    expr: string;
};
export type Properties1 = {
    type: PropertiesType;
    uiControl: UiControl;
    description?: string | undefined;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    uiLabel?: string | undefined;
    uiReadOnly?: UiReadOnly1 | boolean | UiReadOnly3 | undefined;
    uiHidden?: UiHidden1 | boolean | UiHidden3 | undefined;
    uiDisabled?: UiDisabled1 | boolean | UiDisabled3 | undefined;
    uiDescription?: UiDescription2 | string | undefined;
    uiFormattedValue?: UiFormattedValue | undefined;
    uiPlaceholder?: string | undefined;
};
export type Properties = Properties4 | Properties6 | Properties8 | Properties5 | Properties7 | Properties1 | Properties2 | Properties3 | Properties9 | Properties10;
export type MetadataSchema = {
    type: GetConfigurationProductsType;
    properties: {
        [k: string]: Properties4 | Properties6 | Properties8 | Properties5 | Properties7 | Properties1 | Properties2 | Properties3 | Properties9 | Properties10;
    };
    required?: Array<string> | undefined;
};
export type Products = {
    id: string;
    slug: string;
    name: string;
    protocols: Protocols;
    primaryProtocol?: PrimaryProtocol | undefined;
    metadataSchema: MetadataSchema;
};
export type Integration = {
    id: string;
    slug: string;
    name: string;
};
export type GetConfigurationProductsConfiguration = {
    id: string;
};
/**
 * List of products available for this integration configuration
 */
export type GetConfigurationProductsResponseBody = {
    products: Array<Products>;
    integration: Integration;
    configuration: GetConfigurationProductsConfiguration;
};
/** @internal */
export declare const GetConfigurationProductsRequest$inboundSchema: z.ZodType<GetConfigurationProductsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetConfigurationProductsRequest$outboundSchema: z.ZodType<GetConfigurationProductsRequest$Outbound, z.ZodTypeDef, GetConfigurationProductsRequest>;
export declare function getConfigurationProductsRequestToJSON(getConfigurationProductsRequest: GetConfigurationProductsRequest): string;
export declare function getConfigurationProductsRequestFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsRequest, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsStatus>;
/** @internal */
export declare const GetConfigurationProductsStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsStatus>;
/** @internal */
export declare const GetConfigurationProductsRepl$inboundSchema: z.ZodType<GetConfigurationProductsRepl, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsRepl$Outbound = {
    enabled: boolean;
    supportsReadOnlyMode: boolean;
    welcomeMessage?: string | undefined;
};
/** @internal */
export declare const GetConfigurationProductsRepl$outboundSchema: z.ZodType<GetConfigurationProductsRepl$Outbound, z.ZodTypeDef, GetConfigurationProductsRepl>;
export declare function getConfigurationProductsReplToJSON(getConfigurationProductsRepl: GetConfigurationProductsRepl): string;
export declare function getConfigurationProductsReplFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsRepl, SDKValidationError>;
/** @internal */
export declare const Storage$inboundSchema: z.ZodType<Storage, z.ZodTypeDef, unknown>;
/** @internal */
export type Storage$Outbound = {
    status: string;
    repl?: GetConfigurationProductsRepl$Outbound | undefined;
};
/** @internal */
export declare const Storage$outboundSchema: z.ZodType<Storage$Outbound, z.ZodTypeDef, Storage>;
export declare function storageToJSON(storage: Storage): string;
export declare function storageFromJSON(jsonString: string): SafeParseResult<Storage, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsStatus>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsStatus>;
/** @internal */
export declare const GetConfigurationProductsExperimentation$inboundSchema: z.ZodType<GetConfigurationProductsExperimentation, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsExperimentation$Outbound = {
    status: string;
    edgeConfigSyncingSupport?: boolean | undefined;
};
/** @internal */
export declare const GetConfigurationProductsExperimentation$outboundSchema: z.ZodType<GetConfigurationProductsExperimentation$Outbound, z.ZodTypeDef, GetConfigurationProductsExperimentation>;
export declare function getConfigurationProductsExperimentationToJSON(getConfigurationProductsExperimentation: GetConfigurationProductsExperimentation): string;
export declare function getConfigurationProductsExperimentationFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsExperimentation, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponseStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponseStatus>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponseStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponseStatus>;
/** @internal */
export declare const Ai$inboundSchema: z.ZodType<Ai, z.ZodTypeDef, unknown>;
/** @internal */
export type Ai$Outbound = {
    status: string;
};
/** @internal */
export declare const Ai$outboundSchema: z.ZodType<Ai$Outbound, z.ZodTypeDef, Ai>;
export declare function aiToJSON(ai: Ai): string;
export declare function aiFromJSON(jsonString: string): SafeParseResult<Ai, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200Status$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200Status>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200Status$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200Status>;
/** @internal */
export declare const Authentication$inboundSchema: z.ZodType<Authentication, z.ZodTypeDef, unknown>;
/** @internal */
export type Authentication$Outbound = {
    status: string;
};
/** @internal */
export declare const Authentication$outboundSchema: z.ZodType<Authentication$Outbound, z.ZodTypeDef, Authentication>;
export declare function authenticationToJSON(authentication: Authentication): string;
export declare function authenticationFromJSON(jsonString: string): SafeParseResult<Authentication, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONStatus>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONStatus>;
/** @internal */
export declare const Observability$inboundSchema: z.ZodType<Observability, z.ZodTypeDef, unknown>;
/** @internal */
export type Observability$Outbound = {
    status: string;
};
/** @internal */
export declare const Observability$outboundSchema: z.ZodType<Observability$Outbound, z.ZodTypeDef, Observability>;
export declare function observabilityToJSON(observability: Observability): string;
export declare function observabilityFromJSON(jsonString: string): SafeParseResult<Observability, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyStatus>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyStatus>;
/** @internal */
export declare const Video$inboundSchema: z.ZodType<Video, z.ZodTypeDef, unknown>;
/** @internal */
export type Video$Outbound = {
    status: string;
};
/** @internal */
export declare const Video$outboundSchema: z.ZodType<Video$Outbound, z.ZodTypeDef, Video>;
export declare function videoToJSON(video: Video): string;
export declare function videoFromJSON(jsonString: string): SafeParseResult<Video, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsStatus>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsStatus>;
/** @internal */
export declare const Workflow$inboundSchema: z.ZodType<Workflow, z.ZodTypeDef, unknown>;
/** @internal */
export type Workflow$Outbound = {
    status: string;
};
/** @internal */
export declare const Workflow$outboundSchema: z.ZodType<Workflow$Outbound, z.ZodTypeDef, Workflow>;
export declare function workflowToJSON(workflow: Workflow): string;
export declare function workflowFromJSON(jsonString: string): SafeParseResult<Workflow, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsStatus>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsStatus>;
/** @internal */
export declare const GetConfigurationProductsChecks$inboundSchema: z.ZodType<GetConfigurationProductsChecks, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsChecks$Outbound = {
    status: string;
};
/** @internal */
export declare const GetConfigurationProductsChecks$outboundSchema: z.ZodType<GetConfigurationProductsChecks$Outbound, z.ZodTypeDef, GetConfigurationProductsChecks>;
export declare function getConfigurationProductsChecksToJSON(getConfigurationProductsChecks: GetConfigurationProductsChecks): string;
export declare function getConfigurationProductsChecksFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsChecks, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsLogDrainStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsLogDrainStatus>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsLogDrainStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsLogDrainStatus>;
/** @internal */
export declare const Format$inboundSchema: z.ZodNativeEnum<typeof Format>;
/** @internal */
export declare const Format$outboundSchema: z.ZodNativeEnum<typeof Format>;
/** @internal */
export declare const LogDrain$inboundSchema: z.ZodType<LogDrain, z.ZodTypeDef, unknown>;
/** @internal */
export type LogDrain$Outbound = {
    status: string;
    endpoint: string;
    headers?: {
        [k: string]: string;
    } | undefined;
    format: string;
};
/** @internal */
export declare const LogDrain$outboundSchema: z.ZodType<LogDrain$Outbound, z.ZodTypeDef, LogDrain>;
export declare function logDrainToJSON(logDrain: LogDrain): string;
export declare function logDrainFromJSON(jsonString: string): SafeParseResult<LogDrain, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsTraceDrainStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsTraceDrainStatus>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsTraceDrainStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsTraceDrainStatus>;
/** @internal */
export declare const GetConfigurationProductsFormat$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsFormat>;
/** @internal */
export declare const GetConfigurationProductsFormat$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsFormat>;
/** @internal */
export declare const TraceDrain$inboundSchema: z.ZodType<TraceDrain, z.ZodTypeDef, unknown>;
/** @internal */
export type TraceDrain$Outbound = {
    status: string;
    endpoint: string;
    headers?: {
        [k: string]: string;
    } | undefined;
    format: string;
};
/** @internal */
export declare const TraceDrain$outboundSchema: z.ZodType<TraceDrain$Outbound, z.ZodTypeDef, TraceDrain>;
export declare function traceDrainToJSON(traceDrain: TraceDrain): string;
export declare function traceDrainFromJSON(jsonString: string): SafeParseResult<TraceDrain, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsMessagingStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsMessagingStatus>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsMessagingStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsMessagingStatus>;
/** @internal */
export declare const Messaging$inboundSchema: z.ZodType<Messaging, z.ZodTypeDef, unknown>;
/** @internal */
export type Messaging$Outbound = {
    status: string;
};
/** @internal */
export declare const Messaging$outboundSchema: z.ZodType<Messaging$Outbound, z.ZodTypeDef, Messaging>;
export declare function messagingToJSON(messaging: Messaging): string;
export declare function messagingFromJSON(jsonString: string): SafeParseResult<Messaging, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsOtherStatus$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsOtherStatus>;
/** @internal */
export declare const GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsOtherStatus$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsIntegrationsResponse200ApplicationJSONResponseBodyProductsProtocolsOtherStatus>;
/** @internal */
export declare const Other$inboundSchema: z.ZodType<Other, z.ZodTypeDef, unknown>;
/** @internal */
export type Other$Outbound = {
    status: string;
};
/** @internal */
export declare const Other$outboundSchema: z.ZodType<Other$Outbound, z.ZodTypeDef, Other>;
export declare function otherToJSON(other: Other): string;
export declare function otherFromJSON(jsonString: string): SafeParseResult<Other, SDKValidationError>;
/** @internal */
export declare const Protocols$inboundSchema: z.ZodType<Protocols, z.ZodTypeDef, unknown>;
/** @internal */
export type Protocols$Outbound = {
    storage?: Storage$Outbound | undefined;
    experimentation?: GetConfigurationProductsExperimentation$Outbound | undefined;
    ai?: Ai$Outbound | undefined;
    authentication?: Authentication$Outbound | undefined;
    observability?: Observability$Outbound | undefined;
    video?: Video$Outbound | undefined;
    workflow?: Workflow$Outbound | undefined;
    checks?: GetConfigurationProductsChecks$Outbound | undefined;
    logDrain?: LogDrain$Outbound | undefined;
    traceDrain?: TraceDrain$Outbound | undefined;
    messaging?: Messaging$Outbound | undefined;
    other?: Other$Outbound | undefined;
};
/** @internal */
export declare const Protocols$outboundSchema: z.ZodType<Protocols$Outbound, z.ZodTypeDef, Protocols>;
export declare function protocolsToJSON(protocols: Protocols): string;
export declare function protocolsFromJSON(jsonString: string): SafeParseResult<Protocols, SDKValidationError>;
/** @internal */
export declare const PrimaryProtocol$inboundSchema: z.ZodNativeEnum<typeof PrimaryProtocol>;
/** @internal */
export declare const PrimaryProtocol$outboundSchema: z.ZodNativeEnum<typeof PrimaryProtocol>;
/** @internal */
export declare const GetConfigurationProductsType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsType>;
/** @internal */
export declare const GetConfigurationProductsType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema10Type$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema10Type>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema10Type$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema10Type>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiControl$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiControl>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiControl$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiControl>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$inboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$outboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1>;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1ToJSON(getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1): string;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnly$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnly$Outbound = GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnly$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnly$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnly>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnlyToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnly: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnly): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnlyFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiReadOnly, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$inboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$outboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1>;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1ToJSON(getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1): string;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHidden$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHidden$Outbound = GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHidden$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHidden$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHidden>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHiddenToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHidden: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHidden): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHiddenFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiHidden, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$inboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$outboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1>;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1ToJSON(getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1): string;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabled$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabled$Outbound = GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabled$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabled$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabled>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabledToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabled: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabled): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabledFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2$inboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2$outboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2>;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2ToJSON(getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2): string;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescription$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescription$Outbound = GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2$Outbound | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescription$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescription$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescription>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescriptionToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescription: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescription): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescriptionFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiDescription, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValueToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValueFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const GitProviders$inboundSchema: z.ZodNativeEnum<typeof GitProviders>;
/** @internal */
export declare const GitProviders$outboundSchema: z.ZodNativeEnum<typeof GitProviders>;
/** @internal */
export declare const Properties10$inboundSchema: z.ZodType<Properties10, z.ZodTypeDef, unknown>;
/** @internal */
export type Properties10$Outbound = {
    type: string;
    "ui:control": string;
    description?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound | boolean | string | undefined;
    "ui:hidden"?: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound | boolean | string | undefined;
    "ui:disabled"?: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties1$Outbound | boolean | string | undefined;
    "ui:description"?: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaProperties2$Outbound | string | undefined;
    "ui:formatted-value"?: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
    "git:providers"?: Array<string> | undefined;
};
/** @internal */
export declare const Properties10$outboundSchema: z.ZodType<Properties10$Outbound, z.ZodTypeDef, Properties10>;
export declare function properties10ToJSON(properties10: Properties10): string;
export declare function properties10FromJSON(jsonString: string): SafeParseResult<Properties10, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchemaType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiControl$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiControl>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiControl$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiControl>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$inboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$outboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1>;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1ToJSON(getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1): string;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnly$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnly$Outbound = GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnly$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnly$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnly>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnlyToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnly: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnly): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnlyFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiReadOnly, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$inboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$outboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1>;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1ToJSON(getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1): string;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHidden$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHidden$Outbound = GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHidden$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHidden$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHidden>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHiddenToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHidden: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHidden): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHiddenFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiHidden, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$inboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$outboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1>;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1ToJSON(getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1): string;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabled$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabled$Outbound = GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabled$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabled$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabled>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabledToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabled: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabled): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabledFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2$inboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2$outboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2>;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2ToJSON(getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2): string;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescription$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescription$Outbound = GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2$Outbound | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescription$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescription$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescription>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescriptionToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescription: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescription): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescriptionFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiDescription, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValueToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValueFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const Properties9$inboundSchema: z.ZodType<Properties9, z.ZodTypeDef, unknown>;
/** @internal */
export type Properties9$Outbound = {
    type: string;
    "ui:control": string;
    description?: string | undefined;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound | boolean | string | undefined;
    "ui:hidden"?: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound | boolean | string | undefined;
    "ui:disabled"?: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema1$Outbound | boolean | string | undefined;
    "ui:description"?: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema2$Outbound | string | undefined;
    "ui:formatted-value"?: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
};
/** @internal */
export declare const Properties9$outboundSchema: z.ZodType<Properties9$Outbound, z.ZodTypeDef, Properties9>;
export declare function properties9ToJSON(properties9: Properties9): string;
export declare function properties9FromJSON(jsonString: string): SafeParseResult<Properties9, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema8Type$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema8Type>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema8Type$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema8Type>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsItems$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsItems$Outbound = {
    type: string;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    enum?: Array<string> | undefined;
};
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsItems$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsItems$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsItems>;
export declare function getConfigurationProductsPropertiesIntegrationsItemsToJSON(getConfigurationProductsPropertiesIntegrationsItems: GetConfigurationProductsPropertiesIntegrationsItems): string;
export declare function getConfigurationProductsPropertiesIntegrationsItemsFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsItems, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiControl>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1$inboundSchema: z.ZodType<GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1$outboundSchema: z.ZodType<GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1$Outbound, z.ZodTypeDef, GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1>;
export declare function getConfigurationProductsDisabledIntegrationsResponse200ApplicationJSON1ToJSON(getConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1: GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1): string;
export declare function getConfigurationProductsDisabledIntegrationsResponse200ApplicationJSON1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiOptionsIntegrationsResponseDisabled$inboundSchema: z.ZodType<GetConfigurationProductsUiOptionsIntegrationsResponseDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiOptionsIntegrationsResponseDisabled$Outbound = GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsUiOptionsIntegrationsResponseDisabled$outboundSchema: z.ZodType<GetConfigurationProductsUiOptionsIntegrationsResponseDisabled$Outbound, z.ZodTypeDef, GetConfigurationProductsUiOptionsIntegrationsResponseDisabled>;
export declare function getConfigurationProductsUiOptionsIntegrationsResponseDisabledToJSON(getConfigurationProductsUiOptionsIntegrationsResponseDisabled: GetConfigurationProductsUiOptionsIntegrationsResponseDisabled): string;
export declare function getConfigurationProductsUiOptionsIntegrationsResponseDisabledFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiOptionsIntegrationsResponseDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1$inboundSchema: z.ZodType<GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1$outboundSchema: z.ZodType<GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1$Outbound, z.ZodTypeDef, GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1>;
export declare function getConfigurationProductsHiddenIntegrationsResponse200ApplicationJSON1ToJSON(getConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1: GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1): string;
export declare function getConfigurationProductsHiddenIntegrationsResponse200ApplicationJSON1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiOptionsIntegrationsResponseHidden$inboundSchema: z.ZodType<GetConfigurationProductsUiOptionsIntegrationsResponseHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiOptionsIntegrationsResponseHidden$Outbound = GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsUiOptionsIntegrationsResponseHidden$outboundSchema: z.ZodType<GetConfigurationProductsUiOptionsIntegrationsResponseHidden$Outbound, z.ZodTypeDef, GetConfigurationProductsUiOptionsIntegrationsResponseHidden>;
export declare function getConfigurationProductsUiOptionsIntegrationsResponseHiddenToJSON(getConfigurationProductsUiOptionsIntegrationsResponseHidden: GetConfigurationProductsUiOptionsIntegrationsResponseHidden): string;
export declare function getConfigurationProductsUiOptionsIntegrationsResponseHiddenFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiOptionsIntegrationsResponseHidden, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiOptions3$inboundSchema: z.ZodType<GetConfigurationProductsUiOptions3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiOptions3$Outbound = {
    value: string;
    disabled?: GetConfigurationProductsDisabledIntegrationsResponse200ApplicationJson1$Outbound | boolean | string | undefined;
    hidden?: GetConfigurationProductsHiddenIntegrationsResponse200ApplicationJson1$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const GetConfigurationProductsUiOptions3$outboundSchema: z.ZodType<GetConfigurationProductsUiOptions3$Outbound, z.ZodTypeDef, GetConfigurationProductsUiOptions3>;
export declare function getConfigurationProductsUiOptions3ToJSON(getConfigurationProductsUiOptions3: GetConfigurationProductsUiOptions3): string;
export declare function getConfigurationProductsUiOptions3FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiOptions3, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse2003$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsDisabledIntegrationsResponse2003>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse2003$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsDisabledIntegrationsResponse2003>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse2001$inboundSchema: z.ZodType<GetConfigurationProductsDisabledIntegrationsResponse2001, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsDisabledIntegrationsResponse2001$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse2001$outboundSchema: z.ZodType<GetConfigurationProductsDisabledIntegrationsResponse2001$Outbound, z.ZodTypeDef, GetConfigurationProductsDisabledIntegrationsResponse2001>;
export declare function getConfigurationProductsDisabledIntegrationsResponse2001ToJSON(getConfigurationProductsDisabledIntegrationsResponse2001: GetConfigurationProductsDisabledIntegrationsResponse2001): string;
export declare function getConfigurationProductsDisabledIntegrationsResponse2001FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsDisabledIntegrationsResponse2001, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiOptionsIntegrationsDisabled$inboundSchema: z.ZodType<GetConfigurationProductsUiOptionsIntegrationsDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiOptionsIntegrationsDisabled$Outbound = GetConfigurationProductsDisabledIntegrationsResponse2001$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsUiOptionsIntegrationsDisabled$outboundSchema: z.ZodType<GetConfigurationProductsUiOptionsIntegrationsDisabled$Outbound, z.ZodTypeDef, GetConfigurationProductsUiOptionsIntegrationsDisabled>;
export declare function getConfigurationProductsUiOptionsIntegrationsDisabledToJSON(getConfigurationProductsUiOptionsIntegrationsDisabled: GetConfigurationProductsUiOptionsIntegrationsDisabled): string;
export declare function getConfigurationProductsUiOptionsIntegrationsDisabledFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiOptionsIntegrationsDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse2003$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsHiddenIntegrationsResponse2003>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse2003$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsHiddenIntegrationsResponse2003>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse2001$inboundSchema: z.ZodType<GetConfigurationProductsHiddenIntegrationsResponse2001, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsHiddenIntegrationsResponse2001$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse2001$outboundSchema: z.ZodType<GetConfigurationProductsHiddenIntegrationsResponse2001$Outbound, z.ZodTypeDef, GetConfigurationProductsHiddenIntegrationsResponse2001>;
export declare function getConfigurationProductsHiddenIntegrationsResponse2001ToJSON(getConfigurationProductsHiddenIntegrationsResponse2001: GetConfigurationProductsHiddenIntegrationsResponse2001): string;
export declare function getConfigurationProductsHiddenIntegrationsResponse2001FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsHiddenIntegrationsResponse2001, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiOptionsIntegrationsHidden$inboundSchema: z.ZodType<GetConfigurationProductsUiOptionsIntegrationsHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiOptionsIntegrationsHidden$Outbound = GetConfigurationProductsHiddenIntegrationsResponse2001$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsUiOptionsIntegrationsHidden$outboundSchema: z.ZodType<GetConfigurationProductsUiOptionsIntegrationsHidden$Outbound, z.ZodTypeDef, GetConfigurationProductsUiOptionsIntegrationsHidden>;
export declare function getConfigurationProductsUiOptionsIntegrationsHiddenToJSON(getConfigurationProductsUiOptionsIntegrationsHidden: GetConfigurationProductsUiOptionsIntegrationsHidden): string;
export declare function getConfigurationProductsUiOptionsIntegrationsHiddenFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiOptionsIntegrationsHidden, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiOptions1$inboundSchema: z.ZodType<GetConfigurationProductsUiOptions1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiOptions1$Outbound = {
    value: string;
    label: string;
    disabled?: GetConfigurationProductsDisabledIntegrationsResponse2001$Outbound | boolean | string | undefined;
    hidden?: GetConfigurationProductsHiddenIntegrationsResponse2001$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const GetConfigurationProductsUiOptions1$outboundSchema: z.ZodType<GetConfigurationProductsUiOptions1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiOptions1>;
export declare function getConfigurationProductsUiOptions1ToJSON(getConfigurationProductsUiOptions1: GetConfigurationProductsUiOptions1): string;
export declare function getConfigurationProductsUiOptions1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiOptions1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiOptions$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiOptions, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsUiOptions$Outbound = GetConfigurationProductsUiOptions1$Outbound | GetConfigurationProductsUiOptions3$Outbound | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiOptions$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiOptions$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsUiOptions>;
export declare function getConfigurationProductsPropertiesIntegrationsUiOptionsToJSON(getConfigurationProductsPropertiesIntegrationsUiOptions: GetConfigurationProductsPropertiesIntegrationsUiOptions): string;
export declare function getConfigurationProductsPropertiesIntegrationsUiOptionsFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsUiOptions, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1$inboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1$outboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1>;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1ToJSON(getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1): string;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly$Outbound = GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnlyToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnlyFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiReadOnly, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1$inboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1$outboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1>;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1ToJSON(getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1): string;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden$Outbound = GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHiddenToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHiddenFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiHidden, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1$inboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1$outboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1>;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1ToJSON(getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1): string;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled$Outbound = GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabledToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabledFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2$inboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2$outboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2>;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2ToJSON(getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2): string;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription$Outbound = GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2$Outbound | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescriptionToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescriptionFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiDescription, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValueToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValueFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const Properties8$inboundSchema: z.ZodType<Properties8, z.ZodTypeDef, unknown>;
/** @internal */
export type Properties8$Outbound = {
    type: string;
    items: GetConfigurationProductsPropertiesIntegrationsItems$Outbound;
    "ui:control": string;
    "ui:options": Array<GetConfigurationProductsUiOptions1$Outbound | GetConfigurationProductsUiOptions3$Outbound | string>;
    description?: string | undefined;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound | boolean | string | undefined;
    "ui:hidden"?: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound | boolean | string | undefined;
    "ui:disabled"?: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBodyProducts1$Outbound | boolean | string | undefined;
    "ui:description"?: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBodyProducts2$Outbound | string | undefined;
    "ui:formatted-value"?: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
    default?: Array<string> | undefined;
    example?: Array<string> | undefined;
};
/** @internal */
export declare const Properties8$outboundSchema: z.ZodType<Properties8$Outbound, z.ZodTypeDef, Properties8>;
export declare function properties8ToJSON(properties8: Properties8): string;
export declare function properties8FromJSON(jsonString: string): SafeParseResult<Properties8, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiControl$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiControl>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiControl$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiControl>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsDisabledIntegrationsResponse3>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsDisabledIntegrationsResponse3>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse1$inboundSchema: z.ZodType<GetConfigurationProductsDisabledIntegrationsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsDisabledIntegrationsResponse1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrationsResponse1$outboundSchema: z.ZodType<GetConfigurationProductsDisabledIntegrationsResponse1$Outbound, z.ZodTypeDef, GetConfigurationProductsDisabledIntegrationsResponse1>;
export declare function getConfigurationProductsDisabledIntegrationsResponse1ToJSON(getConfigurationProductsDisabledIntegrationsResponse1: GetConfigurationProductsDisabledIntegrationsResponse1): string;
export declare function getConfigurationProductsDisabledIntegrationsResponse1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsDisabledIntegrationsResponse1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiOptionsDisabled$inboundSchema: z.ZodType<GetConfigurationProductsUiOptionsDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiOptionsDisabled$Outbound = GetConfigurationProductsDisabledIntegrationsResponse1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsUiOptionsDisabled$outboundSchema: z.ZodType<GetConfigurationProductsUiOptionsDisabled$Outbound, z.ZodTypeDef, GetConfigurationProductsUiOptionsDisabled>;
export declare function getConfigurationProductsUiOptionsDisabledToJSON(getConfigurationProductsUiOptionsDisabled: GetConfigurationProductsUiOptionsDisabled): string;
export declare function getConfigurationProductsUiOptionsDisabledFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiOptionsDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsHiddenIntegrationsResponse3>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsHiddenIntegrationsResponse3>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse1$inboundSchema: z.ZodType<GetConfigurationProductsHiddenIntegrationsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsHiddenIntegrationsResponse1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrationsResponse1$outboundSchema: z.ZodType<GetConfigurationProductsHiddenIntegrationsResponse1$Outbound, z.ZodTypeDef, GetConfigurationProductsHiddenIntegrationsResponse1>;
export declare function getConfigurationProductsHiddenIntegrationsResponse1ToJSON(getConfigurationProductsHiddenIntegrationsResponse1: GetConfigurationProductsHiddenIntegrationsResponse1): string;
export declare function getConfigurationProductsHiddenIntegrationsResponse1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsHiddenIntegrationsResponse1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiOptionsHidden$inboundSchema: z.ZodType<GetConfigurationProductsUiOptionsHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiOptionsHidden$Outbound = GetConfigurationProductsHiddenIntegrationsResponse1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsUiOptionsHidden$outboundSchema: z.ZodType<GetConfigurationProductsUiOptionsHidden$Outbound, z.ZodTypeDef, GetConfigurationProductsUiOptionsHidden>;
export declare function getConfigurationProductsUiOptionsHiddenToJSON(getConfigurationProductsUiOptionsHidden: GetConfigurationProductsUiOptionsHidden): string;
export declare function getConfigurationProductsUiOptionsHiddenFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiOptionsHidden, SDKValidationError>;
/** @internal */
export declare const UiOptions3$inboundSchema: z.ZodType<UiOptions3, z.ZodTypeDef, unknown>;
/** @internal */
export type UiOptions3$Outbound = {
    value: string;
    disabled?: GetConfigurationProductsDisabledIntegrationsResponse1$Outbound | boolean | string | undefined;
    hidden?: GetConfigurationProductsHiddenIntegrationsResponse1$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const UiOptions3$outboundSchema: z.ZodType<UiOptions3$Outbound, z.ZodTypeDef, UiOptions3>;
export declare function uiOptions3ToJSON(uiOptions3: UiOptions3): string;
export declare function uiOptions3FromJSON(jsonString: string): SafeParseResult<UiOptions3, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrations3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsDisabledIntegrations3>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrations3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsDisabledIntegrations3>;
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrations1$inboundSchema: z.ZodType<GetConfigurationProductsDisabledIntegrations1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsDisabledIntegrations1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsDisabledIntegrations1$outboundSchema: z.ZodType<GetConfigurationProductsDisabledIntegrations1$Outbound, z.ZodTypeDef, GetConfigurationProductsDisabledIntegrations1>;
export declare function getConfigurationProductsDisabledIntegrations1ToJSON(getConfigurationProductsDisabledIntegrations1: GetConfigurationProductsDisabledIntegrations1): string;
export declare function getConfigurationProductsDisabledIntegrations1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsDisabledIntegrations1, SDKValidationError>;
/** @internal */
export declare const UiOptionsDisabled$inboundSchema: z.ZodType<UiOptionsDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type UiOptionsDisabled$Outbound = GetConfigurationProductsDisabledIntegrations1$Outbound | boolean | string;
/** @internal */
export declare const UiOptionsDisabled$outboundSchema: z.ZodType<UiOptionsDisabled$Outbound, z.ZodTypeDef, UiOptionsDisabled>;
export declare function uiOptionsDisabledToJSON(uiOptionsDisabled: UiOptionsDisabled): string;
export declare function uiOptionsDisabledFromJSON(jsonString: string): SafeParseResult<UiOptionsDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrations3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsHiddenIntegrations3>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrations3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsHiddenIntegrations3>;
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrations1$inboundSchema: z.ZodType<GetConfigurationProductsHiddenIntegrations1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsHiddenIntegrations1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsHiddenIntegrations1$outboundSchema: z.ZodType<GetConfigurationProductsHiddenIntegrations1$Outbound, z.ZodTypeDef, GetConfigurationProductsHiddenIntegrations1>;
export declare function getConfigurationProductsHiddenIntegrations1ToJSON(getConfigurationProductsHiddenIntegrations1: GetConfigurationProductsHiddenIntegrations1): string;
export declare function getConfigurationProductsHiddenIntegrations1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsHiddenIntegrations1, SDKValidationError>;
/** @internal */
export declare const UiOptionsHidden$inboundSchema: z.ZodType<UiOptionsHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type UiOptionsHidden$Outbound = GetConfigurationProductsHiddenIntegrations1$Outbound | boolean | string;
/** @internal */
export declare const UiOptionsHidden$outboundSchema: z.ZodType<UiOptionsHidden$Outbound, z.ZodTypeDef, UiOptionsHidden>;
export declare function uiOptionsHiddenToJSON(uiOptionsHidden: UiOptionsHidden): string;
export declare function uiOptionsHiddenFromJSON(jsonString: string): SafeParseResult<UiOptionsHidden, SDKValidationError>;
/** @internal */
export declare const UiOptions1$inboundSchema: z.ZodType<UiOptions1, z.ZodTypeDef, unknown>;
/** @internal */
export type UiOptions1$Outbound = {
    value: string;
    label: string;
    disabled?: GetConfigurationProductsDisabledIntegrations1$Outbound | boolean | string | undefined;
    hidden?: GetConfigurationProductsHiddenIntegrations1$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const UiOptions1$outboundSchema: z.ZodType<UiOptions1$Outbound, z.ZodTypeDef, UiOptions1>;
export declare function uiOptions1ToJSON(uiOptions1: UiOptions1): string;
export declare function uiOptions1FromJSON(jsonString: string): SafeParseResult<UiOptions1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiOptions$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiOptions, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesUiOptions$Outbound = UiOptions1$Outbound | UiOptions3$Outbound | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiOptions$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiOptions$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesUiOptions>;
export declare function getConfigurationProductsPropertiesUiOptionsToJSON(getConfigurationProductsPropertiesUiOptions: GetConfigurationProductsPropertiesUiOptions): string;
export declare function getConfigurationProductsPropertiesUiOptionsFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesUiOptions, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$inboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$outboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1>;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1ToJSON(getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1): string;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly$Outbound = GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnlyToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnlyFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiReadOnly, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$inboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$outboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1>;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1ToJSON(getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1): string;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHidden$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHidden$Outbound = GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHidden$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHidden$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHidden>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHiddenToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHidden: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHidden): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHiddenFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiHidden, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$inboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$outboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1>;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1ToJSON(getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1): string;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabled$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabled$Outbound = GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabled$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabled$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabled>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabledToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabled: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabled): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabledFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$inboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$outboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2>;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2ToJSON(getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2): string;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescription$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescription$Outbound = GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$Outbound | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescription$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescription$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescription>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescriptionToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescription: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescription): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescriptionFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiDescription, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValueToJSON(getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValueFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const Properties7$inboundSchema: z.ZodType<Properties7, z.ZodTypeDef, unknown>;
/** @internal */
export type Properties7$Outbound = {
    type: string;
    "ui:control": string;
    "ui:options": Array<UiOptions1$Outbound | UiOptions3$Outbound | string>;
    description?: string | undefined;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string | undefined;
    "ui:hidden"?: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string | undefined;
    "ui:disabled"?: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSONResponseBody1$Outbound | boolean | string | undefined;
    "ui:description"?: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSONResponseBody2$Outbound | string | undefined;
    "ui:formatted-value"?: GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
};
/** @internal */
export declare const Properties7$outboundSchema: z.ZodType<Properties7$Outbound, z.ZodTypeDef, Properties7>;
export declare function properties7ToJSON(properties7: Properties7): string;
export declare function properties7FromJSON(jsonString: string): SafeParseResult<Properties7, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema6Type$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema6Type>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema6Type$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema6Type>;
/** @internal */
export declare const GetConfigurationProductsPropertiesItems$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesItems, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesItems$Outbound = {
    type: string;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    enum?: Array<string> | undefined;
};
/** @internal */
export declare const GetConfigurationProductsPropertiesItems$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesItems$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesItems>;
export declare function getConfigurationProductsPropertiesItemsToJSON(getConfigurationProductsPropertiesItems: GetConfigurationProductsPropertiesItems): string;
export declare function getConfigurationProductsPropertiesItemsFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesItems, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiControl$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200UiControl>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiControl$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200UiControl>;
/** @internal */
export declare const GetConfigurationProductsDisabled3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsDisabled3>;
/** @internal */
export declare const GetConfigurationProductsDisabled3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsDisabled3>;
/** @internal */
export declare const GetConfigurationProductsDisabled1$inboundSchema: z.ZodType<GetConfigurationProductsDisabled1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsDisabled1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsDisabled1$outboundSchema: z.ZodType<GetConfigurationProductsDisabled1$Outbound, z.ZodTypeDef, GetConfigurationProductsDisabled1>;
export declare function getConfigurationProductsDisabled1ToJSON(getConfigurationProductsDisabled1: GetConfigurationProductsDisabled1): string;
export declare function getConfigurationProductsDisabled1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsDisabled1, SDKValidationError>;
/** @internal */
export declare const PropertiesDisabled$inboundSchema: z.ZodType<PropertiesDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type PropertiesDisabled$Outbound = GetConfigurationProductsDisabled1$Outbound | boolean | string;
/** @internal */
export declare const PropertiesDisabled$outboundSchema: z.ZodType<PropertiesDisabled$Outbound, z.ZodTypeDef, PropertiesDisabled>;
export declare function propertiesDisabledToJSON(propertiesDisabled: PropertiesDisabled): string;
export declare function propertiesDisabledFromJSON(jsonString: string): SafeParseResult<PropertiesDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsHidden3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsHidden3>;
/** @internal */
export declare const GetConfigurationProductsHidden3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsHidden3>;
/** @internal */
export declare const GetConfigurationProductsHidden1$inboundSchema: z.ZodType<GetConfigurationProductsHidden1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsHidden1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsHidden1$outboundSchema: z.ZodType<GetConfigurationProductsHidden1$Outbound, z.ZodTypeDef, GetConfigurationProductsHidden1>;
export declare function getConfigurationProductsHidden1ToJSON(getConfigurationProductsHidden1: GetConfigurationProductsHidden1): string;
export declare function getConfigurationProductsHidden1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsHidden1, SDKValidationError>;
/** @internal */
export declare const PropertiesHidden$inboundSchema: z.ZodType<PropertiesHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type PropertiesHidden$Outbound = GetConfigurationProductsHidden1$Outbound | boolean | string;
/** @internal */
export declare const PropertiesHidden$outboundSchema: z.ZodType<PropertiesHidden$Outbound, z.ZodTypeDef, PropertiesHidden>;
export declare function propertiesHiddenToJSON(propertiesHidden: PropertiesHidden): string;
export declare function propertiesHiddenFromJSON(jsonString: string): SafeParseResult<PropertiesHidden, SDKValidationError>;
/** @internal */
export declare const PropertiesUiOptions$inboundSchema: z.ZodType<PropertiesUiOptions, z.ZodTypeDef, unknown>;
/** @internal */
export type PropertiesUiOptions$Outbound = {
    value: string;
    label: string;
    disabled?: GetConfigurationProductsDisabled1$Outbound | boolean | string | undefined;
    hidden?: GetConfigurationProductsHidden1$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const PropertiesUiOptions$outboundSchema: z.ZodType<PropertiesUiOptions$Outbound, z.ZodTypeDef, PropertiesUiOptions>;
export declare function propertiesUiOptionsToJSON(propertiesUiOptions: PropertiesUiOptions): string;
export declare function propertiesUiOptionsFromJSON(jsonString: string): SafeParseResult<PropertiesUiOptions, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1$inboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1$outboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1>;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSON1ToJSON(getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1): string;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJSON1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiReadOnly$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200UiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200UiReadOnly$Outbound = GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiReadOnly$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200UiReadOnly$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200UiReadOnly>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200UiReadOnlyToJSON(getConfigurationProductsPropertiesIntegrationsResponse200UiReadOnly: GetConfigurationProductsPropertiesIntegrationsResponse200UiReadOnly): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200UiReadOnlyFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200UiReadOnly, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1$inboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1$outboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1>;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSON1ToJSON(getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1): string;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJSON1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiHidden$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200UiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200UiHidden$Outbound = GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiHidden$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200UiHidden$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200UiHidden>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200UiHiddenToJSON(getConfigurationProductsPropertiesIntegrationsResponse200UiHidden: GetConfigurationProductsPropertiesIntegrationsResponse200UiHidden): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200UiHiddenFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200UiHidden, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1$inboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1$outboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1>;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSON1ToJSON(getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1): string;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJSON1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiDisabled$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200UiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200UiDisabled$Outbound = GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiDisabled$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200UiDisabled$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200UiDisabled>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200UiDisabledToJSON(getConfigurationProductsPropertiesIntegrationsResponse200UiDisabled: GetConfigurationProductsPropertiesIntegrationsResponse200UiDisabled): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200UiDisabledFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200UiDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2$inboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2$outboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2>;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSON2ToJSON(getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2): string;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJSON2FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiDescription$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200UiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200UiDescription$Outbound = GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2$Outbound | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiDescription$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200UiDescription$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200UiDescription>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200UiDescriptionToJSON(getConfigurationProductsPropertiesIntegrationsResponse200UiDescription: GetConfigurationProductsPropertiesIntegrationsResponse200UiDescription): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200UiDescriptionFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200UiDescription, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue>;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValueToJSON(getConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue: GetConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValueFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue, SDKValidationError>;
/** @internal */
export declare const Properties6$inboundSchema: z.ZodType<Properties6, z.ZodTypeDef, unknown>;
/** @internal */
export type Properties6$Outbound = {
    type: string;
    items: GetConfigurationProductsPropertiesItems$Outbound;
    "ui:control": string;
    "ui:options": Array<PropertiesUiOptions$Outbound>;
    description?: string | undefined;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: GetConfigurationProductsUiReadOnlyIntegrationsResponse200ApplicationJson1$Outbound | boolean | string | undefined;
    "ui:hidden"?: GetConfigurationProductsUiHiddenIntegrationsResponse200ApplicationJson1$Outbound | boolean | string | undefined;
    "ui:disabled"?: GetConfigurationProductsUiDisabledIntegrationsResponse200ApplicationJson1$Outbound | boolean | string | undefined;
    "ui:description"?: GetConfigurationProductsUiDescriptionIntegrationsResponse200ApplicationJson2$Outbound | string | undefined;
    "ui:formatted-value"?: GetConfigurationProductsPropertiesIntegrationsResponse200UiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
    default?: Array<string> | undefined;
    example?: Array<string> | undefined;
};
/** @internal */
export declare const Properties6$outboundSchema: z.ZodType<Properties6$Outbound, z.ZodTypeDef, Properties6>;
export declare function properties6ToJSON(properties6: Properties6): string;
export declare function properties6FromJSON(jsonString: string): SafeParseResult<Properties6, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200Type$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200Type>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200Type$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200Type>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiControl$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponseUiControl>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiControl$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponseUiControl>;
/** @internal */
export declare const Disabled3$inboundSchema: z.ZodNativeEnum<typeof Disabled3>;
/** @internal */
export declare const Disabled3$outboundSchema: z.ZodNativeEnum<typeof Disabled3>;
/** @internal */
export declare const Disabled1$inboundSchema: z.ZodType<Disabled1, z.ZodTypeDef, unknown>;
/** @internal */
export type Disabled1$Outbound = {
    expr: string;
};
/** @internal */
export declare const Disabled1$outboundSchema: z.ZodType<Disabled1$Outbound, z.ZodTypeDef, Disabled1>;
export declare function disabled1ToJSON(disabled1: Disabled1): string;
export declare function disabled1FromJSON(jsonString: string): SafeParseResult<Disabled1, SDKValidationError>;
/** @internal */
export declare const Disabled$inboundSchema: z.ZodType<Disabled, z.ZodTypeDef, unknown>;
/** @internal */
export type Disabled$Outbound = Disabled1$Outbound | boolean | string;
/** @internal */
export declare const Disabled$outboundSchema: z.ZodType<Disabled$Outbound, z.ZodTypeDef, Disabled>;
export declare function disabledToJSON(disabled: Disabled): string;
export declare function disabledFromJSON(jsonString: string): SafeParseResult<Disabled, SDKValidationError>;
/** @internal */
export declare const Hidden3$inboundSchema: z.ZodNativeEnum<typeof Hidden3>;
/** @internal */
export declare const Hidden3$outboundSchema: z.ZodNativeEnum<typeof Hidden3>;
/** @internal */
export declare const Hidden1$inboundSchema: z.ZodType<Hidden1, z.ZodTypeDef, unknown>;
/** @internal */
export type Hidden1$Outbound = {
    expr: string;
};
/** @internal */
export declare const Hidden1$outboundSchema: z.ZodType<Hidden1$Outbound, z.ZodTypeDef, Hidden1>;
export declare function hidden1ToJSON(hidden1: Hidden1): string;
export declare function hidden1FromJSON(jsonString: string): SafeParseResult<Hidden1, SDKValidationError>;
/** @internal */
export declare const Hidden$inboundSchema: z.ZodType<Hidden, z.ZodTypeDef, unknown>;
/** @internal */
export type Hidden$Outbound = Hidden1$Outbound | boolean | string;
/** @internal */
export declare const Hidden$outboundSchema: z.ZodType<Hidden$Outbound, z.ZodTypeDef, Hidden>;
export declare function hiddenToJSON(hidden: Hidden): string;
export declare function hiddenFromJSON(jsonString: string): SafeParseResult<Hidden, SDKValidationError>;
/** @internal */
export declare const UiOptions$inboundSchema: z.ZodType<UiOptions, z.ZodTypeDef, unknown>;
/** @internal */
export type UiOptions$Outbound = {
    value: string;
    label: string;
    disabled?: Disabled1$Outbound | boolean | string | undefined;
    hidden?: Hidden1$Outbound | boolean | string | undefined;
};
/** @internal */
export declare const UiOptions$outboundSchema: z.ZodType<UiOptions$Outbound, z.ZodTypeDef, UiOptions>;
export declare function uiOptionsToJSON(uiOptions: UiOptions): string;
export declare function uiOptionsFromJSON(jsonString: string): SafeParseResult<UiOptions, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse2003$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse2003>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse2003$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse2003>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse2001$inboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse2001, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse2001$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse2001$outboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse2001$Outbound, z.ZodTypeDef, GetConfigurationProductsUiReadOnlyIntegrationsResponse2001>;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse2001ToJSON(getConfigurationProductsUiReadOnlyIntegrationsResponse2001: GetConfigurationProductsUiReadOnlyIntegrationsResponse2001): string;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse2001FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiReadOnlyIntegrationsResponse2001, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiReadOnly$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponseUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponseUiReadOnly$Outbound = GetConfigurationProductsUiReadOnlyIntegrationsResponse2001$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiReadOnly$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponseUiReadOnly$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponseUiReadOnly>;
export declare function getConfigurationProductsPropertiesIntegrationsResponseUiReadOnlyToJSON(getConfigurationProductsPropertiesIntegrationsResponseUiReadOnly: GetConfigurationProductsPropertiesIntegrationsResponseUiReadOnly): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponseUiReadOnlyFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponseUiReadOnly, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse2003$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse2003>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse2003$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse2003>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse2001$inboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse2001, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiHiddenIntegrationsResponse2001$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse2001$outboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse2001$Outbound, z.ZodTypeDef, GetConfigurationProductsUiHiddenIntegrationsResponse2001>;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse2001ToJSON(getConfigurationProductsUiHiddenIntegrationsResponse2001: GetConfigurationProductsUiHiddenIntegrationsResponse2001): string;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse2001FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiHiddenIntegrationsResponse2001, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiHidden$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponseUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponseUiHidden$Outbound = GetConfigurationProductsUiHiddenIntegrationsResponse2001$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiHidden$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponseUiHidden$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponseUiHidden>;
export declare function getConfigurationProductsPropertiesIntegrationsResponseUiHiddenToJSON(getConfigurationProductsPropertiesIntegrationsResponseUiHidden: GetConfigurationProductsPropertiesIntegrationsResponseUiHidden): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponseUiHiddenFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponseUiHidden, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse2003$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse2003>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse2003$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse2003>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse2001$inboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse2001, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDisabledIntegrationsResponse2001$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse2001$outboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse2001$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDisabledIntegrationsResponse2001>;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse2001ToJSON(getConfigurationProductsUiDisabledIntegrationsResponse2001: GetConfigurationProductsUiDisabledIntegrationsResponse2001): string;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse2001FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDisabledIntegrationsResponse2001, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiDisabled$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponseUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponseUiDisabled$Outbound = GetConfigurationProductsUiDisabledIntegrationsResponse2001$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiDisabled$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponseUiDisabled$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponseUiDisabled>;
export declare function getConfigurationProductsPropertiesIntegrationsResponseUiDisabledToJSON(getConfigurationProductsPropertiesIntegrationsResponseUiDisabled: GetConfigurationProductsPropertiesIntegrationsResponseUiDisabled): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponseUiDisabledFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponseUiDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse2002$inboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse2002, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDescriptionIntegrationsResponse2002$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse2002$outboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse2002$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDescriptionIntegrationsResponse2002>;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse2002ToJSON(getConfigurationProductsUiDescriptionIntegrationsResponse2002: GetConfigurationProductsUiDescriptionIntegrationsResponse2002): string;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse2002FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDescriptionIntegrationsResponse2002, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiDescription$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponseUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponseUiDescription$Outbound = GetConfigurationProductsUiDescriptionIntegrationsResponse2002$Outbound | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiDescription$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponseUiDescription$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponseUiDescription>;
export declare function getConfigurationProductsPropertiesIntegrationsResponseUiDescriptionToJSON(getConfigurationProductsPropertiesIntegrationsResponseUiDescription: GetConfigurationProductsPropertiesIntegrationsResponseUiDescription): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponseUiDescriptionFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponseUiDescription, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue>;
export declare function getConfigurationProductsPropertiesIntegrationsResponseUiFormattedValueToJSON(getConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue: GetConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue): string;
export declare function getConfigurationProductsPropertiesIntegrationsResponseUiFormattedValueFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const Properties5$inboundSchema: z.ZodType<Properties5, z.ZodTypeDef, unknown>;
/** @internal */
export type Properties5$Outbound = {
    type: string;
    "ui:control": string;
    "ui:options": Array<UiOptions$Outbound>;
    description?: string | undefined;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: GetConfigurationProductsUiReadOnlyIntegrationsResponse2001$Outbound | boolean | string | undefined;
    "ui:hidden"?: GetConfigurationProductsUiHiddenIntegrationsResponse2001$Outbound | boolean | string | undefined;
    "ui:disabled"?: GetConfigurationProductsUiDisabledIntegrationsResponse2001$Outbound | boolean | string | undefined;
    "ui:description"?: GetConfigurationProductsUiDescriptionIntegrationsResponse2002$Outbound | string | undefined;
    "ui:formatted-value"?: GetConfigurationProductsPropertiesIntegrationsResponseUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
};
/** @internal */
export declare const Properties5$outboundSchema: z.ZodType<Properties5$Outbound, z.ZodTypeDef, Properties5>;
export declare function properties5ToJSON(properties5: Properties5): string;
export declare function properties5FromJSON(jsonString: string): SafeParseResult<Properties5, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponseType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponseType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponseType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema4Type$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema4Type>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema4Type$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsResponse200ApplicationJSONResponseBodyProductsMetadataSchema4Type>;
/** @internal */
export declare const PropertiesItems$inboundSchema: z.ZodType<PropertiesItems, z.ZodTypeDef, unknown>;
/** @internal */
export type PropertiesItems$Outbound = {
    type: string;
    description?: string | undefined;
    minimum?: number | undefined;
    exclusiveMinimum?: number | undefined;
    maximum?: number | undefined;
    exclusiveMaximum?: number | undefined;
    default?: number | undefined;
};
/** @internal */
export declare const PropertiesItems$outboundSchema: z.ZodType<PropertiesItems$Outbound, z.ZodTypeDef, PropertiesItems>;
export declare function propertiesItemsToJSON(propertiesItems: PropertiesItems): string;
export declare function propertiesItemsFromJSON(jsonString: string): SafeParseResult<PropertiesItems, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiControl$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsUiControl>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiControl$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsUiControl>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrationsResponse3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse1$inboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiReadOnlyIntegrationsResponse1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrationsResponse1$outboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrationsResponse1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiReadOnlyIntegrationsResponse1>;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse1ToJSON(getConfigurationProductsUiReadOnlyIntegrationsResponse1: GetConfigurationProductsUiReadOnlyIntegrationsResponse1): string;
export declare function getConfigurationProductsUiReadOnlyIntegrationsResponse1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiReadOnlyIntegrationsResponse1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiReadOnly$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsUiReadOnly$Outbound = GetConfigurationProductsUiReadOnlyIntegrationsResponse1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiReadOnly$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiReadOnly$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsUiReadOnly>;
export declare function getConfigurationProductsPropertiesIntegrationsUiReadOnlyToJSON(getConfigurationProductsPropertiesIntegrationsUiReadOnly: GetConfigurationProductsPropertiesIntegrationsUiReadOnly): string;
export declare function getConfigurationProductsPropertiesIntegrationsUiReadOnlyFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsUiReadOnly, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrationsResponse3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse1$inboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiHiddenIntegrationsResponse1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrationsResponse1$outboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrationsResponse1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiHiddenIntegrationsResponse1>;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse1ToJSON(getConfigurationProductsUiHiddenIntegrationsResponse1: GetConfigurationProductsUiHiddenIntegrationsResponse1): string;
export declare function getConfigurationProductsUiHiddenIntegrationsResponse1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiHiddenIntegrationsResponse1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiHidden$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsUiHidden$Outbound = GetConfigurationProductsUiHiddenIntegrationsResponse1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiHidden$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiHidden$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsUiHidden>;
export declare function getConfigurationProductsPropertiesIntegrationsUiHiddenToJSON(getConfigurationProductsPropertiesIntegrationsUiHidden: GetConfigurationProductsPropertiesIntegrationsUiHidden): string;
export declare function getConfigurationProductsPropertiesIntegrationsUiHiddenFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsUiHidden, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrationsResponse3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse1$inboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDisabledIntegrationsResponse1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrationsResponse1$outboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrationsResponse1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDisabledIntegrationsResponse1>;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse1ToJSON(getConfigurationProductsUiDisabledIntegrationsResponse1: GetConfigurationProductsUiDisabledIntegrationsResponse1): string;
export declare function getConfigurationProductsUiDisabledIntegrationsResponse1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDisabledIntegrationsResponse1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiDisabled$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsUiDisabled$Outbound = GetConfigurationProductsUiDisabledIntegrationsResponse1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiDisabled$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiDisabled$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsUiDisabled>;
export declare function getConfigurationProductsPropertiesIntegrationsUiDisabledToJSON(getConfigurationProductsPropertiesIntegrationsUiDisabled: GetConfigurationProductsPropertiesIntegrationsUiDisabled): string;
export declare function getConfigurationProductsPropertiesIntegrationsUiDisabledFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsUiDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse2$inboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDescriptionIntegrationsResponse2$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrationsResponse2$outboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrationsResponse2$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDescriptionIntegrationsResponse2>;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse2ToJSON(getConfigurationProductsUiDescriptionIntegrationsResponse2: GetConfigurationProductsUiDescriptionIntegrationsResponse2): string;
export declare function getConfigurationProductsUiDescriptionIntegrationsResponse2FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDescriptionIntegrationsResponse2, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiDescription$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsUiDescription$Outbound = GetConfigurationProductsUiDescriptionIntegrationsResponse2$Outbound | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiDescription$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiDescription$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsUiDescription>;
export declare function getConfigurationProductsPropertiesIntegrationsUiDescriptionToJSON(getConfigurationProductsPropertiesIntegrationsUiDescription: GetConfigurationProductsPropertiesIntegrationsUiDescription): string;
export declare function getConfigurationProductsPropertiesIntegrationsUiDescriptionFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsUiDescription, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiFormattedValue$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesIntegrationsUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsUiFormattedValue$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesIntegrationsUiFormattedValue$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesIntegrationsUiFormattedValue>;
export declare function getConfigurationProductsPropertiesIntegrationsUiFormattedValueToJSON(getConfigurationProductsPropertiesIntegrationsUiFormattedValue: GetConfigurationProductsPropertiesIntegrationsUiFormattedValue): string;
export declare function getConfigurationProductsPropertiesIntegrationsUiFormattedValueFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesIntegrationsUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const Properties4$inboundSchema: z.ZodType<Properties4, z.ZodTypeDef, unknown>;
/** @internal */
export type Properties4$Outbound = {
    type: string;
    items: PropertiesItems$Outbound;
    "ui:control": string;
    "ui:steps": Array<number>;
    description?: string | undefined;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: GetConfigurationProductsUiReadOnlyIntegrationsResponse1$Outbound | boolean | string | undefined;
    "ui:hidden"?: GetConfigurationProductsUiHiddenIntegrationsResponse1$Outbound | boolean | string | undefined;
    "ui:disabled"?: GetConfigurationProductsUiDisabledIntegrationsResponse1$Outbound | boolean | string | undefined;
    "ui:description"?: GetConfigurationProductsUiDescriptionIntegrationsResponse2$Outbound | string | undefined;
    "ui:formatted-value"?: GetConfigurationProductsPropertiesIntegrationsUiFormattedValue$Outbound | undefined;
    default?: Array<number> | undefined;
};
/** @internal */
export declare const Properties4$outboundSchema: z.ZodType<Properties4$Outbound, z.ZodTypeDef, Properties4>;
export declare function properties4ToJSON(properties4: Properties4): string;
export declare function properties4FromJSON(jsonString: string): SafeParseResult<Properties4, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesIntegrationsType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesIntegrationsType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiControl$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesUiControl>;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiControl$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesUiControl>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrations3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrations3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrations3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnlyIntegrations3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrations1$inboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrations1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiReadOnlyIntegrations1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiReadOnlyIntegrations1$outboundSchema: z.ZodType<GetConfigurationProductsUiReadOnlyIntegrations1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiReadOnlyIntegrations1>;
export declare function getConfigurationProductsUiReadOnlyIntegrations1ToJSON(getConfigurationProductsUiReadOnlyIntegrations1: GetConfigurationProductsUiReadOnlyIntegrations1): string;
export declare function getConfigurationProductsUiReadOnlyIntegrations1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiReadOnlyIntegrations1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiReadOnly$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesUiReadOnly$Outbound = GetConfigurationProductsUiReadOnlyIntegrations1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiReadOnly$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiReadOnly$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesUiReadOnly>;
export declare function getConfigurationProductsPropertiesUiReadOnlyToJSON(getConfigurationProductsPropertiesUiReadOnly: GetConfigurationProductsPropertiesUiReadOnly): string;
export declare function getConfigurationProductsPropertiesUiReadOnlyFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesUiReadOnly, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrations3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrations3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrations3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHiddenIntegrations3>;
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrations1$inboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrations1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiHiddenIntegrations1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiHiddenIntegrations1$outboundSchema: z.ZodType<GetConfigurationProductsUiHiddenIntegrations1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiHiddenIntegrations1>;
export declare function getConfigurationProductsUiHiddenIntegrations1ToJSON(getConfigurationProductsUiHiddenIntegrations1: GetConfigurationProductsUiHiddenIntegrations1): string;
export declare function getConfigurationProductsUiHiddenIntegrations1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiHiddenIntegrations1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiHidden$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesUiHidden$Outbound = GetConfigurationProductsUiHiddenIntegrations1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiHidden$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiHidden$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesUiHidden>;
export declare function getConfigurationProductsPropertiesUiHiddenToJSON(getConfigurationProductsPropertiesUiHidden: GetConfigurationProductsPropertiesUiHidden): string;
export declare function getConfigurationProductsPropertiesUiHiddenFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesUiHidden, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrations3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrations3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrations3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabledIntegrations3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrations1$inboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrations1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDisabledIntegrations1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDisabledIntegrations1$outboundSchema: z.ZodType<GetConfigurationProductsUiDisabledIntegrations1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDisabledIntegrations1>;
export declare function getConfigurationProductsUiDisabledIntegrations1ToJSON(getConfigurationProductsUiDisabledIntegrations1: GetConfigurationProductsUiDisabledIntegrations1): string;
export declare function getConfigurationProductsUiDisabledIntegrations1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDisabledIntegrations1, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiDisabled$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesUiDisabled$Outbound = GetConfigurationProductsUiDisabledIntegrations1$Outbound | boolean | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiDisabled$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiDisabled$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesUiDisabled>;
export declare function getConfigurationProductsPropertiesUiDisabledToJSON(getConfigurationProductsPropertiesUiDisabled: GetConfigurationProductsPropertiesUiDisabled): string;
export declare function getConfigurationProductsPropertiesUiDisabledFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesUiDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrations2$inboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrations2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDescriptionIntegrations2$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDescriptionIntegrations2$outboundSchema: z.ZodType<GetConfigurationProductsUiDescriptionIntegrations2$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDescriptionIntegrations2>;
export declare function getConfigurationProductsUiDescriptionIntegrations2ToJSON(getConfigurationProductsUiDescriptionIntegrations2: GetConfigurationProductsUiDescriptionIntegrations2): string;
export declare function getConfigurationProductsUiDescriptionIntegrations2FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDescriptionIntegrations2, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiDescription$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesUiDescription$Outbound = GetConfigurationProductsUiDescriptionIntegrations2$Outbound | string;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiDescription$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiDescription$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesUiDescription>;
export declare function getConfigurationProductsPropertiesUiDescriptionToJSON(getConfigurationProductsPropertiesUiDescription: GetConfigurationProductsPropertiesUiDescription): string;
export declare function getConfigurationProductsPropertiesUiDescriptionFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesUiDescription, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesUiFormattedValue$inboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsPropertiesUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsPropertiesUiFormattedValue$outboundSchema: z.ZodType<GetConfigurationProductsPropertiesUiFormattedValue$Outbound, z.ZodTypeDef, GetConfigurationProductsPropertiesUiFormattedValue>;
export declare function getConfigurationProductsPropertiesUiFormattedValueToJSON(getConfigurationProductsPropertiesUiFormattedValue: GetConfigurationProductsPropertiesUiFormattedValue): string;
export declare function getConfigurationProductsPropertiesUiFormattedValueFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsPropertiesUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const Properties3$inboundSchema: z.ZodType<Properties3, z.ZodTypeDef, unknown>;
/** @internal */
export type Properties3$Outbound = {
    type: string;
    "ui:control": string;
    description?: string | undefined;
    default?: boolean | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: GetConfigurationProductsUiReadOnlyIntegrations1$Outbound | boolean | string | undefined;
    "ui:hidden"?: GetConfigurationProductsUiHiddenIntegrations1$Outbound | boolean | string | undefined;
    "ui:disabled"?: GetConfigurationProductsUiDisabledIntegrations1$Outbound | boolean | string | undefined;
    "ui:description"?: GetConfigurationProductsUiDescriptionIntegrations2$Outbound | string | undefined;
    "ui:formatted-value"?: GetConfigurationProductsPropertiesUiFormattedValue$Outbound | undefined;
};
/** @internal */
export declare const Properties3$outboundSchema: z.ZodType<Properties3$Outbound, z.ZodTypeDef, Properties3>;
export declare function properties3ToJSON(properties3: Properties3): string;
export declare function properties3FromJSON(jsonString: string): SafeParseResult<Properties3, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsPropertiesType$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesType>;
/** @internal */
export declare const GetConfigurationProductsPropertiesType$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsPropertiesType>;
/** @internal */
export declare const PropertiesUiControl$inboundSchema: z.ZodNativeEnum<typeof PropertiesUiControl>;
/** @internal */
export declare const PropertiesUiControl$outboundSchema: z.ZodNativeEnum<typeof PropertiesUiControl>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnly3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnly3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnly3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiReadOnly3>;
/** @internal */
export declare const GetConfigurationProductsUiReadOnly1$inboundSchema: z.ZodType<GetConfigurationProductsUiReadOnly1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiReadOnly1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiReadOnly1$outboundSchema: z.ZodType<GetConfigurationProductsUiReadOnly1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiReadOnly1>;
export declare function getConfigurationProductsUiReadOnly1ToJSON(getConfigurationProductsUiReadOnly1: GetConfigurationProductsUiReadOnly1): string;
export declare function getConfigurationProductsUiReadOnly1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiReadOnly1, SDKValidationError>;
/** @internal */
export declare const PropertiesUiReadOnly$inboundSchema: z.ZodType<PropertiesUiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type PropertiesUiReadOnly$Outbound = GetConfigurationProductsUiReadOnly1$Outbound | boolean | string;
/** @internal */
export declare const PropertiesUiReadOnly$outboundSchema: z.ZodType<PropertiesUiReadOnly$Outbound, z.ZodTypeDef, PropertiesUiReadOnly>;
export declare function propertiesUiReadOnlyToJSON(propertiesUiReadOnly: PropertiesUiReadOnly): string;
export declare function propertiesUiReadOnlyFromJSON(jsonString: string): SafeParseResult<PropertiesUiReadOnly, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiHidden3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHidden3>;
/** @internal */
export declare const GetConfigurationProductsUiHidden3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiHidden3>;
/** @internal */
export declare const GetConfigurationProductsUiHidden1$inboundSchema: z.ZodType<GetConfigurationProductsUiHidden1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiHidden1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiHidden1$outboundSchema: z.ZodType<GetConfigurationProductsUiHidden1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiHidden1>;
export declare function getConfigurationProductsUiHidden1ToJSON(getConfigurationProductsUiHidden1: GetConfigurationProductsUiHidden1): string;
export declare function getConfigurationProductsUiHidden1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiHidden1, SDKValidationError>;
/** @internal */
export declare const PropertiesUiHidden$inboundSchema: z.ZodType<PropertiesUiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type PropertiesUiHidden$Outbound = GetConfigurationProductsUiHidden1$Outbound | boolean | string;
/** @internal */
export declare const PropertiesUiHidden$outboundSchema: z.ZodType<PropertiesUiHidden$Outbound, z.ZodTypeDef, PropertiesUiHidden>;
export declare function propertiesUiHiddenToJSON(propertiesUiHidden: PropertiesUiHidden): string;
export declare function propertiesUiHiddenFromJSON(jsonString: string): SafeParseResult<PropertiesUiHidden, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDisabled3$inboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabled3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabled3$outboundSchema: z.ZodNativeEnum<typeof GetConfigurationProductsUiDisabled3>;
/** @internal */
export declare const GetConfigurationProductsUiDisabled1$inboundSchema: z.ZodType<GetConfigurationProductsUiDisabled1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDisabled1$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDisabled1$outboundSchema: z.ZodType<GetConfigurationProductsUiDisabled1$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDisabled1>;
export declare function getConfigurationProductsUiDisabled1ToJSON(getConfigurationProductsUiDisabled1: GetConfigurationProductsUiDisabled1): string;
export declare function getConfigurationProductsUiDisabled1FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDisabled1, SDKValidationError>;
/** @internal */
export declare const PropertiesUiDisabled$inboundSchema: z.ZodType<PropertiesUiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type PropertiesUiDisabled$Outbound = GetConfigurationProductsUiDisabled1$Outbound | boolean | string;
/** @internal */
export declare const PropertiesUiDisabled$outboundSchema: z.ZodType<PropertiesUiDisabled$Outbound, z.ZodTypeDef, PropertiesUiDisabled>;
export declare function propertiesUiDisabledToJSON(propertiesUiDisabled: PropertiesUiDisabled): string;
export declare function propertiesUiDisabledFromJSON(jsonString: string): SafeParseResult<PropertiesUiDisabled, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsUiDescription2$inboundSchema: z.ZodType<GetConfigurationProductsUiDescription2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsUiDescription2$Outbound = {
    expr: string;
};
/** @internal */
export declare const GetConfigurationProductsUiDescription2$outboundSchema: z.ZodType<GetConfigurationProductsUiDescription2$Outbound, z.ZodTypeDef, GetConfigurationProductsUiDescription2>;
export declare function getConfigurationProductsUiDescription2ToJSON(getConfigurationProductsUiDescription2: GetConfigurationProductsUiDescription2): string;
export declare function getConfigurationProductsUiDescription2FromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsUiDescription2, SDKValidationError>;
/** @internal */
export declare const PropertiesUiDescription$inboundSchema: z.ZodType<PropertiesUiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type PropertiesUiDescription$Outbound = GetConfigurationProductsUiDescription2$Outbound | string;
/** @internal */
export declare const PropertiesUiDescription$outboundSchema: z.ZodType<PropertiesUiDescription$Outbound, z.ZodTypeDef, PropertiesUiDescription>;
export declare function propertiesUiDescriptionToJSON(propertiesUiDescription: PropertiesUiDescription): string;
export declare function propertiesUiDescriptionFromJSON(jsonString: string): SafeParseResult<PropertiesUiDescription, SDKValidationError>;
/** @internal */
export declare const PropertiesUiFormattedValue$inboundSchema: z.ZodType<PropertiesUiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type PropertiesUiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const PropertiesUiFormattedValue$outboundSchema: z.ZodType<PropertiesUiFormattedValue$Outbound, z.ZodTypeDef, PropertiesUiFormattedValue>;
export declare function propertiesUiFormattedValueToJSON(propertiesUiFormattedValue: PropertiesUiFormattedValue): string;
export declare function propertiesUiFormattedValueFromJSON(jsonString: string): SafeParseResult<PropertiesUiFormattedValue, SDKValidationError>;
/** @internal */
export declare const Properties2$inboundSchema: z.ZodType<Properties2, z.ZodTypeDef, unknown>;
/** @internal */
export type Properties2$Outbound = {
    type: string;
    "ui:control": string;
    minimum?: number | undefined;
    maximum?: number | undefined;
    description?: string | undefined;
    exclusiveMaximum?: number | undefined;
    exclusiveMinimum?: number | undefined;
    default?: number | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: GetConfigurationProductsUiReadOnly1$Outbound | boolean | string | undefined;
    "ui:hidden"?: GetConfigurationProductsUiHidden1$Outbound | boolean | string | undefined;
    "ui:disabled"?: GetConfigurationProductsUiDisabled1$Outbound | boolean | string | undefined;
    "ui:description"?: GetConfigurationProductsUiDescription2$Outbound | string | undefined;
    "ui:formatted-value"?: PropertiesUiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
};
/** @internal */
export declare const Properties2$outboundSchema: z.ZodType<Properties2$Outbound, z.ZodTypeDef, Properties2>;
export declare function properties2ToJSON(properties2: Properties2): string;
export declare function properties2FromJSON(jsonString: string): SafeParseResult<Properties2, SDKValidationError>;
/** @internal */
export declare const PropertiesType$inboundSchema: z.ZodNativeEnum<typeof PropertiesType>;
/** @internal */
export declare const PropertiesType$outboundSchema: z.ZodNativeEnum<typeof PropertiesType>;
/** @internal */
export declare const UiControl$inboundSchema: z.ZodNativeEnum<typeof UiControl>;
/** @internal */
export declare const UiControl$outboundSchema: z.ZodNativeEnum<typeof UiControl>;
/** @internal */
export declare const UiReadOnly3$inboundSchema: z.ZodNativeEnum<typeof UiReadOnly3>;
/** @internal */
export declare const UiReadOnly3$outboundSchema: z.ZodNativeEnum<typeof UiReadOnly3>;
/** @internal */
export declare const UiReadOnly1$inboundSchema: z.ZodType<UiReadOnly1, z.ZodTypeDef, unknown>;
/** @internal */
export type UiReadOnly1$Outbound = {
    expr: string;
};
/** @internal */
export declare const UiReadOnly1$outboundSchema: z.ZodType<UiReadOnly1$Outbound, z.ZodTypeDef, UiReadOnly1>;
export declare function uiReadOnly1ToJSON(uiReadOnly1: UiReadOnly1): string;
export declare function uiReadOnly1FromJSON(jsonString: string): SafeParseResult<UiReadOnly1, SDKValidationError>;
/** @internal */
export declare const UiReadOnly$inboundSchema: z.ZodType<UiReadOnly, z.ZodTypeDef, unknown>;
/** @internal */
export type UiReadOnly$Outbound = UiReadOnly1$Outbound | boolean | string;
/** @internal */
export declare const UiReadOnly$outboundSchema: z.ZodType<UiReadOnly$Outbound, z.ZodTypeDef, UiReadOnly>;
export declare function uiReadOnlyToJSON(uiReadOnly: UiReadOnly): string;
export declare function uiReadOnlyFromJSON(jsonString: string): SafeParseResult<UiReadOnly, SDKValidationError>;
/** @internal */
export declare const UiHidden3$inboundSchema: z.ZodNativeEnum<typeof UiHidden3>;
/** @internal */
export declare const UiHidden3$outboundSchema: z.ZodNativeEnum<typeof UiHidden3>;
/** @internal */
export declare const UiHidden1$inboundSchema: z.ZodType<UiHidden1, z.ZodTypeDef, unknown>;
/** @internal */
export type UiHidden1$Outbound = {
    expr: string;
};
/** @internal */
export declare const UiHidden1$outboundSchema: z.ZodType<UiHidden1$Outbound, z.ZodTypeDef, UiHidden1>;
export declare function uiHidden1ToJSON(uiHidden1: UiHidden1): string;
export declare function uiHidden1FromJSON(jsonString: string): SafeParseResult<UiHidden1, SDKValidationError>;
/** @internal */
export declare const UiHidden$inboundSchema: z.ZodType<UiHidden, z.ZodTypeDef, unknown>;
/** @internal */
export type UiHidden$Outbound = UiHidden1$Outbound | boolean | string;
/** @internal */
export declare const UiHidden$outboundSchema: z.ZodType<UiHidden$Outbound, z.ZodTypeDef, UiHidden>;
export declare function uiHiddenToJSON(uiHidden: UiHidden): string;
export declare function uiHiddenFromJSON(jsonString: string): SafeParseResult<UiHidden, SDKValidationError>;
/** @internal */
export declare const UiDisabled3$inboundSchema: z.ZodNativeEnum<typeof UiDisabled3>;
/** @internal */
export declare const UiDisabled3$outboundSchema: z.ZodNativeEnum<typeof UiDisabled3>;
/** @internal */
export declare const UiDisabled1$inboundSchema: z.ZodType<UiDisabled1, z.ZodTypeDef, unknown>;
/** @internal */
export type UiDisabled1$Outbound = {
    expr: string;
};
/** @internal */
export declare const UiDisabled1$outboundSchema: z.ZodType<UiDisabled1$Outbound, z.ZodTypeDef, UiDisabled1>;
export declare function uiDisabled1ToJSON(uiDisabled1: UiDisabled1): string;
export declare function uiDisabled1FromJSON(jsonString: string): SafeParseResult<UiDisabled1, SDKValidationError>;
/** @internal */
export declare const UiDisabled$inboundSchema: z.ZodType<UiDisabled, z.ZodTypeDef, unknown>;
/** @internal */
export type UiDisabled$Outbound = UiDisabled1$Outbound | boolean | string;
/** @internal */
export declare const UiDisabled$outboundSchema: z.ZodType<UiDisabled$Outbound, z.ZodTypeDef, UiDisabled>;
export declare function uiDisabledToJSON(uiDisabled: UiDisabled): string;
export declare function uiDisabledFromJSON(jsonString: string): SafeParseResult<UiDisabled, SDKValidationError>;
/** @internal */
export declare const UiDescription2$inboundSchema: z.ZodType<UiDescription2, z.ZodTypeDef, unknown>;
/** @internal */
export type UiDescription2$Outbound = {
    expr: string;
};
/** @internal */
export declare const UiDescription2$outboundSchema: z.ZodType<UiDescription2$Outbound, z.ZodTypeDef, UiDescription2>;
export declare function uiDescription2ToJSON(uiDescription2: UiDescription2): string;
export declare function uiDescription2FromJSON(jsonString: string): SafeParseResult<UiDescription2, SDKValidationError>;
/** @internal */
export declare const UiDescription$inboundSchema: z.ZodType<UiDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type UiDescription$Outbound = UiDescription2$Outbound | string;
/** @internal */
export declare const UiDescription$outboundSchema: z.ZodType<UiDescription$Outbound, z.ZodTypeDef, UiDescription>;
export declare function uiDescriptionToJSON(uiDescription: UiDescription): string;
export declare function uiDescriptionFromJSON(jsonString: string): SafeParseResult<UiDescription, SDKValidationError>;
/** @internal */
export declare const UiFormattedValue$inboundSchema: z.ZodType<UiFormattedValue, z.ZodTypeDef, unknown>;
/** @internal */
export type UiFormattedValue$Outbound = {
    expr: string;
};
/** @internal */
export declare const UiFormattedValue$outboundSchema: z.ZodType<UiFormattedValue$Outbound, z.ZodTypeDef, UiFormattedValue>;
export declare function uiFormattedValueToJSON(uiFormattedValue: UiFormattedValue): string;
export declare function uiFormattedValueFromJSON(jsonString: string): SafeParseResult<UiFormattedValue, SDKValidationError>;
/** @internal */
export declare const Properties1$inboundSchema: z.ZodType<Properties1, z.ZodTypeDef, unknown>;
/** @internal */
export type Properties1$Outbound = {
    type: string;
    "ui:control": string;
    description?: string | undefined;
    enum?: Array<string> | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    default?: string | undefined;
    "ui:label"?: string | undefined;
    "ui:read-only"?: UiReadOnly1$Outbound | boolean | string | undefined;
    "ui:hidden"?: UiHidden1$Outbound | boolean | string | undefined;
    "ui:disabled"?: UiDisabled1$Outbound | boolean | string | undefined;
    "ui:description"?: UiDescription2$Outbound | string | undefined;
    "ui:formatted-value"?: UiFormattedValue$Outbound | undefined;
    "ui:placeholder"?: string | undefined;
};
/** @internal */
export declare const Properties1$outboundSchema: z.ZodType<Properties1$Outbound, z.ZodTypeDef, Properties1>;
export declare function properties1ToJSON(properties1: Properties1): string;
export declare function properties1FromJSON(jsonString: string): SafeParseResult<Properties1, SDKValidationError>;
/** @internal */
export declare const Properties$inboundSchema: z.ZodType<Properties, z.ZodTypeDef, unknown>;
/** @internal */
export type Properties$Outbound = Properties4$Outbound | Properties6$Outbound | Properties8$Outbound | Properties5$Outbound | Properties7$Outbound | Properties1$Outbound | Properties2$Outbound | Properties3$Outbound | Properties9$Outbound | Properties10$Outbound;
/** @internal */
export declare const Properties$outboundSchema: z.ZodType<Properties$Outbound, z.ZodTypeDef, Properties>;
export declare function propertiesToJSON(properties: Properties): string;
export declare function propertiesFromJSON(jsonString: string): SafeParseResult<Properties, SDKValidationError>;
/** @internal */
export declare const MetadataSchema$inboundSchema: z.ZodType<MetadataSchema, z.ZodTypeDef, unknown>;
/** @internal */
export type MetadataSchema$Outbound = {
    type: string;
    properties: {
        [k: string]: Properties4$Outbound | Properties6$Outbound | Properties8$Outbound | Properties5$Outbound | Properties7$Outbound | Properties1$Outbound | Properties2$Outbound | Properties3$Outbound | Properties9$Outbound | Properties10$Outbound;
    };
    required?: Array<string> | undefined;
};
/** @internal */
export declare const MetadataSchema$outboundSchema: z.ZodType<MetadataSchema$Outbound, z.ZodTypeDef, MetadataSchema>;
export declare function metadataSchemaToJSON(metadataSchema: MetadataSchema): string;
export declare function metadataSchemaFromJSON(jsonString: string): SafeParseResult<MetadataSchema, SDKValidationError>;
/** @internal */
export declare const Products$inboundSchema: z.ZodType<Products, z.ZodTypeDef, unknown>;
/** @internal */
export type Products$Outbound = {
    id: string;
    slug: string;
    name: string;
    protocols: Protocols$Outbound;
    primaryProtocol?: string | undefined;
    metadataSchema: MetadataSchema$Outbound;
};
/** @internal */
export declare const Products$outboundSchema: z.ZodType<Products$Outbound, z.ZodTypeDef, Products>;
export declare function productsToJSON(products: Products): string;
export declare function productsFromJSON(jsonString: string): SafeParseResult<Products, SDKValidationError>;
/** @internal */
export declare const Integration$inboundSchema: z.ZodType<Integration, z.ZodTypeDef, unknown>;
/** @internal */
export type Integration$Outbound = {
    id: string;
    slug: string;
    name: string;
};
/** @internal */
export declare const Integration$outboundSchema: z.ZodType<Integration$Outbound, z.ZodTypeDef, Integration>;
export declare function integrationToJSON(integration: Integration): string;
export declare function integrationFromJSON(jsonString: string): SafeParseResult<Integration, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsConfiguration$inboundSchema: z.ZodType<GetConfigurationProductsConfiguration, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsConfiguration$Outbound = {
    id: string;
};
/** @internal */
export declare const GetConfigurationProductsConfiguration$outboundSchema: z.ZodType<GetConfigurationProductsConfiguration$Outbound, z.ZodTypeDef, GetConfigurationProductsConfiguration>;
export declare function getConfigurationProductsConfigurationToJSON(getConfigurationProductsConfiguration: GetConfigurationProductsConfiguration): string;
export declare function getConfigurationProductsConfigurationFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsConfiguration, SDKValidationError>;
/** @internal */
export declare const GetConfigurationProductsResponseBody$inboundSchema: z.ZodType<GetConfigurationProductsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurationProductsResponseBody$Outbound = {
    products: Array<Products$Outbound>;
    integration: Integration$Outbound;
    configuration: GetConfigurationProductsConfiguration$Outbound;
};
/** @internal */
export declare const GetConfigurationProductsResponseBody$outboundSchema: z.ZodType<GetConfigurationProductsResponseBody$Outbound, z.ZodTypeDef, GetConfigurationProductsResponseBody>;
export declare function getConfigurationProductsResponseBodyToJSON(getConfigurationProductsResponseBody: GetConfigurationProductsResponseBody): string;
export declare function getConfigurationProductsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetConfigurationProductsResponseBody, SDKValidationError>;
//# sourceMappingURL=getconfigurationproductsop.d.ts.map