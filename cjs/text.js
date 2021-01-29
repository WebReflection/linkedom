'use strict';
const {escape} = require('html-escaper');

const {TEXT_NODE} = require('./constants.js');
const {NodeText} = require('./node.js');

/**
 * @implements globalThis.Text
 */
class Text extends NodeText {

  constructor(ownerDocument, textContent) {
    super(ownerDocument, '#text', textContent, TEXT_NODE);
  }

  get wholeText() {
    const text = [];
    let {_prev, _next} = this;
    while (_prev && _prev.nodeType === TEXT_NODE)
      _prev = _prev._prev;
    while (_next && _next.nodeType === TEXT_NODE)
      _next = _next._next;
    while (_prev !== _next) {
      text.push(_prev.textContent);
      _prev = _prev._next;
    }
    return text.join('');
  }

  toString() {
    return escape(this.textContent);
  }
}
exports.Text = Text
