import {HTMLElement} from './element.js';
import {registerHTMLClass} from "../shared/register-html-class.js";

const tagName = 'dl';

/**
 * @implements globalThis.HTMLDListElement
 */
export class HTMLDListElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLDListElement);
