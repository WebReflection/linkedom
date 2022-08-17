import {HTMLElement} from './element.js';
import {urlAttribute} from '../shared/attributes.js';

/**
 * @implements globalThis.HTMLAreaElement
 */
export class HTMLAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'area') {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get href() { return urlAttribute.get(this, 'href'); }
  set href(value) { urlAttribute.set(this, 'href', value); }
  /* c8 ignore stop */
}
