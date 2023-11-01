import {HTMLElement} from './element.js';
import {registerHTMLClass} from "../shared/register-html-class.js";

const tagName = 'fieldset';

/**
 * @implements globalThis.HTMLFieldSetElement
 */
export class HTMLFieldSetElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLFieldSetElement);
