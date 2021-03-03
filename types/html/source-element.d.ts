/**
 * @implements globalThis.HTMLSourceElement
 */
export class HTMLSourceElement extends HTMLElement implements globalThis.HTMLSourceElement {
    set src(arg: any);
    get src(): any;
    set srcset(arg: any);
    get srcset(): any;
    set sizes(arg: any);
    get sizes(): any;
    set type(arg: any);
    get type(): any;
}
import { HTMLElement } from "./element.js";
