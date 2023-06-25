/**
 * @implements globalThis.DocumentFragment
 */
export class DocumentFragment extends NonElementParentNode implements globalThis.DocumentFragment {
    constructor(ownerDocument: any, tagName?: string);
}
import { NonElementParentNode } from "../mixin/non-element-parent-node.js";
