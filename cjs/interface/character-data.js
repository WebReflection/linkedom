'use strict';
// https://dom.spec.whatwg.org/#interface-characterdata

const {NEXT, PREV, VALUE} = require('../shared/symbols.js');
const {String} = require('../shared/utils.js');
const {isConnected, parentElement, previousSibling, nextSibling} = require('../shared/node.js');
const {characterDataAsJSON} = require('../shared/jsdon.js');

const {previousElementSibling, nextElementSibling} = require('../mixin/non-document-type-child-node.js');
const {before, after, replaceWith, remove} = require('../mixin/child-node.js');

const {Node} = require('./node.js');

/**
 * @implements globalThis.CharacterData
 */
class CharacterData extends Node {

  constructor(ownerDocument, localName, nodeType, data) {
    super(ownerDocument, localName, nodeType);
    this[VALUE] = String(data);
  }

  // <Mixins>
  get isConnected() { return isConnected(this); }
  get parentElement() { return parentElement(this); }
  get previousSibling() { return previousSibling(this); }
  get nextSibling() { return nextSibling(this); }

  get previousElementSibling() { return previousElementSibling(this); }
  get nextElementSibling() { return nextElementSibling(this); }

  before(...nodes) { before(this, nodes); }
  after(...nodes) { after(this, nodes); }
  replaceWith(...nodes) { replaceWith(this, nodes); }
  remove() { remove(this[PREV], this, this[NEXT]); }
  // </Mixins>

  get nodeValue() { return this.textContent; }
  set nodeValue(value) {
    this.textContent = value;
  }

  get textContent() { return this[VALUE]; }
  set textContent(value) {
    this[VALUE] = value;
  }

  // CharacterData only
  /* c8 ignore start */
  get data() { return this.textContent; }
  get length() { return this.textContent.length; }

  substringData(offset, count) {
    return this.textContent.substr(offset, count);
  }

  appendData(data) {
    this.textContent += data;
  }

  insertData(offset, data) {
    const {textContent: t} = this;
    this.textContent = t.slice(0, offset) + data + t.slice(offset);
  }

  deleteData(offset, count) {
    const {textContent: t} = this;
    this.textContent = t.slice(0, offset) + t.slice(offset + count);
  }

  replaceData(offset, count, data) {
    const {textContent: t} = this;
    this.textContent = t.slice(0, offset) + data + t.slice(offset + count);
  }
  /* c8 ignore stop */

  toJSON() {
    const json = [];
    characterDataAsJSON(this, json);
    return json;
  }
}
exports.CharacterData = CharacterData
