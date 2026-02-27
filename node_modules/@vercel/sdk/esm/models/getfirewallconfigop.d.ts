import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetFirewallConfigRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    /**
     * The deployed configVersion for the firewall configuration
     */
    configVersion: string;
};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSdAction: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSdAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSdAction>;
/**
 * Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.
 */
export type GetFirewallConfigSd = {
    active: boolean;
    action: GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSdAction;
};
export declare const GetFirewallConfigSecurityAction: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type GetFirewallConfigSecurityAction = ClosedEnum<typeof GetFirewallConfigSecurityAction>;
/**
 * Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.
 */
export type GetFirewallConfigMa = {
    active: boolean;
    action: GetFirewallConfigSecurityAction;
};
export declare const GetFirewallConfigSecurityResponseAction: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type GetFirewallConfigSecurityResponseAction = ClosedEnum<typeof GetFirewallConfigSecurityResponseAction>;
/**
 * Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.
 */
export type GetFirewallConfigLfi = {
    active: boolean;
    action: GetFirewallConfigSecurityResponseAction;
};
export declare const GetFirewallConfigSecurityResponse200Action: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type GetFirewallConfigSecurityResponse200Action = ClosedEnum<typeof GetFirewallConfigSecurityResponse200Action>;
/**
 * Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.
 */
export type GetFirewallConfigRfi = {
    active: boolean;
    action: GetFirewallConfigSecurityResponse200Action;
};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONAction: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONAction>;
/**
 * Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.
 */
export type GetFirewallConfigRce = {
    active: boolean;
    action: GetFirewallConfigSecurityResponse200ApplicationJSONAction;
};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyAction: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyAction>;
/**
 * PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.
 */
export type GetFirewallConfigPhp = {
    active: boolean;
    action: GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyAction;
};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsAction: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsAction>;
/**
 * Generic Attack - Provide broad protection from various undefined or novel attack vectors.
 */
export type GetFirewallConfigGen = {
    active: boolean;
    action: GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsAction;
};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsXssAction: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsXssAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsXssAction>;
/**
 * XSS Attack - Prevent injection of malicious scripts into trusted webpages.
 */
export type GetFirewallConfigXss = {
    active: boolean;
    action: GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsXssAction;
};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSqliAction: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSqliAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSqliAction>;
/**
 * SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.
 */
export type GetFirewallConfigSqli = {
    active: boolean;
    action: GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSqliAction;
};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSfAction: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSfAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSfAction>;
/**
 * Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs.
 */
export type GetFirewallConfigSf = {
    active: boolean;
    action: GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSfAction;
};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsJavaAction: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsJavaAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsJavaAction>;
/**
 * Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.
 */
export type GetFirewallConfigJava = {
    active: boolean;
    action: GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsJavaAction;
};
/**
 * Custom Ruleset
 */
export type GetFirewallConfigCrs = {
    /**
     * Scanner Detection - Detect and prevent reconnaissance activities from network scanning tools.
     */
    sd: GetFirewallConfigSd;
    /**
     * Multipart Attack - Block attempts to bypass security controls using multipart/form-data encoding.
     */
    ma: GetFirewallConfigMa;
    /**
     * Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.
     */
    lfi: GetFirewallConfigLfi;
    /**
     * Remote File Inclusion Attack - Prohibit unauthorized upload or execution of remote files.
     */
    rfi: GetFirewallConfigRfi;
    /**
     * Remote Execution Attack - Prevent unauthorized execution of remote scripts or commands.
     */
    rce: GetFirewallConfigRce;
    /**
     * PHP Attack - Safeguard against vulnerability exploits in PHP-based applications.
     */
    php: GetFirewallConfigPhp;
    /**
     * Generic Attack - Provide broad protection from various undefined or novel attack vectors.
     */
    gen: GetFirewallConfigGen;
    /**
     * XSS Attack - Prevent injection of malicious scripts into trusted webpages.
     */
    xss: GetFirewallConfigXss;
    /**
     * SQL Injection Attack - Prohibit unauthorized use of SQL commands to manipulate databases.
     */
    sqli: GetFirewallConfigSqli;
    /**
     * Session Fixation Attack - Prevent unauthorized takeover of user sessions by enforcing unique session IDs.
     */
    sf: GetFirewallConfigSf;
    /**
     * Java Attack - Mitigate risks of exploitation targeting Java-based applications or components.
     */
    java: GetFirewallConfigJava;
};
export declare const GetFirewallConfigRulesType: {
    readonly Host: "host";
    readonly Path: "path";
    readonly Method: "method";
    readonly Header: "header";
    readonly Query: "query";
    readonly Cookie: "cookie";
    readonly TargetPath: "target_path";
    readonly Route: "route";
    readonly RawPath: "raw_path";
    readonly IpAddress: "ip_address";
    readonly Protocol: "protocol";
    readonly Region: "region";
    readonly Scheme: "scheme";
    readonly Environment: "environment";
    readonly UserAgent: "user_agent";
    readonly GeoContinent: "geo_continent";
    readonly GeoCountry: "geo_country";
    readonly GeoCountryRegion: "geo_country_region";
    readonly GeoCity: "geo_city";
    readonly GeoAsNumber: "geo_as_number";
    readonly Ja4Digest: "ja4_digest";
    readonly Ja3Digest: "ja3_digest";
    readonly RateLimitApiId: "rate_limit_api_id";
    readonly ServerAction: "server_action";
    readonly BotName: "bot_name";
    readonly BotCategory: "bot_category";
};
export type GetFirewallConfigRulesType = ClosedEnum<typeof GetFirewallConfigRulesType>;
export declare const GetFirewallConfigRulesOp: {
    readonly Sub: "sub";
    readonly Re: "re";
    readonly Eq: "eq";
    readonly Ex: "ex";
    readonly Inc: "inc";
    readonly Pre: "pre";
    readonly Suf: "suf";
    readonly Gt: "gt";
    readonly Gte: "gte";
    readonly Lt: "lt";
    readonly Lte: "lte";
    readonly Nex: "nex";
    readonly Ninc: "ninc";
    readonly Neq: "neq";
};
export type GetFirewallConfigRulesOp = ClosedEnum<typeof GetFirewallConfigRulesOp>;
export type GetFirewallConfigRulesValue = string | number | Array<string>;
export type GetFirewallConfigRulesConditions = {
    type: GetFirewallConfigRulesType;
    op: GetFirewallConfigRulesOp;
    neg?: boolean | undefined;
    key?: string | undefined;
    value?: string | number | Array<string> | undefined;
};
export type GetFirewallConfigRulesConditionGroup = {
    conditions: Array<GetFirewallConfigRulesConditions>;
};
export declare const GetFirewallConfigRulesSecurityAction: {
    readonly Deny: "deny";
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly Bypass: "bypass";
    readonly RateLimit: "rate_limit";
    readonly Redirect: "redirect";
};
export type GetFirewallConfigRulesSecurityAction = ClosedEnum<typeof GetFirewallConfigRulesSecurityAction>;
export declare const GetFirewallConfigRulesAlgo: {
    readonly FixedWindow: "fixed_window";
    readonly TokenBucket: "token_bucket";
};
export type GetFirewallConfigRulesAlgo = ClosedEnum<typeof GetFirewallConfigRulesAlgo>;
export declare const GetFirewallConfigRulesSecurityResponse200Action: {
    readonly Deny: "deny";
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly RateLimit: "rate_limit";
};
export type GetFirewallConfigRulesSecurityResponse200Action = ClosedEnum<typeof GetFirewallConfigRulesSecurityResponse200Action>;
export type GetFirewallConfigRulesRateLimit = {
    algo: GetFirewallConfigRulesAlgo;
    window: number;
    limit: number;
    keys: Array<string>;
    action?: GetFirewallConfigRulesSecurityResponse200Action | null | undefined;
};
export type GetFirewallConfigRulesRedirect = {
    location: string;
    permanent: boolean;
};
export declare const GetFirewallConfigLogHeadersSecurity2: {
    readonly Wildcard: "*";
};
export type GetFirewallConfigLogHeadersSecurity2 = ClosedEnum<typeof GetFirewallConfigLogHeadersSecurity2>;
export type GetFirewallConfigRulesLogHeaders = Array<string> | GetFirewallConfigLogHeadersSecurity2;
export type GetFirewallConfigRulesMitigate = {
    action: GetFirewallConfigRulesSecurityAction;
    rateLimit?: GetFirewallConfigRulesRateLimit | null | undefined;
    redirect?: GetFirewallConfigRulesRedirect | null | undefined;
    actionDuration?: string | null | undefined;
    bypassSystem?: boolean | null | undefined;
    logHeaders?: Array<string> | GetFirewallConfigLogHeadersSecurity2 | undefined;
};
export type GetFirewallConfigRulesAction = {
    mitigate?: GetFirewallConfigRulesMitigate | undefined;
};
export type Rules2 = {
    id: string;
    name: string;
    description?: string | undefined;
    active: boolean;
    conditionGroup: Array<GetFirewallConfigRulesConditionGroup>;
    action: GetFirewallConfigRulesAction;
    valid: boolean;
    validationErrors: Array<string>;
};
export declare const RulesType: {
    readonly Host: "host";
    readonly Path: "path";
    readonly Method: "method";
    readonly Header: "header";
    readonly Query: "query";
    readonly Cookie: "cookie";
    readonly TargetPath: "target_path";
    readonly Route: "route";
    readonly RawPath: "raw_path";
    readonly IpAddress: "ip_address";
    readonly Protocol: "protocol";
    readonly Region: "region";
    readonly Scheme: "scheme";
    readonly Environment: "environment";
    readonly UserAgent: "user_agent";
    readonly GeoContinent: "geo_continent";
    readonly GeoCountry: "geo_country";
    readonly GeoCountryRegion: "geo_country_region";
    readonly GeoCity: "geo_city";
    readonly GeoAsNumber: "geo_as_number";
    readonly Ja4Digest: "ja4_digest";
    readonly Ja3Digest: "ja3_digest";
    readonly RateLimitApiId: "rate_limit_api_id";
    readonly ServerAction: "server_action";
    readonly BotName: "bot_name";
    readonly BotCategory: "bot_category";
};
export type RulesType = ClosedEnum<typeof RulesType>;
export declare const RulesOp: {
    readonly Sub: "sub";
    readonly Re: "re";
    readonly Eq: "eq";
    readonly Ex: "ex";
    readonly Inc: "inc";
    readonly Pre: "pre";
    readonly Suf: "suf";
    readonly Gt: "gt";
    readonly Gte: "gte";
    readonly Lt: "lt";
    readonly Lte: "lte";
    readonly Nex: "nex";
    readonly Ninc: "ninc";
    readonly Neq: "neq";
};
export type RulesOp = ClosedEnum<typeof RulesOp>;
export type RulesValue = string | number | Array<string>;
export type RulesConditions = {
    type: RulesType;
    op: RulesOp;
    neg?: boolean | undefined;
    key?: string | undefined;
    value?: string | number | Array<string> | undefined;
};
export type RulesConditionGroup = {
    conditions: Array<RulesConditions>;
};
export declare const GetFirewallConfigRulesSecurityResponseAction: {
    readonly Deny: "deny";
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly Bypass: "bypass";
    readonly RateLimit: "rate_limit";
    readonly Redirect: "redirect";
};
export type GetFirewallConfigRulesSecurityResponseAction = ClosedEnum<typeof GetFirewallConfigRulesSecurityResponseAction>;
export declare const RulesAlgo: {
    readonly FixedWindow: "fixed_window";
    readonly TokenBucket: "token_bucket";
};
export type RulesAlgo = ClosedEnum<typeof RulesAlgo>;
export declare const GetFirewallConfigRulesSecurityResponse200ApplicationJSONAction: {
    readonly Deny: "deny";
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly RateLimit: "rate_limit";
};
export type GetFirewallConfigRulesSecurityResponse200ApplicationJSONAction = ClosedEnum<typeof GetFirewallConfigRulesSecurityResponse200ApplicationJSONAction>;
export type RulesRateLimit = {
    algo: RulesAlgo;
    window: number;
    limit: number;
    keys: Array<string>;
    action?: GetFirewallConfigRulesSecurityResponse200ApplicationJSONAction | null | undefined;
};
export type RulesRedirect = {
    location: string;
    permanent: boolean;
};
export declare const GetFirewallConfigLogHeaders2: {
    readonly Wildcard: "*";
};
export type GetFirewallConfigLogHeaders2 = ClosedEnum<typeof GetFirewallConfigLogHeaders2>;
export type RulesLogHeaders = Array<string> | GetFirewallConfigLogHeaders2;
export type RulesMitigate = {
    action: GetFirewallConfigRulesSecurityResponseAction;
    rateLimit?: RulesRateLimit | null | undefined;
    redirect?: RulesRedirect | null | undefined;
    actionDuration?: string | null | undefined;
    bypassSystem?: boolean | null | undefined;
    logHeaders?: Array<string> | GetFirewallConfigLogHeaders2 | undefined;
};
export type RulesAction = {
    mitigate?: RulesMitigate | undefined;
};
export type Rules1 = {
    id: string;
    name: string;
    description?: string | undefined;
    active: boolean;
    conditionGroup: Array<RulesConditionGroup>;
    action: RulesAction;
    valid: boolean;
    validationErrors?: any | null | undefined;
};
export type GetFirewallConfigRules = Rules1 | Rules2;
export declare const GetFirewallConfigAction: {
    readonly Deny: "deny";
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly Bypass: "bypass";
};
export type GetFirewallConfigAction = ClosedEnum<typeof GetFirewallConfigAction>;
export type GetFirewallConfigIps = {
    id: string;
    hostname: string;
    ip: string;
    notes?: string | undefined;
    action: GetFirewallConfigAction;
};
export type Changes = {};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAction: {
    readonly Deny: "deny";
    readonly Log: "log";
    readonly Challenge: "challenge";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAction>;
export type BotProtection = {
    active: boolean;
    action?: GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAction | undefined;
    updatedAt?: string | undefined;
    userId?: string | undefined;
    username?: string | undefined;
};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAiBotsAction: {
    readonly Deny: "deny";
    readonly Log: "log";
    readonly Challenge: "challenge";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAiBotsAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAiBotsAction>;
export type AiBots = {
    active: boolean;
    action?: GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAiBotsAction | undefined;
    updatedAt?: string | undefined;
    userId?: string | undefined;
    username?: string | undefined;
};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesOwaspAction: {
    readonly Deny: "deny";
    readonly Log: "log";
    readonly Challenge: "challenge";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesOwaspAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesOwaspAction>;
export type Owasp = {
    active: boolean;
    action?: GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesOwaspAction | undefined;
    updatedAt?: string | undefined;
    userId?: string | undefined;
    username?: string | undefined;
};
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesVercelRulesetAction: {
    readonly Deny: "deny";
    readonly Log: "log";
    readonly Challenge: "challenge";
};
export type GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesVercelRulesetAction = ClosedEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesVercelRulesetAction>;
export type VercelRuleset = {
    active: boolean;
    action?: GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesVercelRulesetAction | undefined;
    updatedAt?: string | undefined;
    userId?: string | undefined;
    username?: string | undefined;
};
export type GetFirewallConfigManagedRules = {
    botProtection?: BotProtection | undefined;
    aiBots?: AiBots | undefined;
    owasp?: Owasp | undefined;
    vercelRuleset?: VercelRuleset | undefined;
};
/**
 * If the firewall configuration includes a [custom managed ruleset](https://vercel.com/docs/security/vercel-waf/managed-rulesets), it will include a `crs` item that has the following values: sd: Scanner Detection ma: Multipart Attack lfi: Local File Inclusion Attack rfi: Remote File Inclusion Attack rce: Remote Execution Attack php: PHP Attack gen: Generic Attack xss: XSS Attack sqli: SQL Injection Attack sf: Session Fixation Attack java: Java Attack
 */
export type GetFirewallConfigResponseBody = {
    ownerId: string;
    projectKey: string;
    id: string;
    version: number;
    updatedAt: string;
    firewallEnabled: boolean;
    /**
     * Custom Ruleset
     */
    crs: GetFirewallConfigCrs;
    rules: Array<Rules1 | Rules2>;
    ips: Array<GetFirewallConfigIps>;
    changes: Array<Changes>;
    managedRules?: GetFirewallConfigManagedRules | undefined;
    botIdEnabled?: boolean | undefined;
};
/** @internal */
export declare const GetFirewallConfigRequest$inboundSchema: z.ZodType<GetFirewallConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    configVersion: string;
};
/** @internal */
export declare const GetFirewallConfigRequest$outboundSchema: z.ZodType<GetFirewallConfigRequest$Outbound, z.ZodTypeDef, GetFirewallConfigRequest>;
export declare function getFirewallConfigRequestToJSON(getFirewallConfigRequest: GetFirewallConfigRequest): string;
export declare function getFirewallConfigRequestFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRequest, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSdAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSdAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSdAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSdAction>;
/** @internal */
export declare const GetFirewallConfigSd$inboundSchema: z.ZodType<GetFirewallConfigSd, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigSd$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigSd$outboundSchema: z.ZodType<GetFirewallConfigSd$Outbound, z.ZodTypeDef, GetFirewallConfigSd>;
export declare function getFirewallConfigSdToJSON(getFirewallConfigSd: GetFirewallConfigSd): string;
export declare function getFirewallConfigSdFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigSd, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityAction>;
/** @internal */
export declare const GetFirewallConfigSecurityAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityAction>;
/** @internal */
export declare const GetFirewallConfigMa$inboundSchema: z.ZodType<GetFirewallConfigMa, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigMa$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigMa$outboundSchema: z.ZodType<GetFirewallConfigMa$Outbound, z.ZodTypeDef, GetFirewallConfigMa>;
export declare function getFirewallConfigMaToJSON(getFirewallConfigMa: GetFirewallConfigMa): string;
export declare function getFirewallConfigMaFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigMa, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponseAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponseAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponseAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponseAction>;
/** @internal */
export declare const GetFirewallConfigLfi$inboundSchema: z.ZodType<GetFirewallConfigLfi, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigLfi$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigLfi$outboundSchema: z.ZodType<GetFirewallConfigLfi$Outbound, z.ZodTypeDef, GetFirewallConfigLfi>;
export declare function getFirewallConfigLfiToJSON(getFirewallConfigLfi: GetFirewallConfigLfi): string;
export declare function getFirewallConfigLfiFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigLfi, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200Action$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200Action>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200Action$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200Action>;
/** @internal */
export declare const GetFirewallConfigRfi$inboundSchema: z.ZodType<GetFirewallConfigRfi, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRfi$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigRfi$outboundSchema: z.ZodType<GetFirewallConfigRfi$Outbound, z.ZodTypeDef, GetFirewallConfigRfi>;
export declare function getFirewallConfigRfiToJSON(getFirewallConfigRfi: GetFirewallConfigRfi): string;
export declare function getFirewallConfigRfiFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRfi, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONAction>;
/** @internal */
export declare const GetFirewallConfigRce$inboundSchema: z.ZodType<GetFirewallConfigRce, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRce$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigRce$outboundSchema: z.ZodType<GetFirewallConfigRce$Outbound, z.ZodTypeDef, GetFirewallConfigRce>;
export declare function getFirewallConfigRceToJSON(getFirewallConfigRce: GetFirewallConfigRce): string;
export declare function getFirewallConfigRceFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRce, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyAction>;
/** @internal */
export declare const GetFirewallConfigPhp$inboundSchema: z.ZodType<GetFirewallConfigPhp, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigPhp$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigPhp$outboundSchema: z.ZodType<GetFirewallConfigPhp$Outbound, z.ZodTypeDef, GetFirewallConfigPhp>;
export declare function getFirewallConfigPhpToJSON(getFirewallConfigPhp: GetFirewallConfigPhp): string;
export declare function getFirewallConfigPhpFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigPhp, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsAction>;
/** @internal */
export declare const GetFirewallConfigGen$inboundSchema: z.ZodType<GetFirewallConfigGen, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigGen$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigGen$outboundSchema: z.ZodType<GetFirewallConfigGen$Outbound, z.ZodTypeDef, GetFirewallConfigGen>;
export declare function getFirewallConfigGenToJSON(getFirewallConfigGen: GetFirewallConfigGen): string;
export declare function getFirewallConfigGenFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigGen, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsXssAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsXssAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsXssAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsXssAction>;
/** @internal */
export declare const GetFirewallConfigXss$inboundSchema: z.ZodType<GetFirewallConfigXss, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigXss$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigXss$outboundSchema: z.ZodType<GetFirewallConfigXss$Outbound, z.ZodTypeDef, GetFirewallConfigXss>;
export declare function getFirewallConfigXssToJSON(getFirewallConfigXss: GetFirewallConfigXss): string;
export declare function getFirewallConfigXssFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigXss, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSqliAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSqliAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSqliAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSqliAction>;
/** @internal */
export declare const GetFirewallConfigSqli$inboundSchema: z.ZodType<GetFirewallConfigSqli, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigSqli$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigSqli$outboundSchema: z.ZodType<GetFirewallConfigSqli$Outbound, z.ZodTypeDef, GetFirewallConfigSqli>;
export declare function getFirewallConfigSqliToJSON(getFirewallConfigSqli: GetFirewallConfigSqli): string;
export declare function getFirewallConfigSqliFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigSqli, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSfAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSfAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSfAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsSfAction>;
/** @internal */
export declare const GetFirewallConfigSf$inboundSchema: z.ZodType<GetFirewallConfigSf, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigSf$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigSf$outboundSchema: z.ZodType<GetFirewallConfigSf$Outbound, z.ZodTypeDef, GetFirewallConfigSf>;
export declare function getFirewallConfigSfToJSON(getFirewallConfigSf: GetFirewallConfigSf): string;
export declare function getFirewallConfigSfFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigSf, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsJavaAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsJavaAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsJavaAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyCrsJavaAction>;
/** @internal */
export declare const GetFirewallConfigJava$inboundSchema: z.ZodType<GetFirewallConfigJava, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigJava$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigJava$outboundSchema: z.ZodType<GetFirewallConfigJava$Outbound, z.ZodTypeDef, GetFirewallConfigJava>;
export declare function getFirewallConfigJavaToJSON(getFirewallConfigJava: GetFirewallConfigJava): string;
export declare function getFirewallConfigJavaFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigJava, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigCrs$inboundSchema: z.ZodType<GetFirewallConfigCrs, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigCrs$Outbound = {
    sd: GetFirewallConfigSd$Outbound;
    ma: GetFirewallConfigMa$Outbound;
    lfi: GetFirewallConfigLfi$Outbound;
    rfi: GetFirewallConfigRfi$Outbound;
    rce: GetFirewallConfigRce$Outbound;
    php: GetFirewallConfigPhp$Outbound;
    gen: GetFirewallConfigGen$Outbound;
    xss: GetFirewallConfigXss$Outbound;
    sqli: GetFirewallConfigSqli$Outbound;
    sf: GetFirewallConfigSf$Outbound;
    java: GetFirewallConfigJava$Outbound;
};
/** @internal */
export declare const GetFirewallConfigCrs$outboundSchema: z.ZodType<GetFirewallConfigCrs$Outbound, z.ZodTypeDef, GetFirewallConfigCrs>;
export declare function getFirewallConfigCrsToJSON(getFirewallConfigCrs: GetFirewallConfigCrs): string;
export declare function getFirewallConfigCrsFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigCrs, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigRulesType$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesType>;
/** @internal */
export declare const GetFirewallConfigRulesType$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesType>;
/** @internal */
export declare const GetFirewallConfigRulesOp$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesOp>;
/** @internal */
export declare const GetFirewallConfigRulesOp$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesOp>;
/** @internal */
export declare const GetFirewallConfigRulesValue$inboundSchema: z.ZodType<GetFirewallConfigRulesValue, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRulesValue$Outbound = string | number | Array<string>;
/** @internal */
export declare const GetFirewallConfigRulesValue$outboundSchema: z.ZodType<GetFirewallConfigRulesValue$Outbound, z.ZodTypeDef, GetFirewallConfigRulesValue>;
export declare function getFirewallConfigRulesValueToJSON(getFirewallConfigRulesValue: GetFirewallConfigRulesValue): string;
export declare function getFirewallConfigRulesValueFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRulesValue, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigRulesConditions$inboundSchema: z.ZodType<GetFirewallConfigRulesConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRulesConditions$Outbound = {
    type: string;
    op: string;
    neg?: boolean | undefined;
    key?: string | undefined;
    value?: string | number | Array<string> | undefined;
};
/** @internal */
export declare const GetFirewallConfigRulesConditions$outboundSchema: z.ZodType<GetFirewallConfigRulesConditions$Outbound, z.ZodTypeDef, GetFirewallConfigRulesConditions>;
export declare function getFirewallConfigRulesConditionsToJSON(getFirewallConfigRulesConditions: GetFirewallConfigRulesConditions): string;
export declare function getFirewallConfigRulesConditionsFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRulesConditions, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigRulesConditionGroup$inboundSchema: z.ZodType<GetFirewallConfigRulesConditionGroup, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRulesConditionGroup$Outbound = {
    conditions: Array<GetFirewallConfigRulesConditions$Outbound>;
};
/** @internal */
export declare const GetFirewallConfigRulesConditionGroup$outboundSchema: z.ZodType<GetFirewallConfigRulesConditionGroup$Outbound, z.ZodTypeDef, GetFirewallConfigRulesConditionGroup>;
export declare function getFirewallConfigRulesConditionGroupToJSON(getFirewallConfigRulesConditionGroup: GetFirewallConfigRulesConditionGroup): string;
export declare function getFirewallConfigRulesConditionGroupFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRulesConditionGroup, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigRulesSecurityAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesSecurityAction>;
/** @internal */
export declare const GetFirewallConfigRulesSecurityAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesSecurityAction>;
/** @internal */
export declare const GetFirewallConfigRulesAlgo$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesAlgo>;
/** @internal */
export declare const GetFirewallConfigRulesAlgo$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesAlgo>;
/** @internal */
export declare const GetFirewallConfigRulesSecurityResponse200Action$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesSecurityResponse200Action>;
/** @internal */
export declare const GetFirewallConfigRulesSecurityResponse200Action$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesSecurityResponse200Action>;
/** @internal */
export declare const GetFirewallConfigRulesRateLimit$inboundSchema: z.ZodType<GetFirewallConfigRulesRateLimit, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRulesRateLimit$Outbound = {
    algo: string;
    window: number;
    limit: number;
    keys: Array<string>;
    action?: string | null | undefined;
};
/** @internal */
export declare const GetFirewallConfigRulesRateLimit$outboundSchema: z.ZodType<GetFirewallConfigRulesRateLimit$Outbound, z.ZodTypeDef, GetFirewallConfigRulesRateLimit>;
export declare function getFirewallConfigRulesRateLimitToJSON(getFirewallConfigRulesRateLimit: GetFirewallConfigRulesRateLimit): string;
export declare function getFirewallConfigRulesRateLimitFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRulesRateLimit, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigRulesRedirect$inboundSchema: z.ZodType<GetFirewallConfigRulesRedirect, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRulesRedirect$Outbound = {
    location: string;
    permanent: boolean;
};
/** @internal */
export declare const GetFirewallConfigRulesRedirect$outboundSchema: z.ZodType<GetFirewallConfigRulesRedirect$Outbound, z.ZodTypeDef, GetFirewallConfigRulesRedirect>;
export declare function getFirewallConfigRulesRedirectToJSON(getFirewallConfigRulesRedirect: GetFirewallConfigRulesRedirect): string;
export declare function getFirewallConfigRulesRedirectFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRulesRedirect, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigLogHeadersSecurity2$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigLogHeadersSecurity2>;
/** @internal */
export declare const GetFirewallConfigLogHeadersSecurity2$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigLogHeadersSecurity2>;
/** @internal */
export declare const GetFirewallConfigRulesLogHeaders$inboundSchema: z.ZodType<GetFirewallConfigRulesLogHeaders, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRulesLogHeaders$Outbound = Array<string> | string;
/** @internal */
export declare const GetFirewallConfigRulesLogHeaders$outboundSchema: z.ZodType<GetFirewallConfigRulesLogHeaders$Outbound, z.ZodTypeDef, GetFirewallConfigRulesLogHeaders>;
export declare function getFirewallConfigRulesLogHeadersToJSON(getFirewallConfigRulesLogHeaders: GetFirewallConfigRulesLogHeaders): string;
export declare function getFirewallConfigRulesLogHeadersFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRulesLogHeaders, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigRulesMitigate$inboundSchema: z.ZodType<GetFirewallConfigRulesMitigate, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRulesMitigate$Outbound = {
    action: string;
    rateLimit?: GetFirewallConfigRulesRateLimit$Outbound | null | undefined;
    redirect?: GetFirewallConfigRulesRedirect$Outbound | null | undefined;
    actionDuration?: string | null | undefined;
    bypassSystem?: boolean | null | undefined;
    logHeaders?: Array<string> | string | undefined;
};
/** @internal */
export declare const GetFirewallConfigRulesMitigate$outboundSchema: z.ZodType<GetFirewallConfigRulesMitigate$Outbound, z.ZodTypeDef, GetFirewallConfigRulesMitigate>;
export declare function getFirewallConfigRulesMitigateToJSON(getFirewallConfigRulesMitigate: GetFirewallConfigRulesMitigate): string;
export declare function getFirewallConfigRulesMitigateFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRulesMitigate, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigRulesAction$inboundSchema: z.ZodType<GetFirewallConfigRulesAction, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRulesAction$Outbound = {
    mitigate?: GetFirewallConfigRulesMitigate$Outbound | undefined;
};
/** @internal */
export declare const GetFirewallConfigRulesAction$outboundSchema: z.ZodType<GetFirewallConfigRulesAction$Outbound, z.ZodTypeDef, GetFirewallConfigRulesAction>;
export declare function getFirewallConfigRulesActionToJSON(getFirewallConfigRulesAction: GetFirewallConfigRulesAction): string;
export declare function getFirewallConfigRulesActionFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRulesAction, SDKValidationError>;
/** @internal */
export declare const Rules2$inboundSchema: z.ZodType<Rules2, z.ZodTypeDef, unknown>;
/** @internal */
export type Rules2$Outbound = {
    id: string;
    name: string;
    description?: string | undefined;
    active: boolean;
    conditionGroup: Array<GetFirewallConfigRulesConditionGroup$Outbound>;
    action: GetFirewallConfigRulesAction$Outbound;
    valid: boolean;
    validationErrors: Array<string>;
};
/** @internal */
export declare const Rules2$outboundSchema: z.ZodType<Rules2$Outbound, z.ZodTypeDef, Rules2>;
export declare function rules2ToJSON(rules2: Rules2): string;
export declare function rules2FromJSON(jsonString: string): SafeParseResult<Rules2, SDKValidationError>;
/** @internal */
export declare const RulesType$inboundSchema: z.ZodNativeEnum<typeof RulesType>;
/** @internal */
export declare const RulesType$outboundSchema: z.ZodNativeEnum<typeof RulesType>;
/** @internal */
export declare const RulesOp$inboundSchema: z.ZodNativeEnum<typeof RulesOp>;
/** @internal */
export declare const RulesOp$outboundSchema: z.ZodNativeEnum<typeof RulesOp>;
/** @internal */
export declare const RulesValue$inboundSchema: z.ZodType<RulesValue, z.ZodTypeDef, unknown>;
/** @internal */
export type RulesValue$Outbound = string | number | Array<string>;
/** @internal */
export declare const RulesValue$outboundSchema: z.ZodType<RulesValue$Outbound, z.ZodTypeDef, RulesValue>;
export declare function rulesValueToJSON(rulesValue: RulesValue): string;
export declare function rulesValueFromJSON(jsonString: string): SafeParseResult<RulesValue, SDKValidationError>;
/** @internal */
export declare const RulesConditions$inboundSchema: z.ZodType<RulesConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type RulesConditions$Outbound = {
    type: string;
    op: string;
    neg?: boolean | undefined;
    key?: string | undefined;
    value?: string | number | Array<string> | undefined;
};
/** @internal */
export declare const RulesConditions$outboundSchema: z.ZodType<RulesConditions$Outbound, z.ZodTypeDef, RulesConditions>;
export declare function rulesConditionsToJSON(rulesConditions: RulesConditions): string;
export declare function rulesConditionsFromJSON(jsonString: string): SafeParseResult<RulesConditions, SDKValidationError>;
/** @internal */
export declare const RulesConditionGroup$inboundSchema: z.ZodType<RulesConditionGroup, z.ZodTypeDef, unknown>;
/** @internal */
export type RulesConditionGroup$Outbound = {
    conditions: Array<RulesConditions$Outbound>;
};
/** @internal */
export declare const RulesConditionGroup$outboundSchema: z.ZodType<RulesConditionGroup$Outbound, z.ZodTypeDef, RulesConditionGroup>;
export declare function rulesConditionGroupToJSON(rulesConditionGroup: RulesConditionGroup): string;
export declare function rulesConditionGroupFromJSON(jsonString: string): SafeParseResult<RulesConditionGroup, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigRulesSecurityResponseAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesSecurityResponseAction>;
/** @internal */
export declare const GetFirewallConfigRulesSecurityResponseAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesSecurityResponseAction>;
/** @internal */
export declare const RulesAlgo$inboundSchema: z.ZodNativeEnum<typeof RulesAlgo>;
/** @internal */
export declare const RulesAlgo$outboundSchema: z.ZodNativeEnum<typeof RulesAlgo>;
/** @internal */
export declare const GetFirewallConfigRulesSecurityResponse200ApplicationJSONAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesSecurityResponse200ApplicationJSONAction>;
/** @internal */
export declare const GetFirewallConfigRulesSecurityResponse200ApplicationJSONAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigRulesSecurityResponse200ApplicationJSONAction>;
/** @internal */
export declare const RulesRateLimit$inboundSchema: z.ZodType<RulesRateLimit, z.ZodTypeDef, unknown>;
/** @internal */
export type RulesRateLimit$Outbound = {
    algo: string;
    window: number;
    limit: number;
    keys: Array<string>;
    action?: string | null | undefined;
};
/** @internal */
export declare const RulesRateLimit$outboundSchema: z.ZodType<RulesRateLimit$Outbound, z.ZodTypeDef, RulesRateLimit>;
export declare function rulesRateLimitToJSON(rulesRateLimit: RulesRateLimit): string;
export declare function rulesRateLimitFromJSON(jsonString: string): SafeParseResult<RulesRateLimit, SDKValidationError>;
/** @internal */
export declare const RulesRedirect$inboundSchema: z.ZodType<RulesRedirect, z.ZodTypeDef, unknown>;
/** @internal */
export type RulesRedirect$Outbound = {
    location: string;
    permanent: boolean;
};
/** @internal */
export declare const RulesRedirect$outboundSchema: z.ZodType<RulesRedirect$Outbound, z.ZodTypeDef, RulesRedirect>;
export declare function rulesRedirectToJSON(rulesRedirect: RulesRedirect): string;
export declare function rulesRedirectFromJSON(jsonString: string): SafeParseResult<RulesRedirect, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigLogHeaders2$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigLogHeaders2>;
/** @internal */
export declare const GetFirewallConfigLogHeaders2$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigLogHeaders2>;
/** @internal */
export declare const RulesLogHeaders$inboundSchema: z.ZodType<RulesLogHeaders, z.ZodTypeDef, unknown>;
/** @internal */
export type RulesLogHeaders$Outbound = Array<string> | string;
/** @internal */
export declare const RulesLogHeaders$outboundSchema: z.ZodType<RulesLogHeaders$Outbound, z.ZodTypeDef, RulesLogHeaders>;
export declare function rulesLogHeadersToJSON(rulesLogHeaders: RulesLogHeaders): string;
export declare function rulesLogHeadersFromJSON(jsonString: string): SafeParseResult<RulesLogHeaders, SDKValidationError>;
/** @internal */
export declare const RulesMitigate$inboundSchema: z.ZodType<RulesMitigate, z.ZodTypeDef, unknown>;
/** @internal */
export type RulesMitigate$Outbound = {
    action: string;
    rateLimit?: RulesRateLimit$Outbound | null | undefined;
    redirect?: RulesRedirect$Outbound | null | undefined;
    actionDuration?: string | null | undefined;
    bypassSystem?: boolean | null | undefined;
    logHeaders?: Array<string> | string | undefined;
};
/** @internal */
export declare const RulesMitigate$outboundSchema: z.ZodType<RulesMitigate$Outbound, z.ZodTypeDef, RulesMitigate>;
export declare function rulesMitigateToJSON(rulesMitigate: RulesMitigate): string;
export declare function rulesMitigateFromJSON(jsonString: string): SafeParseResult<RulesMitigate, SDKValidationError>;
/** @internal */
export declare const RulesAction$inboundSchema: z.ZodType<RulesAction, z.ZodTypeDef, unknown>;
/** @internal */
export type RulesAction$Outbound = {
    mitigate?: RulesMitigate$Outbound | undefined;
};
/** @internal */
export declare const RulesAction$outboundSchema: z.ZodType<RulesAction$Outbound, z.ZodTypeDef, RulesAction>;
export declare function rulesActionToJSON(rulesAction: RulesAction): string;
export declare function rulesActionFromJSON(jsonString: string): SafeParseResult<RulesAction, SDKValidationError>;
/** @internal */
export declare const Rules1$inboundSchema: z.ZodType<Rules1, z.ZodTypeDef, unknown>;
/** @internal */
export type Rules1$Outbound = {
    id: string;
    name: string;
    description?: string | undefined;
    active: boolean;
    conditionGroup: Array<RulesConditionGroup$Outbound>;
    action: RulesAction$Outbound;
    valid: boolean;
    validationErrors?: any | null | undefined;
};
/** @internal */
export declare const Rules1$outboundSchema: z.ZodType<Rules1$Outbound, z.ZodTypeDef, Rules1>;
export declare function rules1ToJSON(rules1: Rules1): string;
export declare function rules1FromJSON(jsonString: string): SafeParseResult<Rules1, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigRules$inboundSchema: z.ZodType<GetFirewallConfigRules, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigRules$Outbound = Rules1$Outbound | Rules2$Outbound;
/** @internal */
export declare const GetFirewallConfigRules$outboundSchema: z.ZodType<GetFirewallConfigRules$Outbound, z.ZodTypeDef, GetFirewallConfigRules>;
export declare function getFirewallConfigRulesToJSON(getFirewallConfigRules: GetFirewallConfigRules): string;
export declare function getFirewallConfigRulesFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigRules, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigAction>;
/** @internal */
export declare const GetFirewallConfigAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigAction>;
/** @internal */
export declare const GetFirewallConfigIps$inboundSchema: z.ZodType<GetFirewallConfigIps, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigIps$Outbound = {
    id: string;
    hostname: string;
    ip: string;
    notes?: string | undefined;
    action: string;
};
/** @internal */
export declare const GetFirewallConfigIps$outboundSchema: z.ZodType<GetFirewallConfigIps$Outbound, z.ZodTypeDef, GetFirewallConfigIps>;
export declare function getFirewallConfigIpsToJSON(getFirewallConfigIps: GetFirewallConfigIps): string;
export declare function getFirewallConfigIpsFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigIps, SDKValidationError>;
/** @internal */
export declare const Changes$inboundSchema: z.ZodType<Changes, z.ZodTypeDef, unknown>;
/** @internal */
export type Changes$Outbound = {};
/** @internal */
export declare const Changes$outboundSchema: z.ZodType<Changes$Outbound, z.ZodTypeDef, Changes>;
export declare function changesToJSON(changes: Changes): string;
export declare function changesFromJSON(jsonString: string): SafeParseResult<Changes, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAction>;
/** @internal */
export declare const BotProtection$inboundSchema: z.ZodType<BotProtection, z.ZodTypeDef, unknown>;
/** @internal */
export type BotProtection$Outbound = {
    active: boolean;
    action?: string | undefined;
    updatedAt?: string | undefined;
    userId?: string | undefined;
    username?: string | undefined;
};
/** @internal */
export declare const BotProtection$outboundSchema: z.ZodType<BotProtection$Outbound, z.ZodTypeDef, BotProtection>;
export declare function botProtectionToJSON(botProtection: BotProtection): string;
export declare function botProtectionFromJSON(jsonString: string): SafeParseResult<BotProtection, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAiBotsAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAiBotsAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAiBotsAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesAiBotsAction>;
/** @internal */
export declare const AiBots$inboundSchema: z.ZodType<AiBots, z.ZodTypeDef, unknown>;
/** @internal */
export type AiBots$Outbound = {
    active: boolean;
    action?: string | undefined;
    updatedAt?: string | undefined;
    userId?: string | undefined;
    username?: string | undefined;
};
/** @internal */
export declare const AiBots$outboundSchema: z.ZodType<AiBots$Outbound, z.ZodTypeDef, AiBots>;
export declare function aiBotsToJSON(aiBots: AiBots): string;
export declare function aiBotsFromJSON(jsonString: string): SafeParseResult<AiBots, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesOwaspAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesOwaspAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesOwaspAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesOwaspAction>;
/** @internal */
export declare const Owasp$inboundSchema: z.ZodType<Owasp, z.ZodTypeDef, unknown>;
/** @internal */
export type Owasp$Outbound = {
    active: boolean;
    action?: string | undefined;
    updatedAt?: string | undefined;
    userId?: string | undefined;
    username?: string | undefined;
};
/** @internal */
export declare const Owasp$outboundSchema: z.ZodType<Owasp$Outbound, z.ZodTypeDef, Owasp>;
export declare function owaspToJSON(owasp: Owasp): string;
export declare function owaspFromJSON(jsonString: string): SafeParseResult<Owasp, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesVercelRulesetAction$inboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesVercelRulesetAction>;
/** @internal */
export declare const GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesVercelRulesetAction$outboundSchema: z.ZodNativeEnum<typeof GetFirewallConfigSecurityResponse200ApplicationJSONResponseBodyManagedRulesVercelRulesetAction>;
/** @internal */
export declare const VercelRuleset$inboundSchema: z.ZodType<VercelRuleset, z.ZodTypeDef, unknown>;
/** @internal */
export type VercelRuleset$Outbound = {
    active: boolean;
    action?: string | undefined;
    updatedAt?: string | undefined;
    userId?: string | undefined;
    username?: string | undefined;
};
/** @internal */
export declare const VercelRuleset$outboundSchema: z.ZodType<VercelRuleset$Outbound, z.ZodTypeDef, VercelRuleset>;
export declare function vercelRulesetToJSON(vercelRuleset: VercelRuleset): string;
export declare function vercelRulesetFromJSON(jsonString: string): SafeParseResult<VercelRuleset, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigManagedRules$inboundSchema: z.ZodType<GetFirewallConfigManagedRules, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigManagedRules$Outbound = {
    bot_protection?: BotProtection$Outbound | undefined;
    ai_bots?: AiBots$Outbound | undefined;
    owasp?: Owasp$Outbound | undefined;
    vercel_ruleset?: VercelRuleset$Outbound | undefined;
};
/** @internal */
export declare const GetFirewallConfigManagedRules$outboundSchema: z.ZodType<GetFirewallConfigManagedRules$Outbound, z.ZodTypeDef, GetFirewallConfigManagedRules>;
export declare function getFirewallConfigManagedRulesToJSON(getFirewallConfigManagedRules: GetFirewallConfigManagedRules): string;
export declare function getFirewallConfigManagedRulesFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigManagedRules, SDKValidationError>;
/** @internal */
export declare const GetFirewallConfigResponseBody$inboundSchema: z.ZodType<GetFirewallConfigResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFirewallConfigResponseBody$Outbound = {
    ownerId: string;
    projectKey: string;
    id: string;
    version: number;
    updatedAt: string;
    firewallEnabled: boolean;
    crs: GetFirewallConfigCrs$Outbound;
    rules: Array<Rules1$Outbound | Rules2$Outbound>;
    ips: Array<GetFirewallConfigIps$Outbound>;
    changes: Array<Changes$Outbound>;
    managedRules?: GetFirewallConfigManagedRules$Outbound | undefined;
    botIdEnabled?: boolean | undefined;
};
/** @internal */
export declare const GetFirewallConfigResponseBody$outboundSchema: z.ZodType<GetFirewallConfigResponseBody$Outbound, z.ZodTypeDef, GetFirewallConfigResponseBody>;
export declare function getFirewallConfigResponseBodyToJSON(getFirewallConfigResponseBody: GetFirewallConfigResponseBody): string;
export declare function getFirewallConfigResponseBodyFromJSON(jsonString: string): SafeParseResult<GetFirewallConfigResponseBody, SDKValidationError>;
//# sourceMappingURL=getfirewallconfigop.d.ts.map