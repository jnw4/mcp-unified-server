import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UnlinkSharedEnvVariableRequest = {
    /**
     * The unique ID for the Shared Environment Variable to unlink from the project.
     */
    id: string;
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
export type UnlinkSharedEnvVariableResponseBody = {
    id: string;
};
/** @internal */
export declare const UnlinkSharedEnvVariableRequest$inboundSchema: z.ZodType<UnlinkSharedEnvVariableRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UnlinkSharedEnvVariableRequest$Outbound = {
    id: string;
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const UnlinkSharedEnvVariableRequest$outboundSchema: z.ZodType<UnlinkSharedEnvVariableRequest$Outbound, z.ZodTypeDef, UnlinkSharedEnvVariableRequest>;
export declare function unlinkSharedEnvVariableRequestToJSON(unlinkSharedEnvVariableRequest: UnlinkSharedEnvVariableRequest): string;
export declare function unlinkSharedEnvVariableRequestFromJSON(jsonString: string): SafeParseResult<UnlinkSharedEnvVariableRequest, SDKValidationError>;
/** @internal */
export declare const UnlinkSharedEnvVariableResponseBody$inboundSchema: z.ZodType<UnlinkSharedEnvVariableResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UnlinkSharedEnvVariableResponseBody$Outbound = {
    id: string;
};
/** @internal */
export declare const UnlinkSharedEnvVariableResponseBody$outboundSchema: z.ZodType<UnlinkSharedEnvVariableResponseBody$Outbound, z.ZodTypeDef, UnlinkSharedEnvVariableResponseBody>;
export declare function unlinkSharedEnvVariableResponseBodyToJSON(unlinkSharedEnvVariableResponseBody: UnlinkSharedEnvVariableResponseBody): string;
export declare function unlinkSharedEnvVariableResponseBodyFromJSON(jsonString: string): SafeParseResult<UnlinkSharedEnvVariableResponseBody, SDKValidationError>;
//# sourceMappingURL=unlinksharedenvvariableop.d.ts.map