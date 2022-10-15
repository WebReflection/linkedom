export { DOMEventTarget as EventTarget };
declare class DOMEventTarget {
    /**
     * @protected
     */
    protected _getParent(): any;
    addEventListener(type: any, listener: any, options: any): void;
    removeEventListener(type: any, listener: any): void;
    dispatchEvent(event: any): boolean;
}
