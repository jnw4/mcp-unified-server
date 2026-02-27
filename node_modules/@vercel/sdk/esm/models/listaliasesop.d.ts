import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { Pagination, Pagination$Outbound } from "./pagination.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
/**
 * Get only aliases of the given domain name
 */
export type Domain = Array<string> | string;
export type ListAliasesRequest = {
    /**
     * Get only aliases of the given domain name
     */
    domain?: Array<string> | string | undefined;
    /**
     * Get only aliases created after the provided timestamp
     */
    from?: number | undefined;
    /**
     * Maximum number of aliases to list from a request
     */
    limit?: number | undefined;
    /**
     * Filter aliases from the given `projectId`
     */
    projectId?: string | undefined;
    /**
     * Get aliases created after this JavaScript timestamp
     */
    since?: number | undefined;
    /**
     * Get aliases created before this JavaScript timestamp
     */
    until?: number | undefined;
    /**
     * Get aliases that would be rolled back for the given deployment
     */
    rollbackDeploymentId?: string | undefined;
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
 * Information of the user who created the alias
 */
export type ListAliasesCreator = {
    /**
     * ID of the user who created the alias
     */
    uid: string;
    /**
     * Email of the user who created the alias
     */
    email: string;
    /**
     * Username of the user who created the alias
     */
    username: string;
};
/**
 * A map with the deployment ID, URL and metadata
 */
export type ListAliasesDeployment = {
    /**
     * The deployment unique identifier
     */
    id: string;
    /**
     * The deployment unique URL
     */
    url: string;
    /**
     * The deployment metadata
     */
    meta?: string | undefined;
};
/**
 * The protection bypass for the alias
 */
export type ListAliasesProtectionBypass4 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    scope: "email_invite";
};
/**
 * The protection bypass for the alias
 */
export type ListAliasesProtectionBypass3 = {
    createdAt: number;
    createdBy: string;
    scope: "alias-protection-override";
};
export declare const ListAliasesProtectionBypassAccess: {
    readonly Requested: "requested";
    readonly Granted: "granted";
};
export type ListAliasesProtectionBypassAccess = ClosedEnum<typeof ListAliasesProtectionBypassAccess>;
/**
 * The protection bypass for the alias
 */
export type ListAliasesProtectionBypass2 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    access: ListAliasesProtectionBypassAccess;
    scope: "user";
};
/**
 * The protection bypass for the alias
 */
export type ListAliasesProtectionBypass1 = {
    createdAt: number;
    createdBy: string;
    scope: "shareable-link";
    expires?: number | undefined;
};
export type ListAliasesProtectionBypass = ListAliasesProtectionBypass1 | ListAliasesProtectionBypass2 | ListAliasesProtectionBypass3 | ListAliasesProtectionBypass4;
export type ListAliasesDefaultApp = {
    projectId: string;
};
/**
 * A list of the deployment routing information for each project.
 */
export type ListAliasesApplications3 = {
    /**
     * This is the deployment for the same commit, it could be a cancelled deployment. The proxy will fallback to the branchDeploymentId and then the fallbackDeploymentId.
     */
    deploymentId?: string | undefined;
    /**
     * This is the latest non-cancelled deployment of the branch alias at the time the commit alias was created. It is possible there is no deployment for the branch, or this was set before the deployment was canceled, in which case this will point to a cancelled deployment, in either case the proxy will fallback to the fallbackDeploymentId.
     */
    branchDeploymentId?: string | undefined;
    /**
     * This is the deployment of the fallback host at the time the commit alias was created. It is possible for this to be a deleted deployment, in which case the proxy will show that the deployment is deleted. It will not use the fallbackHost, as a future deployment on the fallback host could be invalid for this deployment, and it could lead to confusion / incorrect behavior for the commit alias.
     */
    fallbackDeploymentId?: string | undefined;
    /**
     * Temporary for backwards compatibility. Can remove when metadata change is released
     */
    fallbackHost?: string | undefined;
    branchAlias?: string | undefined;
    /**
     * The project ID of the microfrontends application.
     */
    projectId: string;
};
/**
 * A list of the deployment routing information for each project.
 */
export type ListAliasesApplications2 = {
    /**
     * This is always set. For branch aliases, it's used as the fallback if there is no deployment for the branch.
     */
    fallbackHost: string;
    /**
     * Could point to a branch without a deployment if the project was never deployed. The proxy will fallback to the fallbackHost if there is no deployment.
     */
    branchAlias: string;
    /**
     * The project ID of the microfrontends application.
     */
    projectId: string;
};
/**
 * A list of the deployment routing information for each project.
 */
export type ListAliasesApplications1 = {
    /**
     * This is always set. In production it is used as a pointer to each apps production deployment. For pre-production, it's used as the fallback if there is no deployment for the branch.
     */
    fallbackHost: string;
    /**
     * The project ID of the microfrontends application.
     */
    projectId: string;
};
export type ListAliasesApplications = Array<ListAliasesApplications1> | Array<ListAliasesApplications2> | Array<ListAliasesApplications3>;
/**
 * The microfrontends for the alias including the routing configuration
 */
export type ListAliasesMicrofrontends = {
    defaultApp: ListAliasesDefaultApp;
    applications: Array<ListAliasesApplications1> | Array<ListAliasesApplications2> | Array<ListAliasesApplications3>;
};
export type ListAliasesAliases = {
    /**
     * The alias name, it could be a `.vercel.app` subdomain or a custom domain
     */
    alias: string;
    /**
     * The date when the alias was created
     */
    created: Date;
    /**
     * The date when the alias was created in milliseconds since the UNIX epoch
     */
    createdAt?: number | undefined;
    /**
     * Information of the user who created the alias
     */
    creator?: ListAliasesCreator | undefined;
    /**
     * The date when the alias was deleted in milliseconds since the UNIX epoch
     */
    deletedAt?: number | null | undefined;
    /**
     * A map with the deployment ID, URL and metadata
     */
    deployment?: ListAliasesDeployment | undefined;
    /**
     * The deployment ID
     */
    deploymentId: string | null;
    /**
     * The unique identifier of the project
     */
    projectId: string | null;
    /**
     * Target destination domain for redirect when the alias is a redirect
     */
    redirect?: string | null | undefined;
    /**
     * Status code to be used on redirect
     */
    redirectStatusCode?: number | null | undefined;
    /**
     * The unique identifier of the alias
     */
    uid: string;
    /**
     * The date when the alias was updated in milliseconds since the UNIX epoch
     */
    updatedAt?: number | undefined;
    /**
     * The protection bypass for the alias
     */
    protectionBypass?: {
        [k: string]: ListAliasesProtectionBypass1 | ListAliasesProtectionBypass2 | ListAliasesProtectionBypass3 | ListAliasesProtectionBypass4;
    } | undefined;
    /**
     * The microfrontends for the alias including the routing configuration
     */
    microfrontends?: ListAliasesMicrofrontends | undefined;
};
/**
 * The paginated list of aliases
 */
export type ListAliasesResponseBody = {
    aliases: Array<ListAliasesAliases>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};
/** @internal */
export declare const Domain$inboundSchema: z.ZodType<Domain, z.ZodTypeDef, unknown>;
/** @internal */
export type Domain$Outbound = Array<string> | string;
/** @internal */
export declare const Domain$outboundSchema: z.ZodType<Domain$Outbound, z.ZodTypeDef, Domain>;
export declare function domainToJSON(domain: Domain): string;
export declare function domainFromJSON(jsonString: string): SafeParseResult<Domain, SDKValidationError>;
/** @internal */
export declare const ListAliasesRequest$inboundSchema: z.ZodType<ListAliasesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesRequest$Outbound = {
    domain?: Array<string> | string | undefined;
    from?: number | undefined;
    limit?: number | undefined;
    projectId?: string | undefined;
    since?: number | undefined;
    until?: number | undefined;
    rollbackDeploymentId?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ListAliasesRequest$outboundSchema: z.ZodType<ListAliasesRequest$Outbound, z.ZodTypeDef, ListAliasesRequest>;
export declare function listAliasesRequestToJSON(listAliasesRequest: ListAliasesRequest): string;
export declare function listAliasesRequestFromJSON(jsonString: string): SafeParseResult<ListAliasesRequest, SDKValidationError>;
/** @internal */
export declare const ListAliasesCreator$inboundSchema: z.ZodType<ListAliasesCreator, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesCreator$Outbound = {
    uid: string;
    email: string;
    username: string;
};
/** @internal */
export declare const ListAliasesCreator$outboundSchema: z.ZodType<ListAliasesCreator$Outbound, z.ZodTypeDef, ListAliasesCreator>;
export declare function listAliasesCreatorToJSON(listAliasesCreator: ListAliasesCreator): string;
export declare function listAliasesCreatorFromJSON(jsonString: string): SafeParseResult<ListAliasesCreator, SDKValidationError>;
/** @internal */
export declare const ListAliasesDeployment$inboundSchema: z.ZodType<ListAliasesDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesDeployment$Outbound = {
    id: string;
    url: string;
    meta?: string | undefined;
};
/** @internal */
export declare const ListAliasesDeployment$outboundSchema: z.ZodType<ListAliasesDeployment$Outbound, z.ZodTypeDef, ListAliasesDeployment>;
export declare function listAliasesDeploymentToJSON(listAliasesDeployment: ListAliasesDeployment): string;
export declare function listAliasesDeploymentFromJSON(jsonString: string): SafeParseResult<ListAliasesDeployment, SDKValidationError>;
/** @internal */
export declare const ListAliasesProtectionBypass4$inboundSchema: z.ZodType<ListAliasesProtectionBypass4, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesProtectionBypass4$Outbound = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    scope: "email_invite";
};
/** @internal */
export declare const ListAliasesProtectionBypass4$outboundSchema: z.ZodType<ListAliasesProtectionBypass4$Outbound, z.ZodTypeDef, ListAliasesProtectionBypass4>;
export declare function listAliasesProtectionBypass4ToJSON(listAliasesProtectionBypass4: ListAliasesProtectionBypass4): string;
export declare function listAliasesProtectionBypass4FromJSON(jsonString: string): SafeParseResult<ListAliasesProtectionBypass4, SDKValidationError>;
/** @internal */
export declare const ListAliasesProtectionBypass3$inboundSchema: z.ZodType<ListAliasesProtectionBypass3, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesProtectionBypass3$Outbound = {
    createdAt: number;
    createdBy: string;
    scope: "alias-protection-override";
};
/** @internal */
export declare const ListAliasesProtectionBypass3$outboundSchema: z.ZodType<ListAliasesProtectionBypass3$Outbound, z.ZodTypeDef, ListAliasesProtectionBypass3>;
export declare function listAliasesProtectionBypass3ToJSON(listAliasesProtectionBypass3: ListAliasesProtectionBypass3): string;
export declare function listAliasesProtectionBypass3FromJSON(jsonString: string): SafeParseResult<ListAliasesProtectionBypass3, SDKValidationError>;
/** @internal */
export declare const ListAliasesProtectionBypassAccess$inboundSchema: z.ZodNativeEnum<typeof ListAliasesProtectionBypassAccess>;
/** @internal */
export declare const ListAliasesProtectionBypassAccess$outboundSchema: z.ZodNativeEnum<typeof ListAliasesProtectionBypassAccess>;
/** @internal */
export declare const ListAliasesProtectionBypass2$inboundSchema: z.ZodType<ListAliasesProtectionBypass2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesProtectionBypass2$Outbound = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    access: string;
    scope: "user";
};
/** @internal */
export declare const ListAliasesProtectionBypass2$outboundSchema: z.ZodType<ListAliasesProtectionBypass2$Outbound, z.ZodTypeDef, ListAliasesProtectionBypass2>;
export declare function listAliasesProtectionBypass2ToJSON(listAliasesProtectionBypass2: ListAliasesProtectionBypass2): string;
export declare function listAliasesProtectionBypass2FromJSON(jsonString: string): SafeParseResult<ListAliasesProtectionBypass2, SDKValidationError>;
/** @internal */
export declare const ListAliasesProtectionBypass1$inboundSchema: z.ZodType<ListAliasesProtectionBypass1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesProtectionBypass1$Outbound = {
    createdAt: number;
    createdBy: string;
    scope: "shareable-link";
    expires?: number | undefined;
};
/** @internal */
export declare const ListAliasesProtectionBypass1$outboundSchema: z.ZodType<ListAliasesProtectionBypass1$Outbound, z.ZodTypeDef, ListAliasesProtectionBypass1>;
export declare function listAliasesProtectionBypass1ToJSON(listAliasesProtectionBypass1: ListAliasesProtectionBypass1): string;
export declare function listAliasesProtectionBypass1FromJSON(jsonString: string): SafeParseResult<ListAliasesProtectionBypass1, SDKValidationError>;
/** @internal */
export declare const ListAliasesProtectionBypass$inboundSchema: z.ZodType<ListAliasesProtectionBypass, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesProtectionBypass$Outbound = ListAliasesProtectionBypass1$Outbound | ListAliasesProtectionBypass2$Outbound | ListAliasesProtectionBypass3$Outbound | ListAliasesProtectionBypass4$Outbound;
/** @internal */
export declare const ListAliasesProtectionBypass$outboundSchema: z.ZodType<ListAliasesProtectionBypass$Outbound, z.ZodTypeDef, ListAliasesProtectionBypass>;
export declare function listAliasesProtectionBypassToJSON(listAliasesProtectionBypass: ListAliasesProtectionBypass): string;
export declare function listAliasesProtectionBypassFromJSON(jsonString: string): SafeParseResult<ListAliasesProtectionBypass, SDKValidationError>;
/** @internal */
export declare const ListAliasesDefaultApp$inboundSchema: z.ZodType<ListAliasesDefaultApp, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesDefaultApp$Outbound = {
    projectId: string;
};
/** @internal */
export declare const ListAliasesDefaultApp$outboundSchema: z.ZodType<ListAliasesDefaultApp$Outbound, z.ZodTypeDef, ListAliasesDefaultApp>;
export declare function listAliasesDefaultAppToJSON(listAliasesDefaultApp: ListAliasesDefaultApp): string;
export declare function listAliasesDefaultAppFromJSON(jsonString: string): SafeParseResult<ListAliasesDefaultApp, SDKValidationError>;
/** @internal */
export declare const ListAliasesApplications3$inboundSchema: z.ZodType<ListAliasesApplications3, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesApplications3$Outbound = {
    deploymentId?: string | undefined;
    branchDeploymentId?: string | undefined;
    fallbackDeploymentId?: string | undefined;
    fallbackHost?: string | undefined;
    branchAlias?: string | undefined;
    projectId: string;
};
/** @internal */
export declare const ListAliasesApplications3$outboundSchema: z.ZodType<ListAliasesApplications3$Outbound, z.ZodTypeDef, ListAliasesApplications3>;
export declare function listAliasesApplications3ToJSON(listAliasesApplications3: ListAliasesApplications3): string;
export declare function listAliasesApplications3FromJSON(jsonString: string): SafeParseResult<ListAliasesApplications3, SDKValidationError>;
/** @internal */
export declare const ListAliasesApplications2$inboundSchema: z.ZodType<ListAliasesApplications2, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesApplications2$Outbound = {
    fallbackHost: string;
    branchAlias: string;
    projectId: string;
};
/** @internal */
export declare const ListAliasesApplications2$outboundSchema: z.ZodType<ListAliasesApplications2$Outbound, z.ZodTypeDef, ListAliasesApplications2>;
export declare function listAliasesApplications2ToJSON(listAliasesApplications2: ListAliasesApplications2): string;
export declare function listAliasesApplications2FromJSON(jsonString: string): SafeParseResult<ListAliasesApplications2, SDKValidationError>;
/** @internal */
export declare const ListAliasesApplications1$inboundSchema: z.ZodType<ListAliasesApplications1, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesApplications1$Outbound = {
    fallbackHost: string;
    projectId: string;
};
/** @internal */
export declare const ListAliasesApplications1$outboundSchema: z.ZodType<ListAliasesApplications1$Outbound, z.ZodTypeDef, ListAliasesApplications1>;
export declare function listAliasesApplications1ToJSON(listAliasesApplications1: ListAliasesApplications1): string;
export declare function listAliasesApplications1FromJSON(jsonString: string): SafeParseResult<ListAliasesApplications1, SDKValidationError>;
/** @internal */
export declare const ListAliasesApplications$inboundSchema: z.ZodType<ListAliasesApplications, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesApplications$Outbound = Array<ListAliasesApplications1$Outbound> | Array<ListAliasesApplications2$Outbound> | Array<ListAliasesApplications3$Outbound>;
/** @internal */
export declare const ListAliasesApplications$outboundSchema: z.ZodType<ListAliasesApplications$Outbound, z.ZodTypeDef, ListAliasesApplications>;
export declare function listAliasesApplicationsToJSON(listAliasesApplications: ListAliasesApplications): string;
export declare function listAliasesApplicationsFromJSON(jsonString: string): SafeParseResult<ListAliasesApplications, SDKValidationError>;
/** @internal */
export declare const ListAliasesMicrofrontends$inboundSchema: z.ZodType<ListAliasesMicrofrontends, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesMicrofrontends$Outbound = {
    defaultApp: ListAliasesDefaultApp$Outbound;
    applications: Array<ListAliasesApplications1$Outbound> | Array<ListAliasesApplications2$Outbound> | Array<ListAliasesApplications3$Outbound>;
};
/** @internal */
export declare const ListAliasesMicrofrontends$outboundSchema: z.ZodType<ListAliasesMicrofrontends$Outbound, z.ZodTypeDef, ListAliasesMicrofrontends>;
export declare function listAliasesMicrofrontendsToJSON(listAliasesMicrofrontends: ListAliasesMicrofrontends): string;
export declare function listAliasesMicrofrontendsFromJSON(jsonString: string): SafeParseResult<ListAliasesMicrofrontends, SDKValidationError>;
/** @internal */
export declare const ListAliasesAliases$inboundSchema: z.ZodType<ListAliasesAliases, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesAliases$Outbound = {
    alias: string;
    created: string;
    createdAt?: number | undefined;
    creator?: ListAliasesCreator$Outbound | undefined;
    deletedAt?: number | null | undefined;
    deployment?: ListAliasesDeployment$Outbound | undefined;
    deploymentId: string | null;
    projectId: string | null;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
    uid: string;
    updatedAt?: number | undefined;
    protectionBypass?: {
        [k: string]: ListAliasesProtectionBypass1$Outbound | ListAliasesProtectionBypass2$Outbound | ListAliasesProtectionBypass3$Outbound | ListAliasesProtectionBypass4$Outbound;
    } | undefined;
    microfrontends?: ListAliasesMicrofrontends$Outbound | undefined;
};
/** @internal */
export declare const ListAliasesAliases$outboundSchema: z.ZodType<ListAliasesAliases$Outbound, z.ZodTypeDef, ListAliasesAliases>;
export declare function listAliasesAliasesToJSON(listAliasesAliases: ListAliasesAliases): string;
export declare function listAliasesAliasesFromJSON(jsonString: string): SafeParseResult<ListAliasesAliases, SDKValidationError>;
/** @internal */
export declare const ListAliasesResponseBody$inboundSchema: z.ZodType<ListAliasesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAliasesResponseBody$Outbound = {
    aliases: Array<ListAliasesAliases$Outbound>;
    pagination: Pagination$Outbound;
};
/** @internal */
export declare const ListAliasesResponseBody$outboundSchema: z.ZodType<ListAliasesResponseBody$Outbound, z.ZodTypeDef, ListAliasesResponseBody>;
export declare function listAliasesResponseBodyToJSON(listAliasesResponseBody: ListAliasesResponseBody): string;
export declare function listAliasesResponseBodyFromJSON(jsonString: string): SafeParseResult<ListAliasesResponseBody, SDKValidationError>;
//# sourceMappingURL=listaliasesop.d.ts.map