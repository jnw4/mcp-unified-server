import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const FlagsSDKKeyType: {
    readonly Server: "server";
    readonly Mobile: "mobile";
    readonly Client: "client";
};
export type FlagsSDKKeyType = ClosedEnum<typeof FlagsSDKKeyType>;
export type FlagsSDKKey = {
    hashKey: string;
    projectId: string;
    type: FlagsSDKKeyType;
    environment: string;
    createdBy: string;
    createdAt: number;
    updatedAt: number;
    label?: string | undefined;
    deletedAt?: number | undefined;
    /**
     * Cleartext value of the SDK key
     */
    keyValue?: string | undefined;
    /**
     * Cleartext value of the Edge Config token
     */
    tokenValue?: string | undefined;
    /**
     * Connection string for the SDK
     */
    connectionString?: string | undefined;
};
/** @internal */
export declare const FlagsSDKKeyType$inboundSchema: z.ZodNativeEnum<typeof FlagsSDKKeyType>;
/** @internal */
export declare const FlagsSDKKeyType$outboundSchema: z.ZodNativeEnum<typeof FlagsSDKKeyType>;
/** @internal */
export declare const FlagsSDKKey$inboundSchema: z.ZodType<FlagsSDKKey, z.ZodTypeDef, unknown>;
/** @internal */
export type FlagsSDKKey$Outbound = {
    hashKey: string;
    projectId: string;
    type: string;
    environment: string;
    createdBy: string;
    createdAt: number;
    updatedAt: number;
    label?: string | undefined;
    deletedAt?: number | undefined;
    keyValue?: string | undefined;
    tokenValue?: string | undefined;
    connectionString?: string | undefined;
};
/** @internal */
export declare const FlagsSDKKey$outboundSchema: z.ZodType<FlagsSDKKey$Outbound, z.ZodTypeDef, FlagsSDKKey>;
export declare function flagsSDKKeyToJSON(flagsSDKKey: FlagsSDKKey): string;
export declare function flagsSDKKeyFromJSON(jsonString: string): SafeParseResult<FlagsSDKKey, SDKValidationError>;
//# sourceMappingURL=flagssdkkey.d.ts.map