import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type TestDrainSchemas = {
    version: string;
};
export type TestDrainEndpoint1 = {
    traces: string;
};
export type TestDrainDeliveryEndpoint = TestDrainEndpoint1;
export declare const TestDrainDeliveryDrainsEncoding: {
    readonly Proto: "proto";
    readonly Json: "json";
};
export type TestDrainDeliveryDrainsEncoding = ClosedEnum<typeof TestDrainDeliveryDrainsEncoding>;
export type TestDrainDelivery2 = {
    type: string;
    endpoint: TestDrainEndpoint1;
    encoding: TestDrainDeliveryDrainsEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: string | undefined;
};
export declare const TestDrainDeliveryCompression: {
    readonly Gzip: "gzip";
    readonly None: "none";
};
export type TestDrainDeliveryCompression = ClosedEnum<typeof TestDrainDeliveryCompression>;
export declare const TestDrainDeliveryEncoding: {
    readonly Json: "json";
    readonly Ndjson: "ndjson";
};
export type TestDrainDeliveryEncoding = ClosedEnum<typeof TestDrainDeliveryEncoding>;
export type TestDrainDelivery1 = {
    type: string;
    endpoint: string;
    compression?: TestDrainDeliveryCompression | undefined;
    encoding: TestDrainDeliveryEncoding;
    headers: {
        [k: string]: string;
    };
    secret?: string | undefined;
};
export type TestDrainDelivery = TestDrainDelivery1 | TestDrainDelivery2;
export type TestDrainRequestBody = {
    schemas: {
        [k: string]: TestDrainSchemas;
    };
    delivery: TestDrainDelivery1 | TestDrainDelivery2;
};
export type TestDrainRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: TestDrainRequestBody | undefined;
};
export type TestDrainResponseBody2 = {
    status: string;
    error: string;
    endpoint: string;
};
export type TestDrainResponseBody1 = {};
export type TestDrainResponseBody = TestDrainResponseBody2 | TestDrainResponseBody1;
/** @internal */
export declare const TestDrainSchemas$inboundSchema: z.ZodType<TestDrainSchemas, z.ZodTypeDef, unknown>;
/** @internal */
export type TestDrainSchemas$Outbound = {
    version: string;
};
/** @internal */
export declare const TestDrainSchemas$outboundSchema: z.ZodType<TestDrainSchemas$Outbound, z.ZodTypeDef, TestDrainSchemas>;
export declare function testDrainSchemasToJSON(testDrainSchemas: TestDrainSchemas): string;
export declare function testDrainSchemasFromJSON(jsonString: string): SafeParseResult<TestDrainSchemas, SDKValidationError>;
/** @internal */
export declare const TestDrainEndpoint1$inboundSchema: z.ZodType<TestDrainEndpoint1, z.ZodTypeDef, unknown>;
/** @internal */
export type TestDrainEndpoint1$Outbound = {
    traces: string;
};
/** @internal */
export declare const TestDrainEndpoint1$outboundSchema: z.ZodType<TestDrainEndpoint1$Outbound, z.ZodTypeDef, TestDrainEndpoint1>;
export declare function testDrainEndpoint1ToJSON(testDrainEndpoint1: TestDrainEndpoint1): string;
export declare function testDrainEndpoint1FromJSON(jsonString: string): SafeParseResult<TestDrainEndpoint1, SDKValidationError>;
/** @internal */
export declare const TestDrainDeliveryEndpoint$inboundSchema: z.ZodType<TestDrainDeliveryEndpoint, z.ZodTypeDef, unknown>;
/** @internal */
export type TestDrainDeliveryEndpoint$Outbound = TestDrainEndpoint1$Outbound;
/** @internal */
export declare const TestDrainDeliveryEndpoint$outboundSchema: z.ZodType<TestDrainDeliveryEndpoint$Outbound, z.ZodTypeDef, TestDrainDeliveryEndpoint>;
export declare function testDrainDeliveryEndpointToJSON(testDrainDeliveryEndpoint: TestDrainDeliveryEndpoint): string;
export declare function testDrainDeliveryEndpointFromJSON(jsonString: string): SafeParseResult<TestDrainDeliveryEndpoint, SDKValidationError>;
/** @internal */
export declare const TestDrainDeliveryDrainsEncoding$inboundSchema: z.ZodNativeEnum<typeof TestDrainDeliveryDrainsEncoding>;
/** @internal */
export declare const TestDrainDeliveryDrainsEncoding$outboundSchema: z.ZodNativeEnum<typeof TestDrainDeliveryDrainsEncoding>;
/** @internal */
export declare const TestDrainDelivery2$inboundSchema: z.ZodType<TestDrainDelivery2, z.ZodTypeDef, unknown>;
/** @internal */
export type TestDrainDelivery2$Outbound = {
    type: string;
    endpoint: TestDrainEndpoint1$Outbound;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: string | undefined;
};
/** @internal */
export declare const TestDrainDelivery2$outboundSchema: z.ZodType<TestDrainDelivery2$Outbound, z.ZodTypeDef, TestDrainDelivery2>;
export declare function testDrainDelivery2ToJSON(testDrainDelivery2: TestDrainDelivery2): string;
export declare function testDrainDelivery2FromJSON(jsonString: string): SafeParseResult<TestDrainDelivery2, SDKValidationError>;
/** @internal */
export declare const TestDrainDeliveryCompression$inboundSchema: z.ZodNativeEnum<typeof TestDrainDeliveryCompression>;
/** @internal */
export declare const TestDrainDeliveryCompression$outboundSchema: z.ZodNativeEnum<typeof TestDrainDeliveryCompression>;
/** @internal */
export declare const TestDrainDeliveryEncoding$inboundSchema: z.ZodNativeEnum<typeof TestDrainDeliveryEncoding>;
/** @internal */
export declare const TestDrainDeliveryEncoding$outboundSchema: z.ZodNativeEnum<typeof TestDrainDeliveryEncoding>;
/** @internal */
export declare const TestDrainDelivery1$inboundSchema: z.ZodType<TestDrainDelivery1, z.ZodTypeDef, unknown>;
/** @internal */
export type TestDrainDelivery1$Outbound = {
    type: string;
    endpoint: string;
    compression?: string | undefined;
    encoding: string;
    headers: {
        [k: string]: string;
    };
    secret?: string | undefined;
};
/** @internal */
export declare const TestDrainDelivery1$outboundSchema: z.ZodType<TestDrainDelivery1$Outbound, z.ZodTypeDef, TestDrainDelivery1>;
export declare function testDrainDelivery1ToJSON(testDrainDelivery1: TestDrainDelivery1): string;
export declare function testDrainDelivery1FromJSON(jsonString: string): SafeParseResult<TestDrainDelivery1, SDKValidationError>;
/** @internal */
export declare const TestDrainDelivery$inboundSchema: z.ZodType<TestDrainDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type TestDrainDelivery$Outbound = TestDrainDelivery1$Outbound | TestDrainDelivery2$Outbound;
/** @internal */
export declare const TestDrainDelivery$outboundSchema: z.ZodType<TestDrainDelivery$Outbound, z.ZodTypeDef, TestDrainDelivery>;
export declare function testDrainDeliveryToJSON(testDrainDelivery: TestDrainDelivery): string;
export declare function testDrainDeliveryFromJSON(jsonString: string): SafeParseResult<TestDrainDelivery, SDKValidationError>;
/** @internal */
export declare const TestDrainRequestBody$inboundSchema: z.ZodType<TestDrainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type TestDrainRequestBody$Outbound = {
    schemas: {
        [k: string]: TestDrainSchemas$Outbound;
    };
    delivery: TestDrainDelivery1$Outbound | TestDrainDelivery2$Outbound;
};
/** @internal */
export declare const TestDrainRequestBody$outboundSchema: z.ZodType<TestDrainRequestBody$Outbound, z.ZodTypeDef, TestDrainRequestBody>;
export declare function testDrainRequestBodyToJSON(testDrainRequestBody: TestDrainRequestBody): string;
export declare function testDrainRequestBodyFromJSON(jsonString: string): SafeParseResult<TestDrainRequestBody, SDKValidationError>;
/** @internal */
export declare const TestDrainRequest$inboundSchema: z.ZodType<TestDrainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TestDrainRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: TestDrainRequestBody$Outbound | undefined;
};
/** @internal */
export declare const TestDrainRequest$outboundSchema: z.ZodType<TestDrainRequest$Outbound, z.ZodTypeDef, TestDrainRequest>;
export declare function testDrainRequestToJSON(testDrainRequest: TestDrainRequest): string;
export declare function testDrainRequestFromJSON(jsonString: string): SafeParseResult<TestDrainRequest, SDKValidationError>;
/** @internal */
export declare const TestDrainResponseBody2$inboundSchema: z.ZodType<TestDrainResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type TestDrainResponseBody2$Outbound = {
    status: string;
    error: string;
    endpoint: string;
};
/** @internal */
export declare const TestDrainResponseBody2$outboundSchema: z.ZodType<TestDrainResponseBody2$Outbound, z.ZodTypeDef, TestDrainResponseBody2>;
export declare function testDrainResponseBody2ToJSON(testDrainResponseBody2: TestDrainResponseBody2): string;
export declare function testDrainResponseBody2FromJSON(jsonString: string): SafeParseResult<TestDrainResponseBody2, SDKValidationError>;
/** @internal */
export declare const TestDrainResponseBody1$inboundSchema: z.ZodType<TestDrainResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type TestDrainResponseBody1$Outbound = {};
/** @internal */
export declare const TestDrainResponseBody1$outboundSchema: z.ZodType<TestDrainResponseBody1$Outbound, z.ZodTypeDef, TestDrainResponseBody1>;
export declare function testDrainResponseBody1ToJSON(testDrainResponseBody1: TestDrainResponseBody1): string;
export declare function testDrainResponseBody1FromJSON(jsonString: string): SafeParseResult<TestDrainResponseBody1, SDKValidationError>;
/** @internal */
export declare const TestDrainResponseBody$inboundSchema: z.ZodType<TestDrainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type TestDrainResponseBody$Outbound = TestDrainResponseBody2$Outbound | TestDrainResponseBody1$Outbound;
/** @internal */
export declare const TestDrainResponseBody$outboundSchema: z.ZodType<TestDrainResponseBody$Outbound, z.ZodTypeDef, TestDrainResponseBody>;
export declare function testDrainResponseBodyToJSON(testDrainResponseBody: TestDrainResponseBody): string;
export declare function testDrainResponseBodyFromJSON(jsonString: string): SafeParseResult<TestDrainResponseBody, SDKValidationError>;
//# sourceMappingURL=testdrainop.d.ts.map