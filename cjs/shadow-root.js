'use strict';
const {Fragment} = require('./fragment.js');

/**
 * @implements globalThis.ShadowRoot
 */
class ShadowRoot extends Fragment {

  constructor(ownerDocument) {
    super(ownerDocument, '#shadow-root');
  }

}
exports.ShadowRoot = ShadowRoot
