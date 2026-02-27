import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { EdgeConfigItemValue, EdgeConfigItemValue$Outbound } from "./edgeconfigitemvalue.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest = {
    integrationConfigurationId: string;
    resourceId: string;
};
export declare const GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose: {
    readonly Flags: "flags";
    readonly Experimentation: "experimentation";
};
export type GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose = ClosedEnum<typeof GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose>;
/**
 * The Edge Config data
 */
export type GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody = {
    items: {
        [k: string]: EdgeConfigItemValue | null;
    };
    updatedAt: number;
    digest: string;
    purpose?: GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose | undefined;
};
/** @internal */
export declare const GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$inboundSchema: z.ZodType<GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
};
/** @internal */
export declare const GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$outboundSchema: z.ZodType<GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$Outbound, z.ZodTypeDef, GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest>;
export declare function getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestToJSON(getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest: GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest): string;
export declare function getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestFromJSON(jsonString: string): SafeParseResult<GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest, SDKValidationError>;
/** @internal */
export declare const GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose$inboundSchema: z.ZodNativeEnum<typeof GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose>;
/** @internal */
export declare const GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose$outboundSchema: z.ZodNativeEnum<typeof GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose>;
/** @internal */
export declare const GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$inboundSchema: z.ZodType<GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$Outbound = {
    items: {
        [k: string]: EdgeConfigItemValue$Outbound | null;
    };
    updatedAt: number;
    digest: string;
    purpose?: string | undefined;
};
/** @internal */
export declare const GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$outboundSchema: z.ZodType<GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$Outbound, z.ZodTypeDef, GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody>;
export declare function getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBodyToJSON(getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody: GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody): string;
export declare function getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBodyFromJSON(jsonString: string): SafeParseResult<GetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody, SDKValidationError>;
//# sourceMappingURL=getv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfigop.d.ts.map