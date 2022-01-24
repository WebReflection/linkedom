/**
 * @implements globalThis.Document
 */
export class Document extends NonElementParentNode implements globalThis.Document {
    constructor(type: any);
    /**
     * @type {globalThis.Document['defaultView']}
     */
    get defaultView(): Window & typeof globalThis;
    set doctype(arg: any);
    get doctype(): any;
    get documentElement(): any;
    createAttribute(name: any): Attr;
    createComment(textContent: any): Comment;
    createDocumentFragment(): DocumentFragment;
    createDocumentType(name: any, publicId: any, systemId: any): DocumentType;
    createElement(localName: any): Element;
    createRange(): Range;
    createTextNode(textContent: any): Text;
    createTreeWalker(root: any, whatToShow?: number): TreeWalker;
    createNodeIterator(root: any, whatToShow?: number): TreeWalker;
    createEvent(name: any): any;
    importNode(externalNode: any, ...args: any[]): any;
    getElementsByTagNameNS(_: any, name: any): NodeList;
    createAttributeNS(_: any, name: any): Attr;
    createElementNS(nsp: any, localName: any, options: any): Element | SVGElement;
    [CUSTOM_ELEMENTS]: {
        active: boolean;
        registry: any;
    };
    [MUTATION_OBSERVER]: {
        active: boolean;
        class: any;
    };
    [MIME]: any;
    /** @type {DocumentType} */
    [DOCTYPE]: DocumentType;
    [DOM_PARSER]: any;
    [IMAGE]: any;
    [EVENT_TARGET]: EventTarget;
}
import { NonElementParentNode } from "../mixin/non-element-parent-node.js";
import { Attr } from "./attr.js";
import { Comment } from "./comment.js";
import { DocumentFragment } from "./document-fragment.js";
import { DocumentType } from "./document-type.js";
import { Element } from "./element.js";
import { Range } from "./range.js";
import { Text } from "./text.js";
import { TreeWalker } from "./tree-walker.js";
import { NodeList } from "./node-list.js";
import { SVGElement } from "../svg/element.js";
import { CUSTOM_ELEMENTS } from "../shared/symbols.js";
import { MUTATION_OBSERVER } from "../shared/symbols.js";
import { MIME } from "../shared/symbols.js";
import { DOCTYPE } from "../shared/symbols.js";
import { DOM_PARSER } from "../shared/symbols.js";
import { IMAGE } from "../shared/symbols.js";
import { EVENT_TARGET } from "../shared/symbols.js";
import { EventTarget } from "./event-target.js";
