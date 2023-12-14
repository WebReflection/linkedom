/**
 * @implements globalThis.HTMLButtonElement
 */
export class HTMLButtonElement extends HTMLElement implements globalThis.HTMLButtonElement {
    set disabled(value: any);
    get disabled(): any;
    set name(value: any);
    get name(): any;
    set type(value: any);
    get type(): any;
}
import { HTMLElement } from './element.js';
