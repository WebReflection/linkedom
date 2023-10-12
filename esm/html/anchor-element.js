import {registerHTMLClass} from '../shared/register-html-class.js';
import {stringAttribute, urlAttribute} from '../shared/attributes.js';

import {HTMLElement} from './element.js';

const tagName = 'a';

/**
 * @implements globalThis.HTMLAnchorElement
 */
class HTMLAnchorElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */ // copy paste from img.src, already covered
  get href() { return urlAttribute.get(this, 'href'); }
  set href(value) { urlAttribute.set(this, 'href', value); }

  get download() { return encodeURI(stringAttribute.get(this, 'download')); }
  set download(value) { stringAttribute.set(this, 'download', decodeURI(value)); }

  get target() { return stringAttribute.get(this, 'target'); }
  set target(value) { stringAttribute.set(this, 'target', value); }

  get type() { return stringAttribute.get(this, 'type'); }
  set type(value) { stringAttribute.set(this, 'type', value); }
  /* c8 ignore stop */

}

registerHTMLClass(tagName, HTMLAnchorElement);

export {HTMLAnchorElement};
