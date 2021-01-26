'use strict';
const {escape} = require('html-escaper');

const {TEXT_NODE} = require('./constants.js');
const {NodeText} = require('./node.js');

class Text extends NodeText {

  constructor(ownerDocument, textContent) {
    super(ownerDocument, '#text', textContent, TEXT_NODE);
  }

  toString() {
    return escape(this.textContent);
  }
}
exports.Text = Text
