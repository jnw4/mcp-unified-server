import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdCategory: {
    readonly Experiment: "experiment";
    readonly Flag: "flag";
};
export type PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdCategory = ClosedEnum<typeof PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdCategory>;
export type PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody = {
    slug: string;
    origin: string;
    name?: string | undefined;
    category?: PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdCategory | undefined;
    description?: string | undefined;
    isArchived?: boolean | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
};
export type PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest = {
    integrationConfigurationId: string;
    resourceId: string;
    itemId: string;
    requestBody?: PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody | undefined;
};
/** @internal */
export declare const PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdCategory$inboundSchema: z.ZodNativeEnum<typeof PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdCategory>;
/** @internal */
export declare const PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdCategory$outboundSchema: z.ZodNativeEnum<typeof PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdCategory>;
/** @internal */
export declare const PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody$inboundSchema: z.ZodType<PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody$Outbound = {
    slug: string;
    origin: string;
    name?: string | undefined;
    category?: string | undefined;
    description?: string | undefined;
    isArchived?: boolean | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
};
/** @internal */
export declare const PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody$outboundSchema: z.ZodType<PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody$Outbound, z.ZodTypeDef, PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody>;
export declare function patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBodyToJSON(patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody: PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody): string;
export declare function patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBodyFromJSON(jsonString: string): SafeParseResult<PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody, SDKValidationError>;
/** @internal */
export declare const PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest$inboundSchema: z.ZodType<PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
    itemId: string;
    RequestBody?: PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestBody$Outbound | undefined;
};
/** @internal */
export declare const PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest$outboundSchema: z.ZodType<PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest$Outbound, z.ZodTypeDef, PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest>;
export declare function patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestToJSON(patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest: PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest): string;
export declare function patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestFromJSON(jsonString: string): SafeParseResult<PatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest, SDKValidationError>;
//# sourceMappingURL=patchv1installationsintegrationconfigurationidresourcesresourceidexperimentationitemsitemidop.d.ts.map