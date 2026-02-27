import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetFlagSettingsRequest = {
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
export declare const GetFlagSettingsTypeName: {
    readonly Settings: "settings";
};
export type GetFlagSettingsTypeName = ClosedEnum<typeof GetFlagSettingsTypeName>;
export type Connections = {
    edgeConfigId: string;
    edgeConfigItemKey: string;
};
export type GetFlagSettingsLabels = {
    label: string;
    value: string;
};
export type GetFlagSettingsAttributes = {
    key: string;
    type: string;
    labels?: Array<GetFlagSettingsLabels> | undefined;
};
export type GetFlagSettingsEntities = {
    kind: string;
    label: string;
    attributes: Array<GetFlagSettingsAttributes>;
};
export type GetFlagSettingsMetadata = {
    activeFlagCount: number;
    archivedFlagCount: number;
    segmentCount: number;
    packSizeInBytes: number;
    packRevision?: number | undefined;
    configUpdatedAt?: number | undefined;
};
/**
 * Syncs direct the synchronization of Flags to Edge Configs
 */
export type GetFlagSettingsResponseBody = {
    typeName: GetFlagSettingsTypeName;
    projectId: string;
    ownerId?: string | undefined;
    enabled: boolean;
    environments: Array<string>;
    connections?: Array<Connections> | undefined;
    entities: Array<GetFlagSettingsEntities>;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    metadata: GetFlagSettingsMetadata;
};
/** @internal */
export declare const GetFlagSettingsRequest$inboundSchema: z.ZodType<GetFlagSettingsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFlagSettingsRequest$Outbound = {
    projectIdOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetFlagSettingsRequest$outboundSchema: z.ZodType<GetFlagSettingsRequest$Outbound, z.ZodTypeDef, GetFlagSettingsRequest>;
export declare function getFlagSettingsRequestToJSON(getFlagSettingsRequest: GetFlagSettingsRequest): string;
export declare function getFlagSettingsRequestFromJSON(jsonString: string): SafeParseResult<GetFlagSettingsRequest, SDKValidationError>;
/** @internal */
export declare const GetFlagSettingsTypeName$inboundSchema: z.ZodNativeEnum<typeof GetFlagSettingsTypeName>;
/** @internal */
export declare const GetFlagSettingsTypeName$outboundSchema: z.ZodNativeEnum<typeof GetFlagSettingsTypeName>;
/** @internal */
export declare const Connections$inboundSchema: z.ZodType<Connections, z.ZodTypeDef, unknown>;
/** @internal */
export type Connections$Outbound = {
    edgeConfigId: string;
    edgeConfigItemKey: string;
};
/** @internal */
export declare const Connections$outboundSchema: z.ZodType<Connections$Outbound, z.ZodTypeDef, Connections>;
export declare function connectionsToJSON(connections: Connections): string;
export declare function connectionsFromJSON(jsonString: string): SafeParseResult<Connections, SDKValidationError>;
/** @internal */
export declare const GetFlagSettingsLabels$inboundSchema: z.ZodType<GetFlagSettingsLabels, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFlagSettingsLabels$Outbound = {
    label: string;
    value: string;
};
/** @internal */
export declare const GetFlagSettingsLabels$outboundSchema: z.ZodType<GetFlagSettingsLabels$Outbound, z.ZodTypeDef, GetFlagSettingsLabels>;
export declare function getFlagSettingsLabelsToJSON(getFlagSettingsLabels: GetFlagSettingsLabels): string;
export declare function getFlagSettingsLabelsFromJSON(jsonString: string): SafeParseResult<GetFlagSettingsLabels, SDKValidationError>;
/** @internal */
export declare const GetFlagSettingsAttributes$inboundSchema: z.ZodType<GetFlagSettingsAttributes, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFlagSettingsAttributes$Outbound = {
    key: string;
    type: string;
    labels?: Array<GetFlagSettingsLabels$Outbound> | undefined;
};
/** @internal */
export declare const GetFlagSettingsAttributes$outboundSchema: z.ZodType<GetFlagSettingsAttributes$Outbound, z.ZodTypeDef, GetFlagSettingsAttributes>;
export declare function getFlagSettingsAttributesToJSON(getFlagSettingsAttributes: GetFlagSettingsAttributes): string;
export declare function getFlagSettingsAttributesFromJSON(jsonString: string): SafeParseResult<GetFlagSettingsAttributes, SDKValidationError>;
/** @internal */
export declare const GetFlagSettingsEntities$inboundSchema: z.ZodType<GetFlagSettingsEntities, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFlagSettingsEntities$Outbound = {
    kind: string;
    label: string;
    attributes: Array<GetFlagSettingsAttributes$Outbound>;
};
/** @internal */
export declare const GetFlagSettingsEntities$outboundSchema: z.ZodType<GetFlagSettingsEntities$Outbound, z.ZodTypeDef, GetFlagSettingsEntities>;
export declare function getFlagSettingsEntitiesToJSON(getFlagSettingsEntities: GetFlagSettingsEntities): string;
export declare function getFlagSettingsEntitiesFromJSON(jsonString: string): SafeParseResult<GetFlagSettingsEntities, SDKValidationError>;
/** @internal */
export declare const GetFlagSettingsMetadata$inboundSchema: z.ZodType<GetFlagSettingsMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFlagSettingsMetadata$Outbound = {
    activeFlagCount: number;
    archivedFlagCount: number;
    segmentCount: number;
    packSizeInBytes: number;
    packRevision?: number | undefined;
    configUpdatedAt?: number | undefined;
};
/** @internal */
export declare const GetFlagSettingsMetadata$outboundSchema: z.ZodType<GetFlagSettingsMetadata$Outbound, z.ZodTypeDef, GetFlagSettingsMetadata>;
export declare function getFlagSettingsMetadataToJSON(getFlagSettingsMetadata: GetFlagSettingsMetadata): string;
export declare function getFlagSettingsMetadataFromJSON(jsonString: string): SafeParseResult<GetFlagSettingsMetadata, SDKValidationError>;
/** @internal */
export declare const GetFlagSettingsResponseBody$inboundSchema: z.ZodType<GetFlagSettingsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFlagSettingsResponseBody$Outbound = {
    typeName: string;
    projectId: string;
    ownerId?: string | undefined;
    enabled: boolean;
    environments: Array<string>;
    connections?: Array<Connections$Outbound> | undefined;
    entities: Array<GetFlagSettingsEntities$Outbound>;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    metadata: GetFlagSettingsMetadata$Outbound;
};
/** @internal */
export declare const GetFlagSettingsResponseBody$outboundSchema: z.ZodType<GetFlagSettingsResponseBody$Outbound, z.ZodTypeDef, GetFlagSettingsResponseBody>;
export declare function getFlagSettingsResponseBodyToJSON(getFlagSettingsResponseBody: GetFlagSettingsResponseBody): string;
export declare function getFlagSettingsResponseBodyFromJSON(jsonString: string): SafeParseResult<GetFlagSettingsResponseBody, SDKValidationError>;
//# sourceMappingURL=getflagsettingsop.d.ts.map