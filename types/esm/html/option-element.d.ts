/**
 * @implements globalThis.HTMLOptionElement
 */
export class HTMLOptionElement extends HTMLElement implements globalThis.HTMLOptionElement {
    set value(arg: any);
    get value(): any;
    set selected(arg: any);
    get selected(): any;
}
import { HTMLElement } from "./element.js";
