import {HTMLElement} from './element.js';
import {registerHTMLClass} from "../shared/register-html-class.js";

const tagName = 'legend';

/**
 * @implements globalThis.HTMLLegendElement
 */
export class HTMLLegendElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLLegendElement);
