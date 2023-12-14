/**
 * @implements globalThis.HTMLSlotElement
 */
export class HTMLSlotElement extends HTMLElement implements globalThis.HTMLSlotElement {
    set name(value: any);
    get name(): any;
    assign(): void;
    assignedNodes(options: any): any[];
    assignedElements(options: any): any[];
}
import { HTMLElement } from './element.js';
