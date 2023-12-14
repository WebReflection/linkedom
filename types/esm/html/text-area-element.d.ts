/**
 * @implements globalThis.HTMLTextAreaElement
 */
export class HTMLTextAreaElement extends TextElement implements globalThis.HTMLTextAreaElement {
    set disabled(value: any);
    get disabled(): any;
    set name(value: any);
    get name(): any;
    set placeholder(value: any);
    get placeholder(): any;
    set type(value: any);
    get type(): any;
    set value(content: string);
    get value(): string;
}
import { TextElement } from './text-element.js';
