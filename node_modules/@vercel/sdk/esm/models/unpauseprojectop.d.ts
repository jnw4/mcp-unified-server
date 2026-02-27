import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UnpauseProjectRequest = {
    /**
     * The unique project identifier
     */
    projectId: string;
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
export declare const UnpauseProjectRequest$inboundSchema: z.ZodType<UnpauseProjectRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UnpauseProjectRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const UnpauseProjectRequest$outboundSchema: z.ZodType<UnpauseProjectRequest$Outbound, z.ZodTypeDef, UnpauseProjectRequest>;
export declare function unpauseProjectRequestToJSON(unpauseProjectRequest: UnpauseProjectRequest): string;
export declare function unpauseProjectRequestFromJSON(jsonString: string): SafeParseResult<UnpauseProjectRequest, SDKValidationError>;
//# sourceMappingURL=unpauseprojectop.d.ts.map