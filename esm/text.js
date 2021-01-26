import {escape} from 'html-escaper';

import {TEXT_NODE} from './constants.js';
import {NodeText} from './node.js';

export class Text extends NodeText {

  constructor(ownerDocument, textContent) {
    super(ownerDocument, '#text', textContent, TEXT_NODE);
  }

  toString() {
    return escape(this.textContent);
  }
}
