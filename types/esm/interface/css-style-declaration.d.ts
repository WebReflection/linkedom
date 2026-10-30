/**
 * @implements globalThis.CSSStyleDeclaration
 */
export class CSSStyleDeclaration extends Map<any, any> implements globalThis.CSSStyleDeclaration {
    constructor(element: any);
    set cssText(value: string);
    get cssText(): string;
    getPropertyValue(name: any): any;
    setProperty(name: any, value: any): void;
    removeProperty(name: any): void;
    [Symbol.iterator](): {
        next(): {
            done: boolean;
            value: any;
        };
    };
    get [PRIVATE](): this;
}
import { PRIVATE } from '../shared/symbols.js';
