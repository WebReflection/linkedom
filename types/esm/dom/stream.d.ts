/**
 * @typedef {import('../interface/node').Node} Node
 * @typedef {import('../svg/element').SVGElement} SVGElement
 * @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc
 */
/**
 * @template {keyof MimeToDoc} MIME
 * @extends {Writable}
 */
export class DOMStream<MIME extends keyof MimeToDoc> extends Writable {
    /**
     * @param {MIME} mimeType
     * @param {(name: string, attributes: Record<string, string>) => boolean} filter
     */
    constructor(mimeType: MIME, filter: (name: string, attributes: Record<string, string>) => boolean);
    mimeType: MIME;
    isHTML: boolean;
    filter: (name: string, attributes: Record<string, string>) => boolean;
    /**
     * @type {{
     *   document: MimeToDoc[MIME]
     *   node: MimeToDoc[MIME]|Node
     *   ownerSVGElement: SVGElement|undefined
     *   rootNode: Node
     * }[]}
     */
    stack: {
        document: MimeToDoc[MIME];
        node: MimeToDoc[MIME] | Node;
        ownerSVGElement: SVGElement | undefined;
        rootNode: Node;
    }[];
    init(): void;
    newDocument(): void;
    parserStream: WritableStream;
    doctype: string;
    /**
     * An alias for `docStream.on('document', doc => {...})`
     * @param {(doc: MimeToDoc[MIME]) => void} listener
     */
    ondocument(listener: (doc: MimeToDoc[MIME]) => void): DOMStream<MIME>;
    append(self: any, node: any, active: any): any;
    attribute(element: any, end: any, attribute: any, value: any, active: any): void;
}
export type Node = import('../interface/node').Node;
export type SVGElement = import('../svg/element').SVGElement;
export type MimeToDoc = {
    "text/html": HTMLDocument;
    "image/svg+xml": SVGDocument;
    "text/xml": XMLDocument;
};
import { Writable } from "stream";
import { WritableStream } from "htmlparser2/lib/WritableStream";
import { HTMLDocument } from "../html/document.js";
import { SVGDocument } from "../svg/document.js";
import { XMLDocument } from "../xml/document.js";
