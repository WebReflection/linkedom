'use strict';
const {Element} = require('../element.js');
const {classes} = require('../custom-element-registry.js');

const empty = [];

/**
 * @implements globalThis.HTMLElement
 */
class HTMLElement extends Element {

  static get observedAttributes() { return empty; }

  constructor(ownerDocument = null, localName = '') {
    super(ownerDocument, localName);
    this._custom = false;
    if (!ownerDocument) {
      const {constructor: Class} = this;
      if (!classes.has(Class))
        throw new Error('unable to initialize this Custom Element');
      const {ownerDocument, localName, options} = classes.get(Class);
      this.ownerDocument = this._end.ownerDocument = ownerDocument;
      this.localName = this._end.localName = localName;
      this._custom = true;
      if (options.is)
        this.setAttribute('is', options.is);
    }
  }
}
exports.HTMLElement = HTMLElement
