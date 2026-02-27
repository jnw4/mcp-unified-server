import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteWebhookRequest = {
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
/** @internal */
export declare const DeleteWebhookRequest$inboundSchema: z.ZodType<DeleteWebhookRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteWebhookRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const DeleteWebhookRequest$outboundSchema: z.ZodType<DeleteWebhookRequest$Outbound, z.ZodTypeDef, DeleteWebhookRequest>;
export declare function deleteWebhookRequestToJSON(deleteWebhookRequest: DeleteWebhookRequest): string;
export declare function deleteWebhookRequestFromJSON(jsonString: string): SafeParseResult<DeleteWebhookRequest, SDKValidationError>;
//# sourceMappingURL=deletewebhookop.d.ts.map