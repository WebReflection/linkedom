import {registerHTMLClass} from '../shared/register-html-class.js';
import {booleanAttribute, stringAttribute} from '../shared/attributes.js';

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

  get srcdoc() { return stringAttribute.get(this, "srcdoc"); }
  set srcdoc(value) { stringAttribute.set(this, "srcdoc", value); }

  get name() { return stringAttribute.get(this, "name"); }
  set name(value) { stringAttribute.set(this, "name", value); }

  get allow() { return stringAttribute.get(this, "allow"); }
  set allow(value) { stringAttribute.set(this, "allow", value); }

  get allowFullscreen() { return booleanAttribute.get(this, "allowfullscreen"); }
  set allowFullscreen(value) { booleanAttribute.set(this, "allowfullscreen", value); }
  
  get referrerPolicy() { return stringAttribute.get(this, "referrerpolicy"); }
  set referrerPolicy(value) { stringAttribute.set(this, "referrerpolicy", value); }
  
  get loading() { return stringAttribute.get(this, "loading"); }
  set loading(value) { stringAttribute.set(this, "loading", value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLIFrameElement);

export {HTMLIFrameElement};
