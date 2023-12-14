/**
 * @implements globalThis.HTMLDocument
 */
export class HTMLDocument extends Document implements globalThis.HTMLDocument {
    constructor();
    get all(): NodeList;
    /**
     * @type HTMLHeadElement
     */
    get head(): HTMLHeadElement;
    /**
     * @type HTMLBodyElement
     */
    get body(): HTMLBodyElement;
    set title(textContent: HTMLTitleElement);
    /**
     * @type HTMLTitleElement
     */
    get title(): HTMLTitleElement;
    createElement(localName: any, options: any): any;
}
import { Document } from '../interface/document.js';
import { NodeList } from '../interface/node-list.js';
