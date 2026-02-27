import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RerequestCheckRequest = {
    /**
     * The deployment to rerun the check for.
     */
    deploymentId: string;
    /**
     * The check to rerun
     */
    checkId: string;
    /**
     * Mark the check as running
     */
    autoUpdate?: boolean | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type RerequestCheckResponseBody = {};
/** @internal */
export declare const RerequestCheckRequest$inboundSchema: z.ZodType<RerequestCheckRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RerequestCheckRequest$Outbound = {
    deploymentId: string;
    checkId: string;
    autoUpdate?: boolean | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const RerequestCheckRequest$outboundSchema: z.ZodType<RerequestCheckRequest$Outbound, z.ZodTypeDef, RerequestCheckRequest>;
export declare function rerequestCheckRequestToJSON(rerequestCheckRequest: RerequestCheckRequest): string;
export declare function rerequestCheckRequestFromJSON(jsonString: string): SafeParseResult<RerequestCheckRequest, SDKValidationError>;
/** @internal */
export declare const RerequestCheckResponseBody$inboundSchema: z.ZodType<RerequestCheckResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RerequestCheckResponseBody$Outbound = {};
/** @internal */
export declare const RerequestCheckResponseBody$outboundSchema: z.ZodType<RerequestCheckResponseBody$Outbound, z.ZodTypeDef, RerequestCheckResponseBody>;
export declare function rerequestCheckResponseBodyToJSON(rerequestCheckResponseBody: RerequestCheckResponseBody): string;
export declare function rerequestCheckResponseBodyFromJSON(jsonString: string): SafeParseResult<RerequestCheckResponseBody, SDKValidationError>;
//# sourceMappingURL=rerequestcheckop.d.ts.map