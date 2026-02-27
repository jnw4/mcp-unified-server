import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Metadata about any AWS Route53 Hosted Zones associated with the Network.
 */
export type HostedZones = {
    /**
     * The number of AWS Route53 Hosted Zones associated with the Network.
     */
    count: number;
};
/**
 * Metadata about any AWS Route53 Hosted Zones associated with the Network.
 */
export type PeeringConnections = {
    /**
     * The number of AWS Route53 Hosted Zones associated with the Network.
     */
    count: number;
};
/**
 * Metadata about any projects associated with the Network.
 */
export type Projects = {
    count: number;
    ids: Array<string>;
};
/**
 * The status of the Network.
 */
export declare const Status: {
    readonly CreateInProgress: "create_in_progress";
    readonly DeleteInProgress: "delete_in_progress";
    readonly Error: "error";
    readonly Ready: "ready";
};
/**
 * The status of the Network.
 */
export type Status = ClosedEnum<typeof Status>;
export type Network = {
    /**
     * The ID of the AWS Account in which the network exists.
     */
    awsAccountId: string;
    /**
     * The IDs of the AWS Availability Zones in which the network exists, if specified during creation.
     */
    awsAvailabilityZoneIds?: Array<string> | undefined;
    /**
     * The AWS Region in which the network exists.
     */
    awsRegion: string;
    /**
     * The CIDR range of the Network.
     */
    cidr: string;
    /**
     * The date at which the Network was created, represented as a UNIX timestamp since EPOCH.
     */
    createdAt: number;
    egressIpAddresses?: Array<string> | undefined;
    /**
     * Metadata about any AWS Route53 Hosted Zones associated with the Network.
     */
    hostedZones?: HostedZones | undefined;
    /**
     * The unique identifier of the Network.
     */
    id: string;
    /**
     * The name of the network.
     */
    name: string;
    /**
     * Metadata about any AWS Route53 Hosted Zones associated with the Network.
     */
    peeringConnections?: PeeringConnections | undefined;
    /**
     * Metadata about any projects associated with the Network.
     */
    projects?: Projects | undefined;
    /**
     * The Vercel region in which the Network exists.
     */
    region?: string | undefined;
    /**
     * The status of the Network.
     */
    status: Status;
    /**
     * The unique identifier of the Team that owns the Network.
     */
    teamId: string;
    /**
     * The ID of the VPC which hosts the network.
     */
    vpcId?: string | undefined;
};
/** @internal */
export declare const HostedZones$inboundSchema: z.ZodType<HostedZones, z.ZodTypeDef, unknown>;
/** @internal */
export type HostedZones$Outbound = {
    count: number;
};
/** @internal */
export declare const HostedZones$outboundSchema: z.ZodType<HostedZones$Outbound, z.ZodTypeDef, HostedZones>;
export declare function hostedZonesToJSON(hostedZones: HostedZones): string;
export declare function hostedZonesFromJSON(jsonString: string): SafeParseResult<HostedZones, SDKValidationError>;
/** @internal */
export declare const PeeringConnections$inboundSchema: z.ZodType<PeeringConnections, z.ZodTypeDef, unknown>;
/** @internal */
export type PeeringConnections$Outbound = {
    count: number;
};
/** @internal */
export declare const PeeringConnections$outboundSchema: z.ZodType<PeeringConnections$Outbound, z.ZodTypeDef, PeeringConnections>;
export declare function peeringConnectionsToJSON(peeringConnections: PeeringConnections): string;
export declare function peeringConnectionsFromJSON(jsonString: string): SafeParseResult<PeeringConnections, SDKValidationError>;
/** @internal */
export declare const Projects$inboundSchema: z.ZodType<Projects, z.ZodTypeDef, unknown>;
/** @internal */
export type Projects$Outbound = {
    count: number;
    ids: Array<string>;
};
/** @internal */
export declare const Projects$outboundSchema: z.ZodType<Projects$Outbound, z.ZodTypeDef, Projects>;
export declare function projectsToJSON(projects: Projects): string;
export declare function projectsFromJSON(jsonString: string): SafeParseResult<Projects, SDKValidationError>;
/** @internal */
export declare const Status$inboundSchema: z.ZodNativeEnum<typeof Status>;
/** @internal */
export declare const Status$outboundSchema: z.ZodNativeEnum<typeof Status>;
/** @internal */
export declare const Network$inboundSchema: z.ZodType<Network, z.ZodTypeDef, unknown>;
/** @internal */
export type Network$Outbound = {
    awsAccountId: string;
    awsAvailabilityZoneIds?: Array<string> | undefined;
    awsRegion: string;
    cidr: string;
    createdAt: number;
    egressIpAddresses?: Array<string> | undefined;
    hostedZones?: HostedZones$Outbound | undefined;
    id: string;
    name: string;
    peeringConnections?: PeeringConnections$Outbound | undefined;
    projects?: Projects$Outbound | undefined;
    region?: string | undefined;
    status: string;
    teamId: string;
    vpcId?: string | undefined;
};
/** @internal */
export declare const Network$outboundSchema: z.ZodType<Network$Outbound, z.ZodTypeDef, Network>;
export declare function networkToJSON(network: Network): string;
export declare function networkFromJSON(jsonString: string): SafeParseResult<Network, SDKValidationError>;
//# sourceMappingURL=network.d.ts.map