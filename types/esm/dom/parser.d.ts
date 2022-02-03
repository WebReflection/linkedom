/**
 * @implements globalThis.DOMParser
 */
export class DOMParser implements globalThis.DOMParser {
    /** @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc */
    /** @typedef {{ [x: symbol]: unknown, [MIME] : string }} Config */
    /**
     * @template {keyof MimeToDoc} MIME
     * @param {string} markupLanguage
     * @param {Config | string} config
     * @returns {MimeToDoc[MIME]}
     */
    parseFromString<MIME extends keyof {
        "text/html": HTMLDocument;
        "image/svg+xml": SVGDocument;
        "text/xml": XMLDocument;
    }>(markupLanguage: string, config: string | {
        [x: symbol]: unknown;
        [MIME]: string;
    }): {
        "text/html": HTMLDocument;
        "image/svg+xml": SVGDocument;
        "text/xml": XMLDocument;
    }[MIME];
}
import { HTMLDocument } from "../html/document.js";
import { SVGDocument } from "../svg/document.js";
import { XMLDocument } from "../xml/document.js";
import { MIME } from "../shared/symbols.js";
