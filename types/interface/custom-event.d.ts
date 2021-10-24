export { GlobalCustomEvent as CustomEvent };
/**
 * @implements globalThis.CustomEvent
 */
declare const GlobalCustomEvent: {
    new <T>(type: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
    prototype: CustomEvent<any>;
} | {
    new (type: any, eventInitDict?: {}): {
        detail: any;
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
        readonly BUBBLING_PHASE: number;
        readonly AT_TARGET: number;
        readonly CAPTURING_PHASE: number;
        readonly NONE: number;
        preventDefault(): void;
        composedPath(): any[];
        stopPropagation(): void;
        stopImmediatePropagation(): void;
    };
    readonly BUBBLING_PHASE: number;
    readonly AT_TARGET: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
};
