import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const UpdateVersionAction: {
    readonly Promote: "promote";
    readonly Restore: "restore";
    readonly Discard: "discard";
};
export type UpdateVersionAction = ClosedEnum<typeof UpdateVersionAction>;
export type UpdateVersionRequestBody = {
    id: string;
    action: UpdateVersionAction;
    name?: string | undefined;
};
export type UpdateVersionRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UpdateVersionRequestBody | undefined;
};
export type UpdateVersionVersion = {
    /**
     * The unique identifier for the version.
     */
    id: string;
    /**
     * The key of the version. The key may be duplicated across versions if the contents are the same as a different version.
     */
    key: string;
    lastModified: number;
    createdBy: string;
    /**
     * Optional name for the version. If not provided, defaults to an ISO timestamp string.
     */
    name?: string | undefined;
    /**
     * Whether this version has not been promoted to production yet and is not serving end users.
     */
    isStaging?: boolean | undefined;
    /**
     * Whether this version is currently live in production.
     */
    isLive?: boolean | undefined;
    /**
     * The number of redirects in this version.
     */
    redirectCount?: number | undefined;
    /**
     * The staging link for previewing redirects in this version.
     */
    alias?: string | undefined;
};
export type UpdateVersionResponseBody = {
    version: UpdateVersionVersion;
};
/** @internal */
export declare const UpdateVersionAction$inboundSchema: z.ZodNativeEnum<typeof UpdateVersionAction>;
/** @internal */
export declare const UpdateVersionAction$outboundSchema: z.ZodNativeEnum<typeof UpdateVersionAction>;
/** @internal */
export declare const UpdateVersionRequestBody$inboundSchema: z.ZodType<UpdateVersionRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateVersionRequestBody$Outbound = {
    id: string;
    action: string;
    name?: string | undefined;
};
/** @internal */
export declare const UpdateVersionRequestBody$outboundSchema: z.ZodType<UpdateVersionRequestBody$Outbound, z.ZodTypeDef, UpdateVersionRequestBody>;
export declare function updateVersionRequestBodyToJSON(updateVersionRequestBody: UpdateVersionRequestBody): string;
export declare function updateVersionRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateVersionRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateVersionRequest$inboundSchema: z.ZodType<UpdateVersionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateVersionRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateVersionRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateVersionRequest$outboundSchema: z.ZodType<UpdateVersionRequest$Outbound, z.ZodTypeDef, UpdateVersionRequest>;
export declare function updateVersionRequestToJSON(updateVersionRequest: UpdateVersionRequest): string;
export declare function updateVersionRequestFromJSON(jsonString: string): SafeParseResult<UpdateVersionRequest, SDKValidationError>;
/** @internal */
export declare const UpdateVersionVersion$inboundSchema: z.ZodType<UpdateVersionVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateVersionVersion$Outbound = {
    id: string;
    key: string;
    lastModified: number;
    createdBy: string;
    name?: string | undefined;
    isStaging?: boolean | undefined;
    isLive?: boolean | undefined;
    redirectCount?: number | undefined;
    alias?: string | undefined;
};
/** @internal */
export declare const UpdateVersionVersion$outboundSchema: z.ZodType<UpdateVersionVersion$Outbound, z.ZodTypeDef, UpdateVersionVersion>;
export declare function updateVersionVersionToJSON(updateVersionVersion: UpdateVersionVersion): string;
export declare function updateVersionVersionFromJSON(jsonString: string): SafeParseResult<UpdateVersionVersion, SDKValidationError>;
/** @internal */
export declare const UpdateVersionResponseBody$inboundSchema: z.ZodType<UpdateVersionResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateVersionResponseBody$Outbound = {
    version: UpdateVersionVersion$Outbound;
};
/** @internal */
export declare const UpdateVersionResponseBody$outboundSchema: z.ZodType<UpdateVersionResponseBody$Outbound, z.ZodTypeDef, UpdateVersionResponseBody>;
export declare function updateVersionResponseBodyToJSON(updateVersionResponseBody: UpdateVersionResponseBody): string;
export declare function updateVersionResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateVersionResponseBody, SDKValidationError>;
//# sourceMappingURL=updateversionop.d.ts.map