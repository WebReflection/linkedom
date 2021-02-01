import {stringAttribute, registerHTMLClass} from '../utils.js';
import {HTMLElement} from './html-element.js';

const tagName = 'a';

/**
 * @implements globalThis.HTMLAnchorElement
 */
class HTMLAnchorElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */ // copy paste from img.src, already covered
  get href() { return stringAttribute.get(this, 'href'); }
  set href(value) { stringAttribute.set(this, 'href', value); }

  /* c8 ignore stop */

}

registerHTMLClass(tagName, HTMLAnchorElement);

export {HTMLAnchorElement};
