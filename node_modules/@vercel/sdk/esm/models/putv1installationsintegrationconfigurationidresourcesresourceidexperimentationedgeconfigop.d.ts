import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { EdgeConfigItemValue, EdgeConfigItemValue$Outbound } from "./edgeconfigitemvalue.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody = {
    data: {
        [k: string]: any;
    };
};
export type PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest = {
    integrationConfigurationId: string;
    resourceId: string;
    requestBody?: PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody | undefined;
};
export declare const PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose: {
    readonly Flags: "flags";
    readonly Experimentation: "experimentation";
};
export type PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose = ClosedEnum<typeof PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose>;
/**
 * The Edge Config was updated
 */
export type PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody = {
    items: {
        [k: string]: EdgeConfigItemValue | null;
    };
    updatedAt: number;
    digest: string;
    purpose?: PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose | undefined;
};
/** @internal */
export declare const PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody$inboundSchema: z.ZodType<PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody$Outbound = {
    data: {
        [k: string]: any;
    };
};
/** @internal */
export declare const PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody$outboundSchema: z.ZodType<PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody$Outbound, z.ZodTypeDef, PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody>;
export declare function putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBodyToJSON(putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody: PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody): string;
export declare function putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$inboundSchema: z.ZodType<PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
    RequestBody?: PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestBody$Outbound | undefined;
};
/** @internal */
export declare const PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$outboundSchema: z.ZodType<PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest$Outbound, z.ZodTypeDef, PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest>;
export declare function putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestToJSON(putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest: PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest): string;
export declare function putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequestFromJSON(jsonString: string): SafeParseResult<PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigRequest, SDKValidationError>;
/** @internal */
export declare const PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose$inboundSchema: z.ZodNativeEnum<typeof PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose>;
/** @internal */
export declare const PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose$outboundSchema: z.ZodNativeEnum<typeof PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigPurpose>;
/** @internal */
export declare const PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$inboundSchema: z.ZodType<PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$Outbound = {
    items: {
        [k: string]: EdgeConfigItemValue$Outbound | null;
    };
    updatedAt: number;
    digest: string;
    purpose?: string | undefined;
};
/** @internal */
export declare const PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$outboundSchema: z.ZodType<PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody$Outbound, z.ZodTypeDef, PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody>;
export declare function putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBodyToJSON(putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody: PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody): string;
export declare function putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBodyFromJSON(jsonString: string): SafeParseResult<PutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationEdgeConfigResponseBody, SDKValidationError>;
//# sourceMappingURL=putv1installationsintegrationconfigurationidresourcesresourceidexperimentationedgeconfigop.d.ts.map