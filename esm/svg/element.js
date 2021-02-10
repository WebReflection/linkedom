import {Element} from '../interface/element.js';

/**
 * @implements globalThis.SVGElement
 */
export class SVGElement extends Element {
  constructor(ownerDocument, localName, ownerSVGElement = null) {
    super(ownerDocument, localName);
    this.ownerSVGElement = ownerSVGElement;
  }
}
