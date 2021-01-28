import {escape} from 'html-escaper';

import {TEXT_NODE} from './constants.js';
import {NodeText} from './node.js';

/**
 * @implements globalThis.Text
 */
export class Text extends NodeText {

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
