import {TEXT_NODE} from '../shared/constants.js';
import {VALUE, MIME} from '../shared/symbols.js';
import {escape} from '../shared/text-escaper.js';

import {CharacterData} from './character-data.js';

/**
 * @implements globalThis.Text
 */
export class Text extends CharacterData {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#text', TEXT_NODE, data);
  }

  get wholeText() {
    const text = [];
    let {previousSibling, nextSibling} = this;
    while (previousSibling) {
      if (previousSibling.nodeType === TEXT_NODE)
        text.unshift(previousSibling[VALUE]);
      else
        break;
      previousSibling = previousSibling.previousSibling;
    }
    text.push(this[VALUE]);
    while (nextSibling) {
      if (nextSibling.nodeType === TEXT_NODE)
        text.push(nextSibling[VALUE]);
      else
        break;
      nextSibling = nextSibling.nextSibling;
    }
    return text.join('');
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new Text(ownerDocument, data);
  }

  toString() { 
    const {ownerDocument} = this;
    if (ownerDocument[MIME].escapeHtmlEntities) {
      return escape(this[VALUE]);
    }
    return this[VALUE];
  }
}