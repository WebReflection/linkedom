/**
 * @implements globalThis.ShadowRoot
 * https://dom.spec.whatwg.org/#shadowroot
 */
export class ShadowRoot extends DocumentFragment implements globalThis.ShadowRoot {
    constructor(host: any, init: any);
    host: any;
    mode: any;
    delegatesFocus: any;
    slotAssignment: any;
    set innerHTML(arg: any);
    get innerHTML(): any;
}
import { DocumentFragment } from "./document-fragment.js";
