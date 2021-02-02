import {numericAttribute, stringAttribute, registerHTMLClass} from '../utils.js';
import {HTMLElement} from './html-element.js';

const tagName = 'img';

/**
 * @implements globalThis.HTMLImageElement
 */
class HTMLImageElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  get src() { return stringAttribute.get(this, 'src'); }
  set src(value) { stringAttribute.set(this, 'src', value); }

  /* c8 ignore start */
  get width() { return numericAttribute.get(this, 'width'); }
  set width(value) { numericAttribute.set(this, 'width', value); }
  
  get height() { return numericAttribute.get(this, 'height'); }
  set height(value) { numericAttribute.set(this, 'height', value); }

  get srcset() { return stringAttribute.get(this, 'srcset'); }
  set srcset(value) { stringAttribute.set(this, 'srcset', value); }

  get sizes() { return stringAttribute.get(this, 'sizes'); }
  set sizes(value) { stringAttribute.set(this, 'sizes', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLImageElement);

export {HTMLImageElement};
