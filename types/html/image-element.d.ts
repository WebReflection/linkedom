/**
 * @implements globalThis.HTMLImageElement
 */
export class HTMLImageElement extends HTMLElement implements globalThis.HTMLImageElement {
    set alt(arg: any);
    get alt(): any;
    set sizes(arg: any);
    get sizes(): any;
    set src(arg: any);
    get src(): any;
    set srcset(arg: any);
    get srcset(): any;
    set width(arg: number);
    get width(): number;
    set height(arg: number);
    get height(): number;
}
import { HTMLElement } from "./element.js";
