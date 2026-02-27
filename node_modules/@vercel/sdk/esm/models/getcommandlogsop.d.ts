import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetCommandLogsRequest = {
    /**
     * The unique identifier of the sandbox containing the command.
     */
    sandboxId: string;
    /**
     * The unique identifier of the command to stream logs for.
     */
    cmdId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export type GetCommandLogsResponseBody2 = {
    data: string;
    stream: string;
};
export declare const ResponseBodyCode: {
    readonly SandboxStreamClosed: "sandbox_stream_closed";
};
export type ResponseBodyCode = ClosedEnum<typeof ResponseBodyCode>;
export declare const Message: {
    readonly SandboxStreamWasClosedAndIsNotAcceptingCommands: "Sandbox stream was closed and is not accepting commands.";
};
export type Message = ClosedEnum<typeof Message>;
export type GetCommandLogsResponseBodyData = {
    code: ResponseBodyCode;
    message: Message;
};
export type GetCommandLogsResponseBody1 = {
    stream: string;
    data: GetCommandLogsResponseBodyData;
};
export type GetCommandLogsResponseBody = GetCommandLogsResponseBody1 | GetCommandLogsResponseBody2;
/** @internal */
export declare const GetCommandLogsRequest$inboundSchema: z.ZodType<GetCommandLogsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCommandLogsRequest$Outbound = {
    sandboxId: string;
    cmdId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetCommandLogsRequest$outboundSchema: z.ZodType<GetCommandLogsRequest$Outbound, z.ZodTypeDef, GetCommandLogsRequest>;
export declare function getCommandLogsRequestToJSON(getCommandLogsRequest: GetCommandLogsRequest): string;
export declare function getCommandLogsRequestFromJSON(jsonString: string): SafeParseResult<GetCommandLogsRequest, SDKValidationError>;
/** @internal */
export declare const GetCommandLogsResponseBody2$inboundSchema: z.ZodType<GetCommandLogsResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCommandLogsResponseBody2$Outbound = {
    data: string;
    stream: string;
};
/** @internal */
export declare const GetCommandLogsResponseBody2$outboundSchema: z.ZodType<GetCommandLogsResponseBody2$Outbound, z.ZodTypeDef, GetCommandLogsResponseBody2>;
export declare function getCommandLogsResponseBody2ToJSON(getCommandLogsResponseBody2: GetCommandLogsResponseBody2): string;
export declare function getCommandLogsResponseBody2FromJSON(jsonString: string): SafeParseResult<GetCommandLogsResponseBody2, SDKValidationError>;
/** @internal */
export declare const ResponseBodyCode$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyCode>;
/** @internal */
export declare const ResponseBodyCode$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyCode>;
/** @internal */
export declare const Message$inboundSchema: z.ZodNativeEnum<typeof Message>;
/** @internal */
export declare const Message$outboundSchema: z.ZodNativeEnum<typeof Message>;
/** @internal */
export declare const GetCommandLogsResponseBodyData$inboundSchema: z.ZodType<GetCommandLogsResponseBodyData, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCommandLogsResponseBodyData$Outbound = {
    code: string;
    message: string;
};
/** @internal */
export declare const GetCommandLogsResponseBodyData$outboundSchema: z.ZodType<GetCommandLogsResponseBodyData$Outbound, z.ZodTypeDef, GetCommandLogsResponseBodyData>;
export declare function getCommandLogsResponseBodyDataToJSON(getCommandLogsResponseBodyData: GetCommandLogsResponseBodyData): string;
export declare function getCommandLogsResponseBodyDataFromJSON(jsonString: string): SafeParseResult<GetCommandLogsResponseBodyData, SDKValidationError>;
/** @internal */
export declare const GetCommandLogsResponseBody1$inboundSchema: z.ZodType<GetCommandLogsResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCommandLogsResponseBody1$Outbound = {
    stream: string;
    data: GetCommandLogsResponseBodyData$Outbound;
};
/** @internal */
export declare const GetCommandLogsResponseBody1$outboundSchema: z.ZodType<GetCommandLogsResponseBody1$Outbound, z.ZodTypeDef, GetCommandLogsResponseBody1>;
export declare function getCommandLogsResponseBody1ToJSON(getCommandLogsResponseBody1: GetCommandLogsResponseBody1): string;
export declare function getCommandLogsResponseBody1FromJSON(jsonString: string): SafeParseResult<GetCommandLogsResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetCommandLogsResponseBody$inboundSchema: z.ZodType<GetCommandLogsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCommandLogsResponseBody$Outbound = GetCommandLogsResponseBody1$Outbound | GetCommandLogsResponseBody2$Outbound;
/** @internal */
export declare const GetCommandLogsResponseBody$outboundSchema: z.ZodType<GetCommandLogsResponseBody$Outbound, z.ZodTypeDef, GetCommandLogsResponseBody>;
export declare function getCommandLogsResponseBodyToJSON(getCommandLogsResponseBody: GetCommandLogsResponseBody): string;
export declare function getCommandLogsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetCommandLogsResponseBody, SDKValidationError>;
//# sourceMappingURL=getcommandlogsop.d.ts.map