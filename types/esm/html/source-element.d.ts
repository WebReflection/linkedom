/**
 * @implements globalThis.HTMLSourceElement
 */
export class HTMLSourceElement extends HTMLElement implements globalThis.HTMLSourceElement {
    set src(value: any);
    get src(): any;
    set srcset(value: any);
    get srcset(): any;
    set sizes(value: any);
    get sizes(): any;
    set type(value: any);
    get type(): any;
}
import { HTMLElement } from './element.js';
