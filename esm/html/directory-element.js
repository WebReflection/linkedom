import {HTMLElement} from './element.js';
import {registerHTMLClass} from "../shared/register-html-class.js";

const tagName = 'dir';

/**
 * @implements globalThis.HTMLDirectoryElement
 */
export class HTMLDirectoryElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLDirectoryElement);
