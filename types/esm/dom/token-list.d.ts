/**
 * @implements globalThis.DOMTokenList
 */
export class DOMTokenList extends Set<any> implements globalThis.DOMTokenList {
    constructor(ownerElement: any);
    get length(): number;
    get value(): string;
    /**
     * @param  {...string} tokens
     */
    add(...tokens: string[]): void;
    /**
     * @param {string} token
     */
    contains(token: string): boolean;
    /**
     * @param  {...string} tokens
     */
    remove(...tokens: string[]): void;
    /**
     * @param {string} token
     * @param {boolean?} force
     */
    toggle(token: string, force: boolean | null, ...args: any[]): boolean;
    /**
     * @param {string} token
     * @param {string} newToken
     */
    replace(token: string, newToken: string): boolean;
    /**
     * @param {string} token
     */
    supports(): boolean;
    [OWNER_ELEMENT]: any;
}
import { OWNER_ELEMENT } from '../shared/symbols.js';
