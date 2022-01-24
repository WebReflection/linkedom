/**
 * @implements globalThis.HTMLCanvasElement
 */
export class HTMLCanvasElement extends HTMLElement implements globalThis.HTMLCanvasElement {
    set width(arg: any);
    get width(): any;
    set height(arg: any);
    get height(): any;
    getContext(type: any): any;
    toDataURL(...args: any[]): any;
    [IMAGE]: any;
}
import { HTMLElement } from "./element.js";
import { IMAGE } from "../shared/symbols.js";
