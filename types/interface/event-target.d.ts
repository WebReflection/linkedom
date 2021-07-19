export { DOMEventTarget as EventTarget };
/**
 * @implements globalThis.EventTarget
 */
declare class DOMEventTarget implements globalThis.EventTarget {
    _getParent(): any;
    dispatchEvent(event: any): any;
}
