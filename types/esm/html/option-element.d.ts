/**
 * @implements globalThis.HTMLOptionElement
 */
export class HTMLOptionElement extends HTMLElement implements globalThis.HTMLOptionElement {
    set value(value: any);
    get value(): any;
    set selected(value: any);
    get selected(): any;
}
import { HTMLElement } from './element.js';
