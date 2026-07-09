'use strict';
const {CONTENT, PRIVATE} = require('../shared/symbols.js');

const {registerHTMLClass} = require('../shared/register-html-class.js');

const {HTMLElement} = require('./element.js');

const {getInnerHtml} = require('../mixin/inner-html.js');
const {setInnerHtml} = require("../mixin/inner-html");

const {toString} = require('./element.js').HTMLElement.prototype;

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

  get innerHTML() {
    return getInnerHtml(this.content);
  }

    set innerHTML(html) {
      setInnerHtml(this[CONTENT], html);
  }

  get content() {
    return this[CONTENT];
  }

  toString() {
    const outerHTML = toString.call(this.cloneNode());
    return outerHTML.replace('></template>', () => `>${this.innerHTML}</template>`);
  }
}

registerHTMLClass(tagName, HTMLTemplateElement);

exports.HTMLTemplateElement = HTMLTemplateElement;
