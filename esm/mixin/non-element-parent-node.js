// https://dom.spec.whatwg.org/#interface-nonelementparentnode
// Document, DocumentFragment

import {ELEMENT_NODE} from '../shared/constants.js';
import {END, NEXT} from '../shared/symbols.js';
import {nonElementAsJSON} from '../shared/jsdon.js';

import {ParentNode} from './parent-node.js';

export class NonElementParentNode extends ParentNode {
  getElementById(id) {
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && next.id === id)
        return next;
      next = next[NEXT];
    }
    return null;
  }

  cloneNode(deep) {
    const {ownerDocument, constructor} = this;
    const nonEPN = new constructor(ownerDocument);
    if (deep) {
      const {[END]: end} = nonEPN;
      for (const node of this.childNodes)
        nonEPN.insertBefore(node.cloneNode(deep), end);
    }
    return nonEPN; 
  }

  toString() {
    const {childNodes, localName} = this;
    return `<${localName}>${childNodes.join('')}</${localName}>`;
  }

  toJSON() {
    const json = [];
    nonElementAsJSON(this, json);
    return json;
  }
}
