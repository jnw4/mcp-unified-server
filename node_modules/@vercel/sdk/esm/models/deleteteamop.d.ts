import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * An object describing the reason why the team is being deleted.
 */
export type DeleteTeamReasons = {
    /**
     * Idenitifier slug of the reason why the team is being deleted.
     */
    slug: string;
    /**
     * Description of the reason why the team is being deleted.
     */
    description: string;
};
export type DeleteTeamRequestBody = {
    /**
     * Optional array of objects that describe the reason why the team is being deleted.
     */
    reasons?: Array<DeleteTeamReasons> | undefined;
};
export type DeleteTeamRequest = {
    /**
     * Id of the team to be set as the new default team
     */
    newDefaultTeamId?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId: string;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: DeleteTeamRequestBody;
};
/**
 * The Team was successfully deleted
 */
export type DeleteTeamResponseBody = {
    /**
     * The ID of the deleted Team
     */
    id: string;
    /**
     * Signifies whether the default team update has failed, when newDefaultTeamId is provided in request query.
     */
    newDefaultTeamIdError?: boolean | undefined;
};
/** @internal */
export declare const DeleteTeamReasons$inboundSchema: z.ZodType<DeleteTeamReasons, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteTeamReasons$Outbound = {
    slug: string;
    description: string;
};
/** @internal */
export declare const DeleteTeamReasons$outboundSchema: z.ZodType<DeleteTeamReasons$Outbound, z.ZodTypeDef, DeleteTeamReasons>;
export declare function deleteTeamReasonsToJSON(deleteTeamReasons: DeleteTeamReasons): string;
export declare function deleteTeamReasonsFromJSON(jsonString: string): SafeParseResult<DeleteTeamReasons, SDKValidationError>;
/** @internal */
export declare const DeleteTeamRequestBody$inboundSchema: z.ZodType<DeleteTeamRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteTeamRequestBody$Outbound = {
    reasons?: Array<DeleteTeamReasons$Outbound> | undefined;
};
/** @internal */
export declare const DeleteTeamRequestBody$outboundSchema: z.ZodType<DeleteTeamRequestBody$Outbound, z.ZodTypeDef, DeleteTeamRequestBody>;
export declare function deleteTeamRequestBodyToJSON(deleteTeamRequestBody: DeleteTeamRequestBody): string;
export declare function deleteTeamRequestBodyFromJSON(jsonString: string): SafeParseResult<DeleteTeamRequestBody, SDKValidationError>;
/** @internal */
export declare const DeleteTeamRequest$inboundSchema: z.ZodType<DeleteTeamRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteTeamRequest$Outbound = {
    newDefaultTeamId?: string | undefined;
    teamId: string;
    slug?: string | undefined;
    RequestBody: DeleteTeamRequestBody$Outbound;
};
/** @internal */
export declare const DeleteTeamRequest$outboundSchema: z.ZodType<DeleteTeamRequest$Outbound, z.ZodTypeDef, DeleteTeamRequest>;
export declare function deleteTeamRequestToJSON(deleteTeamRequest: DeleteTeamRequest): string;
export declare function deleteTeamRequestFromJSON(jsonString: string): SafeParseResult<DeleteTeamRequest, SDKValidationError>;
/** @internal */
export declare const DeleteTeamResponseBody$inboundSchema: z.ZodType<DeleteTeamResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteTeamResponseBody$Outbound = {
    id: string;
    newDefaultTeamIdError?: boolean | undefined;
};
/** @internal */
export declare const DeleteTeamResponseBody$outboundSchema: z.ZodType<DeleteTeamResponseBody$Outbound, z.ZodTypeDef, DeleteTeamResponseBody>;
export declare function deleteTeamResponseBodyToJSON(deleteTeamResponseBody: DeleteTeamResponseBody): string;
export declare function deleteTeamResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteTeamResponseBody, SDKValidationError>;
//# sourceMappingURL=deleteteamop.d.ts.map