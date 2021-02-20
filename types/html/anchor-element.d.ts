/**
 * @implements globalThis.HTMLAnchorElement
 */
export class HTMLAnchorElement extends HTMLElement implements globalThis.HTMLAnchorElement {
    set href(arg: any);
    get href(): any;
    set download(arg: any);
    get download(): any;
    set target(arg: any);
    get target(): any;
    set type(arg: any);
    get type(): any;
}
import { HTMLElement } from "./element.js";
