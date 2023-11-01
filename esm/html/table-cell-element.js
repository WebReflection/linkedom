import {HTMLElement} from './element.js';
import {registerHTMLClass} from "../shared/register-html-class.js";

const tagName = 'td';

/**
 * @implements globalThis.HTMLTableCellElement
 */
export class HTMLTableCellElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLTableCellElement);
