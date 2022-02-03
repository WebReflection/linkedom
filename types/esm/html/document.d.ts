/** @typedef {{ [WINDOW] : Object }} Context */
/**
 * @constructor
 * @param {Context} context
 */
export class HTMLDocument extends _HTMLDocument {
    constructor(context?: {});
    set location(arg: any);
    get location(): any;
    [WINDOW]: {
        set: (target: any, name: any, value: any) => any;
        get: (target: any, name: any) => any;
    };
}
export type Context = {
    [WINDOW]: any;
};
/**
 * @implements globalThis.HTMLDocument
 */
declare class _HTMLDocument extends Document implements globalThis.HTMLDocument {
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
}
import { WINDOW } from "../shared/symbols.js";
import { Document } from "../interface/document.js";
import { NodeList } from "../interface/node-list.js";
export {};
