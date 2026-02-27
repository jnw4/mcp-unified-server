import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteIntegrationResourceRequest = {
    integrationConfigurationId: string;
    resourceId: string;
};
/** @internal */
export declare const DeleteIntegrationResourceRequest$inboundSchema: z.ZodType<DeleteIntegrationResourceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteIntegrationResourceRequest$Outbound = {
    integrationConfigurationId: string;
    resourceId: string;
};
/** @internal */
export declare const DeleteIntegrationResourceRequest$outboundSchema: z.ZodType<DeleteIntegrationResourceRequest$Outbound, z.ZodTypeDef, DeleteIntegrationResourceRequest>;
export declare function deleteIntegrationResourceRequestToJSON(deleteIntegrationResourceRequest: DeleteIntegrationResourceRequest): string;
export declare function deleteIntegrationResourceRequestFromJSON(jsonString: string): SafeParseResult<DeleteIntegrationResourceRequest, SDKValidationError>;
//# sourceMappingURL=deleteintegrationresourceop.d.ts.map