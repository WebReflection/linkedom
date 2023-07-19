/**
 * @implements globalThis.Node
 */
export class Node extends EventTarget implements globalThis.Node {
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
    get baseURI(): any;
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
    /**
     * Inserts a node before a reference node as a child of this parent node.
     * @param {Node} newNode The node to be inserted.
     * @param {Node} referenceNode The node before which newNode is inserted. If this is null, then newNode is inserted at the end of node's child nodes.
     * @returns The added child
     */
    insertBefore(newNode: Node, referenceNode: Node): Node;
    /**
     * Adds a node to the end of the list of children of this node.
     * @param {Node} child The node to append to the given parent node.
     * @returns The appended child.
     */
    appendChild(child: Node): Node;
    /**
     * Replaces a child node within this node
     * @param {Node} newChild The new node to replace oldChild.
     * @param {Node} oldChild The child to be replaced.
     * @returns The replaced Node. This is the same node as oldChild.
     */
    replaceChild(newChild: Node, oldChild: Node): Node;
    /**
     * Removes a child node from the DOM.
     * @param {Node} child A Node that is the child node to be removed from the DOM.
     * @returns The removed node.
     */
    removeChild(child: Node): Node;
    hasChildNodes(): boolean;
    isSameNode(node: any): boolean;
    compareDocumentPosition(target: any): number;
    isEqualNode(node: any): boolean;
    /**
     * Calling it on an element inside a standard web page will return an HTMLDocument object representing the entire page (or <iframe>).
     * Calling it on an element inside a shadow DOM will return the associated ShadowRoot.
     * @return {ShadowRoot | HTMLDocument}
     */
    getRootNode(): ShadowRoot | HTMLDocument;
    [NEXT]: any;
    [PREV]: any;
}
import { EventTarget } from "./event-target.js";
import { NodeList } from "./node-list.js";
import { NEXT } from "../shared/symbols.js";
import { PREV } from "../shared/symbols.js";
