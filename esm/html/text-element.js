import {COMMENT_NODE, ELEMENT_NODE, TEXT_NODE} from '../shared/constants.js';
import {END, NEXT} from '../shared/symbols.js';
import {getEnd} from '../shared/utils.js';

import {Text} from '../interface/text.js';

import {HTMLElement} from './element.js';

const {toString} = HTMLElement.prototype;

export class TextElement extends HTMLElement {

  get innerHTML() { return this.textContent; }
  set innerHTML(html) { this.textContent = html; }

  get textContent() {
    let {[NEXT]: next, [END]: end} = this;
    const output = [];
    while (next !== end) {
      switch (next.nodeType) {
        case TEXT_NODE:
          output.push(next.textContent);
          break;
        case ELEMENT_NODE:
          output.push(next.textContent);
          next = getEnd(next);
          break;
        case COMMENT_NODE:
          output.push(next.toString());
          break;
      }
      next = next[NEXT];
    }
    return output.join('');
  }

  set textContent(content) {
    this.replaceChildren();
    this.insertBefore(new Text(this.ownerDocument, content), this[END]);
  }

  toString() {
    const outerHTML = toString.call(this.cloneNode());
    return outerHTML.replace(/></, `>${this.textContent}<`);
  }
}
