'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLTemplateElement
 */
class HTMLTemplateElement extends HTMLElement {
  constructor(ownerDocument = globalThis.document) {
    super('template', ownerDocument);
    this.content = ownerDocument.createDocumentFragment();
  }

  get innerHTML() {
    return this.content.toString();
  }

  set innerHTML(value) {
    super.innerHTML = value;
    this.content.replaceChildren(...this.childNodes);
  }
}
exports.HTMLTemplateElement = HTMLTemplateElement
