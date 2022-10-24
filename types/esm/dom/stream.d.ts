/// <reference types="node" />
/**
 * @typedef {import('../interface/node').Node} Node
 * @typedef {import('../svg/element').SVGElement} SVGElement
 * @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc
 * @typedef {(name: string, attributes: Record<string, string>) => boolean} Filter
 */
/**
 * @template {keyof MimeToDoc} MIME
 * @template {Filter} FILTER
 * @template {{
 *   document: MimeToDoc[MIME]
 *   node: MimeToDoc[MIME]|Node
 *   ownerSVGElement: SVGElement|undefined
 *   rootNode: Node
 * }} StackItem
 * @template {Writable['on'] & (name: 'document', listener: (doc: MimeToDoc[MIME]) => void) => this} Listener
 * @template {Writable['emit'] & (name: 'document', doc: MimeToDoc[MIME]) => boolean} Emitter
 *
 * @property {MIME} mimeType
 * @property {FILTER} filter
 *
 * @property {MIME extends 'text/html' ? true : false} isHTML
 * @property {StackItem[]} stack
 * @property {string} doctype
 * @extends {Writable}
 */
export class DOMStream<MIME extends keyof MimeToDoc, FILTER extends Filter, StackItem extends {
    document: MimeToDoc[MIME];
    node: MimeToDoc[MIME] | Node;
    ownerSVGElement: SVGElement | undefined;
    rootNode: Node;
}, Listener extends {
    (event: "close", listener: () => void): Writable;
    (event: "drain", listener: () => void): Writable;
    (event: "error", listener: (err: Error) => void): Writable;
    (event: "finish", listener: () => void): Writable;
    (event: "pipe", listener: (src: import("stream").Readable) => void): Writable;
    (event: "unpipe", listener: (src: import("stream").Readable) => void): Writable;
    (event: string | symbol, listener: (...args: any[]) => void): Writable;
} & ((name: 'document', listener: (doc: MimeToDoc[MIME]) => void) => any), Emitter extends {
    (event: "close"): boolean;
    (event: "drain"): boolean;
    (event: "error", err: Error): boolean;
    (event: "finish"): boolean;
    (event: "pipe", src: import("stream").Readable): boolean;
    (event: "unpipe", src: import("stream").Readable): boolean;
    (event: string | symbol, ...args: any[]): boolean;
} & ((name: 'document', doc: MimeToDoc[MIME]) => boolean)> extends Writable {
    /**
     * @param {MIME} mimeType
     * @param {FILTER} filter
     */
    constructor(mimeType: MIME, filter: FILTER);
    mimeType: MIME;
    isHTML: boolean;
    filter: FILTER;
    /** @type {StackItem[]} */
    stack: StackItem[];
    init(): void;
    newDocument(): void;
    content: any;
    doctype: any;
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
export type Filter = (name: string, attributes: Record<string, string>) => boolean;
import { Writable } from "stream";
import { HTMLDocument } from "../html/document.js";
import { SVGDocument } from "../svg/document.js";
import { XMLDocument } from "../xml/document.js";
