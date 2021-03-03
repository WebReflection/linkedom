/**
 * @implements globalThis.HTMLTextAreaElement
 */
export class HTMLTextAreaElement extends TextElement implements globalThis.HTMLTextAreaElement {
    set disabled(arg: any);
    get disabled(): any;
    set name(arg: any);
    get name(): any;
    set placeholder(arg: any);
    get placeholder(): any;
    set type(arg: any);
    get type(): any;
    set value(arg: any);
    get value(): any;
}
import { TextElement } from "./text-element.js";
