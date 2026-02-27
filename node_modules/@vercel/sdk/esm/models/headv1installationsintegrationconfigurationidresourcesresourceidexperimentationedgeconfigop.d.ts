import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { EdgeConfigItemValue, EdgeConfigItemValue$Outbound } from "./edgeconfigitemvalue.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest = {
    integrationConfigurationId: string;
    resourceId: string;
};
export declare const HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose: {
    readonly Flags: "flags";
    readonly Experimentation: "experimentation";
};
export type HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose = ClosedEnum<typeof HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose>;
/**
 * The Edge Config data
 */
export type HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody = {
    items: {
        [k: string]: EdgeConfigItemValue | null;
    };
    updatedAt: number;
    digest: string;
    purpose?: HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose | undefined;
};
/** @internal */
export declare const HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$inboundSchema: z.ZodType<HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
};
/** @internal */
export declare const HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$outboundSchema: z.ZodType<HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$Outbound, z.ZodTypeDef, HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest>;
export declare function headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestToJSON(headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest: HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest): string;
export declare function headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestFromJSON(jsonString: string): SafeParseResult<HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest, SDKValidationError>;
/** @internal */
export declare const HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose$inboundSchema: z.ZodNativeEnum<typeof HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose>;
/** @internal */
export declare const HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose$outboundSchema: z.ZodNativeEnum<typeof HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose>;
/** @internal */
export declare const HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$inboundSchema: z.ZodType<HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$Outbound = {
    items: {
        [k: string]: EdgeConfigItemValue$Outbound | null;
    };
    updatedAt: number;
    digest: string;
    purpose?: string | undefined;
};
/** @internal */
export declare const HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$outboundSchema: z.ZodType<HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$Outbound, z.ZodTypeDef, HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody>;
export declare function headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBodyToJSON(headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody: HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody): string;
export declare function headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBodyFromJSON(jsonString: string): SafeParseResult<HeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody, SDKValidationError>;
//# sourceMappingURL=headv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfigop.d.ts.map