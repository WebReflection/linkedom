import {CONTENT, PRIVATE} from '../shared/symbols.js';

import {registerHTMLClass} from '../shared/register-html-class.js';

import {HTMLElement} from './element.js';

import {getInnerHtml, setInnerHtml} from '../mixin/inner-html.js';

const {toString} = HTMLElement.prototype;

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

export {HTMLTemplateElement};
