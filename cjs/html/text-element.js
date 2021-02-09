'use strict';
const {COMMENT_NODE, ELEMENT_NODE, TEXT_NODE} = require('../shared/constants.js');
const {END, NEXT} = require('../shared/symbols.js');
const {getEnd} = require('../shared/utils.js');

const {Text} = require('../interface/text.js');

const {HTMLElement} = require('./element.js');

const {toString} = HTMLElement.prototype;

class TextElement extends HTMLElement {

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
exports.TextElement = TextElement
