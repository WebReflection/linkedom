'use strict';
const {Element} = require('./element.js');

/**
 * @implements globalThis.SVGElement
 */
class SVGElement extends Element {
  constructor(ownerDocument, localName, ownerSVGElement = null) {
    super(ownerDocument, localName);
    this.ownerSVGElement = ownerSVGElement;
  }
}
exports.SVGElement = SVGElement
