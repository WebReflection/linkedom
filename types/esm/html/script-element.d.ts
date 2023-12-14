/**
 * @implements globalThis.HTMLScriptElement
 */
export class HTMLScriptElement extends TextElement implements globalThis.HTMLScriptElement {
    set type(value: any);
    get type(): any;
    set src(value: any);
    get src(): any;
    set defer(value: any);
    get defer(): any;
    set crossOrigin(value: any);
    get crossOrigin(): any;
    set nomodule(value: any);
    get nomodule(): any;
    set referrerPolicy(value: any);
    get referrerPolicy(): any;
    set async(value: any);
    get async(): any;
    set text(content: string);
    get text(): string;
}
import { TextElement } from './text-element.js';
