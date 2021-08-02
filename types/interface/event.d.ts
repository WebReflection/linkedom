export { GlobalEvent as Event };
/**
 * @implements globalThis.Event
 */
declare class GlobalEvent implements globalThis.Event {
    static get BUBBLING_PHASE(): number;
    static get AT_TARGET(): number;
    static get CAPTURING_PHASE(): number;
    static get NONE(): number;
    constructor(type: any, eventInitDict?: {});
    type: any;
    bubbles: boolean;
    cancelBubble: boolean;
    _stopImmediatePropagationFlag: boolean;
    cancelable: boolean;
    eventPhase: number;
    timeStamp: number;
    defaultPrevented: boolean;
    originalTarget: any;
    returnValue: any;
    srcElement: any;
    target: any;
    _path: any[];
    get BUBBLING_PHASE(): number;
    get AT_TARGET(): number;
    get CAPTURING_PHASE(): number;
    get NONE(): number;
    preventDefault(): void;
    composedPath(): any[];
    stopPropagation(): void;
    stopImmediatePropagation(): void;
}
