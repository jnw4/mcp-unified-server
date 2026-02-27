import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type UpdateAttackChallengeModeRequestBody2 = {
    projectId: string;
    attackModeEnabled: boolean;
};
export type UpdateAttackChallengeModeRequestBody1 = {
    projectId: string;
    attackModeEnabled: boolean;
    attackModeActiveUntil: number;
};
export type UpdateAttackChallengeModeRequestBody = UpdateAttackChallengeModeRequestBody1 | UpdateAttackChallengeModeRequestBody2;
export type UpdateAttackChallengeModeRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: UpdateAttackChallengeModeRequestBody1 | UpdateAttackChallengeModeRequestBody2;
};
export type UpdateAttackChallengeModeResponseBody = {
    attackModeEnabled: boolean;
    attackModeUpdatedAt: number;
};
/** @internal */
export declare const UpdateAttackChallengeModeRequestBody2$inboundSchema: z.ZodType<UpdateAttackChallengeModeRequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAttackChallengeModeRequestBody2$Outbound = {
    projectId: string;
    attackModeEnabled: boolean;
};
/** @internal */
export declare const UpdateAttackChallengeModeRequestBody2$outboundSchema: z.ZodType<UpdateAttackChallengeModeRequestBody2$Outbound, z.ZodTypeDef, UpdateAttackChallengeModeRequestBody2>;
export declare function updateAttackChallengeModeRequestBody2ToJSON(updateAttackChallengeModeRequestBody2: UpdateAttackChallengeModeRequestBody2): string;
export declare function updateAttackChallengeModeRequestBody2FromJSON(jsonString: string): SafeParseResult<UpdateAttackChallengeModeRequestBody2, SDKValidationError>;
/** @internal */
export declare const UpdateAttackChallengeModeRequestBody1$inboundSchema: z.ZodType<UpdateAttackChallengeModeRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAttackChallengeModeRequestBody1$Outbound = {
    projectId: string;
    attackModeEnabled: boolean;
    attackModeActiveUntil: number;
};
/** @internal */
export declare const UpdateAttackChallengeModeRequestBody1$outboundSchema: z.ZodType<UpdateAttackChallengeModeRequestBody1$Outbound, z.ZodTypeDef, UpdateAttackChallengeModeRequestBody1>;
export declare function updateAttackChallengeModeRequestBody1ToJSON(updateAttackChallengeModeRequestBody1: UpdateAttackChallengeModeRequestBody1): string;
export declare function updateAttackChallengeModeRequestBody1FromJSON(jsonString: string): SafeParseResult<UpdateAttackChallengeModeRequestBody1, SDKValidationError>;
/** @internal */
export declare const UpdateAttackChallengeModeRequestBody$inboundSchema: z.ZodType<UpdateAttackChallengeModeRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAttackChallengeModeRequestBody$Outbound = UpdateAttackChallengeModeRequestBody1$Outbound | UpdateAttackChallengeModeRequestBody2$Outbound;
/** @internal */
export declare const UpdateAttackChallengeModeRequestBody$outboundSchema: z.ZodType<UpdateAttackChallengeModeRequestBody$Outbound, z.ZodTypeDef, UpdateAttackChallengeModeRequestBody>;
export declare function updateAttackChallengeModeRequestBodyToJSON(updateAttackChallengeModeRequestBody: UpdateAttackChallengeModeRequestBody): string;
export declare function updateAttackChallengeModeRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateAttackChallengeModeRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateAttackChallengeModeRequest$inboundSchema: z.ZodType<UpdateAttackChallengeModeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAttackChallengeModeRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: UpdateAttackChallengeModeRequestBody1$Outbound | UpdateAttackChallengeModeRequestBody2$Outbound;
};
/** @internal */
export declare const UpdateAttackChallengeModeRequest$outboundSchema: z.ZodType<UpdateAttackChallengeModeRequest$Outbound, z.ZodTypeDef, UpdateAttackChallengeModeRequest>;
export declare function updateAttackChallengeModeRequestToJSON(updateAttackChallengeModeRequest: UpdateAttackChallengeModeRequest): string;
export declare function updateAttackChallengeModeRequestFromJSON(jsonString: string): SafeParseResult<UpdateAttackChallengeModeRequest, SDKValidationError>;
/** @internal */
export declare const UpdateAttackChallengeModeResponseBody$inboundSchema: z.ZodType<UpdateAttackChallengeModeResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAttackChallengeModeResponseBody$Outbound = {
    attackModeEnabled: boolean;
    attackModeUpdatedAt: number;
};
/** @internal */
export declare const UpdateAttackChallengeModeResponseBody$outboundSchema: z.ZodType<UpdateAttackChallengeModeResponseBody$Outbound, z.ZodTypeDef, UpdateAttackChallengeModeResponseBody>;
export declare function updateAttackChallengeModeResponseBodyToJSON(updateAttackChallengeModeResponseBody: UpdateAttackChallengeModeResponseBody): string;
export declare function updateAttackChallengeModeResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateAttackChallengeModeResponseBody, SDKValidationError>;
//# sourceMappingURL=updateattackchallengemodeop.d.ts.map