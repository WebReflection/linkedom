export class HTMLDocument extends Document {
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
    set title(arg: HTMLTitleElement);
    /**
     * @type HTMLTitleElement
     */
    get title(): HTMLTitleElement;
    createElement(localName: any, options: any): any;
}
import { Document } from "../interface/document.js";
import { NodeList } from "../interface/node-list.js";
