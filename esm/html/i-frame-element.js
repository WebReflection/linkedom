import {registerHTMLClass} from '../shared/register-html-class.js';
import {stringAttribute} from '../shared/attributes.js';

import {HTMLElement} from './element.js';

const tagName = 'iframe';

/**
 * @implements globalThis.HTMLIFrameElement
 */
class HTMLIFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get src() { return stringAttribute.get(this, 'src'); }
  set src(value) { stringAttribute.set(this, 'src', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLIFrameElement);

export {HTMLIFrameElement};
