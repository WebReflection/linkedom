import {registerHTMLClass} from '../shared/register-html-class.js';

import {TextElement} from './text-element.js';

const tagName = 'script';

/**
 * @implements globalThis.HTMLScriptElement
 */
class HTMLScriptElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLScriptElement);

export {HTMLScriptElement};
