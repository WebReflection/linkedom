'use strict';
const {Element} = require('../element.js');
const {Classes, customElements} = require('../custom-element-registry.js');

const empty = [];

/**
 * @implements globalThis.HTMLElement
 */
class HTMLElement extends Element {

  static get observedAttributes() { return empty; }

  constructor(ownerDocument = null, localName = '') {
    super(ownerDocument, localName);
    if (!ownerDocument) {
      const {constructor: Class, _end} = this;
      if (!Classes.has(Class))
        throw new Error('unable to initialize this Custom Element');
      const {ownerDocument, localName, options} = Classes.get(Class);
      this.ownerDocument = _end.ownerDocument = ownerDocument;
      this.localName = _end.localName = localName;
      customElements.set(this, {connected: false});
      if (options.is)
        this.setAttribute('is', options.is);
    }
  }
}
exports.HTMLElement = HTMLElement
