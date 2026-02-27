import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest = {
    integrationConfigurationId: string;
    resourceId: string;
    itemId: string;
};
/** @internal */
export declare const DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest$inboundSchema: z.ZodType<DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
    itemId: string;
};
/** @internal */
export declare const DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest$outboundSchema: z.ZodType<DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest$Outbound, z.ZodTypeDef, DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest>;
export declare function deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestToJSON(deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest: DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest): string;
export declare function deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRequest, SDKValidationError>;
//# sourceMappingURL=deletev1installationsintegrationconfigurationidresourcesresourceidexperimentationitemsitemidop.d.ts.map