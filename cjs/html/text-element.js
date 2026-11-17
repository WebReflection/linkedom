'use strict';
const {HTMLElement} = require('./element.js');

const {toString} = HTMLElement.prototype;

class TextElement extends HTMLElement {

  get innerHTML() { return this.textContent; }
  set innerHTML(html) { this.textContent = html; }

  toString() {
    const outerHTML = toString.call(this.cloneNode());
    const at = outerHTML.lastIndexOf('><');
    return `${outerHTML.slice(0, at + 1)}${this.textContent}${outerHTML.slice(at + 1)}`;
  }
}
exports.TextElement = TextElement
