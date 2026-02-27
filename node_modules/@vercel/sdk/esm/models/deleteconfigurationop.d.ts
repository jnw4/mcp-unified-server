import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteConfigurationRequest = {
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteConfigurationRequest$inboundSchema: z.ZodType<DeleteConfigurationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteConfigurationRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteConfigurationRequest$outboundSchema: z.ZodType<DeleteConfigurationRequest$Outbound, z.ZodTypeDef, DeleteConfigurationRequest>;
export declare function deleteConfigurationRequestToJSON(deleteConfigurationRequest: DeleteConfigurationRequest): string;
export declare function deleteConfigurationRequestFromJSON(jsonString: string): SafeParseResult<DeleteConfigurationRequest, SDKValidationError>;
//# sourceMappingURL=deleteconfigurationop.d.ts.map