import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetSupportedTldsRequest = {
    teamId?: string | undefined;
};
/** @internal */
export declare const GetSupportedTldsRequest$inboundSchema: z.ZodType<GetSupportedTldsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSupportedTldsRequest$Outbound = {
    teamId?: string | undefined;
};
/** @internal */
export declare const GetSupportedTldsRequest$outboundSchema: z.ZodType<GetSupportedTldsRequest$Outbound, z.ZodTypeDef, GetSupportedTldsRequest>;
export declare function getSupportedTldsRequestToJSON(getSupportedTldsRequest: GetSupportedTldsRequest): string;
export declare function getSupportedTldsRequestFromJSON(jsonString: string): SafeParseResult<GetSupportedTldsRequest, SDKValidationError>;
//# sourceMappingURL=getsupportedtldsop.d.ts.map