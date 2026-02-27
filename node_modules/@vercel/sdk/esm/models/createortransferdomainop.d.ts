import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * move-in
 */
export type CreateOrTransferDomainRequestBody2 = {
    /**
     * The domain name you want to add.
     */
    name: string;
    /**
     * The domain operation to perform. It can be either `add` or `move-in`.
     */
    method: string;
    /**
     * The move-in token from Move Requested email.
     */
    token?: string | undefined;
};
/**
 * add
 */
export type CreateOrTransferDomainRequestBody1 = {
    /**
     * The domain name you want to add.
     */
    name: string;
    /**
     * Whether the domain has the Vercel Edge Network enabled or not.
     */
    cdnEnabled?: boolean | undefined;
    /**
     * Whether to create a DNS zone on Vercel. Set `true` if using Vercel nameservers.
     */
    zone?: boolean | undefined;
    /**
     * The domain operation to perform. It can be either `add` or `move-in`.
     */
    method?: string | undefined;
};
export type CreateOrTransferDomainRequestBody = CreateOrTransferDomainRequestBody2 | CreateOrTransferDomainRequestBody1;
export type CreateOrTransferDomainRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateOrTransferDomainRequestBody2 | CreateOrTransferDomainRequestBody1 | undefined;
};
/**
 * An object containing information of the domain creator, including the user's id, username, and email.
 */
export type CreateOrTransferDomainCreator = {
    username: string;
    email: string;
    customerId?: string | null | undefined;
    isDomainReseller?: boolean | undefined;
    id: string;
};
/**
 * Whether or not the domain is registered with Name.com. If set to `true`, the domain is registered with Name.com.
 */
export declare const CreateOrTransferDomainRegistrar: {
    readonly New: "new";
};
/**
 * Whether or not the domain is registered with Name.com. If set to `true`, the domain is registered with Name.com.
 */
export type CreateOrTransferDomainRegistrar = ClosedEnum<typeof CreateOrTransferDomainRegistrar>;
/**
 * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
 */
export declare const CreateOrTransferDomainServiceType: {
    readonly ZeitWorld: "zeit.world";
    readonly External: "external";
    readonly Na: "na";
};
/**
 * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
 */
export type CreateOrTransferDomainServiceType = ClosedEnum<typeof CreateOrTransferDomainServiceType>;
export type CreateOrTransferDomainDomain = {
    /**
     * If the domain has the ownership verified.
     */
    verified: boolean;
    /**
     * A list of the current nameservers of the domain.
     */
    nameservers: Array<string>;
    /**
     * A list of the intended nameservers for the domain to point to Vercel DNS.
     */
    intendedNameservers: Array<string>;
    /**
     * A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.
     */
    customNameservers?: Array<string> | undefined;
    /**
     * An object containing information of the domain creator, including the user's id, username, and email.
     */
    creator: CreateOrTransferDomainCreator;
    /**
     * Whether or not the domain is registered with Name.com. If set to `true`, the domain is registered with Name.com.
     */
    registrar?: CreateOrTransferDomainRegistrar | undefined;
    /**
     * The domain name.
     */
    name: string;
    teamId: string | null;
    /**
     * If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.
     */
    boughtAt: number | null;
    /**
     * Timestamp in milliseconds when the domain was created in the registry.
     */
    createdAt: number;
    /**
     * Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.
     */
    expiresAt: number | null;
    /**
     * The unique identifier of the domain.
     */
    id: string;
    /**
     * Indicates whether the domain is set to automatically renew.
     */
    renew?: boolean | undefined;
    /**
     * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
     */
    serviceType: CreateOrTransferDomainServiceType;
    /**
     * Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.
     */
    transferredAt?: number | null | undefined;
    /**
     * If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.
     */
    transferStartedAt?: number | undefined;
    userId: string;
};
export type CreateOrTransferDomainResponseBody = {
    domain: CreateOrTransferDomainDomain;
};
/** @internal */
export declare const CreateOrTransferDomainRequestBody2$inboundSchema: z.ZodType<CreateOrTransferDomainRequestBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateOrTransferDomainRequestBody2$Outbound = {
    name: string;
    method: string;
    token?: string | undefined;
};
/** @internal */
export declare const CreateOrTransferDomainRequestBody2$outboundSchema: z.ZodType<CreateOrTransferDomainRequestBody2$Outbound, z.ZodTypeDef, CreateOrTransferDomainRequestBody2>;
export declare function createOrTransferDomainRequestBody2ToJSON(createOrTransferDomainRequestBody2: CreateOrTransferDomainRequestBody2): string;
export declare function createOrTransferDomainRequestBody2FromJSON(jsonString: string): SafeParseResult<CreateOrTransferDomainRequestBody2, SDKValidationError>;
/** @internal */
export declare const CreateOrTransferDomainRequestBody1$inboundSchema: z.ZodType<CreateOrTransferDomainRequestBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateOrTransferDomainRequestBody1$Outbound = {
    name: string;
    cdnEnabled?: boolean | undefined;
    zone?: boolean | undefined;
    method?: string | undefined;
};
/** @internal */
export declare const CreateOrTransferDomainRequestBody1$outboundSchema: z.ZodType<CreateOrTransferDomainRequestBody1$Outbound, z.ZodTypeDef, CreateOrTransferDomainRequestBody1>;
export declare function createOrTransferDomainRequestBody1ToJSON(createOrTransferDomainRequestBody1: CreateOrTransferDomainRequestBody1): string;
export declare function createOrTransferDomainRequestBody1FromJSON(jsonString: string): SafeParseResult<CreateOrTransferDomainRequestBody1, SDKValidationError>;
/** @internal */
export declare const CreateOrTransferDomainRequestBody$inboundSchema: z.ZodType<CreateOrTransferDomainRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateOrTransferDomainRequestBody$Outbound = CreateOrTransferDomainRequestBody2$Outbound | CreateOrTransferDomainRequestBody1$Outbound;
/** @internal */
export declare const CreateOrTransferDomainRequestBody$outboundSchema: z.ZodType<CreateOrTransferDomainRequestBody$Outbound, z.ZodTypeDef, CreateOrTransferDomainRequestBody>;
export declare function createOrTransferDomainRequestBodyToJSON(createOrTransferDomainRequestBody: CreateOrTransferDomainRequestBody): string;
export declare function createOrTransferDomainRequestBodyFromJSON(jsonString: string): SafeParseResult<CreateOrTransferDomainRequestBody, SDKValidationError>;
/** @internal */
export declare const CreateOrTransferDomainRequest$inboundSchema: z.ZodType<CreateOrTransferDomainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateOrTransferDomainRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateOrTransferDomainRequestBody2$Outbound | CreateOrTransferDomainRequestBody1$Outbound | undefined;
};
/** @internal */
export declare const CreateOrTransferDomainRequest$outboundSchema: z.ZodType<CreateOrTransferDomainRequest$Outbound, z.ZodTypeDef, CreateOrTransferDomainRequest>;
export declare function createOrTransferDomainRequestToJSON(createOrTransferDomainRequest: CreateOrTransferDomainRequest): string;
export declare function createOrTransferDomainRequestFromJSON(jsonString: string): SafeParseResult<CreateOrTransferDomainRequest, SDKValidationError>;
/** @internal */
export declare const CreateOrTransferDomainCreator$inboundSchema: z.ZodType<CreateOrTransferDomainCreator, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateOrTransferDomainCreator$Outbound = {
    username: string;
    email: string;
    customerId?: string | null | undefined;
    isDomainReseller?: boolean | undefined;
    id: string;
};
/** @internal */
export declare const CreateOrTransferDomainCreator$outboundSchema: z.ZodType<CreateOrTransferDomainCreator$Outbound, z.ZodTypeDef, CreateOrTransferDomainCreator>;
export declare function createOrTransferDomainCreatorToJSON(createOrTransferDomainCreator: CreateOrTransferDomainCreator): string;
export declare function createOrTransferDomainCreatorFromJSON(jsonString: string): SafeParseResult<CreateOrTransferDomainCreator, SDKValidationError>;
/** @internal */
export declare const CreateOrTransferDomainRegistrar$inboundSchema: z.ZodNativeEnum<typeof CreateOrTransferDomainRegistrar>;
/** @internal */
export declare const CreateOrTransferDomainRegistrar$outboundSchema: z.ZodNativeEnum<typeof CreateOrTransferDomainRegistrar>;
/** @internal */
export declare const CreateOrTransferDomainServiceType$inboundSchema: z.ZodNativeEnum<typeof CreateOrTransferDomainServiceType>;
/** @internal */
export declare const CreateOrTransferDomainServiceType$outboundSchema: z.ZodNativeEnum<typeof CreateOrTransferDomainServiceType>;
/** @internal */
export declare const CreateOrTransferDomainDomain$inboundSchema: z.ZodType<CreateOrTransferDomainDomain, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateOrTransferDomainDomain$Outbound = {
    verified: boolean;
    nameservers: Array<string>;
    intendedNameservers: Array<string>;
    customNameservers?: Array<string> | undefined;
    creator: CreateOrTransferDomainCreator$Outbound;
    registrar?: string | undefined;
    name: string;
    teamId: string | null;
    boughtAt: number | null;
    createdAt: number;
    expiresAt: number | null;
    id: string;
    renew?: boolean | undefined;
    serviceType: string;
    transferredAt?: number | null | undefined;
    transferStartedAt?: number | undefined;
    userId: string;
};
/** @internal */
export declare const CreateOrTransferDomainDomain$outboundSchema: z.ZodType<CreateOrTransferDomainDomain$Outbound, z.ZodTypeDef, CreateOrTransferDomainDomain>;
export declare function createOrTransferDomainDomainToJSON(createOrTransferDomainDomain: CreateOrTransferDomainDomain): string;
export declare function createOrTransferDomainDomainFromJSON(jsonString: string): SafeParseResult<CreateOrTransferDomainDomain, SDKValidationError>;
/** @internal */
export declare const CreateOrTransferDomainResponseBody$inboundSchema: z.ZodType<CreateOrTransferDomainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateOrTransferDomainResponseBody$Outbound = {
    domain: CreateOrTransferDomainDomain$Outbound;
};
/** @internal */
export declare const CreateOrTransferDomainResponseBody$outboundSchema: z.ZodType<CreateOrTransferDomainResponseBody$Outbound, z.ZodTypeDef, CreateOrTransferDomainResponseBody>;
export declare function createOrTransferDomainResponseBodyToJSON(createOrTransferDomainResponseBody: CreateOrTransferDomainResponseBody): string;
export declare function createOrTransferDomainResponseBodyFromJSON(jsonString: string): SafeParseResult<CreateOrTransferDomainResponseBody, SDKValidationError>;
//# sourceMappingURL=createortransferdomainop.d.ts.map