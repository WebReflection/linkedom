'use strict';
const {HTMLElement} = require('./html-element.js');

const update = ({content, childNodes}) => {
  content.replaceChildren(...childNodes);
};

/**
 * @implements globalThis.HTMLTemplateElement
 */
class HTMLTemplateElement extends HTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, 'template');
    this.content = this.ownerDocument.createDocumentFragment();
    update(this);
  }

  get innerHTML() {
    return this.content.toString();
  }

  set innerHTML(value) {
    super.innerHTML = value;
    update(this);
  }
}
exports.HTMLTemplateElement = HTMLTemplateElement
