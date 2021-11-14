'use strict';
const {Document} = require('../interface/document.js');

/**
 * @implements globalThis.JSXDocument
 */
class JSXDocument extends Document {
  constructor() { super('text/jsx+xml'); }
}
exports.JSXDocument = JSXDocument
