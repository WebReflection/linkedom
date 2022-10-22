/**
 * @implements globalThis.DOMParser
 */
export class DOMParser implements globalThis.DOMParser {
    /** @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc */
    /**
     * @template {string|NodeJS.ReadableStream} INPUT
     * @template {keyof MimeToDoc} MIME
     * @param {INPUT} markupLanguage
     * @param {MIME} mimeType
     * @returns {INPUT extends string ? MimeToDoc[MIME] : Promise<MimeToDoc[MIME]>}
     */
    parseFromString<INPUT extends string | NodeJS.ReadableStream, MIME extends keyof {
        "text/html": HTMLDocument;
        "image/svg+xml": SVGDocument;
        "text/xml": XMLDocument;
    }>(markupLanguage: INPUT, mimeType: MIME, globals?: any): INPUT extends string ? {
        "text/html": HTMLDocument;
        "image/svg+xml": SVGDocument;
        "text/xml": XMLDocument;
    }[MIME] : Promise<{
        "text/html": HTMLDocument;
        "image/svg+xml": SVGDocument;
        "text/xml": XMLDocument;
    }[MIME]>;
}
import { HTMLDocument } from "../html/document.js";
import { SVGDocument } from "../svg/document.js";
import { XMLDocument } from "../xml/document.js";
