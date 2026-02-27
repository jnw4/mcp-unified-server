import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteSharedEnvVariableRequestBody = {
    /**
     * IDs of the Shared Environment Variables to delete
     */
    ids: Array<string>;
};
export type DeleteSharedEnvVariableRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: DeleteSharedEnvVariableRequestBody | undefined;
};
export declare const DeleteSharedEnvVariableValue2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type DeleteSharedEnvVariableValue2 = ClosedEnum<typeof DeleteSharedEnvVariableValue2>;
export type DeleteSharedEnvVariableValue = string | Array<DeleteSharedEnvVariableValue2>;
export declare const DeleteSharedEnvVariableTarget2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type DeleteSharedEnvVariableTarget2 = ClosedEnum<typeof DeleteSharedEnvVariableTarget2>;
export declare const DeleteSharedEnvVariableTarget1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type DeleteSharedEnvVariableTarget1 = ClosedEnum<typeof DeleteSharedEnvVariableTarget1>;
export type DeleteSharedEnvVariableTarget = Array<DeleteSharedEnvVariableTarget1> | DeleteSharedEnvVariableTarget2;
export type DeleteSharedEnvVariableError = {
    code: string;
    message: string;
    key?: string | undefined;
    envVarId?: string | undefined;
    envVarKey?: string | undefined;
    action?: string | undefined;
    link?: string | undefined;
    value?: string | Array<DeleteSharedEnvVariableValue2> | undefined;
    gitBranch?: string | undefined;
    target?: Array<DeleteSharedEnvVariableTarget1> | DeleteSharedEnvVariableTarget2 | undefined;
    project?: string | undefined;
};
export type DeleteSharedEnvVariableFailed = {
    error: DeleteSharedEnvVariableError;
};
export type DeleteSharedEnvVariableResponseBody = {
    deleted: Array<string>;
    failed: Array<DeleteSharedEnvVariableFailed>;
};
/** @internal */
export declare const DeleteSharedEnvVariableRequestBody$inboundSchema: z.ZodType<DeleteSharedEnvVariableRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSharedEnvVariableRequestBody$Outbound = {
    ids: Array<string>;
};
/** @internal */
export declare const DeleteSharedEnvVariableRequestBody$outboundSchema: z.ZodType<DeleteSharedEnvVariableRequestBody$Outbound, z.ZodTypeDef, DeleteSharedEnvVariableRequestBody>;
export declare function deleteSharedEnvVariableRequestBodyToJSON(deleteSharedEnvVariableRequestBody: DeleteSharedEnvVariableRequestBody): string;
export declare function deleteSharedEnvVariableRequestBodyFromJSON(jsonString: string): SafeParseResult<DeleteSharedEnvVariableRequestBody, SDKValidationError>;
/** @internal */
export declare const DeleteSharedEnvVariableRequest$inboundSchema: z.ZodType<DeleteSharedEnvVariableRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSharedEnvVariableRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: DeleteSharedEnvVariableRequestBody$Outbound | undefined;
};
/** @internal */
export declare const DeleteSharedEnvVariableRequest$outboundSchema: z.ZodType<DeleteSharedEnvVariableRequest$Outbound, z.ZodTypeDef, DeleteSharedEnvVariableRequest>;
export declare function deleteSharedEnvVariableRequestToJSON(deleteSharedEnvVariableRequest: DeleteSharedEnvVariableRequest): string;
export declare function deleteSharedEnvVariableRequestFromJSON(jsonString: string): SafeParseResult<DeleteSharedEnvVariableRequest, SDKValidationError>;
/** @internal */
export declare const DeleteSharedEnvVariableValue2$inboundSchema: z.ZodNativeEnum<typeof DeleteSharedEnvVariableValue2>;
/** @internal */
export declare const DeleteSharedEnvVariableValue2$outboundSchema: z.ZodNativeEnum<typeof DeleteSharedEnvVariableValue2>;
/** @internal */
export declare const DeleteSharedEnvVariableValue$inboundSchema: z.ZodType<DeleteSharedEnvVariableValue, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSharedEnvVariableValue$Outbound = string | Array<string>;
/** @internal */
export declare const DeleteSharedEnvVariableValue$outboundSchema: z.ZodType<DeleteSharedEnvVariableValue$Outbound, z.ZodTypeDef, DeleteSharedEnvVariableValue>;
export declare function deleteSharedEnvVariableValueToJSON(deleteSharedEnvVariableValue: DeleteSharedEnvVariableValue): string;
export declare function deleteSharedEnvVariableValueFromJSON(jsonString: string): SafeParseResult<DeleteSharedEnvVariableValue, SDKValidationError>;
/** @internal */
export declare const DeleteSharedEnvVariableTarget2$inboundSchema: z.ZodNativeEnum<typeof DeleteSharedEnvVariableTarget2>;
/** @internal */
export declare const DeleteSharedEnvVariableTarget2$outboundSchema: z.ZodNativeEnum<typeof DeleteSharedEnvVariableTarget2>;
/** @internal */
export declare const DeleteSharedEnvVariableTarget1$inboundSchema: z.ZodNativeEnum<typeof DeleteSharedEnvVariableTarget1>;
/** @internal */
export declare const DeleteSharedEnvVariableTarget1$outboundSchema: z.ZodNativeEnum<typeof DeleteSharedEnvVariableTarget1>;
/** @internal */
export declare const DeleteSharedEnvVariableTarget$inboundSchema: z.ZodType<DeleteSharedEnvVariableTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSharedEnvVariableTarget$Outbound = Array<string> | string;
/** @internal */
export declare const DeleteSharedEnvVariableTarget$outboundSchema: z.ZodType<DeleteSharedEnvVariableTarget$Outbound, z.ZodTypeDef, DeleteSharedEnvVariableTarget>;
export declare function deleteSharedEnvVariableTargetToJSON(deleteSharedEnvVariableTarget: DeleteSharedEnvVariableTarget): string;
export declare function deleteSharedEnvVariableTargetFromJSON(jsonString: string): SafeParseResult<DeleteSharedEnvVariableTarget, SDKValidationError>;
/** @internal */
export declare const DeleteSharedEnvVariableError$inboundSchema: z.ZodType<DeleteSharedEnvVariableError, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSharedEnvVariableError$Outbound = {
    code: string;
    message: string;
    key?: string | undefined;
    envVarId?: string | undefined;
    envVarKey?: string | undefined;
    action?: string | undefined;
    link?: string | undefined;
    value?: string | Array<string> | undefined;
    gitBranch?: string | undefined;
    target?: Array<string> | string | undefined;
    project?: string | undefined;
};
/** @internal */
export declare const DeleteSharedEnvVariableError$outboundSchema: z.ZodType<DeleteSharedEnvVariableError$Outbound, z.ZodTypeDef, DeleteSharedEnvVariableError>;
export declare function deleteSharedEnvVariableErrorToJSON(deleteSharedEnvVariableError: DeleteSharedEnvVariableError): string;
export declare function deleteSharedEnvVariableErrorFromJSON(jsonString: string): SafeParseResult<DeleteSharedEnvVariableError, SDKValidationError>;
/** @internal */
export declare const DeleteSharedEnvVariableFailed$inboundSchema: z.ZodType<DeleteSharedEnvVariableFailed, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSharedEnvVariableFailed$Outbound = {
    error: DeleteSharedEnvVariableError$Outbound;
};
/** @internal */
export declare const DeleteSharedEnvVariableFailed$outboundSchema: z.ZodType<DeleteSharedEnvVariableFailed$Outbound, z.ZodTypeDef, DeleteSharedEnvVariableFailed>;
export declare function deleteSharedEnvVariableFailedToJSON(deleteSharedEnvVariableFailed: DeleteSharedEnvVariableFailed): string;
export declare function deleteSharedEnvVariableFailedFromJSON(jsonString: string): SafeParseResult<DeleteSharedEnvVariableFailed, SDKValidationError>;
/** @internal */
export declare const DeleteSharedEnvVariableResponseBody$inboundSchema: z.ZodType<DeleteSharedEnvVariableResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSharedEnvVariableResponseBody$Outbound = {
    deleted: Array<string>;
    failed: Array<DeleteSharedEnvVariableFailed$Outbound>;
};
/** @internal */
export declare const DeleteSharedEnvVariableResponseBody$outboundSchema: z.ZodType<DeleteSharedEnvVariableResponseBody$Outbound, z.ZodTypeDef, DeleteSharedEnvVariableResponseBody>;
export declare function deleteSharedEnvVariableResponseBodyToJSON(deleteSharedEnvVariableResponseBody: DeleteSharedEnvVariableResponseBody): string;
export declare function deleteSharedEnvVariableResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteSharedEnvVariableResponseBody, SDKValidationError>;
//# sourceMappingURL=deletesharedenvvariableop.d.ts.map