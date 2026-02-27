import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const QueryParamProvider: {
    readonly Github: "github";
    readonly GithubLimited: "github-limited";
    readonly GithubCustomHost: "github-custom-host";
    readonly Gitlab: "gitlab";
    readonly Bitbucket: "bitbucket";
};
export type QueryParamProvider = ClosedEnum<typeof QueryParamProvider>;
export type GitNamespacesRequest = {
    /**
     * The custom Git host if using a custom Git provider, like GitHub Enterprise Server
     */
    host?: string | undefined;
    provider?: QueryParamProvider | undefined;
};
export type GitNamespacesId = string | number;
export type GitNamespacesResponseBody = {
    provider: string;
    slug: string;
    id: string | number;
    ownerType: string;
    name?: string | undefined;
    isAccessRestricted?: boolean | undefined;
    installationId?: number | undefined;
    requireReauth?: boolean | undefined;
};
/** @internal */
export declare const QueryParamProvider$inboundSchema: z.ZodNativeEnum<typeof QueryParamProvider>;
/** @internal */
export declare const QueryParamProvider$outboundSchema: z.ZodNativeEnum<typeof QueryParamProvider>;
/** @internal */
export declare const GitNamespacesRequest$inboundSchema: z.ZodType<GitNamespacesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GitNamespacesRequest$Outbound = {
    host?: string | undefined;
    provider?: string | undefined;
};
/** @internal */
export declare const GitNamespacesRequest$outboundSchema: z.ZodType<GitNamespacesRequest$Outbound, z.ZodTypeDef, GitNamespacesRequest>;
export declare function gitNamespacesRequestToJSON(gitNamespacesRequest: GitNamespacesRequest): string;
export declare function gitNamespacesRequestFromJSON(jsonString: string): SafeParseResult<GitNamespacesRequest, SDKValidationError>;
/** @internal */
export declare const GitNamespacesId$inboundSchema: z.ZodType<GitNamespacesId, z.ZodTypeDef, unknown>;
/** @internal */
export type GitNamespacesId$Outbound = string | number;
/** @internal */
export declare const GitNamespacesId$outboundSchema: z.ZodType<GitNamespacesId$Outbound, z.ZodTypeDef, GitNamespacesId>;
export declare function gitNamespacesIdToJSON(gitNamespacesId: GitNamespacesId): string;
export declare function gitNamespacesIdFromJSON(jsonString: string): SafeParseResult<GitNamespacesId, SDKValidationError>;
/** @internal */
export declare const GitNamespacesResponseBody$inboundSchema: z.ZodType<GitNamespacesResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GitNamespacesResponseBody$Outbound = {
    provider: string;
    slug: string;
    id: string | number;
    ownerType: string;
    name?: string | undefined;
    isAccessRestricted?: boolean | undefined;
    installationId?: number | undefined;
    requireReauth?: boolean | undefined;
};
/** @internal */
export declare const GitNamespacesResponseBody$outboundSchema: z.ZodType<GitNamespacesResponseBody$Outbound, z.ZodTypeDef, GitNamespacesResponseBody>;
export declare function gitNamespacesResponseBodyToJSON(gitNamespacesResponseBody: GitNamespacesResponseBody): string;
export declare function gitNamespacesResponseBodyFromJSON(jsonString: string): SafeParseResult<GitNamespacesResponseBody, SDKValidationError>;
//# sourceMappingURL=gitnamespacesop.d.ts.map