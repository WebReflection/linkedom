import {registerHTMLClass} from '../shared/register-html-class.js';
import {escapeHtmlTextContent} from '../shared/text-escaper.js';

import {HTMLElement} from './element.js';

const tagName = 'title';

/**
 * @implements globalThis.HTMLTitleElement
 */
class HTMLTitleElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  get innerHTML() { return super.innerHTML; }
  set innerHTML(html) { super.innerHTML = escapeHtmlTextContent(html); }
}

registerHTMLClass(tagName, HTMLTitleElement);

export {HTMLTitleElement};
