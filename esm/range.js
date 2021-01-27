import {getEnd} from './utils.js';

// https://dom.spec.whatwg.org/#concept-live-range

// WARNING: this is a Range subset from basicHTML
// https://github.com/WebReflection/basicHTML/blob/master/src/Range.js


const deleteContents = ({_start, _end}, fragment = null) => {
  _start._prev._next = _end._next;
  _end._next._prev = _start._prev;
  do {
    const end = getEnd(_start);
    const next = end === _end ? end : end._next;
    if (fragment)
      fragment.insertBefore(_start, fragment._end);
    else
      _start.remove();
    _start = next;
  } while (_start !== _end);
};

/**
 * @implements globalThis.Range
 */
export class Range {
  constructor() {
    this._start = null;
    this._end = null;
  }

  /* c8 ignore start */
  setStart(node, offset) {
    this._start = node.childNodes[offset];
  }

  setEnd(node, offset) {
    this._end = getEnd(node.childNodes[offset]);
  }

  setStartBefore(node) {
    this._start = node;
  }

  setStartAfter(node) {
    this._start = node.nextSibling;
  }

  setEndBefore(node) {
    this._end = getEnd(node.previousSibling);
  }

  setEndAfter(node) {
    this._end = getEnd(node);
  }
  /* c8 ignore stop */

  cloneContents() {
    let {_start, _end} = this;
    const fragment = _start.ownerDocument.createDocumentFragment();
    while (_start !== _end) {
      fragment.insertBefore(_start.cloneNode(true), fragment._end);
      _start = getEnd(_start);
      if (_start !== _end)
        _start = _start._next;
    }
    return fragment;
  }

  deleteContents() {
    deleteContents(this);
  }

  extractContents() {
    const fragment = this._start.ownerDocument.createDocumentFragment();
    deleteContents(this, fragment);
    return fragment;
  }

  cloneRange() {
    const range = new Range;
    range._start = this._start;
    range._end = this._end;
    return range;
  }
}
