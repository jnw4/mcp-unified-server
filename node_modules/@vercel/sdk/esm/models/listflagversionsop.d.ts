import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListFlagVersionsRequest = {
    projectIdOrName: string;
    flagIdOrSlug: string;
    limit?: number | undefined;
    /**
     * Pagination cursor
     */
    cursor?: string | undefined;
    /**
     * Environment to filter by
     */
    environment?: string | undefined;
    /**
     * Whether to include metadata
     */
    withMetadata?: boolean | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type ListFlagVersionsValue = string | number | boolean;
export type ListFlagVersionsVariants = {
    description?: string | undefined;
    label?: string | undefined;
    value: string | number | boolean;
    id: string;
};
export type ListFlagVersionsReuse = {
    active: boolean;
    environment: string;
};
export type ListFlagVersionsTargets = {
    note?: string | undefined;
    value: string;
};
export declare const ListFlagVersionsType: {
    readonly Variant: "variant";
};
export type ListFlagVersionsType = ClosedEnum<typeof ListFlagVersionsType>;
export type ListFlagVersionsPausedOutcome = {
    type: ListFlagVersionsType;
    variantId: string;
};
export declare const ListFlagVersionsFallthroughFeatureFlagsResponseType: {
    readonly Entity: "entity";
};
export type ListFlagVersionsFallthroughFeatureFlagsResponseType = ClosedEnum<typeof ListFlagVersionsFallthroughFeatureFlagsResponseType>;
export type ListFlagVersionsFallthroughBase = {
    type: ListFlagVersionsFallthroughFeatureFlagsResponseType;
    kind: string;
    attribute: string;
};
export type ListFlagVersionsFallthrough2 = {
    type: "split";
    base: ListFlagVersionsFallthroughBase;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
export type ListFlagVersionsFallthrough1 = {
    type: "variant";
    variantId: string;
};
export type ListFlagVersionsFallthrough = ListFlagVersionsFallthrough1 | ListFlagVersionsFallthrough2;
export declare const ListFlagVersionsOutcomeFeatureFlagsResponseType: {
    readonly Entity: "entity";
};
export type ListFlagVersionsOutcomeFeatureFlagsResponseType = ClosedEnum<typeof ListFlagVersionsOutcomeFeatureFlagsResponseType>;
export type ListFlagVersionsOutcomeBase = {
    type: ListFlagVersionsOutcomeFeatureFlagsResponseType;
    kind: string;
    attribute: string;
};
export type ListFlagVersionsOutcome2 = {
    type: "split";
    base: ListFlagVersionsOutcomeBase;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
export type ListFlagVersionsOutcome1 = {
    type: "variant";
    variantId: string;
};
export type ListFlagVersionsOutcome = ListFlagVersionsOutcome1 | ListFlagVersionsOutcome2;
export declare const ListFlagVersionsRhsFeatureFlagsType: {
    readonly Regex: "regex";
};
export type ListFlagVersionsRhsFeatureFlagsType = ClosedEnum<typeof ListFlagVersionsRhsFeatureFlagsType>;
export type ListFlagVersionsRhs4 = {
    type: ListFlagVersionsRhsFeatureFlagsType;
    pattern: string;
    flags: string;
};
export declare const ListFlagVersionsRhsType: {
    readonly ListInline: "list/inline";
    readonly List: "list";
};
export type ListFlagVersionsRhsType = ClosedEnum<typeof ListFlagVersionsRhsType>;
export type ListFlagVersionsItems2 = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
export type ListFlagVersionsItems1 = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
export type ListFlagVersionsRhsItems = ListFlagVersionsItems1 | ListFlagVersionsItems2;
export type ListFlagVersionsRhs3 = {
    type: ListFlagVersionsRhsType;
    items: Array<ListFlagVersionsItems1 | ListFlagVersionsItems2>;
};
export type ListFlagVersionsRhs = ListFlagVersionsRhs4 | ListFlagVersionsRhs3 | string | number | boolean;
export type ListFlagVersionsLhs2 = {
    type: "entity";
    kind: string;
    attribute: string;
};
export type ListFlagVersionsLhs1 = {
    type: "segment";
};
export type ListFlagVersionsLhs = ListFlagVersionsLhs1 | ListFlagVersionsLhs2;
export declare const ListFlagVersionsCmp: {
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
export type ListFlagVersionsCmp = ClosedEnum<typeof ListFlagVersionsCmp>;
export type ListFlagVersionsConditions = {
    rhs?: ListFlagVersionsRhs4 | ListFlagVersionsRhs3 | string | number | boolean | undefined;
    lhs: ListFlagVersionsLhs1 | ListFlagVersionsLhs2;
    cmp: ListFlagVersionsCmp;
};
export type ListFlagVersionsRules = {
    id: string;
    outcome: ListFlagVersionsOutcome1 | ListFlagVersionsOutcome2;
    conditions: Array<ListFlagVersionsConditions>;
};
export type ListFlagVersionsEnvironments = {
    reuse?: ListFlagVersionsReuse | undefined;
    targets?: {
        [k: string]: {
            [k: string]: {
                [k: string]: Array<ListFlagVersionsTargets>;
            };
        };
    } | undefined;
    revision?: number | undefined;
    pausedOutcome: ListFlagVersionsPausedOutcome;
    fallthrough: ListFlagVersionsFallthrough1 | ListFlagVersionsFallthrough2;
    active: boolean;
    rules: Array<ListFlagVersionsRules>;
};
export declare const ListFlagVersionsState: {
    readonly Active: "active";
    readonly Archived: "archived";
};
export type ListFlagVersionsState = ClosedEnum<typeof ListFlagVersionsState>;
export type ListFlagVersionsData = {
    description?: string | undefined;
    variants: Array<ListFlagVersionsVariants>;
    environments: {
        [k: string]: ListFlagVersionsEnvironments;
    };
    seed: number;
    state: ListFlagVersionsState;
};
export type ListFlagVersionsCreator = {
    id: string;
    name: string;
};
export type ListFlagVersionsMetadata = {
    creator?: ListFlagVersionsCreator | undefined;
};
export type ListFlagVersionsVersions = {
    createdBy?: string | undefined;
    message?: string | undefined;
    id: string;
    revision: number;
    createdAt: number;
    data: ListFlagVersionsData;
    flagId: string;
    changedEnvironments: Array<string>;
    metadata?: ListFlagVersionsMetadata | undefined;
};
export type ListFlagVersionsPagination = {};
export type ListFlagVersionsResponseBody = {
    versions: Array<ListFlagVersionsVersions>;
    pagination: ListFlagVersionsPagination;
};
/** @internal */
export declare const ListFlagVersionsRequest$inboundSchema: z.ZodType<ListFlagVersionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsRequest$Outbound = {
    projectIdOrName: string;
    flagIdOrSlug: string;
    limit: number;
    cursor?: string | undefined;
    environment?: string | undefined;
    withMetadata: boolean;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListFlagVersionsRequest$outboundSchema: z.ZodType<ListFlagVersionsRequest$Outbound, z.ZodTypeDef, ListFlagVersionsRequest>;
export declare function listFlagVersionsRequestToJSON(listFlagVersionsRequest: ListFlagVersionsRequest): string;
export declare function listFlagVersionsRequestFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsRequest, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsValue$inboundSchema: z.ZodType<ListFlagVersionsValue, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsValue$Outbound = string | number | boolean;
/** @internal */
export declare const ListFlagVersionsValue$outboundSchema: z.ZodType<ListFlagVersionsValue$Outbound, z.ZodTypeDef, ListFlagVersionsValue>;
export declare function listFlagVersionsValueToJSON(listFlagVersionsValue: ListFlagVersionsValue): string;
export declare function listFlagVersionsValueFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsValue, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsVariants$inboundSchema: z.ZodType<ListFlagVersionsVariants, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsVariants$Outbound = {
    description?: string | undefined;
    label?: string | undefined;
    value: string | number | boolean;
    id: string;
};
/** @internal */
export declare const ListFlagVersionsVariants$outboundSchema: z.ZodType<ListFlagVersionsVariants$Outbound, z.ZodTypeDef, ListFlagVersionsVariants>;
export declare function listFlagVersionsVariantsToJSON(listFlagVersionsVariants: ListFlagVersionsVariants): string;
export declare function listFlagVersionsVariantsFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsVariants, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsReuse$inboundSchema: z.ZodType<ListFlagVersionsReuse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsReuse$Outbound = {
    active: boolean;
    environment: string;
};
/** @internal */
export declare const ListFlagVersionsReuse$outboundSchema: z.ZodType<ListFlagVersionsReuse$Outbound, z.ZodTypeDef, ListFlagVersionsReuse>;
export declare function listFlagVersionsReuseToJSON(listFlagVersionsReuse: ListFlagVersionsReuse): string;
export declare function listFlagVersionsReuseFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsReuse, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsTargets$inboundSchema: z.ZodType<ListFlagVersionsTargets, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsTargets$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const ListFlagVersionsTargets$outboundSchema: z.ZodType<ListFlagVersionsTargets$Outbound, z.ZodTypeDef, ListFlagVersionsTargets>;
export declare function listFlagVersionsTargetsToJSON(listFlagVersionsTargets: ListFlagVersionsTargets): string;
export declare function listFlagVersionsTargetsFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsTargets, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsType$inboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsType>;
/** @internal */
export declare const ListFlagVersionsType$outboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsType>;
/** @internal */
export declare const ListFlagVersionsPausedOutcome$inboundSchema: z.ZodType<ListFlagVersionsPausedOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsPausedOutcome$Outbound = {
    type: string;
    variantId: string;
};
/** @internal */
export declare const ListFlagVersionsPausedOutcome$outboundSchema: z.ZodType<ListFlagVersionsPausedOutcome$Outbound, z.ZodTypeDef, ListFlagVersionsPausedOutcome>;
export declare function listFlagVersionsPausedOutcomeToJSON(listFlagVersionsPausedOutcome: ListFlagVersionsPausedOutcome): string;
export declare function listFlagVersionsPausedOutcomeFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsPausedOutcome, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsFallthroughFeatureFlagsResponseType$inboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsFallthroughFeatureFlagsResponseType>;
/** @internal */
export declare const ListFlagVersionsFallthroughFeatureFlagsResponseType$outboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsFallthroughFeatureFlagsResponseType>;
/** @internal */
export declare const ListFlagVersionsFallthroughBase$inboundSchema: z.ZodType<ListFlagVersionsFallthroughBase, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsFallthroughBase$Outbound = {
    type: string;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const ListFlagVersionsFallthroughBase$outboundSchema: z.ZodType<ListFlagVersionsFallthroughBase$Outbound, z.ZodTypeDef, ListFlagVersionsFallthroughBase>;
export declare function listFlagVersionsFallthroughBaseToJSON(listFlagVersionsFallthroughBase: ListFlagVersionsFallthroughBase): string;
export declare function listFlagVersionsFallthroughBaseFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsFallthroughBase, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsFallthrough2$inboundSchema: z.ZodType<ListFlagVersionsFallthrough2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsFallthrough2$Outbound = {
    type: "split";
    base: ListFlagVersionsFallthroughBase$Outbound;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
/** @internal */
export declare const ListFlagVersionsFallthrough2$outboundSchema: z.ZodType<ListFlagVersionsFallthrough2$Outbound, z.ZodTypeDef, ListFlagVersionsFallthrough2>;
export declare function listFlagVersionsFallthrough2ToJSON(listFlagVersionsFallthrough2: ListFlagVersionsFallthrough2): string;
export declare function listFlagVersionsFallthrough2FromJSON(jsonString: string): SafeParseResult<ListFlagVersionsFallthrough2, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsFallthrough1$inboundSchema: z.ZodType<ListFlagVersionsFallthrough1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsFallthrough1$Outbound = {
    type: "variant";
    variantId: string;
};
/** @internal */
export declare const ListFlagVersionsFallthrough1$outboundSchema: z.ZodType<ListFlagVersionsFallthrough1$Outbound, z.ZodTypeDef, ListFlagVersionsFallthrough1>;
export declare function listFlagVersionsFallthrough1ToJSON(listFlagVersionsFallthrough1: ListFlagVersionsFallthrough1): string;
export declare function listFlagVersionsFallthrough1FromJSON(jsonString: string): SafeParseResult<ListFlagVersionsFallthrough1, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsFallthrough$inboundSchema: z.ZodType<ListFlagVersionsFallthrough, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsFallthrough$Outbound = ListFlagVersionsFallthrough1$Outbound | ListFlagVersionsFallthrough2$Outbound;
/** @internal */
export declare const ListFlagVersionsFallthrough$outboundSchema: z.ZodType<ListFlagVersionsFallthrough$Outbound, z.ZodTypeDef, ListFlagVersionsFallthrough>;
export declare function listFlagVersionsFallthroughToJSON(listFlagVersionsFallthrough: ListFlagVersionsFallthrough): string;
export declare function listFlagVersionsFallthroughFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsFallthrough, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsOutcomeFeatureFlagsResponseType$inboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsOutcomeFeatureFlagsResponseType>;
/** @internal */
export declare const ListFlagVersionsOutcomeFeatureFlagsResponseType$outboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsOutcomeFeatureFlagsResponseType>;
/** @internal */
export declare const ListFlagVersionsOutcomeBase$inboundSchema: z.ZodType<ListFlagVersionsOutcomeBase, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsOutcomeBase$Outbound = {
    type: string;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const ListFlagVersionsOutcomeBase$outboundSchema: z.ZodType<ListFlagVersionsOutcomeBase$Outbound, z.ZodTypeDef, ListFlagVersionsOutcomeBase>;
export declare function listFlagVersionsOutcomeBaseToJSON(listFlagVersionsOutcomeBase: ListFlagVersionsOutcomeBase): string;
export declare function listFlagVersionsOutcomeBaseFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsOutcomeBase, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsOutcome2$inboundSchema: z.ZodType<ListFlagVersionsOutcome2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsOutcome2$Outbound = {
    type: "split";
    base: ListFlagVersionsOutcomeBase$Outbound;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
/** @internal */
export declare const ListFlagVersionsOutcome2$outboundSchema: z.ZodType<ListFlagVersionsOutcome2$Outbound, z.ZodTypeDef, ListFlagVersionsOutcome2>;
export declare function listFlagVersionsOutcome2ToJSON(listFlagVersionsOutcome2: ListFlagVersionsOutcome2): string;
export declare function listFlagVersionsOutcome2FromJSON(jsonString: string): SafeParseResult<ListFlagVersionsOutcome2, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsOutcome1$inboundSchema: z.ZodType<ListFlagVersionsOutcome1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsOutcome1$Outbound = {
    type: "variant";
    variantId: string;
};
/** @internal */
export declare const ListFlagVersionsOutcome1$outboundSchema: z.ZodType<ListFlagVersionsOutcome1$Outbound, z.ZodTypeDef, ListFlagVersionsOutcome1>;
export declare function listFlagVersionsOutcome1ToJSON(listFlagVersionsOutcome1: ListFlagVersionsOutcome1): string;
export declare function listFlagVersionsOutcome1FromJSON(jsonString: string): SafeParseResult<ListFlagVersionsOutcome1, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsOutcome$inboundSchema: z.ZodType<ListFlagVersionsOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsOutcome$Outbound = ListFlagVersionsOutcome1$Outbound | ListFlagVersionsOutcome2$Outbound;
/** @internal */
export declare const ListFlagVersionsOutcome$outboundSchema: z.ZodType<ListFlagVersionsOutcome$Outbound, z.ZodTypeDef, ListFlagVersionsOutcome>;
export declare function listFlagVersionsOutcomeToJSON(listFlagVersionsOutcome: ListFlagVersionsOutcome): string;
export declare function listFlagVersionsOutcomeFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsOutcome, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsRhsFeatureFlagsType$inboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsRhsFeatureFlagsType>;
/** @internal */
export declare const ListFlagVersionsRhsFeatureFlagsType$outboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsRhsFeatureFlagsType>;
/** @internal */
export declare const ListFlagVersionsRhs4$inboundSchema: z.ZodType<ListFlagVersionsRhs4, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsRhs4$Outbound = {
    type: string;
    pattern: string;
    flags: string;
};
/** @internal */
export declare const ListFlagVersionsRhs4$outboundSchema: z.ZodType<ListFlagVersionsRhs4$Outbound, z.ZodTypeDef, ListFlagVersionsRhs4>;
export declare function listFlagVersionsRhs4ToJSON(listFlagVersionsRhs4: ListFlagVersionsRhs4): string;
export declare function listFlagVersionsRhs4FromJSON(jsonString: string): SafeParseResult<ListFlagVersionsRhs4, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsRhsType$inboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsRhsType>;
/** @internal */
export declare const ListFlagVersionsRhsType$outboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsRhsType>;
/** @internal */
export declare const ListFlagVersionsItems2$inboundSchema: z.ZodType<ListFlagVersionsItems2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsItems2$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const ListFlagVersionsItems2$outboundSchema: z.ZodType<ListFlagVersionsItems2$Outbound, z.ZodTypeDef, ListFlagVersionsItems2>;
export declare function listFlagVersionsItems2ToJSON(listFlagVersionsItems2: ListFlagVersionsItems2): string;
export declare function listFlagVersionsItems2FromJSON(jsonString: string): SafeParseResult<ListFlagVersionsItems2, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsItems1$inboundSchema: z.ZodType<ListFlagVersionsItems1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsItems1$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
/** @internal */
export declare const ListFlagVersionsItems1$outboundSchema: z.ZodType<ListFlagVersionsItems1$Outbound, z.ZodTypeDef, ListFlagVersionsItems1>;
export declare function listFlagVersionsItems1ToJSON(listFlagVersionsItems1: ListFlagVersionsItems1): string;
export declare function listFlagVersionsItems1FromJSON(jsonString: string): SafeParseResult<ListFlagVersionsItems1, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsRhsItems$inboundSchema: z.ZodType<ListFlagVersionsRhsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsRhsItems$Outbound = ListFlagVersionsItems1$Outbound | ListFlagVersionsItems2$Outbound;
/** @internal */
export declare const ListFlagVersionsRhsItems$outboundSchema: z.ZodType<ListFlagVersionsRhsItems$Outbound, z.ZodTypeDef, ListFlagVersionsRhsItems>;
export declare function listFlagVersionsRhsItemsToJSON(listFlagVersionsRhsItems: ListFlagVersionsRhsItems): string;
export declare function listFlagVersionsRhsItemsFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsRhsItems, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsRhs3$inboundSchema: z.ZodType<ListFlagVersionsRhs3, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsRhs3$Outbound = {
    type: string;
    items: Array<ListFlagVersionsItems1$Outbound | ListFlagVersionsItems2$Outbound>;
};
/** @internal */
export declare const ListFlagVersionsRhs3$outboundSchema: z.ZodType<ListFlagVersionsRhs3$Outbound, z.ZodTypeDef, ListFlagVersionsRhs3>;
export declare function listFlagVersionsRhs3ToJSON(listFlagVersionsRhs3: ListFlagVersionsRhs3): string;
export declare function listFlagVersionsRhs3FromJSON(jsonString: string): SafeParseResult<ListFlagVersionsRhs3, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsRhs$inboundSchema: z.ZodType<ListFlagVersionsRhs, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsRhs$Outbound = ListFlagVersionsRhs4$Outbound | ListFlagVersionsRhs3$Outbound | string | number | boolean;
/** @internal */
export declare const ListFlagVersionsRhs$outboundSchema: z.ZodType<ListFlagVersionsRhs$Outbound, z.ZodTypeDef, ListFlagVersionsRhs>;
export declare function listFlagVersionsRhsToJSON(listFlagVersionsRhs: ListFlagVersionsRhs): string;
export declare function listFlagVersionsRhsFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsRhs, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsLhs2$inboundSchema: z.ZodType<ListFlagVersionsLhs2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsLhs2$Outbound = {
    type: "entity";
    kind: string;
    attribute: string;
};
/** @internal */
export declare const ListFlagVersionsLhs2$outboundSchema: z.ZodType<ListFlagVersionsLhs2$Outbound, z.ZodTypeDef, ListFlagVersionsLhs2>;
export declare function listFlagVersionsLhs2ToJSON(listFlagVersionsLhs2: ListFlagVersionsLhs2): string;
export declare function listFlagVersionsLhs2FromJSON(jsonString: string): SafeParseResult<ListFlagVersionsLhs2, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsLhs1$inboundSchema: z.ZodType<ListFlagVersionsLhs1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsLhs1$Outbound = {
    type: "segment";
};
/** @internal */
export declare const ListFlagVersionsLhs1$outboundSchema: z.ZodType<ListFlagVersionsLhs1$Outbound, z.ZodTypeDef, ListFlagVersionsLhs1>;
export declare function listFlagVersionsLhs1ToJSON(listFlagVersionsLhs1: ListFlagVersionsLhs1): string;
export declare function listFlagVersionsLhs1FromJSON(jsonString: string): SafeParseResult<ListFlagVersionsLhs1, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsLhs$inboundSchema: z.ZodType<ListFlagVersionsLhs, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsLhs$Outbound = ListFlagVersionsLhs1$Outbound | ListFlagVersionsLhs2$Outbound;
/** @internal */
export declare const ListFlagVersionsLhs$outboundSchema: z.ZodType<ListFlagVersionsLhs$Outbound, z.ZodTypeDef, ListFlagVersionsLhs>;
export declare function listFlagVersionsLhsToJSON(listFlagVersionsLhs: ListFlagVersionsLhs): string;
export declare function listFlagVersionsLhsFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsLhs, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsCmp$inboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsCmp>;
/** @internal */
export declare const ListFlagVersionsCmp$outboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsCmp>;
/** @internal */
export declare const ListFlagVersionsConditions$inboundSchema: z.ZodType<ListFlagVersionsConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsConditions$Outbound = {
    rhs?: ListFlagVersionsRhs4$Outbound | ListFlagVersionsRhs3$Outbound | string | number | boolean | undefined;
    lhs: ListFlagVersionsLhs1$Outbound | ListFlagVersionsLhs2$Outbound;
    cmp: string;
};
/** @internal */
export declare const ListFlagVersionsConditions$outboundSchema: z.ZodType<ListFlagVersionsConditions$Outbound, z.ZodTypeDef, ListFlagVersionsConditions>;
export declare function listFlagVersionsConditionsToJSON(listFlagVersionsConditions: ListFlagVersionsConditions): string;
export declare function listFlagVersionsConditionsFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsConditions, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsRules$inboundSchema: z.ZodType<ListFlagVersionsRules, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsRules$Outbound = {
    id: string;
    outcome: ListFlagVersionsOutcome1$Outbound | ListFlagVersionsOutcome2$Outbound;
    conditions: Array<ListFlagVersionsConditions$Outbound>;
};
/** @internal */
export declare const ListFlagVersionsRules$outboundSchema: z.ZodType<ListFlagVersionsRules$Outbound, z.ZodTypeDef, ListFlagVersionsRules>;
export declare function listFlagVersionsRulesToJSON(listFlagVersionsRules: ListFlagVersionsRules): string;
export declare function listFlagVersionsRulesFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsRules, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsEnvironments$inboundSchema: z.ZodType<ListFlagVersionsEnvironments, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsEnvironments$Outbound = {
    reuse?: ListFlagVersionsReuse$Outbound | undefined;
    targets?: {
        [k: string]: {
            [k: string]: {
                [k: string]: Array<ListFlagVersionsTargets$Outbound>;
            };
        };
    } | undefined;
    revision?: number | undefined;
    pausedOutcome: ListFlagVersionsPausedOutcome$Outbound;
    fallthrough: ListFlagVersionsFallthrough1$Outbound | ListFlagVersionsFallthrough2$Outbound;
    active: boolean;
    rules: Array<ListFlagVersionsRules$Outbound>;
};
/** @internal */
export declare const ListFlagVersionsEnvironments$outboundSchema: z.ZodType<ListFlagVersionsEnvironments$Outbound, z.ZodTypeDef, ListFlagVersionsEnvironments>;
export declare function listFlagVersionsEnvironmentsToJSON(listFlagVersionsEnvironments: ListFlagVersionsEnvironments): string;
export declare function listFlagVersionsEnvironmentsFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsEnvironments, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsState$inboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsState>;
/** @internal */
export declare const ListFlagVersionsState$outboundSchema: z.ZodNativeEnum<typeof ListFlagVersionsState>;
/** @internal */
export declare const ListFlagVersionsData$inboundSchema: z.ZodType<ListFlagVersionsData, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsData$Outbound = {
    description?: string | undefined;
    variants: Array<ListFlagVersionsVariants$Outbound>;
    environments: {
        [k: string]: ListFlagVersionsEnvironments$Outbound;
    };
    seed: number;
    state: string;
};
/** @internal */
export declare const ListFlagVersionsData$outboundSchema: z.ZodType<ListFlagVersionsData$Outbound, z.ZodTypeDef, ListFlagVersionsData>;
export declare function listFlagVersionsDataToJSON(listFlagVersionsData: ListFlagVersionsData): string;
export declare function listFlagVersionsDataFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsData, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsCreator$inboundSchema: z.ZodType<ListFlagVersionsCreator, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsCreator$Outbound = {
    id: string;
    name: string;
};
/** @internal */
export declare const ListFlagVersionsCreator$outboundSchema: z.ZodType<ListFlagVersionsCreator$Outbound, z.ZodTypeDef, ListFlagVersionsCreator>;
export declare function listFlagVersionsCreatorToJSON(listFlagVersionsCreator: ListFlagVersionsCreator): string;
export declare function listFlagVersionsCreatorFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsCreator, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsMetadata$inboundSchema: z.ZodType<ListFlagVersionsMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsMetadata$Outbound = {
    creator?: ListFlagVersionsCreator$Outbound | undefined;
};
/** @internal */
export declare const ListFlagVersionsMetadata$outboundSchema: z.ZodType<ListFlagVersionsMetadata$Outbound, z.ZodTypeDef, ListFlagVersionsMetadata>;
export declare function listFlagVersionsMetadataToJSON(listFlagVersionsMetadata: ListFlagVersionsMetadata): string;
export declare function listFlagVersionsMetadataFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsMetadata, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsVersions$inboundSchema: z.ZodType<ListFlagVersionsVersions, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsVersions$Outbound = {
    createdBy?: string | undefined;
    message?: string | undefined;
    id: string;
    revision: number;
    createdAt: number;
    data: ListFlagVersionsData$Outbound;
    flagId: string;
    changedEnvironments: Array<string>;
    metadata?: ListFlagVersionsMetadata$Outbound | undefined;
};
/** @internal */
export declare const ListFlagVersionsVersions$outboundSchema: z.ZodType<ListFlagVersionsVersions$Outbound, z.ZodTypeDef, ListFlagVersionsVersions>;
export declare function listFlagVersionsVersionsToJSON(listFlagVersionsVersions: ListFlagVersionsVersions): string;
export declare function listFlagVersionsVersionsFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsVersions, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsPagination$inboundSchema: z.ZodType<ListFlagVersionsPagination, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsPagination$Outbound = {};
/** @internal */
export declare const ListFlagVersionsPagination$outboundSchema: z.ZodType<ListFlagVersionsPagination$Outbound, z.ZodTypeDef, ListFlagVersionsPagination>;
export declare function listFlagVersionsPaginationToJSON(listFlagVersionsPagination: ListFlagVersionsPagination): string;
export declare function listFlagVersionsPaginationFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsPagination, SDKValidationError>;
/** @internal */
export declare const ListFlagVersionsResponseBody$inboundSchema: z.ZodType<ListFlagVersionsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFlagVersionsResponseBody$Outbound = {
    versions: Array<ListFlagVersionsVersions$Outbound>;
    pagination: ListFlagVersionsPagination$Outbound;
};
/** @internal */
export declare const ListFlagVersionsResponseBody$outboundSchema: z.ZodType<ListFlagVersionsResponseBody$Outbound, z.ZodTypeDef, ListFlagVersionsResponseBody>;
export declare function listFlagVersionsResponseBodyToJSON(listFlagVersionsResponseBody: ListFlagVersionsResponseBody): string;
export declare function listFlagVersionsResponseBodyFromJSON(jsonString: string): SafeParseResult<ListFlagVersionsResponseBody, SDKValidationError>;
//# sourceMappingURL=listflagversionsop.d.ts.map