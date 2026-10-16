'use strict';
const {HTMLElement} = require('./element.js');

const {toString} = HTMLElement.prototype;

class TextElement extends HTMLElement {

  get innerHTML() { return this.textContent; }
  set innerHTML(html) { this.textContent = html; }

  toString() {
    const outerHTML = toString.call(this.cloneNode());
    // the text goes before the end tag: attribute values can contain "><" too
    const end = outerHTML.lastIndexOf('></') + 1;
    /* c8 ignore next */
    if (!end) return outerHTML; // self-closed, as in XML documents
    return outerHTML.slice(0, end) + this.textContent + outerHTML.slice(end);
  }
}
exports.TextElement = TextElement
