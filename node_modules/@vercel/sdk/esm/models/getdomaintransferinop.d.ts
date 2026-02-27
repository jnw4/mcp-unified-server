import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { Forbidden, Forbidden$Outbound } from "./forbidden.js";
import { NotAuthorizedForScope, NotAuthorizedForScope$Outbound } from "./notauthorizedforscope.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetDomainTransferInRequest = {
    domain: string;
    teamId?: string | undefined;
};
/**
 * NotAuthorizedForScope
 */
export type GetDomainTransferInDomainsRegistrarResponseBody = (NotAuthorizedForScope & {
    code: "not_authorized_for_scope";
}) | Forbidden;
export declare const GetDomainTransferInStatus: {
    readonly Canceled: "canceled";
    readonly CanceledPendingRefund: "canceled_pending_refund";
    readonly Completed: "completed";
    readonly Created: "created";
    readonly Failed: "failed";
    readonly Pending: "pending";
    readonly PendingInsert: "pending_insert";
    readonly PendingNewAuthCode: "pending_new_auth_code";
    readonly PendingTransfer: "pending_transfer";
    readonly PendingUnlock: "pending_unlock";
    readonly PendingRegistryUnlock: "pending_registry_unlock";
    readonly Rejected: "rejected";
    readonly SubmittingTransfer: "submitting_transfer";
};
export type GetDomainTransferInStatus = ClosedEnum<typeof GetDomainTransferInStatus>;
/**
 * Success
 */
export type GetDomainTransferInResponseBody = {
    status: GetDomainTransferInStatus;
};
/** @internal */
export declare const GetDomainTransferInRequest$inboundSchema: z.ZodType<GetDomainTransferInRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainTransferInRequest$Outbound = {
    domain: string;
    teamId?: string | undefined;
};
/** @internal */
export declare const GetDomainTransferInRequest$outboundSchema: z.ZodType<GetDomainTransferInRequest$Outbound, z.ZodTypeDef, GetDomainTransferInRequest>;
export declare function getDomainTransferInRequestToJSON(getDomainTransferInRequest: GetDomainTransferInRequest): string;
export declare function getDomainTransferInRequestFromJSON(jsonString: string): SafeParseResult<GetDomainTransferInRequest, SDKValidationError>;
/** @internal */
export declare const GetDomainTransferInDomainsRegistrarResponseBody$inboundSchema: z.ZodType<GetDomainTransferInDomainsRegistrarResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainTransferInDomainsRegistrarResponseBody$Outbound = (NotAuthorizedForScope$Outbound & {
    code: "not_authorized_for_scope";
}) | Forbidden$Outbound;
/** @internal */
export declare const GetDomainTransferInDomainsRegistrarResponseBody$outboundSchema: z.ZodType<GetDomainTransferInDomainsRegistrarResponseBody$Outbound, z.ZodTypeDef, unknown>;
export declare function getDomainTransferInDomainsRegistrarResponseBodyToJSON(getDomainTransferInDomainsRegistrarResponseBody: GetDomainTransferInDomainsRegistrarResponseBody): string;
export declare function getDomainTransferInDomainsRegistrarResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDomainTransferInDomainsRegistrarResponseBody, SDKValidationError>;
/** @internal */
export declare const GetDomainTransferInStatus$inboundSchema: z.ZodNativeEnum<typeof GetDomainTransferInStatus>;
/** @internal */
export declare const GetDomainTransferInStatus$outboundSchema: z.ZodNativeEnum<typeof GetDomainTransferInStatus>;
/** @internal */
export declare const GetDomainTransferInResponseBody$inboundSchema: z.ZodType<GetDomainTransferInResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetDomainTransferInResponseBody$Outbound = {
    status: string;
};
/** @internal */
export declare const GetDomainTransferInResponseBody$outboundSchema: z.ZodType<GetDomainTransferInResponseBody$Outbound, z.ZodTypeDef, GetDomainTransferInResponseBody>;
export declare function getDomainTransferInResponseBodyToJSON(getDomainTransferInResponseBody: GetDomainTransferInResponseBody): string;
export declare function getDomainTransferInResponseBodyFromJSON(jsonString: string): SafeParseResult<GetDomainTransferInResponseBody, SDKValidationError>;
//# sourceMappingURL=getdomaintransferinop.d.ts.map