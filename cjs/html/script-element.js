'use strict';
const { booleanAttribute, stringAttribute } = require('../shared/attributes.js');
const { registerHTMLClass } = require('../shared/register-html-class.js');

const { TextElement } = require('./text-element.js');

const tagName = 'script';

/**
 * @implements globalThis.HTMLScriptElement
 */
class HTMLScriptElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  get type() {
    return stringAttribute.get(this, 'type');
  }
  set type(value) {
    stringAttribute.set(this, 'type', value);
  }

  get src() {
    return stringAttribute.get(this, 'src');
  }
  set src(value) {
    stringAttribute.set(this, 'src', value);
  }

  get defer() {
    return booleanAttribute.get(this, 'defer');
  }

  set defer(value) {
    booleanAttribute.set(this, 'defer', value);
  }

  get crossOrigin() {
    return stringAttribute.get(this, 'crossorigin');
  }
  set crossOrigin(value) {
    stringAttribute.set(this, 'crossorigin', value);
  }

  get nomodule() {
    return booleanAttribute.get(this, 'nomodule');
  }
  set nomodule(value) {
    booleanAttribute.set(this, 'nomodule', value);
  }

  get referrerPolicy() {
    return stringAttribute.get(this, 'referrerpolicy');
  }
  set referrerPolicy(value) {
    stringAttribute.set(this, 'referrerpolicy', value);
  }

  get nonce() {
    return stringAttribute.get(this, 'nonce');
  }
  set nonce(value) {
    stringAttribute.set(this, 'nonce', value);
  }

  get async() {
    return booleanAttribute.get(this, 'async');
  }
  set async(value) {
    booleanAttribute.set(this, 'async', value);
  }

  get text() { return this.textContent; }
  set text(content) { this.textContent = content; }
}

registerHTMLClass(tagName, HTMLScriptElement);

exports.HTMLScriptElement = HTMLScriptElement;
