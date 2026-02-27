import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetCertByIdRequest = {
    /**
     * The cert id
     */
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type GetCertByIdResponseBody = {
    id: string;
    createdAt: number;
    expiresAt: number;
    autoRenew: boolean;
    cns: Array<string>;
};
/** @internal */
export declare const GetCertByIdRequest$inboundSchema: z.ZodType<GetCertByIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCertByIdRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetCertByIdRequest$outboundSchema: z.ZodType<GetCertByIdRequest$Outbound, z.ZodTypeDef, GetCertByIdRequest>;
export declare function getCertByIdRequestToJSON(getCertByIdRequest: GetCertByIdRequest): string;
export declare function getCertByIdRequestFromJSON(jsonString: string): SafeParseResult<GetCertByIdRequest, SDKValidationError>;
/** @internal */
export declare const GetCertByIdResponseBody$inboundSchema: z.ZodType<GetCertByIdResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCertByIdResponseBody$Outbound = {
    id: string;
    createdAt: number;
    expiresAt: number;
    autoRenew: boolean;
    cns: Array<string>;
};
/** @internal */
export declare const GetCertByIdResponseBody$outboundSchema: z.ZodType<GetCertByIdResponseBody$Outbound, z.ZodTypeDef, GetCertByIdResponseBody>;
export declare function getCertByIdResponseBodyToJSON(getCertByIdResponseBody: GetCertByIdResponseBody): string;
export declare function getCertByIdResponseBodyFromJSON(jsonString: string): SafeParseResult<GetCertByIdResponseBody, SDKValidationError>;
//# sourceMappingURL=getcertbyidop.d.ts.map