/**
 * @implements globalThis.HTMLAnchorElement
 */
export class HTMLAnchorElement extends HTMLElement implements globalThis.HTMLAnchorElement {
    set href(value: string);
    get href(): string;
    set download(value: string);
    get download(): string;
    set target(value: any);
    get target(): any;
    set type(value: any);
    get type(): any;
}
import { HTMLElement } from './element.js';
