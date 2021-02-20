// https://dom.spec.whatwg.org/#interface-characterdata

import {NEXT, PREV, VALUE} from '../shared/symbols.js';
import {String} from '../shared/utils.js';
import {isConnected, parentElement, previousSibling, nextSibling} from '../shared/node.js';
import {characterDataAsJSON} from '../shared/jsdon.js';

import {previousElementSibling, nextElementSibling} from '../mixin/non-document-type-child-node.js';
import {before, after, replaceWith, remove} from '../mixin/child-node.js';

import {Node} from './node.js';

/**
 * @implements globalThis.CharacterData
 */
export class CharacterData extends Node {

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

  get textContent() { return this[VALUE]; }
  set textContent(value) {
    // TODO: MutationObserver here should likely trigger
    //       if characterData was observed
    this[VALUE] = String(value);
  }

  // CharacterData only
  /* c8 ignore start */
  get data() { return this.textContent; }
  set data(value) { this.textContent = value; }

  get nodeValue() { return this.textContent; }
  set nodeValue(value) { this.textContent = value; }

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
