'use strict';
const {booleanAttribute, registerHTMLClass} = require('../utils.js');
const {TextElement} = require('../text-element.js');

const tagName = 'textarea';

/**
 * @implements globalThis.HTMLTextAreaElement
 */
class HTMLTextAreaElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  get disabled() {
    return booleanAttribute.get(this, 'disabled');
  }

  set disabled(value) {
    booleanAttribute.set(this, 'disabled', value);
  }
}
exports.HTMLTextAreaElement = HTMLTextAreaElement

registerHTMLClass(tagName, HTMLTextAreaElement);

exports.HTMLTextAreaElement = HTMLTextAreaElement;
