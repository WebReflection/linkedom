'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLMarqueeElement
 */
class HTMLMarqueeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'marquee') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMarqueeElement = HTMLMarqueeElement
