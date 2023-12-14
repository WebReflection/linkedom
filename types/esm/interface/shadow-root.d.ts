/**
 * @implements globalThis.ShadowRoot
 */
export class ShadowRoot extends NonElementParentNode implements globalThis.ShadowRoot {
    constructor(host: any);
    host: any;
    set innerHTML(html: string);
    get innerHTML(): string;
}
import { NonElementParentNode } from '../mixin/non-element-parent-node.js';
