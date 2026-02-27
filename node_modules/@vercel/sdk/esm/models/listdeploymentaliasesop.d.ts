import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ListDeploymentAliasesRequest = {
    /**
     * The ID of the deployment the aliases should be listed for
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
/**
 * The protection bypass for the alias
 */
export type ListDeploymentAliasesProtectionBypass4 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    scope: "email_invite";
};
/**
 * The protection bypass for the alias
 */
export type ListDeploymentAliasesProtectionBypass3 = {
    createdAt: number;
    createdBy: string;
    scope: "alias-protection-override";
};
export declare const ListDeploymentAliasesProtectionBypassAccess: {
    readonly Requested: "requested";
    readonly Granted: "granted";
};
export type ListDeploymentAliasesProtectionBypassAccess = ClosedEnum<typeof ListDeploymentAliasesProtectionBypassAccess>;
/**
 * The protection bypass for the alias
 */
export type ListDeploymentAliasesProtectionBypass2 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    access: ListDeploymentAliasesProtectionBypassAccess;
    scope: "user";
};
/**
 * The protection bypass for the alias
 */
export type ListDeploymentAliasesProtectionBypass1 = {
    createdAt: number;
    createdBy: string;
    scope: "shareable-link";
    expires?: number | undefined;
};
export type ListDeploymentAliasesProtectionBypass = ListDeploymentAliasesProtectionBypass1 | ListDeploymentAliasesProtectionBypass2 | ListDeploymentAliasesProtectionBypass3 | ListDeploymentAliasesProtectionBypass4;
/**
 * A list of the aliases assigned to the deployment
 */
export type Aliases = {
    /**
     * The unique identifier of the alias
     */
    uid: string;
    /**
     * The alias name, it could be a `.vercel.app` subdomain or a custom domain
     */
    alias: string;
    /**
     * The date when the alias was created
     */
    created: Date;
    /**
     * Target destination domain for redirect when the alias is a redirect
     */
    redirect?: string | null | undefined;
    /**
     * The protection bypass for the alias
     */
    protectionBypass?: {
        [k: string]: ListDeploymentAliasesProtectionBypass1 | ListDeploymentAliasesProtectionBypass2 | ListDeploymentAliasesProtectionBypass3 | ListDeploymentAliasesProtectionBypass4;
    } | undefined;
};
/**
 * The list of aliases assigned to the deployment
 */
export type ListDeploymentAliasesResponseBody = {
    /**
     * A list of the aliases assigned to the deployment
     */
    aliases: Array<Aliases>;
};
/** @internal */
export declare const ListDeploymentAliasesRequest$inboundSchema: z.ZodType<ListDeploymentAliasesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentAliasesRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListDeploymentAliasesRequest$outboundSchema: z.ZodType<ListDeploymentAliasesRequest$Outbound, z.ZodTypeDef, ListDeploymentAliasesRequest>;
export declare function listDeploymentAliasesRequestToJSON(listDeploymentAliasesRequest: ListDeploymentAliasesRequest): string;
export declare function listDeploymentAliasesRequestFromJSON(jsonString: string): SafeParseResult<ListDeploymentAliasesRequest, SDKValidationError>;
/** @internal */
export declare const ListDeploymentAliasesProtectionBypass4$inboundSchema: z.ZodType<ListDeploymentAliasesProtectionBypass4, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentAliasesProtectionBypass4$Outbound = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    scope: "email_invite";
};
/** @internal */
export declare const ListDeploymentAliasesProtectionBypass4$outboundSchema: z.ZodType<ListDeploymentAliasesProtectionBypass4$Outbound, z.ZodTypeDef, ListDeploymentAliasesProtectionBypass4>;
export declare function listDeploymentAliasesProtectionBypass4ToJSON(listDeploymentAliasesProtectionBypass4: ListDeploymentAliasesProtectionBypass4): string;
export declare function listDeploymentAliasesProtectionBypass4FromJSON(jsonString: string): SafeParseResult<ListDeploymentAliasesProtectionBypass4, SDKValidationError>;
/** @internal */
export declare const ListDeploymentAliasesProtectionBypass3$inboundSchema: z.ZodType<ListDeploymentAliasesProtectionBypass3, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentAliasesProtectionBypass3$Outbound = {
    createdAt: number;
    createdBy: string;
    scope: "alias-protection-override";
};
/** @internal */
export declare const ListDeploymentAliasesProtectionBypass3$outboundSchema: z.ZodType<ListDeploymentAliasesProtectionBypass3$Outbound, z.ZodTypeDef, ListDeploymentAliasesProtectionBypass3>;
export declare function listDeploymentAliasesProtectionBypass3ToJSON(listDeploymentAliasesProtectionBypass3: ListDeploymentAliasesProtectionBypass3): string;
export declare function listDeploymentAliasesProtectionBypass3FromJSON(jsonString: string): SafeParseResult<ListDeploymentAliasesProtectionBypass3, SDKValidationError>;
/** @internal */
export declare const ListDeploymentAliasesProtectionBypassAccess$inboundSchema: z.ZodNativeEnum<typeof ListDeploymentAliasesProtectionBypassAccess>;
/** @internal */
export declare const ListDeploymentAliasesProtectionBypassAccess$outboundSchema: z.ZodNativeEnum<typeof ListDeploymentAliasesProtectionBypassAccess>;
/** @internal */
export declare const ListDeploymentAliasesProtectionBypass2$inboundSchema: z.ZodType<ListDeploymentAliasesProtectionBypass2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentAliasesProtectionBypass2$Outbound = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    access: string;
    scope: "user";
};
/** @internal */
export declare const ListDeploymentAliasesProtectionBypass2$outboundSchema: z.ZodType<ListDeploymentAliasesProtectionBypass2$Outbound, z.ZodTypeDef, ListDeploymentAliasesProtectionBypass2>;
export declare function listDeploymentAliasesProtectionBypass2ToJSON(listDeploymentAliasesProtectionBypass2: ListDeploymentAliasesProtectionBypass2): string;
export declare function listDeploymentAliasesProtectionBypass2FromJSON(jsonString: string): SafeParseResult<ListDeploymentAliasesProtectionBypass2, SDKValidationError>;
/** @internal */
export declare const ListDeploymentAliasesProtectionBypass1$inboundSchema: z.ZodType<ListDeploymentAliasesProtectionBypass1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentAliasesProtectionBypass1$Outbound = {
    createdAt: number;
    createdBy: string;
    scope: "shareable-link";
    expires?: number | undefined;
};
/** @internal */
export declare const ListDeploymentAliasesProtectionBypass1$outboundSchema: z.ZodType<ListDeploymentAliasesProtectionBypass1$Outbound, z.ZodTypeDef, ListDeploymentAliasesProtectionBypass1>;
export declare function listDeploymentAliasesProtectionBypass1ToJSON(listDeploymentAliasesProtectionBypass1: ListDeploymentAliasesProtectionBypass1): string;
export declare function listDeploymentAliasesProtectionBypass1FromJSON(jsonString: string): SafeParseResult<ListDeploymentAliasesProtectionBypass1, SDKValidationError>;
/** @internal */
export declare const ListDeploymentAliasesProtectionBypass$inboundSchema: z.ZodType<ListDeploymentAliasesProtectionBypass, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentAliasesProtectionBypass$Outbound = ListDeploymentAliasesProtectionBypass1$Outbound | ListDeploymentAliasesProtectionBypass2$Outbound | ListDeploymentAliasesProtectionBypass3$Outbound | ListDeploymentAliasesProtectionBypass4$Outbound;
/** @internal */
export declare const ListDeploymentAliasesProtectionBypass$outboundSchema: z.ZodType<ListDeploymentAliasesProtectionBypass$Outbound, z.ZodTypeDef, ListDeploymentAliasesProtectionBypass>;
export declare function listDeploymentAliasesProtectionBypassToJSON(listDeploymentAliasesProtectionBypass: ListDeploymentAliasesProtectionBypass): string;
export declare function listDeploymentAliasesProtectionBypassFromJSON(jsonString: string): SafeParseResult<ListDeploymentAliasesProtectionBypass, SDKValidationError>;
/** @internal */
export declare const Aliases$inboundSchema: z.ZodType<Aliases, z.ZodTypeDef, unknown>;
/** @internal */
export type Aliases$Outbound = {
    uid: string;
    alias: string;
    created: string;
    redirect?: string | null | undefined;
    protectionBypass?: {
        [k: string]: ListDeploymentAliasesProtectionBypass1$Outbound | ListDeploymentAliasesProtectionBypass2$Outbound | ListDeploymentAliasesProtectionBypass3$Outbound | ListDeploymentAliasesProtectionBypass4$Outbound;
    } | undefined;
};
/** @internal */
export declare const Aliases$outboundSchema: z.ZodType<Aliases$Outbound, z.ZodTypeDef, Aliases>;
export declare function aliasesToJSON(aliases: Aliases): string;
export declare function aliasesFromJSON(jsonString: string): SafeParseResult<Aliases, SDKValidationError>;
/** @internal */
export declare const ListDeploymentAliasesResponseBody$inboundSchema: z.ZodType<ListDeploymentAliasesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDeploymentAliasesResponseBody$Outbound = {
    aliases: Array<Aliases$Outbound>;
};
/** @internal */
export declare const ListDeploymentAliasesResponseBody$outboundSchema: z.ZodType<ListDeploymentAliasesResponseBody$Outbound, z.ZodTypeDef, ListDeploymentAliasesResponseBody>;
export declare function listDeploymentAliasesResponseBodyToJSON(listDeploymentAliasesResponseBody: ListDeploymentAliasesResponseBody): string;
export declare function listDeploymentAliasesResponseBodyFromJSON(jsonString: string): SafeParseResult<ListDeploymentAliasesResponseBody, SDKValidationError>;
//# sourceMappingURL=listdeploymentaliasesop.d.ts.map