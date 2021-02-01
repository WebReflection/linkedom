import {accessorAttribute, registerHTMLClass} from '../utils.js';
import {HTMLElement} from './html-element.js';

const tagName = 'img';

/**
 * @implements globalThis.HTMLLinkElement
 */
class HTMLLinkElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */ // copy paste from img.src, already covered
  get href() { return accessorAttribute.get(this, 'href'); }
  set href(value) { accessorAttribute.set(this, 'href', value); }
  /* c8 ignore stop */

}

registerHTMLClass(tagName, HTMLLinkElement);

export {HTMLLinkElement};
