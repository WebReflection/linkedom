/**
 * @implements globalThis.SVGElement
 */
export class SVGElement extends Element implements globalThis.SVGElement {
    constructor(ownerDocument: any, localName: any, ownerSVGElement?: any);
    ownerSVGElement: any;
}
import { Element } from '../interface/element.js';
