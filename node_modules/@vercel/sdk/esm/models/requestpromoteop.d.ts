import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RequestPromoteRequest = {
    projectId: string;
    deploymentId: string;
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
export declare const RequestPromoteRequest$inboundSchema: z.ZodType<RequestPromoteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestPromoteRequest$Outbound = {
    projectId: string;
    deploymentId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const RequestPromoteRequest$outboundSchema: z.ZodType<RequestPromoteRequest$Outbound, z.ZodTypeDef, RequestPromoteRequest>;
export declare function requestPromoteRequestToJSON(requestPromoteRequest: RequestPromoteRequest): string;
export declare function requestPromoteRequestFromJSON(jsonString: string): SafeParseResult<RequestPromoteRequest, SDKValidationError>;
//# sourceMappingURL=requestpromoteop.d.ts.map