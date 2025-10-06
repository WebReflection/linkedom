import {CONTENT, PRIVATE} from '../shared/symbols.js';

import {registerHTMLClass} from '../shared/register-html-class.js';

import {HTMLElement} from './element.js';

import {getInnerHtml} from '../mixin/inner-html.js'

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
  get content() {
    if (this.hasChildNodes() && !this[CONTENT].hasChildNodes()) {
      for (const node of this.childNodes)
        this[CONTENT].appendChild(node.cloneNode(true));
    }
    return this[CONTENT];
  }
}

registerHTMLClass(tagName, HTMLTemplateElement);

export {HTMLTemplateElement};
