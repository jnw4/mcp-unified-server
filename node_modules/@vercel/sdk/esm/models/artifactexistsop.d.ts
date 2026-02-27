import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type ArtifactExistsRequest = {
    /**
     * The artifact hash
     */
    hash: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};
/** @internal */
export declare const ArtifactExistsRequest$inboundSchema: z.ZodType<ArtifactExistsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ArtifactExistsRequest$Outbound = {
    hash: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const ArtifactExistsRequest$outboundSchema: z.ZodType<ArtifactExistsRequest$Outbound, z.ZodTypeDef, ArtifactExistsRequest>;
export declare function artifactExistsRequestToJSON(artifactExistsRequest: ArtifactExistsRequest): string;
export declare function artifactExistsRequestFromJSON(jsonString: string): SafeParseResult<ArtifactExistsRequest, SDKValidationError>;
//# sourceMappingURL=artifactexistsop.d.ts.map