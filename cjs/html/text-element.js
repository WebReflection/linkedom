'use strict';
const {HTMLElement} = require('./element.js');

const {toString} = HTMLElement.prototype;

class TextElement extends HTMLElement {

  get innerHTML() { return this.textContent; }
  set innerHTML(html) { this.textContent = html; }

  toString() {
    const outerHTML = toString.call(this.cloneNode());
    // Use `join` in here to prevent unexpected special replacement patterns
    // See also 
    // https://github.com/WebReflection/linkedom/issues/292
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement
    return outerHTML.split('><').join(`>${this.textContent}<`);
  }
}
exports.TextElement = TextElement
