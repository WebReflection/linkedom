/**
 * @implements globalThis.DOMParser
 */
export class DOMParser implements globalThis.DOMParser {
    /** @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc */
    /**
     * @template {keyof MimeToDoc} MIME
     * @param {string} markupLanguage
     * @param {MIME} mimeType
     * @returns {MimeToDoc[MIME]}
     */
    parseFromString<MIME extends keyof MimeToDoc>(markupLanguage: string, mimeType: MIME): MimeToDoc[MIME];
}
export type MimeToDoc = {
    "text/html": HTMLDocument;
    "image/svg+xml": SVGDocument;
    "text/xml": XMLDocument;
};
import { HTMLDocument } from "../html/document.js";
import { SVGDocument } from "../svg/document.js";
import { XMLDocument } from "../xml/document.js";
