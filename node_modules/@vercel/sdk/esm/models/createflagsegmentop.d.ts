import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type CreateFlagSegmentLhs2 = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
export type CreateFlagSegmentLhs1 = {
    type?: any | undefined;
};
export type CreateFlagSegmentLhs = CreateFlagSegmentLhs2 | CreateFlagSegmentLhs1;
export declare const CreateFlagSegmentCmp: {
    readonly Eq: "eq";
    readonly NotEq: "!eq";
    readonly OneOf: "oneOf";
    readonly NotOneOf: "!oneOf";
    readonly ContainsAllOf: "containsAllOf";
    readonly ContainsAnyOf: "containsAnyOf";
    readonly ContainsNoneOf: "containsNoneOf";
    readonly StartsWith: "startsWith";
    readonly NotStartsWith: "!startsWith";
    readonly EndsWith: "endsWith";
    readonly NotEndsWith: "!endsWith";
    readonly Ex: "ex";
    readonly NotEx: "!ex";
    readonly Gt: "gt";
    readonly Gte: "gte";
    readonly Lt: "lt";
    readonly Lte: "lte";
    readonly Regex: "regex";
    readonly NotRegex: "!regex";
    readonly Before: "before";
    readonly After: "after";
};
export type CreateFlagSegmentCmp = ClosedEnum<typeof CreateFlagSegmentCmp>;
export type CreateFlagSegmentRhs2 = {
    type?: any | undefined;
    pattern: string;
    flags: string;
};
export declare const CreateFlagSegmentRhsType: {
    readonly ListInline: "list/inline";
    readonly List: "list";
};
export type CreateFlagSegmentRhsType = ClosedEnum<typeof CreateFlagSegmentRhsType>;
export type CreateFlagSegmentItems2 = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
export type CreateFlagSegmentItems1 = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
export type CreateFlagSegmentRhsItems = CreateFlagSegmentItems1 | CreateFlagSegmentItems2;
export type CreateFlagSegmentRhs1 = {
    type: CreateFlagSegmentRhsType;
    items: Array<CreateFlagSegmentItems1 | CreateFlagSegmentItems2>;
};
export type CreateFlagSegmentRhs = CreateFlagSegmentRhs2 | CreateFlagSegmentRhs1 | string | number | boolean;
export type CreateFlagSegmentConditions = {
    lhs: CreateFlagSegmentLhs2 | CreateFlagSegmentLhs1;
    cmp: CreateFlagSegmentCmp;
    rhs?: CreateFlagSegmentRhs2 | CreateFlagSegmentRhs1 | string | number | boolean | undefined;
};
export type CreateFlagSegmentOutcomeBase = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
export type CreateFlagSegmentOutcome2 = {
    type?: any | undefined;
    base: CreateFlagSegmentOutcomeBase;
    passPromille: number;
};
export type CreateFlagSegmentOutcome1 = {
    type?: any | undefined;
};
export type CreateFlagSegmentOutcome = CreateFlagSegmentOutcome2 | CreateFlagSegmentOutcome1;
export type CreateFlagSegmentRules = {
    id: string;
    conditions: Array<CreateFlagSegmentConditions>;
    outcome: CreateFlagSegmentOutcome2 | CreateFlagSegmentOutcome1;
};
export type CreateFlagSegmentInclude = {
    note?: string | undefined;
    value: string;
};
export type CreateFlagSegmentExclude = {
    note?: string | undefined;
    value: string;
};
/**
 * The data of the segment
 */
export type CreateFlagSegmentData = {
    rules?: Array<CreateFlagSegmentRules> | undefined;
    include?: {
        [k: string]: {
            [k: string]: Array<CreateFlagSegmentInclude>;
        };
    } | undefined;
    exclude?: {
        [k: string]: {
            [k: string]: Array<CreateFlagSegmentExclude>;
        };
    } | undefined;
};
export type CreateFlagSegmentRequestBody = {
    slug: string;
    /**
     * The entity who created the segment
     */
    createdBy?: string | undefined;
    label: string;
    description?: string | undefined;
    /**
     * The data of the segment
     */
    data: CreateFlagSegmentData;
    hint: string;
};
export type CreateFlagSegmentRequest = {
    /**
     * The project id or name
     */
    projectIdOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateFlagSegmentRequestBody | undefined;
};
export declare const CreateFlagSegmentTypeName: {
    readonly Segment: "segment";
};
export type CreateFlagSegmentTypeName = ClosedEnum<typeof CreateFlagSegmentTypeName>;
export declare const CreateFlagSegmentOutcomeFeatureFlagsResponseType: {
    readonly Entity: "entity";
};
export type CreateFlagSegmentOutcomeFeatureFlagsResponseType = ClosedEnum<typeof CreateFlagSegmentOutcomeFeatureFlagsResponseType>;
export type CreateFlagSegmentOutcomeFeatureFlagsBase = {
    type: CreateFlagSegmentOutcomeFeatureFlagsResponseType;
    kind: string;
    attribute: string;
};
export type CreateFlagSegmentOutcomeFeatureFlags2 = {
    type: "split";
    base: CreateFlagSegmentOutcomeFeatureFlagsBase;
    passPromille: number;
};
export type CreateFlagSegmentOutcomeFeatureFlags1 = {
    type: "all";
};
export type CreateFlagSegmentFeatureFlagsOutcome = CreateFlagSegmentOutcomeFeatureFlags1 | CreateFlagSegmentOutcomeFeatureFlags2;
export declare const CreateFlagSegmentRhsFeatureFlagsResponseType: {
    readonly Regex: "regex";
};
export type CreateFlagSegmentRhsFeatureFlagsResponseType = ClosedEnum<typeof CreateFlagSegmentRhsFeatureFlagsResponseType>;
export type CreateFlagSegmentRhs4 = {
    type: CreateFlagSegmentRhsFeatureFlagsResponseType;
    pattern: string;
    flags: string;
};
export declare const CreateFlagSegmentRhsFeatureFlagsType: {
    readonly ListInline: "list/inline";
    readonly List: "list";
};
export type CreateFlagSegmentRhsFeatureFlagsType = ClosedEnum<typeof CreateFlagSegmentRhsFeatureFlagsType>;
export type CreateFlagSegmentItemsFeatureFlags2 = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
export type CreateFlagSegmentItemsFeatureFlags1 = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
export type CreateFlagSegmentRhsFeatureFlagsItems = CreateFlagSegmentItemsFeatureFlags1 | CreateFlagSegmentItemsFeatureFlags2;
export type CreateFlagSegmentRhs3 = {
    type: CreateFlagSegmentRhsFeatureFlagsType;
    items: Array<CreateFlagSegmentItemsFeatureFlags1 | CreateFlagSegmentItemsFeatureFlags2>;
};
export type CreateFlagSegmentFeatureFlagsRhs = CreateFlagSegmentRhs4 | CreateFlagSegmentRhs3 | string | number | boolean;
export type CreateFlagSegmentLhsFeatureFlags2 = {
    type: "entity";
    kind: string;
    attribute: string;
};
export type CreateFlagSegmentLhsFeatureFlags1 = {
    type: "segment";
};
export type CreateFlagSegmentFeatureFlagsLhs = CreateFlagSegmentLhsFeatureFlags1 | CreateFlagSegmentLhsFeatureFlags2;
export declare const CreateFlagSegmentFeatureFlagsCmp: {
    readonly Eq: "eq";
    readonly NotEq: "!eq";
    readonly OneOf: "oneOf";
    readonly NotOneOf: "!oneOf";
    readonly ContainsAllOf: "containsAllOf";
    readonly ContainsAnyOf: "containsAnyOf";
    readonly ContainsNoneOf: "containsNoneOf";
    readonly StartsWith: "startsWith";
    readonly NotStartsWith: "!startsWith";
    readonly EndsWith: "endsWith";
    readonly NotEndsWith: "!endsWith";
    readonly Ex: "ex";
    readonly NotEx: "!ex";
    readonly Gt: "gt";
    readonly Gte: "gte";
    readonly Lt: "lt";
    readonly Lte: "lte";
    readonly Regex: "regex";
    readonly NotRegex: "!regex";
    readonly Before: "before";
    readonly After: "after";
};
export type CreateFlagSegmentFeatureFlagsCmp = ClosedEnum<typeof CreateFlagSegmentFeatureFlagsCmp>;
export type CreateFlagSegmentFeatureFlagsConditions = {
    rhs?: CreateFlagSegmentRhs4 | CreateFlagSegmentRhs3 | string | number | boolean | undefined;
    lhs: CreateFlagSegmentLhsFeatureFlags1 | CreateFlagSegmentLhsFeatureFlags2;
    cmp: CreateFlagSegmentFeatureFlagsCmp;
};
export type CreateFlagSegmentFeatureFlagsRules = {
    id: string;
    outcome: CreateFlagSegmentOutcomeFeatureFlags1 | CreateFlagSegmentOutcomeFeatureFlags2;
    conditions: Array<CreateFlagSegmentFeatureFlagsConditions>;
};
export type CreateFlagSegmentFeatureFlagsInclude = {
    note?: string | undefined;
    value: string;
};
export type CreateFlagSegmentFeatureFlagsExclude = {
    note?: string | undefined;
    value: string;
};
export type CreateFlagSegmentFeatureFlagsData = {
    rules?: Array<CreateFlagSegmentFeatureFlagsRules> | undefined;
    include?: {
        [k: string]: {
            [k: string]: Array<CreateFlagSegmentFeatureFlagsInclude>;
        };
    } | undefined;
    exclude?: {
        [k: string]: {
            [k: string]: Array<CreateFlagSegmentFeatureFlagsExclude>;
        };
    } | undefined;
};
export type CreateFlagSegmentResponseBody = {
    description?: string | undefined;
    createdBy?: string | undefined;
    usedByFlags?: Array<string> | undefined;
    usedBySegments?: Array<string> | undefined;
    id: string;
    label: string;
    slug: string;
    createdAt: number;
    updatedAt: number;
    projectId: string;
    typeName: CreateFlagSegmentTypeName;
    data: CreateFlagSegmentFeatureFlagsData;
    hint: string;
};
/** @internal */
export declare const CreateFlagSegmentLhs2$inboundSchema: z.ZodType<CreateFlagSegmentLhs2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentLhs2$Outbound = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const CreateFlagSegmentLhs2$outboundSchema: z.ZodType<CreateFlagSegmentLhs2$Outbound, z.ZodTypeDef, CreateFlagSegmentLhs2>;
export declare function createFlagSegmentLhs2ToJSON(createFlagSegmentLhs2: CreateFlagSegmentLhs2): string;
export declare function createFlagSegmentLhs2FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentLhs2, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentLhs1$inboundSchema: z.ZodType<CreateFlagSegmentLhs1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentLhs1$Outbound = {
    type?: any | undefined;
};
/** @internal */
export declare const CreateFlagSegmentLhs1$outboundSchema: z.ZodType<CreateFlagSegmentLhs1$Outbound, z.ZodTypeDef, CreateFlagSegmentLhs1>;
export declare function createFlagSegmentLhs1ToJSON(createFlagSegmentLhs1: CreateFlagSegmentLhs1): string;
export declare function createFlagSegmentLhs1FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentLhs1, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentLhs$inboundSchema: z.ZodType<CreateFlagSegmentLhs, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentLhs$Outbound = CreateFlagSegmentLhs2$Outbound | CreateFlagSegmentLhs1$Outbound;
/** @internal */
export declare const CreateFlagSegmentLhs$outboundSchema: z.ZodType<CreateFlagSegmentLhs$Outbound, z.ZodTypeDef, CreateFlagSegmentLhs>;
export declare function createFlagSegmentLhsToJSON(createFlagSegmentLhs: CreateFlagSegmentLhs): string;
export declare function createFlagSegmentLhsFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentLhs, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentCmp$inboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentCmp>;
/** @internal */
export declare const CreateFlagSegmentCmp$outboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentCmp>;
/** @internal */
export declare const CreateFlagSegmentRhs2$inboundSchema: z.ZodType<CreateFlagSegmentRhs2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentRhs2$Outbound = {
    type?: any | undefined;
    pattern: string;
    flags: string;
};
/** @internal */
export declare const CreateFlagSegmentRhs2$outboundSchema: z.ZodType<CreateFlagSegmentRhs2$Outbound, z.ZodTypeDef, CreateFlagSegmentRhs2>;
export declare function createFlagSegmentRhs2ToJSON(createFlagSegmentRhs2: CreateFlagSegmentRhs2): string;
export declare function createFlagSegmentRhs2FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentRhs2, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentRhsType$inboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentRhsType>;
/** @internal */
export declare const CreateFlagSegmentRhsType$outboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentRhsType>;
/** @internal */
export declare const CreateFlagSegmentItems2$inboundSchema: z.ZodType<CreateFlagSegmentItems2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentItems2$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const CreateFlagSegmentItems2$outboundSchema: z.ZodType<CreateFlagSegmentItems2$Outbound, z.ZodTypeDef, CreateFlagSegmentItems2>;
export declare function createFlagSegmentItems2ToJSON(createFlagSegmentItems2: CreateFlagSegmentItems2): string;
export declare function createFlagSegmentItems2FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentItems2, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentItems1$inboundSchema: z.ZodType<CreateFlagSegmentItems1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentItems1$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
/** @internal */
export declare const CreateFlagSegmentItems1$outboundSchema: z.ZodType<CreateFlagSegmentItems1$Outbound, z.ZodTypeDef, CreateFlagSegmentItems1>;
export declare function createFlagSegmentItems1ToJSON(createFlagSegmentItems1: CreateFlagSegmentItems1): string;
export declare function createFlagSegmentItems1FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentItems1, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentRhsItems$inboundSchema: z.ZodType<CreateFlagSegmentRhsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentRhsItems$Outbound = CreateFlagSegmentItems1$Outbound | CreateFlagSegmentItems2$Outbound;
/** @internal */
export declare const CreateFlagSegmentRhsItems$outboundSchema: z.ZodType<CreateFlagSegmentRhsItems$Outbound, z.ZodTypeDef, CreateFlagSegmentRhsItems>;
export declare function createFlagSegmentRhsItemsToJSON(createFlagSegmentRhsItems: CreateFlagSegmentRhsItems): string;
export declare function createFlagSegmentRhsItemsFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentRhsItems, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentRhs1$inboundSchema: z.ZodType<CreateFlagSegmentRhs1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentRhs1$Outbound = {
    type: string;
    items: Array<CreateFlagSegmentItems1$Outbound | CreateFlagSegmentItems2$Outbound>;
};
/** @internal */
export declare const CreateFlagSegmentRhs1$outboundSchema: z.ZodType<CreateFlagSegmentRhs1$Outbound, z.ZodTypeDef, CreateFlagSegmentRhs1>;
export declare function createFlagSegmentRhs1ToJSON(createFlagSegmentRhs1: CreateFlagSegmentRhs1): string;
export declare function createFlagSegmentRhs1FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentRhs1, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentRhs$inboundSchema: z.ZodType<CreateFlagSegmentRhs, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentRhs$Outbound = CreateFlagSegmentRhs2$Outbound | CreateFlagSegmentRhs1$Outbound | string | number | boolean;
/** @internal */
export declare const CreateFlagSegmentRhs$outboundSchema: z.ZodType<CreateFlagSegmentRhs$Outbound, z.ZodTypeDef, CreateFlagSegmentRhs>;
export declare function createFlagSegmentRhsToJSON(createFlagSegmentRhs: CreateFlagSegmentRhs): string;
export declare function createFlagSegmentRhsFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentRhs, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentConditions$inboundSchema: z.ZodType<CreateFlagSegmentConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentConditions$Outbound = {
    lhs: CreateFlagSegmentLhs2$Outbound | CreateFlagSegmentLhs1$Outbound;
    cmp: string;
    rhs?: CreateFlagSegmentRhs2$Outbound | CreateFlagSegmentRhs1$Outbound | string | number | boolean | undefined;
};
/** @internal */
export declare const CreateFlagSegmentConditions$outboundSchema: z.ZodType<CreateFlagSegmentConditions$Outbound, z.ZodTypeDef, CreateFlagSegmentConditions>;
export declare function createFlagSegmentConditionsToJSON(createFlagSegmentConditions: CreateFlagSegmentConditions): string;
export declare function createFlagSegmentConditionsFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentConditions, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentOutcomeBase$inboundSchema: z.ZodType<CreateFlagSegmentOutcomeBase, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentOutcomeBase$Outbound = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const CreateFlagSegmentOutcomeBase$outboundSchema: z.ZodType<CreateFlagSegmentOutcomeBase$Outbound, z.ZodTypeDef, CreateFlagSegmentOutcomeBase>;
export declare function createFlagSegmentOutcomeBaseToJSON(createFlagSegmentOutcomeBase: CreateFlagSegmentOutcomeBase): string;
export declare function createFlagSegmentOutcomeBaseFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentOutcomeBase, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentOutcome2$inboundSchema: z.ZodType<CreateFlagSegmentOutcome2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentOutcome2$Outbound = {
    type?: any | undefined;
    base: CreateFlagSegmentOutcomeBase$Outbound;
    passPromille: number;
};
/** @internal */
export declare const CreateFlagSegmentOutcome2$outboundSchema: z.ZodType<CreateFlagSegmentOutcome2$Outbound, z.ZodTypeDef, CreateFlagSegmentOutcome2>;
export declare function createFlagSegmentOutcome2ToJSON(createFlagSegmentOutcome2: CreateFlagSegmentOutcome2): string;
export declare function createFlagSegmentOutcome2FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentOutcome2, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentOutcome1$inboundSchema: z.ZodType<CreateFlagSegmentOutcome1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentOutcome1$Outbound = {
    type?: any | undefined;
};
/** @internal */
export declare const CreateFlagSegmentOutcome1$outboundSchema: z.ZodType<CreateFlagSegmentOutcome1$Outbound, z.ZodTypeDef, CreateFlagSegmentOutcome1>;
export declare function createFlagSegmentOutcome1ToJSON(createFlagSegmentOutcome1: CreateFlagSegmentOutcome1): string;
export declare function createFlagSegmentOutcome1FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentOutcome1, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentOutcome$inboundSchema: z.ZodType<CreateFlagSegmentOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentOutcome$Outbound = CreateFlagSegmentOutcome2$Outbound | CreateFlagSegmentOutcome1$Outbound;
/** @internal */
export declare const CreateFlagSegmentOutcome$outboundSchema: z.ZodType<CreateFlagSegmentOutcome$Outbound, z.ZodTypeDef, CreateFlagSegmentOutcome>;
export declare function createFlagSegmentOutcomeToJSON(createFlagSegmentOutcome: CreateFlagSegmentOutcome): string;
export declare function createFlagSegmentOutcomeFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentOutcome, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentRules$inboundSchema: z.ZodType<CreateFlagSegmentRules, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentRules$Outbound = {
    id: string;
    conditions: Array<CreateFlagSegmentConditions$Outbound>;
    outcome: CreateFlagSegmentOutcome2$Outbound | CreateFlagSegmentOutcome1$Outbound;
};
/** @internal */
export declare const CreateFlagSegmentRules$outboundSchema: z.ZodType<CreateFlagSegmentRules$Outbound, z.ZodTypeDef, CreateFlagSegmentRules>;
export declare function createFlagSegmentRulesToJSON(createFlagSegmentRules: CreateFlagSegmentRules): string;
export declare function createFlagSegmentRulesFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentRules, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentInclude$inboundSchema: z.ZodType<CreateFlagSegmentInclude, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentInclude$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const CreateFlagSegmentInclude$outboundSchema: z.ZodType<CreateFlagSegmentInclude$Outbound, z.ZodTypeDef, CreateFlagSegmentInclude>;
export declare function createFlagSegmentIncludeToJSON(createFlagSegmentInclude: CreateFlagSegmentInclude): string;
export declare function createFlagSegmentIncludeFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentInclude, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentExclude$inboundSchema: z.ZodType<CreateFlagSegmentExclude, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentExclude$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const CreateFlagSegmentExclude$outboundSchema: z.ZodType<CreateFlagSegmentExclude$Outbound, z.ZodTypeDef, CreateFlagSegmentExclude>;
export declare function createFlagSegmentExcludeToJSON(createFlagSegmentExclude: CreateFlagSegmentExclude): string;
export declare function createFlagSegmentExcludeFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentExclude, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentData$inboundSchema: z.ZodType<CreateFlagSegmentData, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentData$Outbound = {
    rules?: Array<CreateFlagSegmentRules$Outbound> | undefined;
    include?: {
        [k: string]: {
            [k: string]: Array<CreateFlagSegmentInclude$Outbound>;
        };
    } | undefined;
    exclude?: {
        [k: string]: {
            [k: string]: Array<CreateFlagSegmentExclude$Outbound>;
        };
    } | undefined;
};
/** @internal */
export declare const CreateFlagSegmentData$outboundSchema: z.ZodType<CreateFlagSegmentData$Outbound, z.ZodTypeDef, CreateFlagSegmentData>;
export declare function createFlagSegmentDataToJSON(createFlagSegmentData: CreateFlagSegmentData): string;
export declare function createFlagSegmentDataFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentData, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentRequestBody$inboundSchema: z.ZodType<CreateFlagSegmentRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentRequestBody$Outbound = {
    slug: string;
    createdBy?: string | undefined;
    label: string;
    description?: string | undefined;
    data: CreateFlagSegmentData$Outbound;
    hint: string;
};
/** @internal */
export declare const CreateFlagSegmentRequestBody$outboundSchema: z.ZodType<CreateFlagSegmentRequestBody$Outbound, z.ZodTypeDef, CreateFlagSegmentRequestBody>;
export declare function createFlagSegmentRequestBodyToJSON(createFlagSegmentRequestBody: CreateFlagSegmentRequestBody): string;
export declare function createFlagSegmentRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentRequest$inboundSchema: z.ZodType<CreateFlagSegmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentRequest$Outbound = {
    projectIdOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateFlagSegmentRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CreateFlagSegmentRequest$outboundSchema: z.ZodType<CreateFlagSegmentRequest$Outbound, z.ZodTypeDef, CreateFlagSegmentRequest>;
export declare function createFlagSegmentRequestToJSON(createFlagSegmentRequest: CreateFlagSegmentRequest): string;
export declare function createFlagSegmentRequestFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentRequest, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentTypeName$inboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentTypeName>;
/** @internal */
export declare const CreateFlagSegmentTypeName$outboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentTypeName>;
/** @internal */
export declare const CreateFlagSegmentOutcomeFeatureFlagsResponseType$inboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentOutcomeFeatureFlagsResponseType>;
/** @internal */
export declare const CreateFlagSegmentOutcomeFeatureFlagsResponseType$outboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentOutcomeFeatureFlagsResponseType>;
/** @internal */
export declare const CreateFlagSegmentOutcomeFeatureFlagsBase$inboundSchema: z.ZodType<CreateFlagSegmentOutcomeFeatureFlagsBase, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentOutcomeFeatureFlagsBase$Outbound = {
    type: string;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const CreateFlagSegmentOutcomeFeatureFlagsBase$outboundSchema: z.ZodType<CreateFlagSegmentOutcomeFeatureFlagsBase$Outbound, z.ZodTypeDef, CreateFlagSegmentOutcomeFeatureFlagsBase>;
export declare function createFlagSegmentOutcomeFeatureFlagsBaseToJSON(createFlagSegmentOutcomeFeatureFlagsBase: CreateFlagSegmentOutcomeFeatureFlagsBase): string;
export declare function createFlagSegmentOutcomeFeatureFlagsBaseFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentOutcomeFeatureFlagsBase, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentOutcomeFeatureFlags2$inboundSchema: z.ZodType<CreateFlagSegmentOutcomeFeatureFlags2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentOutcomeFeatureFlags2$Outbound = {
    type: "split";
    base: CreateFlagSegmentOutcomeFeatureFlagsBase$Outbound;
    passPromille: number;
};
/** @internal */
export declare const CreateFlagSegmentOutcomeFeatureFlags2$outboundSchema: z.ZodType<CreateFlagSegmentOutcomeFeatureFlags2$Outbound, z.ZodTypeDef, CreateFlagSegmentOutcomeFeatureFlags2>;
export declare function createFlagSegmentOutcomeFeatureFlags2ToJSON(createFlagSegmentOutcomeFeatureFlags2: CreateFlagSegmentOutcomeFeatureFlags2): string;
export declare function createFlagSegmentOutcomeFeatureFlags2FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentOutcomeFeatureFlags2, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentOutcomeFeatureFlags1$inboundSchema: z.ZodType<CreateFlagSegmentOutcomeFeatureFlags1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentOutcomeFeatureFlags1$Outbound = {
    type: "all";
};
/** @internal */
export declare const CreateFlagSegmentOutcomeFeatureFlags1$outboundSchema: z.ZodType<CreateFlagSegmentOutcomeFeatureFlags1$Outbound, z.ZodTypeDef, CreateFlagSegmentOutcomeFeatureFlags1>;
export declare function createFlagSegmentOutcomeFeatureFlags1ToJSON(createFlagSegmentOutcomeFeatureFlags1: CreateFlagSegmentOutcomeFeatureFlags1): string;
export declare function createFlagSegmentOutcomeFeatureFlags1FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentOutcomeFeatureFlags1, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsOutcome$inboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentFeatureFlagsOutcome$Outbound = CreateFlagSegmentOutcomeFeatureFlags1$Outbound | CreateFlagSegmentOutcomeFeatureFlags2$Outbound;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsOutcome$outboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsOutcome$Outbound, z.ZodTypeDef, CreateFlagSegmentFeatureFlagsOutcome>;
export declare function createFlagSegmentFeatureFlagsOutcomeToJSON(createFlagSegmentFeatureFlagsOutcome: CreateFlagSegmentFeatureFlagsOutcome): string;
export declare function createFlagSegmentFeatureFlagsOutcomeFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentFeatureFlagsOutcome, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentRhsFeatureFlagsResponseType$inboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentRhsFeatureFlagsResponseType>;
/** @internal */
export declare const CreateFlagSegmentRhsFeatureFlagsResponseType$outboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentRhsFeatureFlagsResponseType>;
/** @internal */
export declare const CreateFlagSegmentRhs4$inboundSchema: z.ZodType<CreateFlagSegmentRhs4, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentRhs4$Outbound = {
    type: string;
    pattern: string;
    flags: string;
};
/** @internal */
export declare const CreateFlagSegmentRhs4$outboundSchema: z.ZodType<CreateFlagSegmentRhs4$Outbound, z.ZodTypeDef, CreateFlagSegmentRhs4>;
export declare function createFlagSegmentRhs4ToJSON(createFlagSegmentRhs4: CreateFlagSegmentRhs4): string;
export declare function createFlagSegmentRhs4FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentRhs4, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentRhsFeatureFlagsType$inboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentRhsFeatureFlagsType>;
/** @internal */
export declare const CreateFlagSegmentRhsFeatureFlagsType$outboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentRhsFeatureFlagsType>;
/** @internal */
export declare const CreateFlagSegmentItemsFeatureFlags2$inboundSchema: z.ZodType<CreateFlagSegmentItemsFeatureFlags2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentItemsFeatureFlags2$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const CreateFlagSegmentItemsFeatureFlags2$outboundSchema: z.ZodType<CreateFlagSegmentItemsFeatureFlags2$Outbound, z.ZodTypeDef, CreateFlagSegmentItemsFeatureFlags2>;
export declare function createFlagSegmentItemsFeatureFlags2ToJSON(createFlagSegmentItemsFeatureFlags2: CreateFlagSegmentItemsFeatureFlags2): string;
export declare function createFlagSegmentItemsFeatureFlags2FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentItemsFeatureFlags2, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentItemsFeatureFlags1$inboundSchema: z.ZodType<CreateFlagSegmentItemsFeatureFlags1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentItemsFeatureFlags1$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
/** @internal */
export declare const CreateFlagSegmentItemsFeatureFlags1$outboundSchema: z.ZodType<CreateFlagSegmentItemsFeatureFlags1$Outbound, z.ZodTypeDef, CreateFlagSegmentItemsFeatureFlags1>;
export declare function createFlagSegmentItemsFeatureFlags1ToJSON(createFlagSegmentItemsFeatureFlags1: CreateFlagSegmentItemsFeatureFlags1): string;
export declare function createFlagSegmentItemsFeatureFlags1FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentItemsFeatureFlags1, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentRhsFeatureFlagsItems$inboundSchema: z.ZodType<CreateFlagSegmentRhsFeatureFlagsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentRhsFeatureFlagsItems$Outbound = CreateFlagSegmentItemsFeatureFlags1$Outbound | CreateFlagSegmentItemsFeatureFlags2$Outbound;
/** @internal */
export declare const CreateFlagSegmentRhsFeatureFlagsItems$outboundSchema: z.ZodType<CreateFlagSegmentRhsFeatureFlagsItems$Outbound, z.ZodTypeDef, CreateFlagSegmentRhsFeatureFlagsItems>;
export declare function createFlagSegmentRhsFeatureFlagsItemsToJSON(createFlagSegmentRhsFeatureFlagsItems: CreateFlagSegmentRhsFeatureFlagsItems): string;
export declare function createFlagSegmentRhsFeatureFlagsItemsFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentRhsFeatureFlagsItems, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentRhs3$inboundSchema: z.ZodType<CreateFlagSegmentRhs3, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentRhs3$Outbound = {
    type: string;
    items: Array<CreateFlagSegmentItemsFeatureFlags1$Outbound | CreateFlagSegmentItemsFeatureFlags2$Outbound>;
};
/** @internal */
export declare const CreateFlagSegmentRhs3$outboundSchema: z.ZodType<CreateFlagSegmentRhs3$Outbound, z.ZodTypeDef, CreateFlagSegmentRhs3>;
export declare function createFlagSegmentRhs3ToJSON(createFlagSegmentRhs3: CreateFlagSegmentRhs3): string;
export declare function createFlagSegmentRhs3FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentRhs3, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsRhs$inboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsRhs, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentFeatureFlagsRhs$Outbound = CreateFlagSegmentRhs4$Outbound | CreateFlagSegmentRhs3$Outbound | string | number | boolean;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsRhs$outboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsRhs$Outbound, z.ZodTypeDef, CreateFlagSegmentFeatureFlagsRhs>;
export declare function createFlagSegmentFeatureFlagsRhsToJSON(createFlagSegmentFeatureFlagsRhs: CreateFlagSegmentFeatureFlagsRhs): string;
export declare function createFlagSegmentFeatureFlagsRhsFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentFeatureFlagsRhs, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentLhsFeatureFlags2$inboundSchema: z.ZodType<CreateFlagSegmentLhsFeatureFlags2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentLhsFeatureFlags2$Outbound = {
    type: "entity";
    kind: string;
    attribute: string;
};
/** @internal */
export declare const CreateFlagSegmentLhsFeatureFlags2$outboundSchema: z.ZodType<CreateFlagSegmentLhsFeatureFlags2$Outbound, z.ZodTypeDef, CreateFlagSegmentLhsFeatureFlags2>;
export declare function createFlagSegmentLhsFeatureFlags2ToJSON(createFlagSegmentLhsFeatureFlags2: CreateFlagSegmentLhsFeatureFlags2): string;
export declare function createFlagSegmentLhsFeatureFlags2FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentLhsFeatureFlags2, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentLhsFeatureFlags1$inboundSchema: z.ZodType<CreateFlagSegmentLhsFeatureFlags1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentLhsFeatureFlags1$Outbound = {
    type: "segment";
};
/** @internal */
export declare const CreateFlagSegmentLhsFeatureFlags1$outboundSchema: z.ZodType<CreateFlagSegmentLhsFeatureFlags1$Outbound, z.ZodTypeDef, CreateFlagSegmentLhsFeatureFlags1>;
export declare function createFlagSegmentLhsFeatureFlags1ToJSON(createFlagSegmentLhsFeatureFlags1: CreateFlagSegmentLhsFeatureFlags1): string;
export declare function createFlagSegmentLhsFeatureFlags1FromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentLhsFeatureFlags1, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsLhs$inboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsLhs, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentFeatureFlagsLhs$Outbound = CreateFlagSegmentLhsFeatureFlags1$Outbound | CreateFlagSegmentLhsFeatureFlags2$Outbound;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsLhs$outboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsLhs$Outbound, z.ZodTypeDef, CreateFlagSegmentFeatureFlagsLhs>;
export declare function createFlagSegmentFeatureFlagsLhsToJSON(createFlagSegmentFeatureFlagsLhs: CreateFlagSegmentFeatureFlagsLhs): string;
export declare function createFlagSegmentFeatureFlagsLhsFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentFeatureFlagsLhs, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsCmp$inboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentFeatureFlagsCmp>;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsCmp$outboundSchema: z.ZodNativeEnum<typeof CreateFlagSegmentFeatureFlagsCmp>;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsConditions$inboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentFeatureFlagsConditions$Outbound = {
    rhs?: CreateFlagSegmentRhs4$Outbound | CreateFlagSegmentRhs3$Outbound | string | number | boolean | undefined;
    lhs: CreateFlagSegmentLhsFeatureFlags1$Outbound | CreateFlagSegmentLhsFeatureFlags2$Outbound;
    cmp: string;
};
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsConditions$outboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsConditions$Outbound, z.ZodTypeDef, CreateFlagSegmentFeatureFlagsConditions>;
export declare function createFlagSegmentFeatureFlagsConditionsToJSON(createFlagSegmentFeatureFlagsConditions: CreateFlagSegmentFeatureFlagsConditions): string;
export declare function createFlagSegmentFeatureFlagsConditionsFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentFeatureFlagsConditions, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsRules$inboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsRules, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentFeatureFlagsRules$Outbound = {
    id: string;
    outcome: CreateFlagSegmentOutcomeFeatureFlags1$Outbound | CreateFlagSegmentOutcomeFeatureFlags2$Outbound;
    conditions: Array<CreateFlagSegmentFeatureFlagsConditions$Outbound>;
};
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsRules$outboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsRules$Outbound, z.ZodTypeDef, CreateFlagSegmentFeatureFlagsRules>;
export declare function createFlagSegmentFeatureFlagsRulesToJSON(createFlagSegmentFeatureFlagsRules: CreateFlagSegmentFeatureFlagsRules): string;
export declare function createFlagSegmentFeatureFlagsRulesFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentFeatureFlagsRules, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsInclude$inboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsInclude, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentFeatureFlagsInclude$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsInclude$outboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsInclude$Outbound, z.ZodTypeDef, CreateFlagSegmentFeatureFlagsInclude>;
export declare function createFlagSegmentFeatureFlagsIncludeToJSON(createFlagSegmentFeatureFlagsInclude: CreateFlagSegmentFeatureFlagsInclude): string;
export declare function createFlagSegmentFeatureFlagsIncludeFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentFeatureFlagsInclude, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsExclude$inboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsExclude, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentFeatureFlagsExclude$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsExclude$outboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsExclude$Outbound, z.ZodTypeDef, CreateFlagSegmentFeatureFlagsExclude>;
export declare function createFlagSegmentFeatureFlagsExcludeToJSON(createFlagSegmentFeatureFlagsExclude: CreateFlagSegmentFeatureFlagsExclude): string;
export declare function createFlagSegmentFeatureFlagsExcludeFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentFeatureFlagsExclude, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsData$inboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsData, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentFeatureFlagsData$Outbound = {
    rules?: Array<CreateFlagSegmentFeatureFlagsRules$Outbound> | undefined;
    include?: {
        [k: string]: {
            [k: string]: Array<CreateFlagSegmentFeatureFlagsInclude$Outbound>;
        };
    } | undefined;
    exclude?: {
        [k: string]: {
            [k: string]: Array<CreateFlagSegmentFeatureFlagsExclude$Outbound>;
        };
    } | undefined;
};
/** @internal */
export declare const CreateFlagSegmentFeatureFlagsData$outboundSchema: z.ZodType<CreateFlagSegmentFeatureFlagsData$Outbound, z.ZodTypeDef, CreateFlagSegmentFeatureFlagsData>;
export declare function createFlagSegmentFeatureFlagsDataToJSON(createFlagSegmentFeatureFlagsData: CreateFlagSegmentFeatureFlagsData): string;
export declare function createFlagSegmentFeatureFlagsDataFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentFeatureFlagsData, SDKValidationError>;
/** @internal */
export declare const CreateFlagSegmentResponseBody$inboundSchema: z.ZodType<CreateFlagSegmentResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagSegmentResponseBody$Outbound = {
    description?: string | undefined;
    createdBy?: string | undefined;
    usedByFlags?: Array<string> | undefined;
    usedBySegments?: Array<string> | undefined;
    id: string;
    label: string;
    slug: string;
    createdAt: number;
    updatedAt: number;
    projectId: string;
    typeName: string;
    data: CreateFlagSegmentFeatureFlagsData$Outbound;
    hint: string;
};
/** @internal */
export declare const CreateFlagSegmentResponseBody$outboundSchema: z.ZodType<CreateFlagSegmentResponseBody$Outbound, z.ZodTypeDef, CreateFlagSegmentResponseBody>;
export declare function createFlagSegmentResponseBodyToJSON(createFlagSegmentResponseBody: CreateFlagSegmentResponseBody): string;
export declare function createFlagSegmentResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateFlagSegmentResponseBody, SDKValidationError>;
//# sourceMappingURL=createflagsegmentop.d.ts.map