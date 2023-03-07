/**
 * @implements globalThis.HTMLMetaElement
 */
export class HTMLMetaElement extends HTMLElement implements globalThis.HTMLMetaElement {
    set name(arg: any);
    get name(): any;
    set httpEquiv(arg: any);
    get httpEquiv(): any;
    set content(arg: any);
    get content(): any;
    set charset(arg: any);
    get charset(): any;
    set media(arg: any);
    get media(): any;
}
import { HTMLElement } from "./element.js";
