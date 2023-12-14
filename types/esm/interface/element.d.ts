/**
 * @implements globalThis.Element
 */
export class Element extends ParentNode implements globalThis.Element {
    constructor(ownerDocument: any, localName: any);
    get namespaceURI(): string;
    before(...nodes: any[]): void;
    after(...nodes: any[]): void;
    replaceWith(...nodes: any[]): void;
    remove(): void;
    set id(value: any);
    get id(): any;
    set className(value: any);
    get className(): any;
    get tagName(): any;
    get classList(): any;
    get dataset(): any;
    getBoundingClientRect(): {
        x: number;
        y: number;
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
    };
    set nonce(value: any);
    get nonce(): any;
    get style(): any;
    set tabIndex(value: number);
    get tabIndex(): number;
    set slot(value: any);
    get slot(): any;
    get innerText(): string;
    set textContent(text: string);
    /**
     * @returns {String}
     */
    get textContent(): string;
    set innerHTML(html: string);
    get innerHTML(): string;
    set outerHTML(html: string);
    get outerHTML(): string;
    get attributes(): any;
    focus(): void;
    getAttribute(name: any): any;
    getAttributeNode(name: any): any;
    getAttributeNames(): NodeList;
    hasAttribute(name: any): boolean;
    hasAttributes(): boolean;
    removeAttribute(name: any): void;
    removeAttributeNode(attribute: any): void;
    setAttribute(name: any, value: any): void;
    setAttributeNode(attribute: any): any;
    toggleAttribute(name: any, force: any, ...args: any[]): boolean;
    get shadowRoot(): any;
    attachShadow(init: any): ShadowRoot;
    matches(selectors: any): boolean;
    closest(selectors: any): this;
    insertAdjacentElement(position: any, element: any): any;
    insertAdjacentHTML(position: any, html: any): void;
    insertAdjacentText(position: any, text: any): void;
    cloneNode(deep?: boolean): any;
    toJSON(): any[];
    getAttributeNS(_: any, name: any): any;
    getElementsByTagNameNS(_: any, name: any): NodeList;
    hasAttributeNS(_: any, name: any): boolean;
    removeAttributeNS(_: any, name: any): void;
    setAttributeNS(_: any, name: any, value: any): void;
    setAttributeNodeNS(attr: any): any;
    [CLASS_LIST]: any;
    [DATASET]: any;
    [STYLE]: any;
}
import { ParentNode } from '../mixin/parent-node.js';
import { NodeList } from './node-list.js';
import { ShadowRoot } from './shadow-root.js';
import { CLASS_LIST } from '../shared/symbols.js';
import { DATASET } from '../shared/symbols.js';
import { STYLE } from '../shared/symbols.js';
