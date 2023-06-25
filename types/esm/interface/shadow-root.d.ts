/**
 * @implements globalThis.ShadowRoot
 * https://dom.spec.whatwg.org/#shadowroot
 */
export class ShadowRoot extends DocumentFragment implements globalThis.ShadowRoot {
    constructor(host: Element);
    readonly host: Element;
    set innerHTML(arg: any);
    get innerHTML(): any;
    readonly mode: ShadowRootMode;
    readonly delegatesFocus: boolean;
    readonly slotAssignment: SlotAssignmentMode;

    // TODO: onslotchange: EventHandler;
}
import { DocumentFragment } from "./document-fragment.js";
