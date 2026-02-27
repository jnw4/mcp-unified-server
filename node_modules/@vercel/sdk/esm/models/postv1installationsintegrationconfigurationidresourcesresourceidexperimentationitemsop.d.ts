import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const Category: {
    readonly Experiment: "experiment";
    readonly Flag: "flag";
};
export type Category = ClosedEnum<typeof Category>;
export type PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems = {
    id: string;
    slug: string;
    origin: string;
    category?: Category | undefined;
    name?: string | undefined;
    description?: string | undefined;
    isArchived?: boolean | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
};
export type PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody = {
    items: Array<PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems>;
};
export type PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest = {
    integrationConfigurationId: string;
    resourceId: string;
    requestBody?: PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody | undefined;
};
/** @internal */
export declare const Category$inboundSchema: z.ZodNativeEnum<typeof Category>;
/** @internal */
export declare const Category$outboundSchema: z.ZodNativeEnum<typeof Category>;
/** @internal */
export declare const PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems$inboundSchema: z.ZodType<PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems$Outbound = {
    id: string;
    slug: string;
    origin: string;
    category?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    isArchived?: boolean | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
};
/** @internal */
export declare const PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems$outboundSchema: z.ZodType<PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems$Outbound, z.ZodTypeDef, PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems>;
export declare function postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemsToJSON(postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems: PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems): string;
export declare function postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemsFromJSON(jsonString: string): SafeParseResult<PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems, SDKValidationError>;
/** @internal */
export declare const PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody$inboundSchema: z.ZodType<PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody$Outbound = {
    items: Array<PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItems$Outbound>;
};
/** @internal */
export declare const PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody$outboundSchema: z.ZodType<PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody$Outbound, z.ZodTypeDef, PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody>;
export declare function postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBodyToJSON(postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody: PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody): string;
export declare function postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest$inboundSchema: z.ZodType<PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
    RequestBody?: PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestBody$Outbound | undefined;
};
/** @internal */
export declare const PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest$outboundSchema: z.ZodType<PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest$Outbound, z.ZodTypeDef, PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest>;
export declare function postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestToJSON(postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest: PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest): string;
export declare function postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequestFromJSON(jsonString: string): SafeParseResult<PostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRequest, SDKValidationError>;
//# sourceMappingURL=postv1installationsintegrationconfigurationidresourcesresourceidexperimentationitemsop.d.ts.map