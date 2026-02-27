import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const SegmentTypeName: {
    readonly Segment: "segment";
};
export type SegmentTypeName = ClosedEnum<typeof SegmentTypeName>;
export declare const SegmentOutcomeDataRulesType: {
    readonly Entity: "entity";
};
export type SegmentOutcomeDataRulesType = ClosedEnum<typeof SegmentOutcomeDataRulesType>;
export type SegmentOutcomeBase = {
    type: SegmentOutcomeDataRulesType;
    kind: string;
    attribute: string;
};
export type SegmentOutcome2 = {
    type: "split";
    base: SegmentOutcomeBase;
    passPromille: number;
};
export type SegmentOutcome1 = {
    type: "all";
};
export type SegmentOutcome = SegmentOutcome1 | SegmentOutcome2;
export declare const SegmentRhsDataType: {
    readonly Regex: "regex";
};
export type SegmentRhsDataType = ClosedEnum<typeof SegmentRhsDataType>;
export type SegmentRhs4 = {
    type: SegmentRhsDataType;
    pattern: string;
    flags: string;
};
export declare const SegmentRhsType: {
    readonly ListInline: "list/inline";
    readonly List: "list";
};
export type SegmentRhsType = ClosedEnum<typeof SegmentRhsType>;
export type SegmentItems2 = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
export type SegmentItems1 = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
export type SegmentRhsItems = SegmentItems1 | SegmentItems2;
export type SegmentRhs3 = {
    type: SegmentRhsType;
    items: Array<SegmentItems1 | SegmentItems2>;
};
export type SegmentRhs = SegmentRhs4 | SegmentRhs3 | string | number | boolean;
export type SegmentLhs2 = {
    type: "entity";
    kind: string;
    attribute: string;
};
export type SegmentLhs1 = {
    type: "segment";
};
export type SegmentLhs = SegmentLhs1 | SegmentLhs2;
export declare const SegmentCmp: {
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
export type SegmentCmp = ClosedEnum<typeof SegmentCmp>;
export type SegmentConditions = {
    rhs?: SegmentRhs4 | SegmentRhs3 | string | number | boolean | undefined;
    lhs: SegmentLhs1 | SegmentLhs2;
    cmp: SegmentCmp;
};
export type SegmentRules = {
    id: string;
    outcome: SegmentOutcome1 | SegmentOutcome2;
    conditions: Array<SegmentConditions>;
};
export type Include = {
    note?: string | undefined;
    value: string;
};
export type ExcludeT = {
    note?: string | undefined;
    value: string;
};
export type Data = {
    rules?: Array<SegmentRules> | undefined;
    include?: {
        [k: string]: {
            [k: string]: Array<Include>;
        };
    } | undefined;
    exclude?: {
        [k: string]: {
            [k: string]: Array<ExcludeT>;
        };
    } | undefined;
};
export type SegmentCreator = {
    id: string;
    name: string;
};
export type SegmentMetadata = {
    creator?: SegmentCreator | undefined;
};
export type Segment = {
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
    typeName: SegmentTypeName;
    data: Data;
    hint: string;
    metadata?: SegmentMetadata | undefined;
};
/** @internal */
export declare const SegmentTypeName$inboundSchema: z.ZodNativeEnum<typeof SegmentTypeName>;
/** @internal */
export declare const SegmentTypeName$outboundSchema: z.ZodNativeEnum<typeof SegmentTypeName>;
/** @internal */
export declare const SegmentOutcomeDataRulesType$inboundSchema: z.ZodNativeEnum<typeof SegmentOutcomeDataRulesType>;
/** @internal */
export declare const SegmentOutcomeDataRulesType$outboundSchema: z.ZodNativeEnum<typeof SegmentOutcomeDataRulesType>;
/** @internal */
export declare const SegmentOutcomeBase$inboundSchema: z.ZodType<SegmentOutcomeBase, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentOutcomeBase$Outbound = {
    type: string;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const SegmentOutcomeBase$outboundSchema: z.ZodType<SegmentOutcomeBase$Outbound, z.ZodTypeDef, SegmentOutcomeBase>;
export declare function segmentOutcomeBaseToJSON(segmentOutcomeBase: SegmentOutcomeBase): string;
export declare function segmentOutcomeBaseFromJSON(jsonString: string): SafeParseResult<SegmentOutcomeBase, SDKValidationError>;
/** @internal */
export declare const SegmentOutcome2$inboundSchema: z.ZodType<SegmentOutcome2, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentOutcome2$Outbound = {
    type: "split";
    base: SegmentOutcomeBase$Outbound;
    passPromille: number;
};
/** @internal */
export declare const SegmentOutcome2$outboundSchema: z.ZodType<SegmentOutcome2$Outbound, z.ZodTypeDef, SegmentOutcome2>;
export declare function segmentOutcome2ToJSON(segmentOutcome2: SegmentOutcome2): string;
export declare function segmentOutcome2FromJSON(jsonString: string): SafeParseResult<SegmentOutcome2, SDKValidationError>;
/** @internal */
export declare const SegmentOutcome1$inboundSchema: z.ZodType<SegmentOutcome1, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentOutcome1$Outbound = {
    type: "all";
};
/** @internal */
export declare const SegmentOutcome1$outboundSchema: z.ZodType<SegmentOutcome1$Outbound, z.ZodTypeDef, SegmentOutcome1>;
export declare function segmentOutcome1ToJSON(segmentOutcome1: SegmentOutcome1): string;
export declare function segmentOutcome1FromJSON(jsonString: string): SafeParseResult<SegmentOutcome1, SDKValidationError>;
/** @internal */
export declare const SegmentOutcome$inboundSchema: z.ZodType<SegmentOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentOutcome$Outbound = SegmentOutcome1$Outbound | SegmentOutcome2$Outbound;
/** @internal */
export declare const SegmentOutcome$outboundSchema: z.ZodType<SegmentOutcome$Outbound, z.ZodTypeDef, SegmentOutcome>;
export declare function segmentOutcomeToJSON(segmentOutcome: SegmentOutcome): string;
export declare function segmentOutcomeFromJSON(jsonString: string): SafeParseResult<SegmentOutcome, SDKValidationError>;
/** @internal */
export declare const SegmentRhsDataType$inboundSchema: z.ZodNativeEnum<typeof SegmentRhsDataType>;
/** @internal */
export declare const SegmentRhsDataType$outboundSchema: z.ZodNativeEnum<typeof SegmentRhsDataType>;
/** @internal */
export declare const SegmentRhs4$inboundSchema: z.ZodType<SegmentRhs4, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentRhs4$Outbound = {
    type: string;
    pattern: string;
    flags: string;
};
/** @internal */
export declare const SegmentRhs4$outboundSchema: z.ZodType<SegmentRhs4$Outbound, z.ZodTypeDef, SegmentRhs4>;
export declare function segmentRhs4ToJSON(segmentRhs4: SegmentRhs4): string;
export declare function segmentRhs4FromJSON(jsonString: string): SafeParseResult<SegmentRhs4, SDKValidationError>;
/** @internal */
export declare const SegmentRhsType$inboundSchema: z.ZodNativeEnum<typeof SegmentRhsType>;
/** @internal */
export declare const SegmentRhsType$outboundSchema: z.ZodNativeEnum<typeof SegmentRhsType>;
/** @internal */
export declare const SegmentItems2$inboundSchema: z.ZodType<SegmentItems2, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentItems2$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const SegmentItems2$outboundSchema: z.ZodType<SegmentItems2$Outbound, z.ZodTypeDef, SegmentItems2>;
export declare function segmentItems2ToJSON(segmentItems2: SegmentItems2): string;
export declare function segmentItems2FromJSON(jsonString: string): SafeParseResult<SegmentItems2, SDKValidationError>;
/** @internal */
export declare const SegmentItems1$inboundSchema: z.ZodType<SegmentItems1, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentItems1$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
/** @internal */
export declare const SegmentItems1$outboundSchema: z.ZodType<SegmentItems1$Outbound, z.ZodTypeDef, SegmentItems1>;
export declare function segmentItems1ToJSON(segmentItems1: SegmentItems1): string;
export declare function segmentItems1FromJSON(jsonString: string): SafeParseResult<SegmentItems1, SDKValidationError>;
/** @internal */
export declare const SegmentRhsItems$inboundSchema: z.ZodType<SegmentRhsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentRhsItems$Outbound = SegmentItems1$Outbound | SegmentItems2$Outbound;
/** @internal */
export declare const SegmentRhsItems$outboundSchema: z.ZodType<SegmentRhsItems$Outbound, z.ZodTypeDef, SegmentRhsItems>;
export declare function segmentRhsItemsToJSON(segmentRhsItems: SegmentRhsItems): string;
export declare function segmentRhsItemsFromJSON(jsonString: string): SafeParseResult<SegmentRhsItems, SDKValidationError>;
/** @internal */
export declare const SegmentRhs3$inboundSchema: z.ZodType<SegmentRhs3, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentRhs3$Outbound = {
    type: string;
    items: Array<SegmentItems1$Outbound | SegmentItems2$Outbound>;
};
/** @internal */
export declare const SegmentRhs3$outboundSchema: z.ZodType<SegmentRhs3$Outbound, z.ZodTypeDef, SegmentRhs3>;
export declare function segmentRhs3ToJSON(segmentRhs3: SegmentRhs3): string;
export declare function segmentRhs3FromJSON(jsonString: string): SafeParseResult<SegmentRhs3, SDKValidationError>;
/** @internal */
export declare const SegmentRhs$inboundSchema: z.ZodType<SegmentRhs, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentRhs$Outbound = SegmentRhs4$Outbound | SegmentRhs3$Outbound | string | number | boolean;
/** @internal */
export declare const SegmentRhs$outboundSchema: z.ZodType<SegmentRhs$Outbound, z.ZodTypeDef, SegmentRhs>;
export declare function segmentRhsToJSON(segmentRhs: SegmentRhs): string;
export declare function segmentRhsFromJSON(jsonString: string): SafeParseResult<SegmentRhs, SDKValidationError>;
/** @internal */
export declare const SegmentLhs2$inboundSchema: z.ZodType<SegmentLhs2, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentLhs2$Outbound = {
    type: "entity";
    kind: string;
    attribute: string;
};
/** @internal */
export declare const SegmentLhs2$outboundSchema: z.ZodType<SegmentLhs2$Outbound, z.ZodTypeDef, SegmentLhs2>;
export declare function segmentLhs2ToJSON(segmentLhs2: SegmentLhs2): string;
export declare function segmentLhs2FromJSON(jsonString: string): SafeParseResult<SegmentLhs2, SDKValidationError>;
/** @internal */
export declare const SegmentLhs1$inboundSchema: z.ZodType<SegmentLhs1, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentLhs1$Outbound = {
    type: "segment";
};
/** @internal */
export declare const SegmentLhs1$outboundSchema: z.ZodType<SegmentLhs1$Outbound, z.ZodTypeDef, SegmentLhs1>;
export declare function segmentLhs1ToJSON(segmentLhs1: SegmentLhs1): string;
export declare function segmentLhs1FromJSON(jsonString: string): SafeParseResult<SegmentLhs1, SDKValidationError>;
/** @internal */
export declare const SegmentLhs$inboundSchema: z.ZodType<SegmentLhs, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentLhs$Outbound = SegmentLhs1$Outbound | SegmentLhs2$Outbound;
/** @internal */
export declare const SegmentLhs$outboundSchema: z.ZodType<SegmentLhs$Outbound, z.ZodTypeDef, SegmentLhs>;
export declare function segmentLhsToJSON(segmentLhs: SegmentLhs): string;
export declare function segmentLhsFromJSON(jsonString: string): SafeParseResult<SegmentLhs, SDKValidationError>;
/** @internal */
export declare const SegmentCmp$inboundSchema: z.ZodNativeEnum<typeof SegmentCmp>;
/** @internal */
export declare const SegmentCmp$outboundSchema: z.ZodNativeEnum<typeof SegmentCmp>;
/** @internal */
export declare const SegmentConditions$inboundSchema: z.ZodType<SegmentConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentConditions$Outbound = {
    rhs?: SegmentRhs4$Outbound | SegmentRhs3$Outbound | string | number | boolean | undefined;
    lhs: SegmentLhs1$Outbound | SegmentLhs2$Outbound;
    cmp: string;
};
/** @internal */
export declare const SegmentConditions$outboundSchema: z.ZodType<SegmentConditions$Outbound, z.ZodTypeDef, SegmentConditions>;
export declare function segmentConditionsToJSON(segmentConditions: SegmentConditions): string;
export declare function segmentConditionsFromJSON(jsonString: string): SafeParseResult<SegmentConditions, SDKValidationError>;
/** @internal */
export declare const SegmentRules$inboundSchema: z.ZodType<SegmentRules, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentRules$Outbound = {
    id: string;
    outcome: SegmentOutcome1$Outbound | SegmentOutcome2$Outbound;
    conditions: Array<SegmentConditions$Outbound>;
};
/** @internal */
export declare const SegmentRules$outboundSchema: z.ZodType<SegmentRules$Outbound, z.ZodTypeDef, SegmentRules>;
export declare function segmentRulesToJSON(segmentRules: SegmentRules): string;
export declare function segmentRulesFromJSON(jsonString: string): SafeParseResult<SegmentRules, SDKValidationError>;
/** @internal */
export declare const Include$inboundSchema: z.ZodType<Include, z.ZodTypeDef, unknown>;
/** @internal */
export type Include$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const Include$outboundSchema: z.ZodType<Include$Outbound, z.ZodTypeDef, Include>;
export declare function includeToJSON(include: Include): string;
export declare function includeFromJSON(jsonString: string): SafeParseResult<Include, SDKValidationError>;
/** @internal */
export declare const ExcludeT$inboundSchema: z.ZodType<ExcludeT, z.ZodTypeDef, unknown>;
/** @internal */
export type ExcludeT$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const ExcludeT$outboundSchema: z.ZodType<ExcludeT$Outbound, z.ZodTypeDef, ExcludeT>;
export declare function excludeToJSON(excludeT: ExcludeT): string;
export declare function excludeFromJSON(jsonString: string): SafeParseResult<ExcludeT, SDKValidationError>;
/** @internal */
export declare const Data$inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown>;
/** @internal */
export type Data$Outbound = {
    rules?: Array<SegmentRules$Outbound> | undefined;
    include?: {
        [k: string]: {
            [k: string]: Array<Include$Outbound>;
        };
    } | undefined;
    exclude?: {
        [k: string]: {
            [k: string]: Array<ExcludeT$Outbound>;
        };
    } | undefined;
};
/** @internal */
export declare const Data$outboundSchema: z.ZodType<Data$Outbound, z.ZodTypeDef, Data>;
export declare function dataToJSON(data: Data): string;
export declare function dataFromJSON(jsonString: string): SafeParseResult<Data, SDKValidationError>;
/** @internal */
export declare const SegmentCreator$inboundSchema: z.ZodType<SegmentCreator, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentCreator$Outbound = {
    id: string;
    name: string;
};
/** @internal */
export declare const SegmentCreator$outboundSchema: z.ZodType<SegmentCreator$Outbound, z.ZodTypeDef, SegmentCreator>;
export declare function segmentCreatorToJSON(segmentCreator: SegmentCreator): string;
export declare function segmentCreatorFromJSON(jsonString: string): SafeParseResult<SegmentCreator, SDKValidationError>;
/** @internal */
export declare const SegmentMetadata$inboundSchema: z.ZodType<SegmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type SegmentMetadata$Outbound = {
    creator?: SegmentCreator$Outbound | undefined;
};
/** @internal */
export declare const SegmentMetadata$outboundSchema: z.ZodType<SegmentMetadata$Outbound, z.ZodTypeDef, SegmentMetadata>;
export declare function segmentMetadataToJSON(segmentMetadata: SegmentMetadata): string;
export declare function segmentMetadataFromJSON(jsonString: string): SafeParseResult<SegmentMetadata, SDKValidationError>;
/** @internal */
export declare const Segment$inboundSchema: z.ZodType<Segment, z.ZodTypeDef, unknown>;
/** @internal */
export type Segment$Outbound = {
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
    data: Data$Outbound;
    hint: string;
    metadata?: SegmentMetadata$Outbound | undefined;
};
/** @internal */
export declare const Segment$outboundSchema: z.ZodType<Segment$Outbound, z.ZodTypeDef, Segment>;
export declare function segmentToJSON(segment: Segment): string;
export declare function segmentFromJSON(jsonString: string): SafeParseResult<Segment, SDKValidationError>;
//# sourceMappingURL=segment.d.ts.map