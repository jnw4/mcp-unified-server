import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { VercelError } from "./vercelerror.js";
export declare const LanguageCodeRequiredCode: {
    readonly LanguageCodeRequired: "language_code_required";
};
export type LanguageCodeRequiredCode = ClosedEnum<typeof LanguageCodeRequiredCode>;
/**
 * A language code is required for punycode domains.
 */
export type LanguageCodeRequiredData = {
    status: number;
    code: LanguageCodeRequiredCode;
    message: string;
};
/**
 * A language code is required for punycode domains.
 */
export declare class LanguageCodeRequired extends VercelError {
    status: number;
    code: LanguageCodeRequiredCode;
    /** The original data that was passed to this error instance. */
    data$: LanguageCodeRequiredData;
    constructor(err: LanguageCodeRequiredData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const LanguageCodeRequiredCode$inboundSchema: z.ZodNativeEnum<typeof LanguageCodeRequiredCode>;
/** @internal */
export declare const LanguageCodeRequiredCode$outboundSchema: z.ZodNativeEnum<typeof LanguageCodeRequiredCode>;
/** @internal */
export declare const LanguageCodeRequired$inboundSchema: z.ZodType<LanguageCodeRequired, z.ZodTypeDef, unknown>;
/** @internal */
export type LanguageCodeRequired$Outbound = {
    status: number;
    code: string;
    message: string;
};
/** @internal */
export declare const LanguageCodeRequired$outboundSchema: z.ZodType<LanguageCodeRequired$Outbound, z.ZodTypeDef, LanguageCodeRequired>;
//# sourceMappingURL=languagecoderequired.d.ts.map