/**
 * @implements globalThis.Node
 */
export class Node implements globalThis.Node {
    static get ELEMENT_NODE(): number;
    static get ATTRIBUTE_NODE(): number;
    static get TEXT_NODE(): number;
    static get COMMENT_NODE(): number;
    static get DOCUMENT_NODE(): number;
    static get DOCUMENT_FRAGMENT_NODE(): number;
    static get DOCUMENT_TYPE_NODE(): number;
    constructor(ownerDocument: any, localName: any, nodeType: any);
    ownerDocument: any;
    localName: any;
    nodeType: any;
    parentNode: any;
    get ELEMENT_NODE(): number;
    get ATTRIBUTE_NODE(): number;
    get TEXT_NODE(): number;
    get COMMENT_NODE(): number;
    get DOCUMENT_NODE(): number;
    get DOCUMENT_FRAGMENT_NODE(): number;
    get DOCUMENT_TYPE_NODE(): number;
    get isConnected(): boolean;
    get nodeName(): any;
    get parentElement(): any;
    get previousSibling(): any;
    get previousElementSibling(): any;
    get nextSibling(): any;
    get nextElementSibling(): any;
    get childNodes(): NodeList;
    get firstChild(): any;
    get lastChild(): any;
    set nodeValue(arg: any);
    get nodeValue(): any;
    set textContent(arg: any);
    get textContent(): any;
    normalize(): void;
    cloneNode(): any;
    contains(): boolean;
    insertBefore(): void;
    appendChild(): void;
    replaceChild(): void;
    removeChild(): void;
    toString(): string;
    hasChildNodes(): boolean;
    isSameNode(node: any): boolean;
    compareDocumentPosition(target: any): number;
    isEqualNode(node: any): boolean;
    getRootNode(): any;
    [NEXT]: any;
    [PREV]: any;
}
import { NodeList } from "./node-list.js";
import { NEXT } from "../shared/symbols.js";
import { PREV } from "../shared/symbols.js";
