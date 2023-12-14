export const Classes: WeakMap<object, any>;
export const customElements: WeakMap<object, any>;
export function attributeChangedCallback(element: any, attributeName: any, oldValue: any, newValue: any): void;
export function connectedCallback(element: any): void;
export function disconnectedCallback(element: any): void;
/**
 * @implements globalThis.CustomElementRegistry
 */
export class CustomElementRegistry implements globalThis.CustomElementRegistry {
    /**
     * @param {Document} ownerDocument
     */
    constructor(ownerDocument: Document);
    /**
     * @private
     */
    private ownerDocument;
    /**
     * @private
     */
    private registry;
    /**
     * @private
     */
    private waiting;
    /**
     * @private
     */
    private active;
    /**
     * @param {string} localName the custom element definition name
     * @param {Function} Class the custom element **Class** definition
     * @param {object?} options the optional object with an `extends` property
     */
    define(localName: string, Class: Function, options?: object | null): void;
    /**
     * @param {Element} element
     */
    upgrade(element: Element): void;
    /**
     * @param {string} localName the custom element definition name
     */
    whenDefined(localName: string): Promise<any>;
    /**
     * @param {string} localName the custom element definition name
     * @returns {Function?} the custom element **Class**, if any
     */
    get(localName: string): Function | null;
    /**
     * @param {Function} Class custom element **Class**
     * @returns {string?} found custom element tag name or `null`
     */
    getName(Class: Function): string | null;
}
