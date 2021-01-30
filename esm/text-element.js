import {TEXT_NODE} from './constants.js';
import {HTMLElement} from './html/html-element.js';

const {insertBefore, toString} = HTMLElement.prototype;

export class TextElement extends HTMLElement {

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
