import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const PatchEdgeConfigItems1Operation: {
    readonly Create: "create";
    readonly Update: "update";
    readonly Upsert: "upsert";
    readonly Delete: "delete";
};
export type PatchEdgeConfigItems1Operation = ClosedEnum<typeof PatchEdgeConfigItems1Operation>;
export type PatchEdgeConfigItems1Description = string | any;
export type PatchEdgeConfigItems13 = {
    operation: PatchEdgeConfigItems1Operation;
    key: string;
    value?: any | null | undefined;
    description?: string | any | null | undefined;
};
export declare const OneOperation: {
    readonly Create: "create";
    readonly Update: "update";
    readonly Upsert: "upsert";
    readonly Delete: "delete";
};
export type OneOperation = ClosedEnum<typeof OneOperation>;
export type OneDescription = string | any;
export type PatchEdgeConfigItems12 = {
    operation: OneOperation;
    key: string;
    value?: any | null | undefined;
    description?: string | any | null | undefined;
};
export declare const Operation: {
    readonly Create: "create";
    readonly Update: "update";
    readonly Upsert: "upsert";
    readonly Delete: "delete";
};
export type Operation = ClosedEnum<typeof Operation>;
export type Description = string | any;
export type PatchEdgeConfigItems11 = {
    operation: Operation;
    key: string;
    value?: any | null | undefined;
    description?: string | any | null | undefined;
};
export type PatchEdgeConfigItemsItems1 = PatchEdgeConfigItems11 | PatchEdgeConfigItems12 | PatchEdgeConfigItems13;
export type PatchEdgeConfigItemsItems = PatchEdgeConfigItems11 | PatchEdgeConfigItems12 | PatchEdgeConfigItems13;
export type PatchEdgeConfigItemsRequestBody = {
    items: Array<PatchEdgeConfigItems11 | PatchEdgeConfigItems12 | PatchEdgeConfigItems13>;
};
export type PatchEdgeConfigItemsRequest = {
    edgeConfigId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: PatchEdgeConfigItemsRequestBody | undefined;
};
export type PatchEdgeConfigItemsResponseBody = {
    status: string;
};
/** @internal */
export declare const PatchEdgeConfigItems1Operation$inboundSchema: z.ZodNativeEnum<typeof PatchEdgeConfigItems1Operation>;
/** @internal */
export declare const PatchEdgeConfigItems1Operation$outboundSchema: z.ZodNativeEnum<typeof PatchEdgeConfigItems1Operation>;
/** @internal */
export declare const PatchEdgeConfigItems1Description$inboundSchema: z.ZodType<PatchEdgeConfigItems1Description, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigItems1Description$Outbound = string | any;
/** @internal */
export declare const PatchEdgeConfigItems1Description$outboundSchema: z.ZodType<PatchEdgeConfigItems1Description$Outbound, z.ZodTypeDef, PatchEdgeConfigItems1Description>;
export declare function patchEdgeConfigItems1DescriptionToJSON(patchEdgeConfigItems1Description: PatchEdgeConfigItems1Description): string;
export declare function patchEdgeConfigItems1DescriptionFromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigItems1Description, SDKValidationError>;
/** @internal */
export declare const PatchEdgeConfigItems13$inboundSchema: z.ZodType<PatchEdgeConfigItems13, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigItems13$Outbound = {
    operation: string;
    key: string;
    value?: any | null | undefined;
    description?: string | any | null | undefined;
};
/** @internal */
export declare const PatchEdgeConfigItems13$outboundSchema: z.ZodType<PatchEdgeConfigItems13$Outbound, z.ZodTypeDef, PatchEdgeConfigItems13>;
export declare function patchEdgeConfigItems13ToJSON(patchEdgeConfigItems13: PatchEdgeConfigItems13): string;
export declare function patchEdgeConfigItems13FromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigItems13, SDKValidationError>;
/** @internal */
export declare const OneOperation$inboundSchema: z.ZodNativeEnum<typeof OneOperation>;
/** @internal */
export declare const OneOperation$outboundSchema: z.ZodNativeEnum<typeof OneOperation>;
/** @internal */
export declare const OneDescription$inboundSchema: z.ZodType<OneDescription, z.ZodTypeDef, unknown>;
/** @internal */
export type OneDescription$Outbound = string | any;
/** @internal */
export declare const OneDescription$outboundSchema: z.ZodType<OneDescription$Outbound, z.ZodTypeDef, OneDescription>;
export declare function oneDescriptionToJSON(oneDescription: OneDescription): string;
export declare function oneDescriptionFromJSON(jsonString: string): SafeParseResult<OneDescription, SDKValidationError>;
/** @internal */
export declare const PatchEdgeConfigItems12$inboundSchema: z.ZodType<PatchEdgeConfigItems12, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigItems12$Outbound = {
    operation: string;
    key: string;
    value?: any | null | undefined;
    description?: string | any | null | undefined;
};
/** @internal */
export declare const PatchEdgeConfigItems12$outboundSchema: z.ZodType<PatchEdgeConfigItems12$Outbound, z.ZodTypeDef, PatchEdgeConfigItems12>;
export declare function patchEdgeConfigItems12ToJSON(patchEdgeConfigItems12: PatchEdgeConfigItems12): string;
export declare function patchEdgeConfigItems12FromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigItems12, SDKValidationError>;
/** @internal */
export declare const Operation$inboundSchema: z.ZodNativeEnum<typeof Operation>;
/** @internal */
export declare const Operation$outboundSchema: z.ZodNativeEnum<typeof Operation>;
/** @internal */
export declare const Description$inboundSchema: z.ZodType<Description, z.ZodTypeDef, unknown>;
/** @internal */
export type Description$Outbound = string | any;
/** @internal */
export declare const Description$outboundSchema: z.ZodType<Description$Outbound, z.ZodTypeDef, Description>;
export declare function descriptionToJSON(description: Description): string;
export declare function descriptionFromJSON(jsonString: string): SafeParseResult<Description, SDKValidationError>;
/** @internal */
export declare const PatchEdgeConfigItems11$inboundSchema: z.ZodType<PatchEdgeConfigItems11, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigItems11$Outbound = {
    operation: string;
    key: string;
    value?: any | null | undefined;
    description?: string | any | null | undefined;
};
/** @internal */
export declare const PatchEdgeConfigItems11$outboundSchema: z.ZodType<PatchEdgeConfigItems11$Outbound, z.ZodTypeDef, PatchEdgeConfigItems11>;
export declare function patchEdgeConfigItems11ToJSON(patchEdgeConfigItems11: PatchEdgeConfigItems11): string;
export declare function patchEdgeConfigItems11FromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigItems11, SDKValidationError>;
/** @internal */
export declare const PatchEdgeConfigItemsItems1$inboundSchema: z.ZodType<PatchEdgeConfigItemsItems1, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigItemsItems1$Outbound = PatchEdgeConfigItems11$Outbound | PatchEdgeConfigItems12$Outbound | PatchEdgeConfigItems13$Outbound;
/** @internal */
export declare const PatchEdgeConfigItemsItems1$outboundSchema: z.ZodType<PatchEdgeConfigItemsItems1$Outbound, z.ZodTypeDef, PatchEdgeConfigItemsItems1>;
export declare function patchEdgeConfigItemsItems1ToJSON(patchEdgeConfigItemsItems1: PatchEdgeConfigItemsItems1): string;
export declare function patchEdgeConfigItemsItems1FromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigItemsItems1, SDKValidationError>;
/** @internal */
export declare const PatchEdgeConfigItemsItems$inboundSchema: z.ZodType<PatchEdgeConfigItemsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigItemsItems$Outbound = PatchEdgeConfigItems11$Outbound | PatchEdgeConfigItems12$Outbound | PatchEdgeConfigItems13$Outbound;
/** @internal */
export declare const PatchEdgeConfigItemsItems$outboundSchema: z.ZodType<PatchEdgeConfigItemsItems$Outbound, z.ZodTypeDef, PatchEdgeConfigItemsItems>;
export declare function patchEdgeConfigItemsItemsToJSON(patchEdgeConfigItemsItems: PatchEdgeConfigItemsItems): string;
export declare function patchEdgeConfigItemsItemsFromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigItemsItems, SDKValidationError>;
/** @internal */
export declare const PatchEdgeConfigItemsRequestBody$inboundSchema: z.ZodType<PatchEdgeConfigItemsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigItemsRequestBody$Outbound = {
    items: Array<PatchEdgeConfigItems11$Outbound | PatchEdgeConfigItems12$Outbound | PatchEdgeConfigItems13$Outbound>;
};
/** @internal */
export declare const PatchEdgeConfigItemsRequestBody$outboundSchema: z.ZodType<PatchEdgeConfigItemsRequestBody$Outbound, z.ZodTypeDef, PatchEdgeConfigItemsRequestBody>;
export declare function patchEdgeConfigItemsRequestBodyToJSON(patchEdgeConfigItemsRequestBody: PatchEdgeConfigItemsRequestBody): string;
export declare function patchEdgeConfigItemsRequestBodyFromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigItemsRequestBody, SDKValidationError>;
/** @internal */
export declare const PatchEdgeConfigItemsRequest$inboundSchema: z.ZodType<PatchEdgeConfigItemsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigItemsRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: PatchEdgeConfigItemsRequestBody$Outbound | undefined;
};
/** @internal */
export declare const PatchEdgeConfigItemsRequest$outboundSchema: z.ZodType<PatchEdgeConfigItemsRequest$Outbound, z.ZodTypeDef, PatchEdgeConfigItemsRequest>;
export declare function patchEdgeConfigItemsRequestToJSON(patchEdgeConfigItemsRequest: PatchEdgeConfigItemsRequest): string;
export declare function patchEdgeConfigItemsRequestFromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigItemsRequest, SDKValidationError>;
/** @internal */
export declare const PatchEdgeConfigItemsResponseBody$inboundSchema: z.ZodType<PatchEdgeConfigItemsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchEdgeConfigItemsResponseBody$Outbound = {
    status: string;
};
/** @internal */
export declare const PatchEdgeConfigItemsResponseBody$outboundSchema: z.ZodType<PatchEdgeConfigItemsResponseBody$Outbound, z.ZodTypeDef, PatchEdgeConfigItemsResponseBody>;
export declare function patchEdgeConfigItemsResponseBodyToJSON(patchEdgeConfigItemsResponseBody: PatchEdgeConfigItemsResponseBody): string;
export declare function patchEdgeConfigItemsResponseBodyFromJSON(jsonString: string): SafeParseResult<PatchEdgeConfigItemsResponseBody, SDKValidationError>;
//# sourceMappingURL=patchedgeconfigitemsop.d.ts.map