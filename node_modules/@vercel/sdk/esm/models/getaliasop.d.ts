import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetAliasRequest = {
    /**
     * Get the alias only if it was created after the provided timestamp
     */
    from?: number | undefined;
    /**
     * The alias or alias ID to be retrieved
     */
    idOrAlias: string;
    /**
     * Get the alias only if it is assigned to the provided project ID
     */
    projectId?: string | undefined;
    /**
     * Get the alias only if it was created after this JavaScript timestamp
     */
    since?: number | undefined;
    /**
     * Get the alias only if it was created before this JavaScript timestamp
     */
    until?: number | undefined;
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
export type GetAliasCreator = {
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
export type GetAliasDeployment = {
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
export type ProtectionBypass4 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    scope: "email_invite";
};
/**
 * The protection bypass for the alias
 */
export type ProtectionBypass3 = {
    createdAt: number;
    createdBy: string;
    scope: "alias-protection-override";
};
export declare const ProtectionBypassAccess: {
    readonly Requested: "requested";
    readonly Granted: "granted";
};
export type ProtectionBypassAccess = ClosedEnum<typeof ProtectionBypassAccess>;
/**
 * The protection bypass for the alias
 */
export type GetAliasProtectionBypass2 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    access: ProtectionBypassAccess;
    scope: "user";
};
/**
 * The protection bypass for the alias
 */
export type GetAliasProtectionBypass1 = {
    createdAt: number;
    createdBy: string;
    scope: "shareable-link";
    expires?: number | undefined;
};
export type GetAliasProtectionBypass = GetAliasProtectionBypass1 | GetAliasProtectionBypass2 | ProtectionBypass3 | ProtectionBypass4;
export type DefaultApp = {
    projectId: string;
};
/**
 * A list of the deployment routing information for each project.
 */
export type Applications3 = {
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
export type Applications2 = {
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
export type Applications1 = {
    /**
     * This is always set. In production it is used as a pointer to each apps production deployment. For pre-production, it's used as the fallback if there is no deployment for the branch.
     */
    fallbackHost: string;
    /**
     * The project ID of the microfrontends application.
     */
    projectId: string;
};
export type Applications = Array<Applications1> | Array<Applications2> | Array<Applications3>;
/**
 * The microfrontends for the alias including the routing configuration
 */
export type GetAliasMicrofrontends = {
    defaultApp: DefaultApp;
    applications: Array<Applications1> | Array<Applications2> | Array<Applications3>;
};
/**
 * The alias information
 */
export type GetAliasResponseBody = {
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
    createdAt?: number | null | undefined;
    /**
     * Information of the user who created the alias
     */
    creator?: GetAliasCreator | undefined;
    /**
     * The date when the alias was deleted in milliseconds since the UNIX epoch
     */
    deletedAt?: number | null | undefined;
    /**
     * A map with the deployment ID, URL and metadata
     */
    deployment?: GetAliasDeployment | undefined;
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
    updatedAt?: number | null | undefined;
    /**
     * The protection bypass for the alias
     */
    protectionBypass?: {
        [k: string]: GetAliasProtectionBypass1 | GetAliasProtectionBypass2 | ProtectionBypass3 | ProtectionBypass4;
    } | undefined;
    /**
     * The microfrontends for the alias including the routing configuration
     */
    microfrontends?: GetAliasMicrofrontends | undefined;
};
/** @internal */
export declare const GetAliasRequest$inboundSchema: z.ZodType<GetAliasRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAliasRequest$Outbound = {
    from?: number | undefined;
    idOrAlias: string;
    projectId?: string | undefined;
    since?: number | undefined;
    until?: number | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetAliasRequest$outboundSchema: z.ZodType<GetAliasRequest$Outbound, z.ZodTypeDef, GetAliasRequest>;
export declare function getAliasRequestToJSON(getAliasRequest: GetAliasRequest): string;
export declare function getAliasRequestFromJSON(jsonString: string): SafeParseResult<GetAliasRequest, SDKValidationError>;
/** @internal */
export declare const GetAliasCreator$inboundSchema: z.ZodType<GetAliasCreator, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAliasCreator$Outbound = {
    uid: string;
    email: string;
    username: string;
};
/** @internal */
export declare const GetAliasCreator$outboundSchema: z.ZodType<GetAliasCreator$Outbound, z.ZodTypeDef, GetAliasCreator>;
export declare function getAliasCreatorToJSON(getAliasCreator: GetAliasCreator): string;
export declare function getAliasCreatorFromJSON(jsonString: string): SafeParseResult<GetAliasCreator, SDKValidationError>;
/** @internal */
export declare const GetAliasDeployment$inboundSchema: z.ZodType<GetAliasDeployment, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAliasDeployment$Outbound = {
    id: string;
    url: string;
    meta?: string | undefined;
};
/** @internal */
export declare const GetAliasDeployment$outboundSchema: z.ZodType<GetAliasDeployment$Outbound, z.ZodTypeDef, GetAliasDeployment>;
export declare function getAliasDeploymentToJSON(getAliasDeployment: GetAliasDeployment): string;
export declare function getAliasDeploymentFromJSON(jsonString: string): SafeParseResult<GetAliasDeployment, SDKValidationError>;
/** @internal */
export declare const ProtectionBypass4$inboundSchema: z.ZodType<ProtectionBypass4, z.ZodTypeDef, unknown>;
/** @internal */
export type ProtectionBypass4$Outbound = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    scope: "email_invite";
};
/** @internal */
export declare const ProtectionBypass4$outboundSchema: z.ZodType<ProtectionBypass4$Outbound, z.ZodTypeDef, ProtectionBypass4>;
export declare function protectionBypass4ToJSON(protectionBypass4: ProtectionBypass4): string;
export declare function protectionBypass4FromJSON(jsonString: string): SafeParseResult<ProtectionBypass4, SDKValidationError>;
/** @internal */
export declare const ProtectionBypass3$inboundSchema: z.ZodType<ProtectionBypass3, z.ZodTypeDef, unknown>;
/** @internal */
export type ProtectionBypass3$Outbound = {
    createdAt: number;
    createdBy: string;
    scope: "alias-protection-override";
};
/** @internal */
export declare const ProtectionBypass3$outboundSchema: z.ZodType<ProtectionBypass3$Outbound, z.ZodTypeDef, ProtectionBypass3>;
export declare function protectionBypass3ToJSON(protectionBypass3: ProtectionBypass3): string;
export declare function protectionBypass3FromJSON(jsonString: string): SafeParseResult<ProtectionBypass3, SDKValidationError>;
/** @internal */
export declare const ProtectionBypassAccess$inboundSchema: z.ZodNativeEnum<typeof ProtectionBypassAccess>;
/** @internal */
export declare const ProtectionBypassAccess$outboundSchema: z.ZodNativeEnum<typeof ProtectionBypassAccess>;
/** @internal */
export declare const GetAliasProtectionBypass2$inboundSchema: z.ZodType<GetAliasProtectionBypass2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAliasProtectionBypass2$Outbound = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    access: string;
    scope: "user";
};
/** @internal */
export declare const GetAliasProtectionBypass2$outboundSchema: z.ZodType<GetAliasProtectionBypass2$Outbound, z.ZodTypeDef, GetAliasProtectionBypass2>;
export declare function getAliasProtectionBypass2ToJSON(getAliasProtectionBypass2: GetAliasProtectionBypass2): string;
export declare function getAliasProtectionBypass2FromJSON(jsonString: string): SafeParseResult<GetAliasProtectionBypass2, SDKValidationError>;
/** @internal */
export declare const GetAliasProtectionBypass1$inboundSchema: z.ZodType<GetAliasProtectionBypass1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAliasProtectionBypass1$Outbound = {
    createdAt: number;
    createdBy: string;
    scope: "shareable-link";
    expires?: number | undefined;
};
/** @internal */
export declare const GetAliasProtectionBypass1$outboundSchema: z.ZodType<GetAliasProtectionBypass1$Outbound, z.ZodTypeDef, GetAliasProtectionBypass1>;
export declare function getAliasProtectionBypass1ToJSON(getAliasProtectionBypass1: GetAliasProtectionBypass1): string;
export declare function getAliasProtectionBypass1FromJSON(jsonString: string): SafeParseResult<GetAliasProtectionBypass1, SDKValidationError>;
/** @internal */
export declare const GetAliasProtectionBypass$inboundSchema: z.ZodType<GetAliasProtectionBypass, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAliasProtectionBypass$Outbound = GetAliasProtectionBypass1$Outbound | GetAliasProtectionBypass2$Outbound | ProtectionBypass3$Outbound | ProtectionBypass4$Outbound;
/** @internal */
export declare const GetAliasProtectionBypass$outboundSchema: z.ZodType<GetAliasProtectionBypass$Outbound, z.ZodTypeDef, GetAliasProtectionBypass>;
export declare function getAliasProtectionBypassToJSON(getAliasProtectionBypass: GetAliasProtectionBypass): string;
export declare function getAliasProtectionBypassFromJSON(jsonString: string): SafeParseResult<GetAliasProtectionBypass, SDKValidationError>;
/** @internal */
export declare const DefaultApp$inboundSchema: z.ZodType<DefaultApp, z.ZodTypeDef, unknown>;
/** @internal */
export type DefaultApp$Outbound = {
    projectId: string;
};
/** @internal */
export declare const DefaultApp$outboundSchema: z.ZodType<DefaultApp$Outbound, z.ZodTypeDef, DefaultApp>;
export declare function defaultAppToJSON(defaultApp: DefaultApp): string;
export declare function defaultAppFromJSON(jsonString: string): SafeParseResult<DefaultApp, SDKValidationError>;
/** @internal */
export declare const Applications3$inboundSchema: z.ZodType<Applications3, z.ZodTypeDef, unknown>;
/** @internal */
export type Applications3$Outbound = {
    deploymentId?: string | undefined;
    branchDeploymentId?: string | undefined;
    fallbackDeploymentId?: string | undefined;
    fallbackHost?: string | undefined;
    branchAlias?: string | undefined;
    projectId: string;
};
/** @internal */
export declare const Applications3$outboundSchema: z.ZodType<Applications3$Outbound, z.ZodTypeDef, Applications3>;
export declare function applications3ToJSON(applications3: Applications3): string;
export declare function applications3FromJSON(jsonString: string): SafeParseResult<Applications3, SDKValidationError>;
/** @internal */
export declare const Applications2$inboundSchema: z.ZodType<Applications2, z.ZodTypeDef, unknown>;
/** @internal */
export type Applications2$Outbound = {
    fallbackHost: string;
    branchAlias: string;
    projectId: string;
};
/** @internal */
export declare const Applications2$outboundSchema: z.ZodType<Applications2$Outbound, z.ZodTypeDef, Applications2>;
export declare function applications2ToJSON(applications2: Applications2): string;
export declare function applications2FromJSON(jsonString: string): SafeParseResult<Applications2, SDKValidationError>;
/** @internal */
export declare const Applications1$inboundSchema: z.ZodType<Applications1, z.ZodTypeDef, unknown>;
/** @internal */
export type Applications1$Outbound = {
    fallbackHost: string;
    projectId: string;
};
/** @internal */
export declare const Applications1$outboundSchema: z.ZodType<Applications1$Outbound, z.ZodTypeDef, Applications1>;
export declare function applications1ToJSON(applications1: Applications1): string;
export declare function applications1FromJSON(jsonString: string): SafeParseResult<Applications1, SDKValidationError>;
/** @internal */
export declare const Applications$inboundSchema: z.ZodType<Applications, z.ZodTypeDef, unknown>;
/** @internal */
export type Applications$Outbound = Array<Applications1$Outbound> | Array<Applications2$Outbound> | Array<Applications3$Outbound>;
/** @internal */
export declare const Applications$outboundSchema: z.ZodType<Applications$Outbound, z.ZodTypeDef, Applications>;
export declare function applicationsToJSON(applications: Applications): string;
export declare function applicationsFromJSON(jsonString: string): SafeParseResult<Applications, SDKValidationError>;
/** @internal */
export declare const GetAliasMicrofrontends$inboundSchema: z.ZodType<GetAliasMicrofrontends, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAliasMicrofrontends$Outbound = {
    defaultApp: DefaultApp$Outbound;
    applications: Array<Applications1$Outbound> | Array<Applications2$Outbound> | Array<Applications3$Outbound>;
};
/** @internal */
export declare const GetAliasMicrofrontends$outboundSchema: z.ZodType<GetAliasMicrofrontends$Outbound, z.ZodTypeDef, GetAliasMicrofrontends>;
export declare function getAliasMicrofrontendsToJSON(getAliasMicrofrontends: GetAliasMicrofrontends): string;
export declare function getAliasMicrofrontendsFromJSON(jsonString: string): SafeParseResult<GetAliasMicrofrontends, SDKValidationError>;
/** @internal */
export declare const GetAliasResponseBody$inboundSchema: z.ZodType<GetAliasResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAliasResponseBody$Outbound = {
    alias: string;
    created: string;
    createdAt?: number | null | undefined;
    creator?: GetAliasCreator$Outbound | undefined;
    deletedAt?: number | null | undefined;
    deployment?: GetAliasDeployment$Outbound | undefined;
    deploymentId: string | null;
    projectId: string | null;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
    uid: string;
    updatedAt?: number | null | undefined;
    protectionBypass?: {
        [k: string]: GetAliasProtectionBypass1$Outbound | GetAliasProtectionBypass2$Outbound | ProtectionBypass3$Outbound | ProtectionBypass4$Outbound;
    } | undefined;
    microfrontends?: GetAliasMicrofrontends$Outbound | undefined;
};
/** @internal */
export declare const GetAliasResponseBody$outboundSchema: z.ZodType<GetAliasResponseBody$Outbound, z.ZodTypeDef, GetAliasResponseBody>;
export declare function getAliasResponseBodyToJSON(getAliasResponseBody: GetAliasResponseBody): string;
export declare function getAliasResponseBodyFromJSON(jsonString: string): SafeParseResult<GetAliasResponseBody, SDKValidationError>;
//# sourceMappingURL=getaliasop.d.ts.map