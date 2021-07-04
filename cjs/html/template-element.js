'use strict';
const {CONTENT, PRIVATE} = require('../shared/symbols.js');

const {registerHTMLClass} = require('../shared/register-html-class.js');

const {HTMLElement} = require('./element.js');

const tagName = 'template';

/**
 * @implements globalThis.HTMLTemplateElement
 */
class HTMLTemplateElement extends HTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, tagName);
    const content = this.ownerDocument.createDocumentFragment();
    (this[CONTENT] = content)[PRIVATE] = this;
  }

  get content() {
    if (this.hasChildNodes() && !this[CONTENT].hasChildNodes()) {
      for (const node of this.childNodes)
        this[CONTENT].appendChild(node.cloneNode(true));
    }
    return this[CONTENT];
  }
}

registerHTMLClass(tagName, HTMLTemplateElement);

exports.HTMLTemplateElement = HTMLTemplateElement;
