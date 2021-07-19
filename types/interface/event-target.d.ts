export { DOMEventTarget as EventTarget };
/**
 * @implements globalThis.EventTarget
 */
declare class DOMEventTarget implements globalThis.EventTarget {
    /**
     * @protected
     */
    protected _getParent(): any;
    dispatchEvent(event: any): any;
}
