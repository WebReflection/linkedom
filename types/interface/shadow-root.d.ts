/**
 * @implements globalThis.ShadowRoot
 */
export class ShadowRoot extends NonElementParentNode implements globalThis.ShadowRoot {
    constructor(ownerDocument: any);
    set innerHTML(arg: any);
    get innerHTML(): any;
}
import { NonElementParentNode } from "../mixin/non-element-parent-node.js";
