/**
 * @implements globalThis.HTMLMetaElement
 */
export class HTMLMetaElement extends HTMLElement implements globalThis.HTMLMetaElement {
    set name(value: any);
    get name(): any;
    set httpEquiv(value: any);
    get httpEquiv(): any;
    set content(value: any);
    get content(): any;
    set charset(value: any);
    get charset(): any;
    set media(value: any);
    get media(): any;
}
import { HTMLElement } from './element.js';
