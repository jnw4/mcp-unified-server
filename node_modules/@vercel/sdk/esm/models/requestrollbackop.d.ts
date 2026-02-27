import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RequestRollbackRequest = {
    projectId: string;
    /**
     * The ID of the deployment to rollback *to*
     */
    deploymentId: string;
    /**
     * The reason for the rollback
     */
    description?: string | undefined;
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
export declare const RequestRollbackRequest$inboundSchema: z.ZodType<RequestRollbackRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestRollbackRequest$Outbound = {
    projectId: string;
    deploymentId: string;
    description?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const RequestRollbackRequest$outboundSchema: z.ZodType<RequestRollbackRequest$Outbound, z.ZodTypeDef, RequestRollbackRequest>;
export declare function requestRollbackRequestToJSON(requestRollbackRequest: RequestRollbackRequest): string;
export declare function requestRollbackRequestFromJSON(jsonString: string): SafeParseResult<RequestRollbackRequest, SDKValidationError>;
//# sourceMappingURL=requestrollbackop.d.ts.map