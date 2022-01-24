/**
 * @implements globalThis.SVGElement
 */
export class SVGElement extends Element implements globalThis.SVGElement {
    constructor(ownerDocument: any, localName: any, ownerSVGElement?: any);
    ownerSVGElement: any;
    set innerHTML(arg: string);
    get innerHTML(): string;
}
import { Element } from "../interface/element.js";
