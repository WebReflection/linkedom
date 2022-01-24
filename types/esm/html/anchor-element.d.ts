/**
 * @implements globalThis.HTMLAnchorElement
 */
export class HTMLAnchorElement extends HTMLElement implements globalThis.HTMLAnchorElement {
    set href(arg: string);
    get href(): string;
    set download(arg: string);
    get download(): string;
    set target(arg: any);
    get target(): any;
    set type(arg: any);
    get type(): any;
}
import { HTMLElement } from "./element.js";
