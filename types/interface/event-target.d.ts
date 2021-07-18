export { DOMEventTarget as EventTarget };
/**
 * @implements globalThis.EventTarget
 */
declare class DOMEventTarget implements globalThis.EventTarget {
    getParent(): any;
    dispatchEvent(event: any): boolean;
}
