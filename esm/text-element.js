import {COMMENT_NODE, ELEMENT_NODE, TEXT_NODE} from './constants.js';
import {HTMLElement} from './html/html-element.js';

const {toString} = HTMLElement.prototype;

export class TextElement extends HTMLElement {

  get innerHTML() { return this.textContent; }
  set innerHTML(html) { this.textContent = html; }

  get textContent() {
    let {_next, _end} = this;
    const output = [];
    while (_next !== _end) {
      switch (_next.nodeType) {
        case TEXT_NODE:
        case ELEMENT_NODE:
          output.push(_next.textContent);
          break;
        case COMMENT_NODE:
          output.push(_next.toString());
          break;
      }
      _next = _next._next;
    }
    return output.join('');
  }

  set textContent(content) {
    this.replaceChildren();
    this.insertBefore(this.ownerDocument.createTextNode(content), this._end);
  }

  toString() {
    const outerHTML = toString.call(this.cloneNode());
    return outerHTML.replace(/></, `>${this.textContent}<`);
  }
}
