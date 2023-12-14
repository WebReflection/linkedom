/** @typedef { import('../interface/element.js').Element & {
    [typeof NEXT]: NodeStruct,
    [typeof PREV]: NodeStruct,
    [typeof START]: NodeStruct,
    nodeType: typeof ATTRIBUTE_NODE | typeof DOCUMENT_FRAGMENT_NODE | typeof ELEMENT_NODE | typeof TEXT_NODE | typeof NODE_END | typeof COMMENT_NODE | typeof CDATA_SECTION_NODE,
    ownerDocument: Document,
    parentNode: ParentNode,
}} NodeStruct */
export class ParentNode extends Node {
    get children(): NodeList;
    /**
     * @returns {NodeStruct | null}
     */
    get firstChild(): NodeStruct;
    /**
     * @returns {NodeStruct | null}
     */
    get firstElementChild(): NodeStruct;
    get lastElementChild(): any;
    get childElementCount(): number;
    prepend(...nodes: any[]): void;
    append(...nodes: any[]): void;
    replaceChildren(...nodes: any[]): void;
    getElementsByClassName(className: any): NodeList;
    getElementsByTagName(tagName: any): NodeList;
    querySelector(selectors: any): any;
    querySelectorAll(selectors: any): NodeList;
    appendChild(node: any): any;
    contains(node: any): boolean;
    insertBefore(node: any, before?: any): any;
    removeChild(node: any): any;
    replaceChild(node: any, replaced: any): any;
    [PRIVATE]: any;
    [END]: NodeStruct;
}
export type NodeStruct = import('../interface/element.js').Element & {
    [typeof NEXT]: NodeStruct;
    [typeof PREV]: NodeStruct;
    [typeof START]: NodeStruct;
    nodeType: typeof ATTRIBUTE_NODE | typeof DOCUMENT_FRAGMENT_NODE | typeof ELEMENT_NODE | typeof TEXT_NODE | typeof NODE_END | typeof COMMENT_NODE | typeof CDATA_SECTION_NODE;
    ownerDocument: Document;
    parentNode: ParentNode;
};
import { Node } from '../interface/node.js';
import { NodeList } from '../interface/node-list.js';
import { PRIVATE } from '../shared/symbols.js';
import { END } from '../shared/symbols.js';
import { NEXT } from '../shared/symbols.js';
import { PREV } from '../shared/symbols.js';
import { START } from '../shared/symbols.js';
import { ATTRIBUTE_NODE } from '../shared/constants.js';
import { DOCUMENT_FRAGMENT_NODE } from '../shared/constants.js';
import { ELEMENT_NODE } from '../shared/constants.js';
import { TEXT_NODE } from '../shared/constants.js';
import { NODE_END } from '../shared/constants.js';
import { COMMENT_NODE } from '../shared/constants.js';
import { CDATA_SECTION_NODE } from '../shared/constants.js';
