/**
 * @implements globalThis.HTMLIFrameElement
 */
export class HTMLIFrameElement extends HTMLElement implements globalThis.HTMLIFrameElement {
    set src(value: any);
    get src(): any;
    set srcdoc(value: any);
    get srcdoc(): any;
    set name(value: any);
    get name(): any;
    set allow(value: any);
    get allow(): any;
    set allowFullscreen(value: any);
    get allowFullscreen(): any;
    set referrerPolicy(value: any);
    get referrerPolicy(): any;
    set loading(value: any);
    get loading(): any;
}
import { HTMLElement } from './element.js';
