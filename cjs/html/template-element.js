'use strict';
const {isNotParsing} = require('../shared/parse-from-string.js');
const {registerHTMLClass} = require('../shared/register-html-class.js');

const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLTemplateElement
 */
class HTMLTemplateElement extends HTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, 'template');
    this.content = this.ownerDocument.createDocumentFragment();
  }

  get innerHTML() {
    return this.content.childNodes.join('');
  }

  set innerHTML(value) {
    super.innerHTML = value;
    this.content.replaceChildren(
      ...this.childNodes.map(node => node.cloneNode(true))
    );
  }

  // needed only during serialization
  insertBefore(node, before) {
    if (isNotParsing())
      super.insertBefore(node, before);
    else
      this.content.appendChild(node);
    return node;
  }
}

registerHTMLClass('template', HTMLTemplateElement);

exports.HTMLTemplateElement = HTMLTemplateElement;
