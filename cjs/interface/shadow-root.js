'use strict';
const {DOCUMENT_FRAGMENT_NODE} = require('../shared/constants.js');
const {getInnerHtml, setInnerHtml} = require('../mixin/inner-html.js');
const {NonElementParentNode} = require('../mixin/non-element-parent-node.js');

/**
 * @implements globalThis.ShadowRoot
 */
class ShadowRoot extends NonElementParentNode {
  constructor(host) {
    super(host.ownerDocument, '#shadow-root', DOCUMENT_FRAGMENT_NODE);
    this.host = host;
  }

  get innerHTML() {
    return getInnerHtml(this);
  }
  set innerHTML(html) {
    setInnerHtml(this, html);
  }
}
exports.ShadowRoot = ShadowRoot
