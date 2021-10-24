export { DOMEventTarget as EventTarget };
/**
 * @implements globalThis.EventTarget
 */
declare class DOMEventTarget implements globalThis.EventTarget {
    /**
     * @protected
     */
    protected _getParent(): any;
    addEventListener(type: any, listener: any, options: any): void;
    removeEventListener(type: any, listener: any): void;
    dispatchEvent(event: any): boolean;
}
