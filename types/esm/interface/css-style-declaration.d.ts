/**
 * @implements globalThis.CSSStyleDeclaration
 */
export class CSSStyleDeclaration extends BaseCSSStyleDeclaration implements globalThis.CSSStyleDeclaration {
    /**
     * @param {Element} [element]
     */
    constructor(element?: Element);
}
import { CSSStyleDeclaration as BaseCSSStyleDeclaration } from 'cssomnom/parse';
