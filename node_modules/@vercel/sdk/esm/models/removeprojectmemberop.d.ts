import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type RemoveProjectMemberRequest = {
    /**
     * The ID or name of the Project.
     */
    idOrName: string;
    /**
     * The user ID of the member.
     */
    uid: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type RemoveProjectMemberResponseBody = {
    id: string;
};
/** @internal */
export declare const RemoveProjectMemberRequest$inboundSchema: z.ZodType<RemoveProjectMemberRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectMemberRequest$Outbound = {
    idOrName: string;
    uid: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const RemoveProjectMemberRequest$outboundSchema: z.ZodType<RemoveProjectMemberRequest$Outbound, z.ZodTypeDef, RemoveProjectMemberRequest>;
export declare function removeProjectMemberRequestToJSON(removeProjectMemberRequest: RemoveProjectMemberRequest): string;
export declare function removeProjectMemberRequestFromJSON(jsonString: string): SafeParseResult<RemoveProjectMemberRequest, SDKValidationError>;
/** @internal */
export declare const RemoveProjectMemberResponseBody$inboundSchema: z.ZodType<RemoveProjectMemberResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveProjectMemberResponseBody$Outbound = {
    id: string;
};
/** @internal */
export declare const RemoveProjectMemberResponseBody$outboundSchema: z.ZodType<RemoveProjectMemberResponseBody$Outbound, z.ZodTypeDef, RemoveProjectMemberResponseBody>;
export declare function removeProjectMemberResponseBodyToJSON(removeProjectMemberResponseBody: RemoveProjectMemberResponseBody): string;
export declare function removeProjectMemberResponseBodyFromJSON(jsonString: string): SafeParseResult<RemoveProjectMemberResponseBody, SDKValidationError>;
//# sourceMappingURL=removeprojectmemberop.d.ts.map