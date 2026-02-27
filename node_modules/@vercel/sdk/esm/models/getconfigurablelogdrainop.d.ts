import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetConfigurableLogDrainRequest = {
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
export declare const GetConfigurableLogDrainFramework: {
    readonly Blitzjs: "blitzjs";
    readonly Nextjs: "nextjs";
    readonly Gatsby: "gatsby";
    readonly Remix: "remix";
    readonly ReactRouter: "react-router";
    readonly Astro: "astro";
    readonly Hexo: "hexo";
    readonly Eleventy: "eleventy";
    readonly Docusaurus2: "docusaurus-2";
    readonly Docusaurus: "docusaurus";
    readonly Preact: "preact";
    readonly Solidstart1: "solidstart-1";
    readonly Solidstart: "solidstart";
    readonly Dojo: "dojo";
    readonly Ember: "ember";
    readonly Vue: "vue";
    readonly Scully: "scully";
    readonly IonicAngular: "ionic-angular";
    readonly Angular: "angular";
    readonly Polymer: "polymer";
    readonly Svelte: "svelte";
    readonly Sveltekit: "sveltekit";
    readonly Sveltekit1: "sveltekit-1";
    readonly IonicReact: "ionic-react";
    readonly CreateReactApp: "create-react-app";
    readonly Gridsome: "gridsome";
    readonly Umijs: "umijs";
    readonly Sapper: "sapper";
    readonly Saber: "saber";
    readonly Stencil: "stencil";
    readonly Nuxtjs: "nuxtjs";
    readonly Redwoodjs: "redwoodjs";
    readonly Hugo: "hugo";
    readonly Jekyll: "jekyll";
    readonly Brunch: "brunch";
    readonly Middleman: "middleman";
    readonly Zola: "zola";
    readonly Hydrogen: "hydrogen";
    readonly Vite: "vite";
    readonly TanstackStart: "tanstack-start";
    readonly Vitepress: "vitepress";
    readonly Vuepress: "vuepress";
    readonly Parcel: "parcel";
    readonly Fastapi: "fastapi";
    readonly Flask: "flask";
    readonly Fasthtml: "fasthtml";
    readonly Django: "django";
    readonly SanityV3: "sanity-v3";
    readonly Sanity: "sanity";
    readonly Storybook: "storybook";
    readonly Nitro: "nitro";
    readonly Hono: "hono";
    readonly Express: "express";
    readonly H3: "h3";
    readonly Koa: "koa";
    readonly Nestjs: "nestjs";
    readonly Elysia: "elysia";
    readonly Fastify: "fastify";
    readonly Xmcp: "xmcp";
    readonly Python: "python";
    readonly Ruby: "ruby";
    readonly Rust: "rust";
    readonly Node: "node";
    readonly Go: "go";
    readonly Services: "services";
};
export type GetConfigurableLogDrainFramework = ClosedEnum<typeof GetConfigurableLogDrainFramework>;
export type ProjectsMetadata = {
    id: string;
    name: string;
    framework?: GetConfigurableLogDrainFramework | null | undefined;
    latestDeployment?: string | undefined;
};
export type GetConfigurableLogDrainResponseBody = {
    createdFrom: string;
    clientId?: string | undefined;
    configurationId?: string | undefined;
    projectsMetadata?: Array<ProjectsMetadata> | null | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
};
/** @internal */
export declare const GetConfigurableLogDrainRequest$inboundSchema: z.ZodType<GetConfigurableLogDrainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurableLogDrainRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetConfigurableLogDrainRequest$outboundSchema: z.ZodType<GetConfigurableLogDrainRequest$Outbound, z.ZodTypeDef, GetConfigurableLogDrainRequest>;
export declare function getConfigurableLogDrainRequestToJSON(getConfigurableLogDrainRequest: GetConfigurableLogDrainRequest): string;
export declare function getConfigurableLogDrainRequestFromJSON(jsonString: string): SafeParseResult<GetConfigurableLogDrainRequest, SDKValidationError>;
/** @internal */
export declare const GetConfigurableLogDrainFramework$inboundSchema: z.ZodNativeEnum<typeof GetConfigurableLogDrainFramework>;
/** @internal */
export declare const GetConfigurableLogDrainFramework$outboundSchema: z.ZodNativeEnum<typeof GetConfigurableLogDrainFramework>;
/** @internal */
export declare const ProjectsMetadata$inboundSchema: z.ZodType<ProjectsMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type ProjectsMetadata$Outbound = {
    id: string;
    name: string;
    framework?: string | null | undefined;
    latestDeployment?: string | undefined;
};
/** @internal */
export declare const ProjectsMetadata$outboundSchema: z.ZodType<ProjectsMetadata$Outbound, z.ZodTypeDef, ProjectsMetadata>;
export declare function projectsMetadataToJSON(projectsMetadata: ProjectsMetadata): string;
export declare function projectsMetadataFromJSON(jsonString: string): SafeParseResult<ProjectsMetadata, SDKValidationError>;
/** @internal */
export declare const GetConfigurableLogDrainResponseBody$inboundSchema: z.ZodType<GetConfigurableLogDrainResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetConfigurableLogDrainResponseBody$Outbound = {
    createdFrom: string;
    clientId?: string | undefined;
    configurationId?: string | undefined;
    projectsMetadata?: Array<ProjectsMetadata$Outbound> | null | undefined;
    integrationIcon?: string | undefined;
    integrationConfigurationUri?: string | undefined;
    integrationWebsite?: string | undefined;
};
/** @internal */
export declare const GetConfigurableLogDrainResponseBody$outboundSchema: z.ZodType<GetConfigurableLogDrainResponseBody$Outbound, z.ZodTypeDef, GetConfigurableLogDrainResponseBody>;
export declare function getConfigurableLogDrainResponseBodyToJSON(getConfigurableLogDrainResponseBody: GetConfigurableLogDrainResponseBody): string;
export declare function getConfigurableLogDrainResponseBodyFromJSON(jsonString: string): SafeParseResult<GetConfigurableLogDrainResponseBody, SDKValidationError>;
//# sourceMappingURL=getconfigurablelogdrainop.d.ts.map