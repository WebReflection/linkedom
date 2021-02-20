export { GlobalEvent as Event };
/**
 * @implements globalThis.Event
 */
declare const GlobalEvent: {
    new (type: string, eventInitDict?: EventInit): Event;
    prototype: Event;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
} | {
    new (type: any, eventInitDict?: {}): {
        type: any;
        bubbles: boolean;
        cancelable: boolean;
        eventPhase: number;
        timeStamp: number;
        defaultPrevented: boolean;
        originalTarget: any;
        returnValue: any;
        srcElement: any;
        target: any;
        readonly BUBBLING_PHASE: number;
        readonly CAPTURING_PHASE: number;
        preventDefault(): void;
        stopPropagation(): void;
        stopImmediatePropagation(): void;
    };
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
};
