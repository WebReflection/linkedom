/**
 * @implements globalThis.ShadowRoot
 */
export class ShadowRoot extends NonElementParentNode implements globalThis.ShadowRoot {
    constructor(ownerDocument: any);
    set innerHTML(arg: string);
    get innerHTML(): string;
}
import { NonElementParentNode } from "../mixin/non-element-parent-node.js";
