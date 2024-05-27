/**
 * @implements globalThis.HTMLTimeElement
 */
export class HTMLTimeElement extends HTMLElement implements globalThis.HTMLTimeElement {
    set dateTime(value: string);
    /**
     * @type {string}
     */
    get dateTime(): string;
}
import { HTMLElement } from './element.js';
