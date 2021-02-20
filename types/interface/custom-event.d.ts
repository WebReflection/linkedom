export { GlobalCustomEvent as CustomEvent };
/**
 * @implements globalThis.CustomEvent
 */
declare const GlobalCustomEvent: {
    new (type: any, eventInitDict?: {}): {
        detail: any;
    };
};
