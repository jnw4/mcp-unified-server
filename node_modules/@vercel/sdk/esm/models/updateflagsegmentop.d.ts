import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const UpdateFlagSegmentAction: {
    readonly Add: "add";
    readonly Remove: "remove";
};
export type UpdateFlagSegmentAction = ClosedEnum<typeof UpdateFlagSegmentAction>;
export declare const Field: {
    readonly Include: "include";
    readonly Exclude: "exclude";
};
export type Field = ClosedEnum<typeof Field>;
export type UpdateFlagSegmentValue = {
    note?: string | undefined;
    value: string;
};
export type Operations = {
    action: UpdateFlagSegmentAction;
    field: Field;
    entity: string;
    attribute: string;
    value: UpdateFlagSegmentValue;
};
export type UpdateFlagSegmentLhs2 = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
export type UpdateFlagSegmentLhs1 = {
    type?: any | undefined;
};
export type UpdateFlagSegmentLhs = UpdateFlagSegmentLhs2 | UpdateFlagSegmentLhs1;
export declare const UpdateFlagSegmentCmp: {
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
export type UpdateFlagSegmentCmp = ClosedEnum<typeof UpdateFlagSegmentCmp>;
export type UpdateFlagSegmentRhs2 = {
    type?: any | undefined;
    pattern: string;
    flags: string;
};
export declare const UpdateFlagSegmentRhsType: {
    readonly ListInline: "list/inline";
    readonly List: "list";
};
export type UpdateFlagSegmentRhsType = ClosedEnum<typeof UpdateFlagSegmentRhsType>;
export type UpdateFlagSegmentItems2 = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
export type UpdateFlagSegmentItems1 = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
export type UpdateFlagSegmentRhsItems = UpdateFlagSegmentItems1 | UpdateFlagSegmentItems2;
export type UpdateFlagSegmentRhs1 = {
    type: UpdateFlagSegmentRhsType;
    items: Array<UpdateFlagSegmentItems1 | UpdateFlagSegmentItems2>;
};
export type UpdateFlagSegmentRhs = UpdateFlagSegmentRhs2 | UpdateFlagSegmentRhs1 | string | number | boolean;
export type UpdateFlagSegmentConditions = {
    lhs: UpdateFlagSegmentLhs2 | UpdateFlagSegmentLhs1;
    cmp: UpdateFlagSegmentCmp;
    rhs?: UpdateFlagSegmentRhs2 | UpdateFlagSegmentRhs1 | string | number | boolean | undefined;
};
export type UpdateFlagSegmentOutcomeBase = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
export type UpdateFlagSegmentOutcome2 = {
    type?: any | undefined;
    base: UpdateFlagSegmentOutcomeBase;
    passPromille: number;
};
export type UpdateFlagSegmentOutcome1 = {
    type?: any | undefined;
};
export type UpdateFlagSegmentOutcome = UpdateFlagSegmentOutcome2 | UpdateFlagSegmentOutcome1;
export type UpdateFlagSegmentRules = {
    id: string;
    conditions: Array<UpdateFlagSegmentConditions>;
    outcome: UpdateFlagSegmentOutcome2 | UpdateFlagSegmentOutcome1;
};
export type UpdateFlagSegmentInclude = {
    note?: string | undefined;
    value: string;
};
export type UpdateFlagSegmentExclude = {
    note?: string | undefined;
    value: string;
};
/**
 * The data of the segment
 */
export type UpdateFlagSegmentData = {
    rules?: Array<UpdateFlagSegmentRules> | undefined;
    include?: {
        [k: string]: {
            [k: string]: Array<UpdateFlagSegmentInclude>;
        };
    } | undefined;
    exclude?: {
        [k: string]: {
            [k: string]: Array<UpdateFlagSegmentExclude>;
        };
    } | undefined;
};
export type UpdateFlagSegmentRequestBody = {
    operations?: Array<Operations> | undefined;
    label?: string | undefined;
    description?: string | undefined;
    /**
     * The data of the segment
     */
    data?: UpdateFlagSegmentData | undefined;
    hint?: string | undefined;
};
export type UpdateFlagSegmentRequest = {
    /**
     * The project id or name
     */
    projectIdOrName: string;
    /**
     * The segment slug
     */
    segmentIdOrSlug: string;
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
    requestBody?: UpdateFlagSegmentRequestBody | undefined;
};
/** @internal */
export declare const UpdateFlagSegmentAction$inboundSchema: z.ZodNativeEnum<typeof UpdateFlagSegmentAction>;
/** @internal */
export declare const UpdateFlagSegmentAction$outboundSchema: z.ZodNativeEnum<typeof UpdateFlagSegmentAction>;
/** @internal */
export declare const Field$inboundSchema: z.ZodNativeEnum<typeof Field>;
/** @internal */
export declare const Field$outboundSchema: z.ZodNativeEnum<typeof Field>;
/** @internal */
export declare const UpdateFlagSegmentValue$inboundSchema: z.ZodType<UpdateFlagSegmentValue, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentValue$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const UpdateFlagSegmentValue$outboundSchema: z.ZodType<UpdateFlagSegmentValue$Outbound, z.ZodTypeDef, UpdateFlagSegmentValue>;
export declare function updateFlagSegmentValueToJSON(updateFlagSegmentValue: UpdateFlagSegmentValue): string;
export declare function updateFlagSegmentValueFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentValue, SDKValidationError>;
/** @internal */
export declare const Operations$inboundSchema: z.ZodType<Operations, z.ZodTypeDef, unknown>;
/** @internal */
export type Operations$Outbound = {
    action: string;
    field: string;
    entity: string;
    attribute: string;
    value: UpdateFlagSegmentValue$Outbound;
};
/** @internal */
export declare const Operations$outboundSchema: z.ZodType<Operations$Outbound, z.ZodTypeDef, Operations>;
export declare function operationsToJSON(operations: Operations): string;
export declare function operationsFromJSON(jsonString: string): SafeParseResult<Operations, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentLhs2$inboundSchema: z.ZodType<UpdateFlagSegmentLhs2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentLhs2$Outbound = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const UpdateFlagSegmentLhs2$outboundSchema: z.ZodType<UpdateFlagSegmentLhs2$Outbound, z.ZodTypeDef, UpdateFlagSegmentLhs2>;
export declare function updateFlagSegmentLhs2ToJSON(updateFlagSegmentLhs2: UpdateFlagSegmentLhs2): string;
export declare function updateFlagSegmentLhs2FromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentLhs2, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentLhs1$inboundSchema: z.ZodType<UpdateFlagSegmentLhs1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentLhs1$Outbound = {
    type?: any | undefined;
};
/** @internal */
export declare const UpdateFlagSegmentLhs1$outboundSchema: z.ZodType<UpdateFlagSegmentLhs1$Outbound, z.ZodTypeDef, UpdateFlagSegmentLhs1>;
export declare function updateFlagSegmentLhs1ToJSON(updateFlagSegmentLhs1: UpdateFlagSegmentLhs1): string;
export declare function updateFlagSegmentLhs1FromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentLhs1, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentLhs$inboundSchema: z.ZodType<UpdateFlagSegmentLhs, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentLhs$Outbound = UpdateFlagSegmentLhs2$Outbound | UpdateFlagSegmentLhs1$Outbound;
/** @internal */
export declare const UpdateFlagSegmentLhs$outboundSchema: z.ZodType<UpdateFlagSegmentLhs$Outbound, z.ZodTypeDef, UpdateFlagSegmentLhs>;
export declare function updateFlagSegmentLhsToJSON(updateFlagSegmentLhs: UpdateFlagSegmentLhs): string;
export declare function updateFlagSegmentLhsFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentLhs, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentCmp$inboundSchema: z.ZodNativeEnum<typeof UpdateFlagSegmentCmp>;
/** @internal */
export declare const UpdateFlagSegmentCmp$outboundSchema: z.ZodNativeEnum<typeof UpdateFlagSegmentCmp>;
/** @internal */
export declare const UpdateFlagSegmentRhs2$inboundSchema: z.ZodType<UpdateFlagSegmentRhs2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentRhs2$Outbound = {
    type?: any | undefined;
    pattern: string;
    flags: string;
};
/** @internal */
export declare const UpdateFlagSegmentRhs2$outboundSchema: z.ZodType<UpdateFlagSegmentRhs2$Outbound, z.ZodTypeDef, UpdateFlagSegmentRhs2>;
export declare function updateFlagSegmentRhs2ToJSON(updateFlagSegmentRhs2: UpdateFlagSegmentRhs2): string;
export declare function updateFlagSegmentRhs2FromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentRhs2, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentRhsType$inboundSchema: z.ZodNativeEnum<typeof UpdateFlagSegmentRhsType>;
/** @internal */
export declare const UpdateFlagSegmentRhsType$outboundSchema: z.ZodNativeEnum<typeof UpdateFlagSegmentRhsType>;
/** @internal */
export declare const UpdateFlagSegmentItems2$inboundSchema: z.ZodType<UpdateFlagSegmentItems2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentItems2$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const UpdateFlagSegmentItems2$outboundSchema: z.ZodType<UpdateFlagSegmentItems2$Outbound, z.ZodTypeDef, UpdateFlagSegmentItems2>;
export declare function updateFlagSegmentItems2ToJSON(updateFlagSegmentItems2: UpdateFlagSegmentItems2): string;
export declare function updateFlagSegmentItems2FromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentItems2, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentItems1$inboundSchema: z.ZodType<UpdateFlagSegmentItems1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentItems1$Outbound = {
    label?: string | undefined;
    note?: string | undefined;
    value: number;
};
/** @internal */
export declare const UpdateFlagSegmentItems1$outboundSchema: z.ZodType<UpdateFlagSegmentItems1$Outbound, z.ZodTypeDef, UpdateFlagSegmentItems1>;
export declare function updateFlagSegmentItems1ToJSON(updateFlagSegmentItems1: UpdateFlagSegmentItems1): string;
export declare function updateFlagSegmentItems1FromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentItems1, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentRhsItems$inboundSchema: z.ZodType<UpdateFlagSegmentRhsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentRhsItems$Outbound = UpdateFlagSegmentItems1$Outbound | UpdateFlagSegmentItems2$Outbound;
/** @internal */
export declare const UpdateFlagSegmentRhsItems$outboundSchema: z.ZodType<UpdateFlagSegmentRhsItems$Outbound, z.ZodTypeDef, UpdateFlagSegmentRhsItems>;
export declare function updateFlagSegmentRhsItemsToJSON(updateFlagSegmentRhsItems: UpdateFlagSegmentRhsItems): string;
export declare function updateFlagSegmentRhsItemsFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentRhsItems, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentRhs1$inboundSchema: z.ZodType<UpdateFlagSegmentRhs1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentRhs1$Outbound = {
    type: string;
    items: Array<UpdateFlagSegmentItems1$Outbound | UpdateFlagSegmentItems2$Outbound>;
};
/** @internal */
export declare const UpdateFlagSegmentRhs1$outboundSchema: z.ZodType<UpdateFlagSegmentRhs1$Outbound, z.ZodTypeDef, UpdateFlagSegmentRhs1>;
export declare function updateFlagSegmentRhs1ToJSON(updateFlagSegmentRhs1: UpdateFlagSegmentRhs1): string;
export declare function updateFlagSegmentRhs1FromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentRhs1, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentRhs$inboundSchema: z.ZodType<UpdateFlagSegmentRhs, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentRhs$Outbound = UpdateFlagSegmentRhs2$Outbound | UpdateFlagSegmentRhs1$Outbound | string | number | boolean;
/** @internal */
export declare const UpdateFlagSegmentRhs$outboundSchema: z.ZodType<UpdateFlagSegmentRhs$Outbound, z.ZodTypeDef, UpdateFlagSegmentRhs>;
export declare function updateFlagSegmentRhsToJSON(updateFlagSegmentRhs: UpdateFlagSegmentRhs): string;
export declare function updateFlagSegmentRhsFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentRhs, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentConditions$inboundSchema: z.ZodType<UpdateFlagSegmentConditions, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentConditions$Outbound = {
    lhs: UpdateFlagSegmentLhs2$Outbound | UpdateFlagSegmentLhs1$Outbound;
    cmp: string;
    rhs?: UpdateFlagSegmentRhs2$Outbound | UpdateFlagSegmentRhs1$Outbound | string | number | boolean | undefined;
};
/** @internal */
export declare const UpdateFlagSegmentConditions$outboundSchema: z.ZodType<UpdateFlagSegmentConditions$Outbound, z.ZodTypeDef, UpdateFlagSegmentConditions>;
export declare function updateFlagSegmentConditionsToJSON(updateFlagSegmentConditions: UpdateFlagSegmentConditions): string;
export declare function updateFlagSegmentConditionsFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentConditions, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentOutcomeBase$inboundSchema: z.ZodType<UpdateFlagSegmentOutcomeBase, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentOutcomeBase$Outbound = {
    type?: any | undefined;
    kind: string;
    attribute: string;
};
/** @internal */
export declare const UpdateFlagSegmentOutcomeBase$outboundSchema: z.ZodType<UpdateFlagSegmentOutcomeBase$Outbound, z.ZodTypeDef, UpdateFlagSegmentOutcomeBase>;
export declare function updateFlagSegmentOutcomeBaseToJSON(updateFlagSegmentOutcomeBase: UpdateFlagSegmentOutcomeBase): string;
export declare function updateFlagSegmentOutcomeBaseFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentOutcomeBase, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentOutcome2$inboundSchema: z.ZodType<UpdateFlagSegmentOutcome2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentOutcome2$Outbound = {
    type?: any | undefined;
    base: UpdateFlagSegmentOutcomeBase$Outbound;
    passPromille: number;
};
/** @internal */
export declare const UpdateFlagSegmentOutcome2$outboundSchema: z.ZodType<UpdateFlagSegmentOutcome2$Outbound, z.ZodTypeDef, UpdateFlagSegmentOutcome2>;
export declare function updateFlagSegmentOutcome2ToJSON(updateFlagSegmentOutcome2: UpdateFlagSegmentOutcome2): string;
export declare function updateFlagSegmentOutcome2FromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentOutcome2, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentOutcome1$inboundSchema: z.ZodType<UpdateFlagSegmentOutcome1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentOutcome1$Outbound = {
    type?: any | undefined;
};
/** @internal */
export declare const UpdateFlagSegmentOutcome1$outboundSchema: z.ZodType<UpdateFlagSegmentOutcome1$Outbound, z.ZodTypeDef, UpdateFlagSegmentOutcome1>;
export declare function updateFlagSegmentOutcome1ToJSON(updateFlagSegmentOutcome1: UpdateFlagSegmentOutcome1): string;
export declare function updateFlagSegmentOutcome1FromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentOutcome1, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentOutcome$inboundSchema: z.ZodType<UpdateFlagSegmentOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentOutcome$Outbound = UpdateFlagSegmentOutcome2$Outbound | UpdateFlagSegmentOutcome1$Outbound;
/** @internal */
export declare const UpdateFlagSegmentOutcome$outboundSchema: z.ZodType<UpdateFlagSegmentOutcome$Outbound, z.ZodTypeDef, UpdateFlagSegmentOutcome>;
export declare function updateFlagSegmentOutcomeToJSON(updateFlagSegmentOutcome: UpdateFlagSegmentOutcome): string;
export declare function updateFlagSegmentOutcomeFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentOutcome, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentRules$inboundSchema: z.ZodType<UpdateFlagSegmentRules, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentRules$Outbound = {
    id: string;
    conditions: Array<UpdateFlagSegmentConditions$Outbound>;
    outcome: UpdateFlagSegmentOutcome2$Outbound | UpdateFlagSegmentOutcome1$Outbound;
};
/** @internal */
export declare const UpdateFlagSegmentRules$outboundSchema: z.ZodType<UpdateFlagSegmentRules$Outbound, z.ZodTypeDef, UpdateFlagSegmentRules>;
export declare function updateFlagSegmentRulesToJSON(updateFlagSegmentRules: UpdateFlagSegmentRules): string;
export declare function updateFlagSegmentRulesFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentRules, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentInclude$inboundSchema: z.ZodType<UpdateFlagSegmentInclude, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentInclude$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const UpdateFlagSegmentInclude$outboundSchema: z.ZodType<UpdateFlagSegmentInclude$Outbound, z.ZodTypeDef, UpdateFlagSegmentInclude>;
export declare function updateFlagSegmentIncludeToJSON(updateFlagSegmentInclude: UpdateFlagSegmentInclude): string;
export declare function updateFlagSegmentIncludeFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentInclude, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentExclude$inboundSchema: z.ZodType<UpdateFlagSegmentExclude, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentExclude$Outbound = {
    note?: string | undefined;
    value: string;
};
/** @internal */
export declare const UpdateFlagSegmentExclude$outboundSchema: z.ZodType<UpdateFlagSegmentExclude$Outbound, z.ZodTypeDef, UpdateFlagSegmentExclude>;
export declare function updateFlagSegmentExcludeToJSON(updateFlagSegmentExclude: UpdateFlagSegmentExclude): string;
export declare function updateFlagSegmentExcludeFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentExclude, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentData$inboundSchema: z.ZodType<UpdateFlagSegmentData, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentData$Outbound = {
    rules?: Array<UpdateFlagSegmentRules$Outbound> | undefined;
    include?: {
        [k: string]: {
            [k: string]: Array<UpdateFlagSegmentInclude$Outbound>;
        };
    } | undefined;
    exclude?: {
        [k: string]: {
            [k: string]: Array<UpdateFlagSegmentExclude$Outbound>;
        };
    } | undefined;
};
/** @internal */
export declare const UpdateFlagSegmentData$outboundSchema: z.ZodType<UpdateFlagSegmentData$Outbound, z.ZodTypeDef, UpdateFlagSegmentData>;
export declare function updateFlagSegmentDataToJSON(updateFlagSegmentData: UpdateFlagSegmentData): string;
export declare function updateFlagSegmentDataFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentData, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentRequestBody$inboundSchema: z.ZodType<UpdateFlagSegmentRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentRequestBody$Outbound = {
    operations?: Array<Operations$Outbound> | undefined;
    label?: string | undefined;
    description?: string | undefined;
    data?: UpdateFlagSegmentData$Outbound | undefined;
    hint?: string | undefined;
};
/** @internal */
export declare const UpdateFlagSegmentRequestBody$outboundSchema: z.ZodType<UpdateFlagSegmentRequestBody$Outbound, z.ZodTypeDef, UpdateFlagSegmentRequestBody>;
export declare function updateFlagSegmentRequestBodyToJSON(updateFlagSegmentRequestBody: UpdateFlagSegmentRequestBody): string;
export declare function updateFlagSegmentRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSegmentRequest$inboundSchema: z.ZodType<UpdateFlagSegmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSegmentRequest$Outbound = {
    projectIdOrName: string;
    segmentIdOrSlug: string;
    withMetadata: boolean;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateFlagSegmentRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateFlagSegmentRequest$outboundSchema: z.ZodType<UpdateFlagSegmentRequest$Outbound, z.ZodTypeDef, UpdateFlagSegmentRequest>;
export declare function updateFlagSegmentRequestToJSON(updateFlagSegmentRequest: UpdateFlagSegmentRequest): string;
export declare function updateFlagSegmentRequestFromJSON(jsonString: string): SafeParseResult<UpdateFlagSegmentRequest, SDKValidationError>;
//# sourceMappingURL=updateflagsegmentop.d.ts.map