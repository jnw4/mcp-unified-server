import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type PauseProjectRequest = {
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
export declare const PauseProjectRequest$inboundSchema: z.ZodType<PauseProjectRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PauseProjectRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const PauseProjectRequest$outboundSchema: z.ZodType<PauseProjectRequest$Outbound, z.ZodTypeDef, PauseProjectRequest>;
export declare function pauseProjectRequestToJSON(pauseProjectRequest: PauseProjectRequest): string;
export declare function pauseProjectRequestFromJSON(jsonString: string): SafeParseResult<PauseProjectRequest, SDKValidationError>;
//# sourceMappingURL=pauseprojectop.d.ts.map