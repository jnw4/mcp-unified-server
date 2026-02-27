import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetDeploymentFileContentsRequest = {
    /**
     * The unique deployment identifier
     */
    id: string;
    /**
     * The unique file identifier
     */
    fileId: string;
    /**
     * Path to the file to fetch (only for Git deployments)
     */
    path?: string | undefined;
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
export declare const GetDeploymentFileContentsRequest$inboundSchema: z.ZodType<GetDeploymentFileContentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDeploymentFileContentsRequest$Outbound = {
    id: string;
    fileId: string;
    path?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetDeploymentFileContentsRequest$outboundSchema: z.ZodType<GetDeploymentFileContentsRequest$Outbound, z.ZodTypeDef, GetDeploymentFileContentsRequest>;
export declare function getDeploymentFileContentsRequestToJSON(getDeploymentFileContentsRequest: GetDeploymentFileContentsRequest): string;
export declare function getDeploymentFileContentsRequestFromJSON(jsonString: string): SafeParseResult<GetDeploymentFileContentsRequest, SDKValidationError>;
//# sourceMappingURL=getdeploymentfilecontentsop.d.ts.map