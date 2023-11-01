import {HTMLElement} from './element.js';
import {registerHTMLClass} from "../shared/register-html-class.js";

const tagName = 'label';

/**
 * @implements globalThis.HTMLLabelElement
 */
export class HTMLLabelElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLLabelElement);
