/**
 * @implements globalThis.HTMLScriptElement
 */
export class HTMLScriptElement extends TextElement implements globalThis.HTMLScriptElement {
    set type(arg: any);
    get type(): any;
    set src(arg: any);
    get src(): any;
    set defer(arg: any);
    get defer(): any;
    set crossOrigin(arg: any);
    get crossOrigin(): any;
    set nomodule(arg: any);
    get nomodule(): any;
    set referrerPolicy(arg: any);
    get referrerPolicy(): any;
    set async(arg: any);
    get async(): any;
    set text(arg: any);
    get text(): any;
}
import { TextElement } from "./text-element.js";
