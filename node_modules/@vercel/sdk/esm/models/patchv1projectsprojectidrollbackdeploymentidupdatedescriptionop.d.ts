import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody = {
    /**
     * The reason for the rollback
     */
    description?: string | undefined;
};
export type PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest = {
    projectId: string;
    deploymentId: string;
    requestBody?: PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody | undefined;
};
/** @internal */
export declare const PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody$inboundSchema: z.ZodType<PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody$Outbound = {
    description?: string | undefined;
};
/** @internal */
export declare const PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody$outboundSchema: z.ZodType<PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody$Outbound, z.ZodTypeDef, PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody>;
export declare function patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBodyToJSON(patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody: PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody): string;
export declare function patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBodyFromJSON(jsonString: string): SafeParseResult<PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody, SDKValidationError>;
/** @internal */
export declare const PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest$inboundSchema: z.ZodType<PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest$Outbound = {
    projectId: string;
    deploymentId: string;
    RequestBody?: PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestBody$Outbound | undefined;
};
/** @internal */
export declare const PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest$outboundSchema: z.ZodType<PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest$Outbound, z.ZodTypeDef, PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest>;
export declare function patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestToJSON(patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest: PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest): string;
export declare function patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequestFromJSON(jsonString: string): SafeParseResult<PatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRequest, SDKValidationError>;
//# sourceMappingURL=patchv1projectsprojectidrollbackdeploymentidupdatedescriptionop.d.ts.map