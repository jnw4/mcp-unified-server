import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The kind of flag
 */
export declare const CreateFlagKind: {
    readonly Boolean: "boolean";
    readonly String: "string";
    readonly Number: "number";
};
/**
 * The kind of flag
 */
export type CreateFlagKind = ClosedEnum<typeof CreateFlagKind>;
export type CreateFlagValue = string | number | boolean;
export type CreateFlagVariants = {
    /**
     * The id of the variant
     */
    id: string;
    /**
     * A label for the variant
     */
    label?: string | undefined;
    /**
     * A description of the variant
     */
    description?: string | undefined;
    value: string | number | boolean;
};
/**
 * Allows linking this environment to another environment so this flag will be evaluated with the other flag's configuration
 */
export type CreateFlagReuse = {
    /**
     * Whether the reuse is active or not
     */
    active: boolean;
    /**
     * The environment to link to
     */
    environment: string;
};
export type CreateFlagTargets = {
    note?: string | undefined;
    value: string;
};
export type CreateFlagPausedOutcome = {
    type?: any | undefined;
    variantId: string;
};
export type CreateFlagLhs2 = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
export type CreateFlagLhs1 = {
    type?: any | undefined;
};
export type CreateFlagLhs = CreateFlagLhs2 | CreateFlagLhs1;
export declare const CreateFlagCmp: {
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
export type CreateFlagCmp = ClosedEnum<typeof CreateFlagCmp>;
export type Rhs2 = {
    type?: any | undefined;
    pattern: string;
    flags: string;
};
export declare const CreateFlagRhsType: {
    readonly ListInline: "list/inline";
    readonly List: "list";
};
export type CreateFlagRhsType = ClosedEnum<typeof CreateFlagRhsType>;
export type CreateFlagItems2 = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
export type CreateFlagItems1 = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
export type CreateFlagRhsItems = CreateFlagItems1 | CreateFlagItems2;
export type Rhs1 = {
    type: CreateFlagRhsType;
    items: Array<CreateFlagItems1 | CreateFlagItems2>;
};
export type CreateFlagRhs = Rhs2 | Rhs1 | string | number | boolean;
export type CreateFlagConditions = {
    lhs: CreateFlagLhs2 | CreateFlagLhs1;
    cmp: CreateFlagCmp;
    rhs?: Rhs2 | Rhs1 | string | number | boolean | undefined;
};
export type CreateFlagOutcomeBase = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
export type CreateFlagOutcome2 = {
    type?: any | undefined;
    base: CreateFlagOutcomeBase;
    /**
     * The distribution for each variant
     */
    weights: {
        [k: string]: number;
    };
    /**
     * This variant will be used when the base attribute does not exist
     */
    defaultVariantId: string;
};
export type CreateFlagOutcome1 = {
    type?: any | undefined;
    variantId: string;
};
export type CreateFlagOutcome = CreateFlagOutcome2 | CreateFlagOutcome1;
export type CreateFlagRules = {
    id: string;
    conditions: Array<CreateFlagConditions>;
    outcome: CreateFlagOutcome2 | CreateFlagOutcome1;
};
export type FallthroughBase = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
export type CreateFlagFallthrough2 = {
    type?: any | undefined;
    base: FallthroughBase;
    /**
     * The distribution for each variant
     */
    weights: {
        [k: string]: number;
    };
    /**
     * This variant will be used when the base attribute does not exist
     */
    defaultVariantId: string;
};
export type CreateFlagFallthrough1 = {
    type?: any | undefined;
    variantId: string;
};
export type CreateFlagFallthrough = CreateFlagFallthrough2 | CreateFlagFallthrough1;
export type CreateFlagEnvironments = {
    active: boolean;
    /**
     * Allows linking this environment to another environment so this flag will be evaluated with the other flag's configuration
     */
    reuse?: CreateFlagReuse | undefined;
    /**
     * Allows assigning targets to variants while bypassing the flag's rules
     */
    targets?: {
        [k: string]: {
            [k: string]: {
                [k: string]: Array<CreateFlagTargets>;
            };
        };
    } | undefined;
    pausedOutcome: CreateFlagPausedOutcome;
    rules: Array<CreateFlagRules>;
    fallthrough: CreateFlagFallthrough2 | CreateFlagFallthrough1;
    /**
     * The revision of the environment config
     */
    revision?: number | undefined;
};
export declare const CreateFlagState: {
    readonly Active: "active";
    readonly Archived: "archived";
};
export type CreateFlagState = ClosedEnum<typeof CreateFlagState>;
export type CreateFlagRequestBody = {
    /**
     * A unique (per project) key for the flag, composed of letters, numbers, dashes, and underscores
     */
    slug: string;
    /**
     * The kind of flag
     */
    kind: CreateFlagKind;
    /**
     * The variants of the flag
     */
    variants?: Array<CreateFlagVariants> | undefined;
    /**
     * The configuration for the flag in different environments
     */
    environments: {
        [k: string]: CreateFlagEnvironments;
    };
    /**
     * A random seed to prevent split points in different flags from having the same targets
     */
    seed?: number | undefined;
    /**
     * A description of the flag
     */
    description?: string | undefined;
    state?: CreateFlagState | undefined;
};
export type CreateFlagRequest = {
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
    requestBody?: CreateFlagRequestBody | undefined;
};
export type CreateFlagFeatureFlagsValue = string | number | boolean;
export type CreateFlagFeatureFlagsVariants = {
    description?: string | undefined;
    label?: string | undefined;
    value: string | number | boolean;
    id: string;
};
export type CreateFlagFeatureFlagsReuse = {
    active: boolean;
    environment: string;
};
export type CreateFlagFeatureFlagsTargets = {
    note?: string | undefined;
    value: string;
};
export declare const CreateFlagType: {
    readonly Variant: "variant";
};
export type CreateFlagType = ClosedEnum<typeof CreateFlagType>;
export type CreateFlagFeatureFlagsPausedOutcome = {
    type: CreateFlagType;
    variantId: string;
};
export declare const CreateFlagFallthroughFeatureFlagsResponseType: {
    readonly Entity: "entity";
};
export type CreateFlagFallthroughFeatureFlagsResponseType = ClosedEnum<typeof CreateFlagFallthroughFeatureFlagsResponseType>;
export type CreateFlagFallthroughBase = {
    type: CreateFlagFallthroughFeatureFlagsResponseType;
    kind: string;
    attribute: string;
};
export type CreateFlagFallthroughFeatureFlags2 = {
    type: "split";
    base: CreateFlagFallthroughBase;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
export type CreateFlagFallthroughFeatureFlags1 = {
    type: "variant";
    variantId: string;
};
export type CreateFlagFeatureFlagsFallthrough = CreateFlagFallthroughFeatureFlags1 | CreateFlagFallthroughFeatureFlags2;
export declare const CreateFlagOutcomeFeatureFlagsResponseType: {
    readonly Entity: "entity";
};
export type CreateFlagOutcomeFeatureFlagsResponseType = ClosedEnum<typeof CreateFlagOutcomeFeatureFlagsResponseType>;
export type CreateFlagOutcomeFeatureFlagsBase = {
    type: CreateFlagOutcomeFeatureFlagsResponseType;
    kind: string;
    attribute: string;
};
export type CreateFlagOutcomeFeatureFlags2 = {
    type: "split";
    base: CreateFlagOutcomeFeatureFlagsBase;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
export type CreateFlagOutcomeFeatureFlags1 = {
    type: "variant";
    variantId: string;
};
export type CreateFlagFeatureFlagsOutcome = CreateFlagOutcomeFeatureFlags1 | CreateFlagOutcomeFeatureFlags2;
export declare const CreateFlagRhsFeatureFlagsResponseType: {
    readonly Regex: "regex";
};
export type CreateFlagRhsFeatureFlagsResponseType = ClosedEnum<typeof CreateFlagRhsFeatureFlagsResponseType>;
export type CreateFlagRhs4 = {
    type: CreateFlagRhsFeatureFlagsResponseType;
    pattern: string;
    flags: string;
};
export declare const CreateFlagRhsFeatureFlagsType: {
    readonly ListInline: "list/inline";
    readonly List: "list";
};
export type CreateFlagRhsFeatureFlagsType = ClosedEnum<typeof CreateFlagRhsFeatureFlagsType>;
export type CreateFlagItemsFeatureFlags2 = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
export type CreateFlagItemsFeatureFlags1 = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
export type CreateFlagRhsFeatureFlagsItems = CreateFlagItemsFeatureFlags1 | CreateFlagItemsFeatureFlags2;
export type CreateFlagRhs3 = {
    type: CreateFlagRhsFeatureFlagsType;
    items: Array<CreateFlagItemsFeatureFlags1 | CreateFlagItemsFeatureFlags2>;
};
export type CreateFlagFeatureFlagsRhs = CreateFlagRhs4 | CreateFlagRhs3 | string | number | boolean;
export type CreateFlagLhsFeatureFlags2 = {
    type: "entity";
    kind: string;
    attribute: string;
};
export type CreateFlagLhsFeatureFlags1 = {
    type: "segment";
};
export type CreateFlagFeatureFlagsLhs = CreateFlagLhsFeatureFlags1 | CreateFlagLhsFeatureFlags2;
export declare const CreateFlagFeatureFlagsCmp: {
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
export type CreateFlagFeatureFlagsCmp = ClosedEnum<typeof CreateFlagFeatureFlagsCmp>;
export type CreateFlagFeatureFlagsConditions = {
    rhs?: CreateFlagRhs4 | CreateFlagRhs3 | string | number | boolean | undefined;
    lhs: CreateFlagLhsFeatureFlags1 | CreateFlagLhsFeatureFlags2;
    cmp: CreateFlagFeatureFlagsCmp;
};
export type CreateFlagFeatureFlagsRules = {
    id: string;
    outcome: CreateFlagOutcomeFeatureFlags1 | CreateFlagOutcomeFeatureFlags2;
    conditions: Array<CreateFlagFeatureFlagsConditions>;
};
export type CreateFlagFeatureFlagsEnvironments = {
    reuse?: CreateFlagFeatureFlagsReuse | undefined;
    targets?: {
        [k: string]: {
            [k: string]: {
                [k: string]: Array<CreateFlagFeatureFlagsTargets>;
            };
        };
    } | undefined;
    revision?: number | undefined;
    pausedOutcome: CreateFlagFeatureFlagsPausedOutcome;
    fallthrough: CreateFlagFallthroughFeatureFlags1 | CreateFlagFallthroughFeatureFlags2;
    active: boolean;
    rules: Array<CreateFlagFeatureFlagsRules>;
};
export declare const CreateFlagFeatureFlagsKind: {
    readonly String: "string";
    readonly Number: "number";
    readonly Boolean: "boolean";
};
export type CreateFlagFeatureFlagsKind = ClosedEnum<typeof CreateFlagFeatureFlagsKind>;
export declare const CreateFlagFeatureFlagsState: {
    readonly Active: "active";
    readonly Archived: "archived";
};
export type CreateFlagFeatureFlagsState = ClosedEnum<typeof CreateFlagFeatureFlagsState>;
export declare const CreateFlagTypeName: {
    readonly Flag: "flag";
};
export type CreateFlagTypeName = ClosedEnum<typeof CreateFlagTypeName>;
export type CreateFlagResponseBody = {
    description?: string | undefined;
    variants: Array<CreateFlagFeatureFlagsVariants>;
    id: string;
    environments: {
        [k: string]: CreateFlagFeatureFlagsEnvironments;
    };
    kind: CreateFlagFeatureFlagsKind;
    revision: number;
    seed: number;
    state: CreateFlagFeatureFlagsState;
    slug: string;
    createdAt: number;
    updatedAt: number;
    createdBy: string;
    ownerId: string;
    projectId: string;
    typeName: CreateFlagTypeName;
};
/** @internal */
export declare const CreateFlagKind$inboundSchema: z.ZodNativeEnum<typeof CreateFlagKind>;
/** @internal */
export declare const CreateFlagKind$outboundSchema: z.ZodNativeEnum<typeof CreateFlagKind>;
/** @internal */
export declare const CreateFlagValue$inboundSchema: z.ZodType<CreateFlagValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagValue$Outbound = string | number | boolean;
/** @internal */
export declare const CreateFlagValue$outboundSchema: z.ZodType<CreateFlagValue$Outbound, z.ZodTypeDef, CreateFlagValue>;
export declare function createFlagValueToJSON(createFlagValue: CreateFlagValue): string;
export declare function createFlagValueFromJSON(jsonString: string): SafeParseResult<CreateFlagValue, SDKValidationError>;
/** @internal */
export declare const CreateFlagVariants$inboundSchema: z.ZodType<CreateFlagVariants, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagVariants$Outbound = {
    id: string;
    label?: string | undefined;
    description?: string | undefined;
    value: string | number | boolean;
};
/** @internal */
export declare const CreateFlagVariants$outboundSchema: z.ZodType<CreateFlagVariants$Outbound, z.ZodTypeDef, CreateFlagVariants>;
export declare function createFlagVariantsToJSON(createFlagVariants: CreateFlagVariants): string;
export declare function createFlagVariantsFromJSON(jsonString: string): SafeParseResult<CreateFlagVariants, SDKValidationError>;
/** @internal */
export declare const CreateFlagReuse$inboundSchema: z.ZodType<CreateFlagReuse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagReuse$Outbound = {
    active: boolean;
    environment: string;
};
/** @internal */
export declare const CreateFlagReuse$outboundSchema: z.ZodType<CreateFlagReuse$Outbound, z.ZodTypeDef, CreateFlagReuse>;
export declare function createFlagReuseToJSON(createFlagReuse: CreateFlagReuse): string;
export declare function createFlagReuseFromJSON(jsonString: string): SafeParseResult<CreateFlagReuse, SDKValidationError>;
/** @internal */
export declare const CreateFlagTargets$inboundSchema: z.ZodType<CreateFlagTargets, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagTargets$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const CreateFlagTargets$outboundSchema: z.ZodType<CreateFlagTargets$Outbound, z.ZodTypeDef, CreateFlagTargets>;
export declare function createFlagTargetsToJSON(createFlagTargets: CreateFlagTargets): string;
export declare function createFlagTargetsFromJSON(jsonString: string): SafeParseResult<CreateFlagTargets, SDKValidationError>;
/** @internal */
export declare const CreateFlagPausedOutcome$inboundSchema: z.ZodType<CreateFlagPausedOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagPausedOutcome$Outbound = {
    type?: any | undefined;
    variantId: string;
};
/** @internal */
export declare const CreateFlagPausedOutcome$outboundSchema: z.ZodType<CreateFlagPausedOutcome$Outbound, z.ZodTypeDef, CreateFlagPausedOutcome>;
export declare function createFlagPausedOutcomeToJSON(createFlagPausedOutcome: CreateFlagPausedOutcome): string;
export declare function createFlagPausedOutcomeFromJSON(jsonString: string): SafeParseResult<CreateFlagPausedOutcome, SDKValidationError>;
/** @internal */
export declare const CreateFlagLhs2$inboundSchema: z.ZodType<CreateFlagLhs2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagLhs2$Outbound = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const CreateFlagLhs2$outboundSchema: z.ZodType<CreateFlagLhs2$Outbound, z.ZodTypeDef, CreateFlagLhs2>;
export declare function createFlagLhs2ToJSON(createFlagLhs2: CreateFlagLhs2): string;
export declare function createFlagLhs2FromJSON(jsonString: string): SafeParseResult<CreateFlagLhs2, SDKValidationError>;
/** @internal */
export declare const CreateFlagLhs1$inboundSchema: z.ZodType<CreateFlagLhs1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagLhs1$Outbound = {
    type?: any | undefined;
};
/** @internal */
export declare const CreateFlagLhs1$outboundSchema: z.ZodType<CreateFlagLhs1$Outbound, z.ZodTypeDef, CreateFlagLhs1>;
export declare function createFlagLhs1ToJSON(createFlagLhs1: CreateFlagLhs1): string;
export declare function createFlagLhs1FromJSON(jsonString: string): SafeParseResult<CreateFlagLhs1, SDKValidationError>;
/** @internal */
export declare const CreateFlagLhs$inboundSchema: z.ZodType<CreateFlagLhs, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagLhs$Outbound = CreateFlagLhs2$Outbound | CreateFlagLhs1$Outbound;
/** @internal */
export declare const CreateFlagLhs$outboundSchema: z.ZodType<CreateFlagLhs$Outbound, z.ZodTypeDef, CreateFlagLhs>;
export declare function createFlagLhsToJSON(createFlagLhs: CreateFlagLhs): string;
export declare function createFlagLhsFromJSON(jsonString: string): SafeParseResult<CreateFlagLhs, SDKValidationError>;
/** @internal */
export declare const CreateFlagCmp$inboundSchema: z.ZodNativeEnum<typeof CreateFlagCmp>;
/** @internal */
export declare const CreateFlagCmp$outboundSchema: z.ZodNativeEnum<typeof CreateFlagCmp>;
/** @internal */
export declare const Rhs2$inboundSchema: z.ZodType<Rhs2, z.ZodTypeDef, unknown>;
/** @internal */
export type Rhs2$Outbound = {
    type?: any | undefined;
    pattern: string;
    flags: string;
};
/** @internal */
export declare const Rhs2$outboundSchema: z.ZodType<Rhs2$Outbound, z.ZodTypeDef, Rhs2>;
export declare function rhs2ToJSON(rhs2: Rhs2): string;
export declare function rhs2FromJSON(jsonString: string): SafeParseResult<Rhs2, SDKValidationError>;
/** @internal */
export declare const CreateFlagRhsType$inboundSchema: z.ZodNativeEnum<typeof CreateFlagRhsType>;
/** @internal */
export declare const CreateFlagRhsType$outboundSchema: z.ZodNativeEnum<typeof CreateFlagRhsType>;
/** @internal */
export declare const CreateFlagItems2$inboundSchema: z.ZodType<CreateFlagItems2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagItems2$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const CreateFlagItems2$outboundSchema: z.ZodType<CreateFlagItems2$Outbound, z.ZodTypeDef, CreateFlagItems2>;
export declare function createFlagItems2ToJSON(createFlagItems2: CreateFlagItems2): string;
export declare function createFlagItems2FromJSON(jsonString: string): SafeParseResult<CreateFlagItems2, SDKValidationError>;
/** @internal */
export declare const CreateFlagItems1$inboundSchema: z.ZodType<CreateFlagItems1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagItems1$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
/** @internal */
export declare const CreateFlagItems1$outboundSchema: z.ZodType<CreateFlagItems1$Outbound, z.ZodTypeDef, CreateFlagItems1>;
export declare function createFlagItems1ToJSON(createFlagItems1: CreateFlagItems1): string;
export declare function createFlagItems1FromJSON(jsonString: string): SafeParseResult<CreateFlagItems1, SDKValidationError>;
/** @internal */
export declare const CreateFlagRhsItems$inboundSchema: z.ZodType<CreateFlagRhsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagRhsItems$Outbound = CreateFlagItems1$Outbound | CreateFlagItems2$Outbound;
/** @internal */
export declare const CreateFlagRhsItems$outboundSchema: z.ZodType<CreateFlagRhsItems$Outbound, z.ZodTypeDef, CreateFlagRhsItems>;
export declare function createFlagRhsItemsToJSON(createFlagRhsItems: CreateFlagRhsItems): string;
export declare function createFlagRhsItemsFromJSON(jsonString: string): SafeParseResult<CreateFlagRhsItems, SDKValidationError>;
/** @internal */
export declare const Rhs1$inboundSchema: z.ZodType<Rhs1, z.ZodTypeDef, unknown>;
/** @internal */
export type Rhs1$Outbound = {
    type: string;
    items: Array<CreateFlagItems1$Outbound | CreateFlagItems2$Outbound>;
};
/** @internal */
export declare const Rhs1$outboundSchema: z.ZodType<Rhs1$Outbound, z.ZodTypeDef, Rhs1>;
export declare function rhs1ToJSON(rhs1: Rhs1): string;
export declare function rhs1FromJSON(jsonString: string): SafeParseResult<Rhs1, SDKValidationError>;
/** @internal */
export declare const CreateFlagRhs$inboundSchema: z.ZodType<CreateFlagRhs, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagRhs$Outbound = Rhs2$Outbound | Rhs1$Outbound | string | number | boolean;
/** @internal */
export declare const CreateFlagRhs$outboundSchema: z.ZodType<CreateFlagRhs$Outbound, z.ZodTypeDef, CreateFlagRhs>;
export declare function createFlagRhsToJSON(createFlagRhs: CreateFlagRhs): string;
export declare function createFlagRhsFromJSON(jsonString: string): SafeParseResult<CreateFlagRhs, SDKValidationError>;
/** @internal */
export declare const CreateFlagConditions$inboundSchema: z.ZodType<CreateFlagConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagConditions$Outbound = {
    lhs: CreateFlagLhs2$Outbound | CreateFlagLhs1$Outbound;
    cmp: string;
    rhs?: Rhs2$Outbound | Rhs1$Outbound | string | number | boolean | undefined;
};
/** @internal */
export declare const CreateFlagConditions$outboundSchema: z.ZodType<CreateFlagConditions$Outbound, z.ZodTypeDef, CreateFlagConditions>;
export declare function createFlagConditionsToJSON(createFlagConditions: CreateFlagConditions): string;
export declare function createFlagConditionsFromJSON(jsonString: string): SafeParseResult<CreateFlagConditions, SDKValidationError>;
/** @internal */
export declare const CreateFlagOutcomeBase$inboundSchema: z.ZodType<CreateFlagOutcomeBase, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagOutcomeBase$Outbound = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const CreateFlagOutcomeBase$outboundSchema: z.ZodType<CreateFlagOutcomeBase$Outbound, z.ZodTypeDef, CreateFlagOutcomeBase>;
export declare function createFlagOutcomeBaseToJSON(createFlagOutcomeBase: CreateFlagOutcomeBase): string;
export declare function createFlagOutcomeBaseFromJSON(jsonString: string): SafeParseResult<CreateFlagOutcomeBase, SDKValidationError>;
/** @internal */
export declare const CreateFlagOutcome2$inboundSchema: z.ZodType<CreateFlagOutcome2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagOutcome2$Outbound = {
    type?: any | undefined;
    base: CreateFlagOutcomeBase$Outbound;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
/** @internal */
export declare const CreateFlagOutcome2$outboundSchema: z.ZodType<CreateFlagOutcome2$Outbound, z.ZodTypeDef, CreateFlagOutcome2>;
export declare function createFlagOutcome2ToJSON(createFlagOutcome2: CreateFlagOutcome2): string;
export declare function createFlagOutcome2FromJSON(jsonString: string): SafeParseResult<CreateFlagOutcome2, SDKValidationError>;
/** @internal */
export declare const CreateFlagOutcome1$inboundSchema: z.ZodType<CreateFlagOutcome1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagOutcome1$Outbound = {
    type?: any | undefined;
    variantId: string;
};
/** @internal */
export declare const CreateFlagOutcome1$outboundSchema: z.ZodType<CreateFlagOutcome1$Outbound, z.ZodTypeDef, CreateFlagOutcome1>;
export declare function createFlagOutcome1ToJSON(createFlagOutcome1: CreateFlagOutcome1): string;
export declare function createFlagOutcome1FromJSON(jsonString: string): SafeParseResult<CreateFlagOutcome1, SDKValidationError>;
/** @internal */
export declare const CreateFlagOutcome$inboundSchema: z.ZodType<CreateFlagOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagOutcome$Outbound = CreateFlagOutcome2$Outbound | CreateFlagOutcome1$Outbound;
/** @internal */
export declare const CreateFlagOutcome$outboundSchema: z.ZodType<CreateFlagOutcome$Outbound, z.ZodTypeDef, CreateFlagOutcome>;
export declare function createFlagOutcomeToJSON(createFlagOutcome: CreateFlagOutcome): string;
export declare function createFlagOutcomeFromJSON(jsonString: string): SafeParseResult<CreateFlagOutcome, SDKValidationError>;
/** @internal */
export declare const CreateFlagRules$inboundSchema: z.ZodType<CreateFlagRules, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagRules$Outbound = {
    id: string;
    conditions: Array<CreateFlagConditions$Outbound>;
    outcome: CreateFlagOutcome2$Outbound | CreateFlagOutcome1$Outbound;
};
/** @internal */
export declare const CreateFlagRules$outboundSchema: z.ZodType<CreateFlagRules$Outbound, z.ZodTypeDef, CreateFlagRules>;
export declare function createFlagRulesToJSON(createFlagRules: CreateFlagRules): string;
export declare function createFlagRulesFromJSON(jsonString: string): SafeParseResult<CreateFlagRules, SDKValidationError>;
/** @internal */
export declare const FallthroughBase$inboundSchema: z.ZodType<FallthroughBase, z.ZodTypeDef, unknown>;
/** @internal */
export type FallthroughBase$Outbound = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const FallthroughBase$outboundSchema: z.ZodType<FallthroughBase$Outbound, z.ZodTypeDef, FallthroughBase>;
export declare function fallthroughBaseToJSON(fallthroughBase: FallthroughBase): string;
export declare function fallthroughBaseFromJSON(jsonString: string): SafeParseResult<FallthroughBase, SDKValidationError>;
/** @internal */
export declare const CreateFlagFallthrough2$inboundSchema: z.ZodType<CreateFlagFallthrough2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFallthrough2$Outbound = {
    type?: any | undefined;
    base: FallthroughBase$Outbound;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
/** @internal */
export declare const CreateFlagFallthrough2$outboundSchema: z.ZodType<CreateFlagFallthrough2$Outbound, z.ZodTypeDef, CreateFlagFallthrough2>;
export declare function createFlagFallthrough2ToJSON(createFlagFallthrough2: CreateFlagFallthrough2): string;
export declare function createFlagFallthrough2FromJSON(jsonString: string): SafeParseResult<CreateFlagFallthrough2, SDKValidationError>;
/** @internal */
export declare const CreateFlagFallthrough1$inboundSchema: z.ZodType<CreateFlagFallthrough1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFallthrough1$Outbound = {
    type?: any | undefined;
    variantId: string;
};
/** @internal */
export declare const CreateFlagFallthrough1$outboundSchema: z.ZodType<CreateFlagFallthrough1$Outbound, z.ZodTypeDef, CreateFlagFallthrough1>;
export declare function createFlagFallthrough1ToJSON(createFlagFallthrough1: CreateFlagFallthrough1): string;
export declare function createFlagFallthrough1FromJSON(jsonString: string): SafeParseResult<CreateFlagFallthrough1, SDKValidationError>;
/** @internal */
export declare const CreateFlagFallthrough$inboundSchema: z.ZodType<CreateFlagFallthrough, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFallthrough$Outbound = CreateFlagFallthrough2$Outbound | CreateFlagFallthrough1$Outbound;
/** @internal */
export declare const CreateFlagFallthrough$outboundSchema: z.ZodType<CreateFlagFallthrough$Outbound, z.ZodTypeDef, CreateFlagFallthrough>;
export declare function createFlagFallthroughToJSON(createFlagFallthrough: CreateFlagFallthrough): string;
export declare function createFlagFallthroughFromJSON(jsonString: string): SafeParseResult<CreateFlagFallthrough, SDKValidationError>;
/** @internal */
export declare const CreateFlagEnvironments$inboundSchema: z.ZodType<CreateFlagEnvironments, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagEnvironments$Outbound = {
    active: boolean;
    reuse?: CreateFlagReuse$Outbound | undefined;
    targets?: {
        [k: string]: {
            [k: string]: {
                [k: string]: Array<CreateFlagTargets$Outbound>;
            };
        };
    } | undefined;
    pausedOutcome: CreateFlagPausedOutcome$Outbound;
    rules: Array<CreateFlagRules$Outbound>;
    fallthrough: CreateFlagFallthrough2$Outbound | CreateFlagFallthrough1$Outbound;
    revision?: number | undefined;
};
/** @internal */
export declare const CreateFlagEnvironments$outboundSchema: z.ZodType<CreateFlagEnvironments$Outbound, z.ZodTypeDef, CreateFlagEnvironments>;
export declare function createFlagEnvironmentsToJSON(createFlagEnvironments: CreateFlagEnvironments): string;
export declare function createFlagEnvironmentsFromJSON(jsonString: string): SafeParseResult<CreateFlagEnvironments, SDKValidationError>;
/** @internal */
export declare const CreateFlagState$inboundSchema: z.ZodNativeEnum<typeof CreateFlagState>;
/** @internal */
export declare const CreateFlagState$outboundSchema: z.ZodNativeEnum<typeof CreateFlagState>;
/** @internal */
export declare const CreateFlagRequestBody$inboundSchema: z.ZodType<CreateFlagRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagRequestBody$Outbound = {
    slug: string;
    kind: string;
    variants?: Array<CreateFlagVariants$Outbound> | undefined;
    environments: {
        [k: string]: CreateFlagEnvironments$Outbound;
    };
    seed?: number | undefined;
    description?: string | undefined;
    state?: string | undefined;
};
/** @internal */
export declare const CreateFlagRequestBody$outboundSchema: z.ZodType<CreateFlagRequestBody$Outbound, z.ZodTypeDef, CreateFlagRequestBody>;
export declare function createFlagRequestBodyToJSON(createFlagRequestBody: CreateFlagRequestBody): string;
export declare function createFlagRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateFlagRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateFlagRequest$inboundSchema: z.ZodType<CreateFlagRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagRequest$Outbound = {
    projectIdOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateFlagRequestBody$Outbound | undefined;
};
/** @internal */
export declare const CreateFlagRequest$outboundSchema: z.ZodType<CreateFlagRequest$Outbound, z.ZodTypeDef, CreateFlagRequest>;
export declare function createFlagRequestToJSON(createFlagRequest: CreateFlagRequest): string;
export declare function createFlagRequestFromJSON(jsonString: string): SafeParseResult<CreateFlagRequest, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsValue$inboundSchema: z.ZodType<CreateFlagFeatureFlagsValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsValue$Outbound = string | number | boolean;
/** @internal */
export declare const CreateFlagFeatureFlagsValue$outboundSchema: z.ZodType<CreateFlagFeatureFlagsValue$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsValue>;
export declare function createFlagFeatureFlagsValueToJSON(createFlagFeatureFlagsValue: CreateFlagFeatureFlagsValue): string;
export declare function createFlagFeatureFlagsValueFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsValue, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsVariants$inboundSchema: z.ZodType<CreateFlagFeatureFlagsVariants, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsVariants$Outbound = {
    description?: string | undefined;
    label?: string | undefined;
    value: string | number | boolean;
    id: string;
};
/** @internal */
export declare const CreateFlagFeatureFlagsVariants$outboundSchema: z.ZodType<CreateFlagFeatureFlagsVariants$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsVariants>;
export declare function createFlagFeatureFlagsVariantsToJSON(createFlagFeatureFlagsVariants: CreateFlagFeatureFlagsVariants): string;
export declare function createFlagFeatureFlagsVariantsFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsVariants, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsReuse$inboundSchema: z.ZodType<CreateFlagFeatureFlagsReuse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsReuse$Outbound = {
    active: boolean;
    environment: string;
};
/** @internal */
export declare const CreateFlagFeatureFlagsReuse$outboundSchema: z.ZodType<CreateFlagFeatureFlagsReuse$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsReuse>;
export declare function createFlagFeatureFlagsReuseToJSON(createFlagFeatureFlagsReuse: CreateFlagFeatureFlagsReuse): string;
export declare function createFlagFeatureFlagsReuseFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsReuse, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsTargets$inboundSchema: z.ZodType<CreateFlagFeatureFlagsTargets, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsTargets$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const CreateFlagFeatureFlagsTargets$outboundSchema: z.ZodType<CreateFlagFeatureFlagsTargets$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsTargets>;
export declare function createFlagFeatureFlagsTargetsToJSON(createFlagFeatureFlagsTargets: CreateFlagFeatureFlagsTargets): string;
export declare function createFlagFeatureFlagsTargetsFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsTargets, SDKValidationError>;
/** @internal */
export declare const CreateFlagType$inboundSchema: z.ZodNativeEnum<typeof CreateFlagType>;
/** @internal */
export declare const CreateFlagType$outboundSchema: z.ZodNativeEnum<typeof CreateFlagType>;
/** @internal */
export declare const CreateFlagFeatureFlagsPausedOutcome$inboundSchema: z.ZodType<CreateFlagFeatureFlagsPausedOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsPausedOutcome$Outbound = {
    type: string;
    variantId: string;
};
/** @internal */
export declare const CreateFlagFeatureFlagsPausedOutcome$outboundSchema: z.ZodType<CreateFlagFeatureFlagsPausedOutcome$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsPausedOutcome>;
export declare function createFlagFeatureFlagsPausedOutcomeToJSON(createFlagFeatureFlagsPausedOutcome: CreateFlagFeatureFlagsPausedOutcome): string;
export declare function createFlagFeatureFlagsPausedOutcomeFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsPausedOutcome, SDKValidationError>;
/** @internal */
export declare const CreateFlagFallthroughFeatureFlagsResponseType$inboundSchema: z.ZodNativeEnum<typeof CreateFlagFallthroughFeatureFlagsResponseType>;
/** @internal */
export declare const CreateFlagFallthroughFeatureFlagsResponseType$outboundSchema: z.ZodNativeEnum<typeof CreateFlagFallthroughFeatureFlagsResponseType>;
/** @internal */
export declare const CreateFlagFallthroughBase$inboundSchema: z.ZodType<CreateFlagFallthroughBase, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFallthroughBase$Outbound = {
    type: string;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const CreateFlagFallthroughBase$outboundSchema: z.ZodType<CreateFlagFallthroughBase$Outbound, z.ZodTypeDef, CreateFlagFallthroughBase>;
export declare function createFlagFallthroughBaseToJSON(createFlagFallthroughBase: CreateFlagFallthroughBase): string;
export declare function createFlagFallthroughBaseFromJSON(jsonString: string): SafeParseResult<CreateFlagFallthroughBase, SDKValidationError>;
/** @internal */
export declare const CreateFlagFallthroughFeatureFlags2$inboundSchema: z.ZodType<CreateFlagFallthroughFeatureFlags2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFallthroughFeatureFlags2$Outbound = {
    type: "split";
    base: CreateFlagFallthroughBase$Outbound;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
/** @internal */
export declare const CreateFlagFallthroughFeatureFlags2$outboundSchema: z.ZodType<CreateFlagFallthroughFeatureFlags2$Outbound, z.ZodTypeDef, CreateFlagFallthroughFeatureFlags2>;
export declare function createFlagFallthroughFeatureFlags2ToJSON(createFlagFallthroughFeatureFlags2: CreateFlagFallthroughFeatureFlags2): string;
export declare function createFlagFallthroughFeatureFlags2FromJSON(jsonString: string): SafeParseResult<CreateFlagFallthroughFeatureFlags2, SDKValidationError>;
/** @internal */
export declare const CreateFlagFallthroughFeatureFlags1$inboundSchema: z.ZodType<CreateFlagFallthroughFeatureFlags1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFallthroughFeatureFlags1$Outbound = {
    type: "variant";
    variantId: string;
};
/** @internal */
export declare const CreateFlagFallthroughFeatureFlags1$outboundSchema: z.ZodType<CreateFlagFallthroughFeatureFlags1$Outbound, z.ZodTypeDef, CreateFlagFallthroughFeatureFlags1>;
export declare function createFlagFallthroughFeatureFlags1ToJSON(createFlagFallthroughFeatureFlags1: CreateFlagFallthroughFeatureFlags1): string;
export declare function createFlagFallthroughFeatureFlags1FromJSON(jsonString: string): SafeParseResult<CreateFlagFallthroughFeatureFlags1, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsFallthrough$inboundSchema: z.ZodType<CreateFlagFeatureFlagsFallthrough, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsFallthrough$Outbound = CreateFlagFallthroughFeatureFlags1$Outbound | CreateFlagFallthroughFeatureFlags2$Outbound;
/** @internal */
export declare const CreateFlagFeatureFlagsFallthrough$outboundSchema: z.ZodType<CreateFlagFeatureFlagsFallthrough$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsFallthrough>;
export declare function createFlagFeatureFlagsFallthroughToJSON(createFlagFeatureFlagsFallthrough: CreateFlagFeatureFlagsFallthrough): string;
export declare function createFlagFeatureFlagsFallthroughFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsFallthrough, SDKValidationError>;
/** @internal */
export declare const CreateFlagOutcomeFeatureFlagsResponseType$inboundSchema: z.ZodNativeEnum<typeof CreateFlagOutcomeFeatureFlagsResponseType>;
/** @internal */
export declare const CreateFlagOutcomeFeatureFlagsResponseType$outboundSchema: z.ZodNativeEnum<typeof CreateFlagOutcomeFeatureFlagsResponseType>;
/** @internal */
export declare const CreateFlagOutcomeFeatureFlagsBase$inboundSchema: z.ZodType<CreateFlagOutcomeFeatureFlagsBase, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagOutcomeFeatureFlagsBase$Outbound = {
    type: string;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const CreateFlagOutcomeFeatureFlagsBase$outboundSchema: z.ZodType<CreateFlagOutcomeFeatureFlagsBase$Outbound, z.ZodTypeDef, CreateFlagOutcomeFeatureFlagsBase>;
export declare function createFlagOutcomeFeatureFlagsBaseToJSON(createFlagOutcomeFeatureFlagsBase: CreateFlagOutcomeFeatureFlagsBase): string;
export declare function createFlagOutcomeFeatureFlagsBaseFromJSON(jsonString: string): SafeParseResult<CreateFlagOutcomeFeatureFlagsBase, SDKValidationError>;
/** @internal */
export declare const CreateFlagOutcomeFeatureFlags2$inboundSchema: z.ZodType<CreateFlagOutcomeFeatureFlags2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagOutcomeFeatureFlags2$Outbound = {
    type: "split";
    base: CreateFlagOutcomeFeatureFlagsBase$Outbound;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
/** @internal */
export declare const CreateFlagOutcomeFeatureFlags2$outboundSchema: z.ZodType<CreateFlagOutcomeFeatureFlags2$Outbound, z.ZodTypeDef, CreateFlagOutcomeFeatureFlags2>;
export declare function createFlagOutcomeFeatureFlags2ToJSON(createFlagOutcomeFeatureFlags2: CreateFlagOutcomeFeatureFlags2): string;
export declare function createFlagOutcomeFeatureFlags2FromJSON(jsonString: string): SafeParseResult<CreateFlagOutcomeFeatureFlags2, SDKValidationError>;
/** @internal */
export declare const CreateFlagOutcomeFeatureFlags1$inboundSchema: z.ZodType<CreateFlagOutcomeFeatureFlags1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagOutcomeFeatureFlags1$Outbound = {
    type: "variant";
    variantId: string;
};
/** @internal */
export declare const CreateFlagOutcomeFeatureFlags1$outboundSchema: z.ZodType<CreateFlagOutcomeFeatureFlags1$Outbound, z.ZodTypeDef, CreateFlagOutcomeFeatureFlags1>;
export declare function createFlagOutcomeFeatureFlags1ToJSON(createFlagOutcomeFeatureFlags1: CreateFlagOutcomeFeatureFlags1): string;
export declare function createFlagOutcomeFeatureFlags1FromJSON(jsonString: string): SafeParseResult<CreateFlagOutcomeFeatureFlags1, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsOutcome$inboundSchema: z.ZodType<CreateFlagFeatureFlagsOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsOutcome$Outbound = CreateFlagOutcomeFeatureFlags1$Outbound | CreateFlagOutcomeFeatureFlags2$Outbound;
/** @internal */
export declare const CreateFlagFeatureFlagsOutcome$outboundSchema: z.ZodType<CreateFlagFeatureFlagsOutcome$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsOutcome>;
export declare function createFlagFeatureFlagsOutcomeToJSON(createFlagFeatureFlagsOutcome: CreateFlagFeatureFlagsOutcome): string;
export declare function createFlagFeatureFlagsOutcomeFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsOutcome, SDKValidationError>;
/** @internal */
export declare const CreateFlagRhsFeatureFlagsResponseType$inboundSchema: z.ZodNativeEnum<typeof CreateFlagRhsFeatureFlagsResponseType>;
/** @internal */
export declare const CreateFlagRhsFeatureFlagsResponseType$outboundSchema: z.ZodNativeEnum<typeof CreateFlagRhsFeatureFlagsResponseType>;
/** @internal */
export declare const CreateFlagRhs4$inboundSchema: z.ZodType<CreateFlagRhs4, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagRhs4$Outbound = {
    type: string;
    pattern: string;
    flags: string;
};
/** @internal */
export declare const CreateFlagRhs4$outboundSchema: z.ZodType<CreateFlagRhs4$Outbound, z.ZodTypeDef, CreateFlagRhs4>;
export declare function createFlagRhs4ToJSON(createFlagRhs4: CreateFlagRhs4): string;
export declare function createFlagRhs4FromJSON(jsonString: string): SafeParseResult<CreateFlagRhs4, SDKValidationError>;
/** @internal */
export declare const CreateFlagRhsFeatureFlagsType$inboundSchema: z.ZodNativeEnum<typeof CreateFlagRhsFeatureFlagsType>;
/** @internal */
export declare const CreateFlagRhsFeatureFlagsType$outboundSchema: z.ZodNativeEnum<typeof CreateFlagRhsFeatureFlagsType>;
/** @internal */
export declare const CreateFlagItemsFeatureFlags2$inboundSchema: z.ZodType<CreateFlagItemsFeatureFlags2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagItemsFeatureFlags2$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const CreateFlagItemsFeatureFlags2$outboundSchema: z.ZodType<CreateFlagItemsFeatureFlags2$Outbound, z.ZodTypeDef, CreateFlagItemsFeatureFlags2>;
export declare function createFlagItemsFeatureFlags2ToJSON(createFlagItemsFeatureFlags2: CreateFlagItemsFeatureFlags2): string;
export declare function createFlagItemsFeatureFlags2FromJSON(jsonString: string): SafeParseResult<CreateFlagItemsFeatureFlags2, SDKValidationError>;
/** @internal */
export declare const CreateFlagItemsFeatureFlags1$inboundSchema: z.ZodType<CreateFlagItemsFeatureFlags1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagItemsFeatureFlags1$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
/** @internal */
export declare const CreateFlagItemsFeatureFlags1$outboundSchema: z.ZodType<CreateFlagItemsFeatureFlags1$Outbound, z.ZodTypeDef, CreateFlagItemsFeatureFlags1>;
export declare function createFlagItemsFeatureFlags1ToJSON(createFlagItemsFeatureFlags1: CreateFlagItemsFeatureFlags1): string;
export declare function createFlagItemsFeatureFlags1FromJSON(jsonString: string): SafeParseResult<CreateFlagItemsFeatureFlags1, SDKValidationError>;
/** @internal */
export declare const CreateFlagRhsFeatureFlagsItems$inboundSchema: z.ZodType<CreateFlagRhsFeatureFlagsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagRhsFeatureFlagsItems$Outbound = CreateFlagItemsFeatureFlags1$Outbound | CreateFlagItemsFeatureFlags2$Outbound;
/** @internal */
export declare const CreateFlagRhsFeatureFlagsItems$outboundSchema: z.ZodType<CreateFlagRhsFeatureFlagsItems$Outbound, z.ZodTypeDef, CreateFlagRhsFeatureFlagsItems>;
export declare function createFlagRhsFeatureFlagsItemsToJSON(createFlagRhsFeatureFlagsItems: CreateFlagRhsFeatureFlagsItems): string;
export declare function createFlagRhsFeatureFlagsItemsFromJSON(jsonString: string): SafeParseResult<CreateFlagRhsFeatureFlagsItems, SDKValidationError>;
/** @internal */
export declare const CreateFlagRhs3$inboundSchema: z.ZodType<CreateFlagRhs3, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagRhs3$Outbound = {
    type: string;
    items: Array<CreateFlagItemsFeatureFlags1$Outbound | CreateFlagItemsFeatureFlags2$Outbound>;
};
/** @internal */
export declare const CreateFlagRhs3$outboundSchema: z.ZodType<CreateFlagRhs3$Outbound, z.ZodTypeDef, CreateFlagRhs3>;
export declare function createFlagRhs3ToJSON(createFlagRhs3: CreateFlagRhs3): string;
export declare function createFlagRhs3FromJSON(jsonString: string): SafeParseResult<CreateFlagRhs3, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsRhs$inboundSchema: z.ZodType<CreateFlagFeatureFlagsRhs, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsRhs$Outbound = CreateFlagRhs4$Outbound | CreateFlagRhs3$Outbound | string | number | boolean;
/** @internal */
export declare const CreateFlagFeatureFlagsRhs$outboundSchema: z.ZodType<CreateFlagFeatureFlagsRhs$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsRhs>;
export declare function createFlagFeatureFlagsRhsToJSON(createFlagFeatureFlagsRhs: CreateFlagFeatureFlagsRhs): string;
export declare function createFlagFeatureFlagsRhsFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsRhs, SDKValidationError>;
/** @internal */
export declare const CreateFlagLhsFeatureFlags2$inboundSchema: z.ZodType<CreateFlagLhsFeatureFlags2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagLhsFeatureFlags2$Outbound = {
    type: "entity";
    kind: string;
    attribute: string;
};
/** @internal */
export declare const CreateFlagLhsFeatureFlags2$outboundSchema: z.ZodType<CreateFlagLhsFeatureFlags2$Outbound, z.ZodTypeDef, CreateFlagLhsFeatureFlags2>;
export declare function createFlagLhsFeatureFlags2ToJSON(createFlagLhsFeatureFlags2: CreateFlagLhsFeatureFlags2): string;
export declare function createFlagLhsFeatureFlags2FromJSON(jsonString: string): SafeParseResult<CreateFlagLhsFeatureFlags2, SDKValidationError>;
/** @internal */
export declare const CreateFlagLhsFeatureFlags1$inboundSchema: z.ZodType<CreateFlagLhsFeatureFlags1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagLhsFeatureFlags1$Outbound = {
    type: "segment";
};
/** @internal */
export declare const CreateFlagLhsFeatureFlags1$outboundSchema: z.ZodType<CreateFlagLhsFeatureFlags1$Outbound, z.ZodTypeDef, CreateFlagLhsFeatureFlags1>;
export declare function createFlagLhsFeatureFlags1ToJSON(createFlagLhsFeatureFlags1: CreateFlagLhsFeatureFlags1): string;
export declare function createFlagLhsFeatureFlags1FromJSON(jsonString: string): SafeParseResult<CreateFlagLhsFeatureFlags1, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsLhs$inboundSchema: z.ZodType<CreateFlagFeatureFlagsLhs, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsLhs$Outbound = CreateFlagLhsFeatureFlags1$Outbound | CreateFlagLhsFeatureFlags2$Outbound;
/** @internal */
export declare const CreateFlagFeatureFlagsLhs$outboundSchema: z.ZodType<CreateFlagFeatureFlagsLhs$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsLhs>;
export declare function createFlagFeatureFlagsLhsToJSON(createFlagFeatureFlagsLhs: CreateFlagFeatureFlagsLhs): string;
export declare function createFlagFeatureFlagsLhsFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsLhs, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsCmp$inboundSchema: z.ZodNativeEnum<typeof CreateFlagFeatureFlagsCmp>;
/** @internal */
export declare const CreateFlagFeatureFlagsCmp$outboundSchema: z.ZodNativeEnum<typeof CreateFlagFeatureFlagsCmp>;
/** @internal */
export declare const CreateFlagFeatureFlagsConditions$inboundSchema: z.ZodType<CreateFlagFeatureFlagsConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsConditions$Outbound = {
    rhs?: CreateFlagRhs4$Outbound | CreateFlagRhs3$Outbound | string | number | boolean | undefined;
    lhs: CreateFlagLhsFeatureFlags1$Outbound | CreateFlagLhsFeatureFlags2$Outbound;
    cmp: string;
};
/** @internal */
export declare const CreateFlagFeatureFlagsConditions$outboundSchema: z.ZodType<CreateFlagFeatureFlagsConditions$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsConditions>;
export declare function createFlagFeatureFlagsConditionsToJSON(createFlagFeatureFlagsConditions: CreateFlagFeatureFlagsConditions): string;
export declare function createFlagFeatureFlagsConditionsFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsConditions, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsRules$inboundSchema: z.ZodType<CreateFlagFeatureFlagsRules, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsRules$Outbound = {
    id: string;
    outcome: CreateFlagOutcomeFeatureFlags1$Outbound | CreateFlagOutcomeFeatureFlags2$Outbound;
    conditions: Array<CreateFlagFeatureFlagsConditions$Outbound>;
};
/** @internal */
export declare const CreateFlagFeatureFlagsRules$outboundSchema: z.ZodType<CreateFlagFeatureFlagsRules$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsRules>;
export declare function createFlagFeatureFlagsRulesToJSON(createFlagFeatureFlagsRules: CreateFlagFeatureFlagsRules): string;
export declare function createFlagFeatureFlagsRulesFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsRules, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsEnvironments$inboundSchema: z.ZodType<CreateFlagFeatureFlagsEnvironments, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagFeatureFlagsEnvironments$Outbound = {
    reuse?: CreateFlagFeatureFlagsReuse$Outbound | undefined;
    targets?: {
        [k: string]: {
            [k: string]: {
                [k: string]: Array<CreateFlagFeatureFlagsTargets$Outbound>;
            };
        };
    } | undefined;
    revision?: number | undefined;
    pausedOutcome: CreateFlagFeatureFlagsPausedOutcome$Outbound;
    fallthrough: CreateFlagFallthroughFeatureFlags1$Outbound | CreateFlagFallthroughFeatureFlags2$Outbound;
    active: boolean;
    rules: Array<CreateFlagFeatureFlagsRules$Outbound>;
};
/** @internal */
export declare const CreateFlagFeatureFlagsEnvironments$outboundSchema: z.ZodType<CreateFlagFeatureFlagsEnvironments$Outbound, z.ZodTypeDef, CreateFlagFeatureFlagsEnvironments>;
export declare function createFlagFeatureFlagsEnvironmentsToJSON(createFlagFeatureFlagsEnvironments: CreateFlagFeatureFlagsEnvironments): string;
export declare function createFlagFeatureFlagsEnvironmentsFromJSON(jsonString: string): SafeParseResult<CreateFlagFeatureFlagsEnvironments, SDKValidationError>;
/** @internal */
export declare const CreateFlagFeatureFlagsKind$inboundSchema: z.ZodNativeEnum<typeof CreateFlagFeatureFlagsKind>;
/** @internal */
export declare const CreateFlagFeatureFlagsKind$outboundSchema: z.ZodNativeEnum<typeof CreateFlagFeatureFlagsKind>;
/** @internal */
export declare const CreateFlagFeatureFlagsState$inboundSchema: z.ZodNativeEnum<typeof CreateFlagFeatureFlagsState>;
/** @internal */
export declare const CreateFlagFeatureFlagsState$outboundSchema: z.ZodNativeEnum<typeof CreateFlagFeatureFlagsState>;
/** @internal */
export declare const CreateFlagTypeName$inboundSchema: z.ZodNativeEnum<typeof CreateFlagTypeName>;
/** @internal */
export declare const CreateFlagTypeName$outboundSchema: z.ZodNativeEnum<typeof CreateFlagTypeName>;
/** @internal */
export declare const CreateFlagResponseBody$inboundSchema: z.ZodType<CreateFlagResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFlagResponseBody$Outbound = {
    description?: string | undefined;
    variants: Array<CreateFlagFeatureFlagsVariants$Outbound>;
    id: string;
    environments: {
        [k: string]: CreateFlagFeatureFlagsEnvironments$Outbound;
    };
    kind: string;
    revision: number;
    seed: number;
    state: string;
    slug: string;
    createdAt: number;
    updatedAt: number;
    createdBy: string;
    ownerId: string;
    projectId: string;
    typeName: string;
};
/** @internal */
export declare const CreateFlagResponseBody$outboundSchema: z.ZodType<CreateFlagResponseBody$Outbound, z.ZodTypeDef, CreateFlagResponseBody>;
export declare function createFlagResponseBodyToJSON(createFlagResponseBody: CreateFlagResponseBody): string;
export declare function createFlagResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateFlagResponseBody, SDKValidationError>;
//# sourceMappingURL=createflagop.d.ts.map