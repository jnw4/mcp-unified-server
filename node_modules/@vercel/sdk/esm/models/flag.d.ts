import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type Value = string | number | boolean;
export type Variants = {
    description?: string | undefined;
    label?: string | undefined;
    value: string | number | boolean;
    id: string;
};
export type Reuse = {
    active: boolean;
    environment: string;
};
export type Targets = {
    note?: string | undefined;
    value: string;
};
export declare const FlagType: {
    readonly Variant: "variant";
};
export type FlagType = ClosedEnum<typeof FlagType>;
export type PausedOutcome = {
    type: FlagType;
    variantId: string;
};
export declare const FlagFallthroughEnvironmentsType: {
    readonly Entity: "entity";
};
export type FlagFallthroughEnvironmentsType = ClosedEnum<typeof FlagFallthroughEnvironmentsType>;
export type Base = {
    type: FlagFallthroughEnvironmentsType;
    kind: string;
    attribute: string;
};
export type Fallthrough2 = {
    type: "split";
    base: Base;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
export type Fallthrough1 = {
    type: "variant";
    variantId: string;
};
export type Fallthrough = Fallthrough1 | Fallthrough2;
export declare const FlagOutcomeEnvironmentsType: {
    readonly Entity: "entity";
};
export type FlagOutcomeEnvironmentsType = ClosedEnum<typeof FlagOutcomeEnvironmentsType>;
export type OutcomeBase = {
    type: FlagOutcomeEnvironmentsType;
    kind: string;
    attribute: string;
};
export type Outcome2 = {
    type: "split";
    base: OutcomeBase;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
export type Outcome1 = {
    type: "variant";
    variantId: string;
};
export type Outcome = Outcome1 | Outcome2;
export declare const FlagRhsType: {
    readonly Regex: "regex";
};
export type FlagRhsType = ClosedEnum<typeof FlagRhsType>;
export type Rhs4 = {
    type: FlagRhsType;
    pattern: string;
    flags: string;
};
export declare const RhsType: {
    readonly ListInline: "list/inline";
    readonly List: "list";
};
export type RhsType = ClosedEnum<typeof RhsType>;
export type Items2 = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
export type Items1 = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
export type RhsItems = Items1 | Items2;
export type Rhs3 = {
    type: RhsType;
    items: Array<Items1 | Items2>;
};
export type Rhs = Rhs4 | Rhs3 | string | number | boolean;
export type Lhs2 = {
    type: "entity";
    kind: string;
    attribute: string;
};
export type Lhs1 = {
    type: "segment";
};
export type Lhs = Lhs1 | Lhs2;
export declare const Cmp: {
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
export type Cmp = ClosedEnum<typeof Cmp>;
export type Conditions = {
    rhs?: Rhs4 | Rhs3 | string | number | boolean | undefined;
    lhs: Lhs1 | Lhs2;
    cmp: Cmp;
};
export type Rules = {
    id: string;
    outcome: Outcome1 | Outcome2;
    conditions: Array<Conditions>;
};
export type Environments = {
    reuse?: Reuse | undefined;
    targets?: {
        [k: string]: {
            [k: string]: {
                [k: string]: Array<Targets>;
            };
        };
    } | undefined;
    revision?: number | undefined;
    pausedOutcome: PausedOutcome;
    fallthrough: Fallthrough1 | Fallthrough2;
    active: boolean;
    rules: Array<Rules>;
};
export declare const Kind: {
    readonly String: "string";
    readonly Number: "number";
    readonly Boolean: "boolean";
};
export type Kind = ClosedEnum<typeof Kind>;
export declare const State: {
    readonly Active: "active";
    readonly Archived: "archived";
};
export type State = ClosedEnum<typeof State>;
export declare const TypeName: {
    readonly Flag: "flag";
};
export type TypeName = ClosedEnum<typeof TypeName>;
export type Creator = {
    id: string;
    name: string;
};
export type Metadata = {
    creator?: Creator | undefined;
};
export type Flag = {
    description?: string | undefined;
    variants: Array<Variants>;
    id: string;
    environments: {
        [k: string]: Environments;
    };
    kind: Kind;
    revision: number;
    seed: number;
    state: State;
    slug: string;
    createdAt: number;
    updatedAt: number;
    createdBy: string;
    ownerId: string;
    projectId: string;
    typeName: TypeName;
    metadata?: Metadata | undefined;
};
/** @internal */
export declare const Value$inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown>;
/** @internal */
export type Value$Outbound = string | number | boolean;
/** @internal */
export declare const Value$outboundSchema: z.ZodType<Value$Outbound, z.ZodTypeDef, Value>;
export declare function valueToJSON(value: Value): string;
export declare function valueFromJSON(jsonString: string): SafeParseResult<Value, SDKValidationError>;
/** @internal */
export declare const Variants$inboundSchema: z.ZodType<Variants, z.ZodTypeDef, unknown>;
/** @internal */
export type Variants$Outbound = {
    description?: string | undefined;
    label?: string | undefined;
    value: string | number | boolean;
    id: string;
};
/** @internal */
export declare const Variants$outboundSchema: z.ZodType<Variants$Outbound, z.ZodTypeDef, Variants>;
export declare function variantsToJSON(variants: Variants): string;
export declare function variantsFromJSON(jsonString: string): SafeParseResult<Variants, SDKValidationError>;
/** @internal */
export declare const Reuse$inboundSchema: z.ZodType<Reuse, z.ZodTypeDef, unknown>;
/** @internal */
export type Reuse$Outbound = {
    active: boolean;
    environment: string;
};
/** @internal */
export declare const Reuse$outboundSchema: z.ZodType<Reuse$Outbound, z.ZodTypeDef, Reuse>;
export declare function reuseToJSON(reuse: Reuse): string;
export declare function reuseFromJSON(jsonString: string): SafeParseResult<Reuse, SDKValidationError>;
/** @internal */
export declare const Targets$inboundSchema: z.ZodType<Targets, z.ZodTypeDef, unknown>;
/** @internal */
export type Targets$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const Targets$outboundSchema: z.ZodType<Targets$Outbound, z.ZodTypeDef, Targets>;
export declare function targetsToJSON(targets: Targets): string;
export declare function targetsFromJSON(jsonString: string): SafeParseResult<Targets, SDKValidationError>;
/** @internal */
export declare const FlagType$inboundSchema: z.ZodNativeEnum<typeof FlagType>;
/** @internal */
export declare const FlagType$outboundSchema: z.ZodNativeEnum<typeof FlagType>;
/** @internal */
export declare const PausedOutcome$inboundSchema: z.ZodType<PausedOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type PausedOutcome$Outbound = {
    type: string;
    variantId: string;
};
/** @internal */
export declare const PausedOutcome$outboundSchema: z.ZodType<PausedOutcome$Outbound, z.ZodTypeDef, PausedOutcome>;
export declare function pausedOutcomeToJSON(pausedOutcome: PausedOutcome): string;
export declare function pausedOutcomeFromJSON(jsonString: string): SafeParseResult<PausedOutcome, SDKValidationError>;
/** @internal */
export declare const FlagFallthroughEnvironmentsType$inboundSchema: z.ZodNativeEnum<typeof FlagFallthroughEnvironmentsType>;
/** @internal */
export declare const FlagFallthroughEnvironmentsType$outboundSchema: z.ZodNativeEnum<typeof FlagFallthroughEnvironmentsType>;
/** @internal */
export declare const Base$inboundSchema: z.ZodType<Base, z.ZodTypeDef, unknown>;
/** @internal */
export type Base$Outbound = {
    type: string;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const Base$outboundSchema: z.ZodType<Base$Outbound, z.ZodTypeDef, Base>;
export declare function baseToJSON(base: Base): string;
export declare function baseFromJSON(jsonString: string): SafeParseResult<Base, SDKValidationError>;
/** @internal */
export declare const Fallthrough2$inboundSchema: z.ZodType<Fallthrough2, z.ZodTypeDef, unknown>;
/** @internal */
export type Fallthrough2$Outbound = {
    type: "split";
    base: Base$Outbound;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
/** @internal */
export declare const Fallthrough2$outboundSchema: z.ZodType<Fallthrough2$Outbound, z.ZodTypeDef, Fallthrough2>;
export declare function fallthrough2ToJSON(fallthrough2: Fallthrough2): string;
export declare function fallthrough2FromJSON(jsonString: string): SafeParseResult<Fallthrough2, SDKValidationError>;
/** @internal */
export declare const Fallthrough1$inboundSchema: z.ZodType<Fallthrough1, z.ZodTypeDef, unknown>;
/** @internal */
export type Fallthrough1$Outbound = {
    type: "variant";
    variantId: string;
};
/** @internal */
export declare const Fallthrough1$outboundSchema: z.ZodType<Fallthrough1$Outbound, z.ZodTypeDef, Fallthrough1>;
export declare function fallthrough1ToJSON(fallthrough1: Fallthrough1): string;
export declare function fallthrough1FromJSON(jsonString: string): SafeParseResult<Fallthrough1, SDKValidationError>;
/** @internal */
export declare const Fallthrough$inboundSchema: z.ZodType<Fallthrough, z.ZodTypeDef, unknown>;
/** @internal */
export type Fallthrough$Outbound = Fallthrough1$Outbound | Fallthrough2$Outbound;
/** @internal */
export declare const Fallthrough$outboundSchema: z.ZodType<Fallthrough$Outbound, z.ZodTypeDef, Fallthrough>;
export declare function fallthroughToJSON(fallthrough: Fallthrough): string;
export declare function fallthroughFromJSON(jsonString: string): SafeParseResult<Fallthrough, SDKValidationError>;
/** @internal */
export declare const FlagOutcomeEnvironmentsType$inboundSchema: z.ZodNativeEnum<typeof FlagOutcomeEnvironmentsType>;
/** @internal */
export declare const FlagOutcomeEnvironmentsType$outboundSchema: z.ZodNativeEnum<typeof FlagOutcomeEnvironmentsType>;
/** @internal */
export declare const OutcomeBase$inboundSchema: z.ZodType<OutcomeBase, z.ZodTypeDef, unknown>;
/** @internal */
export type OutcomeBase$Outbound = {
    type: string;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const OutcomeBase$outboundSchema: z.ZodType<OutcomeBase$Outbound, z.ZodTypeDef, OutcomeBase>;
export declare function outcomeBaseToJSON(outcomeBase: OutcomeBase): string;
export declare function outcomeBaseFromJSON(jsonString: string): SafeParseResult<OutcomeBase, SDKValidationError>;
/** @internal */
export declare const Outcome2$inboundSchema: z.ZodType<Outcome2, z.ZodTypeDef, unknown>;
/** @internal */
export type Outcome2$Outbound = {
    type: "split";
    base: OutcomeBase$Outbound;
    weights: {
        [k: string]: number;
    };
    defaultVariantId: string;
};
/** @internal */
export declare const Outcome2$outboundSchema: z.ZodType<Outcome2$Outbound, z.ZodTypeDef, Outcome2>;
export declare function outcome2ToJSON(outcome2: Outcome2): string;
export declare function outcome2FromJSON(jsonString: string): SafeParseResult<Outcome2, SDKValidationError>;
/** @internal */
export declare const Outcome1$inboundSchema: z.ZodType<Outcome1, z.ZodTypeDef, unknown>;
/** @internal */
export type Outcome1$Outbound = {
    type: "variant";
    variantId: string;
};
/** @internal */
export declare const Outcome1$outboundSchema: z.ZodType<Outcome1$Outbound, z.ZodTypeDef, Outcome1>;
export declare function outcome1ToJSON(outcome1: Outcome1): string;
export declare function outcome1FromJSON(jsonString: string): SafeParseResult<Outcome1, SDKValidationError>;
/** @internal */
export declare const Outcome$inboundSchema: z.ZodType<Outcome, z.ZodTypeDef, unknown>;
/** @internal */
export type Outcome$Outbound = Outcome1$Outbound | Outcome2$Outbound;
/** @internal */
export declare const Outcome$outboundSchema: z.ZodType<Outcome$Outbound, z.ZodTypeDef, Outcome>;
export declare function outcomeToJSON(outcome: Outcome): string;
export declare function outcomeFromJSON(jsonString: string): SafeParseResult<Outcome, SDKValidationError>;
/** @internal */
export declare const FlagRhsType$inboundSchema: z.ZodNativeEnum<typeof FlagRhsType>;
/** @internal */
export declare const FlagRhsType$outboundSchema: z.ZodNativeEnum<typeof FlagRhsType>;
/** @internal */
export declare const Rhs4$inboundSchema: z.ZodType<Rhs4, z.ZodTypeDef, unknown>;
/** @internal */
export type Rhs4$Outbound = {
    type: string;
    pattern: string;
    flags: string;
};
/** @internal */
export declare const Rhs4$outboundSchema: z.ZodType<Rhs4$Outbound, z.ZodTypeDef, Rhs4>;
export declare function rhs4ToJSON(rhs4: Rhs4): string;
export declare function rhs4FromJSON(jsonString: string): SafeParseResult<Rhs4, SDKValidationError>;
/** @internal */
export declare const RhsType$inboundSchema: z.ZodNativeEnum<typeof RhsType>;
/** @internal */
export declare const RhsType$outboundSchema: z.ZodNativeEnum<typeof RhsType>;
/** @internal */
export declare const Items2$inboundSchema: z.ZodType<Items2, z.ZodTypeDef, unknown>;
/** @internal */
export type Items2$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const Items2$outboundSchema: z.ZodType<Items2$Outbound, z.ZodTypeDef, Items2>;
export declare function items2ToJSON(items2: Items2): string;
export declare function items2FromJSON(jsonString: string): SafeParseResult<Items2, SDKValidationError>;
/** @internal */
export declare const Items1$inboundSchema: z.ZodType<Items1, z.ZodTypeDef, unknown>;
/** @internal */
export type Items1$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
/** @internal */
export declare const Items1$outboundSchema: z.ZodType<Items1$Outbound, z.ZodTypeDef, Items1>;
export declare function items1ToJSON(items1: Items1): string;
export declare function items1FromJSON(jsonString: string): SafeParseResult<Items1, SDKValidationError>;
/** @internal */
export declare const RhsItems$inboundSchema: z.ZodType<RhsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type RhsItems$Outbound = Items1$Outbound | Items2$Outbound;
/** @internal */
export declare const RhsItems$outboundSchema: z.ZodType<RhsItems$Outbound, z.ZodTypeDef, RhsItems>;
export declare function rhsItemsToJSON(rhsItems: RhsItems): string;
export declare function rhsItemsFromJSON(jsonString: string): SafeParseResult<RhsItems, SDKValidationError>;
/** @internal */
export declare const Rhs3$inboundSchema: z.ZodType<Rhs3, z.ZodTypeDef, unknown>;
/** @internal */
export type Rhs3$Outbound = {
    type: string;
    items: Array<Items1$Outbound | Items2$Outbound>;
};
/** @internal */
export declare const Rhs3$outboundSchema: z.ZodType<Rhs3$Outbound, z.ZodTypeDef, Rhs3>;
export declare function rhs3ToJSON(rhs3: Rhs3): string;
export declare function rhs3FromJSON(jsonString: string): SafeParseResult<Rhs3, SDKValidationError>;
/** @internal */
export declare const Rhs$inboundSchema: z.ZodType<Rhs, z.ZodTypeDef, unknown>;
/** @internal */
export type Rhs$Outbound = Rhs4$Outbound | Rhs3$Outbound | string | number | boolean;
/** @internal */
export declare const Rhs$outboundSchema: z.ZodType<Rhs$Outbound, z.ZodTypeDef, Rhs>;
export declare function rhsToJSON(rhs: Rhs): string;
export declare function rhsFromJSON(jsonString: string): SafeParseResult<Rhs, SDKValidationError>;
/** @internal */
export declare const Lhs2$inboundSchema: z.ZodType<Lhs2, z.ZodTypeDef, unknown>;
/** @internal */
export type Lhs2$Outbound = {
    type: "entity";
    kind: string;
    attribute: string;
};
/** @internal */
export declare const Lhs2$outboundSchema: z.ZodType<Lhs2$Outbound, z.ZodTypeDef, Lhs2>;
export declare function lhs2ToJSON(lhs2: Lhs2): string;
export declare function lhs2FromJSON(jsonString: string): SafeParseResult<Lhs2, SDKValidationError>;
/** @internal */
export declare const Lhs1$inboundSchema: z.ZodType<Lhs1, z.ZodTypeDef, unknown>;
/** @internal */
export type Lhs1$Outbound = {
    type: "segment";
};
/** @internal */
export declare const Lhs1$outboundSchema: z.ZodType<Lhs1$Outbound, z.ZodTypeDef, Lhs1>;
export declare function lhs1ToJSON(lhs1: Lhs1): string;
export declare function lhs1FromJSON(jsonString: string): SafeParseResult<Lhs1, SDKValidationError>;
/** @internal */
export declare const Lhs$inboundSchema: z.ZodType<Lhs, z.ZodTypeDef, unknown>;
/** @internal */
export type Lhs$Outbound = Lhs1$Outbound | Lhs2$Outbound;
/** @internal */
export declare const Lhs$outboundSchema: z.ZodType<Lhs$Outbound, z.ZodTypeDef, Lhs>;
export declare function lhsToJSON(lhs: Lhs): string;
export declare function lhsFromJSON(jsonString: string): SafeParseResult<Lhs, SDKValidationError>;
/** @internal */
export declare const Cmp$inboundSchema: z.ZodNativeEnum<typeof Cmp>;
/** @internal */
export declare const Cmp$outboundSchema: z.ZodNativeEnum<typeof Cmp>;
/** @internal */
export declare const Conditions$inboundSchema: z.ZodType<Conditions, z.ZodTypeDef, unknown>;
/** @internal */
export type Conditions$Outbound = {
    rhs?: Rhs4$Outbound | Rhs3$Outbound | string | number | boolean | undefined;
    lhs: Lhs1$Outbound | Lhs2$Outbound;
    cmp: string;
};
/** @internal */
export declare const Conditions$outboundSchema: z.ZodType<Conditions$Outbound, z.ZodTypeDef, Conditions>;
export declare function conditionsToJSON(conditions: Conditions): string;
export declare function conditionsFromJSON(jsonString: string): SafeParseResult<Conditions, SDKValidationError>;
/** @internal */
export declare const Rules$inboundSchema: z.ZodType<Rules, z.ZodTypeDef, unknown>;
/** @internal */
export type Rules$Outbound = {
    id: string;
    outcome: Outcome1$Outbound | Outcome2$Outbound;
    conditions: Array<Conditions$Outbound>;
};
/** @internal */
export declare const Rules$outboundSchema: z.ZodType<Rules$Outbound, z.ZodTypeDef, Rules>;
export declare function rulesToJSON(rules: Rules): string;
export declare function rulesFromJSON(jsonString: string): SafeParseResult<Rules, SDKValidationError>;
/** @internal */
export declare const Environments$inboundSchema: z.ZodType<Environments, z.ZodTypeDef, unknown>;
/** @internal */
export type Environments$Outbound = {
    reuse?: Reuse$Outbound | undefined;
    targets?: {
        [k: string]: {
            [k: string]: {
                [k: string]: Array<Targets$Outbound>;
            };
        };
    } | undefined;
    revision?: number | undefined;
    pausedOutcome: PausedOutcome$Outbound;
    fallthrough: Fallthrough1$Outbound | Fallthrough2$Outbound;
    active: boolean;
    rules: Array<Rules$Outbound>;
};
/** @internal */
export declare const Environments$outboundSchema: z.ZodType<Environments$Outbound, z.ZodTypeDef, Environments>;
export declare function environmentsToJSON(environments: Environments): string;
export declare function environmentsFromJSON(jsonString: string): SafeParseResult<Environments, SDKValidationError>;
/** @internal */
export declare const Kind$inboundSchema: z.ZodNativeEnum<typeof Kind>;
/** @internal */
export declare const Kind$outboundSchema: z.ZodNativeEnum<typeof Kind>;
/** @internal */
export declare const State$inboundSchema: z.ZodNativeEnum<typeof State>;
/** @internal */
export declare const State$outboundSchema: z.ZodNativeEnum<typeof State>;
/** @internal */
export declare const TypeName$inboundSchema: z.ZodNativeEnum<typeof TypeName>;
/** @internal */
export declare const TypeName$outboundSchema: z.ZodNativeEnum<typeof TypeName>;
/** @internal */
export declare const Creator$inboundSchema: z.ZodType<Creator, z.ZodTypeDef, unknown>;
/** @internal */
export type Creator$Outbound = {
    id: string;
    name: string;
};
/** @internal */
export declare const Creator$outboundSchema: z.ZodType<Creator$Outbound, z.ZodTypeDef, Creator>;
export declare function creatorToJSON(creator: Creator): string;
export declare function creatorFromJSON(jsonString: string): SafeParseResult<Creator, SDKValidationError>;
/** @internal */
export declare const Metadata$inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, unknown>;
/** @internal */
export type Metadata$Outbound = {
    creator?: Creator$Outbound | undefined;
};
/** @internal */
export declare const Metadata$outboundSchema: z.ZodType<Metadata$Outbound, z.ZodTypeDef, Metadata>;
export declare function metadataToJSON(metadata: Metadata): string;
export declare function metadataFromJSON(jsonString: string): SafeParseResult<Metadata, SDKValidationError>;
/** @internal */
export declare const Flag$inboundSchema: z.ZodType<Flag, z.ZodTypeDef, unknown>;
/** @internal */
export type Flag$Outbound = {
    description?: string | undefined;
    variants: Array<Variants$Outbound>;
    id: string;
    environments: {
        [k: string]: Environments$Outbound;
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
    metadata?: Metadata$Outbound | undefined;
};
/** @internal */
export declare const Flag$outboundSchema: z.ZodType<Flag$Outbound, z.ZodTypeDef, Flag>;
export declare function flagToJSON(flag: Flag): string;
export declare function flagFromJSON(jsonString: string): SafeParseResult<Flag, SDKValidationError>;
//# sourceMappingURL=flag.d.ts.map