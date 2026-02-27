import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type FinalizeInstallationRequest = {
    integrationConfigurationId: string;
};
/** @internal */
export declare const FinalizeInstallationRequest$inboundSchema: z.ZodType<FinalizeInstallationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FinalizeInstallationRequest$Outbound = {
    integrationConfigurationId: string;
};
/** @internal */
export declare const FinalizeInstallationRequest$outboundSchema: z.ZodType<FinalizeInstallationRequest$Outbound, z.ZodTypeDef, FinalizeInstallationRequest>;
export declare function finalizeInstallationRequestToJSON(finalizeInstallationRequest: FinalizeInstallationRequest): string;
export declare function finalizeInstallationRequestFromJSON(jsonString: string): SafeParseResult<FinalizeInstallationRequest, SDKValidationError>;
//# sourceMappingURL=finalizeinstallationop.d.ts.map