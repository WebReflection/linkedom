/**
 * @implements globalThis.ShadowRoot
 */
export class ShadowRoot extends NonElementParentNode implements globalThis.ShadowRoot {
    constructor(ownerDocument: any);
}
import { NonElementParentNode } from "../mixin/non-element-parent-node.js";
