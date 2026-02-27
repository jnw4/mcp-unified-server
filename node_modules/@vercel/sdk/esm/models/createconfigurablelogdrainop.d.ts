import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * The delivery log format
 */
export declare const DeliveryFormat: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
/**
 * The delivery log format
 */
export type DeliveryFormat = ClosedEnum<typeof DeliveryFormat>;
export declare const Sources: {
    readonly Static: "static";
    readonly Lambda: "lambda";
    readonly Build: "build";
    readonly Edge: "edge";
    readonly External: "external";
    readonly Firewall: "firewall";
};
export type Sources = ClosedEnum<typeof Sources>;
export declare const CreateConfigurableLogDrainEnvironments: {
    readonly Preview: "preview";
    readonly Production: "production";
};
export type CreateConfigurableLogDrainEnvironments = ClosedEnum<typeof CreateConfigurableLogDrainEnvironments>;
export type CreateConfigurableLogDrainRequestBody = {
    /**
     * The delivery log format
     */
    deliveryFormat: DeliveryFormat;
    /**
     * The log drain url
     */
    url: string;
    /**
     * Headers to be sent together with the request
     */
    headers?: {
        [k: string]: string;
    } | undefined;
    projectIds?: Array<string> | undefined;
    sources: Array<Sources>;
    environments?: Array<CreateConfigurableLogDrainEnvironments> | undefined;
    /**
     * Custom secret of log drain
     */
    secret?: string | undefined;
    /**
     * The sampling rate for this log drain. It should be a percentage rate between 0 and 100. With max 2 decimal points
     */
    samplingRate?: number | undefined;
    /**
     * The custom name of this log drain.
     */
    name?: string | undefined;
};
export type CreateConfigurableLogDrainRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: CreateConfigurableLogDrainRequestBody;
};
export type CreateConfigurableLogDrainResponseBody = {};
/** @internal */
export declare const DeliveryFormat$inboundSchema: z.ZodNativeEnum<typeof DeliveryFormat>;
/** @internal */
export declare const DeliveryFormat$outboundSchema: z.ZodNativeEnum<typeof DeliveryFormat>;
/** @internal */
export declare const Sources$inboundSchema: z.ZodNativeEnum<typeof Sources>;
/** @internal */
export declare const Sources$outboundSchema: z.ZodNativeEnum<typeof Sources>;
/** @internal */
export declare const CreateConfigurableLogDrainEnvironments$inboundSchema: z.ZodNativeEnum<typeof CreateConfigurableLogDrainEnvironments>;
/** @internal */
export declare const CreateConfigurableLogDrainEnvironments$outboundSchema: z.ZodNativeEnum<typeof CreateConfigurableLogDrainEnvironments>;
/** @internal */
export declare const CreateConfigurableLogDrainRequestBody$inboundSchema: z.ZodType<CreateConfigurableLogDrainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateConfigurableLogDrainRequestBody$Outbound = {
    deliveryFormat: string;
    url: string;
    headers?: {
        [k: string]: string;
    } | undefined;
    projectIds?: Array<string> | undefined;
    sources: Array<string>;
    environments?: Array<string> | undefined;
    secret?: string | undefined;
    samplingRate?: number | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const CreateConfigurableLogDrainRequestBody$outboundSchema: z.ZodType<CreateConfigurableLogDrainRequestBody$Outbound, z.ZodTypeDef, CreateConfigurableLogDrainRequestBody>;
export declare function createConfigurableLogDrainRequestBodyToJSON(createConfigurableLogDrainRequestBody: CreateConfigurableLogDrainRequestBody): string;
export declare function createConfigurableLogDrainRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateConfigurableLogDrainRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateConfigurableLogDrainRequest$inboundSchema: z.ZodType<CreateConfigurableLogDrainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateConfigurableLogDrainRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: CreateConfigurableLogDrainRequestBody$Outbound;
};
/** @internal */
export declare const CreateConfigurableLogDrainRequest$outboundSchema: z.ZodType<CreateConfigurableLogDrainRequest$Outbound, z.ZodTypeDef, CreateConfigurableLogDrainRequest>;
export declare function createConfigurableLogDrainRequestToJSON(createConfigurableLogDrainRequest: CreateConfigurableLogDrainRequest): string;
export declare function createConfigurableLogDrainRequestFromJSON(jsonString: string): SafeParseResult<CreateConfigurableLogDrainRequest, SDKValidationError>;
/** @internal */
export declare const CreateConfigurableLogDrainResponseBody$inboundSchema: z.ZodType<CreateConfigurableLogDrainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateConfigurableLogDrainResponseBody$Outbound = {};
/** @internal */
export declare const CreateConfigurableLogDrainResponseBody$outboundSchema: z.ZodType<CreateConfigurableLogDrainResponseBody$Outbound, z.ZodTypeDef, CreateConfigurableLogDrainResponseBody>;
export declare function createConfigurableLogDrainResponseBodyToJSON(createConfigurableLogDrainResponseBody: CreateConfigurableLogDrainResponseBody): string;
export declare function createConfigurableLogDrainResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateConfigurableLogDrainResponseBody, SDKValidationError>;
//# sourceMappingURL=createconfigurablelogdrainop.d.ts.map