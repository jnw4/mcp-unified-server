import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type PaidFeatures = {
    concurrentBuilds?: number | null | undefined;
    passwordProtection?: boolean | null | undefined;
    previewDeploymentSuffix?: boolean | null | undefined;
};
export type AcceptedPolicies = {
    eula: Date;
    privacy: Date;
    additionalProperties?: {
        [k: string]: Date;
    } | undefined;
};
export type AcceptProjectTransferRequestRequestBody = {
    /**
     * The desired name for the project
     */
    newProjectName?: string | undefined;
    paidFeatures?: PaidFeatures | undefined;
    acceptedPolicies?: {
        [k: string]: AcceptedPolicies;
    } | undefined;
};
export type AcceptProjectTransferRequestRequest = {
    /**
     * The code of the project transfer request.
     */
    code: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: AcceptProjectTransferRequestRequestBody | undefined;
};
export type AcceptProjectTransferRequestResponseBody2 = {};
export declare const AcceptProjectTransferRequestResponseBodyStatus: {
    readonly Errored: "errored";
    readonly Fulfilled: "fulfilled";
};
export type AcceptProjectTransferRequestResponseBodyStatus = ClosedEnum<typeof AcceptProjectTransferRequestResponseBodyStatus>;
export type AcceptProjectTransferRequestResponseBodyError = {};
export type AcceptProjectTransferRequestResponseBodyResult = {
    status: AcceptProjectTransferRequestResponseBodyStatus;
    error?: AcceptProjectTransferRequestResponseBodyError | undefined;
    code?: string | undefined;
};
export type PartnerCalls = {
    installationId: string;
    resourceIds: Array<string>;
    result: AcceptProjectTransferRequestResponseBodyResult;
};
export type ResourceTransferErrors = {};
export type AcceptProjectTransferRequestResponseBody1 = {
    partnerCalls: Array<PartnerCalls>;
    resourceTransferErrors: Array<ResourceTransferErrors>;
    transferredStoreIds: Array<string>;
};
/**
 * The project has been transferred successfully.
 */
export type AcceptProjectTransferRequestResponseBody = AcceptProjectTransferRequestResponseBody1 | AcceptProjectTransferRequestResponseBody2;
/** @internal */
export declare const PaidFeatures$inboundSchema: z.ZodType<PaidFeatures, z.ZodTypeDef, unknown>;
/** @internal */
export type PaidFeatures$Outbound = {
    concurrentBuilds?: number | null | undefined;
    passwordProtection?: boolean | null | undefined;
    previewDeploymentSuffix?: boolean | null | undefined;
};
/** @internal */
export declare const PaidFeatures$outboundSchema: z.ZodType<PaidFeatures$Outbound, z.ZodTypeDef, PaidFeatures>;
export declare function paidFeaturesToJSON(paidFeatures: PaidFeatures): string;
export declare function paidFeaturesFromJSON(jsonString: string): SafeParseResult<PaidFeatures, SDKValidationError>;
/** @internal */
export declare const AcceptedPolicies$inboundSchema: z.ZodType<AcceptedPolicies, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptedPolicies$Outbound = {
    eula: string;
    privacy: string;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const AcceptedPolicies$outboundSchema: z.ZodType<AcceptedPolicies$Outbound, z.ZodTypeDef, AcceptedPolicies>;
export declare function acceptedPoliciesToJSON(acceptedPolicies: AcceptedPolicies): string;
export declare function acceptedPoliciesFromJSON(jsonString: string): SafeParseResult<AcceptedPolicies, SDKValidationError>;
/** @internal */
export declare const AcceptProjectTransferRequestRequestBody$inboundSchema: z.ZodType<AcceptProjectTransferRequestRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptProjectTransferRequestRequestBody$Outbound = {
    newProjectName?: string | undefined;
    paidFeatures?: PaidFeatures$Outbound | undefined;
    acceptedPolicies?: {
        [k: string]: AcceptedPolicies$Outbound;
    } | undefined;
};
/** @internal */
export declare const AcceptProjectTransferRequestRequestBody$outboundSchema: z.ZodType<AcceptProjectTransferRequestRequestBody$Outbound, z.ZodTypeDef, AcceptProjectTransferRequestRequestBody>;
export declare function acceptProjectTransferRequestRequestBodyToJSON(acceptProjectTransferRequestRequestBody: AcceptProjectTransferRequestRequestBody): string;
export declare function acceptProjectTransferRequestRequestBodyFromJSON(jsonString: string): SafeParseResult<AcceptProjectTransferRequestRequestBody, SDKValidationError>;
/** @internal */
export declare const AcceptProjectTransferRequestRequest$inboundSchema: z.ZodType<AcceptProjectTransferRequestRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptProjectTransferRequestRequest$Outbound = {
    code: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: AcceptProjectTransferRequestRequestBody$Outbound | undefined;
};
/** @internal */
export declare const AcceptProjectTransferRequestRequest$outboundSchema: z.ZodType<AcceptProjectTransferRequestRequest$Outbound, z.ZodTypeDef, AcceptProjectTransferRequestRequest>;
export declare function acceptProjectTransferRequestRequestToJSON(acceptProjectTransferRequestRequest: AcceptProjectTransferRequestRequest): string;
export declare function acceptProjectTransferRequestRequestFromJSON(jsonString: string): SafeParseResult<AcceptProjectTransferRequestRequest, SDKValidationError>;
/** @internal */
export declare const AcceptProjectTransferRequestResponseBody2$inboundSchema: z.ZodType<AcceptProjectTransferRequestResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptProjectTransferRequestResponseBody2$Outbound = {};
/** @internal */
export declare const AcceptProjectTransferRequestResponseBody2$outboundSchema: z.ZodType<AcceptProjectTransferRequestResponseBody2$Outbound, z.ZodTypeDef, AcceptProjectTransferRequestResponseBody2>;
export declare function acceptProjectTransferRequestResponseBody2ToJSON(acceptProjectTransferRequestResponseBody2: AcceptProjectTransferRequestResponseBody2): string;
export declare function acceptProjectTransferRequestResponseBody2FromJSON(jsonString: string): SafeParseResult<AcceptProjectTransferRequestResponseBody2, SDKValidationError>;
/** @internal */
export declare const AcceptProjectTransferRequestResponseBodyStatus$inboundSchema: z.ZodNativeEnum<typeof AcceptProjectTransferRequestResponseBodyStatus>;
/** @internal */
export declare const AcceptProjectTransferRequestResponseBodyStatus$outboundSchema: z.ZodNativeEnum<typeof AcceptProjectTransferRequestResponseBodyStatus>;
/** @internal */
export declare const AcceptProjectTransferRequestResponseBodyError$inboundSchema: z.ZodType<AcceptProjectTransferRequestResponseBodyError, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptProjectTransferRequestResponseBodyError$Outbound = {};
/** @internal */
export declare const AcceptProjectTransferRequestResponseBodyError$outboundSchema: z.ZodType<AcceptProjectTransferRequestResponseBodyError$Outbound, z.ZodTypeDef, AcceptProjectTransferRequestResponseBodyError>;
export declare function acceptProjectTransferRequestResponseBodyErrorToJSON(acceptProjectTransferRequestResponseBodyError: AcceptProjectTransferRequestResponseBodyError): string;
export declare function acceptProjectTransferRequestResponseBodyErrorFromJSON(jsonString: string): SafeParseResult<AcceptProjectTransferRequestResponseBodyError, SDKValidationError>;
/** @internal */
export declare const AcceptProjectTransferRequestResponseBodyResult$inboundSchema: z.ZodType<AcceptProjectTransferRequestResponseBodyResult, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptProjectTransferRequestResponseBodyResult$Outbound = {
    status: string;
    error?: AcceptProjectTransferRequestResponseBodyError$Outbound | undefined;
    code?: string | undefined;
};
/** @internal */
export declare const AcceptProjectTransferRequestResponseBodyResult$outboundSchema: z.ZodType<AcceptProjectTransferRequestResponseBodyResult$Outbound, z.ZodTypeDef, AcceptProjectTransferRequestResponseBodyResult>;
export declare function acceptProjectTransferRequestResponseBodyResultToJSON(acceptProjectTransferRequestResponseBodyResult: AcceptProjectTransferRequestResponseBodyResult): string;
export declare function acceptProjectTransferRequestResponseBodyResultFromJSON(jsonString: string): SafeParseResult<AcceptProjectTransferRequestResponseBodyResult, SDKValidationError>;
/** @internal */
export declare const PartnerCalls$inboundSchema: z.ZodType<PartnerCalls, z.ZodTypeDef, unknown>;
/** @internal */
export type PartnerCalls$Outbound = {
    installationId: string;
    resourceIds: Array<string>;
    result: AcceptProjectTransferRequestResponseBodyResult$Outbound;
};
/** @internal */
export declare const PartnerCalls$outboundSchema: z.ZodType<PartnerCalls$Outbound, z.ZodTypeDef, PartnerCalls>;
export declare function partnerCallsToJSON(partnerCalls: PartnerCalls): string;
export declare function partnerCallsFromJSON(jsonString: string): SafeParseResult<PartnerCalls, SDKValidationError>;
/** @internal */
export declare const ResourceTransferErrors$inboundSchema: z.ZodType<ResourceTransferErrors, z.ZodTypeDef, unknown>;
/** @internal */
export type ResourceTransferErrors$Outbound = {};
/** @internal */
export declare const ResourceTransferErrors$outboundSchema: z.ZodType<ResourceTransferErrors$Outbound, z.ZodTypeDef, ResourceTransferErrors>;
export declare function resourceTransferErrorsToJSON(resourceTransferErrors: ResourceTransferErrors): string;
export declare function resourceTransferErrorsFromJSON(jsonString: string): SafeParseResult<ResourceTransferErrors, SDKValidationError>;
/** @internal */
export declare const AcceptProjectTransferRequestResponseBody1$inboundSchema: z.ZodType<AcceptProjectTransferRequestResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptProjectTransferRequestResponseBody1$Outbound = {
    partnerCalls: Array<PartnerCalls$Outbound>;
    resourceTransferErrors: Array<ResourceTransferErrors$Outbound>;
    transferredStoreIds: Array<string>;
};
/** @internal */
export declare const AcceptProjectTransferRequestResponseBody1$outboundSchema: z.ZodType<AcceptProjectTransferRequestResponseBody1$Outbound, z.ZodTypeDef, AcceptProjectTransferRequestResponseBody1>;
export declare function acceptProjectTransferRequestResponseBody1ToJSON(acceptProjectTransferRequestResponseBody1: AcceptProjectTransferRequestResponseBody1): string;
export declare function acceptProjectTransferRequestResponseBody1FromJSON(jsonString: string): SafeParseResult<AcceptProjectTransferRequestResponseBody1, SDKValidationError>;
/** @internal */
export declare const AcceptProjectTransferRequestResponseBody$inboundSchema: z.ZodType<AcceptProjectTransferRequestResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptProjectTransferRequestResponseBody$Outbound = AcceptProjectTransferRequestResponseBody1$Outbound | AcceptProjectTransferRequestResponseBody2$Outbound;
/** @internal */
export declare const AcceptProjectTransferRequestResponseBody$outboundSchema: z.ZodType<AcceptProjectTransferRequestResponseBody$Outbound, z.ZodTypeDef, AcceptProjectTransferRequestResponseBody>;
export declare function acceptProjectTransferRequestResponseBodyToJSON(acceptProjectTransferRequestResponseBody: AcceptProjectTransferRequestResponseBody): string;
export declare function acceptProjectTransferRequestResponseBodyFromJSON(jsonString: string): SafeParseResult<AcceptProjectTransferRequestResponseBody, SDKValidationError>;
//# sourceMappingURL=acceptprojecttransferrequestop.d.ts.map