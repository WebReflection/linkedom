import {HTMLElement} from './element.js';
import {registerHTMLClass} from "../shared/register-html-class.js";

const tagName = 'frameset';

/**
 * @implements globalThis.HTMLFrameSetElement
 */
export class HTMLFrameSetElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLFrameSetElement);
