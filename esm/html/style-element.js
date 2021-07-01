import {parse} from 'cssom';

import {registerHTMLClass} from '../shared/register-html-class.js';
import {SHEET} from '../shared/symbols.js';

import {TextElement} from './text-element.js';

const tagName = 'style';

/**
 * @implements globalThis.HTMLStyleElement
 */
class HTMLStyleElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
    this[SHEET] = null;
  }

  get sheet() {
    const sheet = this[SHEET];
    if (sheet !== null) {
      return sheet;
    }
    return this[SHEET] = parse(this.textContent);
  }

  get innerHTML() {
    return super.innerHTML || '';
  }
  set innerHTML(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
  get innerText() {
    return super.innerText || '';
  }
  set innerText(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
  get textContent() {
    return super.textContent || '';
  }
  set textContent(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
}

registerHTMLClass(tagName, HTMLStyleElement);

export {HTMLStyleElement};
