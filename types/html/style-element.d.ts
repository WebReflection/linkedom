/**
 * @implements globalThis.HTMLStyleElement
 */
export class HTMLStyleElement extends TextElement implements globalThis.HTMLStyleElement {
    get sheet(): any;
    [SHEET]: any;
}
import { TextElement } from "./text-element.js";
declare const SHEET: unique symbol;
export {};
