/**
 * @implements globalThis.HTMLImageElement
 */
export class HTMLImageElement extends HTMLElement implements globalThis.HTMLImageElement {
    set alt(value: any);
    get alt(): any;
    set sizes(value: any);
    get sizes(): any;
    set src(value: any);
    get src(): any;
    set srcset(value: any);
    get srcset(): any;
    set width(value: number);
    get width(): number;
    set height(value: number);
    get height(): number;
}
import { HTMLElement } from './element.js';
