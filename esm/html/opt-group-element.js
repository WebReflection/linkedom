import {HTMLElement} from './element.js';
import {registerHTMLClass} from "../shared/register-html-class.js";

const tagName = 'optgroup';

/**
 * @implements globalThis.HTMLOptGroupElement
 */
export class HTMLOptGroupElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLOptGroupElement);
