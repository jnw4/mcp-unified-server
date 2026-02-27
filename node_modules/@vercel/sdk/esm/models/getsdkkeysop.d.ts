import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { FlagsSDKKey, FlagsSDKKey$Outbound } from "./flagssdkkey.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetSDKKeysRequest = {
    /**
     * The project id or name
     */
    projectIdOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type GetSDKKeysResponseBody = {
    data: Array<FlagsSDKKey>;
};
/** @internal */
export declare const GetSDKKeysRequest$inboundSchema: z.ZodType<GetSDKKeysRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSDKKeysRequest$Outbound = {
    projectIdOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetSDKKeysRequest$outboundSchema: z.ZodType<GetSDKKeysRequest$Outbound, z.ZodTypeDef, GetSDKKeysRequest>;
export declare function getSDKKeysRequestToJSON(getSDKKeysRequest: GetSDKKeysRequest): string;
export declare function getSDKKeysRequestFromJSON(jsonString: string): SafeParseResult<GetSDKKeysRequest, SDKValidationError>;
/** @internal */
export declare const GetSDKKeysResponseBody$inboundSchema: z.ZodType<GetSDKKeysResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSDKKeysResponseBody$Outbound = {
    data: Array<FlagsSDKKey$Outbound>;
};
/** @internal */
export declare const GetSDKKeysResponseBody$outboundSchema: z.ZodType<GetSDKKeysResponseBody$Outbound, z.ZodTypeDef, GetSDKKeysResponseBody>;
export declare function getSDKKeysResponseBodyToJSON(getSDKKeysResponseBody: GetSDKKeysResponseBody): string;
export declare function getSDKKeysResponseBodyFromJSON(jsonString: string): SafeParseResult<GetSDKKeysResponseBody, SDKValidationError>;
//# sourceMappingURL=getsdkkeysop.d.ts.map