import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type NamespaceId = string | number;
export declare const SearchRepoQueryParamProvider: {
    readonly Github: "github";
    readonly GithubLimited: "github-limited";
    readonly GithubCustomHost: "github-custom-host";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type SearchRepoQueryParamProvider = ClosedEnum<typeof SearchRepoQueryParamProvider>;
export type SearchRepoRequest = {
    query?: string | undefined;
    namespaceId?: string | number | null | undefined;
    provider?: SearchRepoQueryParamProvider | undefined;
    installationId?: string | undefined;
    /**
     * The custom Git host if using a custom Git provider, like GitHub Enterprise Server
     */
    host?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
export declare const ResponseBodyProvider: {
    readonly Github: "github";
    readonly GithubLimited: "github-limited";
    readonly GithubCustomHost: "github-custom-host";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type ResponseBodyProvider = ClosedEnum<typeof ResponseBodyProvider>;
export type ResponseBodyNamespaceId = string | number;
export type GitAccount = {
    provider: ResponseBodyProvider;
    namespaceId: string | number | null;
};
export type ResponseBodyId = string | number;
export declare const SearchRepoResponseBodyProvider: {
    readonly Github: "github";
    readonly GithubLimited: "github-limited";
    readonly GithubCustomHost: "github-custom-host";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type SearchRepoResponseBodyProvider = ClosedEnum<typeof SearchRepoResponseBodyProvider>;
export type SearchRepoResponseBodyId = string | number;
export type Owner = {
    id: string | number;
    name: string;
};
export declare const ResponseBodyOwnerType: {
    readonly User: "user";
    readonly Team: "team";
};
export type ResponseBodyOwnerType = ClosedEnum<typeof ResponseBodyOwnerType>;
export type Repos = {
    id: string | number;
    provider: SearchRepoResponseBodyProvider;
    url: string;
    name: string;
    slug: string;
    namespace: string;
    owner: Owner;
    ownerType: ResponseBodyOwnerType;
    private: boolean;
    defaultBranch: string;
    updatedAt: number;
};
export type SearchRepoResponseBody2 = {
    gitAccount: GitAccount;
    repos: Array<Repos>;
};
export type SearchRepoResponseBody1 = {};
export type SearchRepoResponseBody = SearchRepoResponseBody2 | SearchRepoResponseBody1;
/** @internal */
export declare const NamespaceId$inboundSchema: z.ZodType<NamespaceId, z.ZodTypeDef, unknown>;
/** @internal */
export type NamespaceId$Outbound = string | number;
/** @internal */
export declare const NamespaceId$outboundSchema: z.ZodType<NamespaceId$Outbound, z.ZodTypeDef, NamespaceId>;
export declare function namespaceIdToJSON(namespaceId: NamespaceId): string;
export declare function namespaceIdFromJSON(jsonString: string): SafeParseResult<NamespaceId, SDKValidationError>;
/** @internal */
export declare const SearchRepoQueryParamProvider$inboundSchema: z.ZodNativeEnum<typeof SearchRepoQueryParamProvider>;
/** @internal */
export declare const SearchRepoQueryParamProvider$outboundSchema: z.ZodNativeEnum<typeof SearchRepoQueryParamProvider>;
/** @internal */
export declare const SearchRepoRequest$inboundSchema: z.ZodType<SearchRepoRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchRepoRequest$Outbound = {
    query?: string | undefined;
    namespaceId?: string | number | null | undefined;
    provider?: string | undefined;
    installationId?: string | undefined;
    host?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const SearchRepoRequest$outboundSchema: z.ZodType<SearchRepoRequest$Outbound, z.ZodTypeDef, SearchRepoRequest>;
export declare function searchRepoRequestToJSON(searchRepoRequest: SearchRepoRequest): string;
export declare function searchRepoRequestFromJSON(jsonString: string): SafeParseResult<SearchRepoRequest, SDKValidationError>;
/** @internal */
export declare const ResponseBodyProvider$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyProvider>;
/** @internal */
export declare const ResponseBodyProvider$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyProvider>;
/** @internal */
export declare const ResponseBodyNamespaceId$inboundSchema: z.ZodType<ResponseBodyNamespaceId, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyNamespaceId$Outbound = string | number;
/** @internal */
export declare const ResponseBodyNamespaceId$outboundSchema: z.ZodType<ResponseBodyNamespaceId$Outbound, z.ZodTypeDef, ResponseBodyNamespaceId>;
export declare function responseBodyNamespaceIdToJSON(responseBodyNamespaceId: ResponseBodyNamespaceId): string;
export declare function responseBodyNamespaceIdFromJSON(jsonString: string): SafeParseResult<ResponseBodyNamespaceId, SDKValidationError>;
/** @internal */
export declare const GitAccount$inboundSchema: z.ZodType<GitAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type GitAccount$Outbound = {
    provider: string;
    namespaceId: string | number | null;
};
/** @internal */
export declare const GitAccount$outboundSchema: z.ZodType<GitAccount$Outbound, z.ZodTypeDef, GitAccount>;
export declare function gitAccountToJSON(gitAccount: GitAccount): string;
export declare function gitAccountFromJSON(jsonString: string): SafeParseResult<GitAccount, SDKValidationError>;
/** @internal */
export declare const ResponseBodyId$inboundSchema: z.ZodType<ResponseBodyId, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBodyId$Outbound = string | number;
/** @internal */
export declare const ResponseBodyId$outboundSchema: z.ZodType<ResponseBodyId$Outbound, z.ZodTypeDef, ResponseBodyId>;
export declare function responseBodyIdToJSON(responseBodyId: ResponseBodyId): string;
export declare function responseBodyIdFromJSON(jsonString: string): SafeParseResult<ResponseBodyId, SDKValidationError>;
/** @internal */
export declare const SearchRepoResponseBodyProvider$inboundSchema: z.ZodNativeEnum<typeof SearchRepoResponseBodyProvider>;
/** @internal */
export declare const SearchRepoResponseBodyProvider$outboundSchema: z.ZodNativeEnum<typeof SearchRepoResponseBodyProvider>;
/** @internal */
export declare const SearchRepoResponseBodyId$inboundSchema: z.ZodType<SearchRepoResponseBodyId, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchRepoResponseBodyId$Outbound = string | number;
/** @internal */
export declare const SearchRepoResponseBodyId$outboundSchema: z.ZodType<SearchRepoResponseBodyId$Outbound, z.ZodTypeDef, SearchRepoResponseBodyId>;
export declare function searchRepoResponseBodyIdToJSON(searchRepoResponseBodyId: SearchRepoResponseBodyId): string;
export declare function searchRepoResponseBodyIdFromJSON(jsonString: string): SafeParseResult<SearchRepoResponseBodyId, SDKValidationError>;
/** @internal */
export declare const Owner$inboundSchema: z.ZodType<Owner, z.ZodTypeDef, unknown>;
/** @internal */
export type Owner$Outbound = {
    id: string | number;
    name: string;
};
/** @internal */
export declare const Owner$outboundSchema: z.ZodType<Owner$Outbound, z.ZodTypeDef, Owner>;
export declare function ownerToJSON(owner: Owner): string;
export declare function ownerFromJSON(jsonString: string): SafeParseResult<Owner, SDKValidationError>;
/** @internal */
export declare const ResponseBodyOwnerType$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyOwnerType>;
/** @internal */
export declare const ResponseBodyOwnerType$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyOwnerType>;
/** @internal */
export declare const Repos$inboundSchema: z.ZodType<Repos, z.ZodTypeDef, unknown>;
/** @internal */
export type Repos$Outbound = {
    id: string | number;
    provider: string;
    url: string;
    name: string;
    slug: string;
    namespace: string;
    owner: Owner$Outbound;
    ownerType: string;
    private: boolean;
    defaultBranch: string;
    updatedAt: number;
};
/** @internal */
export declare const Repos$outboundSchema: z.ZodType<Repos$Outbound, z.ZodTypeDef, Repos>;
export declare function reposToJSON(repos: Repos): string;
export declare function reposFromJSON(jsonString: string): SafeParseResult<Repos, SDKValidationError>;
/** @internal */
export declare const SearchRepoResponseBody2$inboundSchema: z.ZodType<SearchRepoResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchRepoResponseBody2$Outbound = {
    gitAccount: GitAccount$Outbound;
    repos: Array<Repos$Outbound>;
};
/** @internal */
export declare const SearchRepoResponseBody2$outboundSchema: z.ZodType<SearchRepoResponseBody2$Outbound, z.ZodTypeDef, SearchRepoResponseBody2>;
export declare function searchRepoResponseBody2ToJSON(searchRepoResponseBody2: SearchRepoResponseBody2): string;
export declare function searchRepoResponseBody2FromJSON(jsonString: string): SafeParseResult<SearchRepoResponseBody2, SDKValidationError>;
/** @internal */
export declare const SearchRepoResponseBody1$inboundSchema: z.ZodType<SearchRepoResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchRepoResponseBody1$Outbound = {};
/** @internal */
export declare const SearchRepoResponseBody1$outboundSchema: z.ZodType<SearchRepoResponseBody1$Outbound, z.ZodTypeDef, SearchRepoResponseBody1>;
export declare function searchRepoResponseBody1ToJSON(searchRepoResponseBody1: SearchRepoResponseBody1): string;
export declare function searchRepoResponseBody1FromJSON(jsonString: string): SafeParseResult<SearchRepoResponseBody1, SDKValidationError>;
/** @internal */
export declare const SearchRepoResponseBody$inboundSchema: z.ZodType<SearchRepoResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchRepoResponseBody$Outbound = SearchRepoResponseBody2$Outbound | SearchRepoResponseBody1$Outbound;
/** @internal */
export declare const SearchRepoResponseBody$outboundSchema: z.ZodType<SearchRepoResponseBody$Outbound, z.ZodTypeDef, SearchRepoResponseBody>;
export declare function searchRepoResponseBodyToJSON(searchRepoResponseBody: SearchRepoResponseBody): string;
export declare function searchRepoResponseBodyFromJSON(jsonString: string): SafeParseResult<SearchRepoResponseBody, SDKValidationError>;
//# sourceMappingURL=searchrepoop.d.ts.map