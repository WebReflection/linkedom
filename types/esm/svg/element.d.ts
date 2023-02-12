/**
 * @implements globalThis.SVGElement
 */
export class SVGElement extends Element implements globalThis.SVGElement {
    ownerSVGElement: any;
    set innerHTML(arg: string);
    get innerHTML(): string;
}
import { Element } from "../interface/element.js";
