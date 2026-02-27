import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const UpdateIntegrationDeploymentActionStatus: {
    readonly Running: "running";
    readonly Succeeded: "succeeded";
    readonly Failed: "failed";
};
export type UpdateIntegrationDeploymentActionStatus = ClosedEnum<typeof UpdateIntegrationDeploymentActionStatus>;
export type Secrets = {
    name: string;
    value: string;
};
export type Outcomes1 = {
    kind: string;
    secrets: Array<Secrets>;
};
export type Outcomes = Outcomes1;
export type UpdateIntegrationDeploymentActionRequestBody = {
    status?: UpdateIntegrationDeploymentActionStatus | undefined;
    statusText?: string | undefined;
    statusUrl?: string | undefined;
    outcomes?: Array<Outcomes1> | undefined;
};
export type UpdateIntegrationDeploymentActionRequest = {
    deploymentId: string;
    integrationConfigurationId: string;
    resourceId: string;
    action: string;
    requestBody?: UpdateIntegrationDeploymentActionRequestBody | undefined;
};
/** @internal */
export declare const UpdateIntegrationDeploymentActionStatus$inboundSchema: z.ZodNativeEnum<typeof UpdateIntegrationDeploymentActionStatus>;
/** @internal */
export declare const UpdateIntegrationDeploymentActionStatus$outboundSchema: z.ZodNativeEnum<typeof UpdateIntegrationDeploymentActionStatus>;
/** @internal */
export declare const Secrets$inboundSchema: z.ZodType<Secrets, z.ZodTypeDef, unknown>;
/** @internal */
export type Secrets$Outbound = {
    name: string;
    value: string;
};
/** @internal */
export declare const Secrets$outboundSchema: z.ZodType<Secrets$Outbound, z.ZodTypeDef, Secrets>;
export declare function secretsToJSON(secrets: Secrets): string;
export declare function secretsFromJSON(jsonString: string): SafeParseResult<Secrets, SDKValidationError>;
/** @internal */
export declare const Outcomes1$inboundSchema: z.ZodType<Outcomes1, z.ZodTypeDef, unknown>;
/** @internal */
export type Outcomes1$Outbound = {
    kind: string;
    secrets: Array<Secrets$Outbound>;
};
/** @internal */
export declare const Outcomes1$outboundSchema: z.ZodType<Outcomes1$Outbound, z.ZodTypeDef, Outcomes1>;
export declare function outcomes1ToJSON(outcomes1: Outcomes1): string;
export declare function outcomes1FromJSON(jsonString: string): SafeParseResult<Outcomes1, SDKValidationError>;
/** @internal */
export declare const Outcomes$inboundSchema: z.ZodType<Outcomes, z.ZodTypeDef, unknown>;
/** @internal */
export type Outcomes$Outbound = Outcomes1$Outbound;
/** @internal */
export declare const Outcomes$outboundSchema: z.ZodType<Outcomes$Outbound, z.ZodTypeDef, Outcomes>;
export declare function outcomesToJSON(outcomes: Outcomes): string;
export declare function outcomesFromJSON(jsonString: string): SafeParseResult<Outcomes, SDKValidationError>;
/** @internal */
export declare const UpdateIntegrationDeploymentActionRequestBody$inboundSchema: z.ZodType<UpdateIntegrationDeploymentActionRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateIntegrationDeploymentActionRequestBody$Outbound = {
    status?: string | undefined;
    statusText?: string | undefined;
    statusUrl?: string | undefined;
    outcomes?: Array<Outcomes1$Outbound> | undefined;
};
/** @internal */
export declare const UpdateIntegrationDeploymentActionRequestBody$outboundSchema: z.ZodType<UpdateIntegrationDeploymentActionRequestBody$Outbound, z.ZodTypeDef, UpdateIntegrationDeploymentActionRequestBody>;
export declare function updateIntegrationDeploymentActionRequestBodyToJSON(updateIntegrationDeploymentActionRequestBody: UpdateIntegrationDeploymentActionRequestBody): string;
export declare function updateIntegrationDeploymentActionRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateIntegrationDeploymentActionRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateIntegrationDeploymentActionRequest$inboundSchema: z.ZodType<UpdateIntegrationDeploymentActionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateIntegrationDeploymentActionRequest$Outbound = {
    deploymentId: string;
    integrationConfigurationId: string;
    resourceId: string;
    action: string;
    RequestBody?: UpdateIntegrationDeploymentActionRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateIntegrationDeploymentActionRequest$outboundSchema: z.ZodType<UpdateIntegrationDeploymentActionRequest$Outbound, z.ZodTypeDef, UpdateIntegrationDeploymentActionRequest>;
export declare function updateIntegrationDeploymentActionRequestToJSON(updateIntegrationDeploymentActionRequest: UpdateIntegrationDeploymentActionRequest): string;
export declare function updateIntegrationDeploymentActionRequestFromJSON(jsonString: string): SafeParseResult<UpdateIntegrationDeploymentActionRequest, SDKValidationError>;
//# sourceMappingURL=updateintegrationdeploymentactionop.d.ts.map