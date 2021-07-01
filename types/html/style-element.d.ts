/**
 * @implements globalThis.HTMLStyleElement
 */
export class HTMLStyleElement extends TextElement implements globalThis.HTMLStyleElement {
    get sheet(): any;
    [SHEET]: any;
}
import { TextElement } from "./text-element.js";
import { SHEET } from "../shared/symbols.js";
