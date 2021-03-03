/**
 * @implements globalThis.CSSStyleDeclaration
 */
export class CSSStyleDeclaration extends Map<any, any> implements globalThis.CSSStyleDeclaration {
    constructor(element: any);
    set cssText(arg: string);
    get cssText(): string;
    get [PRIVATE](): CSSStyleDeclaration;
}
import { PRIVATE } from "../shared/symbols.js";
