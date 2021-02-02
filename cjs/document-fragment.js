'use strict';
const {Fragment} = require('./fragment.js');

/**
 * @implements globalThis.DocumentFragment
 */
class DocumentFragment extends Fragment {

  constructor(ownerDocument) {
    super(ownerDocument, '#document-fragment');
  }

}
exports.DocumentFragment = DocumentFragment
