export function attributeChangedCallback(element: any, attributeName: any, oldValue: any): void;
export function moCallback(element: any, parentNode: any): void;
export class MutationObserverClass {
    constructor(ownerDocument: any);
    observers: Set<any>;
    active: boolean;
    /**
     * @implements globalThis.MutationObserver
     */
    class: {
        new (callback: any): {
            /**
             * @private
             */
            callback: any;
            /**
             * @private
             */
            nodes: Map<any, any>;
            /**
             * @private
             */
            records: any[];
            /**
             * @private
             */
            scheduled: boolean;
            disconnect(): void;
            /**
             * @param {Element} target
             * @param {MutationObserverInit} options
             */
            observe(target: Element, options?: MutationObserverInit): void;
            /**
             * @returns {MutationRecord[]}
             */
            takeRecords(): MutationRecord[];
        };
    };
}
