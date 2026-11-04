'use strict';
const {TEXT_NODE} = require('../shared/constants.js');
const {VALUE} = require('../shared/symbols.js');
const {escape} = require('../shared/text-escaper.js');

const {CharacterData} = require('./character-data.js');

/**
 * @implements globalThis.Text
 */
class Text extends CharacterData {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#text', TEXT_NODE, data);
  }

  get wholeText() {
    let {previousSibling, nextSibling} = this;
    let text = '';
    while (previousSibling) {
      if (previousSibling.nodeType === TEXT_NODE)
        text = previousSibling[VALUE] + text;
      else
        break;
      previousSibling = previousSibling.previousSibling;
    }
    text += this[VALUE];
    while (nextSibling) {
      if (nextSibling.nodeType === TEXT_NODE)
        text += nextSibling[VALUE];
      else
        break;
      nextSibling = nextSibling.nextSibling;
    }
    return text;
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new Text(ownerDocument, data);
  }

  toString() { return escape(this[VALUE]); }
}
exports.Text = Text
