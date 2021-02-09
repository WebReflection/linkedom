import {registerHTMLClass} from '../shared/register-html-class.js';

import {TextElement} from './text-element.js';

const tagName = 'title';

/**
 * @implements globalThis.HTMLTitleElement
 */
class HTMLTitleElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLTitleElement);

export {HTMLTitleElement};
