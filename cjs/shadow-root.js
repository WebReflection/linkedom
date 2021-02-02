'use strict';
const {Fragment} = require('./fragment.js');

/**
 * @implements globalThis.ShadowRoot
 */
class ShadowRoot extends Fragment {

  constructor(ownerDocument) {
    super(ownerDocument, '#shadow-root');
  }

  toString() {
    const {localName} = this;
    return `<${localName}>${this.childNodes.join('')}</${localName}>`
  }
}
exports.ShadowRoot = ShadowRoot
