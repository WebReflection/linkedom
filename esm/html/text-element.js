import {HTMLElement} from './element.js';

const {toString} = HTMLElement.prototype;

export class TextElement extends HTMLElement {

  get innerHTML() { return this.textContent; }
  set innerHTML(html) { this.textContent = html; }

  toString() {
    const outerHTML = toString.call(this.cloneNode());
    /* c8 ignore next */
    if (outerHTML.endsWith(' />')) return outerHTML; // self-closed, as in XML documents
    // the text goes before the end tag, as attribute values can contain "></" too
    const end = outerHTML.lastIndexOf('></') + 1;
    return outerHTML.slice(0, end) + this.textContent + outerHTML.slice(end);
  }
}
