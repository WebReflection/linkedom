import {registerHTMLClass} from '../shared/register-html-class.js';

import {TextElement} from './text-element.js';

const tagName = 'style';

/**
 * @implements globalThis.HTMLStyleElement
 */
class HTMLStyleElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLStyleElement);

export {HTMLStyleElement};
