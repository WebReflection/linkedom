'use strict';
const {DOCUMENT_FRAGMENT_NODE} = require('../shared/constants.js');
const {getInnerHtml, setInnerHtml} = require('../mixin/inner-html.js');
const {DocumentFragment} = require('./document-fragment.js');

/**
 * @implements globalThis.ShadowRoot
 * https://dom.spec.whatwg.org/#shadowroot
 */
class ShadowRoot extends DocumentFragment {
  constructor(host, init) {
    super(host.ownerDocument, '#shadow-root', DOCUMENT_FRAGMENT_NODE);
    this.host = host;
    this.mode = init.mode;
    this.delegatesFocus = init.delegatesFocus ?? false;
    this.slotAssignment = init.slotAssignment ?? "named";
  }

  get innerHTML() {
    return getInnerHtml(this);
  }
  set innerHTML(html) {
    setInnerHtml(this, html);
  }
}
exports.ShadowRoot = ShadowRoot
