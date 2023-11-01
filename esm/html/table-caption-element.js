import {HTMLElement} from './element.js';
import {registerHTMLClass} from "../shared/register-html-class.js";

const tagName = 'caption';

/**
 * @implements globalThis.HTMLTableCaptionElement
 */
export class HTMLTableCaptionElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLTableCaptionElement);
