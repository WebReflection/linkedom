import {HTMLElement} from './element.js';
import {registerHTMLClass} from "../shared/register-html-class.js";

const tagName = 'base';

/**
 * @implements globalThis.HTMLBaseElement
 */
export class HTMLBaseElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLBaseElement);
