import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Toggle bot ID
 */
export type RequestBody13 = {
    action: string;
    id?: string | undefined;
    value: boolean;
};
export declare const UpdateFirewallConfigRequestBodyId: {
    readonly AiBots: "ai_bots";
    readonly BotFilter: "bot_filter";
    readonly BotProtection: "bot_protection";
    readonly VercelRuleset: "vercel_ruleset";
    readonly Owasp: "owasp";
};
export type UpdateFirewallConfigRequestBodyId = ClosedEnum<typeof UpdateFirewallConfigRequestBodyId>;
export declare const UpdateFirewallConfigRequestBodySecurityRequest12Action: {
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly Deny: "deny";
};
export type UpdateFirewallConfigRequestBodySecurityRequest12Action = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest12Action>;
export type UpdateFirewallConfigRequestBodySecurityRequest12Value = {
    active: boolean;
    action?: UpdateFirewallConfigRequestBodySecurityRequest12Action | undefined;
};
/**
 * Update a managed rule group
 */
export type RequestBody12 = {
    action: string;
    id: UpdateFirewallConfigRequestBodyId;
    value: {
        [k: string]: UpdateFirewallConfigRequestBodySecurityRequest12Value;
    };
};
export declare const UpdateFirewallConfigRequestBodySecurityRequest11Action: {
    readonly ManagedRulesUpdate: "managedRules.update";
};
export type UpdateFirewallConfigRequestBodySecurityRequest11Action = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest11Action>;
export declare const RequestBodyId: {
    readonly AiBots: "ai_bots";
    readonly BotFilter: "bot_filter";
    readonly BotProtection: "bot_protection";
    readonly VercelRuleset: "vercel_ruleset";
    readonly Owasp: "owasp";
};
export type RequestBodyId = ClosedEnum<typeof RequestBodyId>;
export declare const UpdateFirewallConfigRequestBodySecurityRequest11ValueAction: {
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly Deny: "deny";
};
export type UpdateFirewallConfigRequestBodySecurityRequest11ValueAction = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest11ValueAction>;
export type UpdateFirewallConfigRequestBodySecurityRequest11Value = {
    action?: UpdateFirewallConfigRequestBodySecurityRequest11ValueAction | undefined;
    active: boolean;
};
/**
 * Update a managed ruleset
 */
export type RequestBody11 = {
    action: UpdateFirewallConfigRequestBodySecurityRequest11Action;
    id: RequestBodyId;
    value: UpdateFirewallConfigRequestBodySecurityRequest11Value;
};
export declare const UpdateFirewallConfigRequestBodySecurityRequest10Action: {
    readonly IpRemove: "ip.remove";
};
export type UpdateFirewallConfigRequestBodySecurityRequest10Action = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest10Action>;
/**
 * Remove an IP Blocking rule
 */
export type UpdateFirewallConfigRequestBody10 = {
    action: UpdateFirewallConfigRequestBodySecurityRequest10Action;
    id: string;
    value?: any | null | undefined;
};
export declare const UpdateFirewallConfigRequestBodySecurityRequest9Action: {
    readonly IpUpdate: "ip.update";
};
export type UpdateFirewallConfigRequestBodySecurityRequest9Action = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest9Action>;
export declare const UpdateFirewallConfigRequestBodySecurityRequest9ValueAction: {
    readonly Deny: "deny";
    readonly Challenge: "challenge";
    readonly Log: "log";
    readonly Bypass: "bypass";
};
export type UpdateFirewallConfigRequestBodySecurityRequest9ValueAction = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest9ValueAction>;
export type UpdateFirewallConfigRequestBodySecurityRequest9Value = {
    hostname: string;
    ip: string;
    notes?: string | undefined;
    action: UpdateFirewallConfigRequestBodySecurityRequest9ValueAction;
};
/**
 * Update an IP Blocking rule
 */
export type UpdateFirewallConfigRequestBody9 = {
    action: UpdateFirewallConfigRequestBodySecurityRequest9Action;
    id: string;
    value: UpdateFirewallConfigRequestBodySecurityRequest9Value;
};
export declare const UpdateFirewallConfigRequestBodySecurityRequest8Action: {
    readonly IpInsert: "ip.insert";
};
export type UpdateFirewallConfigRequestBodySecurityRequest8Action = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest8Action>;
export declare const UpdateFirewallConfigRequestBodySecurityRequest8ValueAction: {
    readonly Deny: "deny";
    readonly Challenge: "challenge";
    readonly Log: "log";
    readonly Bypass: "bypass";
};
export type UpdateFirewallConfigRequestBodySecurityRequest8ValueAction = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest8ValueAction>;
export type UpdateFirewallConfigRequestBodySecurityRequestValue = {
    hostname: string;
    ip: string;
    notes?: string | undefined;
    action: UpdateFirewallConfigRequestBodySecurityRequest8ValueAction;
};
/**
 * Add an IP Blocking rule
 */
export type UpdateFirewallConfigRequestBody8 = {
    action: UpdateFirewallConfigRequestBodySecurityRequest8Action;
    id?: any | null | undefined;
    value: UpdateFirewallConfigRequestBodySecurityRequestValue;
};
export declare const UpdateFirewallConfigRequestBodySecurityRequest7Action: {
    readonly CrsDisable: "crs.disable";
};
export type UpdateFirewallConfigRequestBodySecurityRequest7Action = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest7Action>;
/**
 * Disable a managed rule
 */
export type UpdateFirewallConfigRequestBody7 = {
    action: UpdateFirewallConfigRequestBodySecurityRequest7Action;
    id?: any | null | undefined;
    value?: any | null | undefined;
};
export declare const UpdateFirewallConfigRequestBodySecurityRequest6Action: {
    readonly CrsUpdate: "crs.update";
};
export type UpdateFirewallConfigRequestBodySecurityRequest6Action = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest6Action>;
export declare const Id: {
    readonly Sd: "sd";
    readonly Ma: "ma";
    readonly Lfi: "lfi";
    readonly Rfi: "rfi";
    readonly Rce: "rce";
    readonly Php: "php";
    readonly Gen: "gen";
    readonly Xss: "xss";
    readonly Sqli: "sqli";
    readonly Sf: "sf";
    readonly Java: "java";
};
export type Id = ClosedEnum<typeof Id>;
export declare const UpdateFirewallConfigRequestBodySecurityRequest6ValueAction: {
    readonly Deny: "deny";
    readonly Log: "log";
};
export type UpdateFirewallConfigRequestBodySecurityRequest6ValueAction = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest6ValueAction>;
export type UpdateFirewallConfigRequestBodySecurityValue = {
    active: boolean;
    action: UpdateFirewallConfigRequestBodySecurityRequest6ValueAction;
};
/**
 * Enable a managed rule
 */
export type UpdateFirewallConfigRequestBody6 = {
    action: UpdateFirewallConfigRequestBodySecurityRequest6Action;
    id: Id;
    value: UpdateFirewallConfigRequestBodySecurityValue;
};
export declare const UpdateFirewallConfigRequestBodySecurityRequest5Action: {
    readonly RulesPriority: "rules.priority";
};
export type UpdateFirewallConfigRequestBodySecurityRequest5Action = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest5Action>;
/**
 * Reorder a custom rule
 */
export type UpdateFirewallConfigRequestBody5 = {
    action: UpdateFirewallConfigRequestBodySecurityRequest5Action;
    id: string;
    value: number;
};
export declare const UpdateFirewallConfigRequestBodySecurityRequest4Action: {
    readonly RulesRemove: "rules.remove";
};
export type UpdateFirewallConfigRequestBodySecurityRequest4Action = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest4Action>;
/**
 * Remove a custom rule
 */
export type UpdateFirewallConfigRequestBody4 = {
    action: UpdateFirewallConfigRequestBodySecurityRequest4Action;
    id: string;
    value?: any | null | undefined;
};
export declare const UpdateFirewallConfigRequestBodySecurityRequestAction: {
    readonly RulesUpdate: "rules.update";
};
export type UpdateFirewallConfigRequestBodySecurityRequestAction = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequestAction>;
export declare const UpdateFirewallConfigRequestBodySecurityType: {
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
    readonly Region: "region";
    readonly Protocol: "protocol";
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
export type UpdateFirewallConfigRequestBodySecurityType = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityType>;
export declare const UpdateFirewallConfigRequestBodyOp: {
    readonly Re: "re";
    readonly Eq: "eq";
    readonly Neq: "neq";
    readonly Ex: "ex";
    readonly Nex: "nex";
    readonly Inc: "inc";
    readonly Ninc: "ninc";
    readonly Pre: "pre";
    readonly Suf: "suf";
    readonly Sub: "sub";
    readonly Gt: "gt";
    readonly Gte: "gte";
    readonly Lt: "lt";
    readonly Lte: "lte";
};
export type UpdateFirewallConfigRequestBodyOp = ClosedEnum<typeof UpdateFirewallConfigRequestBodyOp>;
export type UpdateFirewallConfigRequestBodySecurityRequest3Value = string | Array<string> | number;
export type UpdateFirewallConfigRequestBodyConditions = {
    type: UpdateFirewallConfigRequestBodySecurityType;
    op: UpdateFirewallConfigRequestBodyOp;
    neg?: boolean | undefined;
    key?: string | undefined;
    value?: string | Array<string> | number | undefined;
};
export type UpdateFirewallConfigRequestBodyConditionGroup = {
    conditions: Array<UpdateFirewallConfigRequestBodyConditions>;
};
export declare const UpdateFirewallConfigRequestBodySecurityRequest3ValueAction: {
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly Deny: "deny";
    readonly Bypass: "bypass";
    readonly RateLimit: "rate_limit";
    readonly Redirect: "redirect";
};
export type UpdateFirewallConfigRequestBodySecurityRequest3ValueAction = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest3ValueAction>;
export declare const UpdateFirewallConfigRateLimitAlgo: {
    readonly FixedWindow: "fixed_window";
    readonly TokenBucket: "token_bucket";
};
export type UpdateFirewallConfigRateLimitAlgo = ClosedEnum<typeof UpdateFirewallConfigRateLimitAlgo>;
export declare const UpdateFirewallConfigActionSecurity1: {
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly Deny: "deny";
    readonly RateLimit: "rate_limit";
};
export type UpdateFirewallConfigActionSecurity1 = ClosedEnum<typeof UpdateFirewallConfigActionSecurity1>;
export type UpdateFirewallConfigRateLimitSecurityAction = UpdateFirewallConfigActionSecurity1 | any;
export type UpdateFirewallConfigRateLimitSecurity1 = {
    algo: UpdateFirewallConfigRateLimitAlgo;
    window: number;
    limit: number;
    keys: Array<string>;
    action?: UpdateFirewallConfigActionSecurity1 | any | null | undefined;
};
export type UpdateFirewallConfigRequestBodyRateLimit = UpdateFirewallConfigRateLimitSecurity1 | any;
export type UpdateFirewallConfigRedirectSecurity1 = {
    location: string;
    permanent: boolean;
};
export type UpdateFirewallConfigRequestBodyRedirect = UpdateFirewallConfigRedirectSecurity1 | any;
export type RequestBodyLogHeaders = string | Array<string>;
export type UpdateFirewallConfigRequestBodyMitigate = {
    action: UpdateFirewallConfigRequestBodySecurityRequest3ValueAction;
    rateLimit?: UpdateFirewallConfigRateLimitSecurity1 | any | null | undefined;
    redirect?: UpdateFirewallConfigRedirectSecurity1 | any | null | undefined;
    actionDuration?: string | null | undefined;
    bypassSystem?: boolean | null | undefined;
    logHeaders?: string | Array<string> | undefined;
};
export type UpdateFirewallConfigRequestBodySecurityRequest3Action = {
    mitigate?: UpdateFirewallConfigRequestBodyMitigate | undefined;
};
export type UpdateFirewallConfigRequestBodyValidationErrors = Array<string> | string;
export type UpdateFirewallConfigRequestBodyValue = {
    name: string;
    description?: string | undefined;
    active: boolean;
    conditionGroup: Array<UpdateFirewallConfigRequestBodyConditionGroup>;
    action: UpdateFirewallConfigRequestBodySecurityRequest3Action;
    valid?: boolean | undefined;
    validationErrors?: Array<string> | string | undefined;
};
/**
 * Update a custom rule
 */
export type UpdateFirewallConfigRequestBody3 = {
    action: UpdateFirewallConfigRequestBodySecurityRequestAction;
    id: string;
    value: UpdateFirewallConfigRequestBodyValue;
};
export declare const UpdateFirewallConfigRequestBodySecurityAction: {
    readonly RulesInsert: "rules.insert";
};
export type UpdateFirewallConfigRequestBodySecurityAction = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityAction>;
export declare const UpdateFirewallConfigRequestBodyType: {
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
    readonly Region: "region";
    readonly Protocol: "protocol";
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
export type UpdateFirewallConfigRequestBodyType = ClosedEnum<typeof UpdateFirewallConfigRequestBodyType>;
export declare const RequestBodyOp: {
    readonly Re: "re";
    readonly Eq: "eq";
    readonly Neq: "neq";
    readonly Ex: "ex";
    readonly Nex: "nex";
    readonly Inc: "inc";
    readonly Ninc: "ninc";
    readonly Pre: "pre";
    readonly Suf: "suf";
    readonly Sub: "sub";
    readonly Gt: "gt";
    readonly Gte: "gte";
    readonly Lt: "lt";
    readonly Lte: "lte";
};
export type RequestBodyOp = ClosedEnum<typeof RequestBodyOp>;
export type UpdateFirewallConfigRequestBodySecurityRequest2Value = string | Array<string> | number;
export type RequestBodyConditions = {
    type: UpdateFirewallConfigRequestBodyType;
    op: RequestBodyOp;
    neg?: boolean | undefined;
    key?: string | undefined;
    value?: string | Array<string> | number | undefined;
};
export type RequestBodyConditionGroup = {
    conditions: Array<RequestBodyConditions>;
};
export declare const UpdateFirewallConfigRequestBodySecurityRequest2ValueAction: {
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly Deny: "deny";
    readonly Bypass: "bypass";
    readonly RateLimit: "rate_limit";
    readonly Redirect: "redirect";
};
export type UpdateFirewallConfigRequestBodySecurityRequest2ValueAction = ClosedEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest2ValueAction>;
export declare const RateLimitAlgo: {
    readonly FixedWindow: "fixed_window";
    readonly TokenBucket: "token_bucket";
};
export type RateLimitAlgo = ClosedEnum<typeof RateLimitAlgo>;
export declare const UpdateFirewallConfigAction1: {
    readonly Log: "log";
    readonly Challenge: "challenge";
    readonly Deny: "deny";
    readonly RateLimit: "rate_limit";
};
export type UpdateFirewallConfigAction1 = ClosedEnum<typeof UpdateFirewallConfigAction1>;
export type UpdateFirewallConfigRateLimitAction = UpdateFirewallConfigAction1 | any;
export type UpdateFirewallConfigRateLimit1 = {
    algo: RateLimitAlgo;
    window: number;
    limit: number;
    keys: Array<string>;
    action?: UpdateFirewallConfigAction1 | any | null | undefined;
};
export type RequestBodyRateLimit = UpdateFirewallConfigRateLimit1 | any;
export type UpdateFirewallConfigRedirect1 = {
    location: string;
    permanent: boolean;
};
export type RequestBodyRedirect = UpdateFirewallConfigRedirect1 | any;
export type LogHeaders = string | Array<string>;
export type RequestBodyMitigate = {
    action: UpdateFirewallConfigRequestBodySecurityRequest2ValueAction;
    rateLimit?: UpdateFirewallConfigRateLimit1 | any | null | undefined;
    redirect?: UpdateFirewallConfigRedirect1 | any | null | undefined;
    actionDuration?: string | null | undefined;
    bypassSystem?: boolean | null | undefined;
    logHeaders?: string | Array<string> | undefined;
};
export type UpdateFirewallConfigRequestBodySecurityRequest2Action = {
    mitigate?: RequestBodyMitigate | undefined;
};
export type RequestBodyValidationErrors = Array<string> | string;
export type RequestBodyValue = {
    name: string;
    description?: string | undefined;
    active: boolean;
    conditionGroup: Array<RequestBodyConditionGroup>;
    action: UpdateFirewallConfigRequestBodySecurityRequest2Action;
    valid?: boolean | undefined;
    validationErrors?: Array<string> | string | undefined;
};
/**
 * Add a custom rule
 */
export type UpdateFirewallConfigRequestBody2 = {
    action: UpdateFirewallConfigRequestBodySecurityAction;
    id?: any | null | undefined;
    value: RequestBodyValue;
};
export declare const UpdateFirewallConfigRequestBodyAction: {
    readonly FirewallEnabled: "firewallEnabled";
};
export type UpdateFirewallConfigRequestBodyAction = ClosedEnum<typeof UpdateFirewallConfigRequestBodyAction>;
/**
 * Enable Firewall
 */
export type UpdateFirewallConfigRequestBody1 = {
    action: UpdateFirewallConfigRequestBodyAction;
    id?: any | null | undefined;
    value: boolean;
};
export type UpdateFirewallConfigRequestBody = UpdateFirewallConfigRequestBody3 | UpdateFirewallConfigRequestBody5 | UpdateFirewallConfigRequestBody6 | UpdateFirewallConfigRequestBody9 | RequestBody11 | RequestBody12 | UpdateFirewallConfigRequestBody1 | UpdateFirewallConfigRequestBody2 | UpdateFirewallConfigRequestBody4 | UpdateFirewallConfigRequestBody8 | UpdateFirewallConfigRequestBody10 | RequestBody13 | UpdateFirewallConfigRequestBody7;
export type UpdateFirewallConfigRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: UpdateFirewallConfigRequestBody3 | UpdateFirewallConfigRequestBody5 | UpdateFirewallConfigRequestBody6 | UpdateFirewallConfigRequestBody9 | RequestBody11 | RequestBody12 | UpdateFirewallConfigRequestBody1 | UpdateFirewallConfigRequestBody2 | UpdateFirewallConfigRequestBody4 | UpdateFirewallConfigRequestBody8 | UpdateFirewallConfigRequestBody10 | RequestBody13 | UpdateFirewallConfigRequestBody7;
};
export type UpdateFirewallConfigResponseBody = {};
/** @internal */
export declare const RequestBody13$inboundSchema: z.ZodType<RequestBody13, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody13$Outbound = {
    action: string;
    id?: string | undefined;
    value: boolean;
};
/** @internal */
export declare const RequestBody13$outboundSchema: z.ZodType<RequestBody13$Outbound, z.ZodTypeDef, RequestBody13>;
export declare function requestBody13ToJSON(requestBody13: RequestBody13): string;
export declare function requestBody13FromJSON(jsonString: string): SafeParseResult<RequestBody13, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyId$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodyId>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyId$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodyId>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest12Action$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest12Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest12Action$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest12Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest12Value$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest12Value, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodySecurityRequest12Value$Outbound = {
    active: boolean;
    action?: string | undefined;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest12Value$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest12Value$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodySecurityRequest12Value>;
export declare function updateFirewallConfigRequestBodySecurityRequest12ValueToJSON(updateFirewallConfigRequestBodySecurityRequest12Value: UpdateFirewallConfigRequestBodySecurityRequest12Value): string;
export declare function updateFirewallConfigRequestBodySecurityRequest12ValueFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodySecurityRequest12Value, SDKValidationError>;
/** @internal */
export declare const RequestBody12$inboundSchema: z.ZodType<RequestBody12, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody12$Outbound = {
    action: string;
    id: string;
    value: {
        [k: string]: UpdateFirewallConfigRequestBodySecurityRequest12Value$Outbound;
    };
};
/** @internal */
export declare const RequestBody12$outboundSchema: z.ZodType<RequestBody12$Outbound, z.ZodTypeDef, RequestBody12>;
export declare function requestBody12ToJSON(requestBody12: RequestBody12): string;
export declare function requestBody12FromJSON(jsonString: string): SafeParseResult<RequestBody12, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest11Action$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest11Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest11Action$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest11Action>;
/** @internal */
export declare const RequestBodyId$inboundSchema: z.ZodNativeEnum<typeof RequestBodyId>;
/** @internal */
export declare const RequestBodyId$outboundSchema: z.ZodNativeEnum<typeof RequestBodyId>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest11ValueAction$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest11ValueAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest11ValueAction$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest11ValueAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest11Value$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest11Value, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodySecurityRequest11Value$Outbound = {
    action?: string | undefined;
    active: boolean;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest11Value$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest11Value$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodySecurityRequest11Value>;
export declare function updateFirewallConfigRequestBodySecurityRequest11ValueToJSON(updateFirewallConfigRequestBodySecurityRequest11Value: UpdateFirewallConfigRequestBodySecurityRequest11Value): string;
export declare function updateFirewallConfigRequestBodySecurityRequest11ValueFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodySecurityRequest11Value, SDKValidationError>;
/** @internal */
export declare const RequestBody11$inboundSchema: z.ZodType<RequestBody11, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody11$Outbound = {
    action: string;
    id: string;
    value: UpdateFirewallConfigRequestBodySecurityRequest11Value$Outbound;
};
/** @internal */
export declare const RequestBody11$outboundSchema: z.ZodType<RequestBody11$Outbound, z.ZodTypeDef, RequestBody11>;
export declare function requestBody11ToJSON(requestBody11: RequestBody11): string;
export declare function requestBody11FromJSON(jsonString: string): SafeParseResult<RequestBody11, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest10Action$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest10Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest10Action$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest10Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBody10$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBody10, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBody10$Outbound = {
    action: string;
    id: string;
    value?: any | null | undefined;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBody10$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBody10$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBody10>;
export declare function updateFirewallConfigRequestBody10ToJSON(updateFirewallConfigRequestBody10: UpdateFirewallConfigRequestBody10): string;
export declare function updateFirewallConfigRequestBody10FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBody10, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest9Action$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest9Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest9Action$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest9Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest9ValueAction$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest9ValueAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest9ValueAction$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest9ValueAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest9Value$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest9Value, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodySecurityRequest9Value$Outbound = {
    hostname: string;
    ip: string;
    notes?: string | undefined;
    action: string;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest9Value$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest9Value$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodySecurityRequest9Value>;
export declare function updateFirewallConfigRequestBodySecurityRequest9ValueToJSON(updateFirewallConfigRequestBodySecurityRequest9Value: UpdateFirewallConfigRequestBodySecurityRequest9Value): string;
export declare function updateFirewallConfigRequestBodySecurityRequest9ValueFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodySecurityRequest9Value, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBody9$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBody9, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBody9$Outbound = {
    action: string;
    id: string;
    value: UpdateFirewallConfigRequestBodySecurityRequest9Value$Outbound;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBody9$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBody9$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBody9>;
export declare function updateFirewallConfigRequestBody9ToJSON(updateFirewallConfigRequestBody9: UpdateFirewallConfigRequestBody9): string;
export declare function updateFirewallConfigRequestBody9FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBody9, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest8Action$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest8Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest8Action$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest8Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest8ValueAction$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest8ValueAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest8ValueAction$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest8ValueAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequestValue$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequestValue, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodySecurityRequestValue$Outbound = {
    hostname: string;
    ip: string;
    notes?: string | undefined;
    action: string;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequestValue$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequestValue$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodySecurityRequestValue>;
export declare function updateFirewallConfigRequestBodySecurityRequestValueToJSON(updateFirewallConfigRequestBodySecurityRequestValue: UpdateFirewallConfigRequestBodySecurityRequestValue): string;
export declare function updateFirewallConfigRequestBodySecurityRequestValueFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodySecurityRequestValue, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBody8$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBody8, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBody8$Outbound = {
    action: string;
    id?: any | null | undefined;
    value: UpdateFirewallConfigRequestBodySecurityRequestValue$Outbound;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBody8$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBody8$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBody8>;
export declare function updateFirewallConfigRequestBody8ToJSON(updateFirewallConfigRequestBody8: UpdateFirewallConfigRequestBody8): string;
export declare function updateFirewallConfigRequestBody8FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBody8, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest7Action$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest7Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest7Action$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest7Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBody7$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBody7, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBody7$Outbound = {
    action: string;
    id?: any | null | undefined;
    value?: any | null | undefined;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBody7$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBody7$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBody7>;
export declare function updateFirewallConfigRequestBody7ToJSON(updateFirewallConfigRequestBody7: UpdateFirewallConfigRequestBody7): string;
export declare function updateFirewallConfigRequestBody7FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBody7, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest6Action$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest6Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest6Action$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest6Action>;
/** @internal */
export declare const Id$inboundSchema: z.ZodNativeEnum<typeof Id>;
/** @internal */
export declare const Id$outboundSchema: z.ZodNativeEnum<typeof Id>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest6ValueAction$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest6ValueAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest6ValueAction$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest6ValueAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityValue$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityValue, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodySecurityValue$Outbound = {
    active: boolean;
    action: string;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityValue$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityValue$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodySecurityValue>;
export declare function updateFirewallConfigRequestBodySecurityValueToJSON(updateFirewallConfigRequestBodySecurityValue: UpdateFirewallConfigRequestBodySecurityValue): string;
export declare function updateFirewallConfigRequestBodySecurityValueFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodySecurityValue, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBody6$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBody6, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBody6$Outbound = {
    action: string;
    id: string;
    value: UpdateFirewallConfigRequestBodySecurityValue$Outbound;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBody6$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBody6$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBody6>;
export declare function updateFirewallConfigRequestBody6ToJSON(updateFirewallConfigRequestBody6: UpdateFirewallConfigRequestBody6): string;
export declare function updateFirewallConfigRequestBody6FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBody6, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest5Action$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest5Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest5Action$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest5Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBody5$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBody5, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBody5$Outbound = {
    action: string;
    id: string;
    value: number;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBody5$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBody5$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBody5>;
export declare function updateFirewallConfigRequestBody5ToJSON(updateFirewallConfigRequestBody5: UpdateFirewallConfigRequestBody5): string;
export declare function updateFirewallConfigRequestBody5FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBody5, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest4Action$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest4Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest4Action$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest4Action>;
/** @internal */
export declare const UpdateFirewallConfigRequestBody4$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBody4, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBody4$Outbound = {
    action: string;
    id: string;
    value?: any | null | undefined;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBody4$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBody4$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBody4>;
export declare function updateFirewallConfigRequestBody4ToJSON(updateFirewallConfigRequestBody4: UpdateFirewallConfigRequestBody4): string;
export declare function updateFirewallConfigRequestBody4FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBody4, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequestAction$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequestAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequestAction$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequestAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityType$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityType>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityType$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityType>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyOp$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodyOp>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyOp$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodyOp>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest3Value$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest3Value, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodySecurityRequest3Value$Outbound = string | Array<string> | number;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest3Value$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest3Value$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodySecurityRequest3Value>;
export declare function updateFirewallConfigRequestBodySecurityRequest3ValueToJSON(updateFirewallConfigRequestBodySecurityRequest3Value: UpdateFirewallConfigRequestBodySecurityRequest3Value): string;
export declare function updateFirewallConfigRequestBodySecurityRequest3ValueFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodySecurityRequest3Value, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyConditions$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodyConditions$Outbound = {
    type: string;
    op: string;
    neg?: boolean | undefined;
    key?: string | undefined;
    value?: string | Array<string> | number | undefined;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBodyConditions$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyConditions$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodyConditions>;
export declare function updateFirewallConfigRequestBodyConditionsToJSON(updateFirewallConfigRequestBodyConditions: UpdateFirewallConfigRequestBodyConditions): string;
export declare function updateFirewallConfigRequestBodyConditionsFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodyConditions, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyConditionGroup$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyConditionGroup, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodyConditionGroup$Outbound = {
    conditions: Array<UpdateFirewallConfigRequestBodyConditions$Outbound>;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBodyConditionGroup$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyConditionGroup$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodyConditionGroup>;
export declare function updateFirewallConfigRequestBodyConditionGroupToJSON(updateFirewallConfigRequestBodyConditionGroup: UpdateFirewallConfigRequestBodyConditionGroup): string;
export declare function updateFirewallConfigRequestBodyConditionGroupFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodyConditionGroup, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest3ValueAction$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest3ValueAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest3ValueAction$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest3ValueAction>;
/** @internal */
export declare const UpdateFirewallConfigRateLimitAlgo$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRateLimitAlgo>;
/** @internal */
export declare const UpdateFirewallConfigRateLimitAlgo$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRateLimitAlgo>;
/** @internal */
export declare const UpdateFirewallConfigActionSecurity1$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigActionSecurity1>;
/** @internal */
export declare const UpdateFirewallConfigActionSecurity1$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigActionSecurity1>;
/** @internal */
export declare const UpdateFirewallConfigRateLimitSecurityAction$inboundSchema: z.ZodType<UpdateFirewallConfigRateLimitSecurityAction, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRateLimitSecurityAction$Outbound = string | any;
/** @internal */
export declare const UpdateFirewallConfigRateLimitSecurityAction$outboundSchema: z.ZodType<UpdateFirewallConfigRateLimitSecurityAction$Outbound, z.ZodTypeDef, UpdateFirewallConfigRateLimitSecurityAction>;
export declare function updateFirewallConfigRateLimitSecurityActionToJSON(updateFirewallConfigRateLimitSecurityAction: UpdateFirewallConfigRateLimitSecurityAction): string;
export declare function updateFirewallConfigRateLimitSecurityActionFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRateLimitSecurityAction, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRateLimitSecurity1$inboundSchema: z.ZodType<UpdateFirewallConfigRateLimitSecurity1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRateLimitSecurity1$Outbound = {
    algo: string;
    window: number;
    limit: number;
    keys: Array<string>;
    action?: string | any | null | undefined;
};
/** @internal */
export declare const UpdateFirewallConfigRateLimitSecurity1$outboundSchema: z.ZodType<UpdateFirewallConfigRateLimitSecurity1$Outbound, z.ZodTypeDef, UpdateFirewallConfigRateLimitSecurity1>;
export declare function updateFirewallConfigRateLimitSecurity1ToJSON(updateFirewallConfigRateLimitSecurity1: UpdateFirewallConfigRateLimitSecurity1): string;
export declare function updateFirewallConfigRateLimitSecurity1FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRateLimitSecurity1, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyRateLimit$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyRateLimit, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodyRateLimit$Outbound = UpdateFirewallConfigRateLimitSecurity1$Outbound | any;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyRateLimit$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyRateLimit$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodyRateLimit>;
export declare function updateFirewallConfigRequestBodyRateLimitToJSON(updateFirewallConfigRequestBodyRateLimit: UpdateFirewallConfigRequestBodyRateLimit): string;
export declare function updateFirewallConfigRequestBodyRateLimitFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodyRateLimit, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRedirectSecurity1$inboundSchema: z.ZodType<UpdateFirewallConfigRedirectSecurity1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRedirectSecurity1$Outbound = {
    location: string;
    permanent: boolean;
};
/** @internal */
export declare const UpdateFirewallConfigRedirectSecurity1$outboundSchema: z.ZodType<UpdateFirewallConfigRedirectSecurity1$Outbound, z.ZodTypeDef, UpdateFirewallConfigRedirectSecurity1>;
export declare function updateFirewallConfigRedirectSecurity1ToJSON(updateFirewallConfigRedirectSecurity1: UpdateFirewallConfigRedirectSecurity1): string;
export declare function updateFirewallConfigRedirectSecurity1FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRedirectSecurity1, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyRedirect$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyRedirect, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodyRedirect$Outbound = UpdateFirewallConfigRedirectSecurity1$Outbound | any;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyRedirect$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyRedirect$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodyRedirect>;
export declare function updateFirewallConfigRequestBodyRedirectToJSON(updateFirewallConfigRequestBodyRedirect: UpdateFirewallConfigRequestBodyRedirect): string;
export declare function updateFirewallConfigRequestBodyRedirectFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodyRedirect, SDKValidationError>;
/** @internal */
export declare const RequestBodyLogHeaders$inboundSchema: z.ZodType<RequestBodyLogHeaders, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyLogHeaders$Outbound = string | Array<string>;
/** @internal */
export declare const RequestBodyLogHeaders$outboundSchema: z.ZodType<RequestBodyLogHeaders$Outbound, z.ZodTypeDef, RequestBodyLogHeaders>;
export declare function requestBodyLogHeadersToJSON(requestBodyLogHeaders: RequestBodyLogHeaders): string;
export declare function requestBodyLogHeadersFromJSON(jsonString: string): SafeParseResult<RequestBodyLogHeaders, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyMitigate$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyMitigate, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodyMitigate$Outbound = {
    action: string;
    rateLimit?: UpdateFirewallConfigRateLimitSecurity1$Outbound | any | null | undefined;
    redirect?: UpdateFirewallConfigRedirectSecurity1$Outbound | any | null | undefined;
    actionDuration?: string | null | undefined;
    bypassSystem?: boolean | null | undefined;
    logHeaders?: string | Array<string> | undefined;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBodyMitigate$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyMitigate$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodyMitigate>;
export declare function updateFirewallConfigRequestBodyMitigateToJSON(updateFirewallConfigRequestBodyMitigate: UpdateFirewallConfigRequestBodyMitigate): string;
export declare function updateFirewallConfigRequestBodyMitigateFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodyMitigate, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest3Action$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest3Action, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodySecurityRequest3Action$Outbound = {
    mitigate?: UpdateFirewallConfigRequestBodyMitigate$Outbound | undefined;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest3Action$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest3Action$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodySecurityRequest3Action>;
export declare function updateFirewallConfigRequestBodySecurityRequest3ActionToJSON(updateFirewallConfigRequestBodySecurityRequest3Action: UpdateFirewallConfigRequestBodySecurityRequest3Action): string;
export declare function updateFirewallConfigRequestBodySecurityRequest3ActionFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodySecurityRequest3Action, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyValidationErrors$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyValidationErrors, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodyValidationErrors$Outbound = Array<string> | string;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyValidationErrors$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyValidationErrors$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodyValidationErrors>;
export declare function updateFirewallConfigRequestBodyValidationErrorsToJSON(updateFirewallConfigRequestBodyValidationErrors: UpdateFirewallConfigRequestBodyValidationErrors): string;
export declare function updateFirewallConfigRequestBodyValidationErrorsFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodyValidationErrors, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyValue$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyValue, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodyValue$Outbound = {
    name: string;
    description?: string | undefined;
    active: boolean;
    conditionGroup: Array<UpdateFirewallConfigRequestBodyConditionGroup$Outbound>;
    action: UpdateFirewallConfigRequestBodySecurityRequest3Action$Outbound;
    valid?: boolean | undefined;
    validationErrors?: Array<string> | string | undefined;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBodyValue$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodyValue$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodyValue>;
export declare function updateFirewallConfigRequestBodyValueToJSON(updateFirewallConfigRequestBodyValue: UpdateFirewallConfigRequestBodyValue): string;
export declare function updateFirewallConfigRequestBodyValueFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodyValue, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBody3$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBody3$Outbound = {
    action: string;
    id: string;
    value: UpdateFirewallConfigRequestBodyValue$Outbound;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBody3$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBody3$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBody3>;
export declare function updateFirewallConfigRequestBody3ToJSON(updateFirewallConfigRequestBody3: UpdateFirewallConfigRequestBody3): string;
export declare function updateFirewallConfigRequestBody3FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBody3, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityAction$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityAction$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyType$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodyType>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyType$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodyType>;
/** @internal */
export declare const RequestBodyOp$inboundSchema: z.ZodNativeEnum<typeof RequestBodyOp>;
/** @internal */
export declare const RequestBodyOp$outboundSchema: z.ZodNativeEnum<typeof RequestBodyOp>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest2Value$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest2Value, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodySecurityRequest2Value$Outbound = string | Array<string> | number;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest2Value$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest2Value$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodySecurityRequest2Value>;
export declare function updateFirewallConfigRequestBodySecurityRequest2ValueToJSON(updateFirewallConfigRequestBodySecurityRequest2Value: UpdateFirewallConfigRequestBodySecurityRequest2Value): string;
export declare function updateFirewallConfigRequestBodySecurityRequest2ValueFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodySecurityRequest2Value, SDKValidationError>;
/** @internal */
export declare const RequestBodyConditions$inboundSchema: z.ZodType<RequestBodyConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyConditions$Outbound = {
    type: string;
    op: string;
    neg?: boolean | undefined;
    key?: string | undefined;
    value?: string | Array<string> | number | undefined;
};
/** @internal */
export declare const RequestBodyConditions$outboundSchema: z.ZodType<RequestBodyConditions$Outbound, z.ZodTypeDef, RequestBodyConditions>;
export declare function requestBodyConditionsToJSON(requestBodyConditions: RequestBodyConditions): string;
export declare function requestBodyConditionsFromJSON(jsonString: string): SafeParseResult<RequestBodyConditions, SDKValidationError>;
/** @internal */
export declare const RequestBodyConditionGroup$inboundSchema: z.ZodType<RequestBodyConditionGroup, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyConditionGroup$Outbound = {
    conditions: Array<RequestBodyConditions$Outbound>;
};
/** @internal */
export declare const RequestBodyConditionGroup$outboundSchema: z.ZodType<RequestBodyConditionGroup$Outbound, z.ZodTypeDef, RequestBodyConditionGroup>;
export declare function requestBodyConditionGroupToJSON(requestBodyConditionGroup: RequestBodyConditionGroup): string;
export declare function requestBodyConditionGroupFromJSON(jsonString: string): SafeParseResult<RequestBodyConditionGroup, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest2ValueAction$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest2ValueAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest2ValueAction$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodySecurityRequest2ValueAction>;
/** @internal */
export declare const RateLimitAlgo$inboundSchema: z.ZodNativeEnum<typeof RateLimitAlgo>;
/** @internal */
export declare const RateLimitAlgo$outboundSchema: z.ZodNativeEnum<typeof RateLimitAlgo>;
/** @internal */
export declare const UpdateFirewallConfigAction1$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigAction1>;
/** @internal */
export declare const UpdateFirewallConfigAction1$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigAction1>;
/** @internal */
export declare const UpdateFirewallConfigRateLimitAction$inboundSchema: z.ZodType<UpdateFirewallConfigRateLimitAction, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRateLimitAction$Outbound = string | any;
/** @internal */
export declare const UpdateFirewallConfigRateLimitAction$outboundSchema: z.ZodType<UpdateFirewallConfigRateLimitAction$Outbound, z.ZodTypeDef, UpdateFirewallConfigRateLimitAction>;
export declare function updateFirewallConfigRateLimitActionToJSON(updateFirewallConfigRateLimitAction: UpdateFirewallConfigRateLimitAction): string;
export declare function updateFirewallConfigRateLimitActionFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRateLimitAction, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRateLimit1$inboundSchema: z.ZodType<UpdateFirewallConfigRateLimit1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRateLimit1$Outbound = {
    algo: string;
    window: number;
    limit: number;
    keys: Array<string>;
    action?: string | any | null | undefined;
};
/** @internal */
export declare const UpdateFirewallConfigRateLimit1$outboundSchema: z.ZodType<UpdateFirewallConfigRateLimit1$Outbound, z.ZodTypeDef, UpdateFirewallConfigRateLimit1>;
export declare function updateFirewallConfigRateLimit1ToJSON(updateFirewallConfigRateLimit1: UpdateFirewallConfigRateLimit1): string;
export declare function updateFirewallConfigRateLimit1FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRateLimit1, SDKValidationError>;
/** @internal */
export declare const RequestBodyRateLimit$inboundSchema: z.ZodType<RequestBodyRateLimit, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyRateLimit$Outbound = UpdateFirewallConfigRateLimit1$Outbound | any;
/** @internal */
export declare const RequestBodyRateLimit$outboundSchema: z.ZodType<RequestBodyRateLimit$Outbound, z.ZodTypeDef, RequestBodyRateLimit>;
export declare function requestBodyRateLimitToJSON(requestBodyRateLimit: RequestBodyRateLimit): string;
export declare function requestBodyRateLimitFromJSON(jsonString: string): SafeParseResult<RequestBodyRateLimit, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRedirect1$inboundSchema: z.ZodType<UpdateFirewallConfigRedirect1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRedirect1$Outbound = {
    location: string;
    permanent: boolean;
};
/** @internal */
export declare const UpdateFirewallConfigRedirect1$outboundSchema: z.ZodType<UpdateFirewallConfigRedirect1$Outbound, z.ZodTypeDef, UpdateFirewallConfigRedirect1>;
export declare function updateFirewallConfigRedirect1ToJSON(updateFirewallConfigRedirect1: UpdateFirewallConfigRedirect1): string;
export declare function updateFirewallConfigRedirect1FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRedirect1, SDKValidationError>;
/** @internal */
export declare const RequestBodyRedirect$inboundSchema: z.ZodType<RequestBodyRedirect, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyRedirect$Outbound = UpdateFirewallConfigRedirect1$Outbound | any;
/** @internal */
export declare const RequestBodyRedirect$outboundSchema: z.ZodType<RequestBodyRedirect$Outbound, z.ZodTypeDef, RequestBodyRedirect>;
export declare function requestBodyRedirectToJSON(requestBodyRedirect: RequestBodyRedirect): string;
export declare function requestBodyRedirectFromJSON(jsonString: string): SafeParseResult<RequestBodyRedirect, SDKValidationError>;
/** @internal */
export declare const LogHeaders$inboundSchema: z.ZodType<LogHeaders, z.ZodTypeDef, unknown>;
/** @internal */
export type LogHeaders$Outbound = string | Array<string>;
/** @internal */
export declare const LogHeaders$outboundSchema: z.ZodType<LogHeaders$Outbound, z.ZodTypeDef, LogHeaders>;
export declare function logHeadersToJSON(logHeaders: LogHeaders): string;
export declare function logHeadersFromJSON(jsonString: string): SafeParseResult<LogHeaders, SDKValidationError>;
/** @internal */
export declare const RequestBodyMitigate$inboundSchema: z.ZodType<RequestBodyMitigate, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyMitigate$Outbound = {
    action: string;
    rateLimit?: UpdateFirewallConfigRateLimit1$Outbound | any | null | undefined;
    redirect?: UpdateFirewallConfigRedirect1$Outbound | any | null | undefined;
    actionDuration?: string | null | undefined;
    bypassSystem?: boolean | null | undefined;
    logHeaders?: string | Array<string> | undefined;
};
/** @internal */
export declare const RequestBodyMitigate$outboundSchema: z.ZodType<RequestBodyMitigate$Outbound, z.ZodTypeDef, RequestBodyMitigate>;
export declare function requestBodyMitigateToJSON(requestBodyMitigate: RequestBodyMitigate): string;
export declare function requestBodyMitigateFromJSON(jsonString: string): SafeParseResult<RequestBodyMitigate, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest2Action$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest2Action, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBodySecurityRequest2Action$Outbound = {
    mitigate?: RequestBodyMitigate$Outbound | undefined;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBodySecurityRequest2Action$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBodySecurityRequest2Action$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBodySecurityRequest2Action>;
export declare function updateFirewallConfigRequestBodySecurityRequest2ActionToJSON(updateFirewallConfigRequestBodySecurityRequest2Action: UpdateFirewallConfigRequestBodySecurityRequest2Action): string;
export declare function updateFirewallConfigRequestBodySecurityRequest2ActionFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBodySecurityRequest2Action, SDKValidationError>;
/** @internal */
export declare const RequestBodyValidationErrors$inboundSchema: z.ZodType<RequestBodyValidationErrors, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyValidationErrors$Outbound = Array<string> | string;
/** @internal */
export declare const RequestBodyValidationErrors$outboundSchema: z.ZodType<RequestBodyValidationErrors$Outbound, z.ZodTypeDef, RequestBodyValidationErrors>;
export declare function requestBodyValidationErrorsToJSON(requestBodyValidationErrors: RequestBodyValidationErrors): string;
export declare function requestBodyValidationErrorsFromJSON(jsonString: string): SafeParseResult<RequestBodyValidationErrors, SDKValidationError>;
/** @internal */
export declare const RequestBodyValue$inboundSchema: z.ZodType<RequestBodyValue, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBodyValue$Outbound = {
    name: string;
    description?: string | undefined;
    active: boolean;
    conditionGroup: Array<RequestBodyConditionGroup$Outbound>;
    action: UpdateFirewallConfigRequestBodySecurityRequest2Action$Outbound;
    valid?: boolean | undefined;
    validationErrors?: Array<string> | string | undefined;
};
/** @internal */
export declare const RequestBodyValue$outboundSchema: z.ZodType<RequestBodyValue$Outbound, z.ZodTypeDef, RequestBodyValue>;
export declare function requestBodyValueToJSON(requestBodyValue: RequestBodyValue): string;
export declare function requestBodyValueFromJSON(jsonString: string): SafeParseResult<RequestBodyValue, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBody2$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBody2$Outbound = {
    action: string;
    id?: any | null | undefined;
    value: RequestBodyValue$Outbound;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBody2$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBody2$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBody2>;
export declare function updateFirewallConfigRequestBody2ToJSON(updateFirewallConfigRequestBody2: UpdateFirewallConfigRequestBody2): string;
export declare function updateFirewallConfigRequestBody2FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBody2, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyAction$inboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodyAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBodyAction$outboundSchema: z.ZodNativeEnum<typeof UpdateFirewallConfigRequestBodyAction>;
/** @internal */
export declare const UpdateFirewallConfigRequestBody1$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBody1$Outbound = {
    action: string;
    id?: any | null | undefined;
    value: boolean;
};
/** @internal */
export declare const UpdateFirewallConfigRequestBody1$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBody1$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBody1>;
export declare function updateFirewallConfigRequestBody1ToJSON(updateFirewallConfigRequestBody1: UpdateFirewallConfigRequestBody1): string;
export declare function updateFirewallConfigRequestBody1FromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBody1, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequestBody$inboundSchema: z.ZodType<UpdateFirewallConfigRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequestBody$Outbound = UpdateFirewallConfigRequestBody3$Outbound | UpdateFirewallConfigRequestBody5$Outbound | UpdateFirewallConfigRequestBody6$Outbound | UpdateFirewallConfigRequestBody9$Outbound | RequestBody11$Outbound | RequestBody12$Outbound | UpdateFirewallConfigRequestBody1$Outbound | UpdateFirewallConfigRequestBody2$Outbound | UpdateFirewallConfigRequestBody4$Outbound | UpdateFirewallConfigRequestBody8$Outbound | UpdateFirewallConfigRequestBody10$Outbound | RequestBody13$Outbound | UpdateFirewallConfigRequestBody7$Outbound;
/** @internal */
export declare const UpdateFirewallConfigRequestBody$outboundSchema: z.ZodType<UpdateFirewallConfigRequestBody$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequestBody>;
export declare function updateFirewallConfigRequestBodyToJSON(updateFirewallConfigRequestBody: UpdateFirewallConfigRequestBody): string;
export declare function updateFirewallConfigRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigRequest$inboundSchema: z.ZodType<UpdateFirewallConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: UpdateFirewallConfigRequestBody3$Outbound | UpdateFirewallConfigRequestBody5$Outbound | UpdateFirewallConfigRequestBody6$Outbound | UpdateFirewallConfigRequestBody9$Outbound | RequestBody11$Outbound | RequestBody12$Outbound | UpdateFirewallConfigRequestBody1$Outbound | UpdateFirewallConfigRequestBody2$Outbound | UpdateFirewallConfigRequestBody4$Outbound | UpdateFirewallConfigRequestBody8$Outbound | UpdateFirewallConfigRequestBody10$Outbound | RequestBody13$Outbound | UpdateFirewallConfigRequestBody7$Outbound;
};
/** @internal */
export declare const UpdateFirewallConfigRequest$outboundSchema: z.ZodType<UpdateFirewallConfigRequest$Outbound, z.ZodTypeDef, UpdateFirewallConfigRequest>;
export declare function updateFirewallConfigRequestToJSON(updateFirewallConfigRequest: UpdateFirewallConfigRequest): string;
export declare function updateFirewallConfigRequestFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigRequest, SDKValidationError>;
/** @internal */
export declare const UpdateFirewallConfigResponseBody$inboundSchema: z.ZodType<UpdateFirewallConfigResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFirewallConfigResponseBody$Outbound = {};
/** @internal */
export declare const UpdateFirewallConfigResponseBody$outboundSchema: z.ZodType<UpdateFirewallConfigResponseBody$Outbound, z.ZodTypeDef, UpdateFirewallConfigResponseBody>;
export declare function updateFirewallConfigResponseBodyToJSON(updateFirewallConfigResponseBody: UpdateFirewallConfigResponseBody): string;
export declare function updateFirewallConfigResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateFirewallConfigResponseBody, SDKValidationError>;
//# sourceMappingURL=updatefirewallconfigop.d.ts.map