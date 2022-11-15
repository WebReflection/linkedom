/**
 * @implements globalThis.HTMLIFrameElement
 */
export class HTMLIFrameElement extends HTMLElement implements globalThis.HTMLIFrameElement {
    set src(arg: any);
    get src(): any;
    set srcdoc(arg: any);
    get srcdoc(): any;
    set name(arg: any);
    get name(): any;
    set allow(arg: any);
    get allow(): any;
    set allowFullscreen(arg: any);
    get allowFullscreen(): any;
    set referrerPolicy(arg: any);
    get referrerPolicy(): any;
    set loading(arg: any);
    get loading(): any;
}
import { HTMLElement } from "./element.js";
