'use strict';
const {TEXT_NODE} = require('./constants.js');
const {HTMLElement} = require('./html/html-element.js');

const {insertBefore, toString} = HTMLElement.prototype;

class TextElement extends HTMLElement {

  get innerHTML() { return this.textContent; }
  set innerHTML(html) { this.textContent = html; }

  insertBefore(node) {
    this.replaceChildren();
    insertBefore.call(
      this,
      node.nodeType === TEXT_NODE ?
        node : this.ownerDocument.createTextNode(node)
    );
    node.parentNode = this;
    return node;
  }

  toString() {
    const outerHTML = toString.call(this.cloneNode());
    return outerHTML.replace(/></, `>${this.textContent}<`);
  }
}
exports.TextElement = TextElement
