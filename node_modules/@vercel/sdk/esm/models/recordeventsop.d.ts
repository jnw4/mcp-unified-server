import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.
 */
export declare const Source: {
    readonly Local: "LOCAL";
    readonly Remote: "REMOTE";
};
/**
 * One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.
 */
export type Source = ClosedEnum<typeof Source>;
/**
 * One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.
 */
export declare const Event: {
    readonly Hit: "HIT";
    readonly Miss: "MISS";
};
/**
 * One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.
 */
export type Event = ClosedEnum<typeof Event>;
export type RequestBody = {
    /**
     * A UUID (universally unique identifer) for the session that generated this event.
     */
    sessionId: string;
    /**
     * One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.
     */
    source: Source;
    /**
     * One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.
     */
    event: Event;
    /**
     * The artifact hash
     */
    hash: string;
    /**
     * The time taken to generate the artifact. This should be sent as a body parameter on `HIT` events.
     */
    duration?: number | undefined;
};
export type RecordEventsRequest = {
    /**
     * The continuous integration or delivery environment where this artifact is downloaded.
     */
    xArtifactClientCi?: string | undefined;
    /**
     * 1 if the client is an interactive shell. Otherwise 0
     */
    xArtifactClientInteractive?: number | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: Array<RequestBody>;
};
/** @internal */
export declare const Source$inboundSchema: z.ZodNativeEnum<typeof Source>;
/** @internal */
export declare const Source$outboundSchema: z.ZodNativeEnum<typeof Source>;
/** @internal */
export declare const Event$inboundSchema: z.ZodNativeEnum<typeof Event>;
/** @internal */
export declare const Event$outboundSchema: z.ZodNativeEnum<typeof Event>;
/** @internal */
export declare const RequestBody$inboundSchema: z.ZodType<RequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestBody$Outbound = {
    sessionId: string;
    source: string;
    event: string;
    hash: string;
    duration?: number | undefined;
};
/** @internal */
export declare const RequestBody$outboundSchema: z.ZodType<RequestBody$Outbound, z.ZodTypeDef, RequestBody>;
export declare function requestBodyToJSON(requestBody: RequestBody): string;
export declare function requestBodyFromJSON(jsonString: string): SafeParseResult<RequestBody, SDKValidationError>;
/** @internal */
export declare const RecordEventsRequest$inboundSchema: z.ZodType<RecordEventsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RecordEventsRequest$Outbound = {
    "x-artifact-client-ci"?: string | undefined;
    "x-artifact-client-interactive"?: number | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: Array<RequestBody$Outbound>;
};
/** @internal */
export declare const RecordEventsRequest$outboundSchema: z.ZodType<RecordEventsRequest$Outbound, z.ZodTypeDef, RecordEventsRequest>;
export declare function recordEventsRequestToJSON(recordEventsRequest: RecordEventsRequest): string;
export declare function recordEventsRequestFromJSON(jsonString: string): SafeParseResult<RecordEventsRequest, SDKValidationError>;
//# sourceMappingURL=recordeventsop.d.ts.map